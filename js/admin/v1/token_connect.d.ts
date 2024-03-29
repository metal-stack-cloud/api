import { TokenServiceListRequest, TokenServiceListResponse, TokenServiceRevokeRequest, TokenServiceRevokeResponse } from "./token_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * TokenService serves token related functions
 *
 * @generated from service admin.v1.TokenService
 */
export declare const TokenService: {
    readonly typeName: "admin.v1.TokenService";
    readonly methods: {
        /**
         * List tokens
         *
         * @generated from rpc admin.v1.TokenService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof TokenServiceListRequest;
            readonly O: typeof TokenServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Revoke a token
         *
         * @generated from rpc admin.v1.TokenService.Revoke
         */
        readonly revoke: {
            readonly name: "Revoke";
            readonly I: typeof TokenServiceRevokeRequest;
            readonly O: typeof TokenServiceRevokeResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
