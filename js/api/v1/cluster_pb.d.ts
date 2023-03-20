import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * Types
 *
 * @generated from message api.v1.Cluster
 */
export declare class Cluster extends Message<Cluster> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string project = 3;
     */
    project: string;
    /**
     * partition is part of a region
     *
     * @generated from field: string partition = 4;
     */
    partition: string;
    /**
     * @generated from field: api.v1.KubernetesSpec kubernetes = 5;
     */
    kubernetes?: KubernetesSpec;
    /**
     * @generated from field: repeated api.v1.Worker workers = 6;
     */
    workers: Worker[];
    /**
     * @generated from field: api.v1.Maintenance maintenance = 7;
     */
    maintenance?: Maintenance;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 10;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 11;
     */
    updatedAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp deleted_at = 12;
     */
    deletedAt?: Timestamp;
    /**
     * @generated from field: api.v1.ClusterStatus status = 20;
     */
    status?: ClusterStatus;
    constructor(data?: PartialMessage<Cluster>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Cluster";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Cluster;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Cluster;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Cluster;
    static equals(a: Cluster | PlainMessage<Cluster> | undefined, b: Cluster | PlainMessage<Cluster> | undefined): boolean;
}
/**
 * @generated from message api.v1.KubernetesSpec
 */
export declare class KubernetesSpec extends Message<KubernetesSpec> {
    /**
     * @generated from field: string version = 1;
     */
    version: string;
    constructor(data?: PartialMessage<KubernetesSpec>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.KubernetesSpec";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KubernetesSpec;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KubernetesSpec;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KubernetesSpec;
    static equals(a: KubernetesSpec | PlainMessage<KubernetesSpec> | undefined, b: KubernetesSpec | PlainMessage<KubernetesSpec> | undefined): boolean;
}
/**
 * @generated from message api.v1.Maintenance
 */
export declare class Maintenance extends Message<Maintenance> {
    /**
     * @generated from field: optional bool kubernetes_autoupdate = 1;
     */
    kubernetesAutoupdate?: boolean;
    /**
     * @generated from field: optional bool machineimage_autoupdate = 2;
     */
    machineimageAutoupdate?: boolean;
    /**
     * @generated from field: api.v1.MaintenanceTimeWindow time_window = 3;
     */
    timeWindow?: MaintenanceTimeWindow;
    constructor(data?: PartialMessage<Maintenance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Maintenance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Maintenance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Maintenance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Maintenance;
    static equals(a: Maintenance | PlainMessage<Maintenance> | undefined, b: Maintenance | PlainMessage<Maintenance> | undefined): boolean;
}
/**
 * @generated from message api.v1.MaintenanceTimeWindow
 */
export declare class MaintenanceTimeWindow extends Message<MaintenanceTimeWindow> {
    /**
     * @generated from field: google.protobuf.Timestamp begin = 1;
     */
    begin?: Timestamp;
    /**
     * @generated from field: google.protobuf.Duration duration = 2;
     */
    duration?: Duration;
    constructor(data?: PartialMessage<MaintenanceTimeWindow>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MaintenanceTimeWindow";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MaintenanceTimeWindow;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MaintenanceTimeWindow;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MaintenanceTimeWindow;
    static equals(a: MaintenanceTimeWindow | PlainMessage<MaintenanceTimeWindow> | undefined, b: MaintenanceTimeWindow | PlainMessage<MaintenanceTimeWindow> | undefined): boolean;
}
/**
 * @generated from message api.v1.Worker
 */
export declare class Worker extends Message<Worker> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string machine_type = 2;
     */
    machineType: string;
    /**
     * @generated from field: uint32 minsize = 3;
     */
    minsize: number;
    /**
     * @generated from field: uint32 maxsize = 4;
     */
    maxsize: number;
    /**
     * @generated from field: uint32 maxsurge = 5;
     */
    maxsurge: number;
    /**
     * @generated from field: uint32 maxunavailable = 6;
     */
    maxunavailable: number;
    constructor(data?: PartialMessage<Worker>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Worker";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Worker;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Worker;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Worker;
    static equals(a: Worker | PlainMessage<Worker> | undefined, b: Worker | PlainMessage<Worker> | undefined): boolean;
}
/**
 * @generated from message api.v1.WorkerUpdate
 */
export declare class WorkerUpdate extends Message<WorkerUpdate> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: optional string machine_type = 2;
     */
    machineType?: string;
    /**
     * @generated from field: optional uint32 minsize = 3;
     */
    minsize?: number;
    /**
     * @generated from field: optional uint32 maxsize = 4;
     */
    maxsize?: number;
    /**
     * @generated from field: optional uint32 maxsurge = 5;
     */
    maxsurge?: number;
    /**
     * @generated from field: optional uint32 maxunavailable = 6;
     */
    maxunavailable?: number;
    constructor(data?: PartialMessage<WorkerUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.WorkerUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkerUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkerUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkerUpdate;
    static equals(a: WorkerUpdate | PlainMessage<WorkerUpdate> | undefined, b: WorkerUpdate | PlainMessage<WorkerUpdate> | undefined): boolean;
}
/**
 * Requests
 *
 * @generated from message api.v1.ClusterServiceGetRequest
 */
export declare class ClusterServiceGetRequest extends Message<ClusterServiceGetRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<ClusterServiceGetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceGetRequest;
    static equals(a: ClusterServiceGetRequest | PlainMessage<ClusterServiceGetRequest> | undefined, b: ClusterServiceGetRequest | PlainMessage<ClusterServiceGetRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.ClusterServiceGetCredentialsRequest
 */
export declare class ClusterServiceGetCredentialsRequest extends Message<ClusterServiceGetCredentialsRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<ClusterServiceGetCredentialsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterServiceGetCredentialsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceGetCredentialsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceGetCredentialsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceGetCredentialsRequest;
    static equals(a: ClusterServiceGetCredentialsRequest | PlainMessage<ClusterServiceGetCredentialsRequest> | undefined, b: ClusterServiceGetCredentialsRequest | PlainMessage<ClusterServiceGetCredentialsRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.ClusterServiceListRequest
 */
export declare class ClusterServiceListRequest extends Message<ClusterServiceListRequest> {
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<ClusterServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceListRequest;
    static equals(a: ClusterServiceListRequest | PlainMessage<ClusterServiceListRequest> | undefined, b: ClusterServiceListRequest | PlainMessage<ClusterServiceListRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.ClusterServiceCreateRequest
 */
export declare class ClusterServiceCreateRequest extends Message<ClusterServiceCreateRequest> {
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string project = 3;
     */
    project: string;
    /**
     * partition is part of a region
     *
     * @generated from field: string partition = 4;
     */
    partition: string;
    /**
     * @generated from field: api.v1.KubernetesSpec kubernetes = 6;
     */
    kubernetes?: KubernetesSpec;
    /**
     * @generated from field: repeated api.v1.Worker workers = 7;
     */
    workers: Worker[];
    /**
     * @generated from field: api.v1.Maintenance maintenance = 8;
     */
    maintenance?: Maintenance;
    constructor(data?: PartialMessage<ClusterServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceCreateRequest;
    static equals(a: ClusterServiceCreateRequest | PlainMessage<ClusterServiceCreateRequest> | undefined, b: ClusterServiceCreateRequest | PlainMessage<ClusterServiceCreateRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.ClusterServiceUpdateRequest
 */
export declare class ClusterServiceUpdateRequest extends Message<ClusterServiceUpdateRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    /**
     * @generated from field: optional api.v1.KubernetesSpec kubernetes = 3;
     */
    kubernetes?: KubernetesSpec;
    /**
     * @generated from field: repeated api.v1.WorkerUpdate workers = 4;
     */
    workers: WorkerUpdate[];
    /**
     * @generated from field: optional api.v1.Maintenance maintenance = 5;
     */
    maintenance?: Maintenance;
    constructor(data?: PartialMessage<ClusterServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceUpdateRequest;
    static equals(a: ClusterServiceUpdateRequest | PlainMessage<ClusterServiceUpdateRequest> | undefined, b: ClusterServiceUpdateRequest | PlainMessage<ClusterServiceUpdateRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.ClusterServiceDeleteRequest
 */
export declare class ClusterServiceDeleteRequest extends Message<ClusterServiceDeleteRequest> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<ClusterServiceDeleteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterServiceDeleteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceDeleteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceDeleteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceDeleteRequest;
    static equals(a: ClusterServiceDeleteRequest | PlainMessage<ClusterServiceDeleteRequest> | undefined, b: ClusterServiceDeleteRequest | PlainMessage<ClusterServiceDeleteRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.ClusterServiceWatchStatusRequest
 */
export declare class ClusterServiceWatchStatusRequest extends Message<ClusterServiceWatchStatusRequest> {
    /**
     * @generated from field: optional string uuid = 1;
     */
    uuid?: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<ClusterServiceWatchStatusRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterServiceWatchStatusRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceWatchStatusRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceWatchStatusRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceWatchStatusRequest;
    static equals(a: ClusterServiceWatchStatusRequest | PlainMessage<ClusterServiceWatchStatusRequest> | undefined, b: ClusterServiceWatchStatusRequest | PlainMessage<ClusterServiceWatchStatusRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.ClusterStatus
 */
export declare class ClusterStatus extends Message<ClusterStatus> {
    /**
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * @generated from field: uint32 progress = 2;
     */
    progress: number;
    /**
     * @generated from field: string state = 3;
     */
    state: string;
    /**
     * @generated from field: string type = 4;
     */
    type: string;
    /**
     * @generated from field: string api_server_ready = 10;
     */
    apiServerReady: string;
    /**
     * @generated from field: string control_plane_ready = 11;
     */
    controlPlaneReady: string;
    /**
     * @generated from field: string nodes_ready = 12;
     */
    nodesReady: string;
    /**
     * @generated from field: string system_components_ready = 13;
     */
    systemComponentsReady: string;
    constructor(data?: PartialMessage<ClusterStatus>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterStatus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterStatus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterStatus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterStatus;
    static equals(a: ClusterStatus | PlainMessage<ClusterStatus> | undefined, b: ClusterStatus | PlainMessage<ClusterStatus> | undefined): boolean;
}
/**
 * Responses
 *
 * @generated from message api.v1.ClusterServiceCreateResponse
 */
export declare class ClusterServiceCreateResponse extends Message<ClusterServiceCreateResponse> {
    /**
     * @generated from field: api.v1.Cluster cluster = 1;
     */
    cluster?: Cluster;
    constructor(data?: PartialMessage<ClusterServiceCreateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterServiceCreateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceCreateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceCreateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceCreateResponse;
    static equals(a: ClusterServiceCreateResponse | PlainMessage<ClusterServiceCreateResponse> | undefined, b: ClusterServiceCreateResponse | PlainMessage<ClusterServiceCreateResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.ClusterServiceGetResponse
 */
export declare class ClusterServiceGetResponse extends Message<ClusterServiceGetResponse> {
    /**
     * @generated from field: api.v1.Cluster cluster = 1;
     */
    cluster?: Cluster;
    constructor(data?: PartialMessage<ClusterServiceGetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceGetResponse;
    static equals(a: ClusterServiceGetResponse | PlainMessage<ClusterServiceGetResponse> | undefined, b: ClusterServiceGetResponse | PlainMessage<ClusterServiceGetResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.ClusterServiceGetCredentialsResponse
 */
export declare class ClusterServiceGetCredentialsResponse extends Message<ClusterServiceGetCredentialsResponse> {
    /**
     * @generated from field: string kubeconfig = 1;
     */
    kubeconfig: string;
    constructor(data?: PartialMessage<ClusterServiceGetCredentialsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterServiceGetCredentialsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceGetCredentialsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceGetCredentialsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceGetCredentialsResponse;
    static equals(a: ClusterServiceGetCredentialsResponse | PlainMessage<ClusterServiceGetCredentialsResponse> | undefined, b: ClusterServiceGetCredentialsResponse | PlainMessage<ClusterServiceGetCredentialsResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.ClusterServiceDeleteResponse
 */
export declare class ClusterServiceDeleteResponse extends Message<ClusterServiceDeleteResponse> {
    /**
     * @generated from field: api.v1.Cluster cluster = 1;
     */
    cluster?: Cluster;
    constructor(data?: PartialMessage<ClusterServiceDeleteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterServiceDeleteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceDeleteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceDeleteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceDeleteResponse;
    static equals(a: ClusterServiceDeleteResponse | PlainMessage<ClusterServiceDeleteResponse> | undefined, b: ClusterServiceDeleteResponse | PlainMessage<ClusterServiceDeleteResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.ClusterServiceUpdateResponse
 */
export declare class ClusterServiceUpdateResponse extends Message<ClusterServiceUpdateResponse> {
    /**
     * @generated from field: api.v1.Cluster cluster = 1;
     */
    cluster?: Cluster;
    constructor(data?: PartialMessage<ClusterServiceUpdateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterServiceUpdateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceUpdateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceUpdateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceUpdateResponse;
    static equals(a: ClusterServiceUpdateResponse | PlainMessage<ClusterServiceUpdateResponse> | undefined, b: ClusterServiceUpdateResponse | PlainMessage<ClusterServiceUpdateResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.ClusterServiceListResponse
 */
export declare class ClusterServiceListResponse extends Message<ClusterServiceListResponse> {
    /**
     * @generated from field: repeated api.v1.Cluster clusters = 1;
     */
    clusters: Cluster[];
    constructor(data?: PartialMessage<ClusterServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceListResponse;
    static equals(a: ClusterServiceListResponse | PlainMessage<ClusterServiceListResponse> | undefined, b: ClusterServiceListResponse | PlainMessage<ClusterServiceListResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.ClusterServiceWatchStatusResponse
 */
export declare class ClusterServiceWatchStatusResponse extends Message<ClusterServiceWatchStatusResponse> {
    /**
     * @generated from field: api.v1.ClusterStatus status = 1;
     */
    status?: ClusterStatus;
    constructor(data?: PartialMessage<ClusterServiceWatchStatusResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterServiceWatchStatusResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterServiceWatchStatusResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterServiceWatchStatusResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterServiceWatchStatusResponse;
    static equals(a: ClusterServiceWatchStatusResponse | PlainMessage<ClusterServiceWatchStatusResponse> | undefined, b: ClusterServiceWatchStatusResponse | PlainMessage<ClusterServiceWatchStatusResponse> | undefined): boolean;
}
