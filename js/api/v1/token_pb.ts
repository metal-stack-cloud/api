// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file api/v1/token.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";

/**
 * Tokens
 *
 * @generated from message api.v1.TokenServiceCreateRequest
 */
export class TokenServiceCreateRequest extends Message<TokenServiceCreateRequest> {
  /**
   * @generated from field: string subject = 1;
   */
  subject = "";

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

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TokenServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "subject", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
   * @generated from field: repeated string permissions = 2;
   */
  permissions: string[] = [];

  constructor(data?: PartialMessage<ProjectPermission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.ProjectPermission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "permissions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
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
   * @generated from field: string subject = 1;
   */
  subject = "";

  /**
   * @generated from field: string role = 2;
   */
  role = "";

  constructor(data?: PartialMessage<TokenRole>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
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
   * @generated from field: string token = 1;
   */
  token = "";

  constructor(data?: PartialMessage<TokenServiceCreateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.TokenServiceCreateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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

