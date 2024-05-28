import { MachineServiceCreateRequest, MachineServiceCreateResponse, MachineServiceDeleteRequest, MachineServiceDeleteResponse, MachineServiceGetRequest, MachineServiceGetResponse, MachineServiceListRequest, MachineServiceListResponse } from "./machine_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * MachineService serves machine related functions
 *
 * @generated from service api.v1.MachineService
 */
export declare const MachineService: {
    readonly typeName: "api.v1.MachineService";
    readonly methods: {
        /**
         * Create a machine
         *
         * @generated from rpc api.v1.MachineService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof MachineServiceCreateRequest;
            readonly O: typeof MachineServiceCreateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get a machine
         *
         * @generated from rpc api.v1.MachineService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof MachineServiceGetRequest;
            readonly O: typeof MachineServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * List machines
         *
         * @generated from rpc api.v1.MachineService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof MachineServiceListRequest;
            readonly O: typeof MachineServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a machine
         *
         * @generated from rpc api.v1.MachineService.Delete
         */
        readonly delete: {
            readonly name: "Delete";
            readonly I: typeof MachineServiceDeleteRequest;
            readonly O: typeof MachineServiceDeleteResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
