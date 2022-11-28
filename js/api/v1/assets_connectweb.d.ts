import { AssetServiceListRequest, AssetServiceListResponse } from "./assets_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service api.v1.AssetService
 */
export declare const AssetService: {
    readonly typeName: "api.v1.AssetService";
    readonly methods: {
        /**
         * @generated from rpc api.v1.AssetService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof AssetServiceListRequest;
            readonly O: typeof AssetServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
