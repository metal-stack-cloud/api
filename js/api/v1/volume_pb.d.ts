import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
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
 * UpdateVolumeLabels allows updating the labels
 *
 * @generated from message api.v1.UpdateVolumeLabels
 */
export type UpdateVolumeLabels = Message<"api.v1.UpdateVolumeLabels"> & {
    /**
     * Update volume labels. New ones will be added, existing ones overwritten
     *
     * @generated from field: repeated api.v1.VolumeLabel update = 1;
     */
    update: VolumeLabel[];
    /**
     * Remove volume labels
     *
     * @generated from field: repeated string remove = 2;
     */
    remove: string[];
};
/**
 * Describes the message api.v1.UpdateVolumeLabels.
 * Use `create(UpdateVolumeLabelsSchema)` to create a new message.
 */
export declare const UpdateVolumeLabelsSchema: GenMessage<UpdateVolumeLabels>;
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
     * Update Volume Labels stored in the volume. Some labels are immutable and cannot be changed.
     *
     * @generated from field: optional api.v1.UpdateVolumeLabels labels = 24;
     */
    labels?: UpdateVolumeLabels;
};
/**
 * Describes the message api.v1.VolumeServiceUpdateRequest.
 * Use `create(VolumeServiceUpdateRequestSchema)` to create a new message.
 */
export declare const VolumeServiceUpdateRequestSchema: GenMessage<VolumeServiceUpdateRequest>;
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
