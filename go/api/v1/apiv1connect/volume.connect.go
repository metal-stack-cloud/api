// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: api/v1/volume.proto

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
	// VolumeServiceUpdateProcedure is the fully-qualified name of the VolumeService's Update RPC.
	VolumeServiceUpdateProcedure = "/api.v1.VolumeService/Update"
	// SnapshotServiceGetProcedure is the fully-qualified name of the SnapshotService's Get RPC.
	SnapshotServiceGetProcedure = "/api.v1.SnapshotService/Get"
	// SnapshotServiceListProcedure is the fully-qualified name of the SnapshotService's List RPC.
	SnapshotServiceListProcedure = "/api.v1.SnapshotService/List"
	// SnapshotServiceDeleteProcedure is the fully-qualified name of the SnapshotService's Delete RPC.
	SnapshotServiceDeleteProcedure = "/api.v1.SnapshotService/Delete"
)

// VolumeServiceClient is a client for the api.v1.VolumeService service.
type VolumeServiceClient interface {
	// Get a volume
	Get(context.Context, *connect.Request[v1.VolumeServiceGetRequest]) (*connect.Response[v1.VolumeServiceGetResponse], error)
	// List the volumes
	List(context.Context, *connect.Request[v1.VolumeServiceListRequest]) (*connect.Response[v1.VolumeServiceListResponse], error)
	// Delete a volume
	Delete(context.Context, *connect.Request[v1.VolumeServiceDeleteRequest]) (*connect.Response[v1.VolumeServiceDeleteResponse], error)
	// Update a volume
	Update(context.Context, *connect.Request[v1.VolumeServiceUpdateRequest]) (*connect.Response[v1.VolumeServiceUpdateResponse], error)
}

// NewVolumeServiceClient constructs a client for the api.v1.VolumeService service. By default, it
// uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewVolumeServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) VolumeServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	volumeServiceMethods := v1.File_api_v1_volume_proto.Services().ByName("VolumeService").Methods()
	return &volumeServiceClient{
		get: connect.NewClient[v1.VolumeServiceGetRequest, v1.VolumeServiceGetResponse](
			httpClient,
			baseURL+VolumeServiceGetProcedure,
			connect.WithSchema(volumeServiceMethods.ByName("Get")),
			connect.WithClientOptions(opts...),
		),
		list: connect.NewClient[v1.VolumeServiceListRequest, v1.VolumeServiceListResponse](
			httpClient,
			baseURL+VolumeServiceListProcedure,
			connect.WithSchema(volumeServiceMethods.ByName("List")),
			connect.WithClientOptions(opts...),
		),
		delete: connect.NewClient[v1.VolumeServiceDeleteRequest, v1.VolumeServiceDeleteResponse](
			httpClient,
			baseURL+VolumeServiceDeleteProcedure,
			connect.WithSchema(volumeServiceMethods.ByName("Delete")),
			connect.WithClientOptions(opts...),
		),
		update: connect.NewClient[v1.VolumeServiceUpdateRequest, v1.VolumeServiceUpdateResponse](
			httpClient,
			baseURL+VolumeServiceUpdateProcedure,
			connect.WithSchema(volumeServiceMethods.ByName("Update")),
			connect.WithClientOptions(opts...),
		),
	}
}

// volumeServiceClient implements VolumeServiceClient.
type volumeServiceClient struct {
	get    *connect.Client[v1.VolumeServiceGetRequest, v1.VolumeServiceGetResponse]
	list   *connect.Client[v1.VolumeServiceListRequest, v1.VolumeServiceListResponse]
	delete *connect.Client[v1.VolumeServiceDeleteRequest, v1.VolumeServiceDeleteResponse]
	update *connect.Client[v1.VolumeServiceUpdateRequest, v1.VolumeServiceUpdateResponse]
}

// Get calls api.v1.VolumeService.Get.
func (c *volumeServiceClient) Get(ctx context.Context, req *connect.Request[v1.VolumeServiceGetRequest]) (*connect.Response[v1.VolumeServiceGetResponse], error) {
	return c.get.CallUnary(ctx, req)
}

// List calls api.v1.VolumeService.List.
func (c *volumeServiceClient) List(ctx context.Context, req *connect.Request[v1.VolumeServiceListRequest]) (*connect.Response[v1.VolumeServiceListResponse], error) {
	return c.list.CallUnary(ctx, req)
}

// Delete calls api.v1.VolumeService.Delete.
func (c *volumeServiceClient) Delete(ctx context.Context, req *connect.Request[v1.VolumeServiceDeleteRequest]) (*connect.Response[v1.VolumeServiceDeleteResponse], error) {
	return c.delete.CallUnary(ctx, req)
}

// Update calls api.v1.VolumeService.Update.
func (c *volumeServiceClient) Update(ctx context.Context, req *connect.Request[v1.VolumeServiceUpdateRequest]) (*connect.Response[v1.VolumeServiceUpdateResponse], error) {
	return c.update.CallUnary(ctx, req)
}

