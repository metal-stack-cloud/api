// @generated by protoc-gen-connect-es v1.3.0 with parameter "target=ts"
// @generated from file api/v1/assets.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { AssetServiceListRequest, AssetServiceListResponse } from "./assets_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * AssetService serves asset related functions
 *
 * @generated from service api.v1.AssetService
 */
export const AssetService = {
    typeName: "api.v1.AssetService",
    methods: {
        /**
         * List available assets
         *
         * @generated from rpc api.v1.AssetService.List
         */
        list: {
            name: "List",
            I: AssetServiceListRequest,
            O: AssetServiceListResponse,
            kind: MethodKind.Unary,
        },
    }
};
