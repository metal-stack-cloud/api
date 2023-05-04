import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { Cluster } from "../../api/v1/cluster_pb.js";
import { Machine, VPN } from "./machine_pb.js";
/**
 * @generated from enum admin.v1.Operate
 */
export declare enum Operate {
    /**
     * @generated from enum value: OPERATE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: OPERATE_RECONCILE = 1;
     */
    RECONCILE = 1,
    /**
     * @generated from enum value: OPERATE_MAINTAIN = 2;
     */
    MAINTAIN = 2,
    /**
     * @generated from enum value: OPERATE_RETRY = 3;
     */
    RETRY = 3
}
/**
 * @generated from message admin.v1.ClusterServiceGetRequest
 */
export declare class ClusterServiceGetRequest extends Message<ClusterServiceGetRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: bool with_machines = 2;
     */
    withMachines: boolean;
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
 * @generated from message admin.v1.ClusterServiceLogsRequest
 */
export declare class ClusterServiceLogsRequest extends Message<ClusterServiceLogsRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    constructor(data?: PartialMessage<ClusterServiceLogsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ClusterServiceLogsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceLogsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceLogsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceLogsRequest;
    static equals(a: ClusterServiceLogsRequest | PlainMessage<ClusterServiceLogsRequest> | undefined, b: ClusterServiceLogsRequest | PlainMessage<ClusterServiceLogsRequest> | undefined): boolean;
}
/**
 * @generated from message admin.v1.ClusterServiceListRequest
 */
export declare class ClusterServiceListRequest extends Message<ClusterServiceListRequest> {
    /**
     * @generated from field: optional string uuid = 1;
     */
    uuid?: string;
    /**
     * @generated from field: optional string project = 2;
     */
    project?: string;
    /**
     * @generated from field: optional string tenant = 3;
     */
    tenant?: string;
    /**
     * @generated from field: optional string partition = 4;
     */
    partition?: string;
    /**
     * @generated from field: optional string seed = 5;
     */
    seed?: string;
    /**
     * @generated from field: optional string name = 6;
     */
    name?: string;
    /**
     * @generated from field: optional string purpose = 7;
     */
    purpose?: string;
    /**
     * @generated from field: map<string, string> labels = 8;
     */
    labels: {
        [key: string]: string;
    };
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
 * @generated from message admin.v1.ClusterServiceCredentialsRequest
 */
export declare class ClusterServiceCredentialsRequest extends Message<ClusterServiceCredentialsRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: bool with_vpn = 2;
     */
    withVpn: boolean;
    /**
     * @generated from field: bool with_ssh = 3;
     */
    withSsh: boolean;
    /**
     * @generated from field: optional google.protobuf.Duration expiration = 4;
     */
    expiration?: Duration;
    constructor(data?: PartialMessage<ClusterServiceCredentialsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ClusterServiceCredentialsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceCredentialsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceCredentialsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceCredentialsRequest;
    static equals(a: ClusterServiceCredentialsRequest | PlainMessage<ClusterServiceCredentialsRequest> | undefined, b: ClusterServiceCredentialsRequest | PlainMessage<ClusterServiceCredentialsRequest> | undefined): boolean;
}
/**
 * @generated from message admin.v1.ClusterServiceOperateRequest
 */
export declare class ClusterServiceOperateRequest extends Message<ClusterServiceOperateRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: admin.v1.Operate operate = 2;
     */
    operate: Operate;
    constructor(data?: PartialMessage<ClusterServiceOperateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ClusterServiceOperateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceOperateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceOperateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceOperateRequest;
    static equals(a: ClusterServiceOperateRequest | PlainMessage<ClusterServiceOperateRequest> | undefined, b: ClusterServiceOperateRequest | PlainMessage<ClusterServiceOperateRequest> | undefined): boolean;
}
/**
 * @generated from message admin.v1.ClusterServiceGetResponse
 */
export declare class ClusterServiceGetResponse extends Message<ClusterServiceGetResponse> {
    /**
     * @generated from field: api.v1.Cluster cluster = 1;
     */
    cluster?: Cluster;
    /**
     * @generated from field: repeated admin.v1.Machine machines = 2;
     */
    machines: Machine[];
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
 * @generated from message admin.v1.ClusterServiceLogsResponse
 */
export declare class ClusterServiceLogsResponse extends Message<ClusterServiceLogsResponse> {
    /**
     * @generated from field: repeated string log = 1;
     */
    log: string[];
    constructor(data?: PartialMessage<ClusterServiceLogsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ClusterServiceLogsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceLogsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceLogsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceLogsResponse;
    static equals(a: ClusterServiceLogsResponse | PlainMessage<ClusterServiceLogsResponse> | undefined, b: ClusterServiceLogsResponse | PlainMessage<ClusterServiceLogsResponse> | undefined): boolean;
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
/**
 * @generated from message admin.v1.ClusterServiceCredentialsResponse
 */
export declare class ClusterServiceCredentialsResponse extends Message<ClusterServiceCredentialsResponse> {
    /**
     * @generated from field: string kubeconfig = 1;
     */
    kubeconfig: string;
    /**
     * @generated from field: admin.v1.SSHKeyPair ssh_keypair = 2;
     */
    sshKeypair?: SSHKeyPair;
    /**
     * @generated from field: admin.v1.VPN vpn = 3;
     */
    vpn?: VPN;
    constructor(data?: PartialMessage<ClusterServiceCredentialsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ClusterServiceCredentialsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceCredentialsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceCredentialsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceCredentialsResponse;
    static equals(a: ClusterServiceCredentialsResponse | PlainMessage<ClusterServiceCredentialsResponse> | undefined, b: ClusterServiceCredentialsResponse | PlainMessage<ClusterServiceCredentialsResponse> | undefined): boolean;
}
/**
 * @generated from message admin.v1.ClusterServiceOperateResponse
 */
export declare class ClusterServiceOperateResponse extends Message<ClusterServiceOperateResponse> {
    /**
     * @generated from field: api.v1.Cluster cluster = 1;
     */
    cluster?: Cluster;
    constructor(data?: PartialMessage<ClusterServiceOperateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.ClusterServiceOperateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceOperateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceOperateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceOperateResponse;
    static equals(a: ClusterServiceOperateResponse | PlainMessage<ClusterServiceOperateResponse> | undefined, b: ClusterServiceOperateResponse | PlainMessage<ClusterServiceOperateResponse> | undefined): boolean;
}
/**
 * @generated from message admin.v1.SSHKeyPair
 */
export declare class SSHKeyPair extends Message<SSHKeyPair> {
    /**
     * @generated from field: bytes publickey = 1;
     */
    publickey: Uint8Array;
    /**
     * @generated from field: bytes privatekey = 2;
     */
    privatekey: Uint8Array;
    constructor(data?: PartialMessage<SSHKeyPair>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.SSHKeyPair";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SSHKeyPair;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SSHKeyPair;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SSHKeyPair;
    static equals(a: SSHKeyPair | PlainMessage<SSHKeyPair> | undefined, b: SSHKeyPair | PlainMessage<SSHKeyPair> | undefined): boolean;
}
