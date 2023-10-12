// @generated by protoc-gen-connect-es v1.1.2 with parameter "target=ts"
// @generated from file admin/v1/tenant.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { TenantServiceAdmitRequest, TenantServiceAdmitResponse, TenantServiceDeleteTestUserRequest, TenantServiceDeleteTestUserResponse, TenantServiceListRequest, TenantServiceListResponse, TenantServiceRevokeRequest, TenantServiceRevokeResponse } from "./tenant_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service admin.v1.TenantService
 */
export const TenantService = {
  typeName: "admin.v1.TenantService",
  methods: {
    /**
     * @generated from rpc admin.v1.TenantService.List
     */
    list: {
      name: "List",
      I: TenantServiceListRequest,
      O: TenantServiceListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc admin.v1.TenantService.Admit
     */
    admit: {
      name: "Admit",
      I: TenantServiceAdmitRequest,
      O: TenantServiceAdmitResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc admin.v1.TenantService.Revoke
     */
    revoke: {
      name: "Revoke",
      I: TenantServiceRevokeRequest,
      O: TenantServiceRevokeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc admin.v1.TenantService.DeleteTestUser
     */
    deleteTestUser: {
      name: "DeleteTestUser",
      I: TenantServiceDeleteTestUserRequest,
      O: TenantServiceDeleteTestUserResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

