import * as jspb from 'google-protobuf'

import * as api_v1_common_pb from '../../api/v1/common_pb';
import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as validate_validate_pb from '../../validate/validate_pb';


export class Volume extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): Volume;

  getName(): string;
  setName(value: string): Volume;

  getProject(): string;
  setProject(value: string): Volume;

  getPartition(): string;
  setPartition(value: string): Volume;

  getStorageClass(): string;
  setStorageClass(value: string): Volume;

  getSize(): number;
  setSize(value: number): Volume;

  getUsage(): number;
  setUsage(value: number): Volume;

  getState(): string;
  setState(value: string): Volume;

  getAttachedToList(): Array<string>;
  setAttachedToList(value: Array<string>): Volume;
  clearAttachedToList(): Volume;
  addAttachedTo(value: string, index?: number): Volume;

  getSourceSnapshotUuid(): string;
  setSourceSnapshotUuid(value: string): Volume;

  getSourceSnapshotName(): string;
  setSourceSnapshotName(value: string): Volume;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Volume;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Volume;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Volume;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Volume;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Volume;
  hasDeletedAt(): boolean;
  clearDeletedAt(): Volume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Volume.AsObject;
  static toObject(includeInstance: boolean, msg: Volume): Volume.AsObject;
  static serializeBinaryToWriter(message: Volume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Volume;
  static deserializeBinaryFromReader(message: Volume, reader: jspb.BinaryReader): Volume;
}

export namespace Volume {
  export type AsObject = {
    uuid: string,
    name: string,
    project: string,
    partition: string,
    storageClass: string,
    size: number,
    usage: number,
    state: string,
    attachedToList: Array<string>,
    sourceSnapshotUuid: string,
    sourceSnapshotName: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Snapshot extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): Snapshot;

  getName(): string;
  setName(value: string): Snapshot;

  getProject(): string;
  setProject(value: string): Snapshot;

  getPartition(): string;
  setPartition(value: string): Snapshot;

  getStorageClass(): string;
  setStorageClass(value: string): Snapshot;

  getSize(): number;
  setSize(value: number): Snapshot;

  getUsage(): number;
  setUsage(value: number): Snapshot;

  getState(): string;
  setState(value: string): Snapshot;

  getSourceVolumeUuid(): string;
  setSourceVolumeUuid(value: string): Snapshot;

  getSourceVolumeName(): string;
  setSourceVolumeName(value: string): Snapshot;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Snapshot;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Snapshot;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Snapshot;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Snapshot;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Snapshot;
  hasDeletedAt(): boolean;
  clearDeletedAt(): Snapshot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Snapshot.AsObject;
  static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
  static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Snapshot;
  static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
}

export namespace Snapshot {
  export type AsObject = {
    uuid: string,
    name: string,
    project: string,
    partition: string,
    storageClass: string,
    size: number,
    usage: number,
    state: string,
    sourceVolumeUuid: string,
    sourceVolumeName: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class VolumeServiceGetRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): VolumeServiceGetRequest;

  getProject(): string;
  setProject(value: string): VolumeServiceGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeServiceGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeServiceGetRequest): VolumeServiceGetRequest.AsObject;
  static serializeBinaryToWriter(message: VolumeServiceGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeServiceGetRequest;
  static deserializeBinaryFromReader(message: VolumeServiceGetRequest, reader: jspb.BinaryReader): VolumeServiceGetRequest;
}

export namespace VolumeServiceGetRequest {
  export type AsObject = {
    uuid: string,
    project: string,
  }
}

export class VolumeServiceListRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): VolumeServiceListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeServiceListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeServiceListRequest): VolumeServiceListRequest.AsObject;
  static serializeBinaryToWriter(message: VolumeServiceListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeServiceListRequest;
  static deserializeBinaryFromReader(message: VolumeServiceListRequest, reader: jspb.BinaryReader): VolumeServiceListRequest;
}

export namespace VolumeServiceListRequest {
  export type AsObject = {
    project: string,
  }
}

export class VolumeServiceDeleteRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): VolumeServiceDeleteRequest;

  getProject(): string;
  setProject(value: string): VolumeServiceDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeServiceDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeServiceDeleteRequest): VolumeServiceDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: VolumeServiceDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeServiceDeleteRequest;
  static deserializeBinaryFromReader(message: VolumeServiceDeleteRequest, reader: jspb.BinaryReader): VolumeServiceDeleteRequest;
}

export namespace VolumeServiceDeleteRequest {
  export type AsObject = {
    uuid: string,
    project: string,
  }
}

export class SnapshotServiceGetRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): SnapshotServiceGetRequest;

  getProject(): string;
  setProject(value: string): SnapshotServiceGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotServiceGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotServiceGetRequest): SnapshotServiceGetRequest.AsObject;
  static serializeBinaryToWriter(message: SnapshotServiceGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotServiceGetRequest;
  static deserializeBinaryFromReader(message: SnapshotServiceGetRequest, reader: jspb.BinaryReader): SnapshotServiceGetRequest;
}

export namespace SnapshotServiceGetRequest {
  export type AsObject = {
    uuid: string,
    project: string,
  }
}

