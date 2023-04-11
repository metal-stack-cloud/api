// @generated by protoc-gen-connect-es v0.8.5 with parameter "target=ts"
// @generated from file api/v1/version.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { VersionServiceGetRequest, VersionServiceGetResponse } from "./version_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.VersionService
 */
export const VersionService = {
  typeName: "api.v1.VersionService",
  methods: {
    /**
     * @generated from rpc api.v1.VersionService.Get
     */
    get: {
      name: "Get",
      I: VersionServiceGetRequest,
      O: VersionServiceGetResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

