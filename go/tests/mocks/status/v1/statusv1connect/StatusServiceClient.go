// Code generated by mockery v2.30.1. DO NOT EDIT.

package statusv1connect

import (
	context "context"

	connect "github.com/bufbuild/connect-go"

	mock "github.com/stretchr/testify/mock"

	statusv1 "github.com/metal-stack-cloud/api/go/status/v1"
)

// StatusServiceClient is an autogenerated mock type for the StatusServiceClient type
type StatusServiceClient struct {
	mock.Mock
}

// Get provides a mock function with given fields: _a0, _a1
func (_m *StatusServiceClient) Get(_a0 context.Context, _a1 *connect.Request[statusv1.StatusServiceGetRequest]) (*connect.Response[statusv1.StatusServiceGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[statusv1.StatusServiceGetResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[statusv1.StatusServiceGetRequest]) (*connect.Response[statusv1.StatusServiceGetResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[statusv1.StatusServiceGetRequest]) *connect.Response[statusv1.StatusServiceGetResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[statusv1.StatusServiceGetResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[statusv1.StatusServiceGetRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NewStatusServiceClient creates a new instance of StatusServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewStatusServiceClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *StatusServiceClient {
	mock := &StatusServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
