"use strict";
// @generated by protoc-gen-connect-es v0.8.6 with parameter "target=ts"
// @generated from file admin/v1/tenant.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantService = void 0;
const tenant_pb_js_1 = require("./tenant_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service admin.v1.TenantService
 */
exports.TenantService = {
    typeName: "admin.v1.TenantService",
    methods: {
        /**
         * @generated from rpc admin.v1.TenantService.List
         */
        list: {
            name: "List",
            I: tenant_pb_js_1.TenantServiceListRequest,
            O: tenant_pb_js_1.TenantServiceListResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc admin.v1.TenantService.Admit
         */
        admit: {
            name: "Admit",
            I: tenant_pb_js_1.TenantServiceAdmitRequest,
            O: tenant_pb_js_1.TenantServiceAdmitResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc admin.v1.TenantService.Revoke
         */
        revoke: {
            name: "Revoke",
            I: tenant_pb_js_1.TenantServiceRevokeRequest,
            O: tenant_pb_js_1.TenantServiceRevokeResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
