"use strict";
// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file api/v1/assets.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetServiceListResponse = exports.AssetServiceListRequest = exports.AssetDefaults = exports.Kubernetes = exports.MachineType = exports.Partition = exports.Region = exports.Asset = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * Types
 *
 * @generated from message api.v1.Asset
 */
class Asset extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: map<string, api.v1.MachineType> machine_types = 2;
         */
        this.machineTypes = {};
        /**
         * @generated from field: repeated api.v1.Kubernetes kubernetes = 3;
         */
        this.kubernetes = [];
        /**
         * @generated from field: string default_network = 4;
         */
        this.defaultNetwork = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Asset().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Asset().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Asset().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Asset, a, b);
    }
}
exports.Asset = Asset;
Asset.runtime = protobuf_1.proto3;
Asset.typeName = "api.v1.Asset";
Asset.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "region", kind: "message", T: Region },
    { no: 2, name: "machine_types", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "message", T: MachineType } },
    { no: 3, name: "kubernetes", kind: "message", T: Kubernetes, repeated: true },
    { no: 4, name: "default_network", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.Region
 */
class Region extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * @generated from field: string address = 3;
         */
        this.address = "";
        /**
         * @generated from field: bool active = 4;
         */
        this.active = false;
        /**
         * @generated from field: map<string, api.v1.Partition> partitions = 5;
         */
        this.partitions = {};
        /**
         * @generated from field: repeated string networks = 7;
         */
        this.networks = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Region().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Region().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Region().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Region, a, b);
    }
}
exports.Region = Region;
Region.runtime = protobuf_1.proto3;
Region.typeName = "api.v1.Region";
Region.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "partitions", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "message", T: Partition } },
    { no: 6, name: "defaults", kind: "message", T: AssetDefaults },
    { no: 7, name: "networks", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message api.v1.Partition
 */
class Partition extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * @generated from field: string address = 3;
         */
        this.address = "";
        /**
         * @generated from field: bool active = 4;
         */
        this.active = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Partition().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Partition().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Partition().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Partition, a, b);
    }
}
exports.Partition = Partition;
Partition.runtime = protobuf_1.proto3;
Partition.typeName = "api.v1.Partition";
Partition.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message api.v1.MachineType
 */
class MachineType extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * @generated from field: uint32 cpus = 3;
         */
        this.cpus = 0;
        /**
         * @generated from field: uint64 memory = 4;
         */
        this.memory = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: uint64 storage = 5;
         */
        this.storage = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MachineType().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MachineType().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MachineType().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MachineType, a, b);
    }
}
exports.MachineType = MachineType;
MachineType.runtime = protobuf_1.proto3;
MachineType.typeName = "api.v1.MachineType";
MachineType.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "cpus", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "memory", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * @generated from message api.v1.Kubernetes
 */
class Kubernetes extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string version = 1;
         */
        this.version = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Kubernetes().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Kubernetes().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Kubernetes().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Kubernetes, a, b);
    }
}
exports.Kubernetes = Kubernetes;
Kubernetes.runtime = protobuf_1.proto3;
Kubernetes.typeName = "api.v1.Kubernetes";
Kubernetes.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.AssetDefaults
 */
class AssetDefaults extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string machine_type = 1;
         */
        this.machineType = "";
        /**
         * @generated from field: string kubernetes_version = 2;
         */
        this.kubernetesVersion = "";
        /**
         * @generated from field: uint32 worker_min = 3;
         */
        this.workerMin = 0;
        /**
         * @generated from field: uint32 worker_max = 4;
         */
        this.workerMax = 0;
        /**
         * @generated from field: uint32 maxsurge = 5;
         */
        this.maxsurge = 0;
        /**
         * @generated from field: uint32 maxunavailable = 6;
         */
        this.maxunavailable = 0;
        /**
         * @generated from field: string partition = 7;
         */
        this.partition = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AssetDefaults().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AssetDefaults().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AssetDefaults().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(AssetDefaults, a, b);
    }
}
exports.AssetDefaults = AssetDefaults;
AssetDefaults.runtime = protobuf_1.proto3;
AssetDefaults.typeName = "api.v1.AssetDefaults";
AssetDefaults.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "machine_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "kubernetes_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "worker_min", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "worker_max", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "maxsurge", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "maxunavailable", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Requests
 *
 * @generated from message api.v1.AssetServiceListRequest
 */
class AssetServiceListRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AssetServiceListRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AssetServiceListRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AssetServiceListRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(AssetServiceListRequest, a, b);
    }
}
exports.AssetServiceListRequest = AssetServiceListRequest;
AssetServiceListRequest.runtime = protobuf_1.proto3;
AssetServiceListRequest.typeName = "api.v1.AssetServiceListRequest";
AssetServiceListRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * Responses
 *
 * @generated from message api.v1.AssetServiceListResponse
 */
class AssetServiceListResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * assets maps region ids to assets
         *
         * @generated from field: map<string, api.v1.Asset> assets = 1;
         */
        this.assets = {};
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AssetServiceListResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AssetServiceListResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AssetServiceListResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(AssetServiceListResponse, a, b);
    }
}
exports.AssetServiceListResponse = AssetServiceListResponse;
AssetServiceListResponse.runtime = protobuf_1.proto3;
AssetServiceListResponse.typeName = "api.v1.AssetServiceListResponse";
AssetServiceListResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "assets", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "message", T: Asset } },
]);
