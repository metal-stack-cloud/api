import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Machine, VPN } from "./machine_pb";
import type { Cluster, ClusterMonitoring } from "../../api/v1/cluster_pb";
import type { Duration } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file admin/v1/cluster.proto.
 */
export declare const file_admin_v1_cluster: GenFile;
/**
 * ClusterServiceGetRequest is the request payload for the cluster get request
 *
 * @generated from message admin.v1.ClusterServiceGetRequest
 */
export type ClusterServiceGetRequest = Message<"admin.v1.ClusterServiceGetRequest"> & {
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
};
/**
 * Describes the message admin.v1.ClusterServiceGetRequest.
 * Use `create(ClusterServiceGetRequestSchema)` to create a new message.
 */
export declare const ClusterServiceGetRequestSchema: GenMessage<ClusterServiceGetRequest>;
/**
 * ClusterServiceListRequest is the request payload for the cluster list request
 *
 * @generated from message admin.v1.ClusterServiceListRequest
 */
export type ClusterServiceListRequest = Message<"admin.v1.ClusterServiceListRequest"> & {
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
};
/**
 * Describes the message admin.v1.ClusterServiceListRequest.
 * Use `create(ClusterServiceListRequestSchema)` to create a new message.
 */
export declare const ClusterServiceListRequestSchema: GenMessage<ClusterServiceListRequest>;
/**
 * ClusterServiceCredentialsRequest is the request payload for the cluster credentials request
 *
 * @generated from message admin.v1.ClusterServiceCredentialsRequest
 */
export type ClusterServiceCredentialsRequest = Message<"admin.v1.ClusterServiceCredentialsRequest"> & {
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
};
/**
 * Describes the message admin.v1.ClusterServiceCredentialsRequest.
 * Use `create(ClusterServiceCredentialsRequestSchema)` to create a new message.
 */
export declare const ClusterServiceCredentialsRequestSchema: GenMessage<ClusterServiceCredentialsRequest>;
/**
 * ClusterServiceGetAdminKubeconfigRequest is the request payload for a cluster get admin kubeconfig request
 *
 * @generated from message admin.v1.ClusterServiceGetAdminKubeconfigRequest
 */
export type ClusterServiceGetAdminKubeconfigRequest = Message<"admin.v1.ClusterServiceGetAdminKubeconfigRequest"> & {
    /**
     * Uuid of the cluster
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Expiration defines the duration after which the requested kubernetes access token cannot be used anymore
     *
     * @generated from field: optional google.protobuf.Duration expiration = 4;
     */
    expiration?: Duration;
};
/**
 * Describes the message admin.v1.ClusterServiceGetAdminKubeconfigRequest.
 * Use `create(ClusterServiceGetAdminKubeconfigRequestSchema)` to create a new message.
 */
export declare const ClusterServiceGetAdminKubeconfigRequestSchema: GenMessage<ClusterServiceGetAdminKubeconfigRequest>;
/**
 * ClusterServiceGetViewerKubeconfigRequest is the request payload for a cluster get viewer kubeconfig request
 *
 * @generated from message admin.v1.ClusterServiceGetViewerKubeconfigRequest
 */
export type ClusterServiceGetViewerKubeconfigRequest = Message<"admin.v1.ClusterServiceGetViewerKubeconfigRequest"> & {
    /**
     * Uuid of the cluster
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Expiration defines the duration after which the requested kubernetes access token cannot be used anymore
     *
     * @generated from field: optional google.protobuf.Duration expiration = 4;
     */
    expiration?: Duration;
};
/**
 * Describes the message admin.v1.ClusterServiceGetViewerKubeconfigRequest.
 * Use `create(ClusterServiceGetViewerKubeconfigRequestSchema)` to create a new message.
 */
export declare const ClusterServiceGetViewerKubeconfigRequestSchema: GenMessage<ClusterServiceGetViewerKubeconfigRequest>;
/**
 * ClusterServiceGetMonitoringCredentialsRequest is the request payload for the cluster monitoring credentials request
 *
 * @generated from message admin.v1.ClusterServiceGetMonitoringCredentialsRequest
 */
