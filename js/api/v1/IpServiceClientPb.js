"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for api.v1
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
exports.IPServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var api_v1_ip_pb = __importStar(require("../../api/v1/ip_pb"));
var IPServiceClient = /** @class */ (function () {
    function IPServiceClient(hostname, credentials, options) {
        this.methodDescriptorGet = new grpcWeb.MethodDescriptor('/api.v1.IPService/Get', grpcWeb.MethodType.UNARY, api_v1_ip_pb.IPServiceGetRequest, api_v1_ip_pb.IPServiceGetResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_ip_pb.IPServiceGetResponse.deserializeBinary);
        this.methodDescriptorAllocate = new grpcWeb.MethodDescriptor('/api.v1.IPService/Allocate', grpcWeb.MethodType.UNARY, api_v1_ip_pb.IPServiceAllocateRequest, api_v1_ip_pb.IPServiceAllocateResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_ip_pb.IPServiceAllocateResponse.deserializeBinary);
        this.methodDescriptorStatic = new grpcWeb.MethodDescriptor('/api.v1.IPService/Static', grpcWeb.MethodType.UNARY, api_v1_ip_pb.IPServiceStaticRequest, api_v1_ip_pb.IPServiceStaticResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_ip_pb.IPServiceStaticResponse.deserializeBinary);
        this.methodDescriptorList = new grpcWeb.MethodDescriptor('/api.v1.IPService/List', grpcWeb.MethodType.UNARY, api_v1_ip_pb.IPServiceListRequest, api_v1_ip_pb.IPServiceListResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_ip_pb.IPServiceListResponse.deserializeBinary);
        this.methodDescriptorDelete = new grpcWeb.MethodDescriptor('/api.v1.IPService/Delete', grpcWeb.MethodType.UNARY, api_v1_ip_pb.IPServiceDeleteRequest, api_v1_ip_pb.IPServiceDeleteResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_ip_pb.IPServiceDeleteResponse.deserializeBinary);
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
    IPServiceClient.prototype.get = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.IPService/Get', request, metadata || {}, this.methodDescriptorGet, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.IPService/Get', request, metadata || {}, this.methodDescriptorGet);
    };
    IPServiceClient.prototype.allocate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.IPService/Allocate', request, metadata || {}, this.methodDescriptorAllocate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.IPService/Allocate', request, metadata || {}, this.methodDescriptorAllocate);
    };
    IPServiceClient.prototype.static = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.IPService/Static', request, metadata || {}, this.methodDescriptorStatic, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.IPService/Static', request, metadata || {}, this.methodDescriptorStatic);
    };
    IPServiceClient.prototype.list = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.IPService/List', request, metadata || {}, this.methodDescriptorList, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.IPService/List', request, metadata || {}, this.methodDescriptorList);
    };
    IPServiceClient.prototype.delete = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.IPService/Delete', request, metadata || {}, this.methodDescriptorDelete, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.IPService/Delete', request, metadata || {}, this.methodDescriptorDelete);
    };
    return IPServiceClient;
}());
exports.IPServiceClient = IPServiceClient;
