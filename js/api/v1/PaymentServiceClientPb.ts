/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_v1_payment_pb from '../../api/v1/payment_pb';


export class PaymentServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateOrUpdateCustomer = new grpcWeb.MethodDescriptor(
    '/api.v1.PaymentService/CreateOrUpdateCustomer',
    grpcWeb.MethodType.UNARY,
    api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerRequest,
    api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerResponse,
    (request: api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerRequest) => {
      return request.serializeBinary();
    },
    api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerResponse.deserializeBinary
  );

  createOrUpdateCustomer(
    request: api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerResponse>;

  createOrUpdateCustomer(
    request: api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerResponse>;

  createOrUpdateCustomer(
    request: api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.PaymentService/CreateOrUpdateCustomer',
        request,
        metadata || {},
        this.methodDescriptorCreateOrUpdateCustomer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.PaymentService/CreateOrUpdateCustomer',
    request,
    metadata || {},
    this.methodDescriptorCreateOrUpdateCustomer);
  }

  methodDescriptorGetCustomer = new grpcWeb.MethodDescriptor(
    '/api.v1.PaymentService/GetCustomer',
    grpcWeb.MethodType.UNARY,
    api_v1_payment_pb.PaymentServiceGetCustomerRequest,
    api_v1_payment_pb.PaymentServiceGetCustomerResponse,
    (request: api_v1_payment_pb.PaymentServiceGetCustomerRequest) => {
      return request.serializeBinary();
    },
    api_v1_payment_pb.PaymentServiceGetCustomerResponse.deserializeBinary
  );

  getCustomer(
    request: api_v1_payment_pb.PaymentServiceGetCustomerRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceGetCustomerResponse>;

  getCustomer(
    request: api_v1_payment_pb.PaymentServiceGetCustomerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_payment_pb.PaymentServiceGetCustomerResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceGetCustomerResponse>;

  getCustomer(
    request: api_v1_payment_pb.PaymentServiceGetCustomerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_payment_pb.PaymentServiceGetCustomerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.PaymentService/GetCustomer',
        request,
        metadata || {},
        this.methodDescriptorGetCustomer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.PaymentService/GetCustomer',
    request,
    metadata || {},
    this.methodDescriptorGetCustomer);
  }

  methodDescriptorGetCustomerWithLogin = new grpcWeb.MethodDescriptor(
    '/api.v1.PaymentService/GetCustomerWithLogin',
    grpcWeb.MethodType.UNARY,
    api_v1_payment_pb.PaymentServiceGetCustomerWithLoginRequest,
    api_v1_payment_pb.PaymentServiceGetCustomerWithLoginResponse,
    (request: api_v1_payment_pb.PaymentServiceGetCustomerWithLoginRequest) => {
      return request.serializeBinary();
    },
    api_v1_payment_pb.PaymentServiceGetCustomerWithLoginResponse.deserializeBinary
  );

  getCustomerWithLogin(
    request: api_v1_payment_pb.PaymentServiceGetCustomerWithLoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceGetCustomerWithLoginResponse>;

  getCustomerWithLogin(
    request: api_v1_payment_pb.PaymentServiceGetCustomerWithLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_payment_pb.PaymentServiceGetCustomerWithLoginResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceGetCustomerWithLoginResponse>;

  getCustomerWithLogin(
    request: api_v1_payment_pb.PaymentServiceGetCustomerWithLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_payment_pb.PaymentServiceGetCustomerWithLoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.PaymentService/GetCustomerWithLogin',
        request,
        metadata || {},
        this.methodDescriptorGetCustomerWithLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.PaymentService/GetCustomerWithLogin',
    request,
    metadata || {},
    this.methodDescriptorGetCustomerWithLogin);
  }

  methodDescriptorCheckIfCustomerExists = new grpcWeb.MethodDescriptor(
    '/api.v1.PaymentService/CheckIfCustomerExists',
    grpcWeb.MethodType.UNARY,
    api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsRequest,
    api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsResponse,
    (request: api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsRequest) => {
      return request.serializeBinary();
    },
    api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsResponse.deserializeBinary
  );

  checkIfCustomerExists(
    request: api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsResponse>;

  checkIfCustomerExists(
    request: api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsResponse>;

  checkIfCustomerExists(
    request: api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.PaymentService/CheckIfCustomerExists',
        request,
        metadata || {},
        this.methodDescriptorCheckIfCustomerExists,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.PaymentService/CheckIfCustomerExists',
    request,
    metadata || {},
    this.methodDescriptorCheckIfCustomerExists);
  }

  methodDescriptorHasPaymentMethod = new grpcWeb.MethodDescriptor(
    '/api.v1.PaymentService/HasPaymentMethod',
    grpcWeb.MethodType.UNARY,
    api_v1_payment_pb.PaymentServiceHasPaymentMethodRequest,
    api_v1_payment_pb.PaymentServiceHasPaymentMethodResponse,
    (request: api_v1_payment_pb.PaymentServiceHasPaymentMethodRequest) => {
      return request.serializeBinary();
    },
    api_v1_payment_pb.PaymentServiceHasPaymentMethodResponse.deserializeBinary
  );

  hasPaymentMethod(
    request: api_v1_payment_pb.PaymentServiceHasPaymentMethodRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceHasPaymentMethodResponse>;

  hasPaymentMethod(
    request: api_v1_payment_pb.PaymentServiceHasPaymentMethodRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_payment_pb.PaymentServiceHasPaymentMethodResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceHasPaymentMethodResponse>;

  hasPaymentMethod(
    request: api_v1_payment_pb.PaymentServiceHasPaymentMethodRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_payment_pb.PaymentServiceHasPaymentMethodResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.PaymentService/HasPaymentMethod',
        request,
        metadata || {},
        this.methodDescriptorHasPaymentMethod,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.PaymentService/HasPaymentMethod',
    request,
    metadata || {},
    this.methodDescriptorHasPaymentMethod);
  }

  methodDescriptorDeletePaymentMethod = new grpcWeb.MethodDescriptor(
    '/api.v1.PaymentService/DeletePaymentMethod',
    grpcWeb.MethodType.UNARY,
    api_v1_payment_pb.PaymentServiceDeletePaymentMethodRequest,
    api_v1_payment_pb.PaymentServiceDeletePaymentMethodResponse,
    (request: api_v1_payment_pb.PaymentServiceDeletePaymentMethodRequest) => {
      return request.serializeBinary();
    },
    api_v1_payment_pb.PaymentServiceDeletePaymentMethodResponse.deserializeBinary
  );

  deletePaymentMethod(
    request: api_v1_payment_pb.PaymentServiceDeletePaymentMethodRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceDeletePaymentMethodResponse>;

  deletePaymentMethod(
    request: api_v1_payment_pb.PaymentServiceDeletePaymentMethodRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_payment_pb.PaymentServiceDeletePaymentMethodResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceDeletePaymentMethodResponse>;

  deletePaymentMethod(
    request: api_v1_payment_pb.PaymentServiceDeletePaymentMethodRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_payment_pb.PaymentServiceDeletePaymentMethodResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.PaymentService/DeletePaymentMethod',
        request,
        metadata || {},
        this.methodDescriptorDeletePaymentMethod,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.PaymentService/DeletePaymentMethod',
    request,
    metadata || {},
    this.methodDescriptorDeletePaymentMethod);
  }

  methodDescriptorGetUsageOfSubscription = new grpcWeb.MethodDescriptor(
    '/api.v1.PaymentService/GetUsageOfSubscription',
    grpcWeb.MethodType.UNARY,
    api_v1_payment_pb.PaymentServiceGetUsageOfSubscriptionRequest,
    api_v1_payment_pb.PaymentServiceGetUsageOfSubscriptionResponse,
    (request: api_v1_payment_pb.PaymentServiceGetUsageOfSubscriptionRequest) => {
      return request.serializeBinary();
    },
    api_v1_payment_pb.PaymentServiceGetUsageOfSubscriptionResponse.deserializeBinary
  );

  getUsageOfSubscription(
    request: api_v1_payment_pb.PaymentServiceGetUsageOfSubscriptionRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_payment_pb.PaymentServiceGetUsageOfSubscriptionResponse>;

  getUsageOfSubscription(
    request: api_v1_payment_pb.PaymentServiceGetUsageOfSubscriptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_payment_pb.PaymentServiceGetUsageOfSubscriptionResponse) => void): grpcWeb.ClientReadableStream<api_v1_payment_pb.PaymentServiceGetUsageOfSubscriptionResponse>;

  getUsageOfSubscription(
    request: api_v1_payment_pb.PaymentServiceGetUsageOfSubscriptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_payment_pb.PaymentServiceGetUsageOfSubscriptionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.PaymentService/GetUsageOfSubscription',
        request,
        metadata || {},
        this.methodDescriptorGetUsageOfSubscription,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.PaymentService/GetUsageOfSubscription',
    request,
    metadata || {},
    this.methodDescriptorGetUsageOfSubscription);
  }

}

