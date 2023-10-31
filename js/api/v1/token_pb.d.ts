import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from enum api.v1.TokenType
 */
export declare enum TokenType {
    /**
     * @generated from enum value: TOKEN_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: TOKEN_TYPE_API = 1;
     */
    API = 1,
    /**
     * @generated from enum value: TOKEN_TYPE_CONSOLE = 2;
     */
    CONSOLE = 2
}
/**
 * @generated from message api.v1.Token
 */
export declare class Token extends Message<Token> {
    /**
     * uuid of the jwt token
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * user_id who created this token
     *
     * @generated from field: string user_id = 2;
     */
    userId: string;
    /**
     * description is a user given description of this token.
     *
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: repeated api.v1.MethodPermission permissions = 4;
     */
    permissions: MethodPermission[];
    /**
     * @generated from field: repeated api.v1.TokenRole roles = 5;
     */
    roles: TokenRole[];
    /**
     * @generated from field: google.protobuf.Timestamp expires = 6;
     */
    expires?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp issued_at = 7;
     */
    issuedAt?: Timestamp;
    /**
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
 * @generated from message api.v1.TokenServiceCreateRequest
 */
export declare class TokenServiceCreateRequest extends Message<TokenServiceCreateRequest> {
    /**
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * @generated from field: repeated api.v1.MethodPermission permissions = 2;
     */
    permissions: MethodPermission[];
    /**
     * @generated from field: repeated api.v1.TokenRole roles = 3;
     */
    roles: TokenRole[];
    /**
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
 * @generated from message api.v1.MethodPermission
 */
export declare class MethodPermission extends Message<MethodPermission> {
    /**
     * subject maybe either the project or the organization
     * for which the methods should be allowed
     *
     * @generated from field: string subject = 1;
     */
    subject: string;
    /**
     * methods which should be accessible
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
 * @generated from message api.v1.TokenRole
 */
export declare class TokenRole extends Message<TokenRole> {
    /**
     * subject specifies the project or organization this role applies to
     *
     * @generated from field: string subject = 1;
     */
    subject: string;
    /**
     * role defines the string representation of a tenantrole, projectrole or a global adminrole
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
 * @generated from message api.v1.TokenServiceCreateResponse
 */
export declare class TokenServiceCreateResponse extends Message<TokenServiceCreateResponse> {
    /**
     * @generated from field: api.v1.Token token = 1;
     */
    token?: Token;
    /**
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
 * @generated from message api.v1.TokenServiceListResponse
 */
export declare class TokenServiceListResponse extends Message<TokenServiceListResponse> {
    /**
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
 * @generated from message api.v1.TokenServiceRevokeRequest
 */
export declare class TokenServiceRevokeRequest extends Message<TokenServiceRevokeRequest> {
    /**
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
