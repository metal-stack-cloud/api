// Code generated by mockery v2.41.0. DO NOT EDIT.

package adminv1connect

import (
	connect "connectrpc.com/connect"
	adminv1 "github.com/metal-stack-cloud/api/go/admin/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// ClusterServiceHandler is an autogenerated mock type for the ClusterServiceHandler type
type ClusterServiceHandler struct {
	mock.Mock
}

// Credentials provides a mock function with given fields: _a0, _a1
func (_m *ClusterServiceHandler) Credentials(_a0 context.Context, _a1 *connect.Request[adminv1.ClusterServiceCredentialsRequest]) (*connect.Response[adminv1.ClusterServiceCredentialsResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Credentials")
	}

	var r0 *connect.Response[adminv1.ClusterServiceCredentialsResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.ClusterServiceCredentialsRequest]) (*connect.Response[adminv1.ClusterServiceCredentialsResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.ClusterServiceCredentialsRequest]) *connect.Response[adminv1.ClusterServiceCredentialsResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[adminv1.ClusterServiceCredentialsResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[adminv1.ClusterServiceCredentialsRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Get provides a mock function with given fields: _a0, _a1
func (_m *ClusterServiceHandler) Get(_a0 context.Context, _a1 *connect.Request[adminv1.ClusterServiceGetRequest]) (*connect.Response[adminv1.ClusterServiceGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Get")
	}

	var r0 *connect.Response[adminv1.ClusterServiceGetResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.ClusterServiceGetRequest]) (*connect.Response[adminv1.ClusterServiceGetResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.ClusterServiceGetRequest]) *connect.Response[adminv1.ClusterServiceGetResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[adminv1.ClusterServiceGetResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[adminv1.ClusterServiceGetRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// List provides a mock function with given fields: _a0, _a1
func (_m *ClusterServiceHandler) List(_a0 context.Context, _a1 *connect.Request[adminv1.ClusterServiceListRequest]) (*connect.Response[adminv1.ClusterServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for List")
	}

	var r0 *connect.Response[adminv1.ClusterServiceListResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.ClusterServiceListRequest]) (*connect.Response[adminv1.ClusterServiceListResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.ClusterServiceListRequest]) *connect.Response[adminv1.ClusterServiceListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[adminv1.ClusterServiceListResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[adminv1.ClusterServiceListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NewClusterServiceHandler creates a new instance of ClusterServiceHandler. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewClusterServiceHandler(t interface {
	mock.TestingT
	Cleanup(func())
}) *ClusterServiceHandler {
	mock := &ClusterServiceHandler{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
