// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: api/v1/payment.proto

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
	// PaymentServiceName is the fully-qualified name of the PaymentService service.
	PaymentServiceName = "api.v1.PaymentService"
)

// PaymentServiceClient is a client for the api.v1.PaymentService service.
type PaymentServiceClient interface {
	CreateOrUpdateCustomer(context.Context, *connect_go.Request[v1.PaymentServiceCreateOrUpdateCustomerRequest]) (*connect_go.Response[v1.PaymentServiceCreateOrUpdateCustomerResponse], error)
	GetCustomer(context.Context, *connect_go.Request[v1.PaymentServiceGetCustomerRequest]) (*connect_go.Response[v1.PaymentServiceGetCustomerResponse], error)
	GetCustomerWithLogin(context.Context, *connect_go.Request[v1.PaymentServiceGetCustomerWithLoginRequest]) (*connect_go.Response[v1.PaymentServiceGetCustomerWithLoginResponse], error)
	CheckIfCustomerExists(context.Context, *connect_go.Request[v1.PaymentServiceCheckIfCustomerExistsRequest]) (*connect_go.Response[v1.PaymentServiceCheckIfCustomerExistsResponse], error)
	HasPaymentMethod(context.Context, *connect_go.Request[v1.PaymentServiceHasPaymentMethodRequest]) (*connect_go.Response[v1.PaymentServiceHasPaymentMethodResponse], error)
	DeletePaymentMethod(context.Context, *connect_go.Request[v1.PaymentServiceDeletePaymentMethodRequest]) (*connect_go.Response[v1.PaymentServiceDeletePaymentMethodResponse], error)
	GetSubscriptionUsage(context.Context, *connect_go.Request[v1.PaymentServiceGetSubscriptionUsageRequest]) (*connect_go.Response[v1.PaymentServiceGetSubscriptionUsageResponse], error)
	GetInvoices(context.Context, *connect_go.Request[v1.PaymentServiceGetInvoicesRequest]) (*connect_go.Response[v1.PaymentServiceGetInvoicesResponse], error)
	GetDefaultPrices(context.Context, *connect_go.Request[v1.PaymentServiceGetDefaultPricesRequest]) (*connect_go.Response[v1.PaymentServiceGetDefaultPricesResponse], error)
}

// NewPaymentServiceClient constructs a client for the api.v1.PaymentService service. By default, it
// uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewPaymentServiceClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) PaymentServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &paymentServiceClient{
		createOrUpdateCustomer: connect_go.NewClient[v1.PaymentServiceCreateOrUpdateCustomerRequest, v1.PaymentServiceCreateOrUpdateCustomerResponse](
			httpClient,
			baseURL+"/api.v1.PaymentService/CreateOrUpdateCustomer",
			opts...,
		),
		getCustomer: connect_go.NewClient[v1.PaymentServiceGetCustomerRequest, v1.PaymentServiceGetCustomerResponse](
			httpClient,
			baseURL+"/api.v1.PaymentService/GetCustomer",
			opts...,
		),
		getCustomerWithLogin: connect_go.NewClient[v1.PaymentServiceGetCustomerWithLoginRequest, v1.PaymentServiceGetCustomerWithLoginResponse](
			httpClient,
			baseURL+"/api.v1.PaymentService/GetCustomerWithLogin",
			opts...,
		),
		checkIfCustomerExists: connect_go.NewClient[v1.PaymentServiceCheckIfCustomerExistsRequest, v1.PaymentServiceCheckIfCustomerExistsResponse](
			httpClient,
			baseURL+"/api.v1.PaymentService/CheckIfCustomerExists",
			opts...,
		),
		hasPaymentMethod: connect_go.NewClient[v1.PaymentServiceHasPaymentMethodRequest, v1.PaymentServiceHasPaymentMethodResponse](
			httpClient,
			baseURL+"/api.v1.PaymentService/HasPaymentMethod",
			opts...,
		),
		deletePaymentMethod: connect_go.NewClient[v1.PaymentServiceDeletePaymentMethodRequest, v1.PaymentServiceDeletePaymentMethodResponse](
			httpClient,
			baseURL+"/api.v1.PaymentService/DeletePaymentMethod",
			opts...,
		),
		getSubscriptionUsage: connect_go.NewClient[v1.PaymentServiceGetSubscriptionUsageRequest, v1.PaymentServiceGetSubscriptionUsageResponse](
			httpClient,
			baseURL+"/api.v1.PaymentService/GetSubscriptionUsage",
			opts...,
		),
		getInvoices: connect_go.NewClient[v1.PaymentServiceGetInvoicesRequest, v1.PaymentServiceGetInvoicesResponse](
			httpClient,
			baseURL+"/api.v1.PaymentService/GetInvoices",
			opts...,
		),
		getDefaultPrices: connect_go.NewClient[v1.PaymentServiceGetDefaultPricesRequest, v1.PaymentServiceGetDefaultPricesResponse](
			httpClient,
			baseURL+"/api.v1.PaymentService/GetDefaultPrices",
			opts...,
		),
	}
}

