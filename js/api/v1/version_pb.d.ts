import * as jspb from 'google-protobuf'

import * as api_v1_common_pb from '../../api/v1/common_pb';
import * as google_api_annotations_pb from '../../google/api/annotations_pb';


export class Version extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): Version;

  getRevision(): string;
  setRevision(value: string): Version;

  getGitSha1(): string;
  setGitSha1(value: string): Version;

  getBuildDate(): string;
  setBuildDate(value: string): Version;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    version: string,
    revision: string,
    gitSha1: string,
    buildDate: string,
  }
}

export class VersionServiceGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionServiceGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VersionServiceGetRequest): VersionServiceGetRequest.AsObject;
  static serializeBinaryToWriter(message: VersionServiceGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionServiceGetRequest;
  static deserializeBinaryFromReader(message: VersionServiceGetRequest, reader: jspb.BinaryReader): VersionServiceGetRequest;
}

export namespace VersionServiceGetRequest {
  export type AsObject = {
  }
}

export class VersionServiceGetResponse extends jspb.Message {
  getVersion(): Version | undefined;
  setVersion(value?: Version): VersionServiceGetResponse;
  hasVersion(): boolean;
  clearVersion(): VersionServiceGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionServiceGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VersionServiceGetResponse): VersionServiceGetResponse.AsObject;
  static serializeBinaryToWriter(message: VersionServiceGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionServiceGetResponse;
  static deserializeBinaryFromReader(message: VersionServiceGetResponse, reader: jspb.BinaryReader): VersionServiceGetResponse;
}

export namespace VersionServiceGetResponse {
  export type AsObject = {
    version?: Version.AsObject,
  }
}

