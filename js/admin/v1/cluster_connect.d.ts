import { ClusterServiceGetCredentialsRequest, ClusterServiceGetCredentialsResponse, ClusterServiceGetRequest, ClusterServiceGetResponse, ClusterServiceListRequest, ClusterServiceListResponse } from "./cluster_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service admin.v1.ClusterService
 */
export declare const ClusterService: {
    readonly typeName: "admin.v1.ClusterService";
    readonly methods: {
        /**
         * @generated from rpc admin.v1.ClusterService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof ClusterServiceGetRequest;
            readonly O: typeof ClusterServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc admin.v1.ClusterService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof ClusterServiceListRequest;
            readonly O: typeof ClusterServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc admin.v1.ClusterService.GetCredentials
         */
        readonly getCredentials: {
            readonly name: "GetCredentials";
            readonly I: typeof ClusterServiceGetCredentialsRequest;
            readonly O: typeof ClusterServiceGetCredentialsResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
