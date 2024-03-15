// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file api/v1/project.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { ProjectRole } from "./common_pb.js";
/**
 * Project defines a group of resources belonging to a tenant
 * a tenant can have multiple projects
 *
 * @generated from message api.v1.Project
 */
export class Project extends Message {
    constructor(data) {
        super();
        /**
         * Uuid of this project
         *
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * Name of this project must be unique per tenant
         *
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * Description of this project
         *
         * @generated from field: string description = 3;
         */
        this.description = "";
        /**
         * Tenant this project belongs to
         *
         * @generated from field: string tenant = 4;
         */
        this.tenant = "";
        /**
         * ProjectMembers in this project
         *
         * @generated from field: repeated api.v1.ProjectMember project_members = 5;
         */
        this.projectMembers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Project().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Project().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Project().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Project, a, b);
    }
}
Project.runtime = proto3;
Project.typeName = "api.v1.Project";
Project.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "project_members", kind: "message", T: ProjectMember, repeated: true },
    { no: 10, name: "created_at", kind: "message", T: Timestamp },
    { no: 11, name: "updated_at", kind: "message", T: Timestamp },
]);
/**
 * ProjectMember defines a user that participates at a project
 *
 * @generated from message api.v1.ProjectMember
 */
export class ProjectMember extends Message {
    constructor(data) {
        super();
        /**
         * Id is the user id of the member
         *
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * Role is the role of the member
         *
         * @generated from field: api.v1.ProjectRole role = 2;
         */
        this.role = ProjectRole.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectMember().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectMember().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectMember().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectMember, a, b);
    }
}
ProjectMember.runtime = proto3;
ProjectMember.typeName = "api.v1.ProjectMember";
ProjectMember.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "role", kind: "enum", T: proto3.getEnumType(ProjectRole) },
    { no: 10, name: "created_at", kind: "message", T: Timestamp },
]);
/**
 * ProjectInvite defines invite to project
 *
 * @generated from message api.v1.ProjectInvite
 */
export class ProjectInvite extends Message {
    constructor(data) {
        super();
        /**
         * Secret is the secret part of the invite, typically part of the url
         *
         * @generated from field: string secret = 1;
         */
        this.secret = "";
        /**
         * Project is the project id for which this invite was created
         *
         * @generated from field: string project = 2;
         */
        this.project = "";
        /**
         * Role is the role in this project the user will get after accepting the invitation
         *
         * @generated from field: api.v1.ProjectRole role = 3;
         */
        this.role = ProjectRole.UNSPECIFIED;
        /**
         * Joined is false as long as a user has not accepted the invite
         *
         * @generated from field: bool joined = 4;
         */
        this.joined = false;
        /**
         * ProjectName is the project name for which this invite was created
         *
         * @generated from field: string project_name = 5;
         */
        this.projectName = "";
        /**
         * Tenant is the login of tenant who invites to join this project
         *
         * @generated from field: string tenant = 6;
         */
        this.tenant = "";
        /**
         * TenantName is the name of tenant who invites to join this project
         *
         * @generated from field: string tenant_name = 7;
         */
        this.tenantName = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectInvite().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectInvite().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectInvite().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectInvite, a, b);
    }
}
ProjectInvite.runtime = proto3;
ProjectInvite.typeName = "api.v1.ProjectInvite";
ProjectInvite.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "role", kind: "enum", T: proto3.getEnumType(ProjectRole) },
    { no: 4, name: "joined", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "project_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "tenant_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "expires_at", kind: "message", T: Timestamp },
    { no: 11, name: "joined_at", kind: "message", T: Timestamp },
]);
/**
 * ProjectServiceListRequest is the request payload to list all projects
 *
 * @generated from message api.v1.ProjectServiceListRequest
 */
export class ProjectServiceListRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceListRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceListRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceListRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceListRequest, a, b);
    }
}
ProjectServiceListRequest.runtime = proto3;
ProjectServiceListRequest.typeName = "api.v1.ProjectServiceListRequest";
ProjectServiceListRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * ProjectServiceListResponse is the response payload to list all projects
 *
 * @generated from message api.v1.ProjectServiceListResponse
 */
