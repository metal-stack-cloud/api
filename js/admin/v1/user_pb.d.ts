import * as jspb from 'google-protobuf'

import * as api_v1_common_pb from '../../api/v1/common_pb';
import * as api_v1_payment_pb from '../../api/v1/payment_pb';
import * as api_v1_user_pb from '../../api/v1/user_pb';


export class User extends jspb.Message {
  getUser(): api_v1_user_pb.User | undefined;
  setUser(value?: api_v1_user_pb.User): User;
  hasUser(): boolean;
  clearUser(): User;

  getPaymentCustomer(): api_v1_payment_pb.PaymentCustomer | undefined;
  setPaymentCustomer(value?: api_v1_payment_pb.PaymentCustomer): User;
  hasPaymentCustomer(): boolean;
  clearPaymentCustomer(): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    user?: api_v1_user_pb.User.AsObject,
    paymentCustomer?: api_v1_payment_pb.PaymentCustomer.AsObject,
  }
}

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

  getOauthProvider(): api_v1_common_pb.OAuthProvider;
  setOauthProvider(value: api_v1_common_pb.OAuthProvider): UserServiceListRequest;
  hasOauthProvider(): boolean;
  clearOauthProvider(): UserServiceListRequest;

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
    oauthProvider?: api_v1_common_pb.OAuthProvider,
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
}

export class UserServiceListResponse extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): UserServiceListResponse;
  clearUsersList(): UserServiceListResponse;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceListResponse): UserServiceListResponse.AsObject;
  static serializeBinaryToWriter(message: UserServiceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceListResponse;
  static deserializeBinaryFromReader(message: UserServiceListResponse, reader: jspb.BinaryReader): UserServiceListResponse;
}

export namespace UserServiceListResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class UserServiceAdmitRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): UserServiceAdmitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceAdmitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceAdmitRequest): UserServiceAdmitRequest.AsObject;
  static serializeBinaryToWriter(message: UserServiceAdmitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceAdmitRequest;
  static deserializeBinaryFromReader(message: UserServiceAdmitRequest, reader: jspb.BinaryReader): UserServiceAdmitRequest;
}

export namespace UserServiceAdmitRequest {
  export type AsObject = {
    userId: string,
  }
}

export class UserServiceAdmitResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): UserServiceAdmitResponse;
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
    user?: User.AsObject,
  }
}

