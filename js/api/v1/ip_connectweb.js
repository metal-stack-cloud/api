"use strict";
// @generated by protoc-gen-connect-web v0.6.0 with parameter "target=ts"
// @generated from file api/v1/ip.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPService = void 0;
const ip_pb_js_1 = require("./ip_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service api.v1.IPService
 */
exports.IPService = {
    typeName: "api.v1.IPService",
    methods: {
        /**
         * @generated from rpc api.v1.IPService.Get
         */
        get: {
            name: "Get",
            I: ip_pb_js_1.IPServiceGetRequest,
            O: ip_pb_js_1.IPServiceGetResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.IPService.Allocate
         */
        allocate: {
            name: "Allocate",
            I: ip_pb_js_1.IPServiceAllocateRequest,
            O: ip_pb_js_1.IPServiceAllocateResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.IPService.Static
         */
        static: {
            name: "Static",
            I: ip_pb_js_1.IPServiceStaticRequest,
            O: ip_pb_js_1.IPServiceStaticResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.IPService.List
         */
        list: {
            name: "List",
            I: ip_pb_js_1.IPServiceListRequest,
            O: ip_pb_js_1.IPServiceListResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.IPService.Delete
         */
        delete: {
            name: "Delete",
            I: ip_pb_js_1.IPServiceDeleteRequest,
            O: ip_pb_js_1.IPServiceDeleteResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
