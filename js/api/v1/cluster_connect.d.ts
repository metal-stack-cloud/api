import { ClusterServiceCreateRequest, ClusterServiceCreateResponse, ClusterServiceDeleteRequest, ClusterServiceDeleteResponse, ClusterServiceGetCredentialsRequest, ClusterServiceGetCredentialsResponse, ClusterServiceGetRequest, ClusterServiceGetResponse, ClusterServiceListRequest, ClusterServiceListResponse, ClusterServiceOperateRequest, ClusterServiceOperateResponse, ClusterServiceUpdateRequest, ClusterServiceUpdateResponse, ClusterServiceWatchStatusRequest, ClusterServiceWatchStatusResponse } from "./cluster_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * ClusterService serves kubernetes cluster related functions
 *
 * @generated from service api.v1.ClusterService
 */
export declare const ClusterService: {
    readonly typeName: "api.v1.ClusterService";
    readonly methods: {
        /**
         * Create a cluster
         *
         * @generated from rpc api.v1.ClusterService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ClusterServiceCreateRequest;
            readonly O: typeof ClusterServiceCreateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get a cluster
         *
         * @generated from rpc api.v1.ClusterService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof ClusterServiceGetRequest;
            readonly O: typeof ClusterServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * List clusters
         *
         * @generated from rpc api.v1.ClusterService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof ClusterServiceListRequest;
            readonly O: typeof ClusterServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * WatchStatus of a cluster
         *
         * @generated from rpc api.v1.ClusterService.WatchStatus
         */
        readonly watchStatus: {
            readonly name: "WatchStatus";
            readonly I: typeof ClusterServiceWatchStatusRequest;
            readonly O: typeof ClusterServiceWatchStatusResponse;
            readonly kind: MethodKind.ServerStreaming;
        };
        /**
         * Delete a cluster
         *
         * @generated from rpc api.v1.ClusterService.Delete
         */
        readonly delete: {
            readonly name: "Delete";
            readonly I: typeof ClusterServiceDeleteRequest;
            readonly O: typeof ClusterServiceDeleteResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a cluster
         *
         * @generated from rpc api.v1.ClusterService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof ClusterServiceUpdateRequest;
            readonly O: typeof ClusterServiceUpdateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * GetCredentials of a cluster
         *
         * @generated from rpc api.v1.ClusterService.GetCredentials
         */
        readonly getCredentials: {
            readonly name: "GetCredentials";
            readonly I: typeof ClusterServiceGetCredentialsRequest;
            readonly O: typeof ClusterServiceGetCredentialsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Operate on a cluster
         *
         * @generated from rpc api.v1.ClusterService.Operate
         */
        readonly operate: {
            readonly name: "Operate";
            readonly I: typeof ClusterServiceOperateRequest;
            readonly O: typeof ClusterServiceOperateResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
