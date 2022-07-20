import * as jspb from 'google-protobuf'

import * as api_v1_common_pb from '../../api/v1/common_pb';
import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Tenant extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): Tenant;

  getName(): string;
  setName(value: string): Tenant;

  getEmail(): string;
  setEmail(value: string): Tenant;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): Tenant;

  getOauthProvider(): api_v1_common_pb.OAuthProvider;
  setOauthProvider(value: api_v1_common_pb.OAuthProvider): Tenant;

  getPaymentDetails(): PaymentDetails | undefined;
  setPaymentDetails(value?: PaymentDetails): Tenant;
  hasPaymentDetails(): boolean;
  clearPaymentDetails(): Tenant;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Tenant;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Tenant;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Tenant;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Tenant;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Tenant;
  hasDeletedAt(): boolean;
  clearDeletedAt(): Tenant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tenant.AsObject;
  static toObject(includeInstance: boolean, msg: Tenant): Tenant.AsObject;
  static serializeBinaryToWriter(message: Tenant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tenant;
  static deserializeBinaryFromReader(message: Tenant, reader: jspb.BinaryReader): Tenant;
}

export namespace Tenant {
  export type AsObject = {
    login: string,
    name: string,
    email: string,
    avatarUrl: string,
    oauthProvider: api_v1_common_pb.OAuthProvider,
    paymentDetails?: PaymentDetails.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PaymentDetails extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): PaymentDetails;

  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): PaymentDetails;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): PaymentDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentDetails.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentDetails): PaymentDetails.AsObject;
  static serializeBinaryToWriter(message: PaymentDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentDetails;
  static deserializeBinaryFromReader(message: PaymentDetails, reader: jspb.BinaryReader): PaymentDetails;
}

export namespace PaymentDetails {
  export type AsObject = {
    customerId: string,
    paymentMethodId: string,
    subscriptionId: string,
  }
}

export class PaymentDetailsUpdate extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): PaymentDetailsUpdate;
  hasCustomerId(): boolean;
  clearCustomerId(): PaymentDetailsUpdate;

  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): PaymentDetailsUpdate;
  hasPaymentMethodId(): boolean;
  clearPaymentMethodId(): PaymentDetailsUpdate;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): PaymentDetailsUpdate;
  hasSubscriptionId(): boolean;
  clearSubscriptionId(): PaymentDetailsUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentDetailsUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentDetailsUpdate): PaymentDetailsUpdate.AsObject;
  static serializeBinaryToWriter(message: PaymentDetailsUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentDetailsUpdate;
  static deserializeBinaryFromReader(message: PaymentDetailsUpdate, reader: jspb.BinaryReader): PaymentDetailsUpdate;
}

export namespace PaymentDetailsUpdate {
  export type AsObject = {
    customerId?: string,
    paymentMethodId?: string,
    subscriptionId?: string,
  }

  export enum CustomerIdCase { 
    _CUSTOMER_ID_NOT_SET = 0,
    CUSTOMER_ID = 1,
  }

  export enum PaymentMethodIdCase { 
    _PAYMENT_METHOD_ID_NOT_SET = 0,
    PAYMENT_METHOD_ID = 2,
  }

  export enum SubscriptionIdCase { 
    _SUBSCRIPTION_ID_NOT_SET = 0,
    SUBSCRIPTION_ID = 3,
  }
}

export class TenantServiceGetRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): TenantServiceGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantServiceGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TenantServiceGetRequest): TenantServiceGetRequest.AsObject;
  static serializeBinaryToWriter(message: TenantServiceGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantServiceGetRequest;
  static deserializeBinaryFromReader(message: TenantServiceGetRequest, reader: jspb.BinaryReader): TenantServiceGetRequest;
}

export namespace TenantServiceGetRequest {
  export type AsObject = {
    login: string,
  }
}

export class TenantServiceCreateRequest extends jspb.Message {
  getTenant(): Tenant | undefined;
  setTenant(value?: Tenant): TenantServiceCreateRequest;
  hasTenant(): boolean;
  clearTenant(): TenantServiceCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantServiceCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TenantServiceCreateRequest): TenantServiceCreateRequest.AsObject;
  static serializeBinaryToWriter(message: TenantServiceCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantServiceCreateRequest;
  static deserializeBinaryFromReader(message: TenantServiceCreateRequest, reader: jspb.BinaryReader): TenantServiceCreateRequest;
}

export namespace TenantServiceCreateRequest {
  export type AsObject = {
    tenant?: Tenant.AsObject,
  }
}

export class TenantServiceCreateOrUpdateRequest extends jspb.Message {
  getTenant(): Tenant | undefined;
  setTenant(value?: Tenant): TenantServiceCreateOrUpdateRequest;
  hasTenant(): boolean;
  clearTenant(): TenantServiceCreateOrUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantServiceCreateOrUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TenantServiceCreateOrUpdateRequest): TenantServiceCreateOrUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: TenantServiceCreateOrUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantServiceCreateOrUpdateRequest;
  static deserializeBinaryFromReader(message: TenantServiceCreateOrUpdateRequest, reader: jspb.BinaryReader): TenantServiceCreateOrUpdateRequest;
}

export namespace TenantServiceCreateOrUpdateRequest {
  export type AsObject = {
    tenant?: Tenant.AsObject,
  }
}

