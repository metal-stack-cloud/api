import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file api/v1/volume.proto.
 */
export declare const file_api_v1_volume: GenFile;
/**
 * Volume is a unit of block storage
 *
 * @generated from message api.v1.Volume
 */
export type Volume = Message<"api.v1.Volume"> & {
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
};
/**
 * Describes the message api.v1.Volume.
 * Use `create(VolumeSchema)` to create a new message.
 */
export declare const VolumeSchema: GenMessage<Volume>;
/**
 * label-key and label-value length must be between 1 and 253 characters and
 * may contain any of: alphanumeric characters (a-z, A-Z, 0-9), hyphen (-),
 * underscore (_) and dot (.).
 *
 * @generated from message api.v1.VolumeLabel
 */
export type VolumeLabel = Message<"api.v1.VolumeLabel"> & {
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
};
/**
 * Describes the message api.v1.VolumeLabel.
 * Use `create(VolumeLabelSchema)` to create a new message.
 */
export declare const VolumeLabelSchema: GenMessage<VolumeLabel>;
/**
 * VolumeStatistics are all detailed statistics of a volume
 *
 * @generated from message api.v1.VolumeStatistics
 */
export type VolumeStatistics = Message<"api.v1.VolumeStatistics"> & {
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
};
/**
 * Describes the message api.v1.VolumeStatistics.
 * Use `create(VolumeStatisticsSchema)` to create a new message.
 */
export declare const VolumeStatisticsSchema: GenMessage<VolumeStatistics>;
/**
 * Snapshot is a unit of block storage create as a point in time block copy of a volume
 *
 * @generated from message api.v1.Snapshot
 */
export type Snapshot = Message<"api.v1.Snapshot"> & {
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
};
/**
 * Describes the message api.v1.Snapshot.
 * Use `create(SnapshotSchema)` to create a new message.
 */
export declare const SnapshotSchema: GenMessage<Snapshot>;
/**
 * SnapshotStatistics are all detailed statistics of a snapshot
 *
 * @generated from message api.v1.SnapshotStatistics
 */
export type SnapshotStatistics = Message<"api.v1.SnapshotStatistics"> & {
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
};
/**
 * Describes the message api.v1.SnapshotStatistics.
 * Use `create(SnapshotStatisticsSchema)` to create a new message.
 */
export declare const SnapshotStatisticsSchema: GenMessage<SnapshotStatistics>;
/**
 * VolumeServiceGetRequest is the request payload of the volume get request
 *
 * @generated from message api.v1.VolumeServiceGetRequest
 */
export type VolumeServiceGetRequest = Message<"api.v1.VolumeServiceGetRequest"> & {
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
};
/**
 * Describes the message api.v1.VolumeServiceGetRequest.
 * Use `create(VolumeServiceGetRequestSchema)` to create a new message.
 */
export declare const VolumeServiceGetRequestSchema: GenMessage<VolumeServiceGetRequest>;
/**
 * VolumeServiceListRequest is the request payload of a volume list request
 *
 * @generated from message api.v1.VolumeServiceListRequest
 */
export type VolumeServiceListRequest = Message<"api.v1.VolumeServiceListRequest"> & {
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
};
/**
 * Describes the message api.v1.VolumeServiceListRequest.
 * Use `create(VolumeServiceListRequestSchema)` to create a new message.
 */
export declare const VolumeServiceListRequestSchema: GenMessage<VolumeServiceListRequest>;
/**
 * VolumeServiceDeleteRequest is the request payload of a volume delete request
 *
 * @generated from message api.v1.VolumeServiceDeleteRequest
 */
export type VolumeServiceDeleteRequest = Message<"api.v1.VolumeServiceDeleteRequest"> & {
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
};
/**
 * Describes the message api.v1.VolumeServiceDeleteRequest.
 * Use `create(VolumeServiceDeleteRequestSchema)` to create a new message.
 */
export declare const VolumeServiceDeleteRequestSchema: GenMessage<VolumeServiceDeleteRequest>;
/**
 * VolumeServiceUpdateRequest is the request payload of a volume update request
 *
 * @generated from message api.v1.VolumeServiceUpdateRequest
 */
export type VolumeServiceUpdateRequest = Message<"api.v1.VolumeServiceUpdateRequest"> & {
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
};
/**
 * Describes the message api.v1.VolumeServiceUpdateRequest.
 * Use `create(VolumeServiceUpdateRequestSchema)` to create a new message.
 */
