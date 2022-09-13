/**
 * @fileoverview gRPC-Web generated client stub for status.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as status_v1_status_pb from '../../status/v1/status_pb';


export class StatusServiceClient {
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
    '/status.v1.StatusService/Get',
    grpcWeb.MethodType.UNARY,
    status_v1_status_pb.StatusServiceGetRequest,
    status_v1_status_pb.StatusServiceGetResponse,
    (request: status_v1_status_pb.StatusServiceGetRequest) => {
      return request.serializeBinary();
    },
    status_v1_status_pb.StatusServiceGetResponse.deserializeBinary
  );

  get(
    request: status_v1_status_pb.StatusServiceGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<status_v1_status_pb.StatusServiceGetResponse>;

  get(
    request: status_v1_status_pb.StatusServiceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: status_v1_status_pb.StatusServiceGetResponse) => void): grpcWeb.ClientReadableStream<status_v1_status_pb.StatusServiceGetResponse>;

  get(
    request: status_v1_status_pb.StatusServiceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: status_v1_status_pb.StatusServiceGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/status.v1.StatusService/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/status.v1.StatusService/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

}

