package client

import (
	"context"

	compress "github.com/klauspost/connect-compress"
	"github.com/metal-stack-cloud/api/go/api/v1/apiv1connect"
	client "github.com/metal-stack-cloud/api/go/client"
	"go.uber.org/zap"
)

// Client defines the client API
type Client interface {
	Asset() apiv1connect.AssetServiceClient
	Cluster() apiv1connect.ClusterServiceClient
	Health() apiv1connect.HealthServiceClient
	IP() apiv1connect.IPServiceClient
	Payment() apiv1connect.PaymentServiceClient
	Tenant() apiv1connect.TenantServiceClient
	Token() apiv1connect.TokenServiceClient
	Version() apiv1connect.VersionServiceClient
	Volume() apiv1connect.VolumeServiceClient
}

// api is a client implementation of the api with grpc transport.
type api struct {
	c   client.DialConfig
	log *zap.SugaredLogger
}

func New(ctx context.Context, config client.DialConfig) Client {
	return &api{
		log: config.Log,
		c:   config,
	}
}

func (c api) Asset() apiv1connect.AssetServiceClient {
	return apiv1connect.NewAssetServiceClient(c.c.HttpClient(),
		c.c.BaseURL,
		compress.WithAll(compress.LevelBalanced),
	)
}

func (c api) Cluster() apiv1connect.ClusterServiceClient {
	return apiv1connect.NewClusterServiceClient(c.c.HttpClient(),
		c.c.BaseURL,
		compress.WithAll(compress.LevelBalanced),
	)
}

func (c api) Health() apiv1connect.HealthServiceClient {
	return apiv1connect.NewHealthServiceClient(c.c.HttpClient(),
		c.c.BaseURL,
		compress.WithAll(compress.LevelBalanced),
	)
}

func (c api) IP() apiv1connect.IPServiceClient {
	return apiv1connect.NewIPServiceClient(c.c.HttpClient(),
		c.c.BaseURL,
		compress.WithAll(compress.LevelBalanced),
	)
}

func (c api) Payment() apiv1connect.PaymentServiceClient {
	return apiv1connect.NewPaymentServiceClient(c.c.HttpClient(),
		c.c.BaseURL,
		compress.WithAll(compress.LevelBalanced),
	)
}

func (c api) Tenant() apiv1connect.TenantServiceClient {
	return apiv1connect.NewTenantServiceClient(c.c.HttpClient(),
		c.c.BaseURL,
		compress.WithAll(compress.LevelBalanced),
	)
}

func (c api) Token() apiv1connect.TokenServiceClient {
	return apiv1connect.NewTokenServiceClient(c.c.HttpClient(),
		c.c.BaseURL,
		compress.WithAll(compress.LevelBalanced),
	)
}

func (c api) Version() apiv1connect.VersionServiceClient {
	return apiv1connect.NewVersionServiceClient(
		c.c.HttpClient(),
		c.c.BaseURL,
		compress.WithAll(compress.LevelBalanced),
	)
}

func (c api) Volume() apiv1connect.VolumeServiceClient {
	return apiv1connect.NewVolumeServiceClient(
		c.c.HttpClient(),
		c.c.BaseURL,
		compress.WithAll(compress.LevelBalanced),
	)
}
