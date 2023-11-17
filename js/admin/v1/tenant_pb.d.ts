import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { OAuthProvider, Paging } from "../../api/v1/common_pb.js";
import { Tenant } from "../../api/v1/tenant_pb.js";
/**
 * @generated from message admin.v1.TenantServiceListRequest
 */
export declare class TenantServiceListRequest extends Message<TenantServiceListRequest> {
    /**
     * @generated from field: optional string login = 1;
     */
    login?: string;
    /**
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * @generated from field: optional string email = 3;
     */
    email?: string;
    /**
     * @generated from field: optional string organisation_id = 4;
     */
    organisationId?: string;
    /**
     * @generated from field: optional api.v1.OAuthProvider oauth_provider = 5;
     */
    oauthProvider?: OAuthProvider;
    /**
     * @generated from field: optional bool admitted = 6;
     */
    admitted?: boolean;
    /**
     * @generated from field: api.v1.Paging paging = 7;
     */
    paging?: Paging;
    constructor(data?: PartialMessage<TenantServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.TenantServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceListRequest;
    static equals(a: TenantServiceListRequest | PlainMessage<TenantServiceListRequest> | undefined, b: TenantServiceListRequest | PlainMessage<TenantServiceListRequest> | undefined): boolean;
}
/**
 * @generated from message admin.v1.TenantServiceListResponse
 */
export declare class TenantServiceListResponse extends Message<TenantServiceListResponse> {
    /**
     * @generated from field: repeated api.v1.Tenant tenants = 1;
     */
    tenants: Tenant[];
    /**
     * next_page is used for pagination, returns the next page to be fetched and must then be provided in the list request.
     *
     * @generated from field: optional uint64 next_page = 2;
     */
    nextPage?: bigint;
    constructor(data?: PartialMessage<TenantServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.TenantServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceListResponse;
    static equals(a: TenantServiceListResponse | PlainMessage<TenantServiceListResponse> | undefined, b: TenantServiceListResponse | PlainMessage<TenantServiceListResponse> | undefined): boolean;
}
/**
 * @generated from message admin.v1.TenantServiceAdmitRequest
 */
export declare class TenantServiceAdmitRequest extends Message<TenantServiceAdmitRequest> {
    /**
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * @generated from field: optional string coupon_id = 2;
     */
    couponId?: string;
    /**
     * @generated from field: optional int64 balance = 3;
     */
    balance?: bigint;
    constructor(data?: PartialMessage<TenantServiceAdmitRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.TenantServiceAdmitRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceAdmitRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceAdmitRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceAdmitRequest;
    static equals(a: TenantServiceAdmitRequest | PlainMessage<TenantServiceAdmitRequest> | undefined, b: TenantServiceAdmitRequest | PlainMessage<TenantServiceAdmitRequest> | undefined): boolean;
}
/**
 * @generated from message admin.v1.TenantServiceAdmitResponse
 */
export declare class TenantServiceAdmitResponse extends Message<TenantServiceAdmitResponse> {
    /**
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceAdmitResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.TenantServiceAdmitResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceAdmitResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceAdmitResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceAdmitResponse;
    static equals(a: TenantServiceAdmitResponse | PlainMessage<TenantServiceAdmitResponse> | undefined, b: TenantServiceAdmitResponse | PlainMessage<TenantServiceAdmitResponse> | undefined): boolean;
}
/**
 * @generated from message admin.v1.TenantServiceRevokeRequest
 */
export declare class TenantServiceRevokeRequest extends Message<TenantServiceRevokeRequest> {
    /**
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    constructor(data?: PartialMessage<TenantServiceRevokeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.TenantServiceRevokeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceRevokeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceRevokeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceRevokeRequest;
    static equals(a: TenantServiceRevokeRequest | PlainMessage<TenantServiceRevokeRequest> | undefined, b: TenantServiceRevokeRequest | PlainMessage<TenantServiceRevokeRequest> | undefined): boolean;
}
/**
 * @generated from message admin.v1.TenantServiceRevokeResponse
 */
export declare class TenantServiceRevokeResponse extends Message<TenantServiceRevokeResponse> {
    /**
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceRevokeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.TenantServiceRevokeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceRevokeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceRevokeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceRevokeResponse;
    static equals(a: TenantServiceRevokeResponse | PlainMessage<TenantServiceRevokeResponse> | undefined, b: TenantServiceRevokeResponse | PlainMessage<TenantServiceRevokeResponse> | undefined): boolean;
}
