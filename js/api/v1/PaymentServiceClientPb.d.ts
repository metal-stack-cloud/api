/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as api_v1_payment_pb from '../../api/v1/payment_pb';
export declare class PaymentServiceClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorCreateOrUpdateCustomer: any;
    createOrUpdateCustomer(request: api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerResponse>;
    createOrUpdateCustomer(request: api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerResponse>;
    methodDescriptorGetCustomer: any;
    getCustomer(request: api_v1_payment_pb.PaymentServiceGetCustomerRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceGetCustomerResponse>;
    getCustomer(request: api_v1_payment_pb.PaymentServiceGetCustomerRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_payment_pb.PaymentServiceGetCustomerResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceGetCustomerResponse>;
    methodDescriptorGetCustomerWithLogin: any;
    getCustomerWithLogin(request: api_v1_payment_pb.PaymentServiceGetCustomerWithLoginRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceGetCustomerWithLoginResponse>;
    getCustomerWithLogin(request: api_v1_payment_pb.PaymentServiceGetCustomerWithLoginRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_payment_pb.PaymentServiceGetCustomerWithLoginResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceGetCustomerWithLoginResponse>;
    methodDescriptorCheckIfCustomerExists: any;
    checkIfCustomerExists(request: api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsResponse>;
    checkIfCustomerExists(request: api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsResponse>;
    methodDescriptorHasPaymentMethod: any;
    hasPaymentMethod(request: api_v1_payment_pb.PaymentServiceHasPaymentMethodRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceHasPaymentMethodResponse>;
    hasPaymentMethod(request: api_v1_payment_pb.PaymentServiceHasPaymentMethodRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_payment_pb.PaymentServiceHasPaymentMethodResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceHasPaymentMethodResponse>;
    methodDescriptorDeletePaymentMethod: any;
    deletePaymentMethod(request: api_v1_payment_pb.PaymentServiceDeletePaymentMethodRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceDeletePaymentMethodResponse>;
    deletePaymentMethod(request: api_v1_payment_pb.PaymentServiceDeletePaymentMethodRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_payment_pb.PaymentServiceDeletePaymentMethodResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceDeletePaymentMethodResponse>;
    methodDescriptorGetSubscriptionUsage: any;
    getSubscriptionUsage(request: api_v1_payment_pb.PaymentServiceGetSubscriptionUsageRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceGetSubscriptionUsageResponse>;
    getSubscriptionUsage(request: api_v1_payment_pb.PaymentServiceGetSubscriptionUsageRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_payment_pb.PaymentServiceGetSubscriptionUsageResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceGetSubscriptionUsageResponse>;
    methodDescriptorGetInvoices: any;
    getInvoices(request: api_v1_payment_pb.PaymentServiceGetInvoicesRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceGetInvoicesResponse>;
    getInvoices(request: api_v1_payment_pb.PaymentServiceGetInvoicesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_payment_pb.PaymentServiceGetInvoicesResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceGetInvoicesResponse>;
}