// VolumeServiceHandler is an implementation of the api.v1.VolumeService service.
type VolumeServiceHandler interface {
	// Get a volume
	Get(context.Context, *connect.Request[v1.VolumeServiceGetRequest]) (*connect.Response[v1.VolumeServiceGetResponse], error)
	// List the volumes
	List(context.Context, *connect.Request[v1.VolumeServiceListRequest]) (*connect.Response[v1.VolumeServiceListResponse], error)
	// Delete a volume
	Delete(context.Context, *connect.Request[v1.VolumeServiceDeleteRequest]) (*connect.Response[v1.VolumeServiceDeleteResponse], error)
	// Update a volume
	Update(context.Context, *connect.Request[v1.VolumeServiceUpdateRequest]) (*connect.Response[v1.VolumeServiceUpdateResponse], error)
}

// NewVolumeServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewVolumeServiceHandler(svc VolumeServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	volumeServiceMethods := v1.File_api_v1_volume_proto.Services().ByName("VolumeService").Methods()
	volumeServiceGetHandler := connect.NewUnaryHandler(
		VolumeServiceGetProcedure,
		svc.Get,
		connect.WithSchema(volumeServiceMethods.ByName("Get")),
		connect.WithHandlerOptions(opts...),
	)
	volumeServiceListHandler := connect.NewUnaryHandler(
		VolumeServiceListProcedure,
		svc.List,
		connect.WithSchema(volumeServiceMethods.ByName("List")),
		connect.WithHandlerOptions(opts...),
	)
	volumeServiceDeleteHandler := connect.NewUnaryHandler(
		VolumeServiceDeleteProcedure,
		svc.Delete,
		connect.WithSchema(volumeServiceMethods.ByName("Delete")),
		connect.WithHandlerOptions(opts...),
	)
	volumeServiceUpdateHandler := connect.NewUnaryHandler(
		VolumeServiceUpdateProcedure,
		svc.Update,
		connect.WithSchema(volumeServiceMethods.ByName("Update")),
		connect.WithHandlerOptions(opts...),
	)
	return "/api.v1.VolumeService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case VolumeServiceGetProcedure:
			volumeServiceGetHandler.ServeHTTP(w, r)
		case VolumeServiceListProcedure:
			volumeServiceListHandler.ServeHTTP(w, r)
		case VolumeServiceDeleteProcedure:
			volumeServiceDeleteHandler.ServeHTTP(w, r)
		case VolumeServiceUpdateProcedure:
			volumeServiceUpdateHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedVolumeServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedVolumeServiceHandler struct{}

