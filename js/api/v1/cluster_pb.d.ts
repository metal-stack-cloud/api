import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file api/v1/cluster.proto.
 */
export declare const file_api_v1_cluster: GenFile;
/**
 * Cluster describes a kubernetes cluster
 *
 * @generated from message api.v1.Cluster
 */
export type Cluster = Message<"api.v1.Cluster"> & {
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
};
/**
 * Describes the message api.v1.Cluster.
 * Use `create(ClusterSchema)` to create a new message.
 */
export declare const ClusterSchema: GenMessage<Cluster>;
/**
 * KubernetesSpec details of kubernetes this cluster
 *
 * @generated from message api.v1.KubernetesSpec
 */
export type KubernetesSpec = Message<"api.v1.KubernetesSpec"> & {
    /**
     * Version of kubernetes
     *
     * @generated from field: string version = 1;
     */
    version: string;
};
/**
 * Describes the message api.v1.KubernetesSpec.
 * Use `create(KubernetesSpecSchema)` to create a new message.
 */
export declare const KubernetesSpecSchema: GenMessage<KubernetesSpec>;
/**
 * Maintenance defines when automatic actions should be scheduled on this cluster
 *
 * @generated from message api.v1.Maintenance
 */
export type Maintenance = Message<"api.v1.Maintenance"> & {
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
};
/**
 * Describes the message api.v1.Maintenance.
 * Use `create(MaintenanceSchema)` to create a new message.
 */
export declare const MaintenanceSchema: GenMessage<Maintenance>;
/**
 * MaintenanceTimeWindow defines the start time and duration during which automatic actions will be performed
 *
 * @generated from message api.v1.MaintenanceTimeWindow
 */
export type MaintenanceTimeWindow = Message<"api.v1.MaintenanceTimeWindow"> & {
    /**
     * Begin of the MaintenanceTimeWindow
     *
     * @generated from field: api.v1.Time begin = 1;
     */
    begin?: Time;
    /**
     * Duration of the MaintenanceTimeWindow
     *
     * @generated from field: google.protobuf.Duration duration = 2;
     */
    duration?: Duration;
};
/**
 * Describes the message api.v1.MaintenanceTimeWindow.
 * Use `create(MaintenanceTimeWindowSchema)` to create a new message.
 */
export declare const MaintenanceTimeWindowSchema: GenMessage<MaintenanceTimeWindow>;
/**
 * Time of day
 *
 * @generated from message api.v1.Time
 */
export type Time = Message<"api.v1.Time"> & {
    /**
     * hour begin of the maintenance window, specified in 24 hour format.
     *
     * @generated from field: uint32 hour = 1;
     */
    hour: number;
    /**
     * hour:minute begin of the maintenance window.
     *
     * @generated from field: uint32 minute = 2;
     */
    minute: number;
    /**
     * timezone specifies for which region in the world the given hour:minute should apply.
     *
     * @generated from field: string timezone = 3;
     */
    timezone: string;
};
/**
 * Describes the message api.v1.Time.
 * Use `create(TimeSchema)` to create a new message.
 */
export declare const TimeSchema: GenMessage<Time>;
/**
 * Worker defines a set of worker nodes with identical properties
 *
 * @generated from message api.v1.Worker
 */
export type Worker = Message<"api.v1.Worker"> & {
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
};
/**
 * Describes the message api.v1.Worker.
 * Use `create(WorkerSchema)` to create a new message.
 */
export declare const WorkerSchema: GenMessage<Worker>;
/**
 * WorkerUpdate is used to update a Worker group
 *
 * @generated from message api.v1.WorkerUpdate
 */
export type WorkerUpdate = Message<"api.v1.WorkerUpdate"> & {
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
};
/**
 * Describes the message api.v1.WorkerUpdate.
 * Use `create(WorkerUpdateSchema)` to create a new message.
 */
export declare const WorkerUpdateSchema: GenMessage<WorkerUpdate>;
/**
 * ClusterServiceGetRequest is the request payload for a cluster get request
 *
 * @generated from message api.v1.ClusterServiceGetRequest
 */
export type ClusterServiceGetRequest = Message<"api.v1.ClusterServiceGetRequest"> & {
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
};
/**
 * Describes the message api.v1.ClusterServiceGetRequest.
 * Use `create(ClusterServiceGetRequestSchema)` to create a new message.
 */
