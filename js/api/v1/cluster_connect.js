"use strict";
// @generated by protoc-gen-connect-es v1.1.4 with parameter "target=ts"
// @generated from file api/v1/cluster.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterService = void 0;
const cluster_pb_js_1 = require("./cluster_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service api.v1.ClusterService
 */
exports.ClusterService = {
    typeName: "api.v1.ClusterService",
    methods: {
        /**
         * @generated from rpc api.v1.ClusterService.Create
         */
        create: {
            name: "Create",
            I: cluster_pb_js_1.ClusterServiceCreateRequest,
            O: cluster_pb_js_1.ClusterServiceCreateResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.ClusterService.Get
         */
        get: {
            name: "Get",
            I: cluster_pb_js_1.ClusterServiceGetRequest,
            O: cluster_pb_js_1.ClusterServiceGetResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.ClusterService.List
         */
        list: {
            name: "List",
            I: cluster_pb_js_1.ClusterServiceListRequest,
            O: cluster_pb_js_1.ClusterServiceListResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.ClusterService.WatchStatus
         */
        watchStatus: {
            name: "WatchStatus",
            I: cluster_pb_js_1.ClusterServiceWatchStatusRequest,
            O: cluster_pb_js_1.ClusterServiceWatchStatusResponse,
            kind: protobuf_1.MethodKind.ServerStreaming,
        },
        /**
         * @generated from rpc api.v1.ClusterService.Delete
         */
        delete: {
            name: "Delete",
            I: cluster_pb_js_1.ClusterServiceDeleteRequest,
            O: cluster_pb_js_1.ClusterServiceDeleteResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.ClusterService.Update
         */
        update: {
            name: "Update",
            I: cluster_pb_js_1.ClusterServiceUpdateRequest,
            O: cluster_pb_js_1.ClusterServiceUpdateResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.ClusterService.GetCredentials
         */
        getCredentials: {
            name: "GetCredentials",
            I: cluster_pb_js_1.ClusterServiceGetCredentialsRequest,
            O: cluster_pb_js_1.ClusterServiceGetCredentialsResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
