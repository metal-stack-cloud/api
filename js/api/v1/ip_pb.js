"use strict";
// @generated by protoc-gen-es v0.2.1 with parameter "target=ts"
// @generated from file api/v1/ip.proto (package api.v1, syntax proto3)
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
exports.IPServiceDeleteResponse = exports.IPServiceListResponse = exports.IPServiceStaticResponse = exports.IPServiceAllocateResponse = exports.IPServiceGetResponse = exports.IPServiceDeleteRequest = exports.IPServiceListRequest = exports.IPServiceStaticRequest = exports.IPServiceAllocateRequest = exports.IPServiceGetRequest = exports.IP = void 0;
var protobuf_1 = require("@bufbuild/protobuf");
/**
 * Types
 *
 * @generated from message api.v1.IP
 */
var IP = /** @class */ (function (_super) {
    __extends(IP, _super);
    function IP(data) {
        var _this = _super.call(this) || this;
        /**
         * @generated from field: string uuid = 1;
         */
        _this.uuid = "";
        /**
         * @generated from field: string ip = 2;
         */
        _this.ip = "";
        /**
         * @generated from field: string name = 3;
         */
        _this.name = "";
        /**
         * @generated from field: string description = 4;
         */
        _this.description = "";
        /**
         * @generated from field: string network = 5;
         */
        _this.network = "";
        /**
         * @generated from field: string project = 6;
         */
        _this.project = "";
        /**
         * @generated from field: string type = 7;
         */
        _this.type = "";
        /**
         * @generated from field: repeated string tags = 8;
         */
        _this.tags = [];
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    IP.fromBinary = function (bytes, options) {
        return new IP().fromBinary(bytes, options);
    };
    IP.fromJson = function (jsonValue, options) {
        return new IP().fromJson(jsonValue, options);
    };
    IP.fromJsonString = function (jsonString, options) {
        return new IP().fromJsonString(jsonString, options);
    };
    IP.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(IP, a, b);
    };
    IP.runtime = protobuf_1.proto3;
    IP.typeName = "api.v1.IP";
    IP.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "ip", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 5, name: "network", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 6, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 7, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 8, name: "tags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
        { no: 10, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
        { no: 11, name: "updated_at", kind: "message", T: protobuf_1.Timestamp },
        { no: 12, name: "deleted_at", kind: "message", T: protobuf_1.Timestamp },
    ]; });
    return IP;
}(protobuf_1.Message));
exports.IP = IP;
/**
 * Requests
 *
 * @generated from message api.v1.IPServiceGetRequest
 */
var IPServiceGetRequest = /** @class */ (function (_super) {
    __extends(IPServiceGetRequest, _super);
    function IPServiceGetRequest(data) {
        var _this = _super.call(this) || this;
        /**
         * @generated from field: string uuid = 1;
         */
        _this.uuid = "";
        /**
         * @generated from field: string project = 2;
         */
        _this.project = "";
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    IPServiceGetRequest.fromBinary = function (bytes, options) {
        return new IPServiceGetRequest().fromBinary(bytes, options);
    };
    IPServiceGetRequest.fromJson = function (jsonValue, options) {
        return new IPServiceGetRequest().fromJson(jsonValue, options);
    };
    IPServiceGetRequest.fromJsonString = function (jsonString, options) {
        return new IPServiceGetRequest().fromJsonString(jsonString, options);
    };
    IPServiceGetRequest.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(IPServiceGetRequest, a, b);
    };
    IPServiceGetRequest.runtime = protobuf_1.proto3;
    IPServiceGetRequest.typeName = "api.v1.IPServiceGetRequest";
    IPServiceGetRequest.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]; });
    return IPServiceGetRequest;
}(protobuf_1.Message));
exports.IPServiceGetRequest = IPServiceGetRequest;
/**
 * @generated from message api.v1.IPServiceAllocateRequest
 */
