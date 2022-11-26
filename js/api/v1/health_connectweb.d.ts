// @generated by protoc-gen-connect-web v0.3.2
// @generated from file api/v1/health.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { HealthServiceGetRequest, HealthServiceGetResponse } from "./health_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.HealthService
 */
export declare const HealthService: {
  readonly typeName: "api.v1.HealthService",
  readonly methods: {
    /**
     * @generated from rpc api.v1.HealthService.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof HealthServiceGetRequest,
      readonly O: typeof HealthServiceGetResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

