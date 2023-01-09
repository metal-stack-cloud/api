// Code generated by mockery v2.15.0. DO NOT EDIT.

package adminv1connect

import (
	connect "github.com/bufbuild/connect-go"
	adminv1 "github.com/metal-stack-cloud/api/go/admin/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// TenantServiceHandler is an autogenerated mock type for the TenantServiceHandler type
type TenantServiceHandler struct {
	mock.Mock
}

// Admit provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceHandler) Admit(_a0 context.Context, _a1 *connect.Request[adminv1.TenantServiceAdmitRequest]) (*connect.Response[adminv1.TenantServiceAdmitResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[adminv1.TenantServiceAdmitResponse]
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.TenantServiceAdmitRequest]) *connect.Response[adminv1.TenantServiceAdmitResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[adminv1.TenantServiceAdmitResponse])
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[adminv1.TenantServiceAdmitRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// List provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceHandler) List(_a0 context.Context, _a1 *connect.Request[adminv1.TenantServiceListRequest]) (*connect.Response[adminv1.TenantServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[adminv1.TenantServiceListResponse]
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.TenantServiceListRequest]) *connect.Response[adminv1.TenantServiceListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[adminv1.TenantServiceListResponse])
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[adminv1.TenantServiceListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

type mockConstructorTestingTNewTenantServiceHandler interface {
	mock.TestingT
	Cleanup(func())
}

// NewTenantServiceHandler creates a new instance of TenantServiceHandler. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
func NewTenantServiceHandler(t mockConstructorTestingTNewTenantServiceHandler) *TenantServiceHandler {
	mock := &TenantServiceHandler{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
