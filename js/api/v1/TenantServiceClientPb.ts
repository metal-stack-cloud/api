/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_v1_tenant_pb from '../../api/v1/tenant_pb';


export class TenantServiceClient {
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

  methodDescriptorCreate = new grpcWeb.MethodDescriptor(
    '/api.v1.TenantService/Create',
    grpcWeb.MethodType.UNARY,
    api_v1_tenant_pb.TenantServiceCreateRequest,
    api_v1_tenant_pb.TenantServiceCreateResponse,
    (request: api_v1_tenant_pb.TenantServiceCreateRequest) => {
      return request.serializeBinary();
    },
    api_v1_tenant_pb.TenantServiceCreateResponse.deserializeBinary
  );

  create(
    request: api_v1_tenant_pb.TenantServiceCreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_tenant_pb.TenantServiceCreateResponse>;

  create(
    request: api_v1_tenant_pb.TenantServiceCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_tenant_pb.TenantServiceCreateResponse) => void): grpcWeb.ClientReadableStream<api_v1_tenant_pb.TenantServiceCreateResponse>;

  create(
    request: api_v1_tenant_pb.TenantServiceCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_tenant_pb.TenantServiceCreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.TenantService/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.TenantService/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorCreateOrUpdate = new grpcWeb.MethodDescriptor(
    '/api.v1.TenantService/CreateOrUpdate',
    grpcWeb.MethodType.UNARY,
    api_v1_tenant_pb.TenantServiceCreateOrUpdateRequest,
    api_v1_tenant_pb.TenantServiceCreateOrUpdateResponse,
    (request: api_v1_tenant_pb.TenantServiceCreateOrUpdateRequest) => {
      return request.serializeBinary();
    },
    api_v1_tenant_pb.TenantServiceCreateOrUpdateResponse.deserializeBinary
  );

  createOrUpdate(
    request: api_v1_tenant_pb.TenantServiceCreateOrUpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_tenant_pb.TenantServiceCreateOrUpdateResponse>;

  createOrUpdate(
    request: api_v1_tenant_pb.TenantServiceCreateOrUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_tenant_pb.TenantServiceCreateOrUpdateResponse) => void): grpcWeb.ClientReadableStream<api_v1_tenant_pb.TenantServiceCreateOrUpdateResponse>;

  createOrUpdate(
    request: api_v1_tenant_pb.TenantServiceCreateOrUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_tenant_pb.TenantServiceCreateOrUpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.TenantService/CreateOrUpdate',
        request,
        metadata || {},
        this.methodDescriptorCreateOrUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.TenantService/CreateOrUpdate',
    request,
    metadata || {},
    this.methodDescriptorCreateOrUpdate);
  }

  methodDescriptorGet = new grpcWeb.MethodDescriptor(
    '/api.v1.TenantService/Get',
    grpcWeb.MethodType.UNARY,
    api_v1_tenant_pb.TenantServiceGetRequest,
    api_v1_tenant_pb.TenantServiceGetResponse,
    (request: api_v1_tenant_pb.TenantServiceGetRequest) => {
      return request.serializeBinary();
    },
    api_v1_tenant_pb.TenantServiceGetResponse.deserializeBinary
  );

  get(
    request: api_v1_tenant_pb.TenantServiceGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_tenant_pb.TenantServiceGetResponse>;

  get(
    request: api_v1_tenant_pb.TenantServiceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_tenant_pb.TenantServiceGetResponse) => void): grpcWeb.ClientReadableStream<api_v1_tenant_pb.TenantServiceGetResponse>;

  get(
    request: api_v1_tenant_pb.TenantServiceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_tenant_pb.TenantServiceGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.TenantService/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.TenantService/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorUpdate = new grpcWeb.MethodDescriptor(
    '/api.v1.TenantService/Update',
    grpcWeb.MethodType.UNARY,
    api_v1_tenant_pb.TenantServiceUpdateRequest,
    api_v1_tenant_pb.TenantServiceUpdateResponse,
    (request: api_v1_tenant_pb.TenantServiceUpdateRequest) => {
      return request.serializeBinary();
    },
    api_v1_tenant_pb.TenantServiceUpdateResponse.deserializeBinary
  );

  update(
    request: api_v1_tenant_pb.TenantServiceUpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_tenant_pb.TenantServiceUpdateResponse>;

  update(
    request: api_v1_tenant_pb.TenantServiceUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_tenant_pb.TenantServiceUpdateResponse) => void): grpcWeb.ClientReadableStream<api_v1_tenant_pb.TenantServiceUpdateResponse>;

  update(
    request: api_v1_tenant_pb.TenantServiceUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_tenant_pb.TenantServiceUpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.TenantService/Update',
        request,
        metadata || {},
        this.methodDescriptorUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.TenantService/Update',
    request,
    metadata || {},
    this.methodDescriptorUpdate);
  }

  methodDescriptorDelete = new grpcWeb.MethodDescriptor(
    '/api.v1.TenantService/Delete',
    grpcWeb.MethodType.UNARY,
    api_v1_tenant_pb.TenantServiceDeleteRequest,
    api_v1_tenant_pb.TenantServiceDeleteResponse,
    (request: api_v1_tenant_pb.TenantServiceDeleteRequest) => {
      return request.serializeBinary();
    },
    api_v1_tenant_pb.TenantServiceDeleteResponse.deserializeBinary
  );

  delete(
    request: api_v1_tenant_pb.TenantServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_tenant_pb.TenantServiceDeleteResponse>;

  delete(
    request: api_v1_tenant_pb.TenantServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_tenant_pb.TenantServiceDeleteResponse) => void): grpcWeb.ClientReadableStream<api_v1_tenant_pb.TenantServiceDeleteResponse>;

  delete(
    request: api_v1_tenant_pb.TenantServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_tenant_pb.TenantServiceDeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.TenantService/Delete',
        request,
        metadata || {},
        this.methodDescriptorDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.TenantService/Delete',
    request,
    metadata || {},
    this.methodDescriptorDelete);
  }

}

