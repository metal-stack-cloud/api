"use strict";
// @generated by protoc-gen-es v1.1.1 with parameter "target=ts"
// @generated from file admin/v1/tenant.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantServiceRevokeResponse = exports.TenantServiceRevokeRequest = exports.TenantServiceAdmitResponse = exports.TenantServiceAdmitRequest = exports.TenantServiceListResponse = exports.TenantServiceListRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const common_pb_js_1 = require("../../api/v1/common_pb.js");
const tenant_pb_js_1 = require("../../api/v1/tenant_pb.js");
/**
 * @generated from message admin.v1.TenantServiceListRequest
 */
class TenantServiceListRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceListRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceListRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceListRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceListRequest, a, b);
    }
}
exports.TenantServiceListRequest = TenantServiceListRequest;
TenantServiceListRequest.runtime = protobuf_1.proto3;
TenantServiceListRequest.typeName = "admin.v1.TenantServiceListRequest";
TenantServiceListRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "organisation_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "oauth_provider", kind: "enum", T: protobuf_1.proto3.getEnumType(common_pb_js_1.OAuthProvider), opt: true },
    { no: 6, name: "admitted", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 7, name: "paging", kind: "message", T: common_pb_js_1.Paging },
]);
/**
 * @generated from message admin.v1.TenantServiceListResponse
 */
class TenantServiceListResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated api.v1.Tenant tenants = 1;
         */
        this.tenants = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceListResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceListResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceListResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceListResponse, a, b);
    }
}
exports.TenantServiceListResponse = TenantServiceListResponse;
TenantServiceListResponse.runtime = protobuf_1.proto3;
TenantServiceListResponse.typeName = "admin.v1.TenantServiceListResponse";
TenantServiceListResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenants", kind: "message", T: tenant_pb_js_1.Tenant, repeated: true },
    { no: 2, name: "next_page", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
]);
/**
 * @generated from message admin.v1.TenantServiceAdmitRequest
 */
class TenantServiceAdmitRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string tenant_id = 1;
         */
        this.tenantId = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceAdmitRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceAdmitRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceAdmitRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceAdmitRequest, a, b);
    }
}
exports.TenantServiceAdmitRequest = TenantServiceAdmitRequest;
TenantServiceAdmitRequest.runtime = protobuf_1.proto3;
TenantServiceAdmitRequest.typeName = "admin.v1.TenantServiceAdmitRequest";
TenantServiceAdmitRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "coupon_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * @generated from message admin.v1.TenantServiceAdmitResponse
 */
class TenantServiceAdmitResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceAdmitResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceAdmitResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceAdmitResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceAdmitResponse, a, b);
    }
}
exports.TenantServiceAdmitResponse = TenantServiceAdmitResponse;
TenantServiceAdmitResponse.runtime = protobuf_1.proto3;
TenantServiceAdmitResponse.typeName = "admin.v1.TenantServiceAdmitResponse";
TenantServiceAdmitResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: tenant_pb_js_1.Tenant },
]);
/**
 * @generated from message admin.v1.TenantServiceRevokeRequest
 */
class TenantServiceRevokeRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string tenant_id = 1;
         */
        this.tenantId = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceRevokeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceRevokeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceRevokeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceRevokeRequest, a, b);
    }
}
exports.TenantServiceRevokeRequest = TenantServiceRevokeRequest;
TenantServiceRevokeRequest.runtime = protobuf_1.proto3;
TenantServiceRevokeRequest.typeName = "admin.v1.TenantServiceRevokeRequest";
TenantServiceRevokeRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message admin.v1.TenantServiceRevokeResponse
 */
class TenantServiceRevokeResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceRevokeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceRevokeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceRevokeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceRevokeResponse, a, b);
    }
}
exports.TenantServiceRevokeResponse = TenantServiceRevokeResponse;
TenantServiceRevokeResponse.runtime = protobuf_1.proto3;
TenantServiceRevokeResponse.typeName = "admin.v1.TenantServiceRevokeResponse";
TenantServiceRevokeResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: tenant_pb_js_1.Tenant },
]);
