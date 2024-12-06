// Code generated by mockery v2.49.1. DO NOT EDIT.

package statusv1connect

import (
	context "context"

	connect "connectrpc.com/connect"

	mock "github.com/stretchr/testify/mock"

	statusv1 "github.com/metal-stack-cloud/api/go/status/v1"
)

// MessageServiceHandler is an autogenerated mock type for the MessageServiceHandler type
type MessageServiceHandler struct {
	mock.Mock
}

// List provides a mock function with given fields: _a0, _a1
func (_m *MessageServiceHandler) List(_a0 context.Context, _a1 *connect.Request[statusv1.MessageServiceListRequest]) (*connect.Response[statusv1.MessageServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for List")
	}

	var r0 *connect.Response[statusv1.MessageServiceListResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[statusv1.MessageServiceListRequest]) (*connect.Response[statusv1.MessageServiceListResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[statusv1.MessageServiceListRequest]) *connect.Response[statusv1.MessageServiceListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[statusv1.MessageServiceListResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[statusv1.MessageServiceListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Watch provides a mock function with given fields: _a0, _a1, _a2
func (_m *MessageServiceHandler) Watch(_a0 context.Context, _a1 *connect.Request[statusv1.MessageServiceWatchRequest], _a2 *connect.ServerStream[statusv1.MessageServiceWatchResponse]) error {
	ret := _m.Called(_a0, _a1, _a2)

	if len(ret) == 0 {
		panic("no return value specified for Watch")
	}

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[statusv1.MessageServiceWatchRequest], *connect.ServerStream[statusv1.MessageServiceWatchResponse]) error); ok {
		r0 = rf(_a0, _a1, _a2)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// NewMessageServiceHandler creates a new instance of MessageServiceHandler. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewMessageServiceHandler(t interface {
	mock.TestingT
	Cleanup(func())
}) *MessageServiceHandler {
	mock := &MessageServiceHandler{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
