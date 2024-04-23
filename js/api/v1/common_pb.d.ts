import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, MethodOptions, proto3 } from "@bufbuild/protobuf";
/**
 * OAuthProvider defines which login providers are supported
 *
 * @generated from enum api.v1.OAuthProvider
 */
export declare enum OAuthProvider {
    /**
     * O_AUTH_PROVIDER_UNSPECIFIED is an unknown login provider
     *
     * @generated from enum value: O_AUTH_PROVIDER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * O_AUTH_PROVIDER_GITHUB specifies github as oauth login provider
     *
     * @generated from enum value: O_AUTH_PROVIDER_GITHUB = 1;
     */
    GITHUB = 1,
    /**
     * O_AUTH_PROVIDER_AZURE specifies azure as oauth login provider
     *
     * @generated from enum value: O_AUTH_PROVIDER_AZURE = 2;
     */
    AZURE = 2,
    /**
     * O_AUTH_PROVIDER_GOOGLE specifies google as oauth login provider
     *
     * @generated from enum value: O_AUTH_PROVIDER_GOOGLE = 3;
     */
    GOOGLE = 3
}
/**
 * TenantRole specifies what role a logged in user needs to call this tenant scoped service
 *
 * @generated from enum api.v1.TenantRole
 */
export declare enum TenantRole {
    /**
     * TENANT_ROLE_UNSPECIFIED is not specified
     *
     * @generated from enum value: TENANT_ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * TENANT_ROLE_OWNER the logged in user needs at least owner role to call this method
     *
     * @generated from enum value: TENANT_ROLE_OWNER = 1;
     */
    OWNER = 1,
    /**
     * TENANT_ROLE_EDITOR the logged in user needs at least editor role to call this method
     *
     * @generated from enum value: TENANT_ROLE_EDITOR = 2;
     */
    EDITOR = 2,
    /**
     * TENANT_ROLE_VIEWER the logged in user needs at least viewer role to call this method
     *
     * @generated from enum value: TENANT_ROLE_VIEWER = 3;
     */
    VIEWER = 3,
    /**
     * TENANT_ROLE_GUEST the logged in user needs at least guest role to call this method
     *
     * @generated from enum value: TENANT_ROLE_GUEST = 4;
     */
    GUEST = 4
}
/**
 * ProjectRole specifies what role a logged in user needs to call this project scoped service
 *
 * @generated from enum api.v1.ProjectRole
 */
export declare enum ProjectRole {
    /**
     * PROJECT_ROLE_UNSPECIFIED is not specified
     *
     * @generated from enum value: PROJECT_ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * PROJECT_ROLE_OWNER the logged in user needs at least owner role to call this method
     *
     * @generated from enum value: PROJECT_ROLE_OWNER = 1;
     */
    OWNER = 1,
    /**
     * PROJECT_ROLE_EDITOR the logged in user needs at least editor role to call this method
     *
     * @generated from enum value: PROJECT_ROLE_EDITOR = 2;
     */
    EDITOR = 2,
    /**
     * PROJECT_ROLE_VIEWER the logged in user needs at least viewer role to call this method
     *
     * @generated from enum value: PROJECT_ROLE_VIEWER = 3;
     */
    VIEWER = 3
}
/**
 * AdminRole specifies what role a logged in user needs to call this admin service
 *
 * @generated from enum api.v1.AdminRole
 */
export declare enum AdminRole {
    /**
     * ADMIN_ROLE_UNSPECIFIED is not specified
     *
     * @generated from enum value: ADMIN_ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * ADMIN_ROLE_EDITOR the logged in user needs at least editor role to call this method
     *
     * @generated from enum value: ADMIN_ROLE_EDITOR = 1;
     */
    EDITOR = 1,
    /**
     * ADMIN_ROLE_VIEWER the logged in user needs at least viewer role to call this method
     *
     * @generated from enum value: ADMIN_ROLE_VIEWER = 2;
     */
    VIEWER = 2
}
/**
 * Visibility of a method
 *
 * @generated from enum api.v1.Visibility
 */
