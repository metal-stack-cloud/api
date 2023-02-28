// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file admin/v1/storage.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message admin.v1.StorageServiceClusterInfoRequest
 */
export class StorageServiceClusterInfoRequest extends Message<StorageServiceClusterInfoRequest> {
  /**
   * @generated from field: optional string partition = 1;
   */
  partition?: string;

  constructor(data?: PartialMessage<StorageServiceClusterInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
 * @generated from message admin.v1.StorageServiceClusterInfoResponse
 */
export class StorageServiceClusterInfoResponse extends Message<StorageServiceClusterInfoResponse> {
  /**
   * @generated from field: admin.v1.StorageClusterInfo info = 1;
   */
  info?: StorageClusterInfo;

  constructor(data?: PartialMessage<StorageServiceClusterInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "admin.v1.StorageServiceClusterInfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StorageClusterInfo },
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
 * @generated from message admin.v1.StorageClusterInfo
 */
export class StorageClusterInfo extends Message<StorageClusterInfo> {
  /**
   * @generated from field: string partition = 1;
   */
  partition = "";

  /**
   * @generated from field: string uuid = 2;
   */
  uuid = "";

  /**
   * @generated from field: string subsystem_nqn = 3;
   */
  subsystemNqn = "";

  /**
   * @generated from field: uint32 current_max_replicas = 4;
   */
  currentMaxReplicas = 0;

  /**
   * @generated from field: uint32 supported_max_replicas = 5;
   */
  supportedMaxReplicas = 0;

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
  minVersionInCluster = "";

  /**
   * @generated from field: string min_allowed_version = 9;
   */
  minAllowedVersion = "";

  /**
   * @generated from field: string max_allowed_version = 10;
   */
  maxAllowedVersion = "";

  /**
   * @generated from field: repeated string api_endpoints = 11;
   */
  apiEndpoints: string[] = [];

  /**
   * @generated from field: repeated string discovery_endpoints = 12;
   */
  discoveryEndpoints: string[] = [];

  /**
   * @generated from field: repeated admin.v1.StorageServerInfo servers = 13;
   */
  servers: StorageServerInfo[] = [];

  constructor(data?: PartialMessage<StorageClusterInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
 * @generated from message admin.v1.StorageServerInfo
 */
export class StorageServerInfo extends Message<StorageServerInfo> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string risk_of_service_loss_state = 3;
   */
  riskOfServiceLossState = "";

  /**
   * @generated from field: string state = 4;
   */
  state = "";

  /**
   * @generated from field: repeated string server_endpoints = 5;
   */
  serverEndpoints: string[] = [];

  /**
   * @generated from field: string light_os_version = 6;
   */
  lightOsVersion = "";

  constructor(data?: PartialMessage<StorageServerInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
 * @generated from message admin.v1.ClusterHealth
 */
export class ClusterHealth extends Message<ClusterHealth> {
  /**
   * @generated from field: string state = 1;
   */
  state = "";

  /**
   * @generated from field: uint32 num_degraded_volumes = 2;
   */
  numDegradedVolumes = 0;

  /**
   * @generated from field: uint32 num_read_only_volumes = 3;
   */
  numReadOnlyVolumes = 0;

  /**
   * @generated from field: uint32 num_not_available_volumes = 4;
   */
  numNotAvailableVolumes = 0;

  /**
   * @generated from field: uint32 num_inactive_nodes = 5;
   */
  numInactiveNodes = 0;

  constructor(data?: PartialMessage<ClusterHealth>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
   * commpression ratio
   *
   * compression ratio logicalUsedStorage/physicalUsedStorage
   *
   * @generated from field: float compression_ratio = 11;
   */
  compressionRatio = 0;

  constructor(data?: PartialMessage<ClusterStatisticsApi>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
    { no: 11, name: "compression_ratio", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
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

