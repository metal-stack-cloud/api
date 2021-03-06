/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_v1_ip_pb from '../../api/v1/ip_pb';


export class IPServiceClient {
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

  methodDescriptorGet = new grpcWeb.MethodDescriptor(
    '/api.v1.IPService/Get',
    grpcWeb.MethodType.UNARY,
    api_v1_ip_pb.IPServiceGetRequest,
    api_v1_ip_pb.IPServiceGetResponse,
    (request: api_v1_ip_pb.IPServiceGetRequest) => {
      return request.serializeBinary();
    },
    api_v1_ip_pb.IPServiceGetResponse.deserializeBinary
  );

  get(
    request: api_v1_ip_pb.IPServiceGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_ip_pb.IPServiceGetResponse>;

  get(
    request: api_v1_ip_pb.IPServiceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_ip_pb.IPServiceGetResponse) => void): grpcWeb.ClientReadableStream<api_v1_ip_pb.IPServiceGetResponse>;

  get(
    request: api_v1_ip_pb.IPServiceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_ip_pb.IPServiceGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.IPService/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.IPService/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorAllocate = new grpcWeb.MethodDescriptor(
    '/api.v1.IPService/Allocate',
    grpcWeb.MethodType.UNARY,
    api_v1_ip_pb.IPServiceAllocateRequest,
    api_v1_ip_pb.IPServiceAllocateResponse,
    (request: api_v1_ip_pb.IPServiceAllocateRequest) => {
      return request.serializeBinary();
    },
    api_v1_ip_pb.IPServiceAllocateResponse.deserializeBinary
  );

  allocate(
    request: api_v1_ip_pb.IPServiceAllocateRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_ip_pb.IPServiceAllocateResponse>;

  allocate(
    request: api_v1_ip_pb.IPServiceAllocateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_ip_pb.IPServiceAllocateResponse) => void): grpcWeb.ClientReadableStream<api_v1_ip_pb.IPServiceAllocateResponse>;

  allocate(
    request: api_v1_ip_pb.IPServiceAllocateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_ip_pb.IPServiceAllocateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.IPService/Allocate',
        request,
        metadata || {},
        this.methodDescriptorAllocate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.IPService/Allocate',
    request,
    metadata || {},
    this.methodDescriptorAllocate);
  }

  methodDescriptorStatic = new grpcWeb.MethodDescriptor(
    '/api.v1.IPService/Static',
    grpcWeb.MethodType.UNARY,
    api_v1_ip_pb.IPServiceStaticRequest,
    api_v1_ip_pb.IPServiceStaticResponse,
    (request: api_v1_ip_pb.IPServiceStaticRequest) => {
      return request.serializeBinary();
    },
    api_v1_ip_pb.IPServiceStaticResponse.deserializeBinary
  );

  static(
    request: api_v1_ip_pb.IPServiceStaticRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_ip_pb.IPServiceStaticResponse>;

  static(
    request: api_v1_ip_pb.IPServiceStaticRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_ip_pb.IPServiceStaticResponse) => void): grpcWeb.ClientReadableStream<api_v1_ip_pb.IPServiceStaticResponse>;

  static(
    request: api_v1_ip_pb.IPServiceStaticRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_ip_pb.IPServiceStaticResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.IPService/Static',
        request,
        metadata || {},
        this.methodDescriptorStatic,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.IPService/Static',
    request,
    metadata || {},
    this.methodDescriptorStatic);
  }

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/api.v1.IPService/List',
    grpcWeb.MethodType.UNARY,
    api_v1_ip_pb.IPServiceListRequest,
    api_v1_ip_pb.IPServiceListResponse,
    (request: api_v1_ip_pb.IPServiceListRequest) => {
      return request.serializeBinary();
    },
    api_v1_ip_pb.IPServiceListResponse.deserializeBinary
  );

  list(
    request: api_v1_ip_pb.IPServiceListRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_ip_pb.IPServiceListResponse>;

  list(
    request: api_v1_ip_pb.IPServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_ip_pb.IPServiceListResponse) => void): grpcWeb.ClientReadableStream<api_v1_ip_pb.IPServiceListResponse>;

  list(
    request: api_v1_ip_pb.IPServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_ip_pb.IPServiceListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.IPService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.IPService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

  methodDescriptorDelete = new grpcWeb.MethodDescriptor(
    '/api.v1.IPService/Delete',
    grpcWeb.MethodType.UNARY,
    api_v1_ip_pb.IPServiceDeleteRequest,
    api_v1_ip_pb.IPServiceDeleteResponse,
    (request: api_v1_ip_pb.IPServiceDeleteRequest) => {
      return request.serializeBinary();
    },
    api_v1_ip_pb.IPServiceDeleteResponse.deserializeBinary
  );

  delete(
    request: api_v1_ip_pb.IPServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_ip_pb.IPServiceDeleteResponse>;

  delete(
    request: api_v1_ip_pb.IPServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_ip_pb.IPServiceDeleteResponse) => void): grpcWeb.ClientReadableStream<api_v1_ip_pb.IPServiceDeleteResponse>;

  delete(
    request: api_v1_ip_pb.IPServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_ip_pb.IPServiceDeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.IPService/Delete',
        request,
        metadata || {},
        this.methodDescriptorDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.IPService/Delete',
    request,
    metadata || {},
    this.methodDescriptorDelete);
  }

}

