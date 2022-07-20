import * as jspb from 'google-protobuf'

import * as api_v1_common_pb from '../../api/v1/common_pb';
import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as validate_validate_pb from '../../validate/validate_pb';


export class Cluster extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): Cluster;

  getName(): string;
  setName(value: string): Cluster;

  getProject(): string;
  setProject(value: string): Cluster;

  getPartition(): string;
  setPartition(value: string): Cluster;

  getKubernetes(): KubernetesSpec | undefined;
  setKubernetes(value?: KubernetesSpec): Cluster;
  hasKubernetes(): boolean;
  clearKubernetes(): Cluster;

  getWorkersList(): Array<Worker>;
  setWorkersList(value: Array<Worker>): Cluster;
  clearWorkersList(): Cluster;
  addWorkers(value?: Worker, index?: number): Worker;

  getMaintenance(): Maintenance | undefined;
  setMaintenance(value?: Maintenance): Cluster;
  hasMaintenance(): boolean;
  clearMaintenance(): Cluster;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Cluster;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Cluster;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Cluster;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Cluster;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Cluster;
  hasDeletedAt(): boolean;
  clearDeletedAt(): Cluster;

  getStatus(): ClusterStatus | undefined;
  setStatus(value?: ClusterStatus): Cluster;
  hasStatus(): boolean;
  clearStatus(): Cluster;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cluster.AsObject;
  static toObject(includeInstance: boolean, msg: Cluster): Cluster.AsObject;
  static serializeBinaryToWriter(message: Cluster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cluster;
  static deserializeBinaryFromReader(message: Cluster, reader: jspb.BinaryReader): Cluster;
}

export namespace Cluster {
  export type AsObject = {
    uuid: string,
    name: string,
    project: string,
    partition: string,
    kubernetes?: KubernetesSpec.AsObject,
    workersList: Array<Worker.AsObject>,
    maintenance?: Maintenance.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status?: ClusterStatus.AsObject,
  }
}

export class KubernetesSpec extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): KubernetesSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KubernetesSpec.AsObject;
  static toObject(includeInstance: boolean, msg: KubernetesSpec): KubernetesSpec.AsObject;
  static serializeBinaryToWriter(message: KubernetesSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KubernetesSpec;
  static deserializeBinaryFromReader(message: KubernetesSpec, reader: jspb.BinaryReader): KubernetesSpec;
}

export namespace KubernetesSpec {
  export type AsObject = {
    version: string,
  }
}

export class Maintenance extends jspb.Message {
  getKubernetesAutoupdate(): boolean;
  setKubernetesAutoupdate(value: boolean): Maintenance;
  hasKubernetesAutoupdate(): boolean;
  clearKubernetesAutoupdate(): Maintenance;

  getMachineimageAutoupdate(): boolean;
  setMachineimageAutoupdate(value: boolean): Maintenance;
  hasMachineimageAutoupdate(): boolean;
  clearMachineimageAutoupdate(): Maintenance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Maintenance.AsObject;
  static toObject(includeInstance: boolean, msg: Maintenance): Maintenance.AsObject;
  static serializeBinaryToWriter(message: Maintenance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Maintenance;
  static deserializeBinaryFromReader(message: Maintenance, reader: jspb.BinaryReader): Maintenance;
}

export namespace Maintenance {
  export type AsObject = {
    kubernetesAutoupdate?: boolean,
    machineimageAutoupdate?: boolean,
  }

  export enum KubernetesAutoupdateCase { 
    _KUBERNETES_AUTOUPDATE_NOT_SET = 0,
    KUBERNETES_AUTOUPDATE = 1,
  }

  export enum MachineimageAutoupdateCase { 
    _MACHINEIMAGE_AUTOUPDATE_NOT_SET = 0,
    MACHINEIMAGE_AUTOUPDATE = 2,
  }
}

export class Worker extends jspb.Message {
  getName(): string;
  setName(value: string): Worker;

