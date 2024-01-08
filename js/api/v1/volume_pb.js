"use strict";
// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file api/v1/volume.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotServiceDeleteResponse = exports.SnapshotServiceListResponse = exports.SnapshotServiceGetResponse = exports.VolumeServiceDeleteResponse = exports.VolumeServiceListResponse = exports.VolumeServiceGetResponse = exports.SnapshotServiceDeleteRequest = exports.SnapshotServiceListRequest = exports.SnapshotServiceGetRequest = exports.VolumeServiceDeleteRequest = exports.VolumeServiceListRequest = exports.VolumeServiceGetRequest = exports.SnapshotStatistics = exports.Snapshot = exports.VolumeStatistics = exports.Volume = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * Volume is a unit of block storage
 *
 * @generated from message api.v1.Volume
 */
class Volume extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Uuid is the unique identifier of the volume
         *
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * Name of the volume
         *
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * Project this volume belongs to
         *
         * @generated from field: string project = 3;
         */
        this.project = "";
        /**
         * Partition where this volume resides
         *
         * @generated from field: string partition = 4;
         */
        this.partition = "";
        /**
         * StorageClass where this volume is created
         *
         * @generated from field: string storage_class = 5;
         */
        this.storageClass = "";
        /**
         * Size in bytes of the volume
         *
         * @generated from field: uint64 size = 6;
         */
        this.size = protobuf_1.protoInt64.zero;
        /**
         * Usage in bytes of the volume
         *
         * @generated from field: uint64 usage = 7;
         */
        this.usage = protobuf_1.protoInt64.zero;
        /**
         * State of the volume
         *
         * @generated from field: string state = 8;
         */
        this.state = "";
        /**
         * AttachedTo us a list of nodes this volume is attached
         *
         * @generated from field: repeated string attached_to = 9;
         */
        this.attachedTo = [];
        /**
         * SourceSnapshotUuid if this volume was created from a snapshot, this was the uuid source
         *
         * @generated from field: string source_snapshot_uuid = 10;
         */
        this.sourceSnapshotUuid = "";
        /**
         * SourceSnapshotName if this volume was created from a snapshot, this was the name of the source
         *
         * @generated from field: string source_snapshot_name = 11;
         */
        this.sourceSnapshotName = "";
        /**
         * VolumeHandle is the handle to mount this volume manually
         *
         * @generated from field: string volume_handle = 12;
         */
        this.volumeHandle = "";
        /**
         * NodeIps is a list of storage server node ips
         *
         * @generated from field: repeated string node_ips = 13;
         */
        this.nodeIps = [];
        /**
         * RebuildProgress shows the progress of a rebuild if any
         *
         * @generated from field: string rebuild_progress = 14;
         */
        this.rebuildProgress = "";
        /**
         * PrimaryNodeUuid is the uuid of the storage server node where the primary replica of this volume resides
         *
         * @generated from field: string primary_node_uuid = 15;
         */
        this.primaryNodeUuid = "";
        /**
         * QosPolicyUuid is the uuid of the QOS policy if any
         *
         * @generated from field: string qos_policy_uuid = 16;
         */
        this.qosPolicyUuid = "";
        /**
         * QosPolicyName is the name of the QOS policy if any
         *
         * @generated from field: string qos_policy_name = 17;
         */
        this.qosPolicyName = "";
        /**
         * ReplicaCount shows how many replicas of this volume exist
         *
         * @generated from field: uint32 replica_count = 18;
         */
        this.replicaCount = 0;
        /**
         * ProtectionState shows the state of failure protection of this volume
         *
         * @generated from field: string protection_state = 19;
         */
        this.protectionState = "";
        /**
         * LogicalUsedStorage in bytes of the volume
         *
         * @generated from field: uint64 logical_used_storage = 20;
         */
        this.logicalUsedStorage = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Volume().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Volume().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Volume().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Volume, a, b);
    }
}
exports.Volume = Volume;
Volume.runtime = protobuf_1.proto3;
Volume.typeName = "api.v1.Volume";
Volume.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "storage_class", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "size", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "usage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "attached_to", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 10, name: "source_snapshot_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "source_snapshot_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "volume_handle", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "node_ips", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 14, name: "rebuild_progress", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "primary_node_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "qos_policy_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "qos_policy_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "replica_count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 19, name: "protection_state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "logical_used_storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 21, name: "statistics", kind: "message", T: VolumeStatistics },
]);
/**
 * VolumeStatistics are all detailed statistics of a volume
 *
 * @generated from message api.v1.VolumeStatistics
 */
