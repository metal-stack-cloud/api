"use strict";
// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file api/v1/cluster.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterServiceWatchStatusResponse = exports.ClusterServiceListResponse = exports.ClusterServiceUpdateResponse = exports.ClusterServiceDeleteResponse = exports.ClusterServiceGetCredentialsResponse = exports.ClusterServiceGetResponse = exports.ClusterServiceCreateResponse = exports.ClusterMonitoring = exports.ClusterStatusLastError = exports.ClusterStatus = exports.ClusterServiceWatchStatusRequest = exports.ClusterServiceDeleteRequest = exports.ClusterServiceUpdateRequest = exports.ClusterServiceCreateRequest = exports.ClusterServiceListRequest = exports.ClusterServiceGetCredentialsRequest = exports.ClusterServiceGetRequest = exports.WorkerUpdate = exports.Worker = exports.MaintenanceTimeWindow = exports.Maintenance = exports.KubernetesSpec = exports.Cluster = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * Types
 *
 * @generated from message api.v1.Cluster
 */
class Cluster extends protobuf_1.Message {
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
         * @generated from field: string project = 3;
         */
        this.project = "";
        /**
         * partition is part of a region
         *
         * @generated from field: string partition = 4;
         */
        this.partition = "";
        /**
         * @generated from field: repeated api.v1.Worker workers = 6;
         */
        this.workers = [];
        /**
         * @generated from field: string tenant = 8;
         */
        this.tenant = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Cluster().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Cluster().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Cluster().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Cluster, a, b);
    }
}
exports.Cluster = Cluster;
Cluster.runtime = protobuf_1.proto3;
Cluster.typeName = "api.v1.Cluster";
Cluster.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "kubernetes", kind: "message", T: KubernetesSpec },
    { no: 6, name: "workers", kind: "message", T: Worker, repeated: true },
    { no: 7, name: "maintenance", kind: "message", T: Maintenance },
    { no: 8, name: "tenant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 11, name: "updated_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 12, name: "deleted_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 20, name: "status", kind: "message", T: ClusterStatus },
    { no: 21, name: "purpose", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 22, name: "monitoring", kind: "message", T: ClusterMonitoring },
]);
/**
 * @generated from message api.v1.KubernetesSpec
 */
class KubernetesSpec extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string version = 1;
         */
        this.version = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new KubernetesSpec().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new KubernetesSpec().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new KubernetesSpec().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(KubernetesSpec, a, b);
    }
}
exports.KubernetesSpec = KubernetesSpec;
KubernetesSpec.runtime = protobuf_1.proto3;
KubernetesSpec.typeName = "api.v1.KubernetesSpec";
KubernetesSpec.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.Maintenance
 */
class Maintenance extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Maintenance().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Maintenance().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Maintenance().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Maintenance, a, b);
    }
}
exports.Maintenance = Maintenance;
Maintenance.runtime = protobuf_1.proto3;
Maintenance.typeName = "api.v1.Maintenance";
Maintenance.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "kubernetes_autoupdate", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 2, name: "machineimage_autoupdate", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 3, name: "time_window", kind: "message", T: MaintenanceTimeWindow },
]);
/**
 * @generated from message api.v1.MaintenanceTimeWindow
 */
class MaintenanceTimeWindow extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MaintenanceTimeWindow().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MaintenanceTimeWindow().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MaintenanceTimeWindow().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MaintenanceTimeWindow, a, b);
    }
}
exports.MaintenanceTimeWindow = MaintenanceTimeWindow;
MaintenanceTimeWindow.runtime = protobuf_1.proto3;
MaintenanceTimeWindow.typeName = "api.v1.MaintenanceTimeWindow";
MaintenanceTimeWindow.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "begin", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "duration", kind: "message", T: protobuf_1.Duration },
]);
/**
 * @generated from message api.v1.Worker
 */
