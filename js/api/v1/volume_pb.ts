// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file api/v1/volume.proto (package api.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_api_v1_common } from "./common_pb";
import { file_buf_validate_validate } from "../../buf/validate/validate_pb";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file api/v1/volume.proto.
 */
export const file_api_v1_volume: GenFile = /*@__PURE__*/
  fileDesc("ChNhcGkvdjEvdm9sdW1lLnByb3RvEgZhcGkudjEikwQKBlZvbHVtZRIMCgR1dWlkGAEgASgJEgwKBG5hbWUYAiABKAkSDwoHcHJvamVjdBgDIAEoCRIRCglwYXJ0aXRpb24YBCABKAkSFQoNc3RvcmFnZV9jbGFzcxgFIAEoCRIMCgRzaXplGAYgASgEEg0KBXVzYWdlGAcgASgEEg0KBXN0YXRlGAggASgJEhMKC2F0dGFjaGVkX3RvGAkgAygJEhwKFHNvdXJjZV9zbmFwc2hvdF91dWlkGAogASgJEhwKFHNvdXJjZV9zbmFwc2hvdF9uYW1lGAsgASgJEhUKDXZvbHVtZV9oYW5kbGUYDCABKAkSEAoIbm9kZV9pcHMYDSADKAkSGAoQcmVidWlsZF9wcm9ncmVzcxgOIAEoCRIZChFwcmltYXJ5X25vZGVfdXVpZBgPIAEoCRIXCg9xb3NfcG9saWN5X3V1aWQYECABKAkSFwoPcW9zX3BvbGljeV9uYW1lGBEgASgJEhUKDXJlcGxpY2FfY291bnQYEiABKA0SGAoQcHJvdGVjdGlvbl9zdGF0ZRgTIAEoCRIcChRsb2dpY2FsX3VzZWRfc3RvcmFnZRgUIAEoBBIsCgpzdGF0aXN0aWNzGBUgASgLMhguYXBpLnYxLlZvbHVtZVN0YXRpc3RpY3MSFAoMY2x1c3Rlcl9uYW1lGBYgASgJEhIKCmNsdXN0ZXJfaWQYFyABKAki7QIKEFZvbHVtZVN0YXRpc3RpY3MSHAoUbG9naWNhbF91c2VkX3N0b3JhZ2UYASABKAQSHQoVcGh5c2ljYWxfdXNlZF9zdG9yYWdlGAIgASgEEhkKEWNvbXByZXNzaW9uX3JhdGlvGAMgASgBEh8KF3RvdGFsX2NvbXByZXNzaW9uX3JhdGlvGAQgASgBEhkKEXBoeXNpY2FsX2NhcGFjaXR5GAUgASgEEh8KF3BoeXNpY2FsX293bmVkX2NhcGFjaXR5GAYgASgEEh0KFXBoeXNpY2FsX293bmVkX21lbW9yeRgHIAEoBBIXCg9waHlzaWNhbF9tZW1vcnkYCCABKAQSFAoMdXNlcl93cml0dGVuGAkgASgEEisKI3VucmVjb3ZlcmFibGVfZGF0YV9pbnRlZ3JpdHlfZXJyb3JzGAogASgNEikKIXJlY292ZXJhYmxlX2RhdGFfaW50ZWdyaXR5X2Vycm9ycxgMIAEoDSKaAwoIU25hcHNob3QSDAoEdXVpZBgBIAEoCRIMCgRuYW1lGAIgASgJEhMKC2Rlc2NyaXB0aW9uGAMgASgJEg8KB3Byb2plY3QYBCABKAkSEQoJcGFydGl0aW9uGAUgASgJEhUKDXN0b3JhZ2VfY2xhc3MYBiABKAkSDAoEc2l6ZRgHIAEoBBINCgV1c2FnZRgIIAEoBBINCgVzdGF0ZRgJIAEoCRIaChJzb3VyY2Vfdm9sdW1lX3V1aWQYCiABKAkSGgoSc291cmNlX3ZvbHVtZV9uYW1lGAsgASgJEhUKDXJlcGxpY2FfY291bnQYDCABKA0SGQoRcHJpbWFyeV9ub2RlX3V1aWQYDSABKAkSLAoJcmV0ZW50aW9uGA4gASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uEi4KCnN0YXRpc3RpY3MYDyABKAsyGi5hcGkudjEuU25hcHNob3RTdGF0aXN0aWNzEi4KCmNyZWF0ZWRfYXQYFCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wIp4BChJTbmFwc2hvdFN0YXRpc3RpY3MSGQoRcGh5c2ljYWxfY2FwYWNpdHkYASABKAQSHwoXcGh5c2ljYWxfb3duZWRfY2FwYWNpdHkYAiABKAQSHQoVcGh5c2ljYWxfb3duZWRfbWVtb3J5GAMgASgEEhcKD3BoeXNpY2FsX21lbW9yeRgEIAEoBBIUCgx1c2VyX3dyaXR0ZW4YBSABKAQiTgoXVm9sdW1lU2VydmljZUdldFJlcXVlc3QSFgoEdXVpZBgBIAEoCUIIukgFcgOwAQESGwoHcHJvamVjdBgCIAEoCUIKukgHcgUQAhiAASKfAQoYVm9sdW1lU2VydmljZUxpc3RSZXF1ZXN0EhsKBHV1aWQYASABKAlCCLpIBXIDsAEBSACIAQESGwoHcHJvamVjdBgCIAEoCUIKukgHcgUQAhiAARIWCglwYXJ0aXRpb24YAyABKAlIAYgBARIRCgRuYW1lGAQgASgJSAKIAQFCBwoFX3V1aWRCDAoKX3BhcnRpdGlvbkIHCgVfbmFtZSJRChpWb2x1bWVTZXJ2aWNlRGVsZXRlUmVxdWVzdBIWCgR1dWlkGAEgASgJQgi6SAVyA7ABARIbCgdwcm9qZWN0GAIgASgJQgq6SAdyBRACGIABIlAKGVNuYXBzaG90U2VydmljZUdldFJlcXVlc3QSFgoEdXVpZBgBIAEoCUIIukgFcgOwAQESGwoHcHJvamVjdBgCIAEoCUIKukgHcgUQAhiAASKhAQoaU25hcHNob3RTZXJ2aWNlTGlzdFJlcXVlc3QSGwoEdXVpZBgBIAEoCUIIukgFcgOwAQFIAIgBARIbCgdwcm9qZWN0GAIgASgJQgq6SAdyBRACGIABEhYKCXBhcnRpdGlvbhgDIAEoCUgBiAEBEhEKBG5hbWUYBCABKAlIAogBAUIHCgVfdXVpZEIMCgpfcGFydGl0aW9uQgcKBV9uYW1lIlMKHFNuYXBzaG90U2VydmljZURlbGV0ZVJlcXVlc3QSFgoEdXVpZBgBIAEoCUIIukgFcgOwAQESGwoHcHJvamVjdBgCIAEoCUIKukgHcgUQAhiAASI6ChhWb2x1bWVTZXJ2aWNlR2V0UmVzcG9uc2USHgoGdm9sdW1lGAEgASgLMg4uYXBpLnYxLlZvbHVtZSI8ChlWb2x1bWVTZXJ2aWNlTGlzdFJlc3BvbnNlEh8KB3ZvbHVtZXMYASADKAsyDi5hcGkudjEuVm9sdW1lIj0KG1ZvbHVtZVNlcnZpY2VEZWxldGVSZXNwb25zZRIeCgZ2b2x1bWUYASABKAsyDi5hcGkudjEuVm9sdW1lIkAKGlNuYXBzaG90U2VydmljZUdldFJlc3BvbnNlEiIKCHNuYXBzaG90GAEgASgLMhAuYXBpLnYxLlNuYXBzaG90IkIKG1NuYXBzaG90U2VydmljZUxpc3RSZXNwb25zZRIjCglzbmFwc2hvdHMYASADKAsyEC5hcGkudjEuU25hcHNob3QiQwodU25hcHNob3RTZXJ2aWNlRGVsZXRlUmVzcG9uc2USIgoIc25hcHNob3QYASABKAsyEC5hcGkudjEuU25hcHNob3QymwIKDVZvbHVtZVNlcnZpY2USVQoDR2V0Eh8uYXBpLnYxLlZvbHVtZVNlcnZpY2VHZXRSZXF1ZXN0GiAuYXBpLnYxLlZvbHVtZVNlcnZpY2VHZXRSZXNwb25zZSILyvMYAwECA+jzGAISWAoETGlzdBIgLmFwaS52MS5Wb2x1bWVTZXJ2aWNlTGlzdFJlcXVlc3QaIS5hcGkudjEuVm9sdW1lU2VydmljZUxpc3RSZXNwb25zZSILyvMYAwECA+jzGAISWQoGRGVsZXRlEiIuYXBpLnYxLlZvbHVtZVNlcnZpY2VEZWxldGVSZXF1ZXN0GiMuYXBpLnYxLlZvbHVtZVNlcnZpY2VEZWxldGVSZXNwb25zZSIGyvMYAgECMqkCCg9TbmFwc2hvdFNlcnZpY2USWQoDR2V0EiEuYXBpLnYxLlNuYXBzaG90U2VydmljZUdldFJlcXVlc3QaIi5hcGkudjEuU25hcHNob3RTZXJ2aWNlR2V0UmVzcG9uc2UiC8rzGAMBAgPo8xgCElwKBExpc3QSIi5hcGkudjEuU25hcHNob3RTZXJ2aWNlTGlzdFJlcXVlc3QaIy5hcGkudjEuU25hcHNob3RTZXJ2aWNlTGlzdFJlc3BvbnNlIgvK8xgDAQID6PMYAhJdCgZEZWxldGUSJC5hcGkudjEuU25hcHNob3RTZXJ2aWNlRGVsZXRlUmVxdWVzdBolLmFwaS52MS5TbmFwc2hvdFNlcnZpY2VEZWxldGVSZXNwb25zZSIGyvMYAgECQoQBCgpjb20uYXBpLnYxQgtWb2x1bWVQcm90b1ABWjBnaXRodWIuY29tL21ldGFsLXN0YWNrLWNsb3VkL2FwaS9nby9hcGkvdjE7YXBpdjGiAgNBWFiqAgZBcGkuVjHKAgZBcGlcVjHiAhJBcGlcVjFcR1BCTWV0YWRhdGHqAgdBcGk6OlYxYgZwcm90bzM", [file_api_v1_common, file_buf_validate_validate, file_google_protobuf_duration, file_google_protobuf_timestamp]);

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
};

