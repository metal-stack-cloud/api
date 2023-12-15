"use strict";
// @generated by protoc-gen-connect-es v1.1.4 with parameter "target=ts"
// @generated from file api/v1/assets.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetService = void 0;
const assets_pb_js_1 = require("./assets_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service api.v1.AssetService
 */
exports.AssetService = {
    typeName: "api.v1.AssetService",
    methods: {
        /**
         * @generated from rpc api.v1.AssetService.List
         */
        list: {
            name: "List",
            I: assets_pb_js_1.AssetServiceListRequest,
            O: assets_pb_js_1.AssetServiceListResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
