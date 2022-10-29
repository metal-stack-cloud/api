package client

import (
	"context"

	"google.golang.org/grpc"

	"github.com/metal-stack-cloud/api/go/client"
	statusv1 "github.com/metal-stack-cloud/api/go/status/v1"
	"go.uber.org/zap"
)

type Client interface {
	Status() statusv1.StatusServiceClient
	Message() statusv1.MessageServiceClient
	Close() error
}

// status is a client implementation of the status api with grpc transport.
type status struct {
	conn *grpc.ClientConn
	log  *zap.SugaredLogger
}

func (c status) Status() statusv1.StatusServiceClient {
	return statusv1.NewStatusServiceClient(c.conn)
}

func (c status) Message() statusv1.MessageServiceClient {
	return statusv1.NewMessageServiceClient(c.conn)
}

func (c status) Close() error {
	return c.conn.Close()
}

func New(ctx context.Context, config client.DialConfig) (Client, error) {
	log := config.Log

	res := &status{
		log: log,
	}

	var err error
	res.conn, err = client.NewConn(ctx, config)
	if err != nil {
		return nil, err
	}

	return res, nil
}
