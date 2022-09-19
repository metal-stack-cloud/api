import * as jspb from 'google-protobuf'

import * as api_v1_common_pb from '../../api/v1/common_pb';
import * as api_v1_payment_pb from '../../api/v1/payment_pb';


export class CustomerServiceListRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): CustomerServiceListRequest;
  hasLogin(): boolean;
  clearLogin(): CustomerServiceListRequest;

  getName(): string;
  setName(value: string): CustomerServiceListRequest;
  hasName(): boolean;
  clearName(): CustomerServiceListRequest;

  getEmail(): string;
  setEmail(value: string): CustomerServiceListRequest;
  hasEmail(): boolean;
  clearEmail(): CustomerServiceListRequest;

  getOrganisationId(): string;
  setOrganisationId(value: string): CustomerServiceListRequest;
  hasOrganisationId(): boolean;
  clearOrganisationId(): CustomerServiceListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerServiceListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerServiceListRequest): CustomerServiceListRequest.AsObject;
  static serializeBinaryToWriter(message: CustomerServiceListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerServiceListRequest;
  static deserializeBinaryFromReader(message: CustomerServiceListRequest, reader: jspb.BinaryReader): CustomerServiceListRequest;
}

export namespace CustomerServiceListRequest {
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

export class CustomerServiceListResponse extends jspb.Message {
  getCustomersList(): Array<api_v1_payment_pb.PaymentCustomer>;
  setCustomersList(value: Array<api_v1_payment_pb.PaymentCustomer>): CustomerServiceListResponse;
  clearCustomersList(): CustomerServiceListResponse;
  addCustomers(value?: api_v1_payment_pb.PaymentCustomer, index?: number): api_v1_payment_pb.PaymentCustomer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerServiceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerServiceListResponse): CustomerServiceListResponse.AsObject;
  static serializeBinaryToWriter(message: CustomerServiceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerServiceListResponse;
  static deserializeBinaryFromReader(message: CustomerServiceListResponse, reader: jspb.BinaryReader): CustomerServiceListResponse;
}

export namespace CustomerServiceListResponse {
  export type AsObject = {
    customersList: Array<api_v1_payment_pb.PaymentCustomer.AsObject>,
  }
}

export class CustomerServiceAdmitRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): CustomerServiceAdmitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerServiceAdmitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerServiceAdmitRequest): CustomerServiceAdmitRequest.AsObject;
  static serializeBinaryToWriter(message: CustomerServiceAdmitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerServiceAdmitRequest;
  static deserializeBinaryFromReader(message: CustomerServiceAdmitRequest, reader: jspb.BinaryReader): CustomerServiceAdmitRequest;
}

export namespace CustomerServiceAdmitRequest {
  export type AsObject = {
    customerId: string,
  }
}

export class CustomerServiceAdmitResponse extends jspb.Message {
  getCustomer(): api_v1_payment_pb.PaymentCustomer | undefined;
  setCustomer(value?: api_v1_payment_pb.PaymentCustomer): CustomerServiceAdmitResponse;
  hasCustomer(): boolean;
  clearCustomer(): CustomerServiceAdmitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerServiceAdmitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerServiceAdmitResponse): CustomerServiceAdmitResponse.AsObject;
  static serializeBinaryToWriter(message: CustomerServiceAdmitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerServiceAdmitResponse;
  static deserializeBinaryFromReader(message: CustomerServiceAdmitResponse, reader: jspb.BinaryReader): CustomerServiceAdmitResponse;
}

export namespace CustomerServiceAdmitResponse {
  export type AsObject = {
    customer?: api_v1_payment_pb.PaymentCustomer.AsObject,
  }
}

