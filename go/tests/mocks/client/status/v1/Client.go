// Code generated by mockery v2.22.1. DO NOT EDIT.

package client

import (
	statusv1connect "github.com/metal-stack-cloud/api/go/status/v1/statusv1connect"
	mock "github.com/stretchr/testify/mock"
)

// Client is an autogenerated mock type for the Client type
type Client struct {
	mock.Mock
}

// Message provides a mock function with given fields:
func (_m *Client) Message() statusv1connect.MessageServiceClient {
	ret := _m.Called()

	var r0 statusv1connect.MessageServiceClient
	if rf, ok := ret.Get(0).(func() statusv1connect.MessageServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(statusv1connect.MessageServiceClient)
		}
	}

	return r0
}

// Status provides a mock function with given fields:
func (_m *Client) Status() statusv1connect.StatusServiceClient {
	ret := _m.Called()

	var r0 statusv1connect.StatusServiceClient
	if rf, ok := ret.Get(0).(func() statusv1connect.StatusServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(statusv1connect.StatusServiceClient)
		}
	}

	return r0
}

type mockConstructorTestingTNewClient interface {
	mock.TestingT
	Cleanup(func())
}

// NewClient creates a new instance of Client. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
func NewClient(t mockConstructorTestingTNewClient) *Client {
	mock := &Client{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
