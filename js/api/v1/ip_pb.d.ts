import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file api/v1/ip.proto.
 */
export declare const file_api_v1_ip: GenFile;
/**
 * IP is a ip address which can be used as loadbalancer addresses
 *
 * @generated from message api.v1.IP
 */
export type IP = Message<"api.v1.IP"> & {
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
};
/**
 * Describes the message api.v1.IP.
 * Use `create(IPSchema)` to create a new message.
 */
export declare const IPSchema: GenMessage<IP>;
/**
 * IPServiceGetRequest is the request payload for a ip get request
 *
 * @generated from message api.v1.IPServiceGetRequest
 */
export type IPServiceGetRequest = Message<"api.v1.IPServiceGetRequest"> & {
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
};
/**
 * Describes the message api.v1.IPServiceGetRequest.
 * Use `create(IPServiceGetRequestSchema)` to create a new message.
 */
export declare const IPServiceGetRequestSchema: GenMessage<IPServiceGetRequest>;
/**
 * IPServiceGetRequest is the request payload for a ip get request
 *
 * @generated from message api.v1.IPServiceAllocateRequest
 */
export type IPServiceAllocateRequest = Message<"api.v1.IPServiceAllocateRequest"> & {
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
};
/**
 * Describes the message api.v1.IPServiceAllocateRequest.
 * Use `create(IPServiceAllocateRequestSchema)` to create a new message.
 */
export declare const IPServiceAllocateRequestSchema: GenMessage<IPServiceAllocateRequest>;
/**
 * IPServiceUpdateRequest is the request payload for a ip update request
 *
 * @generated from message api.v1.IPServiceUpdateRequest
 */
export type IPServiceUpdateRequest = Message<"api.v1.IPServiceUpdateRequest"> & {
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
};
/**
 * Describes the message api.v1.IPServiceUpdateRequest.
 * Use `create(IPServiceUpdateRequestSchema)` to create a new message.
 */
export declare const IPServiceUpdateRequestSchema: GenMessage<IPServiceUpdateRequest>;
/**
 * IPServiceListRequest is the request payload for a ip list request
 *
 * @generated from message api.v1.IPServiceListRequest
 */
export type IPServiceListRequest = Message<"api.v1.IPServiceListRequest"> & {
    /**
     * Project of the ips to list
     *
     * @generated from field: string project = 2;
     */
    project: string;
};
/**
 * Describes the message api.v1.IPServiceListRequest.
 * Use `create(IPServiceListRequestSchema)` to create a new message.
 */
export declare const IPServiceListRequestSchema: GenMessage<IPServiceListRequest>;
/**
 * IPServiceDeleteRequest is the request payload for a ip delete request
 *
 * @generated from message api.v1.IPServiceDeleteRequest
 */
export type IPServiceDeleteRequest = Message<"api.v1.IPServiceDeleteRequest"> & {
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
};
/**
 * Describes the message api.v1.IPServiceDeleteRequest.
 * Use `create(IPServiceDeleteRequestSchema)` to create a new message.
 */
export declare const IPServiceDeleteRequestSchema: GenMessage<IPServiceDeleteRequest>;
/**
 * IPServiceGetResponse is the response payload for a ip get request
 *
 * @generated from message api.v1.IPServiceGetResponse
 */
export type IPServiceGetResponse = Message<"api.v1.IPServiceGetResponse"> & {
    /**
     * Ip the ip
     *
     * @generated from field: api.v1.IP ip = 1;
     */
    ip?: IP;
};
/**
 * Describes the message api.v1.IPServiceGetResponse.
 * Use `create(IPServiceGetResponseSchema)` to create a new message.
 */
export declare const IPServiceGetResponseSchema: GenMessage<IPServiceGetResponse>;
/**
 * IPServiceUpdateResponse is the response payload for a ip update request
 *
 * @generated from message api.v1.IPServiceUpdateResponse
 */
