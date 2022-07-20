import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class TokenServiceCreateRequest extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): TokenServiceCreateRequest;

  getPermissionsList(): Array<ProjectPermission>;
  setPermissionsList(value: Array<ProjectPermission>): TokenServiceCreateRequest;
  clearPermissionsList(): TokenServiceCreateRequest;
  addPermissions(value?: ProjectPermission, index?: number): ProjectPermission;

  getRolesList(): Array<TokenRole>;
  setRolesList(value: Array<TokenRole>): TokenServiceCreateRequest;
  clearRolesList(): TokenServiceCreateRequest;
  addRoles(value?: TokenRole, index?: number): TokenRole;

  getExpires(): google_protobuf_duration_pb.Duration | undefined;
  setExpires(value?: google_protobuf_duration_pb.Duration): TokenServiceCreateRequest;
  hasExpires(): boolean;
  clearExpires(): TokenServiceCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenServiceCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenServiceCreateRequest): TokenServiceCreateRequest.AsObject;
  static serializeBinaryToWriter(message: TokenServiceCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenServiceCreateRequest;
  static deserializeBinaryFromReader(message: TokenServiceCreateRequest, reader: jspb.BinaryReader): TokenServiceCreateRequest;
}

export namespace TokenServiceCreateRequest {
  export type AsObject = {
    subject: string,
    permissionsList: Array<ProjectPermission.AsObject>,
    rolesList: Array<TokenRole.AsObject>,
    expires?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class ProjectPermission extends jspb.Message {
  getProject(): string;
  setProject(value: string): ProjectPermission;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): ProjectPermission;
  clearPermissionsList(): ProjectPermission;
  addPermissions(value: string, index?: number): ProjectPermission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectPermission.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectPermission): ProjectPermission.AsObject;
  static serializeBinaryToWriter(message: ProjectPermission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectPermission;
  static deserializeBinaryFromReader(message: ProjectPermission, reader: jspb.BinaryReader): ProjectPermission;
}

export namespace ProjectPermission {
  export type AsObject = {
    project: string,
    permissionsList: Array<string>,
  }
}

export class TokenRole extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): TokenRole;

  getRole(): string;
  setRole(value: string): TokenRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenRole.AsObject;
  static toObject(includeInstance: boolean, msg: TokenRole): TokenRole.AsObject;
  static serializeBinaryToWriter(message: TokenRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenRole;
  static deserializeBinaryFromReader(message: TokenRole, reader: jspb.BinaryReader): TokenRole;
}

export namespace TokenRole {
  export type AsObject = {
    subject: string,
    role: string,
  }
}

export class TokenServiceCreateResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): TokenServiceCreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenServiceCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenServiceCreateResponse): TokenServiceCreateResponse.AsObject;
  static serializeBinaryToWriter(message: TokenServiceCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenServiceCreateResponse;
  static deserializeBinaryFromReader(message: TokenServiceCreateResponse, reader: jspb.BinaryReader): TokenServiceCreateResponse;
}

export namespace TokenServiceCreateResponse {
  export type AsObject = {
    token: string,
  }
}