export declare enum Visibility {
    /**
     * VISIBILITY_UNSPECIFIED is not defined
     *
     * @generated from enum value: VISIBILITY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * VISIBILITY_PUBLIC specifies that this service is accessible without authentication
     *
     * @generated from enum value: VISIBILITY_PUBLIC = 1;
     */
    PUBLIC = 1,
    /**
     * VISIBILITY_PRIVATE makes this service blocked
     *
     * @generated from enum value: VISIBILITY_PRIVATE = 2;
     */
    PRIVATE = 2,
    /**
     * VISIBILITY_SELF enable call this endpoint from the authenticated user only
     *
     * @generated from enum value: VISIBILITY_SELF = 3;
     */
    SELF = 3
}
/**
 * Chargable defines if calling a method requires that billing credentials are present or not
 *
 * @generated from enum api.v1.Chargeable
 */
export declare enum Chargeable {
    /**
     * CHARGEABLE_UNSPECIFIED no chargeable option is set
     *
     * @generated from enum value: CHARGEABLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * CHARGEABLE_TRUE if this is set on a method, calling it requires that billing credentials are present
     *
     * @generated from enum value: CHARGEABLE_TRUE = 1;
     */
    TRUE = 1,
    /**
     * CHARGEABLE_FALSE if this is set on a method, no billing credentials are required
     *
     * @generated from enum value: CHARGEABLE_FALSE = 2;
     */
    FALSE = 2
}
/**
 * Auditing option specified per service method
 * by default all service methods are included
 * add the auditing option if you want to exclude a method in auditing
 *
 * @generated from enum api.v1.Auditing
 */
export declare enum Auditing {
    /**
     * AUDITING_UNSPECIFIED is not specified
     *
     * @generated from enum value: AUDITING_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * AUDITING_INCLUDED if a method is annotated with this, all calls are audited
     *
     * @generated from enum value: AUDITING_INCLUDED = 1;
     */
    INCLUDED = 1,
    /**
     * AUDITING_EXCLUDED if a method is annotated with this, no calls are audited
     *
     * @generated from enum value: AUDITING_EXCLUDED = 2;
     */
    EXCLUDED = 2
}
/**
 * Paging defines paging for methods with a lot of results
 *
 * @generated from message api.v1.Paging
 */
export declare class Paging extends Message<Paging> {
    /**
     * Page is used for pagination, if unset only the first page is returned,
     * the list response contains then the page number for the next page.
     *
     * @generated from field: optional uint64 page = 1;
     */
    page?: bigint;
    /**
     * Count is the number of results returned per page, if not given server side defaults apply
     *
     * @generated from field: optional uint64 count = 2;
     */
    count?: bigint;
    constructor(data?: PartialMessage<Paging>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Paging";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Paging;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Paging;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Paging;
    static equals(a: Paging | PlainMessage<Paging> | undefined, b: Paging | PlainMessage<Paging> | undefined): boolean;
}
/**
 * TenantRoles are used to define which tenant role a logged in user must provide to call this method
 *
 * @generated from extension: repeated api.v1.TenantRole tenant_roles = 51000;
 */
export declare const tenant_roles: import("@bufbuild/protobuf").Extension<MethodOptions, TenantRole[]>;
/**
 * ProjectRoles are used to define which project role a logged in user must provide to call this method
 *
 * @generated from extension: repeated api.v1.ProjectRole project_roles = 51001;
 */
export declare const project_roles: import("@bufbuild/protobuf").Extension<MethodOptions, ProjectRole[]>;
/**
 * AdminRoles are used to define which admin role a logged in user must provide to call this method
 *
 * @generated from extension: repeated api.v1.AdminRole admin_roles = 51002;
 */
export declare const admin_roles: import("@bufbuild/protobuf").Extension<MethodOptions, AdminRole[]>;
/**
 * Visibility defines the visibility of this method, this is used to have public, private or self visible methods
 *
 * @generated from extension: api.v1.Visibility visibility = 51003;
 */
export declare const visibility: import("@bufbuild/protobuf").Extension<MethodOptions, Visibility>;
/**
 * Chargeable if this is set on a method, calling it requires that billing credentials are present
 *
 * @generated from extension: api.v1.Chargeable chargeable = 51004;
 */
export declare const chargeable: import("@bufbuild/protobuf").Extension<MethodOptions, Chargeable>;
/**
 * Auditing defines if calls to this method should be audited or not
 *
 * @generated from extension: api.v1.Auditing auditing = 51005;
 */
export declare const auditing: import("@bufbuild/protobuf").Extension<MethodOptions, Auditing>;
