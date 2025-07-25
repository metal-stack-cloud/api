// @generated by protoc-gen-es v2.5.0 with parameter "target=ts"
// @generated from file api/v1/cluster.proto (package api.v1, syntax proto3)
/* eslint-disable */
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv2";
import { file_api_v1_common } from "./common_pb";
import { file_buf_validate_validate } from "../../buf/validate/validate_pb";
import { file_google_protobuf_duration, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
/**
 * Describes the file api/v1/cluster.proto.
 */
export const file_api_v1_cluster = /*@__PURE__*/ fileDesc("ChRhcGkvdjEvY2x1c3Rlci5wcm90bxIGYXBpLnYxIvkDCgdDbHVzdGVyEhYKBHV1aWQYASABKAlCCLpIBXIDsAEBEhcKBG5hbWUYAiABKAlCCbpIBnIEEAIYDBIbCgdwcm9qZWN0GAMgASgJQgq6SAdyBRACGIABEhEKCXBhcnRpdGlvbhgEIAEoCRIqCgprdWJlcm5ldGVzGAUgASgLMhYuYXBpLnYxLkt1YmVybmV0ZXNTcGVjEh8KB3dvcmtlcnMYBiADKAsyDi5hcGkudjEuV29ya2VyEigKC21haW50ZW5hbmNlGAcgASgLMhMuYXBpLnYxLk1haW50ZW5hbmNlEg4KBnRlbmFudBgIIAEoCRIuCgpjcmVhdGVkX2F0GAogASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIuCgp1cGRhdGVkX2F0GAsgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIuCgpkZWxldGVkX2F0GAwgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIlCgZzdGF0dXMYFCABKAsyFS5hcGkudjEuQ2x1c3RlclN0YXR1cxIUCgdwdXJwb3NlGBUgASgJSACIAQESLQoKbW9uaXRvcmluZxgWIAEoCzIZLmFwaS52MS5DbHVzdGVyTW9uaXRvcmluZ0IKCghfcHVycG9zZSI/Cg5LdWJlcm5ldGVzU3BlYxItCgd2ZXJzaW9uGAEgASgJQhy6SBlyFygIMhNbMC05XSsuWzAtOV0rLlswLTldIsEBCgtNYWludGVuYW5jZRIiChVrdWJlcm5ldGVzX2F1dG91cGRhdGUYASABKAhIAIgBARIkChdtYWNoaW5laW1hZ2VfYXV0b3VwZGF0ZRgCIAEoCEgBiAEBEjIKC3RpbWVfd2luZG93GAMgASgLMh0uYXBpLnYxLk1haW50ZW5hbmNlVGltZVdpbmRvd0IYChZfa3ViZXJuZXRlc19hdXRvdXBkYXRlQhoKGF9tYWNoaW5laW1hZ2VfYXV0b3VwZGF0ZSJzChVNYWludGVuYW5jZVRpbWVXaW5kb3cSGwoFYmVnaW4YASABKAsyDC5hcGkudjEuVGltZRI9CghkdXJhdGlvbhgCIAEoCzIZLmdvb2dsZS5wcm90b2J1Zi5EdXJhdGlvbkIQukgNqgEKGgMIwHAyAwiQHCJICgRUaW1lEhUKBGhvdXIYASABKA1CB7pIBCoCGBgSFwoGbWludXRlGAIgASgNQge6SAQqAhg8EhAKCHRpbWV6b25lGAMgASgJIrQBCgZXb3JrZXISGAoEbmFtZRgBIAEoCUIKukgHcgUQAhiAARIgCgxtYWNoaW5lX3R5cGUYAiABKAlCCrpIB3IFEAIYgAESGAoHbWluc2l6ZRgDIAEoDUIHukgEKgIYIBIYCgdtYXhzaXplGAQgASgNQge6SAQqAhhAEhkKCG1heHN1cmdlGAUgASgNQge6SAQqAhhAEh8KDm1heHVuYXZhaWxhYmxlGAYgASgNQge6SAQqAhhAIpwCCgxXb3JrZXJVcGRhdGUSGAoEbmFtZRgBIAEoCUIKukgHcgUQAhiAARIlCgxtYWNoaW5lX3R5cGUYAiABKAlCCrpIB3IFEAIYgAFIAIgBARIdCgdtaW5zaXplGAMgASgNQge6SAQqAhggSAGIAQESHQoHbWF4c2l6ZRgEIAEoDUIHukgEKgIYQEgCiAEBEh4KCG1heHN1cmdlGAUgASgNQge6SAQqAhhASAOIAQESJAoObWF4dW5hdmFpbGFibGUYBiABKA1CB7pIBCoCGEBIBIgBAUIPCg1fbWFjaGluZV90eXBlQgoKCF9taW5zaXplQgoKCF9tYXhzaXplQgsKCV9tYXhzdXJnZUIRCg9fbWF4dW5hdmFpbGFibGUiTwoYQ2x1c3RlclNlcnZpY2VHZXRSZXF1ZXN0EhYKBHV1aWQYASABKAlCCLpIBXIDsAEBEhsKB3Byb2plY3QYAiABKAlCCrpIB3IFEAIYgAEifwocQ2x1c3RlclNlcnZpY2VPcGVyYXRlUmVxdWVzdBIWCgR1dWlkGAEgASgJQgi6SAVyA7ABARIbCgdwcm9qZWN0GAIgASgJQgq6SAdyBRACGIABEioKB29wZXJhdGUYAyABKA4yDy5hcGkudjEuT3BlcmF0ZUIIukgFggECEAEinQEKI0NsdXN0ZXJTZXJ2aWNlR2V0Q3JlZGVudGlhbHNSZXF1ZXN0EhYKBHV1aWQYASABKAlCCLpIBXIDsAEBEhsKB3Byb2plY3QYAiABKAlCCrpIB3IFEAIYgAESMgoKZXhwaXJhdGlvbhgEIAEoCzIZLmdvb2dsZS5wcm90b2J1Zi5EdXJhdGlvbkgAiAEBQg0KC19leHBpcmF0aW9uIjgKGUNsdXN0ZXJTZXJ2aWNlTGlzdFJlcXVlc3QSGwoHcHJvamVjdBgCIAEoCUIKukgHcgUQAhiAASLfAQobQ2x1c3RlclNlcnZpY2VDcmVhdGVSZXF1ZXN0EhkKBG5hbWUYAiABKAlCC7pICHIGEAIYDGgBEhsKB3Byb2plY3QYAyABKAlCCrpIB3IFEAIYgAESEQoJcGFydGl0aW9uGAQgASgJEioKCmt1YmVybmV0ZXMYBiABKAsyFi5hcGkudjEuS3ViZXJuZXRlc1NwZWMSHwoHd29ya2VycxgHIAMoCzIOLmFwaS52MS5Xb3JrZXISKAoLbWFpbnRlbmFuY2UYCCABKAsyEy5hcGkudjEuTWFpbnRlbmFuY2Ui+AEKG0NsdXN0ZXJTZXJ2aWNlVXBkYXRlUmVxdWVzdBIWCgR1dWlkGAEgASgJQgi6SAVyA7ABARIbCgdwcm9qZWN0GAIgASgJQgq6SAdyBRACGIABEi8KCmt1YmVybmV0ZXMYAyABKAsyFi5hcGkudjEuS3ViZXJuZXRlc1NwZWNIAIgBARIlCgd3b3JrZXJzGAQgAygLMhQuYXBpLnYxLldvcmtlclVwZGF0ZRItCgttYWludGVuYW5jZRgFIAEoCzITLmFwaS52MS5NYWludGVuYW5jZUgBiAEBQg0KC19rdWJlcm5ldGVzQg4KDF9tYWludGVuYW5jZSJSChtDbHVzdGVyU2VydmljZURlbGV0ZVJlcXVlc3QSFgoEdXVpZBgBIAEoCUIIukgFcgOwAQESGwoHcHJvamVjdBgCIAEoCUIKukgHcgUQAhiAASJlCiBDbHVzdGVyU2VydmljZVdhdGNoU3RhdHVzUmVxdWVzdBIbCgR1dWlkGAEgASgJQgi6SAVyA7ABAUgAiAEBEhsKB3Byb2plY3QYAiABKAlCCrpIB3IFEAIYgAFCBwoFX3V1aWQiogIKDUNsdXN0ZXJTdGF0dXMSDAoEdXVpZBgBIAEoCRIQCghwcm9ncmVzcxgCIAEoDRINCgVzdGF0ZRgDIAEoCRIMCgR0eXBlGAQgASgJEhgKEGFwaV9zZXJ2ZXJfcmVhZHkYCiABKAkSGwoTY29udHJvbF9wbGFuZV9yZWFkeRgLIAEoCRITCgtub2Rlc19yZWFkeRgMIAEoCRIfChdzeXN0ZW1fY29tcG9uZW50c19yZWFkeRgNIAEoCRIzCgtsYXN0X2Vycm9ycxgOIAMoCzIeLmFwaS52MS5DbHVzdGVyU3RhdHVzTGFzdEVycm9yEjIKCmNvbmRpdGlvbnMYDyADKAsyHi5hcGkudjEuQ2x1c3RlclN0YXR1c0NvbmRpdGlvbiKFAQoWQ2x1c3RlclN0YXR1c0xhc3RFcnJvchITCgtkZXNjcmlwdGlvbhgBIAEoCRIUCgd0YXNrX2lkGAIgASgJSACIAQESNAoQbGFzdF91cGRhdGVfdGltZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCCgoIX3Rhc2tfaWQizgEKFkNsdXN0ZXJTdGF0dXNDb25kaXRpb24SDAoEdHlwZRgBIAEoCRIOCgZzdGF0dXMYAiABKAkSDgoGcmVhc29uGAMgASgJEhYKDnN0YXR1c19tZXNzYWdlGAQgASgJEjgKFGxhc3RfdHJhbnNpdGlvbl90aW1lGAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBI0ChBsYXN0X3VwZGF0ZV90aW1lGAYgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCJJChFDbHVzdGVyTW9uaXRvcmluZxIQCgh1c2VybmFtZRgBIAEoCRIQCghwYXNzd29yZBgCIAEoCRIQCghlbmRwb2ludBgDIAEoCSJAChxDbHVzdGVyU2VydmljZUNyZWF0ZVJlc3BvbnNlEiAKB2NsdXN0ZXIYASABKAsyDy5hcGkudjEuQ2x1c3RlciI9ChlDbHVzdGVyU2VydmljZUdldFJlc3BvbnNlEiAKB2NsdXN0ZXIYASABKAsyDy5hcGkudjEuQ2x1c3RlciI6CiRDbHVzdGVyU2VydmljZUdldENyZWRlbnRpYWxzUmVzcG9uc2USEgoKa3ViZWNvbmZpZxgBIAEoCSJAChxDbHVzdGVyU2VydmljZURlbGV0ZVJlc3BvbnNlEiAKB2NsdXN0ZXIYASABKAsyDy5hcGkudjEuQ2x1c3RlciJAChxDbHVzdGVyU2VydmljZVVwZGF0ZVJlc3BvbnNlEiAKB2NsdXN0ZXIYASABKAsyDy5hcGkudjEuQ2x1c3RlciI/ChpDbHVzdGVyU2VydmljZUxpc3RSZXNwb25zZRIhCghjbHVzdGVycxgBIAMoCzIPLmFwaS52MS5DbHVzdGVyIkoKIUNsdXN0ZXJTZXJ2aWNlV2F0Y2hTdGF0dXNSZXNwb25zZRIlCgZzdGF0dXMYASABKAsyFS5hcGkudjEuQ2x1c3RlclN0YXR1cyJBCh1DbHVzdGVyU2VydmljZU9wZXJhdGVSZXNwb25zZRIgCgdjbHVzdGVyGAEgASgLMg8uYXBpLnYxLkNsdXN0ZXIqYgoHT3BlcmF0ZRIXChNPUEVSQVRFX1VOU1BFQ0lGSUVEEAASFQoRT1BFUkFURV9SRUNPTkNJTEUQARIUChBPUEVSQVRFX01BSU5UQUlOEAISEQoNT1BFUkFURV9SRVRSWRADMqwGCg5DbHVzdGVyU2VydmljZRJfCgZDcmVhdGUSIy5hcGkudjEuQ2x1c3RlclNlcnZpY2VDcmVhdGVSZXF1ZXN0GiQuYXBpLnYxLkNsdXN0ZXJTZXJ2aWNlQ3JlYXRlUmVzcG9uc2UiCsrzGAIBAuDzGAESVwoDR2V0EiAuYXBpLnYxLkNsdXN0ZXJTZXJ2aWNlR2V0UmVxdWVzdBohLmFwaS52MS5DbHVzdGVyU2VydmljZUdldFJlc3BvbnNlIgvK8xgDAQID6PMYAhJaCgRMaXN0EiEuYXBpLnYxLkNsdXN0ZXJTZXJ2aWNlTGlzdFJlcXVlc3QaIi5hcGkudjEuQ2x1c3RlclNlcnZpY2VMaXN0UmVzcG9uc2UiC8rzGAMBAgPo8xgCEnEKC1dhdGNoU3RhdHVzEiguYXBpLnYxLkNsdXN0ZXJTZXJ2aWNlV2F0Y2hTdGF0dXNSZXF1ZXN0GikuYXBpLnYxLkNsdXN0ZXJTZXJ2aWNlV2F0Y2hTdGF0dXNSZXNwb25zZSILyvMYAwECA+jzGAIwARJbCgZEZWxldGUSIy5hcGkudjEuQ2x1c3RlclNlcnZpY2VEZWxldGVSZXF1ZXN0GiQuYXBpLnYxLkNsdXN0ZXJTZXJ2aWNlRGVsZXRlUmVzcG9uc2UiBsrzGAIBAhJfCgZVcGRhdGUSIy5hcGkudjEuQ2x1c3RlclNlcnZpY2VVcGRhdGVSZXF1ZXN0GiQuYXBpLnYxLkNsdXN0ZXJTZXJ2aWNlVXBkYXRlUmVzcG9uc2UiCsrzGAIBAuDzGAEScwoOR2V0Q3JlZGVudGlhbHMSKy5hcGkudjEuQ2x1c3RlclNlcnZpY2VHZXRDcmVkZW50aWFsc1JlcXVlc3QaLC5hcGkudjEuQ2x1c3RlclNlcnZpY2VHZXRDcmVkZW50aWFsc1Jlc3BvbnNlIgbK8xgCAQISXgoHT3BlcmF0ZRIkLmFwaS52MS5DbHVzdGVyU2VydmljZU9wZXJhdGVSZXF1ZXN0GiUuYXBpLnYxLkNsdXN0ZXJTZXJ2aWNlT3BlcmF0ZVJlc3BvbnNlIgbK8xgCAQJChQEKCmNvbS5hcGkudjFCDENsdXN0ZXJQcm90b1ABWjBnaXRodWIuY29tL21ldGFsLXN0YWNrLWNsb3VkL2FwaS9nby9hcGkvdjE7YXBpdjGiAgNBWFiqAgZBcGkuVjHKAgZBcGlcVjHiAhJBcGlcVjFcR1BCTWV0YWRhdGHqAgdBcGk6OlYxYgZwcm90bzM", [file_api_v1_common, file_buf_validate_validate, file_google_protobuf_duration, file_google_protobuf_timestamp]);
/**
 * Describes the message api.v1.Cluster.
 * Use `create(ClusterSchema)` to create a new message.
 */
export const ClusterSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 0);
/**
 * Describes the message api.v1.KubernetesSpec.
 * Use `create(KubernetesSpecSchema)` to create a new message.
 */
