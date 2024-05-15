// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file admin/v1/token.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Token } from "../../api/v1/token_pb.js";
/**
 * TokenServiceListRequest is the request payload for the token list request
 *
 * @generated from message admin.v1.TokenServiceListRequest
 */
export class TokenServiceListRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(TokenServiceListRequest, a, b);
    }
}
TokenServiceListRequest.runtime = proto3;
TokenServiceListRequest.typeName = "admin.v1.TokenServiceListRequest";
TokenServiceListRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * TokenServiceListResponse is the response payload for the token list request
 *
 * @generated from message admin.v1.TokenServiceListResponse
 */
export class TokenServiceListResponse extends Message {
    constructor(data) {
        super();
        /**
         * Tokens is the list of tokens
         *
         * @generated from field: repeated api.v1.Token tokens = 1;
         */
        this.tokens = [];
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(TokenServiceListResponse, a, b);
    }
}
TokenServiceListResponse.runtime = proto3;
TokenServiceListResponse.typeName = "admin.v1.TokenServiceListResponse";
TokenServiceListResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tokens", kind: "message", T: Token, repeated: true },
]);
/**
 * TokenServiceRevokeRequest is the request payload for the token revoke request
 *
 * @generated from message admin.v1.TokenServiceRevokeRequest
 */
export class TokenServiceRevokeRequest extends Message {
    constructor(data) {
        super();
        /**
         * Uuid is the uuid of the token which should be revoked
         *
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * UserId is the id of the user for which the token should be revoked
         *
         * @generated from field: string user_id = 2;
         */
        this.userId = "";
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(TokenServiceRevokeRequest, a, b);
    }
}
TokenServiceRevokeRequest.runtime = proto3;
TokenServiceRevokeRequest.typeName = "admin.v1.TokenServiceRevokeRequest";
TokenServiceRevokeRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * TokenServiceRevokeResponse is the response payload for the token revoke request
 *
 * @generated from message admin.v1.TokenServiceRevokeResponse
 */
export class TokenServiceRevokeResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(TokenServiceRevokeResponse, a, b);
    }
}
TokenServiceRevokeResponse.runtime = proto3;
TokenServiceRevokeResponse.typeName = "admin.v1.TokenServiceRevokeResponse";
TokenServiceRevokeResponse.fields = proto3.util.newFieldList(() => []);