export type ClusterServiceGetMonitoringCredentialsRequest = Message<"admin.v1.ClusterServiceGetMonitoringCredentialsRequest"> & {
    /**
     * Uuid of the cluster
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
};
/**
 * Describes the message admin.v1.ClusterServiceGetMonitoringCredentialsRequest.
 * Use `create(ClusterServiceGetMonitoringCredentialsRequestSchema)` to create a new message.
 */
export declare const ClusterServiceGetMonitoringCredentialsRequestSchema: GenMessage<ClusterServiceGetMonitoringCredentialsRequest>;
/**
 * ClusterServiceGetResponse is the response payload for the cluster get request
 *
 * @generated from message admin.v1.ClusterServiceGetResponse
 */
export type ClusterServiceGetResponse = Message<"admin.v1.ClusterServiceGetResponse"> & {
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
};
/**
 * Describes the message admin.v1.ClusterServiceGetResponse.
 * Use `create(ClusterServiceGetResponseSchema)` to create a new message.
 */
export declare const ClusterServiceGetResponseSchema: GenMessage<ClusterServiceGetResponse>;
/**
 * ClusterServiceListResponse is the response payload for the cluster list request
 *
 * @generated from message admin.v1.ClusterServiceListResponse
 */
export type ClusterServiceListResponse = Message<"admin.v1.ClusterServiceListResponse"> & {
    /**
     * Clusters is the list of clusters
     *
     * @generated from field: repeated api.v1.Cluster clusters = 1;
     */
    clusters: Cluster[];
};
/**
 * Describes the message admin.v1.ClusterServiceListResponse.
 * Use `create(ClusterServiceListResponseSchema)` to create a new message.
 */
export declare const ClusterServiceListResponseSchema: GenMessage<ClusterServiceListResponse>;
/**
 * ClusterServiceCredentialsResponse is the response payload for the cluster credentials request
 *
 * @generated from message admin.v1.ClusterServiceCredentialsResponse
 */
export type ClusterServiceCredentialsResponse = Message<"admin.v1.ClusterServiceCredentialsResponse"> & {
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
};
/**
 * Describes the message admin.v1.ClusterServiceCredentialsResponse.
 * Use `create(ClusterServiceCredentialsResponseSchema)` to create a new message.
 */
export declare const ClusterServiceCredentialsResponseSchema: GenMessage<ClusterServiceCredentialsResponse>;
/**
 * ClusterServiceGetAdminKubeconfigResponse is the response payload of a cluster get admin kubeconfig request
 *
 * @generated from message admin.v1.ClusterServiceGetAdminKubeconfigResponse
 */
export type ClusterServiceGetAdminKubeconfigResponse = Message<"admin.v1.ClusterServiceGetAdminKubeconfigResponse"> & {
    /**
     * Cluster is the cluster
     *
     * @generated from field: string kubeconfig = 1;
     */
    kubeconfig: string;
};
/**
 * Describes the message admin.v1.ClusterServiceGetAdminKubeconfigResponse.
 * Use `create(ClusterServiceGetAdminKubeconfigResponseSchema)` to create a new message.
 */
export declare const ClusterServiceGetAdminKubeconfigResponseSchema: GenMessage<ClusterServiceGetAdminKubeconfigResponse>;
/**
 * ClusterServiceGetViewerKubeconfigResponse is the response payload of a cluster get viewer kubeconfig request
 *
 * @generated from message admin.v1.ClusterServiceGetViewerKubeconfigResponse
 */
export type ClusterServiceGetViewerKubeconfigResponse = Message<"admin.v1.ClusterServiceGetViewerKubeconfigResponse"> & {
    /**
     * Cluster is the cluster
     *
     * @generated from field: string kubeconfig = 1;
     */
    kubeconfig: string;
};
/**
 * Describes the message admin.v1.ClusterServiceGetViewerKubeconfigResponse.
 * Use `create(ClusterServiceGetViewerKubeconfigResponseSchema)` to create a new message.
 */
export declare const ClusterServiceGetViewerKubeconfigResponseSchema: GenMessage<ClusterServiceGetViewerKubeconfigResponse>;
/**
 * ClusterServiceGetMonitoringCredentialsResponse is the response payload for the cluster monitoring credentials request
 *
 * @generated from message admin.v1.ClusterServiceGetMonitoringCredentialsResponse
 */
export type ClusterServiceGetMonitoringCredentialsResponse = Message<"admin.v1.ClusterServiceGetMonitoringCredentialsResponse"> & {
    /**
     * Monitoring returns the monitoring credentials and endpoint
     *
     * @generated from field: api.v1.ClusterMonitoring monitoring = 1;
     */
    monitoring?: ClusterMonitoring;
};
/**
 * Describes the message admin.v1.ClusterServiceGetMonitoringCredentialsResponse.
 * Use `create(ClusterServiceGetMonitoringCredentialsResponseSchema)` to create a new message.
 */
export declare const ClusterServiceGetMonitoringCredentialsResponseSchema: GenMessage<ClusterServiceGetMonitoringCredentialsResponse>;
/**
 * SSHKeyPair details to access a firewall via ssh
 *
 * @generated from message admin.v1.SSHKeyPair
 */
export type SSHKeyPair = Message<"admin.v1.SSHKeyPair"> & {
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
};
/**
 * Describes the message admin.v1.SSHKeyPair.
 * Use `create(SSHKeyPairSchema)` to create a new message.
 */
export declare const SSHKeyPairSchema: GenMessage<SSHKeyPair>;
/**
 * ClusterService serves cluster related functions
 *
 * @generated from service admin.v1.ClusterService
 */
export declare const ClusterService: GenService<{
    /**
     * Get a cluster
     *
     * @generated from rpc admin.v1.ClusterService.Get
     */
    get: {
        methodKind: "unary";
        input: typeof ClusterServiceGetRequestSchema;
        output: typeof ClusterServiceGetResponseSchema;
    };
    /**
     * List clusters
     *
     * @generated from rpc admin.v1.ClusterService.List
     */
    list: {
        methodKind: "unary";
        input: typeof ClusterServiceListRequestSchema;
        output: typeof ClusterServiceListResponseSchema;
    };
    /**
     * Credentials of a cluster
     *
     * @generated from rpc admin.v1.ClusterService.Credentials
     */
    credentials: {
        methodKind: "unary";
        input: typeof ClusterServiceCredentialsRequestSchema;
        output: typeof ClusterServiceCredentialsResponseSchema;
    };
    /**
     * GetAdminKubeconfig of a cluster
     *
     * @generated from rpc admin.v1.ClusterService.GetAdminKubeconfig
     */
    getAdminKubeconfig: {
        methodKind: "unary";
        input: typeof ClusterServiceGetAdminKubeconfigRequestSchema;
        output: typeof ClusterServiceGetAdminKubeconfigResponseSchema;
    };
    /**
     * GetViewerKubeconfig of a cluster
     *
     * @generated from rpc admin.v1.ClusterService.GetViewerKubeconfig
     */
    getViewerKubeconfig: {
        methodKind: "unary";
        input: typeof ClusterServiceGetViewerKubeconfigRequestSchema;
        output: typeof ClusterServiceGetViewerKubeconfigResponseSchema;
    };
    /**
     * GetMonitoringCredentials returns monitoring credentials for a cluster
     *
     * @generated from rpc admin.v1.ClusterService.GetMonitoringCredentials
     */
    getMonitoringCredentials: {
        methodKind: "unary";
        input: typeof ClusterServiceGetMonitoringCredentialsRequestSchema;
        output: typeof ClusterServiceGetMonitoringCredentialsResponseSchema;
    };
}>;
