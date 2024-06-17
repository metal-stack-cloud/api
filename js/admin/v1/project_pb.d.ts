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