/**
 * Describes the message api.v1.Volume.
 * Use `create(VolumeSchema)` to create a new message.
 */
export const VolumeSchema: GenMessage<Volume> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 0);

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
export const VolumeStatisticsSchema: GenMessage<VolumeStatistics> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 1);

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
export const SnapshotSchema: GenMessage<Snapshot> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 2);

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
export const SnapshotStatisticsSchema: GenMessage<SnapshotStatistics> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 3);

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
export const VolumeServiceGetRequestSchema: GenMessage<VolumeServiceGetRequest> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 4);

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
export const VolumeServiceListRequestSchema: GenMessage<VolumeServiceListRequest> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 5);

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
export const VolumeServiceDeleteRequestSchema: GenMessage<VolumeServiceDeleteRequest> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 6);

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
export const SnapshotServiceGetRequestSchema: GenMessage<SnapshotServiceGetRequest> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 7);

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
export const SnapshotServiceListRequestSchema: GenMessage<SnapshotServiceListRequest> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 8);

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
export const SnapshotServiceDeleteRequestSchema: GenMessage<SnapshotServiceDeleteRequest> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 9);

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
export const VolumeServiceGetResponseSchema: GenMessage<VolumeServiceGetResponse> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 10);

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
export const VolumeServiceListResponseSchema: GenMessage<VolumeServiceListResponse> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 11);

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
export const VolumeServiceDeleteResponseSchema: GenMessage<VolumeServiceDeleteResponse> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 12);

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
export const SnapshotServiceGetResponseSchema: GenMessage<SnapshotServiceGetResponse> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 13);

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
export const SnapshotServiceListResponseSchema: GenMessage<SnapshotServiceListResponse> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 14);

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
export const SnapshotServiceDeleteResponseSchema: GenMessage<SnapshotServiceDeleteResponse> = /*@__PURE__*/
  messageDesc(file_api_v1_volume, 15);

