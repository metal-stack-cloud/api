import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { OAuthProvider } from "./common_pb.js";
import { Tenant } from "./tenant_pb.js";
import { Project } from "./project_pb.js";
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
     * Tenants the user belongs to
     *
     * @generated from field: repeated api.v1.Tenant tenants = 7;
     */
    tenants: Tenant[];
    /**
     * Projects the user belongs to
     *
     * @generated from field: repeated api.v1.Project projects = 8;
     */
    projects: Project[];
    /**
     * DefaultTenant this user belongs to
     *
     * @generated from field: api.v1.Tenant default_tenant = 9;
     */
    defaultTenant?: Tenant;
    /**
     * DefaultProject this user belongs to
     *
     * @generated from field: api.v1.Project default_project = 10;
     */
    defaultProject?: Project;
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
 * UserServiceGetRequest is the request to get the user
 *
 * @generated from message api.v1.UserServiceGetRequest
 */
export declare class UserServiceGetRequest extends Message<UserServiceGetRequest> {
    constructor(data?: PartialMessage<UserServiceGetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.UserServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserServiceGetRequest;
    static equals(a: UserServiceGetRequest | PlainMessage<UserServiceGetRequest> | undefined, b: UserServiceGetRequest | PlainMessage<UserServiceGetRequest> | undefined): boolean;
}
/**
 * UserServiceGetResponse the response when userservice get request was called
 *
 * @generated from message api.v1.UserServiceGetResponse
 */
export declare class UserServiceGetResponse extends Message<UserServiceGetResponse> {
    /**
     * User is the user
     *
     * @generated from field: api.v1.User user = 1;
     */
    user?: User;
    constructor(data?: PartialMessage<UserServiceGetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.UserServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserServiceGetResponse;
    static equals(a: UserServiceGetResponse | PlainMessage<UserServiceGetResponse> | undefined, b: UserServiceGetResponse | PlainMessage<UserServiceGetResponse> | undefined): boolean;
}
