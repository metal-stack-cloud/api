// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: admin/v1/payment.proto

package adminv1connect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	v1 "github.com/metal-stack-cloud/api/go/admin/v1"
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
	// PaymentServiceName is the fully-qualified name of the PaymentService service.
	PaymentServiceName = "admin.v1.PaymentService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// PaymentServiceListCouponsProcedure is the fully-qualified name of the PaymentService's
	// ListCoupons RPC.
	PaymentServiceListCouponsProcedure = "/admin.v1.PaymentService/ListCoupons"
	// PaymentServiceAddCouponToCustomerProcedure is the fully-qualified name of the PaymentService's
	// AddCouponToCustomer RPC.
	PaymentServiceAddCouponToCustomerProcedure = "/admin.v1.PaymentService/AddCouponToCustomer"
	// PaymentServiceAddBalanceToCustomerProcedure is the fully-qualified name of the PaymentService's
	// AddBalanceToCustomer RPC.
	PaymentServiceAddBalanceToCustomerProcedure = "/admin.v1.PaymentService/AddBalanceToCustomer"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	paymentServiceServiceDescriptor                    = v1.File_admin_v1_payment_proto.Services().ByName("PaymentService")
	paymentServiceListCouponsMethodDescriptor          = paymentServiceServiceDescriptor.Methods().ByName("ListCoupons")
	paymentServiceAddCouponToCustomerMethodDescriptor  = paymentServiceServiceDescriptor.Methods().ByName("AddCouponToCustomer")
	paymentServiceAddBalanceToCustomerMethodDescriptor = paymentServiceServiceDescriptor.Methods().ByName("AddBalanceToCustomer")
)

// PaymentServiceClient is a client for the admin.v1.PaymentService service.
type PaymentServiceClient interface {
	ListCoupons(context.Context, *connect.Request[v1.PaymentServiceListCouponsRequest]) (*connect.Response[v1.PaymentServiceListCouponsResponse], error)
	AddCouponToCustomer(context.Context, *connect.Request[v1.PaymentServiceAddCouponToCustomerRequest]) (*connect.Response[v1.PaymentServiceAddCouponToCustomerResponse], error)
	AddBalanceToCustomer(context.Context, *connect.Request[v1.PaymentServiceAddBalanceToCustomerRequest]) (*connect.Response[v1.PaymentServiceAddBalanceToCustomerResponse], error)
}