export class ProjectServiceListResponse extends Message {
    constructor(data) {
        super();
        /**
         * Projects is a list of all your projects
         *
         * @generated from field: repeated api.v1.Project projects = 1;
         */
        this.projects = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceListResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceListResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceListResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceListResponse, a, b);
    }
}
ProjectServiceListResponse.runtime = proto3;
ProjectServiceListResponse.typeName = "api.v1.ProjectServiceListResponse";
ProjectServiceListResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "projects", kind: "message", T: Project, repeated: true },
]);
/**
 * ProjectServiceGetRequest is the request payload to get a project
 *
 * @generated from message api.v1.ProjectServiceGetRequest
 */
export class ProjectServiceGetRequest extends Message {
    constructor(data) {
        super();
        /**
         * Project is the uuid of the project to get
         *
         * @generated from field: string project = 1;
         */
        this.project = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceGetRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceGetRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceGetRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceGetRequest, a, b);
    }
}
ProjectServiceGetRequest.runtime = proto3;
ProjectServiceGetRequest.typeName = "api.v1.ProjectServiceGetRequest";
ProjectServiceGetRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ProjectServiceGetResponse is the response payload to get a projects
 *
 * @generated from message api.v1.ProjectServiceGetResponse
 */
export class ProjectServiceGetResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceGetResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceGetResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceGetResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceGetResponse, a, b);
    }
}
ProjectServiceGetResponse.runtime = proto3;
ProjectServiceGetResponse.typeName = "api.v1.ProjectServiceGetResponse";
ProjectServiceGetResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "message", T: Project },
]);
/**
 * ProjectServiceCreateRequest is the request payload to Create a project
 *
 * @generated from message api.v1.ProjectServiceCreateRequest
 */
export class ProjectServiceCreateRequest extends Message {
    constructor(data) {
        super();
        /**
         * Login is the tenant of this project
         * TODO: is login really a good name?
         *
         * @generated from field: string login = 1;
         */
        this.login = "";
        /**
         * Name of this project, unique per tenant
         *
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * Description of this project
         *
         * @generated from field: string description = 3;
         */
        this.description = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceCreateRequest, a, b);
    }
}
ProjectServiceCreateRequest.runtime = proto3;
ProjectServiceCreateRequest.typeName = "api.v1.ProjectServiceCreateRequest";
ProjectServiceCreateRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ProjectServiceCreateResponse is the response payload of creation of a project
 *
 * @generated from message api.v1.ProjectServiceCreateResponse
 */
export class ProjectServiceCreateResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceCreateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceCreateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceCreateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceCreateResponse, a, b);
    }
}
ProjectServiceCreateResponse.runtime = proto3;
ProjectServiceCreateResponse.typeName = "api.v1.ProjectServiceCreateResponse";
ProjectServiceCreateResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "message", T: Project },
]);
/**
 * ProjectServiceDeleteRequest is the request payload to delete a project
 *
 * @generated from message api.v1.ProjectServiceDeleteRequest
 */
export class ProjectServiceDeleteRequest extends Message {
    constructor(data) {
        super();
        /**
         * Project is the uuid of the project to get
         *
         * @generated from field: string project = 1;
         */
        this.project = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceDeleteRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceDeleteRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceDeleteRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceDeleteRequest, a, b);
    }
}
ProjectServiceDeleteRequest.runtime = proto3;
ProjectServiceDeleteRequest.typeName = "api.v1.ProjectServiceDeleteRequest";
ProjectServiceDeleteRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ProjectServiceDeleteResponse is the response payload to delete a project
 *
 * @generated from message api.v1.ProjectServiceDeleteResponse
 */
