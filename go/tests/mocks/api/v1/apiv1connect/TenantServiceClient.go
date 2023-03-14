// Code generated by mockery v2.22.1. DO NOT EDIT.

package apiv1connect

import (
	connect "github.com/bufbuild/connect-go"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// TenantServiceClient is an autogenerated mock type for the TenantServiceClient type
type TenantServiceClient struct {
	mock.Mock
}

// CheckAdmitted provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) CheckAdmitted(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceCheckAdmittedRequest]) (*connect.Response[apiv1.TenantServiceCheckAdmittedResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.TenantServiceCheckAdmittedResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceCheckAdmittedRequest]) (*connect.Response[apiv1.TenantServiceCheckAdmittedResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceCheckAdmittedRequest]) *connect.Response[apiv1.TenantServiceCheckAdmittedResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceCheckAdmittedResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceCheckAdmittedRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Create provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) Create(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceCreateRequest]) (*connect.Response[apiv1.TenantServiceCreateResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.TenantServiceCreateResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceCreateRequest]) (*connect.Response[apiv1.TenantServiceCreateResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceCreateRequest]) *connect.Response[apiv1.TenantServiceCreateResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceCreateResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceCreateRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CreateOrUpdate provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) CreateOrUpdate(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceCreateOrUpdateRequest]) (*connect.Response[apiv1.TenantServiceCreateOrUpdateResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.TenantServiceCreateOrUpdateResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceCreateOrUpdateRequest]) (*connect.Response[apiv1.TenantServiceCreateOrUpdateResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceCreateOrUpdateRequest]) *connect.Response[apiv1.TenantServiceCreateOrUpdateResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceCreateOrUpdateResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceCreateOrUpdateRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Delete provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) Delete(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceDeleteRequest]) (*connect.Response[apiv1.TenantServiceDeleteResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.TenantServiceDeleteResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceDeleteRequest]) (*connect.Response[apiv1.TenantServiceDeleteResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceDeleteRequest]) *connect.Response[apiv1.TenantServiceDeleteResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceDeleteResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceDeleteRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Get provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) Get(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceGetRequest]) (*connect.Response[apiv1.TenantServiceGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.TenantServiceGetResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceGetRequest]) (*connect.Response[apiv1.TenantServiceGetResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceGetRequest]) *connect.Response[apiv1.TenantServiceGetResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceGetResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceGetRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// RequestAdmission provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) RequestAdmission(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceRequestAdmissionRequest]) (*connect.Response[apiv1.TenantServiceRequestAdmissionResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.TenantServiceRequestAdmissionResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceRequestAdmissionRequest]) (*connect.Response[apiv1.TenantServiceRequestAdmissionResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceRequestAdmissionRequest]) *connect.Response[apiv1.TenantServiceRequestAdmissionResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceRequestAdmissionResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceRequestAdmissionRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Update provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) Update(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceUpdateRequest]) (*connect.Response[apiv1.TenantServiceUpdateResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.TenantServiceUpdateResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceUpdateRequest]) (*connect.Response[apiv1.TenantServiceUpdateResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceUpdateRequest]) *connect.Response[apiv1.TenantServiceUpdateResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceUpdateResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceUpdateRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

type mockConstructorTestingTNewTenantServiceClient interface {
	mock.TestingT
	Cleanup(func())
}

// NewTenantServiceClient creates a new instance of TenantServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
func NewTenantServiceClient(t mockConstructorTestingTNewTenantServiceClient) *TenantServiceClient {
	mock := &TenantServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
