// Code generated by mockery v2.30.1. DO NOT EDIT.

package apiv1connect

import (
	connect "github.com/bufbuild/connect-go"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// IPServiceHandler is an autogenerated mock type for the IPServiceHandler type
type IPServiceHandler struct {
	mock.Mock
}

// Allocate provides a mock function with given fields: _a0, _a1
func (_m *IPServiceHandler) Allocate(_a0 context.Context, _a1 *connect.Request[apiv1.IPServiceAllocateRequest]) (*connect.Response[apiv1.IPServiceAllocateResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.IPServiceAllocateResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.IPServiceAllocateRequest]) (*connect.Response[apiv1.IPServiceAllocateResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.IPServiceAllocateRequest]) *connect.Response[apiv1.IPServiceAllocateResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.IPServiceAllocateResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.IPServiceAllocateRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Delete provides a mock function with given fields: _a0, _a1
func (_m *IPServiceHandler) Delete(_a0 context.Context, _a1 *connect.Request[apiv1.IPServiceDeleteRequest]) (*connect.Response[apiv1.IPServiceDeleteResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.IPServiceDeleteResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.IPServiceDeleteRequest]) (*connect.Response[apiv1.IPServiceDeleteResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.IPServiceDeleteRequest]) *connect.Response[apiv1.IPServiceDeleteResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.IPServiceDeleteResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.IPServiceDeleteRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Get provides a mock function with given fields: _a0, _a1
func (_m *IPServiceHandler) Get(_a0 context.Context, _a1 *connect.Request[apiv1.IPServiceGetRequest]) (*connect.Response[apiv1.IPServiceGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.IPServiceGetResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.IPServiceGetRequest]) (*connect.Response[apiv1.IPServiceGetResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.IPServiceGetRequest]) *connect.Response[apiv1.IPServiceGetResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.IPServiceGetResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.IPServiceGetRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// List provides a mock function with given fields: _a0, _a1
func (_m *IPServiceHandler) List(_a0 context.Context, _a1 *connect.Request[apiv1.IPServiceListRequest]) (*connect.Response[apiv1.IPServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.IPServiceListResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.IPServiceListRequest]) (*connect.Response[apiv1.IPServiceListResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.IPServiceListRequest]) *connect.Response[apiv1.IPServiceListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.IPServiceListResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.IPServiceListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Update provides a mock function with given fields: _a0, _a1
func (_m *IPServiceHandler) Update(_a0 context.Context, _a1 *connect.Request[apiv1.IPServiceUpdateRequest]) (*connect.Response[apiv1.IPServiceUpdateResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.IPServiceUpdateResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.IPServiceUpdateRequest]) (*connect.Response[apiv1.IPServiceUpdateResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.IPServiceUpdateRequest]) *connect.Response[apiv1.IPServiceUpdateResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.IPServiceUpdateResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.IPServiceUpdateRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NewIPServiceHandler creates a new instance of IPServiceHandler. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewIPServiceHandler(t interface {
	mock.TestingT
	Cleanup(func())
}) *IPServiceHandler {
	mock := &IPServiceHandler{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
