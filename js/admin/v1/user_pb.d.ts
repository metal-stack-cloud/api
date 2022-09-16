import * as jspb from 'google-protobuf'

import * as api_v1_user_pb from '../../api/v1/user_pb';


export class UserServiceListRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): UserServiceListRequest;
  hasLogin(): boolean;
  clearLogin(): UserServiceListRequest;

  getName(): string;
  setName(value: string): UserServiceListRequest;
  hasName(): boolean;
  clearName(): UserServiceListRequest;

  getEmail(): string;
  setEmail(value: string): UserServiceListRequest;
  hasEmail(): boolean;
  clearEmail(): UserServiceListRequest;

  getOrganisationId(): string;
  setOrganisationId(value: string): UserServiceListRequest;
  hasOrganisationId(): boolean;
  clearOrganisationId(): UserServiceListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceListRequest): UserServiceListRequest.AsObject;
  static serializeBinaryToWriter(message: UserServiceListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceListRequest;
  static deserializeBinaryFromReader(message: UserServiceListRequest, reader: jspb.BinaryReader): UserServiceListRequest;
}

export namespace UserServiceListRequest {
  export type AsObject = {
    login?: string,
    name?: string,
    email?: string,
    organisationId?: string,
  }

  export enum LoginCase { 
    _LOGIN_NOT_SET = 0,
    LOGIN = 1,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum EmailCase { 
    _EMAIL_NOT_SET = 0,
    EMAIL = 3,
  }

  export enum OrganisationIdCase { 
    _ORGANISATION_ID_NOT_SET = 0,
    ORGANISATION_ID = 4,
  }
}

export class UserServiceListResponse extends jspb.Message {
  getUserList(): Array<api_v1_user_pb.User>;
  setUserList(value: Array<api_v1_user_pb.User>): UserServiceListResponse;
  clearUserList(): UserServiceListResponse;
  addUser(value?: api_v1_user_pb.User, index?: number): api_v1_user_pb.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceListResponse): UserServiceListResponse.AsObject;
  static serializeBinaryToWriter(message: UserServiceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceListResponse;
  static deserializeBinaryFromReader(message: UserServiceListResponse, reader: jspb.BinaryReader): UserServiceListResponse;
}

export namespace UserServiceListResponse {
  export type AsObject = {
    userList: Array<api_v1_user_pb.User.AsObject>,
  }
}

export class UserServiceAdmitRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): UserServiceAdmitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceAdmitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceAdmitRequest): UserServiceAdmitRequest.AsObject;
  static serializeBinaryToWriter(message: UserServiceAdmitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceAdmitRequest;
  static deserializeBinaryFromReader(message: UserServiceAdmitRequest, reader: jspb.BinaryReader): UserServiceAdmitRequest;
}

export namespace UserServiceAdmitRequest {
  export type AsObject = {
    login: string,
  }
}

export class UserServiceAdmitResponse extends jspb.Message {
  getUser(): api_v1_user_pb.User | undefined;
  setUser(value?: api_v1_user_pb.User): UserServiceAdmitResponse;
  hasUser(): boolean;
  clearUser(): UserServiceAdmitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceAdmitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceAdmitResponse): UserServiceAdmitResponse.AsObject;
  static serializeBinaryToWriter(message: UserServiceAdmitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceAdmitResponse;
  static deserializeBinaryFromReader(message: UserServiceAdmitResponse, reader: jspb.BinaryReader): UserServiceAdmitResponse;
}

export namespace UserServiceAdmitResponse {
  export type AsObject = {
    user?: api_v1_user_pb.User.AsObject,
  }
}

