// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file api/v1/project.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { ProjectRole } from "./common_pb.js";

/**
 * Project defines a group of resources belonging to a tenant
 * a tenant can have multiple projects
 *
 * @generated from message api.v1.Project
 */
export class Project extends Message<Project> {
  /**
   * Uuid of this project
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * Name of this project must be unique per tenant
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * Description of this project
   *
   * @generated from field: string description = 3;
   */
  description = "";

  /**
   * Tenant this project belongs to
   *
   * @generated from field: string tenant = 4;
   */
  tenant = "";

  /**
   * ProjectMembers in this project
   *
   * @generated from field: repeated api.v1.ProjectMember project_members = 5;
   */
  projectMembers: ProjectMember[] = [];

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

  constructor(data?: PartialMessage<Project>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.Project";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "project_members", kind: "message", T: ProjectMember, repeated: true },
    { no: 10, name: "created_at", kind: "message", T: Timestamp },
    { no: 11, name: "updated_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Project {
    return new Project().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Project {
    return new Project().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Project {
    return new Project().fromJsonString(jsonString, options);
  }

  static equals(a: Project | PlainMessage<Project> | undefined, b: Project | PlainMessage<Project> | undefined): boolean {
    return proto3.util.equals(Project, a, b);
  }
}

/**
 * ProjectMember defines a user that participates at a project
 *
 * @generated from message api.v1.ProjectMember
 */
export class ProjectMember extends Message<ProjectMember> {
  /**
   * Id is the user id of the member
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * Role is the role of the member
   *
   * @generated from field: api.v1.ProjectRole role = 2;
   */
  role = ProjectRole.UNSPECIFIED;

  /**
   * InivitePending is true as long as the member has not accepted the invite
   *
   * @generated from field: bool invite_pending = 3;
   */
  invitePending = false;

  /**
   * CreatedAt the date when the member was added to the project
   *
   * @generated from field: google.protobuf.Timestamp created_at = 10;
   */
  createdAt?: Timestamp;

  constructor(data?: PartialMessage<ProjectMember>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectMember";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "role", kind: "enum", T: proto3.getEnumType(ProjectRole) },
    { no: 3, name: "invite_pending", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "created_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectMember {
    return new ProjectMember().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectMember {
    return new ProjectMember().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectMember {
    return new ProjectMember().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectMember | PlainMessage<ProjectMember> | undefined, b: ProjectMember | PlainMessage<ProjectMember> | undefined): boolean {
    return proto3.util.equals(ProjectMember, a, b);
  }
}

/**
 * ProjectServiceListRequest is the request payload to list all projects
 *
 * @generated from message api.v1.ProjectServiceListRequest
 */
export class ProjectServiceListRequest extends Message<ProjectServiceListRequest> {
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

  constructor(data?: PartialMessage<ProjectServiceListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceListRequest {
    return new ProjectServiceListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceListRequest {
    return new ProjectServiceListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceListRequest {
    return new ProjectServiceListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceListRequest | PlainMessage<ProjectServiceListRequest> | undefined, b: ProjectServiceListRequest | PlainMessage<ProjectServiceListRequest> | undefined): boolean {
    return proto3.util.equals(ProjectServiceListRequest, a, b);
  }
}

/**
 * ProjectServiceListResponse is the response payload to list all projects
 *
 * @generated from message api.v1.ProjectServiceListResponse
 */
export class ProjectServiceListResponse extends Message<ProjectServiceListResponse> {
  /**
   * Projects is a list of all your projects
   *
   * @generated from field: repeated api.v1.Project projects = 1;
   */
  projects: Project[] = [];

  constructor(data?: PartialMessage<ProjectServiceListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "projects", kind: "message", T: Project, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceListResponse {
    return new ProjectServiceListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceListResponse {
    return new ProjectServiceListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceListResponse {
    return new ProjectServiceListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceListResponse | PlainMessage<ProjectServiceListResponse> | undefined, b: ProjectServiceListResponse | PlainMessage<ProjectServiceListResponse> | undefined): boolean {
    return proto3.util.equals(ProjectServiceListResponse, a, b);
  }
}

/**
 * ProjectServiceGetRequest is the request payload to get a project
 *
 * @generated from message api.v1.ProjectServiceGetRequest
 */
export class ProjectServiceGetRequest extends Message<ProjectServiceGetRequest> {
  /**
   * Project is the uuid of the project to get
   *
   * @generated from field: string project = 1;
   */
  project = "";

  constructor(data?: PartialMessage<ProjectServiceGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceGetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceGetRequest {
    return new ProjectServiceGetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceGetRequest {
    return new ProjectServiceGetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceGetRequest {
    return new ProjectServiceGetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceGetRequest | PlainMessage<ProjectServiceGetRequest> | undefined, b: ProjectServiceGetRequest | PlainMessage<ProjectServiceGetRequest> | undefined): boolean {
    return proto3.util.equals(ProjectServiceGetRequest, a, b);
  }
}

/**
 * ProjectServiceGetResponse is the response payload to get a projects
 *
 * @generated from message api.v1.ProjectServiceGetResponse
 */
export class ProjectServiceGetResponse extends Message<ProjectServiceGetResponse> {
  /**
   * Project is the project
   *
   * @generated from field: api.v1.Project project = 1;
   */
  project?: Project;

  constructor(data?: PartialMessage<ProjectServiceGetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceGetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "message", T: Project },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceGetResponse {
    return new ProjectServiceGetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceGetResponse {
    return new ProjectServiceGetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceGetResponse {
    return new ProjectServiceGetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceGetResponse | PlainMessage<ProjectServiceGetResponse> | undefined, b: ProjectServiceGetResponse | PlainMessage<ProjectServiceGetResponse> | undefined): boolean {
    return proto3.util.equals(ProjectServiceGetResponse, a, b);
  }
}

/**
 * ProjectServiceCreateRequest is the request payload to Create a project
 *
 * @generated from message api.v1.ProjectServiceCreateRequest
 */
export class ProjectServiceCreateRequest extends Message<ProjectServiceCreateRequest> {
  /**
   * Login is the tenant of this project
   * TODO: is login really a good name?
   *
   * @generated from field: string login = 1;
   */
  login = "";

  /**
   * Name of this project, unique per tenant
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * Description of this project
   *
   * @generated from field: string description = 3;
   */
  description = "";

  constructor(data?: PartialMessage<ProjectServiceCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceCreateRequest {
    return new ProjectServiceCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceCreateRequest {
    return new ProjectServiceCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceCreateRequest {
    return new ProjectServiceCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceCreateRequest | PlainMessage<ProjectServiceCreateRequest> | undefined, b: ProjectServiceCreateRequest | PlainMessage<ProjectServiceCreateRequest> | undefined): boolean {
    return proto3.util.equals(ProjectServiceCreateRequest, a, b);
  }
}

/**
 * ProjectServiceCreateResponse is the response payload of creation of a project
 *
 * @generated from message api.v1.ProjectServiceCreateResponse
 */
export class ProjectServiceCreateResponse extends Message<ProjectServiceCreateResponse> {
  /**
   * Project is the project
   *
   * @generated from field: api.v1.Project project = 1;
   */
  project?: Project;

  constructor(data?: PartialMessage<ProjectServiceCreateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceCreateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "message", T: Project },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceCreateResponse {
    return new ProjectServiceCreateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceCreateResponse {
    return new ProjectServiceCreateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceCreateResponse {
    return new ProjectServiceCreateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceCreateResponse | PlainMessage<ProjectServiceCreateResponse> | undefined, b: ProjectServiceCreateResponse | PlainMessage<ProjectServiceCreateResponse> | undefined): boolean {
    return proto3.util.equals(ProjectServiceCreateResponse, a, b);
  }
}

/**
 * ProjectServiceDeleteRequest is the request payload to delete a project
 *
 * @generated from message api.v1.ProjectServiceDeleteRequest
 */
export class ProjectServiceDeleteRequest extends Message<ProjectServiceDeleteRequest> {
  /**
   * Project is the uuid of the project to get
   *
   * @generated from field: string project = 1;
   */
  project = "";

  constructor(data?: PartialMessage<ProjectServiceDeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceDeleteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceDeleteRequest {
    return new ProjectServiceDeleteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceDeleteRequest {
    return new ProjectServiceDeleteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceDeleteRequest {
    return new ProjectServiceDeleteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceDeleteRequest | PlainMessage<ProjectServiceDeleteRequest> | undefined, b: ProjectServiceDeleteRequest | PlainMessage<ProjectServiceDeleteRequest> | undefined): boolean {
    return proto3.util.equals(ProjectServiceDeleteRequest, a, b);
  }
}

/**
 * ProjectServiceDeleteResponse is the response payload to delete a project
 *
 * @generated from message api.v1.ProjectServiceDeleteResponse
 */
export class ProjectServiceDeleteResponse extends Message<ProjectServiceDeleteResponse> {
  /**
   * Project is the project
   *
   * @generated from field: api.v1.Project project = 1;
   */
  project?: Project;

  constructor(data?: PartialMessage<ProjectServiceDeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceDeleteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "message", T: Project },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceDeleteResponse {
    return new ProjectServiceDeleteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceDeleteResponse {
    return new ProjectServiceDeleteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceDeleteResponse {
    return new ProjectServiceDeleteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceDeleteResponse | PlainMessage<ProjectServiceDeleteResponse> | undefined, b: ProjectServiceDeleteResponse | PlainMessage<ProjectServiceDeleteResponse> | undefined): boolean {
    return proto3.util.equals(ProjectServiceDeleteResponse, a, b);
  }
}

/**
 * ProjectServiceUpdateRequest is the request payload to update a project
 *
 * @generated from message api.v1.ProjectServiceUpdateRequest
 */
export class ProjectServiceUpdateRequest extends Message<ProjectServiceUpdateRequest> {
  /**
   * Project is the uuid of the project to get
   *
   * @generated from field: string project = 1;
   */
  project = "";

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

  constructor(data?: PartialMessage<ProjectServiceUpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceUpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceUpdateRequest {
    return new ProjectServiceUpdateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceUpdateRequest {
    return new ProjectServiceUpdateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceUpdateRequest {
    return new ProjectServiceUpdateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceUpdateRequest | PlainMessage<ProjectServiceUpdateRequest> | undefined, b: ProjectServiceUpdateRequest | PlainMessage<ProjectServiceUpdateRequest> | undefined): boolean {
    return proto3.util.equals(ProjectServiceUpdateRequest, a, b);
  }
}

/**
 * ProjectServiceUpdateResponse is the response payload to update a project
 *
 * @generated from message api.v1.ProjectServiceUpdateResponse
 */
export class ProjectServiceUpdateResponse extends Message<ProjectServiceUpdateResponse> {
  /**
   * Project is the project
   *
   * @generated from field: api.v1.Project project = 1;
   */
  project?: Project;

  constructor(data?: PartialMessage<ProjectServiceUpdateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceUpdateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "message", T: Project },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceUpdateResponse {
    return new ProjectServiceUpdateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceUpdateResponse {
    return new ProjectServiceUpdateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceUpdateResponse {
    return new ProjectServiceUpdateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceUpdateResponse | PlainMessage<ProjectServiceUpdateResponse> | undefined, b: ProjectServiceUpdateResponse | PlainMessage<ProjectServiceUpdateResponse> | undefined): boolean {
    return proto3.util.equals(ProjectServiceUpdateResponse, a, b);
  }
}

/**
 * ProjectServiceInviteRequest is used to invite a member to a project
 *
 * @generated from message api.v1.ProjectServiceInviteRequest
 */
export class ProjectServiceInviteRequest extends Message<ProjectServiceInviteRequest> {
  /**
   * Project is the uuid of the project
   *
   * @generated from field: string project = 1;
   */
  project = "";

  /**
   * Email of the user to invite
   *
   * @generated from field: string email = 2;
   */
  email = "";

  /**
   * Role of this user in this project
   *
   * @generated from field: api.v1.ProjectRole role = 3;
   */
  role = ProjectRole.UNSPECIFIED;

  constructor(data?: PartialMessage<ProjectServiceInviteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceInviteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "role", kind: "enum", T: proto3.getEnumType(ProjectRole) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceInviteRequest {
    return new ProjectServiceInviteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceInviteRequest {
    return new ProjectServiceInviteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceInviteRequest {
    return new ProjectServiceInviteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceInviteRequest | PlainMessage<ProjectServiceInviteRequest> | undefined, b: ProjectServiceInviteRequest | PlainMessage<ProjectServiceInviteRequest> | undefined): boolean {
    return proto3.util.equals(ProjectServiceInviteRequest, a, b);
  }
}

/**
 * ProjectServiceInviteRequest is the response payload to a invite member request
 *
 * @generated from message api.v1.ProjectServiceInviteResponse
 */
export class ProjectServiceInviteResponse extends Message<ProjectServiceInviteResponse> {
  constructor(data?: PartialMessage<ProjectServiceInviteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceInviteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceInviteResponse {
    return new ProjectServiceInviteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceInviteResponse {
    return new ProjectServiceInviteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceInviteResponse {
    return new ProjectServiceInviteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceInviteResponse | PlainMessage<ProjectServiceInviteResponse> | undefined, b: ProjectServiceInviteResponse | PlainMessage<ProjectServiceInviteResponse> | undefined): boolean {
    return proto3.util.equals(ProjectServiceInviteResponse, a, b);
  }
}

/**
 * ProjectServiceInviteRequest is used to list invites of a project
 *
 * @generated from message api.v1.ProjectServiceListInvitesRequest
 */
export class ProjectServiceListInvitesRequest extends Message<ProjectServiceListInvitesRequest> {
  /**
   * Project is the uuid of the project
   *
   * @generated from field: string project = 1;
   */
  project = "";

  constructor(data?: PartialMessage<ProjectServiceListInvitesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceListInvitesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceListInvitesRequest {
    return new ProjectServiceListInvitesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceListInvitesRequest {
    return new ProjectServiceListInvitesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceListInvitesRequest {
    return new ProjectServiceListInvitesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceListInvitesRequest | PlainMessage<ProjectServiceListInvitesRequest> | undefined, b: ProjectServiceListInvitesRequest | PlainMessage<ProjectServiceListInvitesRequest> | undefined): boolean {
    return proto3.util.equals(ProjectServiceListInvitesRequest, a, b);
  }
}

/**
 * ProjectServiceListInvitesResponse is the response payload to a list invites request
 *
 * @generated from message api.v1.ProjectServiceListInvitesResponse
 */
export class ProjectServiceListInvitesResponse extends Message<ProjectServiceListInvitesResponse> {
  /**
   * ProjectMembers not already accepted the invitation to this project
   *
   * @generated from field: repeated api.v1.ProjectMember project_members = 1;
   */
  projectMembers: ProjectMember[] = [];

  constructor(data?: PartialMessage<ProjectServiceListInvitesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceListInvitesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_members", kind: "message", T: ProjectMember, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceListInvitesResponse {
    return new ProjectServiceListInvitesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceListInvitesResponse {
    return new ProjectServiceListInvitesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceListInvitesResponse {
    return new ProjectServiceListInvitesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceListInvitesResponse | PlainMessage<ProjectServiceListInvitesResponse> | undefined, b: ProjectServiceListInvitesResponse | PlainMessage<ProjectServiceListInvitesResponse> | undefined): boolean {
    return proto3.util.equals(ProjectServiceListInvitesResponse, a, b);
  }
}

/**
 * ProjectServiceInviteRefreshRequest is used to re-send an invite for a member
 *
 * @generated from message api.v1.ProjectServiceInviteRefreshRequest
 */
export class ProjectServiceInviteRefreshRequest extends Message<ProjectServiceInviteRefreshRequest> {
  /**
   * Project is the uuid of the project
   *
   * @generated from field: string project = 1;
   */
  project = "";

  /**
   * Email of the user to invite
   *
   * @generated from field: string email = 2;
   */
  email = "";

  constructor(data?: PartialMessage<ProjectServiceInviteRefreshRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceInviteRefreshRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceInviteRefreshRequest {
    return new ProjectServiceInviteRefreshRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceInviteRefreshRequest {
    return new ProjectServiceInviteRefreshRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceInviteRefreshRequest {
    return new ProjectServiceInviteRefreshRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceInviteRefreshRequest | PlainMessage<ProjectServiceInviteRefreshRequest> | undefined, b: ProjectServiceInviteRefreshRequest | PlainMessage<ProjectServiceInviteRefreshRequest> | undefined): boolean {
    return proto3.util.equals(ProjectServiceInviteRefreshRequest, a, b);
  }
}

/**
 * ProjectServiceInviteRefreshResponse is the response payload to a invite member request
 *
 * @generated from message api.v1.ProjectServiceInviteRefreshResponse
 */
export class ProjectServiceInviteRefreshResponse extends Message<ProjectServiceInviteRefreshResponse> {
  constructor(data?: PartialMessage<ProjectServiceInviteRefreshResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceInviteRefreshResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceInviteRefreshResponse {
    return new ProjectServiceInviteRefreshResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceInviteRefreshResponse {
    return new ProjectServiceInviteRefreshResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceInviteRefreshResponse {
    return new ProjectServiceInviteRefreshResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceInviteRefreshResponse | PlainMessage<ProjectServiceInviteRefreshResponse> | undefined, b: ProjectServiceInviteRefreshResponse | PlainMessage<ProjectServiceInviteRefreshResponse> | undefined): boolean {
    return proto3.util.equals(ProjectServiceInviteRefreshResponse, a, b);
  }
}

/**
 * ProjectServiceRemoveMemberRequest is used to remove a member from a project
 *
 * @generated from message api.v1.ProjectServiceRemoveMemberRequest
 */
export class ProjectServiceRemoveMemberRequest extends Message<ProjectServiceRemoveMemberRequest> {
  /**
   * Project is the uuid of the project
   *
   * @generated from field: string project = 1;
   */
  project = "";

  /**
   * MemberID ist the id of the member to remove from this project
   *
   * @generated from field: string member_id = 2;
   */
  memberId = "";

  constructor(data?: PartialMessage<ProjectServiceRemoveMemberRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceRemoveMemberRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "member_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceRemoveMemberRequest {
    return new ProjectServiceRemoveMemberRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceRemoveMemberRequest {
    return new ProjectServiceRemoveMemberRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceRemoveMemberRequest {
    return new ProjectServiceRemoveMemberRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceRemoveMemberRequest | PlainMessage<ProjectServiceRemoveMemberRequest> | undefined, b: ProjectServiceRemoveMemberRequest | PlainMessage<ProjectServiceRemoveMemberRequest> | undefined): boolean {
    return proto3.util.equals(ProjectServiceRemoveMemberRequest, a, b);
  }
}

/**
 * ProjectServiceRemoveMemberResponse is the response payload to a remove member request
 *
 * @generated from message api.v1.ProjectServiceRemoveMemberResponse
 */
export class ProjectServiceRemoveMemberResponse extends Message<ProjectServiceRemoveMemberResponse> {
  constructor(data?: PartialMessage<ProjectServiceRemoveMemberResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProjectServiceRemoveMemberResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectServiceRemoveMemberResponse {
    return new ProjectServiceRemoveMemberResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectServiceRemoveMemberResponse {
    return new ProjectServiceRemoveMemberResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectServiceRemoveMemberResponse {
    return new ProjectServiceRemoveMemberResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectServiceRemoveMemberResponse | PlainMessage<ProjectServiceRemoveMemberResponse> | undefined, b: ProjectServiceRemoveMemberResponse | PlainMessage<ProjectServiceRemoveMemberResponse> | undefined): boolean {
    return proto3.util.equals(ProjectServiceRemoveMemberResponse, a, b);
  }
}

