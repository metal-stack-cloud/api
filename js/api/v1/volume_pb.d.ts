import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, Timestamp } from "@bufbuild/protobuf";
/**
 * Types
 *
 * @generated from message api.v1.Volume
 */
export declare class Volume extends Message<Volume> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string project = 3;
     */
    project: string;
    /**
     * @generated from field: string partition = 4;
     */
    partition: string;
    /**
     * @generated from field: string storage_class = 5;
     */
    storageClass: string;
    /**
     * @generated from field: uint64 size = 6;
     */
    size: bigint;
    /**
     * @generated from field: uint64 usage = 7;
     */
    usage: bigint;
    /**
     * @generated from field: string state = 8;
     */
    state: string;
    /**
     * @generated from field: repeated string attached_to = 9;
     */
    attachedTo: string[];
    /**
     * @generated from field: string source_snapshot_uuid = 10;
     */
    sourceSnapshotUuid: string;
    /**
     * @generated from field: string source_snapshot_name = 11;
     */
    sourceSnapshotName: string;
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
    constructor(data?: PartialMessage<Volume>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.Volume";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Volume;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Volume;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Volume;
    static equals(a: Volume | PlainMessage<Volume> | undefined, b: Volume | PlainMessage<Volume> | undefined): boolean;
}
/**
 * @generated from message api.v1.Snapshot
 */
export declare class Snapshot extends Message<Snapshot> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string project = 3;
     */
    project: string;
    /**
     * @generated from field: string partition = 4;
     */
    partition: string;
    /**
     * @generated from field: string storage_class = 5;
     */
    storageClass: string;
    /**
     * @generated from field: uint64 size = 6;
     */
    size: bigint;
    /**
     * @generated from field: uint64 usage = 7;
     */
    usage: bigint;
    /**
     * @generated from field: string state = 8;
     */
    state: string;
    /**
     * @generated from field: string source_volume_uuid = 10;
     */
    sourceVolumeUuid: string;
    /**
     * @generated from field: string source_volume_name = 11;
     */
    sourceVolumeName: string;
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
    constructor(data?: PartialMessage<Snapshot>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.Snapshot";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Snapshot;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Snapshot;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Snapshot;
    static equals(a: Snapshot | PlainMessage<Snapshot> | undefined, b: Snapshot | PlainMessage<Snapshot> | undefined): boolean;
}
/**
 * Requests
 *
 * @generated from message api.v1.VolumeServiceGetRequest
 */
