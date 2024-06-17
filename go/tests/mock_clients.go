// Code generated generate_clients.go. DO NOT EDIT.
package apitests

import (
	"testing"

	"github.com/metal-stack-cloud/api/go/admin/v1/adminv1connect"
	"github.com/metal-stack-cloud/api/go/api/v1/apiv1connect"
	apiclient "github.com/metal-stack-cloud/api/go/client"
	"github.com/metal-stack-cloud/api/go/status/v1/statusv1connect"
	adminv1mocks "github.com/metal-stack-cloud/api/go/tests/mocks/admin/v1/adminv1connect"
	apiv1mocks "github.com/metal-stack-cloud/api/go/tests/mocks/api/v1/apiv1connect"
	statusv1mocks "github.com/metal-stack-cloud/api/go/tests/mocks/status/v1/statusv1connect"

	"github.com/stretchr/testify/mock"
)

type (
	client struct {
		adminv1service  *adminv1
		apiv1service    *apiv1
		statusv1service *statusv1
	}

	ClientMockFns struct {
		Adminv1Mocks  *Adminv1MockFns
		Apiv1Mocks    *Apiv1MockFns
		Statusv1Mocks *Statusv1MockFns
	}

	wrapper struct {
		t *testing.T
	}
	adminv1 struct {
		clusterservice *adminv1mocks.ClusterServiceClient
		paymentservice *adminv1mocks.PaymentServiceClient
		projectservice *adminv1mocks.ProjectServiceClient
		storageservice *adminv1mocks.StorageServiceClient
		tenantservice  *adminv1mocks.TenantServiceClient
		tokenservice   *adminv1mocks.TokenServiceClient
	}

	Adminv1MockFns struct {
		Cluster func(m *mock.Mock)
		Payment func(m *mock.Mock)
		Project func(m *mock.Mock)
		Storage func(m *mock.Mock)
		Tenant  func(m *mock.Mock)
		Token   func(m *mock.Mock)
	}
	apiv1 struct {
		assetservice    *apiv1mocks.AssetServiceClient
		clusterservice  *apiv1mocks.ClusterServiceClient
		healthservice   *apiv1mocks.HealthServiceClient
		ipservice       *apiv1mocks.IPServiceClient
		methodservice   *apiv1mocks.MethodServiceClient
		paymentservice  *apiv1mocks.PaymentServiceClient
		projectservice  *apiv1mocks.ProjectServiceClient
		tenantservice   *apiv1mocks.TenantServiceClient
		tokenservice    *apiv1mocks.TokenServiceClient
		userservice     *apiv1mocks.UserServiceClient
		versionservice  *apiv1mocks.VersionServiceClient
		volumeservice   *apiv1mocks.VolumeServiceClient
		snapshotservice *apiv1mocks.SnapshotServiceClient
	}

	Apiv1MockFns struct {
		Asset    func(m *mock.Mock)
		Cluster  func(m *mock.Mock)
		Health   func(m *mock.Mock)
		IP       func(m *mock.Mock)
		Method   func(m *mock.Mock)
		Payment  func(m *mock.Mock)
		Project  func(m *mock.Mock)
		Tenant   func(m *mock.Mock)
		Token    func(m *mock.Mock)
		User     func(m *mock.Mock)
		Version  func(m *mock.Mock)
		Volume   func(m *mock.Mock)
		Snapshot func(m *mock.Mock)
	}
	statusv1 struct {
		messageservice *statusv1mocks.MessageServiceClient
		statusservice  *statusv1mocks.StatusServiceClient
	}

	Statusv1MockFns struct {
		Message func(m *mock.Mock)
		Status  func(m *mock.Mock)
	}
)

func New(t *testing.T) *wrapper {
	return &wrapper{t: t}
}

func (w wrapper) Client(fns *ClientMockFns) *client {
	return &client{
		adminv1service:  w.Adminv1(fns.Adminv1Mocks),
		apiv1service:    w.Apiv1(fns.Apiv1Mocks),
		statusv1service: w.Statusv1(fns.Statusv1Mocks),
	}
}

func (c *client) Adminv1() apiclient.Adminv1 {
	return c.adminv1service
}
func (c *client) Apiv1() apiclient.Apiv1 {
	return c.apiv1service
}
func (c *client) Statusv1() apiclient.Statusv1 {
	return c.statusv1service
}

func (w wrapper) Adminv1(fns *Adminv1MockFns) *adminv1 {
	return newadminv1(w.t, fns)
}

func newadminv1(t *testing.T, fns *Adminv1MockFns) *adminv1 {
	a := &adminv1{
		clusterservice: adminv1mocks.NewClusterServiceClient(t),
		paymentservice: adminv1mocks.NewPaymentServiceClient(t),
		projectservice: adminv1mocks.NewProjectServiceClient(t),
		storageservice: adminv1mocks.NewStorageServiceClient(t),
		tenantservice:  adminv1mocks.NewTenantServiceClient(t),
		tokenservice:   adminv1mocks.NewTokenServiceClient(t),
	}

	if fns != nil {
		if fns.Cluster != nil {
			fns.Cluster(&a.clusterservice.Mock)
		}
		if fns.Payment != nil {
			fns.Payment(&a.paymentservice.Mock)
		}
		if fns.Project != nil {
			fns.Project(&a.projectservice.Mock)
		}
		if fns.Storage != nil {
			fns.Storage(&a.storageservice.Mock)
		}
		if fns.Tenant != nil {
			fns.Tenant(&a.tenantservice.Mock)
		}
		if fns.Token != nil {
			fns.Token(&a.tokenservice.Mock)
		}

	}

	return a
}

