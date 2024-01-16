import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * TokenType specifies different use cases of tokens
 *
 * @generated from enum api.v1.TokenType
 */
export declare enum TokenType {
    /**
     * TOKEN_TYPE_UNSPECIFIED is not specified
     *
     * @generated from enum value: TOKEN_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * TOKEN_TYPE_API is a token for api usage
     *
     * @generated from enum value: TOKEN_TYPE_API = 1;
     */
    API = 1,
    /**
     * TOKEN_TYPE_CONSOLE is a token for console or web ui usage
     *
     * @generated from enum value: TOKEN_TYPE_CONSOLE = 2;
     */
    CONSOLE = 2
}
/**
 * Token is a jwt authentication token to access the api
 *
 * @generated from message api.v1.Token
 */
export declare class Token extends Message<Token> {
    /**
     * Uuid of the jwt token, used to reference it by revoke
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * UserId who created this token
     *
     * @generated from field: string user_id = 2;
     */
    userId: string;
    /**
     * Description is a user given description of this token.
     *
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * Permissions is a list of service methods this token can be used for
     *
     * @generated from field: repeated api.v1.MethodPermission permissions = 4;
     */
    permissions: MethodPermission[];
    /**
     * Roles is a list of roles this token can be used for
     *
     * @generated from field: repeated api.v1.TokenRole roles = 5;
     */
    roles: TokenRole[];
    /**
     * Expires gives the date in the future after which this token can not be used anymore
     *
     * @generated from field: google.protobuf.Timestamp expires = 6;
     */
    expires?: Timestamp;
    /**
     * IssuedAt gives the date when this token was created
     *
     * @generated from field: google.protobuf.Timestamp issued_at = 7;
     */
    issuedAt?: Timestamp;
    /**
     * TokenType describes the type of this token
     *
     * @generated from field: api.v1.TokenType token_type = 8;
     */
    tokenType: TokenType;
    constructor(data?: PartialMessage<Token>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Token";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Token;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Token;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Token;
    static equals(a: Token | PlainMessage<Token> | undefined, b: Token | PlainMessage<Token> | undefined): boolean;
}
/**
 * TokenServiceCreateRequest is the request payload to create a token
 *
 * @generated from message api.v1.TokenServiceCreateRequest
 */
export declare class TokenServiceCreateRequest extends Message<TokenServiceCreateRequest> {
    /**
     * Description of the token
     *
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * Permissions is a list of service methods this token can be used for
     *
     * @generated from field: repeated api.v1.MethodPermission permissions = 2;
     */
    permissions: MethodPermission[];
    /**
     * Roles is a list of roles this token can be used for
     *
     * @generated from field: repeated api.v1.TokenRole roles = 3;
     */
    roles: TokenRole[];
    /**
     * Expires gives the duration since now, after which this token can not be used anymore
     *
     * @generated from field: google.protobuf.Duration expires = 4;
     */
    expires?: Duration;
    constructor(data?: PartialMessage<TokenServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TokenServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceCreateRequest;
    static equals(a: TokenServiceCreateRequest | PlainMessage<TokenServiceCreateRequest> | undefined, b: TokenServiceCreateRequest | PlainMessage<TokenServiceCreateRequest> | undefined): boolean;
}
/**
 * MethodPermission is a mapping from a subject/project to a service method
 *
 * @generated from message api.v1.MethodPermission
 */
export declare class MethodPermission extends Message<MethodPermission> {
    /**
     * Subject maybe either the project or the organization
     * for which the methods should be allowed
     *
     * @generated from field: string subject = 1;
     */
    subject: string;
    /**
     * Methods which should be accessible
     *
     * @generated from field: repeated string methods = 2;
     */
    methods: string[];
    constructor(data?: PartialMessage<MethodPermission>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MethodPermission";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodPermission;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodPermission;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodPermission;
    static equals(a: MethodPermission | PlainMessage<MethodPermission> | undefined, b: MethodPermission | PlainMessage<MethodPermission> | undefined): boolean;
}
/**
 * TokenRole is a mapping from subject to role there
 *
 * @generated from message api.v1.TokenRole
 */
export declare class TokenRole extends Message<TokenRole> {
    /**
     * Subject specifies the subject (project or organization) this role applies to
     *
     * @generated from field: string subject = 1;
     */
    subject: string;
    /**
     * Role defines the string representation of a tenantrole, projectrole or a global adminrole
     *
     * @generated from field: string role = 2;
     */
    role: string;
    constructor(data?: PartialMessage<TokenRole>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TokenRole";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenRole;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenRole;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenRole;
    static equals(a: TokenRole | PlainMessage<TokenRole> | undefined, b: TokenRole | PlainMessage<TokenRole> | undefined): boolean;
}
/**
 * TokenServiceCreateResponse is the response payload of a token create request
 *
 * @generated from message api.v1.TokenServiceCreateResponse
 */
export declare class TokenServiceCreateResponse extends Message<TokenServiceCreateResponse> {
    /**
     * Token which was created
     *
     * @generated from field: api.v1.Token token = 1;
     */
    token?: Token;
    /**
     * Secret is the body if the jwt token, should be used in api requests as bearer token
     *
     * @generated from field: string secret = 2;
     */
    secret: string;
    constructor(data?: PartialMessage<TokenServiceCreateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TokenServiceCreateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceCreateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceCreateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceCreateResponse;
    static equals(a: TokenServiceCreateResponse | PlainMessage<TokenServiceCreateResponse> | undefined, b: TokenServiceCreateResponse | PlainMessage<TokenServiceCreateResponse> | undefined): boolean;
}
/**
 * TokenServiceListRequest is the request payload to list tokens
 *
 * @generated from message api.v1.TokenServiceListRequest
 */
export declare class TokenServiceListRequest extends Message<TokenServiceListRequest> {
    constructor(data?: PartialMessage<TokenServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TokenServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceListRequest;
    static equals(a: TokenServiceListRequest | PlainMessage<TokenServiceListRequest> | undefined, b: TokenServiceListRequest | PlainMessage<TokenServiceListRequest> | undefined): boolean;
}
/**
 * TokenServiceListResponse is the response payload of a token list request
 *
 * @generated from message api.v1.TokenServiceListResponse
 */
export declare class TokenServiceListResponse extends Message<TokenServiceListResponse> {
    /**
     * Tokens is a list of tokens without the secrets
     *
     * @generated from field: repeated api.v1.Token tokens = 1;
     */
    tokens: Token[];
    constructor(data?: PartialMessage<TokenServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TokenServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceListResponse;
    static equals(a: TokenServiceListResponse | PlainMessage<TokenServiceListResponse> | undefined, b: TokenServiceListResponse | PlainMessage<TokenServiceListResponse> | undefined): boolean;
}
/**
 * TokenServiceRevokeRequest is the request payload of a token revoke request
 *
 * @generated from message api.v1.TokenServiceRevokeRequest
 */
export declare class TokenServiceRevokeRequest extends Message<TokenServiceRevokeRequest> {
    /**
     * Uuid of the token to revoke
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    constructor(data?: PartialMessage<TokenServiceRevokeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TokenServiceRevokeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceRevokeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceRevokeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceRevokeRequest;
    static equals(a: TokenServiceRevokeRequest | PlainMessage<TokenServiceRevokeRequest> | undefined, b: TokenServiceRevokeRequest | PlainMessage<TokenServiceRevokeRequest> | undefined): boolean;
}
/**
 * TokenServiceRevokeResponse is the response payload of a token revoke request
 *
 * @generated from message api.v1.TokenServiceRevokeResponse
 */
export declare class TokenServiceRevokeResponse extends Message<TokenServiceRevokeResponse> {
    constructor(data?: PartialMessage<TokenServiceRevokeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TokenServiceRevokeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceRevokeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceRevokeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceRevokeResponse;
    static equals(a: TokenServiceRevokeResponse | PlainMessage<TokenServiceRevokeResponse> | undefined, b: TokenServiceRevokeResponse | PlainMessage<TokenServiceRevokeResponse> | undefined): boolean;
}
