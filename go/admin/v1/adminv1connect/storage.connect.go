// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: admin/v1/storage.proto

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
	// StorageServiceName is the fully-qualified name of the StorageService service.
	StorageServiceName = "admin.v1.StorageService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// StorageServiceClusterInfoProcedure is the fully-qualified name of the StorageService's
	// ClusterInfo RPC.
	StorageServiceClusterInfoProcedure = "/admin.v1.StorageService/ClusterInfo"
	// StorageServiceListVolumesProcedure is the fully-qualified name of the StorageService's
	// ListVolumes RPC.
	StorageServiceListVolumesProcedure = "/admin.v1.StorageService/ListVolumes"
	// StorageServiceListSnapshotsProcedure is the fully-qualified name of the StorageService's
	// ListSnapshots RPC.
	StorageServiceListSnapshotsProcedure = "/admin.v1.StorageService/ListSnapshots"
)

// StorageServiceClient is a client for the admin.v1.StorageService service.
type StorageServiceClient interface {
	ClusterInfo(context.Context, *connect_go.Request[v1.StorageServiceClusterInfoRequest]) (*connect_go.Response[v1.StorageServiceClusterInfoResponse], error)
	ListVolumes(context.Context, *connect_go.Request[v1.StorageServiceListVolumesRequest]) (*connect_go.Response[v1.StorageServiceListVolumesResponse], error)
	ListSnapshots(context.Context, *connect_go.Request[v1.StorageServiceListSnapshotsRequest]) (*connect_go.Response[v1.StorageServiceListSnapshotsResponse], error)
}

// NewStorageServiceClient constructs a client for the admin.v1.StorageService service. By default,
// it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and
// sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC()
// or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewStorageServiceClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) StorageServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &storageServiceClient{
		clusterInfo: connect_go.NewClient[v1.StorageServiceClusterInfoRequest, v1.StorageServiceClusterInfoResponse](
			httpClient,
			baseURL+StorageServiceClusterInfoProcedure,
			opts...,
		),
		listVolumes: connect_go.NewClient[v1.StorageServiceListVolumesRequest, v1.StorageServiceListVolumesResponse](
			httpClient,
			baseURL+StorageServiceListVolumesProcedure,
			opts...,
		),
		listSnapshots: connect_go.NewClient[v1.StorageServiceListSnapshotsRequest, v1.StorageServiceListSnapshotsResponse](
			httpClient,
			baseURL+StorageServiceListSnapshotsProcedure,
			opts...,
		),
	}
}

// storageServiceClient implements StorageServiceClient.
type storageServiceClient struct {
	clusterInfo   *connect_go.Client[v1.StorageServiceClusterInfoRequest, v1.StorageServiceClusterInfoResponse]
	listVolumes   *connect_go.Client[v1.StorageServiceListVolumesRequest, v1.StorageServiceListVolumesResponse]
	listSnapshots *connect_go.Client[v1.StorageServiceListSnapshotsRequest, v1.StorageServiceListSnapshotsResponse]
}

// ClusterInfo calls admin.v1.StorageService.ClusterInfo.
func (c *storageServiceClient) ClusterInfo(ctx context.Context, req *connect_go.Request[v1.StorageServiceClusterInfoRequest]) (*connect_go.Response[v1.StorageServiceClusterInfoResponse], error) {
	return c.clusterInfo.CallUnary(ctx, req)
}

// ListVolumes calls admin.v1.StorageService.ListVolumes.
func (c *storageServiceClient) ListVolumes(ctx context.Context, req *connect_go.Request[v1.StorageServiceListVolumesRequest]) (*connect_go.Response[v1.StorageServiceListVolumesResponse], error) {
	return c.listVolumes.CallUnary(ctx, req)
}

// ListSnapshots calls admin.v1.StorageService.ListSnapshots.
func (c *storageServiceClient) ListSnapshots(ctx context.Context, req *connect_go.Request[v1.StorageServiceListSnapshotsRequest]) (*connect_go.Response[v1.StorageServiceListSnapshotsResponse], error) {
	return c.listSnapshots.CallUnary(ctx, req)
}

// StorageServiceHandler is an implementation of the admin.v1.StorageService service.
type StorageServiceHandler interface {
	ClusterInfo(context.Context, *connect_go.Request[v1.StorageServiceClusterInfoRequest]) (*connect_go.Response[v1.StorageServiceClusterInfoResponse], error)
	ListVolumes(context.Context, *connect_go.Request[v1.StorageServiceListVolumesRequest]) (*connect_go.Response[v1.StorageServiceListVolumesResponse], error)
	ListSnapshots(context.Context, *connect_go.Request[v1.StorageServiceListSnapshotsRequest]) (*connect_go.Response[v1.StorageServiceListSnapshotsResponse], error)
}

// NewStorageServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewStorageServiceHandler(svc StorageServiceHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	mux := http.NewServeMux()
	mux.Handle(StorageServiceClusterInfoProcedure, connect_go.NewUnaryHandler(
		StorageServiceClusterInfoProcedure,
		svc.ClusterInfo,
		opts...,
	))
	mux.Handle(StorageServiceListVolumesProcedure, connect_go.NewUnaryHandler(
		StorageServiceListVolumesProcedure,
		svc.ListVolumes,
		opts...,
	))
	mux.Handle(StorageServiceListSnapshotsProcedure, connect_go.NewUnaryHandler(
		StorageServiceListSnapshotsProcedure,
		svc.ListSnapshots,
		opts...,
	))
	return "/admin.v1.StorageService/", mux
}

// UnimplementedStorageServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedStorageServiceHandler struct{}

func (UnimplementedStorageServiceHandler) ClusterInfo(context.Context, *connect_go.Request[v1.StorageServiceClusterInfoRequest]) (*connect_go.Response[v1.StorageServiceClusterInfoResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("admin.v1.StorageService.ClusterInfo is not implemented"))
}

func (UnimplementedStorageServiceHandler) ListVolumes(context.Context, *connect_go.Request[v1.StorageServiceListVolumesRequest]) (*connect_go.Response[v1.StorageServiceListVolumesResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("admin.v1.StorageService.ListVolumes is not implemented"))
}

func (UnimplementedStorageServiceHandler) ListSnapshots(context.Context, *connect_go.Request[v1.StorageServiceListSnapshotsRequest]) (*connect_go.Response[v1.StorageServiceListSnapshotsResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("admin.v1.StorageService.ListSnapshots is not implemented"))
}
