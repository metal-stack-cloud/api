import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file api/v1/audit.proto.
 */
export declare const file_api_v1_audit: GenFile;
/**
 * AuditTrace is an audit trace
 *
 * @generated from message api.v1.AuditTrace
 */
export type AuditTrace = Message<"api.v1.AuditTrace"> & {
    /**
     * Uuid of the audit trace
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
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
    user: string;
    /**
     * Tenant is the tenant targeted by the api call
     *
     * @generated from field: string tenant = 4;
     */
    tenant: string;
    /**
     * Project is the project targeted by the api call
     *
     * @generated from field: optional string project = 5;
     */
    project?: string;
    /**
     * Method is the api method that was called
     *
     * @generated from field: string method = 6;
     */
    method: string;
    /**
     * Request is the payload of the request
     *
     * @generated from field: optional string body = 7;
     */
    body?: string;
    /**
     * Response is the payload of the response
     *
     * @generated from field: string source_ip = 8;
     */
    sourceIp: string;
    /**
     * ResultCode is a string describing the result of the api call
     *
     * @generated from field: optional int32 result_code = 9;
     */
    resultCode?: number;
    /**
     * Phase is a string representing the request phase
     *
     * @generated from field: string phase = 10;
     */
    phase: string;
};
/**
 * Describes the message api.v1.AuditTrace.
 * Use `create(AuditTraceSchema)` to create a new message.
 */
export declare const AuditTraceSchema: GenMessage<AuditTrace>;
/**
 * AuditServiceListRequest is the request payload to list audits
 *
 * @generated from message api.v1.AuditServiceListRequest
 */
export type AuditServiceListRequest = Message<"api.v1.AuditServiceListRequest"> & {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Uuid of the audit trace
     *
     * @generated from field: optional string uuid = 2;
     */
    uuid?: string;
    /**
     * From describes the start of the time window in which to list audit traces
     *
     * @generated from field: google.protobuf.Timestamp from = 3;
     */
    from?: Timestamp;
    /**
     * To describes the end of the time window in which to list audit traces
     *
     * @generated from field: google.protobuf.Timestamp to = 4;
     */
    to?: Timestamp;
    /**
     * User is the user who called the api method
     *
     * @generated from field: optional string user = 5;
     */
    user?: string;
    /**
     * Tenant is the tenant targeted by the api call
     *
     * @generated from field: string tenant = 6;
     */
    tenant: string;
    /**
     * Project is the project targeted by the api call
     *
     * @generated from field: optional string project = 7;
     */
    project?: string;
    /**
     * Method is the api method that was called
     *
     * @generated from field: optional string method = 8;
     */
    method?: string;
    /**
     * SourceIP contains the ip address of the caller
     *
     * @generated from field: optional string source_ip = 9;
     */
    sourceIp?: string;
    /**
     * ResultCode is a string describing the result of the api call
     *
     * @generated from field: optional int32 result_code = 10;
     */
    resultCode?: number;
    /**
     * Body is a string providing text-search of the body field
     *
     * @generated from field: optional string body = 11;
     */
    body?: string;
    /**
     * Limit is a number limiting the length of the response (min: 1, max: 1000)
     *
     * @generated from field: optional int32 limit = 12;
     */
    limit?: number;
};
/**
 * Describes the message api.v1.AuditServiceListRequest.
 * Use `create(AuditServiceListRequestSchema)` to create a new message.
 */
export declare const AuditServiceListRequestSchema: GenMessage<AuditServiceListRequest>;
/**
 * AuditServiceListResponse is the response payload of a audit list request
 *
 * @generated from message api.v1.AuditServiceListResponse
 */
export type AuditServiceListResponse = Message<"api.v1.AuditServiceListResponse"> & {
    /**
     * Audits is a list of audits without the secrets
     *
     * @generated from field: repeated api.v1.AuditTrace audits = 1;
     */
    audits: AuditTrace[];
};
/**
 * Describes the message api.v1.AuditServiceListResponse.
 * Use `create(AuditServiceListResponseSchema)` to create a new message.
 */
export declare const AuditServiceListResponseSchema: GenMessage<AuditServiceListResponse>;
/**
 * AuditServiceGetRequest is the request payload of a audit get request
 *
 * @generated from message api.v1.AuditServiceGetRequest
 */
export type AuditServiceGetRequest = Message<"api.v1.AuditServiceGetRequest"> & {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Uuid of the audit trace
     *
     * @generated from field: string uuid = 2;
     */
    uuid: string;
};
/**
 * Describes the message api.v1.AuditServiceGetRequest.
 * Use `create(AuditServiceGetRequestSchema)` to create a new message.
 */
export declare const AuditServiceGetRequestSchema: GenMessage<AuditServiceGetRequest>;
/**
 * AuditServiceGetResponse is the response payload of a audit get request
 *
 * @generated from message api.v1.AuditServiceGetResponse
 */
export type AuditServiceGetResponse = Message<"api.v1.AuditServiceGetResponse"> & {
    /**
     * Audit is the audit
     *
     * @generated from field: api.v1.AuditTrace audit = 2;
     */
    audit?: AuditTrace;
};
/**
 * Describes the message api.v1.AuditServiceGetResponse.
 * Use `create(AuditServiceGetResponseSchema)` to create a new message.
 */
export declare const AuditServiceGetResponseSchema: GenMessage<AuditServiceGetResponse>;
/**
 * AuditService serves audit related functions
 *
 *
 * @generated from service api.v1.AuditService
 */
export declare const AuditService: GenService<{
    /**
     * Get a audit
     *
     * @generated from rpc api.v1.AuditService.Get
     */
    get: {
        methodKind: "unary";
        input: typeof AuditServiceGetRequestSchema;
        output: typeof AuditServiceGetResponseSchema;
    };
    /**
     * List your audit traces
     *
     * @generated from rpc api.v1.AuditService.List
     */
    list: {
        methodKind: "unary";
        input: typeof AuditServiceListRequestSchema;
        output: typeof AuditServiceListResponseSchema;
    };
}>;
