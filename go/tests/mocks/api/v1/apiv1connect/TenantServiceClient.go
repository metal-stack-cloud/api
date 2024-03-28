// Code generated by mockery v2.42.0. DO NOT EDIT.

package apiv1connect

import (
	connect "connectrpc.com/connect"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// TenantServiceClient is an autogenerated mock type for the TenantServiceClient type
type TenantServiceClient struct {
	mock.Mock
}

// Create provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) Create(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceCreateRequest]) (*connect.Response[apiv1.TenantServiceCreateResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Create")
	}

	var r0 *connect.Response[apiv1.TenantServiceCreateResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceCreateRequest]) (*connect.Response[apiv1.TenantServiceCreateResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceCreateRequest]) *connect.Response[apiv1.TenantServiceCreateResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceCreateResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceCreateRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CreateOrUpdate provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) CreateOrUpdate(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceCreateOrUpdateRequest]) (*connect.Response[apiv1.TenantServiceCreateOrUpdateResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for CreateOrUpdate")
	}

	var r0 *connect.Response[apiv1.TenantServiceCreateOrUpdateResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceCreateOrUpdateRequest]) (*connect.Response[apiv1.TenantServiceCreateOrUpdateResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceCreateOrUpdateRequest]) *connect.Response[apiv1.TenantServiceCreateOrUpdateResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceCreateOrUpdateResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceCreateOrUpdateRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Delete provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) Delete(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceDeleteRequest]) (*connect.Response[apiv1.TenantServiceDeleteResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Delete")
	}

	var r0 *connect.Response[apiv1.TenantServiceDeleteResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceDeleteRequest]) (*connect.Response[apiv1.TenantServiceDeleteResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceDeleteRequest]) *connect.Response[apiv1.TenantServiceDeleteResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceDeleteResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceDeleteRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Get provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) Get(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceGetRequest]) (*connect.Response[apiv1.TenantServiceGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Get")
	}

	var r0 *connect.Response[apiv1.TenantServiceGetResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceGetRequest]) (*connect.Response[apiv1.TenantServiceGetResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceGetRequest]) *connect.Response[apiv1.TenantServiceGetResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceGetResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceGetRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Invite provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) Invite(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceInviteRequest]) (*connect.Response[apiv1.TenantServiceInviteResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Invite")
	}

	var r0 *connect.Response[apiv1.TenantServiceInviteResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceInviteRequest]) (*connect.Response[apiv1.TenantServiceInviteResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceInviteRequest]) *connect.Response[apiv1.TenantServiceInviteResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceInviteResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceInviteRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// InviteAccept provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) InviteAccept(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceInviteAcceptRequest]) (*connect.Response[apiv1.TenantServiceInviteAcceptResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for InviteAccept")
	}

	var r0 *connect.Response[apiv1.TenantServiceInviteAcceptResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceInviteAcceptRequest]) (*connect.Response[apiv1.TenantServiceInviteAcceptResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceInviteAcceptRequest]) *connect.Response[apiv1.TenantServiceInviteAcceptResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceInviteAcceptResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceInviteAcceptRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// InviteDelete provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) InviteDelete(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceInviteDeleteRequest]) (*connect.Response[apiv1.TenantServiceInviteDeleteResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for InviteDelete")
	}

	var r0 *connect.Response[apiv1.TenantServiceInviteDeleteResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceInviteDeleteRequest]) (*connect.Response[apiv1.TenantServiceInviteDeleteResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceInviteDeleteRequest]) *connect.Response[apiv1.TenantServiceInviteDeleteResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceInviteDeleteResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceInviteDeleteRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// InviteGet provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) InviteGet(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceInviteGetRequest]) (*connect.Response[apiv1.TenantServiceInviteGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for InviteGet")
	}

	var r0 *connect.Response[apiv1.TenantServiceInviteGetResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceInviteGetRequest]) (*connect.Response[apiv1.TenantServiceInviteGetResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceInviteGetRequest]) *connect.Response[apiv1.TenantServiceInviteGetResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceInviteGetResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceInviteGetRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// InvitesList provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) InvitesList(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceInvitesListRequest]) (*connect.Response[apiv1.TenantServiceInvitesListResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for InvitesList")
	}

	var r0 *connect.Response[apiv1.TenantServiceInvitesListResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceInvitesListRequest]) (*connect.Response[apiv1.TenantServiceInvitesListResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceInvitesListRequest]) *connect.Response[apiv1.TenantServiceInvitesListResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceInvitesListResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceInvitesListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// RemoveMember provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) RemoveMember(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceRemoveMemberRequest]) (*connect.Response[apiv1.TenantServiceRemoveMemberResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for RemoveMember")
	}

	var r0 *connect.Response[apiv1.TenantServiceRemoveMemberResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceRemoveMemberRequest]) (*connect.Response[apiv1.TenantServiceRemoveMemberResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceRemoveMemberRequest]) *connect.Response[apiv1.TenantServiceRemoveMemberResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceRemoveMemberResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceRemoveMemberRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Update provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) Update(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceUpdateRequest]) (*connect.Response[apiv1.TenantServiceUpdateResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Update")
	}

	var r0 *connect.Response[apiv1.TenantServiceUpdateResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceUpdateRequest]) (*connect.Response[apiv1.TenantServiceUpdateResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceUpdateRequest]) *connect.Response[apiv1.TenantServiceUpdateResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceUpdateResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceUpdateRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// UpdateMember provides a mock function with given fields: _a0, _a1
func (_m *TenantServiceClient) UpdateMember(_a0 context.Context, _a1 *connect.Request[apiv1.TenantServiceUpdateMemberRequest]) (*connect.Response[apiv1.TenantServiceUpdateMemberResponse], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for UpdateMember")
	}

	var r0 *connect.Response[apiv1.TenantServiceUpdateMemberResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceUpdateMemberRequest]) (*connect.Response[apiv1.TenantServiceUpdateMemberResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.TenantServiceUpdateMemberRequest]) *connect.Response[apiv1.TenantServiceUpdateMemberResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.TenantServiceUpdateMemberResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.TenantServiceUpdateMemberRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NewTenantServiceClient creates a new instance of TenantServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewTenantServiceClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *TenantServiceClient {
	mock := &TenantServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