func (UnimplementedVolumeServiceHandler) Get(context.Context, *connect.Request[v1.VolumeServiceGetRequest]) (*connect.Response[v1.VolumeServiceGetResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.VolumeService.Get is not implemented"))
}

func (UnimplementedVolumeServiceHandler) List(context.Context, *connect.Request[v1.VolumeServiceListRequest]) (*connect.Response[v1.VolumeServiceListResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.VolumeService.List is not implemented"))
}

func (UnimplementedVolumeServiceHandler) Delete(context.Context, *connect.Request[v1.VolumeServiceDeleteRequest]) (*connect.Response[v1.VolumeServiceDeleteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.VolumeService.Delete is not implemented"))
}

func (UnimplementedVolumeServiceHandler) Update(context.Context, *connect.Request[v1.VolumeServiceUpdateRequest]) (*connect.Response[v1.VolumeServiceUpdateResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.VolumeService.Update is not implemented"))
}

// SnapshotServiceClient is a client for the api.v1.SnapshotService service.
type SnapshotServiceClient interface {
	// Get a snapshot
	Get(context.Context, *connect.Request[v1.SnapshotServiceGetRequest]) (*connect.Response[v1.SnapshotServiceGetResponse], error)
	// List snapshots
	List(context.Context, *connect.Request[v1.SnapshotServiceListRequest]) (*connect.Response[v1.SnapshotServiceListResponse], error)
	// Delete a snapshot
	Delete(context.Context, *connect.Request[v1.SnapshotServiceDeleteRequest]) (*connect.Response[v1.SnapshotServiceDeleteResponse], error)
}

// NewSnapshotServiceClient constructs a client for the api.v1.SnapshotService service. By default,
// it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and
// sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC()
// or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewSnapshotServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) SnapshotServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	snapshotServiceMethods := v1.File_api_v1_volume_proto.Services().ByName("SnapshotService").Methods()
	return &snapshotServiceClient{
		get: connect.NewClient[v1.SnapshotServiceGetRequest, v1.SnapshotServiceGetResponse](
			httpClient,
			baseURL+SnapshotServiceGetProcedure,
			connect.WithSchema(snapshotServiceMethods.ByName("Get")),
			connect.WithClientOptions(opts...),
		),
		list: connect.NewClient[v1.SnapshotServiceListRequest, v1.SnapshotServiceListResponse](
			httpClient,
			baseURL+SnapshotServiceListProcedure,
			connect.WithSchema(snapshotServiceMethods.ByName("List")),
			connect.WithClientOptions(opts...),
		),
		delete: connect.NewClient[v1.SnapshotServiceDeleteRequest, v1.SnapshotServiceDeleteResponse](
			httpClient,
			baseURL+SnapshotServiceDeleteProcedure,
			connect.WithSchema(snapshotServiceMethods.ByName("Delete")),
			connect.WithClientOptions(opts...),
		),
	}
}

// snapshotServiceClient implements SnapshotServiceClient.
type snapshotServiceClient struct {
	get    *connect.Client[v1.SnapshotServiceGetRequest, v1.SnapshotServiceGetResponse]
	list   *connect.Client[v1.SnapshotServiceListRequest, v1.SnapshotServiceListResponse]
	delete *connect.Client[v1.SnapshotServiceDeleteRequest, v1.SnapshotServiceDeleteResponse]
}

// Get calls api.v1.SnapshotService.Get.
func (c *snapshotServiceClient) Get(ctx context.Context, req *connect.Request[v1.SnapshotServiceGetRequest]) (*connect.Response[v1.SnapshotServiceGetResponse], error) {
	return c.get.CallUnary(ctx, req)
}

// List calls api.v1.SnapshotService.List.
func (c *snapshotServiceClient) List(ctx context.Context, req *connect.Request[v1.SnapshotServiceListRequest]) (*connect.Response[v1.SnapshotServiceListResponse], error) {
	return c.list.CallUnary(ctx, req)
}

// Delete calls api.v1.SnapshotService.Delete.
func (c *snapshotServiceClient) Delete(ctx context.Context, req *connect.Request[v1.SnapshotServiceDeleteRequest]) (*connect.Response[v1.SnapshotServiceDeleteResponse], error) {
	return c.delete.CallUnary(ctx, req)
}

// SnapshotServiceHandler is an implementation of the api.v1.SnapshotService service.
type SnapshotServiceHandler interface {
	// Get a snapshot
	Get(context.Context, *connect.Request[v1.SnapshotServiceGetRequest]) (*connect.Response[v1.SnapshotServiceGetResponse], error)
	// List snapshots
	List(context.Context, *connect.Request[v1.SnapshotServiceListRequest]) (*connect.Response[v1.SnapshotServiceListResponse], error)
	// Delete a snapshot
	Delete(context.Context, *connect.Request[v1.SnapshotServiceDeleteRequest]) (*connect.Response[v1.SnapshotServiceDeleteResponse], error)
}

// NewSnapshotServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewSnapshotServiceHandler(svc SnapshotServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	snapshotServiceMethods := v1.File_api_v1_volume_proto.Services().ByName("SnapshotService").Methods()
	snapshotServiceGetHandler := connect.NewUnaryHandler(
		SnapshotServiceGetProcedure,
		svc.Get,
		connect.WithSchema(snapshotServiceMethods.ByName("Get")),
		connect.WithHandlerOptions(opts...),
	)
	snapshotServiceListHandler := connect.NewUnaryHandler(
		SnapshotServiceListProcedure,
		svc.List,
		connect.WithSchema(snapshotServiceMethods.ByName("List")),
		connect.WithHandlerOptions(opts...),
	)
	snapshotServiceDeleteHandler := connect.NewUnaryHandler(
		SnapshotServiceDeleteProcedure,
		svc.Delete,
		connect.WithSchema(snapshotServiceMethods.ByName("Delete")),
		connect.WithHandlerOptions(opts...),
	)
	return "/api.v1.SnapshotService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case SnapshotServiceGetProcedure:
			snapshotServiceGetHandler.ServeHTTP(w, r)
		case SnapshotServiceListProcedure:
			snapshotServiceListHandler.ServeHTTP(w, r)
		case SnapshotServiceDeleteProcedure:
			snapshotServiceDeleteHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedSnapshotServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedSnapshotServiceHandler struct{}

func (UnimplementedSnapshotServiceHandler) Get(context.Context, *connect.Request[v1.SnapshotServiceGetRequest]) (*connect.Response[v1.SnapshotServiceGetResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.SnapshotService.Get is not implemented"))
}

func (UnimplementedSnapshotServiceHandler) List(context.Context, *connect.Request[v1.SnapshotServiceListRequest]) (*connect.Response[v1.SnapshotServiceListResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.SnapshotService.List is not implemented"))
}

func (UnimplementedSnapshotServiceHandler) Delete(context.Context, *connect.Request[v1.SnapshotServiceDeleteRequest]) (*connect.Response[v1.SnapshotServiceDeleteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.SnapshotService.Delete is not implemented"))
}
