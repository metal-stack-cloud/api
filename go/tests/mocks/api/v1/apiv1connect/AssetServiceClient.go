// Code generated by mockery v2.32.0. DO NOT EDIT.

package apiv1connect

import (
	connect "connectrpc.com/connect"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// AssetServiceClient is an autogenerated mock type for the AssetServiceClient type
type AssetServiceClient struct {
	mock.Mock
}

// List provides a mock function with given fields: _a0, _a1
func (_m *AssetServiceClient) List(_a0 context.Context, _a1 *connect.Request[apiv1.AssetServiceListRequest]) (*connect.Response[apiv1.AssetServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

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

// NewAssetServiceClient creates a new instance of AssetServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewAssetServiceClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *AssetServiceClient {
	mock := &AssetServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