// paymentServiceClient implements PaymentServiceClient.
type paymentServiceClient struct {
	createOrUpdateCustomer *connect_go.Client[v1.PaymentServiceCreateOrUpdateCustomerRequest, v1.PaymentServiceCreateOrUpdateCustomerResponse]
	getCustomer            *connect_go.Client[v1.PaymentServiceGetCustomerRequest, v1.PaymentServiceGetCustomerResponse]
	getCustomerWithLogin   *connect_go.Client[v1.PaymentServiceGetCustomerWithLoginRequest, v1.PaymentServiceGetCustomerWithLoginResponse]
	checkIfCustomerExists  *connect_go.Client[v1.PaymentServiceCheckIfCustomerExistsRequest, v1.PaymentServiceCheckIfCustomerExistsResponse]
	hasPaymentMethod       *connect_go.Client[v1.PaymentServiceHasPaymentMethodRequest, v1.PaymentServiceHasPaymentMethodResponse]
	deletePaymentMethod    *connect_go.Client[v1.PaymentServiceDeletePaymentMethodRequest, v1.PaymentServiceDeletePaymentMethodResponse]
	getSubscriptionUsage   *connect_go.Client[v1.PaymentServiceGetSubscriptionUsageRequest, v1.PaymentServiceGetSubscriptionUsageResponse]
	getInvoices            *connect_go.Client[v1.PaymentServiceGetInvoicesRequest, v1.PaymentServiceGetInvoicesResponse]
	getDefaultPrices       *connect_go.Client[v1.PaymentServiceGetDefaultPricesRequest, v1.PaymentServiceGetDefaultPricesResponse]
}

// CreateOrUpdateCustomer calls api.v1.PaymentService.CreateOrUpdateCustomer.
func (c *paymentServiceClient) CreateOrUpdateCustomer(ctx context.Context, req *connect_go.Request[v1.PaymentServiceCreateOrUpdateCustomerRequest]) (*connect_go.Response[v1.PaymentServiceCreateOrUpdateCustomerResponse], error) {
	return c.createOrUpdateCustomer.CallUnary(ctx, req)
}

// GetCustomer calls api.v1.PaymentService.GetCustomer.
func (c *paymentServiceClient) GetCustomer(ctx context.Context, req *connect_go.Request[v1.PaymentServiceGetCustomerRequest]) (*connect_go.Response[v1.PaymentServiceGetCustomerResponse], error) {
	return c.getCustomer.CallUnary(ctx, req)
}

// GetCustomerWithLogin calls api.v1.PaymentService.GetCustomerWithLogin.
func (c *paymentServiceClient) GetCustomerWithLogin(ctx context.Context, req *connect_go.Request[v1.PaymentServiceGetCustomerWithLoginRequest]) (*connect_go.Response[v1.PaymentServiceGetCustomerWithLoginResponse], error) {
	return c.getCustomerWithLogin.CallUnary(ctx, req)
}

// CheckIfCustomerExists calls api.v1.PaymentService.CheckIfCustomerExists.
func (c *paymentServiceClient) CheckIfCustomerExists(ctx context.Context, req *connect_go.Request[v1.PaymentServiceCheckIfCustomerExistsRequest]) (*connect_go.Response[v1.PaymentServiceCheckIfCustomerExistsResponse], error) {
	return c.checkIfCustomerExists.CallUnary(ctx, req)
}

// HasPaymentMethod calls api.v1.PaymentService.HasPaymentMethod.
func (c *paymentServiceClient) HasPaymentMethod(ctx context.Context, req *connect_go.Request[v1.PaymentServiceHasPaymentMethodRequest]) (*connect_go.Response[v1.PaymentServiceHasPaymentMethodResponse], error) {
	return c.hasPaymentMethod.CallUnary(ctx, req)
}

