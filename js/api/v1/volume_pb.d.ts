import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * Volume is a unit of block storage
 *
 * @generated from message api.v1.Volume
 */
export declare class Volume extends Message<Volume> {
    /**
     * Uuid is the unique identifier of the volume
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Name of the volume
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Project this volume belongs to
     *
     * @generated from field: string project = 3;
     */
    project: string;
    /**
     * Partition where this volume resides
     *
     * @generated from field: string partition = 4;
     */
    partition: string;
    /**
     * StorageClass where this volume is created
     *
     * @generated from field: string storage_class = 5;
     */
    storageClass: string;
    /**
     * Size in bytes of the volume
     *
     * @generated from field: uint64 size = 6;
     */
    size: bigint;
    /**
     * Usage in bytes of the volume
     *
     * @generated from field: uint64 usage = 7;
     */
    usage: bigint;
    /**
     * State of the volume
     *
     * @generated from field: string state = 8;
     */
    state: string;
    /**
     * AttachedTo us a list of nodes this volume is attached
     *
     * @generated from field: repeated string attached_to = 9;
     */
    attachedTo: string[];
    /**
     * SourceSnapshotUuid if this volume was created from a snapshot, this was the uuid source
     *
     * @generated from field: string source_snapshot_uuid = 10;
     */
    sourceSnapshotUuid: string;
    /**
     * SourceSnapshotName if this volume was created from a snapshot, this was the name of the source
     *
     * @generated from field: string source_snapshot_name = 11;
     */
    sourceSnapshotName: string;
    /**
     * VolumeHandle is the handle to mount this volume manually
     *
     * @generated from field: string volume_handle = 12;
     */
    volumeHandle: string;
    /**
     * NodeIps is a list of storage server node ips
     *
     * @generated from field: repeated string node_ips = 13;
     */
    nodeIps: string[];
    /**
     * RebuildProgress shows the progress of a rebuild if any
     *
     * @generated from field: string rebuild_progress = 14;
     */
    rebuildProgress: string;
    /**
     * PrimaryNodeUuid is the uuid of the storage server node where the primary replica of this volume resides
     *
     * @generated from field: string primary_node_uuid = 15;
     */
    primaryNodeUuid: string;
    /**
     * QosPolicyUuid is the uuid of the QOS policy if any
     *
     * @generated from field: string qos_policy_uuid = 16;
     */
    qosPolicyUuid: string;
    /**
     * QosPolicyName is the name of the QOS policy if any
     *
     * @generated from field: string qos_policy_name = 17;
     */
    qosPolicyName: string;
    /**
     * ReplicaCount shows how many replicas of this volume exist
     *
     * @generated from field: uint32 replica_count = 18;
     */
    replicaCount: number;
    /**
     * ProtectionState shows the state of failure protection of this volume
     *
     * @generated from field: string protection_state = 19;
     */
    protectionState: string;
    /**
     * LogicalUsedStorage in bytes of the volume
     *
     * @generated from field: uint64 logical_used_storage = 20;
     */
    logicalUsedStorage: bigint;
    /**
     * VolumeStatistics are only visible to admins
     *
     * @generated from field: api.v1.VolumeStatistics statistics = 21;
     */
    statistics?: VolumeStatistics;
    /**
     * ClusterName if set points to the cluster this volume is attached to
     *
     * @generated from field: string cluster_name = 22;
     */
    clusterName: string;
    /**
     * ClusterID if set points to the cluster this volume is attached to
     *
     * @generated from field: string cluster_id = 23;
     */
    clusterId: string;
    /**
     * Labels stored in the volume
     *
     * @generated from field: repeated api.v1.VolumeLabel labels = 24;
     */
    labels: VolumeLabel[];
    constructor(data?: PartialMessage<Volume>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Volume";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Volume;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Volume;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Volume;
    static equals(a: Volume | PlainMessage<Volume> | undefined, b: Volume | PlainMessage<Volume> | undefined): boolean;
}
/**
 * label-key and label-value length must be between 1 and 253 characters and
 * may contain any of: alphanumeric characters (a-z, A-Z, 0-9), hyphen (-),
 * underscore (_) and dot (.).
 *
 * @generated from message api.v1.VolumeLabel
 */
export declare class VolumeLabel extends Message<VolumeLabel> {
    /**
     * key under which the value is stored
     *
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * value of this label
     *
     * @generated from field: string value = 2;
     */
    value: string;
    constructor(data?: PartialMessage<VolumeLabel>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.VolumeLabel";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeLabel;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeLabel;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeLabel;
    static equals(a: VolumeLabel | PlainMessage<VolumeLabel> | undefined, b: VolumeLabel | PlainMessage<VolumeLabel> | undefined): boolean;
}
/**
 * VolumeStatistics are all detailed statistics of a volume
 *
 * @generated from message api.v1.VolumeStatistics
 */
export declare class VolumeStatistics extends Message<VolumeStatistics> {
    /**
     * LogicalUsedStorage
     *
     * Logical storage space used by volume, given in bytes.
     *
     * @generated from field: uint64 logical_used_storage = 1;
     */
    logicalUsedStorage: bigint;
    /**
     * PhysicalUsedStorage
     *
     * Physical storage space used by volume excluding parity, given in bytes.
     *
     * @generated from field: uint64 physical_used_storage = 2;
     */
    physicalUsedStorage: bigint;
    /**
     * CompressionRatio
     *
     * compression ratio userWritten/physicalCapacity
     *
     * @generated from field: double compression_ratio = 3;
     */
    compressionRatio: number;
    /**
     * TotalCompressionRatio
     *
     * compression ratio sum(userWritten) / sum(physical capacity)
     *
     * @generated from field: double total_compression_ratio = 4;
     */
    totalCompressionRatio: number;
    /**
     * PhysicalCapacity
     *
     * The physical capacity that exists in this volume layer
     *
     * @generated from field: uint64 physical_capacity = 5;
     */
    physicalCapacity: bigint;
    /**
     * PhysicalOwnedStorageCapacity
     *
     * The capacity that would be freed when volume is deleted
     *
     * @generated from field: uint64 physical_owned_capacity = 6;
     */
    physicalOwnedCapacity: bigint;
    /**
     * PhysicalOwnedMemory
     *
     * The memory that would be freed when volume is deleted
     *
     * @generated from field: uint64 physical_owned_memory = 7;
     */
    physicalOwnedMemory: bigint;
    /**
     * PhysicalMemory
     *
     * The memory that exists for this volume
     *
     * @generated from field: uint64 physical_memory = 8;
     */
    physicalMemory: bigint;
    /**
     * UserWritten
     *
     * The amount of bytes written to this volume by the user
     *
     * @generated from field: uint64 user_written = 9;
     */
    userWritten: bigint;
    /**
     * UnrecoverableDataIntegrityErrors
     *
     * Number of data integrity errors that could no be recovered by the system.
     *
     * @generated from field: uint32 unrecoverable_data_integrity_errors = 10;
     */
    unrecoverableDataIntegrityErrors: number;
    /**
     * RecoverableDataIntegrityErrors
     *
     * Number of data integrity errors that were recovered by the system.
     *
     * @generated from field: uint32 recoverable_data_integrity_errors = 12;
     */
    recoverableDataIntegrityErrors: number;
    constructor(data?: PartialMessage<VolumeStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.VolumeStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeStatistics;
    static equals(a: VolumeStatistics | PlainMessage<VolumeStatistics> | undefined, b: VolumeStatistics | PlainMessage<VolumeStatistics> | undefined): boolean;
}
/**
 * Snapshot is a unit of block storage create as a point in time block copy of a volume
 *
 * @generated from message api.v1.Snapshot
 */
export declare class Snapshot extends Message<Snapshot> {
    /**
     * Uuid is the unique identifier of the snapshot
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Name of the snapshot
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Description of this snapshot
     *
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * Project this snapshot belongs to
     *
     * @generated from field: string project = 4;
     */
    project: string;
    /**
     * Partition where this snapshot resides
     *
     * @generated from field: string partition = 5;
     */
    partition: string;
    /**
     * StorageClass where this snapshot is created
     *
     * @generated from field: string storage_class = 6;
     */
    storageClass: string;
    /**
     * Size in bytes of the snapshot
     *
     * @generated from field: uint64 size = 7;
     */
    size: bigint;
    /**
     * Usage in bytes of the snapshot
     *
     * @generated from field: uint64 usage = 8;
     */
    usage: bigint;
    /**
     * State of the snapshot
     *
     * @generated from field: string state = 9;
     */
    state: string;
    /**
     * SourceVolumeUuid is the uuid of the snapshot this snapshot was created from
     *
     * @generated from field: string source_volume_uuid = 10;
     */
    sourceVolumeUuid: string;
    /**
     * SourceVolumeName is the name of the snapshot this snapshot was created from
     *
     * @generated from field: string source_volume_name = 11;
     */
    sourceVolumeName: string;
    /**
     * ReplicaCount shows how many replicas of this snapshot exist
     *
     * @generated from field: uint32 replica_count = 12;
     */
    replicaCount: number;
    /**
     * PrimaryNodeUuid is the uuid of the storage server node where the primary replica of this snapshot resides
     *
     * @generated from field: string primary_node_uuid = 13;
     */
    primaryNodeUuid: string;
    /**
     * Retention is the duration after creation, after which this snapshot will be deleted
     *
     * @generated from field: google.protobuf.Duration retention = 14;
     */
    retention?: Duration;
    /**
     * SnapshotStatistics are only visible to admins
     *
     * @generated from field: api.v1.SnapshotStatistics statistics = 15;
     */
    statistics?: SnapshotStatistics;
    /**
     * CreatedAt is the date when this snapshot was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 20;
     */
    createdAt?: Timestamp;
    constructor(data?: PartialMessage<Snapshot>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Snapshot";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Snapshot;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Snapshot;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Snapshot;
    static equals(a: Snapshot | PlainMessage<Snapshot> | undefined, b: Snapshot | PlainMessage<Snapshot> | undefined): boolean;
}
/**
 * SnapshotStatistics are all detailed statistics of a snapshot
 *
 * @generated from message api.v1.SnapshotStatistics
 */
export declare class SnapshotStatistics extends Message<SnapshotStatistics> {
    /**
     * PhysicalCapacity
     *
     * The physical capacity that exists in this snapshot layer
     *
     * @generated from field: uint64 physical_capacity = 1;
     */
    physicalCapacity: bigint;
    /**
     * PhysicalOwnedStorageCapacity
     *
     * The capacity that would be freed when snapshot is deleted
     *
     * @generated from field: uint64 physical_owned_capacity = 2;
     */
    physicalOwnedCapacity: bigint;
    /**
     * PhysicalOwnedMemory
     *
     * The memory that would be freed when snapshot is deleted
     *
     * @generated from field: uint64 physical_owned_memory = 3;
     */
    physicalOwnedMemory: bigint;
    /**
     * PhysicalMemory
     *
     * The memory that exists for this snapshot
     *
     * @generated from field: uint64 physical_memory = 4;
     */
    physicalMemory: bigint;
    /**
     * UserWritten
     *
     * The amount of bytes written to this snapshot by the user
     *
     * @generated from field: uint64 user_written = 5;
     */
    userWritten: bigint;
    constructor(data?: PartialMessage<SnapshotStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.SnapshotStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotStatistics;
    static equals(a: SnapshotStatistics | PlainMessage<SnapshotStatistics> | undefined, b: SnapshotStatistics | PlainMessage<SnapshotStatistics> | undefined): boolean;
}
/**
 * VolumeServiceGetRequest is the request payload of the volume get request
 *
 * @generated from message api.v1.VolumeServiceGetRequest
 */
export declare class VolumeServiceGetRequest extends Message<VolumeServiceGetRequest> {
    /**
     * Uuid of the volume
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Project of the volume
     *
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<VolumeServiceGetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.VolumeServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceGetRequest;
    static equals(a: VolumeServiceGetRequest | PlainMessage<VolumeServiceGetRequest> | undefined, b: VolumeServiceGetRequest | PlainMessage<VolumeServiceGetRequest> | undefined): boolean;
}
/**
 * VolumeServiceListRequest is the request payload of a volume list request
 *
 * @generated from message api.v1.VolumeServiceListRequest
 */
export declare class VolumeServiceListRequest extends Message<VolumeServiceListRequest> {
    /**
     * Uuid of the volume
     *
     * @generated from field: optional string uuid = 1;
     */
    uuid?: string;
    /**
     * Project of the volume
     *
     * @generated from field: string project = 2;
     */
    project: string;
    /**
     * Partition where the volumes should be listed
     *
     * @generated from field: optional string partition = 3;
     */
    partition?: string;
    /**
     * Name of the volume
     *
     * @generated from field: optional string name = 4;
     */
    name?: string;
    constructor(data?: PartialMessage<VolumeServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.VolumeServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceListRequest;
    static equals(a: VolumeServiceListRequest | PlainMessage<VolumeServiceListRequest> | undefined, b: VolumeServiceListRequest | PlainMessage<VolumeServiceListRequest> | undefined): boolean;
}
/**
 * VolumeServiceDeleteRequest is the request payload of a volume delete request
 *
 * @generated from message api.v1.VolumeServiceDeleteRequest
 */
export declare class VolumeServiceDeleteRequest extends Message<VolumeServiceDeleteRequest> {
    /**
     * Uuid of the volume
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Project of the volume
     *
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<VolumeServiceDeleteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.VolumeServiceDeleteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceDeleteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceDeleteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceDeleteRequest;
    static equals(a: VolumeServiceDeleteRequest | PlainMessage<VolumeServiceDeleteRequest> | undefined, b: VolumeServiceDeleteRequest | PlainMessage<VolumeServiceDeleteRequest> | undefined): boolean;
}
/**
 * VolumeServiceUpdateRequest is the request payload of a volume update request
 *
 * @generated from message api.v1.VolumeServiceUpdateRequest
 */
export declare class VolumeServiceUpdateRequest extends Message<VolumeServiceUpdateRequest> {
    /**
     * Uuid of the volume
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Project of the volume
     *
     * @generated from field: string project = 2;
     */
    project: string;
    /**
     * Labels stored in the volume
     *
     * @generated from field: repeated api.v1.VolumeLabel labels = 24;
     */
    labels: VolumeLabel[];
    constructor(data?: PartialMessage<VolumeServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.VolumeServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceUpdateRequest;
    static equals(a: VolumeServiceUpdateRequest | PlainMessage<VolumeServiceUpdateRequest> | undefined, b: VolumeServiceUpdateRequest | PlainMessage<VolumeServiceUpdateRequest> | undefined): boolean;
}
/**
 * SnapshotServiceGetRequest is the request payload of a snapshot list request
 *
 * @generated from message api.v1.SnapshotServiceGetRequest
 */
export declare class SnapshotServiceGetRequest extends Message<SnapshotServiceGetRequest> {
    /**
     * Uuid of the snapshot
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Project of the snapshot
     *
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<SnapshotServiceGetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.SnapshotServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceGetRequest;
    static equals(a: SnapshotServiceGetRequest | PlainMessage<SnapshotServiceGetRequest> | undefined, b: SnapshotServiceGetRequest | PlainMessage<SnapshotServiceGetRequest> | undefined): boolean;
}
/**
 * SnapshotServiceListRequest is the request payload of a snapshot list request
 *
 * @generated from message api.v1.SnapshotServiceListRequest
 */
export declare class SnapshotServiceListRequest extends Message<SnapshotServiceListRequest> {
    /**
     * Uuid of the snapshot
     *
     * @generated from field: optional string uuid = 1;
     */
    uuid?: string;
    /**
     * Project of the snapshot
     *
     * @generated from field: string project = 2;
     */
    project: string;
    /**
     * Partition where the snapshots should be listed
     *
     * @generated from field: optional string partition = 3;
     */
    partition?: string;
    /**
     * Name of the snapshot
     *
     * @generated from field: optional string name = 4;
     */
    name?: string;
    constructor(data?: PartialMessage<SnapshotServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.SnapshotServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceListRequest;
    static equals(a: SnapshotServiceListRequest | PlainMessage<SnapshotServiceListRequest> | undefined, b: SnapshotServiceListRequest | PlainMessage<SnapshotServiceListRequest> | undefined): boolean;
}
/**
 * SnapshotServiceDeleteRequest is the request payload of a snapshot delete request
 *
 * @generated from message api.v1.SnapshotServiceDeleteRequest
 */
export declare class SnapshotServiceDeleteRequest extends Message<SnapshotServiceDeleteRequest> {
    /**
     * Uuid of the snapshot
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Project of the snapshot
     *
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<SnapshotServiceDeleteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.SnapshotServiceDeleteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceDeleteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceDeleteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceDeleteRequest;
    static equals(a: SnapshotServiceDeleteRequest | PlainMessage<SnapshotServiceDeleteRequest> | undefined, b: SnapshotServiceDeleteRequest | PlainMessage<SnapshotServiceDeleteRequest> | undefined): boolean;
}
/**
 * VolumeServiceGetResponse is the response payload of a volume get request
 *
 * @generated from message api.v1.VolumeServiceGetResponse
 */
export declare class VolumeServiceGetResponse extends Message<VolumeServiceGetResponse> {
    /**
     * Volume the volume
     *
     * @generated from field: api.v1.Volume volume = 1;
     */
    volume?: Volume;
    constructor(data?: PartialMessage<VolumeServiceGetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.VolumeServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceGetResponse;
    static equals(a: VolumeServiceGetResponse | PlainMessage<VolumeServiceGetResponse> | undefined, b: VolumeServiceGetResponse | PlainMessage<VolumeServiceGetResponse> | undefined): boolean;
}
/**
 * VolumeServiceListResponse is the response payload of a volume list request
 *
 * @generated from message api.v1.VolumeServiceListResponse
 */
export declare class VolumeServiceListResponse extends Message<VolumeServiceListResponse> {
    /**
     * Volumes the volumes
     *
     * @generated from field: repeated api.v1.Volume volumes = 1;
     */
    volumes: Volume[];
    constructor(data?: PartialMessage<VolumeServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.VolumeServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceListResponse;
    static equals(a: VolumeServiceListResponse | PlainMessage<VolumeServiceListResponse> | undefined, b: VolumeServiceListResponse | PlainMessage<VolumeServiceListResponse> | undefined): boolean;
}
/**
 * VolumeServiceDeleteResponse is the response payload of a volume delete request
 *
 * @generated from message api.v1.VolumeServiceDeleteResponse
 */
export declare class VolumeServiceDeleteResponse extends Message<VolumeServiceDeleteResponse> {
    /**
     * Volume the volume
     *
     * @generated from field: api.v1.Volume volume = 1;
     */
    volume?: Volume;
    constructor(data?: PartialMessage<VolumeServiceDeleteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.VolumeServiceDeleteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceDeleteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceDeleteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceDeleteResponse;
    static equals(a: VolumeServiceDeleteResponse | PlainMessage<VolumeServiceDeleteResponse> | undefined, b: VolumeServiceDeleteResponse | PlainMessage<VolumeServiceDeleteResponse> | undefined): boolean;
}
/**
 * VolumeServiceUpdateResponse is the response payload of a volume update request
 *
 * @generated from message api.v1.VolumeServiceUpdateResponse
 */
export declare class VolumeServiceUpdateResponse extends Message<VolumeServiceUpdateResponse> {
    /**
     * Volume the volume
     *
     * @generated from field: api.v1.Volume volume = 1;
     */
    volume?: Volume;
    constructor(data?: PartialMessage<VolumeServiceUpdateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.VolumeServiceUpdateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceUpdateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceUpdateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceUpdateResponse;
    static equals(a: VolumeServiceUpdateResponse | PlainMessage<VolumeServiceUpdateResponse> | undefined, b: VolumeServiceUpdateResponse | PlainMessage<VolumeServiceUpdateResponse> | undefined): boolean;
}
/**
 * SnapshotServiceGetResponse is the response payload of a snapshot get request
 *
 * @generated from message api.v1.SnapshotServiceGetResponse
 */
export declare class SnapshotServiceGetResponse extends Message<SnapshotServiceGetResponse> {
    /**
     * Snapshot the snapshot
     *
     * @generated from field: api.v1.Snapshot snapshot = 1;
     */
    snapshot?: Snapshot;
    constructor(data?: PartialMessage<SnapshotServiceGetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.SnapshotServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceGetResponse;
    static equals(a: SnapshotServiceGetResponse | PlainMessage<SnapshotServiceGetResponse> | undefined, b: SnapshotServiceGetResponse | PlainMessage<SnapshotServiceGetResponse> | undefined): boolean;
}
/**
 * SnapshotServiceListResponse is the response payload of a snapshot list request
 *
 * @generated from message api.v1.SnapshotServiceListResponse
 */
export declare class SnapshotServiceListResponse extends Message<SnapshotServiceListResponse> {
    /**
     * Snapshots the snapshots
     *
     * @generated from field: repeated api.v1.Snapshot snapshots = 1;
     */
    snapshots: Snapshot[];
    constructor(data?: PartialMessage<SnapshotServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.SnapshotServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceListResponse;
    static equals(a: SnapshotServiceListResponse | PlainMessage<SnapshotServiceListResponse> | undefined, b: SnapshotServiceListResponse | PlainMessage<SnapshotServiceListResponse> | undefined): boolean;
}
/**
 * SnapshotServiceDeleteResponse is the response payload of a snapshot delete request
 *
 * @generated from message api.v1.SnapshotServiceDeleteResponse
 */
export declare class SnapshotServiceDeleteResponse extends Message<SnapshotServiceDeleteResponse> {
    /**
     * Snapshot the snapshot
     *
     * @generated from field: api.v1.Snapshot snapshot = 1;
     */
    snapshot?: Snapshot;
    constructor(data?: PartialMessage<SnapshotServiceDeleteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.SnapshotServiceDeleteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceDeleteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceDeleteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceDeleteResponse;
    static equals(a: SnapshotServiceDeleteResponse | PlainMessage<SnapshotServiceDeleteResponse> | undefined, b: SnapshotServiceDeleteResponse | PlainMessage<SnapshotServiceDeleteResponse> | undefined): boolean;
}