export declare const VolumeServiceUpdateRequestSchema: GenMessage<VolumeServiceUpdateRequest>;
/**
 * SnapshotServiceGetRequest is the request payload of a snapshot list request
 *
 * @generated from message api.v1.SnapshotServiceGetRequest
 */
export type SnapshotServiceGetRequest = Message<"api.v1.SnapshotServiceGetRequest"> & {
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
};
/**
 * Describes the message api.v1.SnapshotServiceGetRequest.
 * Use `create(SnapshotServiceGetRequestSchema)` to create a new message.
 */
export declare const SnapshotServiceGetRequestSchema: GenMessage<SnapshotServiceGetRequest>;
/**
 * SnapshotServiceListRequest is the request payload of a snapshot list request
 *
 * @generated from message api.v1.SnapshotServiceListRequest
 */
export type SnapshotServiceListRequest = Message<"api.v1.SnapshotServiceListRequest"> & {
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
};
/**
 * Describes the message api.v1.SnapshotServiceListRequest.
 * Use `create(SnapshotServiceListRequestSchema)` to create a new message.
 */
export declare const SnapshotServiceListRequestSchema: GenMessage<SnapshotServiceListRequest>;
/**
 * SnapshotServiceDeleteRequest is the request payload of a snapshot delete request
 *
 * @generated from message api.v1.SnapshotServiceDeleteRequest
 */
export type SnapshotServiceDeleteRequest = Message<"api.v1.SnapshotServiceDeleteRequest"> & {
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
};
/**
 * Describes the message api.v1.SnapshotServiceDeleteRequest.
 * Use `create(SnapshotServiceDeleteRequestSchema)` to create a new message.
 */
export declare const SnapshotServiceDeleteRequestSchema: GenMessage<SnapshotServiceDeleteRequest>;
/**
 * VolumeServiceGetResponse is the response payload of a volume get request
 *
 * @generated from message api.v1.VolumeServiceGetResponse
 */
export type VolumeServiceGetResponse = Message<"api.v1.VolumeServiceGetResponse"> & {
    /**
     * Volume the volume
     *
     * @generated from field: api.v1.Volume volume = 1;
     */
    volume?: Volume;
};
/**
 * Describes the message api.v1.VolumeServiceGetResponse.
 * Use `create(VolumeServiceGetResponseSchema)` to create a new message.
 */
export declare const VolumeServiceGetResponseSchema: GenMessage<VolumeServiceGetResponse>;
/**
 * VolumeServiceListResponse is the response payload of a volume list request
 *
 * @generated from message api.v1.VolumeServiceListResponse
 */
export type VolumeServiceListResponse = Message<"api.v1.VolumeServiceListResponse"> & {
    /**
     * Volumes the volumes
     *
     * @generated from field: repeated api.v1.Volume volumes = 1;
     */
    volumes: Volume[];
};
/**
 * Describes the message api.v1.VolumeServiceListResponse.
 * Use `create(VolumeServiceListResponseSchema)` to create a new message.
 */
export declare const VolumeServiceListResponseSchema: GenMessage<VolumeServiceListResponse>;
/**
 * VolumeServiceDeleteResponse is the response payload of a volume delete request
 *
 * @generated from message api.v1.VolumeServiceDeleteResponse
 */
export type VolumeServiceDeleteResponse = Message<"api.v1.VolumeServiceDeleteResponse"> & {
    /**
     * Volume the volume
     *
     * @generated from field: api.v1.Volume volume = 1;
     */
    volume?: Volume;
};
/**
 * Describes the message api.v1.VolumeServiceDeleteResponse.
 * Use `create(VolumeServiceDeleteResponseSchema)` to create a new message.
 */
export declare const VolumeServiceDeleteResponseSchema: GenMessage<VolumeServiceDeleteResponse>;
/**
 * VolumeServiceUpdateResponse is the response payload of a volume update request
 *
 * @generated from message api.v1.VolumeServiceUpdateResponse
 */
export type VolumeServiceUpdateResponse = Message<"api.v1.VolumeServiceUpdateResponse"> & {
    /**
     * Volume the volume
     *
     * @generated from field: api.v1.Volume volume = 1;
     */
    volume?: Volume;
};
/**
 * Describes the message api.v1.VolumeServiceUpdateResponse.
 * Use `create(VolumeServiceUpdateResponseSchema)` to create a new message.
 */
