// @generated by protoc-gen-connect-web v0.6.0 with parameter "target=ts"
// @generated from file api/v1/health.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { HealthServiceGetRequest, HealthServiceGetResponse } from "./health_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.HealthService
 */
export const HealthService = {
  typeName: "api.v1.HealthService",
  methods: {
    /**
     * @generated from rpc api.v1.HealthService.Get
     */
    get: {
      name: "Get",
      I: HealthServiceGetRequest,
      O: HealthServiceGetResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

