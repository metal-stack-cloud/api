// @generated by protoc-gen-connect-es v0.9.1 with parameter "target=ts"
// @generated from file api/v1/assets.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AssetServiceListRequest, AssetServiceListResponse } from "./assets_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.AssetService
 */
export const AssetService = {
  typeName: "api.v1.AssetService",
  methods: {
    /**
     * @generated from rpc api.v1.AssetService.List
     */
    list: {
      name: "List",
      I: AssetServiceListRequest,
      O: AssetServiceListResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

