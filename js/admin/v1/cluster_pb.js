"use strict";
// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file admin/v1/cluster.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSHKeyPair = exports.ClusterServiceOperateResponse = exports.ClusterServiceCredentialsResponse = exports.ClusterServiceListResponse = exports.ClusterServiceLogsResponse = exports.ClusterServiceGetResponse = exports.ClusterServiceOperateRequest = exports.ClusterServiceCredentialsRequest = exports.ClusterServiceListRequest = exports.ClusterServiceLogsRequest = exports.ClusterServiceGetRequest = exports.Operate = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const cluster_pb_js_1 = require("../../api/v1/cluster_pb.js");
const machine_pb_js_1 = require("./machine_pb.js");
/**
 * @generated from enum admin.v1.Operate
 */
var Operate;
(function (Operate) {
    /**
     * @generated from enum value: OPERATE_UNSPECIFIED = 0;
     */
    Operate[Operate["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: OPERATE_RECONCILE = 1;
     */
    Operate[Operate["RECONCILE"] = 1] = "RECONCILE";
    /**
     * @generated from enum value: OPERATE_MAINTAIN = 2;
     */
    Operate[Operate["MAINTAIN"] = 2] = "MAINTAIN";
    /**
     * @generated from enum value: OPERATE_RETRY = 3;
     */
    Operate[Operate["RETRY"] = 3] = "RETRY";
})(Operate = exports.Operate || (exports.Operate = {}));
// Retrieve enum metadata with: proto3.getEnumType(Operate)
protobuf_1.proto3.util.setEnumType(Operate, "admin.v1.Operate", [
    { no: 0, name: "OPERATE_UNSPECIFIED" },
    { no: 1, name: "OPERATE_RECONCILE" },
    { no: 2, name: "OPERATE_MAINTAIN" },
    { no: 3, name: "OPERATE_RETRY" },
]);
/**
 * @generated from message admin.v1.ClusterServiceGetRequest
 */
class ClusterServiceGetRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * @generated from field: bool with_machines = 2;
         */
        this.withMachines = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceGetRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceGetRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceGetRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceGetRequest, a, b);
    }
}
ClusterServiceGetRequest.runtime = protobuf_1.proto3;
ClusterServiceGetRequest.typeName = "admin.v1.ClusterServiceGetRequest";
ClusterServiceGetRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "with_machines", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
exports.ClusterServiceGetRequest = ClusterServiceGetRequest;
/**
 * @generated from message admin.v1.ClusterServiceLogsRequest
 */
class ClusterServiceLogsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceLogsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceLogsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceLogsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceLogsRequest, a, b);
    }
}
ClusterServiceLogsRequest.runtime = protobuf_1.proto3;
ClusterServiceLogsRequest.typeName = "admin.v1.ClusterServiceLogsRequest";
ClusterServiceLogsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
exports.ClusterServiceLogsRequest = ClusterServiceLogsRequest;
/**
 * @generated from message admin.v1.ClusterServiceListRequest
 */
class ClusterServiceListRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: map<string, string> labels = 8;
         */
        this.labels = {};
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceListRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceListRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceListRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceListRequest, a, b);
    }
}
ClusterServiceListRequest.runtime = protobuf_1.proto3;
ClusterServiceListRequest.typeName = "admin.v1.ClusterServiceListRequest";
ClusterServiceListRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "seed", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "purpose", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "scalar", T: 9 /* ScalarType.STRING */ } },
]);
exports.ClusterServiceListRequest = ClusterServiceListRequest;
/**
 * @generated from message admin.v1.ClusterServiceCredentialsRequest
 */
class ClusterServiceCredentialsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * @generated from field: bool with_vpn = 2;
         */
        this.withVpn = false;
        /**
         * @generated from field: bool with_ssh = 3;
         */
        this.withSsh = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceCredentialsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceCredentialsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceCredentialsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceCredentialsRequest, a, b);
    }
}
ClusterServiceCredentialsRequest.runtime = protobuf_1.proto3;
ClusterServiceCredentialsRequest.typeName = "admin.v1.ClusterServiceCredentialsRequest";
ClusterServiceCredentialsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "with_vpn", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "with_ssh", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "expiration", kind: "message", T: protobuf_1.Duration, opt: true },
]);
exports.ClusterServiceCredentialsRequest = ClusterServiceCredentialsRequest;
/**
 * @generated from message admin.v1.ClusterServiceOperateRequest
 */
class ClusterServiceOperateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * @generated from field: admin.v1.Operate operate = 2;
         */
        this.operate = Operate.UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceOperateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceOperateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceOperateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceOperateRequest, a, b);
    }
}
ClusterServiceOperateRequest.runtime = protobuf_1.proto3;
ClusterServiceOperateRequest.typeName = "admin.v1.ClusterServiceOperateRequest";
ClusterServiceOperateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "operate", kind: "enum", T: protobuf_1.proto3.getEnumType(Operate) },
]);
exports.ClusterServiceOperateRequest = ClusterServiceOperateRequest;
/**
 * @generated from message admin.v1.ClusterServiceGetResponse
 */
class ClusterServiceGetResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated admin.v1.Machine machines = 2;
         */
        this.machines = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceGetResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceGetResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceGetResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceGetResponse, a, b);
    }
}
ClusterServiceGetResponse.runtime = protobuf_1.proto3;
ClusterServiceGetResponse.typeName = "admin.v1.ClusterServiceGetResponse";
ClusterServiceGetResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "cluster", kind: "message", T: cluster_pb_js_1.Cluster },
    { no: 2, name: "machines", kind: "message", T: machine_pb_js_1.Machine, repeated: true },
]);
exports.ClusterServiceGetResponse = ClusterServiceGetResponse;
/**
 * @generated from message admin.v1.ClusterServiceLogsResponse
 */
class ClusterServiceLogsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string log = 1;
         */
        this.log = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceLogsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceLogsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceLogsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceLogsResponse, a, b);
    }
}
ClusterServiceLogsResponse.runtime = protobuf_1.proto3;
ClusterServiceLogsResponse.typeName = "admin.v1.ClusterServiceLogsResponse";
ClusterServiceLogsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "log", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
exports.ClusterServiceLogsResponse = ClusterServiceLogsResponse;
/**
 * @generated from message admin.v1.ClusterServiceListResponse
 */
class ClusterServiceListResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated api.v1.Cluster clusters = 1;
         */
        this.clusters = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceListResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceListResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceListResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceListResponse, a, b);
    }
}
ClusterServiceListResponse.runtime = protobuf_1.proto3;
ClusterServiceListResponse.typeName = "admin.v1.ClusterServiceListResponse";
ClusterServiceListResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "clusters", kind: "message", T: cluster_pb_js_1.Cluster, repeated: true },
]);
exports.ClusterServiceListResponse = ClusterServiceListResponse;
/**
 * @generated from message admin.v1.ClusterServiceCredentialsResponse
 */
class ClusterServiceCredentialsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string kubeconfig = 1;
         */
        this.kubeconfig = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceCredentialsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceCredentialsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceCredentialsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceCredentialsResponse, a, b);
    }
}
ClusterServiceCredentialsResponse.runtime = protobuf_1.proto3;
ClusterServiceCredentialsResponse.typeName = "admin.v1.ClusterServiceCredentialsResponse";
ClusterServiceCredentialsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "kubeconfig", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ssh_keypair", kind: "message", T: SSHKeyPair },
    { no: 3, name: "vpn", kind: "message", T: machine_pb_js_1.VPN },
]);
exports.ClusterServiceCredentialsResponse = ClusterServiceCredentialsResponse;
/**
 * @generated from message admin.v1.ClusterServiceOperateResponse
 */
class ClusterServiceOperateResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceOperateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceOperateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceOperateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceOperateResponse, a, b);
    }
}
ClusterServiceOperateResponse.runtime = protobuf_1.proto3;
ClusterServiceOperateResponse.typeName = "admin.v1.ClusterServiceOperateResponse";
ClusterServiceOperateResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "cluster", kind: "message", T: cluster_pb_js_1.Cluster },
]);
exports.ClusterServiceOperateResponse = ClusterServiceOperateResponse;
/**
 * @generated from message admin.v1.SSHKeyPair
 */
class SSHKeyPair extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes publickey = 1;
         */
        this.publickey = new Uint8Array(0);
        /**
         * @generated from field: bytes privatekey = 2;
         */
        this.privatekey = new Uint8Array(0);
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SSHKeyPair().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SSHKeyPair().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SSHKeyPair().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SSHKeyPair, a, b);
    }
}
SSHKeyPair.runtime = protobuf_1.proto3;
SSHKeyPair.typeName = "admin.v1.SSHKeyPair";
SSHKeyPair.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "publickey", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "privatekey", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
exports.SSHKeyPair = SSHKeyPair;
