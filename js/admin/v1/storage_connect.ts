// @generated by protoc-gen-connect-es v0.8.3 with parameter "target=ts"
// @generated from file admin/v1/storage.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { StorageServiceClusterInfoRequest, StorageServiceClusterInfoResponse, StorageServiceListSnapshotsRequest, StorageServiceListSnapshotsResponse, StorageServiceListVolumesRequest, StorageServiceListVolumesResponse } from "./storage_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service admin.v1.StorageService
 */
export const StorageService = {
  typeName: "admin.v1.StorageService",
  methods: {
    /**
     * @generated from rpc admin.v1.StorageService.ClusterInfo
     */
    clusterInfo: {
      name: "ClusterInfo",
      I: StorageServiceClusterInfoRequest,
      O: StorageServiceClusterInfoResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc admin.v1.StorageService.ListVolumes
     */
    listVolumes: {
      name: "ListVolumes",
      I: StorageServiceListVolumesRequest,
      O: StorageServiceListVolumesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc admin.v1.StorageService.ListSnapshots
     */
    listSnapshots: {
      name: "ListSnapshots",
      I: StorageServiceListSnapshotsRequest,
      O: StorageServiceListSnapshotsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
