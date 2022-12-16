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
	log                  *zap.SugaredLogger
	assetServiceClient   apiv1connect.AssetServiceClient
	clusterServiceClient apiv1connect.ClusterServiceClient
	healthServiceClient  apiv1connect.HealthServiceClient
	ipServiceClient      apiv1connect.IPServiceClient
	paymentServiceClient apiv1connect.PaymentServiceClient
	tenantServiceClient  apiv1connect.TenantServiceClient
	tokenServiceClient   apiv1connect.TokenServiceClient
	versionServiceClient apiv1connect.VersionServiceClient
	volumeServiceClient  apiv1connect.VolumeServiceClient
}

func New(ctx context.Context, config client.DialConfig) Client {
	return &api{
		log: config.Log,
		assetServiceClient: apiv1connect.NewAssetServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		clusterServiceClient: apiv1connect.NewClusterServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		healthServiceClient: apiv1connect.NewHealthServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		ipServiceClient: apiv1connect.NewIPServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		paymentServiceClient: apiv1connect.NewPaymentServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		tenantServiceClient: apiv1connect.NewTenantServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		tokenServiceClient: apiv1connect.NewTokenServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		versionServiceClient: apiv1connect.NewVersionServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		volumeServiceClient: apiv1connect.NewVolumeServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
	}
}
func (c api) Asset() apiv1connect.AssetServiceClient {
	return c.assetServiceClient
}
func (c api) Cluster() apiv1connect.ClusterServiceClient {
	return c.clusterServiceClient
}

func (c api) Health() apiv1connect.HealthServiceClient {
	return c.healthServiceClient
}

func (c api) IP() apiv1connect.IPServiceClient {
	return c.ipServiceClient
}

func (c api) Payment() apiv1connect.PaymentServiceClient {
	return c.paymentServiceClient
}

func (c api) Tenant() apiv1connect.TenantServiceClient {
	return c.tenantServiceClient
}

func (c api) Token() apiv1connect.TokenServiceClient {
	return c.tokenServiceClient
}

func (c api) Version() apiv1connect.VersionServiceClient {
	return c.versionServiceClient
}

func (c api) Volume() apiv1connect.VolumeServiceClient {
	return c.volumeServiceClient
}
