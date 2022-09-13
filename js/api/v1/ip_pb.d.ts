import * as jspb from 'google-protobuf'

import * as api_v1_common_pb from '../../api/v1/common_pb';
import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as validate_validate_pb from '../../validate/validate_pb';


export class IP extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): IP;

  getIp(): string;
  setIp(value: string): IP;

  getName(): string;
  setName(value: string): IP;

  getDescription(): string;
  setDescription(value: string): IP;

  getNetwork(): string;
  setNetwork(value: string): IP;

  getProject(): string;
  setProject(value: string): IP;

  getType(): string;
  setType(value: string): IP;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): IP;
  clearTagsList(): IP;
  addTags(value: string, index?: number): IP;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): IP;
  hasCreatedAt(): boolean;
  clearCreatedAt(): IP;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): IP;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): IP;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): IP;
  hasDeletedAt(): boolean;
  clearDeletedAt(): IP;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IP.AsObject;
  static toObject(includeInstance: boolean, msg: IP): IP.AsObject;
  static serializeBinaryToWriter(message: IP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IP;
  static deserializeBinaryFromReader(message: IP, reader: jspb.BinaryReader): IP;
}

export namespace IP {
  export type AsObject = {
    uuid: string,
    ip: string,
    name: string,
    description: string,
    network: string,
    project: string,
    type: string,
    tagsList: Array<string>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class IPServiceGetRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): IPServiceGetRequest;

  getProject(): string;
  setProject(value: string): IPServiceGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPServiceGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IPServiceGetRequest): IPServiceGetRequest.AsObject;
  static serializeBinaryToWriter(message: IPServiceGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPServiceGetRequest;
  static deserializeBinaryFromReader(message: IPServiceGetRequest, reader: jspb.BinaryReader): IPServiceGetRequest;
}

export namespace IPServiceGetRequest {
  export type AsObject = {
    uuid: string,
    project: string,
  }
}

export class IPServiceAllocateRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): IPServiceAllocateRequest;

  getName(): string;
  setName(value: string): IPServiceAllocateRequest;

  getDescription(): string;
  setDescription(value: string): IPServiceAllocateRequest;

  getNetwork(): string;
  setNetwork(value: string): IPServiceAllocateRequest;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): IPServiceAllocateRequest;
  clearTagsList(): IPServiceAllocateRequest;
  addTags(value: string, index?: number): IPServiceAllocateRequest;

  getStatic(): boolean;
  setStatic(value: boolean): IPServiceAllocateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPServiceAllocateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IPServiceAllocateRequest): IPServiceAllocateRequest.AsObject;
  static serializeBinaryToWriter(message: IPServiceAllocateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPServiceAllocateRequest;
  static deserializeBinaryFromReader(message: IPServiceAllocateRequest, reader: jspb.BinaryReader): IPServiceAllocateRequest;
}

export namespace IPServiceAllocateRequest {
  export type AsObject = {
    project: string,
    name: string,
    description: string,
    network: string,
    tagsList: Array<string>,
    pb_static: boolean,
  }
}

export class IPServiceStaticRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): IPServiceStaticRequest;

  getProject(): string;
  setProject(value: string): IPServiceStaticRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPServiceStaticRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IPServiceStaticRequest): IPServiceStaticRequest.AsObject;
  static serializeBinaryToWriter(message: IPServiceStaticRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPServiceStaticRequest;
  static deserializeBinaryFromReader(message: IPServiceStaticRequest, reader: jspb.BinaryReader): IPServiceStaticRequest;
}

export namespace IPServiceStaticRequest {
  export type AsObject = {
    uuid: string,
    project: string,
  }
}

export class IPServiceListRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): IPServiceListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPServiceListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IPServiceListRequest): IPServiceListRequest.AsObject;
  static serializeBinaryToWriter(message: IPServiceListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPServiceListRequest;
  static deserializeBinaryFromReader(message: IPServiceListRequest, reader: jspb.BinaryReader): IPServiceListRequest;
}

