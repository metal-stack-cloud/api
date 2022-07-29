/**
 * @fileoverview gRPC-Web generated client stub for status.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as status_v1_message_pb from '../../status/v1/message_pb';


export class MessageServiceClient {
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
    '/status.v1.MessageService/List',
    grpcWeb.MethodType.UNARY,
    status_v1_message_pb.MessageServiceListRequest,
    status_v1_message_pb.MessageServiceListResponse,
    (request: status_v1_message_pb.MessageServiceListRequest) => {
      return request.serializeBinary();
    },
    status_v1_message_pb.MessageServiceListResponse.deserializeBinary
  );

  list(
    request: status_v1_message_pb.MessageServiceListRequest,
    metadata: grpcWeb.Metadata | null): Promise<status_v1_message_pb.MessageServiceListResponse>;

  list(
    request: status_v1_message_pb.MessageServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: status_v1_message_pb.MessageServiceListResponse) => void): grpcWeb.ClientReadableStream<status_v1_message_pb.MessageServiceListResponse>;

  list(
    request: status_v1_message_pb.MessageServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: status_v1_message_pb.MessageServiceListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/status.v1.MessageService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/status.v1.MessageService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

}
