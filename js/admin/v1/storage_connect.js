"use strict";
// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file admin/v1/storage.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
const storage_pb_js_1 = require("./storage_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service admin.v1.StorageService
 */
exports.StorageService = {
    typeName: "admin.v1.StorageService",
    methods: {
        /**
         * @generated from rpc admin.v1.StorageService.ClusterInfo
         */
        clusterInfo: {
            name: "ClusterInfo",
            I: storage_pb_js_1.StorageServiceClusterInfoRequest,
            O: storage_pb_js_1.StorageServiceClusterInfoResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc admin.v1.StorageService.ListVolumes
         */
        listVolumes: {
            name: "ListVolumes",
            I: storage_pb_js_1.StorageServiceListVolumesRequest,
            O: storage_pb_js_1.StorageServiceListVolumesResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc admin.v1.StorageService.ListSnapshots
         */
        listSnapshots: {
            name: "ListSnapshots",
            I: storage_pb_js_1.StorageServiceListSnapshotsRequest,
            O: storage_pb_js_1.StorageServiceListSnapshotsResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
