// @generated by protoc-gen-es v1.3.3 with parameter "target=ts"
// @generated from file api/v1/token.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum api.v1.TokenType
 */
export enum TokenType {
  /**
   * @generated from enum value: TOKEN_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TOKEN_TYPE_API = 1;
   */
  API = 1,

  /**
   * @generated from enum value: TOKEN_TYPE_CONSOLE = 2;
   */
  CONSOLE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(TokenType)
proto3.util.setEnumType(TokenType, "api.v1.TokenType", [
  { no: 0, name: "TOKEN_TYPE_UNSPECIFIED" },
  { no: 1, name: "TOKEN_TYPE_API" },
  { no: 2, name: "TOKEN_TYPE_CONSOLE" },
]);

/**
 * @generated from message api.v1.Token
 */
export class Token extends Message<Token> {
  /**
   * uuid of the jwt token
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * user_id who created this token
   *
   * @generated from field: string user_id = 2;
   */
  userId = "";

  /**
   * description is a user given description of this token.
   *
   * @generated from field: string description = 3;
   */
  description = "";

  /**
   * @generated from field: repeated api.v1.ProjectPermission permissions = 4;
   */
  permissions: ProjectPermission[] = [];

  /**
   * @generated from field: repeated api.v1.TokenRole roles = 5;
   */
  roles: TokenRole[] = [];

  /**
   * @generated from field: google.protobuf.Timestamp expires = 6;
   */
  expires?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp issued_at = 7;
   */
  issuedAt?: Timestamp;

  /**
   * @generated from field: api.v1.TokenType token_type = 8;
   */
  tokenType = TokenType.UNSPECIFIED;