class Worker extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string name = 1;
         */
        this.name = "";
        /**
         * @generated from field: string machine_type = 2;
         */
        this.machineType = "";
        /**
         * @generated from field: uint32 minsize = 3;
         */
        this.minsize = 0;
        /**
         * @generated from field: uint32 maxsize = 4;
         */
        this.maxsize = 0;
        /**
         * @generated from field: uint32 maxsurge = 5;
         */
        this.maxsurge = 0;
        /**
         * @generated from field: uint32 maxunavailable = 6;
         */
        this.maxunavailable = 0;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Worker().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Worker().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Worker().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Worker, a, b);
    }
}
exports.Worker = Worker;
Worker.runtime = protobuf_1.proto3;
Worker.typeName = "api.v1.Worker";
Worker.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "machine_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "minsize", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "maxsize", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "maxsurge", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "maxunavailable", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
]);
/**
 * @generated from message api.v1.WorkerUpdate
 */
class WorkerUpdate extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string name = 1;
         */
        this.name = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new WorkerUpdate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new WorkerUpdate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new WorkerUpdate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(WorkerUpdate, a, b);
    }
}
exports.WorkerUpdate = WorkerUpdate;
WorkerUpdate.runtime = protobuf_1.proto3;
WorkerUpdate.typeName = "api.v1.WorkerUpdate";
WorkerUpdate.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "machine_type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "minsize", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 4, name: "maxsize", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 5, name: "maxsurge", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 6, name: "maxunavailable", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
]);
/**
 * Requests
 *
 * @generated from message api.v1.ClusterServiceGetRequest
 */
class ClusterServiceGetRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceGetRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceGetRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceGetRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceGetRequest, a, b);
    }
}
exports.ClusterServiceGetRequest = ClusterServiceGetRequest;
ClusterServiceGetRequest.runtime = protobuf_1.proto3;
ClusterServiceGetRequest.typeName = "api.v1.ClusterServiceGetRequest";
ClusterServiceGetRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.ClusterServiceGetCredentialsRequest
 */
class ClusterServiceGetCredentialsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceGetCredentialsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceGetCredentialsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceGetCredentialsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceGetCredentialsRequest, a, b);
    }
}
exports.ClusterServiceGetCredentialsRequest = ClusterServiceGetCredentialsRequest;
ClusterServiceGetCredentialsRequest.runtime = protobuf_1.proto3;
ClusterServiceGetCredentialsRequest.typeName = "api.v1.ClusterServiceGetCredentialsRequest";
ClusterServiceGetCredentialsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "expiration", kind: "message", T: protobuf_1.Duration, opt: true },
]);
/**
 * @generated from message api.v1.ClusterServiceListRequest
 */
class ClusterServiceListRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceListRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceListRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceListRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceListRequest, a, b);
    }
}
exports.ClusterServiceListRequest = ClusterServiceListRequest;
ClusterServiceListRequest.runtime = protobuf_1.proto3;
ClusterServiceListRequest.typeName = "api.v1.ClusterServiceListRequest";
ClusterServiceListRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.ClusterServiceCreateRequest
 */
class ClusterServiceCreateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * @generated from field: string project = 3;
         */
        this.project = "";
        /**
         * partition is part of a region
         *
         * @generated from field: string partition = 4;
         */
        this.partition = "";
        /**
         * @generated from field: repeated api.v1.Worker workers = 7;
         */
        this.workers = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceCreateRequest, a, b);
    }
}
exports.ClusterServiceCreateRequest = ClusterServiceCreateRequest;
ClusterServiceCreateRequest.runtime = protobuf_1.proto3;
ClusterServiceCreateRequest.typeName = "api.v1.ClusterServiceCreateRequest";
ClusterServiceCreateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "partition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "kubernetes", kind: "message", T: KubernetesSpec },
    { no: 7, name: "workers", kind: "message", T: Worker, repeated: true },
    { no: 8, name: "maintenance", kind: "message", T: Maintenance },
]);
/**
 * @generated from message api.v1.ClusterServiceUpdateRequest
 */
class ClusterServiceUpdateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * @generated from field: string project = 2;
         */
        this.project = "";
        /**
         * @generated from field: repeated api.v1.WorkerUpdate workers = 4;
         */
        this.workers = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceUpdateRequest, a, b);
    }
}
exports.ClusterServiceUpdateRequest = ClusterServiceUpdateRequest;
ClusterServiceUpdateRequest.runtime = protobuf_1.proto3;
ClusterServiceUpdateRequest.typeName = "api.v1.ClusterServiceUpdateRequest";
ClusterServiceUpdateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "kubernetes", kind: "message", T: KubernetesSpec, opt: true },
    { no: 4, name: "workers", kind: "message", T: WorkerUpdate, repeated: true },
    { no: 5, name: "maintenance", kind: "message", T: Maintenance, opt: true },
]);
/**
 * @generated from message api.v1.ClusterServiceDeleteRequest
 */
class ClusterServiceDeleteRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceDeleteRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceDeleteRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceDeleteRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceDeleteRequest, a, b);
    }
}
exports.ClusterServiceDeleteRequest = ClusterServiceDeleteRequest;
ClusterServiceDeleteRequest.runtime = protobuf_1.proto3;
ClusterServiceDeleteRequest.typeName = "api.v1.ClusterServiceDeleteRequest";
ClusterServiceDeleteRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.ClusterServiceWatchStatusRequest
 */
class ClusterServiceWatchStatusRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceWatchStatusRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceWatchStatusRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceWatchStatusRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceWatchStatusRequest, a, b);
    }
}
exports.ClusterServiceWatchStatusRequest = ClusterServiceWatchStatusRequest;
ClusterServiceWatchStatusRequest.runtime = protobuf_1.proto3;
ClusterServiceWatchStatusRequest.typeName = "api.v1.ClusterServiceWatchStatusRequest";
ClusterServiceWatchStatusRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.ClusterStatus
 */
class ClusterStatus extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string uuid = 1;
         */
        this.uuid = "";
        /**
         * @generated from field: uint32 progress = 2;
         */
        this.progress = 0;
        /**
         * @generated from field: string state = 3;
         */
        this.state = "";
        /**
         * @generated from field: string type = 4;
         */
        this.type = "";
        /**
         * @generated from field: string api_server_ready = 10;
         */
        this.apiServerReady = "";
        /**
         * @generated from field: string control_plane_ready = 11;
         */
        this.controlPlaneReady = "";
        /**
         * @generated from field: string nodes_ready = 12;
         */
        this.nodesReady = "";
        /**
         * @generated from field: string system_components_ready = 13;
         */
        this.systemComponentsReady = "";
        /**
         * @generated from field: repeated api.v1.ClusterStatusLastError last_errors = 14;
         */
        this.lastErrors = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterStatus().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterStatus().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterStatus().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterStatus, a, b);
    }
}
exports.ClusterStatus = ClusterStatus;
ClusterStatus.runtime = protobuf_1.proto3;
ClusterStatus.typeName = "api.v1.ClusterStatus";
ClusterStatus.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "progress", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "api_server_ready", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "control_plane_ready", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "nodes_ready", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "system_components_ready", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "last_errors", kind: "message", T: ClusterStatusLastError, repeated: true },
]);
/**
 * @generated from message api.v1.ClusterStatusLastError
 */
class ClusterStatusLastError extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * A human readable message indicating details about the last error.
         *
         * @generated from field: string description = 1;
         */
        this.description = "";
        /**
         * Well-defined error codes of the last error(s).
         * +optional
         *
         * @generated from field: repeated string codes = 3;
         */
        this.codes = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterStatusLastError().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterStatusLastError().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterStatusLastError().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterStatusLastError, a, b);
    }
}
exports.ClusterStatusLastError = ClusterStatusLastError;
ClusterStatusLastError.runtime = protobuf_1.proto3;
ClusterStatusLastError.typeName = "api.v1.ClusterStatusLastError";
ClusterStatusLastError.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "task_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "last_update_time", kind: "message", T: protobuf_1.Timestamp },
]);
/**
 * @generated from message api.v1.ClusterMonitoring
 */
class ClusterMonitoring extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string username = 1;
         */
        this.username = "";
        /**
         * @generated from field: string password = 2;
         */
        this.password = "";
        /**
         * @generated from field: string endpoint = 3;
         */
        this.endpoint = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterMonitoring().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterMonitoring().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterMonitoring().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterMonitoring, a, b);
    }
}
exports.ClusterMonitoring = ClusterMonitoring;
ClusterMonitoring.runtime = protobuf_1.proto3;
ClusterMonitoring.typeName = "api.v1.ClusterMonitoring";
ClusterMonitoring.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "endpoint", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Responses
 *
 * @generated from message api.v1.ClusterServiceCreateResponse
 */
class ClusterServiceCreateResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceCreateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceCreateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceCreateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceCreateResponse, a, b);
    }
}
exports.ClusterServiceCreateResponse = ClusterServiceCreateResponse;
ClusterServiceCreateResponse.runtime = protobuf_1.proto3;
ClusterServiceCreateResponse.typeName = "api.v1.ClusterServiceCreateResponse";
ClusterServiceCreateResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "cluster", kind: "message", T: Cluster },
]);
/**
 * @generated from message api.v1.ClusterServiceGetResponse
 */
class ClusterServiceGetResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceGetResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceGetResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceGetResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceGetResponse, a, b);
    }
}
exports.ClusterServiceGetResponse = ClusterServiceGetResponse;
ClusterServiceGetResponse.runtime = protobuf_1.proto3;
ClusterServiceGetResponse.typeName = "api.v1.ClusterServiceGetResponse";
ClusterServiceGetResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "cluster", kind: "message", T: Cluster },
]);
/**
 * @generated from message api.v1.ClusterServiceGetCredentialsResponse
 */
class ClusterServiceGetCredentialsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string kubeconfig = 1;
         */
        this.kubeconfig = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceGetCredentialsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceGetCredentialsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceGetCredentialsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceGetCredentialsResponse, a, b);
    }
}
exports.ClusterServiceGetCredentialsResponse = ClusterServiceGetCredentialsResponse;
ClusterServiceGetCredentialsResponse.runtime = protobuf_1.proto3;
ClusterServiceGetCredentialsResponse.typeName = "api.v1.ClusterServiceGetCredentialsResponse";
ClusterServiceGetCredentialsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "kubeconfig", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.ClusterServiceDeleteResponse
 */
class ClusterServiceDeleteResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceDeleteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceDeleteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceDeleteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceDeleteResponse, a, b);
    }
}
exports.ClusterServiceDeleteResponse = ClusterServiceDeleteResponse;
ClusterServiceDeleteResponse.runtime = protobuf_1.proto3;
ClusterServiceDeleteResponse.typeName = "api.v1.ClusterServiceDeleteResponse";
ClusterServiceDeleteResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "cluster", kind: "message", T: Cluster },
]);
/**
 * @generated from message api.v1.ClusterServiceUpdateResponse
 */
class ClusterServiceUpdateResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceUpdateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceUpdateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceUpdateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceUpdateResponse, a, b);
    }
}
exports.ClusterServiceUpdateResponse = ClusterServiceUpdateResponse;
ClusterServiceUpdateResponse.runtime = protobuf_1.proto3;
ClusterServiceUpdateResponse.typeName = "api.v1.ClusterServiceUpdateResponse";
ClusterServiceUpdateResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "cluster", kind: "message", T: Cluster },
]);
/**
 * @generated from message api.v1.ClusterServiceListResponse
 */
class ClusterServiceListResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated api.v1.Cluster clusters = 1;
         */
        this.clusters = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceListResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceListResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceListResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceListResponse, a, b);
    }
}
exports.ClusterServiceListResponse = ClusterServiceListResponse;
ClusterServiceListResponse.runtime = protobuf_1.proto3;
ClusterServiceListResponse.typeName = "api.v1.ClusterServiceListResponse";
ClusterServiceListResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "clusters", kind: "message", T: Cluster, repeated: true },
]);
/**
 * @generated from message api.v1.ClusterServiceWatchStatusResponse
 */
class ClusterServiceWatchStatusResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClusterServiceWatchStatusResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClusterServiceWatchStatusResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClusterServiceWatchStatusResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ClusterServiceWatchStatusResponse, a, b);
    }
}
exports.ClusterServiceWatchStatusResponse = ClusterServiceWatchStatusResponse;
ClusterServiceWatchStatusResponse.runtime = protobuf_1.proto3;
ClusterServiceWatchStatusResponse.typeName = "api.v1.ClusterServiceWatchStatusResponse";
ClusterServiceWatchStatusResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "message", T: ClusterStatus },
]);
