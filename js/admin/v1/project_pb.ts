// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file admin/v1/project.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Paging } from "../../api/v1/common_pb.js";
import { Project } from "../../api/v1/project_pb.js";

/**
 * ProjectServiceListRequest is the request payload for the project list request
 *
 * @generated from message admin.v1.ProjectServiceListRequest
 */
export class ProjectServiceListRequest extends Message<ProjectServiceListRequest> {
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
  annotations: { [key: string]: string } = {};

  constructor(data?: PartialMessage<ProjectServiceListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.ProjectServiceListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "paging", kind: "message", T: Paging },
    { no: 2, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "annotations", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
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
 * ProjectServiceListResponse is the response payload for the project list request
 *
 * @generated from message admin.v1.ProjectServiceListResponse
 */
export class ProjectServiceListResponse extends Message<ProjectServiceListResponse> {
  /**
   * Projects is the list of projects that match the filters
   *
   * @generated from field: repeated api.v1.Project projects = 1;
   */
  projects: Project[] = [];

  /**
   * NextPage is used for pagination, returns the next page to be fetched and must then be provided in the list request.
   *
   * @generated from field: optional uint64 next_page = 2;
   */
  nextPage?: bigint;

  constructor(data?: PartialMessage<ProjectServiceListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.ProjectServiceListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "projects", kind: "message", T: Project, repeated: true },
    { no: 2, name: "next_page", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
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
