import { ClusterServiceCredentialsRequest, ClusterServiceCredentialsResponse, ClusterServiceGetRequest, ClusterServiceGetResponse, ClusterServiceListRequest, ClusterServiceListResponse, ClusterServiceOperateRequest, ClusterServiceOperateResponse } from "./cluster_pb.js";
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
         * @generated from rpc admin.v1.ClusterService.Credentials
         */
        readonly credentials: {
            readonly name: "Credentials";
            readonly I: typeof ClusterServiceCredentialsRequest;
            readonly O: typeof ClusterServiceCredentialsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc admin.v1.ClusterService.Operate
         */
        readonly operate: {
            readonly name: "Operate";
            readonly I: typeof ClusterServiceOperateRequest;
            readonly O: typeof ClusterServiceOperateResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
