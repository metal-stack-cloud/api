import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum api.v1.ServiceStatus
 */
export declare enum ServiceStatus {
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
    HEALTHY = 3
}
/**
 * @generated from enum api.v1.Service
 */
export declare enum Service {
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
    MACHINES = 3
}
/**
 * @generated from message api.v1.Health
 */
export declare class Health extends Message<Health> {
    /**
     * @generated from field: repeated api.v1.HealthStatus services = 1;
     */
    services: HealthStatus[];
    constructor(data?: PartialMessage<Health>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Health";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Health;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Health;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Health;
    static equals(a: Health | PlainMessage<Health> | undefined, b: Health | PlainMessage<Health> | undefined): boolean;
}
/**
 * @generated from message api.v1.HealthStatus
 */
export declare class HealthStatus extends Message<HealthStatus> {
    /**
     * @generated from field: api.v1.Service name = 1;
     */
    name: Service;
    /**
     * @generated from field: api.v1.ServiceStatus status = 2;
     */
    status: ServiceStatus;
    /**
     * @generated from field: string message = 3;
     */
    message: string;
    /**
     * @generated from field: map<string, api.v1.PartitionHealth> partitions = 4;
     */
    partitions: {
        [key: string]: PartitionHealth;
    };
    constructor(data?: PartialMessage<HealthStatus>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.HealthStatus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthStatus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthStatus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthStatus;
    static equals(a: HealthStatus | PlainMessage<HealthStatus> | undefined, b: HealthStatus | PlainMessage<HealthStatus> | undefined): boolean;
}
/**
 * @generated from message api.v1.PartitionHealth
 */
export declare class PartitionHealth extends Message<PartitionHealth> {
    /**
     * @generated from field: api.v1.ServiceStatus status = 1;
     */
    status: ServiceStatus;
    /**
     * @generated from field: string message = 2;
     */
    message: string;
    constructor(data?: PartialMessage<PartitionHealth>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PartitionHealth";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PartitionHealth;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PartitionHealth;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PartitionHealth;
    static equals(a: PartitionHealth | PlainMessage<PartitionHealth> | undefined, b: PartitionHealth | PlainMessage<PartitionHealth> | undefined): boolean;
}
/**
 * @generated from message api.v1.HealthServiceGetRequest
 */
export declare class HealthServiceGetRequest extends Message<HealthServiceGetRequest> {
    constructor(data?: PartialMessage<HealthServiceGetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.HealthServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthServiceGetRequest;
    static equals(a: HealthServiceGetRequest | PlainMessage<HealthServiceGetRequest> | undefined, b: HealthServiceGetRequest | PlainMessage<HealthServiceGetRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.HealthServiceGetResponse
 */
export declare class HealthServiceGetResponse extends Message<HealthServiceGetResponse> {
    /**
     * @generated from field: api.v1.Health health = 1;
     */
    health?: Health;
    constructor(data?: PartialMessage<HealthServiceGetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.HealthServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthServiceGetResponse;
    static equals(a: HealthServiceGetResponse | PlainMessage<HealthServiceGetResponse> | undefined, b: HealthServiceGetResponse | PlainMessage<HealthServiceGetResponse> | undefined): boolean;
}
