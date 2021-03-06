/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_v1_assets_pb from '../../api/v1/assets_pb';


export class AssetServiceClient {
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
    '/api.v1.AssetService/List',
    grpcWeb.MethodType.UNARY,
    api_v1_assets_pb.AssetServiceListRequest,
    api_v1_assets_pb.AssetServiceListResponse,
    (request: api_v1_assets_pb.AssetServiceListRequest) => {
      return request.serializeBinary();
    },
    api_v1_assets_pb.AssetServiceListResponse.deserializeBinary
  );

  list(
    request: api_v1_assets_pb.AssetServiceListRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_assets_pb.AssetServiceListResponse>;

  list(
    request: api_v1_assets_pb.AssetServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_assets_pb.AssetServiceListResponse) => void): grpcWeb.ClientReadableStream<api_v1_assets_pb.AssetServiceListResponse>;

  list(
    request: api_v1_assets_pb.AssetServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_assets_pb.AssetServiceListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.AssetService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.AssetService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

}

