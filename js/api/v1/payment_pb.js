"use strict";
// @generated by protoc-gen-es v1.1.1 with parameter "target=ts"
// @generated from file api/v1/payment.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentServiceGetDefaultPricesResponse = exports.PaymentServiceGetDefaultPricesRequest = exports.PaymentServiceGetInvoicesResponse = exports.PaymentServiceGetInvoicesRequest = exports.PaymentServiceGetSubscriptionUsageResponse = exports.PaymentServiceGetSubscriptionUsageRequest = exports.PaymentServiceDeletePaymentMethodResponse = exports.PaymentServiceDeletePaymentMethodRequest = exports.PaymentServiceHasPaymentMethodResponse = exports.PaymentServiceHasPaymentMethodRequest = exports.PaymentServiceCheckIfCustomerExistsResponse = exports.PaymentServiceCheckIfCustomerExistsRequest = exports.PaymentServiceGetCustomerWithLoginResponse = exports.PaymentServiceGetCustomerWithLoginRequest = exports.PaymentServiceGetCustomerResponse = exports.PaymentServiceGetCustomerRequest = exports.PaymentServiceCreateOrUpdateCustomerResponse = exports.PaymentServiceCreateOrUpdateCustomerRequest = exports.Coupon = exports.Invoice = exports.SubscriptionUsageItem = exports.Address = exports.Price = exports.Card = exports.PaymentCustomer = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from message api.v1.PaymentCustomer
 */
class PaymentCustomer extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string login = 1;
         */
        this.login = "";
        /**
         * @generated from field: string payment_method_id = 4;
         */
        this.paymentMethodId = "";
        /**
         * @generated from field: string subscription_id = 5;
         */
        this.subscriptionId = "";
        /**
         * @generated from field: repeated api.v1.Price prices = 8;
         */
        this.prices = [];
        /**
         * @generated from field: string vat = 11;
         */
        this.vat = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentCustomer().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentCustomer().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentCustomer().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentCustomer, a, b);
    }
}
exports.PaymentCustomer = PaymentCustomer;
PaymentCustomer.runtime = protobuf_1.proto3;
PaymentCustomer.typeName = "api.v1.PaymentCustomer";
PaymentCustomer.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "customer_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "payment_method_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "card", kind: "message", T: Card, opt: true },
    { no: 8, name: "prices", kind: "message", T: Price, repeated: true },
    { no: 9, name: "address", kind: "message", T: Address },
    { no: 10, name: "coupon", kind: "message", T: Coupon, opt: true },
    { no: 11, name: "vat", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.Card
 */
class Card extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string brand = 1;
         */
        this.brand = "";
        /**
         * @generated from field: string country = 2;
         */
        this.country = "";
        /**
         * @generated from field: int64 exp_month = 3;
         */
        this.expMonth = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: int64 exp_year = 4;
         */
        this.expYear = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string last_4 = 5;
         */
        this.last4 = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Card().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Card().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Card().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Card, a, b);
    }
}
exports.Card = Card;
Card.runtime = protobuf_1.proto3;
Card.typeName = "api.v1.Card";
Card.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "brand", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "country", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "exp_month", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "exp_year", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "last_4", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.Price
 */
class Price extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string name = 1;
         */
        this.name = "";
        /**
         * @generated from field: double unit_amount_decimal = 2;
         */
        this.unitAmountDecimal = 0;
        /**
         * @generated from field: string currency = 3;
         */
        this.currency = "";
        /**
         * @generated from field: string unit_label = 4;
         */
        this.unitLabel = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Price().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Price().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Price().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Price, a, b);
    }
}
exports.Price = Price;
Price.runtime = protobuf_1.proto3;
Price.typeName = "api.v1.Price";
Price.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "unit_amount_decimal", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "currency", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "unit_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.Address
 */
class Address extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string line1 = 1;
         */
        this.line1 = "";
        /**
         * @generated from field: string line2 = 2;
         */
        this.line2 = "";
        /**
         * @generated from field: string postal_code = 3;
         */
        this.postalCode = "";
        /**
         * @generated from field: string city = 4;
         */
        this.city = "";
        /**
         * @generated from field: string state = 5;
         */
        this.state = "";
        /**
         * @generated from field: string country = 6;
         */
        this.country = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Address().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Address().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Address().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Address, a, b);
    }
}
exports.Address = Address;
Address.runtime = protobuf_1.proto3;
Address.typeName = "api.v1.Address";
Address.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "line1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "line2", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "postal_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "city", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "country", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.SubscriptionUsageItem
 */
