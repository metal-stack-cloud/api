import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from message admin.v1.Machine
 */
export declare class Machine extends Message<Machine> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: string project = 4;
     */
    project: string;
    /**
     * @generated from field: string image = 5;
     */
    image: string;
    /**
     * @generated from field: string size = 6;
     */
    size: string;
    /**
     * @generated from field: repeated admin.v1.MachineNetwork machine_networks = 7;
     */
    machineNetworks: MachineNetwork[];
    /**
     * @generated from field: string hostname = 8;
     */
    hostname: string;
    /**
     * @generated from field: string user_data = 9;
     */
    userData: string;
    /**
     * @generated from field: string role = 10;
     */
    role: string;
    /**
     * @generated from field: string creator = 11;
     */
    creator: string;
    /**
     * @generated from field: google.protobuf.Timestamp created = 12;
     */
    created?: Timestamp;
    /**
     * @generated from field: string partition = 13;
     */
    partition: string;
    /**
     * @generated from field: string rack = 14;
     */
    rack: string;
    /**
     * @generated from field: string state = 15;
     */
    state: string;
    /**
     * @generated from field: string liveliness = 16;
     */
    liveliness: string;
    /**
     * @generated from field: repeated string tags = 17;
     */
    tags: string[];
    /**
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
 * @generated from message admin.v1.MachineNetwork
 */
export declare class MachineNetwork extends Message<MachineNetwork> {
    /**
     * @generated from field: string network = 1;
     */
    network: string;
    /**
     * @generated from field: repeated string prefixes = 2;
     */
    prefixes: string[];
    /**
     * @generated from field: repeated string ips = 3;
     */
    ips: string[];
    /**
     * @generated from field: repeated string destination_prefixes = 4;
     */
    destinationPrefixes: string[];
    /**
     * @generated from field: string network_type = 5;
     */
    networkType: string;
    /**
     * @generated from field: uint32 vrf = 6;
     */
    vrf: number;
    /**
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
 * @generated from message admin.v1.VPN
 */
export declare class VPN extends Message<VPN> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
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
