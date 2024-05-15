import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { Cluster } from "../../api/v1/cluster_pb.js";
import { Machine, VPN } from "./machine_pb.js";
/**
 * ClusterServiceGetRequest is the request payload for the cluster get request
 *
 * @generated from message admin.v1.ClusterServiceGetRequest
 */
export declare class ClusterServiceGetRequest extends Message<ClusterServiceGetRequest> {
    /**
     * Uuid of the cluster to get
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * WithMachines if set to true machines of all worker groups are also returned
     *
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
 * ClusterServiceListRequest is the request payload for the cluster list request
 *
 * @generated from message admin.v1.ClusterServiceListRequest
 */
export declare class ClusterServiceListRequest extends Message<ClusterServiceListRequest> {
    /**
     * Uuid of the cluster
     *
     * @generated from field: optional string uuid = 1;
     */
    uuid?: string;
    /**
     * Project of the cluster
     *
     * @generated from field: optional string project = 2;
     */
    project?: string;
    /**
     * Tenant of the cluster
     *
     * @generated from field: optional string tenant = 3;
     */
    tenant?: string;
    /**
     * Partition of the cluster
     *
     * @generated from field: optional string partition = 4;
     */
    partition?: string;
    /**
     * Seed of the cluster
     *
     * @generated from field: optional string seed = 5;
     */
    seed?: string;
    /**
     * Name of the cluster
     *
     * @generated from field: optional string name = 6;
     */
    name?: string;
    /**
     * Purpose of the cluster
     *
     * @generated from field: optional string purpose = 7;
     */
    purpose?: string;
    /**
     * Labels of the cluster
     *
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
 * ClusterServiceCredentialsRequest is the request payload for the cluster credentials request
 *
 * @generated from message admin.v1.ClusterServiceCredentialsRequest
 */
export declare class ClusterServiceCredentialsRequest extends Message<ClusterServiceCredentialsRequest> {
    /**
     * Uuid of the cluster
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * WithVpn if set VPN details are returned
     *
     * @generated from field: bool with_vpn = 2;
     */
    withVpn: boolean;
    /**
     * WithSsh if set ssh access credentials are returned
     *
     * @generated from field: bool with_ssh = 3;
     */
    withSsh: boolean;
    /**
     * Expiration defines the duration after which the kubernetes token is not valid anymore
     *
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
 * ClusterServiceGetResponse is the response payload for the cluster get request
 *
 * @generated from message admin.v1.ClusterServiceGetResponse
 */
export declare class ClusterServiceGetResponse extends Message<ClusterServiceGetResponse> {
    /**
     * Cluster is the cluster
     *
     * @generated from field: api.v1.Cluster cluster = 1;
     */
    cluster?: Cluster;
    /**
     * Machines is a list of all machines in all worker groups
     *
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
 * ClusterServiceListResponse is the response payload for the cluster list request
 *
 * @generated from message admin.v1.ClusterServiceListResponse
 */
export declare class ClusterServiceListResponse extends Message<ClusterServiceListResponse> {
    /**
     * Clusters is the list of clusters
     *
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
 * ClusterServiceCredentialsResponse is the response payload for the cluster credentials request
 *
 * @generated from message admin.v1.ClusterServiceCredentialsResponse
 */
export declare class ClusterServiceCredentialsResponse extends Message<ClusterServiceCredentialsResponse> {
    /**
     * Kubeconfig is the access token for the kubernetes api of this cluster
     *
     * @generated from field: string kubeconfig = 1;
     */
    kubeconfig: string;
    /**
     * SshKeypair is the keypair to access the firewall of the cluster with ssh
     *
     * @generated from field: admin.v1.SSHKeyPair ssh_keypair = 2;
     */
    sshKeypair?: SSHKeyPair;
    /**
     * Vpn are the VPN access details
     *
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
 * SSHKeyPair details to access a firewall via ssh
 *
 * @generated from message admin.v1.SSHKeyPair
 */
export declare class SSHKeyPair extends Message<SSHKeyPair> {
    /**
     * Publickey is the public key
     *
     * @generated from field: bytes publickey = 1;
     */
    publickey: Uint8Array;
    /**
     * Privatekey is the private key
     *
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
