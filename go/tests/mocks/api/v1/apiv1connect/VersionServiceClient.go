// Code generated by mockery v2.24.0. DO NOT EDIT.

package apiv1connect

import (
	connect "github.com/bufbuild/connect-go"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	context "context"

	mock "github.com/stretchr/testify/mock"
)

// VersionServiceClient is an autogenerated mock type for the VersionServiceClient type
type VersionServiceClient struct {
	mock.Mock
}

// Get provides a mock function with given fields: _a0, _a1
func (_m *VersionServiceClient) Get(_a0 context.Context, _a1 *connect.Request[apiv1.VersionServiceGetRequest]) (*connect.Response[apiv1.VersionServiceGetResponse], error) {
	ret := _m.Called(_a0, _a1)

	var r0 *connect.Response[apiv1.VersionServiceGetResponse]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.VersionServiceGetRequest]) (*connect.Response[apiv1.VersionServiceGetResponse], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[apiv1.VersionServiceGetRequest]) *connect.Response[apiv1.VersionServiceGetResponse]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[apiv1.VersionServiceGetResponse])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[apiv1.VersionServiceGetRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

type mockConstructorTestingTNewVersionServiceClient interface {
	mock.TestingT
	Cleanup(func())
}

// NewVersionServiceClient creates a new instance of VersionServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
func NewVersionServiceClient(t mockConstructorTestingTNewVersionServiceClient) *VersionServiceClient {
	mock := &VersionServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