  getMachineType(): string;
  setMachineType(value: string): Worker;

  getMinsize(): number;
  setMinsize(value: number): Worker;

  getMaxsize(): number;
  setMaxsize(value: number): Worker;

  getMaxsurge(): number;
  setMaxsurge(value: number): Worker;

  getMaxunavailable(): number;
  setMaxunavailable(value: number): Worker;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Worker.AsObject;
  static toObject(includeInstance: boolean, msg: Worker): Worker.AsObject;
  static serializeBinaryToWriter(message: Worker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Worker;
  static deserializeBinaryFromReader(message: Worker, reader: jspb.BinaryReader): Worker;
}

export namespace Worker {
  export type AsObject = {
    name: string,
    machineType: string,
    minsize: number,
    maxsize: number,
    maxsurge: number,
    maxunavailable: number,
  }
}

export class WorkerUpdate extends jspb.Message {
  getName(): string;
  setName(value: string): WorkerUpdate;

  getMachineType(): string;
  setMachineType(value: string): WorkerUpdate;
  hasMachineType(): boolean;
  clearMachineType(): WorkerUpdate;

  getMinsize(): number;
  setMinsize(value: number): WorkerUpdate;
  hasMinsize(): boolean;
  clearMinsize(): WorkerUpdate;

  getMaxsize(): number;
  setMaxsize(value: number): WorkerUpdate;
  hasMaxsize(): boolean;
  clearMaxsize(): WorkerUpdate;

  getMaxsurge(): number;
  setMaxsurge(value: number): WorkerUpdate;
  hasMaxsurge(): boolean;
  clearMaxsurge(): WorkerUpdate;

  getMaxunavailable(): number;
  setMaxunavailable(value: number): WorkerUpdate;
  hasMaxunavailable(): boolean;
  clearMaxunavailable(): WorkerUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkerUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: WorkerUpdate): WorkerUpdate.AsObject;
  static serializeBinaryToWriter(message: WorkerUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkerUpdate;
  static deserializeBinaryFromReader(message: WorkerUpdate, reader: jspb.BinaryReader): WorkerUpdate;
}

export namespace WorkerUpdate {
  export type AsObject = {
    name: string,
    machineType?: string,
    minsize?: number,
    maxsize?: number,
    maxsurge?: number,
    maxunavailable?: number,
  }

  export enum MachineTypeCase { 
    _MACHINE_TYPE_NOT_SET = 0,
    MACHINE_TYPE = 2,
  }

  export enum MinsizeCase { 
    _MINSIZE_NOT_SET = 0,
    MINSIZE = 3,
  }

  export enum MaxsizeCase { 
    _MAXSIZE_NOT_SET = 0,
    MAXSIZE = 4,
  }

  export enum MaxsurgeCase { 
    _MAXSURGE_NOT_SET = 0,
    MAXSURGE = 5,
  }

  export enum MaxunavailableCase { 
    _MAXUNAVAILABLE_NOT_SET = 0,
    MAXUNAVAILABLE = 6,
  }
}

export class ClusterServiceGetRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): ClusterServiceGetRequest;

  getProject(): string;
  setProject(value: string): ClusterServiceGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterServiceGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterServiceGetRequest): ClusterServiceGetRequest.AsObject;
  static serializeBinaryToWriter(message: ClusterServiceGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterServiceGetRequest;
  static deserializeBinaryFromReader(message: ClusterServiceGetRequest, reader: jspb.BinaryReader): ClusterServiceGetRequest;
}

export namespace ClusterServiceGetRequest {
  export type AsObject = {
    uuid: string,
    project: string,
  }
}

export class ClusterServiceGetCredentialsRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): ClusterServiceGetCredentialsRequest;

  getProject(): string;
  setProject(value: string): ClusterServiceGetCredentialsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterServiceGetCredentialsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterServiceGetCredentialsRequest): ClusterServiceGetCredentialsRequest.AsObject;
  static serializeBinaryToWriter(message: ClusterServiceGetCredentialsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterServiceGetCredentialsRequest;
  static deserializeBinaryFromReader(message: ClusterServiceGetCredentialsRequest, reader: jspb.BinaryReader): ClusterServiceGetCredentialsRequest;
}

