import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
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
     * Description of this project
     *
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * Tenant this project belongs to
     *
     * @generated from field: string tenant = 4;
     */
    tenant: string;
    /**
     * CreatedAt the date when this project was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 10;
     */
    createdAt?: Timestamp;
    /**
     * UpdatedAt the date when this project was updated
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 11;
     */
    updatedAt?: Timestamp;
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
/**
 * ProjectServiceGetRequest is the request payload to get a project
 *
 * @generated from message api.v1.ProjectServiceGetRequest
 */
export declare class ProjectServiceGetRequest extends Message<ProjectServiceGetRequest> {
    /**
     * Project is the uuid of the project to get
     *
     * @generated from field: string project = 1;
     */
    project: string;
    constructor(data?: PartialMessage<ProjectServiceGetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceGetRequest;
    static equals(a: ProjectServiceGetRequest | PlainMessage<ProjectServiceGetRequest> | undefined, b: ProjectServiceGetRequest | PlainMessage<ProjectServiceGetRequest> | undefined): boolean;
}
/**
 * ProjectServiceGetResponse is the response payload to get a projects
 *
 * @generated from message api.v1.ProjectServiceGetResponse
 */
export declare class ProjectServiceGetResponse extends Message<ProjectServiceGetResponse> {
    /**
     * Project is the project
     *
     * @generated from field: api.v1.Project project = 1;
     */
    project?: Project;
    constructor(data?: PartialMessage<ProjectServiceGetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceGetResponse;
    static equals(a: ProjectServiceGetResponse | PlainMessage<ProjectServiceGetResponse> | undefined, b: ProjectServiceGetResponse | PlainMessage<ProjectServiceGetResponse> | undefined): boolean;
}
/**
 * ProjectServiceCreateRequest is the request payload to Create a project
 *
 * @generated from message api.v1.ProjectServiceCreateRequest
 */
export declare class ProjectServiceCreateRequest extends Message<ProjectServiceCreateRequest> {
    /**
     * Tenant is the owner of this project
     *
     * @generated from field: string tenant = 1;
     */
    tenant: string;
    /**
     * Name of this project
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Description of this project
     *
     * @generated from field: string description = 3;
     */
    description: string;
    constructor(data?: PartialMessage<ProjectServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceCreateRequest;
    static equals(a: ProjectServiceCreateRequest | PlainMessage<ProjectServiceCreateRequest> | undefined, b: ProjectServiceCreateRequest | PlainMessage<ProjectServiceCreateRequest> | undefined): boolean;
}
/**
 * ProjectServiceCreateResponse is the response payload of creation of a project
 *
 * @generated from message api.v1.ProjectServiceCreateResponse
 */
export declare class ProjectServiceCreateResponse extends Message<ProjectServiceCreateResponse> {
    /**
     * Project is the project
     *
     * @generated from field: api.v1.Project project = 1;
     */
    project?: Project;
    constructor(data?: PartialMessage<ProjectServiceCreateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceCreateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceCreateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceCreateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceCreateResponse;
    static equals(a: ProjectServiceCreateResponse | PlainMessage<ProjectServiceCreateResponse> | undefined, b: ProjectServiceCreateResponse | PlainMessage<ProjectServiceCreateResponse> | undefined): boolean;
}
/**
 * ProjectServiceDeleteRequest is the request payload to delete a project
 *
 * @generated from message api.v1.ProjectServiceDeleteRequest
 */
export declare class ProjectServiceDeleteRequest extends Message<ProjectServiceDeleteRequest> {
    /**
     * Project is the uuid of the project to get
     *
     * @generated from field: string project = 1;
     */
    project: string;
    constructor(data?: PartialMessage<ProjectServiceDeleteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceDeleteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceDeleteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceDeleteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceDeleteRequest;
    static equals(a: ProjectServiceDeleteRequest | PlainMessage<ProjectServiceDeleteRequest> | undefined, b: ProjectServiceDeleteRequest | PlainMessage<ProjectServiceDeleteRequest> | undefined): boolean;
}
/**
 * ProjectServiceDeleteResponse is the response payload to delete a project
 *
 * @generated from message api.v1.ProjectServiceDeleteResponse
 */
export declare class ProjectServiceDeleteResponse extends Message<ProjectServiceDeleteResponse> {
    /**
     * Project is the project
     *
     * @generated from field: api.v1.Project project = 1;
     */
    project?: Project;
    constructor(data?: PartialMessage<ProjectServiceDeleteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceDeleteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceDeleteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceDeleteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceDeleteResponse;
    static equals(a: ProjectServiceDeleteResponse | PlainMessage<ProjectServiceDeleteResponse> | undefined, b: ProjectServiceDeleteResponse | PlainMessage<ProjectServiceDeleteResponse> | undefined): boolean;
}
/**
 * ProjectServiceUpdateRequest is the request payload to update a project
 *
 * @generated from message api.v1.ProjectServiceUpdateRequest
 */
export declare class ProjectServiceUpdateRequest extends Message<ProjectServiceUpdateRequest> {
    /**
     * Project is the uuid of the project to get
     *
     * @generated from field: string project = 1;
     */
    project: string;
    /**
     * Name of this project
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Description of this project
     *
     * @generated from field: string description = 3;
     */
    description: string;
    constructor(data?: PartialMessage<ProjectServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceUpdateRequest;
    static equals(a: ProjectServiceUpdateRequest | PlainMessage<ProjectServiceUpdateRequest> | undefined, b: ProjectServiceUpdateRequest | PlainMessage<ProjectServiceUpdateRequest> | undefined): boolean;
}
/**
 * ProjectServiceUpdateResponse is the response payload to update a project
 *
 * @generated from message api.v1.ProjectServiceUpdateResponse
 */
export declare class ProjectServiceUpdateResponse extends Message<ProjectServiceUpdateResponse> {
    /**
     * Project is the project
     *
     * @generated from field: api.v1.Project project = 1;
     */
    project?: Project;
    constructor(data?: PartialMessage<ProjectServiceUpdateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceUpdateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceUpdateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceUpdateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceUpdateResponse;
    static equals(a: ProjectServiceUpdateResponse | PlainMessage<ProjectServiceUpdateResponse> | undefined, b: ProjectServiceUpdateResponse | PlainMessage<ProjectServiceUpdateResponse> | undefined): boolean;
}
