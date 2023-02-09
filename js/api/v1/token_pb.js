"use strict";
// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file api/v1/token.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenServiceCreateResponse = exports.TokenRole = exports.ProjectPermission = exports.TokenServiceCreateRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * Tokens
 *
 * @generated from message api.v1.TokenServiceCreateRequest
 */
class TokenServiceCreateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subject = 1;
         */
        this.subject = "";
        /**
         * @generated from field: repeated api.v1.ProjectPermission permissions = 2;
         */
        this.permissions = [];
        /**
         * @generated from field: repeated api.v1.TokenRole roles = 3;
         */
        this.roles = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TokenServiceCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TokenServiceCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TokenServiceCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TokenServiceCreateRequest, a, b);
    }
}
exports.TokenServiceCreateRequest = TokenServiceCreateRequest;
TokenServiceCreateRequest.runtime = protobuf_1.proto3;
TokenServiceCreateRequest.typeName = "api.v1.TokenServiceCreateRequest";
TokenServiceCreateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "subject", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "permissions", kind: "message", T: ProjectPermission, repeated: true },
    { no: 3, name: "roles", kind: "message", T: TokenRole, repeated: true },
    { no: 4, name: "expires", kind: "message", T: protobuf_1.Duration },
]);
/**
 * @generated from message api.v1.ProjectPermission
 */
class ProjectPermission extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string project = 1;
         */
        this.project = "";
        /**
         * @generated from field: repeated string permissions = 2;
         */
        this.permissions = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectPermission().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectPermission().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectPermission().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ProjectPermission, a, b);
    }
}
exports.ProjectPermission = ProjectPermission;
ProjectPermission.runtime = protobuf_1.proto3;
ProjectPermission.typeName = "api.v1.ProjectPermission";
ProjectPermission.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "permissions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message api.v1.TokenRole
 */
class TokenRole extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subject = 1;
         */
        this.subject = "";
        /**
         * @generated from field: string role = 2;
         */
        this.role = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TokenRole().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TokenRole().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TokenRole().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TokenRole, a, b);
    }
}
exports.TokenRole = TokenRole;
TokenRole.runtime = protobuf_1.proto3;
TokenRole.typeName = "api.v1.TokenRole";
TokenRole.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "subject", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.TokenServiceCreateResponse
 */
class TokenServiceCreateResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string token = 1;
         */
        this.token = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TokenServiceCreateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TokenServiceCreateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TokenServiceCreateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TokenServiceCreateResponse, a, b);
    }
}
exports.TokenServiceCreateResponse = TokenServiceCreateResponse;
TokenServiceCreateResponse.runtime = protobuf_1.proto3;
TokenServiceCreateResponse.typeName = "api.v1.TokenServiceCreateResponse";
TokenServiceCreateResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
