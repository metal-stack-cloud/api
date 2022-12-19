// @generated by protoc-gen-es v0.4.0 with parameter "target=ts"
// @generated from file api/v1/tenant.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { OAuthProvider } from "./common_pb.js";
import { Coupon } from "./payment_pb.js";

/**
 * Tenant
 *
 * @generated from message api.v1.Tenant
 */
export class Tenant extends Message<Tenant> {
  /**
   * the login at the provider
   *
   * @generated from field: string login = 1;
   */
  login = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string email = 3;
   */
  email = "";

  /**
   * @generated from field: string avatar_url = 5;
   */
  avatarUrl = "";

  /**
   * @generated from field: api.v1.OAuthProvider oauth_provider = 6;
   */
  oauthProvider = OAuthProvider.UNSPECIFIED;

  /**
   * @generated from field: api.v1.PaymentDetails payment_details = 8;
   */
  paymentDetails?: PaymentDetails;

  /**
   * @generated from field: bool admitted = 9;
   */
  admitted = false;

  /**
   * @generated from field: string phone_number = 10;
   */
  phoneNumber = "";

  /**
   * @generated from field: api.v1.TermsAndConditions terms_and_conditions = 11;
   */
  termsAndConditions?: TermsAndConditions;

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 20;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 21;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp deleted_at = 22;
   */
  deletedAt?: Timestamp;

