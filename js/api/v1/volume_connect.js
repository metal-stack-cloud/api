"use strict";
// @generated by protoc-gen-connect-es v0.8.3 with parameter "target=ts"
// @generated from file api/v1/volume.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotService = exports.VolumeService = void 0;
const volume_pb_js_1 = require("./volume_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service api.v1.VolumeService
 */
exports.VolumeService = {
    typeName: "api.v1.VolumeService",
    methods: {
        /**
         * @generated from rpc api.v1.VolumeService.Get
         */
        get: {
            name: "Get",
            I: volume_pb_js_1.VolumeServiceGetRequest,
            O: volume_pb_js_1.VolumeServiceGetResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.VolumeService.List
         */
        list: {
            name: "List",
            I: volume_pb_js_1.VolumeServiceListRequest,
            O: volume_pb_js_1.VolumeServiceListResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.VolumeService.Delete
         */
        delete: {
            name: "Delete",
            I: volume_pb_js_1.VolumeServiceDeleteRequest,
            O: volume_pb_js_1.VolumeServiceDeleteResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
/**
 * @generated from service api.v1.SnapshotService
 */
exports.SnapshotService = {
    typeName: "api.v1.SnapshotService",
    methods: {
        /**
         * @generated from rpc api.v1.SnapshotService.Get
         */
        get: {
            name: "Get",
            I: volume_pb_js_1.SnapshotServiceGetRequest,
            O: volume_pb_js_1.SnapshotServiceGetResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.SnapshotService.List
         */
        list: {
            name: "List",
            I: volume_pb_js_1.SnapshotServiceListRequest,
            O: volume_pb_js_1.SnapshotServiceListResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.SnapshotService.Delete
         */
        delete: {
            name: "Delete",
            I: volume_pb_js_1.SnapshotServiceDeleteRequest,
            O: volume_pb_js_1.SnapshotServiceDeleteResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
