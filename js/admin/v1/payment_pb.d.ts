import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coupon, PaymentCustomer } from "../../api/v1/payment_pb.js";
/**
 * PaymentServiceListCouponsRequest is the request payload for the coupons list request
 *
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
 * PaymentServiceListCouponsResponse is the response payload for the coupons list request
 *
 * @generated from message admin.v1.PaymentServiceListCouponsResponse
 */
export declare class PaymentServiceListCouponsResponse extends Message<PaymentServiceListCouponsResponse> {
    /**
     * Coupons is the list of all coupons
     *
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
 * PaymentServiceAddBalanceToCustomerRequest is the request payload for the balance to customer request
 *
 * @generated from message admin.v1.PaymentServiceAddBalanceToCustomerRequest
 */
export declare class PaymentServiceAddBalanceToCustomerRequest extends Message<PaymentServiceAddBalanceToCustomerRequest> {
    /**
     * Tenant is the tenant
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * BalanceToAdd is the balance in euro cent which should be added to the customer
     *
     * @generated from field: uint64 balance_to_add = 2;
     */
    balanceToAdd: bigint;
    constructor(data?: PartialMessage<PaymentServiceAddBalanceToCustomerRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.PaymentServiceAddBalanceToCustomerRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceAddBalanceToCustomerRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceAddBalanceToCustomerRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceAddBalanceToCustomerRequest;
    static equals(a: PaymentServiceAddBalanceToCustomerRequest | PlainMessage<PaymentServiceAddBalanceToCustomerRequest> | undefined, b: PaymentServiceAddBalanceToCustomerRequest | PlainMessage<PaymentServiceAddBalanceToCustomerRequest> | undefined): boolean;
}
/**
 * PaymentServiceAddBalanceToCustomerResponse is the response payload for the balance to customer request
 *
 * @generated from message admin.v1.PaymentServiceAddBalanceToCustomerResponse
 */
export declare class PaymentServiceAddBalanceToCustomerResponse extends Message<PaymentServiceAddBalanceToCustomerResponse> {
    /**
     * Customer is the customer
     *
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
    constructor(data?: PartialMessage<PaymentServiceAddBalanceToCustomerResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "admin.v1.PaymentServiceAddBalanceToCustomerResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentServiceAddBalanceToCustomerResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentServiceAddBalanceToCustomerResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentServiceAddBalanceToCustomerResponse;
    static equals(a: PaymentServiceAddBalanceToCustomerResponse | PlainMessage<PaymentServiceAddBalanceToCustomerResponse> | undefined, b: PaymentServiceAddBalanceToCustomerResponse | PlainMessage<PaymentServiceAddBalanceToCustomerResponse> | undefined): boolean;
}
