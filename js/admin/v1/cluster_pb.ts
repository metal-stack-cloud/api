// @generated by protoc-gen-es v2.5.0 with parameter "target=ts"
// @generated from file admin/v1/cluster.proto (package admin.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv2";
import type { Machine, VPN } from "./machine_pb";
import { file_admin_v1_machine } from "./machine_pb";
import type { Cluster } from "../../api/v1/cluster_pb";
import { file_api_v1_cluster } from "../../api/v1/cluster_pb";
import { file_api_v1_common } from "../../api/v1/common_pb";
import { file_buf_validate_validate } from "../../buf/validate/validate_pb";
import type { Duration } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file admin/v1/cluster.proto.
 */
export const file_admin_v1_cluster: GenFile = /*@__PURE__*/
  fileDesc("ChZhZG1pbi92MS9jbHVzdGVyLnByb3RvEghhZG1pbi52MSJJChhDbHVzdGVyU2VydmljZUdldFJlcXVlc3QSFgoEdXVpZBgBIAEoCUIIukgFcgOwAQESFQoNd2l0aF9tYWNoaW5lcxgCIAEoCCLpAgoZQ2x1c3RlclNlcnZpY2VMaXN0UmVxdWVzdBIRCgR1dWlkGAEgASgJSACIAQESFAoHcHJvamVjdBgCIAEoCUgBiAEBEhMKBnRlbmFudBgDIAEoCUgCiAEBEhYKCXBhcnRpdGlvbhgEIAEoCUgDiAEBEhEKBHNlZWQYBSABKAlIBIgBARIRCgRuYW1lGAYgASgJSAWIAQESFAoHcHVycG9zZRgHIAEoCUgGiAEBEj8KBmxhYmVscxgIIAMoCzIvLmFkbWluLnYxLkNsdXN0ZXJTZXJ2aWNlTGlzdFJlcXVlc3QuTGFiZWxzRW50cnkaLQoLTGFiZWxzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4AUIHCgVfdXVpZEIKCghfcHJvamVjdEIJCgdfdGVuYW50QgwKCl9wYXJ0aXRpb25CBwoFX3NlZWRCBwoFX25hbWVCCgoIX3B1cnBvc2UioQEKIENsdXN0ZXJTZXJ2aWNlQ3JlZGVudGlhbHNSZXF1ZXN0EhYKBHV1aWQYASABKAlCCLpIBXIDsAEBEhAKCHdpdGhfdnBuGAIgASgIEhAKCHdpdGhfc3NoGAMgASgIEjIKCmV4cGlyYXRpb24YBCABKAsyGS5nb29nbGUucHJvdG9idWYuRHVyYXRpb25IAIgBAUINCgtfZXhwaXJhdGlvbiJiChlDbHVzdGVyU2VydmljZUdldFJlc3BvbnNlEiAKB2NsdXN0ZXIYASABKAsyDy5hcGkudjEuQ2x1c3RlchIjCghtYWNoaW5lcxgCIAMoCzIRLmFkbWluLnYxLk1hY2hpbmUiPwoaQ2x1c3RlclNlcnZpY2VMaXN0UmVzcG9uc2USIQoIY2x1c3RlcnMYASADKAsyDy5hcGkudjEuQ2x1c3RlciJ+CiFDbHVzdGVyU2VydmljZUNyZWRlbnRpYWxzUmVzcG9uc2USEgoKa3ViZWNvbmZpZxgBIAEoCRIpCgtzc2hfa2V5cGFpchgCIAEoCzIULmFkbWluLnYxLlNTSEtleVBhaXISGgoDdnBuGAMgASgLMg0uYWRtaW4udjEuVlBOIjMKClNTSEtleVBhaXISEQoJcHVibGlja2V5GAEgASgMEhIKCnByaXZhdGVrZXkYAiABKAwysgIKDkNsdXN0ZXJTZXJ2aWNlElYKA0dldBIiLmFkbWluLnYxLkNsdXN0ZXJTZXJ2aWNlR2V0UmVxdWVzdBojLmFkbWluLnYxLkNsdXN0ZXJTZXJ2aWNlR2V0UmVzcG9uc2UiBtLzGAIBAhJZCgRMaXN0EiMuYWRtaW4udjEuQ2x1c3RlclNlcnZpY2VMaXN0UmVxdWVzdBokLmFkbWluLnYxLkNsdXN0ZXJTZXJ2aWNlTGlzdFJlc3BvbnNlIgbS8xgCAQISbQoLQ3JlZGVudGlhbHMSKi5hZG1pbi52MS5DbHVzdGVyU2VydmljZUNyZWRlbnRpYWxzUmVxdWVzdBorLmFkbWluLnYxLkNsdXN0ZXJTZXJ2aWNlQ3JlZGVudGlhbHNSZXNwb25zZSIF0vMYAQFCkwEKDGNvbS5hZG1pbi52MUIMQ2x1c3RlclByb3RvUAFaNGdpdGh1Yi5jb20vbWV0YWwtc3RhY2stY2xvdWQvYXBpL2dvL2FkbWluL3YxO2FkbWludjGiAgNBWFiqAghBZG1pbi5WMcoCCEFkbWluXFYx4gIUQWRtaW5cVjFcR1BCTWV0YWRhdGHqAglBZG1pbjo6VjFiBnByb3RvMw", [file_admin_v1_machine, file_api_v1_cluster, file_api_v1_common, file_buf_validate_validate, file_google_protobuf_duration]);

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
export const ClusterServiceGetRequestSchema: GenMessage<ClusterServiceGetRequest> = /*@__PURE__*/
  messageDesc(file_admin_v1_cluster, 0);

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
  labels: { [key: string]: string };
};

