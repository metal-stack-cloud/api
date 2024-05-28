import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * MachineRole defines the machine roles.
 *
 * @generated from enum api.v1.MachineRole
 */
export declare enum MachineRole {
    /**
     * MACHINE_ROLE_UNSPECIFIED is not specified
     *
     * @generated from enum value: MACHINE_ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * MACHINE_ROLE_MACHINE is a machine that serves as a normal machine
     *
     * @generated from enum value: MACHINE_ROLE_MACHINE = 1;
     */
    MACHINE = 1,
    /**
     * MACHINE_ROLE_FIREWALL is a machine that serves as a firewall
     *
     * @generated from enum value: MACHINE_ROLE_FIREWALL = 2;
     */
    FIREWALL = 2
}
/**
 * MachineState defines the machine states.
 *
 * @generated from enum api.v1.MachineState
 */
export declare enum MachineState {
    /**
     * MACHINE_ROLE_UNSPECIFIED is not specified
     *
     * @generated from enum value: MACHINE_STATE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * MACHINE_STATE_HEALTHY describes an healthy machine state.
     *
     * @generated from enum value: MACHINE_STATE_HEALTHY = 1;
     */
    HEALTHY = 1,
    /**
     * MACHINE_STATE_UNHEALTHY describes an unhealthy machine state.
     *
     * @generated from enum value: MACHINE_STATE_UNHEALTHY = 2;
     */
    UNHEALTHY = 2,
    /**
     * MACHINE_STATE_PROVISIONING describes a machine that is currently being provisioned.
     *
     * @generated from enum value: MACHINE_STATE_PROVISIONING = 3;
     */
    PROVISIONING = 3
}
/**
 * Machine describes a kubernetes machine
 *
 * @generated from message api.v1.Machine
 */
