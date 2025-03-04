import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { AdminRole, ProjectRole, TenantRole } from "./common_pb";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file api/v1/token.proto.
 */
export declare const file_api_v1_token: GenFile;
/**
 * Token is a jwt authentication token to access the api
 *
 * @generated from message api.v1.Token
 */
export type Token = Message<"api.v1.Token"> & {
    /**
     * Uuid of the jwt token, used to reference it by revoke
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * UserId who created this token
     *
     * @generated from field: string user_id = 2;
     */
    userId: string;
    /**
     * Description is a user given description of this token.
     *
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * Permissions is a list of service methods this token can be used for
     *
     * @generated from field: repeated api.v1.MethodPermission permissions = 4;
     */
    permissions: MethodPermission[];
    /**
     * Expires gives the date in the future after which this token can not be used anymore
     *
     * @generated from field: google.protobuf.Timestamp expires = 6;
     */
    expires?: Timestamp;
    /**
     * IssuedAt gives the date when this token was created
     *
     * @generated from field: google.protobuf.Timestamp issued_at = 7;
     */
    issuedAt?: Timestamp;
    /**
     * TokenType describes the type of this token
     *
     * @generated from field: api.v1.TokenType token_type = 8;
     */
    tokenType: TokenType;
    /**
     * ProjectRoles associates a project id with the corresponding role of the token owner
     *
     * @generated from field: map<string, api.v1.ProjectRole> project_roles = 9;
     */
    projectRoles: {
        [key: string]: ProjectRole;
    };
    /**
     * TenantRoles associates a tenant id with the corresponding role of the token owner
     *
     * @generated from field: map<string, api.v1.TenantRole> tenant_roles = 10;
     */
    tenantRoles: {
        [key: string]: TenantRole;
    };
    /**
     * AdminRole defines the admin role of the token owner
     *
     * @generated from field: optional api.v1.AdminRole admin_role = 11;
     */
    adminRole?: AdminRole;
};
/**
 * Describes the message api.v1.Token.
 * Use `create(TokenSchema)` to create a new message.
 */
export declare const TokenSchema: GenMessage<Token>;
/**
 * TokenServiceCreateRequest is the request payload to create a token
 *
 * @generated from message api.v1.TokenServiceCreateRequest
 */
export type TokenServiceCreateRequest = Message<"api.v1.TokenServiceCreateRequest"> & {
    /**
     * Description of the token
     *
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * Permissions is a list of service methods this token can be used for
     *
     * @generated from field: repeated api.v1.MethodPermission permissions = 2;
     */
    permissions: MethodPermission[];
    /**
     * Expires gives the duration since now, after which this token can not be used anymore
     *
     * @generated from field: google.protobuf.Duration expires = 4;
     */
    expires?: Duration;
    /**
     * ProjectRoles associates a project id with the corresponding role of the token owner
     *
     * @generated from field: map<string, api.v1.ProjectRole> project_roles = 5;
     */
    projectRoles: {
        [key: string]: ProjectRole;
    };
    /**
     * TenantRoles associates a tenant id with the corresponding role of the token owner
     *
     * @generated from field: map<string, api.v1.TenantRole> tenant_roles = 6;
     */
    tenantRoles: {
        [key: string]: TenantRole;
    };
    /**
     * AdminRole defines the admin role of the token owner
     *
     * @generated from field: optional api.v1.AdminRole admin_role = 7;
     */
    adminRole?: AdminRole;
};
/**
 * Describes the message api.v1.TokenServiceCreateRequest.
 * Use `create(TokenServiceCreateRequestSchema)` to create a new message.
 */
export declare const TokenServiceCreateRequestSchema: GenMessage<TokenServiceCreateRequest>;
/**
 * MethodPermission is a mapping from a subject/project to a service method
 *
 * @generated from message api.v1.MethodPermission
 */
export type MethodPermission = Message<"api.v1.MethodPermission"> & {
    /**
     * Subject maybe either the project or the tenant
     * for which the methods should be allowed
     *
     * @generated from field: string subject = 1;
     */
    subject: string;
    /**
     * Methods which should be accessible
     *
     * @generated from field: repeated string methods = 2;
     */
    methods: string[];
};
/**
 * Describes the message api.v1.MethodPermission.
 * Use `create(MethodPermissionSchema)` to create a new message.
 */
