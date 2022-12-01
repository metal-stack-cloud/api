import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, Timestamp } from "@bufbuild/protobuf";
/**
 * Types
 *
 * @generated from message api.v1.IP
 */
export declare class IP extends Message<IP> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string ip = 2;
     */
    ip: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: string description = 4;
     */
    description: string;
    /**
     * @generated from field: string network = 5;
     */
    network: string;
    /**
     * @generated from field: string project = 6;
     */
    project: string;
    /**
     * @generated from field: string type = 7;
     */
    type: string;
    /**
     * @generated from field: repeated string tags = 8;
     */
    tags: string[];
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 10;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 11;
     */
    updatedAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp deleted_at = 12;
     */
    deletedAt?: Timestamp;
    constructor(data?: PartialMessage<IP>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.IP";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IP;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IP;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IP;
    static equals(a: IP | PlainMessage<IP> | undefined, b: IP | PlainMessage<IP> | undefined): boolean;
}
/**
 * Requests
 *
 * @generated from message api.v1.IPServiceGetRequest
 */
export declare class IPServiceGetRequest extends Message<IPServiceGetRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<IPServiceGetRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.IPServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceGetRequest;
    static equals(a: IPServiceGetRequest | PlainMessage<IPServiceGetRequest> | undefined, b: IPServiceGetRequest | PlainMessage<IPServiceGetRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.IPServiceAllocateRequest
 */
export declare class IPServiceAllocateRequest extends Message<IPServiceAllocateRequest> {
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: string description = 4;
     */
    description: string;
    /**
     * @generated from field: string network = 5;
     */
    network: string;
    /**
     * @generated from field: repeated string tags = 8;
     */
    tags: string[];
    /**
     * @generated from field: bool static = 9;
     */
    static: boolean;
    constructor(data?: PartialMessage<IPServiceAllocateRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.IPServiceAllocateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceAllocateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceAllocateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceAllocateRequest;
    static equals(a: IPServiceAllocateRequest | PlainMessage<IPServiceAllocateRequest> | undefined, b: IPServiceAllocateRequest | PlainMessage<IPServiceAllocateRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.IPServiceStaticRequest
 */
export declare class IPServiceStaticRequest extends Message<IPServiceStaticRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<IPServiceStaticRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.IPServiceStaticRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceStaticRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceStaticRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceStaticRequest;
    static equals(a: IPServiceStaticRequest | PlainMessage<IPServiceStaticRequest> | undefined, b: IPServiceStaticRequest | PlainMessage<IPServiceStaticRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.IPServiceListRequest
 */
export declare class IPServiceListRequest extends Message<IPServiceListRequest> {
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<IPServiceListRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.IPServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceListRequest;
    static equals(a: IPServiceListRequest | PlainMessage<IPServiceListRequest> | undefined, b: IPServiceListRequest | PlainMessage<IPServiceListRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.IPServiceDeleteRequest
 */
export declare class IPServiceDeleteRequest extends Message<IPServiceDeleteRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<IPServiceDeleteRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.IPServiceDeleteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceDeleteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceDeleteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceDeleteRequest;
    static equals(a: IPServiceDeleteRequest | PlainMessage<IPServiceDeleteRequest> | undefined, b: IPServiceDeleteRequest | PlainMessage<IPServiceDeleteRequest> | undefined): boolean;
}
/**
 * Responses
 *
 * @generated from message api.v1.IPServiceGetResponse
 */
export declare class IPServiceGetResponse extends Message<IPServiceGetResponse> {
    /**
     * @generated from field: api.v1.IP ip = 1;
     */
    ip?: IP;
    constructor(data?: PartialMessage<IPServiceGetResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.IPServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceGetResponse;
    static equals(a: IPServiceGetResponse | PlainMessage<IPServiceGetResponse> | undefined, b: IPServiceGetResponse | PlainMessage<IPServiceGetResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.IPServiceAllocateResponse
 */
export declare class IPServiceAllocateResponse extends Message<IPServiceAllocateResponse> {
    /**
     * @generated from field: api.v1.IP ip = 1;
     */
    ip?: IP;
    constructor(data?: PartialMessage<IPServiceAllocateResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.IPServiceAllocateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceAllocateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceAllocateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceAllocateResponse;
    static equals(a: IPServiceAllocateResponse | PlainMessage<IPServiceAllocateResponse> | undefined, b: IPServiceAllocateResponse | PlainMessage<IPServiceAllocateResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.IPServiceStaticResponse
 */
export declare class IPServiceStaticResponse extends Message<IPServiceStaticResponse> {
    /**
     * @generated from field: api.v1.IP ip = 1;
     */
    ip?: IP;
    constructor(data?: PartialMessage<IPServiceStaticResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.IPServiceStaticResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceStaticResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceStaticResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceStaticResponse;
    static equals(a: IPServiceStaticResponse | PlainMessage<IPServiceStaticResponse> | undefined, b: IPServiceStaticResponse | PlainMessage<IPServiceStaticResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.IPServiceListResponse
 */
export declare class IPServiceListResponse extends Message<IPServiceListResponse> {
    /**
     * @generated from field: repeated api.v1.IP ips = 1;
     */
    ips: IP[];
    constructor(data?: PartialMessage<IPServiceListResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.IPServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceListResponse;
    static equals(a: IPServiceListResponse | PlainMessage<IPServiceListResponse> | undefined, b: IPServiceListResponse | PlainMessage<IPServiceListResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.IPServiceDeleteResponse
 */
export declare class IPServiceDeleteResponse extends Message<IPServiceDeleteResponse> {
    /**
     * @generated from field: api.v1.IP ip = 1;
     */
    ip?: IP;
    constructor(data?: PartialMessage<IPServiceDeleteResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.IPServiceDeleteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceDeleteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceDeleteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceDeleteResponse;
    static equals(a: IPServiceDeleteResponse | PlainMessage<IPServiceDeleteResponse> | undefined, b: IPServiceDeleteResponse | PlainMessage<IPServiceDeleteResponse> | undefined): boolean;
}
