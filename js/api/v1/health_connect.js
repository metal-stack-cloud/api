// @generated by protoc-gen-connect-es v1.2.0 with parameter "target=ts"
// @generated from file api/v1/health.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { HealthServiceGetRequest, HealthServiceGetResponse } from "./health_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * HealthService serves health related functions
 *
 * @generated from service api.v1.HealthService
 */
export const HealthService = {
    typeName: "api.v1.HealthService",
    methods: {
        /**
         * Get the health of the platform
         *
         * @generated from rpc api.v1.HealthService.Get
         */
        get: {
            name: "Get",
            I: HealthServiceGetRequest,
            O: HealthServiceGetResponse,
            kind: MethodKind.Unary,
        },
    }
};
