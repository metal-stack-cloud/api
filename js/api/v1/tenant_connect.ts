// @generated by protoc-gen-connect-es v0.8.5 with parameter "target=ts"
// @generated from file api/v1/tenant.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { TenantServiceCreateOrUpdateRequest, TenantServiceCreateOrUpdateResponse, TenantServiceCreateRequest, TenantServiceCreateResponse, TenantServiceDeleteRequest, TenantServiceDeleteResponse, TenantServiceGetRequest, TenantServiceGetResponse, TenantServiceUpdateRequest, TenantServiceUpdateResponse } from "./tenant_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.TenantService
 */
export const TenantService = {
  typeName: "api.v1.TenantService",
  methods: {
    /**
     * @generated from rpc api.v1.TenantService.Create
     */
    create: {
      name: "Create",
      I: TenantServiceCreateRequest,
      O: TenantServiceCreateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateOrUpdate should only be used from within the application
     * will check if tenant already exists and updates if necessary, otherwise create a new tenant
     *
     * @generated from rpc api.v1.TenantService.CreateOrUpdate
     */
    createOrUpdate: {
      name: "CreateOrUpdate",
      I: TenantServiceCreateOrUpdateRequest,
      O: TenantServiceCreateOrUpdateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.TenantService.Get
     */
    get: {
      name: "Get",
      I: TenantServiceGetRequest,
      O: TenantServiceGetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.TenantService.Update
     */
    update: {
      name: "Update",
      I: TenantServiceUpdateRequest,
      O: TenantServiceUpdateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.TenantService.Delete
     */
    delete: {
      name: "Delete",
      I: TenantServiceDeleteRequest,
      O: TenantServiceDeleteResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