export declare const ClusterServiceGetRequestSchema: GenMessage<ClusterServiceGetRequest>;
/**
 * ClusterServiceOperateRequest is the request payload for the cluster operate request
 *
 * @generated from message api.v1.ClusterServiceOperateRequest
 */
export type ClusterServiceOperateRequest = Message<"api.v1.ClusterServiceOperateRequest"> & {
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
     * Operate is the operation which should be performed
     *
     * @generated from field: api.v1.Operate operate = 3;
     */
    operate: Operate;
};
/**
 * Describes the message api.v1.ClusterServiceOperateRequest.
 * Use `create(ClusterServiceOperateRequestSchema)` to create a new message.
 */
export declare const ClusterServiceOperateRequestSchema: GenMessage<ClusterServiceOperateRequest>;
/**
 * ClusterServiceGetRequest is the request payload for a cluster get request
 *
 * @generated from message api.v1.ClusterServiceGetCredentialsRequest
 */
export type ClusterServiceGetCredentialsRequest = Message<"api.v1.ClusterServiceGetCredentialsRequest"> & {
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
};
/**
 * Describes the message api.v1.ClusterServiceGetCredentialsRequest.
 * Use `create(ClusterServiceGetCredentialsRequestSchema)` to create a new message.
 */
export declare const ClusterServiceGetCredentialsRequestSchema: GenMessage<ClusterServiceGetCredentialsRequest>;
/**
 * ClusterServiceListRequest is the request payload for a cluster list request
 *
 * @generated from message api.v1.ClusterServiceListRequest
 */
export type ClusterServiceListRequest = Message<"api.v1.ClusterServiceListRequest"> & {
    /**
     * Project of the cluster
     *
     * @generated from field: string project = 2;
     */
    project: string;
};
/**
 * Describes the message api.v1.ClusterServiceListRequest.
 * Use `create(ClusterServiceListRequestSchema)` to create a new message.
 */
export declare const ClusterServiceListRequestSchema: GenMessage<ClusterServiceListRequest>;
/**
 * ClusterServiceCreateRequest is the request payload for a cluster create request
 *
 * @generated from message api.v1.ClusterServiceCreateRequest
 */
export type ClusterServiceCreateRequest = Message<"api.v1.ClusterServiceCreateRequest"> & {
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
};
/**
 * Describes the message api.v1.ClusterServiceCreateRequest.
 * Use `create(ClusterServiceCreateRequestSchema)` to create a new message.
 */
export declare const ClusterServiceCreateRequestSchema: GenMessage<ClusterServiceCreateRequest>;
/**
 * ClusterServiceUpdateRequest is the request payload for a cluster update request
 *
 * @generated from message api.v1.ClusterServiceUpdateRequest
 */
export type ClusterServiceUpdateRequest = Message<"api.v1.ClusterServiceUpdateRequest"> & {
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
};
/**
 * Describes the message api.v1.ClusterServiceUpdateRequest.
 * Use `create(ClusterServiceUpdateRequestSchema)` to create a new message.
 */
export declare const ClusterServiceUpdateRequestSchema: GenMessage<ClusterServiceUpdateRequest>;
/**
 * ClusterServiceDeleteRequest is the request payload for a cluster delete request
 *
 * @generated from message api.v1.ClusterServiceDeleteRequest
 */
export type ClusterServiceDeleteRequest = Message<"api.v1.ClusterServiceDeleteRequest"> & {
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
};
/**
 * Describes the message api.v1.ClusterServiceDeleteRequest.
 * Use `create(ClusterServiceDeleteRequestSchema)` to create a new message.
 */
export declare const ClusterServiceDeleteRequestSchema: GenMessage<ClusterServiceDeleteRequest>;
/**
 * ClusterServiceWatchStatusRequest is the request payload for a cluster watch status request
 *
 * @generated from message api.v1.ClusterServiceWatchStatusRequest
 */
export type ClusterServiceWatchStatusRequest = Message<"api.v1.ClusterServiceWatchStatusRequest"> & {
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
};
/**
 * Describes the message api.v1.ClusterServiceWatchStatusRequest.
 * Use `create(ClusterServiceWatchStatusRequestSchema)` to create a new message.
 */
export declare const ClusterServiceWatchStatusRequestSchema: GenMessage<ClusterServiceWatchStatusRequest>;
/**
 * ClusterStatus
 *
 * @generated from message api.v1.ClusterStatus
 */
