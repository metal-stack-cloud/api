import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { ProjectRole } from "./common_pb.js";
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
     * Name of this project must be unique per tenant
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
     * ProjectMembers in this project
     *
     * @generated from field: repeated api.v1.ProjectMember project_members = 5;
     */
    projectMembers: ProjectMember[];
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
 * ProjectMember defines a user that participates at a project
 *
 * @generated from message api.v1.ProjectMember
 */
export declare class ProjectMember extends Message<ProjectMember> {
    /**
     * Id is the user id of the member
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Role is the role of the member
     *
     * @generated from field: api.v1.ProjectRole role = 2;
     */
    role: ProjectRole;
    /**
     * CreatedAt the date when the member was added to the project
     *
     * @generated from field: google.protobuf.Timestamp created_at = 10;
     */
    createdAt?: Timestamp;
    constructor(data?: PartialMessage<ProjectMember>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectMember";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectMember;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectMember;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectMember;
    static equals(a: ProjectMember | PlainMessage<ProjectMember> | undefined, b: ProjectMember | PlainMessage<ProjectMember> | undefined): boolean;
}
/**
 * ProjectInvite defines invite to project
 *
 * @generated from message api.v1.ProjectInvite
 */
export declare class ProjectInvite extends Message<ProjectInvite> {
    /**
     * Secret is the secret part of the invite, typically part of the url
     *
     * @generated from field: string secret = 1;
     */
    secret: string;
    /**
     * Project is the project id for which this invite was created
     *
     * @generated from field: string project = 2;
     */
    project: string;
    /**
     * Role is the role in this project the user will get after accepting the invitation
     *
     * @generated from field: api.v1.ProjectRole role = 3;
     */
    role: ProjectRole;
    /**
     * Joined is false as long as a user has not accepted the invite
     *
     * @generated from field: bool joined = 4;
     */
    joined: boolean;
    /**
     * ExpiresAt the date when this invite expires
     *
     * @generated from field: google.protobuf.Timestamp expires_at = 10;
     */
    expiresAt?: Timestamp;
    /**
     * JoinedAt the date when the member accepted this invite
     *
     * @generated from field: google.protobuf.Timestamp joined_at = 11;
     */
    joinedAt?: Timestamp;
    constructor(data?: PartialMessage<ProjectInvite>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectInvite";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectInvite;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectInvite;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectInvite;
    static equals(a: ProjectInvite | PlainMessage<ProjectInvite> | undefined, b: ProjectInvite | PlainMessage<ProjectInvite> | undefined): boolean;
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
     * Login is the tenant of this project
     * TODO: is login really a good name?
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Name of this project, unique per tenant
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
     * Name of this project unique per tenant
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * Description of this project
     *
     * @generated from field: optional string description = 3;
     */
    description?: string;
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
/**
 * ProjectServiceInviteRequest is used to invite a member to a project
 *
 * @generated from message api.v1.ProjectServiceInviteRequest
 */
export declare class ProjectServiceInviteRequest extends Message<ProjectServiceInviteRequest> {
    /**
     * Project is the uuid of the project
     *
     * @generated from field: string project = 1;
     */
    project: string;
    /**
     * Role of this user in this project
     *
     * @generated from field: api.v1.ProjectRole role = 3;
     */
    role: ProjectRole;
    constructor(data?: PartialMessage<ProjectServiceInviteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceInviteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceInviteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceInviteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceInviteRequest;
    static equals(a: ProjectServiceInviteRequest | PlainMessage<ProjectServiceInviteRequest> | undefined, b: ProjectServiceInviteRequest | PlainMessage<ProjectServiceInviteRequest> | undefined): boolean;
}
/**
 * ProjectServiceInviteRequest is the response payload to a invite member request
 *
 * @generated from message api.v1.ProjectServiceInviteResponse
 */
export declare class ProjectServiceInviteResponse extends Message<ProjectServiceInviteResponse> {
    /**
     * Inviter contains a secret which can be sent to a potential user
     * can appended to the invitation endpoint at our api server like
     * console.metalstack.cloud/invite/<secret>
     *
     * @generated from field: api.v1.ProjectInvite invite = 1;
     */
    invite?: ProjectInvite;
    constructor(data?: PartialMessage<ProjectServiceInviteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceInviteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceInviteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceInviteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceInviteResponse;
    static equals(a: ProjectServiceInviteResponse | PlainMessage<ProjectServiceInviteResponse> | undefined, b: ProjectServiceInviteResponse | PlainMessage<ProjectServiceInviteResponse> | undefined): boolean;
}
/**
 * ProjectServiceInvitesListRequest is the request payload to a list invites request
 *
 * @generated from message api.v1.ProjectServiceInvitesListRequest
 */
export declare class ProjectServiceInvitesListRequest extends Message<ProjectServiceInvitesListRequest> {
    /**
     * Project is the uuid of the project
     *
     * @generated from field: string project = 1;
     */
    project: string;
    constructor(data?: PartialMessage<ProjectServiceInvitesListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceInvitesListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceInvitesListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceInvitesListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceInvitesListRequest;
    static equals(a: ProjectServiceInvitesListRequest | PlainMessage<ProjectServiceInvitesListRequest> | undefined, b: ProjectServiceInvitesListRequest | PlainMessage<ProjectServiceInvitesListRequest> | undefined): boolean;
}
/**
 * ProjectServiceInvitesListResponse is the response payload to a list invites request
 *
 * @generated from message api.v1.ProjectServiceInvitesListResponse
 */
export declare class ProjectServiceInvitesListResponse extends Message<ProjectServiceInvitesListResponse> {
    /**
     * Invites not already accepted the invitation to this project
     *
     * @generated from field: repeated api.v1.ProjectInvite invites = 1;
     */
    invites: ProjectInvite[];
    constructor(data?: PartialMessage<ProjectServiceInvitesListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceInvitesListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceInvitesListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceInvitesListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceInvitesListResponse;
    static equals(a: ProjectServiceInvitesListResponse | PlainMessage<ProjectServiceInvitesListResponse> | undefined, b: ProjectServiceInvitesListResponse | PlainMessage<ProjectServiceInvitesListResponse> | undefined): boolean;
}
/**
 * ProjectServiceRemoveMemberRequest is used to remove a member from a project
 *
 * @generated from message api.v1.ProjectServiceRemoveMemberRequest
 */
export declare class ProjectServiceRemoveMemberRequest extends Message<ProjectServiceRemoveMemberRequest> {
    /**
     * Project is the uuid of the project
     *
     * @generated from field: string project = 1;
     */
    project: string;
    /**
     * MemberID ist the id of the member to remove from this project
     *
     * @generated from field: string member_id = 2;
     */
    memberId: string;
    constructor(data?: PartialMessage<ProjectServiceRemoveMemberRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceRemoveMemberRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceRemoveMemberRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceRemoveMemberRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceRemoveMemberRequest;
    static equals(a: ProjectServiceRemoveMemberRequest | PlainMessage<ProjectServiceRemoveMemberRequest> | undefined, b: ProjectServiceRemoveMemberRequest | PlainMessage<ProjectServiceRemoveMemberRequest> | undefined): boolean;
}
/**
 * ProjectServiceRemoveMemberResponse is the response payload to a remove member request
 *
 * @generated from message api.v1.ProjectServiceRemoveMemberResponse
 */
export declare class ProjectServiceRemoveMemberResponse extends Message<ProjectServiceRemoveMemberResponse> {
    constructor(data?: PartialMessage<ProjectServiceRemoveMemberResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceRemoveMemberResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceRemoveMemberResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceRemoveMemberResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceRemoveMemberResponse;
    static equals(a: ProjectServiceRemoveMemberResponse | PlainMessage<ProjectServiceRemoveMemberResponse> | undefined, b: ProjectServiceRemoveMemberResponse | PlainMessage<ProjectServiceRemoveMemberResponse> | undefined): boolean;
}
/**
 * ProjectServiceInviteAcceptRequest is the request payload to a accept invite request
 *
 * @generated from message api.v1.ProjectServiceInviteAcceptRequest
 */
export declare class ProjectServiceInviteAcceptRequest extends Message<ProjectServiceInviteAcceptRequest> {
    /**
     * Secret is the invitation secret part of the invitation url
     *
     * @generated from field: string secret = 1;
     */
    secret: string;
    constructor(data?: PartialMessage<ProjectServiceInviteAcceptRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceInviteAcceptRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceInviteAcceptRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceInviteAcceptRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceInviteAcceptRequest;
    static equals(a: ProjectServiceInviteAcceptRequest | PlainMessage<ProjectServiceInviteAcceptRequest> | undefined, b: ProjectServiceInviteAcceptRequest | PlainMessage<ProjectServiceInviteAcceptRequest> | undefined): boolean;
}
/**
 * ProjectServiceInvitesListResponse is the response payload to a accept invite request
 *
 * @generated from message api.v1.ProjectServiceInviteAcceptResponse
 */
export declare class ProjectServiceInviteAcceptResponse extends Message<ProjectServiceInviteAcceptResponse> {
    /**
     * Project ID of the project joined
     *
     * @generated from field: string project = 1;
     */
    project: string;
    /**
     * ProjectName if the project joined
     *
     * @generated from field: string project_name = 2;
     */
    projectName: string;
    constructor(data?: PartialMessage<ProjectServiceInviteAcceptResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceInviteAcceptResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceInviteAcceptResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceInviteAcceptResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceInviteAcceptResponse;
    static equals(a: ProjectServiceInviteAcceptResponse | PlainMessage<ProjectServiceInviteAcceptResponse> | undefined, b: ProjectServiceInviteAcceptResponse | PlainMessage<ProjectServiceInviteAcceptResponse> | undefined): boolean;
}
/**
 * ProjectServiceInviteDeleteRequest is the request payload to a delete invite
 *
 * @generated from message api.v1.ProjectServiceInviteDeleteRequest
 */
export declare class ProjectServiceInviteDeleteRequest extends Message<ProjectServiceInviteDeleteRequest> {
    /**
     * Project is the uuid of the project
     *
     * @generated from field: string project = 1;
     */
    project: string;
    /**
     * Secret of the invite to delete
     *
     * @generated from field: string secret = 2;
     */
    secret: string;
    constructor(data?: PartialMessage<ProjectServiceInviteDeleteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceInviteDeleteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceInviteDeleteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceInviteDeleteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceInviteDeleteRequest;
    static equals(a: ProjectServiceInviteDeleteRequest | PlainMessage<ProjectServiceInviteDeleteRequest> | undefined, b: ProjectServiceInviteDeleteRequest | PlainMessage<ProjectServiceInviteDeleteRequest> | undefined): boolean;
}
/**
 * ProjectServiceInviteDeleteResponse is the response payload of a delete invite request
 *
 * @generated from message api.v1.ProjectServiceInviteDeleteResponse
 */
export declare class ProjectServiceInviteDeleteResponse extends Message<ProjectServiceInviteDeleteResponse> {
    constructor(data?: PartialMessage<ProjectServiceInviteDeleteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ProjectServiceInviteDeleteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceInviteDeleteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceInviteDeleteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceInviteDeleteResponse;
    static equals(a: ProjectServiceInviteDeleteResponse | PlainMessage<ProjectServiceInviteDeleteResponse> | undefined, b: ProjectServiceInviteDeleteResponse | PlainMessage<ProjectServiceInviteDeleteResponse> | undefined): boolean;
}