export namespace IPServiceListRequest {
  export type AsObject = {
    project: string,
  }
}

export class IPServiceDeleteRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): IPServiceDeleteRequest;

  getProject(): string;
  setProject(value: string): IPServiceDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPServiceDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IPServiceDeleteRequest): IPServiceDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: IPServiceDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPServiceDeleteRequest;
  static deserializeBinaryFromReader(message: IPServiceDeleteRequest, reader: jspb.BinaryReader): IPServiceDeleteRequest;
}

export namespace IPServiceDeleteRequest {
  export type AsObject = {
    uuid: string,
    project: string,
  }
}

export class IPServiceGetResponse extends jspb.Message {
  getIp(): IP | undefined;
  setIp(value?: IP): IPServiceGetResponse;
  hasIp(): boolean;
  clearIp(): IPServiceGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPServiceGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IPServiceGetResponse): IPServiceGetResponse.AsObject;
  static serializeBinaryToWriter(message: IPServiceGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPServiceGetResponse;
  static deserializeBinaryFromReader(message: IPServiceGetResponse, reader: jspb.BinaryReader): IPServiceGetResponse;
}

export namespace IPServiceGetResponse {
  export type AsObject = {
    ip?: IP.AsObject,
  }
}

export class IPServiceAllocateResponse extends jspb.Message {
  getIp(): IP | undefined;
  setIp(value?: IP): IPServiceAllocateResponse;
  hasIp(): boolean;
  clearIp(): IPServiceAllocateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPServiceAllocateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IPServiceAllocateResponse): IPServiceAllocateResponse.AsObject;
  static serializeBinaryToWriter(message: IPServiceAllocateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPServiceAllocateResponse;
  static deserializeBinaryFromReader(message: IPServiceAllocateResponse, reader: jspb.BinaryReader): IPServiceAllocateResponse;
}

export namespace IPServiceAllocateResponse {
  export type AsObject = {
    ip?: IP.AsObject,
  }
}

export class IPServiceStaticResponse extends jspb.Message {
  getIp(): IP | undefined;
  setIp(value?: IP): IPServiceStaticResponse;
  hasIp(): boolean;
  clearIp(): IPServiceStaticResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPServiceStaticResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IPServiceStaticResponse): IPServiceStaticResponse.AsObject;
  static serializeBinaryToWriter(message: IPServiceStaticResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPServiceStaticResponse;
  static deserializeBinaryFromReader(message: IPServiceStaticResponse, reader: jspb.BinaryReader): IPServiceStaticResponse;
}

export namespace IPServiceStaticResponse {
  export type AsObject = {
    ip?: IP.AsObject,
  }
}

export class IPServiceListResponse extends jspb.Message {
  getIpsList(): Array<IP>;
  setIpsList(value: Array<IP>): IPServiceListResponse;
  clearIpsList(): IPServiceListResponse;
  addIps(value?: IP, index?: number): IP;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPServiceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IPServiceListResponse): IPServiceListResponse.AsObject;
  static serializeBinaryToWriter(message: IPServiceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPServiceListResponse;
  static deserializeBinaryFromReader(message: IPServiceListResponse, reader: jspb.BinaryReader): IPServiceListResponse;
}

export namespace IPServiceListResponse {
  export type AsObject = {
    ipsList: Array<IP.AsObject>,
  }
}

export class IPServiceDeleteResponse extends jspb.Message {
  getIp(): IP | undefined;
  setIp(value?: IP): IPServiceDeleteResponse;
  hasIp(): boolean;
  clearIp(): IPServiceDeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPServiceDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IPServiceDeleteResponse): IPServiceDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: IPServiceDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPServiceDeleteResponse;
  static deserializeBinaryFromReader(message: IPServiceDeleteResponse, reader: jspb.BinaryReader): IPServiceDeleteResponse;
}

export namespace IPServiceDeleteResponse {
  export type AsObject = {
    ip?: IP.AsObject,
  }
}

