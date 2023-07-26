"use strict";
// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file admin/v1/storage.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageServiceListSnapshotsResponse = exports.StorageServiceListSnapshotsRequest = exports.StorageServiceListVolumesResponse = exports.StorageServiceListVolumesRequest = exports.ClusterStatisticsApi = exports.ClusterHealth = exports.StorageServerInfo = exports.StorageClusterInfo = exports.StorageServiceClusterInfoResponse = exports.StorageServiceClusterInfoRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const volume_pb_js_1 = require("../../api/v1/volume_pb.js");
/**
 * @generated from message admin.v1.StorageServiceClusterInfoRequest
 */
class StorageServiceClusterInfoRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new StorageServiceClusterInfoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new StorageServiceClusterInfoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new StorageServiceClusterInfoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(StorageServiceClusterInfoRequest, a, b);
    }
}
exports.StorageServiceClusterInfoRequest = StorageServiceClusterInfoRequest;
StorageServiceClusterInfoRequest.runtime = protobuf_1.proto3;
StorageServiceClusterInfoRequest.typeName = "admin.v1.StorageServiceClusterInfoRequest";
StorageServiceClusterInfoRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * @generated from message admin.v1.StorageServiceClusterInfoResponse
 */
class StorageServiceClusterInfoResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated admin.v1.StorageClusterInfo infos = 1;
         */
        this.infos = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new StorageServiceClusterInfoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new StorageServiceClusterInfoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new StorageServiceClusterInfoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(StorageServiceClusterInfoResponse, a, b);
    }
}
exports.StorageServiceClusterInfoResponse = StorageServiceClusterInfoResponse;
StorageServiceClusterInfoResponse.runtime = protobuf_1.proto3;
StorageServiceClusterInfoResponse.typeName = "admin.v1.StorageServiceClusterInfoResponse";
StorageServiceClusterInfoResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "infos", kind: "message", T: StorageClusterInfo, repeated: true },
]);
/**
 * @generated from message admin.v1.StorageClusterInfo
 */
class StorageClusterInfo extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string partition = 1;
         */
        this.partition = "";
        /**
         * @generated from field: string uuid = 2;
         */
        this.uuid = "";
        /**
         * @generated from field: string subsystem_nqn = 3;
         */
        this.subsystemNqn = "";
        /**
         * @generated from field: uint32 current_max_replicas = 4;
         */
        this.currentMaxReplicas = 0;
        /**
         * @generated from field: uint32 supported_max_replicas = 5;
         */
        this.supportedMaxReplicas = 0;
        /**
         * @generated from field: string min_version_in_cluster = 8;
         */
        this.minVersionInCluster = "";
        /**
         * @generated from field: string min_allowed_version = 9;
         */
        this.minAllowedVersion = "";
        /**
         * @generated from field: string max_allowed_version = 10;
         */
        this.maxAllowedVersion = "";
        /**
         * @generated from field: repeated string api_endpoints = 11;
         */
        this.apiEndpoints = [];
        /**
         * @generated from field: repeated string discovery_endpoints = 12;
         */
        this.discoveryEndpoints = [];
        /**
         * @generated from field: repeated admin.v1.StorageServerInfo servers = 13;
         */
        this.servers = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new StorageClusterInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new StorageClusterInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new StorageClusterInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(StorageClusterInfo, a, b);
    }
}
exports.StorageClusterInfo = StorageClusterInfo;
StorageClusterInfo.runtime = protobuf_1.proto3;
StorageClusterInfo.typeName = "admin.v1.StorageClusterInfo";
StorageClusterInfo.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "subsystem_nqn", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "current_max_replicas", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "supported_max_replicas", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "statistics", kind: "message", T: ClusterStatisticsApi },
    { no: 7, name: "health", kind: "message", T: ClusterHealth },
    { no: 8, name: "min_version_in_cluster", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "min_allowed_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "max_allowed_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "api_endpoints", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 12, name: "discovery_endpoints", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 13, name: "servers", kind: "message", T: StorageServerInfo, repeated: true },
]);
/**
 * @generated from message admin.v1.StorageServerInfo
 */
