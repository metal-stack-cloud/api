import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Health, ServiceStatus } from "../../api/v1/health_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file status/v1/status.proto.
 */
export declare const file_status_v1_status: GenFile;
/**
 * StatusServiceGetRequest is the request payload to get the status
 *
 * @generated from message status.v1.StatusServiceGetRequest
 */
export type StatusServiceGetRequest = Message<"status.v1.StatusServiceGetRequest"> & {};
/**
 * Describes the message status.v1.StatusServiceGetRequest.
 * Use `create(StatusServiceGetRequestSchema)` to create a new message.
 */
export declare const StatusServiceGetRequestSchema: GenMessage<StatusServiceGetRequest>;
/**
 * StatusServiceGetResponse is the response payload which describes the system status
 *
 * @generated from message status.v1.StatusServiceGetResponse
 */
export type StatusServiceGetResponse = Message<"status.v1.StatusServiceGetResponse"> & {
    /**
     * Health of the individual services
     *
     * @generated from field: api.v1.Health health = 1;
     */
    health?: Health;
    /**
     * OverallStatus is the status of the system
     *
     * @generated from field: api.v1.ServiceStatus overall_status = 2;
     */
    overallStatus: ServiceStatus;
    /**
     * ConnectionBroken shows if the connection to the system is broken
     *
     * @generated from field: bool connection_broken = 3;
     */
    connectionBroken: boolean;
    /**
     * ApiVersion of the system
     *
     * @generated from field: string api_version = 4;
     */
    apiVersion: string;
};
/**
 * Describes the message status.v1.StatusServiceGetResponse.
 * Use `create(StatusServiceGetResponseSchema)` to create a new message.
 */
export declare const StatusServiceGetResponseSchema: GenMessage<StatusServiceGetResponse>;
/**
 * StatusService serves status related functions
 * this service is used as backend for the status dashboard
 *
 * @generated from service status.v1.StatusService
 */
export declare const StatusService: GenService<{
    /**
     * Get the system status
     *
     * @generated from rpc status.v1.StatusService.Get
     */
    get: {
        methodKind: "unary";
        input: typeof StatusServiceGetRequestSchema;
        output: typeof StatusServiceGetResponseSchema;
    };
}>;
