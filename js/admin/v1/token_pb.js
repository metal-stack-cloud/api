"use strict";
// @generated by protoc-gen-es v1.4.1 with parameter "target=ts"
// @generated from file admin/v1/token.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenServiceRevokeResponse = exports.TokenServiceRevokeRequest = exports.TokenServiceListResponse = exports.TokenServiceListRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const token_pb_js_1 = require("../../api/v1/token_pb.js");
/**
 * @generated from message admin.v1.TokenServiceListRequest
 */
class TokenServiceListRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TokenServiceListRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TokenServiceListRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TokenServiceListRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TokenServiceListRequest, a, b);
    }
}
exports.TokenServiceListRequest = TokenServiceListRequest;
TokenServiceListRequest.runtime = protobuf_1.proto3;
TokenServiceListRequest.typeName = "admin.v1.TokenServiceListRequest";
TokenServiceListRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * @generated from message admin.v1.TokenServiceListResponse
 */
class TokenServiceListResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated api.v1.Token tokens = 1;
         */
        this.tokens = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TokenServiceListResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TokenServiceListResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TokenServiceListResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TokenServiceListResponse, a, b);
    }
}
exports.TokenServiceListResponse = TokenServiceListResponse;
TokenServiceListResponse.runtime = protobuf_1.proto3;
TokenServiceListResponse.typeName = "admin.v1.TokenServiceListResponse";
TokenServiceListResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tokens", kind: "message", T: token_pb_js_1.Token, repeated: true },
]);
/**
 * @generated from message admin.v1.TokenServiceRevokeRequest
 */
class TokenServiceRevokeRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * @generated from field: string user_id = 2;
         */
        this.userId = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TokenServiceRevokeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TokenServiceRevokeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TokenServiceRevokeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TokenServiceRevokeRequest, a, b);
    }
}
exports.TokenServiceRevokeRequest = TokenServiceRevokeRequest;
TokenServiceRevokeRequest.runtime = protobuf_1.proto3;
TokenServiceRevokeRequest.typeName = "admin.v1.TokenServiceRevokeRequest";
TokenServiceRevokeRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message admin.v1.TokenServiceRevokeResponse
 */
class TokenServiceRevokeResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TokenServiceRevokeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TokenServiceRevokeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TokenServiceRevokeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TokenServiceRevokeResponse, a, b);
    }
}
exports.TokenServiceRevokeResponse = TokenServiceRevokeResponse;
TokenServiceRevokeResponse.runtime = protobuf_1.proto3;
TokenServiceRevokeResponse.typeName = "admin.v1.TokenServiceRevokeResponse";
TokenServiceRevokeResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