export declare class Machine extends Message<Machine> {
    /**
     * Uuid of the machine
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
     * Project where this machine belongs to
     *
     * @generated from field: string project = 3;
     */
    project: string;
    /**
     * AllocationUUID is a unique identifier for this machine allocation, can be used to distinguish between machine allocations over time
     *
     * @generated from field: string allocation_uuid = 4;
     */
    allocationUuid: string;
    /**
     * Hostname is the hostname of this machine
     *
     * @generated from field: string hostname = 5;
     */
    hostname: string;
    /**
     * Role defines the role of this machine
     *
     * @generated from field: api.v1.MachineRole role = 6;
     */
    role: MachineRole;
    /**
     * Partition where this machine was created
     *
     * @generated from field: string partition = 7;
     */
    partition: string;
    /**
     * Image is the OS image provisioned on this machine
     *
     * @generated from field: string image = 8;
     */
    image: string;
    /**
     * Size is the size of this machine.
     *
     * @generated from field: string size = 9;
     */
    size: string;
    /**
     * Tags are the tags associated with this machine
     *
     * @generated from field: map<string, string> tags = 10;
     */
    tags: {
        [key: string]: string;
    };
    /**
     * CreatedAt defines the date when this machine was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 15;
     */
    createdAt?: Timestamp;
    /**
     * UpdatedAt defines the date when this machine was updated
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 16;
     */
    updatedAt?: Timestamp;
    /**
     * DeletedAt defines the date when this machine was deleted
     *
     * @generated from field: google.protobuf.Timestamp deleted_at = 17;
     */
    deletedAt?: Timestamp;
    /**
     * MachineStatus describes the status of this machine
     *
     * @generated from field: api.v1.MachineStatus status = 20;
     */
    status?: MachineStatus;
    constructor(data?: PartialMessage<Machine>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Machine";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Machine;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Machine;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Machine;
    static equals(a: Machine | PlainMessage<Machine> | undefined, b: Machine | PlainMessage<Machine> | undefined): boolean;
}
/**
 * MachineServiceGetRequest is the request payload for a machine get request
 *
 * @generated from message api.v1.MachineServiceGetRequest
 */
export declare class MachineServiceGetRequest extends Message<MachineServiceGetRequest> {
    /**
     * Uuid of the machine
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Project of the machine
     *
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<MachineServiceGetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MachineServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MachineServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MachineServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MachineServiceGetRequest;
    static equals(a: MachineServiceGetRequest | PlainMessage<MachineServiceGetRequest> | undefined, b: MachineServiceGetRequest | PlainMessage<MachineServiceGetRequest> | undefined): boolean;
}
/**
 * MachineServiceListRequest is the request payload for a machine list request
 *
 * @generated from message api.v1.MachineServiceListRequest
 */
export declare class MachineServiceListRequest extends Message<MachineServiceListRequest> {
    /**
     * Project of the machine
     *
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<MachineServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MachineServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MachineServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MachineServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MachineServiceListRequest;
    static equals(a: MachineServiceListRequest | PlainMessage<MachineServiceListRequest> | undefined, b: MachineServiceListRequest | PlainMessage<MachineServiceListRequest> | undefined): boolean;
}
/**
 * MachineServiceCreateRequest is the request payload for a machine create request
 *
 * @generated from message api.v1.MachineServiceCreateRequest
 */
export declare class MachineServiceCreateRequest extends Message<MachineServiceCreateRequest> {
    /**
     * Name of the machine to create
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Project of the machine
     *
     * @generated from field: string project = 3;
     */
    project: string;
    /**
     * Partition of the machine
     *
     * @generated from field: string partition = 4;
     */
    partition: string;
    /**
     * Size is the size of the machine
     *
     * @generated from field: string size = 5;
     */
    size: string;
    /**
     * Image is the OS image provisioned on this machine
     *
     * @generated from field: string image = 6;
     */
    image: string;
    /**
     * UserData is the ignition or cloudinit configuration to bootstrap this machine with
     *
     * @generated from field: string user_data = 7;
     */
    userData: string;
    /**
     * Tags are additional tags to attach to this machine
     *
     * @generated from field: map<string, string> tags = 8;
     */
    tags: {
        [key: string]: string;
    };
    constructor(data?: PartialMessage<MachineServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MachineServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MachineServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MachineServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MachineServiceCreateRequest;
    static equals(a: MachineServiceCreateRequest | PlainMessage<MachineServiceCreateRequest> | undefined, b: MachineServiceCreateRequest | PlainMessage<MachineServiceCreateRequest> | undefined): boolean;
}
/**
 * MachineServiceDeleteRequest is the request payload for a machine delete request
 *
 * @generated from message api.v1.MachineServiceDeleteRequest
 */
export declare class MachineServiceDeleteRequest extends Message<MachineServiceDeleteRequest> {
    /**
     * Uuid of the machine
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Project of the machine
     *
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<MachineServiceDeleteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MachineServiceDeleteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MachineServiceDeleteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MachineServiceDeleteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MachineServiceDeleteRequest;
    static equals(a: MachineServiceDeleteRequest | PlainMessage<MachineServiceDeleteRequest> | undefined, b: MachineServiceDeleteRequest | PlainMessage<MachineServiceDeleteRequest> | undefined): boolean;
}
/**
 * MachineStatus
 *
 * @generated from message api.v1.MachineStatus
 */
export declare class MachineStatus extends Message<MachineStatus> {
    /**
     * State describes the current state of the machine
     *
     * @generated from field: api.v1.MachineState state = 1;
     */
    state: MachineState;
    /**
     * StateMessage describes the current state.
     *
     * @generated from field: string state_message = 2;
     */
    stateMessage: string;
    /**
     * Timestamp is the timestamp of the state.
     *
     * @generated from field: google.protobuf.Timestamp timestamp = 3;
     */
    timestamp?: Timestamp;
    constructor(data?: PartialMessage<MachineStatus>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MachineStatus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MachineStatus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MachineStatus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MachineStatus;
    static equals(a: MachineStatus | PlainMessage<MachineStatus> | undefined, b: MachineStatus | PlainMessage<MachineStatus> | undefined): boolean;
}
/**
 * MachineServiceCreateResponse is the response payload of a machine create request
 *
 * @generated from message api.v1.MachineServiceCreateResponse
 */
export declare class MachineServiceCreateResponse extends Message<MachineServiceCreateResponse> {
    /**
     * Machine is the machine
     *
     * @generated from field: api.v1.Machine machine = 1;
     */
    machine?: Machine;
    constructor(data?: PartialMessage<MachineServiceCreateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MachineServiceCreateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MachineServiceCreateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MachineServiceCreateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MachineServiceCreateResponse;
    static equals(a: MachineServiceCreateResponse | PlainMessage<MachineServiceCreateResponse> | undefined, b: MachineServiceCreateResponse | PlainMessage<MachineServiceCreateResponse> | undefined): boolean;
}
/**
 * MachineServiceGetResponse is the response payload of a machine get request
 *
 * @generated from message api.v1.MachineServiceGetResponse
 */
export declare class MachineServiceGetResponse extends Message<MachineServiceGetResponse> {
    /**
     * Machine is the machine
     *
     * @generated from field: api.v1.Machine machine = 1;
     */
    machine?: Machine;
    constructor(data?: PartialMessage<MachineServiceGetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MachineServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MachineServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MachineServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MachineServiceGetResponse;
    static equals(a: MachineServiceGetResponse | PlainMessage<MachineServiceGetResponse> | undefined, b: MachineServiceGetResponse | PlainMessage<MachineServiceGetResponse> | undefined): boolean;
}
/**
 * MachineServiceDeleteResponse is the response payload of a machine delete request
 *
 * @generated from message api.v1.MachineServiceDeleteResponse
 */
export declare class MachineServiceDeleteResponse extends Message<MachineServiceDeleteResponse> {
    /**
     * Machine is the machine
     *
     * @generated from field: api.v1.Machine machine = 1;
     */
    machine?: Machine;
    constructor(data?: PartialMessage<MachineServiceDeleteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MachineServiceDeleteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MachineServiceDeleteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MachineServiceDeleteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MachineServiceDeleteResponse;
    static equals(a: MachineServiceDeleteResponse | PlainMessage<MachineServiceDeleteResponse> | undefined, b: MachineServiceDeleteResponse | PlainMessage<MachineServiceDeleteResponse> | undefined): boolean;
}
/**
 * MachineServiceListResponse is the response payload of a machine list request
 *
 * @generated from message api.v1.MachineServiceListResponse
 */
export declare class MachineServiceListResponse extends Message<MachineServiceListResponse> {
    /**
     * Machines a list of machines
     *
     * @generated from field: repeated api.v1.Machine machines = 1;
     */
    machines: Machine[];
    constructor(data?: PartialMessage<MachineServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MachineServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MachineServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MachineServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MachineServiceListResponse;
    static equals(a: MachineServiceListResponse | PlainMessage<MachineServiceListResponse> | undefined, b: MachineServiceListResponse | PlainMessage<MachineServiceListResponse> | undefined): boolean;
}
