import * as jspb from 'google-protobuf'

import * as api_v1_common_pb from '../../api/v1/common_pb';
import * as validate_validate_pb from '../../validate/validate_pb';


export class PaymentCustomer extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): PaymentCustomer;

  getName(): string;
  setName(value: string): PaymentCustomer;
  hasName(): boolean;
  clearName(): PaymentCustomer;

  getCustomerId(): string;
  setCustomerId(value: string): PaymentCustomer;
  hasCustomerId(): boolean;
  clearCustomerId(): PaymentCustomer;

  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): PaymentCustomer;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): PaymentCustomer;

  getEmail(): string;
  setEmail(value: string): PaymentCustomer;
  hasEmail(): boolean;
  clearEmail(): PaymentCustomer;

  getCard(): Card | undefined;
  setCard(value?: Card): PaymentCustomer;
  hasCard(): boolean;
  clearCard(): PaymentCustomer;

  getPricesList(): Array<Price>;
  setPricesList(value: Array<Price>): PaymentCustomer;
  clearPricesList(): PaymentCustomer;
  addPrices(value?: Price, index?: number): Price;

  getAddress(): Address | undefined;
  setAddress(value?: Address): PaymentCustomer;
  hasAddress(): boolean;
  clearAddress(): PaymentCustomer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentCustomer.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentCustomer): PaymentCustomer.AsObject;
  static serializeBinaryToWriter(message: PaymentCustomer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentCustomer;
  static deserializeBinaryFromReader(message: PaymentCustomer, reader: jspb.BinaryReader): PaymentCustomer;
}

export namespace PaymentCustomer {
  export type AsObject = {
    login: string,
    name?: string,
    customerId?: string,
    paymentMethodId: string,
    subscriptionId: string,
    email?: string,
    card?: Card.AsObject,
    pricesList: Array<Price.AsObject>,
    address?: Address.AsObject,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum CustomerIdCase { 
    _CUSTOMER_ID_NOT_SET = 0,
    CUSTOMER_ID = 3,
  }

  export enum EmailCase { 
    _EMAIL_NOT_SET = 0,
    EMAIL = 6,
  }

  export enum CardCase { 
    _CARD_NOT_SET = 0,
    CARD = 7,
  }
}

export class Card extends jspb.Message {
  getBrand(): string;
  setBrand(value: string): Card;

  getCountry(): string;
  setCountry(value: string): Card;

  getExpMonth(): number;
  setExpMonth(value: number): Card;

  getExpYear(): number;
  setExpYear(value: number): Card;

  getLast4(): string;
  setLast4(value: string): Card;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Card.AsObject;
  static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
  static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Card;
  static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
}

export namespace Card {
  export type AsObject = {
    brand: string,
    country: string,
    expMonth: number,
    expYear: number,
    last4: string,
  }
}

export class Price extends jspb.Message {
  getName(): string;
  setName(value: string): Price;

  getUnitAmountDecimal(): number;
  setUnitAmountDecimal(value: number): Price;

  getCurrency(): string;
  setCurrency(value: string): Price;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Price.AsObject;
  static toObject(includeInstance: boolean, msg: Price): Price.AsObject;
  static serializeBinaryToWriter(message: Price, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Price;
  static deserializeBinaryFromReader(message: Price, reader: jspb.BinaryReader): Price;
}

export namespace Price {
  export type AsObject = {
    name: string,
    unitAmountDecimal: number,
    currency: string,
  }
}

export class Address extends jspb.Message {
  getLine1(): string;
  setLine1(value: string): Address;

  getLine2(): string;
  setLine2(value: string): Address;

  getPostalCode(): string;
  setPostalCode(value: string): Address;

  getCity(): string;
  setCity(value: string): Address;

  getState(): string;
  setState(value: string): Address;

  getCountry(): string;
  setCountry(value: string): Address;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    line1: string,
    line2: string,
    postalCode: string,
    city: string,
    state: string,
    country: string,
  }
}

export class PaymentServiceCreateOrUpdateCustomerRequest extends jspb.Message {
  getCustomer(): PaymentCustomer | undefined;
  setCustomer(value?: PaymentCustomer): PaymentServiceCreateOrUpdateCustomerRequest;
  hasCustomer(): boolean;
  clearCustomer(): PaymentServiceCreateOrUpdateCustomerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceCreateOrUpdateCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceCreateOrUpdateCustomerRequest): PaymentServiceCreateOrUpdateCustomerRequest.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceCreateOrUpdateCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceCreateOrUpdateCustomerRequest;
  static deserializeBinaryFromReader(message: PaymentServiceCreateOrUpdateCustomerRequest, reader: jspb.BinaryReader): PaymentServiceCreateOrUpdateCustomerRequest;
}

