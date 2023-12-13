// @generated by protoc-gen-connect-es v1.1.4 with parameter "target=ts"
// @generated from file api/v1/token.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { TokenServiceCreateRequest, TokenServiceCreateResponse, TokenServiceListRequest, TokenServiceListResponse, TokenServiceRevokeRequest, TokenServiceRevokeResponse } from "./token_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.TokenService
 */
export const TokenService = {
  typeName: "api.v1.TokenService",
  methods: {
    /**
     * @generated from rpc api.v1.TokenService.Create
     */
    create: {
      name: "Create",
      I: TokenServiceCreateRequest,
      O: TokenServiceCreateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.TokenService.List
     */
    list: {
      name: "List",
      I: TokenServiceListRequest,
      O: TokenServiceListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.TokenService.Revoke
     */
    revoke: {
      name: "Revoke",
      I: TokenServiceRevokeRequest,
      O: TokenServiceRevokeResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