func (c *adminv1) Cluster() adminv1connect.ClusterServiceClient {
	return c.clusterservice
}
func (c *adminv1) Payment() adminv1connect.PaymentServiceClient {
	return c.paymentservice
}
func (c *adminv1) Project() adminv1connect.ProjectServiceClient {
	return c.projectservice
}
func (c *adminv1) Storage() adminv1connect.StorageServiceClient {
	return c.storageservice
}
func (c *adminv1) Tenant() adminv1connect.TenantServiceClient {
	return c.tenantservice
}
func (c *adminv1) Token() adminv1connect.TokenServiceClient {
	return c.tokenservice
}

func (w wrapper) Apiv1(fns *Apiv1MockFns) *apiv1 {
	return newapiv1(w.t, fns)
}

func newapiv1(t *testing.T, fns *Apiv1MockFns) *apiv1 {
	a := &apiv1{
		assetservice:    apiv1mocks.NewAssetServiceClient(t),
		clusterservice:  apiv1mocks.NewClusterServiceClient(t),
		healthservice:   apiv1mocks.NewHealthServiceClient(t),
		ipservice:       apiv1mocks.NewIPServiceClient(t),
		methodservice:   apiv1mocks.NewMethodServiceClient(t),
		paymentservice:  apiv1mocks.NewPaymentServiceClient(t),
		projectservice:  apiv1mocks.NewProjectServiceClient(t),
		tenantservice:   apiv1mocks.NewTenantServiceClient(t),
		tokenservice:    apiv1mocks.NewTokenServiceClient(t),
		userservice:     apiv1mocks.NewUserServiceClient(t),
		versionservice:  apiv1mocks.NewVersionServiceClient(t),
		volumeservice:   apiv1mocks.NewVolumeServiceClient(t),
		snapshotservice: apiv1mocks.NewSnapshotServiceClient(t),
	}

	if fns != nil {
		if fns.Asset != nil {
			fns.Asset(&a.assetservice.Mock)
		}
		if fns.Cluster != nil {
			fns.Cluster(&a.clusterservice.Mock)
		}
		if fns.Health != nil {
			fns.Health(&a.healthservice.Mock)
		}
		if fns.IP != nil {
			fns.IP(&a.ipservice.Mock)
		}
		if fns.Method != nil {
			fns.Method(&a.methodservice.Mock)
		}
		if fns.Payment != nil {
			fns.Payment(&a.paymentservice.Mock)
		}
		if fns.Project != nil {
			fns.Project(&a.projectservice.Mock)
		}
		if fns.Tenant != nil {
			fns.Tenant(&a.tenantservice.Mock)
		}
		if fns.Token != nil {
			fns.Token(&a.tokenservice.Mock)
		}
		if fns.User != nil {
			fns.User(&a.userservice.Mock)
		}
		if fns.Version != nil {
			fns.Version(&a.versionservice.Mock)
		}
		if fns.Volume != nil {
			fns.Volume(&a.volumeservice.Mock)
		}
		if fns.Snapshot != nil {
			fns.Snapshot(&a.snapshotservice.Mock)
		}

	}

	return a
}

func (c *apiv1) Asset() apiv1connect.AssetServiceClient {
	return c.assetservice
}
func (c *apiv1) Cluster() apiv1connect.ClusterServiceClient {
	return c.clusterservice
}
func (c *apiv1) Health() apiv1connect.HealthServiceClient {
	return c.healthservice
}
func (c *apiv1) IP() apiv1connect.IPServiceClient {
	return c.ipservice
}
func (c *apiv1) Method() apiv1connect.MethodServiceClient {
	return c.methodservice
}
func (c *apiv1) Payment() apiv1connect.PaymentServiceClient {
	return c.paymentservice
}
func (c *apiv1) Project() apiv1connect.ProjectServiceClient {
	return c.projectservice
}
func (c *apiv1) Tenant() apiv1connect.TenantServiceClient {
	return c.tenantservice
}
func (c *apiv1) Token() apiv1connect.TokenServiceClient {
	return c.tokenservice
}
func (c *apiv1) User() apiv1connect.UserServiceClient {
	return c.userservice
}
func (c *apiv1) Version() apiv1connect.VersionServiceClient {
	return c.versionservice
}
func (c *apiv1) Volume() apiv1connect.VolumeServiceClient {
	return c.volumeservice
}
func (c *apiv1) Snapshot() apiv1connect.SnapshotServiceClient {
	return c.snapshotservice
}

func (w wrapper) Statusv1(fns *Statusv1MockFns) *statusv1 {
	return newstatusv1(w.t, fns)
}

func newstatusv1(t *testing.T, fns *Statusv1MockFns) *statusv1 {
	a := &statusv1{
		messageservice: statusv1mocks.NewMessageServiceClient(t),
		statusservice:  statusv1mocks.NewStatusServiceClient(t),
	}

	if fns != nil {
		if fns.Message != nil {
			fns.Message(&a.messageservice.Mock)
		}
		if fns.Status != nil {
			fns.Status(&a.statusservice.Mock)
		}

	}

	return a
}

func (c *statusv1) Message() statusv1connect.MessageServiceClient {
	return c.messageservice
}
func (c *statusv1) Status() statusv1connect.StatusServiceClient {
	return c.statusservice
}