export type ClusterStatus = Message<"api.v1.ClusterStatus"> & {
    /**
     * Uuid of the cluster
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Progress of the cluster reconciliation
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
     * LastErrors is a list of the last known errors occurred during the cluster reconciliation
     *
     * @generated from field: repeated api.v1.ClusterStatusLastError last_errors = 14;
     */
    lastErrors: ClusterStatusLastError[];
    /**
     * ClusterStatusConditions is a list of status conditions of the cluster
     *
     * @generated from field: repeated api.v1.ClusterStatusCondition conditions = 15;
     */
    conditions: ClusterStatusCondition[];
    /**
     * AdvertisedAddresses is a list of status conditions of the cluster
     *
     * @generated from field: repeated api.v1.AdvertisedAddress advertised_addresses = 16;
     */
    advertisedAddresses: AdvertisedAddress[];
};
/**
 * Describes the message api.v1.ClusterStatus.
 * Use `create(ClusterStatusSchema)` to create a new message.
 */
export declare const ClusterStatusSchema: GenMessage<ClusterStatus>;
/**
 * AdvertisedAddress is a list of relevant addresses
 *
 * @generated from message api.v1.AdvertisedAddress
 */
export type AdvertisedAddress = Message<"api.v1.AdvertisedAddress"> & {
    /**
     * Name of the advertised address. e.g. external
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * The URL of the API Server. e.g. https://api.foo.bar or https://1.2.3.4
     *
     * @generated from field: string url = 2;
     */
    url: string;
};
/**
 * Describes the message api.v1.AdvertisedAddress.
 * Use `create(AdvertisedAddressSchema)` to create a new message.
 */
export declare const AdvertisedAddressSchema: GenMessage<AdvertisedAddress>;
/**
 * ClusterStatusLastError is the last known cluster status error
 *
 * @generated from message api.v1.ClusterStatusLastError
 */
export type ClusterStatusLastError = Message<"api.v1.ClusterStatusLastError"> & {
    /**
     * Description a human readable message indicating details about the last error
     *
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * TaskId ID of the task which caused this last error
     *
     * @generated from field: optional string task_id = 2;
     */
    taskId?: string;
    /**
     * LastUpdateTime last time the error was reported
     *
     * @generated from field: google.protobuf.Timestamp last_update_time = 4;
     */
    lastUpdateTime?: Timestamp;
};
/**
 * Describes the message api.v1.ClusterStatusLastError.
 * Use `create(ClusterStatusLastErrorSchema)` to create a new message.
 */
export declare const ClusterStatusLastErrorSchema: GenMessage<ClusterStatusLastError>;
/**
 * ClusterStatusCondition contains status conditions of a cluster
 *
 * @generated from message api.v1.ClusterStatusCondition
 */
export type ClusterStatusCondition = Message<"api.v1.ClusterStatusCondition"> & {
    /**
     * Type is the type of the condition
     *
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * Status is the status of the condition
     *
     * @generated from field: string status = 2;
     */
    status: string;
    /**
     * Reason describes the reason for the condition's last transition
     *
     * @generated from field: string reason = 3;
     */
    reason: string;
    /**
     * StatusMessage is a human readable message indicating details about the transition
     *
     * @generated from field: string status_message = 4;
     */
    statusMessage: string;
    /**
     * LastUpdateTime last time the condition transitioned
     *
     * @generated from field: google.protobuf.Timestamp last_transition_time = 5;
     */
    lastTransitionTime?: Timestamp;
    /**
     * LastUpdateTime last time the condition was updated
     *
     * @generated from field: google.protobuf.Timestamp last_update_time = 6;
     */
    lastUpdateTime?: Timestamp;
};
/**
 * Describes the message api.v1.ClusterStatusCondition.
 * Use `create(ClusterStatusConditionSchema)` to create a new message.
 */
export declare const ClusterStatusConditionSchema: GenMessage<ClusterStatusCondition>;
/**
 * ClusterMonitoring contains details howto access the cluster monitoring
 *
 * @generated from message api.v1.ClusterMonitoring
 */
export type ClusterMonitoring = Message<"api.v1.ClusterMonitoring"> & {
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
};
/**
 * Describes the message api.v1.ClusterMonitoring.
 * Use `create(ClusterMonitoringSchema)` to create a new message.
 */
export declare const ClusterMonitoringSchema: GenMessage<ClusterMonitoring>;
/**
 * ClusterServiceCreateResponse is the response payload of a cluster create request
 *
 * @generated from message api.v1.ClusterServiceCreateResponse
 */