var IPServiceAllocateRequest = /** @class */ (function (_super) {
    __extends(IPServiceAllocateRequest, _super);
    function IPServiceAllocateRequest(data) {
        var _this = _super.call(this) || this;
        /**
         * @generated from field: string project = 2;
         */
        _this.project = "";
        /**
         * @generated from field: string name = 3;
         */
        _this.name = "";
        /**
         * @generated from field: string description = 4;
         */
        _this.description = "";
        /**
         * @generated from field: string network = 5;
         */
        _this.network = "";
        /**
         * @generated from field: repeated string tags = 8;
         */
        _this.tags = [];
        /**
         * @generated from field: bool static = 9;
         */
        _this.static = false;
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    IPServiceAllocateRequest.fromBinary = function (bytes, options) {
        return new IPServiceAllocateRequest().fromBinary(bytes, options);
    };
    IPServiceAllocateRequest.fromJson = function (jsonValue, options) {
        return new IPServiceAllocateRequest().fromJson(jsonValue, options);
    };
    IPServiceAllocateRequest.fromJsonString = function (jsonString, options) {
        return new IPServiceAllocateRequest().fromJsonString(jsonString, options);
    };
    IPServiceAllocateRequest.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(IPServiceAllocateRequest, a, b);
    };
    IPServiceAllocateRequest.runtime = protobuf_1.proto3;
    IPServiceAllocateRequest.typeName = "api.v1.IPServiceAllocateRequest";
    IPServiceAllocateRequest.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 5, name: "network", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 8, name: "tags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
        { no: 9, name: "static", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    ]; });
    return IPServiceAllocateRequest;
}(protobuf_1.Message));
exports.IPServiceAllocateRequest = IPServiceAllocateRequest;
/**
 * @generated from message api.v1.IPServiceStaticRequest
 */
var IPServiceStaticRequest = /** @class */ (function (_super) {
    __extends(IPServiceStaticRequest, _super);
    function IPServiceStaticRequest(data) {
        var _this = _super.call(this) || this;
        /**
         * @generated from field: string uuid = 1;
         */
        _this.uuid = "";
        /**
         * @generated from field: string project = 2;
         */
        _this.project = "";
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    IPServiceStaticRequest.fromBinary = function (bytes, options) {
        return new IPServiceStaticRequest().fromBinary(bytes, options);
    };
    IPServiceStaticRequest.fromJson = function (jsonValue, options) {
        return new IPServiceStaticRequest().fromJson(jsonValue, options);
    };
    IPServiceStaticRequest.fromJsonString = function (jsonString, options) {
        return new IPServiceStaticRequest().fromJsonString(jsonString, options);
    };
    IPServiceStaticRequest.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(IPServiceStaticRequest, a, b);
    };
    IPServiceStaticRequest.runtime = protobuf_1.proto3;
    IPServiceStaticRequest.typeName = "api.v1.IPServiceStaticRequest";
    IPServiceStaticRequest.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]; });
    return IPServiceStaticRequest;
}(protobuf_1.Message));
exports.IPServiceStaticRequest = IPServiceStaticRequest;
/**
 * @generated from message api.v1.IPServiceListRequest
 */
var IPServiceListRequest = /** @class */ (function (_super) {
    __extends(IPServiceListRequest, _super);
    function IPServiceListRequest(data) {
        var _this = _super.call(this) || this;
        /**
         * @generated from field: string project = 2;
         */
        _this.project = "";
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    IPServiceListRequest.fromBinary = function (bytes, options) {
        return new IPServiceListRequest().fromBinary(bytes, options);
    };
    IPServiceListRequest.fromJson = function (jsonValue, options) {
        return new IPServiceListRequest().fromJson(jsonValue, options);
    };
    IPServiceListRequest.fromJsonString = function (jsonString, options) {
        return new IPServiceListRequest().fromJsonString(jsonString, options);
    };
    IPServiceListRequest.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(IPServiceListRequest, a, b);
    };
    IPServiceListRequest.runtime = protobuf_1.proto3;
    IPServiceListRequest.typeName = "api.v1.IPServiceListRequest";
    IPServiceListRequest.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]; });
    return IPServiceListRequest;
}(protobuf_1.Message));
exports.IPServiceListRequest = IPServiceListRequest;
/**
 * @generated from message api.v1.IPServiceDeleteRequest
 */
