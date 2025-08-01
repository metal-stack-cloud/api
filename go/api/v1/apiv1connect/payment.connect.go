// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: api/v1/payment.proto

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
	// PaymentServiceName is the fully-qualified name of the PaymentService service.
	PaymentServiceName = "api.v1.PaymentService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// PaymentServiceCreateOrUpdateCustomerProcedure is the fully-qualified name of the PaymentService's
	// CreateOrUpdateCustomer RPC.
	PaymentServiceCreateOrUpdateCustomerProcedure = "/api.v1.PaymentService/CreateOrUpdateCustomer"
	// PaymentServiceGetCustomerProcedure is the fully-qualified name of the PaymentService's
	// GetCustomer RPC.
	PaymentServiceGetCustomerProcedure = "/api.v1.PaymentService/GetCustomer"
	// PaymentServiceCheckIfCustomerExistsProcedure is the fully-qualified name of the PaymentService's
	// CheckIfCustomerExists RPC.
	PaymentServiceCheckIfCustomerExistsProcedure = "/api.v1.PaymentService/CheckIfCustomerExists"
	// PaymentServiceHasPaymentMethodProcedure is the fully-qualified name of the PaymentService's
	// HasPaymentMethod RPC.
	PaymentServiceHasPaymentMethodProcedure = "/api.v1.PaymentService/HasPaymentMethod"
	// PaymentServiceDeletePaymentMethodProcedure is the fully-qualified name of the PaymentService's
	// DeletePaymentMethod RPC.
	PaymentServiceDeletePaymentMethodProcedure = "/api.v1.PaymentService/DeletePaymentMethod"
	// PaymentServiceGetSubscriptionUsageProcedure is the fully-qualified name of the PaymentService's
	// GetSubscriptionUsage RPC.
	PaymentServiceGetSubscriptionUsageProcedure = "/api.v1.PaymentService/GetSubscriptionUsage"
	// PaymentServiceGetInvoicesProcedure is the fully-qualified name of the PaymentService's
	// GetInvoices RPC.
	PaymentServiceGetInvoicesProcedure = "/api.v1.PaymentService/GetInvoices"
	// PaymentServiceGetDefaultPricesProcedure is the fully-qualified name of the PaymentService's
	// GetDefaultPrices RPC.
	PaymentServiceGetDefaultPricesProcedure = "/api.v1.PaymentService/GetDefaultPrices"
	// PaymentServiceHasChargeableResourcesProcedure is the fully-qualified name of the PaymentService's
	// HasChargeableResources RPC.
	PaymentServiceHasChargeableResourcesProcedure = "/api.v1.PaymentService/HasChargeableResources"
)

// PaymentServiceClient is a client for the api.v1.PaymentService service.
type PaymentServiceClient interface {
	// CreateOrUpdateCustomer the payment data on the payment processor
	CreateOrUpdateCustomer(context.Context, *connect.Request[v1.PaymentServiceCreateOrUpdateCustomerRequest]) (*connect.Response[v1.PaymentServiceCreateOrUpdateCustomerResponse], error)
	// GetCustomer from the payment processor
	GetCustomer(context.Context, *connect.Request[v1.PaymentServiceGetCustomerRequest]) (*connect.Response[v1.PaymentServiceGetCustomerResponse], error)
	// CheckIfCustomerExists at the payment processor
	CheckIfCustomerExists(context.Context, *connect.Request[v1.PaymentServiceCheckIfCustomerExistsRequest]) (*connect.Response[v1.PaymentServiceCheckIfCustomerExistsResponse], error)
	// HasPaymentMethod check if the customer has a payment method provided
	HasPaymentMethod(context.Context, *connect.Request[v1.PaymentServiceHasPaymentMethodRequest]) (*connect.Response[v1.PaymentServiceHasPaymentMethodResponse], error)
	// DeletePaymentMethod of the customer
	DeletePaymentMethod(context.Context, *connect.Request[v1.PaymentServiceDeletePaymentMethodRequest]) (*connect.Response[v1.PaymentServiceDeletePaymentMethodResponse], error)
	// GetSubscriptionUsage of the customer
	GetSubscriptionUsage(context.Context, *connect.Request[v1.PaymentServiceGetSubscriptionUsageRequest]) (*connect.Response[v1.PaymentServiceGetSubscriptionUsageResponse], error)
	// GetInvoices of the customer
	GetInvoices(context.Context, *connect.Request[v1.PaymentServiceGetInvoicesRequest]) (*connect.Response[v1.PaymentServiceGetInvoicesResponse], error)
	// GetDefaultPrices of the products on the platform
	GetDefaultPrices(context.Context, *connect.Request[v1.PaymentServiceGetDefaultPricesRequest]) (*connect.Response[v1.PaymentServiceGetDefaultPricesResponse], error)
	// HasChargeableResources checks if the customer has resources actually consumed which are chargeable
	HasChargeableResources(context.Context, *connect.Request[v1.PaymentServiceHasChargeableResourcesRequest]) (*connect.Response[v1.PaymentServiceHasChargeableResourcesResponse], error)
}

