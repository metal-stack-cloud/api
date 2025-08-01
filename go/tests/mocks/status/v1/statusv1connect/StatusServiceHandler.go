// Code generated by mockery v2.53.0. DO NOT EDIT.

package statusv1connect

import (
	context "context"

	connect "connectrpc.com/connect"

	mock "github.com/stretchr/testify/mock"

	statusv1 "github.com/metal-stack-cloud/api/go/status/v1"
)

// StatusServiceHandler is an autogenerated mock type for the StatusServiceHandler type
type StatusServiceHandler struct {
	mock.Mock
}

// Watch provides a mock function with given fields: _a0, _a1, _a2
func (_m *StatusServiceHandler) Watch(_a0 context.Context, _a1 *connect.Request[statusv1.StatusServiceWatchRequest], _a2 *connect.ServerStream[statusv1.StatusServiceWatchResponse]) error {
	ret := _m.Called(_a0, _a1, _a2)

	if len(ret) == 0 {
		panic("no return value specified for Watch")
	}

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[statusv1.StatusServiceWatchRequest], *connect.ServerStream[statusv1.StatusServiceWatchResponse]) error); ok {
		r0 = rf(_a0, _a1, _a2)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// NewStatusServiceHandler creates a new instance of StatusServiceHandler. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewStatusServiceHandler(t interface {
	mock.TestingT
	Cleanup(func())
}) *StatusServiceHandler {
	mock := &StatusServiceHandler{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
