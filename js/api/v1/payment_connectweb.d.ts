import { PaymentServiceCheckIfCustomerExistsRequest, PaymentServiceCheckIfCustomerExistsResponse, PaymentServiceCreateOrUpdateCustomerRequest, PaymentServiceCreateOrUpdateCustomerResponse, PaymentServiceDeletePaymentMethodRequest, PaymentServiceDeletePaymentMethodResponse, PaymentServiceGetCustomerRequest, PaymentServiceGetCustomerResponse, PaymentServiceGetCustomerWithLoginRequest, PaymentServiceGetCustomerWithLoginResponse, PaymentServiceGetDefaultPricesRequest, PaymentServiceGetDefaultPricesResponse, PaymentServiceGetInvoicesRequest, PaymentServiceGetInvoicesResponse, PaymentServiceGetSubscriptionUsageRequest, PaymentServiceGetSubscriptionUsageResponse, PaymentServiceHasPaymentMethodRequest, PaymentServiceHasPaymentMethodResponse } from "./payment_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service api.v1.PaymentService
 */
export declare const PaymentService: {
    readonly typeName: "api.v1.PaymentService";
    readonly methods: {
        /**
         * @generated from rpc api.v1.PaymentService.CreateOrUpdateCustomer
         */
        readonly createOrUpdateCustomer: {
            readonly name: "CreateOrUpdateCustomer";
            readonly I: typeof PaymentServiceCreateOrUpdateCustomerRequest;
            readonly O: typeof PaymentServiceCreateOrUpdateCustomerResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.PaymentService.GetCustomer
         */
        readonly getCustomer: {
            readonly name: "GetCustomer";
            readonly I: typeof PaymentServiceGetCustomerRequest;
            readonly O: typeof PaymentServiceGetCustomerResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.PaymentService.GetCustomerWithLogin
         */
        readonly getCustomerWithLogin: {
            readonly name: "GetCustomerWithLogin";
            readonly I: typeof PaymentServiceGetCustomerWithLoginRequest;
            readonly O: typeof PaymentServiceGetCustomerWithLoginResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.PaymentService.CheckIfCustomerExists
         */
        readonly checkIfCustomerExists: {
            readonly name: "CheckIfCustomerExists";
            readonly I: typeof PaymentServiceCheckIfCustomerExistsRequest;
            readonly O: typeof PaymentServiceCheckIfCustomerExistsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.PaymentService.HasPaymentMethod
         */
        readonly hasPaymentMethod: {
            readonly name: "HasPaymentMethod";
            readonly I: typeof PaymentServiceHasPaymentMethodRequest;
            readonly O: typeof PaymentServiceHasPaymentMethodResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.PaymentService.DeletePaymentMethod
         */
        readonly deletePaymentMethod: {
            readonly name: "DeletePaymentMethod";
            readonly I: typeof PaymentServiceDeletePaymentMethodRequest;
            readonly O: typeof PaymentServiceDeletePaymentMethodResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.PaymentService.GetSubscriptionUsage
         */
        readonly getSubscriptionUsage: {
            readonly name: "GetSubscriptionUsage";
            readonly I: typeof PaymentServiceGetSubscriptionUsageRequest;
            readonly O: typeof PaymentServiceGetSubscriptionUsageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.PaymentService.GetInvoices
         */
        readonly getInvoices: {
            readonly name: "GetInvoices";
            readonly I: typeof PaymentServiceGetInvoicesRequest;
            readonly O: typeof PaymentServiceGetInvoicesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc api.v1.PaymentService.GetDefaultPrices
         */
        readonly getDefaultPrices: {
            readonly name: "GetDefaultPrices";
            readonly I: typeof PaymentServiceGetDefaultPricesRequest;
            readonly O: typeof PaymentServiceGetDefaultPricesResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
