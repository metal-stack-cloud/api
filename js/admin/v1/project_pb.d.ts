import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { Paging } from "../../api/v1/common_pb.js";
/**
 * @generated from message admin.v1.ProjectServiceListRequest
 */
export declare class ProjectServiceListRequest extends Message<ProjectServiceListRequest> {
    /**
     * @generated from field: optional string id = 1;
     */
    id?: string;
    /**
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * @generated from field: optional string tenant_id = 3;
     */
    tenantId?: string;
    /**
     * @generated from field: api.v1.Paging paging = 4;
     */
    paging?: Paging;
    constructor(data?: PartialMessage<ProjectServiceListRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "admin.v1.ProjectServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceListRequest;
    static equals(a: ProjectServiceListRequest | PlainMessage<ProjectServiceListRequest> | undefined, b: ProjectServiceListRequest | PlainMessage<ProjectServiceListRequest> | undefined): boolean;
}
/**
 * @generated from message admin.v1.ProjectServiceListResponse
 */
export declare class ProjectServiceListResponse extends Message<ProjectServiceListResponse> {
    /**
     * @generated from field: repeated admin.v1.Project projects = 1;
     */
    projects: Project[];
    /**
     * next_page is used for pagination, returns the next page to be fetched and must then be provided in the list request.
     *
     * @generated from field: optional uint64 next_page = 2;
     */
    nextPage?: bigint;
    constructor(data?: PartialMessage<ProjectServiceListResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "admin.v1.ProjectServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceListResponse;
    static equals(a: ProjectServiceListResponse | PlainMessage<ProjectServiceListResponse> | undefined, b: ProjectServiceListResponse | PlainMessage<ProjectServiceListResponse> | undefined): boolean;
}
/**
 * @generated from message admin.v1.Project
 */
export declare class Project extends Message<Project> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string tenant = 3;
     */
    tenant: string;
    constructor(data?: PartialMessage<Project>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "admin.v1.Project";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Project;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Project;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Project;
    static equals(a: Project | PlainMessage<Project> | undefined, b: Project | PlainMessage<Project> | undefined): boolean;
}
