package client

import (
	"context"
	"crypto/tls"
	"crypto/x509"
	"fmt"
	"os"
	"time"

	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_zap "github.com/grpc-ecosystem/go-grpc-middleware/logging/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/backoff"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/keepalive"

	v1 "github.com/metal-stack-cloud/api/go/api/v1"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

// GRPCScheme the scheme to talk to the api endpoint
type GRPCScheme string

const (
	// GRPCS defines https protocol for the communication
	GRPCS GRPCScheme = "grpcs"
)

// DialConfig is the configuration to create a api-server connection
type DialConfig struct {
	Endpoint    string
	Scheme      GRPCScheme
	Token       string
	Credentials *Credentials
	Log         *zap.SugaredLogger

	UserAgent string
}

// Credentials specify the TLS Certificate based authentication for the grpc connection
type Credentials struct {
	ServerName string
	// Certfile is the path to certificate file
	Certfile string
	// Keyfile is the path to certificate key file
	Keyfile string
	// CAFile is an optional path to an additional ca file
	CAFile string
}

// Client defines the client API
type Client interface {
	Asset() v1.AssetServiceClient
	Cluster() v1.ClusterServiceClient
	Health() v1.HealthServiceClient
	IP() v1.IPServiceClient
	Payment() v1.PaymentServiceClient
	Tenant() v1.TenantServiceClient
	Token() v1.TokenServiceClient
	Version() v1.VersionServiceClient
	Volume() v1.VolumeServiceClient
	Close() error
}

// GRPCClient is a Client implementation with grpc transport.
type GRPCClient struct {
	conn *grpc.ClientConn
	log  *zap.SugaredLogger
}

// Close the underlying connection
func (c GRPCClient) Close() error {
	return c.conn.Close()
}

func (c GRPCClient) Asset() v1.AssetServiceClient {
	return v1.NewAssetServiceClient(c.conn)
}

func (c GRPCClient) Cluster() v1.ClusterServiceClient {
	return v1.NewClusterServiceClient(c.conn)
}

func (c GRPCClient) Health() v1.HealthServiceClient {
	return v1.NewHealthServiceClient(c.conn)
}

func (c GRPCClient) IP() v1.IPServiceClient {
	return v1.NewIPServiceClient(c.conn)
}

func (c GRPCClient) Payment() v1.PaymentServiceClient {
	return v1.NewPaymentServiceClient(c.conn)
}

func (c GRPCClient) Tenant() v1.TenantServiceClient {
	return v1.NewTenantServiceClient(c.conn)
}

func (c GRPCClient) Token() v1.TokenServiceClient {
	return v1.NewTokenServiceClient(c.conn)
}

func (c GRPCClient) Version() v1.VersionServiceClient {
	return v1.NewVersionServiceClient(c.conn)
}

func (c GRPCClient) Volume() v1.VolumeServiceClient {
	return v1.NewVolumeServiceClient(c.conn)
}

func New(ctx context.Context, config DialConfig) (Client, error) {
	log := config.Log

	if config.UserAgent == "" {
		return nil, fmt.Errorf("user agent has to be specified")
	}

	log.Infow("connecting...",
		"client", config.UserAgent,
		"endpoint", config.Endpoint,
	)

	res := &GRPCClient{
		log: log,
	}

	zapOpts := []grpc_zap.Option{
		grpc_zap.WithLevels(grpcToZapLevel),
	}
	interceptors := []grpc.UnaryClientInterceptor{
		grpc_zap.UnaryClientInterceptor(log.Desugar(), zapOpts...),
		grpc_zap.PayloadUnaryClientInterceptor(log.Desugar(),
			func(context.Context, string) bool { return true },
		),
	}

	// these are broadly in line with the expected server SLOs:
	kal := keepalive.ClientParameters{
		Time:                10 * time.Second,
		Timeout:             10 * time.Second,
		PermitWithoutStream: true,
	}

	dialBackoffConfig := backoff.Config{
		BaseDelay:  1.0 * time.Second,
		Multiplier: 1.2,
		Jitter:     0.1,
		MaxDelay:   7 * time.Second,
	}
	cp := grpc.ConnectParams{
		Backoff:           dialBackoffConfig,
		MinConnectTimeout: 6 * time.Second,
	}

	opts := []grpc.DialOption{
		grpc.WithBlock(),
		grpc.WithUserAgent(config.UserAgent),
		grpc.WithDefaultCallOptions(grpc.WaitForReady(true)),
		grpc.WithUnaryInterceptor(grpc_middleware.ChainUnaryClient(interceptors...)),
		grpc.WithKeepaliveParams(kal),
		grpc.WithConnectParams(cp),
	}

	if config.Token != "" {
		opts = append(opts, grpc.WithPerRPCCredentials(tokenAuth{
			token: config.Token,
		}))
	}

	certPool, err := x509.SystemCertPool()
	if err != nil {
		return nil, fmt.Errorf("failed to load system credentials: %w", err)
	}

	var (
		certificates []tls.Certificate
		serverName   string
	)

	if config.Credentials != nil {
		serverName = config.Credentials.ServerName

		if config.Credentials.CAFile != "" {
			ca, err := os.ReadFile(config.Credentials.CAFile)
			if err != nil {
				return nil, fmt.Errorf("could not read ca certificate: %w", err)
			}

			ok := certPool.AppendCertsFromPEM(ca)
			if !ok {
				return nil, fmt.Errorf("failed to append ca certs: %s", config.Credentials.CAFile)
			}
		}

		if config.Credentials.Certfile != "" && config.Credentials.Keyfile != "" {
			clientCertificate, err := tls.LoadX509KeyPair(config.Credentials.Certfile, config.Credentials.Keyfile)
			if err != nil {
				return nil, fmt.Errorf("could not load client key pair: %w", err)
			}

			certificates = []tls.Certificate{clientCertificate}
		}
	}

	creds := credentials.NewTLS(&tls.Config{
		ServerName:   serverName,
		Certificates: certificates,
		RootCAs:      certPool,
		ClientAuth:   tls.NoClientCert,
		MinVersion:   tls.VersionTLS13,
	})

	switch config.Scheme {
	case GRPCS:
		log.Infof("connecting securely")
		opts = append(opts, grpc.WithTransportCredentials(creds))
	default:
		return nil, fmt.Errorf("unsupported scheme:%v", config.Scheme)
	}

	res.conn, err = grpc.DialContext(ctx, config.Endpoint, opts...)
	if err != nil {
		log.Errorw("failed to connect", "endpoint", config.Endpoint, "error", err.Error())
		return nil, err
	}

	return res, nil
}

type tokenAuth struct {
	token string
}

func (t tokenAuth) GetRequestMetadata(ctx context.Context, in ...string) (map[string]string, error) {
	return map[string]string{
		"Authorization": "Bearer " + t.token,
	}, nil
}

func (tokenAuth) RequireTransportSecurity() bool {
	return true
}

func grpcToZapLevel(code codes.Code) zapcore.Level {
	switch code {
	case codes.OK,
		codes.Canceled,
		codes.DeadlineExceeded,
		codes.NotFound,
		codes.Unavailable:
		return zapcore.InfoLevel
	case codes.Aborted,
		codes.AlreadyExists,
		codes.FailedPrecondition,
		codes.InvalidArgument,
		codes.OutOfRange,
		codes.PermissionDenied,
		codes.ResourceExhausted,
		codes.Unauthenticated:
		return zapcore.WarnLevel
	case codes.DataLoss,
		codes.Internal,
		codes.Unimplemented,
		codes.Unknown:
		return zapcore.ErrorLevel
	default:
		return zapcore.ErrorLevel
	}
}
