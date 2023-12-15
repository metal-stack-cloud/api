"use strict";
// @generated by protoc-gen-es v1.5.1 with parameter "target=ts"
// @generated from file api/v1/ip.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPServiceDeleteResponse = exports.IPServiceListResponse = exports.IPServiceStaticResponse = exports.IPServiceAllocateResponse = exports.IPServiceUpdateResponse = exports.IPServiceGetResponse = exports.IPServiceDeleteRequest = exports.IPServiceListRequest = exports.IPServiceUpdateRequest = exports.IPServiceAllocateRequest = exports.IPServiceGetRequest = exports.IP = exports.IPType = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from enum api.v1.IPType
 */
var IPType;
(function (IPType) {
    /**
     * @generated from enum value: IP_TYPE_UNSPECIFIED = 0;
     */
    IPType[IPType["IP_TYPE_UNSPECIFIED"] = 0] = "IP_TYPE_UNSPECIFIED";
    /**
     * @generated from enum value: IP_TYPE_EPHEMERAL = 1;
     */
    IPType[IPType["IP_TYPE_EPHEMERAL"] = 1] = "IP_TYPE_EPHEMERAL";
    /**
     * @generated from enum value: IP_TYPE_STATIC = 2;
     */
    IPType[IPType["IP_TYPE_STATIC"] = 2] = "IP_TYPE_STATIC";
})(IPType || (exports.IPType = IPType = {}));
// Retrieve enum metadata with: proto3.getEnumType(IPType)
protobuf_1.proto3.util.setEnumType(IPType, "api.v1.IPType", [
    { no: 0, name: "IP_TYPE_UNSPECIFIED" },
    { no: 1, name: "IP_TYPE_EPHEMERAL" },
    { no: 2, name: "IP_TYPE_STATIC" },
]);
/**
 * Types
 *
 * @generated from message api.v1.IP
 */
class IP extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * @generated from field: string ip = 2;
         */
        this.ip = "";
        /**
         * @generated from field: string name = 3;
         */
        this.name = "";
        /**
         * @generated from field: string description = 4;
         */
        this.description = "";
        /**
         * @generated from field: string network = 5;
         */
        this.network = "";
        /**
         * @generated from field: string project = 6;
         */
        this.project = "";
        /**
         * @generated from field: api.v1.IPType type = 7;
         */
        this.type = IPType.IP_TYPE_UNSPECIFIED;
        /**
         * @generated from field: repeated string tags = 8;
         */
        this.tags = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IP().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IP().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IP().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IP, a, b);
    }
}
exports.IP = IP;
IP.runtime = protobuf_1.proto3;
IP.typeName = "api.v1.IP";
IP.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ip", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "network", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "type", kind: "enum", T: protobuf_1.proto3.getEnumType(IPType) },
    { no: 8, name: "tags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 10, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 11, name: "updated_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 12, name: "deleted_at", kind: "message", T: protobuf_1.Timestamp },
]);
/**
 * Requests
 *
 * @generated from message api.v1.IPServiceGetRequest
 */
class IPServiceGetRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IPServiceGetRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IPServiceGetRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IPServiceGetRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IPServiceGetRequest, a, b);
    }
}
exports.IPServiceGetRequest = IPServiceGetRequest;
IPServiceGetRequest.runtime = protobuf_1.proto3;
IPServiceGetRequest.typeName = "api.v1.IPServiceGetRequest";
IPServiceGetRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.IPServiceAllocateRequest
 */
class IPServiceAllocateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string project = 2;
         */
        this.project = "";
        /**
         * @generated from field: string name = 3;
         */
        this.name = "";
        /**
         * @generated from field: string description = 4;
         */
        this.description = "";
        /**
         * @generated from field: repeated string tags = 8;
         */
        this.tags = [];
        /**
         * @generated from field: bool static = 9;
         */
        this.static = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IPServiceAllocateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IPServiceAllocateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IPServiceAllocateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IPServiceAllocateRequest, a, b);
    }
}
exports.IPServiceAllocateRequest = IPServiceAllocateRequest;
IPServiceAllocateRequest.runtime = protobuf_1.proto3;
IPServiceAllocateRequest.typeName = "api.v1.IPServiceAllocateRequest";
IPServiceAllocateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "tags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "static", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message api.v1.IPServiceUpdateRequest
 */
class IPServiceUpdateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string project = 1;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IPServiceUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IPServiceUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IPServiceUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IPServiceUpdateRequest, a, b);
    }
}
exports.IPServiceUpdateRequest = IPServiceUpdateRequest;
IPServiceUpdateRequest.runtime = protobuf_1.proto3;
IPServiceUpdateRequest.typeName = "api.v1.IPServiceUpdateRequest";
IPServiceUpdateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ip", kind: "message", T: IP },
]);
/**
 * @generated from message api.v1.IPServiceListRequest
 */
class IPServiceListRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IPServiceListRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IPServiceListRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IPServiceListRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IPServiceListRequest, a, b);
    }
}
exports.IPServiceListRequest = IPServiceListRequest;
IPServiceListRequest.runtime = protobuf_1.proto3;
IPServiceListRequest.typeName = "api.v1.IPServiceListRequest";
IPServiceListRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.IPServiceDeleteRequest
 */
class IPServiceDeleteRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IPServiceDeleteRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IPServiceDeleteRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IPServiceDeleteRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IPServiceDeleteRequest, a, b);
    }
}
exports.IPServiceDeleteRequest = IPServiceDeleteRequest;
IPServiceDeleteRequest.runtime = protobuf_1.proto3;
IPServiceDeleteRequest.typeName = "api.v1.IPServiceDeleteRequest";
IPServiceDeleteRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Responses
 *
 * @generated from message api.v1.IPServiceGetResponse
 */
class IPServiceGetResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IPServiceGetResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IPServiceGetResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IPServiceGetResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IPServiceGetResponse, a, b);
    }
}
exports.IPServiceGetResponse = IPServiceGetResponse;
IPServiceGetResponse.runtime = protobuf_1.proto3;
IPServiceGetResponse.typeName = "api.v1.IPServiceGetResponse";
IPServiceGetResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ip", kind: "message", T: IP },
]);
/**
 * @generated from message api.v1.IPServiceUpdateResponse
 */
class IPServiceUpdateResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IPServiceUpdateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IPServiceUpdateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IPServiceUpdateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IPServiceUpdateResponse, a, b);
    }
}
exports.IPServiceUpdateResponse = IPServiceUpdateResponse;
IPServiceUpdateResponse.runtime = protobuf_1.proto3;
IPServiceUpdateResponse.typeName = "api.v1.IPServiceUpdateResponse";
IPServiceUpdateResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ip", kind: "message", T: IP },
]);
/**
 * @generated from message api.v1.IPServiceAllocateResponse
 */
class IPServiceAllocateResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IPServiceAllocateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IPServiceAllocateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IPServiceAllocateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IPServiceAllocateResponse, a, b);
    }
}
exports.IPServiceAllocateResponse = IPServiceAllocateResponse;
IPServiceAllocateResponse.runtime = protobuf_1.proto3;
IPServiceAllocateResponse.typeName = "api.v1.IPServiceAllocateResponse";
IPServiceAllocateResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ip", kind: "message", T: IP },
]);
/**
 * @generated from message api.v1.IPServiceStaticResponse
 */
class IPServiceStaticResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IPServiceStaticResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IPServiceStaticResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IPServiceStaticResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IPServiceStaticResponse, a, b);
    }
}
exports.IPServiceStaticResponse = IPServiceStaticResponse;
IPServiceStaticResponse.runtime = protobuf_1.proto3;
IPServiceStaticResponse.typeName = "api.v1.IPServiceStaticResponse";
IPServiceStaticResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ip", kind: "message", T: IP },
]);
/**
 * @generated from message api.v1.IPServiceListResponse
 */
class IPServiceListResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated api.v1.IP ips = 1;
         */
        this.ips = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IPServiceListResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IPServiceListResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IPServiceListResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IPServiceListResponse, a, b);
    }
}
exports.IPServiceListResponse = IPServiceListResponse;
IPServiceListResponse.runtime = protobuf_1.proto3;
IPServiceListResponse.typeName = "api.v1.IPServiceListResponse";
IPServiceListResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ips", kind: "message", T: IP, repeated: true },
]);
/**
 * @generated from message api.v1.IPServiceDeleteResponse
 */
class IPServiceDeleteResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IPServiceDeleteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IPServiceDeleteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IPServiceDeleteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IPServiceDeleteResponse, a, b);
    }
}
exports.IPServiceDeleteResponse = IPServiceDeleteResponse;
IPServiceDeleteResponse.runtime = protobuf_1.proto3;
IPServiceDeleteResponse.typeName = "api.v1.IPServiceDeleteResponse";
IPServiceDeleteResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ip", kind: "message", T: IP },
]);
