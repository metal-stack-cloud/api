import { SnapshotServiceDeleteRequest, SnapshotServiceDeleteResponse, SnapshotServiceGetRequest, SnapshotServiceGetResponse, SnapshotServiceListRequest, SnapshotServiceListResponse, VolumeServiceDeleteRequest, VolumeServiceDeleteResponse, VolumeServiceGetRequest, VolumeServiceGetResponse, VolumeServiceListRequest, VolumeServiceListResponse, VolumeServiceUpdateRequest, VolumeServiceUpdateResponse } from "./volume_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * VolumeService serves volume related functions
 *
 * @generated from service api.v1.VolumeService
 */
export declare const VolumeService: {
    readonly typeName: "api.v1.VolumeService";
    readonly methods: {
        /**
         * Get a volume
         *
         * @generated from rpc api.v1.VolumeService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof VolumeServiceGetRequest;
            readonly O: typeof VolumeServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * List the volumes
         *
         * @generated from rpc api.v1.VolumeService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof VolumeServiceListRequest;
            readonly O: typeof VolumeServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a volume
         *
         * @generated from rpc api.v1.VolumeService.Delete
         */
        readonly delete: {
            readonly name: "Delete";
            readonly I: typeof VolumeServiceDeleteRequest;
            readonly O: typeof VolumeServiceDeleteResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a volume
         *
         * @generated from rpc api.v1.VolumeService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof VolumeServiceUpdateRequest;
            readonly O: typeof VolumeServiceUpdateResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
/**
 * SnapshotService serves snapshot related functions
 *
 * @generated from service api.v1.SnapshotService
 */
export declare const SnapshotService: {
    readonly typeName: "api.v1.SnapshotService";
    readonly methods: {
        /**
         * Get a snapshot
         *
         * @generated from rpc api.v1.SnapshotService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof SnapshotServiceGetRequest;
            readonly O: typeof SnapshotServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * List snapshots
         *
         * @generated from rpc api.v1.SnapshotService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof SnapshotServiceListRequest;
            readonly O: typeof SnapshotServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a snapshot
         *
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