export class ProjectServiceDeleteResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceDeleteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceDeleteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceDeleteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceDeleteResponse, a, b);
    }
}
ProjectServiceDeleteResponse.runtime = proto3;
ProjectServiceDeleteResponse.typeName = "api.v1.ProjectServiceDeleteResponse";
ProjectServiceDeleteResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "message", T: Project },
]);
/**
 * ProjectServiceUpdateRequest is the request payload to update a project
 *
 * @generated from message api.v1.ProjectServiceUpdateRequest
 */
export class ProjectServiceUpdateRequest extends Message {
    constructor(data) {
        super();
        /**
         * Project is the uuid of the project to get
         *
         * @generated from field: string project = 1;
         */
        this.project = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceUpdateRequest, a, b);
    }
}
ProjectServiceUpdateRequest.runtime = proto3;
ProjectServiceUpdateRequest.typeName = "api.v1.ProjectServiceUpdateRequest";
ProjectServiceUpdateRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * ProjectServiceUpdateResponse is the response payload to update a project
 *
 * @generated from message api.v1.ProjectServiceUpdateResponse
 */
export class ProjectServiceUpdateResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceUpdateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceUpdateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceUpdateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceUpdateResponse, a, b);
    }
}
ProjectServiceUpdateResponse.runtime = proto3;
ProjectServiceUpdateResponse.typeName = "api.v1.ProjectServiceUpdateResponse";
ProjectServiceUpdateResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "message", T: Project },
]);
/**
 * ProjectServiceInviteRequest is used to invite a member to a project
 *
 * @generated from message api.v1.ProjectServiceInviteRequest
 */
export class ProjectServiceInviteRequest extends Message {
    constructor(data) {
        super();
        /**
         * Project is the uuid of the project
         *
         * @generated from field: string project = 1;
         */
        this.project = "";
        /**
         * Role of this user in this project
         *
         * @generated from field: api.v1.ProjectRole role = 3;
         */
        this.role = ProjectRole.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceInviteRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceInviteRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceInviteRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceInviteRequest, a, b);
    }
}
ProjectServiceInviteRequest.runtime = proto3;
ProjectServiceInviteRequest.typeName = "api.v1.ProjectServiceInviteRequest";
ProjectServiceInviteRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "role", kind: "enum", T: proto3.getEnumType(ProjectRole) },
]);
/**
 * ProjectServiceInviteRequest is the response payload to a invite member request
 *
 * @generated from message api.v1.ProjectServiceInviteResponse
 */
export class ProjectServiceInviteResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceInviteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceInviteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceInviteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceInviteResponse, a, b);
    }
}
ProjectServiceInviteResponse.runtime = proto3;
ProjectServiceInviteResponse.typeName = "api.v1.ProjectServiceInviteResponse";
ProjectServiceInviteResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "invite", kind: "message", T: ProjectInvite },
]);
/**
 * ProjectServiceInvitesListRequest is the request payload to a list invites request
 *
 * @generated from message api.v1.ProjectServiceInvitesListRequest
 */
export class ProjectServiceInvitesListRequest extends Message {
    constructor(data) {
        super();
        /**
         * Project is the uuid of the project
         *
         * @generated from field: string project = 1;
         */
        this.project = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceInvitesListRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceInvitesListRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceInvitesListRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceInvitesListRequest, a, b);
    }
}
ProjectServiceInvitesListRequest.runtime = proto3;
ProjectServiceInvitesListRequest.typeName = "api.v1.ProjectServiceInvitesListRequest";
ProjectServiceInvitesListRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ProjectServiceInvitesListResponse is the response payload to a list invites request
 *
 * @generated from message api.v1.ProjectServiceInvitesListResponse
 */
export class ProjectServiceInvitesListResponse extends Message {
    constructor(data) {
        super();
        /**
         * Invites not already accepted the invitation to this project
         *
         * @generated from field: repeated api.v1.ProjectInvite invites = 1;
         */
        this.invites = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceInvitesListResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceInvitesListResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceInvitesListResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceInvitesListResponse, a, b);
    }
}
ProjectServiceInvitesListResponse.runtime = proto3;
ProjectServiceInvitesListResponse.typeName = "api.v1.ProjectServiceInvitesListResponse";
ProjectServiceInvitesListResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "invites", kind: "message", T: ProjectInvite, repeated: true },
]);
/**
 * ProjectServiceInviteGetRequest is the request payload to get a invite
 *
 * @generated from message api.v1.ProjectServiceInviteGetRequest
 */
