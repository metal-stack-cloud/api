import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file api/v1/payment.proto.
 */
export declare const file_api_v1_payment: GenFile;
/**
 * PaymentCustomer is a customer at the payment processor
 *
 * @generated from message api.v1.PaymentCustomer
 */
export type PaymentCustomer = Message<"api.v1.PaymentCustomer"> & {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Name of the customer
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * CustomerId id of the customer
     *
     * @generated from field: optional string customer_id = 3;
     */
    customerId?: string;
    /**
     * PaymentMethodId at the payment processor
     *
     * @generated from field: optional string payment_method_id = 4;
     */
    paymentMethodId?: string;
    /**
     * SubscriptionId of the customer
     *
     * @generated from field: string subscription_id = 5;
     */
    subscriptionId: string;
    /**
     * Email of the customer
     *
     * @generated from field: optional string email = 6;
     */
    email?: string;
    /**
     * Card the customer supplied
     *
     * @generated from field: optional api.v1.Card card = 7;
     */
    card?: Card;
    /**
     * Prices which apply to customer resources
     *
     * @generated from field: repeated api.v1.Price prices = 8;
     */
    prices: Price[];
    /**
     * Address is the postal address of the customer
     *
     * @generated from field: api.v1.Address address = 9;
     */
    address?: Address;
    /**
     * Coupon details of granted coupon if any
     *
     * @generated from field: optional api.v1.Coupon coupon = 10;
     */
    coupon?: Coupon;
    /**
     * Vat which applies to the customer
     *
     * @generated from field: optional string vat = 11;
     */
    vat?: string;
    /**
     * PhoneNumber of the customer
     *
     * @generated from field: optional string phone_number = 12;
     */
    phoneNumber?: string;
    /**
     * Balance actual balance of the customer
     *
     * @generated from field: optional int64 balance = 13;
     */
    balance?: bigint;
};
/**
 * Describes the message api.v1.PaymentCustomer.
 * Use `create(PaymentCustomerSchema)` to create a new message.
 */
export declare const PaymentCustomerSchema: GenMessage<PaymentCustomer>;
/**
 * Card is the payment card the customer pays with
 *
 * @generated from message api.v1.Card
 */
export type Card = Message<"api.v1.Card"> & {
    /**
     * Brand of the card
     *
     * @generated from field: string brand = 1;
     */
    brand: string;
    /**
     * Country where the card was issued
     *
     * @generated from field: string country = 2;
     */
    country: string;
    /**
     * ExpMonth is the month when this card expires
     *
     * @generated from field: int64 exp_month = 3;
     */
    expMonth: bigint;
    /**
     * ExpYear is the year when this card expires
     *
     * @generated from field: int64 exp_year = 4;
     */
    expYear: bigint;
    /**
     * Last4 are the 4 last digits of the card number, the full number is not stored anywhere
     *
     * @generated from field: string last_4 = 5;
     */
    last4: string;
};
/**
 * Describes the message api.v1.Card.
 * Use `create(CardSchema)` to create a new message.
 */
export declare const CardSchema: GenMessage<Card>;
/**
 * Price of a product
 *
 * @generated from message api.v1.Price
 */
export type Price = Message<"api.v1.Price"> & {
    /**
     * Name of the price
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * UnitAmountDecimal the value of this price
     *
     * @generated from field: double unit_amount_decimal = 2;
     */
    unitAmountDecimal: number;
    /**
     * Currency of this price
     *
     * @generated from field: string currency = 3;
     */
    currency: string;
    /**
     * UnitLabel is a label which allows for searching this unit at the payment processor
     *
     * @generated from field: string unit_label = 4;
     */
    unitLabel: string;
    /**
     * ProductType this price applies to
     *
     * @generated from field: api.v1.ProductType product_type = 5;
     */
    productType: ProductType;
    /**
     * Description of this price
     *
     * @generated from field: optional string description = 6;
     */
    description?: string;
    /**
     * UsageType indicates how a price is measured
     *
     * @generated from field: api.v1.UsageType usage_type = 7;
     */
    usageType: UsageType;
};
/**
 * Describes the message api.v1.Price.
 * Use `create(PriceSchema)` to create a new message.
 */
export declare const PriceSchema: GenMessage<Price>;
/**
 * Address postal address of a customer
 *
 * @generated from message api.v1.Address
 */
