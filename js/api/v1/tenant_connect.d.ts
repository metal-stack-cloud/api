import { TenantServiceCreateOrUpdateRequest, TenantServiceCreateOrUpdateResponse, TenantServiceCreateRequest, TenantServiceCreateResponse, TenantServiceDeleteRequest, TenantServiceDeleteResponse, TenantServiceGetRequest, TenantServiceGetResponse, TenantServiceInviteAcceptRequest, TenantServiceInviteAcceptResponse, TenantServiceInviteDeleteRequest, TenantServiceInviteDeleteResponse, TenantServiceInviteGetRequest, TenantServiceInviteGetResponse, TenantServiceInviteRequest, TenantServiceInviteResponse, TenantServiceInvitesListRequest, TenantServiceInvitesListResponse, TenantServiceListRequest, TenantServiceListResponse, TenantServiceRemoveMemberRequest, TenantServiceRemoveMemberResponse, TenantServiceUpdateMemberRequest, TenantServiceUpdateMemberResponse, TenantServiceUpdateRequest, TenantServiceUpdateResponse } from "./tenant_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * TenantService serves tenant related functions
 *
 * @generated from service api.v1.TenantService
 */
export declare const TenantService: {
    readonly typeName: "api.v1.TenantService";
    readonly methods: {
        /**
         * Create a tenant
         *
         * @generated from rpc api.v1.TenantService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof TenantServiceCreateRequest;
            readonly O: typeof TenantServiceCreateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CreateOrUpdate should only be used from within the application
         * will check if tenant already exists and updates if necessary, otherwise create a new tenant
         *
         * @generated from rpc api.v1.TenantService.CreateOrUpdate
         */
        readonly createOrUpdate: {
            readonly name: "CreateOrUpdate";
            readonly I: typeof TenantServiceCreateOrUpdateRequest;
            readonly O: typeof TenantServiceCreateOrUpdateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * List tenants
         *
         * @generated from rpc api.v1.TenantService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof TenantServiceListRequest;
            readonly O: typeof TenantServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get a tenant
         *
         * @generated from rpc api.v1.TenantService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof TenantServiceGetRequest;
            readonly O: typeof TenantServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a tenant
         *
         * @generated from rpc api.v1.TenantService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof TenantServiceUpdateRequest;
            readonly O: typeof TenantServiceUpdateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a tenant
         *
         * @generated from rpc api.v1.TenantService.Delete
         */
        readonly delete: {
            readonly name: "Delete";
            readonly I: typeof TenantServiceDeleteRequest;
            readonly O: typeof TenantServiceDeleteResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * RemoveMember remove a member of a tenant
         *
         * @generated from rpc api.v1.TenantService.RemoveMember
         */
        readonly removeMember: {
            readonly name: "RemoveMember";
            readonly I: typeof TenantServiceRemoveMemberRequest;
            readonly O: typeof TenantServiceRemoveMemberResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * UpdateMember update a member of a tenant
         *
         * @generated from rpc api.v1.TenantService.UpdateMember
         */
        readonly updateMember: {
            readonly name: "UpdateMember";
            readonly I: typeof TenantServiceUpdateMemberRequest;
            readonly O: typeof TenantServiceUpdateMemberResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Invite a user to a tenant
         *
         * @generated from rpc api.v1.TenantService.Invite
         */
        readonly invite: {
            readonly name: "Invite";
            readonly I: typeof TenantServiceInviteRequest;
            readonly O: typeof TenantServiceInviteResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * InviteAccept is called from a user to accept an invitation
         *
         * @generated from rpc api.v1.TenantService.InviteAccept
         */
        readonly inviteAccept: {
            readonly name: "InviteAccept";
            readonly I: typeof TenantServiceInviteAcceptRequest;
            readonly O: typeof TenantServiceInviteAcceptResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * InviteDelete deletes a pending invitation
         *
         * @generated from rpc api.v1.TenantService.InviteDelete
         */
        readonly inviteDelete: {
            readonly name: "InviteDelete";
            readonly I: typeof TenantServiceInviteDeleteRequest;
            readonly O: typeof TenantServiceInviteDeleteResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * InvitesList list all invites to a tenant
         *
         * @generated from rpc api.v1.TenantService.InvitesList
         */
        readonly invitesList: {
            readonly name: "InvitesList";
            readonly I: typeof TenantServiceInvitesListRequest;
            readonly O: typeof TenantServiceInvitesListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * InviteGet get an invite
         *
         * @generated from rpc api.v1.TenantService.InviteGet
         */
        readonly inviteGet: {
            readonly name: "InviteGet";
            readonly I: typeof TenantServiceInviteGetRequest;
            readonly O: typeof TenantServiceInviteGetResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
