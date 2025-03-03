// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file admin/v1/machine.proto (package admin.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file admin/v1/machine.proto.
 */
export const file_admin_v1_machine: GenFile = /*@__PURE__*/
  fileDesc("ChZhZG1pbi92MS9tYWNoaW5lLnByb3RvEghhZG1pbi52MSL7AgoHTWFjaGluZRIMCgR1dWlkGAEgASgJEgwKBG5hbWUYAiABKAkSEwoLZGVzY3JpcHRpb24YAyABKAkSDwoHcHJvamVjdBgEIAEoCRINCgVpbWFnZRgFIAEoCRIMCgRzaXplGAYgASgJEjIKEG1hY2hpbmVfbmV0d29ya3MYByADKAsyGC5hZG1pbi52MS5NYWNoaW5lTmV0d29yaxIQCghob3N0bmFtZRgIIAEoCRIRCgl1c2VyX2RhdGEYCSABKAkSDAoEcm9sZRgKIAEoCRIPCgdjcmVhdG9yGAsgASgJEisKB2NyZWF0ZWQYDCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhEKCXBhcnRpdGlvbhgNIAEoCRIMCgRyYWNrGA4gASgJEg0KBXN0YXRlGA8gASgJEhIKCmxpdmVsaW5lc3MYECABKAkSDAoEdGFncxgRIAMoCRIaCgN2cG4YEiABKAsyDS5hZG1pbi52MS5WUE4ijgEKDk1hY2hpbmVOZXR3b3JrEg8KB25ldHdvcmsYASABKAkSEAoIcHJlZml4ZXMYAiADKAkSCwoDaXBzGAMgAygJEhwKFGRlc3RpbmF0aW9uX3ByZWZpeGVzGAQgAygJEhQKDG5ldHdvcmtfdHlwZRgFIAEoCRILCgN2cmYYBiABKA0SCwoDYXNuGAcgASgDIicKA1ZQThIPCgdhZGRyZXNzGAEgASgJEg8KB2F1dGhrZXkYAiABKAlCkwEKDGNvbS5hZG1pbi52MUIMTWFjaGluZVByb3RvUAFaNGdpdGh1Yi5jb20vbWV0YWwtc3RhY2stY2xvdWQvYXBpL2dvL2FkbWluL3YxO2FkbWludjGiAgNBWFiqAghBZG1pbi5WMcoCCEFkbWluXFYx4gIUQWRtaW5cVjFcR1BCTWV0YWRhdGHqAglBZG1pbjo6VjFiBnByb3RvMw", [file_google_protobuf_timestamp]);

/**
 * Machine is a metal-api machine
 *
 * @generated from message admin.v1.Machine
 */
export type Machine = Message<"admin.v1.Machine"> & {
  /**
   * Uuid of this machine
   *
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * Name of the machine
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * Description of the machine
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * Project this machine belongs to
   *
   * @generated from field: string project = 4;
   */
  project: string;

  /**
   * Image which is installed on this machine
   *
   * @generated from field: string image = 5;
   */
  image: string;

  /**
   * Size of this machine
   *
   * @generated from field: string size = 6;
   */
  size: string;

  /**
   * MachineNetworks is a list of networks this machine is connected to
   *
   * @generated from field: repeated admin.v1.MachineNetwork machine_networks = 7;
   */
  machineNetworks: MachineNetwork[];

  /**
   * Hostname of this machine
   *
   * @generated from field: string hostname = 8;
   */
  hostname: string;

  /**
   * UserDate which are used for bootstrapping
   *
   * @generated from field: string user_data = 9;
   */
  userData: string;

  /**
   * Role of this machine, can be either machine or firewall
   *
   * @generated from field: string role = 10;
   */
  role: string;

  /**
   * Creator is the user who ordered this machine
   *
   * @generated from field: string creator = 11;
   */
  creator: string;

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
  partition: string;

  /**
   * Rack where this machine resides
   *
   * @generated from field: string rack = 14;
   */
  rack: string;

  /**
   * State of this machine
   *
   * @generated from field: string state = 15;
   */
  state: string;

  /**
   * Liveliness of this machine
   *
   * @generated from field: string liveliness = 16;
   */
  liveliness: string;

  /**
   * Tags put on this machine
   *
   * @generated from field: repeated string tags = 17;
   */
  tags: string[];

  /**
   * Vpn details for this machine if any
   *
   * @generated from field: admin.v1.VPN vpn = 18;
   */
  vpn?: VPN;
};

/**
 * Describes the message admin.v1.Machine.
 * Use `create(MachineSchema)` to create a new message.
 */
export const MachineSchema: GenMessage<Machine> = /*@__PURE__*/
  messageDesc(file_admin_v1_machine, 0);

/**
 * MachineNetwork describes the details of the network connectivity of a machine
 *
 * @generated from message admin.v1.MachineNetwork
 */
export type MachineNetwork = Message<"admin.v1.MachineNetwork"> & {
  /**
   * Network is the uuid of this network
   *
   * @generated from field: string network = 1;
   */
  network: string;

  /**
   * Prefixes available in this network
   *
   * @generated from field: repeated string prefixes = 2;
   */
  prefixes: string[];

  /**
   * Ips attached for the machine in this network
   *
   * @generated from field: repeated string ips = 3;
   */
  ips: string[];

  /**
   * DestinationPrefixes define for which prefixes destination routes are defined
   *
   * @generated from field: repeated string destination_prefixes = 4;
   */
  destinationPrefixes: string[];

  /**
   * NetworkType of this network
   *
   * @generated from field: string network_type = 5;
   */
  networkType: string;

  /**
   * Vrf is the VRF number of this network
   *
   * @generated from field: uint32 vrf = 6;
   */
  vrf: number;

  /**
   * Asn is the ASN number of this machine in this network
   *
   * @generated from field: int64 asn = 7;
   */
  asn: bigint;
};

/**
 * Describes the message admin.v1.MachineNetwork.
 * Use `create(MachineNetworkSchema)` to create a new message.
 */
export const MachineNetworkSchema: GenMessage<MachineNetwork> = /*@__PURE__*/
  messageDesc(file_admin_v1_machine, 1);

/**
 * VPN Details for a machine
 *
 * @generated from message admin.v1.VPN
 */
export type VPN = Message<"admin.v1.VPN"> & {
  /**
   * Address is the ipv4 or ipv6 ip address of the machine in the VPN
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * Authkey is the authentication key to join the network
   *
   * @generated from field: string authkey = 2;
   */
  authkey: string;
};

/**
 * Describes the message admin.v1.VPN.
 * Use `create(VPNSchema)` to create a new message.
 */
export const VPNSchema: GenMessage<VPN> = /*@__PURE__*/
  messageDesc(file_admin_v1_machine, 2);

