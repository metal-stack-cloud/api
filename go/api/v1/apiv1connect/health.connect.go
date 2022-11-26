// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: api/v1/health.proto

package apiv1connect

import (
	context "context"
	errors "errors"
	connect_go "github.com/bufbuild/connect-go"
	v1 "github.com/metal-stack-cloud/api/go/api/v1"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect_go.IsAtLeastVersion0_1_0

const (
	// HealthServiceName is the fully-qualified name of the HealthService service.
	HealthServiceName = "api.v1.HealthService"
)

// HealthServiceClient is a client for the api.v1.HealthService service.
type HealthServiceClient interface {
	Get(context.Context, *connect_go.Request[v1.HealthServiceGetRequest]) (*connect_go.Response[v1.HealthServiceGetResponse], error)
}

// NewHealthServiceClient constructs a client for the api.v1.HealthService service. By default, it
// uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewHealthServiceClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) HealthServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &healthServiceClient{
		get: connect_go.NewClient[v1.HealthServiceGetRequest, v1.HealthServiceGetResponse](
			httpClient,
			baseURL+"/api.v1.HealthService/Get",
			opts...,
		),
	}
}

// healthServiceClient implements HealthServiceClient.
type healthServiceClient struct {
	get *connect_go.Client[v1.HealthServiceGetRequest, v1.HealthServiceGetResponse]
}

// Get calls api.v1.HealthService.Get.
func (c *healthServiceClient) Get(ctx context.Context, req *connect_go.Request[v1.HealthServiceGetRequest]) (*connect_go.Response[v1.HealthServiceGetResponse], error) {
	return c.get.CallUnary(ctx, req)
}

// HealthServiceHandler is an implementation of the api.v1.HealthService service.
type HealthServiceHandler interface {
	Get(context.Context, *connect_go.Request[v1.HealthServiceGetRequest]) (*connect_go.Response[v1.HealthServiceGetResponse], error)
}

// NewHealthServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewHealthServiceHandler(svc HealthServiceHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	mux := http.NewServeMux()
	mux.Handle("/api.v1.HealthService/Get", connect_go.NewUnaryHandler(
		"/api.v1.HealthService/Get",
		svc.Get,
		opts...,
	))
	return "/api.v1.HealthService/", mux
}

// UnimplementedHealthServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedHealthServiceHandler struct{}

func (UnimplementedHealthServiceHandler) Get(context.Context, *connect_go.Request[v1.HealthServiceGetRequest]) (*connect_go.Response[v1.HealthServiceGetResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.HealthService.Get is not implemented"))
}
