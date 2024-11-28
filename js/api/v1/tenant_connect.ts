// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file api/v1/tenant.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { TenantServiceCreateOrUpdateRequest, TenantServiceCreateOrUpdateResponse, TenantServiceCreateRequest, TenantServiceCreateResponse, TenantServiceDeleteRequest, TenantServiceDeleteResponse, TenantServiceGetRequest, TenantServiceGetResponse, TenantServiceInviteAcceptRequest, TenantServiceInviteAcceptResponse, TenantServiceInviteDeleteRequest, TenantServiceInviteDeleteResponse, TenantServiceInviteGetRequest, TenantServiceInviteGetResponse, TenantServiceInviteRequest, TenantServiceInviteResponse, TenantServiceInvitesListRequest, TenantServiceInvitesListResponse, TenantServiceListRequest, TenantServiceListResponse, TenantServiceRemoveMemberRequest, TenantServiceRemoveMemberResponse, TenantServiceRequestAdmissionRequest, TenantServiceRequestAdmissionResponse, TenantServiceUpdateMemberRequest, TenantServiceUpdateMemberResponse, TenantServiceUpdateRequest, TenantServiceUpdateResponse } from "./tenant_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * TenantService serves tenant related functions
 *
 * @generated from service api.v1.TenantService
 */
export const TenantService = {
  typeName: "api.v1.TenantService",
  methods: {
    /**
     * Create a tenant
     *
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
     * List tenants
     *
     * @generated from rpc api.v1.TenantService.List
     */
    list: {
      name: "List",
      I: TenantServiceListRequest,
      O: TenantServiceListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get a tenant
     *
     * @generated from rpc api.v1.TenantService.Get
     */
    get: {
      name: "Get",
      I: TenantServiceGetRequest,
      O: TenantServiceGetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update a tenant
     *
     * @generated from rpc api.v1.TenantService.Update
     */
    update: {
      name: "Update",
      I: TenantServiceUpdateRequest,
      O: TenantServiceUpdateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a tenant
     *
     * @generated from rpc api.v1.TenantService.Delete
     */
    delete: {
      name: "Delete",
      I: TenantServiceDeleteRequest,
      O: TenantServiceDeleteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * RemoveMember remove a member of a tenant
     *
     * @generated from rpc api.v1.TenantService.RemoveMember
     */
    removeMember: {
      name: "RemoveMember",
      I: TenantServiceRemoveMemberRequest,
      O: TenantServiceRemoveMemberResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateMember update a member of a tenant
     *
     * @generated from rpc api.v1.TenantService.UpdateMember
     */
    updateMember: {
      name: "UpdateMember",
      I: TenantServiceUpdateMemberRequest,
      O: TenantServiceUpdateMemberResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Invite a user to a tenant
     *
     * @generated from rpc api.v1.TenantService.Invite
     */
    invite: {
      name: "Invite",
      I: TenantServiceInviteRequest,
      O: TenantServiceInviteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * InviteAccept is called from a user to accept an invitation
     *
     * @generated from rpc api.v1.TenantService.InviteAccept
     */
    inviteAccept: {
      name: "InviteAccept",
      I: TenantServiceInviteAcceptRequest,
      O: TenantServiceInviteAcceptResponse,
      kind: MethodKind.Unary,
    },
    /**
     * InviteDelete deletes a pending invitation
     *
     * @generated from rpc api.v1.TenantService.InviteDelete
     */
    inviteDelete: {
      name: "InviteDelete",
      I: TenantServiceInviteDeleteRequest,
      O: TenantServiceInviteDeleteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * InvitesList list all invites to a tenant
     *
     * @generated from rpc api.v1.TenantService.InvitesList
     */
    invitesList: {
      name: "InvitesList",
      I: TenantServiceInvitesListRequest,
      O: TenantServiceInvitesListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * InviteGet get an invite
     *
     * @generated from rpc api.v1.TenantService.InviteGet
     */
    inviteGet: {
      name: "InviteGet",
      I: TenantServiceInviteGetRequest,
      O: TenantServiceInviteGetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * RequestAdmission requests admission for a tenant to use the service
     *
     * @generated from rpc api.v1.TenantService.RequestAdmission
     */
    requestAdmission: {
      name: "RequestAdmission",
      I: TenantServiceRequestAdmissionRequest,
      O: TenantServiceRequestAdmissionResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

