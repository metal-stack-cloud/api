// @generated by protoc-gen-es v2.5.0 with parameter "target=ts"
// @generated from file api/v1/audit.proto (package api.v1, syntax proto3)
/* eslint-disable */
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv2";
import { file_api_v1_common } from "./common_pb";
import { file_buf_validate_validate } from "../../buf/validate/validate_pb";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
/**
 * Describes the file api/v1/audit.proto.
 */
export const file_api_v1_audit = /*@__PURE__*/ fileDesc("ChJhcGkvdjEvYXVkaXQucHJvdG8SBmFwaS52MSKfAgoKQXVkaXRUcmFjZRIWCgR1dWlkGAEgASgJQgi6SAVyA7ABARItCgl0aW1lc3RhbXAYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEgwKBHVzZXIYAyABKAkSDgoGdGVuYW50GAQgASgJEhQKB3Byb2plY3QYBSABKAlIAIgBARIOCgZtZXRob2QYBiABKAkSEQoEYm9keRgHIAEoCUgBiAEBEhEKCXNvdXJjZV9pcBgIIAEoCRIYCgtyZXN1bHRfY29kZRgJIAEoBUgCiAEBEiEKBXBoYXNlGAogASgOMhIuYXBpLnYxLkF1ZGl0UGhhc2VCCgoIX3Byb2plY3RCBwoFX2JvZHlCDgoMX3Jlc3VsdF9jb2RlIrYEChdBdWRpdFNlcnZpY2VMaXN0UmVxdWVzdBIZCgVsb2dpbhgBIAEoCUIKukgHcgUQAhiAARIbCgR1dWlkGAIgASgJQgi6SAVyA7ABAUgAiAEBEi0KBGZyb20YAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wSAGIAQESKwoCdG8YBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wSAKIAQESHQoEdXNlchgFIAEoCUIKukgHcgUQAhiAAUgDiAEBEh4KB3Byb2plY3QYBiABKAlCCLpIBXIDsAEBSASIAQESHwoGbWV0aG9kGAcgASgJQgq6SAdyBRACGIACSAWIAQESHwoJc291cmNlX2lwGAggASgJQge6SARyAnABSAaIAQESIQoLcmVzdWx0X2NvZGUYCSABKAVCB7pIBBoCKABIB4gBARIdCgRib2R5GAogASgJQgq6SAdyBRACGIACSAiIAQESHgoFbGltaXQYCyABKAVCCrpIBxoFGOgHIABICYgBARIwCgVwaGFzZRgMIAEoDjISLmFwaS52MS5BdWRpdFBoYXNlQgi6SAWCAQIQAUgKiAEBQgcKBV91dWlkQgcKBV9mcm9tQgUKA190b0IHCgVfdXNlckIKCghfcHJvamVjdEIJCgdfbWV0aG9kQgwKCl9zb3VyY2VfaXBCDgoMX3Jlc3VsdF9jb2RlQgcKBV9ib2R5QggKBl9saW1pdEIICgZfcGhhc2UiPgoYQXVkaXRTZXJ2aWNlTGlzdFJlc3BvbnNlEiIKBnRyYWNlcxgBIAMoCzISLmFwaS52MS5BdWRpdFRyYWNlIocBChZBdWRpdFNlcnZpY2VHZXRSZXF1ZXN0EhkKBWxvZ2luGAEgASgJQgq6SAdyBRACGIABEhYKBHV1aWQYAiABKAlCCLpIBXIDsAEBEjAKBXBoYXNlGAMgASgOMhIuYXBpLnYxLkF1ZGl0UGhhc2VCCLpIBYIBAhABSACIAQFCCAoGX3BoYXNlIjwKF0F1ZGl0U2VydmljZUdldFJlc3BvbnNlEiEKBXRyYWNlGAEgASgLMhIuYXBpLnYxLkF1ZGl0VHJhY2UqXAoKQXVkaXRQaGFzZRIbChdBVURJVF9QSEFTRV9VTlNQRUNJRklFRBAAEhcKE0FVRElUX1BIQVNFX1JFUVVFU1QQARIYChRBVURJVF9QSEFTRV9SRVNQT05TRRACMrcBCgxBdWRpdFNlcnZpY2USUQoDR2V0Eh4uYXBpLnYxLkF1ZGl0U2VydmljZUdldFJlcXVlc3QaHy5hcGkudjEuQXVkaXRTZXJ2aWNlR2V0UmVzcG9uc2UiCcLzGAEB6PMYAhJUCgRMaXN0Eh8uYXBpLnYxLkF1ZGl0U2VydmljZUxpc3RSZXF1ZXN0GiAuYXBpLnYxLkF1ZGl0U2VydmljZUxpc3RSZXNwb25zZSIJwvMYAQHo8xgCQoMBCgpjb20uYXBpLnYxQgpBdWRpdFByb3RvUAFaMGdpdGh1Yi5jb20vbWV0YWwtc3RhY2stY2xvdWQvYXBpL2dvL2FwaS92MTthcGl2MaICA0FYWKoCBkFwaS5WMcoCBkFwaVxWMeICEkFwaVxWMVxHUEJNZXRhZGF0YeoCB0FwaTo6VjFiBnByb3RvMw", [file_api_v1_common, file_buf_validate_validate, file_google_protobuf_timestamp]);
/**
 * Describes the message api.v1.AuditTrace.
 * Use `create(AuditTraceSchema)` to create a new message.
 */
