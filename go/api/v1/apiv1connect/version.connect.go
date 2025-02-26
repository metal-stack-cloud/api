// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: api/v1/version.proto

package apiv1connect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	v1 "github.com/metal-stack-cloud/api/go/api/v1"
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
	// VersionServiceName is the fully-qualified name of the VersionService service.
	VersionServiceName = "api.v1.VersionService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// VersionServiceGetProcedure is the fully-qualified name of the VersionService's Get RPC.
	VersionServiceGetProcedure = "/api.v1.VersionService/Get"
)

// VersionServiceClient is a client for the api.v1.VersionService service.
type VersionServiceClient interface {
	// Get the version
	Get(context.Context, *connect.Request[v1.VersionServiceGetRequest]) (*connect.Response[v1.VersionServiceGetResponse], error)
}

// NewVersionServiceClient constructs a client for the api.v1.VersionService service. By default, it
// uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewVersionServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) VersionServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	versionServiceMethods := v1.File_api_v1_version_proto.Services().ByName("VersionService").Methods()
	return &versionServiceClient{
		get: connect.NewClient[v1.VersionServiceGetRequest, v1.VersionServiceGetResponse](
			httpClient,
			baseURL+VersionServiceGetProcedure,
			connect.WithSchema(versionServiceMethods.ByName("Get")),
			connect.WithClientOptions(opts...),
		),
	}
}

// versionServiceClient implements VersionServiceClient.
type versionServiceClient struct {
	get *connect.Client[v1.VersionServiceGetRequest, v1.VersionServiceGetResponse]
}

// Get calls api.v1.VersionService.Get.
func (c *versionServiceClient) Get(ctx context.Context, req *connect.Request[v1.VersionServiceGetRequest]) (*connect.Response[v1.VersionServiceGetResponse], error) {
	return c.get.CallUnary(ctx, req)
}

// VersionServiceHandler is an implementation of the api.v1.VersionService service.
type VersionServiceHandler interface {
	// Get the version
	Get(context.Context, *connect.Request[v1.VersionServiceGetRequest]) (*connect.Response[v1.VersionServiceGetResponse], error)
}

// NewVersionServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewVersionServiceHandler(svc VersionServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	versionServiceMethods := v1.File_api_v1_version_proto.Services().ByName("VersionService").Methods()
	versionServiceGetHandler := connect.NewUnaryHandler(
		VersionServiceGetProcedure,
		svc.Get,
		connect.WithSchema(versionServiceMethods.ByName("Get")),
		connect.WithHandlerOptions(opts...),
	)
	return "/api.v1.VersionService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case VersionServiceGetProcedure:
			versionServiceGetHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedVersionServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedVersionServiceHandler struct{}

func (UnimplementedVersionServiceHandler) Get(context.Context, *connect.Request[v1.VersionServiceGetRequest]) (*connect.Response[v1.VersionServiceGetResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.VersionService.Get is not implemented"))
}