export type ClusterServiceCreateResponse = Message<"api.v1.ClusterServiceCreateResponse"> & {
    /**
     * Cluster is the cluster
     *
     * @generated from field: api.v1.Cluster cluster = 1;
     */
    cluster?: Cluster;
};
/**
 * Describes the message api.v1.ClusterServiceCreateResponse.
 * Use `create(ClusterServiceCreateResponseSchema)` to create a new message.
 */
export declare const ClusterServiceCreateResponseSchema: GenMessage<ClusterServiceCreateResponse>;
/**
 * ClusterServiceGetResponse is the response payload of a cluster get request
 *
 * @generated from message api.v1.ClusterServiceGetResponse
 */
export type ClusterServiceGetResponse = Message<"api.v1.ClusterServiceGetResponse"> & {
    /**
     * Cluster is the cluster
     *
     * @generated from field: api.v1.Cluster cluster = 1;
     */
    cluster?: Cluster;
};
/**
 * Describes the message api.v1.ClusterServiceGetResponse.
 * Use `create(ClusterServiceGetResponseSchema)` to create a new message.
 */
export declare const ClusterServiceGetResponseSchema: GenMessage<ClusterServiceGetResponse>;
/**
 * ClusterServiceGetCredentialsResponse is the response payload of a cluster get credentials request
 *
 * @generated from message api.v1.ClusterServiceGetCredentialsResponse
 */
export type ClusterServiceGetCredentialsResponse = Message<"api.v1.ClusterServiceGetCredentialsResponse"> & {
    /**
     * Cluster is the cluster
     *
     * @generated from field: string kubeconfig = 1;
     */
    kubeconfig: string;
};
/**
 * Describes the message api.v1.ClusterServiceGetCredentialsResponse.
 * Use `create(ClusterServiceGetCredentialsResponseSchema)` to create a new message.
 */
export declare const ClusterServiceGetCredentialsResponseSchema: GenMessage<ClusterServiceGetCredentialsResponse>;
/**
 * ClusterServiceDeleteResponse is the response payload of a cluster delete request
 *
 * @generated from message api.v1.ClusterServiceDeleteResponse
 */
export type ClusterServiceDeleteResponse = Message<"api.v1.ClusterServiceDeleteResponse"> & {
    /**
     * Cluster is the cluster
     *
     * @generated from field: api.v1.Cluster cluster = 1;
     */
    cluster?: Cluster;
};
/**
 * Describes the message api.v1.ClusterServiceDeleteResponse.
 * Use `create(ClusterServiceDeleteResponseSchema)` to create a new message.
 */
export declare const ClusterServiceDeleteResponseSchema: GenMessage<ClusterServiceDeleteResponse>;
/**
 * ClusterServiceUpdateResponse is the response payload of a cluster update request
 *
 * @generated from message api.v1.ClusterServiceUpdateResponse
 */
export type ClusterServiceUpdateResponse = Message<"api.v1.ClusterServiceUpdateResponse"> & {
    /**
     * Cluster is the cluster
     *
     * @generated from field: api.v1.Cluster cluster = 1;
     */
    cluster?: Cluster;
};
/**
 * Describes the message api.v1.ClusterServiceUpdateResponse.
 * Use `create(ClusterServiceUpdateResponseSchema)` to create a new message.
 */
export declare const ClusterServiceUpdateResponseSchema: GenMessage<ClusterServiceUpdateResponse>;
/**
 * ClusterServiceListResponse is the response payload of a cluster list request
 *
 * @generated from message api.v1.ClusterServiceListResponse
 */
export type ClusterServiceListResponse = Message<"api.v1.ClusterServiceListResponse"> & {
    /**
     * Clusters a list of clusters
     *
     * @generated from field: repeated api.v1.Cluster clusters = 1;
     */
    clusters: Cluster[];
};
/**
 * Describes the message api.v1.ClusterServiceListResponse.
 * Use `create(ClusterServiceListResponseSchema)` to create a new message.
 */
export declare const ClusterServiceListResponseSchema: GenMessage<ClusterServiceListResponse>;
/**
 * ClusterServiceWatchStatusResponse is the response payload of a cluster watch status request
 *
 * @generated from message api.v1.ClusterServiceWatchStatusResponse
 */
