import { ProjectServiceListRequest, ProjectServiceListResponse } from "./project_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * ProjectService serves project related functions
 *
 * @generated from service api.v1.ProjectService
 */
export declare const ProjectService: {
    readonly typeName: "api.v1.ProjectService";
    readonly methods: {
        /**
         * List all accessible projects
         *
         * @generated from rpc api.v1.ProjectService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof ProjectServiceListRequest;
            readonly O: typeof ProjectServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
