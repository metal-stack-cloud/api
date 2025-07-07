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
 * PaymentServiceCreateRequest is the request payload for providing payment data
 *
 * @generated from message api.v1.PaymentServiceCreateRequest
 */
export type PaymentServiceCreateRequest = Message<"api.v1.PaymentServiceCreateRequest"> & {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Name of the customer to be billed
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * PaymentMethodId at the payment provider, the client receives this from the payment provider and passes it on to the api
     *
     * @generated from field: string payment_method_id = 3;
     */
    paymentMethodId: string;
    /**
     * Email of the customer to be billed
     *
     * @generated from field: string email = 4;
     */
    email: string;
    /**
     * Card the customer to be billed
     *
     * @generated from field: api.v1.Card card = 5;
     */
    card?: Card;
    /**
     * Address is the postal address of the customer to be billed
     *
     * @generated from field: api.v1.Address address = 6;
     */
    address?: Address;
    /**
     * Vat which applies to the customer to be billed
     *
     * @generated from field: string vat = 7;
     */
    vat: string;
    /**
     * PhoneNumber of the customer to be billed
     *
     * @generated from field: optional string phone_number = 8;
     */
    phoneNumber?: string;
};
/**
 * Describes the message api.v1.PaymentServiceCreateRequest.
 * Use `create(PaymentServiceCreateRequestSchema)` to create a new message.
 */
export declare const PaymentServiceCreateRequestSchema: GenMessage<PaymentServiceCreateRequest>;
/**
 * PaymentServiceCreateResponse is the response payload for a payment create request
 *
 * @generated from message api.v1.PaymentServiceCreateResponse
 */
