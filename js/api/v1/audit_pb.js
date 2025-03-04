// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/v1/audit.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * AuditTrace is an audit trace
 *
 * @generated from message api.v1.AuditTrace
 */
export class AuditTrace extends Message {
    constructor(data) {
        super();
        /**
         * Uuid of the audit trace
         *
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * User is the user who called the api method
         *
         * @generated from field: string user = 3;
         */
        this.user = "";
        /**
         * Tenant is the tenant targeted by the api call
         *
         * @generated from field: string tenant = 4;
         */
        this.tenant = "";
        /**
         * Project is the project targeted by the api call
         *
         * @generated from field: string project = 5;
         */
        this.project = "";
        /**
         * Method is the api method that was called
         *
         * @generated from field: string method = 6;
         */
        this.method = "";
        /**
         * Request is the payload of the request
         *
         * @generated from field: string body = 7;
         */
        this.body = "";
        /**
         * Response is the payload of the response
         *
         * @generated from field: string source_ip = 8;
         */
        this.sourceIp = "";
        /**
         * ResultCode is a string describing the result of the api call
         *
         * @generated from field: int32 result_code = 9;
         */
        this.resultCode = 0;
        /**
         * Phase is a string representing the request phase
         *
         * @generated from field: string phase = 10;
         */
        this.phase = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AuditTrace().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AuditTrace().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AuditTrace().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AuditTrace, a, b);
    }
}
AuditTrace.runtime = proto3;
AuditTrace.typeName = "api.v1.AuditTrace";
AuditTrace.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timestamp", kind: "message", T: Timestamp },
    { no: 3, name: "user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "body", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "source_ip", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "result_code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 10, name: "phase", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * AuditServiceListRequest is the request payload to list audits
 *
 * @generated from message api.v1.AuditServiceListRequest
 */
export class AuditServiceListRequest extends Message {
    constructor(data) {
        super();
        /**
         * Login of the tenant
         *
         * @generated from field: string login = 1;
         */
        this.login = "";
        /**
         * Tenant is the tenant targeted by the api call
         *
         * @generated from field: string tenant = 6;
         */
        this.tenant = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AuditServiceListRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AuditServiceListRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AuditServiceListRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AuditServiceListRequest, a, b);
    }
}
AuditServiceListRequest.runtime = proto3;
AuditServiceListRequest.typeName = "api.v1.AuditServiceListRequest";
AuditServiceListRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "from", kind: "message", T: Timestamp },
    { no: 4, name: "to", kind: "message", T: Timestamp },
    { no: 5, name: "user", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "method", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 9, name: "source_ip", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 10, name: "result_code", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 11, name: "body", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * AuditServiceListResponse is the response payload of a audit list request
 *
 * @generated from message api.v1.AuditServiceListResponse
 */
export class AuditServiceListResponse extends Message {
    constructor(data) {
        super();
        /**
         * Audits is a list of audits without the secrets
         *
         * @generated from field: repeated api.v1.AuditTrace audits = 1;
         */
        this.audits = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AuditServiceListResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AuditServiceListResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AuditServiceListResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AuditServiceListResponse, a, b);
    }
}
AuditServiceListResponse.runtime = proto3;
AuditServiceListResponse.typeName = "api.v1.AuditServiceListResponse";
AuditServiceListResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "audits", kind: "message", T: AuditTrace, repeated: true },
]);
/**
 * AuditServiceGetRequest is the request payload of a audit get request
 *
 * @generated from message api.v1.AuditServiceGetRequest
 */
export class AuditServiceGetRequest extends Message {
    constructor(data) {
        super();
        /**
         * Login of the tenant
         *
         * @generated from field: string login = 1;
         */
        this.login = "";
        /**
         * Uuid of the audit trace
         *
         * @generated from field: string uuid = 2;
         */
        this.uuid = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AuditServiceGetRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AuditServiceGetRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AuditServiceGetRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AuditServiceGetRequest, a, b);
    }
}
AuditServiceGetRequest.runtime = proto3;
AuditServiceGetRequest.typeName = "api.v1.AuditServiceGetRequest";
AuditServiceGetRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * AuditServiceGetResponse is the response payload of a audit get request
 *
 * @generated from message api.v1.AuditServiceGetResponse
 */
export class AuditServiceGetResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AuditServiceGetResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AuditServiceGetResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AuditServiceGetResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AuditServiceGetResponse, a, b);
    }
}
AuditServiceGetResponse.runtime = proto3;
AuditServiceGetResponse.typeName = "api.v1.AuditServiceGetResponse";
AuditServiceGetResponse.fields = proto3.util.newFieldList(() => [
    { no: 2, name: "audit", kind: "message", T: AuditTrace },
]);
