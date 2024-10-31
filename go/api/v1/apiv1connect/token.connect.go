// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: api/v1/token.proto

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
	// TokenServiceName is the fully-qualified name of the TokenService service.
	TokenServiceName = "api.v1.TokenService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// TokenServiceCreateProcedure is the fully-qualified name of the TokenService's Create RPC.
	TokenServiceCreateProcedure = "/api.v1.TokenService/Create"
	// TokenServiceUpdateProcedure is the fully-qualified name of the TokenService's Update RPC.
	TokenServiceUpdateProcedure = "/api.v1.TokenService/Update"
	// TokenServiceListProcedure is the fully-qualified name of the TokenService's List RPC.
	TokenServiceListProcedure = "/api.v1.TokenService/List"
	// TokenServiceRevokeProcedure is the fully-qualified name of the TokenService's Revoke RPC.
	TokenServiceRevokeProcedure = "/api.v1.TokenService/Revoke"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	tokenServiceServiceDescriptor      = v1.File_api_v1_token_proto.Services().ByName("TokenService")
	tokenServiceCreateMethodDescriptor = tokenServiceServiceDescriptor.Methods().ByName("Create")
	tokenServiceUpdateMethodDescriptor = tokenServiceServiceDescriptor.Methods().ByName("Update")
	tokenServiceListMethodDescriptor   = tokenServiceServiceDescriptor.Methods().ByName("List")
	tokenServiceRevokeMethodDescriptor = tokenServiceServiceDescriptor.Methods().ByName("Revoke")
)

// TokenServiceClient is a client for the api.v1.TokenService service.
type TokenServiceClient interface {
	// Create a token to authenticate against the platform, the secret will be only visible in the response
	Create(context.Context, *connect.Request[v1.TokenServiceCreateRequest]) (*connect.Response[v1.TokenServiceCreateResponse], error)
	// Update a token
	Update(context.Context, *connect.Request[v1.TokenServiceUpdateRequest]) (*connect.Response[v1.TokenServiceUpdateResponse], error)
	// List all your tokens
	List(context.Context, *connect.Request[v1.TokenServiceListRequest]) (*connect.Response[v1.TokenServiceListResponse], error)
	// Revoke a token, no further usage is possible afterwards
	Revoke(context.Context, *connect.Request[v1.TokenServiceRevokeRequest]) (*connect.Response[v1.TokenServiceRevokeResponse], error)
}

