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

// PaymentServiceClient is the client API for PaymentService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PaymentServiceClient interface {
	CreateOrUpdateCustomer(ctx context.Context, in *PaymentServiceCreateOrUpdateCustomerRequest, opts ...grpc.CallOption) (*PaymentServiceCreateOrUpdateCustomerResponse, error)
	GetCustomer(ctx context.Context, in *PaymentServiceGetCustomerRequest, opts ...grpc.CallOption) (*PaymentServiceGetCustomerResponse, error)
	GetCustomerWithLogin(ctx context.Context, in *PaymentServiceGetCustomerWithLoginRequest, opts ...grpc.CallOption) (*PaymentServiceGetCustomerWithLoginResponse, error)
	CheckIfCustomerExists(ctx context.Context, in *PaymentServiceCheckIfCustomerExistsRequest, opts ...grpc.CallOption) (*PaymentServiceCheckIfCustomerExistsResponse, error)
	HasPaymentMethod(ctx context.Context, in *PaymentServiceHasPaymentMethodRequest, opts ...grpc.CallOption) (*PaymentServiceHasPaymentMethodResponse, error)
	DeletePaymentMethod(ctx context.Context, in *PaymentServiceDeletePaymentMethodRequest, opts ...grpc.CallOption) (*PaymentServiceDeletePaymentMethodResponse, error)
}

type paymentServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPaymentServiceClient(cc grpc.ClientConnInterface) PaymentServiceClient {
	return &paymentServiceClient{cc}
}

