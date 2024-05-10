// Code generated by mockery v2.43.0. DO NOT EDIT.

package apiv1connect

import (
	connect "connectrpc.com/connect"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// PaymentServiceClient is an autogenerated mock type for the PaymentServiceClient type
type PaymentServiceClient struct {
	mock.Mock
}

// CheckAdmitted provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceClient) CheckAdmitted(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceCheckAdmittedRequest]) (*connect.Response[apiv1.PaymentServiceCheckAdmittedResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for CheckAdmitted")
	}

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
func (_m *PaymentServiceClient) CheckIfCustomerExists(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceCheckIfCustomerExistsRequest]) (*connect.Response[apiv1.PaymentServiceCheckIfCustomerExistsResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for CheckIfCustomerExists")
	}

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
func (_m *PaymentServiceClient) CreateOrUpdateCustomer(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceCreateOrUpdateCustomerRequest]) (*connect.Response[apiv1.PaymentServiceCreateOrUpdateCustomerResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for CreateOrUpdateCustomer")
	}

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
func (_m *PaymentServiceClient) DeletePaymentMethod(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceDeletePaymentMethodRequest]) (*connect.Response[apiv1.PaymentServiceDeletePaymentMethodResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for DeletePaymentMethod")
	}

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
func (_m *PaymentServiceClient) GetCustomer(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceGetCustomerRequest]) (*connect.Response[apiv1.PaymentServiceGetCustomerResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for GetCustomer")
	}

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
func (_m *PaymentServiceClient) GetCustomerWithLogin(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceGetCustomerWithLoginRequest]) (*connect.Response[apiv1.PaymentServiceGetCustomerWithLoginResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for GetCustomerWithLogin")
	}

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
func (_m *PaymentServiceClient) GetDefaultPrices(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceGetDefaultPricesRequest]) (*connect.Response[apiv1.PaymentServiceGetDefaultPricesResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for GetDefaultPrices")
	}

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
func (_m *PaymentServiceClient) GetInvoices(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceGetInvoicesRequest]) (*connect.Response[apiv1.PaymentServiceGetInvoicesResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for GetInvoices")
	}

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

// GetOnboarded provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceClient) GetOnboarded(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceGetOnboardedRequest]) (*connect.Response[apiv1.PaymentServiceGetOnboardedResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for GetOnboarded")
	}

	var r0 *connect.Response[apiv1.PaymentServiceGetOnboardedResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetOnboardedRequest]) (*connect.Response[apiv1.PaymentServiceGetOnboardedResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetOnboardedRequest]) *connect.Response[apiv1.PaymentServiceGetOnboardedResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.PaymentServiceGetOnboardedResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.PaymentServiceGetOnboardedRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetSubscriptionUsage provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceClient) GetSubscriptionUsage(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceGetSubscriptionUsageRequest]) (*connect.Response[apiv1.PaymentServiceGetSubscriptionUsageResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for GetSubscriptionUsage")
	}

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

// HasChargeableResources provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceClient) HasChargeableResources(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceHasChargeableResourcesRequest]) (*connect.Response[apiv1.PaymentServiceHasChargeableResourcesResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for HasChargeableResources")
	}

	var r0 *connect.Response[apiv1.PaymentServiceHasChargeableResourcesResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceHasChargeableResourcesRequest]) (*connect.Response[apiv1.PaymentServiceHasChargeableResourcesResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceHasChargeableResourcesRequest]) *connect.Response[apiv1.PaymentServiceHasChargeableResourcesResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.PaymentServiceHasChargeableResourcesResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.PaymentServiceHasChargeableResourcesRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// HasPaymentMethod provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceClient) HasPaymentMethod(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceHasPaymentMethodRequest]) (*connect.Response[apiv1.PaymentServiceHasPaymentMethodResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for HasPaymentMethod")
	}

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
func (_m *PaymentServiceClient) RequestAdmission(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceRequestAdmissionRequest]) (*connect.Response[apiv1.PaymentServiceRequestAdmissionResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for RequestAdmission")
	}

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

// SetOnboarded provides a mock function with given fields: _a0, _a1
func (_m *PaymentServiceClient) SetOnboarded(_a0 context.Context, _a1 *connect.Request[apiv1.PaymentServiceSetOnboardedRequest]) (*connect.Response[apiv1.PaymentServiceSetOnboardedResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for SetOnboarded")
	}

	var r0 *connect.Response[apiv1.PaymentServiceSetOnboardedResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceSetOnboardedRequest]) (*connect.Response[apiv1.PaymentServiceSetOnboardedResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.PaymentServiceSetOnboardedRequest]) *connect.Response[apiv1.PaymentServiceSetOnboardedResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.PaymentServiceSetOnboardedResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.PaymentServiceSetOnboardedRequest]) error); ok {
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