  constructor(data?: PartialMessage<Token>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.Token";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "permissions", kind: "message", T: ProjectPermission, repeated: true },
    { no: 5, name: "roles", kind: "message", T: TokenRole, repeated: true },
    { no: 6, name: "expires", kind: "message", T: Timestamp },
    { no: 7, name: "issued_at", kind: "message", T: Timestamp },
    { no: 8, name: "token_type", kind: "enum", T: proto3.getEnumType(TokenType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Token {
    return new Token().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Token {
    return new Token().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Token {
    return new Token().fromJsonString(jsonString, options);
  }

  static equals(a: Token | PlainMessage<Token> | undefined, b: Token | PlainMessage<Token> | undefined): boolean {
    return proto3.util.equals(Token, a, b);
  }
}

/**
 * @generated from message api.v1.TokenServiceCreateRequest
 */
export class TokenServiceCreateRequest extends Message<TokenServiceCreateRequest> {
  /**
   * @generated from field: string description = 1;
   */
  description = "";

  /**
   * @generated from field: repeated api.v1.ProjectPermission permissions = 2;
   */
  permissions: ProjectPermission[] = [];

  /**
   * @generated from field: repeated api.v1.TokenRole roles = 3;
   */
  roles: TokenRole[] = [];

  /**
   * @generated from field: google.protobuf.Duration expires = 4;
   */
  expires?: Duration;

  constructor(data?: PartialMessage<TokenServiceCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.TokenServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "permissions", kind: "message", T: ProjectPermission, repeated: true },
    { no: 3, name: "roles", kind: "message", T: TokenRole, repeated: true },
    { no: 4, name: "expires", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceCreateRequest {
    return new TokenServiceCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceCreateRequest {
    return new TokenServiceCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceCreateRequest {
    return new TokenServiceCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TokenServiceCreateRequest | PlainMessage<TokenServiceCreateRequest> | undefined, b: TokenServiceCreateRequest | PlainMessage<TokenServiceCreateRequest> | undefined): boolean {
    return proto3.util.equals(TokenServiceCreateRequest, a, b);
  }
}

/**
 * @generated from message api.v1.ProjectPermission
 */
export class ProjectPermission extends Message<ProjectPermission> {
  /**
   * @generated from field: string project = 1;
   */
  project = "";

  /**
   * @generated from field: repeated string endpoints = 2;
   */
  endpoints: string[] = [];

  constructor(data?: PartialMessage<ProjectPermission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectPermission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "endpoints", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectPermission {
    return new ProjectPermission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectPermission {
    return new ProjectPermission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectPermission {
    return new ProjectPermission().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectPermission | PlainMessage<ProjectPermission> | undefined, b: ProjectPermission | PlainMessage<ProjectPermission> | undefined): boolean {
    return proto3.util.equals(ProjectPermission, a, b);
  }
}

/**
 * @generated from message api.v1.TokenRole
 */
export class TokenRole extends Message<TokenRole> {
  /**
   * subject specifies the project or organization this role applies to
   *
   * @generated from field: string subject = 1;
   */
  subject = "";

  /**
   * role defines the string representation of a tenantrole, projectrole or a global adminrole
   *
   * @generated from field: string role = 2;
   */
  role = "";

  constructor(data?: PartialMessage<TokenRole>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.TokenRole";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "subject", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenRole {
    return new TokenRole().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenRole {
    return new TokenRole().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenRole {
    return new TokenRole().fromJsonString(jsonString, options);
  }

  static equals(a: TokenRole | PlainMessage<TokenRole> | undefined, b: TokenRole | PlainMessage<TokenRole> | undefined): boolean {
    return proto3.util.equals(TokenRole, a, b);
  }
}

/**
 * @generated from message api.v1.TokenServiceCreateResponse
 */
export class TokenServiceCreateResponse extends Message<TokenServiceCreateResponse> {
  /**
   * @generated from field: api.v1.Token token = 1;
   */
  token?: Token;

  /**
   * @generated from field: string secret = 2;
   */
  secret = "";

  constructor(data?: PartialMessage<TokenServiceCreateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.TokenServiceCreateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "message", T: Token },
    { no: 2, name: "secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceCreateResponse {
    return new TokenServiceCreateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceCreateResponse {
    return new TokenServiceCreateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceCreateResponse {
    return new TokenServiceCreateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TokenServiceCreateResponse | PlainMessage<TokenServiceCreateResponse> | undefined, b: TokenServiceCreateResponse | PlainMessage<TokenServiceCreateResponse> | undefined): boolean {
    return proto3.util.equals(TokenServiceCreateResponse, a, b);
  }
}

/**
 * @generated from message api.v1.TokenServiceListRequest
 */
export class TokenServiceListRequest extends Message<TokenServiceListRequest> {
  constructor(data?: PartialMessage<TokenServiceListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.TokenServiceListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceListRequest {
    return new TokenServiceListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceListRequest {
    return new TokenServiceListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceListRequest {
    return new TokenServiceListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TokenServiceListRequest | PlainMessage<TokenServiceListRequest> | undefined, b: TokenServiceListRequest | PlainMessage<TokenServiceListRequest> | undefined): boolean {
    return proto3.util.equals(TokenServiceListRequest, a, b);
  }
}

/**
 * @generated from message api.v1.TokenServiceListResponse
 */
export class TokenServiceListResponse extends Message<TokenServiceListResponse> {
  /**
   * @generated from field: repeated api.v1.Token tokens = 1;
   */
  tokens: Token[] = [];

  constructor(data?: PartialMessage<TokenServiceListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.TokenServiceListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tokens", kind: "message", T: Token, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceListResponse {
    return new TokenServiceListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceListResponse {
    return new TokenServiceListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceListResponse {
    return new TokenServiceListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TokenServiceListResponse | PlainMessage<TokenServiceListResponse> | undefined, b: TokenServiceListResponse | PlainMessage<TokenServiceListResponse> | undefined): boolean {
    return proto3.util.equals(TokenServiceListResponse, a, b);
  }
}

/**
 * @generated from message api.v1.TokenServiceRevokeRequest
 */
export class TokenServiceRevokeRequest extends Message<TokenServiceRevokeRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  constructor(data?: PartialMessage<TokenServiceRevokeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.TokenServiceRevokeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceRevokeRequest {
    return new TokenServiceRevokeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceRevokeRequest {
    return new TokenServiceRevokeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceRevokeRequest {
    return new TokenServiceRevokeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TokenServiceRevokeRequest | PlainMessage<TokenServiceRevokeRequest> | undefined, b: TokenServiceRevokeRequest | PlainMessage<TokenServiceRevokeRequest> | undefined): boolean {
    return proto3.util.equals(TokenServiceRevokeRequest, a, b);
  }
}

/**
 * @generated from message api.v1.TokenServiceRevokeResponse
 */
export class TokenServiceRevokeResponse extends Message<TokenServiceRevokeResponse> {
  constructor(data?: PartialMessage<TokenServiceRevokeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.TokenServiceRevokeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceRevokeResponse {
    return new TokenServiceRevokeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceRevokeResponse {
    return new TokenServiceRevokeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceRevokeResponse {
    return new TokenServiceRevokeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TokenServiceRevokeResponse | PlainMessage<TokenServiceRevokeResponse> | undefined, b: TokenServiceRevokeResponse | PlainMessage<TokenServiceRevokeResponse> | undefined): boolean {
    return proto3.util.equals(TokenServiceRevokeResponse, a, b);
  }
}

