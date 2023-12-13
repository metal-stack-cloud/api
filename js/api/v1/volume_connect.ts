// @generated by protoc-gen-connect-es v1.1.4 with parameter "target=ts"
// @generated from file api/v1/volume.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SnapshotServiceDeleteRequest, SnapshotServiceDeleteResponse, SnapshotServiceGetRequest, SnapshotServiceGetResponse, SnapshotServiceListRequest, SnapshotServiceListResponse, VolumeServiceDeleteRequest, VolumeServiceDeleteResponse, VolumeServiceGetRequest, VolumeServiceGetResponse, VolumeServiceListRequest, VolumeServiceListResponse } from "./volume_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.VolumeService
 */
export const VolumeService = {
  typeName: "api.v1.VolumeService",
  methods: {
    /**
     * @generated from rpc api.v1.VolumeService.Get
     */
    get: {
      name: "Get",
      I: VolumeServiceGetRequest,
      O: VolumeServiceGetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.VolumeService.List
     */
    list: {
      name: "List",
      I: VolumeServiceListRequest,
      O: VolumeServiceListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.VolumeService.Delete
     */
    delete: {
      name: "Delete",
      I: VolumeServiceDeleteRequest,
      O: VolumeServiceDeleteResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * @generated from service api.v1.SnapshotService
 */
export const SnapshotService = {
  typeName: "api.v1.SnapshotService",
  methods: {
    /**
     * @generated from rpc api.v1.SnapshotService.Get
     */
    get: {
      name: "Get",
      I: SnapshotServiceGetRequest,
      O: SnapshotServiceGetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.SnapshotService.List
     */
    list: {
      name: "List",
      I: SnapshotServiceListRequest,
      O: SnapshotServiceListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.SnapshotService.Delete
     */
    delete: {
      name: "Delete",
      I: SnapshotServiceDeleteRequest,
      O: SnapshotServiceDeleteResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

