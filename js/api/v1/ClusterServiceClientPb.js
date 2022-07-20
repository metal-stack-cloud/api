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
exports.ClusterServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var api_v1_cluster_pb = __importStar(require("../../api/v1/cluster_pb"));
var ClusterServiceClient = /** @class */ (function () {
    function ClusterServiceClient(hostname, credentials, options) {
        this.methodDescriptorCreate = new grpcWeb.MethodDescriptor('/api.v1.ClusterService/Create', grpcWeb.MethodType.UNARY, api_v1_cluster_pb.ClusterServiceCreateRequest, api_v1_cluster_pb.ClusterServiceCreateResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_cluster_pb.ClusterServiceCreateResponse.deserializeBinary);
        this.methodDescriptorGet = new grpcWeb.MethodDescriptor('/api.v1.ClusterService/Get', grpcWeb.MethodType.UNARY, api_v1_cluster_pb.ClusterServiceGetRequest, api_v1_cluster_pb.ClusterServiceGetResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_cluster_pb.ClusterServiceGetResponse.deserializeBinary);
        this.methodDescriptorList = new grpcWeb.MethodDescriptor('/api.v1.ClusterService/List', grpcWeb.MethodType.UNARY, api_v1_cluster_pb.ClusterServiceListRequest, api_v1_cluster_pb.ClusterServiceListResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_cluster_pb.ClusterServiceListResponse.deserializeBinary);
        this.methodDescriptorWatchStatus = new grpcWeb.MethodDescriptor('/api.v1.ClusterService/WatchStatus', grpcWeb.MethodType.SERVER_STREAMING, api_v1_cluster_pb.ClusterServiceWatchStatusRequest, api_v1_cluster_pb.ClusterServiceWatchStatusResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_cluster_pb.ClusterServiceWatchStatusResponse.deserializeBinary);
        this.methodDescriptorDelete = new grpcWeb.MethodDescriptor('/api.v1.ClusterService/Delete', grpcWeb.MethodType.UNARY, api_v1_cluster_pb.ClusterServiceDeleteRequest, api_v1_cluster_pb.ClusterServiceDeleteResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_cluster_pb.ClusterServiceDeleteResponse.deserializeBinary);
        this.methodDescriptorUpdate = new grpcWeb.MethodDescriptor('/api.v1.ClusterService/Update', grpcWeb.MethodType.UNARY, api_v1_cluster_pb.ClusterServiceUpdateRequest, api_v1_cluster_pb.ClusterServiceUpdateResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_cluster_pb.ClusterServiceUpdateResponse.deserializeBinary);
        this.methodDescriptorGetCredentials = new grpcWeb.MethodDescriptor('/api.v1.ClusterService/GetCredentials', grpcWeb.MethodType.UNARY, api_v1_cluster_pb.ClusterServiceGetCredentialsRequest, api_v1_cluster_pb.ClusterServiceGetCredentialsResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_cluster_pb.ClusterServiceGetCredentialsResponse.deserializeBinary);
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
    ClusterServiceClient.prototype.create = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.ClusterService/Create', request, metadata || {}, this.methodDescriptorCreate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.ClusterService/Create', request, metadata || {}, this.methodDescriptorCreate);
    };
    ClusterServiceClient.prototype.get = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.ClusterService/Get', request, metadata || {}, this.methodDescriptorGet, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.ClusterService/Get', request, metadata || {}, this.methodDescriptorGet);
    };
    ClusterServiceClient.prototype.list = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.ClusterService/List', request, metadata || {}, this.methodDescriptorList, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.ClusterService/List', request, metadata || {}, this.methodDescriptorList);
    };
    ClusterServiceClient.prototype.watchStatus = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/api.v1.ClusterService/WatchStatus', request, metadata || {}, this.methodDescriptorWatchStatus);
    };
    ClusterServiceClient.prototype.delete = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.ClusterService/Delete', request, metadata || {}, this.methodDescriptorDelete, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.ClusterService/Delete', request, metadata || {}, this.methodDescriptorDelete);
    };
    ClusterServiceClient.prototype.update = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.ClusterService/Update', request, metadata || {}, this.methodDescriptorUpdate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.ClusterService/Update', request, metadata || {}, this.methodDescriptorUpdate);
    };
    ClusterServiceClient.prototype.getCredentials = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.ClusterService/GetCredentials', request, metadata || {}, this.methodDescriptorGetCredentials, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.ClusterService/GetCredentials', request, metadata || {}, this.methodDescriptorGetCredentials);
    };
    return ClusterServiceClient;
}());
exports.ClusterServiceClient = ClusterServiceClient;
