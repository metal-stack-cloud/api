import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Paging } from "../../api/v1/common_pb";
import type { Project } from "../../api/v1/project_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file admin/v1/project.proto.
 */
export declare const file_admin_v1_project: GenFile;
/**
 * ProjectServiceListRequest is the request payload for the project list request
 *
 * @generated from message admin.v1.ProjectServiceListRequest
 */
export type ProjectServiceListRequest = Message<"admin.v1.ProjectServiceListRequest"> & {
    /**
     * Paging details for the list request
     *
     * @generated from field: api.v1.Paging paging = 1;
     */
    paging?: Paging;
    /**
     * TenantId to filter for all projects
     *
     * @generated from field: optional string tenant_id = 2;
     */
    tenantId?: string;
    /**
     * Annotations to filter for
     *
     * @generated from field: map<string, string> annotations = 3;
     */
    annotations: {
        [key: string]: string;
    };
};
/**
 * Describes the message admin.v1.ProjectServiceListRequest.
 * Use `create(ProjectServiceListRequestSchema)` to create a new message.
 */
export declare const ProjectServiceListRequestSchema: GenMessage<ProjectServiceListRequest>;
/**
 * ProjectServiceListResponse is the response payload for the project list request
 *
 * @generated from message admin.v1.ProjectServiceListResponse
 */
export type ProjectServiceListResponse = Message<"admin.v1.ProjectServiceListResponse"> & {
    /**
     * Projects is the list of projects that match the filters
     *
     * @generated from field: repeated api.v1.Project projects = 1;
     */
    projects: Project[];
    /**
     * NextPage is used for pagination, returns the next page to be fetched and must then be provided in the list request.
     *
     * @generated from field: optional uint64 next_page = 2;
     */
    nextPage?: bigint;
};
/**
 * Describes the message admin.v1.ProjectServiceListResponse.
 * Use `create(ProjectServiceListResponseSchema)` to create a new message.
 */
export declare const ProjectServiceListResponseSchema: GenMessage<ProjectServiceListResponse>;
/**
 * ProjectService serves project related functions
 *
 * @generated from service admin.v1.ProjectService
 */
export declare const ProjectService: GenService<{
    /**
     * List projects based on various filter criteria
     *
     * @generated from rpc admin.v1.ProjectService.List
     */
    list: {
        methodKind: "unary";
        input: typeof ProjectServiceListRequestSchema;
        output: typeof ProjectServiceListResponseSchema;
    };
}>;
