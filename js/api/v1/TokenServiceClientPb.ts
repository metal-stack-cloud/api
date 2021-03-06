/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_v1_token_pb from '../../api/v1/token_pb';


export class TokenServiceClient {
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
    '/api.v1.TokenService/Create',
    grpcWeb.MethodType.UNARY,
    api_v1_token_pb.TokenServiceCreateRequest,
    api_v1_token_pb.TokenServiceCreateResponse,
    (request: api_v1_token_pb.TokenServiceCreateRequest) => {
      return request.serializeBinary();
    },
    api_v1_token_pb.TokenServiceCreateResponse.deserializeBinary
  );

  create(
    request: api_v1_token_pb.TokenServiceCreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_v1_token_pb.TokenServiceCreateResponse>;

  create(
    request: api_v1_token_pb.TokenServiceCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_v1_token_pb.TokenServiceCreateResponse) => void): grpcWeb.ClientReadableStream<api_v1_token_pb.TokenServiceCreateResponse>;

  create(
    request: api_v1_token_pb.TokenServiceCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_v1_token_pb.TokenServiceCreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.v1.TokenService/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.v1.TokenService/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

}