class SubscriptionUsageItem extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subscription_item_id = 1;
         */
        this.subscriptionItemId = "";
        /**
         * @generated from field: string subscription_item_name = 2;
         */
        this.subscriptionItemName = "";
        /**
         * @generated from field: int64 total_usage = 3;
         */
        this.totalUsage = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SubscriptionUsageItem().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SubscriptionUsageItem().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SubscriptionUsageItem().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SubscriptionUsageItem, a, b);
    }
}
exports.SubscriptionUsageItem = SubscriptionUsageItem;
SubscriptionUsageItem.runtime = protobuf_1.proto3;
SubscriptionUsageItem.typeName = "api.v1.SubscriptionUsageItem";
SubscriptionUsageItem.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "subscription_item_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "subscription_item_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "total_usage", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "period_start", kind: "message", T: protobuf_1.Timestamp },
    { no: 5, name: "period_end", kind: "message", T: protobuf_1.Timestamp },
]);
/**
 * @generated from message api.v1.Invoice
 */
class Invoice extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * @generated from field: string pdf_download_url = 2;
         */
        this.pdfDownloadUrl = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Invoice().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Invoice().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Invoice().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Invoice, a, b);
    }
}
exports.Invoice = Invoice;
Invoice.runtime = protobuf_1.proto3;
Invoice.typeName = "api.v1.Invoice";
Invoice.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pdf_download_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "period_start", kind: "message", T: protobuf_1.Timestamp },
    { no: 5, name: "period_end", kind: "message", T: protobuf_1.Timestamp },
]);
/**
 * @generated from message api.v1.Coupon
 */
class Coupon extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * @generated from field: int64 amount_off = 3;
         */
        this.amountOff = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string currency = 4;
         */
        this.currency = "";
        /**
         * @generated from field: int64 duration_in_month = 5;
         */
        this.durationInMonth = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: int64 times_redeemed = 8;
         */
        this.timesRedeemed = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: int64 max_redemptions = 9;
         */
        this.maxRedemptions = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Coupon().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Coupon().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Coupon().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Coupon, a, b);
    }
}
exports.Coupon = Coupon;
Coupon.runtime = protobuf_1.proto3;
Coupon.typeName = "api.v1.Coupon";
Coupon.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount_off", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "currency", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "duration_in_month", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 7, name: "redeem_by", kind: "message", T: protobuf_1.Timestamp },
    { no: 8, name: "times_redeemed", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "max_redemptions", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * @generated from message api.v1.PaymentServiceCreateOrUpdateCustomerRequest
 */
class PaymentServiceCreateOrUpdateCustomerRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string login = 1;
         */
        this.login = "";
        /**
         * @generated from field: bool accepted_terms_and_conditions = 3;
         */
        this.acceptedTermsAndConditions = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceCreateOrUpdateCustomerRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceCreateOrUpdateCustomerRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceCreateOrUpdateCustomerRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceCreateOrUpdateCustomerRequest, a, b);
    }
}
exports.PaymentServiceCreateOrUpdateCustomerRequest = PaymentServiceCreateOrUpdateCustomerRequest;
PaymentServiceCreateOrUpdateCustomerRequest.runtime = protobuf_1.proto3;
PaymentServiceCreateOrUpdateCustomerRequest.typeName = "api.v1.PaymentServiceCreateOrUpdateCustomerRequest";
PaymentServiceCreateOrUpdateCustomerRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "customer", kind: "message", T: PaymentCustomer },
    { no: 3, name: "accepted_terms_and_conditions", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message api.v1.PaymentServiceCreateOrUpdateCustomerResponse
 */
class PaymentServiceCreateOrUpdateCustomerResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceCreateOrUpdateCustomerResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceCreateOrUpdateCustomerResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceCreateOrUpdateCustomerResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceCreateOrUpdateCustomerResponse, a, b);
    }
}
exports.PaymentServiceCreateOrUpdateCustomerResponse = PaymentServiceCreateOrUpdateCustomerResponse;
PaymentServiceCreateOrUpdateCustomerResponse.runtime = protobuf_1.proto3;
PaymentServiceCreateOrUpdateCustomerResponse.typeName = "api.v1.PaymentServiceCreateOrUpdateCustomerResponse";
PaymentServiceCreateOrUpdateCustomerResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "customer", kind: "message", T: PaymentCustomer },
]);
/**
 * @generated from message api.v1.PaymentServiceGetCustomerRequest
 */
class PaymentServiceGetCustomerRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string login = 1;
         */
        this.login = "";
        /**
         * @generated from field: string customer_id = 2;
         */
        this.customerId = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceGetCustomerRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceGetCustomerRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceGetCustomerRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceGetCustomerRequest, a, b);
    }
}
exports.PaymentServiceGetCustomerRequest = PaymentServiceGetCustomerRequest;
PaymentServiceGetCustomerRequest.runtime = protobuf_1.proto3;
PaymentServiceGetCustomerRequest.typeName = "api.v1.PaymentServiceGetCustomerRequest";
PaymentServiceGetCustomerRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "customer_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.PaymentServiceGetCustomerResponse
 */
class PaymentServiceGetCustomerResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceGetCustomerResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceGetCustomerResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceGetCustomerResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceGetCustomerResponse, a, b);
    }
}
exports.PaymentServiceGetCustomerResponse = PaymentServiceGetCustomerResponse;
PaymentServiceGetCustomerResponse.runtime = protobuf_1.proto3;
PaymentServiceGetCustomerResponse.typeName = "api.v1.PaymentServiceGetCustomerResponse";
PaymentServiceGetCustomerResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "customer", kind: "message", T: PaymentCustomer },
]);
/**
 * @generated from message api.v1.PaymentServiceGetCustomerWithLoginRequest
 */
class PaymentServiceGetCustomerWithLoginRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string login = 1;
         */
        this.login = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceGetCustomerWithLoginRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceGetCustomerWithLoginRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceGetCustomerWithLoginRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceGetCustomerWithLoginRequest, a, b);
    }
}
exports.PaymentServiceGetCustomerWithLoginRequest = PaymentServiceGetCustomerWithLoginRequest;
PaymentServiceGetCustomerWithLoginRequest.runtime = protobuf_1.proto3;
PaymentServiceGetCustomerWithLoginRequest.typeName = "api.v1.PaymentServiceGetCustomerWithLoginRequest";
PaymentServiceGetCustomerWithLoginRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.PaymentServiceGetCustomerWithLoginResponse
 */
class PaymentServiceGetCustomerWithLoginResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceGetCustomerWithLoginResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceGetCustomerWithLoginResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceGetCustomerWithLoginResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceGetCustomerWithLoginResponse, a, b);
    }
}
exports.PaymentServiceGetCustomerWithLoginResponse = PaymentServiceGetCustomerWithLoginResponse;
PaymentServiceGetCustomerWithLoginResponse.runtime = protobuf_1.proto3;
PaymentServiceGetCustomerWithLoginResponse.typeName = "api.v1.PaymentServiceGetCustomerWithLoginResponse";
PaymentServiceGetCustomerWithLoginResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "customer", kind: "message", T: PaymentCustomer },
]);
/**
 * @generated from message api.v1.PaymentServiceCheckIfCustomerExistsRequest
 */
class PaymentServiceCheckIfCustomerExistsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string login = 1;
         */
        this.login = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceCheckIfCustomerExistsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceCheckIfCustomerExistsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceCheckIfCustomerExistsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceCheckIfCustomerExistsRequest, a, b);
    }
}
exports.PaymentServiceCheckIfCustomerExistsRequest = PaymentServiceCheckIfCustomerExistsRequest;
PaymentServiceCheckIfCustomerExistsRequest.runtime = protobuf_1.proto3;
PaymentServiceCheckIfCustomerExistsRequest.typeName = "api.v1.PaymentServiceCheckIfCustomerExistsRequest";
PaymentServiceCheckIfCustomerExistsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.PaymentServiceCheckIfCustomerExistsResponse
 */
class PaymentServiceCheckIfCustomerExistsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bool exists = 2;
         */
        this.exists = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceCheckIfCustomerExistsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceCheckIfCustomerExistsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceCheckIfCustomerExistsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceCheckIfCustomerExistsResponse, a, b);
    }
}
exports.PaymentServiceCheckIfCustomerExistsResponse = PaymentServiceCheckIfCustomerExistsResponse;
PaymentServiceCheckIfCustomerExistsResponse.runtime = protobuf_1.proto3;
PaymentServiceCheckIfCustomerExistsResponse.typeName = "api.v1.PaymentServiceCheckIfCustomerExistsResponse";
PaymentServiceCheckIfCustomerExistsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "customer", kind: "message", T: PaymentCustomer },
    { no: 2, name: "exists", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message api.v1.PaymentServiceHasPaymentMethodRequest
 */
class PaymentServiceHasPaymentMethodRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string login = 1;
         */
        this.login = "";
        /**
         * @generated from field: string project = 2;
         */
        this.project = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceHasPaymentMethodRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceHasPaymentMethodRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceHasPaymentMethodRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceHasPaymentMethodRequest, a, b);
    }
}
exports.PaymentServiceHasPaymentMethodRequest = PaymentServiceHasPaymentMethodRequest;
PaymentServiceHasPaymentMethodRequest.runtime = protobuf_1.proto3;
PaymentServiceHasPaymentMethodRequest.typeName = "api.v1.PaymentServiceHasPaymentMethodRequest";
PaymentServiceHasPaymentMethodRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.PaymentServiceHasPaymentMethodResponse
 */
class PaymentServiceHasPaymentMethodResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bool exists = 1;
         */
        this.exists = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceHasPaymentMethodResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceHasPaymentMethodResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceHasPaymentMethodResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceHasPaymentMethodResponse, a, b);
    }
}
exports.PaymentServiceHasPaymentMethodResponse = PaymentServiceHasPaymentMethodResponse;
PaymentServiceHasPaymentMethodResponse.runtime = protobuf_1.proto3;
PaymentServiceHasPaymentMethodResponse.typeName = "api.v1.PaymentServiceHasPaymentMethodResponse";
PaymentServiceHasPaymentMethodResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "exists", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message api.v1.PaymentServiceDeletePaymentMethodRequest
 */
class PaymentServiceDeletePaymentMethodRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string login = 1;
         */
        this.login = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceDeletePaymentMethodRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceDeletePaymentMethodRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceDeletePaymentMethodRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceDeletePaymentMethodRequest, a, b);
    }
}
exports.PaymentServiceDeletePaymentMethodRequest = PaymentServiceDeletePaymentMethodRequest;
PaymentServiceDeletePaymentMethodRequest.runtime = protobuf_1.proto3;
PaymentServiceDeletePaymentMethodRequest.typeName = "api.v1.PaymentServiceDeletePaymentMethodRequest";
PaymentServiceDeletePaymentMethodRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.PaymentServiceDeletePaymentMethodResponse
 */
class PaymentServiceDeletePaymentMethodResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceDeletePaymentMethodResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceDeletePaymentMethodResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceDeletePaymentMethodResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceDeletePaymentMethodResponse, a, b);
    }
}
exports.PaymentServiceDeletePaymentMethodResponse = PaymentServiceDeletePaymentMethodResponse;
PaymentServiceDeletePaymentMethodResponse.runtime = protobuf_1.proto3;
PaymentServiceDeletePaymentMethodResponse.typeName = "api.v1.PaymentServiceDeletePaymentMethodResponse";
PaymentServiceDeletePaymentMethodResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * @generated from message api.v1.PaymentServiceGetSubscriptionUsageRequest
 */
class PaymentServiceGetSubscriptionUsageRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string login = 1;
         */
        this.login = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceGetSubscriptionUsageRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceGetSubscriptionUsageRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceGetSubscriptionUsageRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceGetSubscriptionUsageRequest, a, b);
    }
}
exports.PaymentServiceGetSubscriptionUsageRequest = PaymentServiceGetSubscriptionUsageRequest;
PaymentServiceGetSubscriptionUsageRequest.runtime = protobuf_1.proto3;
PaymentServiceGetSubscriptionUsageRequest.typeName = "api.v1.PaymentServiceGetSubscriptionUsageRequest";
PaymentServiceGetSubscriptionUsageRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.PaymentServiceGetSubscriptionUsageResponse
 */
class PaymentServiceGetSubscriptionUsageResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated api.v1.SubscriptionUsageItem subscription_usage_items = 1;
         */
        this.subscriptionUsageItems = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceGetSubscriptionUsageResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceGetSubscriptionUsageResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceGetSubscriptionUsageResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceGetSubscriptionUsageResponse, a, b);
    }
}
exports.PaymentServiceGetSubscriptionUsageResponse = PaymentServiceGetSubscriptionUsageResponse;
PaymentServiceGetSubscriptionUsageResponse.runtime = protobuf_1.proto3;
PaymentServiceGetSubscriptionUsageResponse.typeName = "api.v1.PaymentServiceGetSubscriptionUsageResponse";
PaymentServiceGetSubscriptionUsageResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "subscription_usage_items", kind: "message", T: SubscriptionUsageItem, repeated: true },
]);
/**
 * @generated from message api.v1.PaymentServiceGetInvoicesRequest
 */
class PaymentServiceGetInvoicesRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string login = 1;
         */
        this.login = "";
        /**
         * @generated from field: string customer_id = 2;
         */
        this.customerId = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceGetInvoicesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceGetInvoicesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceGetInvoicesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceGetInvoicesRequest, a, b);
    }
}
exports.PaymentServiceGetInvoicesRequest = PaymentServiceGetInvoicesRequest;
PaymentServiceGetInvoicesRequest.runtime = protobuf_1.proto3;
PaymentServiceGetInvoicesRequest.typeName = "api.v1.PaymentServiceGetInvoicesRequest";
PaymentServiceGetInvoicesRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "customer_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.PaymentServiceGetInvoicesResponse
 */
class PaymentServiceGetInvoicesResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated api.v1.Invoice invoices = 1;
         */
        this.invoices = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceGetInvoicesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceGetInvoicesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceGetInvoicesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceGetInvoicesResponse, a, b);
    }
}
exports.PaymentServiceGetInvoicesResponse = PaymentServiceGetInvoicesResponse;
PaymentServiceGetInvoicesResponse.runtime = protobuf_1.proto3;
PaymentServiceGetInvoicesResponse.typeName = "api.v1.PaymentServiceGetInvoicesResponse";
PaymentServiceGetInvoicesResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "invoices", kind: "message", T: Invoice, repeated: true },
]);
/**
 * @generated from message api.v1.PaymentServiceGetDefaultPricesRequest
 */
class PaymentServiceGetDefaultPricesRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceGetDefaultPricesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceGetDefaultPricesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceGetDefaultPricesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceGetDefaultPricesRequest, a, b);
    }
}
exports.PaymentServiceGetDefaultPricesRequest = PaymentServiceGetDefaultPricesRequest;
PaymentServiceGetDefaultPricesRequest.runtime = protobuf_1.proto3;
PaymentServiceGetDefaultPricesRequest.typeName = "api.v1.PaymentServiceGetDefaultPricesRequest";
PaymentServiceGetDefaultPricesRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * @generated from message api.v1.PaymentServiceGetDefaultPricesResponse
 */
class PaymentServiceGetDefaultPricesResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated api.v1.Price prices = 1;
         */
        this.prices = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceGetDefaultPricesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceGetDefaultPricesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceGetDefaultPricesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceGetDefaultPricesResponse, a, b);
    }
}
exports.PaymentServiceGetDefaultPricesResponse = PaymentServiceGetDefaultPricesResponse;
PaymentServiceGetDefaultPricesResponse.runtime = protobuf_1.proto3;
PaymentServiceGetDefaultPricesResponse.typeName = "api.v1.PaymentServiceGetDefaultPricesResponse";
PaymentServiceGetDefaultPricesResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "prices", kind: "message", T: Price, repeated: true },
]);
