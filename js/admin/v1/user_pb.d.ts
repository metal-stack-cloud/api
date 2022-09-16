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

export class OrganizationServiceListRequest extends jspb.Message {
  getId(): string;
  setId(value: string): OrganizationServiceListRequest;
  hasId(): boolean;
  clearId(): OrganizationServiceListRequest;

  getLogin(): string;
  setLogin(value: string): OrganizationServiceListRequest;
  hasLogin(): boolean;
  clearLogin(): OrganizationServiceListRequest;

  getName(): string;
  setName(value: string): OrganizationServiceListRequest;
  hasName(): boolean;
  clearName(): OrganizationServiceListRequest;

  getEmail(): string;
  setEmail(value: string): OrganizationServiceListRequest;
  hasEmail(): boolean;
  clearEmail(): OrganizationServiceListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationServiceListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationServiceListRequest): OrganizationServiceListRequest.AsObject;
  static serializeBinaryToWriter(message: OrganizationServiceListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationServiceListRequest;
  static deserializeBinaryFromReader(message: OrganizationServiceListRequest, reader: jspb.BinaryReader): OrganizationServiceListRequest;
}

export namespace OrganizationServiceListRequest {
  export type AsObject = {
    id?: string,
    login?: string,
    name?: string,
    email?: string,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 1,
  }

  export enum LoginCase { 
    _LOGIN_NOT_SET = 0,
    LOGIN = 2,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 3,
  }

  export enum EmailCase { 
    _EMAIL_NOT_SET = 0,
    EMAIL = 4,
  }
}

export class OrganizationServiceListResponse extends jspb.Message {
  getOrganizationList(): Array<api_v1_user_pb.Organization>;
  setOrganizationList(value: Array<api_v1_user_pb.Organization>): OrganizationServiceListResponse;
  clearOrganizationList(): OrganizationServiceListResponse;
  addOrganization(value?: api_v1_user_pb.Organization, index?: number): api_v1_user_pb.Organization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationServiceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationServiceListResponse): OrganizationServiceListResponse.AsObject;
  static serializeBinaryToWriter(message: OrganizationServiceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationServiceListResponse;
  static deserializeBinaryFromReader(message: OrganizationServiceListResponse, reader: jspb.BinaryReader): OrganizationServiceListResponse;
}

export namespace OrganizationServiceListResponse {
  export type AsObject = {
    organizationList: Array<api_v1_user_pb.Organization.AsObject>,
  }
}

export class OrganizationServiceAdmitRequest extends jspb.Message {
  getId(): string;
  setId(value: string): OrganizationServiceAdmitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationServiceAdmitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationServiceAdmitRequest): OrganizationServiceAdmitRequest.AsObject;
  static serializeBinaryToWriter(message: OrganizationServiceAdmitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationServiceAdmitRequest;
  static deserializeBinaryFromReader(message: OrganizationServiceAdmitRequest, reader: jspb.BinaryReader): OrganizationServiceAdmitRequest;
}

export namespace OrganizationServiceAdmitRequest {
  export type AsObject = {
    id: string,
  }
}

export class OrganizationServiceAdmitResponse extends jspb.Message {
  getOrganization(): api_v1_user_pb.Organization | undefined;
  setOrganization(value?: api_v1_user_pb.Organization): OrganizationServiceAdmitResponse;
  hasOrganization(): boolean;
  clearOrganization(): OrganizationServiceAdmitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationServiceAdmitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationServiceAdmitResponse): OrganizationServiceAdmitResponse.AsObject;
  static serializeBinaryToWriter(message: OrganizationServiceAdmitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationServiceAdmitResponse;
  static deserializeBinaryFromReader(message: OrganizationServiceAdmitResponse, reader: jspb.BinaryReader): OrganizationServiceAdmitResponse;
}

export namespace OrganizationServiceAdmitResponse {
  export type AsObject = {
    organization?: api_v1_user_pb.Organization.AsObject,
  }
}

