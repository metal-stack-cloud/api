import { ProjectServiceCreateRequest, ProjectServiceCreateResponse, ProjectServiceDeleteRequest, ProjectServiceDeleteResponse, ProjectServiceGetRequest, ProjectServiceGetResponse, ProjectServiceInviteAcceptRequest, ProjectServiceInviteAcceptResponse, ProjectServiceInviteDeleteRequest, ProjectServiceInviteDeleteResponse, ProjectServiceInviteGetRequest, ProjectServiceInviteGetResponse, ProjectServiceInviteRequest, ProjectServiceInviteResponse, ProjectServiceInvitesListRequest, ProjectServiceInvitesListResponse, ProjectServiceListRequest, ProjectServiceListResponse, ProjectServiceRemoveMemberRequest, ProjectServiceRemoveMemberResponse, ProjectServiceUpdateMemberRequest, ProjectServiceUpdateMemberResponse, ProjectServiceUpdateRequest, ProjectServiceUpdateResponse } from "./project_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * ProjectService serves project related functions
 *
 * @generated from service api.v1.ProjectService
 */
export declare const ProjectService: {
    readonly typeName: "api.v1.ProjectService";
    readonly methods: {
        /**
         * List all accessible projects
         *
         * @generated from rpc api.v1.ProjectService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof ProjectServiceListRequest;
            readonly O: typeof ProjectServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get a project
         *
         * @generated from rpc api.v1.ProjectService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof ProjectServiceGetRequest;
            readonly O: typeof ProjectServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a project
         *
         * @generated from rpc api.v1.ProjectService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ProjectServiceCreateRequest;
            readonly O: typeof ProjectServiceCreateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a project
         *
         * @generated from rpc api.v1.ProjectService.Delete
         */
        readonly delete: {
            readonly name: "Delete";
            readonly I: typeof ProjectServiceDeleteRequest;
            readonly O: typeof ProjectServiceDeleteResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a project
         *
         * @generated from rpc api.v1.ProjectService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof ProjectServiceUpdateRequest;
            readonly O: typeof ProjectServiceUpdateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * RemoveMember remove a user from a project
         *
         * @generated from rpc api.v1.ProjectService.RemoveMember
         */
        readonly removeMember: {
            readonly name: "RemoveMember";
            readonly I: typeof ProjectServiceRemoveMemberRequest;
            readonly O: typeof ProjectServiceRemoveMemberResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * UpdateMember update a user for a project
         *
         * @generated from rpc api.v1.ProjectService.UpdateMember
         */
        readonly updateMember: {
            readonly name: "UpdateMember";
            readonly I: typeof ProjectServiceUpdateMemberRequest;
            readonly O: typeof ProjectServiceUpdateMemberResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Invite a user to a project
         *
         * @generated from rpc api.v1.ProjectService.Invite
         */
        readonly invite: {
            readonly name: "Invite";
            readonly I: typeof ProjectServiceInviteRequest;
            readonly O: typeof ProjectServiceInviteResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * InviteAccept is called from a user to accept a invitation
         *
         * @generated from rpc api.v1.ProjectService.InviteAccept
         */
        readonly inviteAccept: {
            readonly name: "InviteAccept";
            readonly I: typeof ProjectServiceInviteAcceptRequest;
            readonly O: typeof ProjectServiceInviteAcceptResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * InviteDelete deletes a pending invitation
         *
         * @generated from rpc api.v1.ProjectService.InviteDelete
         */
        readonly inviteDelete: {
            readonly name: "InviteDelete";
            readonly I: typeof ProjectServiceInviteDeleteRequest;
            readonly O: typeof ProjectServiceInviteDeleteResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * InvitesList list all invites to a project
         *
         * @generated from rpc api.v1.ProjectService.InvitesList
         */
        readonly invitesList: {
            readonly name: "InvitesList";
            readonly I: typeof ProjectServiceInvitesListRequest;
            readonly O: typeof ProjectServiceInvitesListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * InviteGet get an invite
         *
         * @generated from rpc api.v1.ProjectService.InviteGet
         */
        readonly inviteGet: {
            readonly name: "InviteGet";
            readonly I: typeof ProjectServiceInviteGetRequest;
            readonly O: typeof ProjectServiceInviteGetResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
