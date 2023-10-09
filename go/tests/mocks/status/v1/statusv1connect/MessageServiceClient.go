// Code generated by mockery v2.35.2. DO NOT EDIT.

package statusv1connect

import (
	context "context"

	connect "connectrpc.com/connect"

	mock "github.com/stretchr/testify/mock"

	statusv1 "github.com/metal-stack-cloud/api/go/status/v1"
)

// MessageServiceClient is an autogenerated mock type for the MessageServiceClient type
type MessageServiceClient struct {
	mock.Mock
}

// List provides a mock function with given fields: _a0, _a1
func (_m *MessageServiceClient) List(_a0 context.Context, _a1 *connect.Request[statusv1.MessageServiceListRequest]) (*connect.Response[statusv1.MessageServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

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

// NewMessageServiceClient creates a new instance of MessageServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewMessageServiceClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *MessageServiceClient {
	mock := &MessageServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
