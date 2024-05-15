import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ServiceStatus defines the status of a service
 *
 * @generated from enum api.v1.ServiceStatus
 */
export declare enum ServiceStatus {
    /**
     * SERVICE_STATUS_UNSPECIFIED service status is not known or unspecified
     *
     * @generated from enum value: SERVICE_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * SERVICE_STATUS_DEGRADED the service is in degraded status, not the whole functionality is available
     *
     * @generated from enum value: SERVICE_STATUS_DEGRADED = 1;
     */
    DEGRADED = 1,
    /**
     * SERVICE_STATUS_UNHEALTHY the service is in unhealthy status, serious impact is expected
     *
     * @generated from enum value: SERVICE_STATUS_UNHEALTHY = 2;
     */
    UNHEALTHY = 2,
    /**
     * SERVICE_STATUS_HEALTHY the service is in healthy status e.g. fully functional
     *
     * @generated from enum value: SERVICE_STATUS_HEALTHY = 3;
     */
    HEALTHY = 3
}
/**
 * Service defines the service for which the healtyness is reported
 *
 * @generated from enum api.v1.Service
 */
export declare enum Service {
    /**
     * SERVICE_UNSPECIFIED is a unknown service
     *
     * @generated from enum value: SERVICE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * SERVICE_CLUSTER the kubernetes cluster service
     *
     * @generated from enum value: SERVICE_CLUSTER = 1;
     */
    CLUSTER = 1,
    /**
     * SERVICE_VOLUME the volume/storage service
     *
     * @generated from enum value: SERVICE_VOLUME = 2;
     */
    VOLUME = 2,
    /**
     * SERVICE_MACHINES the machine service
     *
     * @generated from enum value: SERVICE_MACHINES = 3;
     */
    MACHINES = 3
}
/**
 * Health reports the health status of all services
 *
 * @generated from message api.v1.Health
 */
export declare class Health extends Message<Health> {
    /**
     * Services the health of all individual services
     *
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
 * HealthStatus the health of one service
 *
 * @generated from message api.v1.HealthStatus
 */
export declare class HealthStatus extends Message<HealthStatus> {
    /**
     * Name the name of the service
     *
     * @generated from field: api.v1.Service name = 1;
     */
    name: Service;
    /**
     * Status the status of this service
     *
     * @generated from field: api.v1.ServiceStatus status = 2;
     */
    status: ServiceStatus;
    /**
     * Message describes the reason for the unhealthy status if possible
     *
     * @generated from field: string message = 3;
     */
    message: string;
    /**
     * Partitions describes the health of the service by partition
     *
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
 * PartitionHealth the status of a specific service in this partition
 *
 * @generated from message api.v1.PartitionHealth
 */
export declare class PartitionHealth extends Message<PartitionHealth> {
    /**
     * Status the health status of the service in this partition
     *
     * @generated from field: api.v1.ServiceStatus status = 1;
     */
    status: ServiceStatus;
    /**
     * Message describes the reason for the unhealthy status if possible
     *
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
 * HealthServiceGetRequest is request payload to get the health of the system
 *
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
 * HealthServiceGetRequest is the response payload with the health of the system
 *
 * @generated from message api.v1.HealthServiceGetResponse
 */
export declare class HealthServiceGetResponse extends Message<HealthServiceGetResponse> {
    /**
     * Health is the overall health of the system
     *
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
