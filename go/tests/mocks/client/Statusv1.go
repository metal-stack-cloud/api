// Code generated by mockery v2.53.0. DO NOT EDIT.

package client

import (
	statusv1connect "github.com/metal-stack-cloud/api/go/status/v1/statusv1connect"
	mock "github.com/stretchr/testify/mock"
)

// Statusv1 is an autogenerated mock type for the Statusv1 type
type Statusv1 struct {
	mock.Mock
}

// Message provides a mock function with no fields
func (_m *Statusv1) Message() statusv1connect.MessageServiceClient {
	ret := _m.Called()

	if len(ret) == 0 {
		panic("no return value specified for Message")
	}

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

// Status provides a mock function with no fields
func (_m *Statusv1) Status() statusv1connect.StatusServiceClient {
	ret := _m.Called()

	if len(ret) == 0 {
		panic("no return value specified for Status")
	}

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

// NewStatusv1 creates a new instance of Statusv1. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewStatusv1(t interface {
	mock.TestingT
	Cleanup(func())
}) *Statusv1 {
	mock := &Statusv1{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
