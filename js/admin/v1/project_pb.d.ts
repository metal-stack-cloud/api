import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Paging } from "../../api/v1/common_pb.js";
import { Project } from "../../api/v1/project_pb.js";
/**
 * ProjectServiceListRequest is the request payload for the project list request
 *
 * @generated from message admin.v1.ProjectServiceListRequest
 */
export declare class ProjectServiceListRequest extends Message<ProjectServiceListRequest> {
    /**
     * Paging details for the list request
     *
     * @generated from field: api.v1.Paging paging = 1;
     */
    paging?: Paging;
    constructor(data?: PartialMessage<ProjectServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ProjectServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceListRequest;
    static equals(a: ProjectServiceListRequest | PlainMessage<ProjectServiceListRequest> | undefined, b: ProjectServiceListRequest | PlainMessage<ProjectServiceListRequest> | undefined): boolean;
}
/**
 * ProjectServiceListResponse is the response payload for the project list request
 *
 * @generated from message admin.v1.ProjectServiceListResponse
 */
export declare class ProjectServiceListResponse extends Message<ProjectServiceListResponse> {
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
    constructor(data?: PartialMessage<ProjectServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ProjectServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceListResponse;
    static equals(a: ProjectServiceListResponse | PlainMessage<ProjectServiceListResponse> | undefined, b: ProjectServiceListResponse | PlainMessage<ProjectServiceListResponse> | undefined): boolean;
}
/**
 * ProjectServiceRemoveProjectRequest is the request payload for the project remove member request
 *
 * @generated from message admin.v1.ProjectServiceRemoveProjectRequest
 */
export declare class ProjectServiceRemoveProjectRequest extends Message<ProjectServiceRemoveProjectRequest> {
    /**
     * ProjectId is the id of the project from which the member is to be removed
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
    /**
     * MemberId is the id of the member to be removed
     *
     * @generated from field: string member_id = 2;
     */
    memberId: string;
    constructor(data?: PartialMessage<ProjectServiceRemoveProjectRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ProjectServiceRemoveProjectRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceRemoveProjectRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceRemoveProjectRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceRemoveProjectRequest;
    static equals(a: ProjectServiceRemoveProjectRequest | PlainMessage<ProjectServiceRemoveProjectRequest> | undefined, b: ProjectServiceRemoveProjectRequest | PlainMessage<ProjectServiceRemoveProjectRequest> | undefined): boolean;
}
/**
 * ProjectServiceRemoveProjectResponse is the response payload for the project remove member request
 *
 * @generated from message admin.v1.ProjectServiceRemoveProjectResponse
 */
export declare class ProjectServiceRemoveProjectResponse extends Message<ProjectServiceRemoveProjectResponse> {
    /**
     * Success is a flag indicating if the member was removed successfully
     *
     * @generated from field: bool success = 1;
     */
    success: boolean;
    /**
     * Optional message to provide additional details
     *
     * @generated from field: optional string message = 2;
     */
    message?: string;
    constructor(data?: PartialMessage<ProjectServiceRemoveProjectResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ProjectServiceRemoveProjectResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceRemoveProjectResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceRemoveProjectResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceRemoveProjectResponse;
    static equals(a: ProjectServiceRemoveProjectResponse | PlainMessage<ProjectServiceRemoveProjectResponse> | undefined, b: ProjectServiceRemoveProjectResponse | PlainMessage<ProjectServiceRemoveProjectResponse> | undefined): boolean;
}
