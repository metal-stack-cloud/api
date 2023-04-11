// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: api/v1/volume.proto

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
	// VolumeServiceName is the fully-qualified name of the VolumeService service.
	VolumeServiceName = "api.v1.VolumeService"
	// SnapshotServiceName is the fully-qualified name of the SnapshotService service.
	SnapshotServiceName = "api.v1.SnapshotService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// VolumeServiceGetProcedure is the fully-qualified name of the VolumeService's Get RPC.
	VolumeServiceGetProcedure = "/api.v1.VolumeService/Get"
	// VolumeServiceListProcedure is the fully-qualified name of the VolumeService's List RPC.
	VolumeServiceListProcedure = "/api.v1.VolumeService/List"
	// VolumeServiceDeleteProcedure is the fully-qualified name of the VolumeService's Delete RPC.
	VolumeServiceDeleteProcedure = "/api.v1.VolumeService/Delete"
	// SnapshotServiceGetProcedure is the fully-qualified name of the SnapshotService's Get RPC.
	SnapshotServiceGetProcedure = "/api.v1.SnapshotService/Get"
	// SnapshotServiceListProcedure is the fully-qualified name of the SnapshotService's List RPC.
	SnapshotServiceListProcedure = "/api.v1.SnapshotService/List"
	// SnapshotServiceDeleteProcedure is the fully-qualified name of the SnapshotService's Delete RPC.
	SnapshotServiceDeleteProcedure = "/api.v1.SnapshotService/Delete"
)

// VolumeServiceClient is a client for the api.v1.VolumeService service.
type VolumeServiceClient interface {
	Get(context.Context, *connect_go.Request[v1.VolumeServiceGetRequest]) (*connect_go.Response[v1.VolumeServiceGetResponse], error)
	List(context.Context, *connect_go.Request[v1.VolumeServiceListRequest]) (*connect_go.Response[v1.VolumeServiceListResponse], error)
	Delete(context.Context, *connect_go.Request[v1.VolumeServiceDeleteRequest]) (*connect_go.Response[v1.VolumeServiceDeleteResponse], error)
}

// NewVolumeServiceClient constructs a client for the api.v1.VolumeService service. By default, it
// uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewVolumeServiceClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) VolumeServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &volumeServiceClient{
		get: connect_go.NewClient[v1.VolumeServiceGetRequest, v1.VolumeServiceGetResponse](
			httpClient,
			baseURL+VolumeServiceGetProcedure,
			opts...,
		),
		list: connect_go.NewClient[v1.VolumeServiceListRequest, v1.VolumeServiceListResponse](
			httpClient,
			baseURL+VolumeServiceListProcedure,
			opts...,
		),
		delete: connect_go.NewClient[v1.VolumeServiceDeleteRequest, v1.VolumeServiceDeleteResponse](
			httpClient,
			baseURL+VolumeServiceDeleteProcedure,
			opts...,
		),
	}
}

// volumeServiceClient implements VolumeServiceClient.
type volumeServiceClient struct {
	get    *connect_go.Client[v1.VolumeServiceGetRequest, v1.VolumeServiceGetResponse]
	list   *connect_go.Client[v1.VolumeServiceListRequest, v1.VolumeServiceListResponse]
	delete *connect_go.Client[v1.VolumeServiceDeleteRequest, v1.VolumeServiceDeleteResponse]
}

// Get calls api.v1.VolumeService.Get.
func (c *volumeServiceClient) Get(ctx context.Context, req *connect_go.Request[v1.VolumeServiceGetRequest]) (*connect_go.Response[v1.VolumeServiceGetResponse], error) {
	return c.get.CallUnary(ctx, req)
}

// List calls api.v1.VolumeService.List.
func (c *volumeServiceClient) List(ctx context.Context, req *connect_go.Request[v1.VolumeServiceListRequest]) (*connect_go.Response[v1.VolumeServiceListResponse], error) {
	return c.list.CallUnary(ctx, req)
}

// Delete calls api.v1.VolumeService.Delete.
func (c *volumeServiceClient) Delete(ctx context.Context, req *connect_go.Request[v1.VolumeServiceDeleteRequest]) (*connect_go.Response[v1.VolumeServiceDeleteResponse], error) {
	return c.delete.CallUnary(ctx, req)
}

// VolumeServiceHandler is an implementation of the api.v1.VolumeService service.
type VolumeServiceHandler interface {
	Get(context.Context, *connect_go.Request[v1.VolumeServiceGetRequest]) (*connect_go.Response[v1.VolumeServiceGetResponse], error)
	List(context.Context, *connect_go.Request[v1.VolumeServiceListRequest]) (*connect_go.Response[v1.VolumeServiceListResponse], error)
	Delete(context.Context, *connect_go.Request[v1.VolumeServiceDeleteRequest]) (*connect_go.Response[v1.VolumeServiceDeleteResponse], error)
}

// NewVolumeServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewVolumeServiceHandler(svc VolumeServiceHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	mux := http.NewServeMux()
	mux.Handle(VolumeServiceGetProcedure, connect_go.NewUnaryHandler(
		VolumeServiceGetProcedure,
		svc.Get,
		opts...,
	))
	mux.Handle(VolumeServiceListProcedure, connect_go.NewUnaryHandler(
		VolumeServiceListProcedure,
		svc.List,
		opts...,
	))
	mux.Handle(VolumeServiceDeleteProcedure, connect_go.NewUnaryHandler(
		VolumeServiceDeleteProcedure,
		svc.Delete,
		opts...,
	))
	return "/api.v1.VolumeService/", mux
}

// UnimplementedVolumeServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedVolumeServiceHandler struct{}

