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
exports.PaymentServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var api_v1_payment_pb = __importStar(require("../../api/v1/payment_pb"));
var PaymentServiceClient = /** @class */ (function () {
    function PaymentServiceClient(hostname, credentials, options) {
        this.methodDescriptorCreateOrUpdateCustomer = new grpcWeb.MethodDescriptor('/api.v1.PaymentService/CreateOrUpdateCustomer', grpcWeb.MethodType.UNARY, api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerRequest, api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_payment_pb.PaymentServiceCreateOrUpdateCustomerResponse.deserializeBinary);
        this.methodDescriptorGetCustomer = new grpcWeb.MethodDescriptor('/api.v1.PaymentService/GetCustomer', grpcWeb.MethodType.UNARY, api_v1_payment_pb.PaymentServiceGetCustomerRequest, api_v1_payment_pb.PaymentServiceGetCustomerResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_payment_pb.PaymentServiceGetCustomerResponse.deserializeBinary);
        this.methodDescriptorGetCustomerWithLogin = new grpcWeb.MethodDescriptor('/api.v1.PaymentService/GetCustomerWithLogin', grpcWeb.MethodType.UNARY, api_v1_payment_pb.PaymentServiceGetCustomerWithLoginRequest, api_v1_payment_pb.PaymentServiceGetCustomerWithLoginResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_payment_pb.PaymentServiceGetCustomerWithLoginResponse.deserializeBinary);
        this.methodDescriptorCheckIfCustomerExists = new grpcWeb.MethodDescriptor('/api.v1.PaymentService/CheckIfCustomerExists', grpcWeb.MethodType.UNARY, api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsRequest, api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_payment_pb.PaymentServiceCheckIfCustomerExistsResponse.deserializeBinary);
        this.methodDescriptorHasPaymentMethod = new grpcWeb.MethodDescriptor('/api.v1.PaymentService/HasPaymentMethod', grpcWeb.MethodType.UNARY, api_v1_payment_pb.PaymentServiceHasPaymentMethodRequest, api_v1_payment_pb.PaymentServiceHasPaymentMethodResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_payment_pb.PaymentServiceHasPaymentMethodResponse.deserializeBinary);
        this.methodDescriptorDeletePaymentMethod = new grpcWeb.MethodDescriptor('/api.v1.PaymentService/DeletePaymentMethod', grpcWeb.MethodType.UNARY, api_v1_payment_pb.PaymentServiceDeletePaymentMethodRequest, api_v1_payment_pb.PaymentServiceDeletePaymentMethodResponse, function (request) {
            return request.serializeBinary();
        }, api_v1_payment_pb.PaymentServiceDeletePaymentMethodResponse.deserializeBinary);
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
    PaymentServiceClient.prototype.createOrUpdateCustomer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.PaymentService/CreateOrUpdateCustomer', request, metadata || {}, this.methodDescriptorCreateOrUpdateCustomer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.PaymentService/CreateOrUpdateCustomer', request, metadata || {}, this.methodDescriptorCreateOrUpdateCustomer);
    };
    PaymentServiceClient.prototype.getCustomer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.PaymentService/GetCustomer', request, metadata || {}, this.methodDescriptorGetCustomer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.PaymentService/GetCustomer', request, metadata || {}, this.methodDescriptorGetCustomer);
    };
    PaymentServiceClient.prototype.getCustomerWithLogin = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.PaymentService/GetCustomerWithLogin', request, metadata || {}, this.methodDescriptorGetCustomerWithLogin, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.PaymentService/GetCustomerWithLogin', request, metadata || {}, this.methodDescriptorGetCustomerWithLogin);
    };
    PaymentServiceClient.prototype.checkIfCustomerExists = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.PaymentService/CheckIfCustomerExists', request, metadata || {}, this.methodDescriptorCheckIfCustomerExists, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.PaymentService/CheckIfCustomerExists', request, metadata || {}, this.methodDescriptorCheckIfCustomerExists);
    };
    PaymentServiceClient.prototype.hasPaymentMethod = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.PaymentService/HasPaymentMethod', request, metadata || {}, this.methodDescriptorHasPaymentMethod, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.PaymentService/HasPaymentMethod', request, metadata || {}, this.methodDescriptorHasPaymentMethod);
    };
    PaymentServiceClient.prototype.deletePaymentMethod = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/api.v1.PaymentService/DeletePaymentMethod', request, metadata || {}, this.methodDescriptorDeletePaymentMethod, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/api.v1.PaymentService/DeletePaymentMethod', request, metadata || {}, this.methodDescriptorDeletePaymentMethod);
    };
    return PaymentServiceClient;
}());
exports.PaymentServiceClient = PaymentServiceClient;
