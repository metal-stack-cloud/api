import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { AuditPhase, AuditTrace } from "../../api/v1/audit_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file admin/v1/audit.proto.
 */
export declare const file_admin_v1_audit: GenFile;
/**
 * AuditServiceListRequest is the request payload to list audits
 *
 * @generated from message admin.v1.AuditServiceListRequest
 */
export type AuditServiceListRequest = Message<"admin.v1.AuditServiceListRequest"> & {
    /**
     * Uuid of the audit trace
     *
     * @generated from field: optional string uuid = 2;
     */
    uuid?: string;
    /**
     * From describes the start of the time window in which to list audit traces.
     * Defaults to the last eight hours
     *
     * @generated from field: optional google.protobuf.Timestamp from = 3;
     */
    from?: Timestamp;
    /**
     * To describes the end of the time window in which to list audit traces.
     * Defaults to the time the request was issued
     *
     * @generated from field: optional google.protobuf.Timestamp to = 4;
     */
    to?: Timestamp;
    /**
     * User is the user who called the api method
     *
     * @generated from field: optional string user = 5;
     */
    user?: string;
    /**
     * Project is the project targeted by the api call
     *
     * @generated from field: optional string project = 6;
     */
    project?: string;
    /**
     * Method is the api method that was called
     *
     * @generated from field: optional string method = 7;
     */
    method?: string;
    /**
     * Source IP contains the ip address of the caller
     *
     * @generated from field: optional string source_ip = 8;
     */
    sourceIp?: string;
    /**
     * Result Code is a string describing the result of the api call
     *
     * @generated from field: optional int32 result_code = 9;
     */
    resultCode?: number;
    /**
     * Body is a string providing text-search of the body field
     *
     * @generated from field: optional string body = 10;
     */
    body?: string;
    /**
     * Limit is a number limiting the length of the response (min: 1, max: 1000,
     * defaults to 200)
     *
     * @generated from field: optional int32 limit = 11;
     */
    limit?: number;
    /**
     * Phase specifies the audit phase
     *
     * @generated from field: optional api.v1.AuditPhase phase = 12;
     */
    phase?: AuditPhase;
};
/**
 * Describes the message admin.v1.AuditServiceListRequest.
 * Use `create(AuditServiceListRequestSchema)` to create a new message.
 */
export declare const AuditServiceListRequestSchema: GenMessage<AuditServiceListRequest>;
/**
 * AuditServiceListResponse is the response payload of a audit list request
 *
 * @generated from message admin.v1.AuditServiceListResponse
 */
export type AuditServiceListResponse = Message<"admin.v1.AuditServiceListResponse"> & {
    /**
     * Traces is a list of audit traces
     *
     * @generated from field: repeated api.v1.AuditTrace traces = 1;
     */
    traces: AuditTrace[];
};
/**
 * Describes the message admin.v1.AuditServiceListResponse.
 * Use `create(AuditServiceListResponseSchema)` to create a new message.
 */
export declare const AuditServiceListResponseSchema: GenMessage<AuditServiceListResponse>;
/**
 * AuditServiceGetRequest is the request payload of a audit get request
 *
 * @generated from message admin.v1.AuditServiceGetRequest
 */
export type AuditServiceGetRequest = Message<"admin.v1.AuditServiceGetRequest"> & {
    /**
     * Uuid of the audit trace
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Phase specifies the audit phase. Defaults to request
     *
     * @generated from field: optional api.v1.AuditPhase phase = 2;
     */
    phase?: AuditPhase;
};
/**
 * Describes the message admin.v1.AuditServiceGetRequest.
 * Use `create(AuditServiceGetRequestSchema)` to create a new message.
 */
export declare const AuditServiceGetRequestSchema: GenMessage<AuditServiceGetRequest>;
/**
 * AuditServiceGetResponse is the response payload of a audit get request
 *
 * @generated from message admin.v1.AuditServiceGetResponse
 */
export type AuditServiceGetResponse = Message<"admin.v1.AuditServiceGetResponse"> & {
    /**
     * Trace is the audit trace
     *
     * @generated from field: api.v1.AuditTrace trace = 1;
     */
    trace?: AuditTrace;
};
/**
 * Describes the message admin.v1.AuditServiceGetResponse.
 * Use `create(AuditServiceGetResponseSchema)` to create a new message.
 */
export declare const AuditServiceGetResponseSchema: GenMessage<AuditServiceGetResponse>;
/**
 * AuditService serves audit related functions
 *
 * @generated from service admin.v1.AuditService
 */
export declare const AuditService: GenService<{
    /**
     * Get an audit trace
     *
     * @generated from rpc admin.v1.AuditService.Get
     */
    get: {
        methodKind: "unary";
        input: typeof AuditServiceGetRequestSchema;
        output: typeof AuditServiceGetResponseSchema;
    };
    /**
     * List all audit traces
     *
     * @generated from rpc admin.v1.AuditService.List
     */
    list: {
        methodKind: "unary";
        input: typeof AuditServiceListRequestSchema;
        output: typeof AuditServiceListResponseSchema;
    };
}>;
