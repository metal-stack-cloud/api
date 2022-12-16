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
}

// admin is a client implementation of the api with grpc transport.
type admin struct {
	log *zap.SugaredLogger
	c   client.DialConfig
}

func New(ctx context.Context, config client.DialConfig) Client {
	return &admin{
		log: config.Log,
		c:   config,
	}
}

func (c admin) Tenant() adminv1connect.TenantServiceClient {
	client := adminv1connect.NewTenantServiceClient(
		c.c.HttpClient(),
		c.c.BaseURL,
		compress.WithAll(compress.LevelBalanced),
	)

	return client
}
func (c admin) Payment() adminv1connect.PaymentServiceClient {
	client := adminv1connect.NewPaymentServiceClient(
		c.c.HttpClient(),
		c.c.BaseURL,
		compress.WithAll(compress.LevelBalanced),
	)

	return client
}
