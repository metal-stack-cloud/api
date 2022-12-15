"use strict";
// @generated by protoc-gen-connect-web v0.3.3 with parameter "target=ts"
// @generated from file api/v1/health.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthService = void 0;
const health_pb_js_1 = require("./health_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service api.v1.HealthService
 */
exports.HealthService = {
    typeName: "api.v1.HealthService",
    methods: {
        /**
         * @generated from rpc api.v1.HealthService.Get
         */
        get: {
            name: "Get",
            I: health_pb_js_1.HealthServiceGetRequest,
            O: health_pb_js_1.HealthServiceGetResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
