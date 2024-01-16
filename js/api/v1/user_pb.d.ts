import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { OAuthProvider, Role } from "./common_pb.js";
/**
 * User is a end user of the platform
 *
 * @generated from message api.v1.User
 */
export declare class User extends Message<User> {
    /**
     * Login the login at the provider
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Name of the user
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Email of the user
     *
     * @generated from field: string email = 3;
     */
    email: string;
    /**
     * AvatarUrl of the user
     *
     * @generated from field: string avatar_url = 5;
     */
    avatarUrl: string;
    /**
     * OauthProvider of the user
     *
     * @generated from field: api.v1.OAuthProvider oauth_provider = 6;
     */
    oauthProvider: OAuthProvider;
    /**
     * Organisations the user belongs to
     *
     * @generated from field: repeated api.v1.Organization organizations = 7;
     */
    organizations: Organization[];
    constructor(data?: PartialMessage<User>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.User";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User;
    static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean;
}
/**
 * Organization which is a customer of the platform
 * can be a company or some other form of business
 *
 * @generated from message api.v1.Organization
 */
export declare class Organization extends Message<Organization> {
    /**
     * Id of this organization
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Login of this organization
     *
     * @generated from field: string login = 2;
     */
    login: string;
    /**
     * Name of this organization
     *
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * Email of this organization
     *
     * @generated from field: string email = 4;
     */
    email: string;
    /**
     * BillingEmail of this organization
     *
     * @generated from field: string billing_email = 5;
     */
    billingEmail: string;
    /**
     * AvatarUrl of this organization
     *
     * @generated from field: string avatar_url = 6;
     */
    avatarUrl: string;
    /**
     * Role of this organization
     *
     * @generated from field: api.v1.Role role = 7;
     */
    role: Role;
    /**
     * Teams which belong to this organization
     *
     * @generated from field: repeated api.v1.Team teams = 8;
     */
    teams: Team[];
    /**
     * Admitted if set to true, this organization is allowed to use the platform
     *
     * @generated from field: optional bool admitted = 9;
     */
    admitted?: boolean;
    constructor(data?: PartialMessage<Organization>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Organization";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Organization;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Organization;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Organization;
    static equals(a: Organization | PlainMessage<Organization> | undefined, b: Organization | PlainMessage<Organization> | undefined): boolean;
}
/**
 * Team is a sub structure of users in a organizations
 *
 * @generated from message api.v1.Team
 */
export declare class Team extends Message<Team> {
    /**
     * Id of this team
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Name of this team
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * AvatarUrl of this team
     *
     * @generated from field: string avatar_url = 3;
     */
    avatarUrl: string;
    /**
     * Role of this team
     *
     * @generated from field: api.v1.Role role = 4;
     */
    role: Role;
    /**
     * ProjectId of this team
     * a project is created in the backend for every team
     *
     * @generated from field: string project_id = 5;
     */
    projectId: string;
    constructor(data?: PartialMessage<Team>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Team";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Team;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Team;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Team;
    static equals(a: Team | PlainMessage<Team> | undefined, b: Team | PlainMessage<Team> | undefined): boolean;
}
