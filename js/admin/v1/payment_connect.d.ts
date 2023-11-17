import { PaymentServiceAddBalanceToCustomerRequest, PaymentServiceAddBalanceToCustomerResponse, PaymentServiceAddCouponToCustomerRequest, PaymentServiceAddCouponToCustomerResponse, PaymentServiceListCouponsRequest, PaymentServiceListCouponsResponse } from "./payment_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service admin.v1.PaymentService
 */
export declare const PaymentService: {
    readonly typeName: "admin.v1.PaymentService";
    readonly methods: {
        /**
         * @generated from rpc admin.v1.PaymentService.ListCoupons
         */
        readonly listCoupons: {
            readonly name: "ListCoupons";
            readonly I: typeof PaymentServiceListCouponsRequest;
            readonly O: typeof PaymentServiceListCouponsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc admin.v1.PaymentService.AddCouponToCustomer
         */
        readonly addCouponToCustomer: {
            readonly name: "AddCouponToCustomer";
            readonly I: typeof PaymentServiceAddCouponToCustomerRequest;
            readonly O: typeof PaymentServiceAddCouponToCustomerResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc admin.v1.PaymentService.AddBalanceToCustomer
         */
        readonly addBalanceToCustomer: {
            readonly name: "AddBalanceToCustomer";
            readonly I: typeof PaymentServiceAddBalanceToCustomerRequest;
            readonly O: typeof PaymentServiceAddBalanceToCustomerResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
