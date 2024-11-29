import { AuditServiceGetRequest, AuditServiceGetResponse, AuditServiceListRequest, AuditServiceListResponse } from "./audit_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * AuditService serves audit related functions
 *
 *
 * @generated from service api.v1.AuditService
 */
export declare const AuditService: {
    readonly typeName: "api.v1.AuditService";
    readonly methods: {
        /**
         * Get a audit
         *
         * @generated from rpc api.v1.AuditService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof AuditServiceGetRequest;
            readonly O: typeof AuditServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * List your audit traces
         *
         * @generated from rpc api.v1.AuditService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof AuditServiceListRequest;
            readonly O: typeof AuditServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
