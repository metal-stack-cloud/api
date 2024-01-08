import { MethodServiceListRequest, MethodServiceListResponse, MethodServiceTokenScopedListRequest, MethodServiceTokenScopedListResponse } from "./methods_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * MethodService serves method related functions
 * methods are functions in services
 *
 * @generated from service api.v1.MethodService
 */
export declare const MethodService: {
    readonly typeName: "api.v1.MethodService";
    readonly methods: {
        /**
         * List all public visible methods
         *
         * @generated from rpc api.v1.MethodService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof MethodServiceListRequest;
            readonly O: typeof MethodServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * TokenScopedList all methods callable with the token present in the request
         *
         * @generated from rpc api.v1.MethodService.TokenScopedList
         */
        readonly tokenScopedList: {
            readonly name: "TokenScopedList";
            readonly I: typeof MethodServiceTokenScopedListRequest;
            readonly O: typeof MethodServiceTokenScopedListResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