var IPServiceDeleteRequest = /** @class */ (function (_super) {
    __extends(IPServiceDeleteRequest, _super);
    function IPServiceDeleteRequest(data) {
        var _this = _super.call(this) || this;
        /**
         * @generated from field: string uuid = 1;
         */
        _this.uuid = "";
        /**
         * @generated from field: string project = 2;
         */
        _this.project = "";
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    IPServiceDeleteRequest.fromBinary = function (bytes, options) {
        return new IPServiceDeleteRequest().fromBinary(bytes, options);
    };
    IPServiceDeleteRequest.fromJson = function (jsonValue, options) {
        return new IPServiceDeleteRequest().fromJson(jsonValue, options);
    };
    IPServiceDeleteRequest.fromJsonString = function (jsonString, options) {
        return new IPServiceDeleteRequest().fromJsonString(jsonString, options);
    };
    IPServiceDeleteRequest.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(IPServiceDeleteRequest, a, b);
    };
    IPServiceDeleteRequest.runtime = protobuf_1.proto3;
    IPServiceDeleteRequest.typeName = "api.v1.IPServiceDeleteRequest";
    IPServiceDeleteRequest.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]; });
    return IPServiceDeleteRequest;
}(protobuf_1.Message));
exports.IPServiceDeleteRequest = IPServiceDeleteRequest;
/**
 * Responses
 *
 * @generated from message api.v1.IPServiceGetResponse
 */
var IPServiceGetResponse = /** @class */ (function (_super) {
    __extends(IPServiceGetResponse, _super);
    function IPServiceGetResponse(data) {
        var _this = _super.call(this) || this;
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    IPServiceGetResponse.fromBinary = function (bytes, options) {
        return new IPServiceGetResponse().fromBinary(bytes, options);
    };
    IPServiceGetResponse.fromJson = function (jsonValue, options) {
        return new IPServiceGetResponse().fromJson(jsonValue, options);
    };
    IPServiceGetResponse.fromJsonString = function (jsonString, options) {
        return new IPServiceGetResponse().fromJsonString(jsonString, options);
    };
    IPServiceGetResponse.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(IPServiceGetResponse, a, b);
    };
    IPServiceGetResponse.runtime = protobuf_1.proto3;
    IPServiceGetResponse.typeName = "api.v1.IPServiceGetResponse";
    IPServiceGetResponse.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "ip", kind: "message", T: IP },
    ]; });
    return IPServiceGetResponse;
}(protobuf_1.Message));
exports.IPServiceGetResponse = IPServiceGetResponse;
/**
 * @generated from message api.v1.IPServiceAllocateResponse
 */
var IPServiceAllocateResponse = /** @class */ (function (_super) {
    __extends(IPServiceAllocateResponse, _super);
    function IPServiceAllocateResponse(data) {
        var _this = _super.call(this) || this;
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    IPServiceAllocateResponse.fromBinary = function (bytes, options) {
        return new IPServiceAllocateResponse().fromBinary(bytes, options);
    };
    IPServiceAllocateResponse.fromJson = function (jsonValue, options) {
        return new IPServiceAllocateResponse().fromJson(jsonValue, options);
    };
    IPServiceAllocateResponse.fromJsonString = function (jsonString, options) {
        return new IPServiceAllocateResponse().fromJsonString(jsonString, options);
    };
    IPServiceAllocateResponse.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(IPServiceAllocateResponse, a, b);
    };
    IPServiceAllocateResponse.runtime = protobuf_1.proto3;
    IPServiceAllocateResponse.typeName = "api.v1.IPServiceAllocateResponse";
    IPServiceAllocateResponse.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "ip", kind: "message", T: IP },
    ]; });
    return IPServiceAllocateResponse;
}(protobuf_1.Message));
exports.IPServiceAllocateResponse = IPServiceAllocateResponse;
/**
 * @generated from message api.v1.IPServiceStaticResponse
 */
