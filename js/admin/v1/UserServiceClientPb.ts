/**
 * @fileoverview gRPC-Web generated client stub for admin.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as admin_v1_user_pb from '../../admin/v1/user_pb';


export class UserServiceClient {
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
    '/admin.v1.UserService/List',
    grpcWeb.MethodType.UNARY,
    admin_v1_user_pb.UserServiceListRequest,
    admin_v1_user_pb.UserServiceListResponse,
    (request: admin_v1_user_pb.UserServiceListRequest) => {
      return request.serializeBinary();
    },
    admin_v1_user_pb.UserServiceListResponse.deserializeBinary
  );

  list(
    request: admin_v1_user_pb.UserServiceListRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_user_pb.UserServiceListResponse>;

  list(
    request: admin_v1_user_pb.UserServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: admin_v1_user_pb.UserServiceListResponse) => void): grpcWeb.ClientReadableStream<admin_v1_user_pb.UserServiceListResponse>;

  list(
    request: admin_v1_user_pb.UserServiceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: admin_v1_user_pb.UserServiceListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.UserService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.UserService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

  methodDescriptorAdmit = new grpcWeb.MethodDescriptor(
    '/admin.v1.UserService/Admit',
    grpcWeb.MethodType.UNARY,
    admin_v1_user_pb.UserServiceAdmitRequest,
    admin_v1_user_pb.UserServiceAdmitResponse,
    (request: admin_v1_user_pb.UserServiceAdmitRequest) => {
      return request.serializeBinary();
    },
    admin_v1_user_pb.UserServiceAdmitResponse.deserializeBinary
  );

  admit(
    request: admin_v1_user_pb.UserServiceAdmitRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_user_pb.UserServiceAdmitResponse>;

  admit(
    request: admin_v1_user_pb.UserServiceAdmitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: admin_v1_user_pb.UserServiceAdmitResponse) => void): grpcWeb.ClientReadableStream<admin_v1_user_pb.UserServiceAdmitResponse>;

  admit(
    request: admin_v1_user_pb.UserServiceAdmitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: admin_v1_user_pb.UserServiceAdmitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.UserService/Admit',
        request,
        metadata || {},
        this.methodDescriptorAdmit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.UserService/Admit',
    request,
    metadata || {},
    this.methodDescriptorAdmit);
  }

}

