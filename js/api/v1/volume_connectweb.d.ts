import { SnapshotServiceDeleteRequest, SnapshotServiceDeleteResponse, SnapshotServiceGetRequest, SnapshotServiceGetResponse, SnapshotServiceListRequest, SnapshotServiceListResponse, VolumeServiceDeleteRequest, VolumeServiceDeleteResponse, VolumeServiceGetRequest, VolumeServiceGetResponse, VolumeServiceListRequest, VolumeServiceListResponse } from "./volume_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service api.v1.VolumeService
 */
export declare const VolumeService: {
    readonly typeName: "api.v1.VolumeService";
    readonly methods: {
        /**
         * @generated from rpc api.v1.VolumeService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof VolumeServiceGetRequest;
            readonly O: typeof VolumeServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.VolumeService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof VolumeServiceListRequest;
            readonly O: typeof VolumeServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.VolumeService.Delete
         */
        readonly delete: {
            readonly name: "Delete";
            readonly I: typeof VolumeServiceDeleteRequest;
            readonly O: typeof VolumeServiceDeleteResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
/**
 * @generated from service api.v1.SnapshotService
 */
export declare const SnapshotService: {
    readonly typeName: "api.v1.SnapshotService";
    readonly methods: {
        /**
         * @generated from rpc api.v1.SnapshotService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof SnapshotServiceGetRequest;
            readonly O: typeof SnapshotServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.SnapshotService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof SnapshotServiceListRequest;
            readonly O: typeof SnapshotServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.SnapshotService.Delete
         */
        readonly delete: {
            readonly name: "Delete";
            readonly I: typeof SnapshotServiceDeleteRequest;
            readonly O: typeof SnapshotServiceDeleteResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