// NewPaymentServiceClient constructs a client for the api.v1.PaymentService service. By default, it
// uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewPaymentServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) PaymentServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	paymentServiceMethods := v1.File_api_v1_payment_proto.Services().ByName("PaymentService").Methods()
	return &paymentServiceClient{
		createOrUpdateCustomer: connect.NewClient[v1.PaymentServiceCreateOrUpdateCustomerRequest, v1.PaymentServiceCreateOrUpdateCustomerResponse](
			httpClient,
			baseURL+PaymentServiceCreateOrUpdateCustomerProcedure,
			connect.WithSchema(paymentServiceMethods.ByName("CreateOrUpdateCustomer")),
			connect.WithClientOptions(opts...),
		),
		getCustomer: connect.NewClient[v1.PaymentServiceGetCustomerRequest, v1.PaymentServiceGetCustomerResponse](
			httpClient,
			baseURL+PaymentServiceGetCustomerProcedure,
			connect.WithSchema(paymentServiceMethods.ByName("GetCustomer")),
			connect.WithClientOptions(opts...),
		),
		checkIfCustomerExists: connect.NewClient[v1.PaymentServiceCheckIfCustomerExistsRequest, v1.PaymentServiceCheckIfCustomerExistsResponse](
			httpClient,
			baseURL+PaymentServiceCheckIfCustomerExistsProcedure,
			connect.WithSchema(paymentServiceMethods.ByName("CheckIfCustomerExists")),
			connect.WithClientOptions(opts...),
		),
		hasPaymentMethod: connect.NewClient[v1.PaymentServiceHasPaymentMethodRequest, v1.PaymentServiceHasPaymentMethodResponse](
			httpClient,
			baseURL+PaymentServiceHasPaymentMethodProcedure,
			connect.WithSchema(paymentServiceMethods.ByName("HasPaymentMethod")),
			connect.WithClientOptions(opts...),
		),
		deletePaymentMethod: connect.NewClient[v1.PaymentServiceDeletePaymentMethodRequest, v1.PaymentServiceDeletePaymentMethodResponse](
			httpClient,
			baseURL+PaymentServiceDeletePaymentMethodProcedure,
			connect.WithSchema(paymentServiceMethods.ByName("DeletePaymentMethod")),
			connect.WithClientOptions(opts...),
		),
		getSubscriptionUsage: connect.NewClient[v1.PaymentServiceGetSubscriptionUsageRequest, v1.PaymentServiceGetSubscriptionUsageResponse](
			httpClient,
			baseURL+PaymentServiceGetSubscriptionUsageProcedure,
			connect.WithSchema(paymentServiceMethods.ByName("GetSubscriptionUsage")),
			connect.WithClientOptions(opts...),
		),
		getInvoices: connect.NewClient[v1.PaymentServiceGetInvoicesRequest, v1.PaymentServiceGetInvoicesResponse](
			httpClient,
			baseURL+PaymentServiceGetInvoicesProcedure,
			connect.WithSchema(paymentServiceMethods.ByName("GetInvoices")),
			connect.WithClientOptions(opts...),
		),
		getDefaultPrices: connect.NewClient[v1.PaymentServiceGetDefaultPricesRequest, v1.PaymentServiceGetDefaultPricesResponse](
			httpClient,
			baseURL+PaymentServiceGetDefaultPricesProcedure,
			connect.WithSchema(paymentServiceMethods.ByName("GetDefaultPrices")),
			connect.WithClientOptions(opts...),
		),
		hasChargeableResources: connect.NewClient[v1.PaymentServiceHasChargeableResourcesRequest, v1.PaymentServiceHasChargeableResourcesResponse](
			httpClient,
			baseURL+PaymentServiceHasChargeableResourcesProcedure,
			connect.WithSchema(paymentServiceMethods.ByName("HasChargeableResources")),
			connect.WithClientOptions(opts...),
		),
	}
}

