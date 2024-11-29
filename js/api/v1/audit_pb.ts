// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/v1/audit.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * AuditTrace is an audit trace
 *
 * @generated from message api.v1.AuditTrace
 */
export class AuditTrace extends Message<AuditTrace> {
  /**
   * Uuid of the audit trace
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * Timestamp is the timestamp when the request arrived at the api
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 2;
   */
  timestamp?: Timestamp;

  /**
   * User is the user who called the api method
   *
   * @generated from field: string user = 3;
   */
  user = "";

  /**
   * Tenant is the tenant targeted by the api call
   *
   * @generated from field: string tenant = 4;
   */
  tenant = "";

  /**
   * Method is the api method that was called
   *
   * @generated from field: string method = 5;
   */
  method = "";

  /**
   * Request is the payload of the request
   *
   * @generated from field: string request_payload = 6;
   */
  requestPayload = "";

  /**
   * Response is the payload of the response
   *
   * @generated from field: string response_payload = 7;
   */
  responsePayload = "";

  /**
   * SourceIP contains the ip address of the caller
   *
   * @generated from field: string source_ip = 8;
   */
  sourceIp = "";

  /**
   * ResultCode is a string describing the result of the api call
   *
   * @generated from field: string result_code = 9;
   */
  resultCode = "";

  constructor(data?: PartialMessage<AuditTrace>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.AuditTrace";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timestamp", kind: "message", T: Timestamp },
    { no: 3, name: "user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "request_payload", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "response_payload", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "source_ip", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "result_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditTrace {
    return new AuditTrace().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditTrace {
    return new AuditTrace().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditTrace {
    return new AuditTrace().fromJsonString(jsonString, options);
  }

  static equals(a: AuditTrace | PlainMessage<AuditTrace> | undefined, b: AuditTrace | PlainMessage<AuditTrace> | undefined): boolean {
    return proto3.util.equals(AuditTrace, a, b);
  }
}

/**
 * AuditServiceListRequest is the request payload to list audits
 *
 * @generated from message api.v1.AuditServiceListRequest
 */
export class AuditServiceListRequest extends Message<AuditServiceListRequest> {
  /**
   * Uuid of the audit trace
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * From describes the start of the time window in which to list audit traces
   *
   * @generated from field: google.protobuf.Timestamp from = 2;
   */
  from?: Timestamp;

  /**
   * To describes the end of the time window in which to list audit traces
   *
   * @generated from field: google.protobuf.Timestamp to = 3;
   */
  to?: Timestamp;

  /**
   * User is the user who called the api method
   *
   * @generated from field: string user = 4;
   */
  user = "";

  /**
   * Tenant is the tenant targeted by the api call
   *
   * @generated from field: string tenant = 5;
   */
  tenant = "";

  /**
   * Method is the api method that was called
   *
   * @generated from field: string method = 6;
   */
  method = "";

  /**
   * ResultCode is a string describing the result of the api call
   *
   * @generated from field: string result_code = 7;
   */
  resultCode = "";

  constructor(data?: PartialMessage<AuditServiceListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.AuditServiceListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "from", kind: "message", T: Timestamp },
    { no: 3, name: "to", kind: "message", T: Timestamp },
    { no: 4, name: "user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "result_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditServiceListRequest {
    return new AuditServiceListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditServiceListRequest {
    return new AuditServiceListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditServiceListRequest {
    return new AuditServiceListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AuditServiceListRequest | PlainMessage<AuditServiceListRequest> | undefined, b: AuditServiceListRequest | PlainMessage<AuditServiceListRequest> | undefined): boolean {
    return proto3.util.equals(AuditServiceListRequest, a, b);
  }
}

/**
 * AuditServiceListResponse is the response payload of a audit list request
 *
 * @generated from message api.v1.AuditServiceListResponse
 */
export class AuditServiceListResponse extends Message<AuditServiceListResponse> {
  /**
   * Audits is a list of audits without the secrets
   *
   * @generated from field: repeated api.v1.AuditTrace audits = 1;
   */
  audits: AuditTrace[] = [];

  constructor(data?: PartialMessage<AuditServiceListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.AuditServiceListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "audits", kind: "message", T: AuditTrace, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditServiceListResponse {
    return new AuditServiceListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditServiceListResponse {
    return new AuditServiceListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditServiceListResponse {
    return new AuditServiceListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AuditServiceListResponse | PlainMessage<AuditServiceListResponse> | undefined, b: AuditServiceListResponse | PlainMessage<AuditServiceListResponse> | undefined): boolean {
    return proto3.util.equals(AuditServiceListResponse, a, b);
  }
}

/**
 * AuditServiceGetRequest is the request payload of a audit get request
 *
 * @generated from message api.v1.AuditServiceGetRequest
 */
export class AuditServiceGetRequest extends Message<AuditServiceGetRequest> {
  /**
   * Uuid of the audit trace
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  constructor(data?: PartialMessage<AuditServiceGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.AuditServiceGetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditServiceGetRequest {
    return new AuditServiceGetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditServiceGetRequest {
    return new AuditServiceGetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditServiceGetRequest {
    return new AuditServiceGetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AuditServiceGetRequest | PlainMessage<AuditServiceGetRequest> | undefined, b: AuditServiceGetRequest | PlainMessage<AuditServiceGetRequest> | undefined): boolean {
    return proto3.util.equals(AuditServiceGetRequest, a, b);
  }
}

/**
 * AuditServiceGetResponse is the response payload of a audit get request
 *
 * @generated from message api.v1.AuditServiceGetResponse
 */
export class AuditServiceGetResponse extends Message<AuditServiceGetResponse> {
  /**
   * Audit is the audit
   *
   * @generated from field: api.v1.AuditTrace audit = 1;
   */
  audit?: AuditTrace;

  constructor(data?: PartialMessage<AuditServiceGetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.AuditServiceGetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "audit", kind: "message", T: AuditTrace },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditServiceGetResponse {
    return new AuditServiceGetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditServiceGetResponse {
    return new AuditServiceGetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditServiceGetResponse {
    return new AuditServiceGetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AuditServiceGetResponse | PlainMessage<AuditServiceGetResponse> | undefined, b: AuditServiceGetResponse | PlainMessage<AuditServiceGetResponse> | undefined): boolean {
    return proto3.util.equals(AuditServiceGetResponse, a, b);
  }
}

