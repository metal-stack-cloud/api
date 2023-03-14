// Code generated by mockery v2.22.1. DO NOT EDIT.

package client

import (
	adminv1connect "github.com/metal-stack-cloud/api/go/admin/v1/adminv1connect"
	mock "github.com/stretchr/testify/mock"
)

// Client is an autogenerated mock type for the Client type
type Client struct {
	mock.Mock
}

// Payment provides a mock function with given fields:
func (_m *Client) Payment() adminv1connect.PaymentServiceClient {
	ret := _m.Called()

	var r0 adminv1connect.PaymentServiceClient
	if rf, ok := ret.Get(0).(func() adminv1connect.PaymentServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(adminv1connect.PaymentServiceClient)
		}
	}

	return r0
}

// Storage provides a mock function with given fields:
func (_m *Client) Storage() adminv1connect.StorageServiceClient {
	ret := _m.Called()

	var r0 adminv1connect.StorageServiceClient
	if rf, ok := ret.Get(0).(func() adminv1connect.StorageServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(adminv1connect.StorageServiceClient)
		}
	}

	return r0
}

// Tenant provides a mock function with given fields:
func (_m *Client) Tenant() adminv1connect.TenantServiceClient {
	ret := _m.Called()

	var r0 adminv1connect.TenantServiceClient
	if rf, ok := ret.Get(0).(func() adminv1connect.TenantServiceClient); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(adminv1connect.TenantServiceClient)
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
