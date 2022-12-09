import { IPServiceAllocateRequest, IPServiceAllocateResponse, IPServiceDeleteRequest, IPServiceDeleteResponse, IPServiceGetRequest, IPServiceGetResponse, IPServiceListRequest, IPServiceListResponse, IPServiceStaticRequest, IPServiceStaticResponse } from "./ip_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service api.v1.IPService
 */
export declare const IPService: {
    readonly typeName: "api.v1.IPService";
    readonly methods: {
        /**
         * @generated from rpc api.v1.IPService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof IPServiceGetRequest;
            readonly O: typeof IPServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.IPService.Allocate
         */
        readonly allocate: {
            readonly name: "Allocate";
            readonly I: typeof IPServiceAllocateRequest;
            readonly O: typeof IPServiceAllocateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.IPService.Static
         */
        readonly static: {
            readonly name: "Static";
            readonly I: typeof IPServiceStaticRequest;
            readonly O: typeof IPServiceStaticResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.IPService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof IPServiceListRequest;
            readonly O: typeof IPServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.IPService.Delete
         */
        readonly delete: {
            readonly name: "Delete";
            readonly I: typeof IPServiceDeleteRequest;
            readonly O: typeof IPServiceDeleteResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
