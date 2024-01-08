// @generated by protoc-gen-connect-es v1.2.0 with parameter "target=ts"
// @generated from file admin/v1/payment.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { PaymentServiceAddBalanceToCustomerRequest, PaymentServiceAddBalanceToCustomerResponse, PaymentServiceAddCouponToCustomerRequest, PaymentServiceAddCouponToCustomerResponse, PaymentServiceListCouponsRequest, PaymentServiceListCouponsResponse } from "./payment_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * PaymentService serves payment related functions
 *
 * @generated from service admin.v1.PaymentService
 */
export const PaymentService = {
  typeName: "admin.v1.PaymentService",
  methods: {
    /**
     * ListCoupons list all available coupons
     *
     * @generated from rpc admin.v1.PaymentService.ListCoupons
     */
    listCoupons: {
      name: "ListCoupons",
      I: PaymentServiceListCouponsRequest,
      O: PaymentServiceListCouponsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * AddCouponToCustomer adds a coupon to a customer
     *
     * @generated from rpc admin.v1.PaymentService.AddCouponToCustomer
     */
    addCouponToCustomer: {
      name: "AddCouponToCustomer",
      I: PaymentServiceAddCouponToCustomerRequest,
      O: PaymentServiceAddCouponToCustomerResponse,
      kind: MethodKind.Unary,
    },
    /**
     * AddBalanceToCustomer adds balance to a customer
     *
     * @generated from rpc admin.v1.PaymentService.AddBalanceToCustomer
     */
    addBalanceToCustomer: {
      name: "AddBalanceToCustomer",
      I: PaymentServiceAddBalanceToCustomerRequest,
      O: PaymentServiceAddBalanceToCustomerResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

