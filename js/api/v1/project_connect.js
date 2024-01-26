// @generated by protoc-gen-connect-es v1.3.0 with parameter "target=ts"
// @generated from file api/v1/project.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { ProjectServiceCreateRequest, ProjectServiceCreateResponse, ProjectServiceDeleteRequest, ProjectServiceDeleteResponse, ProjectServiceGetRequest, ProjectServiceGetResponse, ProjectServiceInviteAcceptRequest, ProjectServiceInviteAcceptResponse, ProjectServiceInviteDeleteRequest, ProjectServiceInviteDeleteResponse, ProjectServiceInviteRequest, ProjectServiceInviteResponse, ProjectServiceInvitesListRequest, ProjectServiceInvitesListResponse, ProjectServiceListRequest, ProjectServiceListResponse, ProjectServiceRemoveMemberRequest, ProjectServiceRemoveMemberResponse, ProjectServiceUpdateRequest, ProjectServiceUpdateResponse } from "./project_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * ProjectService serves project related functions
 *
 * @generated from service api.v1.ProjectService
 */
export const ProjectService = {
    typeName: "api.v1.ProjectService",
    methods: {
        /**
         * List all accessible projects
         *
         * @generated from rpc api.v1.ProjectService.List
         */
        list: {
            name: "List",
            I: ProjectServiceListRequest,
            O: ProjectServiceListResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Get a project
         *
         * @generated from rpc api.v1.ProjectService.Get
         */
        get: {
            name: "Get",
            I: ProjectServiceGetRequest,
            O: ProjectServiceGetResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Create a project
         *
         * @generated from rpc api.v1.ProjectService.Create
         */
        create: {
            name: "Create",
            I: ProjectServiceCreateRequest,
            O: ProjectServiceCreateResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Delete a project
         *
         * @generated from rpc api.v1.ProjectService.Delete
         */
        delete: {
            name: "Delete",
            I: ProjectServiceDeleteRequest,
            O: ProjectServiceDeleteResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Update a project
         *
         * @generated from rpc api.v1.ProjectService.Update
         */
        update: {
            name: "Update",
            I: ProjectServiceUpdateRequest,
            O: ProjectServiceUpdateResponse,
            kind: MethodKind.Unary,
        },
        /**
         * RemoveMember a user from a project
         *
         * @generated from rpc api.v1.ProjectService.RemoveMember
         */
        removeMember: {
            name: "RemoveMember",
            I: ProjectServiceRemoveMemberRequest,
            O: ProjectServiceRemoveMemberResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Invite a user to a project
         *
         * @generated from rpc api.v1.ProjectService.Invite
         */
        invite: {
            name: "Invite",
            I: ProjectServiceInviteRequest,
            O: ProjectServiceInviteResponse,
            kind: MethodKind.Unary,
        },
        /**
         * InviteAccept is called from a user to accept a invitation
         *
         * @generated from rpc api.v1.ProjectService.InviteAccept
         */
        inviteAccept: {
            name: "InviteAccept",
            I: ProjectServiceInviteAcceptRequest,
            O: ProjectServiceInviteAcceptResponse,
            kind: MethodKind.Unary,
        },
        /**
         * InviteDelete deletes a pending invitation
         *
         * @generated from rpc api.v1.ProjectService.InviteDelete
         */
        inviteDelete: {
            name: "InviteDelete",
            I: ProjectServiceInviteDeleteRequest,
            O: ProjectServiceInviteDeleteResponse,
            kind: MethodKind.Unary,
        },
        /**
         * InvitesList list all invites to a project
         *
         * @generated from rpc api.v1.ProjectService.InvitesList
         */
        invitesList: {
            name: "InvitesList",
            I: ProjectServiceInvitesListRequest,
            O: ProjectServiceInvitesListResponse,
            kind: MethodKind.Unary,
        },
    }
};
