/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_v1_version_pb from '../../api/v1/version_pb';


export class VersionServiceClient {
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
    '/api.v1.VersionService/Get',
    grpcWeb.MethodType.UNARY,
    api_v1_version_pb.VersionServiceGetRequest,
    api_v1_version_pb.VersionServiceGetResponse,
    (request: api_v1_version_pb.VersionServiceGetRequest) => {
      return request.serializeBinary();
    },
    api_v1_version_pb.VersionServiceGetResponse.deserializeBinary
  );

  get(
    request: api_v1_version_pb.VersionServiceGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_version_pb.VersionServiceGetResponse>;

  get(
    request: api_v1_version_pb.VersionServiceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_version_pb.VersionServiceGetResponse) => void): grpcWeb.ClientReadableStream<api_v1_version_pb.VersionServiceGetResponse>;

  get(
    request: api_v1_version_pb.VersionServiceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_version_pb.VersionServiceGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.VersionService/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.VersionService/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

}

