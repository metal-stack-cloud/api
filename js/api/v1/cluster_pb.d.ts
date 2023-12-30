import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * Cluster describes a kubernetes cluster
 *
 * @generated from message api.v1.Cluster
 */
export declare class Cluster extends Message<Cluster> {
    /**
     * Uuid of the cluster
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Name of the cluster
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Project where this cluster belongs to
     *
     * @generated from field: string project = 3;
     */
    project: string;
    /**
     * Partition where this cluster was created
     *
     * @generated from field: string partition = 4;
     */
    partition: string;
    /**
     * Kubernetes defines the kubernetes specifications of this cluster
     *
     * @generated from field: api.v1.KubernetesSpec kubernetes = 5;
     */
    kubernetes?: KubernetesSpec;
    /**
     * Workers defines the list of worker groups with their specification
     *
     * @generated from field: repeated api.v1.Worker workers = 6;
     */
    workers: Worker[];
    /**
     * Maintenance defines when automated actions on this cluster should be scheduled
     *
     * @generated from field: api.v1.Maintenance maintenance = 7;
     */
    maintenance?: Maintenance;
    /**
     * Tenant where this cluster belongs to
     *
     * @generated from field: string tenant = 8;
     */
    tenant: string;
    /**
     * CreatedAt defines the date when this cluster was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 10;
     */
    createdAt?: Timestamp;
    /**
     * UpdatedAt defines the date when this cluster was updated
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 11;
     */
    updatedAt?: Timestamp;
    /**
     * DeletedAt defines the date when this cluster was deleted
     *
     * @generated from field: google.protobuf.Timestamp deleted_at = 12;
     */
    deletedAt?: Timestamp;
    /**
     * Status of this cluster
     *
     * @generated from field: api.v1.ClusterStatus status = 20;
     */
    status?: ClusterStatus;
    /**
     * Purpose of this cluster, can be for example production, development or evaluation
     *
     * @generated from field: optional string purpose = 21;
     */
    purpose?: string;
    /**
     * Monitoring details for this cluster
     *
     * @generated from field: api.v1.ClusterMonitoring monitoring = 22;
     */
    monitoring?: ClusterMonitoring;
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
 * KubernetesSpec details of kubernetes this cluster
 *
 * @generated from message api.v1.KubernetesSpec
 */
export declare class KubernetesSpec extends Message<KubernetesSpec> {
    /**
     * Version of kubernetes
     *
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
 * Maintenance defines when automatic actions should be scheduled on this cluster
 *
 * @generated from message api.v1.Maintenance
 */
export declare class Maintenance extends Message<Maintenance> {
    /**
     * KubernetesAutoupdate if set to true, kubernetes patch version updates will be done in the maintenance window
     *
     * @generated from field: optional bool kubernetes_autoupdate = 1;
     */
    kubernetesAutoupdate?: boolean;
    /**
     * MachineimageAutoupdate if set to true, machine images will be automatically update by rolling nodes in the maintenance window
     *
     * @generated from field: optional bool machineimage_autoupdate = 2;
     */
    machineimageAutoupdate?: boolean;
    /**
     * TimeWindow defines the start time and duration during which automatic actions will be performed
     *
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
 * MaintenanceTimeWindow defines the start time and duration during which automatic actions will be performed
 *
 * @generated from message api.v1.MaintenanceTimeWindow
 */
export declare class MaintenanceTimeWindow extends Message<MaintenanceTimeWindow> {
    /**
     * Begin of the time window
     *
     * @generated from field: google.protobuf.Timestamp begin = 1;
     */
    begin?: Timestamp;
    /**
     * Duration of the time window
     *
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
 * Worker defines a set of worker nodes with identical properties
 *
 * @generated from message api.v1.Worker
 */
export declare class Worker extends Message<Worker> {
    /**
     * Name of this worker group
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * MachineType of machines which should be used for the worker nodes in this group
     *
     * @generated from field: string machine_type = 2;
     */
    machineType: string;
    /**
     * Minsize defines the minimum amount of machines present in this worker group
     *
     * @generated from field: uint32 minsize = 3;
     */
    minsize: number;
    /**
     * Maxsize defines the maximum amount of machines present in this worker group
     *
     * @generated from field: uint32 maxsize = 4;
     */
    maxsize: number;
    /**
     * Maxsurge defines the maximum amount of machines which are spun up in this worker group during a rolling upgrade
     *
     * @generated from field: uint32 maxsurge = 5;
     */
    maxsurge: number;
    /**
     * Maxunavailable defines the maximum amount of not available machines in this worker group during a rolling upgrade
     *
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
 * WorkerUpdate is used to update a Worker group
 *
 * @generated from message api.v1.WorkerUpdate
 */
export declare class WorkerUpdate extends Message<WorkerUpdate> {
    /**
     * Name of the worker group to update
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * MachineType to change in this worker group
     *
     * @generated from field: optional string machine_type = 2;
     */
    machineType?: string;
    /**
     * Minsize defines the minimum amount of machines present in this worker group
     *
     * @generated from field: optional uint32 minsize = 3;
     */
    minsize?: number;
    /**
     * Maxsize defines the maximum amount of machines present in this worker group
     *
     * @generated from field: optional uint32 maxsize = 4;
     */
    maxsize?: number;
    /**
     * Maxsurge defines the maximum amount of machines which are spun up in this worker group during a rolling upgrade
     *
     * @generated from field: optional uint32 maxsurge = 5;
     */
    maxsurge?: number;
    /**
     * Maxunavailable defines the maximum amount of not available machines in this worker group during a rolling upgrade
     *
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
 * ClusterServiceGetRequest is the request payload for a cluster get request
 *
 * @generated from message api.v1.ClusterServiceGetRequest
 */
export declare class ClusterServiceGetRequest extends Message<ClusterServiceGetRequest> {
    /**
     * Uuid of the cluster
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Project of the cluster
     *
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
 * ClusterServiceGetRequest is the request payload for a cluster get request
 *
 * @generated from message api.v1.ClusterServiceGetCredentialsRequest
 */
export declare class ClusterServiceGetCredentialsRequest extends Message<ClusterServiceGetCredentialsRequest> {
    /**
     * Uuid of the cluster
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Project of the cluster
     *
     * @generated from field: string project = 2;
     */
    project: string;
    /**
     * Expiration defines the duration after which the requested kubernetes access token can not be used anymore
     *
     * @generated from field: optional google.protobuf.Duration expiration = 4;
     */
    expiration?: Duration;
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
 * ClusterServiceListRequest is the request payload for a cluster list request
 *
 * @generated from message api.v1.ClusterServiceListRequest
 */
export declare class ClusterServiceListRequest extends Message<ClusterServiceListRequest> {
    /**
     * Project of the cluster
     *
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
 * ClusterServiceCreateRequest is the request payload for a cluster create request
 *
 * @generated from message api.v1.ClusterServiceCreateRequest
 */
export declare class ClusterServiceCreateRequest extends Message<ClusterServiceCreateRequest> {
    /**
     * Name of the cluster to create
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Project of the cluster
     *
     * @generated from field: string project = 3;
     */
    project: string;
    /**
     * Partition of the cluster
     *
     * @generated from field: string partition = 4;
     */
    partition: string;
    /**
     * Kubernetes specification of the cluster
     *
     * @generated from field: api.v1.KubernetesSpec kubernetes = 6;
     */
    kubernetes?: KubernetesSpec;
    /**
     * Worker specification of the cluster
     *
     * @generated from field: repeated api.v1.Worker workers = 7;
     */
    workers: Worker[];
    /**
     * Maintenance specification of the cluster
     *
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
 * ClusterServiceUpdateRequest is the request payload for a cluster update request
 *
 * @generated from message api.v1.ClusterServiceUpdateRequest
 */
export declare class ClusterServiceUpdateRequest extends Message<ClusterServiceUpdateRequest> {
    /**
     * Uuid of the cluster
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Project of the cluster
     *
     * @generated from field: string project = 2;
     */
    project: string;
    /**
     * Kubernetes specification of the cluster
     *
     * @generated from field: optional api.v1.KubernetesSpec kubernetes = 3;
     */
    kubernetes?: KubernetesSpec;
    /**
     * Worker specification of the cluster
     *
     * @generated from field: repeated api.v1.WorkerUpdate workers = 4;
     */
    workers: WorkerUpdate[];
    /**
     * Maintenance specification of the cluster
     *
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
 * ClusterServiceDeleteRequest is the request payload for a cluster delete request
 *
 * @generated from message api.v1.ClusterServiceDeleteRequest
 */
export declare class ClusterServiceDeleteRequest extends Message<ClusterServiceDeleteRequest> {
    /**
     * Uuid of the cluster
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Project of the cluster
     *
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
 * ClusterServiceWatchStatusRequest is the request payload for a cluster watch status request
 *
 * @generated from message api.v1.ClusterServiceWatchStatusRequest
 */
export declare class ClusterServiceWatchStatusRequest extends Message<ClusterServiceWatchStatusRequest> {
    /**
     * Uuid of the cluster
     *
     * @generated from field: optional string uuid = 1;
     */
    uuid?: string;
    /**
     * Project of the cluster
     *
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
 * ClusterStatus
 *
 * @generated from message api.v1.ClusterStatus
 */
export declare class ClusterStatus extends Message<ClusterStatus> {
    /**
     * Uuid of the cluster
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Progress of the cluster reconcilation
     *
     * @generated from field: uint32 progress = 2;
     */
    progress: number;
    /**
     * State of the cluster
     *
     * @generated from field: string state = 3;
     */
    state: string;
    /**
     * Type of the cluster status
     *
     * @generated from field: string type = 4;
     */
    type: string;
    /**
     * ApiServerReady represents the ready state of the kubernetes api server
     *
     * @generated from field: string api_server_ready = 10;
     */
    apiServerReady: string;
    /**
     * ControlPlaneReady represents the ready state of the control plane components
     *
     * @generated from field: string control_plane_ready = 11;
     */
    controlPlaneReady: string;
    /**
     * NodesReady represents the ready state of the worker nodes
     *
     * @generated from field: string nodes_ready = 12;
     */
    nodesReady: string;
    /**
     * SystemComponentsReady represents the ready state of the system components
     *
     * @generated from field: string system_components_ready = 13;
     */
    systemComponentsReady: string;
    /**
     * LastErrors is a list of the last known errors occured during the cluster reconcilation
     *
     * @generated from field: repeated api.v1.ClusterStatusLastError last_errors = 14;
     */
    lastErrors: ClusterStatusLastError[];
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
 * ClusterStatusLastError is the last known cluster status error
 *
 * @generated from message api.v1.ClusterStatusLastError
 */
export declare class ClusterStatusLastError extends Message<ClusterStatusLastError> {
    /**
     * Description a human readable message indicating details about the last error.
     *
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * TaskId ID of the task which caused this last error
     * +optional
     *
     * @generated from field: optional string task_id = 2;
     */
    taskId?: string;
    /**
     * Codes well-defined error codes of the last error(s).
     * +optional
     *
     * @generated from field: repeated string codes = 3;
     */
    codes: string[];
    /**
     * LastUpdateTime last time the error was reported
     * +optional
     *
     * @generated from field: google.protobuf.Timestamp last_update_time = 4;
     */
    lastUpdateTime?: Timestamp;
    constructor(data?: PartialMessage<ClusterStatusLastError>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterStatusLastError";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterStatusLastError;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterStatusLastError;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterStatusLastError;
    static equals(a: ClusterStatusLastError | PlainMessage<ClusterStatusLastError> | undefined, b: ClusterStatusLastError | PlainMessage<ClusterStatusLastError> | undefined): boolean;
}
/**
 * ClusterMonitoring contains details howto access the cluster monitoring
 *
 * @generated from message api.v1.ClusterMonitoring
 */
export declare class ClusterMonitoring extends Message<ClusterMonitoring> {
    /**
     * Username to access the monitoring
     *
     * @generated from field: string username = 1;
     */
    username: string;
    /**
     * Password to access the monitoring
     *
     * @generated from field: string password = 2;
     */
    password: string;
    /**
     * Endpoint is the url to access the monitoring
     *
     * @generated from field: string endpoint = 3;
     */
    endpoint: string;
    constructor(data?: PartialMessage<ClusterMonitoring>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.ClusterMonitoring";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterMonitoring;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterMonitoring;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterMonitoring;
    static equals(a: ClusterMonitoring | PlainMessage<ClusterMonitoring> | undefined, b: ClusterMonitoring | PlainMessage<ClusterMonitoring> | undefined): boolean;
}
/**
 * ClusterServiceCreateResponse is the response payload of a cluster create request
 *
 * @generated from message api.v1.ClusterServiceCreateResponse
 */
export declare class ClusterServiceCreateResponse extends Message<ClusterServiceCreateResponse> {
    /**
     * Cluster is the cluster
     *
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
 * ClusterServiceGetResponse is the response payload of a cluster get request
 *
 * @generated from message api.v1.ClusterServiceGetResponse
 */
export declare class ClusterServiceGetResponse extends Message<ClusterServiceGetResponse> {
    /**
     * Cluster is the cluster
     *
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
 * ClusterServiceGetCredentialsResponse is the response payload of a cluster get credentials request
 *
 * @generated from message api.v1.ClusterServiceGetCredentialsResponse
 */
export declare class ClusterServiceGetCredentialsResponse extends Message<ClusterServiceGetCredentialsResponse> {
    /**
     * Cluster is the cluster
     *
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
 * ClusterServiceDeleteResponse is the response payload of a cluster delete request
 *
 * @generated from message api.v1.ClusterServiceDeleteResponse
 */
export declare class ClusterServiceDeleteResponse extends Message<ClusterServiceDeleteResponse> {
    /**
     * Cluster is the cluster
     *
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
 * ClusterServiceUpdateResponse is the response payload of a cluster update request
 *
 * @generated from message api.v1.ClusterServiceUpdateResponse
 */
export declare class ClusterServiceUpdateResponse extends Message<ClusterServiceUpdateResponse> {
    /**
     * Cluster is the cluster
     *
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
 * ClusterServiceListResponse is the response payload of a cluster list request
 *
 * @generated from message api.v1.ClusterServiceListResponse
 */
export declare class ClusterServiceListResponse extends Message<ClusterServiceListResponse> {
    /**
     * Clusters a list of clusters
     *
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
 * ClusterServiceWatchStatusResponse is the response payload of a cluster watch status request
 *
 * @generated from message api.v1.ClusterServiceWatchStatusResponse
 */
export declare class ClusterServiceWatchStatusResponse extends Message<ClusterServiceWatchStatusResponse> {
    /**
     * Status the cluster status
     *
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
