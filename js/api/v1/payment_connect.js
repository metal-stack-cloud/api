"use strict";
// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file api/v1/payment.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const payment_pb_js_1 = require("./payment_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service api.v1.PaymentService
 */
exports.PaymentService = {
    typeName: "api.v1.PaymentService",
    methods: {
        /**
         * @generated from rpc api.v1.PaymentService.CreateOrUpdateCustomer
         */
        createOrUpdateCustomer: {
            name: "CreateOrUpdateCustomer",
            I: payment_pb_js_1.PaymentServiceCreateOrUpdateCustomerRequest,
            O: payment_pb_js_1.PaymentServiceCreateOrUpdateCustomerResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.PaymentService.GetCustomer
         */
        getCustomer: {
            name: "GetCustomer",
            I: payment_pb_js_1.PaymentServiceGetCustomerRequest,
            O: payment_pb_js_1.PaymentServiceGetCustomerResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.PaymentService.GetCustomerWithLogin
         */
        getCustomerWithLogin: {
            name: "GetCustomerWithLogin",
            I: payment_pb_js_1.PaymentServiceGetCustomerWithLoginRequest,
            O: payment_pb_js_1.PaymentServiceGetCustomerWithLoginResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.PaymentService.CheckIfCustomerExists
         */
        checkIfCustomerExists: {
            name: "CheckIfCustomerExists",
            I: payment_pb_js_1.PaymentServiceCheckIfCustomerExistsRequest,
            O: payment_pb_js_1.PaymentServiceCheckIfCustomerExistsResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.PaymentService.HasPaymentMethod
         */
        hasPaymentMethod: {
            name: "HasPaymentMethod",
            I: payment_pb_js_1.PaymentServiceHasPaymentMethodRequest,
            O: payment_pb_js_1.PaymentServiceHasPaymentMethodResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.PaymentService.DeletePaymentMethod
         */
        deletePaymentMethod: {
            name: "DeletePaymentMethod",
            I: payment_pb_js_1.PaymentServiceDeletePaymentMethodRequest,
            O: payment_pb_js_1.PaymentServiceDeletePaymentMethodResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.PaymentService.GetSubscriptionUsage
         */
        getSubscriptionUsage: {
            name: "GetSubscriptionUsage",
            I: payment_pb_js_1.PaymentServiceGetSubscriptionUsageRequest,
            O: payment_pb_js_1.PaymentServiceGetSubscriptionUsageResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.PaymentService.GetInvoices
         */
        getInvoices: {
            name: "GetInvoices",
            I: payment_pb_js_1.PaymentServiceGetInvoicesRequest,
            O: payment_pb_js_1.PaymentServiceGetInvoicesResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.PaymentService.GetDefaultPrices
         */
        getDefaultPrices: {
            name: "GetDefaultPrices",
            I: payment_pb_js_1.PaymentServiceGetDefaultPricesRequest,
            O: payment_pb_js_1.PaymentServiceGetDefaultPricesResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.PaymentService.CheckAdmitted
         */
        checkAdmitted: {
            name: "CheckAdmitted",
            I: payment_pb_js_1.PaymentServiceCheckAdmittedRequest,
            O: payment_pb_js_1.PaymentServiceCheckAdmittedResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.PaymentService.RequestAdmission
         */
        requestAdmission: {
            name: "RequestAdmission",
            I: payment_pb_js_1.PaymentServiceRequestAdmissionRequest,
            O: payment_pb_js_1.PaymentServiceRequestAdmissionResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc api.v1.PaymentService.HasChargeableResources
         */
        hasChargeableResources: {
            name: "HasChargeableResources",
            I: payment_pb_js_1.PaymentServiceHasChargeableResourcesRequest,
            O: payment_pb_js_1.PaymentServiceHasChargeableResourcesResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
