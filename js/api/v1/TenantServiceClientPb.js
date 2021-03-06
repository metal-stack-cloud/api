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
exports.TenantServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var api_v1_tenant_pb = __importStar(require("../../api/v1/tenant_pb"));
var TenantServiceClient = /** @class */ (function () {
    function TenantServiceClient(hostname, credentials, options) {
        this.methodDescriptorCreate = new grpcWeb.MethodDescriptor('/api.v1.TenantService/Create', grpcWeb.MethodType.UNARY, api_v1_tenant_pb.TenantServiceCreateRequest, api_v1_tenant_pb.TenantServiceCreateResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_tenant_pb.TenantServiceCreateResponse.deserializeBinary);
        this.methodDescriptorCreateOrUpdate = new grpcWeb.MethodDescriptor('/api.v1.TenantService/CreateOrUpdate', grpcWeb.MethodType.UNARY, api_v1_tenant_pb.TenantServiceCreateOrUpdateRequest, api_v1_tenant_pb.TenantServiceCreateOrUpdateResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_tenant_pb.TenantServiceCreateOrUpdateResponse.deserializeBinary);
        this.methodDescriptorGet = new grpcWeb.MethodDescriptor('/api.v1.TenantService/Get', grpcWeb.MethodType.UNARY, api_v1_tenant_pb.TenantServiceGetRequest, api_v1_tenant_pb.TenantServiceGetResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_tenant_pb.TenantServiceGetResponse.deserializeBinary);
        this.methodDescriptorUpdate = new grpcWeb.MethodDescriptor('/api.v1.TenantService/Update', grpcWeb.MethodType.UNARY, api_v1_tenant_pb.TenantServiceUpdateRequest, api_v1_tenant_pb.TenantServiceUpdateResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_tenant_pb.TenantServiceUpdateResponse.deserializeBinary);
        this.methodDescriptorDelete = new grpcWeb.MethodDescriptor('/api.v1.TenantService/Delete', grpcWeb.MethodType.UNARY, api_v1_tenant_pb.TenantServiceDeleteRequest, api_v1_tenant_pb.TenantServiceDeleteResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_tenant_pb.TenantServiceDeleteResponse.deserializeBinary);
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
    TenantServiceClient.prototype.create = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.TenantService/Create', request, metadata || {}, this.methodDescriptorCreate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.TenantService/Create', request, metadata || {}, this.methodDescriptorCreate);
    };
    TenantServiceClient.prototype.createOrUpdate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.TenantService/CreateOrUpdate', request, metadata || {}, this.methodDescriptorCreateOrUpdate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.TenantService/CreateOrUpdate', request, metadata || {}, this.methodDescriptorCreateOrUpdate);
    };
    TenantServiceClient.prototype.get = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.TenantService/Get', request, metadata || {}, this.methodDescriptorGet, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.TenantService/Get', request, metadata || {}, this.methodDescriptorGet);
    };
    TenantServiceClient.prototype.update = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.TenantService/Update', request, metadata || {}, this.methodDescriptorUpdate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.TenantService/Update', request, metadata || {}, this.methodDescriptorUpdate);
    };
    TenantServiceClient.prototype.delete = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.TenantService/Delete', request, metadata || {}, this.methodDescriptorDelete, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.TenantService/Delete', request, metadata || {}, this.methodDescriptorDelete);
    };
    return TenantServiceClient;
}());
exports.TenantServiceClient = TenantServiceClient;
