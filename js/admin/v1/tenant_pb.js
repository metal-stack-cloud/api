// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file admin/v1/tenant.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { OAuthProvider, Paging, TenantRole } from "../../api/v1/common_pb.js";
import { Tenant } from "../../api/v1/tenant_pb.js";
/**
 * TenantServiceListRequest is the request payload for a tenant list request
 *
 * @generated from message admin.v1.TenantServiceListRequest
 */
export class TenantServiceListRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(TenantServiceListRequest, a, b);
    }
}
TenantServiceListRequest.runtime = proto3;
TenantServiceListRequest.typeName = "admin.v1.TenantServiceListRequest";
TenantServiceListRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "oauth_provider", kind: "enum", T: proto3.getEnumType(OAuthProvider), opt: true },
    { no: 6, name: "admitted", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 7, name: "paging", kind: "message", T: Paging },
    { no: 8, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * TenantServiceListResponse is the response payload for a tenant list request
 *
 * @generated from message admin.v1.TenantServiceListResponse
 */
export class TenantServiceListResponse extends Message {
    constructor(data) {
        super();
        /**
         * Tenants are the list of tenants
         *
         * @generated from field: repeated api.v1.Tenant tenants = 1;
         */
        this.tenants = [];
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(TenantServiceListResponse, a, b);
    }
}
TenantServiceListResponse.runtime = proto3;
TenantServiceListResponse.typeName = "admin.v1.TenantServiceListResponse";
TenantServiceListResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tenants", kind: "message", T: Tenant, repeated: true },
    { no: 2, name: "next_page", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
]);
/**
 * TenantServiceAdmitRequest is the request payload for a tenant admit request
 *
 * @generated from message admin.v1.TenantServiceAdmitRequest
 */
export class TenantServiceAdmitRequest extends Message {
    constructor(data) {
        super();
        /**
         * TenantId is the id of the tenant to admit
         *
         * @generated from field: string tenant_id = 1;
         */
        this.tenantId = "";
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(TenantServiceAdmitRequest, a, b);
    }
}
TenantServiceAdmitRequest.runtime = proto3;
TenantServiceAdmitRequest.typeName = "admin.v1.TenantServiceAdmitRequest";
TenantServiceAdmitRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * TenantServiceAdmitResponse is the response payload for a tenant admit request
 *
 * @generated from message admin.v1.TenantServiceAdmitResponse
 */
export class TenantServiceAdmitResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(TenantServiceAdmitResponse, a, b);
    }
}
TenantServiceAdmitResponse.runtime = proto3;
TenantServiceAdmitResponse.typeName = "admin.v1.TenantServiceAdmitResponse";
TenantServiceAdmitResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
]);
/**
 * TenantServiceAddBalanceRequest is the request payload for a tenant add balance request
 *
 * @generated from message admin.v1.TenantServiceAddBalanceRequest
 */
export class TenantServiceAddBalanceRequest extends Message {
    constructor(data) {
        super();
        /**
         * TenantId is the id of the tenant to admit
         *
         * @generated from field: string tenant_id = 1;
         */
        this.tenantId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceAddBalanceRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceAddBalanceRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceAddBalanceRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TenantServiceAddBalanceRequest, a, b);
    }
}
TenantServiceAddBalanceRequest.runtime = proto3;
TenantServiceAddBalanceRequest.typeName = "admin.v1.TenantServiceAddBalanceRequest";
TenantServiceAddBalanceRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "balance_to_add", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
]);
/**
 * TenantServiceAdmitResponse is the response payload for a tenant admit request
 *
 * @generated from message admin.v1.TenantServiceAddBalanceResponse
 */
export class TenantServiceAddBalanceResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceAddBalanceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceAddBalanceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceAddBalanceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TenantServiceAddBalanceResponse, a, b);
    }
}
TenantServiceAddBalanceResponse.runtime = proto3;
TenantServiceAddBalanceResponse.typeName = "admin.v1.TenantServiceAddBalanceResponse";
TenantServiceAddBalanceResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
]);
/**
 * TenantServiceRevokeRequest is the request payload for a tenant revoke request
 *
 * @generated from message admin.v1.TenantServiceRevokeRequest
 */
export class TenantServiceRevokeRequest extends Message {
    constructor(data) {
        super();
        /**
         * TenantId is the id of the tenant to revoke
         *
         * @generated from field: string tenant_id = 1;
         */
        this.tenantId = "";
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(TenantServiceRevokeRequest, a, b);
    }
}
TenantServiceRevokeRequest.runtime = proto3;
TenantServiceRevokeRequest.typeName = "admin.v1.TenantServiceRevokeRequest";
TenantServiceRevokeRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * TenantServiceRevokeResponse is the response payload for a tenant revoke request
 *
 * @generated from message admin.v1.TenantServiceRevokeResponse
 */
export class TenantServiceRevokeResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(TenantServiceRevokeResponse, a, b);
    }
}
TenantServiceRevokeResponse.runtime = proto3;
TenantServiceRevokeResponse.typeName = "admin.v1.TenantServiceRevokeResponse";
TenantServiceRevokeResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
]);
/**
 * TenantServiceAddMemberRequest is the request payload for adding a member to a tenant
 *
 * @generated from message admin.v1.TenantServiceAddMemberRequest
 */
export class TenantServiceAddMemberRequest extends Message {
    constructor(data) {
        super();
        /**
         * Tenant ID to which the member will be added
         *
         * @generated from field: string tenant_id = 1;
         */
        this.tenantId = "";
        /**
         * Email of the member to add
         *
         * @generated from field: string member_id = 2;
         */
        this.memberId = "";
        /**
         * Role to assign to the new member
         *
         * @generated from field: api.v1.TenantRole role = 3;
         */
        this.role = TenantRole.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceAddMemberRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceAddMemberRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceAddMemberRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TenantServiceAddMemberRequest, a, b);
    }
}
TenantServiceAddMemberRequest.runtime = proto3;
TenantServiceAddMemberRequest.typeName = "admin.v1.TenantServiceAddMemberRequest";
TenantServiceAddMemberRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "member_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "role", kind: "enum", T: proto3.getEnumType(TenantRole) },
]);
/**
 * TenantServiceAddMemberResponse is the response payload for the add member request
 *
 * @generated from message admin.v1.TenantServiceAddMemberResponse
 */
export class TenantServiceAddMemberResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceAddMemberResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceAddMemberResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceAddMemberResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TenantServiceAddMemberResponse, a, b);
    }
}
TenantServiceAddMemberResponse.runtime = proto3;
TenantServiceAddMemberResponse.typeName = "admin.v1.TenantServiceAddMemberResponse";
TenantServiceAddMemberResponse.fields = proto3.util.newFieldList(() => []);
