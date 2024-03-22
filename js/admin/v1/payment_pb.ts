// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file admin/v1/payment.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coupon, PaymentCustomer } from "../../api/v1/payment_pb.js";

/**
 * PaymentServiceListCouponsRequest is the request payload for the coupons list request
 *
 * @generated from message admin.v1.PaymentServiceListCouponsRequest
 */
export class PaymentServiceListCouponsRequest extends Message<PaymentServiceListCouponsRequest> {
  constructor(data?: PartialMessage<PaymentServiceListCouponsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.PaymentServiceListCouponsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceListCouponsRequest {
    return new PaymentServiceListCouponsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceListCouponsRequest {
    return new PaymentServiceListCouponsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceListCouponsRequest {
    return new PaymentServiceListCouponsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PaymentServiceListCouponsRequest | PlainMessage<PaymentServiceListCouponsRequest> | undefined, b: PaymentServiceListCouponsRequest | PlainMessage<PaymentServiceListCouponsRequest> | undefined): boolean {
    return proto3.util.equals(PaymentServiceListCouponsRequest, a, b);
  }
}

/**
 * PaymentServiceListCouponsResponse is the response payload for the coupons list request
 *
 * @generated from message admin.v1.PaymentServiceListCouponsResponse
 */
export class PaymentServiceListCouponsResponse extends Message<PaymentServiceListCouponsResponse> {
  /**
   * Coupons is the list of all coupons
   *
   * @generated from field: repeated api.v1.Coupon coupons = 1;
   */
  coupons: Coupon[] = [];

  constructor(data?: PartialMessage<PaymentServiceListCouponsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.PaymentServiceListCouponsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "coupons", kind: "message", T: Coupon, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceListCouponsResponse {
    return new PaymentServiceListCouponsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceListCouponsResponse {
    return new PaymentServiceListCouponsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceListCouponsResponse {
    return new PaymentServiceListCouponsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PaymentServiceListCouponsResponse | PlainMessage<PaymentServiceListCouponsResponse> | undefined, b: PaymentServiceListCouponsResponse | PlainMessage<PaymentServiceListCouponsResponse> | undefined): boolean {
    return proto3.util.equals(PaymentServiceListCouponsResponse, a, b);
  }
}

/**
 * PaymentServiceAddCouponToCustomerRequest is the request payload for the coupons add to customer request
 *
 * @generated from message admin.v1.PaymentServiceAddCouponToCustomerRequest
 */
export class PaymentServiceAddCouponToCustomerRequest extends Message<PaymentServiceAddCouponToCustomerRequest> {
  /**
   * Customer is the customer
   *
   * @generated from field: api.v1.PaymentCustomer customer = 1;
   */
  customer?: PaymentCustomer;

  /**
   * CouponId is the id of the coupon which should be granted to the customer
   *
   * @generated from field: string coupon_id = 2;
   */
  couponId = "";

  constructor(data?: PartialMessage<PaymentServiceAddCouponToCustomerRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.PaymentServiceAddCouponToCustomerRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "customer", kind: "message", T: PaymentCustomer },
    { no: 2, name: "coupon_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceAddCouponToCustomerRequest {
    return new PaymentServiceAddCouponToCustomerRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceAddCouponToCustomerRequest {
    return new PaymentServiceAddCouponToCustomerRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceAddCouponToCustomerRequest {
    return new PaymentServiceAddCouponToCustomerRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PaymentServiceAddCouponToCustomerRequest | PlainMessage<PaymentServiceAddCouponToCustomerRequest> | undefined, b: PaymentServiceAddCouponToCustomerRequest | PlainMessage<PaymentServiceAddCouponToCustomerRequest> | undefined): boolean {
    return proto3.util.equals(PaymentServiceAddCouponToCustomerRequest, a, b);
  }
}

/**
 * PaymentServiceAddCouponToCustomerResponse is the response payload for the coupons add to customer request
 *
 * @generated from message admin.v1.PaymentServiceAddCouponToCustomerResponse
 */
export class PaymentServiceAddCouponToCustomerResponse extends Message<PaymentServiceAddCouponToCustomerResponse> {
  /**
   * Customer is the customer
   *
   * @generated from field: api.v1.PaymentCustomer customer = 1;
   */
  customer?: PaymentCustomer;

  constructor(data?: PartialMessage<PaymentServiceAddCouponToCustomerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.PaymentServiceAddCouponToCustomerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "customer", kind: "message", T: PaymentCustomer },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceAddCouponToCustomerResponse {
    return new PaymentServiceAddCouponToCustomerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceAddCouponToCustomerResponse {
    return new PaymentServiceAddCouponToCustomerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceAddCouponToCustomerResponse {
    return new PaymentServiceAddCouponToCustomerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PaymentServiceAddCouponToCustomerResponse | PlainMessage<PaymentServiceAddCouponToCustomerResponse> | undefined, b: PaymentServiceAddCouponToCustomerResponse | PlainMessage<PaymentServiceAddCouponToCustomerResponse> | undefined): boolean {
    return proto3.util.equals(PaymentServiceAddCouponToCustomerResponse, a, b);
  }
}

/**
 * PaymentServiceAddBalanceToCustomerRequest is the request payload for the balance to customer request
 *
 * @generated from message admin.v1.PaymentServiceAddBalanceToCustomerRequest
 */
export class PaymentServiceAddBalanceToCustomerRequest extends Message<PaymentServiceAddBalanceToCustomerRequest> {
  /**
   * Customer is the customer
   *
   * @generated from field: api.v1.PaymentCustomer customer = 1;
   */
  customer?: PaymentCustomer;

  /**
   * BalanceToAdd is the balance which should be added to the customer
   *
   * @generated from field: int64 balance_to_add = 2;
   */
  balanceToAdd = protoInt64.zero;

  constructor(data?: PartialMessage<PaymentServiceAddBalanceToCustomerRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.PaymentServiceAddBalanceToCustomerRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "customer", kind: "message", T: PaymentCustomer },
    { no: 2, name: "balance_to_add", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceAddBalanceToCustomerRequest {
    return new PaymentServiceAddBalanceToCustomerRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceAddBalanceToCustomerRequest {
    return new PaymentServiceAddBalanceToCustomerRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceAddBalanceToCustomerRequest {
    return new PaymentServiceAddBalanceToCustomerRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PaymentServiceAddBalanceToCustomerRequest | PlainMessage<PaymentServiceAddBalanceToCustomerRequest> | undefined, b: PaymentServiceAddBalanceToCustomerRequest | PlainMessage<PaymentServiceAddBalanceToCustomerRequest> | undefined): boolean {
    return proto3.util.equals(PaymentServiceAddBalanceToCustomerRequest, a, b);
  }
}

/**
 * PaymentServiceAddBalanceToCustomerResponse is the response payload for the balance to customer request
 *
 * @generated from message admin.v1.PaymentServiceAddBalanceToCustomerResponse
 */
export class PaymentServiceAddBalanceToCustomerResponse extends Message<PaymentServiceAddBalanceToCustomerResponse> {
  /**
   * Customer is the customer
   *
   * @generated from field: api.v1.PaymentCustomer customer = 1;
   */
  customer?: PaymentCustomer;

  constructor(data?: PartialMessage<PaymentServiceAddBalanceToCustomerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "admin.v1.PaymentServiceAddBalanceToCustomerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "customer", kind: "message", T: PaymentCustomer },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceAddBalanceToCustomerResponse {
    return new PaymentServiceAddBalanceToCustomerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceAddBalanceToCustomerResponse {
    return new PaymentServiceAddBalanceToCustomerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceAddBalanceToCustomerResponse {
    return new PaymentServiceAddBalanceToCustomerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PaymentServiceAddBalanceToCustomerResponse | PlainMessage<PaymentServiceAddBalanceToCustomerResponse> | undefined, b: PaymentServiceAddBalanceToCustomerResponse | PlainMessage<PaymentServiceAddBalanceToCustomerResponse> | undefined): boolean {
    return proto3.util.equals(PaymentServiceAddBalanceToCustomerResponse, a, b);
  }
}

