package client

import (
	"context"

	"google.golang.org/grpc"

	v1 "github.com/metal-stack-cloud/api/go/api/v1"
	client "github.com/metal-stack-cloud/api/go/client"
	"go.uber.org/zap"
)

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

// APIClient is a client implementation of the api with grpc transport.
type APIClient struct {
	conn *grpc.ClientConn
	log  *zap.SugaredLogger
}

// Close the underlying connection
func (c APIClient) Close() error {
	return c.conn.Close()
}

func (c APIClient) Asset() v1.AssetServiceClient {
	return v1.NewAssetServiceClient(c.conn)
}

func (c APIClient) Cluster() v1.ClusterServiceClient {
	return v1.NewClusterServiceClient(c.conn)
}

func (c APIClient) Health() v1.HealthServiceClient {
	return v1.NewHealthServiceClient(c.conn)
}

func (c APIClient) IP() v1.IPServiceClient {
	return v1.NewIPServiceClient(c.conn)
}

func (c APIClient) Payment() v1.PaymentServiceClient {
	return v1.NewPaymentServiceClient(c.conn)
}

func (c APIClient) Tenant() v1.TenantServiceClient {
	return v1.NewTenantServiceClient(c.conn)
}

func (c APIClient) Token() v1.TokenServiceClient {
	return v1.NewTokenServiceClient(c.conn)
}

func (c APIClient) Version() v1.VersionServiceClient {
	return v1.NewVersionServiceClient(c.conn)
}

func (c APIClient) Volume() v1.VolumeServiceClient {
	return v1.NewVolumeServiceClient(c.conn)
}

func New(ctx context.Context, config client.DialConfig) (Client, error) {
	log := config.Log

	res := &APIClient{
		log: log,
	}

	var err error
	res.conn, err = client.NewConn(ctx, config)
	if err != nil {
		return nil, err
	}

	return res, nil
}
