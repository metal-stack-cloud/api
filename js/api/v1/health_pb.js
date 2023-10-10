"use strict";
// @generated by protoc-gen-es v1.3.3 with parameter "target=ts"
// @generated from file api/v1/health.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthServiceGetResponse = exports.HealthServiceGetRequest = exports.PartitionHealth = exports.HealthStatus = exports.Health = exports.Service = exports.ServiceStatus = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from enum api.v1.ServiceStatus
 */
var ServiceStatus;
(function (ServiceStatus) {
    /**
     * @generated from enum value: SERVICE_STATUS_UNSPECIFIED = 0;
     */
    ServiceStatus[ServiceStatus["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: SERVICE_STATUS_DEGRADED = 1;
     */
    ServiceStatus[ServiceStatus["DEGRADED"] = 1] = "DEGRADED";
    /**
     * @generated from enum value: SERVICE_STATUS_UNHEALTHY = 2;
     */
    ServiceStatus[ServiceStatus["UNHEALTHY"] = 2] = "UNHEALTHY";
    /**
     * @generated from enum value: SERVICE_STATUS_HEALTHY = 3;
     */
    ServiceStatus[ServiceStatus["HEALTHY"] = 3] = "HEALTHY";
})(ServiceStatus || (exports.ServiceStatus = ServiceStatus = {}));
// Retrieve enum metadata with: proto3.getEnumType(ServiceStatus)
protobuf_1.proto3.util.setEnumType(ServiceStatus, "api.v1.ServiceStatus", [
    { no: 0, name: "SERVICE_STATUS_UNSPECIFIED" },
    { no: 1, name: "SERVICE_STATUS_DEGRADED" },
    { no: 2, name: "SERVICE_STATUS_UNHEALTHY" },
    { no: 3, name: "SERVICE_STATUS_HEALTHY" },
]);
/**
 * @generated from enum api.v1.Service
 */
var Service;
(function (Service) {
    /**
     * @generated from enum value: SERVICE_UNSPECIFIED = 0;
     */
    Service[Service["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: SERVICE_CLUSTER = 1;
     */
    Service[Service["CLUSTER"] = 1] = "CLUSTER";
    /**
     * @generated from enum value: SERVICE_VOLUME = 2;
     */
    Service[Service["VOLUME"] = 2] = "VOLUME";
    /**
     * @generated from enum value: SERVICE_MACHINES = 3;
     */
    Service[Service["MACHINES"] = 3] = "MACHINES";
})(Service || (exports.Service = Service = {}));
// Retrieve enum metadata with: proto3.getEnumType(Service)
protobuf_1.proto3.util.setEnumType(Service, "api.v1.Service", [
    { no: 0, name: "SERVICE_UNSPECIFIED" },
    { no: 1, name: "SERVICE_CLUSTER" },
    { no: 2, name: "SERVICE_VOLUME" },
    { no: 3, name: "SERVICE_MACHINES" },
]);
/**
 * @generated from message api.v1.Health
 */
class Health extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated api.v1.HealthStatus services = 1;
         */
        this.services = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Health().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Health().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Health().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Health, a, b);
    }
}
exports.Health = Health;
Health.runtime = protobuf_1.proto3;
Health.typeName = "api.v1.Health";
Health.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "services", kind: "message", T: HealthStatus, repeated: true },
]);
/**
 * @generated from message api.v1.HealthStatus
 */
class HealthStatus extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: api.v1.Service name = 1;
         */
        this.name = Service.UNSPECIFIED;
        /**
         * @generated from field: api.v1.ServiceStatus status = 2;
         */
        this.status = ServiceStatus.UNSPECIFIED;
        /**
         * @generated from field: string message = 3;
         */
        this.message = "";
        /**
         * @generated from field: map<string, api.v1.PartitionHealth> partitions = 4;
         */
        this.partitions = {};
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HealthStatus().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HealthStatus().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HealthStatus().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HealthStatus, a, b);
    }
}
exports.HealthStatus = HealthStatus;
HealthStatus.runtime = protobuf_1.proto3;
HealthStatus.typeName = "api.v1.HealthStatus";
HealthStatus.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "enum", T: protobuf_1.proto3.getEnumType(Service) },
    { no: 2, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(ServiceStatus) },
    { no: 3, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "partitions", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "message", T: PartitionHealth } },
]);
/**
 * @generated from message api.v1.PartitionHealth
 */
class PartitionHealth extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: api.v1.ServiceStatus status = 1;
         */
        this.status = ServiceStatus.UNSPECIFIED;
        /**
         * @generated from field: string message = 2;
         */
        this.message = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PartitionHealth().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PartitionHealth().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PartitionHealth().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PartitionHealth, a, b);
    }
}
exports.PartitionHealth = PartitionHealth;
PartitionHealth.runtime = protobuf_1.proto3;
PartitionHealth.typeName = "api.v1.PartitionHealth";
PartitionHealth.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(ServiceStatus) },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.HealthServiceGetRequest
 */
class HealthServiceGetRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HealthServiceGetRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HealthServiceGetRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HealthServiceGetRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HealthServiceGetRequest, a, b);
    }
}
exports.HealthServiceGetRequest = HealthServiceGetRequest;
HealthServiceGetRequest.runtime = protobuf_1.proto3;
HealthServiceGetRequest.typeName = "api.v1.HealthServiceGetRequest";
HealthServiceGetRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * @generated from message api.v1.HealthServiceGetResponse
 */
class HealthServiceGetResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HealthServiceGetResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HealthServiceGetResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HealthServiceGetResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HealthServiceGetResponse, a, b);
    }
}
exports.HealthServiceGetResponse = HealthServiceGetResponse;
HealthServiceGetResponse.runtime = protobuf_1.proto3;
HealthServiceGetResponse.typeName = "api.v1.HealthServiceGetResponse";
HealthServiceGetResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "health", kind: "message", T: Health },
]);
