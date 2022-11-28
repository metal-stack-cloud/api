"use strict";
// @generated by protoc-gen-es v0.2.1 with parameter "target=ts"
// @generated from file api/v1/user.proto (package api.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = exports.Organization = exports.User = void 0;
var protobuf_1 = require("@bufbuild/protobuf");
var common_pb_js_1 = require("./common_pb.js");
/**
 * User
 *
 * @generated from message api.v1.User
 */
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(data) {
        var _this = _super.call(this) || this;
        /**
         * the login at the provider
         *
         * @generated from field: string login = 1;
         */
        _this.login = "";
        /**
         * @generated from field: string name = 2;
         */
        _this.name = "";
        /**
         * @generated from field: string email = 3;
         */
        _this.email = "";
        /**
         * @generated from field: string avatar_url = 5;
         */
        _this.avatarUrl = "";
        /**
         * @generated from field: api.v1.OAuthProvider oauth_provider = 6;
         */
        _this.oauthProvider = common_pb_js_1.OAuthProvider.UNSPECIFIED;
        /**
         * @generated from field: repeated api.v1.Organization organizations = 7;
         */
        _this.organizations = [];
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    User.fromBinary = function (bytes, options) {
        return new User().fromBinary(bytes, options);
    };
    User.fromJson = function (jsonValue, options) {
        return new User().fromJson(jsonValue, options);
    };
    User.fromJsonString = function (jsonString, options) {
        return new User().fromJsonString(jsonString, options);
    };
    User.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(User, a, b);
    };
    User.runtime = protobuf_1.proto3;
    User.typeName = "api.v1.User";
    User.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 5, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 6, name: "oauth_provider", kind: "enum", T: protobuf_1.proto3.getEnumType(common_pb_js_1.OAuthProvider) },
        { no: 7, name: "organizations", kind: "message", T: Organization, repeated: true },
    ]; });
    return User;
}(protobuf_1.Message));
exports.User = User;
/**
 * @generated from message api.v1.Organization
 */
var Organization = /** @class */ (function (_super) {
    __extends(Organization, _super);
    function Organization(data) {
        var _this = _super.call(this) || this;
        /**
         * @generated from field: string id = 1;
         */
        _this.id = "";
        /**
         * @generated from field: string login = 2;
         */
        _this.login = "";
        /**
         * @generated from field: string name = 3;
         */
        _this.name = "";
        /**
         * @generated from field: string email = 4;
         */
        _this.email = "";
        /**
         * @generated from field: string billing_email = 5;
         */
        _this.billingEmail = "";
        /**
         * @generated from field: string avatar_url = 6;
         */
        _this.avatarUrl = "";
        /**
         * @generated from field: api.v1.Role role = 7;
         */
        _this.role = common_pb_js_1.Role.UNSPECIFIED;
        /**
         * @generated from field: repeated api.v1.Team teams = 8;
         */
        _this.teams = [];
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    Organization.fromBinary = function (bytes, options) {
        return new Organization().fromBinary(bytes, options);
    };
    Organization.fromJson = function (jsonValue, options) {
        return new Organization().fromJson(jsonValue, options);
    };
    Organization.fromJsonString = function (jsonString, options) {
        return new Organization().fromJsonString(jsonString, options);
    };
    Organization.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(Organization, a, b);
    };
    Organization.runtime = protobuf_1.proto3;
    Organization.typeName = "api.v1.Organization";
    Organization.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 4, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 5, name: "billing_email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 6, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 7, name: "role", kind: "enum", T: protobuf_1.proto3.getEnumType(common_pb_js_1.Role) },
        { no: 8, name: "teams", kind: "message", T: Team, repeated: true },
    ]; });
    return Organization;
}(protobuf_1.Message));
exports.Organization = Organization;
/**
 * @generated from message api.v1.Team
 */
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team(data) {
        var _this = _super.call(this) || this;
        /**
         * @generated from field: string id = 1;
         */
        _this.id = "";
        /**
         * @generated from field: string name = 2;
         */
        _this.name = "";
        /**
         * @generated from field: string avatar_url = 3;
         */
        _this.avatarUrl = "";
        /**
         * @generated from field: api.v1.Role role = 4;
         */
        _this.role = common_pb_js_1.Role.UNSPECIFIED;
        /**
         * @generated from field: string project_id = 5;
         */
        _this.projectId = "";
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    Team.fromBinary = function (bytes, options) {
        return new Team().fromBinary(bytes, options);
    };
    Team.fromJson = function (jsonValue, options) {
        return new Team().fromJson(jsonValue, options);
    };
    Team.fromJsonString = function (jsonString, options) {
        return new Team().fromJsonString(jsonString, options);
    };
    Team.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(Team, a, b);
    };
    Team.runtime = protobuf_1.proto3;
    Team.typeName = "api.v1.Team";
    Team.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 3, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 4, name: "role", kind: "enum", T: protobuf_1.proto3.getEnumType(common_pb_js_1.Role) },
        { no: 5, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]; });
    return Team;
}(protobuf_1.Message));
exports.Team = Team;
