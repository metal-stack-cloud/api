// @generated by protoc-gen-connect-es v1.1.2 with parameter "target=ts"
// @generated from file api/v1/methods.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodServiceListRequest, MethodServiceListResponse } from "./methods_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.MethodService
 */
export const MethodService = {
  typeName: "api.v1.MethodService",
  methods: {
    /**
     * @generated from rpc api.v1.MethodService.List
     */
    list: {
      name: "List",
      I: MethodServiceListRequest,
      O: MethodServiceListResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
