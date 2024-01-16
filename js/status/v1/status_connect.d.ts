import { StatusServiceGetRequest, StatusServiceGetResponse } from "./status_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * StatusService serves status related functions
 * this service is used as backend for the status dashboard
 *
 * @generated from service status.v1.StatusService
 */
export declare const StatusService: {
    readonly typeName: "status.v1.StatusService";
    readonly methods: {
        /**
         * Get the system status
         *
         * @generated from rpc status.v1.StatusService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof StatusServiceGetRequest;
            readonly O: typeof StatusServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
