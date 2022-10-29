import * as jspb from 'google-protobuf'

import * as api_v1_common_pb from '../../api/v1/common_pb';
import * as api_v1_tenant_pb from '../../api/v1/tenant_pb';


export class TenantServiceListRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): TenantServiceListRequest;
  hasLogin(): boolean;
  clearLogin(): TenantServiceListRequest;

  getName(): string;
  setName(value: string): TenantServiceListRequest;
  hasName(): boolean;
  clearName(): TenantServiceListRequest;

  getEmail(): string;
  setEmail(value: string): TenantServiceListRequest;
  hasEmail(): boolean;
  clearEmail(): TenantServiceListRequest;

  getOrganisationId(): string;
  setOrganisationId(value: string): TenantServiceListRequest;
  hasOrganisationId(): boolean;
  clearOrganisationId(): TenantServiceListRequest;

  getOauthProvider(): api_v1_common_pb.OAuthProvider;
  setOauthProvider(value: api_v1_common_pb.OAuthProvider): TenantServiceListRequest;
  hasOauthProvider(): boolean;
  clearOauthProvider(): TenantServiceListRequest;

  getAdmitted(): boolean;
  setAdmitted(value: boolean): TenantServiceListRequest;
  hasAdmitted(): boolean;
  clearAdmitted(): TenantServiceListRequest;

  getPageToken(): string;
  setPageToken(value: string): TenantServiceListRequest;
  hasPageToken(): boolean;
  clearPageToken(): TenantServiceListRequest;

  getCount(): number;
  setCount(value: number): TenantServiceListRequest;
  hasCount(): boolean;
  clearCount(): TenantServiceListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantServiceListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TenantServiceListRequest): TenantServiceListRequest.AsObject;
  static serializeBinaryToWriter(message: TenantServiceListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantServiceListRequest;
  static deserializeBinaryFromReader(message: TenantServiceListRequest, reader: jspb.BinaryReader): TenantServiceListRequest;
}

export namespace TenantServiceListRequest {
  export type AsObject = {
    login?: string,
    name?: string,
    email?: string,
    organisationId?: string,
    oauthProvider?: api_v1_common_pb.OAuthProvider,
    admitted?: boolean,
    pageToken?: string,
    count?: number,
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

  export enum OauthProviderCase { 
    _OAUTH_PROVIDER_NOT_SET = 0,
    OAUTH_PROVIDER = 5,
  }

  export enum AdmittedCase { 
    _ADMITTED_NOT_SET = 0,
    ADMITTED = 6,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 7,
  }

  export enum CountCase { 
    _COUNT_NOT_SET = 0,
    COUNT = 8,
  }
}

export class TenantServiceListResponse extends jspb.Message {
  getUsersList(): Array<api_v1_tenant_pb.Tenant>;
  setUsersList(value: Array<api_v1_tenant_pb.Tenant>): TenantServiceListResponse;
  clearUsersList(): TenantServiceListResponse;
  addUsers(value?: api_v1_tenant_pb.Tenant, index?: number): api_v1_tenant_pb.Tenant;

  getNextPageToken(): string;
  setNextPageToken(value: string): TenantServiceListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantServiceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TenantServiceListResponse): TenantServiceListResponse.AsObject;
  static serializeBinaryToWriter(message: TenantServiceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantServiceListResponse;
  static deserializeBinaryFromReader(message: TenantServiceListResponse, reader: jspb.BinaryReader): TenantServiceListResponse;
}

export namespace TenantServiceListResponse {
  export type AsObject = {
    usersList: Array<api_v1_tenant_pb.Tenant.AsObject>,
    nextPageToken: string,
  }
}

export class TenantServiceAdmitRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): TenantServiceAdmitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantServiceAdmitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TenantServiceAdmitRequest): TenantServiceAdmitRequest.AsObject;
  static serializeBinaryToWriter(message: TenantServiceAdmitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantServiceAdmitRequest;
  static deserializeBinaryFromReader(message: TenantServiceAdmitRequest, reader: jspb.BinaryReader): TenantServiceAdmitRequest;
}

export namespace TenantServiceAdmitRequest {
  export type AsObject = {
    userId: string,
  }
}

export class TenantServiceAdmitResponse extends jspb.Message {
  getUser(): api_v1_tenant_pb.Tenant | undefined;
  setUser(value?: api_v1_tenant_pb.Tenant): TenantServiceAdmitResponse;
  hasUser(): boolean;
  clearUser(): TenantServiceAdmitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantServiceAdmitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TenantServiceAdmitResponse): TenantServiceAdmitResponse.AsObject;
  static serializeBinaryToWriter(message: TenantServiceAdmitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantServiceAdmitResponse;
  static deserializeBinaryFromReader(message: TenantServiceAdmitResponse, reader: jspb.BinaryReader): TenantServiceAdmitResponse;
}

export namespace TenantServiceAdmitResponse {
  export type AsObject = {
    user?: api_v1_tenant_pb.Tenant.AsObject,
  }
}

