import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Project defines a group of resources belonging to a tenant
 * a tenant can have multiple projects
 *
 * @generated from message api.v1.Project
 */
export declare class Project extends Message<Project> {
    /**
     * Uuid of this project
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Name of this project
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Tenant this project belongs to
     *
     * @generated from field: string tenant = 3;
     */
    tenant: string;
    constructor(data?: PartialMessage<Project>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Project";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Project;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Project;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Project;
    static equals(a: Project | PlainMessage<Project> | undefined, b: Project | PlainMessage<Project> | undefined): boolean;
}
/**
 * ProjectServiceListRequest is the request payload to list all projects
 *
 * @generated from message api.v1.ProjectServiceListRequest
 */
export declare class ProjectServiceListRequest extends Message<ProjectServiceListRequest> {
    /**
     * Name list only projects with this name
     *
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * Tenant list only projects of this tenant
     *
     * @generated from field: optional string tenant = 2;
     */
    tenant?: string;
    constructor(data?: PartialMessage<ProjectServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceListRequest;
    static equals(a: ProjectServiceListRequest | PlainMessage<ProjectServiceListRequest> | undefined, b: ProjectServiceListRequest | PlainMessage<ProjectServiceListRequest> | undefined): boolean;
}
/**
 * ProjectServiceListResponse is the response payload to list all projects
 *
 * @generated from message api.v1.ProjectServiceListResponse
 */
export declare class ProjectServiceListResponse extends Message<ProjectServiceListResponse> {
    /**
     * Projects is a list of all your projects
     *
     * @generated from field: repeated api.v1.Project projects = 1;
     */
    projects: Project[];
    constructor(data?: PartialMessage<ProjectServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceListResponse;
    static equals(a: ProjectServiceListResponse | PlainMessage<ProjectServiceListResponse> | undefined, b: ProjectServiceListResponse | PlainMessage<ProjectServiceListResponse> | undefined): boolean;
}