export namespace ClusterServiceGetCredentialsRequest {
  export type AsObject = {
    uuid: string,
    project: string,
  }
}

export class ClusterServiceListRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): ClusterServiceListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterServiceListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterServiceListRequest): ClusterServiceListRequest.AsObject;
  static serializeBinaryToWriter(message: ClusterServiceListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterServiceListRequest;
  static deserializeBinaryFromReader(message: ClusterServiceListRequest, reader: jspb.BinaryReader): ClusterServiceListRequest;
}

export namespace ClusterServiceListRequest {
  export type AsObject = {
    project: string,
  }
}

export class ClusterServiceCreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ClusterServiceCreateRequest;

  getProject(): string;
  setProject(value: string): ClusterServiceCreateRequest;

  getPartition(): string;
  setPartition(value: string): ClusterServiceCreateRequest;

  getKubernetes(): KubernetesSpec | undefined;
  setKubernetes(value?: KubernetesSpec): ClusterServiceCreateRequest;
  hasKubernetes(): boolean;
  clearKubernetes(): ClusterServiceCreateRequest;

  getWorkersList(): Array<Worker>;
  setWorkersList(value: Array<Worker>): ClusterServiceCreateRequest;
  clearWorkersList(): ClusterServiceCreateRequest;
  addWorkers(value?: Worker, index?: number): Worker;

  getMaintenance(): Maintenance | undefined;
  setMaintenance(value?: Maintenance): ClusterServiceCreateRequest;
  hasMaintenance(): boolean;
  clearMaintenance(): ClusterServiceCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterServiceCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterServiceCreateRequest): ClusterServiceCreateRequest.AsObject;
  static serializeBinaryToWriter(message: ClusterServiceCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterServiceCreateRequest;
  static deserializeBinaryFromReader(message: ClusterServiceCreateRequest, reader: jspb.BinaryReader): ClusterServiceCreateRequest;
}

export namespace ClusterServiceCreateRequest {
  export type AsObject = {
    name: string,
    project: string,
    partition: string,
    kubernetes?: KubernetesSpec.AsObject,
    workersList: Array<Worker.AsObject>,
    maintenance?: Maintenance.AsObject,
  }
}

export class ClusterServiceUpdateRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): ClusterServiceUpdateRequest;

  getProject(): string;
  setProject(value: string): ClusterServiceUpdateRequest;

  getKubernetes(): KubernetesSpec | undefined;
  setKubernetes(value?: KubernetesSpec): ClusterServiceUpdateRequest;
  hasKubernetes(): boolean;
  clearKubernetes(): ClusterServiceUpdateRequest;

  getWorkersList(): Array<WorkerUpdate>;
  setWorkersList(value: Array<WorkerUpdate>): ClusterServiceUpdateRequest;
  clearWorkersList(): ClusterServiceUpdateRequest;
  addWorkers(value?: WorkerUpdate, index?: number): WorkerUpdate;

  getMaintenance(): Maintenance | undefined;
  setMaintenance(value?: Maintenance): ClusterServiceUpdateRequest;
  hasMaintenance(): boolean;
  clearMaintenance(): ClusterServiceUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterServiceUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterServiceUpdateRequest): ClusterServiceUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: ClusterServiceUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterServiceUpdateRequest;
  static deserializeBinaryFromReader(message: ClusterServiceUpdateRequest, reader: jspb.BinaryReader): ClusterServiceUpdateRequest;
}

export namespace ClusterServiceUpdateRequest {
  export type AsObject = {
    uuid: string,
    project: string,
    kubernetes?: KubernetesSpec.AsObject,
    workersList: Array<WorkerUpdate.AsObject>,
    maintenance?: Maintenance.AsObject,
  }

