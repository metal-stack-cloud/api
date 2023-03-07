import { StorageServiceClusterInfoRequest, StorageServiceClusterInfoResponse, StorageServiceListSnapshotsRequest, StorageServiceListSnapshotsResponse, StorageServiceListVolumesRequest, StorageServiceListVolumesResponse } from "./storage_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service admin.v1.StorageService
 */
export declare const StorageService: {
    readonly typeName: "admin.v1.StorageService";
    readonly methods: {
        /**
         * @generated from rpc admin.v1.StorageService.ClusterInfo
         */
        readonly clusterInfo: {
            readonly name: "ClusterInfo";
            readonly I: typeof StorageServiceClusterInfoRequest;
            readonly O: typeof StorageServiceClusterInfoResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc admin.v1.StorageService.ListVolumes
         */
        readonly listVolumes: {
            readonly name: "ListVolumes";
            readonly I: typeof StorageServiceListVolumesRequest;
            readonly O: typeof StorageServiceListVolumesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc admin.v1.StorageService.ListSnapshots
         */
        readonly listSnapshots: {
            readonly name: "ListSnapshots";
            readonly I: typeof StorageServiceListSnapshotsRequest;
            readonly O: typeof StorageServiceListSnapshotsResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
