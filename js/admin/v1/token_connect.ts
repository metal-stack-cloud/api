// @generated by protoc-gen-connect-es v1.2.0 with parameter "target=ts"
// @generated from file admin/v1/token.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { TokenServiceListRequest, TokenServiceListResponse, TokenServiceRevokeRequest, TokenServiceRevokeResponse } from "./token_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service admin.v1.TokenService
 */
export const TokenService = {
  typeName: "admin.v1.TokenService",
  methods: {
    /**
     * @generated from rpc admin.v1.TokenService.List
     */
    list: {
      name: "List",
      I: TokenServiceListRequest,
      O: TokenServiceListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc admin.v1.TokenService.Revoke
     */
    revoke: {
      name: "Revoke",
      I: TokenServiceRevokeRequest,
      O: TokenServiceRevokeResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