class VolumeStatistics extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * LogicalUsedStorage
         *
         * Logical storage space used by volume, given in bytes.
         *
         * @generated from field: uint64 logical_used_storage = 1;
         */
        this.logicalUsedStorage = protobuf_1.protoInt64.zero;
        /**
         * PhysicalUsedStorage
         *
         * Physical storage space used by volume excluding parity, given in bytes.
         *
         * @generated from field: uint64 physical_used_storage = 2;
         */
        this.physicalUsedStorage = protobuf_1.protoInt64.zero;
        /**
         * CommpressionRatio
         *
         * compression ratio userWritten/physicalCapacity
         *
         * @generated from field: double compression_ratio = 3;
         */
        this.compressionRatio = 0;
        /**
         * TotalCommpressionRatio
         *
         * compression ratio sum(userWritten) / sum(physical capacity)
         *
         * @generated from field: double total_compression_ratio = 4;
         */
        this.totalCompressionRatio = 0;
        /**
         * PhysicalCapacity
         *
         * The physical capacity that exists in this volume layer
         *
         * @generated from field: uint64 physical_capacity = 5;
         */
        this.physicalCapacity = protobuf_1.protoInt64.zero;
        /**
         * PhysicalOwnedStorageCapacity
         *
         * The capacity that would be freed when volume is deleted
         *
         * @generated from field: uint64 physical_owned_capacity = 6;
         */
        this.physicalOwnedCapacity = protobuf_1.protoInt64.zero;
        /**
         * PhysicalOwnedMemory
         *
         * The memory that would be freed when volume is deleted
         *
         * @generated from field: uint64 physical_owned_memory = 7;
         */
        this.physicalOwnedMemory = protobuf_1.protoInt64.zero;
        /**
         * PhysicalMemory
         *
         * The memory that exists for this volume
         *
         * @generated from field: uint64 physical_memory = 8;
         */
        this.physicalMemory = protobuf_1.protoInt64.zero;
        /**
         * UserWritten
         *
         * The amount of bytes written to this volume by the user
         *
         * @generated from field: uint64 user_written = 9;
         */
        this.userWritten = protobuf_1.protoInt64.zero;
        /**
         * UnrecoverableDataIntegrityErrors
         *
         * Number of data integrity errors that could no be recovered by the system.
         *
         * @generated from field: uint32 unrecoverable_data_integrity_errors = 10;
         */
        this.unrecoverableDataIntegrityErrors = 0;
        /**
         * RecoverableDataIntegrityErrors
         *
         * Number of data integrity errors that were recovered by the system.
         *
         * @generated from field: uint32 recoverable_data_integrity_errors = 12;
         */
        this.recoverableDataIntegrityErrors = 0;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new VolumeStatistics().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new VolumeStatistics().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new VolumeStatistics().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(VolumeStatistics, a, b);
    }
}
exports.VolumeStatistics = VolumeStatistics;
VolumeStatistics.runtime = protobuf_1.proto3;
VolumeStatistics.typeName = "api.v1.VolumeStatistics";
VolumeStatistics.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "logical_used_storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "physical_used_storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "compression_ratio", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "total_compression_ratio", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: "physical_capacity", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "physical_owned_capacity", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "physical_owned_memory", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "physical_memory", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "user_written", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "unrecoverable_data_integrity_errors", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 12, name: "recoverable_data_integrity_errors", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
]);
/**
 * Snapshot is a unit of block storage create as a point in time block copy of a volume
 *
 * @generated from message api.v1.Snapshot
 */