// paymentServiceClient implements PaymentServiceClient.
type paymentServiceClient struct {
	createOrUpdateCustomer *connect.Client[v1.PaymentServiceCreateOrUpdateCustomerRequest, v1.PaymentServiceCreateOrUpdateCustomerResponse]
	getCustomer            *connect.Client[v1.PaymentServiceGetCustomerRequest, v1.PaymentServiceGetCustomerResponse]
	checkIfCustomerExists  *connect.Client[v1.PaymentServiceCheckIfCustomerExistsRequest, v1.PaymentServiceCheckIfCustomerExistsResponse]
	hasPaymentMethod       *connect.Client[v1.PaymentServiceHasPaymentMethodRequest, v1.PaymentServiceHasPaymentMethodResponse]
	deletePaymentMethod    *connect.Client[v1.PaymentServiceDeletePaymentMethodRequest, v1.PaymentServiceDeletePaymentMethodResponse]
	getSubscriptionUsage   *connect.Client[v1.PaymentServiceGetSubscriptionUsageRequest, v1.PaymentServiceGetSubscriptionUsageResponse]
	getInvoices            *connect.Client[v1.PaymentServiceGetInvoicesRequest, v1.PaymentServiceGetInvoicesResponse]
	getDefaultPrices       *connect.Client[v1.PaymentServiceGetDefaultPricesRequest, v1.PaymentServiceGetDefaultPricesResponse]
	hasChargeableResources *connect.Client[v1.PaymentServiceHasChargeableResourcesRequest, v1.PaymentServiceHasChargeableResourcesResponse]
}

// CreateOrUpdateCustomer calls api.v1.PaymentService.CreateOrUpdateCustomer.
func (c *paymentServiceClient) CreateOrUpdateCustomer(ctx context.Context, req *connect.Request[v1.PaymentServiceCreateOrUpdateCustomerRequest]) (*connect.Response[v1.PaymentServiceCreateOrUpdateCustomerResponse], error) {
	return c.createOrUpdateCustomer.CallUnary(ctx, req)
}

// GetCustomer calls api.v1.PaymentService.GetCustomer.
func (c *paymentServiceClient) GetCustomer(ctx context.Context, req *connect.Request[v1.PaymentServiceGetCustomerRequest]) (*connect.Response[v1.PaymentServiceGetCustomerResponse], error) {
	return c.getCustomer.CallUnary(ctx, req)
}

// CheckIfCustomerExists calls api.v1.PaymentService.CheckIfCustomerExists.
func (c *paymentServiceClient) CheckIfCustomerExists(ctx context.Context, req *connect.Request[v1.PaymentServiceCheckIfCustomerExistsRequest]) (*connect.Response[v1.PaymentServiceCheckIfCustomerExistsResponse], error) {
	return c.checkIfCustomerExists.CallUnary(ctx, req)
}

// HasPaymentMethod calls api.v1.PaymentService.HasPaymentMethod.
func (c *paymentServiceClient) HasPaymentMethod(ctx context.Context, req *connect.Request[v1.PaymentServiceHasPaymentMethodRequest]) (*connect.Response[v1.PaymentServiceHasPaymentMethodResponse], error) {
	return c.hasPaymentMethod.CallUnary(ctx, req)
}