var IPServiceStaticResponse = /** @class */ (function (_super) {
    __extends(IPServiceStaticResponse, _super);
    function IPServiceStaticResponse(data) {
        var _this = _super.call(this) || this;
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    IPServiceStaticResponse.fromBinary = function (bytes, options) {
        return new IPServiceStaticResponse().fromBinary(bytes, options);
    };
    IPServiceStaticResponse.fromJson = function (jsonValue, options) {
        return new IPServiceStaticResponse().fromJson(jsonValue, options);
    };
    IPServiceStaticResponse.fromJsonString = function (jsonString, options) {
        return new IPServiceStaticResponse().fromJsonString(jsonString, options);
    };
    IPServiceStaticResponse.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(IPServiceStaticResponse, a, b);
    };
    IPServiceStaticResponse.runtime = protobuf_1.proto3;
    IPServiceStaticResponse.typeName = "api.v1.IPServiceStaticResponse";
    IPServiceStaticResponse.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "ip", kind: "message", T: IP },
    ]; });
    return IPServiceStaticResponse;
}(protobuf_1.Message));
exports.IPServiceStaticResponse = IPServiceStaticResponse;
/**
 * @generated from message api.v1.IPServiceListResponse
 */
var IPServiceListResponse = /** @class */ (function (_super) {
    __extends(IPServiceListResponse, _super);
    function IPServiceListResponse(data) {
        var _this = _super.call(this) || this;
        /**
         * @generated from field: repeated api.v1.IP ips = 1;
         */
        _this.ips = [];
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    IPServiceListResponse.fromBinary = function (bytes, options) {
        return new IPServiceListResponse().fromBinary(bytes, options);
    };
    IPServiceListResponse.fromJson = function (jsonValue, options) {
        return new IPServiceListResponse().fromJson(jsonValue, options);
    };
    IPServiceListResponse.fromJsonString = function (jsonString, options) {
        return new IPServiceListResponse().fromJsonString(jsonString, options);
    };
    IPServiceListResponse.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(IPServiceListResponse, a, b);
    };
    IPServiceListResponse.runtime = protobuf_1.proto3;
    IPServiceListResponse.typeName = "api.v1.IPServiceListResponse";
    IPServiceListResponse.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "ips", kind: "message", T: IP, repeated: true },
    ]; });
    return IPServiceListResponse;
}(protobuf_1.Message));
exports.IPServiceListResponse = IPServiceListResponse;
/**
 * @generated from message api.v1.IPServiceDeleteResponse
 */
var IPServiceDeleteResponse = /** @class */ (function (_super) {
    __extends(IPServiceDeleteResponse, _super);
    function IPServiceDeleteResponse(data) {
        var _this = _super.call(this) || this;
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    IPServiceDeleteResponse.fromBinary = function (bytes, options) {
        return new IPServiceDeleteResponse().fromBinary(bytes, options);
    };
    IPServiceDeleteResponse.fromJson = function (jsonValue, options) {
        return new IPServiceDeleteResponse().fromJson(jsonValue, options);
    };
    IPServiceDeleteResponse.fromJsonString = function (jsonString, options) {
        return new IPServiceDeleteResponse().fromJsonString(jsonString, options);
    };
    IPServiceDeleteResponse.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(IPServiceDeleteResponse, a, b);
    };
    IPServiceDeleteResponse.runtime = protobuf_1.proto3;
    IPServiceDeleteResponse.typeName = "api.v1.IPServiceDeleteResponse";
    IPServiceDeleteResponse.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "ip", kind: "message", T: IP },
    ]; });
    return IPServiceDeleteResponse;
}(protobuf_1.Message));
exports.IPServiceDeleteResponse = IPServiceDeleteResponse;
