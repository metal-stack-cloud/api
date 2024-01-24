// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file api/v1/common.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * OAuthProvider defines which login providers are supported
 *
 * @generated from enum api.v1.OAuthProvider
 */
export var OAuthProvider;
(function (OAuthProvider) {
    /**
     * O_AUTH_PROVIDER_UNSPECIFIED is an unknown login provider
     *
     * @generated from enum value: O_AUTH_PROVIDER_UNSPECIFIED = 0;
     */
    OAuthProvider[OAuthProvider["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * O_AUTH_PROVIDER_GITHUB specifies github as oauth login provider
     *
     * @generated from enum value: O_AUTH_PROVIDER_GITHUB = 1;
     */
    OAuthProvider[OAuthProvider["GITHUB"] = 1] = "GITHUB";
    /**
     * O_AUTH_PROVIDER_AZURE specifies azure as oauth login provider
     *
     * @generated from enum value: O_AUTH_PROVIDER_AZURE = 2;
     */
    OAuthProvider[OAuthProvider["AZURE"] = 2] = "AZURE";
    /**
     * O_AUTH_PROVIDER_GOOGLE specifies google as oauth login provider
     *
     * @generated from enum value: O_AUTH_PROVIDER_GOOGLE = 3;
     */
    OAuthProvider[OAuthProvider["GOOGLE"] = 3] = "GOOGLE";
})(OAuthProvider || (OAuthProvider = {}));
// Retrieve enum metadata with: proto3.getEnumType(OAuthProvider)
proto3.util.setEnumType(OAuthProvider, "api.v1.OAuthProvider", [
    { no: 0, name: "O_AUTH_PROVIDER_UNSPECIFIED" },
    { no: 1, name: "O_AUTH_PROVIDER_GITHUB" },
    { no: 2, name: "O_AUTH_PROVIDER_AZURE" },
    { no: 3, name: "O_AUTH_PROVIDER_GOOGLE" },
]);
/**
 * Role defines which role the logged in user got from the login provider
 *
 * @generated from enum api.v1.Role
 */
export var Role;
(function (Role) {
    /**
     * ROLE_UNSPECIFIED is not specified
     *
     * @generated from enum value: ROLE_UNSPECIFIED = 0;
     */
    Role[Role["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * ROLE_MEMBER the user has member role in the scope
     *
     * @generated from enum value: ROLE_MEMBER = 1;
     */
    Role[Role["MEMBER"] = 1] = "MEMBER";
    /**
     * ROLE_MAINTAINER the user has maintainer role in the scope
     *
     * @generated from enum value: ROLE_MAINTAINER = 2;
     */
    Role[Role["MAINTAINER"] = 2] = "MAINTAINER";
    /**
     * ROLE_ADMIN the user has admin role in the scope
     *
     * @generated from enum value: ROLE_ADMIN = 3;
     */
    Role[Role["ADMIN"] = 3] = "ADMIN";
    /**
     * ROLE_OWNER the user has owner role in the scope
     *
     * @generated from enum value: ROLE_OWNER = 4;
     */
    Role[Role["OWNER"] = 4] = "OWNER";
})(Role || (Role = {}));
// Retrieve enum metadata with: proto3.getEnumType(Role)
proto3.util.setEnumType(Role, "api.v1.Role", [
    { no: 0, name: "ROLE_UNSPECIFIED" },
    { no: 1, name: "ROLE_MEMBER" },
    { no: 2, name: "ROLE_MAINTAINER" },
    { no: 3, name: "ROLE_ADMIN" },
    { no: 4, name: "ROLE_OWNER" },
]);
/**
 * TenantRole specifies what role a logged in user needs to call this tenant scoped service
 *
 * @generated from enum api.v1.TenantRole
 */
export var TenantRole;
(function (TenantRole) {
    /**
     * TENANT_ROLE_UNSPECIFIED is not specified
     *
     * @generated from enum value: TENANT_ROLE_UNSPECIFIED = 0;
     */
    TenantRole[TenantRole["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * TENANT_ROLE_OWNER the logged in user needs at least owner role to call this method
     *
     * @generated from enum value: TENANT_ROLE_OWNER = 1;
     */
    TenantRole[TenantRole["OWNER"] = 1] = "OWNER";
    /**
     * TENANT_ROLE_EDITOR the logged in user needs at least editor role to call this method
     *
     * @generated from enum value: TENANT_ROLE_EDITOR = 2;
     */
    TenantRole[TenantRole["EDITOR"] = 2] = "EDITOR";
    /**
     * TENANT_ROLE_VIEWER the logged in user needs at least viewer role to call this method
     *
     * @generated from enum value: TENANT_ROLE_VIEWER = 3;
     */
    TenantRole[TenantRole["VIEWER"] = 3] = "VIEWER";
})(TenantRole || (TenantRole = {}));
// Retrieve enum metadata with: proto3.getEnumType(TenantRole)
proto3.util.setEnumType(TenantRole, "api.v1.TenantRole", [
    { no: 0, name: "TENANT_ROLE_UNSPECIFIED" },
    { no: 1, name: "TENANT_ROLE_OWNER" },
    { no: 2, name: "TENANT_ROLE_EDITOR" },
    { no: 3, name: "TENANT_ROLE_VIEWER" },
]);
/**
 * ProjectRole specifies what role a logged in user needs to call this project scoped service
 *
 * @generated from enum api.v1.ProjectRole
 */
export var ProjectRole;
(function (ProjectRole) {
    /**
     * PROJECT_ROLE_UNSPECIFIED is not specified
     *
     * @generated from enum value: PROJECT_ROLE_UNSPECIFIED = 0;
     */
    ProjectRole[ProjectRole["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * PROJECT_ROLE_OWNER the logged in user needs at least owner role to call this method
     *
     * @generated from enum value: PROJECT_ROLE_OWNER = 1;
     */
    ProjectRole[ProjectRole["OWNER"] = 1] = "OWNER";
    /**
     * PROJECT_ROLE_EDITOR the logged in user needs at least editor role to call this method
     *
     * @generated from enum value: PROJECT_ROLE_EDITOR = 2;
     */
    ProjectRole[ProjectRole["EDITOR"] = 2] = "EDITOR";
    /**
     * PROJECT_ROLE_VIEWER the logged in user needs at least viewer role to call this method
     *
     * @generated from enum value: PROJECT_ROLE_VIEWER = 3;
     */
    ProjectRole[ProjectRole["VIEWER"] = 3] = "VIEWER";
})(ProjectRole || (ProjectRole = {}));
// Retrieve enum metadata with: proto3.getEnumType(ProjectRole)
proto3.util.setEnumType(ProjectRole, "api.v1.ProjectRole", [
    { no: 0, name: "PROJECT_ROLE_UNSPECIFIED" },
    { no: 1, name: "PROJECT_ROLE_OWNER" },
    { no: 2, name: "PROJECT_ROLE_EDITOR" },
    { no: 3, name: "PROJECT_ROLE_VIEWER" },
]);
/**
 * AdminRole specifies what role a logged in user needs to call this admin service
 *
 * @generated from enum api.v1.AdminRole
 */
export var AdminRole;
(function (AdminRole) {
    /**
     * ADMIN_ROLE_UNSPECIFIED is not specified
     *
     * @generated from enum value: ADMIN_ROLE_UNSPECIFIED = 0;
     */
    AdminRole[AdminRole["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * ADMIN_ROLE_EDITOR the logged in user needs at least editor role to call this method
     *
     * @generated from enum value: ADMIN_ROLE_EDITOR = 1;
     */
    AdminRole[AdminRole["EDITOR"] = 1] = "EDITOR";
    /**
     * ADMIN_ROLE_VIEWER the logged in user needs at least viewer role to call this method
     *
     * @generated from enum value: ADMIN_ROLE_VIEWER = 2;
     */
    AdminRole[AdminRole["VIEWER"] = 2] = "VIEWER";
})(AdminRole || (AdminRole = {}));
// Retrieve enum metadata with: proto3.getEnumType(AdminRole)
proto3.util.setEnumType(AdminRole, "api.v1.AdminRole", [
    { no: 0, name: "ADMIN_ROLE_UNSPECIFIED" },
    { no: 1, name: "ADMIN_ROLE_EDITOR" },
    { no: 2, name: "ADMIN_ROLE_VIEWER" },
]);
/**
 * Visibility of a method
 *
 * @generated from enum api.v1.Visibility
 */
export var Visibility;
(function (Visibility) {
    /**
     * VISIBILITY_UNSPECIFIED is not defined
     *
     * @generated from enum value: VISIBILITY_UNSPECIFIED = 0;
     */
    Visibility[Visibility["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * VISIBILITY_PUBLIC specifies that this service is accessible without authentication
     *
     * @generated from enum value: VISIBILITY_PUBLIC = 1;
     */
    Visibility[Visibility["PUBLIC"] = 1] = "PUBLIC";
    /**
     * VISIBILITY_PRIVATE makes this service blocked
     *
     * @generated from enum value: VISIBILITY_PRIVATE = 2;
     */
    Visibility[Visibility["PRIVATE"] = 2] = "PRIVATE";
    /**
     * VISIBILITY_SELF enable call this endpoint from the authenticated user only
     *
     * @generated from enum value: VISIBILITY_SELF = 3;
     */
    Visibility[Visibility["SELF"] = 3] = "SELF";
})(Visibility || (Visibility = {}));
// Retrieve enum metadata with: proto3.getEnumType(Visibility)
proto3.util.setEnumType(Visibility, "api.v1.Visibility", [
    { no: 0, name: "VISIBILITY_UNSPECIFIED" },
    { no: 1, name: "VISIBILITY_PUBLIC" },
    { no: 2, name: "VISIBILITY_PRIVATE" },
    { no: 3, name: "VISIBILITY_SELF" },
]);
/**
 * Chargable defines if calling a method requires that billing credentials are present or not
 *
 * @generated from enum api.v1.Chargeable
 */
export var Chargeable;
(function (Chargeable) {
    /**
     * CHARGEABLE_UNSPECIFIED no chargeable option is set
     *
     * @generated from enum value: CHARGEABLE_UNSPECIFIED = 0;
     */
    Chargeable[Chargeable["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * CHARGEABLE_TRUE if this is set on a method, calling it requires that billing credentials are present
     *
     * @generated from enum value: CHARGEABLE_TRUE = 1;
     */
    Chargeable[Chargeable["TRUE"] = 1] = "TRUE";
    /**
     * CHARGEABLE_FALSE if this is set on a method, no billing credentials are required
     *
     * @generated from enum value: CHARGEABLE_FALSE = 2;
     */
    Chargeable[Chargeable["FALSE"] = 2] = "FALSE";
})(Chargeable || (Chargeable = {}));
// Retrieve enum metadata with: proto3.getEnumType(Chargeable)
proto3.util.setEnumType(Chargeable, "api.v1.Chargeable", [
    { no: 0, name: "CHARGEABLE_UNSPECIFIED" },
    { no: 1, name: "CHARGEABLE_TRUE" },
    { no: 2, name: "CHARGEABLE_FALSE" },
]);
/**
 * Auditing option specified per service method
 * by default all service methods are included
 * add the auditing option if you want to exclude a method in auditing
 *
 * @generated from enum api.v1.Auditing
 */
export var Auditing;
(function (Auditing) {
    /**
     * AUDITING_UNSPECIFIED is not specified
     *
     * @generated from enum value: AUDITING_UNSPECIFIED = 0;
     */
    Auditing[Auditing["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * AUDITING_INCLUDED if a method is annotated with this, all calls are audited
     *
     * @generated from enum value: AUDITING_INCLUDED = 1;
     */
    Auditing[Auditing["INCLUDED"] = 1] = "INCLUDED";
    /**
     * AUDITING_EXCLUDED if a method is annotated with this, no calls are audited
     *
     * @generated from enum value: AUDITING_EXCLUDED = 2;
     */
    Auditing[Auditing["EXCLUDED"] = 2] = "EXCLUDED";
})(Auditing || (Auditing = {}));
// Retrieve enum metadata with: proto3.getEnumType(Auditing)
proto3.util.setEnumType(Auditing, "api.v1.Auditing", [
    { no: 0, name: "AUDITING_UNSPECIFIED" },
    { no: 1, name: "AUDITING_INCLUDED" },
    { no: 2, name: "AUDITING_EXCLUDED" },
]);
/**
 * Paging defines paging for methods with a lot of results
 *
 * @generated from message api.v1.Paging
 */
export class Paging extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Paging().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Paging().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Paging().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Paging, a, b);
    }
}
Paging.runtime = proto3;
Paging.typeName = "api.v1.Paging";
Paging.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "page", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 2, name: "count", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
]);
