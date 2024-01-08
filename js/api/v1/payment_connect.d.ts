import { PaymentServiceCheckAdmittedRequest, PaymentServiceCheckAdmittedResponse, PaymentServiceCheckIfCustomerExistsRequest, PaymentServiceCheckIfCustomerExistsResponse, PaymentServiceCreateOrUpdateCustomerRequest, PaymentServiceCreateOrUpdateCustomerResponse, PaymentServiceDeletePaymentMethodRequest, PaymentServiceDeletePaymentMethodResponse, PaymentServiceGetCustomerRequest, PaymentServiceGetCustomerResponse, PaymentServiceGetCustomerWithLoginRequest, PaymentServiceGetCustomerWithLoginResponse, PaymentServiceGetDefaultPricesRequest, PaymentServiceGetDefaultPricesResponse, PaymentServiceGetInvoicesRequest, PaymentServiceGetInvoicesResponse, PaymentServiceGetSubscriptionUsageRequest, PaymentServiceGetSubscriptionUsageResponse, PaymentServiceHasChargeableResourcesRequest, PaymentServiceHasChargeableResourcesResponse, PaymentServiceHasPaymentMethodRequest, PaymentServiceHasPaymentMethodResponse, PaymentServiceRequestAdmissionRequest, PaymentServiceRequestAdmissionResponse } from "./payment_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * PaymentService serves payment related functions
 *
 * @generated from service api.v1.PaymentService
 */
export declare const PaymentService: {
    readonly typeName: "api.v1.PaymentService";
    readonly methods: {
        /**
         * CreateOrUpdateCustomer the payment data on the payment processor
         *
         * @generated from rpc api.v1.PaymentService.CreateOrUpdateCustomer
         */
        readonly createOrUpdateCustomer: {
            readonly name: "CreateOrUpdateCustomer";
            readonly I: typeof PaymentServiceCreateOrUpdateCustomerRequest;
            readonly O: typeof PaymentServiceCreateOrUpdateCustomerResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * GetCustomer from the payment processor
         *
         * @generated from rpc api.v1.PaymentService.GetCustomer
         */
        readonly getCustomer: {
            readonly name: "GetCustomer";
            readonly I: typeof PaymentServiceGetCustomerRequest;
            readonly O: typeof PaymentServiceGetCustomerResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * GetCustomerWithLogin from the payment processor
         *
         * @generated from rpc api.v1.PaymentService.GetCustomerWithLogin
         */
        readonly getCustomerWithLogin: {
            readonly name: "GetCustomerWithLogin";
            readonly I: typeof PaymentServiceGetCustomerWithLoginRequest;
            readonly O: typeof PaymentServiceGetCustomerWithLoginResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CheckIfCustomerExists at the payment processor
         *
         * @generated from rpc api.v1.PaymentService.CheckIfCustomerExists
         */
        readonly checkIfCustomerExists: {
            readonly name: "CheckIfCustomerExists";
            readonly I: typeof PaymentServiceCheckIfCustomerExistsRequest;
            readonly O: typeof PaymentServiceCheckIfCustomerExistsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * HasPaymentMethod check if the customer has a payment method provided
         *
         * @generated from rpc api.v1.PaymentService.HasPaymentMethod
         */
        readonly hasPaymentMethod: {
            readonly name: "HasPaymentMethod";
            readonly I: typeof PaymentServiceHasPaymentMethodRequest;
            readonly O: typeof PaymentServiceHasPaymentMethodResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * DeletePaymentMethod of the customer
         *
         * @generated from rpc api.v1.PaymentService.DeletePaymentMethod
         */
        readonly deletePaymentMethod: {
            readonly name: "DeletePaymentMethod";
            readonly I: typeof PaymentServiceDeletePaymentMethodRequest;
            readonly O: typeof PaymentServiceDeletePaymentMethodResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * GetSubscriptionUsage of the customer
         *
         * @generated from rpc api.v1.PaymentService.GetSubscriptionUsage
         */
        readonly getSubscriptionUsage: {
            readonly name: "GetSubscriptionUsage";
            readonly I: typeof PaymentServiceGetSubscriptionUsageRequest;
            readonly O: typeof PaymentServiceGetSubscriptionUsageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * GetInvoices of the customer
         *
         * @generated from rpc api.v1.PaymentService.GetInvoices
         */
        readonly getInvoices: {
            readonly name: "GetInvoices";
            readonly I: typeof PaymentServiceGetInvoicesRequest;
            readonly O: typeof PaymentServiceGetInvoicesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * GetDefaultPrices of the products on the platform
         *
         * @generated from rpc api.v1.PaymentService.GetDefaultPrices
         */
        readonly getDefaultPrices: {
            readonly name: "GetDefaultPrices";
            readonly I: typeof PaymentServiceGetDefaultPricesRequest;
            readonly O: typeof PaymentServiceGetDefaultPricesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CheckAdmitted if the customer is allowed to use the service on the platform
         *
         * @generated from rpc api.v1.PaymentService.CheckAdmitted
         */
        readonly checkAdmitted: {
            readonly name: "CheckAdmitted";
            readonly I: typeof PaymentServiceCheckAdmittedRequest;
            readonly O: typeof PaymentServiceCheckAdmittedResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * RequestAdmission for a customer to get allowed to used the service
         *
         * @generated from rpc api.v1.PaymentService.RequestAdmission
         */
        readonly requestAdmission: {
            readonly name: "RequestAdmission";
            readonly I: typeof PaymentServiceRequestAdmissionRequest;
            readonly O: typeof PaymentServiceRequestAdmissionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * HasChargeableResources checks if the customer has resources actually consumed which are chargeable
         *
         * @generated from rpc api.v1.PaymentService.HasChargeableResources
         */
        readonly hasChargeableResources: {
            readonly name: "HasChargeableResources";
            readonly I: typeof PaymentServiceHasChargeableResourcesRequest;
            readonly O: typeof PaymentServiceHasChargeableResourcesResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
