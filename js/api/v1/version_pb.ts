// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file api/v1/version.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Version of the application
 *
 * @generated from message api.v1.Version
 */
export class Version extends Message<Version> {
  /**
   * Version of the application
   *
   * @generated from field: string version = 1;
   */
  version = "";

  /**
   * Revision of the application
   *
   * @generated from field: string revision = 2;
   */
  revision = "";

  /**
   * GitSHA1 of the application
   *
   * @generated from field: string git_sha1 = 3;
   */
  gitSha1 = "";

  /**
   * BuildDate of the application
   *
   * @generated from field: string build_date = 4;
   */
  buildDate = "";

  constructor(data?: PartialMessage<Version>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.Version";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "revision", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "git_sha1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "build_date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Version {
    return new Version().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Version {
    return new Version().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Version {
    return new Version().fromJsonString(jsonString, options);
  }

  static equals(a: Version | PlainMessage<Version> | undefined, b: Version | PlainMessage<Version> | undefined): boolean {
    return proto3.util.equals(Version, a, b);
  }
}

/**
 * VersionServiceGetRequest is the request payload to get the version
 *
 * @generated from message api.v1.VersionServiceGetRequest
 */
export class VersionServiceGetRequest extends Message<VersionServiceGetRequest> {
  constructor(data?: PartialMessage<VersionServiceGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.VersionServiceGetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VersionServiceGetRequest {
    return new VersionServiceGetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VersionServiceGetRequest {
    return new VersionServiceGetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VersionServiceGetRequest {
    return new VersionServiceGetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: VersionServiceGetRequest | PlainMessage<VersionServiceGetRequest> | undefined, b: VersionServiceGetRequest | PlainMessage<VersionServiceGetRequest> | undefined): boolean {
    return proto3.util.equals(VersionServiceGetRequest, a, b);
  }
}

/**
 * VersionServiceGetResponse is the response payload with the version
 *
 * @generated from message api.v1.VersionServiceGetResponse
 */
export class VersionServiceGetResponse extends Message<VersionServiceGetResponse> {
  /**
   * Version of the application
   *
   * @generated from field: api.v1.Version version = 1;
   */
  version?: Version;

  constructor(data?: PartialMessage<VersionServiceGetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.VersionServiceGetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "message", T: Version },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VersionServiceGetResponse {
    return new VersionServiceGetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VersionServiceGetResponse {
    return new VersionServiceGetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VersionServiceGetResponse {
    return new VersionServiceGetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: VersionServiceGetResponse | PlainMessage<VersionServiceGetResponse> | undefined, b: VersionServiceGetResponse | PlainMessage<VersionServiceGetResponse> | undefined): boolean {
    return proto3.util.equals(VersionServiceGetResponse, a, b);
  }
}

