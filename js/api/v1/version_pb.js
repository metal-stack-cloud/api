"use strict";
// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file api/v1/version.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionServiceGetResponse = exports.VersionServiceGetRequest = exports.Version = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * Version of the application
 *
 * @generated from message api.v1.Version
 */
class Version extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Version of the application
         *
         * @generated from field: string version = 1;
         */
        this.version = "";
        /**
         * Revision of the application
         *
         * @generated from field: string revision = 2;
         */
        this.revision = "";
        /**
         * GitSHA1 of the application
         *
         * @generated from field: string git_sha1 = 3;
         */
        this.gitSha1 = "";
        /**
         * BuildDate of the application
         *
         * @generated from field: string build_date = 4;
         */
        this.buildDate = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Version().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Version().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Version().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Version, a, b);
    }
}
exports.Version = Version;
Version.runtime = protobuf_1.proto3;
Version.typeName = "api.v1.Version";
Version.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "revision", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "git_sha1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "build_date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * VersionServiceGetRequest is the request payload to get the version
 *
 * @generated from message api.v1.VersionServiceGetRequest
 */
class VersionServiceGetRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new VersionServiceGetRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new VersionServiceGetRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new VersionServiceGetRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(VersionServiceGetRequest, a, b);
    }
}
exports.VersionServiceGetRequest = VersionServiceGetRequest;
VersionServiceGetRequest.runtime = protobuf_1.proto3;
VersionServiceGetRequest.typeName = "api.v1.VersionServiceGetRequest";
VersionServiceGetRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * VersionServiceGetResponse is the response payload with the version
 *
 * @generated from message api.v1.VersionServiceGetResponse
 */
class VersionServiceGetResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new VersionServiceGetResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new VersionServiceGetResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new VersionServiceGetResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(VersionServiceGetResponse, a, b);
    }
}
exports.VersionServiceGetResponse = VersionServiceGetResponse;
VersionServiceGetResponse.runtime = protobuf_1.proto3;
VersionServiceGetResponse.typeName = "api.v1.VersionServiceGetResponse";
VersionServiceGetResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "message", T: Version },
]);
