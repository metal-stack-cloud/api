import { MethodServiceListRequest, MethodServiceListResponse } from "./methods_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service api.v1.MethodService
 */
export declare const MethodService: {
    readonly typeName: "api.v1.MethodService";
    readonly methods: {
        /**
         * @generated from rpc api.v1.MethodService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof MethodServiceListRequest;
            readonly O: typeof MethodServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