// DeletePaymentMethod calls api.v1.PaymentService.DeletePaymentMethod.
func (c *paymentServiceClient) DeletePaymentMethod(ctx context.Context, req *connect_go.Request[v1.PaymentServiceDeletePaymentMethodRequest]) (*connect_go.Response[v1.PaymentServiceDeletePaymentMethodResponse], error) {
	return c.deletePaymentMethod.CallUnary(ctx, req)
}

// GetSubscriptionUsage calls api.v1.PaymentService.GetSubscriptionUsage.
func (c *paymentServiceClient) GetSubscriptionUsage(ctx context.Context, req *connect_go.Request[v1.PaymentServiceGetSubscriptionUsageRequest]) (*connect_go.Response[v1.PaymentServiceGetSubscriptionUsageResponse], error) {
	return c.getSubscriptionUsage.CallUnary(ctx, req)
}

// GetInvoices calls api.v1.PaymentService.GetInvoices.
func (c *paymentServiceClient) GetInvoices(ctx context.Context, req *connect_go.Request[v1.PaymentServiceGetInvoicesRequest]) (*connect_go.Response[v1.PaymentServiceGetInvoicesResponse], error) {
	return c.getInvoices.CallUnary(ctx, req)
}

// GetDefaultPrices calls api.v1.PaymentService.GetDefaultPrices.
func (c *paymentServiceClient) GetDefaultPrices(ctx context.Context, req *connect_go.Request[v1.PaymentServiceGetDefaultPricesRequest]) (*connect_go.Response[v1.PaymentServiceGetDefaultPricesResponse], error) {
	return c.getDefaultPrices.CallUnary(ctx, req)
}

// PaymentServiceHandler is an implementation of the api.v1.PaymentService service.
type PaymentServiceHandler interface {
	CreateOrUpdateCustomer(context.Context, *connect_go.Request[v1.PaymentServiceCreateOrUpdateCustomerRequest]) (*connect_go.Response[v1.PaymentServiceCreateOrUpdateCustomerResponse], error)
	GetCustomer(context.Context, *connect_go.Request[v1.PaymentServiceGetCustomerRequest]) (*connect_go.Response[v1.PaymentServiceGetCustomerResponse], error)
	GetCustomerWithLogin(context.Context, *connect_go.Request[v1.PaymentServiceGetCustomerWithLoginRequest]) (*connect_go.Response[v1.PaymentServiceGetCustomerWithLoginResponse], error)
	CheckIfCustomerExists(context.Context, *connect_go.Request[v1.PaymentServiceCheckIfCustomerExistsRequest]) (*connect_go.Response[v1.PaymentServiceCheckIfCustomerExistsResponse], error)
	HasPaymentMethod(context.Context, *connect_go.Request[v1.PaymentServiceHasPaymentMethodRequest]) (*connect_go.Response[v1.PaymentServiceHasPaymentMethodResponse], error)
	DeletePaymentMethod(context.Context, *connect_go.Request[v1.PaymentServiceDeletePaymentMethodRequest]) (*connect_go.Response[v1.PaymentServiceDeletePaymentMethodResponse], error)
	GetSubscriptionUsage(context.Context, *connect_go.Request[v1.PaymentServiceGetSubscriptionUsageRequest]) (*connect_go.Response[v1.PaymentServiceGetSubscriptionUsageResponse], error)
	GetInvoices(context.Context, *connect_go.Request[v1.PaymentServiceGetInvoicesRequest]) (*connect_go.Response[v1.PaymentServiceGetInvoicesResponse], error)
	GetDefaultPrices(context.Context, *connect_go.Request[v1.PaymentServiceGetDefaultPricesRequest]) (*connect_go.Response[v1.PaymentServiceGetDefaultPricesResponse], error)
}

// NewPaymentServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewPaymentServiceHandler(svc PaymentServiceHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	mux := http.NewServeMux()
	mux.Handle("/api.v1.PaymentService/CreateOrUpdateCustomer", connect_go.NewUnaryHandler(
		"/api.v1.PaymentService/CreateOrUpdateCustomer",
		svc.CreateOrUpdateCustomer,
		opts...,
	))
	mux.Handle("/api.v1.PaymentService/GetCustomer", connect_go.NewUnaryHandler(
		"/api.v1.PaymentService/GetCustomer",
		svc.GetCustomer,
		opts...,
	))
	mux.Handle("/api.v1.PaymentService/GetCustomerWithLogin", connect_go.NewUnaryHandler(
		"/api.v1.PaymentService/GetCustomerWithLogin",
		svc.GetCustomerWithLogin,
		opts...,
	))
	mux.Handle("/api.v1.PaymentService/CheckIfCustomerExists", connect_go.NewUnaryHandler(
		"/api.v1.PaymentService/CheckIfCustomerExists",
		svc.CheckIfCustomerExists,
		opts...,
	))
	mux.Handle("/api.v1.PaymentService/HasPaymentMethod", connect_go.NewUnaryHandler(
		"/api.v1.PaymentService/HasPaymentMethod",
		svc.HasPaymentMethod,
		opts...,
	))
	mux.Handle("/api.v1.PaymentService/DeletePaymentMethod", connect_go.NewUnaryHandler(
		"/api.v1.PaymentService/DeletePaymentMethod",
		svc.DeletePaymentMethod,
		opts...,
	))
	mux.Handle("/api.v1.PaymentService/GetSubscriptionUsage", connect_go.NewUnaryHandler(
		"/api.v1.PaymentService/GetSubscriptionUsage",
		svc.GetSubscriptionUsage,
		opts...,
	))
	mux.Handle("/api.v1.PaymentService/GetInvoices", connect_go.NewUnaryHandler(
		"/api.v1.PaymentService/GetInvoices",
		svc.GetInvoices,
		opts...,
	))
	mux.Handle("/api.v1.PaymentService/GetDefaultPrices", connect_go.NewUnaryHandler(
		"/api.v1.PaymentService/GetDefaultPrices",
		svc.GetDefaultPrices,
		opts...,
	))
	return "/api.v1.PaymentService/", mux
}

// UnimplementedPaymentServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedPaymentServiceHandler struct{}

func (UnimplementedPaymentServiceHandler) CreateOrUpdateCustomer(context.Context, *connect_go.Request[v1.PaymentServiceCreateOrUpdateCustomerRequest]) (*connect_go.Response[v1.PaymentServiceCreateOrUpdateCustomerResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.PaymentService.CreateOrUpdateCustomer is not implemented"))
}

func (UnimplementedPaymentServiceHandler) GetCustomer(context.Context, *connect_go.Request[v1.PaymentServiceGetCustomerRequest]) (*connect_go.Response[v1.PaymentServiceGetCustomerResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.PaymentService.GetCustomer is not implemented"))
}

func (UnimplementedPaymentServiceHandler) GetCustomerWithLogin(context.Context, *connect_go.Request[v1.PaymentServiceGetCustomerWithLoginRequest]) (*connect_go.Response[v1.PaymentServiceGetCustomerWithLoginResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.PaymentService.GetCustomerWithLogin is not implemented"))
}

func (UnimplementedPaymentServiceHandler) CheckIfCustomerExists(context.Context, *connect_go.Request[v1.PaymentServiceCheckIfCustomerExistsRequest]) (*connect_go.Response[v1.PaymentServiceCheckIfCustomerExistsResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.PaymentService.CheckIfCustomerExists is not implemented"))
}

func (UnimplementedPaymentServiceHandler) HasPaymentMethod(context.Context, *connect_go.Request[v1.PaymentServiceHasPaymentMethodRequest]) (*connect_go.Response[v1.PaymentServiceHasPaymentMethodResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.PaymentService.HasPaymentMethod is not implemented"))
}

func (UnimplementedPaymentServiceHandler) DeletePaymentMethod(context.Context, *connect_go.Request[v1.PaymentServiceDeletePaymentMethodRequest]) (*connect_go.Response[v1.PaymentServiceDeletePaymentMethodResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.PaymentService.DeletePaymentMethod is not implemented"))
}

func (UnimplementedPaymentServiceHandler) GetSubscriptionUsage(context.Context, *connect_go.Request[v1.PaymentServiceGetSubscriptionUsageRequest]) (*connect_go.Response[v1.PaymentServiceGetSubscriptionUsageResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.PaymentService.GetSubscriptionUsage is not implemented"))
}

func (UnimplementedPaymentServiceHandler) GetInvoices(context.Context, *connect_go.Request[v1.PaymentServiceGetInvoicesRequest]) (*connect_go.Response[v1.PaymentServiceGetInvoicesResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.PaymentService.GetInvoices is not implemented"))
}

func (UnimplementedPaymentServiceHandler) GetDefaultPrices(context.Context, *connect_go.Request[v1.PaymentServiceGetDefaultPricesRequest]) (*connect_go.Response[v1.PaymentServiceGetDefaultPricesResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("api.v1.PaymentService.GetDefaultPrices is not implemented"))
}
