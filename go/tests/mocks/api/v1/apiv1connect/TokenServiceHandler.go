// Code generated by mockery v2.23.1. DO NOT EDIT.

package apiv1connect

import (
	connect "github.com/bufbuild/connect-go"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// TokenServiceHandler is an autogenerated mock type for the TokenServiceHandler type
type TokenServiceHandler struct {
	mock.Mock
}

// Create provides a mock function with given fields: _a0, _a1
func (_m *TokenServiceHandler) Create(_a0 context.Context, _a1 *connect.Request[apiv1.TokenServiceCreateRequest]) (*connect.Response[apiv1.TokenServiceCreateResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.TokenServiceCreateResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TokenServiceCreateRequest]) (*connect.Response[apiv1.TokenServiceCreateResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TokenServiceCreateRequest]) *connect.Response[apiv1.TokenServiceCreateResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TokenServiceCreateResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TokenServiceCreateRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

type mockConstructorTestingTNewTokenServiceHandler interface {
	mock.TestingT
	Cleanup(func())
}

// NewTokenServiceHandler creates a new instance of TokenServiceHandler. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
func NewTokenServiceHandler(t mockConstructorTestingTNewTokenServiceHandler) *TokenServiceHandler {
	mock := &TokenServiceHandler{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
