import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Token } from "../../api/v1/token_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file admin/v1/token.proto.
 */
export declare const file_admin_v1_token: GenFile;
/**
 * TokenServiceListRequest is the request payload for the token list request
 *
 * @generated from message admin.v1.TokenServiceListRequest
 */
export type TokenServiceListRequest = Message<"admin.v1.TokenServiceListRequest"> & {
    /**
     * UserId is the id of the user for which the tokens should be listed
     *
     * @generated from field: optional string user_id = 1;
     */
    userId?: string;
};
/**
 * Describes the message admin.v1.TokenServiceListRequest.
 * Use `create(TokenServiceListRequestSchema)` to create a new message.
 */
export declare const TokenServiceListRequestSchema: GenMessage<TokenServiceListRequest>;
/**
 * TokenServiceListResponse is the response payload for the token list request
 *
 * @generated from message admin.v1.TokenServiceListResponse
 */
export type TokenServiceListResponse = Message<"admin.v1.TokenServiceListResponse"> & {
    /**
     * Tokens is the list of tokens
     *
     * @generated from field: repeated api.v1.Token tokens = 1;
     */
    tokens: Token[];
};
/**
 * Describes the message admin.v1.TokenServiceListResponse.
 * Use `create(TokenServiceListResponseSchema)` to create a new message.
 */
export declare const TokenServiceListResponseSchema: GenMessage<TokenServiceListResponse>;
/**
 * TokenServiceRevokeRequest is the request payload for the token revoke request
 *
 * @generated from message admin.v1.TokenServiceRevokeRequest
 */
export type TokenServiceRevokeRequest = Message<"admin.v1.TokenServiceRevokeRequest"> & {
    /**
     * Uuid is the uuid of the token which should be revoked
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * UserId is the id of the user for which the token should be revoked
     *
     * @generated from field: string user_id = 2;
     */
    userId: string;
};
/**
 * Describes the message admin.v1.TokenServiceRevokeRequest.
 * Use `create(TokenServiceRevokeRequestSchema)` to create a new message.
 */
export declare const TokenServiceRevokeRequestSchema: GenMessage<TokenServiceRevokeRequest>;
/**
 * TokenServiceRevokeResponse is the response payload for the token revoke request
 *
 * @generated from message admin.v1.TokenServiceRevokeResponse
 */
export type TokenServiceRevokeResponse = Message<"admin.v1.TokenServiceRevokeResponse"> & {};
/**
 * Describes the message admin.v1.TokenServiceRevokeResponse.
 * Use `create(TokenServiceRevokeResponseSchema)` to create a new message.
 */
export declare const TokenServiceRevokeResponseSchema: GenMessage<TokenServiceRevokeResponse>;
/**
 * TokenService serves token related functions
 *
 * @generated from service admin.v1.TokenService
 */
export declare const TokenService: GenService<{
    /**
     * List tokens
     *
     * @generated from rpc admin.v1.TokenService.List
     */
    list: {
        methodKind: "unary";
        input: typeof TokenServiceListRequestSchema;
        output: typeof TokenServiceListResponseSchema;
    };
    /**
     * Revoke a token
     *
     * @generated from rpc admin.v1.TokenService.Revoke
     */
    revoke: {
        methodKind: "unary";
        input: typeof TokenServiceRevokeRequestSchema;
        output: typeof TokenServiceRevokeResponseSchema;
    };
}>;
