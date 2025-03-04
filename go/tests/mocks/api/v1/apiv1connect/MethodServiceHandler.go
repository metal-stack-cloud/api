// Code generated by mockery v2.53.0. DO NOT EDIT.

package apiv1connect

import (
	connect "connectrpc.com/connect"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// MethodServiceHandler is an autogenerated mock type for the MethodServiceHandler type
type MethodServiceHandler struct {
	mock.Mock
}

// List provides a mock function with given fields: _a0, _a1
func (_m *MethodServiceHandler) List(_a0 context.Context, _a1 *connect.Request[apiv1.MethodServiceListRequest]) (*connect.Response[apiv1.MethodServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for List")
	}

	var r0 *connect.Response[apiv1.MethodServiceListResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.MethodServiceListRequest]) (*connect.Response[apiv1.MethodServiceListResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.MethodServiceListRequest]) *connect.Response[apiv1.MethodServiceListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.MethodServiceListResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.MethodServiceListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// TokenScopedList provides a mock function with given fields: _a0, _a1
func (_m *MethodServiceHandler) TokenScopedList(_a0 context.Context, _a1 *connect.Request[apiv1.MethodServiceTokenScopedListRequest]) (*connect.Response[apiv1.MethodServiceTokenScopedListResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for TokenScopedList")
	}

	var r0 *connect.Response[apiv1.MethodServiceTokenScopedListResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.MethodServiceTokenScopedListRequest]) (*connect.Response[apiv1.MethodServiceTokenScopedListResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.MethodServiceTokenScopedListRequest]) *connect.Response[apiv1.MethodServiceTokenScopedListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.MethodServiceTokenScopedListResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.MethodServiceTokenScopedListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NewMethodServiceHandler creates a new instance of MethodServiceHandler. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewMethodServiceHandler(t interface {
	mock.TestingT
	Cleanup(func())
}) *MethodServiceHandler {
	mock := &MethodServiceHandler{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