export declare const MethodPermissionSchema: GenMessage<MethodPermission>;
/**
 * TokenServiceCreateResponse is the response payload of a token create request
 *
 * @generated from message api.v1.TokenServiceCreateResponse
 */
export type TokenServiceCreateResponse = Message<"api.v1.TokenServiceCreateResponse"> & {
    /**
     * Token which was created
     *
     * @generated from field: api.v1.Token token = 1;
     */
    token?: Token;
    /**
     * Secret is the body if the jwt token, should be used in api requests as bearer token
     *
     * @generated from field: string secret = 2;
     */
    secret: string;
};
/**
 * Describes the message api.v1.TokenServiceCreateResponse.
 * Use `create(TokenServiceCreateResponseSchema)` to create a new message.
 */
export declare const TokenServiceCreateResponseSchema: GenMessage<TokenServiceCreateResponse>;
/**
 * TokenServiceListRequest is the request payload to list tokens
 *
 * @generated from message api.v1.TokenServiceListRequest
 */
export type TokenServiceListRequest = Message<"api.v1.TokenServiceListRequest"> & {};
/**
 * Describes the message api.v1.TokenServiceListRequest.
 * Use `create(TokenServiceListRequestSchema)` to create a new message.
 */
export declare const TokenServiceListRequestSchema: GenMessage<TokenServiceListRequest>;
/**
 * TokenServiceListResponse is the response payload of a token list request
 *
 * @generated from message api.v1.TokenServiceListResponse
 */
export type TokenServiceListResponse = Message<"api.v1.TokenServiceListResponse"> & {
    /**
     * Tokens is a list of tokens without the secrets
     *
     * @generated from field: repeated api.v1.Token tokens = 1;
     */
    tokens: Token[];
};
/**
 * Describes the message api.v1.TokenServiceListResponse.
 * Use `create(TokenServiceListResponseSchema)` to create a new message.
 */
export declare const TokenServiceListResponseSchema: GenMessage<TokenServiceListResponse>;
/**
 * TokenServiceRevokeRequest is the request payload of a token revoke request
 *
 * @generated from message api.v1.TokenServiceRevokeRequest
 */
