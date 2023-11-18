"use strict";
// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file admin/v1/machine.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.VPN = exports.MachineNetwork = exports.Machine = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from message admin.v1.Machine
 */
class Machine extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * @generated from field: string description = 3;
         */
        this.description = "";
        /**
         * @generated from field: string project = 4;
         */
        this.project = "";
        /**
         * @generated from field: string image = 5;
         */
        this.image = "";
        /**
         * @generated from field: string size = 6;
         */
        this.size = "";
        /**
         * @generated from field: repeated admin.v1.MachineNetwork machine_networks = 7;
         */
        this.machineNetworks = [];
        /**
         * @generated from field: string hostname = 8;
         */
        this.hostname = "";
        /**
         * @generated from field: string user_data = 9;
         */
        this.userData = "";
        /**
         * @generated from field: string role = 10;
         */
        this.role = "";
        /**
         * @generated from field: string creator = 11;
         */
        this.creator = "";
        /**
         * @generated from field: string partition = 13;
         */
        this.partition = "";
        /**
         * @generated from field: string rack = 14;
         */
        this.rack = "";
        /**
         * @generated from field: string state = 15;
         */
        this.state = "";
        /**
         * @generated from field: string liveliness = 16;
         */
        this.liveliness = "";
        /**
         * @generated from field: repeated string tags = 17;
         */
        this.tags = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Machine().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Machine().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Machine().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Machine, a, b);
    }
}
exports.Machine = Machine;
Machine.runtime = protobuf_1.proto3;
Machine.typeName = "admin.v1.Machine";
Machine.fields = protobuf_1.proto3.util.newFieldList(() => [
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
    { no: 12, name: "created", kind: "message", T: protobuf_1.Timestamp },
    { no: 13, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "rack", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "liveliness", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "tags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 18, name: "vpn", kind: "message", T: VPN },
]);
/**
 * @generated from message admin.v1.MachineNetwork
 */
class MachineNetwork extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string network = 1;
         */
        this.network = "";
        /**
         * @generated from field: repeated string prefixes = 2;
         */
        this.prefixes = [];
        /**
         * @generated from field: repeated string ips = 3;
         */
        this.ips = [];
        /**
         * @generated from field: repeated string destination_prefixes = 4;
         */
        this.destinationPrefixes = [];
        /**
         * @generated from field: string network_type = 5;
         */
        this.networkType = "";
        /**
         * @generated from field: uint32 vrf = 6;
         */
        this.vrf = 0;
        /**
         * @generated from field: int64 asn = 7;
         */
        this.asn = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MachineNetwork().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MachineNetwork().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MachineNetwork().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MachineNetwork, a, b);
    }
}
exports.MachineNetwork = MachineNetwork;
MachineNetwork.runtime = protobuf_1.proto3;
MachineNetwork.typeName = "admin.v1.MachineNetwork";
MachineNetwork.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "network", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "prefixes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "ips", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "destination_prefixes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "network_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "vrf", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "asn", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * @generated from message admin.v1.VPN
 */
class VPN extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * @generated from field: string authkey = 2;
         */
        this.authkey = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new VPN().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new VPN().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new VPN().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(VPN, a, b);
    }
}
exports.VPN = VPN;
VPN.runtime = protobuf_1.proto3;
VPN.typeName = "admin.v1.VPN";
VPN.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "authkey", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
