import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Cluster } from "../../api/v1/cluster_pb.js";
/**
 * @generated from message admin.v1.ClusterServiceGetRequest
 */
export declare class ClusterServiceGetRequest extends Message<ClusterServiceGetRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<ClusterServiceGetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ClusterServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceGetRequest;
    static equals(a: ClusterServiceGetRequest | PlainMessage<ClusterServiceGetRequest> | undefined, b: ClusterServiceGetRequest | PlainMessage<ClusterServiceGetRequest> | undefined): boolean;
}
/**
 * @generated from message admin.v1.ClusterServiceGetCredentialsRequest
 */
export declare class ClusterServiceGetCredentialsRequest extends Message<ClusterServiceGetCredentialsRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<ClusterServiceGetCredentialsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ClusterServiceGetCredentialsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceGetCredentialsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceGetCredentialsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceGetCredentialsRequest;
    static equals(a: ClusterServiceGetCredentialsRequest | PlainMessage<ClusterServiceGetCredentialsRequest> | undefined, b: ClusterServiceGetCredentialsRequest | PlainMessage<ClusterServiceGetCredentialsRequest> | undefined): boolean;
}
/**
 * @generated from message admin.v1.ClusterServiceListRequest
 */
export declare class ClusterServiceListRequest extends Message<ClusterServiceListRequest> {
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<ClusterServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ClusterServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceListRequest;
    static equals(a: ClusterServiceListRequest | PlainMessage<ClusterServiceListRequest> | undefined, b: ClusterServiceListRequest | PlainMessage<ClusterServiceListRequest> | undefined): boolean;
}
/**
 * @generated from message admin.v1.ClusterServiceGetResponse
 */
export declare class ClusterServiceGetResponse extends Message<ClusterServiceGetResponse> {
    /**
     * @generated from field: api.v1.Cluster cluster = 1;
     */
    cluster?: Cluster;
    constructor(data?: PartialMessage<ClusterServiceGetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ClusterServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceGetResponse;
    static equals(a: ClusterServiceGetResponse | PlainMessage<ClusterServiceGetResponse> | undefined, b: ClusterServiceGetResponse | PlainMessage<ClusterServiceGetResponse> | undefined): boolean;
}
/**
 * @generated from message admin.v1.ClusterServiceGetCredentialsResponse
 */
export declare class ClusterServiceGetCredentialsResponse extends Message<ClusterServiceGetCredentialsResponse> {
    /**
     * @generated from field: string kubeconfig = 1;
     */
    kubeconfig: string;
    constructor(data?: PartialMessage<ClusterServiceGetCredentialsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ClusterServiceGetCredentialsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceGetCredentialsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceGetCredentialsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceGetCredentialsResponse;
    static equals(a: ClusterServiceGetCredentialsResponse | PlainMessage<ClusterServiceGetCredentialsResponse> | undefined, b: ClusterServiceGetCredentialsResponse | PlainMessage<ClusterServiceGetCredentialsResponse> | undefined): boolean;
}
/**
 * @generated from message admin.v1.ClusterServiceListResponse
 */
export declare class ClusterServiceListResponse extends Message<ClusterServiceListResponse> {
    /**
     * @generated from field: repeated api.v1.Cluster clusters = 1;
     */
    clusters: Cluster[];
    constructor(data?: PartialMessage<ClusterServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ClusterServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceListResponse;
    static equals(a: ClusterServiceListResponse | PlainMessage<ClusterServiceListResponse> | undefined, b: ClusterServiceListResponse | PlainMessage<ClusterServiceListResponse> | undefined): boolean;
}