export class ProjectServiceInviteGetRequest extends Message {
    constructor(data) {
        super();
        /**
         * Secret of the invite to list
         *
         * @generated from field: string secret = 1;
         */
        this.secret = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceInviteGetRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceInviteGetRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceInviteGetRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceInviteGetRequest, a, b);
    }
}
ProjectServiceInviteGetRequest.runtime = proto3;
ProjectServiceInviteGetRequest.typeName = "api.v1.ProjectServiceInviteGetRequest";
ProjectServiceInviteGetRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ProjectServiceInviteGetResponse is the response payload to a get invite request
 *
 * @generated from message api.v1.ProjectServiceInviteGetResponse
 */
export class ProjectServiceInviteGetResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceInviteGetResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceInviteGetResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceInviteGetResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceInviteGetResponse, a, b);
    }
}
ProjectServiceInviteGetResponse.runtime = proto3;
ProjectServiceInviteGetResponse.typeName = "api.v1.ProjectServiceInviteGetResponse";
ProjectServiceInviteGetResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "invite", kind: "message", T: ProjectInvite },
]);
/**
 * ProjectServiceRemoveMemberRequest is used to remove a member from a project
 *
 * @generated from message api.v1.ProjectServiceRemoveMemberRequest
 */
export class ProjectServiceRemoveMemberRequest extends Message {
    constructor(data) {
        super();
        /**
         * Project is the uuid of the project
         *
         * @generated from field: string project = 1;
         */
        this.project = "";
        /**
         * MemberID is the id of the member to remove from this project
         *
         * @generated from field: string member_id = 2;
         */
        this.memberId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceRemoveMemberRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceRemoveMemberRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceRemoveMemberRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceRemoveMemberRequest, a, b);
    }
}
ProjectServiceRemoveMemberRequest.runtime = proto3;
ProjectServiceRemoveMemberRequest.typeName = "api.v1.ProjectServiceRemoveMemberRequest";
ProjectServiceRemoveMemberRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "member_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ProjectServiceRemoveMemberResponse is the response payload to a remove member request
 *
 * @generated from message api.v1.ProjectServiceRemoveMemberResponse
 */
export class ProjectServiceRemoveMemberResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceRemoveMemberResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceRemoveMemberResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceRemoveMemberResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceRemoveMemberResponse, a, b);
    }
}
ProjectServiceRemoveMemberResponse.runtime = proto3;
ProjectServiceRemoveMemberResponse.typeName = "api.v1.ProjectServiceRemoveMemberResponse";
ProjectServiceRemoveMemberResponse.fields = proto3.util.newFieldList(() => []);
/**
 * ProjectServiceUpdateMemberRequest is used to update a member of a project
 *
 * @generated from message api.v1.ProjectServiceUpdateMemberRequest
 */
export class ProjectServiceUpdateMemberRequest extends Message {
    constructor(data) {
        super();
        /**
         * Project is the uuid of the project
         *
         * @generated from field: string project = 1;
         */
        this.project = "";
        /**
         * MemberID is the id of the member to remove from this project
         *
         * @generated from field: string member_id = 2;
         */
        this.memberId = "";
        /**
         * Role is the role in this project the user will get after the update
         *
         * @generated from field: api.v1.ProjectRole role = 3;
         */
        this.role = ProjectRole.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceUpdateMemberRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceUpdateMemberRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceUpdateMemberRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceUpdateMemberRequest, a, b);
    }
}
ProjectServiceUpdateMemberRequest.runtime = proto3;
ProjectServiceUpdateMemberRequest.typeName = "api.v1.ProjectServiceUpdateMemberRequest";
ProjectServiceUpdateMemberRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "member_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "role", kind: "enum", T: proto3.getEnumType(ProjectRole) },
]);
/**
 * ProjectServiceUpdateMemberResponse is the response payload to a update member request
 *
 * @generated from message api.v1.ProjectServiceUpdateMemberResponse
 */
export class ProjectServiceUpdateMemberResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceUpdateMemberResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceUpdateMemberResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceUpdateMemberResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceUpdateMemberResponse, a, b);
    }
}
ProjectServiceUpdateMemberResponse.runtime = proto3;
ProjectServiceUpdateMemberResponse.typeName = "api.v1.ProjectServiceUpdateMemberResponse";
ProjectServiceUpdateMemberResponse.fields = proto3.util.newFieldList(() => [
    { no: 5, name: "project_member", kind: "message", T: ProjectMember },
]);
/**
 * ProjectServiceInviteAcceptRequest is the request payload to a accept invite request
 *
 * @generated from message api.v1.ProjectServiceInviteAcceptRequest
 */
export class ProjectServiceInviteAcceptRequest extends Message {
    constructor(data) {
        super();
        /**
         * Secret is the invitation secret part of the invitation url
         *
         * @generated from field: string secret = 1;
         */
        this.secret = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceInviteAcceptRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceInviteAcceptRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceInviteAcceptRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceInviteAcceptRequest, a, b);
    }
}
ProjectServiceInviteAcceptRequest.runtime = proto3;
ProjectServiceInviteAcceptRequest.typeName = "api.v1.ProjectServiceInviteAcceptRequest";
ProjectServiceInviteAcceptRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ProjectServiceInvitesListResponse is the response payload to a accept invite request
 *
 * @generated from message api.v1.ProjectServiceInviteAcceptResponse
 */
export class ProjectServiceInviteAcceptResponse extends Message {
    constructor(data) {
        super();
        /**
         * Project ID of the project joined
         *
         * @generated from field: string project = 1;
         */
        this.project = "";
        /**
         * ProjectName if the project joined
         *
         * @generated from field: string project_name = 2;
         */
        this.projectName = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceInviteAcceptResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceInviteAcceptResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceInviteAcceptResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceInviteAcceptResponse, a, b);
    }
}
ProjectServiceInviteAcceptResponse.runtime = proto3;
ProjectServiceInviteAcceptResponse.typeName = "api.v1.ProjectServiceInviteAcceptResponse";
ProjectServiceInviteAcceptResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ProjectServiceInviteDeleteRequest is the request payload to a delete invite
 *
 * @generated from message api.v1.ProjectServiceInviteDeleteRequest
 */
export class ProjectServiceInviteDeleteRequest extends Message {
    constructor(data) {
        super();
        /**
         * Project is the uuid of the project
         *
         * @generated from field: string project = 1;
         */
        this.project = "";
        /**
         * Secret of the invite to delete
         *
         * @generated from field: string secret = 2;
         */
        this.secret = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceInviteDeleteRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceInviteDeleteRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceInviteDeleteRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceInviteDeleteRequest, a, b);
    }
}
ProjectServiceInviteDeleteRequest.runtime = proto3;
ProjectServiceInviteDeleteRequest.typeName = "api.v1.ProjectServiceInviteDeleteRequest";
ProjectServiceInviteDeleteRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ProjectServiceInviteDeleteResponse is the response payload of a delete invite request
 *
 * @generated from message api.v1.ProjectServiceInviteDeleteResponse
 */
export class ProjectServiceInviteDeleteResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ProjectServiceInviteDeleteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ProjectServiceInviteDeleteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ProjectServiceInviteDeleteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ProjectServiceInviteDeleteResponse, a, b);
    }
}
ProjectServiceInviteDeleteResponse.runtime = proto3;
ProjectServiceInviteDeleteResponse.typeName = "api.v1.ProjectServiceInviteDeleteResponse";
ProjectServiceInviteDeleteResponse.fields = proto3.util.newFieldList(() => []);