export const AuditTraceSchema = /*@__PURE__*/ messageDesc(file_api_v1_audit, 0);
/**
 * Describes the message api.v1.AuditServiceListRequest.
 * Use `create(AuditServiceListRequestSchema)` to create a new message.
 */
export const AuditServiceListRequestSchema = /*@__PURE__*/ messageDesc(file_api_v1_audit, 1);
/**
 * Describes the message api.v1.AuditServiceListResponse.
 * Use `create(AuditServiceListResponseSchema)` to create a new message.
 */
export const AuditServiceListResponseSchema = /*@__PURE__*/ messageDesc(file_api_v1_audit, 2);
/**
 * Describes the message api.v1.AuditServiceGetRequest.
 * Use `create(AuditServiceGetRequestSchema)` to create a new message.
 */
export const AuditServiceGetRequestSchema = /*@__PURE__*/ messageDesc(file_api_v1_audit, 3);
/**
 * Describes the message api.v1.AuditServiceGetResponse.
 * Use `create(AuditServiceGetResponseSchema)` to create a new message.
 */
export const AuditServiceGetResponseSchema = /*@__PURE__*/ messageDesc(file_api_v1_audit, 4);
/**
 * AuditPhase specifies phase of an audit trace
 *
 * @generated from enum api.v1.AuditPhase
 */
export var AuditPhase;
(function (AuditPhase) {
    /**
     * AUDIT_PHASE_UNSPECIFIED is not specified
     *
     * @generated from enum value: AUDIT_PHASE_UNSPECIFIED = 0;
     */
    AuditPhase[AuditPhase["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * AUDIT_PHASE_REQUEST defines an audit trace in the request phase
     *
     * @generated from enum value: AUDIT_PHASE_REQUEST = 1;
     */
    AuditPhase[AuditPhase["REQUEST"] = 1] = "REQUEST";
    /**
     * AUDIT_PHASE_REQUEST defines an audit trace in the response phase
     *
     * @generated from enum value: AUDIT_PHASE_RESPONSE = 2;
     */
    AuditPhase[AuditPhase["RESPONSE"] = 2] = "RESPONSE";
})(AuditPhase || (AuditPhase = {}));
/**
 * Describes the enum api.v1.AuditPhase.
 */
export const AuditPhaseSchema = /*@__PURE__*/ enumDesc(file_api_v1_audit, 0);
/**
 * AuditService serves audit related functions
 *
 * @generated from service api.v1.AuditService
 */
export const AuditService = /*@__PURE__*/ serviceDesc(file_api_v1_audit, 0);