export class SnapshotServiceListRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): SnapshotServiceListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotServiceListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotServiceListRequest): SnapshotServiceListRequest.AsObject;
  static serializeBinaryToWriter(message: SnapshotServiceListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotServiceListRequest;
  static deserializeBinaryFromReader(message: SnapshotServiceListRequest, reader: jspb.BinaryReader): SnapshotServiceListRequest;
}

export namespace SnapshotServiceListRequest {
  export type AsObject = {
    project: string,
  }
}

export class SnapshotServiceDeleteRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): SnapshotServiceDeleteRequest;

  getProject(): string;
  setProject(value: string): SnapshotServiceDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotServiceDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotServiceDeleteRequest): SnapshotServiceDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: SnapshotServiceDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotServiceDeleteRequest;
  static deserializeBinaryFromReader(message: SnapshotServiceDeleteRequest, reader: jspb.BinaryReader): SnapshotServiceDeleteRequest;
}

export namespace SnapshotServiceDeleteRequest {
  export type AsObject = {
    uuid: string,
    project: string,
  }
}

export class VolumeServiceGetResponse extends jspb.Message {
  getVolume(): Volume | undefined;
  setVolume(value?: Volume): VolumeServiceGetResponse;
  hasVolume(): boolean;
  clearVolume(): VolumeServiceGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeServiceGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeServiceGetResponse): VolumeServiceGetResponse.AsObject;
  static serializeBinaryToWriter(message: VolumeServiceGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeServiceGetResponse;
  static deserializeBinaryFromReader(message: VolumeServiceGetResponse, reader: jspb.BinaryReader): VolumeServiceGetResponse;
}

export namespace VolumeServiceGetResponse {
  export type AsObject = {
    volume?: Volume.AsObject,
  }
}

export class VolumeServiceListResponse extends jspb.Message {
  getVolumesList(): Array<Volume>;
  setVolumesList(value: Array<Volume>): VolumeServiceListResponse;
  clearVolumesList(): VolumeServiceListResponse;
  addVolumes(value?: Volume, index?: number): Volume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeServiceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeServiceListResponse): VolumeServiceListResponse.AsObject;
  static serializeBinaryToWriter(message: VolumeServiceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeServiceListResponse;
  static deserializeBinaryFromReader(message: VolumeServiceListResponse, reader: jspb.BinaryReader): VolumeServiceListResponse;
}

export namespace VolumeServiceListResponse {
  export type AsObject = {
    volumesList: Array<Volume.AsObject>,
  }
}

export class VolumeServiceDeleteResponse extends jspb.Message {
  getVolume(): Volume | undefined;
  setVolume(value?: Volume): VolumeServiceDeleteResponse;
  hasVolume(): boolean;
  clearVolume(): VolumeServiceDeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeServiceDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeServiceDeleteResponse): VolumeServiceDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: VolumeServiceDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeServiceDeleteResponse;
  static deserializeBinaryFromReader(message: VolumeServiceDeleteResponse, reader: jspb.BinaryReader): VolumeServiceDeleteResponse;
}

export namespace VolumeServiceDeleteResponse {
  export type AsObject = {
    volume?: Volume.AsObject,
  }
}

export class SnapshotServiceGetResponse extends jspb.Message {
  getSnapshot(): Snapshot | undefined;
  setSnapshot(value?: Snapshot): SnapshotServiceGetResponse;
  hasSnapshot(): boolean;
  clearSnapshot(): SnapshotServiceGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotServiceGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotServiceGetResponse): SnapshotServiceGetResponse.AsObject;
  static serializeBinaryToWriter(message: SnapshotServiceGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotServiceGetResponse;
  static deserializeBinaryFromReader(message: SnapshotServiceGetResponse, reader: jspb.BinaryReader): SnapshotServiceGetResponse;
}

export namespace SnapshotServiceGetResponse {
  export type AsObject = {
    snapshot?: Snapshot.AsObject,
  }
}

export class SnapshotServiceListResponse extends jspb.Message {
  getSnapshotsList(): Array<Snapshot>;
  setSnapshotsList(value: Array<Snapshot>): SnapshotServiceListResponse;
  clearSnapshotsList(): SnapshotServiceListResponse;
  addSnapshots(value?: Snapshot, index?: number): Snapshot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotServiceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotServiceListResponse): SnapshotServiceListResponse.AsObject;
  static serializeBinaryToWriter(message: SnapshotServiceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotServiceListResponse;
  static deserializeBinaryFromReader(message: SnapshotServiceListResponse, reader: jspb.BinaryReader): SnapshotServiceListResponse;
}

export namespace SnapshotServiceListResponse {
  export type AsObject = {
    snapshotsList: Array<Snapshot.AsObject>,
  }
}

export class SnapshotServiceDeleteResponse extends jspb.Message {
  getSnapshot(): Snapshot | undefined;
  setSnapshot(value?: Snapshot): SnapshotServiceDeleteResponse;
  hasSnapshot(): boolean;
  clearSnapshot(): SnapshotServiceDeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotServiceDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotServiceDeleteResponse): SnapshotServiceDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: SnapshotServiceDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotServiceDeleteResponse;
  static deserializeBinaryFromReader(message: SnapshotServiceDeleteResponse, reader: jspb.BinaryReader): SnapshotServiceDeleteResponse;
}

export namespace SnapshotServiceDeleteResponse {
  export type AsObject = {
    snapshot?: Snapshot.AsObject,
  }
}