export const KubernetesSpecSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 1);
/**
 * Describes the message api.v1.Maintenance.
 * Use `create(MaintenanceSchema)` to create a new message.
 */
export const MaintenanceSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 2);
/**
 * Describes the message api.v1.MaintenanceTimeWindow.
 * Use `create(MaintenanceTimeWindowSchema)` to create a new message.
 */
export const MaintenanceTimeWindowSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 3);
/**
 * Describes the message api.v1.Time.
 * Use `create(TimeSchema)` to create a new message.
 */
export const TimeSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 4);
/**
 * Describes the message api.v1.Worker.
 * Use `create(WorkerSchema)` to create a new message.
 */
export const WorkerSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 5);
/**
 * Describes the message api.v1.WorkerUpdate.
 * Use `create(WorkerUpdateSchema)` to create a new message.
 */
export const WorkerUpdateSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 6);
/**
 * Describes the message api.v1.ClusterServiceGetRequest.
 * Use `create(ClusterServiceGetRequestSchema)` to create a new message.
 */
export const ClusterServiceGetRequestSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 7);
/**
 * Describes the message api.v1.ClusterServiceOperateRequest.
 * Use `create(ClusterServiceOperateRequestSchema)` to create a new message.
 */
export const ClusterServiceOperateRequestSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 8);
/**
 * Describes the message api.v1.ClusterServiceGetCredentialsRequest.
 * Use `create(ClusterServiceGetCredentialsRequestSchema)` to create a new message.
 */
export const ClusterServiceGetCredentialsRequestSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 9);
/**
 * Describes the message api.v1.ClusterServiceListRequest.
 * Use `create(ClusterServiceListRequestSchema)` to create a new message.
 */
export const ClusterServiceListRequestSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 10);
/**
 * Describes the message api.v1.ClusterServiceCreateRequest.
 * Use `create(ClusterServiceCreateRequestSchema)` to create a new message.
 */
export const ClusterServiceCreateRequestSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 11);
/**
 * Describes the message api.v1.ClusterServiceUpdateRequest.
 * Use `create(ClusterServiceUpdateRequestSchema)` to create a new message.
 */
export const ClusterServiceUpdateRequestSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 12);
/**
 * Describes the message api.v1.ClusterServiceDeleteRequest.
 * Use `create(ClusterServiceDeleteRequestSchema)` to create a new message.
 */
export const ClusterServiceDeleteRequestSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 13);
/**
 * Describes the message api.v1.ClusterServiceWatchStatusRequest.
 * Use `create(ClusterServiceWatchStatusRequestSchema)` to create a new message.
 */
export const ClusterServiceWatchStatusRequestSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 14);
/**
 * Describes the message api.v1.ClusterStatus.
 * Use `create(ClusterStatusSchema)` to create a new message.
 */
