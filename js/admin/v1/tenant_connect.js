// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file admin/v1/tenant.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { TenantServiceAddMemberRequest, TenantServiceAddMemberResponse, TenantServiceAdmitRequest, TenantServiceAdmitResponse, TenantServiceListRequest, TenantServiceListResponse, TenantServiceRemoveMemberRequest, TenantServiceRemoveMemberResponse, TenantServiceRemoveTenantRequest, TenantServiceRemoveTenantResponse, TenantServiceRevokeRequest, TenantServiceRevokeResponse } from "./tenant_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * TenantService serves tenant related functions
 *
 * @generated from service admin.v1.TenantService
 */
export const TenantService = {
    typeName: "admin.v1.TenantService",
    methods: {
        /**
         * List tenants
         *
         * @generated from rpc admin.v1.TenantService.List
         */
        list: {
            name: "List",
            I: TenantServiceListRequest,
            O: TenantServiceListResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Admit a tenant
         *
         * @generated from rpc admin.v1.TenantService.Admit
         */
        admit: {
            name: "Admit",
            I: TenantServiceAdmitRequest,
            O: TenantServiceAdmitResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Revoke a tenant
         *
         * @generated from rpc admin.v1.TenantService.Revoke
         */
        revoke: {
            name: "Revoke",
            I: TenantServiceRevokeRequest,
            O: TenantServiceRevokeResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Add a member to a tenant
         *
         * @generated from rpc admin.v1.TenantService.AddMember
         */
        addMember: {
            name: "AddMember",
            I: TenantServiceAddMemberRequest,
            O: TenantServiceAddMemberResponse,
            kind: MethodKind.Unary,
        },
        /**
         * remove a member from a tenant
         *
         * @generated from rpc admin.v1.TenantService.RemoveMember
         */
        removeMember: {
            name: "RemoveMember",
            I: TenantServiceRemoveMemberRequest,
            O: TenantServiceRemoveMemberResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Remove a tenant
         *
         * @generated from rpc admin.v1.TenantService.RemoveTenant
         */
        removeTenant: {
            name: "RemoveTenant",
            I: TenantServiceRemoveTenantRequest,
            O: TenantServiceRemoveTenantResponse,
            kind: MethodKind.Unary,
        },
    }
};
