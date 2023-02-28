// @generated by protoc-gen-connect-web v0.6.0 with parameter "target=ts"
// @generated from file admin/v1/storage.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { StorageServiceClusterInfoRequest, StorageServiceClusterInfoResponse } from "./storage_pb.js";
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
  }
} as const;

