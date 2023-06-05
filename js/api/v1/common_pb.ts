// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file api/v1/common.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.v1.OAuthProvider
 */
export enum OAuthProvider {
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
  AZURE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(OAuthProvider)
proto3.util.setEnumType(OAuthProvider, "api.v1.OAuthProvider", [
  { no: 0, name: "O_AUTH_PROVIDER_UNSPECIFIED" },
  { no: 1, name: "O_AUTH_PROVIDER_GITHUB" },
  { no: 2, name: "O_AUTH_PROVIDER_AZURE" },
]);

/**
 * @generated from enum api.v1.Role
 */
export enum Role {
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
  OWNER = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(Role)
proto3.util.setEnumType(Role, "api.v1.Role", [
  { no: 0, name: "ROLE_UNSPECIFIED" },
  { no: 1, name: "ROLE_MEMBER" },
  { no: 2, name: "ROLE_MAINTAINER" },
  { no: 3, name: "ROLE_ADMIN" },
  { no: 4, name: "ROLE_OWNER" },
]);

/**
 * @generated from enum api.v1.TenantRole
 */
export enum TenantRole {
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
  VIEWER = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(TenantRole)
proto3.util.setEnumType(TenantRole, "api.v1.TenantRole", [
  { no: 0, name: "TENANT_ROLE_UNSPECIFIED" },
  { no: 1, name: "TENANT_ROLE_OWNER" },
  { no: 2, name: "TENANT_ROLE_EDITOR" },
  { no: 3, name: "TENANT_ROLE_VIEWER" },
]);

/**
 * @generated from enum api.v1.ProjectRole
 */
export enum ProjectRole {
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
  VIEWER = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(ProjectRole)
proto3.util.setEnumType(ProjectRole, "api.v1.ProjectRole", [
  { no: 0, name: "PROJECT_ROLE_UNSPECIFIED" },
  { no: 1, name: "PROJECT_ROLE_OWNER" },
  { no: 2, name: "PROJECT_ROLE_EDITOR" },
  { no: 3, name: "PROJECT_ROLE_VIEWER" },
]);

/**
 * @generated from enum api.v1.AdminRole
 */
export enum AdminRole {
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
  VIEWER = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(AdminRole)
proto3.util.setEnumType(AdminRole, "api.v1.AdminRole", [
  { no: 0, name: "ADMIN_ROLE_UNSPECIFIED" },
  { no: 1, name: "ADMIN_ROLE_EDITOR" },
  { no: 2, name: "ADMIN_ROLE_VIEWER" },
]);

/**
 * @generated from enum api.v1.Visibility
 */
export enum Visibility {
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
  PRIVATE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(Visibility)
proto3.util.setEnumType(Visibility, "api.v1.Visibility", [
  { no: 0, name: "VISIBILITY_UNSPECIFIED" },
  { no: 1, name: "VISIBILITY_PUBLIC" },
  { no: 2, name: "VISIBILITY_PRIVATE" },
]);

/**
 * @generated from enum api.v1.Chargeable
 */
export enum Chargeable {
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
  FALSE = 2,
}
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
export enum Auditing {
  /**
   * @generated from enum value: AUDITING_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: AUDITING_INCLUDED = 1;
   */
  INCLUDED = 1,

  /**
   * @generated from enum value: AUDITING_EXCLUDED = 2;
   */
  EXCLUDED = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(Auditing)
proto3.util.setEnumType(Auditing, "api.v1.Auditing", [
  { no: 0, name: "AUDITING_UNSPECIFIED" },
  { no: 1, name: "AUDITING_INCLUDED" },
  { no: 2, name: "AUDITING_EXCLUDED" },
]);

/**
 * @generated from message api.v1.Paging
 */
export class Paging extends Message<Paging> {
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

  constructor(data?: PartialMessage<Paging>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.Paging";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 2, name: "count", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Paging {
    return new Paging().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Paging {
    return new Paging().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Paging {
    return new Paging().fromJsonString(jsonString, options);
  }

  static equals(a: Paging | PlainMessage<Paging> | undefined, b: Paging | PlainMessage<Paging> | undefined): boolean {
    return proto3.util.equals(Paging, a, b);
  }
}

