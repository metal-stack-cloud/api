// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file api/v1/cluster.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { ClusterServiceCreateRequest, ClusterServiceCreateResponse, ClusterServiceDeleteRequest, ClusterServiceDeleteResponse, ClusterServiceGetCredentialsRequest, ClusterServiceGetCredentialsResponse, ClusterServiceGetRequest, ClusterServiceGetResponse, ClusterServiceListRequest, ClusterServiceListResponse, ClusterServiceOperateRequest, ClusterServiceOperateResponse, ClusterServiceUpdateRequest, ClusterServiceUpdateResponse, ClusterServiceWatchStatusRequest, ClusterServiceWatchStatusResponse } from "./cluster_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * ClusterService serves kubernetes cluster related functions
 *
 * @generated from service api.v1.ClusterService
 */
export const ClusterService = {
    typeName: "api.v1.ClusterService",
    methods: {
        /**
         * Create a cluster
         *
         * @generated from rpc api.v1.ClusterService.Create
         */
        create: {
            name: "Create",
            I: ClusterServiceCreateRequest,
            O: ClusterServiceCreateResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Get a cluster
         *
         * @generated from rpc api.v1.ClusterService.Get
         */
        get: {
            name: "Get",
            I: ClusterServiceGetRequest,
            O: ClusterServiceGetResponse,
            kind: MethodKind.Unary,
        },
        /**
         * List clusters
         *
         * @generated from rpc api.v1.ClusterService.List
         */
        list: {
            name: "List",
            I: ClusterServiceListRequest,
            O: ClusterServiceListResponse,
            kind: MethodKind.Unary,
        },
        /**
         * WatchStatus of a cluster
         *
         * @generated from rpc api.v1.ClusterService.WatchStatus
         */
        watchStatus: {
            name: "WatchStatus",
            I: ClusterServiceWatchStatusRequest,
            O: ClusterServiceWatchStatusResponse,
            kind: MethodKind.ServerStreaming,
        },
        /**
         * Delete a cluster
         *
         * @generated from rpc api.v1.ClusterService.Delete
         */
        delete: {
            name: "Delete",
            I: ClusterServiceDeleteRequest,
            O: ClusterServiceDeleteResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Update a cluster
         *
         * @generated from rpc api.v1.ClusterService.Update
         */
        update: {
            name: "Update",
            I: ClusterServiceUpdateRequest,
            O: ClusterServiceUpdateResponse,
            kind: MethodKind.Unary,
        },
        /**
         * GetCredentials of a cluster
         *
         * @generated from rpc api.v1.ClusterService.GetCredentials
         */
        getCredentials: {
            name: "GetCredentials",
            I: ClusterServiceGetCredentialsRequest,
            O: ClusterServiceGetCredentialsResponse,
            kind: MethodKind.Unary,
        },
        /**
         * Operate on a cluster
         *
         * @generated from rpc api.v1.ClusterService.Operate
         */
        operate: {
            name: "Operate",
            I: ClusterServiceOperateRequest,
            O: ClusterServiceOperateResponse,
            kind: MethodKind.Unary,
        },
    }
};
