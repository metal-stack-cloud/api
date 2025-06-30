import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { AdminRole, ProjectRole, TenantRole } from "./common_pb";
import type { MethodPermission } from "./token_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file api/v1/methods.proto.
 */
export declare const file_api_v1_methods: GenFile;
/**
 * MethodServiceListRequest is the request payload to list all public methods
 *
 * @generated from message api.v1.MethodServiceListRequest
 */
export type MethodServiceListRequest = Message<"api.v1.MethodServiceListRequest"> & {};
/**
 * Describes the message api.v1.MethodServiceListRequest.
 * Use `create(MethodServiceListRequestSchema)` to create a new message.
 */
export declare const MethodServiceListRequestSchema: GenMessage<MethodServiceListRequest>;
/**
 * MethodServiceListResponse is the response payload with all public visible methods
 *
 * @generated from message api.v1.MethodServiceListResponse
 */
export type MethodServiceListResponse = Message<"api.v1.MethodServiceListResponse"> & {
    /**
     * Methods is a list of methods public callable
     *
     * @generated from field: repeated string methods = 1;
     */
    methods: string[];
};
/**
 * Describes the message api.v1.MethodServiceListResponse.
 * Use `create(MethodServiceListResponseSchema)` to create a new message.
 */
export declare const MethodServiceListResponseSchema: GenMessage<MethodServiceListResponse>;
/**
 * MethodServiceTokenScopedListRequest is the request payload to list all methods callable with the token present in the request
 *
 * @generated from message api.v1.MethodServiceTokenScopedListRequest
 */
export type MethodServiceTokenScopedListRequest = Message<"api.v1.MethodServiceTokenScopedListRequest"> & {};
/**
 * Describes the message api.v1.MethodServiceTokenScopedListRequest.
 * Use `create(MethodServiceTokenScopedListRequestSchema)` to create a new message.
 */
export declare const MethodServiceTokenScopedListRequestSchema: GenMessage<MethodServiceTokenScopedListRequest>;
/**
 * MethodServiceTokenScopedListResponse is the response payload which contains all methods which are callable with the given token
 *
 * @generated from message api.v1.MethodServiceTokenScopedListResponse
 */
export type MethodServiceTokenScopedListResponse = Message<"api.v1.MethodServiceTokenScopedListResponse"> & {
    /**
     * Permissions a list of methods which can be called
     *
     * @generated from field: repeated api.v1.MethodPermission permissions = 1;
     */
    permissions: MethodPermission[];
    /**
     * ProjectRoles associates a project id with the corresponding role of the token owner
     *
     * @generated from field: map<string, api.v1.ProjectRole> project_roles = 3;
     */
    projectRoles: {
        [key: string]: ProjectRole;
    };
    /**
     * TenantRoles associates a tenant id with the corresponding role of the token owner
     *
     * @generated from field: map<string, api.v1.TenantRole> tenant_roles = 4;
     */
    tenantRoles: {
        [key: string]: TenantRole;
    };
    /**
     * AdminRole defines the admin role of the token owner
     *
     * @generated from field: optional api.v1.AdminRole admin_role = 5;
     */
    adminRole?: AdminRole;
};
/**
 * Describes the message api.v1.MethodServiceTokenScopedListResponse.
 * Use `create(MethodServiceTokenScopedListResponseSchema)` to create a new message.
 */
export declare const MethodServiceTokenScopedListResponseSchema: GenMessage<MethodServiceTokenScopedListResponse>;
/**
 * MethodService serves method related functions
 * methods are functions in services
 *
 * @generated from service api.v1.MethodService
 */
export declare const MethodService: GenService<{
    /**
     * List all public visible methods
     *
     * @generated from rpc api.v1.MethodService.List
     */
    list: {
        methodKind: "unary";
        input: typeof MethodServiceListRequestSchema;
        output: typeof MethodServiceListResponseSchema;
    };
    /**
     * TokenScopedList all methods callable with the token present in the request
     *
     * @generated from rpc api.v1.MethodService.TokenScopedList
     */
    tokenScopedList: {
        methodKind: "unary";
        input: typeof MethodServiceTokenScopedListRequestSchema;
        output: typeof MethodServiceTokenScopedListResponseSchema;
    };
}>;
