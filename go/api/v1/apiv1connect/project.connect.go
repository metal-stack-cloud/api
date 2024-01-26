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
	// ProjectServiceCreateProcedure is the fully-qualified name of the ProjectService's Create RPC.
	ProjectServiceCreateProcedure = "/api.v1.ProjectService/Create"
	// ProjectServiceDeleteProcedure is the fully-qualified name of the ProjectService's Delete RPC.
	ProjectServiceDeleteProcedure = "/api.v1.ProjectService/Delete"
	// ProjectServiceUpdateProcedure is the fully-qualified name of the ProjectService's Update RPC.
	ProjectServiceUpdateProcedure = "/api.v1.ProjectService/Update"
	// ProjectServiceInviteProcedure is the fully-qualified name of the ProjectService's Invite RPC.
	ProjectServiceInviteProcedure = "/api.v1.ProjectService/Invite"
	// ProjectServiceListInvitesProcedure is the fully-qualified name of the ProjectService's
	// ListInvites RPC.
	ProjectServiceListInvitesProcedure = "/api.v1.ProjectService/ListInvites"
	// ProjectServiceInviteRefreshProcedure is the fully-qualified name of the ProjectService's
	// InviteRefresh RPC.
	ProjectServiceInviteRefreshProcedure = "/api.v1.ProjectService/InviteRefresh"
	// ProjectServiceRemoveMemberProcedure is the fully-qualified name of the ProjectService's
	// RemoveMember RPC.
	ProjectServiceRemoveMemberProcedure = "/api.v1.ProjectService/RemoveMember"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	projectServiceServiceDescriptor             = v1.File_api_v1_project_proto.Services().ByName("ProjectService")
	projectServiceListMethodDescriptor          = projectServiceServiceDescriptor.Methods().ByName("List")
	projectServiceGetMethodDescriptor           = projectServiceServiceDescriptor.Methods().ByName("Get")
	projectServiceCreateMethodDescriptor        = projectServiceServiceDescriptor.Methods().ByName("Create")
	projectServiceDeleteMethodDescriptor        = projectServiceServiceDescriptor.Methods().ByName("Delete")
	projectServiceUpdateMethodDescriptor        = projectServiceServiceDescriptor.Methods().ByName("Update")
	projectServiceInviteMethodDescriptor        = projectServiceServiceDescriptor.Methods().ByName("Invite")
	projectServiceListInvitesMethodDescriptor   = projectServiceServiceDescriptor.Methods().ByName("ListInvites")
	projectServiceInviteRefreshMethodDescriptor = projectServiceServiceDescriptor.Methods().ByName("InviteRefresh")
	projectServiceRemoveMemberMethodDescriptor  = projectServiceServiceDescriptor.Methods().ByName("RemoveMember")
)

