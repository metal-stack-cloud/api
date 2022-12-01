import { TenantServiceAdmitRequest, TenantServiceAdmitResponse, TenantServiceListRequest, TenantServiceListResponse } from "./tenant_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service admin.v1.TenantService
 */
export declare const TenantService: {
    readonly typeName: "admin.v1.TenantService";
    readonly methods: {
        /**
         * @generated from rpc admin.v1.TenantService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof TenantServiceListRequest;
            readonly O: typeof TenantServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc admin.v1.TenantService.Admit
         */
        readonly admit: {
            readonly name: "Admit";
            readonly I: typeof TenantServiceAdmitRequest;
            readonly O: typeof TenantServiceAdmitResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
