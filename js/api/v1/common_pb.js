"use strict";
// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file api/v1/common.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paging = exports.Auditing = exports.Chargeable = exports.Visibility = exports.AdminRole = exports.ProjectRole = exports.TenantRole = exports.Role = exports.OAuthProvider = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from enum api.v1.OAuthProvider
 */
var OAuthProvider;
(function (OAuthProvider) {
    /**
     * @generated from enum value: O_AUTH_PROVIDER_UNSPECIFIED = 0;
     */
    OAuthProvider[OAuthProvider["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: O_AUTH_PROVIDER_GITHUB = 1;
     */
    OAuthProvider[OAuthProvider["GITHUB"] = 1] = "GITHUB";
    /**
     * @generated from enum value: O_AUTH_PROVIDER_AZURE = 2;
     */
    OAuthProvider[OAuthProvider["AZURE"] = 2] = "AZURE";
})(OAuthProvider = exports.OAuthProvider || (exports.OAuthProvider = {}));
// Retrieve enum metadata with: proto3.getEnumType(OAuthProvider)
protobuf_1.proto3.util.setEnumType(OAuthProvider, "api.v1.OAuthProvider", [
    { no: 0, name: "O_AUTH_PROVIDER_UNSPECIFIED" },
    { no: 1, name: "O_AUTH_PROVIDER_GITHUB" },
    { no: 2, name: "O_AUTH_PROVIDER_AZURE" },
]);
/**
 * @generated from enum api.v1.Role
 */
var Role;
(function (Role) {
    /**
     * @generated from enum value: ROLE_UNSPECIFIED = 0;
     */
    Role[Role["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: ROLE_MEMBER = 1;
     */
    Role[Role["MEMBER"] = 1] = "MEMBER";
    /**
     * @generated from enum value: ROLE_MAINTAINER = 2;
     */
    Role[Role["MAINTAINER"] = 2] = "MAINTAINER";
    /**
     * @generated from enum value: ROLE_ADMIN = 3;
     */
    Role[Role["ADMIN"] = 3] = "ADMIN";
    /**
     * @generated from enum value: ROLE_OWNER = 4;
     */
    Role[Role["OWNER"] = 4] = "OWNER";
})(Role = exports.Role || (exports.Role = {}));
// Retrieve enum metadata with: proto3.getEnumType(Role)
protobuf_1.proto3.util.setEnumType(Role, "api.v1.Role", [
    { no: 0, name: "ROLE_UNSPECIFIED" },
    { no: 1, name: "ROLE_MEMBER" },
    { no: 2, name: "ROLE_MAINTAINER" },
    { no: 3, name: "ROLE_ADMIN" },
    { no: 4, name: "ROLE_OWNER" },
]);
/**
 * @generated from enum api.v1.TenantRole
 */
var TenantRole;
(function (TenantRole) {
    /**
     * @generated from enum value: TENANT_ROLE_UNSPECIFIED = 0;
     */
    TenantRole[TenantRole["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: TENANT_ROLE_OWNER = 1;
     */
    TenantRole[TenantRole["OWNER"] = 1] = "OWNER";
    /**
     * @generated from enum value: TENANT_ROLE_EDITOR = 2;
     */
    TenantRole[TenantRole["EDITOR"] = 2] = "EDITOR";
    /**
     * @generated from enum value: TENANT_ROLE_VIEWER = 3;
     */
    TenantRole[TenantRole["VIEWER"] = 3] = "VIEWER";
})(TenantRole = exports.TenantRole || (exports.TenantRole = {}));
// Retrieve enum metadata with: proto3.getEnumType(TenantRole)
protobuf_1.proto3.util.setEnumType(TenantRole, "api.v1.TenantRole", [
    { no: 0, name: "TENANT_ROLE_UNSPECIFIED" },
    { no: 1, name: "TENANT_ROLE_OWNER" },
    { no: 2, name: "TENANT_ROLE_EDITOR" },
    { no: 3, name: "TENANT_ROLE_VIEWER" },
]);
/**
 * @generated from enum api.v1.ProjectRole
 */
var ProjectRole;
(function (ProjectRole) {
    /**
     * @generated from enum value: PROJECT_ROLE_UNSPECIFIED = 0;
     */
    ProjectRole[ProjectRole["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: PROJECT_ROLE_OWNER = 1;
     */
    ProjectRole[ProjectRole["OWNER"] = 1] = "OWNER";
    /**
     * @generated from enum value: PROJECT_ROLE_EDITOR = 2;
     */
    ProjectRole[ProjectRole["EDITOR"] = 2] = "EDITOR";
    /**
     * @generated from enum value: PROJECT_ROLE_VIEWER = 3;
     */
    ProjectRole[ProjectRole["VIEWER"] = 3] = "VIEWER";
})(ProjectRole = exports.ProjectRole || (exports.ProjectRole = {}));
// Retrieve enum metadata with: proto3.getEnumType(ProjectRole)
protobuf_1.proto3.util.setEnumType(ProjectRole, "api.v1.ProjectRole", [
    { no: 0, name: "PROJECT_ROLE_UNSPECIFIED" },
    { no: 1, name: "PROJECT_ROLE_OWNER" },
    { no: 2, name: "PROJECT_ROLE_EDITOR" },
    { no: 3, name: "PROJECT_ROLE_VIEWER" },
]);
/**
 * @generated from enum api.v1.AdminRole
 */
var AdminRole;
(function (AdminRole) {
    /**
     * @generated from enum value: ADMIN_ROLE_UNSPECIFIED = 0;
     */
    AdminRole[AdminRole["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: ADMIN_ROLE_EDITOR = 1;
     */
    AdminRole[AdminRole["EDITOR"] = 1] = "EDITOR";
    /**
     * @generated from enum value: ADMIN_ROLE_VIEWER = 2;
     */
    AdminRole[AdminRole["VIEWER"] = 2] = "VIEWER";
})(AdminRole = exports.AdminRole || (exports.AdminRole = {}));
// Retrieve enum metadata with: proto3.getEnumType(AdminRole)
protobuf_1.proto3.util.setEnumType(AdminRole, "api.v1.AdminRole", [
    { no: 0, name: "ADMIN_ROLE_UNSPECIFIED" },
    { no: 1, name: "ADMIN_ROLE_EDITOR" },
    { no: 2, name: "ADMIN_ROLE_VIEWER" },
]);
/**
 * @generated from enum api.v1.Visibility
 */
var Visibility;
(function (Visibility) {
    /**
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
})(Visibility = exports.Visibility || (exports.Visibility = {}));
// Retrieve enum metadata with: proto3.getEnumType(Visibility)
protobuf_1.proto3.util.setEnumType(Visibility, "api.v1.Visibility", [
    { no: 0, name: "VISIBILITY_UNSPECIFIED" },
    { no: 1, name: "VISIBILITY_PUBLIC" },
    { no: 2, name: "VISIBILITY_PRIVATE" },
]);
/**
 * @generated from enum api.v1.Chargeable
 */
var Chargeable;
(function (Chargeable) {
    /**
     * @generated from enum value: CHARGEABLE_UNSPECIFIED = 0;
     */
    Chargeable[Chargeable["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: CHARGEABLE_TRUE = 1;
     */
    Chargeable[Chargeable["TRUE"] = 1] = "TRUE";
    /**
     * @generated from enum value: CHARGEABLE_FALSE = 2;
     */
    Chargeable[Chargeable["FALSE"] = 2] = "FALSE";
})(Chargeable = exports.Chargeable || (exports.Chargeable = {}));
// Retrieve enum metadata with: proto3.getEnumType(Chargeable)
protobuf_1.proto3.util.setEnumType(Chargeable, "api.v1.Chargeable", [
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
var Auditing;
(function (Auditing) {
    /**
     * @generated from enum value: AUDITING_UNSPECIFIED = 0;
     */
    Auditing[Auditing["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: AUDITING_INCLUDED = 1;
     */
    Auditing[Auditing["INCLUDED"] = 1] = "INCLUDED";
    /**
     * @generated from enum value: AUDITING_EXCLUDED = 2;
     */
    Auditing[Auditing["EXCLUDED"] = 2] = "EXCLUDED";
})(Auditing = exports.Auditing || (exports.Auditing = {}));
// Retrieve enum metadata with: proto3.getEnumType(Auditing)
protobuf_1.proto3.util.setEnumType(Auditing, "api.v1.Auditing", [
    { no: 0, name: "AUDITING_UNSPECIFIED" },
    { no: 1, name: "AUDITING_INCLUDED" },
    { no: 2, name: "AUDITING_EXCLUDED" },
]);
/**
 * @generated from message api.v1.Paging
 */
class Paging extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
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
        return protobuf_1.proto3.util.equals(Paging, a, b);
    }
}
Paging.runtime = protobuf_1.proto3;
Paging.typeName = "api.v1.Paging";
Paging.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "page", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 2, name: "count", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
]);
exports.Paging = Paging;
