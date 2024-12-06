// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: status/v1/status.proto

package statusv1connect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	v1 "github.com/metal-stack-cloud/api/go/status/v1"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect.IsAtLeastVersion1_13_0

const (
	// StatusServiceName is the fully-qualified name of the StatusService service.
	StatusServiceName = "status.v1.StatusService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// StatusServiceGetProcedure is the fully-qualified name of the StatusService's Get RPC.
	StatusServiceGetProcedure = "/status.v1.StatusService/Get"
	// StatusServiceWatchProcedure is the fully-qualified name of the StatusService's Watch RPC.
	StatusServiceWatchProcedure = "/status.v1.StatusService/Watch"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	statusServiceServiceDescriptor     = v1.File_status_v1_status_proto.Services().ByName("StatusService")
	statusServiceGetMethodDescriptor   = statusServiceServiceDescriptor.Methods().ByName("Get")
	statusServiceWatchMethodDescriptor = statusServiceServiceDescriptor.Methods().ByName("Watch")
)

// StatusServiceClient is a client for the status.v1.StatusService service.
type StatusServiceClient interface {
	// Get the system status
	Get(context.Context, *connect.Request[v1.StatusServiceGetRequest]) (*connect.Response[v1.StatusServiceGetResponse], error)
	// Watch the system status
	Watch(context.Context, *connect.Request[v1.StatusServiceWatchRequest]) (*connect.ServerStreamForClient[v1.StatusServiceWatchResponse], error)
}

// NewStatusServiceClient constructs a client for the status.v1.StatusService service. By default,
// it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and
// sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC()
// or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewStatusServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) StatusServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &statusServiceClient{
		get: connect.NewClient[v1.StatusServiceGetRequest, v1.StatusServiceGetResponse](
			httpClient,
			baseURL+StatusServiceGetProcedure,
			connect.WithSchema(statusServiceGetMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		watch: connect.NewClient[v1.StatusServiceWatchRequest, v1.StatusServiceWatchResponse](
			httpClient,
			baseURL+StatusServiceWatchProcedure,
			connect.WithSchema(statusServiceWatchMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// statusServiceClient implements StatusServiceClient.
type statusServiceClient struct {
	get   *connect.Client[v1.StatusServiceGetRequest, v1.StatusServiceGetResponse]
	watch *connect.Client[v1.StatusServiceWatchRequest, v1.StatusServiceWatchResponse]
}

// Get calls status.v1.StatusService.Get.
func (c *statusServiceClient) Get(ctx context.Context, req *connect.Request[v1.StatusServiceGetRequest]) (*connect.Response[v1.StatusServiceGetResponse], error) {
	return c.get.CallUnary(ctx, req)
}

// Watch calls status.v1.StatusService.Watch.
func (c *statusServiceClient) Watch(ctx context.Context, req *connect.Request[v1.StatusServiceWatchRequest]) (*connect.ServerStreamForClient[v1.StatusServiceWatchResponse], error) {
	return c.watch.CallServerStream(ctx, req)
}

// StatusServiceHandler is an implementation of the status.v1.StatusService service.
type StatusServiceHandler interface {
	// Get the system status
	Get(context.Context, *connect.Request[v1.StatusServiceGetRequest]) (*connect.Response[v1.StatusServiceGetResponse], error)
	// Watch the system status
	Watch(context.Context, *connect.Request[v1.StatusServiceWatchRequest], *connect.ServerStream[v1.StatusServiceWatchResponse]) error
}

// NewStatusServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewStatusServiceHandler(svc StatusServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	statusServiceGetHandler := connect.NewUnaryHandler(
		StatusServiceGetProcedure,
		svc.Get,
		connect.WithSchema(statusServiceGetMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	statusServiceWatchHandler := connect.NewServerStreamHandler(
		StatusServiceWatchProcedure,
		svc.Watch,
		connect.WithSchema(statusServiceWatchMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/status.v1.StatusService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case StatusServiceGetProcedure:
			statusServiceGetHandler.ServeHTTP(w, r)
		case StatusServiceWatchProcedure:
			statusServiceWatchHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedStatusServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedStatusServiceHandler struct{}

func (UnimplementedStatusServiceHandler) Get(context.Context, *connect.Request[v1.StatusServiceGetRequest]) (*connect.Response[v1.StatusServiceGetResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("status.v1.StatusService.Get is not implemented"))
}

func (UnimplementedStatusServiceHandler) Watch(context.Context, *connect.Request[v1.StatusServiceWatchRequest], *connect.ServerStream[v1.StatusServiceWatchResponse]) error {
	return connect.NewError(connect.CodeUnimplemented, errors.New("status.v1.StatusService.Watch is not implemented"))
}
