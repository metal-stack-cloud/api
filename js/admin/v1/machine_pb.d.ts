import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * Machine is a metal-api machine
 *
 * @generated from message admin.v1.Machine
 */
export declare class Machine extends Message<Machine> {
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
    constructor(data?: PartialMessage<Machine>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.Machine";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Machine;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Machine;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Machine;
    static equals(a: Machine | PlainMessage<Machine> | undefined, b: Machine | PlainMessage<Machine> | undefined): boolean;
}
/**
 * MachineNetwork describes the details of the network connectivity of a machine
 *
 * @generated from message admin.v1.MachineNetwork
 */
export declare class MachineNetwork extends Message<MachineNetwork> {
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
    constructor(data?: PartialMessage<MachineNetwork>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.MachineNetwork";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MachineNetwork;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MachineNetwork;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MachineNetwork;
    static equals(a: MachineNetwork | PlainMessage<MachineNetwork> | undefined, b: MachineNetwork | PlainMessage<MachineNetwork> | undefined): boolean;
}
/**
 * VPN Details for a machine
 *
 * @generated from message admin.v1.VPN
 */
export declare class VPN extends Message<VPN> {
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
    constructor(data?: PartialMessage<VPN>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.VPN";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VPN;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VPN;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VPN;
    static equals(a: VPN | PlainMessage<VPN> | undefined, b: VPN | PlainMessage<VPN> | undefined): boolean;
}
