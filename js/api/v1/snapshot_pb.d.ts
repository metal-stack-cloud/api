import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file api/v1/snapshot.proto.
 */
export declare const file_api_v1_snapshot: GenFile;
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
