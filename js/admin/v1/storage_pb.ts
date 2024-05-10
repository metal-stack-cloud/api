// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file admin/v1/storage.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Snapshot, Volume } from "../../api/v1/volume_pb.js";

/**
 * StorageServiceClusterInfoRequest is the request payload for the cluster info request
 *
 * @generated from message admin.v1.StorageServiceClusterInfoRequest
 */
export class StorageServiceClusterInfoRequest extends Message<StorageServiceClusterInfoRequest> {
  /**
   * Partition for which the cluster info should be returned
   *
   * @generated from field: optional string partition = 1;
   */
  partition?: string;

  constructor(data?: PartialMessage<StorageServiceClusterInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.StorageServiceClusterInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServiceClusterInfoRequest {
    return new StorageServiceClusterInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServiceClusterInfoRequest {
    return new StorageServiceClusterInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServiceClusterInfoRequest {
    return new StorageServiceClusterInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StorageServiceClusterInfoRequest | PlainMessage<StorageServiceClusterInfoRequest> | undefined, b: StorageServiceClusterInfoRequest | PlainMessage<StorageServiceClusterInfoRequest> | undefined): boolean {
    return proto3.util.equals(StorageServiceClusterInfoRequest, a, b);
  }
}

/**
 * StorageServiceClusterInfoResponse is the response payload for the cluster info request
 *
 * @generated from message admin.v1.StorageServiceClusterInfoResponse
 */
export class StorageServiceClusterInfoResponse extends Message<StorageServiceClusterInfoResponse> {
  /**
   * Infos about the storage systems
   *
   * @generated from field: repeated admin.v1.StorageClusterInfo infos = 1;
   */
  infos: StorageClusterInfo[] = [];

  constructor(data?: PartialMessage<StorageServiceClusterInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.StorageServiceClusterInfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "infos", kind: "message", T: StorageClusterInfo, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServiceClusterInfoResponse {
    return new StorageServiceClusterInfoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServiceClusterInfoResponse {
    return new StorageServiceClusterInfoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServiceClusterInfoResponse {
    return new StorageServiceClusterInfoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: StorageServiceClusterInfoResponse | PlainMessage<StorageServiceClusterInfoResponse> | undefined, b: StorageServiceClusterInfoResponse | PlainMessage<StorageServiceClusterInfoResponse> | undefined): boolean {
    return proto3.util.equals(StorageServiceClusterInfoResponse, a, b);
  }
}

/**
 * StorageClusterInfo represents details about a storage system
 *
 * @generated from message admin.v1.StorageClusterInfo
 */
export class StorageClusterInfo extends Message<StorageClusterInfo> {
  /**
   * Partition where this storage system is present
   *
   * @generated from field: string partition = 1;
   */
  partition = "";

  /**
   * Uuid of this storage system
   *
   * @generated from field: string uuid = 2;
   */
  uuid = "";

  /**
   * SubsystemNqn is the subsystem nqn
   *
   * @generated from field: string subsystem_nqn = 3;
   */
  subsystemNqn = "";

  /**
   * CurrentMaxReplicas defines how many replicas a volume can have currently
   *
   * @generated from field: uint32 current_max_replicas = 4;
   */
  currentMaxReplicas = 0;

  /**
   * SupportedMaxReplicas defines how many replicas a volume can have at max
   *
   * @generated from field: uint32 supported_max_replicas = 5;
   */
  supportedMaxReplicas = 0;

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
  minVersionInCluster = "";

  /**
   * MinAllowedVersion is the minimum possible server version in this cluster
   *
   * @generated from field: string min_allowed_version = 9;
   */
  minAllowedVersion = "";

  /**
   * MaxAllowedVersion is the maximum possible server version in this cluster
   *
   * @generated from field: string max_allowed_version = 10;
   */
  maxAllowedVersion = "";

  /**
   * ApiEndpoints is a list of ips of all api endpoints this cluster has
   *
   * @generated from field: repeated string api_endpoints = 11;
   */
  apiEndpoints: string[] = [];

  /**
   * DiscoveryEndpoints is a list of ips of all discovery endpoints this cluster has
   *
   * @generated from field: repeated string discovery_endpoints = 12;
   */
  discoveryEndpoints: string[] = [];

  /**
   * Servers is a list of storage servers in this storage system
   *
   * @generated from field: repeated admin.v1.StorageServerInfo servers = 13;
   */
  servers: StorageServerInfo[] = [];

  constructor(data?: PartialMessage<StorageClusterInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.StorageClusterInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
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

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageClusterInfo {
    return new StorageClusterInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageClusterInfo {
    return new StorageClusterInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageClusterInfo {
    return new StorageClusterInfo().fromJsonString(jsonString, options);
  }

  static equals(a: StorageClusterInfo | PlainMessage<StorageClusterInfo> | undefined, b: StorageClusterInfo | PlainMessage<StorageClusterInfo> | undefined): boolean {
    return proto3.util.equals(StorageClusterInfo, a, b);
  }
}

/**
 * StorageServerInfo contains details about a single storage server
 *
 * @generated from message admin.v1.StorageServerInfo
 */
export class StorageServerInfo extends Message<StorageServerInfo> {
  /**
   * Uuid of this server
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * Name of this server
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * RiskOfServiceLossState describes the risk of service loss
   *
   * @generated from field: string risk_of_service_loss_state = 3;
   */
  riskOfServiceLossState = "";

  /**
   * State of this server
   *
   * @generated from field: string state = 4;
   */
  state = "";

  /**
   * ServerEndpoints is a list of ips this server offers
   *
   * @generated from field: repeated string server_endpoints = 5;
   */
  serverEndpoints: string[] = [];

  /**
   * LightOsVersion is the version of the storage server version
   *
   * @generated from field: string light_os_version = 6;
   */
  lightOsVersion = "";

  constructor(data?: PartialMessage<StorageServerInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.StorageServerInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "risk_of_service_loss_state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "server_endpoints", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "light_os_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServerInfo {
    return new StorageServerInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServerInfo {
    return new StorageServerInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServerInfo {
    return new StorageServerInfo().fromJsonString(jsonString, options);
  }

  static equals(a: StorageServerInfo | PlainMessage<StorageServerInfo> | undefined, b: StorageServerInfo | PlainMessage<StorageServerInfo> | undefined): boolean {
    return proto3.util.equals(StorageServerInfo, a, b);
  }
}

/**
 * ClusterHealth the health of the cluster
 *
 * @generated from message admin.v1.ClusterHealth
 */
export class ClusterHealth extends Message<ClusterHealth> {
  /**
   * State of the cluster
   *
   * @generated from field: string state = 1;
   */
  state = "";

  /**
   * NumDegradedVolumes is the number of degraded volumes
   *
   * @generated from field: uint32 num_degraded_volumes = 2;
   */
  numDegradedVolumes = 0;

  /**
   * NumReadonlyVolumes is the number of read only volumes
   *
   * @generated from field: uint32 num_read_only_volumes = 3;
   */
  numReadOnlyVolumes = 0;

  /**
   * NumNotAvailableVolumes is the number of not available volumes
   *
   * @generated from field: uint32 num_not_available_volumes = 4;
   */
  numNotAvailableVolumes = 0;

  /**
   * NumInactiveVolumes is the number of inactive volumes
   *
   * @generated from field: uint32 num_inactive_nodes = 5;
   */
  numInactiveNodes = 0;

  constructor(data?: PartialMessage<ClusterHealth>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.ClusterHealth";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "num_degraded_volumes", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "num_read_only_volumes", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "num_not_available_volumes", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "num_inactive_nodes", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterHealth {
    return new ClusterHealth().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterHealth {
    return new ClusterHealth().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterHealth {
    return new ClusterHealth().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterHealth | PlainMessage<ClusterHealth> | undefined, b: ClusterHealth | PlainMessage<ClusterHealth> | undefined): boolean {
    return proto3.util.equals(ClusterHealth, a, b);
  }
}

/**
 * ClusterStatisticsApi detailed statistics of the storage cluster
 *
 * @generated from message admin.v1.ClusterStatisticsApi
 */
export class ClusterStatisticsApi extends Message<ClusterStatisticsApi> {
  /**
   * Installed Physical Storage
   *
   * All installed SSDs capacities over all servers in cluster, given in bytes.
   *
   * @generated from field: uint64 installed_physical_storage = 1;
   */
  installedPhysicalStorage = protoInt64.zero;

  /**
   * Total Attached Physical Storage
   *
   * Sum of all managed and healthy SSDs capacities, given in bytes.
   *
   * @generated from field: uint64 managed_physical_storage = 2;
   */
  managedPhysicalStorage = protoInt64.zero;

  /**
   * Effective Physical Storage
   *
   * Effective Physical storage excluding overhead of OVP and Parity, given in bytes.
   *
   * @generated from field: uint64 effective_physical_storage = 3;
   */
  effectivePhysicalStorage = protoInt64.zero;

  /**
   * Logical Storage
   *
   * Sum of capacities of all allocated volumes, given in bytes.
   *
   * @generated from field: uint64 logical_storage = 4;
   */
  logicalStorage = protoInt64.zero;

  /**
   * Logical Used Storage
   *
   * Logical storage space used by all volumes (n of LBAs x 4096), given in bytes.
   *
   * @generated from field: uint64 logical_used_storage = 5;
   */
  logicalUsedStorage = protoInt64.zero;

  /**
   * Physical Used Storage Excluding Parity
   *
   * Physical storage space occupied by all volumes (data only), given in bytes.
   *
   * @generated from field: uint64 physical_used_storage = 6;
   */
  physicalUsedStorage = protoInt64.zero;

  /**
   * Physical Used Storage
   *
   * Physical storage space occupied by all data including Parity overhead when EC enabled (physical n*disks/(n*disks -1)), given in bytes.
   *
   * @generated from field: uint64 physical_used_storage_including_parity = 7;
   */
  physicalUsedStorageIncludingParity = protoInt64.zero;

  /**
   * Free Physical Storage
   *
   * Free storage before entering to read-only mode , given in bytes.
   *
   * @generated from field: uint64 free_physical_storage = 8;
   */
  freePhysicalStorage = protoInt64.zero;

  /**
   * Estimated Free Logical Storage
   *
   * Estimated free storage before entering to read-only mode assuming current compression ratio, given in bytes.
   *
   * @generated from field: uint64 estimated_free_logical_storage = 9;
   */
  estimatedFreeLogicalStorage = protoInt64.zero;

  /**
   * Estimated Total Available Logical Storage
   *
   * Estimate of total available logical storage based on current compression ratio (effective * compression)
   *
   * @generated from field: uint64 estimated_logical_storage = 10;
   */
  estimatedLogicalStorage = protoInt64.zero;

  /**
   * compression ratio
   *
   * compression ratio logicalUsedStorage/physicalUsedStorage
   *
   * @generated from field: double compression_ratio = 11;
   */
  compressionRatio = 0;

  constructor(data?: PartialMessage<ClusterStatisticsApi>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.ClusterStatisticsApi";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
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

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterStatisticsApi {
    return new ClusterStatisticsApi().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterStatisticsApi {
    return new ClusterStatisticsApi().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterStatisticsApi {
    return new ClusterStatisticsApi().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterStatisticsApi | PlainMessage<ClusterStatisticsApi> | undefined, b: ClusterStatisticsApi | PlainMessage<ClusterStatisticsApi> | undefined): boolean {
    return proto3.util.equals(ClusterStatisticsApi, a, b);
  }
}

/**
 * StorageServiceListVolumesRequest is the request payload for the volume list request
 *
 * @generated from message admin.v1.StorageServiceListVolumesRequest
 */
export class StorageServiceListVolumesRequest extends Message<StorageServiceListVolumesRequest> {
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

  constructor(data?: PartialMessage<StorageServiceListVolumesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.StorageServiceListVolumesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServiceListVolumesRequest {
    return new StorageServiceListVolumesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServiceListVolumesRequest {
    return new StorageServiceListVolumesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServiceListVolumesRequest {
    return new StorageServiceListVolumesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StorageServiceListVolumesRequest | PlainMessage<StorageServiceListVolumesRequest> | undefined, b: StorageServiceListVolumesRequest | PlainMessage<StorageServiceListVolumesRequest> | undefined): boolean {
    return proto3.util.equals(StorageServiceListVolumesRequest, a, b);
  }
}

/**
 * StorageServiceListVolumesResponse is the response payload for the volume list request
 *
 * @generated from message admin.v1.StorageServiceListVolumesResponse
 */
export class StorageServiceListVolumesResponse extends Message<StorageServiceListVolumesResponse> {
  /**
   * Volumes is the list of volumes
   *
   * @generated from field: repeated api.v1.Volume volumes = 1;
   */
  volumes: Volume[] = [];

  constructor(data?: PartialMessage<StorageServiceListVolumesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.StorageServiceListVolumesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "volumes", kind: "message", T: Volume, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServiceListVolumesResponse {
    return new StorageServiceListVolumesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServiceListVolumesResponse {
    return new StorageServiceListVolumesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServiceListVolumesResponse {
    return new StorageServiceListVolumesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: StorageServiceListVolumesResponse | PlainMessage<StorageServiceListVolumesResponse> | undefined, b: StorageServiceListVolumesResponse | PlainMessage<StorageServiceListVolumesResponse> | undefined): boolean {
    return proto3.util.equals(StorageServiceListVolumesResponse, a, b);
  }
}

/**
 * StorageServiceListVolumesRequest is the request payload for the snapshot list request
 *
 * @generated from message admin.v1.StorageServiceListSnapshotsRequest
 */
export class StorageServiceListSnapshotsRequest extends Message<StorageServiceListSnapshotsRequest> {
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

  constructor(data?: PartialMessage<StorageServiceListSnapshotsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.StorageServiceListSnapshotsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServiceListSnapshotsRequest {
    return new StorageServiceListSnapshotsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServiceListSnapshotsRequest {
    return new StorageServiceListSnapshotsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServiceListSnapshotsRequest {
    return new StorageServiceListSnapshotsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StorageServiceListSnapshotsRequest | PlainMessage<StorageServiceListSnapshotsRequest> | undefined, b: StorageServiceListSnapshotsRequest | PlainMessage<StorageServiceListSnapshotsRequest> | undefined): boolean {
    return proto3.util.equals(StorageServiceListSnapshotsRequest, a, b);
  }
}

/**
 * StorageServiceListSnapshotsResponse is the response payload for the snapshot list request
 *
 * @generated from message admin.v1.StorageServiceListSnapshotsResponse
 */
export class StorageServiceListSnapshotsResponse extends Message<StorageServiceListSnapshotsResponse> {
  /**
   * Snapshots is the list of snapshots
   *
   * @generated from field: repeated api.v1.Snapshot snapshots = 1;
   */
  snapshots: Snapshot[] = [];

  constructor(data?: PartialMessage<StorageServiceListSnapshotsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.StorageServiceListSnapshotsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "snapshots", kind: "message", T: Snapshot, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageServiceListSnapshotsResponse {
    return new StorageServiceListSnapshotsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageServiceListSnapshotsResponse {
    return new StorageServiceListSnapshotsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageServiceListSnapshotsResponse {
    return new StorageServiceListSnapshotsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: StorageServiceListSnapshotsResponse | PlainMessage<StorageServiceListSnapshotsResponse> | undefined, b: StorageServiceListSnapshotsResponse | PlainMessage<StorageServiceListSnapshotsResponse> | undefined): boolean {
    return proto3.util.equals(StorageServiceListSnapshotsResponse, a, b);
  }
}

