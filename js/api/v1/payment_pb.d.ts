import * as jspb from 'google-protobuf'

import * as api_v1_common_pb from '../../api/v1/common_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
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

export class SubscriptionUsageItem extends jspb.Message {
  getSubscriptionItemId(): string;
  setSubscriptionItemId(value: string): SubscriptionUsageItem;

  getSubscriptionItemName(): string;
  setSubscriptionItemName(value: string): SubscriptionUsageItem;

  getTotalUsage(): number;
  setTotalUsage(value: number): SubscriptionUsageItem;

  getPeriodStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPeriodStart(value?: google_protobuf_timestamp_pb.Timestamp): SubscriptionUsageItem;
  hasPeriodStart(): boolean;
  clearPeriodStart(): SubscriptionUsageItem;

  getPeriodEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPeriodEnd(value?: google_protobuf_timestamp_pb.Timestamp): SubscriptionUsageItem;
  hasPeriodEnd(): boolean;
  clearPeriodEnd(): SubscriptionUsageItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionUsageItem.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionUsageItem): SubscriptionUsageItem.AsObject;
  static serializeBinaryToWriter(message: SubscriptionUsageItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionUsageItem;
  static deserializeBinaryFromReader(message: SubscriptionUsageItem, reader: jspb.BinaryReader): SubscriptionUsageItem;
}

export namespace SubscriptionUsageItem {
  export type AsObject = {
    subscriptionItemId: string,
    subscriptionItemName: string,
    totalUsage: number,
    periodStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    periodEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Invoice extends jspb.Message {
  getId(): string;
  setId(value: string): Invoice;

  getPdfDownloadUrl(): string;
  setPdfDownloadUrl(value: string): Invoice;

  getPeriodStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPeriodStart(value?: google_protobuf_timestamp_pb.Timestamp): Invoice;
  hasPeriodStart(): boolean;
  clearPeriodStart(): Invoice;

  getPeriodEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPeriodEnd(value?: google_protobuf_timestamp_pb.Timestamp): Invoice;
  hasPeriodEnd(): boolean;
  clearPeriodEnd(): Invoice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invoice.AsObject;
  static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
  static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invoice;
  static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
  export type AsObject = {
    id: string,
    pdfDownloadUrl: string,
    periodStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    periodEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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

export class PaymentServiceGetSubscriptionUsageRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): PaymentServiceGetSubscriptionUsageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceGetSubscriptionUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceGetSubscriptionUsageRequest): PaymentServiceGetSubscriptionUsageRequest.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceGetSubscriptionUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceGetSubscriptionUsageRequest;
  static deserializeBinaryFromReader(message: PaymentServiceGetSubscriptionUsageRequest, reader: jspb.BinaryReader): PaymentServiceGetSubscriptionUsageRequest;
}

export namespace PaymentServiceGetSubscriptionUsageRequest {
  export type AsObject = {
    login: string,
  }
}

export class PaymentServiceGetSubscriptionUsageResponse extends jspb.Message {
  getSubscriptionUsageItemsList(): Array<SubscriptionUsageItem>;
  setSubscriptionUsageItemsList(value: Array<SubscriptionUsageItem>): PaymentServiceGetSubscriptionUsageResponse;
  clearSubscriptionUsageItemsList(): PaymentServiceGetSubscriptionUsageResponse;
  addSubscriptionUsageItems(value?: SubscriptionUsageItem, index?: number): SubscriptionUsageItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceGetSubscriptionUsageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceGetSubscriptionUsageResponse): PaymentServiceGetSubscriptionUsageResponse.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceGetSubscriptionUsageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceGetSubscriptionUsageResponse;
  static deserializeBinaryFromReader(message: PaymentServiceGetSubscriptionUsageResponse, reader: jspb.BinaryReader): PaymentServiceGetSubscriptionUsageResponse;
}

export namespace PaymentServiceGetSubscriptionUsageResponse {
  export type AsObject = {
    subscriptionUsageItemsList: Array<SubscriptionUsageItem.AsObject>,
  }
}

export class PaymentServiceGetInvoicesRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): PaymentServiceGetInvoicesRequest;

  getCustomerId(): string;
  setCustomerId(value: string): PaymentServiceGetInvoicesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceGetInvoicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceGetInvoicesRequest): PaymentServiceGetInvoicesRequest.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceGetInvoicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceGetInvoicesRequest;
  static deserializeBinaryFromReader(message: PaymentServiceGetInvoicesRequest, reader: jspb.BinaryReader): PaymentServiceGetInvoicesRequest;
}

export namespace PaymentServiceGetInvoicesRequest {
  export type AsObject = {
    login: string,
    customerId: string,
  }
}

export class PaymentServiceGetInvoicesResponse extends jspb.Message {
  getInvoicesList(): Array<Invoice>;
  setInvoicesList(value: Array<Invoice>): PaymentServiceGetInvoicesResponse;
  clearInvoicesList(): PaymentServiceGetInvoicesResponse;
  addInvoices(value?: Invoice, index?: number): Invoice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentServiceGetInvoicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentServiceGetInvoicesResponse): PaymentServiceGetInvoicesResponse.AsObject;
  static serializeBinaryToWriter(message: PaymentServiceGetInvoicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentServiceGetInvoicesResponse;
  static deserializeBinaryFromReader(message: PaymentServiceGetInvoicesResponse, reader: jspb.BinaryReader): PaymentServiceGetInvoicesResponse;
}

export namespace PaymentServiceGetInvoicesResponse {
  export type AsObject = {
    invoicesList: Array<Invoice.AsObject>,
  }
}

