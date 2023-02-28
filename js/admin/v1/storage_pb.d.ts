import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
/**
 * @generated from message admin.v1.StorageServiceClusterInfoRequest
 */
export declare class StorageServiceClusterInfoRequest extends Message<StorageServiceClusterInfoRequest> {
    /**
     * @generated from field: optional string partition = 1;
     */
    partition?: string;
    constructor(data?: PartialMessage<StorageServiceClusterInfoRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "admin.v1.StorageServiceClusterInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServiceClusterInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServiceClusterInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServiceClusterInfoRequest;
    static equals(a: StorageServiceClusterInfoRequest | PlainMessage<StorageServiceClusterInfoRequest> | undefined, b: StorageServiceClusterInfoRequest | PlainMessage<StorageServiceClusterInfoRequest> | undefined): boolean;
}
/**
 * @generated from message admin.v1.StorageServiceClusterInfoResponse
 */
export declare class StorageServiceClusterInfoResponse extends Message<StorageServiceClusterInfoResponse> {
    /**
     * @generated from field: admin.v1.StorageClusterInfo info = 1;
     */
    info?: StorageClusterInfo;
    constructor(data?: PartialMessage<StorageServiceClusterInfoResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "admin.v1.StorageServiceClusterInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServiceClusterInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServiceClusterInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServiceClusterInfoResponse;
    static equals(a: StorageServiceClusterInfoResponse | PlainMessage<StorageServiceClusterInfoResponse> | undefined, b: StorageServiceClusterInfoResponse | PlainMessage<StorageServiceClusterInfoResponse> | undefined): boolean;
}
/**
 * @generated from message admin.v1.StorageClusterInfo
 */
export declare class StorageClusterInfo extends Message<StorageClusterInfo> {
    /**
     * @generated from field: string partition = 1;
     */
    partition: string;
    /**
     * @generated from field: string uuid = 2;
     */
    uuid: string;
    /**
     * @generated from field: string subsystem_nqn = 3;
     */
    subsystemNqn: string;
    /**
     * @generated from field: uint32 current_max_replicas = 4;
     */
    currentMaxReplicas: number;
    /**
     * @generated from field: uint32 supported_max_replicas = 5;
     */
    supportedMaxReplicas: number;
    /**
     * @generated from field: admin.v1.ClusterStatisticsApi statistics = 6;
     */
    statistics?: ClusterStatisticsApi;
    /**
     * @generated from field: admin.v1.ClusterHealth health = 7;
     */
    health?: ClusterHealth;
    /**
     * @generated from field: string min_version_in_cluster = 8;
     */
    minVersionInCluster: string;
    /**
     * @generated from field: string min_allowed_version = 9;
     */
    minAllowedVersion: string;
    /**
     * @generated from field: string max_allowed_version = 10;
     */
    maxAllowedVersion: string;
    /**
     * @generated from field: repeated string api_endpoints = 11;
     */
    apiEndpoints: string[];
    /**
     * @generated from field: repeated string discovery_endpoints = 12;
     */
    discoveryEndpoints: string[];
    /**
     * @generated from field: repeated admin.v1.StorageServerInfo servers = 13;
     */
    servers: StorageServerInfo[];
    constructor(data?: PartialMessage<StorageClusterInfo>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "admin.v1.StorageClusterInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageClusterInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageClusterInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageClusterInfo;
    static equals(a: StorageClusterInfo | PlainMessage<StorageClusterInfo> | undefined, b: StorageClusterInfo | PlainMessage<StorageClusterInfo> | undefined): boolean;
}
/**
 * @generated from message admin.v1.StorageServerInfo
 */
export declare class StorageServerInfo extends Message<StorageServerInfo> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string risk_of_service_loss_state = 3;
     */
    riskOfServiceLossState: string;
    /**
     * @generated from field: string state = 4;
     */
    state: string;
    /**
     * @generated from field: repeated string server_endpoints = 5;
     */
    serverEndpoints: string[];
    /**
     * @generated from field: string light_os_version = 6;
     */
    lightOsVersion: string;
    constructor(data?: PartialMessage<StorageServerInfo>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "admin.v1.StorageServerInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServerInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServerInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServerInfo;
    static equals(a: StorageServerInfo | PlainMessage<StorageServerInfo> | undefined, b: StorageServerInfo | PlainMessage<StorageServerInfo> | undefined): boolean;
}
/**
 * @generated from message admin.v1.ClusterHealth
 */
export declare class ClusterHealth extends Message<ClusterHealth> {
    /**
     * @generated from field: string state = 1;
     */
    state: string;
    /**
     * @generated from field: uint32 num_degraded_volumes = 2;
     */
    numDegradedVolumes: number;
    /**
     * @generated from field: uint32 num_read_only_volumes = 3;
     */
    numReadOnlyVolumes: number;
    /**
     * @generated from field: uint32 num_not_available_volumes = 4;
     */
    numNotAvailableVolumes: number;
    /**
     * @generated from field: uint32 num_inactive_nodes = 5;
     */
    numInactiveNodes: number;
    constructor(data?: PartialMessage<ClusterHealth>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "admin.v1.ClusterHealth";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterHealth;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterHealth;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterHealth;
    static equals(a: ClusterHealth | PlainMessage<ClusterHealth> | undefined, b: ClusterHealth | PlainMessage<ClusterHealth> | undefined): boolean;
}
/**
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
     * commpression ratio
     *
     * compression ratio logicalUsedStorage/physicalUsedStorage
     *
     * @generated from field: double compression_ratio = 11;
     */
    compressionRatio: number;
    constructor(data?: PartialMessage<ClusterStatisticsApi>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "admin.v1.ClusterStatisticsApi";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterStatisticsApi;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterStatisticsApi;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterStatisticsApi;
    static equals(a: ClusterStatisticsApi | PlainMessage<ClusterStatisticsApi> | undefined, b: ClusterStatisticsApi | PlainMessage<ClusterStatisticsApi> | undefined): boolean;
}
