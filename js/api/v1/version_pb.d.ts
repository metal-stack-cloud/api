import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Version of the application
 *
 * @generated from message api.v1.Version
 */
export declare class Version extends Message<Version> {
    /**
     * Version of the application
     *
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * Revision of the application
     *
     * @generated from field: string revision = 2;
     */
    revision: string;
    /**
     * GitSHA1 of the application
     *
     * @generated from field: string git_sha1 = 3;
     */
    gitSha1: string;
    /**
     * BuildDate of the application
     *
     * @generated from field: string build_date = 4;
     */
    buildDate: string;
    constructor(data?: PartialMessage<Version>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Version";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Version;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Version;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Version;
    static equals(a: Version | PlainMessage<Version> | undefined, b: Version | PlainMessage<Version> | undefined): boolean;
}
/**
 * VersionServiceGetRequest is the request payload to get the version
 *
 * @generated from message api.v1.VersionServiceGetRequest
 */
export declare class VersionServiceGetRequest extends Message<VersionServiceGetRequest> {
    constructor(data?: PartialMessage<VersionServiceGetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.VersionServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VersionServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VersionServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VersionServiceGetRequest;
    static equals(a: VersionServiceGetRequest | PlainMessage<VersionServiceGetRequest> | undefined, b: VersionServiceGetRequest | PlainMessage<VersionServiceGetRequest> | undefined): boolean;
}
/**
 * VersionServiceGetResponse is the response payload with the version
 *
 * @generated from message api.v1.VersionServiceGetResponse
 */
export declare class VersionServiceGetResponse extends Message<VersionServiceGetResponse> {
    /**
     * Version of the application
     *
     * @generated from field: api.v1.Version version = 1;
     */
    version?: Version;
    constructor(data?: PartialMessage<VersionServiceGetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.VersionServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VersionServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VersionServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VersionServiceGetResponse;
    static equals(a: VersionServiceGetResponse | PlainMessage<VersionServiceGetResponse> | undefined, b: VersionServiceGetResponse | PlainMessage<VersionServiceGetResponse> | undefined): boolean;
}
