import { TenantServiceAddMemberRequest, TenantServiceAddMemberResponse, TenantServiceAdmitRequest, TenantServiceAdmitResponse, TenantServiceListRequest, TenantServiceListResponse, TenantServiceRemoveMemberRequest, TenantServiceRemoveMemberResponse, TenantServiceRemoveTenantRequest, TenantServiceRemoveTenantResponse, TenantServiceRevokeRequest, TenantServiceRevokeResponse } from "./tenant_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * TenantService serves tenant related functions
 *
 * @generated from service admin.v1.TenantService
 */
export declare const TenantService: {
    readonly typeName: "admin.v1.TenantService";
    readonly methods: {
        /**
         * List tenants
         *
         * @generated from rpc admin.v1.TenantService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof TenantServiceListRequest;
            readonly O: typeof TenantServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Admit a tenant
         *
         * @generated from rpc admin.v1.TenantService.Admit
         */
        readonly admit: {
            readonly name: "Admit";
            readonly I: typeof TenantServiceAdmitRequest;
            readonly O: typeof TenantServiceAdmitResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Revoke a tenant
         *
         * @generated from rpc admin.v1.TenantService.Revoke
         */
        readonly revoke: {
            readonly name: "Revoke";
            readonly I: typeof TenantServiceRevokeRequest;
            readonly O: typeof TenantServiceRevokeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a member to a tenant
         *
         * @generated from rpc admin.v1.TenantService.AddMember
         */
        readonly addMember: {
            readonly name: "AddMember";
            readonly I: typeof TenantServiceAddMemberRequest;
            readonly O: typeof TenantServiceAddMemberResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * remove a member from a tenant
         *
         * @generated from rpc admin.v1.TenantService.RemoveMember
         */
        readonly removeMember: {
            readonly name: "RemoveMember";
            readonly I: typeof TenantServiceRemoveMemberRequest;
            readonly O: typeof TenantServiceRemoveMemberResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Remove a tenant
         *
         * @generated from rpc admin.v1.TenantService.RemoveTenant
         */
        readonly removeTenant: {
            readonly name: "RemoveTenant";
            readonly I: typeof TenantServiceRemoveTenantRequest;
            readonly O: typeof TenantServiceRemoveTenantResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
