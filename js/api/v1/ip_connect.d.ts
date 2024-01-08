import { IPServiceAllocateRequest, IPServiceAllocateResponse, IPServiceDeleteRequest, IPServiceDeleteResponse, IPServiceGetRequest, IPServiceGetResponse, IPServiceListRequest, IPServiceListResponse, IPServiceUpdateRequest, IPServiceUpdateResponse } from "./ip_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * IPService serves ip address related functions
 *
 * @generated from service api.v1.IPService
 */
export declare const IPService: {
    readonly typeName: "api.v1.IPService";
    readonly methods: {
        /**
         * Get a ip
         *
         * @generated from rpc api.v1.IPService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof IPServiceGetRequest;
            readonly O: typeof IPServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Allocate a ip
         *
         * @generated from rpc api.v1.IPService.Allocate
         */
        readonly allocate: {
            readonly name: "Allocate";
            readonly I: typeof IPServiceAllocateRequest;
            readonly O: typeof IPServiceAllocateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a ip
         *
         * @generated from rpc api.v1.IPService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof IPServiceUpdateRequest;
            readonly O: typeof IPServiceUpdateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * List all ips
         *
         * @generated from rpc api.v1.IPService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof IPServiceListRequest;
            readonly O: typeof IPServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a ip
         *
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