export namespace PaymentServiceCreateOrUpdateCustomerRequest {
  export type AsObject = {
    customer?: PaymentCustomer.AsObject,
  }
}

export class PaymentServiceCreateOrUpdateCustomerResponse extends jspb.Message {
  getCustomer(): PaymentCustomer | undefined;
  setCustomer(value?: PaymentCustomer): PaymentServiceCreateOrUpdateCustomerResponse;
  hasCustomer(): boolean;
  clearCustomer(): PaymentServiceCreateOrUpdateCustomerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceCreateOrUpdateCustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceCreateOrUpdateCustomerResponse): PaymentServiceCreateOrUpdateCustomerResponse.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceCreateOrUpdateCustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceCreateOrUpdateCustomerResponse;
  static deserializeBinaryFromReader(message: PaymentServiceCreateOrUpdateCustomerResponse, reader: jspb.BinaryReader): PaymentServiceCreateOrUpdateCustomerResponse;
}

export namespace PaymentServiceCreateOrUpdateCustomerResponse {
  export type AsObject = {
    customer?: PaymentCustomer.AsObject,
  }
}

export class PaymentServiceGetCustomerRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): PaymentServiceGetCustomerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceGetCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceGetCustomerRequest): PaymentServiceGetCustomerRequest.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceGetCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceGetCustomerRequest;
  static deserializeBinaryFromReader(message: PaymentServiceGetCustomerRequest, reader: jspb.BinaryReader): PaymentServiceGetCustomerRequest;
}

export namespace PaymentServiceGetCustomerRequest {
  export type AsObject = {
    customerId: string,
  }
}

export class PaymentServiceGetCustomerResponse extends jspb.Message {
  getCustomer(): PaymentCustomer | undefined;
  setCustomer(value?: PaymentCustomer): PaymentServiceGetCustomerResponse;
  hasCustomer(): boolean;
  clearCustomer(): PaymentServiceGetCustomerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceGetCustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceGetCustomerResponse): PaymentServiceGetCustomerResponse.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceGetCustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceGetCustomerResponse;
  static deserializeBinaryFromReader(message: PaymentServiceGetCustomerResponse, reader: jspb.BinaryReader): PaymentServiceGetCustomerResponse;
}

export namespace PaymentServiceGetCustomerResponse {
  export type AsObject = {
    customer?: PaymentCustomer.AsObject,
  }
}

export class PaymentServiceGetCustomerWithLoginRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): PaymentServiceGetCustomerWithLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceGetCustomerWithLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceGetCustomerWithLoginRequest): PaymentServiceGetCustomerWithLoginRequest.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceGetCustomerWithLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceGetCustomerWithLoginRequest;
  static deserializeBinaryFromReader(message: PaymentServiceGetCustomerWithLoginRequest, reader: jspb.BinaryReader): PaymentServiceGetCustomerWithLoginRequest;
}

export namespace PaymentServiceGetCustomerWithLoginRequest {
  export type AsObject = {
    login: string,
  }
}

export class PaymentServiceGetCustomerWithLoginResponse extends jspb.Message {
  getCustomer(): PaymentCustomer | undefined;
  setCustomer(value?: PaymentCustomer): PaymentServiceGetCustomerWithLoginResponse;
  hasCustomer(): boolean;
  clearCustomer(): PaymentServiceGetCustomerWithLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceGetCustomerWithLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceGetCustomerWithLoginResponse): PaymentServiceGetCustomerWithLoginResponse.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceGetCustomerWithLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceGetCustomerWithLoginResponse;
  static deserializeBinaryFromReader(message: PaymentServiceGetCustomerWithLoginResponse, reader: jspb.BinaryReader): PaymentServiceGetCustomerWithLoginResponse;
}

export namespace PaymentServiceGetCustomerWithLoginResponse {
  export type AsObject = {
    customer?: PaymentCustomer.AsObject,
  }
}