/**
 * VolumeService serves volume related functions
 *
 * @generated from service api.v1.VolumeService
 */
export const VolumeService: GenService<{
  /**
   * Get a volume
   *
   * @generated from rpc api.v1.VolumeService.Get
   */
  get: {
    methodKind: "unary";
    input: typeof VolumeServiceGetRequestSchema;
    output: typeof VolumeServiceGetResponseSchema;
  },
  /**
   * List the volumes
   *
   * @generated from rpc api.v1.VolumeService.List
   */
  list: {
    methodKind: "unary";
    input: typeof VolumeServiceListRequestSchema;
    output: typeof VolumeServiceListResponseSchema;
  },
  /**
   * Delete a volume
   *
   * @generated from rpc api.v1.VolumeService.Delete
   */
  delete: {
    methodKind: "unary";
    input: typeof VolumeServiceDeleteRequestSchema;
    output: typeof VolumeServiceDeleteResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_api_v1_volume, 0);

/**
 * SnapshotService serves snapshot related functions
 *
 * @generated from service api.v1.SnapshotService
 */
export const SnapshotService: GenService<{
  /**
   * Get a snapshot
   *
   * @generated from rpc api.v1.SnapshotService.Get
   */
  get: {
    methodKind: "unary";
    input: typeof SnapshotServiceGetRequestSchema;
    output: typeof SnapshotServiceGetResponseSchema;
  },
  /**
   * List snapshots
   *
   * @generated from rpc api.v1.SnapshotService.List
   */
  list: {
    methodKind: "unary";
    input: typeof SnapshotServiceListRequestSchema;
    output: typeof SnapshotServiceListResponseSchema;
  },
  /**
   * Delete a snapshot
   *
   * @generated from rpc api.v1.SnapshotService.Delete
   */
  delete: {
    methodKind: "unary";
    input: typeof SnapshotServiceDeleteRequestSchema;
    output: typeof SnapshotServiceDeleteResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_api_v1_volume, 1);

