// Code generated by mockery v2.29.0. DO NOT EDIT.

package apiv1connect

import (
	connect "github.com/bufbuild/connect-go"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// HealthServiceHandler is an autogenerated mock type for the HealthServiceHandler type
type HealthServiceHandler struct {
	mock.Mock
}

// Get provides a mock function with given fields: _a0, _a1
func (_m *HealthServiceHandler) Get(_a0 context.Context, _a1 *connect.Request[apiv1.HealthServiceGetRequest]) (*connect.Response[apiv1.HealthServiceGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.HealthServiceGetResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.HealthServiceGetRequest]) (*connect.Response[apiv1.HealthServiceGetResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.HealthServiceGetRequest]) *connect.Response[apiv1.HealthServiceGetResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.HealthServiceGetResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.HealthServiceGetRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

type mockConstructorTestingTNewHealthServiceHandler interface {
	mock.TestingT
	Cleanup(func())
}

// NewHealthServiceHandler creates a new instance of HealthServiceHandler. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
func NewHealthServiceHandler(t mockConstructorTestingTNewHealthServiceHandler) *HealthServiceHandler {
	mock := &HealthServiceHandler{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
