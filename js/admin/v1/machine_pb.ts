// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file admin/v1/machine.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * Machine is a metal-api machine
 *
 * @generated from message admin.v1.Machine
 */
export class Machine extends Message<Machine> {
  /**
   * Uuid of this machine
   *
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * Name of the machine
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * Description of the machine
   *
   * @generated from field: string description = 3;
   */
  description = "";

  /**
   * Project this machine belongs to
   *
   * @generated from field: string project = 4;
   */
  project = "";

  /**
   * Image which is installed on this machine
   *
   * @generated from field: string image = 5;
   */
  image = "";

  /**
   * Size of this machine
   *
   * @generated from field: string size = 6;
   */
  size = "";

  /**
   * MachineNetworks is a list of networks this machine is connected to
   *
   * @generated from field: repeated admin.v1.MachineNetwork machine_networks = 7;
   */
  machineNetworks: MachineNetwork[] = [];

  /**
   * Hostname of this machine
   *
   * @generated from field: string hostname = 8;
   */
  hostname = "";

  /**
   * UserDate which are used for bootstrapping
   *
   * @generated from field: string user_data = 9;
   */
  userData = "";

  /**
   * Role of this machine, can be either machine or firewall
   *
   * @generated from field: string role = 10;
   */
  role = "";

  /**
   * Creator is the user who ordered this machine
   *
   * @generated from field: string creator = 11;
   */
  creator = "";

  /**
   * Created is the date when this machine was created
   *
   * @generated from field: google.protobuf.Timestamp created = 12;
   */
  created?: Timestamp;

  /**
   * Partition where this machine resides
   *
   * @generated from field: string partition = 13;
   */
  partition = "";

  /**
   * Rack where this machine resides
   *
   * @generated from field: string rack = 14;
   */
  rack = "";

  /**
   * State of this machine
   *
   * @generated from field: string state = 15;
   */
  state = "";

  /**
   * Liveliness of this machine
   *
   * @generated from field: string liveliness = 16;
   */
  liveliness = "";

  /**
   * Tags put on this machine
   *
   * @generated from field: repeated string tags = 17;
   */
  tags: string[] = [];

  /**
   * Vpn details for this machine if any
   *
   * @generated from field: admin.v1.VPN vpn = 18;
   */
  vpn?: VPN;

  constructor(data?: PartialMessage<Machine>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.Machine";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "size", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "machine_networks", kind: "message", T: MachineNetwork, repeated: true },
    { no: 8, name: "hostname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "user_data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "created", kind: "message", T: Timestamp },
    { no: 13, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "rack", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "liveliness", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "tags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 18, name: "vpn", kind: "message", T: VPN },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Machine {
    return new Machine().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Machine {
    return new Machine().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Machine {
    return new Machine().fromJsonString(jsonString, options);
  }

  static equals(a: Machine | PlainMessage<Machine> | undefined, b: Machine | PlainMessage<Machine> | undefined): boolean {
    return proto3.util.equals(Machine, a, b);
  }
}

/**
 * MachineNetwork describes the details of the network connectivity of a machine
 *
 * @generated from message admin.v1.MachineNetwork
 */
export class MachineNetwork extends Message<MachineNetwork> {
  /**
   * Network is the uuid of this network
   *
   * @generated from field: string network = 1;
   */
  network = "";

  /**
   * Prefixes available in this network
   *
   * @generated from field: repeated string prefixes = 2;
   */
  prefixes: string[] = [];

  /**
   * Ips attached for the machine in this network
   *
   * @generated from field: repeated string ips = 3;
   */
  ips: string[] = [];

  /**
   * DestinationPrefixes define for which prefixes destination routes are defined
   *
   * @generated from field: repeated string destination_prefixes = 4;
   */
  destinationPrefixes: string[] = [];

  /**
   * NetworkType of this network
   *
   * @generated from field: string network_type = 5;
   */
  networkType = "";

  /**
   * Vrf is the VRF number of this network
   *
   * @generated from field: uint32 vrf = 6;
   */
  vrf = 0;

  /**
   * Asn is the ASN number of this machine in this network
   *
   * @generated from field: int64 asn = 7;
   */
  asn = protoInt64.zero;

  constructor(data?: PartialMessage<MachineNetwork>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.MachineNetwork";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "network", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "prefixes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "ips", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "destination_prefixes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "network_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "vrf", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "asn", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MachineNetwork {
    return new MachineNetwork().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MachineNetwork {
    return new MachineNetwork().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MachineNetwork {
    return new MachineNetwork().fromJsonString(jsonString, options);
  }

  static equals(a: MachineNetwork | PlainMessage<MachineNetwork> | undefined, b: MachineNetwork | PlainMessage<MachineNetwork> | undefined): boolean {
    return proto3.util.equals(MachineNetwork, a, b);
  }
}

/**
 * VPN Details for a machine
 *
 * @generated from message admin.v1.VPN
 */
export class VPN extends Message<VPN> {
  /**
   * Address is the ipv4 or ipv6 ip address of the machine in the VPN
   *
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * Authkey is the authentication key to join the network
   *
   * @generated from field: string authkey = 2;
   */
  authkey = "";

  constructor(data?: PartialMessage<VPN>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.VPN";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "authkey", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VPN {
    return new VPN().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VPN {
    return new VPN().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VPN {
    return new VPN().fromJsonString(jsonString, options);
  }

  static equals(a: VPN | PlainMessage<VPN> | undefined, b: VPN | PlainMessage<VPN> | undefined): boolean {
    return proto3.util.equals(VPN, a, b);
  }
}