export const ClusterStatusSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 15);
/**
 * Describes the message api.v1.ClusterStatusLastError.
 * Use `create(ClusterStatusLastErrorSchema)` to create a new message.
 */
export const ClusterStatusLastErrorSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 16);
/**
 * Describes the message api.v1.ClusterStatusCondition.
 * Use `create(ClusterStatusConditionSchema)` to create a new message.
 */
export const ClusterStatusConditionSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 17);
/**
 * Describes the message api.v1.ClusterMonitoring.
 * Use `create(ClusterMonitoringSchema)` to create a new message.
 */
export const ClusterMonitoringSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 18);
/**
 * Describes the message api.v1.ClusterServiceCreateResponse.
 * Use `create(ClusterServiceCreateResponseSchema)` to create a new message.
 */
export const ClusterServiceCreateResponseSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 19);
/**
 * Describes the message api.v1.ClusterServiceGetResponse.
 * Use `create(ClusterServiceGetResponseSchema)` to create a new message.
 */
export const ClusterServiceGetResponseSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 20);
/**
 * Describes the message api.v1.ClusterServiceGetCredentialsResponse.
 * Use `create(ClusterServiceGetCredentialsResponseSchema)` to create a new message.
 */
export const ClusterServiceGetCredentialsResponseSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 21);
/**
 * Describes the message api.v1.ClusterServiceDeleteResponse.
 * Use `create(ClusterServiceDeleteResponseSchema)` to create a new message.
 */
export const ClusterServiceDeleteResponseSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 22);
/**
 * Describes the message api.v1.ClusterServiceUpdateResponse.
 * Use `create(ClusterServiceUpdateResponseSchema)` to create a new message.
 */
export const ClusterServiceUpdateResponseSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 23);
/**
 * Describes the message api.v1.ClusterServiceListResponse.
 * Use `create(ClusterServiceListResponseSchema)` to create a new message.
 */
export const ClusterServiceListResponseSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 24);
/**
 * Describes the message api.v1.ClusterServiceWatchStatusResponse.
 * Use `create(ClusterServiceWatchStatusResponseSchema)` to create a new message.
 */
export const ClusterServiceWatchStatusResponseSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 25);
/**
 * Describes the message api.v1.ClusterServiceOperateResponse.
 * Use `create(ClusterServiceOperateResponseSchema)` to create a new message.
 */
export const ClusterServiceOperateResponseSchema = /*@__PURE__*/ messageDesc(file_api_v1_cluster, 26);
/**
 * Operate defines the types of reconciliation to be triggered
 *
 * @generated from enum api.v1.Operate
 */
export var Operate;
(function (Operate) {
    /**
     * OPERATE_UNSPECIFIED is not specified
     *
     * @generated from enum value: OPERATE_UNSPECIFIED = 0;
     */
    Operate[Operate["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * OPERATE_RECONCILE reconcile the cluster
     *
     * @generated from enum value: OPERATE_RECONCILE = 1;
     */
    Operate[Operate["RECONCILE"] = 1] = "RECONCILE";
    /**
     * OPERATE_MAINTAIN maintain the cluster
     *
     * @generated from enum value: OPERATE_MAINTAIN = 2;
     */
    Operate[Operate["MAINTAIN"] = 2] = "MAINTAIN";
    /**
     * OPERATE_RETRY retry the reconciliation of the cluster
     *
     * @generated from enum value: OPERATE_RETRY = 3;
     */
    Operate[Operate["RETRY"] = 3] = "RETRY";
})(Operate || (Operate = {}));
/**
 * Describes the enum api.v1.Operate.
 */
export const OperateSchema = /*@__PURE__*/ enumDesc(file_api_v1_cluster, 0);
/**
 * ClusterService serves kubernetes cluster related functions
 *
 * @generated from service api.v1.ClusterService
 */
export const ClusterService = /*@__PURE__*/ serviceDesc(file_api_v1_cluster, 0);
