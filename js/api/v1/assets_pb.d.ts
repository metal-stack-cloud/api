import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
/**
 * Types
 *
 * @generated from message api.v1.Asset
 */
export declare class Asset extends Message<Asset> {
    /**
     * @generated from field: api.v1.Region region = 1;
     */
    region?: Region;
    /**
     * @generated from field: map<string, api.v1.MachineType> machine_types = 2;
     */
    machineTypes: {
        [key: string]: MachineType;
    };
    /**
     * @generated from field: repeated api.v1.Kubernetes kubernetes = 3;
     */
    kubernetes: Kubernetes[];
    constructor(data?: PartialMessage<Asset>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.Asset";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Asset;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Asset;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Asset;
    static equals(a: Asset | PlainMessage<Asset> | undefined, b: Asset | PlainMessage<Asset> | undefined): boolean;
}
/**
 * @generated from message api.v1.Region
 */
export declare class Region extends Message<Region> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string address = 3;
     */
    address: string;
    /**
     * @generated from field: bool active = 4;
     */
    active: boolean;
    /**
     * @generated from field: map<string, api.v1.Partition> partitions = 5;
     */
    partitions: {
        [key: string]: Partition;
    };
    /**
     * @generated from field: api.v1.AssetDefaults defaults = 6;
     */
    defaults?: AssetDefaults;
    constructor(data?: PartialMessage<Region>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.Region";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Region;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Region;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Region;
    static equals(a: Region | PlainMessage<Region> | undefined, b: Region | PlainMessage<Region> | undefined): boolean;
}
/**
 * @generated from message api.v1.Partition
 */
export declare class Partition extends Message<Partition> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string address = 3;
     */
    address: string;
    /**
     * @generated from field: bool active = 4;
     */
    active: boolean;
    constructor(data?: PartialMessage<Partition>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.Partition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Partition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Partition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Partition;
    static equals(a: Partition | PlainMessage<Partition> | undefined, b: Partition | PlainMessage<Partition> | undefined): boolean;
}
/**
 * @generated from message api.v1.MachineType
 */
export declare class MachineType extends Message<MachineType> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: uint32 cpus = 3;
     */
    cpus: number;
    /**
     * @generated from field: uint64 memory = 4;
     */
    memory: bigint;
    /**
     * @generated from field: uint64 storage = 5;
     */
    storage: bigint;
    constructor(data?: PartialMessage<MachineType>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.MachineType";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MachineType;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MachineType;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MachineType;
    static equals(a: MachineType | PlainMessage<MachineType> | undefined, b: MachineType | PlainMessage<MachineType> | undefined): boolean;
}
/**
 * @generated from message api.v1.Kubernetes
 */
export declare class Kubernetes extends Message<Kubernetes> {
    /**
     * @generated from field: string version = 1;
     */
    version: string;
    constructor(data?: PartialMessage<Kubernetes>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.Kubernetes";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Kubernetes;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Kubernetes;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Kubernetes;
    static equals(a: Kubernetes | PlainMessage<Kubernetes> | undefined, b: Kubernetes | PlainMessage<Kubernetes> | undefined): boolean;
}
/**
 * @generated from message api.v1.AssetDefaults
 */
export declare class AssetDefaults extends Message<AssetDefaults> {
    /**
     * @generated from field: string machine_type = 1;
     */
    machineType: string;
    /**
     * @generated from field: string kubernetes_version = 2;
     */
    kubernetesVersion: string;
    /**
     * @generated from field: uint32 worker_min = 3;
     */
    workerMin: number;
    /**
     * @generated from field: uint32 worker_max = 4;
     */
    workerMax: number;
    /**
     * @generated from field: string partition = 7;
     */
    partition: string;
    constructor(data?: PartialMessage<AssetDefaults>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.AssetDefaults";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetDefaults;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetDefaults;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetDefaults;
    static equals(a: AssetDefaults | PlainMessage<AssetDefaults> | undefined, b: AssetDefaults | PlainMessage<AssetDefaults> | undefined): boolean;
}
/**
 * Requests
 *
 * @generated from message api.v1.AssetServiceListRequest
 */
export declare class AssetServiceListRequest extends Message<AssetServiceListRequest> {
    constructor(data?: PartialMessage<AssetServiceListRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.AssetServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetServiceListRequest;
    static equals(a: AssetServiceListRequest | PlainMessage<AssetServiceListRequest> | undefined, b: AssetServiceListRequest | PlainMessage<AssetServiceListRequest> | undefined): boolean;
}
/**
 * Responses
 *
 * @generated from message api.v1.AssetServiceListResponse
 */
export declare class AssetServiceListResponse extends Message<AssetServiceListResponse> {
    /**
     * assets maps region ids to assets
     *
     * @generated from field: map<string, api.v1.Asset> assets = 1;
     */
    assets: {
        [key: string]: Asset;
    };
    constructor(data?: PartialMessage<AssetServiceListResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.AssetServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetServiceListResponse;
    static equals(a: AssetServiceListResponse | PlainMessage<AssetServiceListResponse> | undefined, b: AssetServiceListResponse | PlainMessage<AssetServiceListResponse> | undefined): boolean;
}
