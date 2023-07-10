// Code generated by mockery v2.31.1. DO NOT EDIT.

package apiv1connect

import (
	connect "github.com/bufbuild/connect-go"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// VolumeServiceHandler is an autogenerated mock type for the VolumeServiceHandler type
type VolumeServiceHandler struct {
	mock.Mock
}

// Delete provides a mock function with given fields: _a0, _a1
func (_m *VolumeServiceHandler) Delete(_a0 context.Context, _a1 *connect.Request[apiv1.VolumeServiceDeleteRequest]) (*connect.Response[apiv1.VolumeServiceDeleteResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.VolumeServiceDeleteResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.VolumeServiceDeleteRequest]) (*connect.Response[apiv1.VolumeServiceDeleteResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.VolumeServiceDeleteRequest]) *connect.Response[apiv1.VolumeServiceDeleteResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.VolumeServiceDeleteResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.VolumeServiceDeleteRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Get provides a mock function with given fields: _a0, _a1
func (_m *VolumeServiceHandler) Get(_a0 context.Context, _a1 *connect.Request[apiv1.VolumeServiceGetRequest]) (*connect.Response[apiv1.VolumeServiceGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.VolumeServiceGetResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.VolumeServiceGetRequest]) (*connect.Response[apiv1.VolumeServiceGetResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.VolumeServiceGetRequest]) *connect.Response[apiv1.VolumeServiceGetResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.VolumeServiceGetResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.VolumeServiceGetRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// List provides a mock function with given fields: _a0, _a1
func (_m *VolumeServiceHandler) List(_a0 context.Context, _a1 *connect.Request[apiv1.VolumeServiceListRequest]) (*connect.Response[apiv1.VolumeServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.VolumeServiceListResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.VolumeServiceListRequest]) (*connect.Response[apiv1.VolumeServiceListResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.VolumeServiceListRequest]) *connect.Response[apiv1.VolumeServiceListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.VolumeServiceListResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.VolumeServiceListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NewVolumeServiceHandler creates a new instance of VolumeServiceHandler. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewVolumeServiceHandler(t interface {
	mock.TestingT
	Cleanup(func())
}) *VolumeServiceHandler {
	mock := &VolumeServiceHandler{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
