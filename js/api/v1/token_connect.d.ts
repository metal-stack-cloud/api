import { TokenServiceCreateRequest, TokenServiceCreateResponse, TokenServiceGetRequest, TokenServiceGetResponse, TokenServiceListRequest, TokenServiceListResponse, TokenServiceRevokeRequest, TokenServiceRevokeResponse, TokenServiceUpdateRequest, TokenServiceUpdateResponse } from "./token_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * TokenService serves token related functions
 *
 * @generated from service api.v1.TokenService
 */
export declare const TokenService: {
    readonly typeName: "api.v1.TokenService";
    readonly methods: {
        /**
         * Get a token
         *
         * @generated from rpc api.v1.TokenService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof TokenServiceGetRequest;
            readonly O: typeof TokenServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a token to authenticate against the platform, the secret will be only visible in the response
         *
         * @generated from rpc api.v1.TokenService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof TokenServiceCreateRequest;
            readonly O: typeof TokenServiceCreateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a token
         *
         * @generated from rpc api.v1.TokenService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof TokenServiceUpdateRequest;
            readonly O: typeof TokenServiceUpdateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * List all your tokens
         *
         * @generated from rpc api.v1.TokenService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof TokenServiceListRequest;
            readonly O: typeof TokenServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Revoke a token, no further usage is possible afterwards
         *
         * @generated from rpc api.v1.TokenService.Revoke
         */
        readonly revoke: {
            readonly name: "Revoke";
            readonly I: typeof TokenServiceRevokeRequest;
            readonly O: typeof TokenServiceRevokeResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
