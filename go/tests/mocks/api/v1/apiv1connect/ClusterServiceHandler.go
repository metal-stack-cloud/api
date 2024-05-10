// Code generated by mockery v2.43.0. DO NOT EDIT.

package apiv1connect

import (
	connect "connectrpc.com/connect"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// ClusterServiceHandler is an autogenerated mock type for the ClusterServiceHandler type
type ClusterServiceHandler struct {
	mock.Mock
}

// Create provides a mock function with given fields: _a0, _a1
func (_m *ClusterServiceHandler) Create(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceCreateRequest]) (*connect.Response[apiv1.ClusterServiceCreateResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Create")
	}

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
func (_m *ClusterServiceHandler) Delete(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceDeleteRequest]) (*connect.Response[apiv1.ClusterServiceDeleteResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Delete")
	}

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
func (_m *ClusterServiceHandler) Get(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceGetRequest]) (*connect.Response[apiv1.ClusterServiceGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Get")
	}

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
func (_m *ClusterServiceHandler) GetCredentials(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceGetCredentialsRequest]) (*connect.Response[apiv1.ClusterServiceGetCredentialsResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for GetCredentials")
	}

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
func (_m *ClusterServiceHandler) List(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceListRequest]) (*connect.Response[apiv1.ClusterServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for List")
	}

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

// Operate provides a mock function with given fields: _a0, _a1
func (_m *ClusterServiceHandler) Operate(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceOperateRequest]) (*connect.Response[apiv1.ClusterServiceOperateResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Operate")
	}

	var r0 *connect.Response[apiv1.ClusterServiceOperateResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceOperateRequest]) (*connect.Response[apiv1.ClusterServiceOperateResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceOperateRequest]) *connect.Response[apiv1.ClusterServiceOperateResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ClusterServiceOperateResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ClusterServiceOperateRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Update provides a mock function with given fields: _a0, _a1
func (_m *ClusterServiceHandler) Update(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceUpdateRequest]) (*connect.Response[apiv1.ClusterServiceUpdateResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Update")
	}

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

// WatchStatus provides a mock function with given fields: _a0, _a1, _a2
func (_m *ClusterServiceHandler) WatchStatus(_a0 context.Context, _a1 *connect.Request[apiv1.ClusterServiceWatchStatusRequest], _a2 *connect.ServerStream[apiv1.ClusterServiceWatchStatusResponse]) error {
	ret := _m.Called(_a0, _a1, _a2)

	if len(ret) == 0 {
		panic("no return value specified for WatchStatus")
	}

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ClusterServiceWatchStatusRequest], *connect.ServerStream[apiv1.ClusterServiceWatchStatusResponse]) error); ok {
		r0 = rf(_a0, _a1, _a2)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// NewClusterServiceHandler creates a new instance of ClusterServiceHandler. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewClusterServiceHandler(t interface {
	mock.TestingT
	Cleanup(func())
}) *ClusterServiceHandler {
	mock := &ClusterServiceHandler{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
