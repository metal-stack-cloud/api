import { ProjectServiceCreateRequest, ProjectServiceCreateResponse, ProjectServiceDeleteRequest, ProjectServiceDeleteResponse, ProjectServiceGetRequest, ProjectServiceGetResponse, ProjectServiceListRequest, ProjectServiceListResponse, ProjectServiceUpdateRequest, ProjectServiceUpdateResponse } from "./project_pb.js";
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
    };
};
