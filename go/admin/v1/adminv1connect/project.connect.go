// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: admin/v1/project.proto

package adminv1connect

import (
	context "context"
	errors "errors"
	connect_go "github.com/bufbuild/connect-go"
	v1 "github.com/metal-stack-cloud/api/go/admin/v1"
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
	// ProjectServiceName is the fully-qualified name of the ProjectService service.
	ProjectServiceName = "admin.v1.ProjectService"
)

// ProjectServiceClient is a client for the admin.v1.ProjectService service.
type ProjectServiceClient interface {
	List(context.Context, *connect_go.Request[v1.ProjectServiceListRequest]) (*connect_go.Response[v1.ProjectServiceListResponse], error)
}

// NewProjectServiceClient constructs a client for the admin.v1.ProjectService service. By default,
// it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and
// sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC()
// or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewProjectServiceClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) ProjectServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &projectServiceClient{
		list: connect_go.NewClient[v1.ProjectServiceListRequest, v1.ProjectServiceListResponse](
			httpClient,
			baseURL+"/admin.v1.ProjectService/List",
			opts...,
		),
	}
}

// projectServiceClient implements ProjectServiceClient.
type projectServiceClient struct {
	list *connect_go.Client[v1.ProjectServiceListRequest, v1.ProjectServiceListResponse]
}

// List calls admin.v1.ProjectService.List.
func (c *projectServiceClient) List(ctx context.Context, req *connect_go.Request[v1.ProjectServiceListRequest]) (*connect_go.Response[v1.ProjectServiceListResponse], error) {
	return c.list.CallUnary(ctx, req)
}

// ProjectServiceHandler is an implementation of the admin.v1.ProjectService service.
type ProjectServiceHandler interface {
	List(context.Context, *connect_go.Request[v1.ProjectServiceListRequest]) (*connect_go.Response[v1.ProjectServiceListResponse], error)
}

// NewProjectServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewProjectServiceHandler(svc ProjectServiceHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	mux := http.NewServeMux()
	mux.Handle("/admin.v1.ProjectService/List", connect_go.NewUnaryHandler(
		"/admin.v1.ProjectService/List",
		svc.List,
		opts...,
	))
	return "/admin.v1.ProjectService/", mux
}

// UnimplementedProjectServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedProjectServiceHandler struct{}

func (UnimplementedProjectServiceHandler) List(context.Context, *connect_go.Request[v1.ProjectServiceListRequest]) (*connect_go.Response[v1.ProjectServiceListResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("admin.v1.ProjectService.List is not implemented"))
}