export type Address = Message<"api.v1.Address"> & {
    /**
     * Line1 the first address line
     *
     * @generated from field: string line1 = 1;
     */
    line1: string;
    /**
     * Line2 the second address line
     *
     * @generated from field: string line2 = 2;
     */
    line2: string;
    /**
     * PostalCode of the city or address
     *
     * @generated from field: string postal_code = 3;
     */
    postalCode: string;
    /**
     * City where the customer lives
     *
     * @generated from field: string city = 4;
     */
    city: string;
    /**
     * Sate where the customer lives
     *
     * @generated from field: string state = 5;
     */
    state: string;
    /**
     * Country where the customer lives
     *
     * @generated from field: string country = 6;
     */
    country: string;
};
/**
 * Describes the message api.v1.Address.
 * Use `create(AddressSchema)` to create a new message.
 */
export declare const AddressSchema: GenMessage<Address>;
/**
 * SubscriptionUsageItem details of a subscription
 *
 * @generated from message api.v1.SubscriptionUsageItem
 */
export type SubscriptionUsageItem = Message<"api.v1.SubscriptionUsageItem"> & {
    /**
     * SubscriptionItemId is the id of the subscription
     *
     * @generated from field: string subscription_item_id = 1;
     */
    subscriptionItemId: string;
    /**
     * SubscriptionItemName is the name of the subscription
     *
     * @generated from field: string subscription_item_name = 2;
     */
    subscriptionItemName: string;
    /**
     * TotalUsage of this subscription
     *
     * @generated from field: int64 total_usage = 3;
     */
    totalUsage: bigint;
    /**
     * PeriodStart is the start date of this subscription
     *
     * @generated from field: google.protobuf.Timestamp period_start = 4;
     */
    periodStart?: Timestamp;
    /**
     * PeriodEnd is the end date of this subscription
     *
     * @generated from field: google.protobuf.Timestamp period_end = 5;
     */
    periodEnd?: Timestamp;
};
/**
 * Describes the message api.v1.SubscriptionUsageItem.
 * Use `create(SubscriptionUsageItemSchema)` to create a new message.
 */
export declare const SubscriptionUsageItemSchema: GenMessage<SubscriptionUsageItem>;
/**
 * Invoice a customer has to pay for subscription usage
 *
 * @generated from message api.v1.Invoice
 */
export type Invoice = Message<"api.v1.Invoice"> & {
    /**
     * Id of the invoice
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * PdfDownloadUrl is the url where the customer can download this invoice in pdf format
     *
     * @generated from field: string pdf_download_url = 2;
     */
    pdfDownloadUrl: string;
    /**
     * PeriodStart is the start date of this subscription
     *
     * @generated from field: google.protobuf.Timestamp period_start = 4;
     */
    periodStart?: Timestamp;
    /**
     * PeriodEnd is the end date of this subscription
     *
     * @generated from field: google.protobuf.Timestamp period_end = 5;
     */
    periodEnd?: Timestamp;
};
/**
 * Describes the message api.v1.Invoice.
 * Use `create(InvoiceSchema)` to create a new message.
 */
export declare const InvoiceSchema: GenMessage<Invoice>;
/**
 * Coupon is a amount of free usage which can be granted to a customer
 *
 * @generated from message api.v1.Coupon
 */
export type Coupon = Message<"api.v1.Coupon"> & {
    /**
     * Id of the coupon
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Name of this coupon
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * AmountOff is th amount the customer can use for free
     *
     * @generated from field: int64 amount_off = 3;
     */
    amountOff: bigint;
    /**
     * Currency of the free usage amount
     *
     * @generated from field: string currency = 4;
     */
    currency: string;
    /**
     * DurationInMonth defines how many month this coupon is valid for
     *
     * @generated from field: int64 duration_in_month = 5;
     */
    durationInMonth: bigint;
    /**
     * CreatedAt is the date the coupon was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * RedeemBy is the date when this coupon can no longer be used
     *
     * @generated from field: google.protobuf.Timestamp redeem_by = 7;
     */
    redeemBy?: Timestamp;
    /**
     * TimesRedeemed how often this coupon was already consumed
     *
     * @generated from field: int64 times_redeemed = 8;
     */
    timesRedeemed: bigint;
    /**
     * MaxRedemptions defines how often this coupon can be consumed
     *
     * @generated from field: int64 max_redemptions = 9;
     */
    maxRedemptions: bigint;
    /**
     * AmountLeft how many usages are left for this coupon
     *
     * @generated from field: int64 amount_left = 10;
     */
    amountLeft: bigint;
};
/**
 * Describes the message api.v1.Coupon.
 * Use `create(CouponSchema)` to create a new message.
 */
export declare const CouponSchema: GenMessage<Coupon>;
/**
 * PaymentServiceCreateOrUpdateCustomerRequest is the request payload for a payment create or update customer request
 *
 * @generated from message api.v1.PaymentServiceCreateOrUpdateCustomerRequest
 */
