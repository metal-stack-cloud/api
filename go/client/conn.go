package client

import (
	"log/slog"
	"net/http"

	"connectrpc.com/connect"
)

// DialConfig is the configuration to create a api-server connection
type DialConfig struct {
	BaseURL string
	Token   string

	UserAgent string

	Transport http.RoundTripper

	// Optional client Interceptors
	Interceptors []connect.Interceptor

	Log *slog.Logger
}

func (d *DialConfig) HttpClient() *http.Client {
	transport := http.DefaultTransport
	if d.Transport != nil {
		transport = d.Transport
	}

	return &http.Client{
		Transport: transport,
	}
}
