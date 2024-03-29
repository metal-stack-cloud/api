import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Health, ServiceStatus } from "../../api/v1/health_pb.js";
/**
 * StatusServiceGetRequest is the request payload to get the status
 *
 * @generated from message status.v1.StatusServiceGetRequest
 */
export declare class StatusServiceGetRequest extends Message<StatusServiceGetRequest> {
    constructor(data?: PartialMessage<StatusServiceGetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "status.v1.StatusServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StatusServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StatusServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StatusServiceGetRequest;
    static equals(a: StatusServiceGetRequest | PlainMessage<StatusServiceGetRequest> | undefined, b: StatusServiceGetRequest | PlainMessage<StatusServiceGetRequest> | undefined): boolean;
}
/**
 * StatusServiceGetResponse is the response payload which describes the system status
 *
 * @generated from message status.v1.StatusServiceGetResponse
 */
export declare class StatusServiceGetResponse extends Message<StatusServiceGetResponse> {
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
    constructor(data?: PartialMessage<StatusServiceGetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "status.v1.StatusServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StatusServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StatusServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StatusServiceGetResponse;
    static equals(a: StatusServiceGetResponse | PlainMessage<StatusServiceGetResponse> | undefined, b: StatusServiceGetResponse | PlainMessage<StatusServiceGetResponse> | undefined): boolean;
}
