import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { OAuthProvider, Paging, TenantRole } from "../../api/v1/common_pb";
import type { Tenant } from "../../api/v1/tenant_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file admin/v1/tenant.proto.
 */
export declare const file_admin_v1_tenant: GenFile;
/**
 * TenantServiceListRequest is the request payload for a tenant list request
 *
 * @generated from message admin.v1.TenantServiceListRequest
 */
export type TenantServiceListRequest = Message<"admin.v1.TenantServiceListRequest"> & {
    /**
     * Tenant filters the result list by the given tenant id
     *
     * @generated from field: optional string tenant = 9;
     */
    tenant?: string;
    /**
     * Name filters the result list by the given tenant name
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
};
/**
 * Describes the message admin.v1.TenantServiceListRequest.
 * Use `create(TenantServiceListRequestSchema)` to create a new message.
 */
export declare const TenantServiceListRequestSchema: GenMessage<TenantServiceListRequest>;
/**
 * TenantServiceListResponse is the response payload for a tenant list request
 *
 * @generated from message admin.v1.TenantServiceListResponse
 */
export type TenantServiceListResponse = Message<"admin.v1.TenantServiceListResponse"> & {
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
};
/**
 * Describes the message admin.v1.TenantServiceListResponse.
 * Use `create(TenantServiceListResponseSchema)` to create a new message.
 */
export declare const TenantServiceListResponseSchema: GenMessage<TenantServiceListResponse>;
/**
 * TenantServiceAdmitRequest is the request payload for a tenant admit request
 *
 * @generated from message admin.v1.TenantServiceAdmitRequest
 */
export type TenantServiceAdmitRequest = Message<"admin.v1.TenantServiceAdmitRequest"> & {
    /**
     * TenantId is the id of the tenant to admit
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
};
/**
 * Describes the message admin.v1.TenantServiceAdmitRequest.
 * Use `create(TenantServiceAdmitRequestSchema)` to create a new message.
 */
export declare const TenantServiceAdmitRequestSchema: GenMessage<TenantServiceAdmitRequest>;
/**
 * TenantServiceAdmitResponse is the response payload for a tenant admit request
 *
 * @generated from message admin.v1.TenantServiceAdmitResponse
 */
export type TenantServiceAdmitResponse = Message<"admin.v1.TenantServiceAdmitResponse"> & {
    /**
     * Tenant the tenant
     *
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
};
/**
 * Describes the message admin.v1.TenantServiceAdmitResponse.
 * Use `create(TenantServiceAdmitResponseSchema)` to create a new message.
 */
export declare const TenantServiceAdmitResponseSchema: GenMessage<TenantServiceAdmitResponse>;
/**
 * TenantServiceRevokeRequest is the request payload for a tenant revoke request
 *
 * @generated from message admin.v1.TenantServiceRevokeRequest
 */
export type TenantServiceRevokeRequest = Message<"admin.v1.TenantServiceRevokeRequest"> & {
    /**
     * TenantId is the id of the tenant to revoke
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
};
/**
 * Describes the message admin.v1.TenantServiceRevokeRequest.
 * Use `create(TenantServiceRevokeRequestSchema)` to create a new message.
 */
export declare const TenantServiceRevokeRequestSchema: GenMessage<TenantServiceRevokeRequest>;
/**
 * TenantServiceRevokeResponse is the response payload for a tenant revoke request
 *
 * @generated from message admin.v1.TenantServiceRevokeResponse
 */
export type TenantServiceRevokeResponse = Message<"admin.v1.TenantServiceRevokeResponse"> & {
    /**
     * Tenant the tenant
     *
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
};
/**
 * Describes the message admin.v1.TenantServiceRevokeResponse.
 * Use `create(TenantServiceRevokeResponseSchema)` to create a new message.
 */
export declare const TenantServiceRevokeResponseSchema: GenMessage<TenantServiceRevokeResponse>;
/**
 * TenantServiceAddMemberRequest is the request payload for adding a member to a tenant
 *
 * @generated from message admin.v1.TenantServiceAddMemberRequest
 */
export type TenantServiceAddMemberRequest = Message<"admin.v1.TenantServiceAddMemberRequest"> & {
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
};
/**
 * Describes the message admin.v1.TenantServiceAddMemberRequest.
 * Use `create(TenantServiceAddMemberRequestSchema)` to create a new message.
 */
export declare const TenantServiceAddMemberRequestSchema: GenMessage<TenantServiceAddMemberRequest>;
/**
 * TenantServiceAddMemberResponse is the response payload for the add member request
 *
 * @generated from message admin.v1.TenantServiceAddMemberResponse
 */
export type TenantServiceAddMemberResponse = Message<"admin.v1.TenantServiceAddMemberResponse"> & {};
/**
 * Describes the message admin.v1.TenantServiceAddMemberResponse.
 * Use `create(TenantServiceAddMemberResponseSchema)` to create a new message.
 */
export declare const TenantServiceAddMemberResponseSchema: GenMessage<TenantServiceAddMemberResponse>;
/**
 * TenantService serves tenant related functions
 *
 * @generated from service admin.v1.TenantService
 */
export declare const TenantService: GenService<{
    /**
     * List tenants
     *
     * @generated from rpc admin.v1.TenantService.List
     */
    list: {
        methodKind: "unary";
        input: typeof TenantServiceListRequestSchema;
        output: typeof TenantServiceListResponseSchema;
    };
    /**
     * Admit a tenant
     *
     * @generated from rpc admin.v1.TenantService.Admit
     */
    admit: {
        methodKind: "unary";
        input: typeof TenantServiceAdmitRequestSchema;
        output: typeof TenantServiceAdmitResponseSchema;
    };
    /**
     * Revoke a tenant
     *
     * @generated from rpc admin.v1.TenantService.Revoke
     */
    revoke: {
        methodKind: "unary";
        input: typeof TenantServiceRevokeRequestSchema;
        output: typeof TenantServiceRevokeResponseSchema;
    };
    /**
     * Add a member to a tenant
     *
     * @generated from rpc admin.v1.TenantService.AddMember
     */
    addMember: {
        methodKind: "unary";
        input: typeof TenantServiceAddMemberRequestSchema;
        output: typeof TenantServiceAddMemberResponseSchema;
    };
}>;
