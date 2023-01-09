// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file api/v1/health.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.v1.ServiceStatus
 */
export enum ServiceStatus {
  /**
   * @generated from enum value: SERVICE_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: SERVICE_STATUS_DEGRADED = 1;
   */
  DEGRADED = 1,

  /**
   * @generated from enum value: SERVICE_STATUS_UNHEALTHY = 2;
   */
  UNHEALTHY = 2,

  /**
   * @generated from enum value: SERVICE_STATUS_HEALTHY = 3;
   */
  HEALTHY = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(ServiceStatus)
proto3.util.setEnumType(ServiceStatus, "api.v1.ServiceStatus", [
  { no: 0, name: "SERVICE_STATUS_UNSPECIFIED" },
  { no: 1, name: "SERVICE_STATUS_DEGRADED" },
  { no: 2, name: "SERVICE_STATUS_UNHEALTHY" },
  { no: 3, name: "SERVICE_STATUS_HEALTHY" },
]);

/**
 * @generated from enum api.v1.Service
 */
export enum Service {
  /**
   * @generated from enum value: SERVICE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: SERVICE_CLUSTER = 1;
   */
  CLUSTER = 1,

  /**
   * @generated from enum value: SERVICE_VOLUME = 2;
   */
  VOLUME = 2,

  /**
   * @generated from enum value: SERVICE_MACHINES = 3;
   */
  MACHINES = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(Service)
proto3.util.setEnumType(Service, "api.v1.Service", [
  { no: 0, name: "SERVICE_UNSPECIFIED" },
  { no: 1, name: "SERVICE_CLUSTER" },
  { no: 2, name: "SERVICE_VOLUME" },
  { no: 3, name: "SERVICE_MACHINES" },
]);

/**
 * @generated from message api.v1.Health
 */
export class Health extends Message<Health> {
  /**
   * @generated from field: repeated api.v1.HealthStatus services = 1;
   */
  services: HealthStatus[] = [];

  constructor(data?: PartialMessage<Health>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.Health";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "services", kind: "message", T: HealthStatus, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Health {
    return new Health().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Health {
    return new Health().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Health {
    return new Health().fromJsonString(jsonString, options);
  }

  static equals(a: Health | PlainMessage<Health> | undefined, b: Health | PlainMessage<Health> | undefined): boolean {
    return proto3.util.equals(Health, a, b);
  }
}

/**
 * @generated from message api.v1.HealthStatus
 */
export class HealthStatus extends Message<HealthStatus> {
  /**
   * @generated from field: api.v1.Service name = 1;
   */
  name = Service.UNSPECIFIED;

  /**
   * @generated from field: api.v1.ServiceStatus status = 2;
   */
  status = ServiceStatus.UNSPECIFIED;

  /**
   * @generated from field: string message = 3;
   */
  message = "";

  /**
   * @generated from field: map<string, api.v1.PartitionHealth> partitions = 4;
   */
  partitions: { [key: string]: PartitionHealth } = {};

  constructor(data?: PartialMessage<HealthStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.HealthStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "enum", T: proto3.getEnumType(Service) },
    { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(ServiceStatus) },
    { no: 3, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "partitions", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: PartitionHealth} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthStatus {
    return new HealthStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthStatus {
    return new HealthStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthStatus {
    return new HealthStatus().fromJsonString(jsonString, options);
  }

  static equals(a: HealthStatus | PlainMessage<HealthStatus> | undefined, b: HealthStatus | PlainMessage<HealthStatus> | undefined): boolean {
    return proto3.util.equals(HealthStatus, a, b);
  }
}

/**
 * @generated from message api.v1.PartitionHealth
 */
export class PartitionHealth extends Message<PartitionHealth> {
  /**
   * @generated from field: api.v1.ServiceStatus status = 1;
   */
  status = ServiceStatus.UNSPECIFIED;

  /**
   * @generated from field: string message = 2;
   */
  message = "";

  constructor(data?: PartialMessage<PartitionHealth>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.PartitionHealth";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(ServiceStatus) },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PartitionHealth {
    return new PartitionHealth().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PartitionHealth {
    return new PartitionHealth().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PartitionHealth {
    return new PartitionHealth().fromJsonString(jsonString, options);
  }

  static equals(a: PartitionHealth | PlainMessage<PartitionHealth> | undefined, b: PartitionHealth | PlainMessage<PartitionHealth> | undefined): boolean {
    return proto3.util.equals(PartitionHealth, a, b);
  }
}

/**
 * @generated from message api.v1.HealthServiceGetRequest
 */
export class HealthServiceGetRequest extends Message<HealthServiceGetRequest> {
  constructor(data?: PartialMessage<HealthServiceGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.HealthServiceGetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthServiceGetRequest {
    return new HealthServiceGetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthServiceGetRequest {
    return new HealthServiceGetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthServiceGetRequest {
    return new HealthServiceGetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: HealthServiceGetRequest | PlainMessage<HealthServiceGetRequest> | undefined, b: HealthServiceGetRequest | PlainMessage<HealthServiceGetRequest> | undefined): boolean {
    return proto3.util.equals(HealthServiceGetRequest, a, b);
  }
}

/**
 * @generated from message api.v1.HealthServiceGetResponse
 */
export class HealthServiceGetResponse extends Message<HealthServiceGetResponse> {
  /**
   * @generated from field: api.v1.Health health = 1;
   */
  health?: Health;

  constructor(data?: PartialMessage<HealthServiceGetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "api.v1.HealthServiceGetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "health", kind: "message", T: Health },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthServiceGetResponse {
    return new HealthServiceGetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthServiceGetResponse {
    return new HealthServiceGetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthServiceGetResponse {
    return new HealthServiceGetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: HealthServiceGetResponse | PlainMessage<HealthServiceGetResponse> | undefined, b: HealthServiceGetResponse | PlainMessage<HealthServiceGetResponse> | undefined): boolean {
    return proto3.util.equals(HealthServiceGetResponse, a, b);
  }
}

