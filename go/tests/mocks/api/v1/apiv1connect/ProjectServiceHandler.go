// Code generated by mockery v2.53.0. DO NOT EDIT.

package apiv1connect

import (
	connect "connectrpc.com/connect"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// ProjectServiceHandler is an autogenerated mock type for the ProjectServiceHandler type
type ProjectServiceHandler struct {
	mock.Mock
}

// Create provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceHandler) Create(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceCreateRequest]) (*connect.Response[apiv1.ProjectServiceCreateResponse], error) {
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
func (_m *ProjectServiceHandler) Delete(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceDeleteRequest]) (*connect.Response[apiv1.ProjectServiceDeleteResponse], error) {
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
func (_m *ProjectServiceHandler) Get(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceGetRequest]) (*connect.Response[apiv1.ProjectServiceGetResponse], error) {
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
func (_m *ProjectServiceHandler) Invite(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceInviteRequest]) (*connect.Response[apiv1.ProjectServiceInviteResponse], error) {
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

// InviteAccept provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceHandler) InviteAccept(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceInviteAcceptRequest]) (*connect.Response[apiv1.ProjectServiceInviteAcceptResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for InviteAccept")
	}

	var r0 *connect.Response[apiv1.ProjectServiceInviteAcceptResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceInviteAcceptRequest]) (*connect.Response[apiv1.ProjectServiceInviteAcceptResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceInviteAcceptRequest]) *connect.Response[apiv1.ProjectServiceInviteAcceptResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ProjectServiceInviteAcceptResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ProjectServiceInviteAcceptRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// InviteDelete provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceHandler) InviteDelete(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceInviteDeleteRequest]) (*connect.Response[apiv1.ProjectServiceInviteDeleteResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for InviteDelete")
	}

	var r0 *connect.Response[apiv1.ProjectServiceInviteDeleteResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceInviteDeleteRequest]) (*connect.Response[apiv1.ProjectServiceInviteDeleteResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceInviteDeleteRequest]) *connect.Response[apiv1.ProjectServiceInviteDeleteResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ProjectServiceInviteDeleteResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ProjectServiceInviteDeleteRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// InviteGet provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceHandler) InviteGet(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceInviteGetRequest]) (*connect.Response[apiv1.ProjectServiceInviteGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for InviteGet")
	}

	var r0 *connect.Response[apiv1.ProjectServiceInviteGetResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceInviteGetRequest]) (*connect.Response[apiv1.ProjectServiceInviteGetResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceInviteGetRequest]) *connect.Response[apiv1.ProjectServiceInviteGetResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ProjectServiceInviteGetResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ProjectServiceInviteGetRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// InvitesList provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceHandler) InvitesList(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceInvitesListRequest]) (*connect.Response[apiv1.ProjectServiceInvitesListResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for InvitesList")
	}

	var r0 *connect.Response[apiv1.ProjectServiceInvitesListResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceInvitesListRequest]) (*connect.Response[apiv1.ProjectServiceInvitesListResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceInvitesListRequest]) *connect.Response[apiv1.ProjectServiceInvitesListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ProjectServiceInvitesListResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ProjectServiceInvitesListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// List provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceHandler) List(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceListRequest]) (*connect.Response[apiv1.ProjectServiceListResponse], error) {
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

// RemoveMember provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceHandler) RemoveMember(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceRemoveMemberRequest]) (*connect.Response[apiv1.ProjectServiceRemoveMemberResponse], error) {
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
func (_m *ProjectServiceHandler) Update(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceUpdateRequest]) (*connect.Response[apiv1.ProjectServiceUpdateResponse], error) {
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

// UpdateMember provides a mock function with given fields: _a0, _a1
func (_m *ProjectServiceHandler) UpdateMember(_a0 context.Context, _a1 *connect.Request[apiv1.ProjectServiceUpdateMemberRequest]) (*connect.Response[apiv1.ProjectServiceUpdateMemberResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for UpdateMember")
	}

	var r0 *connect.Response[apiv1.ProjectServiceUpdateMemberResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceUpdateMemberRequest]) (*connect.Response[apiv1.ProjectServiceUpdateMemberResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.ProjectServiceUpdateMemberRequest]) *connect.Response[apiv1.ProjectServiceUpdateMemberResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.ProjectServiceUpdateMemberResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.ProjectServiceUpdateMemberRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NewProjectServiceHandler creates a new instance of ProjectServiceHandler. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewProjectServiceHandler(t interface {
	mock.TestingT
	Cleanup(func())
}) *ProjectServiceHandler {
	mock := &ProjectServiceHandler{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
