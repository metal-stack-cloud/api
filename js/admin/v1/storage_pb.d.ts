import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Snapshot, Volume } from "../../api/v1/volume_pb.js";
/**
 * StorageServiceClusterInfoRequest is the request payload for the cluster info request
 *
 * @generated from message admin.v1.StorageServiceClusterInfoRequest
 */
export declare class StorageServiceClusterInfoRequest extends Message<StorageServiceClusterInfoRequest> {
    /**
     * Partition for which the cluster info should be returned
     *
     * @generated from field: optional string partition = 1;
     */
    partition?: string;
    constructor(data?: PartialMessage<StorageServiceClusterInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.StorageServiceClusterInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServiceClusterInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServiceClusterInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServiceClusterInfoRequest;
    static equals(a: StorageServiceClusterInfoRequest | PlainMessage<StorageServiceClusterInfoRequest> | undefined, b: StorageServiceClusterInfoRequest | PlainMessage<StorageServiceClusterInfoRequest> | undefined): boolean;
}
/**
 * StorageServiceClusterInfoResponse is the response payload for the cluster info request
 *
 * @generated from message admin.v1.StorageServiceClusterInfoResponse
 */
export declare class StorageServiceClusterInfoResponse extends Message<StorageServiceClusterInfoResponse> {
    /**
     * Infos about the storage systems
     *
     * @generated from field: repeated admin.v1.StorageClusterInfo infos = 1;
     */
    infos: StorageClusterInfo[];
    constructor(data?: PartialMessage<StorageServiceClusterInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.StorageServiceClusterInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServiceClusterInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServiceClusterInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServiceClusterInfoResponse;
    static equals(a: StorageServiceClusterInfoResponse | PlainMessage<StorageServiceClusterInfoResponse> | undefined, b: StorageServiceClusterInfoResponse | PlainMessage<StorageServiceClusterInfoResponse> | undefined): boolean;
}
/**
 * StorageClusterInfo represents details about a storage system
 *
 * @generated from message admin.v1.StorageClusterInfo
 */
export declare class StorageClusterInfo extends Message<StorageClusterInfo> {
    /**
     * Partition where this storage system is present
     *
     * @generated from field: string partition = 1;
     */
    partition: string;
    /**
     * Uuid of this storage system
     *
     * @generated from field: string uuid = 2;
     */
    uuid: string;
    /**
     * SubsystemNqn is the subsystem nqn
     *
     * @generated from field: string subsystem_nqn = 3;
     */
    subsystemNqn: string;
    /**
     * CurrentMaxReplicas defines how many replicas a volume can have currently
     *
     * @generated from field: uint32 current_max_replicas = 4;
     */
    currentMaxReplicas: number;
    /**
     * SupportedMaxReplicas defines how many replicas a volume can have at max
     *
     * @generated from field: uint32 supported_max_replicas = 5;
     */
    supportedMaxReplicas: number;
    /**
     * Statistics of the storage system
     *
     * @generated from field: admin.v1.ClusterStatisticsApi statistics = 6;
     */
    statistics?: ClusterStatisticsApi;
    /**
     * Health of the storage system
     *
     * @generated from field: admin.v1.ClusterHealth health = 7;
     */
    health?: ClusterHealth;
    /**
     * MinVersionInCluster is the minimum server version in this cluster
     *
     * @generated from field: string min_version_in_cluster = 8;
     */
    minVersionInCluster: string;
    /**
     * MinAllowedVersion is the minimum possible server version in this cluster
     *
     * @generated from field: string min_allowed_version = 9;
     */
    minAllowedVersion: string;
    /**
     * MaxAllowedVersion is the maximum possible server version in this cluster
     *
     * @generated from field: string max_allowed_version = 10;
     */
    maxAllowedVersion: string;
    /**
     * ApiEndpoints is a list of ips of all api endpoints this cluster has
     *
     * @generated from field: repeated string api_endpoints = 11;
     */
    apiEndpoints: string[];
    /**
     * DiscoveryEndpoints is a list of ips of all discovery endpoints this cluster has
     *
     * @generated from field: repeated string discovery_endpoints = 12;
     */
    discoveryEndpoints: string[];
    /**
     * Servers is a list of storage servers in this storage system
     *
     * @generated from field: repeated admin.v1.StorageServerInfo servers = 13;
     */
    servers: StorageServerInfo[];
    constructor(data?: PartialMessage<StorageClusterInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.StorageClusterInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageClusterInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageClusterInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageClusterInfo;
    static equals(a: StorageClusterInfo | PlainMessage<StorageClusterInfo> | undefined, b: StorageClusterInfo | PlainMessage<StorageClusterInfo> | undefined): boolean;
}
/**
 * StorageServerInfo contains details about a single storage server
 *
 * @generated from message admin.v1.StorageServerInfo
 */
export declare class StorageServerInfo extends Message<StorageServerInfo> {
    /**
     * Uuid of this server
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Name of this server
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * RiskOfServiceLossState describes the risk of service loss
     *
     * @generated from field: string risk_of_service_loss_state = 3;
     */
    riskOfServiceLossState: string;
    /**
     * State of this server
     *
     * @generated from field: string state = 4;
     */
    state: string;
    /**
     * ServerEndpoints is a list of ips this server offers
     *
     * @generated from field: repeated string server_endpoints = 5;
     */
    serverEndpoints: string[];
    /**
     * LightOsVersion is the version of the storage server version
     *
     * @generated from field: string light_os_version = 6;
     */
    lightOsVersion: string;
    constructor(data?: PartialMessage<StorageServerInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.StorageServerInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServerInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServerInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServerInfo;
    static equals(a: StorageServerInfo | PlainMessage<StorageServerInfo> | undefined, b: StorageServerInfo | PlainMessage<StorageServerInfo> | undefined): boolean;
}
/**
 * ClusterHealth the health of the cluster
 *
 * @generated from message admin.v1.ClusterHealth
 */
export declare class ClusterHealth extends Message<ClusterHealth> {
    /**
     * State of the cluster
     *
     * @generated from field: string state = 1;
     */
    state: string;
    /**
     * NumDegradedVolumes is the number of degraded volumes
     *
     * @generated from field: uint32 num_degraded_volumes = 2;
     */
    numDegradedVolumes: number;
    /**
     * NumReadonlyVolumes is the number of read only volumes
     *
     * @generated from field: uint32 num_read_only_volumes = 3;
     */
    numReadOnlyVolumes: number;
    /**
     * NumNotAvailableVolumes is the number of not available volumes
     *
     * @generated from field: uint32 num_not_available_volumes = 4;
     */
    numNotAvailableVolumes: number;
    /**
     * NumInactiveVolumes is the number of inactive volumes
     *
     * @generated from field: uint32 num_inactive_nodes = 5;
     */
    numInactiveNodes: number;
    constructor(data?: PartialMessage<ClusterHealth>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ClusterHealth";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterHealth;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterHealth;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterHealth;
    static equals(a: ClusterHealth | PlainMessage<ClusterHealth> | undefined, b: ClusterHealth | PlainMessage<ClusterHealth> | undefined): boolean;
}
/**
 * ClusterStatisticsApi detailed statistics of the storage cluster
 *
 * @generated from message admin.v1.ClusterStatisticsApi
 */
export declare class ClusterStatisticsApi extends Message<ClusterStatisticsApi> {
    /**
     * Installed Physical Storage
     *
     * All installed SSDs capacities over all servers in cluster, given in bytes.
     *
     * @generated from field: uint64 installed_physical_storage = 1;
     */
    installedPhysicalStorage: bigint;
    /**
     * Total Attached Physical Storage
     *
     * Sum of all managed and healthy SSDs capacities, given in bytes.
     *
     * @generated from field: uint64 managed_physical_storage = 2;
     */
    managedPhysicalStorage: bigint;
    /**
     * Effective Physical Storage
     *
     * Effective Physical storage excluding overhead of OVP and Parity, given in bytes.
     *
     * @generated from field: uint64 effective_physical_storage = 3;
     */
    effectivePhysicalStorage: bigint;
    /**
     * Logical Storage
     *
     * Sum of capacities of all allocated volumes, given in bytes.
     *
     * @generated from field: uint64 logical_storage = 4;
     */
    logicalStorage: bigint;
    /**
     * Logical Used Storage
     *
     * Logical storage space used by all volumes (n of LBAs x 4096), given in bytes.
     *
     * @generated from field: uint64 logical_used_storage = 5;
     */
    logicalUsedStorage: bigint;
    /**
     * Physical Used Storage Excluding Parity
     *
     * Physical storage space occupied by all volumes (data only), given in bytes.
     *
     * @generated from field: uint64 physical_used_storage = 6;
     */
    physicalUsedStorage: bigint;
    /**
     * Physical Used Storage
     *
     * Physical storage space occupied by all data including Parity overhead when EC enabled (physical n*disks/(n*disks -1)), given in bytes.
     *
     * @generated from field: uint64 physical_used_storage_including_parity = 7;
     */
    physicalUsedStorageIncludingParity: bigint;
    /**
     * Free Physical Storage
     *
     * Free storage before entering to read-only mode , given in bytes.
     *
     * @generated from field: uint64 free_physical_storage = 8;
     */
    freePhysicalStorage: bigint;
    /**
     * Estimated Free Logical Storage
     *
     * Estimated free storage before entering to read-only mode assuming current compression ratio, given in bytes.
     *
     * @generated from field: uint64 estimated_free_logical_storage = 9;
     */
    estimatedFreeLogicalStorage: bigint;
    /**
     * Estimated Total Available Logical Storage
     *
     * Estimate of total available logical storage based on current compression ratio (effective * compression)
     *
     * @generated from field: uint64 estimated_logical_storage = 10;
     */
    estimatedLogicalStorage: bigint;
    /**
     * compression ratio
     *
     * compression ratio logicalUsedStorage/physicalUsedStorage
     *
     * @generated from field: double compression_ratio = 11;
     */
    compressionRatio: number;
    constructor(data?: PartialMessage<ClusterStatisticsApi>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ClusterStatisticsApi";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterStatisticsApi;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterStatisticsApi;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterStatisticsApi;
    static equals(a: ClusterStatisticsApi | PlainMessage<ClusterStatisticsApi> | undefined, b: ClusterStatisticsApi | PlainMessage<ClusterStatisticsApi> | undefined): boolean;
}
/**
 * StorageServiceListVolumesRequest is the request payload for the volume list request
 *
 * @generated from message admin.v1.StorageServiceListVolumesRequest
 */
export declare class StorageServiceListVolumesRequest extends Message<StorageServiceListVolumesRequest> {
    /**
     * Uuid is the uuid of the volume to list
     *
     * @generated from field: optional string uuid = 1;
     */
    uuid?: string;
    /**
     * Project is the project of the volume to list
     *
     * @generated from field: optional string project = 2;
     */
    project?: string;
    /**
     * Partition is the partition of the volume to list
     *
     * @generated from field: optional string partition = 3;
     */
    partition?: string;
    /**
     * Name is the name of the volume to list
     *
     * @generated from field: optional string name = 4;
     */
    name?: string;
    /**
     * Tenant is the tenant of the volume to list
     *
     * @generated from field: optional string tenant = 5;
     */
    tenant?: string;
    constructor(data?: PartialMessage<StorageServiceListVolumesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.StorageServiceListVolumesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServiceListVolumesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServiceListVolumesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServiceListVolumesRequest;
    static equals(a: StorageServiceListVolumesRequest | PlainMessage<StorageServiceListVolumesRequest> | undefined, b: StorageServiceListVolumesRequest | PlainMessage<StorageServiceListVolumesRequest> | undefined): boolean;
}
/**
 * StorageServiceListVolumesResponse is the response payload for the volume list request
 *
 * @generated from message admin.v1.StorageServiceListVolumesResponse
 */
export declare class StorageServiceListVolumesResponse extends Message<StorageServiceListVolumesResponse> {
    /**
     * Volumes is the list of volumes
     *
     * @generated from field: repeated api.v1.Volume volumes = 1;
     */
    volumes: Volume[];
    constructor(data?: PartialMessage<StorageServiceListVolumesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.StorageServiceListVolumesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServiceListVolumesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServiceListVolumesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServiceListVolumesResponse;
    static equals(a: StorageServiceListVolumesResponse | PlainMessage<StorageServiceListVolumesResponse> | undefined, b: StorageServiceListVolumesResponse | PlainMessage<StorageServiceListVolumesResponse> | undefined): boolean;
}
/**
 * StorageServiceListVolumesRequest is the request payload for the snapshot list request
 *
 * @generated from message admin.v1.StorageServiceListSnapshotsRequest
 */
export declare class StorageServiceListSnapshotsRequest extends Message<StorageServiceListSnapshotsRequest> {
    /**
     * Uuid is the uuid of the snapshot to list
     *
     * @generated from field: optional string uuid = 1;
     */
    uuid?: string;
    /**
     * Project is the project of the snapshot to list
     *
     * @generated from field: optional string project = 2;
     */
    project?: string;
    /**
     * Partition is the partition of the snapshot to list
     *
     * @generated from field: optional string partition = 3;
     */
    partition?: string;
    /**
     * Name is the name of the snapshot to list
     *
     * @generated from field: optional string name = 4;
     */
    name?: string;
    /**
     * Tenant is the tenant of the snapshot to list
     *
     * @generated from field: optional string tenant = 5;
     */
    tenant?: string;
    constructor(data?: PartialMessage<StorageServiceListSnapshotsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.StorageServiceListSnapshotsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServiceListSnapshotsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServiceListSnapshotsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServiceListSnapshotsRequest;
    static equals(a: StorageServiceListSnapshotsRequest | PlainMessage<StorageServiceListSnapshotsRequest> | undefined, b: StorageServiceListSnapshotsRequest | PlainMessage<StorageServiceListSnapshotsRequest> | undefined): boolean;
}
/**
 * StorageServiceListSnapshotsResponse is the response payload for the snapshot list request
 *
 * @generated from message admin.v1.StorageServiceListSnapshotsResponse
 */
export declare class StorageServiceListSnapshotsResponse extends Message<StorageServiceListSnapshotsResponse> {
    /**
     * Snapshots is the list of snapshots
     *
     * @generated from field: repeated api.v1.Snapshot snapshots = 1;
     */
    snapshots: Snapshot[];
    constructor(data?: PartialMessage<StorageServiceListSnapshotsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.StorageServiceListSnapshotsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServiceListSnapshotsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServiceListSnapshotsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServiceListSnapshotsResponse;
    static equals(a: StorageServiceListSnapshotsResponse | PlainMessage<StorageServiceListSnapshotsResponse> | undefined, b: StorageServiceListSnapshotsResponse | PlainMessage<StorageServiceListSnapshotsResponse> | undefined): boolean;
}