export class TenantServiceUpdateRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): TenantServiceUpdateRequest;

  getName(): string;
  setName(value: string): TenantServiceUpdateRequest;
  hasName(): boolean;
  clearName(): TenantServiceUpdateRequest;

  getEmail(): string;
  setEmail(value: string): TenantServiceUpdateRequest;
  hasEmail(): boolean;
  clearEmail(): TenantServiceUpdateRequest;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): TenantServiceUpdateRequest;
  hasAvatarUrl(): boolean;
  clearAvatarUrl(): TenantServiceUpdateRequest;

  getPaymentDetails(): PaymentDetailsUpdate | undefined;
  setPaymentDetails(value?: PaymentDetailsUpdate): TenantServiceUpdateRequest;
  hasPaymentDetails(): boolean;
  clearPaymentDetails(): TenantServiceUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantServiceUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TenantServiceUpdateRequest): TenantServiceUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: TenantServiceUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantServiceUpdateRequest;
  static deserializeBinaryFromReader(message: TenantServiceUpdateRequest, reader: jspb.BinaryReader): TenantServiceUpdateRequest;
}

export namespace TenantServiceUpdateRequest {
  export type AsObject = {
    login: string,
    name?: string,
    email?: string,
    avatarUrl?: string,
    paymentDetails?: PaymentDetailsUpdate.AsObject,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum EmailCase { 
    _EMAIL_NOT_SET = 0,
    EMAIL = 3,
  }

  export enum AvatarUrlCase { 
    _AVATAR_URL_NOT_SET = 0,
    AVATAR_URL = 5,
  }

  export enum PaymentDetailsCase { 
    _PAYMENT_DETAILS_NOT_SET = 0,
    PAYMENT_DETAILS = 8,
  }
}

export class TenantServiceDeleteRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): TenantServiceDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantServiceDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TenantServiceDeleteRequest): TenantServiceDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: TenantServiceDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantServiceDeleteRequest;
  static deserializeBinaryFromReader(message: TenantServiceDeleteRequest, reader: jspb.BinaryReader): TenantServiceDeleteRequest;
}

export namespace TenantServiceDeleteRequest {
  export type AsObject = {
    login: string,
  }
}

export class TenantServiceGetResponse extends jspb.Message {
  getTenant(): Tenant | undefined;
  setTenant(value?: Tenant): TenantServiceGetResponse;
  hasTenant(): boolean;
  clearTenant(): TenantServiceGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantServiceGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TenantServiceGetResponse): TenantServiceGetResponse.AsObject;
  static serializeBinaryToWriter(message: TenantServiceGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantServiceGetResponse;
  static deserializeBinaryFromReader(message: TenantServiceGetResponse, reader: jspb.BinaryReader): TenantServiceGetResponse;
}

export namespace TenantServiceGetResponse {
  export type AsObject = {
    tenant?: Tenant.AsObject,
  }
}

export class TenantServiceCreateResponse extends jspb.Message {
  getTenant(): Tenant | undefined;
  setTenant(value?: Tenant): TenantServiceCreateResponse;
  hasTenant(): boolean;
  clearTenant(): TenantServiceCreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantServiceCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TenantServiceCreateResponse): TenantServiceCreateResponse.AsObject;
  static serializeBinaryToWriter(message: TenantServiceCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantServiceCreateResponse;
  static deserializeBinaryFromReader(message: TenantServiceCreateResponse, reader: jspb.BinaryReader): TenantServiceCreateResponse;
}

export namespace TenantServiceCreateResponse {
  export type AsObject = {
    tenant?: Tenant.AsObject,
  }
}

export class TenantServiceCreateOrUpdateResponse extends jspb.Message {
  getTenant(): Tenant | undefined;
  setTenant(value?: Tenant): TenantServiceCreateOrUpdateResponse;
  hasTenant(): boolean;
  clearTenant(): TenantServiceCreateOrUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantServiceCreateOrUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TenantServiceCreateOrUpdateResponse): TenantServiceCreateOrUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: TenantServiceCreateOrUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantServiceCreateOrUpdateResponse;
  static deserializeBinaryFromReader(message: TenantServiceCreateOrUpdateResponse, reader: jspb.BinaryReader): TenantServiceCreateOrUpdateResponse;
}

export namespace TenantServiceCreateOrUpdateResponse {
  export type AsObject = {
    tenant?: Tenant.AsObject,
  }
}

export class TenantServiceUpdateResponse extends jspb.Message {
  getTenant(): Tenant | undefined;
  setTenant(value?: Tenant): TenantServiceUpdateResponse;
  hasTenant(): boolean;
  clearTenant(): TenantServiceUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantServiceUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TenantServiceUpdateResponse): TenantServiceUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: TenantServiceUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantServiceUpdateResponse;
  static deserializeBinaryFromReader(message: TenantServiceUpdateResponse, reader: jspb.BinaryReader): TenantServiceUpdateResponse;
}

export namespace TenantServiceUpdateResponse {
  export type AsObject = {
    tenant?: Tenant.AsObject,
  }
}

export class TenantServiceDeleteResponse extends jspb.Message {
  getTenant(): Tenant | undefined;
  setTenant(value?: Tenant): TenantServiceDeleteResponse;
  hasTenant(): boolean;
  clearTenant(): TenantServiceDeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantServiceDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TenantServiceDeleteResponse): TenantServiceDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: TenantServiceDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantServiceDeleteResponse;
  static deserializeBinaryFromReader(message: TenantServiceDeleteResponse, reader: jspb.BinaryReader): TenantServiceDeleteResponse;
}

export namespace TenantServiceDeleteResponse {
  export type AsObject = {
    tenant?: Tenant.AsObject,
  }
}