export declare const VolumeServiceUpdateResponseSchema: GenMessage<VolumeServiceUpdateResponse>;
/**
 * SnapshotServiceGetResponse is the response payload of a snapshot get request
 *
 * @generated from message api.v1.SnapshotServiceGetResponse
 */
export type SnapshotServiceGetResponse = Message<"api.v1.SnapshotServiceGetResponse"> & {
    /**
     * Snapshot the snapshot
     *
     * @generated from field: api.v1.Snapshot snapshot = 1;
     */
    snapshot?: Snapshot;
};
/**
 * Describes the message api.v1.SnapshotServiceGetResponse.
 * Use `create(SnapshotServiceGetResponseSchema)` to create a new message.
 */
export declare const SnapshotServiceGetResponseSchema: GenMessage<SnapshotServiceGetResponse>;
/**
 * SnapshotServiceListResponse is the response payload of a snapshot list request
 *
 * @generated from message api.v1.SnapshotServiceListResponse
 */
export type SnapshotServiceListResponse = Message<"api.v1.SnapshotServiceListResponse"> & {
    /**
     * Snapshots the snapshots
     *
     * @generated from field: repeated api.v1.Snapshot snapshots = 1;
     */
    snapshots: Snapshot[];
};
/**
 * Describes the message api.v1.SnapshotServiceListResponse.
 * Use `create(SnapshotServiceListResponseSchema)` to create a new message.
 */
export declare const SnapshotServiceListResponseSchema: GenMessage<SnapshotServiceListResponse>;
/**
 * SnapshotServiceDeleteResponse is the response payload of a snapshot delete request
 *
 * @generated from message api.v1.SnapshotServiceDeleteResponse
 */
export type SnapshotServiceDeleteResponse = Message<"api.v1.SnapshotServiceDeleteResponse"> & {
    /**
     * Snapshot the snapshot
     *
     * @generated from field: api.v1.Snapshot snapshot = 1;
     */
    snapshot?: Snapshot;
};
/**
 * Describes the message api.v1.SnapshotServiceDeleteResponse.
 * Use `create(SnapshotServiceDeleteResponseSchema)` to create a new message.
 */
export declare const SnapshotServiceDeleteResponseSchema: GenMessage<SnapshotServiceDeleteResponse>;
/**
 * VolumeService serves volume related functions
 *
 * @generated from service api.v1.VolumeService
 */
export declare const VolumeService: GenService<{
    /**
     * Get a volume
     *
     * @generated from rpc api.v1.VolumeService.Get
     */
    get: {
        methodKind: "unary";
        input: typeof VolumeServiceGetRequestSchema;
        output: typeof VolumeServiceGetResponseSchema;
    };
    /**
     * List the volumes
     *
     * @generated from rpc api.v1.VolumeService.List
     */
    list: {
        methodKind: "unary";
        input: typeof VolumeServiceListRequestSchema;
        output: typeof VolumeServiceListResponseSchema;
    };
    /**
     * Delete a volume
     *
     * @generated from rpc api.v1.VolumeService.Delete
     */
    delete: {
        methodKind: "unary";
        input: typeof VolumeServiceDeleteRequestSchema;
        output: typeof VolumeServiceDeleteResponseSchema;
    };
    /**
     * Update a volume
     *
     * @generated from rpc api.v1.VolumeService.Update
     */
    update: {
        methodKind: "unary";
        input: typeof VolumeServiceUpdateRequestSchema;
        output: typeof VolumeServiceUpdateResponseSchema;
    };
}>;
/**
 * SnapshotService serves snapshot related functions
 *
 * @generated from service api.v1.SnapshotService
 */
export declare const SnapshotService: GenService<{
    /**
     * Get a snapshot
     *
     * @generated from rpc api.v1.SnapshotService.Get
     */
    get: {
        methodKind: "unary";
        input: typeof SnapshotServiceGetRequestSchema;
        output: typeof SnapshotServiceGetResponseSchema;
    };
    /**
     * List snapshots
     *
     * @generated from rpc api.v1.SnapshotService.List
     */
    list: {
        methodKind: "unary";
        input: typeof SnapshotServiceListRequestSchema;
        output: typeof SnapshotServiceListResponseSchema;
    };
    /**
     * Delete a snapshot
     *
     * @generated from rpc api.v1.SnapshotService.Delete
     */
    delete: {
        methodKind: "unary";
        input: typeof SnapshotServiceDeleteRequestSchema;
        output: typeof SnapshotServiceDeleteResponseSchema;
    };
}>;
