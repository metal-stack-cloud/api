import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * Asset defines the available resources which can be used
 *
 * @generated from message api.v1.Asset
 */
export declare class Asset extends Message<Asset> {
    /**
     * Region defines a datacenter location, e.g. a city.
     *
     * @generated from field: api.v1.Region region = 1;
     */
    region?: Region;
    /**
     * MachineTypes available by region
     *
     * @generated from field: map<string, api.v1.MachineType> machine_types = 2;
     */
    machineTypes: {
        [key: string]: MachineType;
    };
    /**
     * Kubernetes a list of kubernetes versions
     *
     * @generated from field: repeated api.v1.Kubernetes kubernetes = 3;
     */
    kubernetes: Kubernetes[];
    constructor(data?: PartialMessage<Asset>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Asset";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Asset;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Asset;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Asset;
    static equals(a: Asset | PlainMessage<Asset> | undefined, b: Asset | PlainMessage<Asset> | undefined): boolean;
}
/**
 * Region defines a datacenter location
 *
 * @generated from message api.v1.Region
 */
export declare class Region extends Message<Region> {
    /**
     * Id is the technical identifier of this region
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Name of the region
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Address is the postal address of the region
     *
     * @generated from field: string address = 3;
     */
    address: string;
    /**
     * Active indicates if this region is usable
     *
     * @generated from field: bool active = 4;
     */
    active: boolean;
    /**
     * Partitions in this region
     *
     * @generated from field: map<string, api.v1.Partition> partitions = 5;
     */
    partitions: {
        [key: string]: Partition;
    };
    /**
     * Defaults are the default assets used if not otherwise speecified.
     *
     * @generated from field: api.v1.AssetDefaults defaults = 6;
     */
    defaults?: AssetDefaults;
    /**
     * Description of the region
     *
     * @generated from field: string description = 7;
     */
    description: string;
    constructor(data?: PartialMessage<Region>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Region";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Region;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Region;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Region;
    static equals(a: Region | PlainMessage<Region> | undefined, b: Region | PlainMessage<Region> | undefined): boolean;
}
/**
 * Partition defines a failure domain in one Region.
 *
 * @generated from message api.v1.Partition
 */
export declare class Partition extends Message<Partition> {
    /**
     * Id is the technical id of this partition
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Name of this partition
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Address is the postal address of the partition
     *
     * @generated from field: string address = 3;
     */
    address: string;
    /**
     * Active indicates if this partition is usable
     *
     * @generated from field: bool active = 4;
     */
    active: boolean;
    /**
     * Description of this partition
     *
     * @generated from field: string description = 5;
     */
    description: string;
    constructor(data?: PartialMessage<Partition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Partition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Partition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Partition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Partition;
    static equals(a: Partition | PlainMessage<Partition> | undefined, b: Partition | PlainMessage<Partition> | undefined): boolean;
}
/**
 * MachineType defines a server type
 *
 * @generated from message api.v1.MachineType
 */
export declare class MachineType extends Message<MachineType> {
    /**
     * Id is the technical id of this machine type
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Name of this machine type
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * CPUs e.g. cores in this machine / server
     *
     * @generated from field: uint32 cpus = 3;
     */
    cpus: number;
    /**
     * Memory in this machine / server
     *
     * @generated from field: uint64 memory = 4;
     */
    memory: bigint;
    /**
     * Storage in this machine / server
     *
     * @generated from field: uint64 storage = 5;
     */
    storage: bigint;
    /**
     * CpuDescription describes the CPUs of this machine / server
     *
     * @generated from field: string cpu_description = 6;
     */
    cpuDescription: string;
    /**
     * StorageDescription describes the disks of this machine / server
     *
     * @generated from field: string storage_desription = 7;
     */
    storageDesription: string;
    constructor(data?: PartialMessage<MachineType>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MachineType";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MachineType;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MachineType;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MachineType;
    static equals(a: MachineType | PlainMessage<MachineType> | undefined, b: MachineType | PlainMessage<MachineType> | undefined): boolean;
}
/**
 * Kubernetes related configurations available
 *
 * @generated from message api.v1.Kubernetes
 */
export declare class Kubernetes extends Message<Kubernetes> {
    /**
     * Version of kubernetes
     *
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * Expiration sets the date on which the platform support for this kubernetes version expires
     *
     * @generated from field: google.protobuf.Timestamp expiration = 2;
     */
    expiration?: Timestamp;
    constructor(data?: PartialMessage<Kubernetes>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Kubernetes";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Kubernetes;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Kubernetes;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Kubernetes;
    static equals(a: Kubernetes | PlainMessage<Kubernetes> | undefined, b: Kubernetes | PlainMessage<Kubernetes> | undefined): boolean;
}
/**
 * AssetDefaults apply if no specific properties are specified
 *
 * @generated from message api.v1.AssetDefaults
 */
export declare class AssetDefaults extends Message<AssetDefaults> {
    /**
     * MachineType defines the default machine type used
     *
     * @generated from field: string machine_type = 1;
     */
    machineType: string;
    /**
     * KubernetesVersion defines the default kubernetes version to be used
     *
     * @generated from field: string kubernetes_version = 2;
     */
    kubernetesVersion: string;
    /**
     * WorkerMin defines how many servers are specified as minimum
     *
     * @generated from field: uint32 worker_min = 3;
     */
    workerMin: number;
    /**
     * WorkerMax defines how many servers are specified as maximum
     *
     * @generated from field: uint32 worker_max = 4;
     */
    workerMax: number;
    /**
     * Partition defines where the cluster is created if not otherwise specified
     *
     * @generated from field: string partition = 7;
     */
    partition: string;
    constructor(data?: PartialMessage<AssetDefaults>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.AssetDefaults";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetDefaults;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetDefaults;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetDefaults;
    static equals(a: AssetDefaults | PlainMessage<AssetDefaults> | undefined, b: AssetDefaults | PlainMessage<AssetDefaults> | undefined): boolean;
}
/**
 * AssetServiceListRequest is the request payload to list all Assets
 *
 * @generated from message api.v1.AssetServiceListRequest
 */
export declare class AssetServiceListRequest extends Message<AssetServiceListRequest> {
    constructor(data?: PartialMessage<AssetServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.AssetServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetServiceListRequest;
    static equals(a: AssetServiceListRequest | PlainMessage<AssetServiceListRequest> | undefined, b: AssetServiceListRequest | PlainMessage<AssetServiceListRequest> | undefined): boolean;
}
/**
 * AssetServiceListResponse is the response payload which containes the the Asset list
 *
 * @generated from message api.v1.AssetServiceListResponse
 */
export declare class AssetServiceListResponse extends Message<AssetServiceListResponse> {
    /**
     * Assets defines a list of assets
     *
     * @generated from field: repeated api.v1.Asset assets = 2;
     */
    assets: Asset[];
    constructor(data?: PartialMessage<AssetServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.AssetServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetServiceListResponse;
    static equals(a: AssetServiceListResponse | PlainMessage<AssetServiceListResponse> | undefined, b: AssetServiceListResponse | PlainMessage<AssetServiceListResponse> | undefined): boolean;
}