export type PaymentServiceCreateResponse = Message<"api.v1.PaymentServiceCreateResponse"> & {
    /**
     * Customer is the created customer
     *
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
};
/**
 * Describes the message api.v1.PaymentServiceCreateResponse.
 * Use `create(PaymentServiceCreateResponseSchema)` to create a new message.
 */
export declare const PaymentServiceCreateResponseSchema: GenMessage<PaymentServiceCreateResponse>;
/**
 * PaymentServiceUpdateRequest is the request payload for updating payment data
 *
 * @generated from message api.v1.PaymentServiceUpdateRequest
 */
export type PaymentServiceUpdateRequest = Message<"api.v1.PaymentServiceUpdateRequest"> & {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Name of the customer to be billed
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * PaymentMethodId at the payment provider, the client receives this from the payment provider and passes it on to the api
     *
     * @generated from field: optional string payment_method_id = 3;
     */
    paymentMethodId?: string;
    /**
     * Email of the customer to be billed
     *
     * @generated from field: optional string email = 4;
     */
    email?: string;
    /**
     * Card the customer to be billed
     *
     * @generated from field: optional api.v1.Card card = 5;
     */
    card?: Card;
    /**
     * Address is the postal address of the customer to be billed
     *
     * @generated from field: api.v1.Address address = 6;
     */
    address?: Address;
    /**
     * Vat which applies to the customer to be billed
     *
     * @generated from field: optional string vat = 7;
     */
    vat?: string;
    /**
     * PhoneNumber of the customer to be billed
     *
     * @generated from field: optional string phone_number = 8;
     */
    phoneNumber?: string;
};
/**
 * Describes the message api.v1.PaymentServiceUpdateRequest.
 * Use `create(PaymentServiceUpdateRequestSchema)` to create a new message.
 */
export declare const PaymentServiceUpdateRequestSchema: GenMessage<PaymentServiceUpdateRequest>;
/**
 * PaymentServiceUpdateResponse is the response payload for a payment update request
 *
 * @generated from message api.v1.PaymentServiceUpdateResponse
 */
export type PaymentServiceUpdateResponse = Message<"api.v1.PaymentServiceUpdateResponse"> & {
    /**
     * Customer is the updated customer
     *
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
};
/**
 * Describes the message api.v1.PaymentServiceUpdateResponse.
 * Use `create(PaymentServiceUpdateResponseSchema)` to create a new message.
 */
export declare const PaymentServiceUpdateResponseSchema: GenMessage<PaymentServiceUpdateResponse>;
/**
 * PaymentServiceGetRequest is the request payload for getting the payment data
 *
 * @generated from message api.v1.PaymentServiceGetRequest
 */
export type PaymentServiceGetRequest = Message<"api.v1.PaymentServiceGetRequest"> & {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
};
/**
 * Describes the message api.v1.PaymentServiceGetRequest.
 * Use `create(PaymentServiceGetRequestSchema)` to create a new message.
 */
export declare const PaymentServiceGetRequestSchema: GenMessage<PaymentServiceGetRequest>;
/**
 * PaymentServiceGetResponse is the response payload for a payment get request
 *
 * @generated from message api.v1.PaymentServiceGetResponse
 */
export type PaymentServiceGetResponse = Message<"api.v1.PaymentServiceGetResponse"> & {
    /**
     * Customer is the payment customer
     *
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
};
/**
 * Describes the message api.v1.PaymentServiceGetResponse.
 * Use `create(PaymentServiceGetResponseSchema)` to create a new message.
 */
export declare const PaymentServiceGetResponseSchema: GenMessage<PaymentServiceGetResponse>;
/**
 * PaymentServiceHasPaymentMethodRequest is the request payload for a has payment request
 *
 * @generated from message api.v1.PaymentServiceHasPaymentMethodRequest
 */
export type PaymentServiceHasPaymentMethodRequest = Message<"api.v1.PaymentServiceHasPaymentMethodRequest"> & {
    /**
     * Login of the tenant
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
 * PaymentServiceDeleteRequest is the request payload for a delete payment request
 *
 * @generated from message api.v1.PaymentServiceDeleteRequest
 */
export type PaymentServiceDeleteRequest = Message<"api.v1.PaymentServiceDeleteRequest"> & {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
};
/**
 * Describes the message api.v1.PaymentServiceDeleteRequest.
 * Use `create(PaymentServiceDeleteRequestSchema)` to create a new message.
 */
export declare const PaymentServiceDeleteRequestSchema: GenMessage<PaymentServiceDeleteRequest>;
/**
 * PaymentServiceDeleteResponse is the response payload for a delete payment request
 *
 * @generated from message api.v1.PaymentServiceDeleteResponse
 */
export type PaymentServiceDeleteResponse = Message<"api.v1.PaymentServiceDeleteResponse"> & {};
/**
 * Describes the message api.v1.PaymentServiceDeleteResponse.
 * Use `create(PaymentServiceDeleteResponseSchema)` to create a new message.
 */
export declare const PaymentServiceDeleteResponseSchema: GenMessage<PaymentServiceDeleteResponse>;
/**
 * PaymentServiceGetSubscriptionUsageRequest is the request payload for a get subscription usage request
 *
 * @generated from message api.v1.PaymentServiceGetSubscriptionUsageRequest
 */
export type PaymentServiceGetSubscriptionUsageRequest = Message<"api.v1.PaymentServiceGetSubscriptionUsageRequest"> & {
    /**
     * Login of the tenant
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
     * Login of the tenant
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
 * PaymentServiceHasChargeableResourcesRequest is the request payload for a has chargeable request
 *
 * @generated from message api.v1.PaymentServiceHasChargeableResourcesRequest
 */
export type PaymentServiceHasChargeableResourcesRequest = Message<"api.v1.PaymentServiceHasChargeableResourcesRequest"> & {
    /**
     * Login of the tenant
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
     * Create the payment data used for billing api resources
     *
     * @generated from rpc api.v1.PaymentService.Create
     */
    create: {
        methodKind: "unary";
        input: typeof PaymentServiceCreateRequestSchema;
        output: typeof PaymentServiceCreateResponseSchema;
    };
    /**
     * Update the payment data
     *
     * @generated from rpc api.v1.PaymentService.Update
     */
    update: {
        methodKind: "unary";
        input: typeof PaymentServiceUpdateRequestSchema;
        output: typeof PaymentServiceUpdateResponseSchema;
    };
    /**
     * Delete the payment data
     *
     * @generated from rpc api.v1.PaymentService.Delete
     */
    delete: {
        methodKind: "unary";
        input: typeof PaymentServiceDeleteRequestSchema;
        output: typeof PaymentServiceDeleteResponseSchema;
    };
    /**
     * Get the payment data
     *
     * @generated from rpc api.v1.PaymentService.Get
     */
    get: {
        methodKind: "unary";
        input: typeof PaymentServiceGetRequestSchema;
        output: typeof PaymentServiceGetResponseSchema;
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
     * HasChargeableResources checks if the customer has resources actually consumed which are chargeable
     *
     * @generated from rpc api.v1.PaymentService.HasChargeableResources
     */
    hasChargeableResources: {
        methodKind: "unary";
        input: typeof PaymentServiceHasChargeableResourcesRequestSchema;
        output: typeof PaymentServiceHasChargeableResourcesResponseSchema;
    };
}>;
