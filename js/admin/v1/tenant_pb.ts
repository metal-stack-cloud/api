// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file admin/v1/tenant.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { OAuthProvider, Paging, TenantRole } from "../../api/v1/common_pb.js";
import { Tenant } from "../../api/v1/tenant_pb.js";

/**
 * TenantServiceListRequest is the request payload for a tenant list request
 *
 * @generated from message admin.v1.TenantServiceListRequest
 */
export class TenantServiceListRequest extends Message<TenantServiceListRequest> {
  /**
   * Login of the tenant to list
   *
   * @generated from field: optional string login = 1;
   */
  login?: string;

  /**
   * Name of the tenant to list
   *
   * @generated from field: optional string name = 2;
   */
  name?: string;

  /**
   * Email of the tenant to list
   *
   * @generated from field: optional string email = 3;
   */
  email?: string;

  /**
   * OauthProvide of the tenant to list
   *
   * @generated from field: optional api.v1.OAuthProvider oauth_provider = 5;
   */
  oauthProvider?: OAuthProvider;

  /**
   * Admitted on show admitted tenants
   *
   * @generated from field: optional bool admitted = 6;
   */
  admitted?: boolean;

  /**
   * Paging details for the list request
   *
   * @generated from field: api.v1.Paging paging = 7;
   */
  paging?: Paging;

  /**
   * Uuid of the tenant to list
   *
   * @generated from field: optional string uuid = 8;
   */
  uuid?: string;

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
    { no: 5, name: "oauth_provider", kind: "enum", T: proto3.getEnumType(OAuthProvider), opt: true },
    { no: 6, name: "admitted", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 7, name: "paging", kind: "message", T: Paging },
    { no: 8, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
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
 * TenantServiceListResponse is the response payload for a tenant list request
 *
 * @generated from message admin.v1.TenantServiceListResponse
 */
export class TenantServiceListResponse extends Message<TenantServiceListResponse> {
  /**
   * Tenants are the list of tenants
   *
   * @generated from field: repeated api.v1.Tenant tenants = 1;
   */
  tenants: Tenant[] = [];

  /**
   * NextPage is used for pagination, returns the next page to be fetched and must then be provided in the list request.
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
 * TenantServiceAdmitRequest is the request payload for a tenant admit request
 *
 * @generated from message admin.v1.TenantServiceAdmitRequest
 */
export class TenantServiceAdmitRequest extends Message<TenantServiceAdmitRequest> {
  /**
   * TenantId is the id of the tenant to admit
   *
   * @generated from field: string tenant_id = 1;
   */
  tenantId = "";

  constructor(data?: PartialMessage<TenantServiceAdmitRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.TenantServiceAdmitRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * TenantServiceAdmitResponse is the response payload for a tenant admit request
 *
 * @generated from message admin.v1.TenantServiceAdmitResponse
 */
export class TenantServiceAdmitResponse extends Message<TenantServiceAdmitResponse> {
  /**
   * Tenant the tenant
   *
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
 * TenantServiceRevokeRequest is the request payload for a tenant revoke request
 *
 * @generated from message admin.v1.TenantServiceRevokeRequest
 */
export class TenantServiceRevokeRequest extends Message<TenantServiceRevokeRequest> {
  /**
   * TenantId is the id of the tenant to revoke
   *
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
 * TenantServiceRevokeResponse is the response payload for a tenant revoke request
 *
 * @generated from message admin.v1.TenantServiceRevokeResponse
 */
export class TenantServiceRevokeResponse extends Message<TenantServiceRevokeResponse> {
  /**
   * Tenant the tenant
   *
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

/**
 * TenantServiceAddMemberRequest is the request payload for adding a member to a tenant
 *
 * @generated from message admin.v1.TenantServiceAddMemberRequest
 */
export class TenantServiceAddMemberRequest extends Message<TenantServiceAddMemberRequest> {
  /**
   * Tenant ID to which the member will be added
   *
   * @generated from field: string tenant_id = 1;
   */
  tenantId = "";

  /**
   * Email of the member to add
   *
   * @generated from field: string member_id = 2;
   */
  memberId = "";

  /**
   * Role to assign to the new member
   *
   * @generated from field: api.v1.TenantRole role = 3;
   */
  role = TenantRole.UNSPECIFIED;

  constructor(data?: PartialMessage<TenantServiceAddMemberRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.TenantServiceAddMemberRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "member_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "role", kind: "enum", T: proto3.getEnumType(TenantRole) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceAddMemberRequest {
    return new TenantServiceAddMemberRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceAddMemberRequest {
    return new TenantServiceAddMemberRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceAddMemberRequest {
    return new TenantServiceAddMemberRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceAddMemberRequest | PlainMessage<TenantServiceAddMemberRequest> | undefined, b: TenantServiceAddMemberRequest | PlainMessage<TenantServiceAddMemberRequest> | undefined): boolean {
    return proto3.util.equals(TenantServiceAddMemberRequest, a, b);
  }
}

/**
 * TenantServiceAddMemberResponse is the response payload for the add member request
 *
 * @generated from message admin.v1.TenantServiceAddMemberResponse
 */
export class TenantServiceAddMemberResponse extends Message<TenantServiceAddMemberResponse> {
  constructor(data?: PartialMessage<TenantServiceAddMemberResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.TenantServiceAddMemberResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceAddMemberResponse {
    return new TenantServiceAddMemberResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceAddMemberResponse {
    return new TenantServiceAddMemberResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceAddMemberResponse {
    return new TenantServiceAddMemberResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TenantServiceAddMemberResponse | PlainMessage<TenantServiceAddMemberResponse> | undefined, b: TenantServiceAddMemberResponse | PlainMessage<TenantServiceAddMemberResponse> | undefined): boolean {
    return proto3.util.equals(TenantServiceAddMemberResponse, a, b);
  }
}

