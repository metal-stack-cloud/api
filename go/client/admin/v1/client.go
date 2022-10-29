package client

import (
	"context"

	"google.golang.org/grpc"

	v1 "github.com/metal-stack-cloud/api/go/admin/v1"
	client "github.com/metal-stack-cloud/api/go/client"
	"go.uber.org/zap"
)

// Client defines the client API
type Client interface {
	Tenant() v1.TenantServiceClient
	Close() error
}

// admin is a client implementation of the api with grpc transport.
type admin struct {
	conn *grpc.ClientConn
	log  *zap.SugaredLogger
}

// Close the underlying connection
func (c admin) Close() error {
	return c.conn.Close()
}

func (c admin) Tenant() v1.TenantServiceClient {
	return v1.NewTenantServiceClient(c.conn)
}

func New(ctx context.Context, config client.DialConfig) (Client, error) {
	log := config.Log

	res := &admin{
		log: log,
	}

	var err error
	res.conn, err = client.NewConn(ctx, config)
	if err != nil {
		return nil, err
	}

	return res, nil
}
