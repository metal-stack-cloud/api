import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * AuditTrace is an audit trace
 *
 * @generated from message api.v1.AuditTrace
 */
export declare class AuditTrace extends Message<AuditTrace> {
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
     * @generated from field: string project = 5;
     */
    project: string;
    /**
     * Method is the api method that was called
     *
     * @generated from field: string method = 6;
     */
    method: string;
    /**
     * Request is the payload of the request
     *
     * @generated from field: string body = 7;
     */
    body: string;
    /**
     * Response is the payload of the response
     *
     * @generated from field: string source_ip = 8;
     */
    sourceIp: string;
    /**
     * ResultCode is a string describing the result of the api call
     *
     * @generated from field: int32 result_code = 9;
     */
    resultCode: number;
    constructor(data?: PartialMessage<AuditTrace>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.AuditTrace";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditTrace;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditTrace;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditTrace;
    static equals(a: AuditTrace | PlainMessage<AuditTrace> | undefined, b: AuditTrace | PlainMessage<AuditTrace> | undefined): boolean;
}
/**
 * AuditServiceListRequest is the request payload to list audits
 *
 * @generated from message api.v1.AuditServiceListRequest
 */
export declare class AuditServiceListRequest extends Message<AuditServiceListRequest> {
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
    constructor(data?: PartialMessage<AuditServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.AuditServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditServiceListRequest;
    static equals(a: AuditServiceListRequest | PlainMessage<AuditServiceListRequest> | undefined, b: AuditServiceListRequest | PlainMessage<AuditServiceListRequest> | undefined): boolean;
}
/**
 * AuditServiceListResponse is the response payload of a audit list request
 *
 * @generated from message api.v1.AuditServiceListResponse
 */
export declare class AuditServiceListResponse extends Message<AuditServiceListResponse> {
    /**
     * Audits is a list of audits without the secrets
     *
     * @generated from field: repeated api.v1.AuditTrace audits = 1;
     */
    audits: AuditTrace[];
    constructor(data?: PartialMessage<AuditServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.AuditServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditServiceListResponse;
    static equals(a: AuditServiceListResponse | PlainMessage<AuditServiceListResponse> | undefined, b: AuditServiceListResponse | PlainMessage<AuditServiceListResponse> | undefined): boolean;
}
/**
 * AuditServiceGetRequest is the request payload of a audit get request
 *
 * @generated from message api.v1.AuditServiceGetRequest
 */
export declare class AuditServiceGetRequest extends Message<AuditServiceGetRequest> {
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
    constructor(data?: PartialMessage<AuditServiceGetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.AuditServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditServiceGetRequest;
    static equals(a: AuditServiceGetRequest | PlainMessage<AuditServiceGetRequest> | undefined, b: AuditServiceGetRequest | PlainMessage<AuditServiceGetRequest> | undefined): boolean;
}
/**
 * AuditServiceGetResponse is the response payload of a audit get request
 *
 * @generated from message api.v1.AuditServiceGetResponse
 */
export declare class AuditServiceGetResponse extends Message<AuditServiceGetResponse> {
    /**
     * Audit is the audit
     *
     * @generated from field: api.v1.AuditTrace audit = 2;
     */
    audit?: AuditTrace;
    constructor(data?: PartialMessage<AuditServiceGetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.AuditServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditServiceGetResponse;
    static equals(a: AuditServiceGetResponse | PlainMessage<AuditServiceGetResponse> | undefined, b: AuditServiceGetResponse | PlainMessage<AuditServiceGetResponse> | undefined): boolean;
}