export type PaymentServiceCreateOrUpdateCustomerRequest = Message<"api.v1.PaymentServiceCreateOrUpdateCustomerRequest"> & {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Customer is the customer to modify
     *
     * @generated from field: api.v1.PaymentCustomer customer = 2;
     */
    customer?: PaymentCustomer;
    /**
     * AcceptedTermsAndConditions indicates the modification of the terms and conditions acceptance
     *
     * @generated from field: bool accepted_terms_and_conditions = 3;
     */
    acceptedTermsAndConditions: boolean;
};
/**
 * Describes the message api.v1.PaymentServiceCreateOrUpdateCustomerRequest.
 * Use `create(PaymentServiceCreateOrUpdateCustomerRequestSchema)` to create a new message.
 */
export declare const PaymentServiceCreateOrUpdateCustomerRequestSchema: GenMessage<PaymentServiceCreateOrUpdateCustomerRequest>;
/**
 * PaymentServiceCreateOrUpdateCustomerResponse is the response payload for a payment create or update customer request
 *
 * @generated from message api.v1.PaymentServiceCreateOrUpdateCustomerResponse
 */
export type PaymentServiceCreateOrUpdateCustomerResponse = Message<"api.v1.PaymentServiceCreateOrUpdateCustomerResponse"> & {
    /**
     * Customer is the customer
     *
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
};
/**
 * Describes the message api.v1.PaymentServiceCreateOrUpdateCustomerResponse.
 * Use `create(PaymentServiceCreateOrUpdateCustomerResponseSchema)` to create a new message.
 */
export declare const PaymentServiceCreateOrUpdateCustomerResponseSchema: GenMessage<PaymentServiceCreateOrUpdateCustomerResponse>;
/**
 * PaymentServiceGetCustomerRequest is the request payload for a payment get customer request
 *
 * @generated from message api.v1.PaymentServiceGetCustomerRequest
 */
export type PaymentServiceGetCustomerRequest = Message<"api.v1.PaymentServiceGetCustomerRequest"> & {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * CustomerId of the customer
     *
     * @generated from field: string customer_id = 2;
     */
    customerId: string;
};
/**
 * Describes the message api.v1.PaymentServiceGetCustomerRequest.
 * Use `create(PaymentServiceGetCustomerRequestSchema)` to create a new message.
 */
export declare const PaymentServiceGetCustomerRequestSchema: GenMessage<PaymentServiceGetCustomerRequest>;
/**
 * PaymentServiceGetCustomerResponse is the response payload for a payment get customer request
 *
 * @generated from message api.v1.PaymentServiceGetCustomerResponse
 */
export type PaymentServiceGetCustomerResponse = Message<"api.v1.PaymentServiceGetCustomerResponse"> & {
    /**
     * Customer is the customer
     *
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
};
/**
 * Describes the message api.v1.PaymentServiceGetCustomerResponse.
 * Use `create(PaymentServiceGetCustomerResponseSchema)` to create a new message.
 */
export declare const PaymentServiceGetCustomerResponseSchema: GenMessage<PaymentServiceGetCustomerResponse>;
/**
 * PaymentServiceCheckIfCustomerExistsRequest is the request payload for a payment check if customer exists request
 *
 * @generated from message api.v1.PaymentServiceCheckIfCustomerExistsRequest
 */
export type PaymentServiceCheckIfCustomerExistsRequest = Message<"api.v1.PaymentServiceCheckIfCustomerExistsRequest"> & {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
};
/**
 * Describes the message api.v1.PaymentServiceCheckIfCustomerExistsRequest.
 * Use `create(PaymentServiceCheckIfCustomerExistsRequestSchema)` to create a new message.
 */
export declare const PaymentServiceCheckIfCustomerExistsRequestSchema: GenMessage<PaymentServiceCheckIfCustomerExistsRequest>;
/**
 * PaymentServiceCheckIfCustomerExistsResponse is the response payload for a payment check if customer exists request
 *
 * @generated from message api.v1.PaymentServiceCheckIfCustomerExistsResponse
 */
export type PaymentServiceCheckIfCustomerExistsResponse = Message<"api.v1.PaymentServiceCheckIfCustomerExistsResponse"> & {
    /**
     * Customer is the customer
     *
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
    /**
     * Exists indicates if this customer exists
     *
     * @generated from field: bool exists = 2;
     */
    exists: boolean;
};
/**
 * Describes the message api.v1.PaymentServiceCheckIfCustomerExistsResponse.
 * Use `create(PaymentServiceCheckIfCustomerExistsResponseSchema)` to create a new message.
 */
export declare const PaymentServiceCheckIfCustomerExistsResponseSchema: GenMessage<PaymentServiceCheckIfCustomerExistsResponse>;
/**
 * PaymentServiceHasPaymentMethodRequest is the request payload for a has payment request
 *
 * @generated from message api.v1.PaymentServiceHasPaymentMethodRequest
 */
export type PaymentServiceHasPaymentMethodRequest = Message<"api.v1.PaymentServiceHasPaymentMethodRequest"> & {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
};
/**
 * Describes the message api.v1.PaymentServiceHasPaymentMethodRequest.
 * Use `create(PaymentServiceHasPaymentMethodRequestSchema)` to create a new message.
 */
export declare const PaymentServiceHasPaymentMethodRequestSchema: GenMessage<PaymentServiceHasPaymentMethodRequest>;
/**
 * PaymentServiceHasPaymentMethodResponse is the response payload for a has payment request
 *
 * @generated from message api.v1.PaymentServiceHasPaymentMethodResponse
 */
export type PaymentServiceHasPaymentMethodResponse = Message<"api.v1.PaymentServiceHasPaymentMethodResponse"> & {
    /**
     * Exists indicates if this customer has a payment method
     *
     * @generated from field: bool exists = 1;
     */
    exists: boolean;
    /**
     * CouponLeft is true if there is still free amount on the coupon left
     *
     * @generated from field: bool coupon_left = 2;
     */
    couponLeft: boolean;
    /**
     * PositiveBalance indicates if the customer still has positive balance
     *
     * @generated from field: bool positive_balance = 3;
     */
    positiveBalance: boolean;
};
/**
 * Describes the message api.v1.PaymentServiceHasPaymentMethodResponse.
 * Use `create(PaymentServiceHasPaymentMethodResponseSchema)` to create a new message.
 */
export declare const PaymentServiceHasPaymentMethodResponseSchema: GenMessage<PaymentServiceHasPaymentMethodResponse>;
/**
 * PaymentServiceDeletePaymentMethodRequest is the request payload for a delete payment request
 *
 * @generated from message api.v1.PaymentServiceDeletePaymentMethodRequest
 */
export type PaymentServiceDeletePaymentMethodRequest = Message<"api.v1.PaymentServiceDeletePaymentMethodRequest"> & {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
};
/**
 * Describes the message api.v1.PaymentServiceDeletePaymentMethodRequest.
 * Use `create(PaymentServiceDeletePaymentMethodRequestSchema)` to create a new message.
 */
export declare const PaymentServiceDeletePaymentMethodRequestSchema: GenMessage<PaymentServiceDeletePaymentMethodRequest>;
/**
 * PaymentServiceDeletePaymentMethodResponse is the response payload for a delete payment request
 *
 * @generated from message api.v1.PaymentServiceDeletePaymentMethodResponse
 */
export type PaymentServiceDeletePaymentMethodResponse = Message<"api.v1.PaymentServiceDeletePaymentMethodResponse"> & {};
/**
 * Describes the message api.v1.PaymentServiceDeletePaymentMethodResponse.
 * Use `create(PaymentServiceDeletePaymentMethodResponseSchema)` to create a new message.
 */
export declare const PaymentServiceDeletePaymentMethodResponseSchema: GenMessage<PaymentServiceDeletePaymentMethodResponse>;
/**
 * PaymentServiceGetSubscriptionUsageRequest is the request payload for a get subscription usage request
 *
 * @generated from message api.v1.PaymentServiceGetSubscriptionUsageRequest
 */
export type PaymentServiceGetSubscriptionUsageRequest = Message<"api.v1.PaymentServiceGetSubscriptionUsageRequest"> & {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
};
/**
 * Describes the message api.v1.PaymentServiceGetSubscriptionUsageRequest.
 * Use `create(PaymentServiceGetSubscriptionUsageRequestSchema)` to create a new message.
 */
export declare const PaymentServiceGetSubscriptionUsageRequestSchema: GenMessage<PaymentServiceGetSubscriptionUsageRequest>;
/**
 * PaymentServiceGetSubscriptionUsageResponse is the response payload for a get subscription usage request
 *
 * @generated from message api.v1.PaymentServiceGetSubscriptionUsageResponse
 */
export type PaymentServiceGetSubscriptionUsageResponse = Message<"api.v1.PaymentServiceGetSubscriptionUsageResponse"> & {
    /**
     * SubscriptionUsageItems is a list of usage for all subscriptions
     *
     * @generated from field: repeated api.v1.SubscriptionUsageItem subscription_usage_items = 1;
     */
    subscriptionUsageItems: SubscriptionUsageItem[];
};
/**
 * Describes the message api.v1.PaymentServiceGetSubscriptionUsageResponse.
 * Use `create(PaymentServiceGetSubscriptionUsageResponseSchema)` to create a new message.
 */
export declare const PaymentServiceGetSubscriptionUsageResponseSchema: GenMessage<PaymentServiceGetSubscriptionUsageResponse>;
/**
 * PaymentServiceHasPaymentMethodRequest is the request payload for a get invoices request
 *
 * @generated from message api.v1.PaymentServiceGetInvoicesRequest
 */
export type PaymentServiceGetInvoicesRequest = Message<"api.v1.PaymentServiceGetInvoicesRequest"> & {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * CustomerId is the id of the customer
     *
     * @generated from field: string customer_id = 2;
     */
    customerId: string;
};
/**
 * Describes the message api.v1.PaymentServiceGetInvoicesRequest.
 * Use `create(PaymentServiceGetInvoicesRequestSchema)` to create a new message.
 */
export declare const PaymentServiceGetInvoicesRequestSchema: GenMessage<PaymentServiceGetInvoicesRequest>;
/**
 * PaymentServiceGetInvoicesResponse is the response payload for a get invoices request
 *
 * @generated from message api.v1.PaymentServiceGetInvoicesResponse
 */
export type PaymentServiceGetInvoicesResponse = Message<"api.v1.PaymentServiceGetInvoicesResponse"> & {
    /**
     * Invoices is the list of invoices
     *
     * @generated from field: repeated api.v1.Invoice invoices = 1;
     */
    invoices: Invoice[];
};
/**
 * Describes the message api.v1.PaymentServiceGetInvoicesResponse.
 * Use `create(PaymentServiceGetInvoicesResponseSchema)` to create a new message.
 */
export declare const PaymentServiceGetInvoicesResponseSchema: GenMessage<PaymentServiceGetInvoicesResponse>;
/**
 * PaymentServiceGetDefaultPricesRequest is the request payload for a get default prices request
 *
 * @generated from message api.v1.PaymentServiceGetDefaultPricesRequest
 */
export type PaymentServiceGetDefaultPricesRequest = Message<"api.v1.PaymentServiceGetDefaultPricesRequest"> & {};
/**
 * Describes the message api.v1.PaymentServiceGetDefaultPricesRequest.
 * Use `create(PaymentServiceGetDefaultPricesRequestSchema)` to create a new message.
 */
export declare const PaymentServiceGetDefaultPricesRequestSchema: GenMessage<PaymentServiceGetDefaultPricesRequest>;
/**
 * PaymentServiceGetDefaultPricesResponse is the response payload for a get default prices request
 *
 * @generated from message api.v1.PaymentServiceGetDefaultPricesResponse
 */
export type PaymentServiceGetDefaultPricesResponse = Message<"api.v1.PaymentServiceGetDefaultPricesResponse"> & {
    /**
     * Prices is the list of default prices
     *
     * @generated from field: repeated api.v1.Price prices = 1;
     */
    prices: Price[];
};
/**
 * Describes the message api.v1.PaymentServiceGetDefaultPricesResponse.
 * Use `create(PaymentServiceGetDefaultPricesResponseSchema)` to create a new message.
 */
export declare const PaymentServiceGetDefaultPricesResponseSchema: GenMessage<PaymentServiceGetDefaultPricesResponse>;
/**
 * PaymentServiceCheckAdmittedRequest is the request payload for a check admitted request
 *
 * @generated from message api.v1.PaymentServiceCheckAdmittedRequest
 */
export type PaymentServiceCheckAdmittedRequest = Message<"api.v1.PaymentServiceCheckAdmittedRequest"> & {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
};
/**
 * Describes the message api.v1.PaymentServiceCheckAdmittedRequest.
 * Use `create(PaymentServiceCheckAdmittedRequestSchema)` to create a new message.
 */
export declare const PaymentServiceCheckAdmittedRequestSchema: GenMessage<PaymentServiceCheckAdmittedRequest>;
/**
 * PaymentServiceCheckAdmittedResponse is the response payload for a check admitted request
 *
 * @generated from message api.v1.PaymentServiceCheckAdmittedResponse
 */
export type PaymentServiceCheckAdmittedResponse = Message<"api.v1.PaymentServiceCheckAdmittedResponse"> & {
    /**
     * Admitted indicates if the customer is already admitted to use the service
     *
     * @generated from field: bool admitted = 1;
     */
    admitted: boolean;
    /**
     * Requested indicates if the customer requested admittance
     *
     * @generated from field: bool requested = 2;
     */
    requested: boolean;
};
/**
 * Describes the message api.v1.PaymentServiceCheckAdmittedResponse.
 * Use `create(PaymentServiceCheckAdmittedResponseSchema)` to create a new message.
 */
export declare const PaymentServiceCheckAdmittedResponseSchema: GenMessage<PaymentServiceCheckAdmittedResponse>;
/**
 * PaymentServiceRequestAdmissionRequest is the request payload for a admission request
 *
 * @generated from message api.v1.PaymentServiceRequestAdmissionRequest
 */
export type PaymentServiceRequestAdmissionRequest = Message<"api.v1.PaymentServiceRequestAdmissionRequest"> & {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Customer is the customer
     *
     * @generated from field: api.v1.PaymentCustomer customer = 2;
     */
    customer?: PaymentCustomer;
    /**
     * AcceptedTermsAndConditions indicates if the customer already accepted the terms and conditions
     *
     * @generated from field: bool accepted_terms_and_conditions = 3;
     */
    acceptedTermsAndConditions: boolean;
    /**
     * EmailConsent indicates if the customer already gave consent to email
     *
     * @generated from field: bool email_consent = 4;
     */
    emailConsent: boolean;
};
/**
 * Describes the message api.v1.PaymentServiceRequestAdmissionRequest.
 * Use `create(PaymentServiceRequestAdmissionRequestSchema)` to create a new message.
 */
export declare const PaymentServiceRequestAdmissionRequestSchema: GenMessage<PaymentServiceRequestAdmissionRequest>;
/**
 * PaymentServiceRequestAdmissionResponse is the response payload for a admission request
 *
 * @generated from message api.v1.PaymentServiceRequestAdmissionResponse
 */
export type PaymentServiceRequestAdmissionResponse = Message<"api.v1.PaymentServiceRequestAdmissionResponse"> & {};
/**
 * Describes the message api.v1.PaymentServiceRequestAdmissionResponse.
 * Use `create(PaymentServiceRequestAdmissionResponseSchema)` to create a new message.
 */
export declare const PaymentServiceRequestAdmissionResponseSchema: GenMessage<PaymentServiceRequestAdmissionResponse>;
/**
 * PaymentServiceHasChargeableResourcesRequest is the request payload for a has chargeable request
 *
 * @generated from message api.v1.PaymentServiceHasChargeableResourcesRequest
 */
export type PaymentServiceHasChargeableResourcesRequest = Message<"api.v1.PaymentServiceHasChargeableResourcesRequest"> & {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
};
/**
 * Describes the message api.v1.PaymentServiceHasChargeableResourcesRequest.
 * Use `create(PaymentServiceHasChargeableResourcesRequestSchema)` to create a new message.
 */
export declare const PaymentServiceHasChargeableResourcesRequestSchema: GenMessage<PaymentServiceHasChargeableResourcesRequest>;
/**
 * PaymentServiceHasChargeableResourcesResponse is the response payload for a has chargeable request
 *
 * @generated from message api.v1.PaymentServiceHasChargeableResourcesResponse
 */
export type PaymentServiceHasChargeableResourcesResponse = Message<"api.v1.PaymentServiceHasChargeableResourcesResponse"> & {
    /**
     * HasResources indicates if the customer has actually chargable resources
     *
     * @generated from field: bool has_resources = 1;
     */
    hasResources: boolean;
};
/**
 * Describes the message api.v1.PaymentServiceHasChargeableResourcesResponse.
 * Use `create(PaymentServiceHasChargeableResourcesResponseSchema)` to create a new message.
 */
export declare const PaymentServiceHasChargeableResourcesResponseSchema: GenMessage<PaymentServiceHasChargeableResourcesResponse>;
/**
 * PayentServiceSetOnboardedRequest changes the onboarded status of the given customer
 *
 * @generated from message api.v1.PaymentServiceSetOnboardedRequest
 */
export type PaymentServiceSetOnboardedRequest = Message<"api.v1.PaymentServiceSetOnboardedRequest"> & {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Onboarded indicates if the customer has seen the onboarde message
     *
     * @generated from field: bool onboarded = 2;
     */
    onboarded: boolean;
};
/**
 * Describes the message api.v1.PaymentServiceSetOnboardedRequest.
 * Use `create(PaymentServiceSetOnboardedRequestSchema)` to create a new message.
 */
export declare const PaymentServiceSetOnboardedRequestSchema: GenMessage<PaymentServiceSetOnboardedRequest>;
/**
 * PaymentServiceSetOnboardedResponse respond to the changed status of the given customer
 *
 * @generated from message api.v1.PaymentServiceSetOnboardedResponse
 */
export type PaymentServiceSetOnboardedResponse = Message<"api.v1.PaymentServiceSetOnboardedResponse"> & {
    /**
     * Onboarded indicates if the customer has seen the onboarded message
     *
     * @generated from field: bool onboarded = 1;
     */
    onboarded: boolean;
};
/**
 * Describes the message api.v1.PaymentServiceSetOnboardedResponse.
 * Use `create(PaymentServiceSetOnboardedResponseSchema)` to create a new message.
 */
export declare const PaymentServiceSetOnboardedResponseSchema: GenMessage<PaymentServiceSetOnboardedResponse>;
/**
 * PaymentServiceGetOnboardedRequest check the onboarded status
 *
 * @generated from message api.v1.PaymentServiceGetOnboardedRequest
 */
export type PaymentServiceGetOnboardedRequest = Message<"api.v1.PaymentServiceGetOnboardedRequest"> & {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
};
/**
 * Describes the message api.v1.PaymentServiceGetOnboardedRequest.
 * Use `create(PaymentServiceGetOnboardedRequestSchema)` to create a new message.
 */
export declare const PaymentServiceGetOnboardedRequestSchema: GenMessage<PaymentServiceGetOnboardedRequest>;
/**
 * PaymentServiceGetOnboardedRequest returns the onboarded status
 *
 * @generated from message api.v1.PaymentServiceGetOnboardedResponse
 */
export type PaymentServiceGetOnboardedResponse = Message<"api.v1.PaymentServiceGetOnboardedResponse"> & {
    /**
     * Onboarded indicates if the customer has seen the onboarded message
     *
     * @generated from field: bool onboarded = 1;
     */
    onboarded: boolean;
};
/**
 * Describes the message api.v1.PaymentServiceGetOnboardedResponse.
 * Use `create(PaymentServiceGetOnboardedResponseSchema)` to create a new message.
 */
export declare const PaymentServiceGetOnboardedResponseSchema: GenMessage<PaymentServiceGetOnboardedResponse>;
/**
 * ProductType defines for which type of product a price applies
 *
 * @generated from enum api.v1.ProductType
 */
export declare enum ProductType {
    /**
     * PRODUCT_TYPE_UNSPECIFIED is unspecified
     *
     * @generated from enum value: PRODUCT_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * PRODUCT_TYPE_STORAGE for storage
     *
     * @generated from enum value: PRODUCT_TYPE_STORAGE = 1;
     */
    STORAGE = 1,
    /**
     * PRODUCT_TYPE_COMPUTE for compute, e.g. machines
     *
     * @generated from enum value: PRODUCT_TYPE_COMPUTE = 2;
     */
    COMPUTE = 2,
    /**
     * PRODUCT_TYPE_NETWORK for network, e.g. ips and traffic
     *
     * @generated from enum value: PRODUCT_TYPE_NETWORK = 3;
     */
    NETWORK = 3,
    /**
     * PRODUCT_TYPE_KUBERNETES for kubernetes, e.g. the control plane
     *
     * @generated from enum value: PRODUCT_TYPE_KUBERNETES = 5;
     */
    KUBERNETES = 5
}
/**
 * Describes the enum api.v1.ProductType.
 */
export declare const ProductTypeSchema: GenEnum<ProductType>;
/**
 * UsageType indicates how a price is measured
 *
 * @generated from enum api.v1.UsageType
 */
export declare enum UsageType {
    /**
     * USAGE_TYPE_UNSPECIFIED is unspecified
     *
     * @generated from enum value: USAGE_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * USAGE_TYPE_METERED price is sent per usage
     *
     * @generated from enum value: USAGE_TYPE_METERED = 1;
     */
    METERED = 1,
    /**
     * USAGE_TYPE_LICENSED price is set in invoice (s3 for example)
     *
     * @generated from enum value: USAGE_TYPE_LICENSED = 2;
     */
    LICENSED = 2
}
/**
 * Describes the enum api.v1.UsageType.
 */
export declare const UsageTypeSchema: GenEnum<UsageType>;
/**
 * PaymentService serves payment related functions
 *
 * @generated from service api.v1.PaymentService
 */
export declare const PaymentService: GenService<{
    /**
     * CreateOrUpdateCustomer the payment data on the payment processor
     *
     * @generated from rpc api.v1.PaymentService.CreateOrUpdateCustomer
     */
    createOrUpdateCustomer: {
        methodKind: "unary";
        input: typeof PaymentServiceCreateOrUpdateCustomerRequestSchema;
        output: typeof PaymentServiceCreateOrUpdateCustomerResponseSchema;
    };
    /**
     * GetCustomer from the payment processor
     *
     * @generated from rpc api.v1.PaymentService.GetCustomer
     */
    getCustomer: {
        methodKind: "unary";
        input: typeof PaymentServiceGetCustomerRequestSchema;
        output: typeof PaymentServiceGetCustomerResponseSchema;
    };
    /**
     * CheckIfCustomerExists at the payment processor
     *
     * @generated from rpc api.v1.PaymentService.CheckIfCustomerExists
     */
    checkIfCustomerExists: {
        methodKind: "unary";
        input: typeof PaymentServiceCheckIfCustomerExistsRequestSchema;
        output: typeof PaymentServiceCheckIfCustomerExistsResponseSchema;
    };
    /**
     * HasPaymentMethod check if the customer has a payment method provided
     *
     * @generated from rpc api.v1.PaymentService.HasPaymentMethod
     */
    hasPaymentMethod: {
        methodKind: "unary";
        input: typeof PaymentServiceHasPaymentMethodRequestSchema;
        output: typeof PaymentServiceHasPaymentMethodResponseSchema;
    };
    /**
     * DeletePaymentMethod of the customer
     *
     * @generated from rpc api.v1.PaymentService.DeletePaymentMethod
     */
    deletePaymentMethod: {
        methodKind: "unary";
        input: typeof PaymentServiceDeletePaymentMethodRequestSchema;
        output: typeof PaymentServiceDeletePaymentMethodResponseSchema;
    };
    /**
     * GetSubscriptionUsage of the customer
     *
     * @generated from rpc api.v1.PaymentService.GetSubscriptionUsage
     */
    getSubscriptionUsage: {
        methodKind: "unary";
        input: typeof PaymentServiceGetSubscriptionUsageRequestSchema;
        output: typeof PaymentServiceGetSubscriptionUsageResponseSchema;
    };
    /**
     * GetInvoices of the customer
     *
     * @generated from rpc api.v1.PaymentService.GetInvoices
     */
    getInvoices: {
        methodKind: "unary";
        input: typeof PaymentServiceGetInvoicesRequestSchema;
        output: typeof PaymentServiceGetInvoicesResponseSchema;
    };
    /**
     * GetDefaultPrices of the products on the platform
     *
     * @generated from rpc api.v1.PaymentService.GetDefaultPrices
     */
    getDefaultPrices: {
        methodKind: "unary";
        input: typeof PaymentServiceGetDefaultPricesRequestSchema;
        output: typeof PaymentServiceGetDefaultPricesResponseSchema;
    };
    /**
     * CheckAdmitted if the customer is allowed to use the service on the platform
     *
     * @generated from rpc api.v1.PaymentService.CheckAdmitted
     */
    checkAdmitted: {
        methodKind: "unary";
        input: typeof PaymentServiceCheckAdmittedRequestSchema;
        output: typeof PaymentServiceCheckAdmittedResponseSchema;
    };
    /**
     * RequestAdmission for a customer to get allowed to used the service
     *
     * @generated from rpc api.v1.PaymentService.RequestAdmission
     */
    requestAdmission: {
        methodKind: "unary";
        input: typeof PaymentServiceRequestAdmissionRequestSchema;
        output: typeof PaymentServiceRequestAdmissionResponseSchema;
    };
    /**
     * HasChargeableResources checks if the customer has resources actually consumed which are chargeable
     *
     * @generated from rpc api.v1.PaymentService.HasChargeableResources
     */
    hasChargeableResources: {
        methodKind: "unary";
        input: typeof PaymentServiceHasChargeableResourcesRequestSchema;
        output: typeof PaymentServiceHasChargeableResourcesResponseSchema;
    };
    /**
     * SetOnboarded set the onboarded status
     *
     * @generated from rpc api.v1.PaymentService.SetOnboarded
     */
    setOnboarded: {
        methodKind: "unary";
        input: typeof PaymentServiceSetOnboardedRequestSchema;
        output: typeof PaymentServiceSetOnboardedResponseSchema;
    };
    /**
     * GetOnboarded get the onboarded status
     *
     * @generated from rpc api.v1.PaymentService.GetOnboarded
     */
    getOnboarded: {
        methodKind: "unary";
        input: typeof PaymentServiceGetOnboardedRequestSchema;
        output: typeof PaymentServiceGetOnboardedResponseSchema;
    };
}>;
