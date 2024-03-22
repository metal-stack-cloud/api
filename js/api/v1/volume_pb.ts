// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file api/v1/volume.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * Volume is a unit of block storage
 *
 * @generated from message api.v1.Volume
 */
export class Volume extends Message<Volume> {
  /**
   * Uuid is the unique identifier of the volume
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * Name of the volume
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * Project this volume belongs to
   *
   * @generated from field: string project = 3;
   */
  project = "";

  /**
   * Partition where this volume resides
   *
   * @generated from field: string partition = 4;
   */
  partition = "";

  /**
   * StorageClass where this volume is created
   *
   * @generated from field: string storage_class = 5;
   */
  storageClass = "";

  /**
   * Size in bytes of the volume
   *
   * @generated from field: uint64 size = 6;
   */
  size = protoInt64.zero;

  /**
   * Usage in bytes of the volume
   *
   * @generated from field: uint64 usage = 7;
   */
  usage = protoInt64.zero;

  /**
   * State of the volume
   *
   * @generated from field: string state = 8;
   */
  state = "";

  /**
   * AttachedTo us a list of nodes this volume is attached
   *
   * @generated from field: repeated string attached_to = 9;
   */
  attachedTo: string[] = [];

  /**
   * SourceSnapshotUuid if this volume was created from a snapshot, this was the uuid source
   *
   * @generated from field: string source_snapshot_uuid = 10;
   */
  sourceSnapshotUuid = "";

  /**
   * SourceSnapshotName if this volume was created from a snapshot, this was the name of the source
   *
   * @generated from field: string source_snapshot_name = 11;
   */
  sourceSnapshotName = "";

  /**
   * VolumeHandle is the handle to mount this volume manually
   *
   * @generated from field: string volume_handle = 12;
   */
  volumeHandle = "";

  /**
   * NodeIps is a list of storage server node ips
   *
   * @generated from field: repeated string node_ips = 13;
   */
  nodeIps: string[] = [];

  /**
   * RebuildProgress shows the progress of a rebuild if any
   *
   * @generated from field: string rebuild_progress = 14;
   */
  rebuildProgress = "";

  /**
   * PrimaryNodeUuid is the uuid of the storage server node where the primary replica of this volume resides
   *
   * @generated from field: string primary_node_uuid = 15;
   */
  primaryNodeUuid = "";

  /**
   * QosPolicyUuid is the uuid of the QOS policy if any
   *
   * @generated from field: string qos_policy_uuid = 16;
   */
  qosPolicyUuid = "";

  /**
   * QosPolicyName is the name of the QOS policy if any
   *
   * @generated from field: string qos_policy_name = 17;
   */
  qosPolicyName = "";

  /**
   * ReplicaCount shows how many replicas of this volume exist
   *
   * @generated from field: uint32 replica_count = 18;
   */
  replicaCount = 0;

  /**
   * ProtectionState shows the state of failure protection of this volume
   *
   * @generated from field: string protection_state = 19;
   */
  protectionState = "";

  /**
   * LogicalUsedStorage in bytes of the volume
   *
   * @generated from field: uint64 logical_used_storage = 20;
   */
  logicalUsedStorage = protoInt64.zero;

  /**
   * VolumeStatistics are only visible to admins
   *
   * @generated from field: api.v1.VolumeStatistics statistics = 21;
   */
  statistics?: VolumeStatistics;