export declare class VolumeServiceGetRequest extends Message<VolumeServiceGetRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<VolumeServiceGetRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.VolumeServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceGetRequest;
    static equals(a: VolumeServiceGetRequest | PlainMessage<VolumeServiceGetRequest> | undefined, b: VolumeServiceGetRequest | PlainMessage<VolumeServiceGetRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.VolumeServiceListRequest
 */
export declare class VolumeServiceListRequest extends Message<VolumeServiceListRequest> {
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<VolumeServiceListRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.VolumeServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceListRequest;
    static equals(a: VolumeServiceListRequest | PlainMessage<VolumeServiceListRequest> | undefined, b: VolumeServiceListRequest | PlainMessage<VolumeServiceListRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.VolumeServiceDeleteRequest
 */
export declare class VolumeServiceDeleteRequest extends Message<VolumeServiceDeleteRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<VolumeServiceDeleteRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.VolumeServiceDeleteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceDeleteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceDeleteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceDeleteRequest;
    static equals(a: VolumeServiceDeleteRequest | PlainMessage<VolumeServiceDeleteRequest> | undefined, b: VolumeServiceDeleteRequest | PlainMessage<VolumeServiceDeleteRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.SnapshotServiceGetRequest
 */
export declare class SnapshotServiceGetRequest extends Message<SnapshotServiceGetRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<SnapshotServiceGetRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.SnapshotServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceGetRequest;
    static equals(a: SnapshotServiceGetRequest | PlainMessage<SnapshotServiceGetRequest> | undefined, b: SnapshotServiceGetRequest | PlainMessage<SnapshotServiceGetRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.SnapshotServiceListRequest
 */
export declare class SnapshotServiceListRequest extends Message<SnapshotServiceListRequest> {
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<SnapshotServiceListRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.SnapshotServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceListRequest;
    static equals(a: SnapshotServiceListRequest | PlainMessage<SnapshotServiceListRequest> | undefined, b: SnapshotServiceListRequest | PlainMessage<SnapshotServiceListRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.SnapshotServiceDeleteRequest
 */
export declare class SnapshotServiceDeleteRequest extends Message<SnapshotServiceDeleteRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<SnapshotServiceDeleteRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.SnapshotServiceDeleteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceDeleteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceDeleteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceDeleteRequest;
    static equals(a: SnapshotServiceDeleteRequest | PlainMessage<SnapshotServiceDeleteRequest> | undefined, b: SnapshotServiceDeleteRequest | PlainMessage<SnapshotServiceDeleteRequest> | undefined): boolean;
}
/**
 * Responses
 *
 * @generated from message api.v1.VolumeServiceGetResponse
 */
export declare class VolumeServiceGetResponse extends Message<VolumeServiceGetResponse> {
    /**
     * @generated from field: api.v1.Volume volume = 1;
     */
    volume?: Volume;
    constructor(data?: PartialMessage<VolumeServiceGetResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.VolumeServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceGetResponse;
    static equals(a: VolumeServiceGetResponse | PlainMessage<VolumeServiceGetResponse> | undefined, b: VolumeServiceGetResponse | PlainMessage<VolumeServiceGetResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.VolumeServiceListResponse
 */
export declare class VolumeServiceListResponse extends Message<VolumeServiceListResponse> {
    /**
     * @generated from field: repeated api.v1.Volume volumes = 1;
     */
    volumes: Volume[];
    constructor(data?: PartialMessage<VolumeServiceListResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.VolumeServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceListResponse;
    static equals(a: VolumeServiceListResponse | PlainMessage<VolumeServiceListResponse> | undefined, b: VolumeServiceListResponse | PlainMessage<VolumeServiceListResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.VolumeServiceDeleteResponse
 */
export declare class VolumeServiceDeleteResponse extends Message<VolumeServiceDeleteResponse> {
    /**
     * @generated from field: api.v1.Volume volume = 1;
     */
    volume?: Volume;
    constructor(data?: PartialMessage<VolumeServiceDeleteResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.VolumeServiceDeleteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeServiceDeleteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeServiceDeleteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeServiceDeleteResponse;
    static equals(a: VolumeServiceDeleteResponse | PlainMessage<VolumeServiceDeleteResponse> | undefined, b: VolumeServiceDeleteResponse | PlainMessage<VolumeServiceDeleteResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.SnapshotServiceGetResponse
 */
export declare class SnapshotServiceGetResponse extends Message<SnapshotServiceGetResponse> {
    /**
     * @generated from field: api.v1.Snapshot snapshot = 1;
     */
    snapshot?: Snapshot;
    constructor(data?: PartialMessage<SnapshotServiceGetResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.SnapshotServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceGetResponse;
    static equals(a: SnapshotServiceGetResponse | PlainMessage<SnapshotServiceGetResponse> | undefined, b: SnapshotServiceGetResponse | PlainMessage<SnapshotServiceGetResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.SnapshotServiceListResponse
 */
export declare class SnapshotServiceListResponse extends Message<SnapshotServiceListResponse> {
    /**
     * @generated from field: repeated api.v1.Snapshot snapshots = 1;
     */
    snapshots: Snapshot[];
    constructor(data?: PartialMessage<SnapshotServiceListResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.SnapshotServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceListResponse;
    static equals(a: SnapshotServiceListResponse | PlainMessage<SnapshotServiceListResponse> | undefined, b: SnapshotServiceListResponse | PlainMessage<SnapshotServiceListResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.SnapshotServiceDeleteResponse
 */
export declare class SnapshotServiceDeleteResponse extends Message<SnapshotServiceDeleteResponse> {
    /**
     * @generated from field: api.v1.Snapshot snapshot = 1;
     */
    snapshot?: Snapshot;
    constructor(data?: PartialMessage<SnapshotServiceDeleteResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.SnapshotServiceDeleteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotServiceDeleteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotServiceDeleteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotServiceDeleteResponse;
    static equals(a: SnapshotServiceDeleteResponse | PlainMessage<SnapshotServiceDeleteResponse> | undefined, b: SnapshotServiceDeleteResponse | PlainMessage<SnapshotServiceDeleteResponse> | undefined): boolean;
}
