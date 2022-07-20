import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb';


export class Asset extends jspb.Message {
  getRegion(): Region | undefined;
  setRegion(value?: Region): Asset;
  hasRegion(): boolean;
  clearRegion(): Asset;

  getMachineTypesMap(): jspb.Map<string, MachineType>;
  clearMachineTypesMap(): Asset;

  getKubernetesList(): Array<Kubernetes>;
  setKubernetesList(value: Array<Kubernetes>): Asset;
  clearKubernetesList(): Asset;
  addKubernetes(value?: Kubernetes, index?: number): Kubernetes;

  getDefaultNetwork(): string;
  setDefaultNetwork(value: string): Asset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Asset.AsObject;
  static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
  static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Asset;
  static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
  export type AsObject = {
    region?: Region.AsObject,
    machineTypesMap: Array<[string, MachineType.AsObject]>,
    kubernetesList: Array<Kubernetes.AsObject>,
    defaultNetwork: string,
  }
}

export class Region extends jspb.Message {
  getId(): string;
  setId(value: string): Region;

  getName(): string;
  setName(value: string): Region;

  getAddress(): string;
  setAddress(value: string): Region;

  getActive(): boolean;
  setActive(value: boolean): Region;

  getPartitionsMap(): jspb.Map<string, Partition>;
  clearPartitionsMap(): Region;

  getDefaults(): AssetDefaults | undefined;
  setDefaults(value?: AssetDefaults): Region;
  hasDefaults(): boolean;
  clearDefaults(): Region;

  getNetworksList(): Array<string>;
  setNetworksList(value: Array<string>): Region;
  clearNetworksList(): Region;
  addNetworks(value: string, index?: number): Region;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Region.AsObject;
  static toObject(includeInstance: boolean, msg: Region): Region.AsObject;
  static serializeBinaryToWriter(message: Region, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Region;
  static deserializeBinaryFromReader(message: Region, reader: jspb.BinaryReader): Region;
}

export namespace Region {
  export type AsObject = {
    id: string,
    name: string,
    address: string,
    active: boolean,
    partitionsMap: Array<[string, Partition.AsObject]>,
    defaults?: AssetDefaults.AsObject,
    networksList: Array<string>,
  }
}

export class Partition extends jspb.Message {
  getId(): string;
  setId(value: string): Partition;

  getName(): string;
  setName(value: string): Partition;

  getAddress(): string;
  setAddress(value: string): Partition;

  getActive(): boolean;
  setActive(value: boolean): Partition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Partition.AsObject;
  static toObject(includeInstance: boolean, msg: Partition): Partition.AsObject;
  static serializeBinaryToWriter(message: Partition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Partition;
  static deserializeBinaryFromReader(message: Partition, reader: jspb.BinaryReader): Partition;
}

export namespace Partition {
  export type AsObject = {
    id: string,
    name: string,
    address: string,
    active: boolean,
  }
}

export class MachineType extends jspb.Message {
  getId(): string;
  setId(value: string): MachineType;

  getName(): string;
  setName(value: string): MachineType;

  getCpus(): number;
  setCpus(value: number): MachineType;

  getMemory(): number;
  setMemory(value: number): MachineType;

  getStorage(): number;
  setStorage(value: number): MachineType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MachineType.AsObject;
  static toObject(includeInstance: boolean, msg: MachineType): MachineType.AsObject;
  static serializeBinaryToWriter(message: MachineType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MachineType;
  static deserializeBinaryFromReader(message: MachineType, reader: jspb.BinaryReader): MachineType;
}

export namespace MachineType {
  export type AsObject = {
    id: string,
    name: string,
    cpus: number,
    memory: number,
    storage: number,
  }
}

export class Kubernetes extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): Kubernetes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Kubernetes.AsObject;
  static toObject(includeInstance: boolean, msg: Kubernetes): Kubernetes.AsObject;
  static serializeBinaryToWriter(message: Kubernetes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Kubernetes;
  static deserializeBinaryFromReader(message: Kubernetes, reader: jspb.BinaryReader): Kubernetes;
}

export namespace Kubernetes {
  export type AsObject = {
    version: string,
  }
}

export class AssetDefaults extends jspb.Message {
  getMachineType(): string;
  setMachineType(value: string): AssetDefaults;

  getKubernetesVersion(): string;
  setKubernetesVersion(value: string): AssetDefaults;

  getWorkerMin(): number;
  setWorkerMin(value: number): AssetDefaults;

  getWorkerMax(): number;
  setWorkerMax(value: number): AssetDefaults;

  getMaxsurge(): number;
  setMaxsurge(value: number): AssetDefaults;

  getMaxunavailable(): number;
  setMaxunavailable(value: number): AssetDefaults;

  getPartition(): string;
  setPartition(value: string): AssetDefaults;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetDefaults.AsObject;
  static toObject(includeInstance: boolean, msg: AssetDefaults): AssetDefaults.AsObject;
  static serializeBinaryToWriter(message: AssetDefaults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetDefaults;
  static deserializeBinaryFromReader(message: AssetDefaults, reader: jspb.BinaryReader): AssetDefaults;
}

export namespace AssetDefaults {
  export type AsObject = {
    machineType: string,
    kubernetesVersion: string,
    workerMin: number,
    workerMax: number,
    maxsurge: number,
    maxunavailable: number,
    partition: string,
  }
}

export class AssetServiceListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetServiceListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssetServiceListRequest): AssetServiceListRequest.AsObject;
  static serializeBinaryToWriter(message: AssetServiceListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetServiceListRequest;
  static deserializeBinaryFromReader(message: AssetServiceListRequest, reader: jspb.BinaryReader): AssetServiceListRequest;
}

export namespace AssetServiceListRequest {
  export type AsObject = {
  }
}

export class AssetServiceListResponse extends jspb.Message {
  getAssetsMap(): jspb.Map<string, Asset>;
  clearAssetsMap(): AssetServiceListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetServiceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssetServiceListResponse): AssetServiceListResponse.AsObject;
  static serializeBinaryToWriter(message: AssetServiceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetServiceListResponse;
  static deserializeBinaryFromReader(message: AssetServiceListResponse, reader: jspb.BinaryReader): AssetServiceListResponse;
}

export namespace AssetServiceListResponse {
  export type AsObject = {
    assetsMap: Array<[string, Asset.AsObject]>,
  }
}