  export enum KubernetesCase { 
    _KUBERNETES_NOT_SET = 0,
    KUBERNETES = 3,
  }

  export enum MaintenanceCase { 
    _MAINTENANCE_NOT_SET = 0,
    MAINTENANCE = 5,
  }
}

export class ClusterServiceDeleteRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): ClusterServiceDeleteRequest;

  getProject(): string;
  setProject(value: string): ClusterServiceDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterServiceDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterServiceDeleteRequest): ClusterServiceDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: ClusterServiceDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterServiceDeleteRequest;
  static deserializeBinaryFromReader(message: ClusterServiceDeleteRequest, reader: jspb.BinaryReader): ClusterServiceDeleteRequest;
}

export namespace ClusterServiceDeleteRequest {
  export type AsObject = {
    uuid: string,
    project: string,
  }
}

export class ClusterServiceWatchStatusRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): ClusterServiceWatchStatusRequest;
  hasUuid(): boolean;
  clearUuid(): ClusterServiceWatchStatusRequest;

  getProject(): string;
  setProject(value: string): ClusterServiceWatchStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterServiceWatchStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterServiceWatchStatusRequest): ClusterServiceWatchStatusRequest.AsObject;
  static serializeBinaryToWriter(message: ClusterServiceWatchStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterServiceWatchStatusRequest;
  static deserializeBinaryFromReader(message: ClusterServiceWatchStatusRequest, reader: jspb.BinaryReader): ClusterServiceWatchStatusRequest;
}

export namespace ClusterServiceWatchStatusRequest {
  export type AsObject = {
    uuid?: string,
    project: string,
  }

  export enum UuidCase { 
    _UUID_NOT_SET = 0,
    UUID = 1,
  }
}

export class ClusterStatus extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): ClusterStatus;

  getProgress(): number;
  setProgress(value: number): ClusterStatus;

  getState(): string;
  setState(value: string): ClusterStatus;

  getType(): string;
  setType(value: string): ClusterStatus;

  getApiServerReady(): string;
  setApiServerReady(value: string): ClusterStatus;

  getControlPlaneReady(): string;
  setControlPlaneReady(value: string): ClusterStatus;

  getNodesReady(): string;
  setNodesReady(value: string): ClusterStatus;

  getSystemComponentsReady(): string;
  setSystemComponentsReady(value: string): ClusterStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterStatus): ClusterStatus.AsObject;
  static serializeBinaryToWriter(message: ClusterStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterStatus;
  static deserializeBinaryFromReader(message: ClusterStatus, reader: jspb.BinaryReader): ClusterStatus;
}

export namespace ClusterStatus {
  export type AsObject = {
    uuid: string,
    progress: number,
    state: string,
    type: string,
    apiServerReady: string,
    controlPlaneReady: string,
    nodesReady: string,
    systemComponentsReady: string,
  }
}

export class ClusterServiceCreateResponse extends jspb.Message {
  getCluster(): Cluster | undefined;
  setCluster(value?: Cluster): ClusterServiceCreateResponse;
  hasCluster(): boolean;
  clearCluster(): ClusterServiceCreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterServiceCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterServiceCreateResponse): ClusterServiceCreateResponse.AsObject;
  static serializeBinaryToWriter(message: ClusterServiceCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterServiceCreateResponse;
  static deserializeBinaryFromReader(message: ClusterServiceCreateResponse, reader: jspb.BinaryReader): ClusterServiceCreateResponse;
}

export namespace ClusterServiceCreateResponse {
  export type AsObject = {
    cluster?: Cluster.AsObject,
  }
}

export class ClusterServiceGetResponse extends jspb.Message {
  getCluster(): Cluster | undefined;
  setCluster(value?: Cluster): ClusterServiceGetResponse;
  hasCluster(): boolean;
  clearCluster(): ClusterServiceGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterServiceGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterServiceGetResponse): ClusterServiceGetResponse.AsObject;
  static serializeBinaryToWriter(message: ClusterServiceGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterServiceGetResponse;
  static deserializeBinaryFromReader(message: ClusterServiceGetResponse, reader: jspb.BinaryReader): ClusterServiceGetResponse;
}

