"use strict";
// @generated by protoc-gen-connect-web v0.3.2 with parameter "target=ts"
// @generated from file status/v1/status.proto (package status.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusService = void 0;
const status_pb_js_1 = require("./status_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service status.v1.StatusService
 */
exports.StatusService = {
    typeName: "status.v1.StatusService",
    methods: {
        /**
         * @generated from rpc status.v1.StatusService.Get
         */
        get: {
            name: "Get",
            I: status_pb_js_1.StatusServiceGetRequest,
            O: status_pb_js_1.StatusServiceGetResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};