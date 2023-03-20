import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coupon, PaymentCustomer } from "../../api/v1/payment_pb.js";
/**
 * @generated from message admin.v1.PaymentServiceListCouponsRequest
 */
export declare class PaymentServiceListCouponsRequest extends Message<PaymentServiceListCouponsRequest> {
    constructor(data?: PartialMessage<PaymentServiceListCouponsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.PaymentServiceListCouponsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceListCouponsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceListCouponsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceListCouponsRequest;
    static equals(a: PaymentServiceListCouponsRequest | PlainMessage<PaymentServiceListCouponsRequest> | undefined, b: PaymentServiceListCouponsRequest | PlainMessage<PaymentServiceListCouponsRequest> | undefined): boolean;
}
/**
 * @generated from message admin.v1.PaymentServiceListCouponsResponse
 */
export declare class PaymentServiceListCouponsResponse extends Message<PaymentServiceListCouponsResponse> {
    /**
     * @generated from field: repeated api.v1.Coupon coupons = 1;
     */
    coupons: Coupon[];
    constructor(data?: PartialMessage<PaymentServiceListCouponsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.PaymentServiceListCouponsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceListCouponsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceListCouponsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceListCouponsResponse;
    static equals(a: PaymentServiceListCouponsResponse | PlainMessage<PaymentServiceListCouponsResponse> | undefined, b: PaymentServiceListCouponsResponse | PlainMessage<PaymentServiceListCouponsResponse> | undefined): boolean;
}
/**
 * @generated from message admin.v1.PaymentServiceAddCouponToCustomerRequest
 */
export declare class PaymentServiceAddCouponToCustomerRequest extends Message<PaymentServiceAddCouponToCustomerRequest> {
    /**
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
    /**
     * @generated from field: string coupon_id = 2;
     */
    couponId: string;
    constructor(data?: PartialMessage<PaymentServiceAddCouponToCustomerRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.PaymentServiceAddCouponToCustomerRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceAddCouponToCustomerRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceAddCouponToCustomerRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceAddCouponToCustomerRequest;
    static equals(a: PaymentServiceAddCouponToCustomerRequest | PlainMessage<PaymentServiceAddCouponToCustomerRequest> | undefined, b: PaymentServiceAddCouponToCustomerRequest | PlainMessage<PaymentServiceAddCouponToCustomerRequest> | undefined): boolean;
}
/**
 * @generated from message admin.v1.PaymentServiceAddCouponToCustomerResponse
 */
export declare class PaymentServiceAddCouponToCustomerResponse extends Message<PaymentServiceAddCouponToCustomerResponse> {
    /**
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
    constructor(data?: PartialMessage<PaymentServiceAddCouponToCustomerResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.PaymentServiceAddCouponToCustomerResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceAddCouponToCustomerResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceAddCouponToCustomerResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceAddCouponToCustomerResponse;
    static equals(a: PaymentServiceAddCouponToCustomerResponse | PlainMessage<PaymentServiceAddCouponToCustomerResponse> | undefined, b: PaymentServiceAddCouponToCustomerResponse | PlainMessage<PaymentServiceAddCouponToCustomerResponse> | undefined): boolean;
}