  constructor(data?: PartialMessage<Volume>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.Volume";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
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

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Volume {
    return new Volume().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Volume {
    return new Volume().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Volume {
    return new Volume().fromJsonString(jsonString, options);
  }

  static equals(a: Volume | PlainMessage<Volume> | undefined, b: Volume | PlainMessage<Volume> | undefined): boolean {
    return proto3.util.equals(Volume, a, b);
  }
}

/**
 * VolumeStatistics are all detailed statistics of a volume
 *
 * @generated from message api.v1.VolumeStatistics
 */
export class VolumeStatistics extends Message<VolumeStatistics> {
  /**
   * LogicalUsedStorage
   *
   * Logical storage space used by volume, given in bytes.
   *
   * @generated from field: uint64 logical_used_storage = 1;
   */
  logicalUsedStorage = protoInt64.zero;

  /**
   * PhysicalUsedStorage
   *
   * Physical storage space used by volume excluding parity, given in bytes.
   *
   * @generated from field: uint64 physical_used_storage = 2;
   */
  physicalUsedStorage = protoInt64.zero;

  /**
   * CommpressionRatio
   *
   * compression ratio userWritten/physicalCapacity
   *
   * @generated from field: double compression_ratio = 3;
   */
  compressionRatio = 0;

  /**
   * TotalCommpressionRatio
   *
   * compression ratio sum(userWritten) / sum(physical capacity)
   *
   * @generated from field: double total_compression_ratio = 4;
   */
  totalCompressionRatio = 0;

  /**
   * PhysicalCapacity
   *
   * The physical capacity that exists in this volume layer
   *
   * @generated from field: uint64 physical_capacity = 5;
   */
  physicalCapacity = protoInt64.zero;

  /**
   * PhysicalOwnedStorageCapacity
   *
   * The capacity that would be freed when volume is deleted
   *
   * @generated from field: uint64 physical_owned_capacity = 6;
   */
  physicalOwnedCapacity = protoInt64.zero;

  /**
   * PhysicalOwnedMemory
   *
   * The memory that would be freed when volume is deleted
   *
   * @generated from field: uint64 physical_owned_memory = 7;
   */
  physicalOwnedMemory = protoInt64.zero;

  /**
   * PhysicalMemory
   *
   * The memory that exists for this volume
   *
   * @generated from field: uint64 physical_memory = 8;
   */
  physicalMemory = protoInt64.zero;

  /**
   * UserWritten
   *
   * The amount of bytes written to this volume by the user
   *
   * @generated from field: uint64 user_written = 9;
   */
  userWritten = protoInt64.zero;

  /**
   * UnrecoverableDataIntegrityErrors
   *
   * Number of data integrity errors that could no be recovered by the system.
   *
   * @generated from field: uint32 unrecoverable_data_integrity_errors = 10;
   */
  unrecoverableDataIntegrityErrors = 0;

  /**
   * RecoverableDataIntegrityErrors
   *
   * Number of data integrity errors that were recovered by the system.
   *
   * @generated from field: uint32 recoverable_data_integrity_errors = 12;
   */
  recoverableDataIntegrityErrors = 0;

  constructor(data?: PartialMessage<VolumeStatistics>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.VolumeStatistics";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
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

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeStatistics {
    return new VolumeStatistics().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeStatistics {
    return new VolumeStatistics().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeStatistics {
    return new VolumeStatistics().fromJsonString(jsonString, options);
  }

  static equals(a: VolumeStatistics | PlainMessage<VolumeStatistics> | undefined, b: VolumeStatistics | PlainMessage<VolumeStatistics> | undefined): boolean {
    return proto3.util.equals(VolumeStatistics, a, b);
  }
}

/**
 * Snapshot is a unit of block storage create as a point in time block copy of a volume
 *
 * @generated from message api.v1.Snapshot
 */
export class Snapshot extends Message<Snapshot> {
  /**
   * Uuid is the unique identifier of the snapshot
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * Name of the snapshot
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * Description of this snapshot
   *
   * @generated from field: string description = 3;
   */
  description = "";

  /**
   * Project this snapshot belongs to
   *
   * @generated from field: string project = 4;
   */
  project = "";

  /**
   * Partition where this snapshot resides
   *
   * @generated from field: string partition = 5;
   */
  partition = "";

  /**
   * StorageClass where this snapshot is created
   *
   * @generated from field: string storage_class = 6;
   */
  storageClass = "";

  /**
   * Size in bytes of the snapshot
   *
   * @generated from field: uint64 size = 7;
   */
  size = protoInt64.zero;

  /**
   * Usage in bytes of the snapshot
   *
   * @generated from field: uint64 usage = 8;
   */
  usage = protoInt64.zero;

  /**
   * State of the snapshot
   *
   * @generated from field: string state = 9;
   */
  state = "";

  /**
   * SourceVolumeUuid is the uuid of the snapshot this snapshot was created from
   *
   * @generated from field: string source_volume_uuid = 10;
   */
  sourceVolumeUuid = "";

  /**
   * SourceVolumeName is the name of the snapshot this snapshot was created from
   *
   * @generated from field: string source_volume_name = 11;
   */
  sourceVolumeName = "";

  /**
   * ReplicaCount shows how many replicas of this snapshot exist
   *
   * @generated from field: uint32 replica_count = 12;
   */
  replicaCount = 0;

  /**
   * PrimaryNodeUuid is the uuid of the storage server node where the primary replica of this snapshot resides
   *
   * @generated from field: string primary_node_uuid = 13;
   */
  primaryNodeUuid = "";

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

  constructor(data?: PartialMessage<Snapshot>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.Snapshot";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
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
    { no: 14, name: "retention", kind: "message", T: Duration },
    { no: 15, name: "statistics", kind: "message", T: SnapshotStatistics },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Snapshot {
    return new Snapshot().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Snapshot {
    return new Snapshot().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Snapshot {
    return new Snapshot().fromJsonString(jsonString, options);
  }

  static equals(a: Snapshot | PlainMessage<Snapshot> | undefined, b: Snapshot | PlainMessage<Snapshot> | undefined): boolean {
    return proto3.util.equals(Snapshot, a, b);
  }
}

/**
 * SnapshotStatistics are all detailed statistics of a snapshot
 *
 * @generated from message api.v1.SnapshotStatistics
 */
export class SnapshotStatistics extends Message<SnapshotStatistics> {
  /**
   * PhysicalCapacity
   *
   * The physical capacity that exists in this snapshot layer
   *
   * @generated from field: uint64 physical_capacity = 1;
   */
  physicalCapacity = protoInt64.zero;

  /**
   * PhysicalOwnedStorageCapacity
   *
   * The capacity that would be freed when snapshot is deleted
   *
   * @generated from field: uint64 physical_owned_capacity = 2;
   */
  physicalOwnedCapacity = protoInt64.zero;

  /**
   * PhysicalOwnedMemory
   *
   * The memory that would be freed when snapshot is deleted
   *
   * @generated from field: uint64 physical_owned_memory = 3;
   */
  physicalOwnedMemory = protoInt64.zero;

  /**
   * PhysicalMemory
   *
   * The memory that exists for this snapshot
   *
   * @generated from field: uint64 physical_memory = 4;
   */
  physicalMemory = protoInt64.zero;

  /**
   * UserWritten
   *
   * The amount of bytes written to this snapshot by the user
   *
   * @generated from field: uint64 user_written = 5;
   */
  userWritten = protoInt64.zero;

  constructor(data?: PartialMessage<SnapshotStatistics>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.SnapshotStatistics";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "physical_capacity", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "physical_owned_capacity", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "physical_owned_memory", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "physical_memory", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "user_written", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotStatistics {
    return new SnapshotStatistics().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotStatistics {
    return new SnapshotStatistics().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotStatistics {
    return new SnapshotStatistics().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotStatistics | PlainMessage<SnapshotStatistics> | undefined, b: SnapshotStatistics | PlainMessage<SnapshotStatistics> | undefined): boolean {
    return proto3.util.equals(SnapshotStatistics, a, b);
  }
}

/**
 * VolumeServiceGetRequest is the request payload of the volume get request
 *
 * @generated from message api.v1.VolumeServiceGetRequest
 */
export class VolumeServiceGetRequest extends Message<VolumeServiceGetRequest> {
  /**
   * Uuid of the volume
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * Project of the volume
   *
   * @generated from field: string project = 2;
   */
  project = "";

  constructor(data?: PartialMessage<VolumeServiceGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.VolumeServiceGetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceGetRequest {
    return new VolumeServiceGetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceGetRequest {
    return new VolumeServiceGetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceGetRequest {
    return new VolumeServiceGetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: VolumeServiceGetRequest | PlainMessage<VolumeServiceGetRequest> | undefined, b: VolumeServiceGetRequest | PlainMessage<VolumeServiceGetRequest> | undefined): boolean {
    return proto3.util.equals(VolumeServiceGetRequest, a, b);
  }
}

/**
 * VolumeServiceListRequest is the request payload of a volume list request
 *
 * @generated from message api.v1.VolumeServiceListRequest
 */
export class VolumeServiceListRequest extends Message<VolumeServiceListRequest> {
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
  project = "";

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

  constructor(data?: PartialMessage<VolumeServiceListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.VolumeServiceListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceListRequest {
    return new VolumeServiceListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceListRequest {
    return new VolumeServiceListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceListRequest {
    return new VolumeServiceListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: VolumeServiceListRequest | PlainMessage<VolumeServiceListRequest> | undefined, b: VolumeServiceListRequest | PlainMessage<VolumeServiceListRequest> | undefined): boolean {
    return proto3.util.equals(VolumeServiceListRequest, a, b);
  }
}

/**
 * VolumeServiceDeleteRequest is the request payload of a volume delete request
 *
 * @generated from message api.v1.VolumeServiceDeleteRequest
 */
export class VolumeServiceDeleteRequest extends Message<VolumeServiceDeleteRequest> {
  /**
   * Uuid of the volume
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * Project of the volume
   *
   * @generated from field: string project = 2;
   */
  project = "";

  constructor(data?: PartialMessage<VolumeServiceDeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.VolumeServiceDeleteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceDeleteRequest {
    return new VolumeServiceDeleteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceDeleteRequest {
    return new VolumeServiceDeleteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceDeleteRequest {
    return new VolumeServiceDeleteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: VolumeServiceDeleteRequest | PlainMessage<VolumeServiceDeleteRequest> | undefined, b: VolumeServiceDeleteRequest | PlainMessage<VolumeServiceDeleteRequest> | undefined): boolean {
    return proto3.util.equals(VolumeServiceDeleteRequest, a, b);
  }
}

/**
 * SnapshotServiceGetRequest is the request payload of a snapshot list request
 *
 * @generated from message api.v1.SnapshotServiceGetRequest
 */
export class SnapshotServiceGetRequest extends Message<SnapshotServiceGetRequest> {
  /**
   * Uuid of the snapshot
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * Project of the snapshot
   *
   * @generated from field: string project = 2;
   */
  project = "";

  constructor(data?: PartialMessage<SnapshotServiceGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.SnapshotServiceGetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceGetRequest {
    return new SnapshotServiceGetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceGetRequest {
    return new SnapshotServiceGetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceGetRequest {
    return new SnapshotServiceGetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotServiceGetRequest | PlainMessage<SnapshotServiceGetRequest> | undefined, b: SnapshotServiceGetRequest | PlainMessage<SnapshotServiceGetRequest> | undefined): boolean {
    return proto3.util.equals(SnapshotServiceGetRequest, a, b);
  }
}

/**
 * SnapshotServiceListRequest is the request payload of a snapshot list request
 *
 * @generated from message api.v1.SnapshotServiceListRequest
 */
export class SnapshotServiceListRequest extends Message<SnapshotServiceListRequest> {
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
  project = "";

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

  constructor(data?: PartialMessage<SnapshotServiceListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.SnapshotServiceListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceListRequest {
    return new SnapshotServiceListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceListRequest {
    return new SnapshotServiceListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceListRequest {
    return new SnapshotServiceListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotServiceListRequest | PlainMessage<SnapshotServiceListRequest> | undefined, b: SnapshotServiceListRequest | PlainMessage<SnapshotServiceListRequest> | undefined): boolean {
    return proto3.util.equals(SnapshotServiceListRequest, a, b);
  }
}

/**
 * SnapshotServiceDeleteRequest is the request payload of a snapshot delete request
 *
 * @generated from message api.v1.SnapshotServiceDeleteRequest
 */
export class SnapshotServiceDeleteRequest extends Message<SnapshotServiceDeleteRequest> {
  /**
   * Uuid of the snapshot
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * Project of the snapshot
   *
   * @generated from field: string project = 2;
   */
  project = "";

  constructor(data?: PartialMessage<SnapshotServiceDeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.SnapshotServiceDeleteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceDeleteRequest {
    return new SnapshotServiceDeleteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceDeleteRequest {
    return new SnapshotServiceDeleteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceDeleteRequest {
    return new SnapshotServiceDeleteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotServiceDeleteRequest | PlainMessage<SnapshotServiceDeleteRequest> | undefined, b: SnapshotServiceDeleteRequest | PlainMessage<SnapshotServiceDeleteRequest> | undefined): boolean {
    return proto3.util.equals(SnapshotServiceDeleteRequest, a, b);
  }
}

/**
 * VolumeServiceGetResponse is the response payload of a volume get request
 *
 * @generated from message api.v1.VolumeServiceGetResponse
 */
export class VolumeServiceGetResponse extends Message<VolumeServiceGetResponse> {
  /**
   * Volume the volume
   *
   * @generated from field: api.v1.Volume volume = 1;
   */
  volume?: Volume;

  constructor(data?: PartialMessage<VolumeServiceGetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.VolumeServiceGetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "volume", kind: "message", T: Volume },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceGetResponse {
    return new VolumeServiceGetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceGetResponse {
    return new VolumeServiceGetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceGetResponse {
    return new VolumeServiceGetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: VolumeServiceGetResponse | PlainMessage<VolumeServiceGetResponse> | undefined, b: VolumeServiceGetResponse | PlainMessage<VolumeServiceGetResponse> | undefined): boolean {
    return proto3.util.equals(VolumeServiceGetResponse, a, b);
  }
}

/**
 * VolumeServiceListResponse is the response payload of a volume list request
 *
 * @generated from message api.v1.VolumeServiceListResponse
 */
export class VolumeServiceListResponse extends Message<VolumeServiceListResponse> {
  /**
   * Volumes the volumes
   *
   * @generated from field: repeated api.v1.Volume volumes = 1;
   */
  volumes: Volume[] = [];

  constructor(data?: PartialMessage<VolumeServiceListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.VolumeServiceListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "volumes", kind: "message", T: Volume, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceListResponse {
    return new VolumeServiceListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceListResponse {
    return new VolumeServiceListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceListResponse {
    return new VolumeServiceListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: VolumeServiceListResponse | PlainMessage<VolumeServiceListResponse> | undefined, b: VolumeServiceListResponse | PlainMessage<VolumeServiceListResponse> | undefined): boolean {
    return proto3.util.equals(VolumeServiceListResponse, a, b);
  }
}

/**
 * VolumeServiceDeleteResponse is the response payload of a volume delete request
 *
 * @generated from message api.v1.VolumeServiceDeleteResponse
 */
export class VolumeServiceDeleteResponse extends Message<VolumeServiceDeleteResponse> {
  /**
   * Volume the volume
   *
   * @generated from field: api.v1.Volume volume = 1;
   */
  volume?: Volume;

  constructor(data?: PartialMessage<VolumeServiceDeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.VolumeServiceDeleteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "volume", kind: "message", T: Volume },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceDeleteResponse {
    return new VolumeServiceDeleteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceDeleteResponse {
    return new VolumeServiceDeleteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceDeleteResponse {
    return new VolumeServiceDeleteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: VolumeServiceDeleteResponse | PlainMessage<VolumeServiceDeleteResponse> | undefined, b: VolumeServiceDeleteResponse | PlainMessage<VolumeServiceDeleteResponse> | undefined): boolean {
    return proto3.util.equals(VolumeServiceDeleteResponse, a, b);
  }
}

/**
 * SnapshotServiceGetResponse is the response payload of a snapshot get request
 *
 * @generated from message api.v1.SnapshotServiceGetResponse
 */
export class SnapshotServiceGetResponse extends Message<SnapshotServiceGetResponse> {
  /**
   * Snapshot the snapshot
   *
   * @generated from field: api.v1.Snapshot snapshot = 1;
   */
  snapshot?: Snapshot;

  constructor(data?: PartialMessage<SnapshotServiceGetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.SnapshotServiceGetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "snapshot", kind: "message", T: Snapshot },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceGetResponse {
    return new SnapshotServiceGetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceGetResponse {
    return new SnapshotServiceGetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceGetResponse {
    return new SnapshotServiceGetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotServiceGetResponse | PlainMessage<SnapshotServiceGetResponse> | undefined, b: SnapshotServiceGetResponse | PlainMessage<SnapshotServiceGetResponse> | undefined): boolean {
    return proto3.util.equals(SnapshotServiceGetResponse, a, b);
  }
}

/**
 * SnapshotServiceListResponse is the response payload of a snapshot list request
 *
 * @generated from message api.v1.SnapshotServiceListResponse
 */
export class SnapshotServiceListResponse extends Message<SnapshotServiceListResponse> {
  /**
   * Snapshots the snapshots
   *
   * @generated from field: repeated api.v1.Snapshot snapshots = 1;
   */
  snapshots: Snapshot[] = [];

  constructor(data?: PartialMessage<SnapshotServiceListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.SnapshotServiceListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "snapshots", kind: "message", T: Snapshot, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceListResponse {
    return new SnapshotServiceListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceListResponse {
    return new SnapshotServiceListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceListResponse {
    return new SnapshotServiceListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotServiceListResponse | PlainMessage<SnapshotServiceListResponse> | undefined, b: SnapshotServiceListResponse | PlainMessage<SnapshotServiceListResponse> | undefined): boolean {
    return proto3.util.equals(SnapshotServiceListResponse, a, b);
  }
}

/**
 * SnapshotServiceDeleteResponse is the response payload of a snapshot delete request
 *
 * @generated from message api.v1.SnapshotServiceDeleteResponse
 */
export class SnapshotServiceDeleteResponse extends Message<SnapshotServiceDeleteResponse> {
  /**
   * Snapshot the snapshot
   *
   * @generated from field: api.v1.Snapshot snapshot = 1;
   */
  snapshot?: Snapshot;

  constructor(data?: PartialMessage<SnapshotServiceDeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.SnapshotServiceDeleteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "snapshot", kind: "message", T: Snapshot },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceDeleteResponse {
    return new SnapshotServiceDeleteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceDeleteResponse {
    return new SnapshotServiceDeleteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceDeleteResponse {
    return new SnapshotServiceDeleteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotServiceDeleteResponse | PlainMessage<SnapshotServiceDeleteResponse> | undefined, b: SnapshotServiceDeleteResponse | PlainMessage<SnapshotServiceDeleteResponse> | undefined): boolean {
    return proto3.util.equals(SnapshotServiceDeleteResponse, a, b);
  }
}

