"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for admin.v1
 * @enhanceable
 * @public
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var admin_v1_user_pb = __importStar(require("../../admin/v1/user_pb"));
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient(hostname, credentials, options) {
        this.methodDescriptorList = new grpcWeb.MethodDescriptor('/admin.v1.UserService/List', grpcWeb.MethodType.UNARY, admin_v1_user_pb.UserServiceListRequest, admin_v1_user_pb.UserServiceListResponse, function (request) {
            return request.serializeBinary();
        }, admin_v1_user_pb.UserServiceListResponse.deserializeBinary);
        this.methodDescriptorAdmit = new grpcWeb.MethodDescriptor('/admin.v1.UserService/Admit', grpcWeb.MethodType.UNARY, admin_v1_user_pb.UserServiceAdmitRequest, admin_v1_user_pb.UserServiceAdmitResponse, function (request) {
            return request.serializeBinary();
        }, admin_v1_user_pb.UserServiceAdmitResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    UserServiceClient.prototype.list = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/admin.v1.UserService/List', request, metadata || {}, this.methodDescriptorList, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/admin.v1.UserService/List', request, metadata || {}, this.methodDescriptorList);
    };
    UserServiceClient.prototype.admit = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/admin.v1.UserService/Admit', request, metadata || {}, this.methodDescriptorAdmit, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/admin.v1.UserService/Admit', request, metadata || {}, this.methodDescriptorAdmit);
    };
    return UserServiceClient;
}());
exports.UserServiceClient = UserServiceClient;