export namespace ClusterServiceGetResponse {
  export type AsObject = {
    cluster?: Cluster.AsObject,
  }
}

export class ClusterServiceGetCredentialsResponse extends jspb.Message {
  getKubeconfig(): string;
  setKubeconfig(value: string): ClusterServiceGetCredentialsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterServiceGetCredentialsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterServiceGetCredentialsResponse): ClusterServiceGetCredentialsResponse.AsObject;
  static serializeBinaryToWriter(message: ClusterServiceGetCredentialsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterServiceGetCredentialsResponse;
  static deserializeBinaryFromReader(message: ClusterServiceGetCredentialsResponse, reader: jspb.BinaryReader): ClusterServiceGetCredentialsResponse;
}

export namespace ClusterServiceGetCredentialsResponse {
  export type AsObject = {
    kubeconfig: string,
  }
}

export class ClusterServiceDeleteResponse extends jspb.Message {
  getCluster(): Cluster | undefined;
  setCluster(value?: Cluster): ClusterServiceDeleteResponse;
  hasCluster(): boolean;
  clearCluster(): ClusterServiceDeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterServiceDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterServiceDeleteResponse): ClusterServiceDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: ClusterServiceDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterServiceDeleteResponse;
  static deserializeBinaryFromReader(message: ClusterServiceDeleteResponse, reader: jspb.BinaryReader): ClusterServiceDeleteResponse;
}

export namespace ClusterServiceDeleteResponse {
  export type AsObject = {
    cluster?: Cluster.AsObject,
  }
}

export class ClusterServiceUpdateResponse extends jspb.Message {
  getCluster(): Cluster | undefined;
  setCluster(value?: Cluster): ClusterServiceUpdateResponse;
  hasCluster(): boolean;
  clearCluster(): ClusterServiceUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterServiceUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterServiceUpdateResponse): ClusterServiceUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: ClusterServiceUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterServiceUpdateResponse;
  static deserializeBinaryFromReader(message: ClusterServiceUpdateResponse, reader: jspb.BinaryReader): ClusterServiceUpdateResponse;
}

export namespace ClusterServiceUpdateResponse {
  export type AsObject = {
    cluster?: Cluster.AsObject,
  }
}

export class ClusterServiceListResponse extends jspb.Message {
  getClustersList(): Array<Cluster>;
  setClustersList(value: Array<Cluster>): ClusterServiceListResponse;
  clearClustersList(): ClusterServiceListResponse;
  addClusters(value?: Cluster, index?: number): Cluster;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterServiceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterServiceListResponse): ClusterServiceListResponse.AsObject;
  static serializeBinaryToWriter(message: ClusterServiceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterServiceListResponse;
  static deserializeBinaryFromReader(message: ClusterServiceListResponse, reader: jspb.BinaryReader): ClusterServiceListResponse;
}

export namespace ClusterServiceListResponse {
  export type AsObject = {
    clustersList: Array<Cluster.AsObject>,
  }
}

export class ClusterServiceWatchStatusResponse extends jspb.Message {
  getStatus(): ClusterStatus | undefined;
  setStatus(value?: ClusterStatus): ClusterServiceWatchStatusResponse;
  hasStatus(): boolean;
  clearStatus(): ClusterServiceWatchStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterServiceWatchStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterServiceWatchStatusResponse): ClusterServiceWatchStatusResponse.AsObject;
  static serializeBinaryToWriter(message: ClusterServiceWatchStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterServiceWatchStatusResponse;
  static deserializeBinaryFromReader(message: ClusterServiceWatchStatusResponse, reader: jspb.BinaryReader): ClusterServiceWatchStatusResponse;
}

export namespace ClusterServiceWatchStatusResponse {
  export type AsObject = {
    status?: ClusterStatus.AsObject,
  }
}

