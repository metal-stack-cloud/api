// @generated by protoc-gen-connect-es v1.3.0 with parameter "target=ts"
// @generated from file api/v1/project.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { ProjectServiceGetRequest, ProjectServiceGetResponse, ProjectServiceListRequest, ProjectServiceListResponse } from "./project_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * ProjectService serves project related functions
 *
 * @generated from service api.v1.ProjectService
 */
export const ProjectService = {
    typeName: "api.v1.ProjectService",
    methods: {
        /**
         * List all accessible projects
         *
         * @generated from rpc api.v1.ProjectService.List
         */
        list: {
            name: "List",
            I: ProjectServiceListRequest,
            O: ProjectServiceListResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Get a project
         *
         * @generated from rpc api.v1.ProjectService.Get
         */
        get: {
            name: "Get",
            I: ProjectServiceGetRequest,
            O: ProjectServiceGetResponse,
            kind: MethodKind.Unary,
        },
    }
};