func (c *paymentServiceClient) CreateOrUpdateCustomer(ctx context.Context, in *PaymentServiceCreateOrUpdateCustomerRequest, opts ...grpc.CallOption) (*PaymentServiceCreateOrUpdateCustomerResponse, error) {
	out := new(PaymentServiceCreateOrUpdateCustomerResponse)
	err := c.cc.Invoke(ctx, "/api.v1.PaymentService/CreateOrUpdateCustomer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *paymentServiceClient) GetCustomer(ctx context.Context, in *PaymentServiceGetCustomerRequest, opts ...grpc.CallOption) (*PaymentServiceGetCustomerResponse, error) {
	out := new(PaymentServiceGetCustomerResponse)
	err := c.cc.Invoke(ctx, "/api.v1.PaymentService/GetCustomer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *paymentServiceClient) GetCustomerWithLogin(ctx context.Context, in *PaymentServiceGetCustomerWithLoginRequest, opts ...grpc.CallOption) (*PaymentServiceGetCustomerWithLoginResponse, error) {
	out := new(PaymentServiceGetCustomerWithLoginResponse)
	err := c.cc.Invoke(ctx, "/api.v1.PaymentService/GetCustomerWithLogin", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *paymentServiceClient) CheckIfCustomerExists(ctx context.Context, in *PaymentServiceCheckIfCustomerExistsRequest, opts ...grpc.CallOption) (*PaymentServiceCheckIfCustomerExistsResponse, error) {
	out := new(PaymentServiceCheckIfCustomerExistsResponse)
	err := c.cc.Invoke(ctx, "/api.v1.PaymentService/CheckIfCustomerExists", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *paymentServiceClient) HasPaymentMethod(ctx context.Context, in *PaymentServiceHasPaymentMethodRequest, opts ...grpc.CallOption) (*PaymentServiceHasPaymentMethodResponse, error) {
	out := new(PaymentServiceHasPaymentMethodResponse)
	err := c.cc.Invoke(ctx, "/api.v1.PaymentService/HasPaymentMethod", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *paymentServiceClient) DeletePaymentMethod(ctx context.Context, in *PaymentServiceDeletePaymentMethodRequest, opts ...grpc.CallOption) (*PaymentServiceDeletePaymentMethodResponse, error) {
	out := new(PaymentServiceDeletePaymentMethodResponse)
	err := c.cc.Invoke(ctx, "/api.v1.PaymentService/DeletePaymentMethod", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PaymentServiceServer is the server API for PaymentService service.
// All implementations should embed UnimplementedPaymentServiceServer
// for forward compatibility
type PaymentServiceServer interface {
	CreateOrUpdateCustomer(context.Context, *PaymentServiceCreateOrUpdateCustomerRequest) (*PaymentServiceCreateOrUpdateCustomerResponse, error)
	GetCustomer(context.Context, *PaymentServiceGetCustomerRequest) (*PaymentServiceGetCustomerResponse, error)
	GetCustomerWithLogin(context.Context, *PaymentServiceGetCustomerWithLoginRequest) (*PaymentServiceGetCustomerWithLoginResponse, error)
	CheckIfCustomerExists(context.Context, *PaymentServiceCheckIfCustomerExistsRequest) (*PaymentServiceCheckIfCustomerExistsResponse, error)
	HasPaymentMethod(context.Context, *PaymentServiceHasPaymentMethodRequest) (*PaymentServiceHasPaymentMethodResponse, error)
	DeletePaymentMethod(context.Context, *PaymentServiceDeletePaymentMethodRequest) (*PaymentServiceDeletePaymentMethodResponse, error)
}

// UnimplementedPaymentServiceServer should be embedded to have forward compatible implementations.
type UnimplementedPaymentServiceServer struct {
}

func (UnimplementedPaymentServiceServer) CreateOrUpdateCustomer(context.Context, *PaymentServiceCreateOrUpdateCustomerRequest) (*PaymentServiceCreateOrUpdateCustomerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateOrUpdateCustomer not implemented")
}
func (UnimplementedPaymentServiceServer) GetCustomer(context.Context, *PaymentServiceGetCustomerRequest) (*PaymentServiceGetCustomerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCustomer not implemented")
}
func (UnimplementedPaymentServiceServer) GetCustomerWithLogin(context.Context, *PaymentServiceGetCustomerWithLoginRequest) (*PaymentServiceGetCustomerWithLoginResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCustomerWithLogin not implemented")
}
func (UnimplementedPaymentServiceServer) CheckIfCustomerExists(context.Context, *PaymentServiceCheckIfCustomerExistsRequest) (*PaymentServiceCheckIfCustomerExistsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CheckIfCustomerExists not implemented")
}
func (UnimplementedPaymentServiceServer) HasPaymentMethod(context.Context, *PaymentServiceHasPaymentMethodRequest) (*PaymentServiceHasPaymentMethodResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method HasPaymentMethod not implemented")
}
func (UnimplementedPaymentServiceServer) DeletePaymentMethod(context.Context, *PaymentServiceDeletePaymentMethodRequest) (*PaymentServiceDeletePaymentMethodResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeletePaymentMethod not implemented")
}

// UnsafePaymentServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PaymentServiceServer will
// result in compilation errors.
type UnsafePaymentServiceServer interface {
	mustEmbedUnimplementedPaymentServiceServer()
}

func RegisterPaymentServiceServer(s grpc.ServiceRegistrar, srv PaymentServiceServer) {
	s.RegisterService(&PaymentService_ServiceDesc, srv)
}

func _PaymentService_CreateOrUpdateCustomer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PaymentServiceCreateOrUpdateCustomerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PaymentServiceServer).CreateOrUpdateCustomer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.PaymentService/CreateOrUpdateCustomer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PaymentServiceServer).CreateOrUpdateCustomer(ctx, req.(*PaymentServiceCreateOrUpdateCustomerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PaymentService_GetCustomer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PaymentServiceGetCustomerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PaymentServiceServer).GetCustomer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.PaymentService/GetCustomer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PaymentServiceServer).GetCustomer(ctx, req.(*PaymentServiceGetCustomerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PaymentService_GetCustomerWithLogin_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PaymentServiceGetCustomerWithLoginRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PaymentServiceServer).GetCustomerWithLogin(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.PaymentService/GetCustomerWithLogin",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PaymentServiceServer).GetCustomerWithLogin(ctx, req.(*PaymentServiceGetCustomerWithLoginRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PaymentService_CheckIfCustomerExists_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PaymentServiceCheckIfCustomerExistsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PaymentServiceServer).CheckIfCustomerExists(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.PaymentService/CheckIfCustomerExists",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PaymentServiceServer).CheckIfCustomerExists(ctx, req.(*PaymentServiceCheckIfCustomerExistsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PaymentService_HasPaymentMethod_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PaymentServiceHasPaymentMethodRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PaymentServiceServer).HasPaymentMethod(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.PaymentService/HasPaymentMethod",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PaymentServiceServer).HasPaymentMethod(ctx, req.(*PaymentServiceHasPaymentMethodRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PaymentService_DeletePaymentMethod_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PaymentServiceDeletePaymentMethodRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PaymentServiceServer).DeletePaymentMethod(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.v1.PaymentService/DeletePaymentMethod",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PaymentServiceServer).DeletePaymentMethod(ctx, req.(*PaymentServiceDeletePaymentMethodRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PaymentService_ServiceDesc is the grpc.ServiceDesc for PaymentService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PaymentService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "api.v1.PaymentService",
	HandlerType: (*PaymentServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateOrUpdateCustomer",
			Handler:    _PaymentService_CreateOrUpdateCustomer_Handler,
		},
		{
			MethodName: "GetCustomer",
			Handler:    _PaymentService_GetCustomer_Handler,
		},
		{
			MethodName: "GetCustomerWithLogin",
			Handler:    _PaymentService_GetCustomerWithLogin_Handler,
		},
		{
			MethodName: "CheckIfCustomerExists",
			Handler:    _PaymentService_CheckIfCustomerExists_Handler,
		},
		{
			MethodName: "HasPaymentMethod",
			Handler:    _PaymentService_HasPaymentMethod_Handler,
		},
		{
			MethodName: "DeletePaymentMethod",
			Handler:    _PaymentService_DeletePaymentMethod_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api/v1/payment.proto",
}