// DeletePaymentMethod calls api.v1.PaymentService.DeletePaymentMethod.
func (c *paymentServiceClient) DeletePaymentMethod(ctx context.Context, req *connect.Request[v1.PaymentServiceDeletePaymentMethodRequest]) (*connect.Response[v1.PaymentServiceDeletePaymentMethodResponse], error) {
	return c.deletePaymentMethod.CallUnary(ctx, req)
}

// GetSubscriptionUsage calls api.v1.PaymentService.GetSubscriptionUsage.
func (c *paymentServiceClient) GetSubscriptionUsage(ctx context.Context, req *connect.Request[v1.PaymentServiceGetSubscriptionUsageRequest]) (*connect.Response[v1.PaymentServiceGetSubscriptionUsageResponse], error) {
	return c.getSubscriptionUsage.CallUnary(ctx, req)
}

// GetInvoices calls api.v1.PaymentService.GetInvoices.
func (c *paymentServiceClient) GetInvoices(ctx context.Context, req *connect.Request[v1.PaymentServiceGetInvoicesRequest]) (*connect.Response[v1.PaymentServiceGetInvoicesResponse], error) {
	return c.getInvoices.CallUnary(ctx, req)
}

// GetDefaultPrices calls api.v1.PaymentService.GetDefaultPrices.
func (c *paymentServiceClient) GetDefaultPrices(ctx context.Context, req *connect.Request[v1.PaymentServiceGetDefaultPricesRequest]) (*connect.Response[v1.PaymentServiceGetDefaultPricesResponse], error) {
	return c.getDefaultPrices.CallUnary(ctx, req)
}

// HasChargeableResources calls api.v1.PaymentService.HasChargeableResources.
func (c *paymentServiceClient) HasChargeableResources(ctx context.Context, req *connect.Request[v1.PaymentServiceHasChargeableResourcesRequest]) (*connect.Response[v1.PaymentServiceHasChargeableResourcesResponse], error) {
	return c.hasChargeableResources.CallUnary(ctx, req)
}

// PaymentServiceHandler is an implementation of the api.v1.PaymentService service.
type PaymentServiceHandler interface {
	// CreateOrUpdateCustomer the payment data on the payment processor
	CreateOrUpdateCustomer(context.Context, *connect.Request[v1.PaymentServiceCreateOrUpdateCustomerRequest]) (*connect.Response[v1.PaymentServiceCreateOrUpdateCustomerResponse], error)
	// GetCustomer from the payment processor
	GetCustomer(context.Context, *connect.Request[v1.PaymentServiceGetCustomerRequest]) (*connect.Response[v1.PaymentServiceGetCustomerResponse], error)
	// CheckIfCustomerExists at the payment processor
	CheckIfCustomerExists(context.Context, *connect.Request[v1.PaymentServiceCheckIfCustomerExistsRequest]) (*connect.Response[v1.PaymentServiceCheckIfCustomerExistsResponse], error)
	// HasPaymentMethod check if the customer has a payment method provided
	HasPaymentMethod(context.Context, *connect.Request[v1.PaymentServiceHasPaymentMethodRequest]) (*connect.Response[v1.PaymentServiceHasPaymentMethodResponse], error)
	// DeletePaymentMethod of the customer
	DeletePaymentMethod(context.Context, *connect.Request[v1.PaymentServiceDeletePaymentMethodRequest]) (*connect.Response[v1.PaymentServiceDeletePaymentMethodResponse], error)
	// GetSubscriptionUsage of the customer
	GetSubscriptionUsage(context.Context, *connect.Request[v1.PaymentServiceGetSubscriptionUsageRequest]) (*connect.Response[v1.PaymentServiceGetSubscriptionUsageResponse], error)
	// GetInvoices of the customer
	GetInvoices(context.Context, *connect.Request[v1.PaymentServiceGetInvoicesRequest]) (*connect.Response[v1.PaymentServiceGetInvoicesResponse], error)
	// GetDefaultPrices of the products on the platform
	GetDefaultPrices(context.Context, *connect.Request[v1.PaymentServiceGetDefaultPricesRequest]) (*connect.Response[v1.PaymentServiceGetDefaultPricesResponse], error)
	// HasChargeableResources checks if the customer has resources actually consumed which are chargeable
	HasChargeableResources(context.Context, *connect.Request[v1.PaymentServiceHasChargeableResourcesRequest]) (*connect.Response[v1.PaymentServiceHasChargeableResourcesResponse], error)
}

// NewPaymentServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewPaymentServiceHandler(svc PaymentServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	paymentServiceMethods := v1.File_api_v1_payment_proto.Services().ByName("PaymentService").Methods()
	paymentServiceCreateOrUpdateCustomerHandler := connect.NewUnaryHandler(
		PaymentServiceCreateOrUpdateCustomerProcedure,
		svc.CreateOrUpdateCustomer,
		connect.WithSchema(paymentServiceMethods.ByName("CreateOrUpdateCustomer")),
		connect.WithHandlerOptions(opts...),
	)
	paymentServiceGetCustomerHandler := connect.NewUnaryHandler(
		PaymentServiceGetCustomerProcedure,
		svc.GetCustomer,
		connect.WithSchema(paymentServiceMethods.ByName("GetCustomer")),
		connect.WithHandlerOptions(opts...),
	)
	paymentServiceCheckIfCustomerExistsHandler := connect.NewUnaryHandler(
		PaymentServiceCheckIfCustomerExistsProcedure,
		svc.CheckIfCustomerExists,
		connect.WithSchema(paymentServiceMethods.ByName("CheckIfCustomerExists")),
		connect.WithHandlerOptions(opts...),
	)
	paymentServiceHasPaymentMethodHandler := connect.NewUnaryHandler(
		PaymentServiceHasPaymentMethodProcedure,
		svc.HasPaymentMethod,
		connect.WithSchema(paymentServiceMethods.ByName("HasPaymentMethod")),
		connect.WithHandlerOptions(opts...),
	)
	paymentServiceDeletePaymentMethodHandler := connect.NewUnaryHandler(
		PaymentServiceDeletePaymentMethodProcedure,
		svc.DeletePaymentMethod,
		connect.WithSchema(paymentServiceMethods.ByName("DeletePaymentMethod")),
		connect.WithHandlerOptions(opts...),
	)
	paymentServiceGetSubscriptionUsageHandler := connect.NewUnaryHandler(
		PaymentServiceGetSubscriptionUsageProcedure,
		svc.GetSubscriptionUsage,
		connect.WithSchema(paymentServiceMethods.ByName("GetSubscriptionUsage")),
		connect.WithHandlerOptions(opts...),
	)
	paymentServiceGetInvoicesHandler := connect.NewUnaryHandler(
		PaymentServiceGetInvoicesProcedure,
		svc.GetInvoices,
		connect.WithSchema(paymentServiceMethods.ByName("GetInvoices")),
		connect.WithHandlerOptions(opts...),
	)
	paymentServiceGetDefaultPricesHandler := connect.NewUnaryHandler(
		PaymentServiceGetDefaultPricesProcedure,
		svc.GetDefaultPrices,
		connect.WithSchema(paymentServiceMethods.ByName("GetDefaultPrices")),
		connect.WithHandlerOptions(opts...),
	)
	paymentServiceHasChargeableResourcesHandler := connect.NewUnaryHandler(
		PaymentServiceHasChargeableResourcesProcedure,
		svc.HasChargeableResources,
		connect.WithSchema(paymentServiceMethods.ByName("HasChargeableResources")),
		connect.WithHandlerOptions(opts...),
	)
	return "/api.v1.PaymentService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case PaymentServiceCreateOrUpdateCustomerProcedure:
			paymentServiceCreateOrUpdateCustomerHandler.ServeHTTP(w, r)
		case PaymentServiceGetCustomerProcedure:
			paymentServiceGetCustomerHandler.ServeHTTP(w, r)
		case PaymentServiceCheckIfCustomerExistsProcedure:
			paymentServiceCheckIfCustomerExistsHandler.ServeHTTP(w, r)
		case PaymentServiceHasPaymentMethodProcedure:
			paymentServiceHasPaymentMethodHandler.ServeHTTP(w, r)
		case PaymentServiceDeletePaymentMethodProcedure:
			paymentServiceDeletePaymentMethodHandler.ServeHTTP(w, r)
		case PaymentServiceGetSubscriptionUsageProcedure:
			paymentServiceGetSubscriptionUsageHandler.ServeHTTP(w, r)
		case PaymentServiceGetInvoicesProcedure:
			paymentServiceGetInvoicesHandler.ServeHTTP(w, r)
		case PaymentServiceGetDefaultPricesProcedure:
			paymentServiceGetDefaultPricesHandler.ServeHTTP(w, r)
		case PaymentServiceHasChargeableResourcesProcedure:
			paymentServiceHasChargeableResourcesHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedPaymentServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedPaymentServiceHandler struct{}

