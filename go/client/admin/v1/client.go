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
	User() v1.UserServiceClient
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

func (c APIClient) User() v1.UserServiceClient {
	return v1.NewUserServiceClient(c.conn)
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
