// @generated by protoc-gen-es v1.2.1 with parameter "target=ts"
// @generated from file api/v1/user.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { OAuthProvider, Role } from "./common_pb.js";

/**
 * User
 *
 * @generated from message api.v1.User
 */
export class User extends Message<User> {
  /**
   * the login at the provider
   *
   * @generated from field: string login = 1;
   */
  login = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string email = 3;
   */
  email = "";

  /**
   * @generated from field: string avatar_url = 5;
   */
  avatarUrl = "";

  /**
   * @generated from field: api.v1.OAuthProvider oauth_provider = 6;
   */
  oauthProvider = OAuthProvider.UNSPECIFIED;

  /**
   * @generated from field: repeated api.v1.Organization organizations = 7;
   */
  organizations: Organization[] = [];

  constructor(data?: PartialMessage<User>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.User";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "oauth_provider", kind: "enum", T: proto3.getEnumType(OAuthProvider) },
    { no: 7, name: "organizations", kind: "message", T: Organization, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User {
    return new User().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User {
    return new User().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User {
    return new User().fromJsonString(jsonString, options);
  }

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean {
    return proto3.util.equals(User, a, b);
  }
}

/**
 * @generated from message api.v1.Organization
 */
export class Organization extends Message<Organization> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string login = 2;
   */
  login = "";

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * @generated from field: string email = 4;
   */
  email = "";

  /**
   * @generated from field: string billing_email = 5;
   */
  billingEmail = "";

  /**
   * @generated from field: string avatar_url = 6;
   */
  avatarUrl = "";

  /**
   * @generated from field: api.v1.Role role = 7;
   */
  role = Role.UNSPECIFIED;

  /**
   * @generated from field: repeated api.v1.Team teams = 8;
   */
  teams: Team[] = [];

  /**
   * @generated from field: optional bool admitted = 9;
   */
  admitted?: boolean;

  constructor(data?: PartialMessage<Organization>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.Organization";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "billing_email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "role", kind: "enum", T: proto3.getEnumType(Role) },
    { no: 8, name: "teams", kind: "message", T: Team, repeated: true },
    { no: 9, name: "admitted", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Organization {
    return new Organization().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Organization {
    return new Organization().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Organization {
    return new Organization().fromJsonString(jsonString, options);
  }

  static equals(a: Organization | PlainMessage<Organization> | undefined, b: Organization | PlainMessage<Organization> | undefined): boolean {
    return proto3.util.equals(Organization, a, b);
  }
}

/**
 * @generated from message api.v1.Team
 */
export class Team extends Message<Team> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string avatar_url = 3;
   */
  avatarUrl = "";

  /**
   * @generated from field: api.v1.Role role = 4;
   */
  role = Role.UNSPECIFIED;

  /**
   * @generated from field: string project_id = 5;
   */
  projectId = "";

  constructor(data?: PartialMessage<Team>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.Team";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "role", kind: "enum", T: proto3.getEnumType(Role) },
    { no: 5, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Team {
    return new Team().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Team {
    return new Team().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Team {
    return new Team().fromJsonString(jsonString, options);
  }

  static equals(a: Team | PlainMessage<Team> | undefined, b: Team | PlainMessage<Team> | undefined): boolean {
    return proto3.util.equals(Team, a, b);
  }
}

