import { TenantServiceAdmitRequest, TenantServiceAdmitResponse, TenantServiceDeleteTestUserRequest, TenantServiceDeleteTestUserResponse, TenantServiceListRequest, TenantServiceListResponse, TenantServiceRevokeRequest, TenantServiceRevokeResponse } from "./tenant_pb.js";
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
        /**
         * @generated from rpc admin.v1.TenantService.Revoke
         */
        readonly revoke: {
            readonly name: "Revoke";
            readonly I: typeof TenantServiceRevokeRequest;
            readonly O: typeof TenantServiceRevokeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc admin.v1.TenantService.DeleteTestUser
         */
        readonly deleteTestUser: {
            readonly name: "DeleteTestUser";
            readonly I: typeof TenantServiceDeleteTestUserRequest;
            readonly O: typeof TenantServiceDeleteTestUserResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