export class PaymentServiceCheckIfCustomerExistsRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): PaymentServiceCheckIfCustomerExistsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceCheckIfCustomerExistsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceCheckIfCustomerExistsRequest): PaymentServiceCheckIfCustomerExistsRequest.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceCheckIfCustomerExistsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceCheckIfCustomerExistsRequest;
  static deserializeBinaryFromReader(message: PaymentServiceCheckIfCustomerExistsRequest, reader: jspb.BinaryReader): PaymentServiceCheckIfCustomerExistsRequest;
}

export namespace PaymentServiceCheckIfCustomerExistsRequest {
  export type AsObject = {
    login: string,
  }
}

export class PaymentServiceCheckIfCustomerExistsResponse extends jspb.Message {
  getCustomer(): PaymentCustomer | undefined;
  setCustomer(value?: PaymentCustomer): PaymentServiceCheckIfCustomerExistsResponse;
  hasCustomer(): boolean;
  clearCustomer(): PaymentServiceCheckIfCustomerExistsResponse;

  getExists(): boolean;
  setExists(value: boolean): PaymentServiceCheckIfCustomerExistsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceCheckIfCustomerExistsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceCheckIfCustomerExistsResponse): PaymentServiceCheckIfCustomerExistsResponse.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceCheckIfCustomerExistsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceCheckIfCustomerExistsResponse;
  static deserializeBinaryFromReader(message: PaymentServiceCheckIfCustomerExistsResponse, reader: jspb.BinaryReader): PaymentServiceCheckIfCustomerExistsResponse;
}

export namespace PaymentServiceCheckIfCustomerExistsResponse {
  export type AsObject = {
    customer?: PaymentCustomer.AsObject,
    exists: boolean,
  }
}

export class PaymentServiceHasPaymentMethodRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): PaymentServiceHasPaymentMethodRequest;

  getProject(): string;
  setProject(value: string): PaymentServiceHasPaymentMethodRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceHasPaymentMethodRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceHasPaymentMethodRequest): PaymentServiceHasPaymentMethodRequest.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceHasPaymentMethodRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceHasPaymentMethodRequest;
  static deserializeBinaryFromReader(message: PaymentServiceHasPaymentMethodRequest, reader: jspb.BinaryReader): PaymentServiceHasPaymentMethodRequest;
}

export namespace PaymentServiceHasPaymentMethodRequest {
  export type AsObject = {
    login: string,
    project: string,
  }
}

export class PaymentServiceHasPaymentMethodResponse extends jspb.Message {
  getExists(): boolean;
  setExists(value: boolean): PaymentServiceHasPaymentMethodResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceHasPaymentMethodResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceHasPaymentMethodResponse): PaymentServiceHasPaymentMethodResponse.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceHasPaymentMethodResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceHasPaymentMethodResponse;
  static deserializeBinaryFromReader(message: PaymentServiceHasPaymentMethodResponse, reader: jspb.BinaryReader): PaymentServiceHasPaymentMethodResponse;
}

export namespace PaymentServiceHasPaymentMethodResponse {
  export type AsObject = {
    exists: boolean,
  }
}

export class PaymentServiceDeletePaymentMethodRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): PaymentServiceDeletePaymentMethodRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceDeletePaymentMethodRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceDeletePaymentMethodRequest): PaymentServiceDeletePaymentMethodRequest.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceDeletePaymentMethodRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceDeletePaymentMethodRequest;
  static deserializeBinaryFromReader(message: PaymentServiceDeletePaymentMethodRequest, reader: jspb.BinaryReader): PaymentServiceDeletePaymentMethodRequest;
}

export namespace PaymentServiceDeletePaymentMethodRequest {
  export type AsObject = {
    login: string,
  }
}

export class PaymentServiceDeletePaymentMethodResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceDeletePaymentMethodResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceDeletePaymentMethodResponse): PaymentServiceDeletePaymentMethodResponse.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceDeletePaymentMethodResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceDeletePaymentMethodResponse;
  static deserializeBinaryFromReader(message: PaymentServiceDeletePaymentMethodResponse, reader: jspb.BinaryReader): PaymentServiceDeletePaymentMethodResponse;
}

export namespace PaymentServiceDeletePaymentMethodResponse {
  export type AsObject = {
  }
}

