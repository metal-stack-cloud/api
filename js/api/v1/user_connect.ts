// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file api/v1/user.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { UserServiceGetRequest, UserServiceGetResponse } from "./user_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * UserService exposes rpc calls for users
 *
 * @generated from service api.v1.UserService
 */
export const UserService = {
  typeName: "api.v1.UserService",
  methods: {
    /**
     * Get a User
     *
     * @generated from rpc api.v1.UserService.Get
     */
    get: {
      name: "Get",
      I: UserServiceGetRequest,
      O: UserServiceGetResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

