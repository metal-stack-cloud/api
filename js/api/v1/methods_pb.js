"use strict";
// @generated by protoc-gen-es v1.3.3 with parameter "target=ts"
// @generated from file api/v1/methods.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodServiceListResponse = exports.MethodServiceListRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from message api.v1.MethodServiceListRequest
 */
class MethodServiceListRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MethodServiceListRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MethodServiceListRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MethodServiceListRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MethodServiceListRequest, a, b);
    }
}
exports.MethodServiceListRequest = MethodServiceListRequest;
MethodServiceListRequest.runtime = protobuf_1.proto3;
MethodServiceListRequest.typeName = "api.v1.MethodServiceListRequest";
MethodServiceListRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * @generated from message api.v1.MethodServiceListResponse
 */
class MethodServiceListResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string methods = 1;
         */
        this.methods = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MethodServiceListResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MethodServiceListResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MethodServiceListResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MethodServiceListResponse, a, b);
    }
}
exports.MethodServiceListResponse = MethodServiceListResponse;
MethodServiceListResponse.runtime = protobuf_1.proto3;
MethodServiceListResponse.typeName = "api.v1.MethodServiceListResponse";
MethodServiceListResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "methods", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
