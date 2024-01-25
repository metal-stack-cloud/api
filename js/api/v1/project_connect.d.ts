import { ProjectServiceCreateRequest, ProjectServiceCreateResponse, ProjectServiceDeleteRequest, ProjectServiceDeleteResponse, ProjectServiceGetRequest, ProjectServiceGetResponse, ProjectServiceInviteRefreshRequest, ProjectServiceInviteRefreshResponse, ProjectServiceInviteRequest, ProjectServiceInviteResponse, ProjectServiceListRequest, ProjectServiceListResponse, ProjectServiceRemoveMemberRequest, ProjectServiceRemoveMemberResponse, ProjectServiceUpdateRequest, ProjectServiceUpdateResponse } from "./project_pb.js";
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
         * InviteRefresh re-sends an invite to the user and expires the previous invitation link
         *
         * @generated from rpc api.v1.ProjectService.InviteRefresh
         */
        readonly inviteRefresh: {
            readonly name: "InviteRefresh";
            readonly I: typeof ProjectServiceInviteRefreshRequest;
            readonly O: typeof ProjectServiceInviteRefreshResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * RemoveMember a user from a project
         *
         * @generated from rpc api.v1.ProjectService.RemoveMember
         */
        readonly removeMember: {
            readonly name: "RemoveMember";
            readonly I: typeof ProjectServiceRemoveMemberRequest;
            readonly O: typeof ProjectServiceRemoveMemberResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
