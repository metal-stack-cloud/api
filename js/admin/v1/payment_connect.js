"use strict";
// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file admin/v1/payment.proto (package admin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const payment_pb_js_1 = require("./payment_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service admin.v1.PaymentService
 */
exports.PaymentService = {
    typeName: "admin.v1.PaymentService",
    methods: {
        /**
         * @generated from rpc admin.v1.PaymentService.ListCoupons
         */
        listCoupons: {
            name: "ListCoupons",
            I: payment_pb_js_1.PaymentServiceListCouponsRequest,
            O: payment_pb_js_1.PaymentServiceListCouponsResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc admin.v1.PaymentService.AddCouponToCustomer
         */
        addCouponToCustomer: {
            name: "AddCouponToCustomer",
            I: payment_pb_js_1.PaymentServiceAddCouponToCustomerRequest,
            O: payment_pb_js_1.PaymentServiceAddCouponToCustomerResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
