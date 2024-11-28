// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file api/v1/token.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { TokenServiceCreateRequest, TokenServiceCreateResponse, TokenServiceGetRequest, TokenServiceGetResponse, TokenServiceListRequest, TokenServiceListResponse, TokenServiceRevokeRequest, TokenServiceRevokeResponse, TokenServiceUpdateRequest, TokenServiceUpdateResponse } from "./token_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * TokenService serves token related functions
 *
 * @generated from service api.v1.TokenService
 */
export const TokenService = {
  typeName: "api.v1.TokenService",
  methods: {
    /**
     * Get a token
     *
     * @generated from rpc api.v1.TokenService.Get
     */
    get: {
      name: "Get",
      I: TokenServiceGetRequest,
      O: TokenServiceGetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Create a token to authenticate against the platform, the secret will be only visible in the response
     *
     * @generated from rpc api.v1.TokenService.Create
     */
    create: {
      name: "Create",
      I: TokenServiceCreateRequest,
      O: TokenServiceCreateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update a token
     *
     * @generated from rpc api.v1.TokenService.Update
     */
    update: {
      name: "Update",
      I: TokenServiceUpdateRequest,
      O: TokenServiceUpdateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * List all your tokens
     *
     * @generated from rpc api.v1.TokenService.List
     */
    list: {
      name: "List",
      I: TokenServiceListRequest,
      O: TokenServiceListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Revoke a token, no further usage is possible afterwards
     *
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

