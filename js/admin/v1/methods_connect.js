"use strict";
// @generated by protoc-gen-connect-es v1.1.2 with parameter "target=ts"
// @generated from file admin/v1/methods.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodService = void 0;
const methods_pb_js_1 = require("./methods_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service admin.v1.MethodService
 */
exports.MethodService = {
    typeName: "admin.v1.MethodService",
    methods: {
        /**
         * @generated from rpc admin.v1.MethodService.List
         */
        list: {
            name: "List",
            I: methods_pb_js_1.MethodServiceListRequest,
            O: methods_pb_js_1.MethodServiceListResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
