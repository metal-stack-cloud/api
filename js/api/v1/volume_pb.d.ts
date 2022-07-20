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

  getAttachedTo(): string;
  setAttachedTo(value: string): Volume;
  hasAttachedTo(): boolean;
  clearAttachedTo(): Volume;

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
    attachedTo?: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum AttachedToCase { 
    _ATTACHED_TO_NOT_SET = 0,
    ATTACHED_TO = 8,
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