export type ClusterServiceWatchStatusResponse = Message<"api.v1.ClusterServiceWatchStatusResponse"> & {
    /**
     * Status the cluster status
     *
     * @generated from field: api.v1.ClusterStatus status = 1;
     */
    status?: ClusterStatus;
};
/**
 * Describes the message api.v1.ClusterServiceWatchStatusResponse.
 * Use `create(ClusterServiceWatchStatusResponseSchema)` to create a new message.
 */
export declare const ClusterServiceWatchStatusResponseSchema: GenMessage<ClusterServiceWatchStatusResponse>;
/**
 * ClusterServiceOperateResponse is the response payload for the cluster operate request
 *
 * @generated from message api.v1.ClusterServiceOperateResponse
 */
export type ClusterServiceOperateResponse = Message<"api.v1.ClusterServiceOperateResponse"> & {
    /**
     * Cluster is the cluster
     *
     * @generated from field: api.v1.Cluster cluster = 1;
     */
    cluster?: Cluster;
};
/**
 * Describes the message api.v1.ClusterServiceOperateResponse.
 * Use `create(ClusterServiceOperateResponseSchema)` to create a new message.
 */
export declare const ClusterServiceOperateResponseSchema: GenMessage<ClusterServiceOperateResponse>;
/**
 * Operate defines the types of reconciliation to be triggered
 *
 * @generated from enum api.v1.Operate
 */
export declare enum Operate {
    /**
     * OPERATE_UNSPECIFIED is not specified
     *
     * @generated from enum value: OPERATE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * OPERATE_RECONCILE reconcile the cluster
     *
     * @generated from enum value: OPERATE_RECONCILE = 1;
     */
    RECONCILE = 1,
    /**
     * OPERATE_MAINTAIN maintain the cluster
     *
     * @generated from enum value: OPERATE_MAINTAIN = 2;
     */
    MAINTAIN = 2,
    /**
     * OPERATE_RETRY retry the reconciliation of the cluster
     *
     * @generated from enum value: OPERATE_RETRY = 3;
     */
    RETRY = 3
}
/**
 * Describes the enum api.v1.Operate.
 */
export declare const OperateSchema: GenEnum<Operate>;
/**
 * ClusterService serves kubernetes cluster related functions
 *
 * @generated from service api.v1.ClusterService
 */
export declare const ClusterService: GenService<{
    /**
     * Create a cluster
     *
     * @generated from rpc api.v1.ClusterService.Create
     */
    create: {
        methodKind: "unary";
        input: typeof ClusterServiceCreateRequestSchema;
        output: typeof ClusterServiceCreateResponseSchema;
    };
    /**
     * Get a cluster
     *
     * @generated from rpc api.v1.ClusterService.Get
     */
    get: {
        methodKind: "unary";
        input: typeof ClusterServiceGetRequestSchema;
        output: typeof ClusterServiceGetResponseSchema;
    };
    /**
     * List clusters
     *
     * @generated from rpc api.v1.ClusterService.List
     */
    list: {
        methodKind: "unary";
        input: typeof ClusterServiceListRequestSchema;
        output: typeof ClusterServiceListResponseSchema;
    };
    /**
     * WatchStatus of a cluster
     *
     * @generated from rpc api.v1.ClusterService.WatchStatus
     */
    watchStatus: {
        methodKind: "server_streaming";
        input: typeof ClusterServiceWatchStatusRequestSchema;
        output: typeof ClusterServiceWatchStatusResponseSchema;
    };
    /**
     * Delete a cluster
     *
     * @generated from rpc api.v1.ClusterService.Delete
     */
    delete: {
        methodKind: "unary";
        input: typeof ClusterServiceDeleteRequestSchema;
        output: typeof ClusterServiceDeleteResponseSchema;
    };
    /**
     * Update a cluster
     *
     * @generated from rpc api.v1.ClusterService.Update
     */
    update: {
        methodKind: "unary";
        input: typeof ClusterServiceUpdateRequestSchema;
        output: typeof ClusterServiceUpdateResponseSchema;
    };
    /**
     * GetCredentials of a cluster
     *
     * @generated from rpc api.v1.ClusterService.GetCredentials
     */
    getCredentials: {
        methodKind: "unary";
        input: typeof ClusterServiceGetCredentialsRequestSchema;
        output: typeof ClusterServiceGetCredentialsResponseSchema;
    };
    /**
     * Operate on a cluster
     *
     * @generated from rpc api.v1.ClusterService.Operate
     */
    operate: {
        methodKind: "unary";
        input: typeof ClusterServiceOperateRequestSchema;
        output: typeof ClusterServiceOperateResponseSchema;
    };
}>;
