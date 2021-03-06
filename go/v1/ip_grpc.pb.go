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

// IPServiceClient is the client API for IPService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type IPServiceClient interface {
	Get(ctx context.Context, in *IPServiceGetRequest, opts ...grpc.CallOption) (*IPServiceGetResponse, error)
	Allocate(ctx context.Context, in *IPServiceAllocateRequest, opts ...grpc.CallOption) (*IPServiceAllocateResponse, error)
	Static(ctx context.Context, in *IPServiceStaticRequest, opts ...grpc.CallOption) (*IPServiceStaticResponse, error)
	List(ctx context.Context, in *IPServiceListRequest, opts ...grpc.CallOption) (*IPServiceListResponse, error)
	Delete(ctx context.Context, in *IPServiceDeleteRequest, opts ...grpc.CallOption) (*IPServiceDeleteResponse, error)
}

type iPServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewIPServiceClient(cc grpc.ClientConnInterface) IPServiceClient {
	return &iPServiceClient{cc}
}

func (c *iPServiceClient) Get(ctx context.Context, in *IPServiceGetRequest, opts ...grpc.CallOption) (*IPServiceGetResponse, error) {
	out := new(IPServiceGetResponse)
	err := c.cc.Invoke(ctx, "/api.v1.IPService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *iPServiceClient) Allocate(ctx context.Context, in *IPServiceAllocateRequest, opts ...grpc.CallOption) (*IPServiceAllocateResponse, error) {
	out := new(IPServiceAllocateResponse)
	err := c.cc.Invoke(ctx, "/api.v1.IPService/Allocate", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *iPServiceClient) Static(ctx context.Context, in *IPServiceStaticRequest, opts ...grpc.CallOption) (*IPServiceStaticResponse, error) {
	out := new(IPServiceStaticResponse)
	err := c.cc.Invoke(ctx, "/api.v1.IPService/Static", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *iPServiceClient) List(ctx context.Context, in *IPServiceListRequest, opts ...grpc.CallOption) (*IPServiceListResponse, error) {
	out := new(IPServiceListResponse)
	err := c.cc.Invoke(ctx, "/api.v1.IPService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *iPServiceClient) Delete(ctx context.Context, in *IPServiceDeleteRequest, opts ...grpc.CallOption) (*IPServiceDeleteResponse, error) {
	out := new(IPServiceDeleteResponse)
	err := c.cc.Invoke(ctx, "/api.v1.IPService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// IPServiceServer is the server API for IPService service.
// All implementations should embed UnimplementedIPServiceServer
// for forward compatibility
type IPServiceServer interface {
	Get(context.Context, *IPServiceGetRequest) (*IPServiceGetResponse, error)
	Allocate(context.Context, *IPServiceAllocateRequest) (*IPServiceAllocateResponse, error)
	Static(context.Context, *IPServiceStaticRequest) (*IPServiceStaticResponse, error)
	List(context.Context, *IPServiceListRequest) (*IPServiceListResponse, error)
	Delete(context.Context, *IPServiceDeleteRequest) (*IPServiceDeleteResponse, error)
}

// UnimplementedIPServiceServer should be embedded to have forward compatible implementations.
type UnimplementedIPServiceServer struct {
}

func (UnimplementedIPServiceServer) Get(context.Context, *IPServiceGetRequest) (*IPServiceGetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedIPServiceServer) Allocate(context.Context, *IPServiceAllocateRequest) (*IPServiceAllocateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Allocate not implemented")
}
func (UnimplementedIPServiceServer) Static(context.Context, *IPServiceStaticRequest) (*IPServiceStaticResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Static not implemented")
}
func (UnimplementedIPServiceServer) List(context.Context, *IPServiceListRequest) (*IPServiceListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedIPServiceServer) Delete(context.Context, *IPServiceDeleteRequest) (*IPServiceDeleteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}

// UnsafeIPServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to IPServiceServer will
// result in compilation errors.
type UnsafeIPServiceServer interface {
	mustEmbedUnimplementedIPServiceServer()
}

func RegisterIPServiceServer(s grpc.ServiceRegistrar, srv IPServiceServer) {
	s.RegisterService(&IPService_ServiceDesc, srv)
}

func _IPService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(IPServiceGetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IPServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.IPService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IPServiceServer).Get(ctx, req.(*IPServiceGetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IPService_Allocate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(IPServiceAllocateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IPServiceServer).Allocate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.IPService/Allocate",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IPServiceServer).Allocate(ctx, req.(*IPServiceAllocateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IPService_Static_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(IPServiceStaticRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IPServiceServer).Static(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.IPService/Static",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IPServiceServer).Static(ctx, req.(*IPServiceStaticRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IPService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(IPServiceListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IPServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.IPService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IPServiceServer).List(ctx, req.(*IPServiceListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IPService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(IPServiceDeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IPServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.IPService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IPServiceServer).Delete(ctx, req.(*IPServiceDeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// IPService_ServiceDesc is the grpc.ServiceDesc for IPService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var IPService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "api.v1.IPService",
	HandlerType: (*IPServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Get",
			Handler:    _IPService_Get_Handler,
		},
		{
			MethodName: "Allocate",
			Handler:    _IPService_Allocate_Handler,
		},
		{
			MethodName: "Static",
			Handler:    _IPService_Static_Handler,
		},
		{
			MethodName: "List",
			Handler:    _IPService_List_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _IPService_Delete_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api/v1/ip.proto",
}