class Snapshot extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Uuid is the unique identifier of the snapshot
         *
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * Name of the snapshot
         *
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * Description of this snapshot
         *
         * @generated from field: string description = 3;
         */
        this.description = "";
        /**
         * Project this snapshot belongs to
         *
         * @generated from field: string project = 4;
         */
        this.project = "";
        /**
         * Partition where this snapshot resides
         *
         * @generated from field: string partition = 5;
         */
        this.partition = "";
        /**
         * StorageClass where this snapshot is created
         *
         * @generated from field: string storage_class = 6;
         */
        this.storageClass = "";
        /**
         * Size in bytes of the snapshot
         *
         * @generated from field: uint64 size = 7;
         */
        this.size = protobuf_1.protoInt64.zero;
        /**
         * Usage in bytes of the snapshot
         *
         * @generated from field: uint64 usage = 8;
         */
        this.usage = protobuf_1.protoInt64.zero;
        /**
         * State of the snapshot
         *
         * @generated from field: string state = 9;
         */
        this.state = "";
        /**
         * SourceVolumeUuid is the uuid of the snapshot this snapshot was created from
         *
         * @generated from field: string source_volume_uuid = 10;
         */
        this.sourceVolumeUuid = "";
        /**
         * SourceVolumeName is the name of the snapshot this snapshot was created from
         *
         * @generated from field: string source_volume_name = 11;
         */
        this.sourceVolumeName = "";
        /**
         * ReplicaCount shows how many replicas of this snapshot exist
         *
         * @generated from field: uint32 replica_count = 12;
         */
        this.replicaCount = 0;
        /**
         * PrimaryNodeUuid is the uuid of the storage server node where the primary replica of this snapshot resides
         *
         * @generated from field: string primary_node_uuid = 13;
         */
        this.primaryNodeUuid = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Snapshot().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Snapshot().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Snapshot().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Snapshot, a, b);
    }
}
exports.Snapshot = Snapshot;
Snapshot.runtime = protobuf_1.proto3;
Snapshot.typeName = "api.v1.Snapshot";
Snapshot.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "storage_class", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "size", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "usage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "source_volume_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "source_volume_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "replica_count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 13, name: "primary_node_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "retention", kind: "message", T: protobuf_1.Duration },
    { no: 15, name: "statistics", kind: "message", T: SnapshotStatistics },
    { no: 20, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
]);
/**
 * SnapshotStatistics are all detailed statistics of a snapshot
 *
 * @generated from message api.v1.SnapshotStatistics
 */
class SnapshotStatistics extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * PhysicalCapacity
         *
         * The physical capacity that exists in this snapshot layer
         *
         * @generated from field: uint64 physical_capacity = 1;
         */
        this.physicalCapacity = protobuf_1.protoInt64.zero;
        /**
         * PhysicalOwnedStorageCapacity
         *
         * The capacity that would be freed when snapshot is deleted
         *
         * @generated from field: uint64 physical_owned_capacity = 2;
         */
        this.physicalOwnedCapacity = protobuf_1.protoInt64.zero;
        /**
         * PhysicalOwnedMemory
         *
         * The memory that would be freed when snapshot is deleted
         *
         * @generated from field: uint64 physical_owned_memory = 3;
         */
        this.physicalOwnedMemory = protobuf_1.protoInt64.zero;
        /**
         * PhysicalMemory
         *
         * The memory that exists for this snapshot
         *
         * @generated from field: uint64 physical_memory = 4;
         */
        this.physicalMemory = protobuf_1.protoInt64.zero;
        /**
         * UserWritten
         *
         * The amount of bytes written to this snapshot by the user
         *
         * @generated from field: uint64 user_written = 5;
         */
        this.userWritten = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SnapshotStatistics().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SnapshotStatistics().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SnapshotStatistics().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SnapshotStatistics, a, b);
    }
}
exports.SnapshotStatistics = SnapshotStatistics;
SnapshotStatistics.runtime = protobuf_1.proto3;
SnapshotStatistics.typeName = "api.v1.SnapshotStatistics";
SnapshotStatistics.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "physical_capacity", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "physical_owned_capacity", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "physical_owned_memory", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "physical_memory", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "user_written", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * VolumeServiceGetRequest is the request payload of the volume get request
 *
 * @generated from message api.v1.VolumeServiceGetRequest
 */
class VolumeServiceGetRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Uuid of the volume
         *
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * Project of the volume
         *
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new VolumeServiceGetRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new VolumeServiceGetRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new VolumeServiceGetRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(VolumeServiceGetRequest, a, b);
    }
}
exports.VolumeServiceGetRequest = VolumeServiceGetRequest;
VolumeServiceGetRequest.runtime = protobuf_1.proto3;
VolumeServiceGetRequest.typeName = "api.v1.VolumeServiceGetRequest";
VolumeServiceGetRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * VolumeServiceListRequest is the request payload of a volume list request
 *
 * @generated from message api.v1.VolumeServiceListRequest
 */
class VolumeServiceListRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Project of the volume
         *
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new VolumeServiceListRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new VolumeServiceListRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new VolumeServiceListRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(VolumeServiceListRequest, a, b);
    }
}
exports.VolumeServiceListRequest = VolumeServiceListRequest;
VolumeServiceListRequest.runtime = protobuf_1.proto3;
VolumeServiceListRequest.typeName = "api.v1.VolumeServiceListRequest";
VolumeServiceListRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * VolumeServiceDeleteRequest is the request payload of a volume delete request
 *
 * @generated from message api.v1.VolumeServiceDeleteRequest
 */
class VolumeServiceDeleteRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Uuid of the volume
         *
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * Project of the volume
         *
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new VolumeServiceDeleteRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new VolumeServiceDeleteRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new VolumeServiceDeleteRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(VolumeServiceDeleteRequest, a, b);
    }
}
exports.VolumeServiceDeleteRequest = VolumeServiceDeleteRequest;
VolumeServiceDeleteRequest.runtime = protobuf_1.proto3;
VolumeServiceDeleteRequest.typeName = "api.v1.VolumeServiceDeleteRequest";
VolumeServiceDeleteRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * SnapshotServiceGetRequest is the request payload of a snapshot list request
 *
 * @generated from message api.v1.SnapshotServiceGetRequest
 */
class SnapshotServiceGetRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Uuid of the snapshot
         *
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * Project of the snapshot
         *
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SnapshotServiceGetRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SnapshotServiceGetRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SnapshotServiceGetRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SnapshotServiceGetRequest, a, b);
    }
}
exports.SnapshotServiceGetRequest = SnapshotServiceGetRequest;
SnapshotServiceGetRequest.runtime = protobuf_1.proto3;
SnapshotServiceGetRequest.typeName = "api.v1.SnapshotServiceGetRequest";
SnapshotServiceGetRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * SnapshotServiceListRequest is the request payload of a snapshot list request
 *
 * @generated from message api.v1.SnapshotServiceListRequest
 */
class SnapshotServiceListRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Project of the snapshot
         *
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SnapshotServiceListRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SnapshotServiceListRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SnapshotServiceListRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SnapshotServiceListRequest, a, b);
    }
}
exports.SnapshotServiceListRequest = SnapshotServiceListRequest;
SnapshotServiceListRequest.runtime = protobuf_1.proto3;
SnapshotServiceListRequest.typeName = "api.v1.SnapshotServiceListRequest";
SnapshotServiceListRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * SnapshotServiceDeleteRequest is the request payload of a snapshot delete request
 *
 * @generated from message api.v1.SnapshotServiceDeleteRequest
 */
class SnapshotServiceDeleteRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Uuid of the snapshot
         *
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * Project of the snapshot
         *
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SnapshotServiceDeleteRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SnapshotServiceDeleteRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SnapshotServiceDeleteRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SnapshotServiceDeleteRequest, a, b);
    }
}
exports.SnapshotServiceDeleteRequest = SnapshotServiceDeleteRequest;
SnapshotServiceDeleteRequest.runtime = protobuf_1.proto3;
SnapshotServiceDeleteRequest.typeName = "api.v1.SnapshotServiceDeleteRequest";
SnapshotServiceDeleteRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * VolumeServiceGetResponse is the response payload of a volume get request
 *
 * @generated from message api.v1.VolumeServiceGetResponse
 */
class VolumeServiceGetResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new VolumeServiceGetResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new VolumeServiceGetResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new VolumeServiceGetResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(VolumeServiceGetResponse, a, b);
    }
}
exports.VolumeServiceGetResponse = VolumeServiceGetResponse;
VolumeServiceGetResponse.runtime = protobuf_1.proto3;
VolumeServiceGetResponse.typeName = "api.v1.VolumeServiceGetResponse";
VolumeServiceGetResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "volume", kind: "message", T: Volume },
]);
/**
 * VolumeServiceListResponse is the response payload of a volume list request
 *
 * @generated from message api.v1.VolumeServiceListResponse
 */
class VolumeServiceListResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Volumes the volumes
         *
         * @generated from field: repeated api.v1.Volume volumes = 1;
         */
        this.volumes = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new VolumeServiceListResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new VolumeServiceListResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new VolumeServiceListResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(VolumeServiceListResponse, a, b);
    }
}
exports.VolumeServiceListResponse = VolumeServiceListResponse;
VolumeServiceListResponse.runtime = protobuf_1.proto3;
VolumeServiceListResponse.typeName = "api.v1.VolumeServiceListResponse";
VolumeServiceListResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "volumes", kind: "message", T: Volume, repeated: true },
]);
/**
 * VolumeServiceDeleteResponse is the response payload of a volume delete request
 *
 * @generated from message api.v1.VolumeServiceDeleteResponse
 */
class VolumeServiceDeleteResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new VolumeServiceDeleteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new VolumeServiceDeleteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new VolumeServiceDeleteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(VolumeServiceDeleteResponse, a, b);
    }
}
exports.VolumeServiceDeleteResponse = VolumeServiceDeleteResponse;
VolumeServiceDeleteResponse.runtime = protobuf_1.proto3;
VolumeServiceDeleteResponse.typeName = "api.v1.VolumeServiceDeleteResponse";
VolumeServiceDeleteResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "volume", kind: "message", T: Volume },
]);
/**
 * SnapshotServiceGetResponse is the response payload of a snapshot get request
 *
 * @generated from message api.v1.SnapshotServiceGetResponse
 */
class SnapshotServiceGetResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SnapshotServiceGetResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SnapshotServiceGetResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SnapshotServiceGetResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SnapshotServiceGetResponse, a, b);
    }
}
exports.SnapshotServiceGetResponse = SnapshotServiceGetResponse;
SnapshotServiceGetResponse.runtime = protobuf_1.proto3;
SnapshotServiceGetResponse.typeName = "api.v1.SnapshotServiceGetResponse";
SnapshotServiceGetResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "snapshot", kind: "message", T: Snapshot },
]);
/**
 * SnapshotServiceListResponse is the response payload of a snapshot list request
 *
 * @generated from message api.v1.SnapshotServiceListResponse
 */
class SnapshotServiceListResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Snapshots the snapshots
         *
         * @generated from field: repeated api.v1.Snapshot snapshots = 1;
         */
        this.snapshots = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SnapshotServiceListResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SnapshotServiceListResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SnapshotServiceListResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SnapshotServiceListResponse, a, b);
    }
}
exports.SnapshotServiceListResponse = SnapshotServiceListResponse;
SnapshotServiceListResponse.runtime = protobuf_1.proto3;
SnapshotServiceListResponse.typeName = "api.v1.SnapshotServiceListResponse";
SnapshotServiceListResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "snapshots", kind: "message", T: Snapshot, repeated: true },
]);
/**
 * SnapshotServiceDeleteResponse is the response payload of a snapshot delete request
 *
 * @generated from message api.v1.SnapshotServiceDeleteResponse
 */
class SnapshotServiceDeleteResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SnapshotServiceDeleteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SnapshotServiceDeleteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SnapshotServiceDeleteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SnapshotServiceDeleteResponse, a, b);
    }
}
exports.SnapshotServiceDeleteResponse = SnapshotServiceDeleteResponse;
SnapshotServiceDeleteResponse.runtime = protobuf_1.proto3;
SnapshotServiceDeleteResponse.typeName = "api.v1.SnapshotServiceDeleteResponse";
SnapshotServiceDeleteResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "snapshot", kind: "message", T: Snapshot },
]);