// NewTokenServiceClient constructs a client for the api.v1.TokenService service. By default, it
// uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewTokenServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) TokenServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &tokenServiceClient{
		create: connect.NewClient[v1.TokenServiceCreateRequest, v1.TokenServiceCreateResponse](
			httpClient,
			baseURL+TokenServiceCreateProcedure,
			connect.WithSchema(tokenServiceCreateMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		update: connect.NewClient[v1.TokenServiceUpdateRequest, v1.TokenServiceUpdateResponse](
			httpClient,
			baseURL+TokenServiceUpdateProcedure,
			connect.WithSchema(tokenServiceUpdateMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		list: connect.NewClient[v1.TokenServiceListRequest, v1.TokenServiceListResponse](
			httpClient,
			baseURL+TokenServiceListProcedure,
			connect.WithSchema(tokenServiceListMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		revoke: connect.NewClient[v1.TokenServiceRevokeRequest, v1.TokenServiceRevokeResponse](
			httpClient,
			baseURL+TokenServiceRevokeProcedure,
			connect.WithSchema(tokenServiceRevokeMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// tokenServiceClient implements TokenServiceClient.
type tokenServiceClient struct {
	create *connect.Client[v1.TokenServiceCreateRequest, v1.TokenServiceCreateResponse]
	update *connect.Client[v1.TokenServiceUpdateRequest, v1.TokenServiceUpdateResponse]
	list   *connect.Client[v1.TokenServiceListRequest, v1.TokenServiceListResponse]
	revoke *connect.Client[v1.TokenServiceRevokeRequest, v1.TokenServiceRevokeResponse]
}

// Create calls api.v1.TokenService.Create.
func (c *tokenServiceClient) Create(ctx context.Context, req *connect.Request[v1.TokenServiceCreateRequest]) (*connect.Response[v1.TokenServiceCreateResponse], error) {
	return c.create.CallUnary(ctx, req)
}

// Update calls api.v1.TokenService.Update.
func (c *tokenServiceClient) Update(ctx context.Context, req *connect.Request[v1.TokenServiceUpdateRequest]) (*connect.Response[v1.TokenServiceUpdateResponse], error) {
	return c.update.CallUnary(ctx, req)
}

// List calls api.v1.TokenService.List.
func (c *tokenServiceClient) List(ctx context.Context, req *connect.Request[v1.TokenServiceListRequest]) (*connect.Response[v1.TokenServiceListResponse], error) {
	return c.list.CallUnary(ctx, req)
}

// Revoke calls api.v1.TokenService.Revoke.
func (c *tokenServiceClient) Revoke(ctx context.Context, req *connect.Request[v1.TokenServiceRevokeRequest]) (*connect.Response[v1.TokenServiceRevokeResponse], error) {
	return c.revoke.CallUnary(ctx, req)
}

// TokenServiceHandler is an implementation of the api.v1.TokenService service.
type TokenServiceHandler interface {
	// Create a token to authenticate against the platform, the secret will be only visible in the response
	Create(context.Context, *connect.Request[v1.TokenServiceCreateRequest]) (*connect.Response[v1.TokenServiceCreateResponse], error)
	// Update a token
	Update(context.Context, *connect.Request[v1.TokenServiceUpdateRequest]) (*connect.Response[v1.TokenServiceUpdateResponse], error)
	// List all your tokens
	List(context.Context, *connect.Request[v1.TokenServiceListRequest]) (*connect.Response[v1.TokenServiceListResponse], error)
	// Revoke a token, no further usage is possible afterwards
	Revoke(context.Context, *connect.Request[v1.TokenServiceRevokeRequest]) (*connect.Response[v1.TokenServiceRevokeResponse], error)
}

// NewTokenServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewTokenServiceHandler(svc TokenServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	tokenServiceCreateHandler := connect.NewUnaryHandler(
		TokenServiceCreateProcedure,
		svc.Create,
		connect.WithSchema(tokenServiceCreateMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	tokenServiceUpdateHandler := connect.NewUnaryHandler(
		TokenServiceUpdateProcedure,
		svc.Update,
		connect.WithSchema(tokenServiceUpdateMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	tokenServiceListHandler := connect.NewUnaryHandler(
		TokenServiceListProcedure,
		svc.List,
		connect.WithSchema(tokenServiceListMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	tokenServiceRevokeHandler := connect.NewUnaryHandler(
		TokenServiceRevokeProcedure,
		svc.Revoke,
		connect.WithSchema(tokenServiceRevokeMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/api.v1.TokenService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case TokenServiceCreateProcedure:
			tokenServiceCreateHandler.ServeHTTP(w, r)
		case TokenServiceUpdateProcedure:
			tokenServiceUpdateHandler.ServeHTTP(w, r)
		case TokenServiceListProcedure:
			tokenServiceListHandler.ServeHTTP(w, r)
		case TokenServiceRevokeProcedure:
			tokenServiceRevokeHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedTokenServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedTokenServiceHandler struct{}

func (UnimplementedTokenServiceHandler) Create(context.Context, *connect.Request[v1.TokenServiceCreateRequest]) (*connect.Response[v1.TokenServiceCreateResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.TokenService.Create is not implemented"))
}

func (UnimplementedTokenServiceHandler) Update(context.Context, *connect.Request[v1.TokenServiceUpdateRequest]) (*connect.Response[v1.TokenServiceUpdateResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.TokenService.Update is not implemented"))
}

func (UnimplementedTokenServiceHandler) List(context.Context, *connect.Request[v1.TokenServiceListRequest]) (*connect.Response[v1.TokenServiceListResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.TokenService.List is not implemented"))
}

func (UnimplementedTokenServiceHandler) Revoke(context.Context, *connect.Request[v1.TokenServiceRevokeRequest]) (*connect.Response[v1.TokenServiceRevokeResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.TokenService.Revoke is not implemented"))
}
