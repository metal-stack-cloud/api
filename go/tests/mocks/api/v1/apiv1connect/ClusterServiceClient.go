// Code generated by mockery v2.30.16. DO NOT EDIT.

package apiv1connect

import (
	connect "github.com/bufbuild/connect-go"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// ClusterServiceClient is an autogenerated mock type for the ClusterServiceClient type
type ClusterServiceClient struct {
	mock.Mock
}

// Create provides a mock function with given fields: _a0, _a1
func (_m *ClusterServiceClient) Create(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceCreateRequest]) (*connect.Response[apiv1.ClusterServiceCreateResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.ClusterServiceCreateResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceCreateRequest]) (*connect.Response[apiv1.ClusterServiceCreateResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceCreateRequest]) *connect.Response[apiv1.ClusterServiceCreateResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ClusterServiceCreateResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ClusterServiceCreateRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Delete provides a mock function with given fields: _a0, _a1
func (_m *ClusterServiceClient) Delete(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceDeleteRequest]) (*connect.Response[apiv1.ClusterServiceDeleteResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.ClusterServiceDeleteResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceDeleteRequest]) (*connect.Response[apiv1.ClusterServiceDeleteResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceDeleteRequest]) *connect.Response[apiv1.ClusterServiceDeleteResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ClusterServiceDeleteResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ClusterServiceDeleteRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Get provides a mock function with given fields: _a0, _a1
func (_m *ClusterServiceClient) Get(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceGetRequest]) (*connect.Response[apiv1.ClusterServiceGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.ClusterServiceGetResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceGetRequest]) (*connect.Response[apiv1.ClusterServiceGetResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceGetRequest]) *connect.Response[apiv1.ClusterServiceGetResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ClusterServiceGetResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ClusterServiceGetRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetCredentials provides a mock function with given fields: _a0, _a1
func (_m *ClusterServiceClient) GetCredentials(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceGetCredentialsRequest]) (*connect.Response[apiv1.ClusterServiceGetCredentialsResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.ClusterServiceGetCredentialsResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceGetCredentialsRequest]) (*connect.Response[apiv1.ClusterServiceGetCredentialsResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceGetCredentialsRequest]) *connect.Response[apiv1.ClusterServiceGetCredentialsResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ClusterServiceGetCredentialsResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ClusterServiceGetCredentialsRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// List provides a mock function with given fields: _a0, _a1
func (_m *ClusterServiceClient) List(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceListRequest]) (*connect.Response[apiv1.ClusterServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.ClusterServiceListResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceListRequest]) (*connect.Response[apiv1.ClusterServiceListResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceListRequest]) *connect.Response[apiv1.ClusterServiceListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ClusterServiceListResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ClusterServiceListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Update provides a mock function with given fields: _a0, _a1
func (_m *ClusterServiceClient) Update(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceUpdateRequest]) (*connect.Response[apiv1.ClusterServiceUpdateResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.ClusterServiceUpdateResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceUpdateRequest]) (*connect.Response[apiv1.ClusterServiceUpdateResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceUpdateRequest]) *connect.Response[apiv1.ClusterServiceUpdateResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ClusterServiceUpdateResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ClusterServiceUpdateRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// WatchStatus provides a mock function with given fields: _a0, _a1
func (_m *ClusterServiceClient) WatchStatus(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceWatchStatusRequest]) (*connect.ServerStreamForClient[apiv1.ClusterServiceWatchStatusResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.ServerStreamForClient[apiv1.ClusterServiceWatchStatusResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceWatchStatusRequest]) (*connect.ServerStreamForClient[apiv1.ClusterServiceWatchStatusResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceWatchStatusRequest]) *connect.ServerStreamForClient[apiv1.ClusterServiceWatchStatusResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.ServerStreamForClient[apiv1.ClusterServiceWatchStatusResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ClusterServiceWatchStatusRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NewClusterServiceClient creates a new instance of ClusterServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewClusterServiceClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *ClusterServiceClient {
	mock := &ClusterServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
