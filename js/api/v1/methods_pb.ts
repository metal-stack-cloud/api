// @generated by protoc-gen-es v1.4.1 with parameter "target=ts"
// @generated from file api/v1/methods.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ProjectPermission, TokenRole } from "./token_pb.js";

/**
 * @generated from message api.v1.MethodServiceListRequest
 */
export class MethodServiceListRequest extends Message<MethodServiceListRequest> {
  constructor(data?: PartialMessage<MethodServiceListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.MethodServiceListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodServiceListRequest {
    return new MethodServiceListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodServiceListRequest {
    return new MethodServiceListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodServiceListRequest {
    return new MethodServiceListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MethodServiceListRequest | PlainMessage<MethodServiceListRequest> | undefined, b: MethodServiceListRequest | PlainMessage<MethodServiceListRequest> | undefined): boolean {
    return proto3.util.equals(MethodServiceListRequest, a, b);
  }
}

/**
 * @generated from message api.v1.MethodServiceListResponse
 */
export class MethodServiceListResponse extends Message<MethodServiceListResponse> {
  /**
   * @generated from field: repeated string methods = 1;
   */
  methods: string[] = [];

  constructor(data?: PartialMessage<MethodServiceListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.MethodServiceListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "methods", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodServiceListResponse {
    return new MethodServiceListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodServiceListResponse {
    return new MethodServiceListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodServiceListResponse {
    return new MethodServiceListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MethodServiceListResponse | PlainMessage<MethodServiceListResponse> | undefined, b: MethodServiceListResponse | PlainMessage<MethodServiceListResponse> | undefined): boolean {
    return proto3.util.equals(MethodServiceListResponse, a, b);
  }
}

/**
 * @generated from message api.v1.MethodServiceTokenScopedListRequest
 */
export class MethodServiceTokenScopedListRequest extends Message<MethodServiceTokenScopedListRequest> {
  constructor(data?: PartialMessage<MethodServiceTokenScopedListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.MethodServiceTokenScopedListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodServiceTokenScopedListRequest {
    return new MethodServiceTokenScopedListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodServiceTokenScopedListRequest {
    return new MethodServiceTokenScopedListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodServiceTokenScopedListRequest {
    return new MethodServiceTokenScopedListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MethodServiceTokenScopedListRequest | PlainMessage<MethodServiceTokenScopedListRequest> | undefined, b: MethodServiceTokenScopedListRequest | PlainMessage<MethodServiceTokenScopedListRequest> | undefined): boolean {
    return proto3.util.equals(MethodServiceTokenScopedListRequest, a, b);
  }
}

/**
 * @generated from message api.v1.MethodServiceTokenScopedListResponse
 */
export class MethodServiceTokenScopedListResponse extends Message<MethodServiceTokenScopedListResponse> {
  /**
   * @generated from field: repeated api.v1.ProjectPermission permissions = 1;
   */
  permissions: ProjectPermission[] = [];

  /**
   * @generated from field: repeated api.v1.TokenRole roles = 2;
   */
  roles: TokenRole[] = [];

  constructor(data?: PartialMessage<MethodServiceTokenScopedListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.MethodServiceTokenScopedListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "permissions", kind: "message", T: ProjectPermission, repeated: true },
    { no: 2, name: "roles", kind: "message", T: TokenRole, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodServiceTokenScopedListResponse {
    return new MethodServiceTokenScopedListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodServiceTokenScopedListResponse {
    return new MethodServiceTokenScopedListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodServiceTokenScopedListResponse {
    return new MethodServiceTokenScopedListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MethodServiceTokenScopedListResponse | PlainMessage<MethodServiceTokenScopedListResponse> | undefined, b: MethodServiceTokenScopedListResponse | PlainMessage<MethodServiceTokenScopedListResponse> | undefined): boolean {
    return proto3.util.equals(MethodServiceTokenScopedListResponse, a, b);
  }
}

