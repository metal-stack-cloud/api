// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file admin/v1/cluster.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { Cluster } from "../../api/v1/cluster_pb.js";
import { Machine, VPN } from "./machine_pb.js";

/**
 * ClusterServiceGetRequest is the request payload for the cluster get request
 *
 * @generated from message admin.v1.ClusterServiceGetRequest
 */
export class ClusterServiceGetRequest extends Message<ClusterServiceGetRequest> {
  /**
   * Uuid of the cluster to get
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * WithMachines if set to true machines of all worker groups are also returned
   *
   * @generated from field: bool with_machines = 2;
   */
  withMachines = false;

  constructor(data?: PartialMessage<ClusterServiceGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.ClusterServiceGetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "with_machines", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceGetRequest {
    return new ClusterServiceGetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceGetRequest {
    return new ClusterServiceGetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceGetRequest {
    return new ClusterServiceGetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterServiceGetRequest | PlainMessage<ClusterServiceGetRequest> | undefined, b: ClusterServiceGetRequest | PlainMessage<ClusterServiceGetRequest> | undefined): boolean {
    return proto3.util.equals(ClusterServiceGetRequest, a, b);
  }
}

/**
 * ClusterServiceListRequest is the request payload for the cluster list request
 *
 * @generated from message admin.v1.ClusterServiceListRequest
 */
export class ClusterServiceListRequest extends Message<ClusterServiceListRequest> {
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
   * Partiton of the cluster
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
  labels: { [key: string]: string } = {};

  constructor(data?: PartialMessage<ClusterServiceListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.ClusterServiceListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "seed", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "purpose", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceListRequest {
    return new ClusterServiceListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceListRequest {
    return new ClusterServiceListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceListRequest {
    return new ClusterServiceListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterServiceListRequest | PlainMessage<ClusterServiceListRequest> | undefined, b: ClusterServiceListRequest | PlainMessage<ClusterServiceListRequest> | undefined): boolean {
    return proto3.util.equals(ClusterServiceListRequest, a, b);
  }
}

/**
 * ClusterServiceCredentialsRequest is the request payload for the cluster credentials request
 *
 * @generated from message admin.v1.ClusterServiceCredentialsRequest
 */
export class ClusterServiceCredentialsRequest extends Message<ClusterServiceCredentialsRequest> {
  /**
   * Uuid of the cluster
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * WithVpn if set VPN details are returned
   *
   * @generated from field: bool with_vpn = 2;
   */
  withVpn = false;

  /**
   * WithSsh if set ssh access credentials are returned
   *
   * @generated from field: bool with_ssh = 3;
   */
  withSsh = false;

  /**
   * Expiration defines the duration after which the kubernetes token is not valid anymore
   *
   * @generated from field: optional google.protobuf.Duration expiration = 4;
   */
  expiration?: Duration;

  constructor(data?: PartialMessage<ClusterServiceCredentialsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.ClusterServiceCredentialsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "with_vpn", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "with_ssh", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "expiration", kind: "message", T: Duration, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceCredentialsRequest {
    return new ClusterServiceCredentialsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceCredentialsRequest {
    return new ClusterServiceCredentialsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceCredentialsRequest {
    return new ClusterServiceCredentialsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterServiceCredentialsRequest | PlainMessage<ClusterServiceCredentialsRequest> | undefined, b: ClusterServiceCredentialsRequest | PlainMessage<ClusterServiceCredentialsRequest> | undefined): boolean {
    return proto3.util.equals(ClusterServiceCredentialsRequest, a, b);
  }
}

/**
 * ClusterServiceGetResponse is the response payload for the cluster get request
 *
 * @generated from message admin.v1.ClusterServiceGetResponse
 */
export class ClusterServiceGetResponse extends Message<ClusterServiceGetResponse> {
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
  machines: Machine[] = [];

  constructor(data?: PartialMessage<ClusterServiceGetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.ClusterServiceGetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cluster", kind: "message", T: Cluster },
    { no: 2, name: "machines", kind: "message", T: Machine, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceGetResponse {
    return new ClusterServiceGetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceGetResponse {
    return new ClusterServiceGetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceGetResponse {
    return new ClusterServiceGetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterServiceGetResponse | PlainMessage<ClusterServiceGetResponse> | undefined, b: ClusterServiceGetResponse | PlainMessage<ClusterServiceGetResponse> | undefined): boolean {
    return proto3.util.equals(ClusterServiceGetResponse, a, b);
  }
}

/**
 * ClusterServiceListResponse is the response payload for the cluster list request
 *
 * @generated from message admin.v1.ClusterServiceListResponse
 */
export class ClusterServiceListResponse extends Message<ClusterServiceListResponse> {
  /**
   * Clusters is the list of clusters
   *
   * @generated from field: repeated api.v1.Cluster clusters = 1;
   */
  clusters: Cluster[] = [];

  constructor(data?: PartialMessage<ClusterServiceListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.ClusterServiceListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "clusters", kind: "message", T: Cluster, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceListResponse {
    return new ClusterServiceListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceListResponse {
    return new ClusterServiceListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceListResponse {
    return new ClusterServiceListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterServiceListResponse | PlainMessage<ClusterServiceListResponse> | undefined, b: ClusterServiceListResponse | PlainMessage<ClusterServiceListResponse> | undefined): boolean {
    return proto3.util.equals(ClusterServiceListResponse, a, b);
  }
}

/**
 * ClusterServiceCredentialsResponse is the response payload for the cluster credentials request
 *
 * @generated from message admin.v1.ClusterServiceCredentialsResponse
 */
export class ClusterServiceCredentialsResponse extends Message<ClusterServiceCredentialsResponse> {
  /**
   * Kubeconfig is the access token for the kubernetes api of this cluster
   *
   * @generated from field: string kubeconfig = 1;
   */
  kubeconfig = "";

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

  constructor(data?: PartialMessage<ClusterServiceCredentialsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.ClusterServiceCredentialsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "kubeconfig", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ssh_keypair", kind: "message", T: SSHKeyPair },
    { no: 3, name: "vpn", kind: "message", T: VPN },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceCredentialsResponse {
    return new ClusterServiceCredentialsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceCredentialsResponse {
    return new ClusterServiceCredentialsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceCredentialsResponse {
    return new ClusterServiceCredentialsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterServiceCredentialsResponse | PlainMessage<ClusterServiceCredentialsResponse> | undefined, b: ClusterServiceCredentialsResponse | PlainMessage<ClusterServiceCredentialsResponse> | undefined): boolean {
    return proto3.util.equals(ClusterServiceCredentialsResponse, a, b);
  }
}

/**
 * SSHKeyPair details to access a firewall via ssh
 *
 * @generated from message admin.v1.SSHKeyPair
 */
export class SSHKeyPair extends Message<SSHKeyPair> {
  /**
   * Publickey is the public key
   *
   * @generated from field: bytes publickey = 1;
   */
  publickey = new Uint8Array(0);

  /**
   * Privatekey is the private key
   *
   * @generated from field: bytes privatekey = 2;
   */
  privatekey = new Uint8Array(0);

  constructor(data?: PartialMessage<SSHKeyPair>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.SSHKeyPair";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "publickey", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "privatekey", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SSHKeyPair {
    return new SSHKeyPair().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SSHKeyPair {
    return new SSHKeyPair().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SSHKeyPair {
    return new SSHKeyPair().fromJsonString(jsonString, options);
  }

  static equals(a: SSHKeyPair | PlainMessage<SSHKeyPair> | undefined, b: SSHKeyPair | PlainMessage<SSHKeyPair> | undefined): boolean {
    return proto3.util.equals(SSHKeyPair, a, b);
  }
}

