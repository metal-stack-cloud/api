import { StatusServiceGetRequest, StatusServiceGetResponse } from "./status_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service status.v1.StatusService
 */
export declare const StatusService: {
    readonly typeName: "status.v1.StatusService";
    readonly methods: {
        /**
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