export type TokenServiceRevokeRequest = Message<"api.v1.TokenServiceRevokeRequest"> & {
    /**
     * Uuid of the token to revoke
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
};
/**
 * Describes the message api.v1.TokenServiceRevokeRequest.
 * Use `create(TokenServiceRevokeRequestSchema)` to create a new message.
 */
export declare const TokenServiceRevokeRequestSchema: GenMessage<TokenServiceRevokeRequest>;
/**
 * TokenServiceRevokeResponse is the response payload of a token revoke request
 *
 * @generated from message api.v1.TokenServiceRevokeResponse
 */
export type TokenServiceRevokeResponse = Message<"api.v1.TokenServiceRevokeResponse"> & {};
/**
 * Describes the message api.v1.TokenServiceRevokeResponse.
 * Use `create(TokenServiceRevokeResponseSchema)` to create a new message.
 */
export declare const TokenServiceRevokeResponseSchema: GenMessage<TokenServiceRevokeResponse>;
/**
 * TokenServiceUpdateRequest is the request payload of a token update request
 *
 * @generated from message api.v1.TokenServiceUpdateRequest
 */
export type TokenServiceUpdateRequest = Message<"api.v1.TokenServiceUpdateRequest"> & {
    /**
     * Uuid of the token to update
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Description is a user given description of this token.
     *
     * @generated from field: optional string description = 2;
     */
    description?: string;
    /**
     * Permissions is a list of service methods this token can be used for
     *
     * @generated from field: repeated api.v1.MethodPermission permissions = 3;
     */
    permissions: MethodPermission[];
    /**
     * ProjectRoles associates a project id with the corresponding role of the token owner
     *
     * @generated from field: map<string, api.v1.ProjectRole> project_roles = 4;
     */
    projectRoles: {
        [key: string]: ProjectRole;
    };
    /**
     * TenantRoles associates a tenant id with the corresponding role of the token owner
     *
     * @generated from field: map<string, api.v1.TenantRole> tenant_roles = 5;
     */
    tenantRoles: {
        [key: string]: TenantRole;
    };
    /**
     * AdminRole defines the admin role of the token owner
     *
     * @generated from field: optional api.v1.AdminRole admin_role = 6;
     */
    adminRole?: AdminRole;
};
/**
 * Describes the message api.v1.TokenServiceUpdateRequest.
 * Use `create(TokenServiceUpdateRequestSchema)` to create a new message.
 */
export declare const TokenServiceUpdateRequestSchema: GenMessage<TokenServiceUpdateRequest>;
/**
 * TokenServiceUpdateResponse is the response payload of a token update request
 *
 * @generated from message api.v1.TokenServiceUpdateResponse
 */
export type TokenServiceUpdateResponse = Message<"api.v1.TokenServiceUpdateResponse"> & {
    /**
     * Token is the updated token
     *
     * @generated from field: api.v1.Token token = 1;
     */
    token?: Token;
};
/**
 * Describes the message api.v1.TokenServiceUpdateResponse.
 * Use `create(TokenServiceUpdateResponseSchema)` to create a new message.
 */
export declare const TokenServiceUpdateResponseSchema: GenMessage<TokenServiceUpdateResponse>;
/**
 * TokenServiceGetRequest is the request payload of a token get request
 *
 * @generated from message api.v1.TokenServiceGetRequest
 */
export type TokenServiceGetRequest = Message<"api.v1.TokenServiceGetRequest"> & {
    /**
     * Uuid of the token to get
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
};
/**
 * Describes the message api.v1.TokenServiceGetRequest.
 * Use `create(TokenServiceGetRequestSchema)` to create a new message.
 */
export declare const TokenServiceGetRequestSchema: GenMessage<TokenServiceGetRequest>;
/**
 * TokenServiceGetResponse is the response payload of a token get request
 *
 * @generated from message api.v1.TokenServiceGetResponse
 */
export type TokenServiceGetResponse = Message<"api.v1.TokenServiceGetResponse"> & {
    /**
     * Token is the token
     *
     * @generated from field: api.v1.Token token = 1;
     */
    token?: Token;
};
/**
 * Describes the message api.v1.TokenServiceGetResponse.
 * Use `create(TokenServiceGetResponseSchema)` to create a new message.
 */
export declare const TokenServiceGetResponseSchema: GenMessage<TokenServiceGetResponse>;
/**
 * TokenType specifies different use cases of tokens
 *
 * @generated from enum api.v1.TokenType
 */
export declare enum TokenType {
    /**
     * TOKEN_TYPE_UNSPECIFIED is not specified
     *
     * @generated from enum value: TOKEN_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * TOKEN_TYPE_API is a token for api usage
     *
     * @generated from enum value: TOKEN_TYPE_API = 1;
     */
    API = 1,
    /**
     * TOKEN_TYPE_CONSOLE is a token for console or web ui usage
     *
     * @generated from enum value: TOKEN_TYPE_CONSOLE = 2;
     */
    CONSOLE = 2
}
/**
 * Describes the enum api.v1.TokenType.
 */
export declare const TokenTypeSchema: GenEnum<TokenType>;
/**
 * TokenService serves token related functions
 *
 * @generated from service api.v1.TokenService
 */
export declare const TokenService: GenService<{
    /**
     * Get a token
     *
     * @generated from rpc api.v1.TokenService.Get
     */
    get: {
        methodKind: "unary";
        input: typeof TokenServiceGetRequestSchema;
        output: typeof TokenServiceGetResponseSchema;
    };
    /**
     * Create a token to authenticate against the platform, the secret will be only visible in the response
     *
     * @generated from rpc api.v1.TokenService.Create
     */
    create: {
        methodKind: "unary";
        input: typeof TokenServiceCreateRequestSchema;
        output: typeof TokenServiceCreateResponseSchema;
    };
    /**
     * Update a token
     *
     * @generated from rpc api.v1.TokenService.Update
     */
    update: {
        methodKind: "unary";
        input: typeof TokenServiceUpdateRequestSchema;
        output: typeof TokenServiceUpdateResponseSchema;
    };
    /**
     * List all your tokens
     *
     * @generated from rpc api.v1.TokenService.List
     */
    list: {
        methodKind: "unary";
        input: typeof TokenServiceListRequestSchema;
        output: typeof TokenServiceListResponseSchema;
    };
    /**
     * Revoke a token, no further usage is possible afterwards
     *
     * @generated from rpc api.v1.TokenService.Revoke
     */
    revoke: {
        methodKind: "unary";
        input: typeof TokenServiceRevokeRequestSchema;
        output: typeof TokenServiceRevokeResponseSchema;
    };
}>;
