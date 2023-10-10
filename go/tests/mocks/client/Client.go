// Code generated by mockery v2.35.2. DO NOT EDIT.

package client

import (
	goclient "github.com/metal-stack-cloud/api/go/client"
	mock "github.com/stretchr/testify/mock"
)

// Client is an autogenerated mock type for the Client type
type Client struct {
	mock.Mock
}

// Adminv1 provides a mock function with given fields:
func (_m *Client) Adminv1() goclient.Adminv1 {
	ret := _m.Called()

	var r0 goclient.Adminv1
	if rf, ok := ret.Get(0).(func() goclient.Adminv1); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(goclient.Adminv1)
		}
	}

	return r0
}

// Apiv1 provides a mock function with given fields:
func (_m *Client) Apiv1() goclient.Apiv1 {
	ret := _m.Called()

	var r0 goclient.Apiv1
	if rf, ok := ret.Get(0).(func() goclient.Apiv1); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(goclient.Apiv1)
		}
	}

	return r0
}

// Statusv1 provides a mock function with given fields:
func (_m *Client) Statusv1() goclient.Statusv1 {
	ret := _m.Called()

	var r0 goclient.Statusv1
	if rf, ok := ret.Get(0).(func() goclient.Statusv1); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(goclient.Statusv1)
		}
	}

	return r0
}

// NewClient creates a new instance of Client. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *Client {
	mock := &Client{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
