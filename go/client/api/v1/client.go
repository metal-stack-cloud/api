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

// api is a client implementation of the api with grpc transport.
type api struct {
	conn *grpc.ClientConn
	log  *zap.SugaredLogger
}

// Close the underlying connection
func (c api) Close() error {
	return c.conn.Close()
}

func (c api) Asset() v1.AssetServiceClient {
	return v1.NewAssetServiceClient(c.conn)
}

func (c api) Cluster() v1.ClusterServiceClient {
	return v1.NewClusterServiceClient(c.conn)
}

func (c api) Health() v1.HealthServiceClient {
	return v1.NewHealthServiceClient(c.conn)
}

func (c api) IP() v1.IPServiceClient {
	return v1.NewIPServiceClient(c.conn)
}

func (c api) Payment() v1.PaymentServiceClient {
	return v1.NewPaymentServiceClient(c.conn)
}

func (c api) Tenant() v1.TenantServiceClient {
	return v1.NewTenantServiceClient(c.conn)
}

func (c api) Token() v1.TokenServiceClient {
	return v1.NewTokenServiceClient(c.conn)
}

func (c api) Version() v1.VersionServiceClient {
	return v1.NewVersionServiceClient(c.conn)
}

func (c api) Volume() v1.VolumeServiceClient {
	return v1.NewVolumeServiceClient(c.conn)
}

func New(ctx context.Context, config client.DialConfig) (Client, error) {
	log := config.Log

	res := &api{
		log: log,
	}

	var err error
	res.conn, err = client.NewConn(ctx, config)
	if err != nil {
		return nil, err
	}

	return res, nil
}
