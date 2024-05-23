import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
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
 * PaymentCustomer is a customer at the payment processor
 *
 * @generated from message api.v1.PaymentCustomer
 */
export declare class PaymentCustomer extends Message<PaymentCustomer> {
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
    constructor(data?: PartialMessage<PaymentCustomer>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentCustomer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentCustomer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentCustomer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentCustomer;
    static equals(a: PaymentCustomer | PlainMessage<PaymentCustomer> | undefined, b: PaymentCustomer | PlainMessage<PaymentCustomer> | undefined): boolean;
}
/**
 * Card is the payment card the customer pays with
 *
 * @generated from message api.v1.Card
 */
export declare class Card extends Message<Card> {
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
    constructor(data?: PartialMessage<Card>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Card";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Card;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Card;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Card;
    static equals(a: Card | PlainMessage<Card> | undefined, b: Card | PlainMessage<Card> | undefined): boolean;
}
/**
 * Price of a product
 *
 * @generated from message api.v1.Price
 */
export declare class Price extends Message<Price> {
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
    constructor(data?: PartialMessage<Price>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Price";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Price;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Price;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Price;
    static equals(a: Price | PlainMessage<Price> | undefined, b: Price | PlainMessage<Price> | undefined): boolean;
}
/**
 * Address postal address of a customer
 *
 * @generated from message api.v1.Address
 */
export declare class Address extends Message<Address> {
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
    constructor(data?: PartialMessage<Address>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Address";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Address;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Address;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Address;
    static equals(a: Address | PlainMessage<Address> | undefined, b: Address | PlainMessage<Address> | undefined): boolean;
}
/**
 * SubscriptionUsageItem details of a subscription
 *
 * @generated from message api.v1.SubscriptionUsageItem
 */
export declare class SubscriptionUsageItem extends Message<SubscriptionUsageItem> {
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
    constructor(data?: PartialMessage<SubscriptionUsageItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.SubscriptionUsageItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubscriptionUsageItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubscriptionUsageItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubscriptionUsageItem;
    static equals(a: SubscriptionUsageItem | PlainMessage<SubscriptionUsageItem> | undefined, b: SubscriptionUsageItem | PlainMessage<SubscriptionUsageItem> | undefined): boolean;
}
/**
 * Invoice a customer has to pay for subscription usage
 *
 * @generated from message api.v1.Invoice
 */
export declare class Invoice extends Message<Invoice> {
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
    constructor(data?: PartialMessage<Invoice>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Invoice";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Invoice;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Invoice;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Invoice;
    static equals(a: Invoice | PlainMessage<Invoice> | undefined, b: Invoice | PlainMessage<Invoice> | undefined): boolean;
}
/**
 * Coupon is a amount of free usage which can be granted to a customer
 *
 * @generated from message api.v1.Coupon
 */
export declare class Coupon extends Message<Coupon> {
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
    constructor(data?: PartialMessage<Coupon>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Coupon";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Coupon;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Coupon;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Coupon;
    static equals(a: Coupon | PlainMessage<Coupon> | undefined, b: Coupon | PlainMessage<Coupon> | undefined): boolean;
}
/**
 * PaymentServiceCreateOrUpdateCustomerRequest is the request payload for a payment create or update customer request
 *
 * @generated from message api.v1.PaymentServiceCreateOrUpdateCustomerRequest
 */
export declare class PaymentServiceCreateOrUpdateCustomerRequest extends Message<PaymentServiceCreateOrUpdateCustomerRequest> {
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
    constructor(data?: PartialMessage<PaymentServiceCreateOrUpdateCustomerRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceCreateOrUpdateCustomerRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceCreateOrUpdateCustomerRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceCreateOrUpdateCustomerRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceCreateOrUpdateCustomerRequest;
    static equals(a: PaymentServiceCreateOrUpdateCustomerRequest | PlainMessage<PaymentServiceCreateOrUpdateCustomerRequest> | undefined, b: PaymentServiceCreateOrUpdateCustomerRequest | PlainMessage<PaymentServiceCreateOrUpdateCustomerRequest> | undefined): boolean;
}
/**
 * PaymentServiceCreateOrUpdateCustomerResponse is the response payload for a payment create or update customer request
 *
 * @generated from message api.v1.PaymentServiceCreateOrUpdateCustomerResponse
 */
export declare class PaymentServiceCreateOrUpdateCustomerResponse extends Message<PaymentServiceCreateOrUpdateCustomerResponse> {
    /**
     * Customer is the customer
     *
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
    constructor(data?: PartialMessage<PaymentServiceCreateOrUpdateCustomerResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceCreateOrUpdateCustomerResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceCreateOrUpdateCustomerResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceCreateOrUpdateCustomerResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceCreateOrUpdateCustomerResponse;
    static equals(a: PaymentServiceCreateOrUpdateCustomerResponse | PlainMessage<PaymentServiceCreateOrUpdateCustomerResponse> | undefined, b: PaymentServiceCreateOrUpdateCustomerResponse | PlainMessage<PaymentServiceCreateOrUpdateCustomerResponse> | undefined): boolean;
}
/**
 * PaymentServiceGetCustomerRequest is the request payload for a payment get customer request
 *
 * @generated from message api.v1.PaymentServiceGetCustomerRequest
 */
export declare class PaymentServiceGetCustomerRequest extends Message<PaymentServiceGetCustomerRequest> {
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
    constructor(data?: PartialMessage<PaymentServiceGetCustomerRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceGetCustomerRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetCustomerRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerRequest;
    static equals(a: PaymentServiceGetCustomerRequest | PlainMessage<PaymentServiceGetCustomerRequest> | undefined, b: PaymentServiceGetCustomerRequest | PlainMessage<PaymentServiceGetCustomerRequest> | undefined): boolean;
}
/**
 * PaymentServiceGetCustomerResponse is the response payload for a payment get customer request
 *
 * @generated from message api.v1.PaymentServiceGetCustomerResponse
 */
export declare class PaymentServiceGetCustomerResponse extends Message<PaymentServiceGetCustomerResponse> {
    /**
     * Customer is the customer
     *
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
    constructor(data?: PartialMessage<PaymentServiceGetCustomerResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceGetCustomerResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetCustomerResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerResponse;
    static equals(a: PaymentServiceGetCustomerResponse | PlainMessage<PaymentServiceGetCustomerResponse> | undefined, b: PaymentServiceGetCustomerResponse | PlainMessage<PaymentServiceGetCustomerResponse> | undefined): boolean;
}
/**
 * PaymentServiceGetCustomerWithLoginRequest is the request payload for a payment get customer request
 *
 * @generated from message api.v1.PaymentServiceGetCustomerWithLoginRequest
 */
export declare class PaymentServiceGetCustomerWithLoginRequest extends Message<PaymentServiceGetCustomerWithLoginRequest> {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<PaymentServiceGetCustomerWithLoginRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceGetCustomerWithLoginRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetCustomerWithLoginRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerWithLoginRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerWithLoginRequest;
    static equals(a: PaymentServiceGetCustomerWithLoginRequest | PlainMessage<PaymentServiceGetCustomerWithLoginRequest> | undefined, b: PaymentServiceGetCustomerWithLoginRequest | PlainMessage<PaymentServiceGetCustomerWithLoginRequest> | undefined): boolean;
}
/**
 * PaymentServiceGetCustomerWithLoginResponse is the response payload for a payment get customer request
 *
 * @generated from message api.v1.PaymentServiceGetCustomerWithLoginResponse
 */
export declare class PaymentServiceGetCustomerWithLoginResponse extends Message<PaymentServiceGetCustomerWithLoginResponse> {
    /**
     * Customer is the customer
     *
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
    constructor(data?: PartialMessage<PaymentServiceGetCustomerWithLoginResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceGetCustomerWithLoginResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetCustomerWithLoginResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerWithLoginResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerWithLoginResponse;
    static equals(a: PaymentServiceGetCustomerWithLoginResponse | PlainMessage<PaymentServiceGetCustomerWithLoginResponse> | undefined, b: PaymentServiceGetCustomerWithLoginResponse | PlainMessage<PaymentServiceGetCustomerWithLoginResponse> | undefined): boolean;
}
/**
 * PaymentServiceCheckIfCustomerExistsRequest is the request payload for a payment check if customer exists request
 *
 * @generated from message api.v1.PaymentServiceCheckIfCustomerExistsRequest
 */
export declare class PaymentServiceCheckIfCustomerExistsRequest extends Message<PaymentServiceCheckIfCustomerExistsRequest> {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<PaymentServiceCheckIfCustomerExistsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceCheckIfCustomerExistsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceCheckIfCustomerExistsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceCheckIfCustomerExistsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceCheckIfCustomerExistsRequest;
    static equals(a: PaymentServiceCheckIfCustomerExistsRequest | PlainMessage<PaymentServiceCheckIfCustomerExistsRequest> | undefined, b: PaymentServiceCheckIfCustomerExistsRequest | PlainMessage<PaymentServiceCheckIfCustomerExistsRequest> | undefined): boolean;
}
/**
 * PaymentServiceCheckIfCustomerExistsResponse is the response payload for a payment check if customer exists request
 *
 * @generated from message api.v1.PaymentServiceCheckIfCustomerExistsResponse
 */
export declare class PaymentServiceCheckIfCustomerExistsResponse extends Message<PaymentServiceCheckIfCustomerExistsResponse> {
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
    constructor(data?: PartialMessage<PaymentServiceCheckIfCustomerExistsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceCheckIfCustomerExistsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceCheckIfCustomerExistsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceCheckIfCustomerExistsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceCheckIfCustomerExistsResponse;
    static equals(a: PaymentServiceCheckIfCustomerExistsResponse | PlainMessage<PaymentServiceCheckIfCustomerExistsResponse> | undefined, b: PaymentServiceCheckIfCustomerExistsResponse | PlainMessage<PaymentServiceCheckIfCustomerExistsResponse> | undefined): boolean;
}
/**
 * PaymentServiceHasPaymentMethodRequest is the request payload for a has payment request
 *
 * @generated from message api.v1.PaymentServiceHasPaymentMethodRequest
 */
export declare class PaymentServiceHasPaymentMethodRequest extends Message<PaymentServiceHasPaymentMethodRequest> {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<PaymentServiceHasPaymentMethodRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceHasPaymentMethodRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceHasPaymentMethodRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceHasPaymentMethodRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceHasPaymentMethodRequest;
    static equals(a: PaymentServiceHasPaymentMethodRequest | PlainMessage<PaymentServiceHasPaymentMethodRequest> | undefined, b: PaymentServiceHasPaymentMethodRequest | PlainMessage<PaymentServiceHasPaymentMethodRequest> | undefined): boolean;
}
/**
 * PaymentServiceHasPaymentMethodResponse is the response payload for a has payment request
 *
 * @generated from message api.v1.PaymentServiceHasPaymentMethodResponse
 */
export declare class PaymentServiceHasPaymentMethodResponse extends Message<PaymentServiceHasPaymentMethodResponse> {
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
    constructor(data?: PartialMessage<PaymentServiceHasPaymentMethodResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceHasPaymentMethodResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceHasPaymentMethodResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceHasPaymentMethodResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceHasPaymentMethodResponse;
    static equals(a: PaymentServiceHasPaymentMethodResponse | PlainMessage<PaymentServiceHasPaymentMethodResponse> | undefined, b: PaymentServiceHasPaymentMethodResponse | PlainMessage<PaymentServiceHasPaymentMethodResponse> | undefined): boolean;
}
/**
 * PaymentServiceDeletePaymentMethodRequest is the request payload for a delete payment request
 *
 * @generated from message api.v1.PaymentServiceDeletePaymentMethodRequest
 */
export declare class PaymentServiceDeletePaymentMethodRequest extends Message<PaymentServiceDeletePaymentMethodRequest> {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<PaymentServiceDeletePaymentMethodRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceDeletePaymentMethodRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceDeletePaymentMethodRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceDeletePaymentMethodRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceDeletePaymentMethodRequest;
    static equals(a: PaymentServiceDeletePaymentMethodRequest | PlainMessage<PaymentServiceDeletePaymentMethodRequest> | undefined, b: PaymentServiceDeletePaymentMethodRequest | PlainMessage<PaymentServiceDeletePaymentMethodRequest> | undefined): boolean;
}
/**
 * PaymentServiceDeletePaymentMethodResponse is the response payload for a delete payment request
 *
 * @generated from message api.v1.PaymentServiceDeletePaymentMethodResponse
 */
export declare class PaymentServiceDeletePaymentMethodResponse extends Message<PaymentServiceDeletePaymentMethodResponse> {
    constructor(data?: PartialMessage<PaymentServiceDeletePaymentMethodResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceDeletePaymentMethodResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceDeletePaymentMethodResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceDeletePaymentMethodResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceDeletePaymentMethodResponse;
    static equals(a: PaymentServiceDeletePaymentMethodResponse | PlainMessage<PaymentServiceDeletePaymentMethodResponse> | undefined, b: PaymentServiceDeletePaymentMethodResponse | PlainMessage<PaymentServiceDeletePaymentMethodResponse> | undefined): boolean;
}
/**
 * PaymentServiceGetSubscriptionUsageRequest is the request payload for a get subscription usage request
 *
 * @generated from message api.v1.PaymentServiceGetSubscriptionUsageRequest
 */
export declare class PaymentServiceGetSubscriptionUsageRequest extends Message<PaymentServiceGetSubscriptionUsageRequest> {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<PaymentServiceGetSubscriptionUsageRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceGetSubscriptionUsageRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetSubscriptionUsageRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetSubscriptionUsageRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetSubscriptionUsageRequest;
    static equals(a: PaymentServiceGetSubscriptionUsageRequest | PlainMessage<PaymentServiceGetSubscriptionUsageRequest> | undefined, b: PaymentServiceGetSubscriptionUsageRequest | PlainMessage<PaymentServiceGetSubscriptionUsageRequest> | undefined): boolean;
}
/**
 * PaymentServiceGetSubscriptionUsageResponse is the response payload for a get subscription usage request
 *
 * @generated from message api.v1.PaymentServiceGetSubscriptionUsageResponse
 */
export declare class PaymentServiceGetSubscriptionUsageResponse extends Message<PaymentServiceGetSubscriptionUsageResponse> {
    /**
     * SubscriptionUsageItems is a list of usage for all subscriptions
     *
     * @generated from field: repeated api.v1.SubscriptionUsageItem subscription_usage_items = 1;
     */
    subscriptionUsageItems: SubscriptionUsageItem[];
    constructor(data?: PartialMessage<PaymentServiceGetSubscriptionUsageResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceGetSubscriptionUsageResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetSubscriptionUsageResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetSubscriptionUsageResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetSubscriptionUsageResponse;
    static equals(a: PaymentServiceGetSubscriptionUsageResponse | PlainMessage<PaymentServiceGetSubscriptionUsageResponse> | undefined, b: PaymentServiceGetSubscriptionUsageResponse | PlainMessage<PaymentServiceGetSubscriptionUsageResponse> | undefined): boolean;
}
/**
 * PaymentServiceHasPaymentMethodRequest is the request payload for a get invoices request
 *
 * @generated from message api.v1.PaymentServiceGetInvoicesRequest
 */
export declare class PaymentServiceGetInvoicesRequest extends Message<PaymentServiceGetInvoicesRequest> {
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
    constructor(data?: PartialMessage<PaymentServiceGetInvoicesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceGetInvoicesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetInvoicesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetInvoicesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetInvoicesRequest;
    static equals(a: PaymentServiceGetInvoicesRequest | PlainMessage<PaymentServiceGetInvoicesRequest> | undefined, b: PaymentServiceGetInvoicesRequest | PlainMessage<PaymentServiceGetInvoicesRequest> | undefined): boolean;
}
/**
 * PaymentServiceGetInvoicesResponse is the response payload for a get invoices request
 *
 * @generated from message api.v1.PaymentServiceGetInvoicesResponse
 */
export declare class PaymentServiceGetInvoicesResponse extends Message<PaymentServiceGetInvoicesResponse> {
    /**
     * Invoices is the list of invoices
     *
     * @generated from field: repeated api.v1.Invoice invoices = 1;
     */
    invoices: Invoice[];
    constructor(data?: PartialMessage<PaymentServiceGetInvoicesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceGetInvoicesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetInvoicesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetInvoicesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetInvoicesResponse;
    static equals(a: PaymentServiceGetInvoicesResponse | PlainMessage<PaymentServiceGetInvoicesResponse> | undefined, b: PaymentServiceGetInvoicesResponse | PlainMessage<PaymentServiceGetInvoicesResponse> | undefined): boolean;
}
/**
 * PaymentServiceGetDefaultPricesRequest is the request payload for a get default prices request
 *
 * @generated from message api.v1.PaymentServiceGetDefaultPricesRequest
 */
export declare class PaymentServiceGetDefaultPricesRequest extends Message<PaymentServiceGetDefaultPricesRequest> {
    constructor(data?: PartialMessage<PaymentServiceGetDefaultPricesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceGetDefaultPricesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetDefaultPricesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetDefaultPricesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetDefaultPricesRequest;
    static equals(a: PaymentServiceGetDefaultPricesRequest | PlainMessage<PaymentServiceGetDefaultPricesRequest> | undefined, b: PaymentServiceGetDefaultPricesRequest | PlainMessage<PaymentServiceGetDefaultPricesRequest> | undefined): boolean;
}
/**
 * PaymentServiceGetDefaultPricesResponse is the response payload for a get default prices request
 *
 * @generated from message api.v1.PaymentServiceGetDefaultPricesResponse
 */
export declare class PaymentServiceGetDefaultPricesResponse extends Message<PaymentServiceGetDefaultPricesResponse> {
    /**
     * Prices is the list of default prices
     *
     * @generated from field: repeated api.v1.Price prices = 1;
     */
    prices: Price[];
    constructor(data?: PartialMessage<PaymentServiceGetDefaultPricesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceGetDefaultPricesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetDefaultPricesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetDefaultPricesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetDefaultPricesResponse;
    static equals(a: PaymentServiceGetDefaultPricesResponse | PlainMessage<PaymentServiceGetDefaultPricesResponse> | undefined, b: PaymentServiceGetDefaultPricesResponse | PlainMessage<PaymentServiceGetDefaultPricesResponse> | undefined): boolean;
}
/**
 * PaymentServiceCheckAdmittedRequest is the request payload for a check admitted request
 *
 * @generated from message api.v1.PaymentServiceCheckAdmittedRequest
 */
export declare class PaymentServiceCheckAdmittedRequest extends Message<PaymentServiceCheckAdmittedRequest> {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<PaymentServiceCheckAdmittedRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceCheckAdmittedRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceCheckAdmittedRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceCheckAdmittedRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceCheckAdmittedRequest;
    static equals(a: PaymentServiceCheckAdmittedRequest | PlainMessage<PaymentServiceCheckAdmittedRequest> | undefined, b: PaymentServiceCheckAdmittedRequest | PlainMessage<PaymentServiceCheckAdmittedRequest> | undefined): boolean;
}
/**
 * PaymentServiceCheckAdmittedResponse is the response payload for a check admitted request
 *
 * @generated from message api.v1.PaymentServiceCheckAdmittedResponse
 */
export declare class PaymentServiceCheckAdmittedResponse extends Message<PaymentServiceCheckAdmittedResponse> {
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
    constructor(data?: PartialMessage<PaymentServiceCheckAdmittedResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceCheckAdmittedResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceCheckAdmittedResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceCheckAdmittedResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceCheckAdmittedResponse;
    static equals(a: PaymentServiceCheckAdmittedResponse | PlainMessage<PaymentServiceCheckAdmittedResponse> | undefined, b: PaymentServiceCheckAdmittedResponse | PlainMessage<PaymentServiceCheckAdmittedResponse> | undefined): boolean;
}
/**
 * PaymentServiceRequestAdmissionRequest is the request payload for a admission request
 *
 * @generated from message api.v1.PaymentServiceRequestAdmissionRequest
 */
export declare class PaymentServiceRequestAdmissionRequest extends Message<PaymentServiceRequestAdmissionRequest> {
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
    constructor(data?: PartialMessage<PaymentServiceRequestAdmissionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceRequestAdmissionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceRequestAdmissionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceRequestAdmissionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceRequestAdmissionRequest;
    static equals(a: PaymentServiceRequestAdmissionRequest | PlainMessage<PaymentServiceRequestAdmissionRequest> | undefined, b: PaymentServiceRequestAdmissionRequest | PlainMessage<PaymentServiceRequestAdmissionRequest> | undefined): boolean;
}
/**
 * PaymentServiceRequestAdmissionResponse is the response payload for a admission request
 *
 * @generated from message api.v1.PaymentServiceRequestAdmissionResponse
 */
export declare class PaymentServiceRequestAdmissionResponse extends Message<PaymentServiceRequestAdmissionResponse> {
    constructor(data?: PartialMessage<PaymentServiceRequestAdmissionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceRequestAdmissionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceRequestAdmissionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceRequestAdmissionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceRequestAdmissionResponse;
    static equals(a: PaymentServiceRequestAdmissionResponse | PlainMessage<PaymentServiceRequestAdmissionResponse> | undefined, b: PaymentServiceRequestAdmissionResponse | PlainMessage<PaymentServiceRequestAdmissionResponse> | undefined): boolean;
}
/**
 * PaymentServiceHasChargeableResourcesRequest is the request payload for a has chargeable request
 *
 * @generated from message api.v1.PaymentServiceHasChargeableResourcesRequest
 */
export declare class PaymentServiceHasChargeableResourcesRequest extends Message<PaymentServiceHasChargeableResourcesRequest> {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<PaymentServiceHasChargeableResourcesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceHasChargeableResourcesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceHasChargeableResourcesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceHasChargeableResourcesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceHasChargeableResourcesRequest;
    static equals(a: PaymentServiceHasChargeableResourcesRequest | PlainMessage<PaymentServiceHasChargeableResourcesRequest> | undefined, b: PaymentServiceHasChargeableResourcesRequest | PlainMessage<PaymentServiceHasChargeableResourcesRequest> | undefined): boolean;
}
/**
 * PaymentServiceHasChargeableResourcesResponse is the response payload for a has chargeable request
 *
 * @generated from message api.v1.PaymentServiceHasChargeableResourcesResponse
 */
export declare class PaymentServiceHasChargeableResourcesResponse extends Message<PaymentServiceHasChargeableResourcesResponse> {
    /**
     * HasResources indicates if the customer has actually chargable resources
     *
     * @generated from field: bool has_resources = 1;
     */
    hasResources: boolean;
    constructor(data?: PartialMessage<PaymentServiceHasChargeableResourcesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceHasChargeableResourcesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceHasChargeableResourcesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceHasChargeableResourcesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceHasChargeableResourcesResponse;
    static equals(a: PaymentServiceHasChargeableResourcesResponse | PlainMessage<PaymentServiceHasChargeableResourcesResponse> | undefined, b: PaymentServiceHasChargeableResourcesResponse | PlainMessage<PaymentServiceHasChargeableResourcesResponse> | undefined): boolean;
}
/**
 * PayentServiceSetOnboardedRequest changes the onboarded status of the given customer
 *
 * @generated from message api.v1.PaymentServiceSetOnboardedRequest
 */
export declare class PaymentServiceSetOnboardedRequest extends Message<PaymentServiceSetOnboardedRequest> {
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
    constructor(data?: PartialMessage<PaymentServiceSetOnboardedRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceSetOnboardedRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceSetOnboardedRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceSetOnboardedRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceSetOnboardedRequest;
    static equals(a: PaymentServiceSetOnboardedRequest | PlainMessage<PaymentServiceSetOnboardedRequest> | undefined, b: PaymentServiceSetOnboardedRequest | PlainMessage<PaymentServiceSetOnboardedRequest> | undefined): boolean;
}
/**
 * PaymentServiceSetOnboardedResponse respond to the changed status of the given customer
 *
 * @generated from message api.v1.PaymentServiceSetOnboardedResponse
 */
export declare class PaymentServiceSetOnboardedResponse extends Message<PaymentServiceSetOnboardedResponse> {
    /**
     * Onboarded indicates if the customer has seen the onboarded message
     *
     * @generated from field: bool onboarded = 1;
     */
    onboarded: boolean;
    constructor(data?: PartialMessage<PaymentServiceSetOnboardedResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceSetOnboardedResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceSetOnboardedResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceSetOnboardedResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceSetOnboardedResponse;
    static equals(a: PaymentServiceSetOnboardedResponse | PlainMessage<PaymentServiceSetOnboardedResponse> | undefined, b: PaymentServiceSetOnboardedResponse | PlainMessage<PaymentServiceSetOnboardedResponse> | undefined): boolean;
}
/**
 * PaymentServiceGetOnboardedRequest check the onboarded status
 *
 * @generated from message api.v1.PaymentServiceGetOnboardedRequest
 */
export declare class PaymentServiceGetOnboardedRequest extends Message<PaymentServiceGetOnboardedRequest> {
    /**
     * Login of the customer
     *
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<PaymentServiceGetOnboardedRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceGetOnboardedRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetOnboardedRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetOnboardedRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetOnboardedRequest;
    static equals(a: PaymentServiceGetOnboardedRequest | PlainMessage<PaymentServiceGetOnboardedRequest> | undefined, b: PaymentServiceGetOnboardedRequest | PlainMessage<PaymentServiceGetOnboardedRequest> | undefined): boolean;
}
/**
 * PaymentServiceGetOnboardedRequest returns the onboarded status
 *
 * @generated from message api.v1.PaymentServiceGetOnboardedResponse
 */
export declare class PaymentServiceGetOnboardedResponse extends Message<PaymentServiceGetOnboardedResponse> {
    /**
     * Onboarded indicates if the customer has seen the onboarded message
     *
     * @generated from field: bool onboarded = 1;
     */
    onboarded: boolean;
    constructor(data?: PartialMessage<PaymentServiceGetOnboardedResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentServiceGetOnboardedResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetOnboardedResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetOnboardedResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetOnboardedResponse;
    static equals(a: PaymentServiceGetOnboardedResponse | PlainMessage<PaymentServiceGetOnboardedResponse> | undefined, b: PaymentServiceGetOnboardedResponse | PlainMessage<PaymentServiceGetOnboardedResponse> | undefined): boolean;
}
