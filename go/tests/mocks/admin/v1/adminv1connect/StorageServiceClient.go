// Code generated by mockery v2.31.1. DO NOT EDIT.

package adminv1connect

import (
	connect "github.com/bufbuild/connect-go"
	adminv1 "github.com/metal-stack-cloud/api/go/admin/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// StorageServiceClient is an autogenerated mock type for the StorageServiceClient type
type StorageServiceClient struct {
	mock.Mock
}

// ClusterInfo provides a mock function with given fields: _a0, _a1
func (_m *StorageServiceClient) ClusterInfo(_a0 context.Context, _a1 *connect.Request[adminv1.StorageServiceClusterInfoRequest]) (*connect.Response[adminv1.StorageServiceClusterInfoResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[adminv1.StorageServiceClusterInfoResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.StorageServiceClusterInfoRequest]) (*connect.Response[adminv1.StorageServiceClusterInfoResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.StorageServiceClusterInfoRequest]) *connect.Response[adminv1.StorageServiceClusterInfoResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[adminv1.StorageServiceClusterInfoResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[adminv1.StorageServiceClusterInfoRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ListSnapshots provides a mock function with given fields: _a0, _a1
func (_m *StorageServiceClient) ListSnapshots(_a0 context.Context, _a1 *connect.Request[adminv1.StorageServiceListSnapshotsRequest]) (*connect.Response[adminv1.StorageServiceListSnapshotsResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[adminv1.StorageServiceListSnapshotsResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.StorageServiceListSnapshotsRequest]) (*connect.Response[adminv1.StorageServiceListSnapshotsResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.StorageServiceListSnapshotsRequest]) *connect.Response[adminv1.StorageServiceListSnapshotsResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[adminv1.StorageServiceListSnapshotsResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[adminv1.StorageServiceListSnapshotsRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ListVolumes provides a mock function with given fields: _a0, _a1
func (_m *StorageServiceClient) ListVolumes(_a0 context.Context, _a1 *connect.Request[adminv1.StorageServiceListVolumesRequest]) (*connect.Response[adminv1.StorageServiceListVolumesResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[adminv1.StorageServiceListVolumesResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.StorageServiceListVolumesRequest]) (*connect.Response[adminv1.StorageServiceListVolumesResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[adminv1.StorageServiceListVolumesRequest]) *connect.Response[adminv1.StorageServiceListVolumesResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[adminv1.StorageServiceListVolumesResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[adminv1.StorageServiceListVolumesRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NewStorageServiceClient creates a new instance of StorageServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewStorageServiceClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *StorageServiceClient {
	mock := &StorageServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
