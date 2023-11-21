// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file admin/v1/tenant.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { OAuthProvider, Paging } from "../../api/v1/common_pb.js";
import { Tenant } from "../../api/v1/tenant_pb.js";

/**
 * @generated from message admin.v1.TenantServiceListRequest
 */
export class TenantServiceListRequest extends Message<TenantServiceListRequest> {
  /**
   * @generated from field: optional string login = 1;
   */
  login?: string;

  /**
   * @generated from field: optional string name = 2;
   */
  name?: string;

  /**
   * @generated from field: optional string email = 3;
   */
  email?: string;

  /**
   * @generated from field: optional string organisation_id = 4;
   */
  organisationId?: string;

  /**
   * @generated from field: optional api.v1.OAuthProvider oauth_provider = 5;
   */
  oauthProvider?: OAuthProvider;

  /**
   * @generated from field: optional bool admitted = 6;
   */
  admitted?: boolean;

  /**
   * @generated from field: api.v1.Paging paging = 7;
   */
  paging?: Paging;

  constructor(data?: PartialMessage<TenantServiceListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.TenantServiceListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "organisation_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "oauth_provider", kind: "enum", T: proto3.getEnumType(OAuthProvider), opt: true },
    { no: 6, name: "admitted", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 7, name: "paging", kind: "message", T: Paging },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceListRequest {
    return new TenantServiceListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceListRequest {
    return new TenantServiceListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceListRequest {
    return new TenantServiceListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceListRequest | PlainMessage<TenantServiceListRequest> | undefined, b: TenantServiceListRequest | PlainMessage<TenantServiceListRequest> | undefined): boolean {
    return proto3.util.equals(TenantServiceListRequest, a, b);
  }
}

/**
 * @generated from message admin.v1.TenantServiceListResponse
 */
export class TenantServiceListResponse extends Message<TenantServiceListResponse> {
  /**
   * @generated from field: repeated api.v1.Tenant tenants = 1;
   */
  tenants: Tenant[] = [];

  /**
   * next_page is used for pagination, returns the next page to be fetched and must then be provided in the list request.
   *
   * @generated from field: optional uint64 next_page = 2;
   */
  nextPage?: bigint;

  constructor(data?: PartialMessage<TenantServiceListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.TenantServiceListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenants", kind: "message", T: Tenant, repeated: true },
    { no: 2, name: "next_page", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceListResponse {
    return new TenantServiceListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceListResponse {
    return new TenantServiceListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceListResponse {
    return new TenantServiceListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceListResponse | PlainMessage<TenantServiceListResponse> | undefined, b: TenantServiceListResponse | PlainMessage<TenantServiceListResponse> | undefined): boolean {
    return proto3.util.equals(TenantServiceListResponse, a, b);
  }
}

/**
 * @generated from message admin.v1.TenantServiceAdmitRequest
 */
export class TenantServiceAdmitRequest extends Message<TenantServiceAdmitRequest> {
  /**
   * @generated from field: string tenant_id = 1;
   */
  tenantId = "";

  /**
   * @generated from field: optional string coupon_id = 2;
   */
  couponId?: string;

  /**
   * @generated from field: optional int64 balance_to_add = 3;
   */
  balanceToAdd?: bigint;

  constructor(data?: PartialMessage<TenantServiceAdmitRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.TenantServiceAdmitRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "coupon_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "balance_to_add", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceAdmitRequest {
    return new TenantServiceAdmitRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceAdmitRequest {
    return new TenantServiceAdmitRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceAdmitRequest {
    return new TenantServiceAdmitRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceAdmitRequest | PlainMessage<TenantServiceAdmitRequest> | undefined, b: TenantServiceAdmitRequest | PlainMessage<TenantServiceAdmitRequest> | undefined): boolean {
    return proto3.util.equals(TenantServiceAdmitRequest, a, b);
  }
}

/**
 * @generated from message admin.v1.TenantServiceAdmitResponse
 */
export class TenantServiceAdmitResponse extends Message<TenantServiceAdmitResponse> {
  /**
   * @generated from field: api.v1.Tenant tenant = 1;
   */
  tenant?: Tenant;

  constructor(data?: PartialMessage<TenantServiceAdmitResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.TenantServiceAdmitResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceAdmitResponse {
    return new TenantServiceAdmitResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceAdmitResponse {
    return new TenantServiceAdmitResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceAdmitResponse {
    return new TenantServiceAdmitResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceAdmitResponse | PlainMessage<TenantServiceAdmitResponse> | undefined, b: TenantServiceAdmitResponse | PlainMessage<TenantServiceAdmitResponse> | undefined): boolean {
    return proto3.util.equals(TenantServiceAdmitResponse, a, b);
  }
}

/**
 * @generated from message admin.v1.TenantServiceRevokeRequest
 */
export class TenantServiceRevokeRequest extends Message<TenantServiceRevokeRequest> {
  /**
   * @generated from field: string tenant_id = 1;
   */
  tenantId = "";

  constructor(data?: PartialMessage<TenantServiceRevokeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.TenantServiceRevokeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceRevokeRequest {
    return new TenantServiceRevokeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceRevokeRequest {
    return new TenantServiceRevokeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceRevokeRequest {
    return new TenantServiceRevokeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceRevokeRequest | PlainMessage<TenantServiceRevokeRequest> | undefined, b: TenantServiceRevokeRequest | PlainMessage<TenantServiceRevokeRequest> | undefined): boolean {
    return proto3.util.equals(TenantServiceRevokeRequest, a, b);
  }
}

/**
 * @generated from message admin.v1.TenantServiceRevokeResponse
 */
export class TenantServiceRevokeResponse extends Message<TenantServiceRevokeResponse> {
  /**
   * @generated from field: api.v1.Tenant tenant = 1;
   */
  tenant?: Tenant;

  constructor(data?: PartialMessage<TenantServiceRevokeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.TenantServiceRevokeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceRevokeResponse {
    return new TenantServiceRevokeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceRevokeResponse {
    return new TenantServiceRevokeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceRevokeResponse {
    return new TenantServiceRevokeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceRevokeResponse | PlainMessage<TenantServiceRevokeResponse> | undefined, b: TenantServiceRevokeResponse | PlainMessage<TenantServiceRevokeResponse> | undefined): boolean {
    return proto3.util.equals(TenantServiceRevokeResponse, a, b);
  }
}

