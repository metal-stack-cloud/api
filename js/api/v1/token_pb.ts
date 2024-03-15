// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file api/v1/token.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * TokenType specifies different use cases of tokens
 *
 * @generated from enum api.v1.TokenType
 */
export enum TokenType {
  /**
   * TOKEN_TYPE_UNSPECIFIED is not specified
   *
   * @generated from enum value: TOKEN_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * TOKEN_TYPE_API is a token for api usage
   *
   * @generated from enum value: TOKEN_TYPE_API = 1;
   */
  API = 1,

  /**
   * TOKEN_TYPE_CONSOLE is a token for console or web ui usage
   *
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
 * Token is a jwt authentication token to access the api
 *
 * @generated from message api.v1.Token
 */
export class Token extends Message<Token> {
  /**
   * Uuid of the jwt token, used to reference it by revoke
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * UserId who created this token
   *
   * @generated from field: string user_id = 2;
   */
  userId = "";

  /**
   * Description is a user given description of this token.
   *
   * @generated from field: string description = 3;
   */
  description = "";

  /**
   * Permissions is a list of service methods this token can be used for
   *
   * @generated from field: repeated api.v1.MethodPermission permissions = 4;
   */
  permissions: MethodPermission[] = [];

  /**
   * Roles is a list of roles this token can be used for
   *
   * @generated from field: repeated api.v1.TokenRole roles = 5;
   */
  roles: TokenRole[] = [];

  /**
   * Expires gives the date in the future after which this token can not be used anymore
   *
   * @generated from field: google.protobuf.Timestamp expires = 6;
   */
  expires?: Timestamp;

  /**
   * IssuedAt gives the date when this token was created
   *
   * @generated from field: google.protobuf.Timestamp issued_at = 7;
   */
  issuedAt?: Timestamp;

  /**
   * TokenType describes the type of this token
   *
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
    { no: 4, name: "permissions", kind: "message", T: MethodPermission, repeated: true },
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
 * TokenServiceCreateRequest is the request payload to create a token
 *
 * @generated from message api.v1.TokenServiceCreateRequest
 */
export class TokenServiceCreateRequest extends Message<TokenServiceCreateRequest> {
  /**
   * Description of the token
   *
   * @generated from field: string description = 1;
   */
  description = "";

  /**
   * Permissions is a list of service methods this token can be used for
   *
   * @generated from field: repeated api.v1.MethodPermission permissions = 2;
   */
  permissions: MethodPermission[] = [];

  /**
   * Roles is a list of roles this token can be used for
   *
   * @generated from field: repeated api.v1.TokenRole roles = 3;
   */
  roles: TokenRole[] = [];

  /**
   * Expires gives the duration since now, after which this token can not be used anymore
   *
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
    { no: 2, name: "permissions", kind: "message", T: MethodPermission, repeated: true },
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
 * MethodPermission is a mapping from a subject/project to a service method
 *
 * @generated from message api.v1.MethodPermission
 */
export class MethodPermission extends Message<MethodPermission> {
  /**
   * Subject maybe either the project or the tenant
   * for which the methods should be allowed
   *
   * @generated from field: string subject = 1;
   */
  subject = "";

  /**
   * Methods which should be accessible
   *
   * @generated from field: repeated string methods = 2;
   */
  methods: string[] = [];

  constructor(data?: PartialMessage<MethodPermission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.MethodPermission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "subject", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "methods", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodPermission {
    return new MethodPermission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodPermission {
    return new MethodPermission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodPermission {
    return new MethodPermission().fromJsonString(jsonString, options);
  }

  static equals(a: MethodPermission | PlainMessage<MethodPermission> | undefined, b: MethodPermission | PlainMessage<MethodPermission> | undefined): boolean {
    return proto3.util.equals(MethodPermission, a, b);
  }
}

/**
 * TokenRole is a mapping from subject to role there
 *
 * @generated from message api.v1.TokenRole
 */
export class TokenRole extends Message<TokenRole> {
  /**
   * Subject specifies the subject (project or tenant) this role applies to
   *
   * @generated from field: string subject = 1;
   */
  subject = "";

  /**
   * Role defines the string representation of a tenantrole, projectrole or a global adminrole
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
 * TokenServiceCreateResponse is the response payload of a token create request
 *
 * @generated from message api.v1.TokenServiceCreateResponse
 */
export class TokenServiceCreateResponse extends Message<TokenServiceCreateResponse> {
  /**
   * Token which was created
   *
   * @generated from field: api.v1.Token token = 1;
   */
  token?: Token;

  /**
   * Secret is the body if the jwt token, should be used in api requests as bearer token
   *
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
 * TokenServiceListRequest is the request payload to list tokens
 *
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
 * TokenServiceListResponse is the response payload of a token list request
 *
 * @generated from message api.v1.TokenServiceListResponse
 */
export class TokenServiceListResponse extends Message<TokenServiceListResponse> {
  /**
   * Tokens is a list of tokens without the secrets
   *
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
 * TokenServiceRevokeRequest is the request payload of a token revoke request
 *
 * @generated from message api.v1.TokenServiceRevokeRequest
 */
export class TokenServiceRevokeRequest extends Message<TokenServiceRevokeRequest> {
  /**
   * Uuid of the token to revoke
   *
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
 * TokenServiceRevokeResponse is the response payload of a token revoke request
 *
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

