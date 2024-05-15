import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { MethodPermission } from "./token_pb.js";
import { AdminRole, ProjectRole, TenantRole } from "./common_pb.js";
/**
 * MethodServiceListRequest is the request payload to list all public methods
 *
 * @generated from message api.v1.MethodServiceListRequest
 */
export declare class MethodServiceListRequest extends Message<MethodServiceListRequest> {
    constructor(data?: PartialMessage<MethodServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MethodServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodServiceListRequest;
    static equals(a: MethodServiceListRequest | PlainMessage<MethodServiceListRequest> | undefined, b: MethodServiceListRequest | PlainMessage<MethodServiceListRequest> | undefined): boolean;
}
/**
 * MethodServiceListResponse is the response payload with all public visible methods
 *
 * @generated from message api.v1.MethodServiceListResponse
 */
export declare class MethodServiceListResponse extends Message<MethodServiceListResponse> {
    /**
     * Methods is a list of methods public callable
     *
     * @generated from field: repeated string methods = 1;
     */
    methods: string[];
    constructor(data?: PartialMessage<MethodServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MethodServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodServiceListResponse;
    static equals(a: MethodServiceListResponse | PlainMessage<MethodServiceListResponse> | undefined, b: MethodServiceListResponse | PlainMessage<MethodServiceListResponse> | undefined): boolean;
}
/**
 * MethodServiceTokenScopedListRequest is the request payload to list all methods callable with the token present in the request
 *
 * @generated from message api.v1.MethodServiceTokenScopedListRequest
 */
export declare class MethodServiceTokenScopedListRequest extends Message<MethodServiceTokenScopedListRequest> {
    constructor(data?: PartialMessage<MethodServiceTokenScopedListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MethodServiceTokenScopedListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodServiceTokenScopedListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodServiceTokenScopedListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodServiceTokenScopedListRequest;
    static equals(a: MethodServiceTokenScopedListRequest | PlainMessage<MethodServiceTokenScopedListRequest> | undefined, b: MethodServiceTokenScopedListRequest | PlainMessage<MethodServiceTokenScopedListRequest> | undefined): boolean;
}
/**
 * MethodServiceTokenScopedListResponse is the response payload which contains all methods which are callable with the given token
 *
 * @generated from message api.v1.MethodServiceTokenScopedListResponse
 */
export declare class MethodServiceTokenScopedListResponse extends Message<MethodServiceTokenScopedListResponse> {
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
    constructor(data?: PartialMessage<MethodServiceTokenScopedListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MethodServiceTokenScopedListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodServiceTokenScopedListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodServiceTokenScopedListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodServiceTokenScopedListResponse;
    static equals(a: MethodServiceTokenScopedListResponse | PlainMessage<MethodServiceTokenScopedListResponse> | undefined, b: MethodServiceTokenScopedListResponse | PlainMessage<MethodServiceTokenScopedListResponse> | undefined): boolean;
}
