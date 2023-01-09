// Code generated by mockery v2.15.0. DO NOT EDIT.

package apiv1connect

import (
	connect "github.com/bufbuild/connect-go"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// VolumeServiceClient is an autogenerated mock type for the VolumeServiceClient type
type VolumeServiceClient struct {
	mock.Mock
}

// Delete provides a mock function with given fields: _a0, _a1
func (_m *VolumeServiceClient) Delete(_a0 context.Context, _a1 *connect.Request[apiv1.VolumeServiceDeleteRequest]) (*connect.Response[apiv1.VolumeServiceDeleteResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.VolumeServiceDeleteResponse]
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.VolumeServiceDeleteRequest]) *connect.Response[apiv1.VolumeServiceDeleteResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.VolumeServiceDeleteResponse])
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.VolumeServiceDeleteRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Get provides a mock function with given fields: _a0, _a1
func (_m *VolumeServiceClient) Get(_a0 context.Context, _a1 *connect.Request[apiv1.VolumeServiceGetRequest]) (*connect.Response[apiv1.VolumeServiceGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.VolumeServiceGetResponse]
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.VolumeServiceGetRequest]) *connect.Response[apiv1.VolumeServiceGetResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.VolumeServiceGetResponse])
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.VolumeServiceGetRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// List provides a mock function with given fields: _a0, _a1
func (_m *VolumeServiceClient) List(_a0 context.Context, _a1 *connect.Request[apiv1.VolumeServiceListRequest]) (*connect.Response[apiv1.VolumeServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.VolumeServiceListResponse]
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.VolumeServiceListRequest]) *connect.Response[apiv1.VolumeServiceListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.VolumeServiceListResponse])
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.VolumeServiceListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

type mockConstructorTestingTNewVolumeServiceClient interface {
	mock.TestingT
	Cleanup(func())
}

// NewVolumeServiceClient creates a new instance of VolumeServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
func NewVolumeServiceClient(t mockConstructorTestingTNewVolumeServiceClient) *VolumeServiceClient {
	mock := &VolumeServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
