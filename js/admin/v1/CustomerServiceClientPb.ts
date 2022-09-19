/**
 * @fileoverview gRPC-Web generated client stub for admin.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as admin_v1_customer_pb from '../../admin/v1/customer_pb';


export class CustomerServiceClient {
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

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/admin.v1.CustomerService/List',
    grpcWeb.MethodType.UNARY,
    admin_v1_customer_pb.CustomerServiceListRequest,
    admin_v1_customer_pb.CustomerServiceListResponse,
    (request: admin_v1_customer_pb.CustomerServiceListRequest) => {
      return request.serializeBinary();
    },
    admin_v1_customer_pb.CustomerServiceListResponse.deserializeBinary
  );

  list(
    request: admin_v1_customer_pb.CustomerServiceListRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_customer_pb.CustomerServiceListResponse>;

  list(
    request: admin_v1_customer_pb.CustomerServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: admin_v1_customer_pb.CustomerServiceListResponse) => void): grpcWeb.ClientReadableStream<admin_v1_customer_pb.CustomerServiceListResponse>;

  list(
    request: admin_v1_customer_pb.CustomerServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: admin_v1_customer_pb.CustomerServiceListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.CustomerService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.CustomerService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

  methodDescriptorAdmit = new grpcWeb.MethodDescriptor(
    '/admin.v1.CustomerService/Admit',
    grpcWeb.MethodType.UNARY,
    admin_v1_customer_pb.CustomerServiceAdmitRequest,
    admin_v1_customer_pb.CustomerServiceAdmitResponse,
    (request: admin_v1_customer_pb.CustomerServiceAdmitRequest) => {
      return request.serializeBinary();
    },
    admin_v1_customer_pb.CustomerServiceAdmitResponse.deserializeBinary
  );

  admit(
    request: admin_v1_customer_pb.CustomerServiceAdmitRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_customer_pb.CustomerServiceAdmitResponse>;

  admit(
    request: admin_v1_customer_pb.CustomerServiceAdmitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: admin_v1_customer_pb.CustomerServiceAdmitResponse) => void): grpcWeb.ClientReadableStream<admin_v1_customer_pb.CustomerServiceAdmitResponse>;

  admit(
    request: admin_v1_customer_pb.CustomerServiceAdmitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: admin_v1_customer_pb.CustomerServiceAdmitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.CustomerService/Admit',
        request,
        metadata || {},
        this.methodDescriptorAdmit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.CustomerService/Admit',
    request,
    metadata || {},
    this.methodDescriptorAdmit);
  }

}

