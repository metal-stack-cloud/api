import { ClusterServiceCredentialsRequest, ClusterServiceCredentialsResponse, ClusterServiceGetRequest, ClusterServiceGetResponse, ClusterServiceListRequest, ClusterServiceListResponse } from "./cluster_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * ClusterService serves cluster related functions
 *
 * @generated from service admin.v1.ClusterService
 */
export declare const ClusterService: {
    readonly typeName: "admin.v1.ClusterService";
    readonly methods: {
        /**
         * Get a cluster
         *
         * @generated from rpc admin.v1.ClusterService.Get
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
         * @generated from rpc admin.v1.ClusterService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof ClusterServiceListRequest;
            readonly O: typeof ClusterServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Credentials of a cluster
         *
         * @generated from rpc admin.v1.ClusterService.Credentials
         */
        readonly credentials: {
            readonly name: "Credentials";
            readonly I: typeof ClusterServiceCredentialsRequest;
            readonly O: typeof ClusterServiceCredentialsResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
