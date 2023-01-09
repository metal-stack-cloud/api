// Code generated by mockery v2.15.0. DO NOT EDIT.

package client

import (
	apiv1connect "github.com/metal-stack-cloud/api/go/api/v1/apiv1connect"
	mock "github.com/stretchr/testify/mock"
)

// Client is an autogenerated mock type for the Client type
type Client struct {
	mock.Mock
}

// Asset provides a mock function with given fields:
func (_m *Client) Asset() apiv1connect.AssetServiceClient {
	ret := _m.Called()

	var r0 apiv1connect.AssetServiceClient
	if rf, ok := ret.Get(0).(func() apiv1connect.AssetServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(apiv1connect.AssetServiceClient)
		}
	}

	return r0
}

// Cluster provides a mock function with given fields:
func (_m *Client) Cluster() apiv1connect.ClusterServiceClient {
	ret := _m.Called()

	var r0 apiv1connect.ClusterServiceClient
	if rf, ok := ret.Get(0).(func() apiv1connect.ClusterServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(apiv1connect.ClusterServiceClient)
		}
	}

	return r0
}

// Health provides a mock function with given fields:
func (_m *Client) Health() apiv1connect.HealthServiceClient {
	ret := _m.Called()

	var r0 apiv1connect.HealthServiceClient
	if rf, ok := ret.Get(0).(func() apiv1connect.HealthServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(apiv1connect.HealthServiceClient)
		}
	}

	return r0
}

// IP provides a mock function with given fields:
func (_m *Client) IP() apiv1connect.IPServiceClient {
	ret := _m.Called()

	var r0 apiv1connect.IPServiceClient
	if rf, ok := ret.Get(0).(func() apiv1connect.IPServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(apiv1connect.IPServiceClient)
		}
	}

	return r0
}

// Payment provides a mock function with given fields:
func (_m *Client) Payment() apiv1connect.PaymentServiceClient {
	ret := _m.Called()

	var r0 apiv1connect.PaymentServiceClient
	if rf, ok := ret.Get(0).(func() apiv1connect.PaymentServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(apiv1connect.PaymentServiceClient)
		}
	}

	return r0
}

// Tenant provides a mock function with given fields:
func (_m *Client) Tenant() apiv1connect.TenantServiceClient {
	ret := _m.Called()

	var r0 apiv1connect.TenantServiceClient
	if rf, ok := ret.Get(0).(func() apiv1connect.TenantServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(apiv1connect.TenantServiceClient)
		}
	}

	return r0
}

// Token provides a mock function with given fields:
func (_m *Client) Token() apiv1connect.TokenServiceClient {
	ret := _m.Called()

	var r0 apiv1connect.TokenServiceClient
	if rf, ok := ret.Get(0).(func() apiv1connect.TokenServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(apiv1connect.TokenServiceClient)
		}
	}

	return r0
}

// Version provides a mock function with given fields:
func (_m *Client) Version() apiv1connect.VersionServiceClient {
	ret := _m.Called()

	var r0 apiv1connect.VersionServiceClient
	if rf, ok := ret.Get(0).(func() apiv1connect.VersionServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(apiv1connect.VersionServiceClient)
		}
	}

	return r0
}

// Volume provides a mock function with given fields:
func (_m *Client) Volume() apiv1connect.VolumeServiceClient {
	ret := _m.Called()

	var r0 apiv1connect.VolumeServiceClient
	if rf, ok := ret.Get(0).(func() apiv1connect.VolumeServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(apiv1connect.VolumeServiceClient)
		}
	}

	return r0
}

type mockConstructorTestingTNewClient interface {
	mock.TestingT
	Cleanup(func())
}

// NewClient creates a new instance of Client. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
func NewClient(t mockConstructorTestingTNewClient) *Client {
	mock := &Client{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
