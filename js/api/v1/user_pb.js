// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file api/v1/user.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { OAuthProvider } from "./common_pb.js";
import { Tenant } from "./tenant_pb.js";
import { Project } from "./project_pb.js";
/**
 * User is a end user of the platform
 *
 * @generated from message api.v1.User
 */
export class User extends Message {
    constructor(data) {
        super();
        /**
         * Login the login at the provider
         *
         * @generated from field: string login = 1;
         */
        this.login = "";
        /**
         * Name of the user
         *
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * Email of the user
         *
         * @generated from field: string email = 3;
         */
        this.email = "";
        /**
         * AvatarUrl of the user
         *
         * @generated from field: string avatar_url = 5;
         */
        this.avatarUrl = "";
        /**
         * OauthProvider of the user
         *
         * @generated from field: api.v1.OAuthProvider oauth_provider = 6;
         */
        this.oauthProvider = OAuthProvider.UNSPECIFIED;
        /**
         * Tenants the user belongs to
         *
         * @generated from field: repeated api.v1.Tenant tenants = 8;
         */
        this.tenants = [];
        /**
         * Projects the user belongs to
         *
         * @generated from field: repeated api.v1.Project projects = 9;
         */
        this.projects = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new User().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new User().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new User().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(User, a, b);
    }
}
User.runtime = proto3;
User.typeName = "api.v1.User";
User.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "oauth_provider", kind: "enum", T: proto3.getEnumType(OAuthProvider) },
    { no: 8, name: "tenants", kind: "message", T: Tenant, repeated: true },
    { no: 9, name: "projects", kind: "message", T: Project, repeated: true },
    { no: 10, name: "default_tenant", kind: "message", T: Tenant },
    { no: 11, name: "default_project", kind: "message", T: Project },
]);
/**
 * UserServiceGetRequest is the request to get the user
 *
 * @generated from message api.v1.UserServiceGetRequest
 */
export class UserServiceGetRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UserServiceGetRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UserServiceGetRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UserServiceGetRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(UserServiceGetRequest, a, b);
    }
}
UserServiceGetRequest.runtime = proto3;
UserServiceGetRequest.typeName = "api.v1.UserServiceGetRequest";
UserServiceGetRequest.fields = proto3.util.newFieldList(() => []);
/**
 * UserServiceGetResponse the response when userservice get request was called
 *
 * @generated from message api.v1.UserServiceGetResponse
 */
export class UserServiceGetResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UserServiceGetResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UserServiceGetResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UserServiceGetResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(UserServiceGetResponse, a, b);
    }
}
UserServiceGetResponse.runtime = proto3;
UserServiceGetResponse.typeName = "api.v1.UserServiceGetResponse";
UserServiceGetResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
]);