  constructor(data?: PartialMessage<Tenant>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.Tenant";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "oauth_provider", kind: "enum", T: proto3.getEnumType(OAuthProvider) },
    { no: 8, name: "payment_details", kind: "message", T: PaymentDetails },
    { no: 9, name: "admitted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "terms_and_conditions", kind: "message", T: TermsAndConditions },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 22, name: "deleted_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tenant {
    return new Tenant().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tenant {
    return new Tenant().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tenant {
    return new Tenant().fromJsonString(jsonString, options);
  }

  static equals(a: Tenant | PlainMessage<Tenant> | undefined, b: Tenant | PlainMessage<Tenant> | undefined): boolean {
    return proto3.util.equals(Tenant, a, b);
  }
}

/**
 * @generated from message api.v1.PaymentDetails
 */
export class PaymentDetails extends Message<PaymentDetails> {
  /**
   * @generated from field: string customer_id = 1;
   */
  customerId = "";

  /**
   * @generated from field: string payment_method_id = 2;
   */
  paymentMethodId = "";

  /**
   * @generated from field: string subscription_id = 3;
   */
  subscriptionId = "";

  /**
   * @generated from field: repeated api.v1.Coupon coupons = 4;
   */
  coupons: Coupon[] = [];

  /**
   * @generated from field: string vat = 5;
   */
  vat = "";

  constructor(data?: PartialMessage<PaymentDetails>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.PaymentDetails";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "customer_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "payment_method_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "coupons", kind: "message", T: Coupon, repeated: true },
    { no: 5, name: "vat", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentDetails {
    return new PaymentDetails().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentDetails {
    return new PaymentDetails().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentDetails {
    return new PaymentDetails().fromJsonString(jsonString, options);
  }

  static equals(a: PaymentDetails | PlainMessage<PaymentDetails> | undefined, b: PaymentDetails | PlainMessage<PaymentDetails> | undefined): boolean {
    return proto3.util.equals(PaymentDetails, a, b);
  }
}

/**
 * @generated from message api.v1.PaymentDetailsUpdate
 */
export class PaymentDetailsUpdate extends Message<PaymentDetailsUpdate> {
  /**
   * @generated from field: optional string customer_id = 1;
   */
  customerId?: string;

  /**
   * @generated from field: optional string payment_method_id = 2;
   */
  paymentMethodId?: string;

  /**
   * @generated from field: optional string subscription_id = 3;
   */
  subscriptionId?: string;

  /**
   * @generated from field: optional string vat = 4;
   */
  vat?: string;

  constructor(data?: PartialMessage<PaymentDetailsUpdate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.PaymentDetailsUpdate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "customer_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "payment_method_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "vat", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentDetailsUpdate {
    return new PaymentDetailsUpdate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentDetailsUpdate {
    return new PaymentDetailsUpdate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentDetailsUpdate {
    return new PaymentDetailsUpdate().fromJsonString(jsonString, options);
  }

  static equals(a: PaymentDetailsUpdate | PlainMessage<PaymentDetailsUpdate> | undefined, b: PaymentDetailsUpdate | PlainMessage<PaymentDetailsUpdate> | undefined): boolean {
    return proto3.util.equals(PaymentDetailsUpdate, a, b);
  }
}

/**
 * @generated from message api.v1.TermsAndConditions
 */
export class TermsAndConditions extends Message<TermsAndConditions> {
  /**
   * @generated from field: bool accepted = 1;
   */
  accepted = false;

  /**
   * @generated from field: google.protobuf.Timestamp when = 2;
   */
  when?: Timestamp;

  constructor(data?: PartialMessage<TermsAndConditions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TermsAndConditions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "accepted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "when", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TermsAndConditions {
    return new TermsAndConditions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TermsAndConditions {
    return new TermsAndConditions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TermsAndConditions {
    return new TermsAndConditions().fromJsonString(jsonString, options);
  }

  static equals(a: TermsAndConditions | PlainMessage<TermsAndConditions> | undefined, b: TermsAndConditions | PlainMessage<TermsAndConditions> | undefined): boolean {
    return proto3.util.equals(TermsAndConditions, a, b);
  }
}

/**
 * @generated from message api.v1.TermsAndConditionsUpdate
 */
export class TermsAndConditionsUpdate extends Message<TermsAndConditionsUpdate> {
  /**
   * @generated from field: optional bool accepted = 1;
   */
  accepted?: boolean;

  /**
   * @generated from field: optional google.protobuf.Timestamp when = 2;
   */
  when?: Timestamp;

  constructor(data?: PartialMessage<TermsAndConditionsUpdate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TermsAndConditionsUpdate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "accepted", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 2, name: "when", kind: "message", T: Timestamp, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TermsAndConditionsUpdate {
    return new TermsAndConditionsUpdate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TermsAndConditionsUpdate {
    return new TermsAndConditionsUpdate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TermsAndConditionsUpdate {
    return new TermsAndConditionsUpdate().fromJsonString(jsonString, options);
  }

  static equals(a: TermsAndConditionsUpdate | PlainMessage<TermsAndConditionsUpdate> | undefined, b: TermsAndConditionsUpdate | PlainMessage<TermsAndConditionsUpdate> | undefined): boolean {
    return proto3.util.equals(TermsAndConditionsUpdate, a, b);
  }
}

/**
 * @generated from message api.v1.TenantServiceGetRequest
 */
export class TenantServiceGetRequest extends Message<TenantServiceGetRequest> {
  /**
   * @generated from field: string login = 1;
   */
  login = "";

  constructor(data?: PartialMessage<TenantServiceGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TenantServiceGetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceGetRequest {
    return new TenantServiceGetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceGetRequest {
    return new TenantServiceGetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceGetRequest {
    return new TenantServiceGetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceGetRequest | PlainMessage<TenantServiceGetRequest> | undefined, b: TenantServiceGetRequest | PlainMessage<TenantServiceGetRequest> | undefined): boolean {
    return proto3.util.equals(TenantServiceGetRequest, a, b);
  }
}

/**
 * @generated from message api.v1.TenantServiceCreateRequest
 */
export class TenantServiceCreateRequest extends Message<TenantServiceCreateRequest> {
  /**
   * @generated from field: api.v1.Tenant tenant = 1;
   */
  tenant?: Tenant;

  constructor(data?: PartialMessage<TenantServiceCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TenantServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCreateRequest {
    return new TenantServiceCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCreateRequest {
    return new TenantServiceCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCreateRequest {
    return new TenantServiceCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceCreateRequest | PlainMessage<TenantServiceCreateRequest> | undefined, b: TenantServiceCreateRequest | PlainMessage<TenantServiceCreateRequest> | undefined): boolean {
    return proto3.util.equals(TenantServiceCreateRequest, a, b);
  }
}

/**
 * @generated from message api.v1.TenantServiceCreateOrUpdateRequest
 */
export class TenantServiceCreateOrUpdateRequest extends Message<TenantServiceCreateOrUpdateRequest> {
  /**
   * @generated from field: api.v1.Tenant tenant = 1;
   */
  tenant?: Tenant;

  constructor(data?: PartialMessage<TenantServiceCreateOrUpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TenantServiceCreateOrUpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCreateOrUpdateRequest {
    return new TenantServiceCreateOrUpdateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCreateOrUpdateRequest {
    return new TenantServiceCreateOrUpdateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCreateOrUpdateRequest {
    return new TenantServiceCreateOrUpdateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceCreateOrUpdateRequest | PlainMessage<TenantServiceCreateOrUpdateRequest> | undefined, b: TenantServiceCreateOrUpdateRequest | PlainMessage<TenantServiceCreateOrUpdateRequest> | undefined): boolean {
    return proto3.util.equals(TenantServiceCreateOrUpdateRequest, a, b);
  }
}

/**
 * @generated from message api.v1.TenantServiceUpdateRequest
 */
export class TenantServiceUpdateRequest extends Message<TenantServiceUpdateRequest> {
  /**
   * the login at the provider
   *
   * @generated from field: string login = 1;
   */
  login = "";

  /**
   * @generated from field: optional string name = 2;
   */
  name?: string;

  /**
   * @generated from field: optional string email = 3;
   */
  email?: string;

  /**
   * @generated from field: optional string avatar_url = 5;
   */
  avatarUrl?: string;

  /**
   * @generated from field: optional api.v1.PaymentDetailsUpdate payment_details = 8;
   */
  paymentDetails?: PaymentDetailsUpdate;

  /**
   * @generated from field: optional api.v1.TermsAndConditionsUpdate terms_and_conditions = 9;
   */
  termsAndConditions?: TermsAndConditionsUpdate;

  constructor(data?: PartialMessage<TenantServiceUpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TenantServiceUpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "payment_details", kind: "message", T: PaymentDetailsUpdate, opt: true },
    { no: 9, name: "terms_and_conditions", kind: "message", T: TermsAndConditionsUpdate, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceUpdateRequest {
    return new TenantServiceUpdateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceUpdateRequest {
    return new TenantServiceUpdateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceUpdateRequest {
    return new TenantServiceUpdateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceUpdateRequest | PlainMessage<TenantServiceUpdateRequest> | undefined, b: TenantServiceUpdateRequest | PlainMessage<TenantServiceUpdateRequest> | undefined): boolean {
    return proto3.util.equals(TenantServiceUpdateRequest, a, b);
  }
}

/**
 * @generated from message api.v1.TenantServiceDeleteRequest
 */
export class TenantServiceDeleteRequest extends Message<TenantServiceDeleteRequest> {
  /**
   * @generated from field: string login = 1;
   */
  login = "";

  constructor(data?: PartialMessage<TenantServiceDeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TenantServiceDeleteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceDeleteRequest {
    return new TenantServiceDeleteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceDeleteRequest {
    return new TenantServiceDeleteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceDeleteRequest {
    return new TenantServiceDeleteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceDeleteRequest | PlainMessage<TenantServiceDeleteRequest> | undefined, b: TenantServiceDeleteRequest | PlainMessage<TenantServiceDeleteRequest> | undefined): boolean {
    return proto3.util.equals(TenantServiceDeleteRequest, a, b);
  }
}

/**
 * @generated from message api.v1.TenantServiceCheckAdmittedRequest
 */
export class TenantServiceCheckAdmittedRequest extends Message<TenantServiceCheckAdmittedRequest> {
  /**
   * @generated from field: string login = 1;
   */
  login = "";

  constructor(data?: PartialMessage<TenantServiceCheckAdmittedRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TenantServiceCheckAdmittedRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCheckAdmittedRequest {
    return new TenantServiceCheckAdmittedRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCheckAdmittedRequest {
    return new TenantServiceCheckAdmittedRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCheckAdmittedRequest {
    return new TenantServiceCheckAdmittedRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceCheckAdmittedRequest | PlainMessage<TenantServiceCheckAdmittedRequest> | undefined, b: TenantServiceCheckAdmittedRequest | PlainMessage<TenantServiceCheckAdmittedRequest> | undefined): boolean {
    return proto3.util.equals(TenantServiceCheckAdmittedRequest, a, b);
  }
}

/**
 * @generated from message api.v1.TenantServiceRequestAdmissionRequest
 */
export class TenantServiceRequestAdmissionRequest extends Message<TenantServiceRequestAdmissionRequest> {
  /**
   * @generated from field: string login = 1;
   */
  login = "";

  /**
   * @generated from field: string email = 2;
   */
  email = "";

  /**
   * @generated from field: string phone_number = 3;
   */
  phoneNumber = "";

  constructor(data?: PartialMessage<TenantServiceRequestAdmissionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TenantServiceRequestAdmissionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceRequestAdmissionRequest {
    return new TenantServiceRequestAdmissionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceRequestAdmissionRequest {
    return new TenantServiceRequestAdmissionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceRequestAdmissionRequest {
    return new TenantServiceRequestAdmissionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceRequestAdmissionRequest | PlainMessage<TenantServiceRequestAdmissionRequest> | undefined, b: TenantServiceRequestAdmissionRequest | PlainMessage<TenantServiceRequestAdmissionRequest> | undefined): boolean {
    return proto3.util.equals(TenantServiceRequestAdmissionRequest, a, b);
  }
}

/**
 * Responses
 *
 * @generated from message api.v1.TenantServiceGetResponse
 */
export class TenantServiceGetResponse extends Message<TenantServiceGetResponse> {
  /**
   * @generated from field: api.v1.Tenant tenant = 1;
   */
  tenant?: Tenant;

  constructor(data?: PartialMessage<TenantServiceGetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TenantServiceGetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceGetResponse {
    return new TenantServiceGetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceGetResponse {
    return new TenantServiceGetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceGetResponse {
    return new TenantServiceGetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceGetResponse | PlainMessage<TenantServiceGetResponse> | undefined, b: TenantServiceGetResponse | PlainMessage<TenantServiceGetResponse> | undefined): boolean {
    return proto3.util.equals(TenantServiceGetResponse, a, b);
  }
}

/**
 * @generated from message api.v1.TenantServiceCreateResponse
 */
export class TenantServiceCreateResponse extends Message<TenantServiceCreateResponse> {
  /**
   * @generated from field: api.v1.Tenant tenant = 1;
   */
  tenant?: Tenant;

  constructor(data?: PartialMessage<TenantServiceCreateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TenantServiceCreateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCreateResponse {
    return new TenantServiceCreateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCreateResponse {
    return new TenantServiceCreateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCreateResponse {
    return new TenantServiceCreateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceCreateResponse | PlainMessage<TenantServiceCreateResponse> | undefined, b: TenantServiceCreateResponse | PlainMessage<TenantServiceCreateResponse> | undefined): boolean {
    return proto3.util.equals(TenantServiceCreateResponse, a, b);
  }
}

/**
 * @generated from message api.v1.TenantServiceCreateOrUpdateResponse
 */
export class TenantServiceCreateOrUpdateResponse extends Message<TenantServiceCreateOrUpdateResponse> {
  /**
   * @generated from field: api.v1.Tenant tenant = 1;
   */
  tenant?: Tenant;

  constructor(data?: PartialMessage<TenantServiceCreateOrUpdateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TenantServiceCreateOrUpdateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCreateOrUpdateResponse {
    return new TenantServiceCreateOrUpdateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCreateOrUpdateResponse {
    return new TenantServiceCreateOrUpdateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCreateOrUpdateResponse {
    return new TenantServiceCreateOrUpdateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceCreateOrUpdateResponse | PlainMessage<TenantServiceCreateOrUpdateResponse> | undefined, b: TenantServiceCreateOrUpdateResponse | PlainMessage<TenantServiceCreateOrUpdateResponse> | undefined): boolean {
    return proto3.util.equals(TenantServiceCreateOrUpdateResponse, a, b);
  }
}

/**
 * @generated from message api.v1.TenantServiceUpdateResponse
 */
export class TenantServiceUpdateResponse extends Message<TenantServiceUpdateResponse> {
  /**
   * @generated from field: api.v1.Tenant tenant = 1;
   */
  tenant?: Tenant;

  constructor(data?: PartialMessage<TenantServiceUpdateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TenantServiceUpdateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceUpdateResponse {
    return new TenantServiceUpdateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceUpdateResponse {
    return new TenantServiceUpdateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceUpdateResponse {
    return new TenantServiceUpdateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceUpdateResponse | PlainMessage<TenantServiceUpdateResponse> | undefined, b: TenantServiceUpdateResponse | PlainMessage<TenantServiceUpdateResponse> | undefined): boolean {
    return proto3.util.equals(TenantServiceUpdateResponse, a, b);
  }
}

/**
 * @generated from message api.v1.TenantServiceDeleteResponse
 */
export class TenantServiceDeleteResponse extends Message<TenantServiceDeleteResponse> {
  /**
   * @generated from field: api.v1.Tenant tenant = 1;
   */
  tenant?: Tenant;

  constructor(data?: PartialMessage<TenantServiceDeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TenantServiceDeleteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceDeleteResponse {
    return new TenantServiceDeleteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceDeleteResponse {
    return new TenantServiceDeleteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceDeleteResponse {
    return new TenantServiceDeleteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceDeleteResponse | PlainMessage<TenantServiceDeleteResponse> | undefined, b: TenantServiceDeleteResponse | PlainMessage<TenantServiceDeleteResponse> | undefined): boolean {
    return proto3.util.equals(TenantServiceDeleteResponse, a, b);
  }
}

/**
 * @generated from message api.v1.TenantServiceCheckAdmittedResponse
 */
export class TenantServiceCheckAdmittedResponse extends Message<TenantServiceCheckAdmittedResponse> {
  /**
   * @generated from field: bool admitted = 1;
   */
  admitted = false;

  constructor(data?: PartialMessage<TenantServiceCheckAdmittedResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TenantServiceCheckAdmittedResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "admitted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCheckAdmittedResponse {
    return new TenantServiceCheckAdmittedResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCheckAdmittedResponse {
    return new TenantServiceCheckAdmittedResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCheckAdmittedResponse {
    return new TenantServiceCheckAdmittedResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceCheckAdmittedResponse | PlainMessage<TenantServiceCheckAdmittedResponse> | undefined, b: TenantServiceCheckAdmittedResponse | PlainMessage<TenantServiceCheckAdmittedResponse> | undefined): boolean {
    return proto3.util.equals(TenantServiceCheckAdmittedResponse, a, b);
  }
}

/**
 * @generated from message api.v1.TenantServiceRequestAdmissionResponse
 */
export class TenantServiceRequestAdmissionResponse extends Message<TenantServiceRequestAdmissionResponse> {
  /**
   * @generated from field: api.v1.Tenant tenant = 1;
   */
  tenant?: Tenant;

  constructor(data?: PartialMessage<TenantServiceRequestAdmissionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TenantServiceRequestAdmissionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceRequestAdmissionResponse {
    return new TenantServiceRequestAdmissionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceRequestAdmissionResponse {
    return new TenantServiceRequestAdmissionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceRequestAdmissionResponse {
    return new TenantServiceRequestAdmissionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceRequestAdmissionResponse | PlainMessage<TenantServiceRequestAdmissionResponse> | undefined, b: TenantServiceRequestAdmissionResponse | PlainMessage<TenantServiceRequestAdmissionResponse> | undefined): boolean {
    return proto3.util.equals(TenantServiceRequestAdmissionResponse, a, b);
  }
}

