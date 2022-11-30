"use strict";
// @generated by protoc-gen-es v0.3.0 with parameter "target=ts"
// @generated from file api/v1/user.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = exports.Organization = exports.User = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const common_pb_js_1 = require("./common_pb.js");
/**
 * User
 *
 * @generated from message api.v1.User
 */
class User extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * the login at the provider
         *
         * @generated from field: string login = 1;
         */
        this.login = "";
        /**
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * @generated from field: string email = 3;
         */
        this.email = "";
        /**
         * @generated from field: string avatar_url = 5;
         */
        this.avatarUrl = "";
        /**
         * @generated from field: api.v1.OAuthProvider oauth_provider = 6;
         */
        this.oauthProvider = common_pb_js_1.OAuthProvider.UNSPECIFIED;
        /**
         * @generated from field: repeated api.v1.Organization organizations = 7;
         */
        this.organizations = [];
        protobuf_1.proto3.util.initPartial(data, this);
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
        return protobuf_1.proto3.util.equals(User, a, b);
    }
}
exports.User = User;
User.runtime = protobuf_1.proto3;
User.typeName = "api.v1.User";
User.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "oauth_provider", kind: "enum", T: protobuf_1.proto3.getEnumType(common_pb_js_1.OAuthProvider) },
    { no: 7, name: "organizations", kind: "message", T: Organization, repeated: true },
]);
/**
 * @generated from message api.v1.Organization
 */
class Organization extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * @generated from field: string login = 2;
         */
        this.login = "";
        /**
         * @generated from field: string name = 3;
         */
        this.name = "";
        /**
         * @generated from field: string email = 4;
         */
        this.email = "";
        /**
         * @generated from field: string billing_email = 5;
         */
        this.billingEmail = "";
        /**
         * @generated from field: string avatar_url = 6;
         */
        this.avatarUrl = "";
        /**
         * @generated from field: api.v1.Role role = 7;
         */
        this.role = common_pb_js_1.Role.UNSPECIFIED;
        /**
         * @generated from field: repeated api.v1.Team teams = 8;
         */
        this.teams = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Organization().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Organization().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Organization().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Organization, a, b);
    }
}
exports.Organization = Organization;
Organization.runtime = protobuf_1.proto3;
Organization.typeName = "api.v1.Organization";
Organization.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "billing_email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "role", kind: "enum", T: protobuf_1.proto3.getEnumType(common_pb_js_1.Role) },
    { no: 8, name: "teams", kind: "message", T: Team, repeated: true },
]);
/**
 * @generated from message api.v1.Team
 */
class Team extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * @generated from field: string avatar_url = 3;
         */
        this.avatarUrl = "";
        /**
         * @generated from field: api.v1.Role role = 4;
         */
        this.role = common_pb_js_1.Role.UNSPECIFIED;
        /**
         * @generated from field: string project_id = 5;
         */
        this.projectId = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Team().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Team().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Team().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Team, a, b);
    }
}
exports.Team = Team;
Team.runtime = protobuf_1.proto3;
Team.typeName = "api.v1.Team";
Team.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "role", kind: "enum", T: protobuf_1.proto3.getEnumType(common_pb_js_1.Role) },
    { no: 5, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
