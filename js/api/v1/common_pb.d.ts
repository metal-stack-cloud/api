import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
/**
 * @generated from enum api.v1.OAuthProvider
 */
export declare enum OAuthProvider {
    /**
     * @generated from enum value: O_AUTH_PROVIDER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: O_AUTH_PROVIDER_GITHUB = 1;
     */
    GITHUB = 1,
    /**
     * @generated from enum value: O_AUTH_PROVIDER_AZURE = 2;
     */
    AZURE = 2
}
/**
 * @generated from enum api.v1.Role
 */
export declare enum Role {
    /**
     * @generated from enum value: ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: ROLE_MEMBER = 1;
     */
    MEMBER = 1,
    /**
     * @generated from enum value: ROLE_MAINTAINER = 2;
     */
    MAINTAINER = 2,
    /**
     * @generated from enum value: ROLE_ADMIN = 3;
     */
    ADMIN = 3,
    /**
     * @generated from enum value: ROLE_OWNER = 4;
     */
    OWNER = 4
}
/**
 * @generated from enum api.v1.TenantRole
 */
export declare enum TenantRole {
    /**
     * @generated from enum value: TENANT_ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: TENANT_ROLE_OWNER = 1;
     */
    OWNER = 1,
    /**
     * @generated from enum value: TENANT_ROLE_EDITOR = 2;
     */
    EDITOR = 2,
    /**
     * @generated from enum value: TENANT_ROLE_VIEWER = 3;
     */
    VIEWER = 3
}
/**
 * @generated from enum api.v1.ProjectRole
 */
export declare enum ProjectRole {
    /**
     * @generated from enum value: PROJECT_ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PROJECT_ROLE_OWNER = 1;
     */
    OWNER = 1,
    /**
     * @generated from enum value: PROJECT_ROLE_EDITOR = 2;
     */
    EDITOR = 2,
    /**
     * @generated from enum value: PROJECT_ROLE_VIEWER = 3;
     */
    VIEWER = 3
}
/**
 * @generated from enum api.v1.AdminRole
 */
export declare enum AdminRole {
    /**
     * @generated from enum value: ADMIN_ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: ADMIN_ROLE_EDITOR = 1;
     */
    EDITOR = 1,
    /**
     * @generated from enum value: ADMIN_ROLE_VIEWER = 2;
     */
    VIEWER = 2
}
/**
 * @generated from enum api.v1.Visibility
 */
export declare enum Visibility {
    /**
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
    PRIVATE = 2
}
/**
 * @generated from enum api.v1.Chargeable
 */
export declare enum Chargeable {
    /**
     * @generated from enum value: CHARGEABLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CHARGEABLE_TRUE = 1;
     */
    TRUE = 1,
    /**
     * @generated from enum value: CHARGEABLE_FALSE = 2;
     */
    FALSE = 2
}
/**
 * @generated from message api.v1.Paging
 */
export declare class Paging extends Message<Paging> {
    /**
     * page is used for pagination, if unset only the first page is returned,
     * the list response contains then the page number for the next page.
     *
     * @generated from field: optional uint64 page = 1;
     */
    page?: bigint;
    /**
     * count is the number of results returned per page, if not given server side defaults apply
     *
     * @generated from field: optional uint64 count = 2;
     */
    count?: bigint;
    constructor(data?: PartialMessage<Paging>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.Paging";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Paging;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Paging;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Paging;
    static equals(a: Paging | PlainMessage<Paging> | undefined, b: Paging | PlainMessage<Paging> | undefined): boolean;
}
