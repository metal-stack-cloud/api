// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file api/v1/machine.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { MachineServiceCreateRequest, MachineServiceCreateResponse, MachineServiceDeleteRequest, MachineServiceDeleteResponse, MachineServiceGetRequest, MachineServiceGetResponse, MachineServiceListRequest, MachineServiceListResponse } from "./machine_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * MachineService serves machine related functions
 *
 * @generated from service api.v1.MachineService
 */
export const MachineService = {
    typeName: "api.v1.MachineService",
    methods: {
        /**
         * Create a machine
         *
         * @generated from rpc api.v1.MachineService.Create
         */
        create: {
            name: "Create",
            I: MachineServiceCreateRequest,
            O: MachineServiceCreateResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Get a machine
         *
         * @generated from rpc api.v1.MachineService.Get
         */
        get: {
            name: "Get",
            I: MachineServiceGetRequest,
            O: MachineServiceGetResponse,
            kind: MethodKind.Unary,
        },
        /**
         * List machines
         *
         * @generated from rpc api.v1.MachineService.List
         */
        list: {
            name: "List",
            I: MachineServiceListRequest,
            O: MachineServiceListResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Delete a machine
         *
         * @generated from rpc api.v1.MachineService.Delete
         */
        delete: {
            name: "Delete",
            I: MachineServiceDeleteRequest,
            O: MachineServiceDeleteResponse,
            kind: MethodKind.Unary,
        },
    }
};