func (UnimplementedVolumeServiceHandler) Get(context.Context, *connect_go.Request[v1.VolumeServiceGetRequest]) (*connect_go.Response[v1.VolumeServiceGetResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.VolumeService.Get is not implemented"))
}

func (UnimplementedVolumeServiceHandler) List(context.Context, *connect_go.Request[v1.VolumeServiceListRequest]) (*connect_go.Response[v1.VolumeServiceListResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.VolumeService.List is not implemented"))
}

func (UnimplementedVolumeServiceHandler) Delete(context.Context, *connect_go.Request[v1.VolumeServiceDeleteRequest]) (*connect_go.Response[v1.VolumeServiceDeleteResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.VolumeService.Delete is not implemented"))
}

// SnapshotServiceClient is a client for the api.v1.SnapshotService service.
type SnapshotServiceClient interface {
	Get(context.Context, *connect_go.Request[v1.SnapshotServiceGetRequest]) (*connect_go.Response[v1.SnapshotServiceGetResponse], error)
	List(context.Context, *connect_go.Request[v1.SnapshotServiceListRequest]) (*connect_go.Response[v1.SnapshotServiceListResponse], error)
	Delete(context.Context, *connect_go.Request[v1.SnapshotServiceDeleteRequest]) (*connect_go.Response[v1.SnapshotServiceDeleteResponse], error)
}

// NewSnapshotServiceClient constructs a client for the api.v1.SnapshotService service. By default,
// it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and
// sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC()
// or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewSnapshotServiceClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) SnapshotServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &snapshotServiceClient{
		get: connect_go.NewClient[v1.SnapshotServiceGetRequest, v1.SnapshotServiceGetResponse](
			httpClient,
			baseURL+SnapshotServiceGetProcedure,
			opts...,
		),
		list: connect_go.NewClient[v1.SnapshotServiceListRequest, v1.SnapshotServiceListResponse](
			httpClient,
			baseURL+SnapshotServiceListProcedure,
			opts...,
		),
		delete: connect_go.NewClient[v1.SnapshotServiceDeleteRequest, v1.SnapshotServiceDeleteResponse](
			httpClient,
			baseURL+SnapshotServiceDeleteProcedure,
			opts...,
		),
	}
}

// snapshotServiceClient implements SnapshotServiceClient.
type snapshotServiceClient struct {
	get    *connect_go.Client[v1.SnapshotServiceGetRequest, v1.SnapshotServiceGetResponse]
	list   *connect_go.Client[v1.SnapshotServiceListRequest, v1.SnapshotServiceListResponse]
	delete *connect_go.Client[v1.SnapshotServiceDeleteRequest, v1.SnapshotServiceDeleteResponse]
}

// Get calls api.v1.SnapshotService.Get.
func (c *snapshotServiceClient) Get(ctx context.Context, req *connect_go.Request[v1.SnapshotServiceGetRequest]) (*connect_go.Response[v1.SnapshotServiceGetResponse], error) {
	return c.get.CallUnary(ctx, req)
}

// List calls api.v1.SnapshotService.List.
func (c *snapshotServiceClient) List(ctx context.Context, req *connect_go.Request[v1.SnapshotServiceListRequest]) (*connect_go.Response[v1.SnapshotServiceListResponse], error) {
	return c.list.CallUnary(ctx, req)
}

// Delete calls api.v1.SnapshotService.Delete.
func (c *snapshotServiceClient) Delete(ctx context.Context, req *connect_go.Request[v1.SnapshotServiceDeleteRequest]) (*connect_go.Response[v1.SnapshotServiceDeleteResponse], error) {
	return c.delete.CallUnary(ctx, req)
}

// SnapshotServiceHandler is an implementation of the api.v1.SnapshotService service.
type SnapshotServiceHandler interface {
	Get(context.Context, *connect_go.Request[v1.SnapshotServiceGetRequest]) (*connect_go.Response[v1.SnapshotServiceGetResponse], error)
	List(context.Context, *connect_go.Request[v1.SnapshotServiceListRequest]) (*connect_go.Response[v1.SnapshotServiceListResponse], error)
	Delete(context.Context, *connect_go.Request[v1.SnapshotServiceDeleteRequest]) (*connect_go.Response[v1.SnapshotServiceDeleteResponse], error)
}

// NewSnapshotServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewSnapshotServiceHandler(svc SnapshotServiceHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	mux := http.NewServeMux()
	mux.Handle(SnapshotServiceGetProcedure, connect_go.NewUnaryHandler(
		SnapshotServiceGetProcedure,
		svc.Get,
		opts...,
	))
	mux.Handle(SnapshotServiceListProcedure, connect_go.NewUnaryHandler(
		SnapshotServiceListProcedure,
		svc.List,
		opts...,
	))
	mux.Handle(SnapshotServiceDeleteProcedure, connect_go.NewUnaryHandler(
		SnapshotServiceDeleteProcedure,
		svc.Delete,
		opts...,
	))
	return "/api.v1.SnapshotService/", mux
}

// UnimplementedSnapshotServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedSnapshotServiceHandler struct{}

func (UnimplementedSnapshotServiceHandler) Get(context.Context, *connect_go.Request[v1.SnapshotServiceGetRequest]) (*connect_go.Response[v1.SnapshotServiceGetResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.SnapshotService.Get is not implemented"))
}

func (UnimplementedSnapshotServiceHandler) List(context.Context, *connect_go.Request[v1.SnapshotServiceListRequest]) (*connect_go.Response[v1.SnapshotServiceListResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.SnapshotService.List is not implemented"))
}

func (UnimplementedSnapshotServiceHandler) Delete(context.Context, *connect_go.Request[v1.SnapshotServiceDeleteRequest]) (*connect_go.Response[v1.SnapshotServiceDeleteResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.SnapshotService.Delete is not implemented"))
}
