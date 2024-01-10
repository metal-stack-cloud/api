import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * IPType specifies different ip address types
 *
 * @generated from enum api.v1.IPType
 */
export declare enum IPType {
    /**
     * IP_TYPE_UNSPECIFIED is not specified
     *
     * @generated from enum value: IP_TYPE_UNSPECIFIED = 0;
     */
    IP_TYPE_UNSPECIFIED = 0,
    /**
     * IP_TYPE_EPHEMERAL defines a ephemeral ip address which is freed/deleted after usage
     *
     * @generated from enum value: IP_TYPE_EPHEMERAL = 1;
     */
    IP_TYPE_EPHEMERAL = 1,
    /**
     * IP_TYPE_STATIC defines a static ip address which must be freed/deleted explicitly
     *
     * @generated from enum value: IP_TYPE_STATIC = 2;
     */
    IP_TYPE_STATIC = 2
}
/**
 * IP is a ip address which can be used as loadbalancer addresses
 *
 * @generated from message api.v1.IP
 */
export declare class IP extends Message<IP> {
    /**
     * Uuid of this ip
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Ip is either ipv4 or ipv6 address
     *
     * @generated from field: string ip = 2;
     */
    ip: string;
    /**
     * Name of this ip
     *
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * Description of this ip
     *
     * @generated from field: string description = 4;
     */
    description: string;
    /**
     * Network is the network this ip belongs to
     *
     * @generated from field: string network = 5;
     */
    network: string;
    /**
     * Project where this ip address belongs to
     *
     * @generated from field: string project = 6;
     */
    project: string;
    /**
     * Type of this ip
     *
     * @generated from field: api.v1.IPType type = 7;
     */
    type: IPType;
    /**
     * Tags on this ip
     *
     * @generated from field: repeated string tags = 8;
     */
    tags: string[];
    /**
     * CreatedAt is the date when this ip was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 10;
     */
    createdAt?: Timestamp;
    /**
     * UpdatedAt is the date when this ip was updated
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 11;
     */
    updatedAt?: Timestamp;
    /**
     * DeletedAt is the date when this ip was deleted
     *
     * @generated from field: google.protobuf.Timestamp deleted_at = 12;
     */
    deletedAt?: Timestamp;
    constructor(data?: PartialMessage<IP>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.IP";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IP;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IP;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IP;
    static equals(a: IP | PlainMessage<IP> | undefined, b: IP | PlainMessage<IP> | undefined): boolean;
}
/**
 * IPServiceGetRequest is the request payload for a ip get request
 *
 * @generated from message api.v1.IPServiceGetRequest
 */
export declare class IPServiceGetRequest extends Message<IPServiceGetRequest> {
    /**
     * Uuid of the ip to get
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Project of the ip
     *
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<IPServiceGetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.IPServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceGetRequest;
    static equals(a: IPServiceGetRequest | PlainMessage<IPServiceGetRequest> | undefined, b: IPServiceGetRequest | PlainMessage<IPServiceGetRequest> | undefined): boolean;
}
/**
 * IPServiceGetRequest is the request payload for a ip get request
 *
 * @generated from message api.v1.IPServiceAllocateRequest
 */
export declare class IPServiceAllocateRequest extends Message<IPServiceAllocateRequest> {
    /**
     * Project of the ip
     *
     * @generated from field: string project = 2;
     */
    project: string;
    /**
     * Name of the ip
     *
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * Description of the ip
     *
     * @generated from field: string description = 4;
     */
    description: string;
    /**
     * Tags to put onto the ip
     *
     * @generated from field: repeated string tags = 8;
     */
    tags: string[];
    /**
     * Static if set to true, this will be a Static ip
     *
     * @generated from field: bool static = 9;
     */
    static: boolean;
    constructor(data?: PartialMessage<IPServiceAllocateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.IPServiceAllocateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceAllocateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceAllocateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceAllocateRequest;
    static equals(a: IPServiceAllocateRequest | PlainMessage<IPServiceAllocateRequest> | undefined, b: IPServiceAllocateRequest | PlainMessage<IPServiceAllocateRequest> | undefined): boolean;
}
/**
 * IPServiceUpdateRequest is the request payload for a ip update request
 *
 * @generated from message api.v1.IPServiceUpdateRequest
 */
export declare class IPServiceUpdateRequest extends Message<IPServiceUpdateRequest> {
    /**
     * Project of the ip
     *
     * @generated from field: string project = 1;
     */
    project: string;
    /**
     * Ip the ip to update
     *
     * @generated from field: api.v1.IP ip = 2;
     */
    ip?: IP;
    constructor(data?: PartialMessage<IPServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.IPServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceUpdateRequest;
    static equals(a: IPServiceUpdateRequest | PlainMessage<IPServiceUpdateRequest> | undefined, b: IPServiceUpdateRequest | PlainMessage<IPServiceUpdateRequest> | undefined): boolean;
}
/**
 * IPServiceListRequest is the request payload for a ip list request
 *
 * @generated from message api.v1.IPServiceListRequest
 */
export declare class IPServiceListRequest extends Message<IPServiceListRequest> {
    /**
     * Project of the ips to list
     *
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<IPServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.IPServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceListRequest;
    static equals(a: IPServiceListRequest | PlainMessage<IPServiceListRequest> | undefined, b: IPServiceListRequest | PlainMessage<IPServiceListRequest> | undefined): boolean;
}
/**
 * IPServiceDeleteRequest is the request payload for a ip delete request
 *
 * @generated from message api.v1.IPServiceDeleteRequest
 */
export declare class IPServiceDeleteRequest extends Message<IPServiceDeleteRequest> {
    /**
     * Uuid of the ip to delete
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Project of the ip
     *
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<IPServiceDeleteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.IPServiceDeleteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceDeleteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceDeleteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceDeleteRequest;
    static equals(a: IPServiceDeleteRequest | PlainMessage<IPServiceDeleteRequest> | undefined, b: IPServiceDeleteRequest | PlainMessage<IPServiceDeleteRequest> | undefined): boolean;
}
/**
 * IPServiceGetResponse is the response payload for a ip get request
 *
 * @generated from message api.v1.IPServiceGetResponse
 */
export declare class IPServiceGetResponse extends Message<IPServiceGetResponse> {
    /**
     * Ip the ip
     *
     * @generated from field: api.v1.IP ip = 1;
     */
    ip?: IP;
    constructor(data?: PartialMessage<IPServiceGetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.IPServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceGetResponse;
    static equals(a: IPServiceGetResponse | PlainMessage<IPServiceGetResponse> | undefined, b: IPServiceGetResponse | PlainMessage<IPServiceGetResponse> | undefined): boolean;
}
/**
 * IPServiceUpdateResponse is the response payload for a ip update request
 *
 * @generated from message api.v1.IPServiceUpdateResponse
 */
export declare class IPServiceUpdateResponse extends Message<IPServiceUpdateResponse> {
    /**
     * Ip the ip
     *
     * @generated from field: api.v1.IP ip = 1;
     */
    ip?: IP;
    constructor(data?: PartialMessage<IPServiceUpdateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.IPServiceUpdateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceUpdateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceUpdateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceUpdateResponse;
    static equals(a: IPServiceUpdateResponse | PlainMessage<IPServiceUpdateResponse> | undefined, b: IPServiceUpdateResponse | PlainMessage<IPServiceUpdateResponse> | undefined): boolean;
}
/**
 * IPServiceAllocateResponse is the response payload for a ip allocate request
 *
 * @generated from message api.v1.IPServiceAllocateResponse
 */
export declare class IPServiceAllocateResponse extends Message<IPServiceAllocateResponse> {
    /**
     * Ip the ip
     *
     * @generated from field: api.v1.IP ip = 1;
     */
    ip?: IP;
    constructor(data?: PartialMessage<IPServiceAllocateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.IPServiceAllocateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceAllocateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceAllocateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceAllocateResponse;
    static equals(a: IPServiceAllocateResponse | PlainMessage<IPServiceAllocateResponse> | undefined, b: IPServiceAllocateResponse | PlainMessage<IPServiceAllocateResponse> | undefined): boolean;
}
/**
 * IPServiceListResponse is the response payload for a ip list request
 *
 * @generated from message api.v1.IPServiceListResponse
 */
export declare class IPServiceListResponse extends Message<IPServiceListResponse> {
    /**
     * Ips the ips
     *
     * @generated from field: repeated api.v1.IP ips = 1;
     */
    ips: IP[];
    constructor(data?: PartialMessage<IPServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.IPServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceListResponse;
    static equals(a: IPServiceListResponse | PlainMessage<IPServiceListResponse> | undefined, b: IPServiceListResponse | PlainMessage<IPServiceListResponse> | undefined): boolean;
}
/**
 * IPServiceDeleteResponse is the response payload for a ip delete request
 *
 * @generated from message api.v1.IPServiceDeleteResponse
 */
export declare class IPServiceDeleteResponse extends Message<IPServiceDeleteResponse> {
    /**
     * Ip the ip
     *
     * @generated from field: api.v1.IP ip = 1;
     */
    ip?: IP;
    constructor(data?: PartialMessage<IPServiceDeleteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.IPServiceDeleteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPServiceDeleteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPServiceDeleteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPServiceDeleteResponse;
    static equals(a: IPServiceDeleteResponse | PlainMessage<IPServiceDeleteResponse> | undefined, b: IPServiceDeleteResponse | PlainMessage<IPServiceDeleteResponse> | undefined): boolean;
}
