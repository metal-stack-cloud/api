// Code generated by mockery v2.52.3. DO NOT EDIT.

package apiv1connect

import (
	connect "connectrpc.com/connect"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// AssetServiceHandler is an autogenerated mock type for the AssetServiceHandler type
type AssetServiceHandler struct {
	mock.Mock
}

// List provides a mock function with given fields: _a0, _a1
func (_m *AssetServiceHandler) List(_a0 context.Context, _a1 *connect.Request[apiv1.AssetServiceListRequest]) (*connect.Response[apiv1.AssetServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for List")
	}

	var r0 *connect.Response[apiv1.AssetServiceListResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.AssetServiceListRequest]) (*connect.Response[apiv1.AssetServiceListResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.AssetServiceListRequest]) *connect.Response[apiv1.AssetServiceListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.AssetServiceListResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.AssetServiceListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NewAssetServiceHandler creates a new instance of AssetServiceHandler. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewAssetServiceHandler(t interface {
	mock.TestingT
	Cleanup(func())
}) *AssetServiceHandler {
	mock := &AssetServiceHandler{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
