// Code generated by mockery v2.32.0. DO NOT EDIT.

package apiv1connect

import (
	connect "github.com/bufbuild/connect-go"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// SnapshotServiceClient is an autogenerated mock type for the SnapshotServiceClient type
type SnapshotServiceClient struct {
	mock.Mock
}

// Delete provides a mock function with given fields: _a0, _a1
func (_m *SnapshotServiceClient) Delete(_a0 context.Context, _a1 *connect.Request[apiv1.SnapshotServiceDeleteRequest]) (*connect.Response[apiv1.SnapshotServiceDeleteResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.SnapshotServiceDeleteResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.SnapshotServiceDeleteRequest]) (*connect.Response[apiv1.SnapshotServiceDeleteResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.SnapshotServiceDeleteRequest]) *connect.Response[apiv1.SnapshotServiceDeleteResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.SnapshotServiceDeleteResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.SnapshotServiceDeleteRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Get provides a mock function with given fields: _a0, _a1
func (_m *SnapshotServiceClient) Get(_a0 context.Context, _a1 *connect.Request[apiv1.SnapshotServiceGetRequest]) (*connect.Response[apiv1.SnapshotServiceGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.SnapshotServiceGetResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.SnapshotServiceGetRequest]) (*connect.Response[apiv1.SnapshotServiceGetResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.SnapshotServiceGetRequest]) *connect.Response[apiv1.SnapshotServiceGetResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.SnapshotServiceGetResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.SnapshotServiceGetRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// List provides a mock function with given fields: _a0, _a1
func (_m *SnapshotServiceClient) List(_a0 context.Context, _a1 *connect.Request[apiv1.SnapshotServiceListRequest]) (*connect.Response[apiv1.SnapshotServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.SnapshotServiceListResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.SnapshotServiceListRequest]) (*connect.Response[apiv1.SnapshotServiceListResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.SnapshotServiceListRequest]) *connect.Response[apiv1.SnapshotServiceListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.SnapshotServiceListResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.SnapshotServiceListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NewSnapshotServiceClient creates a new instance of SnapshotServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewSnapshotServiceClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *SnapshotServiceClient {
	mock := &SnapshotServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
