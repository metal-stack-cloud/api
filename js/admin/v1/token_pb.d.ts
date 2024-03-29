import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Token } from "../../api/v1/token_pb.js";
/**
 * TokenServiceListRequest is the request payload for the token list request
 *
 * @generated from message admin.v1.TokenServiceListRequest
 */
export declare class TokenServiceListRequest extends Message<TokenServiceListRequest> {
    /**
     * UserId is the id of the user for which the tokens should be listed
     *
     * @generated from field: optional string user_id = 1;
     */
    userId?: string;
    constructor(data?: PartialMessage<TokenServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.TokenServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceListRequest;
    static equals(a: TokenServiceListRequest | PlainMessage<TokenServiceListRequest> | undefined, b: TokenServiceListRequest | PlainMessage<TokenServiceListRequest> | undefined): boolean;
}
/**
 * TokenServiceListResponse is the response payload for the token list request
 *
 * @generated from message admin.v1.TokenServiceListResponse
 */
export declare class TokenServiceListResponse extends Message<TokenServiceListResponse> {
    /**
     * Tokens is the list of tokens
     *
     * @generated from field: repeated api.v1.Token tokens = 1;
     */
    tokens: Token[];
    constructor(data?: PartialMessage<TokenServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.TokenServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceListResponse;
    static equals(a: TokenServiceListResponse | PlainMessage<TokenServiceListResponse> | undefined, b: TokenServiceListResponse | PlainMessage<TokenServiceListResponse> | undefined): boolean;
}
/**
 * TokenServiceRevokeRequest is the request payload for the token revoke request
 *
 * @generated from message admin.v1.TokenServiceRevokeRequest
 */
export declare class TokenServiceRevokeRequest extends Message<TokenServiceRevokeRequest> {
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
    constructor(data?: PartialMessage<TokenServiceRevokeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.TokenServiceRevokeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceRevokeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceRevokeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceRevokeRequest;
    static equals(a: TokenServiceRevokeRequest | PlainMessage<TokenServiceRevokeRequest> | undefined, b: TokenServiceRevokeRequest | PlainMessage<TokenServiceRevokeRequest> | undefined): boolean;
}
/**
 * TokenServiceRevokeResponse is the response payload for the token revoke request
 *
 * @generated from message admin.v1.TokenServiceRevokeResponse
 */
export declare class TokenServiceRevokeResponse extends Message<TokenServiceRevokeResponse> {
    constructor(data?: PartialMessage<TokenServiceRevokeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.TokenServiceRevokeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceRevokeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceRevokeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceRevokeResponse;
    static equals(a: TokenServiceRevokeResponse | PlainMessage<TokenServiceRevokeResponse> | undefined, b: TokenServiceRevokeResponse | PlainMessage<TokenServiceRevokeResponse> | undefined): boolean;
}
