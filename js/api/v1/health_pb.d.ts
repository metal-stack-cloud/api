import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file api/v1/health.proto.
 */
export declare const file_api_v1_health: GenFile;
/**
 * Health reports the health status of all services
 *
 * @generated from message api.v1.Health
 */
export type Health = Message<"api.v1.Health"> & {
    /**
     * Services the health of all individual services
     *
     * @generated from field: repeated api.v1.HealthStatus services = 1;
     */
    services: HealthStatus[];
};
/**
 * Describes the message api.v1.Health.
 * Use `create(HealthSchema)` to create a new message.
 */
export declare const HealthSchema: GenMessage<Health>;
/**
 * HealthStatus the health of one service
 *
 * @generated from message api.v1.HealthStatus
 */
export type HealthStatus = Message<"api.v1.HealthStatus"> & {
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
};
/**
 * Describes the message api.v1.HealthStatus.
 * Use `create(HealthStatusSchema)` to create a new message.
 */
export declare const HealthStatusSchema: GenMessage<HealthStatus>;
/**
 * PartitionHealth the status of a specific service in this partition
 *
 * @generated from message api.v1.PartitionHealth
 */
export type PartitionHealth = Message<"api.v1.PartitionHealth"> & {
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
};
/**
 * Describes the message api.v1.PartitionHealth.
 * Use `create(PartitionHealthSchema)` to create a new message.
 */
export declare const PartitionHealthSchema: GenMessage<PartitionHealth>;
/**
 * HealthServiceGetRequest is request payload to get the health of the system
 *
 * @generated from message api.v1.HealthServiceGetRequest
 */
export type HealthServiceGetRequest = Message<"api.v1.HealthServiceGetRequest"> & {};
/**
 * Describes the message api.v1.HealthServiceGetRequest.
 * Use `create(HealthServiceGetRequestSchema)` to create a new message.
 */
export declare const HealthServiceGetRequestSchema: GenMessage<HealthServiceGetRequest>;
/**
 * HealthServiceGetRequest is the response payload with the health of the system
 *
 * @generated from message api.v1.HealthServiceGetResponse
 */
export type HealthServiceGetResponse = Message<"api.v1.HealthServiceGetResponse"> & {
    /**
     * Health is the overall health of the system
     *
     * @generated from field: api.v1.Health health = 1;
     */
    health?: Health;
};
/**
 * Describes the message api.v1.HealthServiceGetResponse.
 * Use `create(HealthServiceGetResponseSchema)` to create a new message.
 */
export declare const HealthServiceGetResponseSchema: GenMessage<HealthServiceGetResponse>;
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
 * Describes the enum api.v1.ServiceStatus.
 */
export declare const ServiceStatusSchema: GenEnum<ServiceStatus>;
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
 * Describes the enum api.v1.Service.
 */
export declare const ServiceSchema: GenEnum<Service>;
/**
 * HealthService serves health related functions
 *
 * @generated from service api.v1.HealthService
 */
export declare const HealthService: GenService<{
    /**
     * Get the health of the platform
     *
     * @generated from rpc api.v1.HealthService.Get
     */
    get: {
        methodKind: "unary";
        input: typeof HealthServiceGetRequestSchema;
        output: typeof HealthServiceGetResponseSchema;
    };
}>;
