// Code generated by mockery v2.40.1. DO NOT EDIT.

package apiv1connect

import (
	connect "connectrpc.com/connect"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// ProjectServiceClient is an autogenerated mock type for the ProjectServiceClient type
type ProjectServiceClient struct {
	mock.Mock
}

// Create provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceClient) Create(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceCreateRequest]) (*connect.Response[apiv1.ProjectServiceCreateResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Create")
	}

	var r0 *connect.Response[apiv1.ProjectServiceCreateResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceCreateRequest]) (*connect.Response[apiv1.ProjectServiceCreateResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceCreateRequest]) *connect.Response[apiv1.ProjectServiceCreateResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ProjectServiceCreateResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ProjectServiceCreateRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Delete provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceClient) Delete(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceDeleteRequest]) (*connect.Response[apiv1.ProjectServiceDeleteResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Delete")
	}

	var r0 *connect.Response[apiv1.ProjectServiceDeleteResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceDeleteRequest]) (*connect.Response[apiv1.ProjectServiceDeleteResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceDeleteRequest]) *connect.Response[apiv1.ProjectServiceDeleteResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ProjectServiceDeleteResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ProjectServiceDeleteRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Get provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceClient) Get(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceGetRequest]) (*connect.Response[apiv1.ProjectServiceGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Get")
	}

	var r0 *connect.Response[apiv1.ProjectServiceGetResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceGetRequest]) (*connect.Response[apiv1.ProjectServiceGetResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceGetRequest]) *connect.Response[apiv1.ProjectServiceGetResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ProjectServiceGetResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ProjectServiceGetRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Invite provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceClient) Invite(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceInviteRequest]) (*connect.Response[apiv1.ProjectServiceInviteResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Invite")
	}

	var r0 *connect.Response[apiv1.ProjectServiceInviteResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceInviteRequest]) (*connect.Response[apiv1.ProjectServiceInviteResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceInviteRequest]) *connect.Response[apiv1.ProjectServiceInviteResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ProjectServiceInviteResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ProjectServiceInviteRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// List provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceClient) List(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceListRequest]) (*connect.Response[apiv1.ProjectServiceListResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for List")
	}

	var r0 *connect.Response[apiv1.ProjectServiceListResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceListRequest]) (*connect.Response[apiv1.ProjectServiceListResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceListRequest]) *connect.Response[apiv1.ProjectServiceListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ProjectServiceListResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ProjectServiceListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ListInvites provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceClient) ListInvites(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceListInvitesRequest]) (*connect.Response[apiv1.ProjectServiceListInvitesResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for ListInvites")
	}

	var r0 *connect.Response[apiv1.ProjectServiceListInvitesResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceListInvitesRequest]) (*connect.Response[apiv1.ProjectServiceListInvitesResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceListInvitesRequest]) *connect.Response[apiv1.ProjectServiceListInvitesResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ProjectServiceListInvitesResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ProjectServiceListInvitesRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// RemoveMember provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceClient) RemoveMember(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceRemoveMemberRequest]) (*connect.Response[apiv1.ProjectServiceRemoveMemberResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for RemoveMember")
	}

	var r0 *connect.Response[apiv1.ProjectServiceRemoveMemberResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceRemoveMemberRequest]) (*connect.Response[apiv1.ProjectServiceRemoveMemberResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceRemoveMemberRequest]) *connect.Response[apiv1.ProjectServiceRemoveMemberResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ProjectServiceRemoveMemberResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ProjectServiceRemoveMemberRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Update provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceClient) Update(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceUpdateRequest]) (*connect.Response[apiv1.ProjectServiceUpdateResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Update")
	}

	var r0 *connect.Response[apiv1.ProjectServiceUpdateResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceUpdateRequest]) (*connect.Response[apiv1.ProjectServiceUpdateResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceUpdateRequest]) *connect.Response[apiv1.ProjectServiceUpdateResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ProjectServiceUpdateResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ProjectServiceUpdateRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NewProjectServiceClient creates a new instance of ProjectServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewProjectServiceClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *ProjectServiceClient {
	mock := &ProjectServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
