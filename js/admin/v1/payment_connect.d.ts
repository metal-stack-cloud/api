import { PaymentServiceAddBalanceToCustomerRequest, PaymentServiceAddBalanceToCustomerResponse, PaymentServiceListCouponsRequest, PaymentServiceListCouponsResponse } from "./payment_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * PaymentService serves payment related functions
 *
 * @generated from service admin.v1.PaymentService
 */
export declare const PaymentService: {
    readonly typeName: "admin.v1.PaymentService";
    readonly methods: {
        /**
         * ListCoupons list all available coupons
         *
         * @generated from rpc admin.v1.PaymentService.ListCoupons
         */
        readonly listCoupons: {
            readonly name: "ListCoupons";
            readonly I: typeof PaymentServiceListCouponsRequest;
            readonly O: typeof PaymentServiceListCouponsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * AddBalanceToCustomer adds balance to a customer
         *
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
