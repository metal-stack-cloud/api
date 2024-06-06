// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file admin/v1/project.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ProjectServiceListRequest, ProjectServiceListResponse, ProjectServiceRemoveProjectRequest, ProjectServiceRemoveProjectResponse } from "./project_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * ProjectService serves project related functions
 *
 * @generated from service admin.v1.ProjectService
 */
export const ProjectService = {
  typeName: "admin.v1.ProjectService",
  methods: {
    /**
     * List projects based on various filter criteria
     *
     * @generated from rpc admin.v1.ProjectService.List
     */
    list: {
      name: "List",
      I: ProjectServiceListRequest,
      O: ProjectServiceListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Remove a member from a project
     *
     * @generated from rpc admin.v1.ProjectService.RemoveProject
     */
    removeProject: {
      name: "RemoveProject",
      I: ProjectServiceRemoveProjectRequest,
      O: ProjectServiceRemoveProjectResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