// NewPaymentServiceClient constructs a client for the admin.v1.PaymentService service. By default,
// it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and
// sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC()
// or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewPaymentServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) PaymentServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &paymentServiceClient{
		listCoupons: connect.NewClient[v1.PaymentServiceListCouponsRequest, v1.PaymentServiceListCouponsResponse](
			httpClient,
			baseURL+PaymentServiceListCouponsProcedure,
			connect.WithSchema(paymentServiceListCouponsMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		addCouponToCustomer: connect.NewClient[v1.PaymentServiceAddCouponToCustomerRequest, v1.PaymentServiceAddCouponToCustomerResponse](
			httpClient,
			baseURL+PaymentServiceAddCouponToCustomerProcedure,
			connect.WithSchema(paymentServiceAddCouponToCustomerMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		addBalanceToCustomer: connect.NewClient[v1.PaymentServiceAddBalanceToCustomerRequest, v1.PaymentServiceAddBalanceToCustomerResponse](
			httpClient,
			baseURL+PaymentServiceAddBalanceToCustomerProcedure,
			connect.WithSchema(paymentServiceAddBalanceToCustomerMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// paymentServiceClient implements PaymentServiceClient.
type paymentServiceClient struct {
	listCoupons          *connect.Client[v1.PaymentServiceListCouponsRequest, v1.PaymentServiceListCouponsResponse]
	addCouponToCustomer  *connect.Client[v1.PaymentServiceAddCouponToCustomerRequest, v1.PaymentServiceAddCouponToCustomerResponse]
	addBalanceToCustomer *connect.Client[v1.PaymentServiceAddBalanceToCustomerRequest, v1.PaymentServiceAddBalanceToCustomerResponse]
}

// ListCoupons calls admin.v1.PaymentService.ListCoupons.
func (c *paymentServiceClient) ListCoupons(ctx context.Context, req *connect.Request[v1.PaymentServiceListCouponsRequest]) (*connect.Response[v1.PaymentServiceListCouponsResponse], error) {
	return c.listCoupons.CallUnary(ctx, req)
}

// AddCouponToCustomer calls admin.v1.PaymentService.AddCouponToCustomer.
func (c *paymentServiceClient) AddCouponToCustomer(ctx context.Context, req *connect.Request[v1.PaymentServiceAddCouponToCustomerRequest]) (*connect.Response[v1.PaymentServiceAddCouponToCustomerResponse], error) {
	return c.addCouponToCustomer.CallUnary(ctx, req)
}

// AddBalanceToCustomer calls admin.v1.PaymentService.AddBalanceToCustomer.
func (c *paymentServiceClient) AddBalanceToCustomer(ctx context.Context, req *connect.Request[v1.PaymentServiceAddBalanceToCustomerRequest]) (*connect.Response[v1.PaymentServiceAddBalanceToCustomerResponse], error) {
	return c.addBalanceToCustomer.CallUnary(ctx, req)
}

// PaymentServiceHandler is an implementation of the admin.v1.PaymentService service.
type PaymentServiceHandler interface {
	ListCoupons(context.Context, *connect.Request[v1.PaymentServiceListCouponsRequest]) (*connect.Response[v1.PaymentServiceListCouponsResponse], error)
	AddCouponToCustomer(context.Context, *connect.Request[v1.PaymentServiceAddCouponToCustomerRequest]) (*connect.Response[v1.PaymentServiceAddCouponToCustomerResponse], error)
	AddBalanceToCustomer(context.Context, *connect.Request[v1.PaymentServiceAddBalanceToCustomerRequest]) (*connect.Response[v1.PaymentServiceAddBalanceToCustomerResponse], error)
}

// NewPaymentServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewPaymentServiceHandler(svc PaymentServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	paymentServiceListCouponsHandler := connect.NewUnaryHandler(
		PaymentServiceListCouponsProcedure,
		svc.ListCoupons,
		connect.WithSchema(paymentServiceListCouponsMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	paymentServiceAddCouponToCustomerHandler := connect.NewUnaryHandler(
		PaymentServiceAddCouponToCustomerProcedure,
		svc.AddCouponToCustomer,
		connect.WithSchema(paymentServiceAddCouponToCustomerMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	paymentServiceAddBalanceToCustomerHandler := connect.NewUnaryHandler(
		PaymentServiceAddBalanceToCustomerProcedure,
		svc.AddBalanceToCustomer,
		connect.WithSchema(paymentServiceAddBalanceToCustomerMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/admin.v1.PaymentService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case PaymentServiceListCouponsProcedure:
			paymentServiceListCouponsHandler.ServeHTTP(w, r)
		case PaymentServiceAddCouponToCustomerProcedure:
			paymentServiceAddCouponToCustomerHandler.ServeHTTP(w, r)
		case PaymentServiceAddBalanceToCustomerProcedure:
			paymentServiceAddBalanceToCustomerHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedPaymentServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedPaymentServiceHandler struct{}

func (UnimplementedPaymentServiceHandler) ListCoupons(context.Context, *connect.Request[v1.PaymentServiceListCouponsRequest]) (*connect.Response[v1.PaymentServiceListCouponsResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("admin.v1.PaymentService.ListCoupons is not implemented"))
}

func (UnimplementedPaymentServiceHandler) AddCouponToCustomer(context.Context, *connect.Request[v1.PaymentServiceAddCouponToCustomerRequest]) (*connect.Response[v1.PaymentServiceAddCouponToCustomerResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("admin.v1.PaymentService.AddCouponToCustomer is not implemented"))
}

func (UnimplementedPaymentServiceHandler) AddBalanceToCustomer(context.Context, *connect.Request[v1.PaymentServiceAddBalanceToCustomerRequest]) (*connect.Response[v1.PaymentServiceAddBalanceToCustomerResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("admin.v1.PaymentService.AddBalanceToCustomer is not implemented"))
}
