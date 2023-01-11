"use strict";
// @generated by protoc-gen-connect-web v0.6.0 with parameter "target=ts"
// @generated from file api/v1/tenant.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantService = void 0;
const tenant_pb_js_1 = require("./tenant_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service api.v1.TenantService
 */
exports.TenantService = {
    typeName: "api.v1.TenantService",
    methods: {
        /**
         * @generated from rpc api.v1.TenantService.Create
         */
        create: {
            name: "Create",
            I: tenant_pb_js_1.TenantServiceCreateRequest,
            O: tenant_pb_js_1.TenantServiceCreateResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * CreateOrUpdate should only be used from within the application
         * will check if tenant already exists and updates if necessary, otherwise create a new tenant
         *
         * @generated from rpc api.v1.TenantService.CreateOrUpdate
         */
        createOrUpdate: {
            name: "CreateOrUpdate",
            I: tenant_pb_js_1.TenantServiceCreateOrUpdateRequest,
            O: tenant_pb_js_1.TenantServiceCreateOrUpdateResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.TenantService.Get
         */
        get: {
            name: "Get",
            I: tenant_pb_js_1.TenantServiceGetRequest,
            O: tenant_pb_js_1.TenantServiceGetResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.TenantService.Update
         */
        update: {
            name: "Update",
            I: tenant_pb_js_1.TenantServiceUpdateRequest,
            O: tenant_pb_js_1.TenantServiceUpdateResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.TenantService.Delete
         */
        delete: {
            name: "Delete",
            I: tenant_pb_js_1.TenantServiceDeleteRequest,
            O: tenant_pb_js_1.TenantServiceDeleteResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.TenantService.CheckAdmitted
         */
        checkAdmitted: {
            name: "CheckAdmitted",
            I: tenant_pb_js_1.TenantServiceCheckAdmittedRequest,
            O: tenant_pb_js_1.TenantServiceCheckAdmittedResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.TenantService.RequestAdmission
         */
        requestAdmission: {
            name: "RequestAdmission",
            I: tenant_pb_js_1.TenantServiceRequestAdmissionRequest,
            O: tenant_pb_js_1.TenantServiceRequestAdmissionResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