func (UnimplementedPaymentServiceHandler) CreateOrUpdateCustomer(context.Context, *connect.Request[v1.PaymentServiceCreateOrUpdateCustomerRequest]) (*connect.Response[v1.PaymentServiceCreateOrUpdateCustomerResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.PaymentService.CreateOrUpdateCustomer is not implemented"))
}

func (UnimplementedPaymentServiceHandler) GetCustomer(context.Context, *connect.Request[v1.PaymentServiceGetCustomerRequest]) (*connect.Response[v1.PaymentServiceGetCustomerResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.PaymentService.GetCustomer is not implemented"))
}

func (UnimplementedPaymentServiceHandler) CheckIfCustomerExists(context.Context, *connect.Request[v1.PaymentServiceCheckIfCustomerExistsRequest]) (*connect.Response[v1.PaymentServiceCheckIfCustomerExistsResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.PaymentService.CheckIfCustomerExists is not implemented"))
}

func (UnimplementedPaymentServiceHandler) HasPaymentMethod(context.Context, *connect.Request[v1.PaymentServiceHasPaymentMethodRequest]) (*connect.Response[v1.PaymentServiceHasPaymentMethodResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.PaymentService.HasPaymentMethod is not implemented"))
}

func (UnimplementedPaymentServiceHandler) DeletePaymentMethod(context.Context, *connect.Request[v1.PaymentServiceDeletePaymentMethodRequest]) (*connect.Response[v1.PaymentServiceDeletePaymentMethodResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.PaymentService.DeletePaymentMethod is not implemented"))
}

func (UnimplementedPaymentServiceHandler) GetSubscriptionUsage(context.Context, *connect.Request[v1.PaymentServiceGetSubscriptionUsageRequest]) (*connect.Response[v1.PaymentServiceGetSubscriptionUsageResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.PaymentService.GetSubscriptionUsage is not implemented"))
}

func (UnimplementedPaymentServiceHandler) GetInvoices(context.Context, *connect.Request[v1.PaymentServiceGetInvoicesRequest]) (*connect.Response[v1.PaymentServiceGetInvoicesResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.PaymentService.GetInvoices is not implemented"))
}

func (UnimplementedPaymentServiceHandler) GetDefaultPrices(context.Context, *connect.Request[v1.PaymentServiceGetDefaultPricesRequest]) (*connect.Response[v1.PaymentServiceGetDefaultPricesResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.PaymentService.GetDefaultPrices is not implemented"))
}

func (UnimplementedPaymentServiceHandler) HasChargeableResources(context.Context, *connect.Request[v1.PaymentServiceHasChargeableResourcesRequest]) (*connect.Response[v1.PaymentServiceHasChargeableResourcesResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("api.v1.PaymentService.HasChargeableResources is not implemented"))
}
