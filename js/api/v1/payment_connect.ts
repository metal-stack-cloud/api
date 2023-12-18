// @generated by protoc-gen-connect-es v1.2.0 with parameter "target=ts"
// @generated from file api/v1/payment.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { PaymentServiceCheckAdmittedRequest, PaymentServiceCheckAdmittedResponse, PaymentServiceCheckIfCustomerExistsRequest, PaymentServiceCheckIfCustomerExistsResponse, PaymentServiceCreateOrUpdateCustomerRequest, PaymentServiceCreateOrUpdateCustomerResponse, PaymentServiceDeletePaymentMethodRequest, PaymentServiceDeletePaymentMethodResponse, PaymentServiceGetCustomerRequest, PaymentServiceGetCustomerResponse, PaymentServiceGetCustomerWithLoginRequest, PaymentServiceGetCustomerWithLoginResponse, PaymentServiceGetDefaultPricesRequest, PaymentServiceGetDefaultPricesResponse, PaymentServiceGetInvoicesRequest, PaymentServiceGetInvoicesResponse, PaymentServiceGetSubscriptionUsageRequest, PaymentServiceGetSubscriptionUsageResponse, PaymentServiceHasChargeableResourcesRequest, PaymentServiceHasChargeableResourcesResponse, PaymentServiceHasPaymentMethodRequest, PaymentServiceHasPaymentMethodResponse, PaymentServiceRequestAdmissionRequest, PaymentServiceRequestAdmissionResponse } from "./payment_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.PaymentService
 */
export const PaymentService = {
  typeName: "api.v1.PaymentService",
  methods: {
    /**
     * @generated from rpc api.v1.PaymentService.CreateOrUpdateCustomer
     */
    createOrUpdateCustomer: {
      name: "CreateOrUpdateCustomer",
      I: PaymentServiceCreateOrUpdateCustomerRequest,
      O: PaymentServiceCreateOrUpdateCustomerResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.PaymentService.GetCustomer
     */
    getCustomer: {
      name: "GetCustomer",
      I: PaymentServiceGetCustomerRequest,
      O: PaymentServiceGetCustomerResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.PaymentService.GetCustomerWithLogin
     */
    getCustomerWithLogin: {
      name: "GetCustomerWithLogin",
      I: PaymentServiceGetCustomerWithLoginRequest,
      O: PaymentServiceGetCustomerWithLoginResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.PaymentService.CheckIfCustomerExists
     */
    checkIfCustomerExists: {
      name: "CheckIfCustomerExists",
      I: PaymentServiceCheckIfCustomerExistsRequest,
      O: PaymentServiceCheckIfCustomerExistsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.PaymentService.HasPaymentMethod
     */
    hasPaymentMethod: {
      name: "HasPaymentMethod",
      I: PaymentServiceHasPaymentMethodRequest,
      O: PaymentServiceHasPaymentMethodResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.PaymentService.DeletePaymentMethod
     */
    deletePaymentMethod: {
      name: "DeletePaymentMethod",
      I: PaymentServiceDeletePaymentMethodRequest,
      O: PaymentServiceDeletePaymentMethodResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.PaymentService.GetSubscriptionUsage
     */
    getSubscriptionUsage: {
      name: "GetSubscriptionUsage",
      I: PaymentServiceGetSubscriptionUsageRequest,
      O: PaymentServiceGetSubscriptionUsageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.PaymentService.GetInvoices
     */
    getInvoices: {
      name: "GetInvoices",
      I: PaymentServiceGetInvoicesRequest,
      O: PaymentServiceGetInvoicesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.PaymentService.GetDefaultPrices
     */
    getDefaultPrices: {
      name: "GetDefaultPrices",
      I: PaymentServiceGetDefaultPricesRequest,
      O: PaymentServiceGetDefaultPricesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.PaymentService.CheckAdmitted
     */
    checkAdmitted: {
      name: "CheckAdmitted",
      I: PaymentServiceCheckAdmittedRequest,
      O: PaymentServiceCheckAdmittedResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.PaymentService.RequestAdmission
     */
    requestAdmission: {
      name: "RequestAdmission",
      I: PaymentServiceRequestAdmissionRequest,
      O: PaymentServiceRequestAdmissionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.PaymentService.HasChargeableResources
     */
    hasChargeableResources: {
      name: "HasChargeableResources",
      I: PaymentServiceHasChargeableResourcesRequest,
      O: PaymentServiceHasChargeableResourcesResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

