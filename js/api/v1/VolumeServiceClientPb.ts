/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_v1_volume_pb from '../../api/v1/volume_pb';


export class VolumeServiceClient {
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
    '/api.v1.VolumeService/Get',
    grpcWeb.MethodType.UNARY,
    api_v1_volume_pb.VolumeServiceGetRequest,
    api_v1_volume_pb.VolumeServiceGetResponse,
    (request: api_v1_volume_pb.VolumeServiceGetRequest) => {
      return request.serializeBinary();
    },
    api_v1_volume_pb.VolumeServiceGetResponse.deserializeBinary
  );

  get(
    request: api_v1_volume_pb.VolumeServiceGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_volume_pb.VolumeServiceGetResponse>;

  get(
    request: api_v1_volume_pb.VolumeServiceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_volume_pb.VolumeServiceGetResponse) => void): grpcWeb.ClientReadableStream<api_v1_volume_pb.VolumeServiceGetResponse>;

  get(
    request: api_v1_volume_pb.VolumeServiceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_volume_pb.VolumeServiceGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.VolumeService/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.VolumeService/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/api.v1.VolumeService/List',
    grpcWeb.MethodType.UNARY,
    api_v1_volume_pb.VolumeServiceListRequest,
    api_v1_volume_pb.VolumeServiceListResponse,
    (request: api_v1_volume_pb.VolumeServiceListRequest) => {
      return request.serializeBinary();
    },
    api_v1_volume_pb.VolumeServiceListResponse.deserializeBinary
  );

  list(
    request: api_v1_volume_pb.VolumeServiceListRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_volume_pb.VolumeServiceListResponse>;

  list(
    request: api_v1_volume_pb.VolumeServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_volume_pb.VolumeServiceListResponse) => void): grpcWeb.ClientReadableStream<api_v1_volume_pb.VolumeServiceListResponse>;

  list(
    request: api_v1_volume_pb.VolumeServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_volume_pb.VolumeServiceListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.VolumeService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.VolumeService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

  methodDescriptorDelete = new grpcWeb.MethodDescriptor(
    '/api.v1.VolumeService/Delete',
    grpcWeb.MethodType.UNARY,
    api_v1_volume_pb.VolumeServiceDeleteRequest,
    api_v1_volume_pb.VolumeServiceDeleteResponse,
    (request: api_v1_volume_pb.VolumeServiceDeleteRequest) => {
      return request.serializeBinary();
    },
    api_v1_volume_pb.VolumeServiceDeleteResponse.deserializeBinary
  );

  delete(
    request: api_v1_volume_pb.VolumeServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_volume_pb.VolumeServiceDeleteResponse>;

  delete(
    request: api_v1_volume_pb.VolumeServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_volume_pb.VolumeServiceDeleteResponse) => void): grpcWeb.ClientReadableStream<api_v1_volume_pb.VolumeServiceDeleteResponse>;

  delete(
    request: api_v1_volume_pb.VolumeServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_volume_pb.VolumeServiceDeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.VolumeService/Delete',
        request,
        metadata || {},
        this.methodDescriptorDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.VolumeService/Delete',
    request,
    metadata || {},
    this.methodDescriptorDelete);
  }

}

export class SnapshotServiceClient {
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
    '/api.v1.SnapshotService/Get',
    grpcWeb.MethodType.UNARY,
    api_v1_volume_pb.SnapshotServiceGetRequest,
    api_v1_volume_pb.SnapshotServiceGetResponse,
    (request: api_v1_volume_pb.SnapshotServiceGetRequest) => {
      return request.serializeBinary();
    },
    api_v1_volume_pb.SnapshotServiceGetResponse.deserializeBinary
  );

  get(
    request: api_v1_volume_pb.SnapshotServiceGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_volume_pb.SnapshotServiceGetResponse>;

  get(
    request: api_v1_volume_pb.SnapshotServiceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_volume_pb.SnapshotServiceGetResponse) => void): grpcWeb.ClientReadableStream<api_v1_volume_pb.SnapshotServiceGetResponse>;

  get(
    request: api_v1_volume_pb.SnapshotServiceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_volume_pb.SnapshotServiceGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.SnapshotService/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.SnapshotService/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/api.v1.SnapshotService/List',
    grpcWeb.MethodType.UNARY,
    api_v1_volume_pb.SnapshotServiceListRequest,
    api_v1_volume_pb.SnapshotServiceListResponse,
    (request: api_v1_volume_pb.SnapshotServiceListRequest) => {
      return request.serializeBinary();
    },
    api_v1_volume_pb.SnapshotServiceListResponse.deserializeBinary
  );

  list(
    request: api_v1_volume_pb.SnapshotServiceListRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_volume_pb.SnapshotServiceListResponse>;

  list(
    request: api_v1_volume_pb.SnapshotServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_volume_pb.SnapshotServiceListResponse) => void): grpcWeb.ClientReadableStream<api_v1_volume_pb.SnapshotServiceListResponse>;

  list(
    request: api_v1_volume_pb.SnapshotServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_volume_pb.SnapshotServiceListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.SnapshotService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.SnapshotService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

  methodDescriptorDelete = new grpcWeb.MethodDescriptor(
    '/api.v1.SnapshotService/Delete',
    grpcWeb.MethodType.UNARY,
    api_v1_volume_pb.SnapshotServiceDeleteRequest,
    api_v1_volume_pb.SnapshotServiceDeleteResponse,
    (request: api_v1_volume_pb.SnapshotServiceDeleteRequest) => {
      return request.serializeBinary();
    },
    api_v1_volume_pb.SnapshotServiceDeleteResponse.deserializeBinary
  );

  delete(
    request: api_v1_volume_pb.SnapshotServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_volume_pb.SnapshotServiceDeleteResponse>;

  delete(
    request: api_v1_volume_pb.SnapshotServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_volume_pb.SnapshotServiceDeleteResponse) => void): grpcWeb.ClientReadableStream<api_v1_volume_pb.SnapshotServiceDeleteResponse>;

  delete(
    request: api_v1_volume_pb.SnapshotServiceDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_volume_pb.SnapshotServiceDeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.SnapshotService/Delete',
        request,
        metadata || {},
        this.methodDescriptorDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.SnapshotService/Delete',
    request,
    metadata || {},
    this.methodDescriptorDelete);
  }

}