// ProjectServiceClient is a client for the api.v1.ProjectService service.
type ProjectServiceClient interface {
	// List all accessible projects
	List(context.Context, *connect.Request[v1.ProjectServiceListRequest]) (*connect.Response[v1.ProjectServiceListResponse], error)
	// Get a project
	Get(context.Context, *connect.Request[v1.ProjectServiceGetRequest]) (*connect.Response[v1.ProjectServiceGetResponse], error)
	// Create a project
	Create(context.Context, *connect.Request[v1.ProjectServiceCreateRequest]) (*connect.Response[v1.ProjectServiceCreateResponse], error)
	// Delete a project
	Delete(context.Context, *connect.Request[v1.ProjectServiceDeleteRequest]) (*connect.Response[v1.ProjectServiceDeleteResponse], error)
	// Update a project
	Update(context.Context, *connect.Request[v1.ProjectServiceUpdateRequest]) (*connect.Response[v1.ProjectServiceUpdateResponse], error)
	// Invite a user to a project
	Invite(context.Context, *connect.Request[v1.ProjectServiceInviteRequest]) (*connect.Response[v1.ProjectServiceInviteResponse], error)
	// ListInvites list all invites to a project
	ListInvites(context.Context, *connect.Request[v1.ProjectServiceListInvitesRequest]) (*connect.Response[v1.ProjectServiceListInvitesResponse], error)
	// InviteRefresh re-sends an invite to the user and expires the previous invitation link
	InviteRefresh(context.Context, *connect.Request[v1.ProjectServiceInviteRefreshRequest]) (*connect.Response[v1.ProjectServiceInviteRefreshResponse], error)
	// RemoveMember a user from a project
	RemoveMember(context.Context, *connect.Request[v1.ProjectServiceRemoveMemberRequest]) (*connect.Response[v1.ProjectServiceRemoveMemberResponse], error)
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
		create: connect.NewClient[v1.ProjectServiceCreateRequest, v1.ProjectServiceCreateResponse](
			httpClient,
			baseURL+ProjectServiceCreateProcedure,
			connect.WithSchema(projectServiceCreateMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		delete: connect.NewClient[v1.ProjectServiceDeleteRequest, v1.ProjectServiceDeleteResponse](
			httpClient,
			baseURL+ProjectServiceDeleteProcedure,
			connect.WithSchema(projectServiceDeleteMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		update: connect.NewClient[v1.ProjectServiceUpdateRequest, v1.ProjectServiceUpdateResponse](
			httpClient,
			baseURL+ProjectServiceUpdateProcedure,
			connect.WithSchema(projectServiceUpdateMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		invite: connect.NewClient[v1.ProjectServiceInviteRequest, v1.ProjectServiceInviteResponse](
			httpClient,
			baseURL+ProjectServiceInviteProcedure,
			connect.WithSchema(projectServiceInviteMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		listInvites: connect.NewClient[v1.ProjectServiceListInvitesRequest, v1.ProjectServiceListInvitesResponse](
			httpClient,
			baseURL+ProjectServiceListInvitesProcedure,
			connect.WithSchema(projectServiceListInvitesMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		inviteRefresh: connect.NewClient[v1.ProjectServiceInviteRefreshRequest, v1.ProjectServiceInviteRefreshResponse](
			httpClient,
			baseURL+ProjectServiceInviteRefreshProcedure,
			connect.WithSchema(projectServiceInviteRefreshMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		removeMember: connect.NewClient[v1.ProjectServiceRemoveMemberRequest, v1.ProjectServiceRemoveMemberResponse](
			httpClient,
			baseURL+ProjectServiceRemoveMemberProcedure,
			connect.WithSchema(projectServiceRemoveMemberMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// projectServiceClient implements ProjectServiceClient.
type projectServiceClient struct {
	list          *connect.Client[v1.ProjectServiceListRequest, v1.ProjectServiceListResponse]
	get           *connect.Client[v1.ProjectServiceGetRequest, v1.ProjectServiceGetResponse]
	create        *connect.Client[v1.ProjectServiceCreateRequest, v1.ProjectServiceCreateResponse]
	delete        *connect.Client[v1.ProjectServiceDeleteRequest, v1.ProjectServiceDeleteResponse]
	update        *connect.Client[v1.ProjectServiceUpdateRequest, v1.ProjectServiceUpdateResponse]
	invite        *connect.Client[v1.ProjectServiceInviteRequest, v1.ProjectServiceInviteResponse]
	listInvites   *connect.Client[v1.ProjectServiceListInvitesRequest, v1.ProjectServiceListInvitesResponse]
	inviteRefresh *connect.Client[v1.ProjectServiceInviteRefreshRequest, v1.ProjectServiceInviteRefreshResponse]
	removeMember  *connect.Client[v1.ProjectServiceRemoveMemberRequest, v1.ProjectServiceRemoveMemberResponse]
}

// List calls api.v1.ProjectService.List.
func (c *projectServiceClient) List(ctx context.Context, req *connect.Request[v1.ProjectServiceListRequest]) (*connect.Response[v1.ProjectServiceListResponse], error) {
	return c.list.CallUnary(ctx, req)
}

// Get calls api.v1.ProjectService.Get.
func (c *projectServiceClient) Get(ctx context.Context, req *connect.Request[v1.ProjectServiceGetRequest]) (*connect.Response[v1.ProjectServiceGetResponse], error) {
	return c.get.CallUnary(ctx, req)
}

// Create calls api.v1.ProjectService.Create.
func (c *projectServiceClient) Create(ctx context.Context, req *connect.Request[v1.ProjectServiceCreateRequest]) (*connect.Response[v1.ProjectServiceCreateResponse], error) {
	return c.create.CallUnary(ctx, req)
}

// Delete calls api.v1.ProjectService.Delete.
func (c *projectServiceClient) Delete(ctx context.Context, req *connect.Request[v1.ProjectServiceDeleteRequest]) (*connect.Response[v1.ProjectServiceDeleteResponse], error) {
	return c.delete.CallUnary(ctx, req)
}

// Update calls api.v1.ProjectService.Update.
func (c *projectServiceClient) Update(ctx context.Context, req *connect.Request[v1.ProjectServiceUpdateRequest]) (*connect.Response[v1.ProjectServiceUpdateResponse], error) {
	return c.update.CallUnary(ctx, req)
}

// Invite calls api.v1.ProjectService.Invite.
func (c *projectServiceClient) Invite(ctx context.Context, req *connect.Request[v1.ProjectServiceInviteRequest]) (*connect.Response[v1.ProjectServiceInviteResponse], error) {
	return c.invite.CallUnary(ctx, req)
}

// ListInvites calls api.v1.ProjectService.ListInvites.
func (c *projectServiceClient) ListInvites(ctx context.Context, req *connect.Request[v1.ProjectServiceListInvitesRequest]) (*connect.Response[v1.ProjectServiceListInvitesResponse], error) {
	return c.listInvites.CallUnary(ctx, req)
}

// InviteRefresh calls api.v1.ProjectService.InviteRefresh.
func (c *projectServiceClient) InviteRefresh(ctx context.Context, req *connect.Request[v1.ProjectServiceInviteRefreshRequest]) (*connect.Response[v1.ProjectServiceInviteRefreshResponse], error) {
	return c.inviteRefresh.CallUnary(ctx, req)
}

// RemoveMember calls api.v1.ProjectService.RemoveMember.
func (c *projectServiceClient) RemoveMember(ctx context.Context, req *connect.Request[v1.ProjectServiceRemoveMemberRequest]) (*connect.Response[v1.ProjectServiceRemoveMemberResponse], error) {
	return c.removeMember.CallUnary(ctx, req)
}

// ProjectServiceHandler is an implementation of the api.v1.ProjectService service.
type ProjectServiceHandler interface {
	// List all accessible projects
	List(context.Context, *connect.Request[v1.ProjectServiceListRequest]) (*connect.Response[v1.ProjectServiceListResponse], error)
	// Get a project
	Get(context.Context, *connect.Request[v1.ProjectServiceGetRequest]) (*connect.Response[v1.ProjectServiceGetResponse], error)
	// Create a project
	Create(context.Context, *connect.Request[v1.ProjectServiceCreateRequest]) (*connect.Response[v1.ProjectServiceCreateResponse], error)
	// Delete a project
	Delete(context.Context, *connect.Request[v1.ProjectServiceDeleteRequest]) (*connect.Response[v1.ProjectServiceDeleteResponse], error)
	// Update a project
	Update(context.Context, *connect.Request[v1.ProjectServiceUpdateRequest]) (*connect.Response[v1.ProjectServiceUpdateResponse], error)
	// Invite a user to a project
	Invite(context.Context, *connect.Request[v1.ProjectServiceInviteRequest]) (*connect.Response[v1.ProjectServiceInviteResponse], error)
	// ListInvites list all invites to a project
	ListInvites(context.Context, *connect.Request[v1.ProjectServiceListInvitesRequest]) (*connect.Response[v1.ProjectServiceListInvitesResponse], error)
	// InviteRefresh re-sends an invite to the user and expires the previous invitation link
	InviteRefresh(context.Context, *connect.Request[v1.ProjectServiceInviteRefreshRequest]) (*connect.Response[v1.ProjectServiceInviteRefreshResponse], error)
	// RemoveMember a user from a project
	RemoveMember(context.Context, *connect.Request[v1.ProjectServiceRemoveMemberRequest]) (*connect.Response[v1.ProjectServiceRemoveMemberResponse], error)
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
	projectServiceCreateHandler := connect.NewUnaryHandler(
		ProjectServiceCreateProcedure,
		svc.Create,
		connect.WithSchema(projectServiceCreateMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	projectServiceDeleteHandler := connect.NewUnaryHandler(
		ProjectServiceDeleteProcedure,
		svc.Delete,
		connect.WithSchema(projectServiceDeleteMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	projectServiceUpdateHandler := connect.NewUnaryHandler(
		ProjectServiceUpdateProcedure,
		svc.Update,
		connect.WithSchema(projectServiceUpdateMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	projectServiceInviteHandler := connect.NewUnaryHandler(
		ProjectServiceInviteProcedure,
		svc.Invite,
		connect.WithSchema(projectServiceInviteMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	projectServiceListInvitesHandler := connect.NewUnaryHandler(
		ProjectServiceListInvitesProcedure,
		svc.ListInvites,
		connect.WithSchema(projectServiceListInvitesMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	projectServiceInviteRefreshHandler := connect.NewUnaryHandler(
		ProjectServiceInviteRefreshProcedure,
		svc.InviteRefresh,
		connect.WithSchema(projectServiceInviteRefreshMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	projectServiceRemoveMemberHandler := connect.NewUnaryHandler(
		ProjectServiceRemoveMemberProcedure,
		svc.RemoveMember,
		connect.WithSchema(projectServiceRemoveMemberMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/api.v1.ProjectService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case ProjectServiceListProcedure:
			projectServiceListHandler.ServeHTTP(w, r)
		case ProjectServiceGetProcedure:
			projectServiceGetHandler.ServeHTTP(w, r)
		case ProjectServiceCreateProcedure:
			projectServiceCreateHandler.ServeHTTP(w, r)
		case ProjectServiceDeleteProcedure:
			projectServiceDeleteHandler.ServeHTTP(w, r)
		case ProjectServiceUpdateProcedure:
			projectServiceUpdateHandler.ServeHTTP(w, r)
		case ProjectServiceInviteProcedure:
			projectServiceInviteHandler.ServeHTTP(w, r)
		case ProjectServiceListInvitesProcedure:
			projectServiceListInvitesHandler.ServeHTTP(w, r)
		case ProjectServiceInviteRefreshProcedure:
			projectServiceInviteRefreshHandler.ServeHTTP(w, r)
		case ProjectServiceRemoveMemberProcedure:
			projectServiceRemoveMemberHandler.ServeHTTP(w, r)
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

func (UnimplementedProjectServiceHandler) Create(context.Context, *connect.Request[v1.ProjectServiceCreateRequest]) (*connect.Response[v1.ProjectServiceCreateResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.ProjectService.Create is not implemented"))
}

func (UnimplementedProjectServiceHandler) Delete(context.Context, *connect.Request[v1.ProjectServiceDeleteRequest]) (*connect.Response[v1.ProjectServiceDeleteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.ProjectService.Delete is not implemented"))
}

func (UnimplementedProjectServiceHandler) Update(context.Context, *connect.Request[v1.ProjectServiceUpdateRequest]) (*connect.Response[v1.ProjectServiceUpdateResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.ProjectService.Update is not implemented"))
}

func (UnimplementedProjectServiceHandler) Invite(context.Context, *connect.Request[v1.ProjectServiceInviteRequest]) (*connect.Response[v1.ProjectServiceInviteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.ProjectService.Invite is not implemented"))
}

func (UnimplementedProjectServiceHandler) ListInvites(context.Context, *connect.Request[v1.ProjectServiceListInvitesRequest]) (*connect.Response[v1.ProjectServiceListInvitesResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.ProjectService.ListInvites is not implemented"))
}

func (UnimplementedProjectServiceHandler) InviteRefresh(context.Context, *connect.Request[v1.ProjectServiceInviteRefreshRequest]) (*connect.Response[v1.ProjectServiceInviteRefreshResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.ProjectService.InviteRefresh is not implemented"))
}

func (UnimplementedProjectServiceHandler) RemoveMember(context.Context, *connect.Request[v1.ProjectServiceRemoveMemberRequest]) (*connect.Response[v1.ProjectServiceRemoveMemberResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.ProjectService.RemoveMember is not implemented"))
}
