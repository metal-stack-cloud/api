package client

import (
	"context"

	compress "github.com/klauspost/connect-compress"
	"github.com/metal-stack-cloud/api/go/client"
	"github.com/metal-stack-cloud/api/go/status/v1/statusv1connect"
	"go.uber.org/zap"
)

type Client interface {
	Status() statusv1connect.StatusServiceClient
	Message() statusv1connect.MessageServiceClient
}

type status struct {
	c   client.DialConfig
	log *zap.SugaredLogger
}

func New(ctx context.Context, config client.DialConfig) Client {
	return &status{
		log: config.Log,
		c:   config,
	}
}
func (c status) Status() statusv1connect.StatusServiceClient {
	return statusv1connect.NewStatusServiceClient(
		c.c.HttpClient(),
		c.c.BaseURL,
		compress.WithAll(compress.LevelBalanced),
	)
}

func (c status) Message() statusv1connect.MessageServiceClient {
	return statusv1connect.NewMessageServiceClient(
		c.c.HttpClient(),
		c.c.BaseURL,
		compress.WithAll(compress.LevelBalanced),
	)
}
