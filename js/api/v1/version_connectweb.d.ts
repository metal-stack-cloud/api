import { VersionServiceGetRequest, VersionServiceGetResponse } from "./version_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service api.v1.VersionService
 */
export declare const VersionService: {
    readonly typeName: "api.v1.VersionService";
    readonly methods: {
        /**
         * @generated from rpc api.v1.VersionService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof VersionServiceGetRequest;
            readonly O: typeof VersionServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