/**
 * Describes the message admin.v1.ClusterServiceListRequest.
 * Use `create(ClusterServiceListRequestSchema)` to create a new message.
 */
export const ClusterServiceListRequestSchema: GenMessage<ClusterServiceListRequest> = /*@__PURE__*/
  messageDesc(file_admin_v1_cluster, 1);

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
export const ClusterServiceCredentialsRequestSchema: GenMessage<ClusterServiceCredentialsRequest> = /*@__PURE__*/
  messageDesc(file_admin_v1_cluster, 2);

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
export const ClusterServiceGetResponseSchema: GenMessage<ClusterServiceGetResponse> = /*@__PURE__*/
  messageDesc(file_admin_v1_cluster, 3);

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
export const ClusterServiceListResponseSchema: GenMessage<ClusterServiceListResponse> = /*@__PURE__*/
  messageDesc(file_admin_v1_cluster, 4);

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
export const ClusterServiceCredentialsResponseSchema: GenMessage<ClusterServiceCredentialsResponse> = /*@__PURE__*/
  messageDesc(file_admin_v1_cluster, 5);

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
export const SSHKeyPairSchema: GenMessage<SSHKeyPair> = /*@__PURE__*/
  messageDesc(file_admin_v1_cluster, 6);

/**
 * ClusterService serves cluster related functions
 *
 * @generated from service admin.v1.ClusterService
 */
export const ClusterService: GenService<{
  /**
   * Get a cluster
   *
   * @generated from rpc admin.v1.ClusterService.Get
   */
  get: {
    methodKind: "unary";
    input: typeof ClusterServiceGetRequestSchema;
    output: typeof ClusterServiceGetResponseSchema;
  },
  /**
   * List clusters
   *
   * @generated from rpc admin.v1.ClusterService.List
   */
  list: {
    methodKind: "unary";
    input: typeof ClusterServiceListRequestSchema;
    output: typeof ClusterServiceListResponseSchema;
  },
  /**
   * Credentials of a cluster
   *
   * @generated from rpc admin.v1.ClusterService.Credentials
   */
  credentials: {
    methodKind: "unary";
    input: typeof ClusterServiceCredentialsRequestSchema;
    output: typeof ClusterServiceCredentialsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_admin_v1_cluster, 0);

