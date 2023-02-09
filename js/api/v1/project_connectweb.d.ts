import { ProjectServiceWatchRevisionRequest, ProjectServiceWatchRevisionResponse } from "./project_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * ProjectService provides services which are project related
 *
 * @generated from service api.v1.ProjectService
 */
export declare const ProjectService: {
    readonly typeName: "api.v1.ProjectService";
    readonly methods: {
        /**
         * WatchRevision can be used to watch for changes on project scoped resources
         * this might be useful to update a view only if necessary.
         *
         * @generated from rpc api.v1.ProjectService.WatchRevision
         */
        readonly watchRevision: {
            readonly name: "WatchRevision";
            readonly I: typeof ProjectServiceWatchRevisionRequest;
            readonly O: typeof ProjectServiceWatchRevisionResponse;
            readonly kind: MethodKind.ServerStreaming;
        };
    };
};
