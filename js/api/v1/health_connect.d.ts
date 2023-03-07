import { HealthServiceGetRequest, HealthServiceGetResponse } from "./health_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service api.v1.HealthService
 */
export declare const HealthService: {
    readonly typeName: "api.v1.HealthService";
    readonly methods: {
        /**
         * @generated from rpc api.v1.HealthService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof HealthServiceGetRequest;
            readonly O: typeof HealthServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
