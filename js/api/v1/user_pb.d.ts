import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { OAuthProvider } from "./common_pb";
import type { Project } from "./project_pb";
import type { Tenant } from "./tenant_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file api/v1/user.proto.
 */
export declare const file_api_v1_user: GenFile;
/**
 * User is a end user of the platform
 *
 * @generated from message api.v1.User
 */
export type User = Message<"api.v1.User"> & {
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
     * @generated from field: repeated api.v1.Tenant tenants = 8;
     */
    tenants: Tenant[];
    /**
     * Projects the user belongs to
     *
     * @generated from field: repeated api.v1.Project projects = 9;
     */
    projects: Project[];
    /**
     * DefaultTenant this user belongs to
     *
     * @generated from field: api.v1.Tenant default_tenant = 10;
     */
    defaultTenant?: Tenant;
    /**
     * DefaultProject this user belongs to
     *
     * @generated from field: api.v1.Project default_project = 11;
     */
    defaultProject?: Project;
};
/**
 * Describes the message api.v1.User.
 * Use `create(UserSchema)` to create a new message.
 */
export declare const UserSchema: GenMessage<User>;
/**
 * UserServiceGetRequest is the request to get the user
 *
 * @generated from message api.v1.UserServiceGetRequest
 */
export type UserServiceGetRequest = Message<"api.v1.UserServiceGetRequest"> & {};
/**
 * Describes the message api.v1.UserServiceGetRequest.
 * Use `create(UserServiceGetRequestSchema)` to create a new message.
 */
export declare const UserServiceGetRequestSchema: GenMessage<UserServiceGetRequest>;
/**
 * UserServiceGetResponse the response when userservice get request was called
 *
 * @generated from message api.v1.UserServiceGetResponse
 */
export type UserServiceGetResponse = Message<"api.v1.UserServiceGetResponse"> & {
    /**
     * User is the user
     *
     * @generated from field: api.v1.User user = 1;
     */
    user?: User;
};
/**
 * Describes the message api.v1.UserServiceGetResponse.
 * Use `create(UserServiceGetResponseSchema)` to create a new message.
 */
export declare const UserServiceGetResponseSchema: GenMessage<UserServiceGetResponse>;
/**
 * UserService exposes rpc calls for users
 *
 * @generated from service api.v1.UserService
 */
export declare const UserService: GenService<{
    /**
     * Get a User
     *
     * @generated from rpc api.v1.UserService.Get
     */
    get: {
        methodKind: "unary";
        input: typeof UserServiceGetRequestSchema;
        output: typeof UserServiceGetResponseSchema;
    };
}>;
