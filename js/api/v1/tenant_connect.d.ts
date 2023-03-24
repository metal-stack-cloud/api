import { TenantServiceCreateOrUpdateRequest, TenantServiceCreateOrUpdateResponse, TenantServiceCreateRequest, TenantServiceCreateResponse, TenantServiceDeleteRequest, TenantServiceDeleteResponse, TenantServiceGetRequest, TenantServiceGetResponse, TenantServiceUpdateRequest, TenantServiceUpdateResponse } from "./tenant_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service api.v1.TenantService
 */
export declare const TenantService: {
    readonly typeName: "api.v1.TenantService";
    readonly methods: {
        /**
         * @generated from rpc api.v1.TenantService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof TenantServiceCreateRequest;
            readonly O: typeof TenantServiceCreateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CreateOrUpdate should only be used from within the application
         * will check if tenant already exists and updates if necessary, otherwise create a new tenant
         *
         * @generated from rpc api.v1.TenantService.CreateOrUpdate
         */
        readonly createOrUpdate: {
            readonly name: "CreateOrUpdate";
            readonly I: typeof TenantServiceCreateOrUpdateRequest;
            readonly O: typeof TenantServiceCreateOrUpdateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.TenantService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof TenantServiceGetRequest;
            readonly O: typeof TenantServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.TenantService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof TenantServiceUpdateRequest;
            readonly O: typeof TenantServiceUpdateResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.TenantService.Delete
         */
        readonly delete: {
            readonly name: "Delete";
            readonly I: typeof TenantServiceDeleteRequest;
            readonly O: typeof TenantServiceDeleteResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
