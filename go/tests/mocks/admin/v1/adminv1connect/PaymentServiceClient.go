// Code generated by mockery v2.30.1. DO NOT EDIT.

package adminv1connect

import (
	connect "github.com/bufbuild/connect-go"
	adminv1 "github.com/metal-stack-cloud/api/go/admin/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// PaymentServiceClient is an autogenerated mock type for the PaymentServiceClient type
type PaymentServiceClient struct {
	mock.Mock
}

// AddCouponToCustomer provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceClient) AddCouponToCustomer(_a0 context.Context, _a1 *connect.Request[adminv1.PaymentServiceAddCouponToCustomerRequest]) (*connect.Response[adminv1.PaymentServiceAddCouponToCustomerResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[adminv1.PaymentServiceAddCouponToCustomerResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.PaymentServiceAddCouponToCustomerRequest]) (*connect.Response[adminv1.PaymentServiceAddCouponToCustomerResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.PaymentServiceAddCouponToCustomerRequest]) *connect.Response[adminv1.PaymentServiceAddCouponToCustomerResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[adminv1.PaymentServiceAddCouponToCustomerResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[adminv1.PaymentServiceAddCouponToCustomerRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ListCoupons provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceClient) ListCoupons(_a0 context.Context, _a1 *connect.Request[adminv1.PaymentServiceListCouponsRequest]) (*connect.Response[adminv1.PaymentServiceListCouponsResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[adminv1.PaymentServiceListCouponsResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.PaymentServiceListCouponsRequest]) (*connect.Response[adminv1.PaymentServiceListCouponsResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.PaymentServiceListCouponsRequest]) *connect.Response[adminv1.PaymentServiceListCouponsResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[adminv1.PaymentServiceListCouponsResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[adminv1.PaymentServiceListCouponsRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NewPaymentServiceClient creates a new instance of PaymentServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewPaymentServiceClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *PaymentServiceClient {
	mock := &PaymentServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
