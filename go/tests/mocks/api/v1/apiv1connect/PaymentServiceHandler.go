// Code generated by mockery v2.22.1. DO NOT EDIT.

package apiv1connect

import (
	connect "github.com/bufbuild/connect-go"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// PaymentServiceHandler is an autogenerated mock type for the PaymentServiceHandler type
type PaymentServiceHandler struct {
	mock.Mock
}

// CheckAdmitted provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceHandler) CheckAdmitted(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceCheckAdmittedRequest]) (*connect.Response[apiv1.PaymentServiceCheckAdmittedResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.PaymentServiceCheckAdmittedResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceCheckAdmittedRequest]) (*connect.Response[apiv1.PaymentServiceCheckAdmittedResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceCheckAdmittedRequest]) *connect.Response[apiv1.PaymentServiceCheckAdmittedResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.PaymentServiceCheckAdmittedResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.PaymentServiceCheckAdmittedRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CheckIfCustomerExists provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceHandler) CheckIfCustomerExists(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceCheckIfCustomerExistsRequest]) (*connect.Response[apiv1.PaymentServiceCheckIfCustomerExistsResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.PaymentServiceCheckIfCustomerExistsResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceCheckIfCustomerExistsRequest]) (*connect.Response[apiv1.PaymentServiceCheckIfCustomerExistsResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceCheckIfCustomerExistsRequest]) *connect.Response[apiv1.PaymentServiceCheckIfCustomerExistsResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.PaymentServiceCheckIfCustomerExistsResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.PaymentServiceCheckIfCustomerExistsRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CreateOrUpdateCustomer provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceHandler) CreateOrUpdateCustomer(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceCreateOrUpdateCustomerRequest]) (*connect.Response[apiv1.PaymentServiceCreateOrUpdateCustomerResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.PaymentServiceCreateOrUpdateCustomerResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceCreateOrUpdateCustomerRequest]) (*connect.Response[apiv1.PaymentServiceCreateOrUpdateCustomerResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceCreateOrUpdateCustomerRequest]) *connect.Response[apiv1.PaymentServiceCreateOrUpdateCustomerResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.PaymentServiceCreateOrUpdateCustomerResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.PaymentServiceCreateOrUpdateCustomerRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// DeletePaymentMethod provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceHandler) DeletePaymentMethod(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceDeletePaymentMethodRequest]) (*connect.Response[apiv1.PaymentServiceDeletePaymentMethodResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.PaymentServiceDeletePaymentMethodResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceDeletePaymentMethodRequest]) (*connect.Response[apiv1.PaymentServiceDeletePaymentMethodResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceDeletePaymentMethodRequest]) *connect.Response[apiv1.PaymentServiceDeletePaymentMethodResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.PaymentServiceDeletePaymentMethodResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.PaymentServiceDeletePaymentMethodRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetCustomer provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceHandler) GetCustomer(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceGetCustomerRequest]) (*connect.Response[apiv1.PaymentServiceGetCustomerResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.PaymentServiceGetCustomerResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetCustomerRequest]) (*connect.Response[apiv1.PaymentServiceGetCustomerResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetCustomerRequest]) *connect.Response[apiv1.PaymentServiceGetCustomerResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.PaymentServiceGetCustomerResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetCustomerRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetCustomerWithLogin provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceHandler) GetCustomerWithLogin(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceGetCustomerWithLoginRequest]) (*connect.Response[apiv1.PaymentServiceGetCustomerWithLoginResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.PaymentServiceGetCustomerWithLoginResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetCustomerWithLoginRequest]) (*connect.Response[apiv1.PaymentServiceGetCustomerWithLoginResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetCustomerWithLoginRequest]) *connect.Response[apiv1.PaymentServiceGetCustomerWithLoginResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.PaymentServiceGetCustomerWithLoginResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetCustomerWithLoginRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetDefaultPrices provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceHandler) GetDefaultPrices(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceGetDefaultPricesRequest]) (*connect.Response[apiv1.PaymentServiceGetDefaultPricesResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.PaymentServiceGetDefaultPricesResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetDefaultPricesRequest]) (*connect.Response[apiv1.PaymentServiceGetDefaultPricesResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetDefaultPricesRequest]) *connect.Response[apiv1.PaymentServiceGetDefaultPricesResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.PaymentServiceGetDefaultPricesResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetDefaultPricesRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetInvoices provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceHandler) GetInvoices(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceGetInvoicesRequest]) (*connect.Response[apiv1.PaymentServiceGetInvoicesResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.PaymentServiceGetInvoicesResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetInvoicesRequest]) (*connect.Response[apiv1.PaymentServiceGetInvoicesResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetInvoicesRequest]) *connect.Response[apiv1.PaymentServiceGetInvoicesResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.PaymentServiceGetInvoicesResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetInvoicesRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetSubscriptionUsage provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceHandler) GetSubscriptionUsage(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceGetSubscriptionUsageRequest]) (*connect.Response[apiv1.PaymentServiceGetSubscriptionUsageResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.PaymentServiceGetSubscriptionUsageResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetSubscriptionUsageRequest]) (*connect.Response[apiv1.PaymentServiceGetSubscriptionUsageResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetSubscriptionUsageRequest]) *connect.Response[apiv1.PaymentServiceGetSubscriptionUsageResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.PaymentServiceGetSubscriptionUsageResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetSubscriptionUsageRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// HasPaymentMethod provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceHandler) HasPaymentMethod(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceHasPaymentMethodRequest]) (*connect.Response[apiv1.PaymentServiceHasPaymentMethodResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.PaymentServiceHasPaymentMethodResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceHasPaymentMethodRequest]) (*connect.Response[apiv1.PaymentServiceHasPaymentMethodResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceHasPaymentMethodRequest]) *connect.Response[apiv1.PaymentServiceHasPaymentMethodResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.PaymentServiceHasPaymentMethodResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.PaymentServiceHasPaymentMethodRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// RequestAdmission provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceHandler) RequestAdmission(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceRequestAdmissionRequest]) (*connect.Response[apiv1.PaymentServiceRequestAdmissionResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.PaymentServiceRequestAdmissionResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceRequestAdmissionRequest]) (*connect.Response[apiv1.PaymentServiceRequestAdmissionResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceRequestAdmissionRequest]) *connect.Response[apiv1.PaymentServiceRequestAdmissionResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.PaymentServiceRequestAdmissionResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.PaymentServiceRequestAdmissionRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

type mockConstructorTestingTNewPaymentServiceHandler interface {
	mock.TestingT
	Cleanup(func())
}

// NewPaymentServiceHandler creates a new instance of PaymentServiceHandler. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
func NewPaymentServiceHandler(t mockConstructorTestingTNewPaymentServiceHandler) *PaymentServiceHandler {
	mock := &PaymentServiceHandler{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
