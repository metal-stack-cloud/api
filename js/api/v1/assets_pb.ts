// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file api/v1/assets.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Asset defines the available resources which can be used
 *
 * @generated from message api.v1.Asset
 */
export class Asset extends Message<Asset> {
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
  machineTypes: { [key: string]: MachineType } = {};

  /**
   * Kubernetes a list of kubernetes versions
   *
   * @generated from field: repeated api.v1.Kubernetes kubernetes = 3;
   */
  kubernetes: Kubernetes[] = [];

  constructor(data?: PartialMessage<Asset>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.Asset";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "region", kind: "message", T: Region },
    { no: 2, name: "machine_types", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: MachineType} },
    { no: 3, name: "kubernetes", kind: "message", T: Kubernetes, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Asset {
    return new Asset().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Asset {
    return new Asset().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Asset {
    return new Asset().fromJsonString(jsonString, options);
  }

  static equals(a: Asset | PlainMessage<Asset> | undefined, b: Asset | PlainMessage<Asset> | undefined): boolean {
    return proto3.util.equals(Asset, a, b);
  }
}

/**
 * Region defines a datacenter location
 *
 * @generated from message api.v1.Region
 */
export class Region extends Message<Region> {
  /**
   * Id is the technical identifier of this region
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * Name of the region
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * Address is the postal address of the region
   *
   * @generated from field: string address = 3;
   */
  address = "";

  /**
   * Active indicates if this region is usable
   *
   * @generated from field: bool active = 4;
   */
  active = false;

  /**
   * Partitions in this region
   *
   * @generated from field: map<string, api.v1.Partition> partitions = 5;
   */
  partitions: { [key: string]: Partition } = {};

  /**
   * Defaults are the default assets used if not otherwise speecified.
   *
   * @generated from field: api.v1.AssetDefaults defaults = 6;
   */
  defaults?: AssetDefaults;

  constructor(data?: PartialMessage<Region>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.Region";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "partitions", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Partition} },
    { no: 6, name: "defaults", kind: "message", T: AssetDefaults },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Region {
    return new Region().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Region {
    return new Region().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Region {
    return new Region().fromJsonString(jsonString, options);
  }

  static equals(a: Region | PlainMessage<Region> | undefined, b: Region | PlainMessage<Region> | undefined): boolean {
    return proto3.util.equals(Region, a, b);
  }
}

/**
 * Partition defines a failure domain in one Region.
 *
 * @generated from message api.v1.Partition
 */
export class Partition extends Message<Partition> {
  /**
   * Id is the technical id of this partition
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * Name of this partition
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * Address is the postal address of the partition
   *
   * @generated from field: string address = 3;
   */
  address = "";

  /**
   * Active indicates if this partition is usable
   *
   * @generated from field: bool active = 4;
   */
  active = false;

  constructor(data?: PartialMessage<Partition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.Partition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Partition {
    return new Partition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Partition {
    return new Partition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Partition {
    return new Partition().fromJsonString(jsonString, options);
  }

  static equals(a: Partition | PlainMessage<Partition> | undefined, b: Partition | PlainMessage<Partition> | undefined): boolean {
    return proto3.util.equals(Partition, a, b);
  }
}

/**
 * MachineType defines a server type
 *
 * @generated from message api.v1.MachineType
 */
export class MachineType extends Message<MachineType> {
  /**
   * Id is the technical id of this machine type
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * Name of this machine type
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * CPUs e.g. cores in this machine / server
   *
   * @generated from field: uint32 cpus = 3;
   */
  cpus = 0;

  /**
   * Memory in this machine / server
   *
   * @generated from field: uint64 memory = 4;
   */
  memory = protoInt64.zero;

  /**
   * Storage in this machine / server
   *
   * @generated from field: uint64 storage = 5;
   */
  storage = protoInt64.zero;

  /**
   * CpuDescription descibes the CPUs of this machine / server
   *
   * @generated from field: string cpu_description = 6;
   */
  cpuDescription = "";

  /**
   * StorageDescription descibes the disks of this machine / server
   *
   * @generated from field: string storage_desription = 7;
   */
  storageDesription = "";

  constructor(data?: PartialMessage<MachineType>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.MachineType";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "cpus", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "memory", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "cpu_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "storage_desription", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MachineType {
    return new MachineType().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MachineType {
    return new MachineType().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MachineType {
    return new MachineType().fromJsonString(jsonString, options);
  }

  static equals(a: MachineType | PlainMessage<MachineType> | undefined, b: MachineType | PlainMessage<MachineType> | undefined): boolean {
    return proto3.util.equals(MachineType, a, b);
  }
}

/**
 * Kubernetes related configurations available
 *
 * @generated from message api.v1.Kubernetes
 */
export class Kubernetes extends Message<Kubernetes> {
  /**
   * Version of kubernetes
   *
   * @generated from field: string version = 1;
   */
  version = "";

  constructor(data?: PartialMessage<Kubernetes>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.Kubernetes";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Kubernetes {
    return new Kubernetes().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Kubernetes {
    return new Kubernetes().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Kubernetes {
    return new Kubernetes().fromJsonString(jsonString, options);
  }

  static equals(a: Kubernetes | PlainMessage<Kubernetes> | undefined, b: Kubernetes | PlainMessage<Kubernetes> | undefined): boolean {
    return proto3.util.equals(Kubernetes, a, b);
  }
}

/**
 * AssetDefaults apply if no specific properties are specified
 *
 * @generated from message api.v1.AssetDefaults
 */
export class AssetDefaults extends Message<AssetDefaults> {
  /**
   * MachineType defines the default machine type used
   *
   * @generated from field: string machine_type = 1;
   */
  machineType = "";

  /**
   * KubernetesVersion defines the default kubernetes version to be used
   *
   * @generated from field: string kubernetes_version = 2;
   */
  kubernetesVersion = "";

  /**
   * WorkerMin defines how many servers are specified as minimum
   *
   * @generated from field: uint32 worker_min = 3;
   */
  workerMin = 0;

  /**
   * WorkerMax defines how many servers are specified as maximum
   *
   * @generated from field: uint32 worker_max = 4;
   */
  workerMax = 0;

  /**
   * Partition defines where the cluster is created if not otherwise specified
   *
   * @generated from field: string partition = 7;
   */
  partition = "";

  constructor(data?: PartialMessage<AssetDefaults>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.AssetDefaults";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "machine_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "kubernetes_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "worker_min", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "worker_max", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetDefaults {
    return new AssetDefaults().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetDefaults {
    return new AssetDefaults().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetDefaults {
    return new AssetDefaults().fromJsonString(jsonString, options);
  }

  static equals(a: AssetDefaults | PlainMessage<AssetDefaults> | undefined, b: AssetDefaults | PlainMessage<AssetDefaults> | undefined): boolean {
    return proto3.util.equals(AssetDefaults, a, b);
  }
}

/**
 * AssetServiceListRequest is the request payload to list all Assets
 *
 * @generated from message api.v1.AssetServiceListRequest
 */
export class AssetServiceListRequest extends Message<AssetServiceListRequest> {
  constructor(data?: PartialMessage<AssetServiceListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.AssetServiceListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetServiceListRequest {
    return new AssetServiceListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetServiceListRequest {
    return new AssetServiceListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetServiceListRequest {
    return new AssetServiceListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AssetServiceListRequest | PlainMessage<AssetServiceListRequest> | undefined, b: AssetServiceListRequest | PlainMessage<AssetServiceListRequest> | undefined): boolean {
    return proto3.util.equals(AssetServiceListRequest, a, b);
  }
}

/**
 * AssetServiceListResponse is the response payload which containes the the Asset list
 *
 * @generated from message api.v1.AssetServiceListResponse
 */
export class AssetServiceListResponse extends Message<AssetServiceListResponse> {
  /**
   * Assets defines a list of assets
   *
   * @generated from field: repeated api.v1.Asset assets = 2;
   */
  assets: Asset[] = [];

  constructor(data?: PartialMessage<AssetServiceListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.AssetServiceListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "assets", kind: "message", T: Asset, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetServiceListResponse {
    return new AssetServiceListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetServiceListResponse {
    return new AssetServiceListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetServiceListResponse {
    return new AssetServiceListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AssetServiceListResponse | PlainMessage<AssetServiceListResponse> | undefined, b: AssetServiceListResponse | PlainMessage<AssetServiceListResponse> | undefined): boolean {
    return proto3.util.equals(AssetServiceListResponse, a, b);
  }
}

