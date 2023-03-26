// @generated by protoc-gen-connect-es v0.8.3 with parameter "target=ts"
// @generated from file api/v1/ip.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { IPServiceAllocateRequest, IPServiceAllocateResponse, IPServiceDeleteRequest, IPServiceDeleteResponse, IPServiceGetRequest, IPServiceGetResponse, IPServiceListRequest, IPServiceListResponse, IPServiceUpdateRequest, IPServiceUpdateResponse } from "./ip_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.IPService
 */
export const IPService = {
  typeName: "api.v1.IPService",
  methods: {
    /**
     * @generated from rpc api.v1.IPService.Get
     */
    get: {
      name: "Get",
      I: IPServiceGetRequest,
      O: IPServiceGetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.IPService.Allocate
     */
    allocate: {
      name: "Allocate",
      I: IPServiceAllocateRequest,
      O: IPServiceAllocateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.IPService.Update
     */
    update: {
      name: "Update",
      I: IPServiceUpdateRequest,
      O: IPServiceUpdateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.IPService.List
     */
    list: {
      name: "List",
      I: IPServiceListRequest,
      O: IPServiceListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.IPService.Delete
     */
    delete: {
      name: "Delete",
      I: IPServiceDeleteRequest,
      O: IPServiceDeleteResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
