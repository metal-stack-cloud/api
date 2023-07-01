// Code generated by mockery v2.30.16. DO NOT EDIT.

package client

import (
	apiv1connect "github.com/metal-stack-cloud/api/go/api/v1/apiv1connect"

	mock "github.com/stretchr/testify/mock"
)

// Apiv1 is an autogenerated mock type for the Apiv1 type
type Apiv1 struct {
	mock.Mock
}

// Asset provides a mock function with given fields:
func (_m *Apiv1) Asset() apiv1connect.AssetServiceClient {
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
func (_m *Apiv1) Cluster() apiv1connect.ClusterServiceClient {
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
func (_m *Apiv1) Health() apiv1connect.HealthServiceClient {
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
func (_m *Apiv1) IP() apiv1connect.IPServiceClient {
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
func (_m *Apiv1) Payment() apiv1connect.PaymentServiceClient {
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

// Snapshot provides a mock function with given fields:
func (_m *Apiv1) Snapshot() apiv1connect.SnapshotServiceClient {
	ret := _m.Called()

	var r0 apiv1connect.SnapshotServiceClient
	if rf, ok := ret.Get(0).(func() apiv1connect.SnapshotServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(apiv1connect.SnapshotServiceClient)
		}
	}

	return r0
}

// Tenant provides a mock function with given fields:
func (_m *Apiv1) Tenant() apiv1connect.TenantServiceClient {
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
func (_m *Apiv1) Token() apiv1connect.TokenServiceClient {
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
func (_m *Apiv1) Version() apiv1connect.VersionServiceClient {
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
func (_m *Apiv1) Volume() apiv1connect.VolumeServiceClient {
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

// NewApiv1 creates a new instance of Apiv1. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewApiv1(t interface {
	mock.TestingT
	Cleanup(func())
}) *Apiv1 {
	mock := &Apiv1{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}