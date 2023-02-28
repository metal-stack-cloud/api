// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file api/v1/volume.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * Types
 *
 * @generated from message api.v1.Volume
 */
export class Volume extends Message<Volume> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string project = 3;
   */
  project = "";

  /**
   * @generated from field: string partition = 4;
   */
  partition = "";

  /**
   * @generated from field: string storage_class = 5;
   */
  storageClass = "";

  /**
   * @generated from field: uint64 size = 6;
   */
  size = protoInt64.zero;

  /**
   * @generated from field: uint64 usage = 7;
   */
  usage = protoInt64.zero;

  /**
   * @generated from field: string state = 8;
   */
  state = "";

  /**
   * @generated from field: repeated string attached_to = 9;
   */
  attachedTo: string[] = [];

  /**
   * @generated from field: string source_snapshot_uuid = 10;
   */
  sourceSnapshotUuid = "";

  /**
   * @generated from field: string source_snapshot_name = 11;
   */
  sourceSnapshotName = "";

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 20;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 21;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp deleted_at = 22;
   */
  deletedAt?: Timestamp;

  constructor(data?: PartialMessage<Volume>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 22, name: "deleted_at", kind: "message", T: Timestamp },
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
 * @generated from message api.v1.Snapshot
 */
export class Snapshot extends Message<Snapshot> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string project = 3;
   */
  project = "";

  /**
   * @generated from field: string partition = 4;
   */
  partition = "";

  /**
   * @generated from field: string storage_class = 5;
   */
  storageClass = "";

  /**
   * @generated from field: uint64 size = 6;
   */
  size = protoInt64.zero;

  /**
   * @generated from field: uint64 usage = 7;
   */
  usage = protoInt64.zero;

  /**
   * @generated from field: string state = 8;
   */
  state = "";

  /**
   * @generated from field: string source_volume_uuid = 10;
   */
  sourceVolumeUuid = "";

  /**
   * @generated from field: string source_volume_name = 11;
   */
  sourceVolumeName = "";

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 20;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 21;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp deleted_at = 22;
   */
  deletedAt?: Timestamp;

  constructor(data?: PartialMessage<Snapshot>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.Snapshot";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "storage_class", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "size", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "usage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "source_volume_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "source_volume_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 22, name: "deleted_at", kind: "message", T: Timestamp },
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
 * Requests
 *
 * @generated from message api.v1.VolumeServiceGetRequest
 */
export class VolumeServiceGetRequest extends Message<VolumeServiceGetRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * @generated from field: string project = 2;
   */
  project = "";

  constructor(data?: PartialMessage<VolumeServiceGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
 * @generated from message api.v1.VolumeServiceListRequest
 */
export class VolumeServiceListRequest extends Message<VolumeServiceListRequest> {
  /**
   * @generated from field: string project = 2;
   */
  project = "";

  /**
   * @generated from field: optional string partition = 3;
   */
  partition?: string;

  constructor(data?: PartialMessage<VolumeServiceListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.VolumeServiceListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
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
 * @generated from message api.v1.VolumeServiceDeleteRequest
 */
export class VolumeServiceDeleteRequest extends Message<VolumeServiceDeleteRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * @generated from field: string project = 2;
   */
  project = "";

  constructor(data?: PartialMessage<VolumeServiceDeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
 * @generated from message api.v1.SnapshotServiceGetRequest
 */
export class SnapshotServiceGetRequest extends Message<SnapshotServiceGetRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * @generated from field: string project = 2;
   */
  project = "";

  constructor(data?: PartialMessage<SnapshotServiceGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
 * @generated from message api.v1.SnapshotServiceListRequest
 */
export class SnapshotServiceListRequest extends Message<SnapshotServiceListRequest> {
  /**
   * @generated from field: string project = 2;
   */
  project = "";

  /**
   * @generated from field: optional string partition = 3;
   */
  partition?: string;

  constructor(data?: PartialMessage<SnapshotServiceListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.SnapshotServiceListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
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
 * @generated from message api.v1.SnapshotServiceDeleteRequest
 */
export class SnapshotServiceDeleteRequest extends Message<SnapshotServiceDeleteRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * @generated from field: string project = 2;
   */
  project = "";

  constructor(data?: PartialMessage<SnapshotServiceDeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
 * Responses
 *
 * @generated from message api.v1.VolumeServiceGetResponse
 */
export class VolumeServiceGetResponse extends Message<VolumeServiceGetResponse> {
  /**
   * @generated from field: api.v1.Volume volume = 1;
   */
  volume?: Volume;

  constructor(data?: PartialMessage<VolumeServiceGetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
 * @generated from message api.v1.VolumeServiceListResponse
 */
export class VolumeServiceListResponse extends Message<VolumeServiceListResponse> {
  /**
   * @generated from field: repeated api.v1.Volume volumes = 1;
   */
  volumes: Volume[] = [];

  constructor(data?: PartialMessage<VolumeServiceListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
 * @generated from message api.v1.VolumeServiceDeleteResponse
 */
export class VolumeServiceDeleteResponse extends Message<VolumeServiceDeleteResponse> {
  /**
   * @generated from field: api.v1.Volume volume = 1;
   */
  volume?: Volume;

  constructor(data?: PartialMessage<VolumeServiceDeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
 * @generated from message api.v1.SnapshotServiceGetResponse
 */
export class SnapshotServiceGetResponse extends Message<SnapshotServiceGetResponse> {
  /**
   * @generated from field: api.v1.Snapshot snapshot = 1;
   */
  snapshot?: Snapshot;

  constructor(data?: PartialMessage<SnapshotServiceGetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
 * @generated from message api.v1.SnapshotServiceListResponse
 */
export class SnapshotServiceListResponse extends Message<SnapshotServiceListResponse> {
  /**
   * @generated from field: repeated api.v1.Snapshot snapshots = 1;
   */
  snapshots: Snapshot[] = [];

  constructor(data?: PartialMessage<SnapshotServiceListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
 * @generated from message api.v1.SnapshotServiceDeleteResponse
 */
export class SnapshotServiceDeleteResponse extends Message<SnapshotServiceDeleteResponse> {
  /**
   * @generated from field: api.v1.Snapshot snapshot = 1;
   */
  snapshot?: Snapshot;

  constructor(data?: PartialMessage<SnapshotServiceDeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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

