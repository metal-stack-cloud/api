"use strict";
// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file admin/v1/payment.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentServiceAddCouponToCustomerResponse = exports.PaymentServiceAddCouponToCustomerRequest = exports.PaymentServiceListCouponsResponse = exports.PaymentServiceListCouponsRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const payment_pb_js_1 = require("../../api/v1/payment_pb.js");
/**
 * @generated from message admin.v1.PaymentServiceListCouponsRequest
 */
class PaymentServiceListCouponsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceListCouponsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceListCouponsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceListCouponsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceListCouponsRequest, a, b);
    }
}
exports.PaymentServiceListCouponsRequest = PaymentServiceListCouponsRequest;
PaymentServiceListCouponsRequest.runtime = protobuf_1.proto3;
PaymentServiceListCouponsRequest.typeName = "admin.v1.PaymentServiceListCouponsRequest";
PaymentServiceListCouponsRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * @generated from message admin.v1.PaymentServiceListCouponsResponse
 */
class PaymentServiceListCouponsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated api.v1.Coupon coupons = 1;
         */
        this.coupons = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceListCouponsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceListCouponsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceListCouponsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceListCouponsResponse, a, b);
    }
}
exports.PaymentServiceListCouponsResponse = PaymentServiceListCouponsResponse;
PaymentServiceListCouponsResponse.runtime = protobuf_1.proto3;
PaymentServiceListCouponsResponse.typeName = "admin.v1.PaymentServiceListCouponsResponse";
PaymentServiceListCouponsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "coupons", kind: "message", T: payment_pb_js_1.Coupon, repeated: true },
]);
/**
 * @generated from message admin.v1.PaymentServiceAddCouponToCustomerRequest
 */
class PaymentServiceAddCouponToCustomerRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string coupon_id = 2;
         */
        this.couponId = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceAddCouponToCustomerRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceAddCouponToCustomerRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceAddCouponToCustomerRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceAddCouponToCustomerRequest, a, b);
    }
}
exports.PaymentServiceAddCouponToCustomerRequest = PaymentServiceAddCouponToCustomerRequest;
PaymentServiceAddCouponToCustomerRequest.runtime = protobuf_1.proto3;
PaymentServiceAddCouponToCustomerRequest.typeName = "admin.v1.PaymentServiceAddCouponToCustomerRequest";
PaymentServiceAddCouponToCustomerRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "customer", kind: "message", T: payment_pb_js_1.PaymentCustomer },
    { no: 2, name: "coupon_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message admin.v1.PaymentServiceAddCouponToCustomerResponse
 */
class PaymentServiceAddCouponToCustomerResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentServiceAddCouponToCustomerResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentServiceAddCouponToCustomerResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentServiceAddCouponToCustomerResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentServiceAddCouponToCustomerResponse, a, b);
    }
}
exports.PaymentServiceAddCouponToCustomerResponse = PaymentServiceAddCouponToCustomerResponse;
PaymentServiceAddCouponToCustomerResponse.runtime = protobuf_1.proto3;
PaymentServiceAddCouponToCustomerResponse.typeName = "admin.v1.PaymentServiceAddCouponToCustomerResponse";
PaymentServiceAddCouponToCustomerResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "customer", kind: "message", T: payment_pb_js_1.PaymentCustomer },
]);
