import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message } from "@bufbuild/protobuf";
/**
 * Tokens
 *
 * @generated from message api.v1.TokenServiceCreateRequest
 */
export declare class TokenServiceCreateRequest extends Message<TokenServiceCreateRequest> {
    /**
     * @generated from field: string subject = 1;
     */
    subject: string;
    /**
     * @generated from field: repeated api.v1.ProjectPermission permissions = 2;
     */
    permissions: ProjectPermission[];
    /**
     * @generated from field: repeated api.v1.TokenRole roles = 3;
     */
    roles: TokenRole[];
    /**
     * @generated from field: google.protobuf.Duration expires = 4;
     */
    expires?: Duration;
    constructor(data?: PartialMessage<TokenServiceCreateRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.TokenServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceCreateRequest;
    static equals(a: TokenServiceCreateRequest | PlainMessage<TokenServiceCreateRequest> | undefined, b: TokenServiceCreateRequest | PlainMessage<TokenServiceCreateRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.ProjectPermission
 */
export declare class ProjectPermission extends Message<ProjectPermission> {
    /**
     * @generated from field: string project = 1;
     */
    project: string;
    /**
     * @generated from field: repeated string permissions = 2;
     */
    permissions: string[];
    constructor(data?: PartialMessage<ProjectPermission>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.ProjectPermission";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectPermission;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectPermission;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectPermission;
    static equals(a: ProjectPermission | PlainMessage<ProjectPermission> | undefined, b: ProjectPermission | PlainMessage<ProjectPermission> | undefined): boolean;
}
/**
 * @generated from message api.v1.TokenRole
 */
export declare class TokenRole extends Message<TokenRole> {
    /**
     * @generated from field: string subject = 1;
     */
    subject: string;
    /**
     * @generated from field: string role = 2;
     */
    role: string;
    constructor(data?: PartialMessage<TokenRole>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
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
     * @generated from field: string token = 1;
     */
    token: string;
    constructor(data?: PartialMessage<TokenServiceCreateResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.TokenServiceCreateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenServiceCreateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenServiceCreateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenServiceCreateResponse;
    static equals(a: TokenServiceCreateResponse | PlainMessage<TokenServiceCreateResponse> | undefined, b: TokenServiceCreateResponse | PlainMessage<TokenServiceCreateResponse> | undefined): boolean;
}
