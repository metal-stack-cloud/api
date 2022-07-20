// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package v1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// TenantServiceClient is the client API for TenantService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TenantServiceClient interface {
	Create(ctx context.Context, in *TenantServiceCreateRequest, opts ...grpc.CallOption) (*TenantServiceCreateResponse, error)
	// CreateOrUpdate should only be used from within the application
	// will check if tenant already exists and updates if necessary, otherwise create a new tenant
	CreateOrUpdate(ctx context.Context, in *TenantServiceCreateOrUpdateRequest, opts ...grpc.CallOption) (*TenantServiceCreateOrUpdateResponse, error)
	Get(ctx context.Context, in *TenantServiceGetRequest, opts ...grpc.CallOption) (*TenantServiceGetResponse, error)
	Update(ctx context.Context, in *TenantServiceUpdateRequest, opts ...grpc.CallOption) (*TenantServiceUpdateResponse, error)
	Delete(ctx context.Context, in *TenantServiceDeleteRequest, opts ...grpc.CallOption) (*TenantServiceDeleteResponse, error)
}

type tenantServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTenantServiceClient(cc grpc.ClientConnInterface) TenantServiceClient {
	return &tenantServiceClient{cc}
}

func (c *tenantServiceClient) Create(ctx context.Context, in *TenantServiceCreateRequest, opts ...grpc.CallOption) (*TenantServiceCreateResponse, error) {
	out := new(TenantServiceCreateResponse)
	err := c.cc.Invoke(ctx, "/api.v1.TenantService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tenantServiceClient) CreateOrUpdate(ctx context.Context, in *TenantServiceCreateOrUpdateRequest, opts ...grpc.CallOption) (*TenantServiceCreateOrUpdateResponse, error) {
	out := new(TenantServiceCreateOrUpdateResponse)
	err := c.cc.Invoke(ctx, "/api.v1.TenantService/CreateOrUpdate", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tenantServiceClient) Get(ctx context.Context, in *TenantServiceGetRequest, opts ...grpc.CallOption) (*TenantServiceGetResponse, error) {
	out := new(TenantServiceGetResponse)
	err := c.cc.Invoke(ctx, "/api.v1.TenantService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tenantServiceClient) Update(ctx context.Context, in *TenantServiceUpdateRequest, opts ...grpc.CallOption) (*TenantServiceUpdateResponse, error) {
	out := new(TenantServiceUpdateResponse)
	err := c.cc.Invoke(ctx, "/api.v1.TenantService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tenantServiceClient) Delete(ctx context.Context, in *TenantServiceDeleteRequest, opts ...grpc.CallOption) (*TenantServiceDeleteResponse, error) {
	out := new(TenantServiceDeleteResponse)
	err := c.cc.Invoke(ctx, "/api.v1.TenantService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TenantServiceServer is the server API for TenantService service.
// All implementations should embed UnimplementedTenantServiceServer
// for forward compatibility
type TenantServiceServer interface {
	Create(context.Context, *TenantServiceCreateRequest) (*TenantServiceCreateResponse, error)
	// CreateOrUpdate should only be used from within the application
	// will check if tenant already exists and updates if necessary, otherwise create a new tenant
	CreateOrUpdate(context.Context, *TenantServiceCreateOrUpdateRequest) (*TenantServiceCreateOrUpdateResponse, error)
	Get(context.Context, *TenantServiceGetRequest) (*TenantServiceGetResponse, error)
	Update(context.Context, *TenantServiceUpdateRequest) (*TenantServiceUpdateResponse, error)
	Delete(context.Context, *TenantServiceDeleteRequest) (*TenantServiceDeleteResponse, error)
}

// UnimplementedTenantServiceServer should be embedded to have forward compatible implementations.
type UnimplementedTenantServiceServer struct {
}

func (UnimplementedTenantServiceServer) Create(context.Context, *TenantServiceCreateRequest) (*TenantServiceCreateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedTenantServiceServer) CreateOrUpdate(context.Context, *TenantServiceCreateOrUpdateRequest) (*TenantServiceCreateOrUpdateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateOrUpdate not implemented")
}
func (UnimplementedTenantServiceServer) Get(context.Context, *TenantServiceGetRequest) (*TenantServiceGetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedTenantServiceServer) Update(context.Context, *TenantServiceUpdateRequest) (*TenantServiceUpdateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedTenantServiceServer) Delete(context.Context, *TenantServiceDeleteRequest) (*TenantServiceDeleteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}

// UnsafeTenantServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TenantServiceServer will
// result in compilation errors.
type UnsafeTenantServiceServer interface {
	mustEmbedUnimplementedTenantServiceServer()
}

func RegisterTenantServiceServer(s grpc.ServiceRegistrar, srv TenantServiceServer) {
	s.RegisterService(&TenantService_ServiceDesc, srv)
}

func _TenantService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TenantServiceCreateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TenantServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.TenantService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TenantServiceServer).Create(ctx, req.(*TenantServiceCreateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TenantService_CreateOrUpdate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TenantServiceCreateOrUpdateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TenantServiceServer).CreateOrUpdate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.TenantService/CreateOrUpdate",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TenantServiceServer).CreateOrUpdate(ctx, req.(*TenantServiceCreateOrUpdateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TenantService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TenantServiceGetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TenantServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.TenantService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TenantServiceServer).Get(ctx, req.(*TenantServiceGetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TenantService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TenantServiceUpdateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TenantServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.TenantService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TenantServiceServer).Update(ctx, req.(*TenantServiceUpdateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TenantService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TenantServiceDeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TenantServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.TenantService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TenantServiceServer).Delete(ctx, req.(*TenantServiceDeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// TenantService_ServiceDesc is the grpc.ServiceDesc for TenantService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var TenantService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "api.v1.TenantService",
	HandlerType: (*TenantServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _TenantService_Create_Handler,
		},
		{
			MethodName: "CreateOrUpdate",
			Handler:    _TenantService_CreateOrUpdate_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _TenantService_Get_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _TenantService_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _TenantService_Delete_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api/v1/tenant.proto",
}
