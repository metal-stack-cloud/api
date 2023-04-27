package client

import (
	"context"

	compress "github.com/klauspost/connect-compress"
	"github.com/metal-stack-cloud/api/go/admin/v1/adminv1connect"

	client "github.com/metal-stack-cloud/api/go/client"
	"go.uber.org/zap"
)

// Client defines the client API
type Client interface {
	Tenant() adminv1connect.TenantServiceClient
	Payment() adminv1connect.PaymentServiceClient
	Storage() adminv1connect.StorageServiceClient
	Cluster() adminv1connect.ClusterServiceClient
}

// admin is a client implementation of the api with grpc transport.
type admin struct {
	log                  *zap.SugaredLogger
	tenantServiceClient  adminv1connect.TenantServiceClient
	paymentServiceClient adminv1connect.PaymentServiceClient
	storageServiceClient adminv1connect.StorageServiceClient
	clusterServiceClient adminv1connect.ClusterServiceClient
}

func New(ctx context.Context, config client.DialConfig) Client {
	return &admin{
		log: config.Log,
		tenantServiceClient: adminv1connect.NewTenantServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		paymentServiceClient: adminv1connect.NewPaymentServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		storageServiceClient: adminv1connect.NewStorageServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		clusterServiceClient: adminv1connect.NewClusterServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
	}
}

func (c admin) Tenant() adminv1connect.TenantServiceClient {
	return c.tenantServiceClient
}
func (c admin) Payment() adminv1connect.PaymentServiceClient {
	return c.paymentServiceClient
}
func (c admin) Storage() adminv1connect.StorageServiceClient {
	return c.storageServiceClient
}
func (c admin) Cluster() adminv1connect.ClusterServiceClient {
	return c.clusterServiceClient
}