export type IPServiceUpdateResponse = Message<"api.v1.IPServiceUpdateResponse"> & {
    /**
     * Ip the ip
     *
     * @generated from field: api.v1.IP ip = 1;
     */
    ip?: IP;
};
/**
 * Describes the message api.v1.IPServiceUpdateResponse.
 * Use `create(IPServiceUpdateResponseSchema)` to create a new message.
 */
export declare const IPServiceUpdateResponseSchema: GenMessage<IPServiceUpdateResponse>;
/**
 * IPServiceAllocateResponse is the response payload for a ip allocate request
 *
 * @generated from message api.v1.IPServiceAllocateResponse
 */
export type IPServiceAllocateResponse = Message<"api.v1.IPServiceAllocateResponse"> & {
    /**
     * Ip the ip
     *
     * @generated from field: api.v1.IP ip = 1;
     */
    ip?: IP;
};
/**
 * Describes the message api.v1.IPServiceAllocateResponse.
 * Use `create(IPServiceAllocateResponseSchema)` to create a new message.
 */
export declare const IPServiceAllocateResponseSchema: GenMessage<IPServiceAllocateResponse>;
/**
 * IPServiceListResponse is the response payload for a ip list request
 *
 * @generated from message api.v1.IPServiceListResponse
 */
export type IPServiceListResponse = Message<"api.v1.IPServiceListResponse"> & {
    /**
     * Ips the ips
     *
     * @generated from field: repeated api.v1.IP ips = 1;
     */
    ips: IP[];
};
/**
 * Describes the message api.v1.IPServiceListResponse.
 * Use `create(IPServiceListResponseSchema)` to create a new message.
 */
export declare const IPServiceListResponseSchema: GenMessage<IPServiceListResponse>;
/**
 * IPServiceDeleteResponse is the response payload for a ip delete request
 *
 * @generated from message api.v1.IPServiceDeleteResponse
 */
export type IPServiceDeleteResponse = Message<"api.v1.IPServiceDeleteResponse"> & {
    /**
     * Ip the ip
     *
     * @generated from field: api.v1.IP ip = 1;
     */
    ip?: IP;
};
/**
 * Describes the message api.v1.IPServiceDeleteResponse.
 * Use `create(IPServiceDeleteResponseSchema)` to create a new message.
 */
export declare const IPServiceDeleteResponseSchema: GenMessage<IPServiceDeleteResponse>;
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
 * Describes the enum api.v1.IPType.
 */
export declare const IPTypeSchema: GenEnum<IPType>;
/**
 * IPService serves ip address related functions
 *
 * @generated from service api.v1.IPService
 */
export declare const IPService: GenService<{
    /**
     * Get a ip
     *
     * @generated from rpc api.v1.IPService.Get
     */
    get: {
        methodKind: "unary";
        input: typeof IPServiceGetRequestSchema;
        output: typeof IPServiceGetResponseSchema;
    };
    /**
     * Allocate a ip
     *
     * @generated from rpc api.v1.IPService.Allocate
     */
    allocate: {
        methodKind: "unary";
        input: typeof IPServiceAllocateRequestSchema;
        output: typeof IPServiceAllocateResponseSchema;
    };
    /**
     * Update a ip
     *
     * @generated from rpc api.v1.IPService.Update
     */
    update: {
        methodKind: "unary";
        input: typeof IPServiceUpdateRequestSchema;
        output: typeof IPServiceUpdateResponseSchema;
    };
    /**
     * List all ips
     *
     * @generated from rpc api.v1.IPService.List
     */
    list: {
        methodKind: "unary";
        input: typeof IPServiceListRequestSchema;
        output: typeof IPServiceListResponseSchema;
    };
    /**
     * Delete a ip
     *
     * @generated from rpc api.v1.IPService.Delete
     */
    delete: {
        methodKind: "unary";
        input: typeof IPServiceDeleteRequestSchema;
        output: typeof IPServiceDeleteResponseSchema;
    };
}>;
