import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { OAuthProvider, Paging, TenantRole } from "../../api/v1/common_pb.js";
import { Tenant } from "../../api/v1/tenant_pb.js";
/**
 * TenantServiceListRequest is the request payload for a tenant list request
 *
 * @generated from message admin.v1.TenantServiceListRequest
 */
export declare class TenantServiceListRequest extends Message<TenantServiceListRequest> {
    /**
     * Login of the tenant to list
     *
     * @generated from field: optional string login = 1;
     */
    login?: string;
    /**
     * Name of the tenant to list
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * Email of the tenant to list
     *
     * @generated from field: optional string email = 3;
     */
    email?: string;
    /**
     * OauthProvide of the tenant to list
     *
     * @generated from field: optional api.v1.OAuthProvider oauth_provider = 5;
     */
    oauthProvider?: OAuthProvider;
    /**
     * Admitted on show admitted tenants
     *
     * @generated from field: optional bool admitted = 6;
     */
    admitted?: boolean;
    /**
     * Paging details for the list request
     *
     * @generated from field: api.v1.Paging paging = 7;
     */
    paging?: Paging;
    /**
     * Uuid of the tenant to list
     *
     * @generated from field: optional string uuid = 8;
     */
    uuid?: string;
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
 * TenantServiceListResponse is the response payload for a tenant list request
 *
 * @generated from message admin.v1.TenantServiceListResponse
 */
export declare class TenantServiceListResponse extends Message<TenantServiceListResponse> {
    /**
     * Tenants are the list of tenants
     *
     * @generated from field: repeated api.v1.Tenant tenants = 1;
     */
    tenants: Tenant[];
    /**
     * NextPage is used for pagination, returns the next page to be fetched and must then be provided in the list request.
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
 * TenantServiceAdmitRequest is the request payload for a tenant admit request
 *
 * @generated from message admin.v1.TenantServiceAdmitRequest
 */
export declare class TenantServiceAdmitRequest extends Message<TenantServiceAdmitRequest> {
    /**
     * TenantId is the id of the tenant to admit
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
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
 * TenantServiceAdmitResponse is the response payload for a tenant admit request
 *
 * @generated from message admin.v1.TenantServiceAdmitResponse
 */
export declare class TenantServiceAdmitResponse extends Message<TenantServiceAdmitResponse> {
    /**
     * Tenant the tenant
     *
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
 * TenantServiceRevokeRequest is the request payload for a tenant revoke request
 *
 * @generated from message admin.v1.TenantServiceRevokeRequest
 */
export declare class TenantServiceRevokeRequest extends Message<TenantServiceRevokeRequest> {
    /**
     * TenantId is the id of the tenant to revoke
     *
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
 * TenantServiceRevokeResponse is the response payload for a tenant revoke request
 *
 * @generated from message admin.v1.TenantServiceRevokeResponse
 */
export declare class TenantServiceRevokeResponse extends Message<TenantServiceRevokeResponse> {
    /**
     * Tenant the tenant
     *
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
/**
 * TenantServiceAddMemberRequest is the request payload for adding a member to a tenant
 *
 * @generated from message admin.v1.TenantServiceAddMemberRequest
 */
export declare class TenantServiceAddMemberRequest extends Message<TenantServiceAddMemberRequest> {
    /**
     * Tenant ID to which the member will be added
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * Email of the member to add
     *
     * @generated from field: string member_id = 2;
     */
    memberId: string;
    /**
     * Role to assign to the new member
     *
     * @generated from field: api.v1.TenantRole role = 3;
     */
    role: TenantRole;
    constructor(data?: PartialMessage<TenantServiceAddMemberRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.TenantServiceAddMemberRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceAddMemberRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceAddMemberRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceAddMemberRequest;
    static equals(a: TenantServiceAddMemberRequest | PlainMessage<TenantServiceAddMemberRequest> | undefined, b: TenantServiceAddMemberRequest | PlainMessage<TenantServiceAddMemberRequest> | undefined): boolean;
}
/**
 * TenantServiceAddMemberResponse is the response payload for the add member request
 *
 * @generated from message admin.v1.TenantServiceAddMemberResponse
 */
export declare class TenantServiceAddMemberResponse extends Message<TenantServiceAddMemberResponse> {
    constructor(data?: PartialMessage<TenantServiceAddMemberResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.TenantServiceAddMemberResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceAddMemberResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceAddMemberResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceAddMemberResponse;
    static equals(a: TenantServiceAddMemberResponse | PlainMessage<TenantServiceAddMemberResponse> | undefined, b: TenantServiceAddMemberResponse | PlainMessage<TenantServiceAddMemberResponse> | undefined): boolean;
}
