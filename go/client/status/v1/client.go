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
	log                  *zap.SugaredLogger
	statusServiceClient  statusv1connect.StatusServiceClient
	messageServiceClient statusv1connect.MessageServiceClient
}

func New(ctx context.Context, config client.DialConfig) Client {
	return &status{
		log: config.Log,
		statusServiceClient: statusv1connect.NewStatusServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		messageServiceClient: statusv1connect.NewMessageServiceClient(
			config.HttpClient(),
			config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
	}
}
func (c status) Status() statusv1connect.StatusServiceClient {
	return c.statusServiceClient
}

func (c status) Message() statusv1connect.MessageServiceClient {
	return c.messageServiceClient
}
