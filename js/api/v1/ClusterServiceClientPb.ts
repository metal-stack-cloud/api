/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_v1_cluster_pb from '../../api/v1/cluster_pb';


export class ClusterServiceClient {
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
    '/api.v1.ClusterService/Create',
    grpcWeb.MethodType.UNARY,
    api_v1_cluster_pb.ClusterServiceCreateRequest,
    api_v1_cluster_pb.ClusterServiceCreateResponse,
    (request: api_v1_cluster_pb.ClusterServiceCreateRequest) => {
      return request.serializeBinary();
    },
    api_v1_cluster_pb.ClusterServiceCreateResponse.deserializeBinary
  );

  create(
    request: api_v1_cluster_pb.ClusterServiceCreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_cluster_pb.ClusterServiceCreateResponse>;

  create(
    request: api_v1_cluster_pb.ClusterServiceCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_cluster_pb.ClusterServiceCreateResponse) => void): grpcWeb.ClientReadableStream<api_v1_cluster_pb.ClusterServiceCreateResponse>;

  create(
    request: api_v1_cluster_pb.ClusterServiceCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_cluster_pb.ClusterServiceCreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.ClusterService/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.ClusterService/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorGet = new grpcWeb.MethodDescriptor(
    '/api.v1.ClusterService/Get',
    grpcWeb.MethodType.UNARY,
    api_v1_cluster_pb.ClusterServiceGetRequest,
    api_v1_cluster_pb.ClusterServiceGetResponse,
    (request: api_v1_cluster_pb.ClusterServiceGetRequest) => {
      return request.serializeBinary();
    },
    api_v1_cluster_pb.ClusterServiceGetResponse.deserializeBinary
  );

  get(
    request: api_v1_cluster_pb.ClusterServiceGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_cluster_pb.ClusterServiceGetResponse>;

  get(
    request: api_v1_cluster_pb.ClusterServiceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_cluster_pb.ClusterServiceGetResponse) => void): grpcWeb.ClientReadableStream<api_v1_cluster_pb.ClusterServiceGetResponse>;

  get(
    request: api_v1_cluster_pb.ClusterServiceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_cluster_pb.ClusterServiceGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.ClusterService/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.ClusterService/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/api.v1.ClusterService/List',
    grpcWeb.MethodType.UNARY,
    api_v1_cluster_pb.ClusterServiceListRequest,
    api_v1_cluster_pb.ClusterServiceListResponse,
    (request: api_v1_cluster_pb.ClusterServiceListRequest) => {
      return request.serializeBinary();
    },
    api_v1_cluster_pb.ClusterServiceListResponse.deserializeBinary
  );

  list(
    request: api_v1_cluster_pb.ClusterServiceListRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_cluster_pb.ClusterServiceListResponse>;

  list(
    request: api_v1_cluster_pb.ClusterServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_cluster_pb.ClusterServiceListResponse) => void): grpcWeb.ClientReadableStream<api_v1_cluster_pb.ClusterServiceListResponse>;

  list(
    request: api_v1_cluster_pb.ClusterServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_cluster_pb.ClusterServiceListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.ClusterService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.ClusterService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

  methodDescriptorWatchStatus = new grpcWeb.MethodDescriptor(
    '/api.v1.ClusterService/WatchStatus',
    grpcWeb.MethodType.SERVER_STREAMING,
    api_v1_cluster_pb.ClusterServiceWatchStatusRequest,
    api_v1_cluster_pb.ClusterServiceWatchStatusResponse,
    (request: api_v1_cluster_pb.ClusterServiceWatchStatusRequest) => {
      return request.serializeBinary();
    },
    api_v1_cluster_pb.ClusterServiceWatchStatusResponse.deserializeBinary
  );

  watchStatus(
    request: api_v1_cluster_pb.ClusterServiceWatchStatusRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<api_v1_cluster_pb.ClusterServiceWatchStatusResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/api.v1.ClusterService/WatchStatus',
      request,
      metadata || {},
      this.methodDescriptorWatchStatus);
  }

  methodDescriptorDelete = new grpcWeb.MethodDescriptor(
    '/api.v1.ClusterService/Delete',
    grpcWeb.MethodType.UNARY,
    api_v1_cluster_pb.ClusterServiceDeleteRequest,
    api_v1_cluster_pb.ClusterServiceDeleteResponse,
    (request: api_v1_cluster_pb.ClusterServiceDeleteRequest) => {
      return request.serializeBinary();
    },
    api_v1_cluster_pb.ClusterServiceDeleteResponse.deserializeBinary
  );

  delete(
    request: api_v1_cluster_pb.ClusterServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_cluster_pb.ClusterServiceDeleteResponse>;

  delete(
    request: api_v1_cluster_pb.ClusterServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_cluster_pb.ClusterServiceDeleteResponse) => void): grpcWeb.ClientReadableStream<api_v1_cluster_pb.ClusterServiceDeleteResponse>;

  delete(
    request: api_v1_cluster_pb.ClusterServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_cluster_pb.ClusterServiceDeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.ClusterService/Delete',
        request,
        metadata || {},
        this.methodDescriptorDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.ClusterService/Delete',
    request,
    metadata || {},
    this.methodDescriptorDelete);
  }

  methodDescriptorUpdate = new grpcWeb.MethodDescriptor(
    '/api.v1.ClusterService/Update',
    grpcWeb.MethodType.UNARY,
    api_v1_cluster_pb.ClusterServiceUpdateRequest,
    api_v1_cluster_pb.ClusterServiceUpdateResponse,
    (request: api_v1_cluster_pb.ClusterServiceUpdateRequest) => {
      return request.serializeBinary();
    },
    api_v1_cluster_pb.ClusterServiceUpdateResponse.deserializeBinary
  );

  update(
    request: api_v1_cluster_pb.ClusterServiceUpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_cluster_pb.ClusterServiceUpdateResponse>;

  update(
    request: api_v1_cluster_pb.ClusterServiceUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_cluster_pb.ClusterServiceUpdateResponse) => void): grpcWeb.ClientReadableStream<api_v1_cluster_pb.ClusterServiceUpdateResponse>;

  update(
    request: api_v1_cluster_pb.ClusterServiceUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_cluster_pb.ClusterServiceUpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.ClusterService/Update',
        request,
        metadata || {},
        this.methodDescriptorUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.ClusterService/Update',
    request,
    metadata || {},
    this.methodDescriptorUpdate);
  }

  methodDescriptorGetCredentials = new grpcWeb.MethodDescriptor(
    '/api.v1.ClusterService/GetCredentials',
    grpcWeb.MethodType.UNARY,
    api_v1_cluster_pb.ClusterServiceGetCredentialsRequest,
    api_v1_cluster_pb.ClusterServiceGetCredentialsResponse,
    (request: api_v1_cluster_pb.ClusterServiceGetCredentialsRequest) => {
      return request.serializeBinary();
    },
    api_v1_cluster_pb.ClusterServiceGetCredentialsResponse.deserializeBinary
  );

  getCredentials(
    request: api_v1_cluster_pb.ClusterServiceGetCredentialsRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_cluster_pb.ClusterServiceGetCredentialsResponse>;

  getCredentials(
    request: api_v1_cluster_pb.ClusterServiceGetCredentialsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_cluster_pb.ClusterServiceGetCredentialsResponse) => void): grpcWeb.ClientReadableStream<api_v1_cluster_pb.ClusterServiceGetCredentialsResponse>;

  getCredentials(
    request: api_v1_cluster_pb.ClusterServiceGetCredentialsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_cluster_pb.ClusterServiceGetCredentialsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.ClusterService/GetCredentials',
        request,
        metadata || {},
        this.methodDescriptorGetCredentials,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.ClusterService/GetCredentials',
    request,
    metadata || {},
    this.methodDescriptorGetCredentials);
  }

}

