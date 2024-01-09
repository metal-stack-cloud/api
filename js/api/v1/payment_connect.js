// @generated by protoc-gen-connect-es v1.2.0 with parameter "target=ts"
// @generated from file api/v1/payment.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { PaymentServiceCheckAdmittedRequest, PaymentServiceCheckAdmittedResponse, PaymentServiceCheckIfCustomerExistsRequest, PaymentServiceCheckIfCustomerExistsResponse, PaymentServiceCreateOrUpdateCustomerRequest, PaymentServiceCreateOrUpdateCustomerResponse, PaymentServiceDeletePaymentMethodRequest, PaymentServiceDeletePaymentMethodResponse, PaymentServiceGetCustomerRequest, PaymentServiceGetCustomerResponse, PaymentServiceGetCustomerWithLoginRequest, PaymentServiceGetCustomerWithLoginResponse, PaymentServiceGetDefaultPricesRequest, PaymentServiceGetDefaultPricesResponse, PaymentServiceGetInvoicesRequest, PaymentServiceGetInvoicesResponse, PaymentServiceGetSubscriptionUsageRequest, PaymentServiceGetSubscriptionUsageResponse, PaymentServiceHasChargeableResourcesRequest, PaymentServiceHasChargeableResourcesResponse, PaymentServiceHasPaymentMethodRequest, PaymentServiceHasPaymentMethodResponse, PaymentServiceRequestAdmissionRequest, PaymentServiceRequestAdmissionResponse } from "./payment_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * PaymentService serves payment related functions
 *
 * @generated from service api.v1.PaymentService
 */
export const PaymentService = {
    typeName: "api.v1.PaymentService",
    methods: {
        /**
         * CreateOrUpdateCustomer the payment data on the payment processor
         *
         * @generated from rpc api.v1.PaymentService.CreateOrUpdateCustomer
         */
        createOrUpdateCustomer: {
            name: "CreateOrUpdateCustomer",
            I: PaymentServiceCreateOrUpdateCustomerRequest,
            O: PaymentServiceCreateOrUpdateCustomerResponse,
            kind: MethodKind.Unary,
        },
        /**
         * GetCustomer from the payment processor
         *
         * @generated from rpc api.v1.PaymentService.GetCustomer
         */
        getCustomer: {
            name: "GetCustomer",
            I: PaymentServiceGetCustomerRequest,
            O: PaymentServiceGetCustomerResponse,
            kind: MethodKind.Unary,
        },
        /**
         * GetCustomerWithLogin from the payment processor
         *
         * @generated from rpc api.v1.PaymentService.GetCustomerWithLogin
         */
        getCustomerWithLogin: {
            name: "GetCustomerWithLogin",
            I: PaymentServiceGetCustomerWithLoginRequest,
            O: PaymentServiceGetCustomerWithLoginResponse,
            kind: MethodKind.Unary,
        },
        /**
         * CheckIfCustomerExists at the payment processor
         *
         * @generated from rpc api.v1.PaymentService.CheckIfCustomerExists
         */
        checkIfCustomerExists: {
            name: "CheckIfCustomerExists",
            I: PaymentServiceCheckIfCustomerExistsRequest,
            O: PaymentServiceCheckIfCustomerExistsResponse,
            kind: MethodKind.Unary,
        },
        /**
         * HasPaymentMethod check if the customer has a payment method provided
         *
         * @generated from rpc api.v1.PaymentService.HasPaymentMethod
         */
        hasPaymentMethod: {
            name: "HasPaymentMethod",
            I: PaymentServiceHasPaymentMethodRequest,
            O: PaymentServiceHasPaymentMethodResponse,
            kind: MethodKind.Unary,
        },
        /**
         * DeletePaymentMethod of the customer
         *
         * @generated from rpc api.v1.PaymentService.DeletePaymentMethod
         */
        deletePaymentMethod: {
            name: "DeletePaymentMethod",
            I: PaymentServiceDeletePaymentMethodRequest,
            O: PaymentServiceDeletePaymentMethodResponse,
            kind: MethodKind.Unary,
        },
        /**
         * GetSubscriptionUsage of the customer
         *
         * @generated from rpc api.v1.PaymentService.GetSubscriptionUsage
         */
        getSubscriptionUsage: {
            name: "GetSubscriptionUsage",
            I: PaymentServiceGetSubscriptionUsageRequest,
            O: PaymentServiceGetSubscriptionUsageResponse,
            kind: MethodKind.Unary,
        },
        /**
         * GetInvoices of the customer
         *
         * @generated from rpc api.v1.PaymentService.GetInvoices
         */
        getInvoices: {
            name: "GetInvoices",
            I: PaymentServiceGetInvoicesRequest,
            O: PaymentServiceGetInvoicesResponse,
            kind: MethodKind.Unary,
        },
        /**
         * GetDefaultPrices of the products on the platform
         *
         * @generated from rpc api.v1.PaymentService.GetDefaultPrices
         */
        getDefaultPrices: {
            name: "GetDefaultPrices",
            I: PaymentServiceGetDefaultPricesRequest,
            O: PaymentServiceGetDefaultPricesResponse,
            kind: MethodKind.Unary,
        },
        /**
         * CheckAdmitted if the customer is allowed to use the service on the platform
         *
         * @generated from rpc api.v1.PaymentService.CheckAdmitted
         */
        checkAdmitted: {
            name: "CheckAdmitted",
            I: PaymentServiceCheckAdmittedRequest,
            O: PaymentServiceCheckAdmittedResponse,
            kind: MethodKind.Unary,
        },
        /**
         * RequestAdmission for a customer to get allowed to used the service
         *
         * @generated from rpc api.v1.PaymentService.RequestAdmission
         */
        requestAdmission: {
            name: "RequestAdmission",
            I: PaymentServiceRequestAdmissionRequest,
            O: PaymentServiceRequestAdmissionResponse,
            kind: MethodKind.Unary,
        },
        /**
         * HasChargeableResources checks if the customer has resources actually consumed which are chargeable
         *
         * @generated from rpc api.v1.PaymentService.HasChargeableResources
         */
        hasChargeableResources: {
            name: "HasChargeableResources",
            I: PaymentServiceHasChargeableResourcesRequest,
            O: PaymentServiceHasChargeableResourcesResponse,
            kind: MethodKind.Unary,
        },
    }
};
