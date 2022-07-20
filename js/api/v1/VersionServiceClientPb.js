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
exports.VersionServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var api_v1_version_pb = __importStar(require("../../api/v1/version_pb"));
var VersionServiceClient = /** @class */ (function () {
    function VersionServiceClient(hostname, credentials, options) {
        this.methodDescriptorGet = new grpcWeb.MethodDescriptor('/api.v1.VersionService/Get', grpcWeb.MethodType.UNARY, api_v1_version_pb.VersionServiceGetRequest, api_v1_version_pb.VersionServiceGetResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_version_pb.VersionServiceGetResponse.deserializeBinary);
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
    VersionServiceClient.prototype.get = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.VersionService/Get', request, metadata || {}, this.methodDescriptorGet, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.VersionService/Get', request, metadata || {}, this.methodDescriptorGet);
    };
    return VersionServiceClient;
}());
exports.VersionServiceClient = VersionServiceClient;
