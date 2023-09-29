// @generated by protoc-gen-connect-es v0.13.2 with parameter "target=ts"
// @generated from file admin/v1/payment.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { PaymentServiceAddCouponToCustomerRequest, PaymentServiceAddCouponToCustomerResponse, PaymentServiceDeleteTestUserRequest, PaymentServiceDeleteTestUserResponse, PaymentServiceListCouponsRequest, PaymentServiceListCouponsResponse } from "./payment_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service admin.v1.PaymentService
 */
export const PaymentService = {
  typeName: "admin.v1.PaymentService",
  methods: {
    /**
     * @generated from rpc admin.v1.PaymentService.ListCoupons
     */
    listCoupons: {
      name: "ListCoupons",
      I: PaymentServiceListCouponsRequest,
      O: PaymentServiceListCouponsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc admin.v1.PaymentService.AddCouponToCustomer
     */
    addCouponToCustomer: {
      name: "AddCouponToCustomer",
      I: PaymentServiceAddCouponToCustomerRequest,
      O: PaymentServiceAddCouponToCustomerResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc admin.v1.PaymentService.DeleteTestUser
     */
    deleteTestUser: {
      name: "DeleteTestUser",
      I: PaymentServiceDeleteTestUserRequest,
      O: PaymentServiceDeleteTestUserResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

