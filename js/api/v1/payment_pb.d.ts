import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from message api.v1.PaymentCustomer
 */
export declare class PaymentCustomer extends Message<PaymentCustomer> {
    /**
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * @generated from field: optional string customer_id = 3;
     */
    customerId?: string;
    /**
     * @generated from field: string payment_method_id = 4;
     */
    paymentMethodId: string;
    /**
     * @generated from field: string subscription_id = 5;
     */
    subscriptionId: string;
    /**
     * @generated from field: optional string email = 6;
     */
    email?: string;
    /**
     * @generated from field: optional api.v1.Card card = 7;
     */
    card?: Card;
    /**
     * @generated from field: repeated api.v1.Price prices = 8;
     */
    prices: Price[];
    /**
     * @generated from field: api.v1.Address address = 9;
     */
    address?: Address;
    /**
     * @generated from field: optional api.v1.Coupon coupon = 10;
     */
    coupon?: Coupon;
    /**
     * @generated from field: string vat = 11;
     */
    vat: string;
    constructor(data?: PartialMessage<PaymentCustomer>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentCustomer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentCustomer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentCustomer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentCustomer;
    static equals(a: PaymentCustomer | PlainMessage<PaymentCustomer> | undefined, b: PaymentCustomer | PlainMessage<PaymentCustomer> | undefined): boolean;
}
/**
 * @generated from message api.v1.Card
 */
export declare class Card extends Message<Card> {
    /**
     * @generated from field: string brand = 1;
     */
    brand: string;
    /**
     * @generated from field: string country = 2;
     */
    country: string;
    /**
     * @generated from field: int64 exp_month = 3;
     */
    expMonth: bigint;
    /**
     * @generated from field: int64 exp_year = 4;
     */
    expYear: bigint;
    /**
     * @generated from field: string last_4 = 5;
     */
    last4: string;
    constructor(data?: PartialMessage<Card>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.Card";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Card;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Card;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Card;
    static equals(a: Card | PlainMessage<Card> | undefined, b: Card | PlainMessage<Card> | undefined): boolean;
}
/**
 * @generated from message api.v1.Price
 */
export declare class Price extends Message<Price> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: double unit_amount_decimal = 2;
     */
    unitAmountDecimal: number;
    /**
     * @generated from field: string currency = 3;
     */
    currency: string;
    constructor(data?: PartialMessage<Price>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.Price";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Price;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Price;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Price;
    static equals(a: Price | PlainMessage<Price> | undefined, b: Price | PlainMessage<Price> | undefined): boolean;
}
/**
 * @generated from message api.v1.Address
 */
export declare class Address extends Message<Address> {
    /**
     * @generated from field: string line1 = 1;
     */
    line1: string;
    /**
     * @generated from field: string line2 = 2;
     */
    line2: string;
    /**
     * @generated from field: string postal_code = 3;
     */
    postalCode: string;
    /**
     * @generated from field: string city = 4;
     */
    city: string;
    /**
     * @generated from field: string state = 5;
     */
    state: string;
    /**
     * @generated from field: string country = 6;
     */
    country: string;
    constructor(data?: PartialMessage<Address>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.Address";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Address;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Address;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Address;
    static equals(a: Address | PlainMessage<Address> | undefined, b: Address | PlainMessage<Address> | undefined): boolean;
}
/**
 * @generated from message api.v1.SubscriptionUsageItem
 */
export declare class SubscriptionUsageItem extends Message<SubscriptionUsageItem> {
    /**
     * @generated from field: string subscription_item_id = 1;
     */
    subscriptionItemId: string;
    /**
     * @generated from field: string subscription_item_name = 2;
     */
    subscriptionItemName: string;
    /**
     * @generated from field: int64 total_usage = 3;
     */
    totalUsage: bigint;
    /**
     * @generated from field: google.protobuf.Timestamp period_start = 4;
     */
    periodStart?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp period_end = 5;
     */
    periodEnd?: Timestamp;
    constructor(data?: PartialMessage<SubscriptionUsageItem>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.SubscriptionUsageItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubscriptionUsageItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubscriptionUsageItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubscriptionUsageItem;
    static equals(a: SubscriptionUsageItem | PlainMessage<SubscriptionUsageItem> | undefined, b: SubscriptionUsageItem | PlainMessage<SubscriptionUsageItem> | undefined): boolean;
}
/**
 * @generated from message api.v1.Invoice
 */
export declare class Invoice extends Message<Invoice> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string pdf_download_url = 2;
     */
    pdfDownloadUrl: string;
    /**
     * @generated from field: google.protobuf.Timestamp period_start = 4;
     */
    periodStart?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp period_end = 5;
     */
    periodEnd?: Timestamp;
    constructor(data?: PartialMessage<Invoice>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.Invoice";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Invoice;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Invoice;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Invoice;
    static equals(a: Invoice | PlainMessage<Invoice> | undefined, b: Invoice | PlainMessage<Invoice> | undefined): boolean;
}
/**
 * @generated from message api.v1.Coupon
 */
export declare class Coupon extends Message<Coupon> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: int64 amount_off = 3;
     */
    amountOff: bigint;
    /**
     * @generated from field: string currency = 4;
     */
    currency: string;
    /**
     * @generated from field: int64 duration_in_month = 5;
     */
    durationInMonth: bigint;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp redeem_by = 7;
     */
    redeemBy?: Timestamp;
    /**
     * @generated from field: int64 times_redeemed = 8;
     */
    timesRedeemed: bigint;
    /**
     * @generated from field: int64 max_redemptions = 9;
     */
    maxRedemptions: bigint;
    constructor(data?: PartialMessage<Coupon>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.Coupon";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Coupon;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Coupon;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Coupon;
    static equals(a: Coupon | PlainMessage<Coupon> | undefined, b: Coupon | PlainMessage<Coupon> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceCreateOrUpdateCustomerRequest
 */
export declare class PaymentServiceCreateOrUpdateCustomerRequest extends Message<PaymentServiceCreateOrUpdateCustomerRequest> {
    /**
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * @generated from field: api.v1.PaymentCustomer customer = 2;
     */
    customer?: PaymentCustomer;
    /**
     * @generated from field: bool accepted_terms_and_conditions = 3;
     */
    acceptedTermsAndConditions: boolean;
    constructor(data?: PartialMessage<PaymentServiceCreateOrUpdateCustomerRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceCreateOrUpdateCustomerRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceCreateOrUpdateCustomerRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceCreateOrUpdateCustomerRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceCreateOrUpdateCustomerRequest;
    static equals(a: PaymentServiceCreateOrUpdateCustomerRequest | PlainMessage<PaymentServiceCreateOrUpdateCustomerRequest> | undefined, b: PaymentServiceCreateOrUpdateCustomerRequest | PlainMessage<PaymentServiceCreateOrUpdateCustomerRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceCreateOrUpdateCustomerResponse
 */
export declare class PaymentServiceCreateOrUpdateCustomerResponse extends Message<PaymentServiceCreateOrUpdateCustomerResponse> {
    /**
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
    constructor(data?: PartialMessage<PaymentServiceCreateOrUpdateCustomerResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceCreateOrUpdateCustomerResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceCreateOrUpdateCustomerResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceCreateOrUpdateCustomerResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceCreateOrUpdateCustomerResponse;
    static equals(a: PaymentServiceCreateOrUpdateCustomerResponse | PlainMessage<PaymentServiceCreateOrUpdateCustomerResponse> | undefined, b: PaymentServiceCreateOrUpdateCustomerResponse | PlainMessage<PaymentServiceCreateOrUpdateCustomerResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceGetCustomerRequest
 */
export declare class PaymentServiceGetCustomerRequest extends Message<PaymentServiceGetCustomerRequest> {
    /**
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * @generated from field: string customer_id = 2;
     */
    customerId: string;
    constructor(data?: PartialMessage<PaymentServiceGetCustomerRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceGetCustomerRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetCustomerRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerRequest;
    static equals(a: PaymentServiceGetCustomerRequest | PlainMessage<PaymentServiceGetCustomerRequest> | undefined, b: PaymentServiceGetCustomerRequest | PlainMessage<PaymentServiceGetCustomerRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceGetCustomerResponse
 */
export declare class PaymentServiceGetCustomerResponse extends Message<PaymentServiceGetCustomerResponse> {
    /**
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
    constructor(data?: PartialMessage<PaymentServiceGetCustomerResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceGetCustomerResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetCustomerResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerResponse;
    static equals(a: PaymentServiceGetCustomerResponse | PlainMessage<PaymentServiceGetCustomerResponse> | undefined, b: PaymentServiceGetCustomerResponse | PlainMessage<PaymentServiceGetCustomerResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceGetCustomerWithLoginRequest
 */
export declare class PaymentServiceGetCustomerWithLoginRequest extends Message<PaymentServiceGetCustomerWithLoginRequest> {
    /**
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<PaymentServiceGetCustomerWithLoginRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceGetCustomerWithLoginRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetCustomerWithLoginRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerWithLoginRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerWithLoginRequest;
    static equals(a: PaymentServiceGetCustomerWithLoginRequest | PlainMessage<PaymentServiceGetCustomerWithLoginRequest> | undefined, b: PaymentServiceGetCustomerWithLoginRequest | PlainMessage<PaymentServiceGetCustomerWithLoginRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceGetCustomerWithLoginResponse
 */
export declare class PaymentServiceGetCustomerWithLoginResponse extends Message<PaymentServiceGetCustomerWithLoginResponse> {
    /**
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
    constructor(data?: PartialMessage<PaymentServiceGetCustomerWithLoginResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceGetCustomerWithLoginResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetCustomerWithLoginResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerWithLoginResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetCustomerWithLoginResponse;
    static equals(a: PaymentServiceGetCustomerWithLoginResponse | PlainMessage<PaymentServiceGetCustomerWithLoginResponse> | undefined, b: PaymentServiceGetCustomerWithLoginResponse | PlainMessage<PaymentServiceGetCustomerWithLoginResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceCheckIfCustomerExistsRequest
 */
export declare class PaymentServiceCheckIfCustomerExistsRequest extends Message<PaymentServiceCheckIfCustomerExistsRequest> {
    /**
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<PaymentServiceCheckIfCustomerExistsRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceCheckIfCustomerExistsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceCheckIfCustomerExistsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceCheckIfCustomerExistsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceCheckIfCustomerExistsRequest;
    static equals(a: PaymentServiceCheckIfCustomerExistsRequest | PlainMessage<PaymentServiceCheckIfCustomerExistsRequest> | undefined, b: PaymentServiceCheckIfCustomerExistsRequest | PlainMessage<PaymentServiceCheckIfCustomerExistsRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceCheckIfCustomerExistsResponse
 */
export declare class PaymentServiceCheckIfCustomerExistsResponse extends Message<PaymentServiceCheckIfCustomerExistsResponse> {
    /**
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
    /**
     * @generated from field: bool exists = 2;
     */
    exists: boolean;
    constructor(data?: PartialMessage<PaymentServiceCheckIfCustomerExistsResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceCheckIfCustomerExistsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceCheckIfCustomerExistsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceCheckIfCustomerExistsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceCheckIfCustomerExistsResponse;
    static equals(a: PaymentServiceCheckIfCustomerExistsResponse | PlainMessage<PaymentServiceCheckIfCustomerExistsResponse> | undefined, b: PaymentServiceCheckIfCustomerExistsResponse | PlainMessage<PaymentServiceCheckIfCustomerExistsResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceHasPaymentMethodRequest
 */
export declare class PaymentServiceHasPaymentMethodRequest extends Message<PaymentServiceHasPaymentMethodRequest> {
    /**
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * @generated from field: string project = 2;
     */
    project: string;
    constructor(data?: PartialMessage<PaymentServiceHasPaymentMethodRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceHasPaymentMethodRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceHasPaymentMethodRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceHasPaymentMethodRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceHasPaymentMethodRequest;
    static equals(a: PaymentServiceHasPaymentMethodRequest | PlainMessage<PaymentServiceHasPaymentMethodRequest> | undefined, b: PaymentServiceHasPaymentMethodRequest | PlainMessage<PaymentServiceHasPaymentMethodRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceHasPaymentMethodResponse
 */
export declare class PaymentServiceHasPaymentMethodResponse extends Message<PaymentServiceHasPaymentMethodResponse> {
    /**
     * @generated from field: bool exists = 1;
     */
    exists: boolean;
    constructor(data?: PartialMessage<PaymentServiceHasPaymentMethodResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceHasPaymentMethodResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceHasPaymentMethodResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceHasPaymentMethodResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceHasPaymentMethodResponse;
    static equals(a: PaymentServiceHasPaymentMethodResponse | PlainMessage<PaymentServiceHasPaymentMethodResponse> | undefined, b: PaymentServiceHasPaymentMethodResponse | PlainMessage<PaymentServiceHasPaymentMethodResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceDeletePaymentMethodRequest
 */
export declare class PaymentServiceDeletePaymentMethodRequest extends Message<PaymentServiceDeletePaymentMethodRequest> {
    /**
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<PaymentServiceDeletePaymentMethodRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceDeletePaymentMethodRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceDeletePaymentMethodRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceDeletePaymentMethodRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceDeletePaymentMethodRequest;
    static equals(a: PaymentServiceDeletePaymentMethodRequest | PlainMessage<PaymentServiceDeletePaymentMethodRequest> | undefined, b: PaymentServiceDeletePaymentMethodRequest | PlainMessage<PaymentServiceDeletePaymentMethodRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceDeletePaymentMethodResponse
 */
export declare class PaymentServiceDeletePaymentMethodResponse extends Message<PaymentServiceDeletePaymentMethodResponse> {
    constructor(data?: PartialMessage<PaymentServiceDeletePaymentMethodResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceDeletePaymentMethodResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceDeletePaymentMethodResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceDeletePaymentMethodResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceDeletePaymentMethodResponse;
    static equals(a: PaymentServiceDeletePaymentMethodResponse | PlainMessage<PaymentServiceDeletePaymentMethodResponse> | undefined, b: PaymentServiceDeletePaymentMethodResponse | PlainMessage<PaymentServiceDeletePaymentMethodResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceGetSubscriptionUsageRequest
 */
export declare class PaymentServiceGetSubscriptionUsageRequest extends Message<PaymentServiceGetSubscriptionUsageRequest> {
    /**
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<PaymentServiceGetSubscriptionUsageRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceGetSubscriptionUsageRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetSubscriptionUsageRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetSubscriptionUsageRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetSubscriptionUsageRequest;
    static equals(a: PaymentServiceGetSubscriptionUsageRequest | PlainMessage<PaymentServiceGetSubscriptionUsageRequest> | undefined, b: PaymentServiceGetSubscriptionUsageRequest | PlainMessage<PaymentServiceGetSubscriptionUsageRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceGetSubscriptionUsageResponse
 */
export declare class PaymentServiceGetSubscriptionUsageResponse extends Message<PaymentServiceGetSubscriptionUsageResponse> {
    /**
     * @generated from field: repeated api.v1.SubscriptionUsageItem subscription_usage_items = 1;
     */
    subscriptionUsageItems: SubscriptionUsageItem[];
    constructor(data?: PartialMessage<PaymentServiceGetSubscriptionUsageResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceGetSubscriptionUsageResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetSubscriptionUsageResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetSubscriptionUsageResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetSubscriptionUsageResponse;
    static equals(a: PaymentServiceGetSubscriptionUsageResponse | PlainMessage<PaymentServiceGetSubscriptionUsageResponse> | undefined, b: PaymentServiceGetSubscriptionUsageResponse | PlainMessage<PaymentServiceGetSubscriptionUsageResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceGetInvoicesRequest
 */
export declare class PaymentServiceGetInvoicesRequest extends Message<PaymentServiceGetInvoicesRequest> {
    /**
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * @generated from field: string customer_id = 2;
     */
    customerId: string;
    constructor(data?: PartialMessage<PaymentServiceGetInvoicesRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceGetInvoicesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetInvoicesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetInvoicesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetInvoicesRequest;
    static equals(a: PaymentServiceGetInvoicesRequest | PlainMessage<PaymentServiceGetInvoicesRequest> | undefined, b: PaymentServiceGetInvoicesRequest | PlainMessage<PaymentServiceGetInvoicesRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceGetInvoicesResponse
 */
export declare class PaymentServiceGetInvoicesResponse extends Message<PaymentServiceGetInvoicesResponse> {
    /**
     * @generated from field: repeated api.v1.Invoice invoices = 1;
     */
    invoices: Invoice[];
    constructor(data?: PartialMessage<PaymentServiceGetInvoicesResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceGetInvoicesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetInvoicesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetInvoicesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetInvoicesResponse;
    static equals(a: PaymentServiceGetInvoicesResponse | PlainMessage<PaymentServiceGetInvoicesResponse> | undefined, b: PaymentServiceGetInvoicesResponse | PlainMessage<PaymentServiceGetInvoicesResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceGetDefaultPricesRequest
 */
export declare class PaymentServiceGetDefaultPricesRequest extends Message<PaymentServiceGetDefaultPricesRequest> {
    constructor(data?: PartialMessage<PaymentServiceGetDefaultPricesRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceGetDefaultPricesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetDefaultPricesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetDefaultPricesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetDefaultPricesRequest;
    static equals(a: PaymentServiceGetDefaultPricesRequest | PlainMessage<PaymentServiceGetDefaultPricesRequest> | undefined, b: PaymentServiceGetDefaultPricesRequest | PlainMessage<PaymentServiceGetDefaultPricesRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentServiceGetDefaultPricesResponse
 */
export declare class PaymentServiceGetDefaultPricesResponse extends Message<PaymentServiceGetDefaultPricesResponse> {
    /**
     * @generated from field: repeated api.v1.Price prices = 1;
     */
    prices: Price[];
    constructor(data?: PartialMessage<PaymentServiceGetDefaultPricesResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentServiceGetDefaultPricesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceGetDefaultPricesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceGetDefaultPricesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceGetDefaultPricesResponse;
    static equals(a: PaymentServiceGetDefaultPricesResponse | PlainMessage<PaymentServiceGetDefaultPricesResponse> | undefined, b: PaymentServiceGetDefaultPricesResponse | PlainMessage<PaymentServiceGetDefaultPricesResponse> | undefined): boolean;
}
