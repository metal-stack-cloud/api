// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: api/v1/project.proto

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
	// ProjectServiceName is the fully-qualified name of the ProjectService service.
	ProjectServiceName = "api.v1.ProjectService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// ProjectServiceListProcedure is the fully-qualified name of the ProjectService's List RPC.
	ProjectServiceListProcedure = "/api.v1.ProjectService/List"
	// ProjectServiceGetProcedure is the fully-qualified name of the ProjectService's Get RPC.
	ProjectServiceGetProcedure = "/api.v1.ProjectService/Get"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	projectServiceServiceDescriptor    = v1.File_api_v1_project_proto.Services().ByName("ProjectService")
	projectServiceListMethodDescriptor = projectServiceServiceDescriptor.Methods().ByName("List")
	projectServiceGetMethodDescriptor  = projectServiceServiceDescriptor.Methods().ByName("Get")
)

// ProjectServiceClient is a client for the api.v1.ProjectService service.
type ProjectServiceClient interface {
	// List all accessible projects
	List(context.Context, *connect.Request[v1.ProjectServiceListRequest]) (*connect.Response[v1.ProjectServiceListResponse], error)
	// Get a project
	Get(context.Context, *connect.Request[v1.ProjectServiceGetRequest]) (*connect.Response[v1.ProjectServiceGetResponse], error)
}

// NewProjectServiceClient constructs a client for the api.v1.ProjectService service. By default, it
// uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewProjectServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) ProjectServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &projectServiceClient{
		list: connect.NewClient[v1.ProjectServiceListRequest, v1.ProjectServiceListResponse](
			httpClient,
			baseURL+ProjectServiceListProcedure,
			connect.WithSchema(projectServiceListMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		get: connect.NewClient[v1.ProjectServiceGetRequest, v1.ProjectServiceGetResponse](
			httpClient,
			baseURL+ProjectServiceGetProcedure,
			connect.WithSchema(projectServiceGetMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// projectServiceClient implements ProjectServiceClient.
type projectServiceClient struct {
	list *connect.Client[v1.ProjectServiceListRequest, v1.ProjectServiceListResponse]
	get  *connect.Client[v1.ProjectServiceGetRequest, v1.ProjectServiceGetResponse]
}

// List calls api.v1.ProjectService.List.
func (c *projectServiceClient) List(ctx context.Context, req *connect.Request[v1.ProjectServiceListRequest]) (*connect.Response[v1.ProjectServiceListResponse], error) {
	return c.list.CallUnary(ctx, req)
}

// Get calls api.v1.ProjectService.Get.
func (c *projectServiceClient) Get(ctx context.Context, req *connect.Request[v1.ProjectServiceGetRequest]) (*connect.Response[v1.ProjectServiceGetResponse], error) {
	return c.get.CallUnary(ctx, req)
}

// ProjectServiceHandler is an implementation of the api.v1.ProjectService service.
type ProjectServiceHandler interface {
	// List all accessible projects
	List(context.Context, *connect.Request[v1.ProjectServiceListRequest]) (*connect.Response[v1.ProjectServiceListResponse], error)
	// Get a project
	Get(context.Context, *connect.Request[v1.ProjectServiceGetRequest]) (*connect.Response[v1.ProjectServiceGetResponse], error)
}

// NewProjectServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewProjectServiceHandler(svc ProjectServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	projectServiceListHandler := connect.NewUnaryHandler(
		ProjectServiceListProcedure,
		svc.List,
		connect.WithSchema(projectServiceListMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	projectServiceGetHandler := connect.NewUnaryHandler(
		ProjectServiceGetProcedure,
		svc.Get,
		connect.WithSchema(projectServiceGetMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/api.v1.ProjectService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case ProjectServiceListProcedure:
			projectServiceListHandler.ServeHTTP(w, r)
		case ProjectServiceGetProcedure:
			projectServiceGetHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedProjectServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedProjectServiceHandler struct{}

func (UnimplementedProjectServiceHandler) List(context.Context, *connect.Request[v1.ProjectServiceListRequest]) (*connect.Response[v1.ProjectServiceListResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.ProjectService.List is not implemented"))
}

func (UnimplementedProjectServiceHandler) Get(context.Context, *connect.Request[v1.ProjectServiceGetRequest]) (*connect.Response[v1.ProjectServiceGetResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.ProjectService.Get is not implemented"))
}