class StorageServerInfo extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * @generated from field: string risk_of_service_loss_state = 3;
         */
        this.riskOfServiceLossState = "";
        /**
         * @generated from field: string state = 4;
         */
        this.state = "";
        /**
         * @generated from field: repeated string server_endpoints = 5;
         */
        this.serverEndpoints = [];
        /**
         * @generated from field: string light_os_version = 6;
         */
        this.lightOsVersion = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new StorageServerInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new StorageServerInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new StorageServerInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(StorageServerInfo, a, b);
    }
}
exports.StorageServerInfo = StorageServerInfo;
StorageServerInfo.runtime = protobuf_1.proto3;
StorageServerInfo.typeName = "admin.v1.StorageServerInfo";
StorageServerInfo.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "risk_of_service_loss_state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "server_endpoints", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "light_os_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message admin.v1.ClusterHealth
 */
class ClusterHealth extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string state = 1;
         */
        this.state = "";
        /**
         * @generated from field: uint32 num_degraded_volumes = 2;
         */
        this.numDegradedVolumes = 0;
        /**
         * @generated from field: uint32 num_read_only_volumes = 3;
         */
        this.numReadOnlyVolumes = 0;
        /**
         * @generated from field: uint32 num_not_available_volumes = 4;
         */
        this.numNotAvailableVolumes = 0;
        /**
         * @generated from field: uint32 num_inactive_nodes = 5;
         */
        this.numInactiveNodes = 0;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterHealth().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterHealth().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterHealth().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterHealth, a, b);
    }
}
exports.ClusterHealth = ClusterHealth;
ClusterHealth.runtime = protobuf_1.proto3;
ClusterHealth.typeName = "admin.v1.ClusterHealth";
ClusterHealth.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "num_degraded_volumes", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "num_read_only_volumes", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "num_not_available_volumes", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "num_inactive_nodes", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
]);
/**
 * @generated from message admin.v1.ClusterStatisticsApi
 */
class ClusterStatisticsApi extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Installed Physical Storage
         *
         * All installed SSDs capacities over all servers in cluster, given in bytes.
         *
         * @generated from field: uint64 installed_physical_storage = 1;
         */
        this.installedPhysicalStorage = protobuf_1.protoInt64.zero;
        /**
         * Total Attached Physical Storage
         *
         * Sum of all managed and healthy SSDs capacities, given in bytes.
         *
         * @generated from field: uint64 managed_physical_storage = 2;
         */
        this.managedPhysicalStorage = protobuf_1.protoInt64.zero;
        /**
         * Effective Physical Storage
         *
         * Effective Physical storage excluding overhead of OVP and Parity, given in bytes.
         *
         * @generated from field: uint64 effective_physical_storage = 3;
         */
        this.effectivePhysicalStorage = protobuf_1.protoInt64.zero;
        /**
         * Logical Storage
         *
         * Sum of capacities of all allocated volumes, given in bytes.
         *
         * @generated from field: uint64 logical_storage = 4;
         */
        this.logicalStorage = protobuf_1.protoInt64.zero;
        /**
         * Logical Used Storage
         *
         * Logical storage space used by all volumes (n of LBAs x 4096), given in bytes.
         *
         * @generated from field: uint64 logical_used_storage = 5;
         */
        this.logicalUsedStorage = protobuf_1.protoInt64.zero;
        /**
         * Physical Used Storage Excluding Parity
         *
         * Physical storage space occupied by all volumes (data only), given in bytes.
         *
         * @generated from field: uint64 physical_used_storage = 6;
         */
        this.physicalUsedStorage = protobuf_1.protoInt64.zero;
        /**
         * Physical Used Storage
         *
         * Physical storage space occupied by all data including Parity overhead when EC enabled (physical n*disks/(n*disks -1)), given in bytes.
         *
         * @generated from field: uint64 physical_used_storage_including_parity = 7;
         */
        this.physicalUsedStorageIncludingParity = protobuf_1.protoInt64.zero;
        /**
         * Free Physical Storage
         *
         * Free storage before entering to read-only mode , given in bytes.
         *
         * @generated from field: uint64 free_physical_storage = 8;
         */
        this.freePhysicalStorage = protobuf_1.protoInt64.zero;
        /**
         * Estimated Free Logical Storage
         *
         * Estimated free storage before entering to read-only mode assuming current compression ratio, given in bytes.
         *
         * @generated from field: uint64 estimated_free_logical_storage = 9;
         */
        this.estimatedFreeLogicalStorage = protobuf_1.protoInt64.zero;
        /**
         * Estimated Total Available Logical Storage
         *
         * Estimate of total available logical storage based on current compression ratio (effective * compression)
         *
         * @generated from field: uint64 estimated_logical_storage = 10;
         */
        this.estimatedLogicalStorage = protobuf_1.protoInt64.zero;
        /**
         * commpression ratio
         *
         * compression ratio logicalUsedStorage/physicalUsedStorage
         *
         * @generated from field: double compression_ratio = 11;
         */
        this.compressionRatio = 0;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterStatisticsApi().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterStatisticsApi().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterStatisticsApi().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterStatisticsApi, a, b);
    }
}
exports.ClusterStatisticsApi = ClusterStatisticsApi;
ClusterStatisticsApi.runtime = protobuf_1.proto3;
ClusterStatisticsApi.typeName = "admin.v1.ClusterStatisticsApi";
ClusterStatisticsApi.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "installed_physical_storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "managed_physical_storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "effective_physical_storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "logical_storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "logical_used_storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "physical_used_storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "physical_used_storage_including_parity", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "free_physical_storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "estimated_free_logical_storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "estimated_logical_storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "compression_ratio", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
]);
/**
 * @generated from message admin.v1.StorageServiceListVolumesRequest
 */
class StorageServiceListVolumesRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new StorageServiceListVolumesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new StorageServiceListVolumesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new StorageServiceListVolumesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(StorageServiceListVolumesRequest, a, b);
    }
}
exports.StorageServiceListVolumesRequest = StorageServiceListVolumesRequest;
StorageServiceListVolumesRequest.runtime = protobuf_1.proto3;
StorageServiceListVolumesRequest.typeName = "admin.v1.StorageServiceListVolumesRequest";
StorageServiceListVolumesRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * @generated from message admin.v1.StorageServiceListVolumesResponse
 */
class StorageServiceListVolumesResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated api.v1.Volume volumes = 1;
         */
        this.volumes = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new StorageServiceListVolumesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new StorageServiceListVolumesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new StorageServiceListVolumesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(StorageServiceListVolumesResponse, a, b);
    }
}
exports.StorageServiceListVolumesResponse = StorageServiceListVolumesResponse;
StorageServiceListVolumesResponse.runtime = protobuf_1.proto3;
StorageServiceListVolumesResponse.typeName = "admin.v1.StorageServiceListVolumesResponse";
StorageServiceListVolumesResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "volumes", kind: "message", T: volume_pb_js_1.Volume, repeated: true },
]);
/**
 * @generated from message admin.v1.StorageServiceListSnapshotsRequest
 */
class StorageServiceListSnapshotsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new StorageServiceListSnapshotsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new StorageServiceListSnapshotsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new StorageServiceListSnapshotsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(StorageServiceListSnapshotsRequest, a, b);
    }
}
exports.StorageServiceListSnapshotsRequest = StorageServiceListSnapshotsRequest;
StorageServiceListSnapshotsRequest.runtime = protobuf_1.proto3;
StorageServiceListSnapshotsRequest.typeName = "admin.v1.StorageServiceListSnapshotsRequest";
StorageServiceListSnapshotsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * @generated from message admin.v1.StorageServiceListSnapshotsResponse
 */
class StorageServiceListSnapshotsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated api.v1.Snapshot snapshots = 1;
         */
        this.snapshots = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new StorageServiceListSnapshotsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new StorageServiceListSnapshotsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new StorageServiceListSnapshotsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(StorageServiceListSnapshotsResponse, a, b);
    }
}
exports.StorageServiceListSnapshotsResponse = StorageServiceListSnapshotsResponse;
StorageServiceListSnapshotsResponse.runtime = protobuf_1.proto3;
StorageServiceListSnapshotsResponse.typeName = "admin.v1.StorageServiceListSnapshotsResponse";
StorageServiceListSnapshotsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "snapshots", kind: "message", T: volume_pb_js_1.Snapshot, repeated: true },
]);
