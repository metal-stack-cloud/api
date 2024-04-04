// Code generated by mockery v2.42.0. DO NOT EDIT.

package adminv1connect

import (
	connect "connectrpc.com/connect"
	adminv1 "github.com/metal-stack-cloud/api/go/admin/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// TokenServiceHandler is an autogenerated mock type for the TokenServiceHandler type
type TokenServiceHandler struct {
	mock.Mock
}

// List provides a mock function with given fields: _a0, _a1
func (_m *TokenServiceHandler) List(_a0 context.Context, _a1 *connect.Request[adminv1.TokenServiceListRequest]) (*connect.Response[adminv1.TokenServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for List")
	}

	var r0 *connect.Response[adminv1.TokenServiceListResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.TokenServiceListRequest]) (*connect.Response[adminv1.TokenServiceListResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.TokenServiceListRequest]) *connect.Response[adminv1.TokenServiceListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[adminv1.TokenServiceListResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[adminv1.TokenServiceListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Revoke provides a mock function with given fields: _a0, _a1
func (_m *TokenServiceHandler) Revoke(_a0 context.Context, _a1 *connect.Request[adminv1.TokenServiceRevokeRequest]) (*connect.Response[adminv1.TokenServiceRevokeResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Revoke")
	}

	var r0 *connect.Response[adminv1.TokenServiceRevokeResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.TokenServiceRevokeRequest]) (*connect.Response[adminv1.TokenServiceRevokeResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.TokenServiceRevokeRequest]) *connect.Response[adminv1.TokenServiceRevokeResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[adminv1.TokenServiceRevokeResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[adminv1.TokenServiceRevokeRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NewTokenServiceHandler creates a new instance of TokenServiceHandler. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewTokenServiceHandler(t interface {
	mock.TestingT
	Cleanup(func())
}) *TokenServiceHandler {
	mock := &TokenServiceHandler{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
