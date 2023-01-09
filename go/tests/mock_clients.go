package apitests

import (
	"testing"

	"github.com/metal-stack-cloud/api/go/admin/v1/adminv1connect"
	"github.com/metal-stack-cloud/api/go/api/v1/apiv1connect"
	"github.com/metal-stack-cloud/api/go/status/v1/statusv1connect"
	adminmocks "github.com/metal-stack-cloud/api/go/tests/mocks/admin/v1/adminv1connect"
	apimocks "github.com/metal-stack-cloud/api/go/tests/mocks/api/v1/apiv1connect"
	statusmocks "github.com/metal-stack-cloud/api/go/tests/mocks/status/v1/statusv1connect"
	"github.com/stretchr/testify/mock"
)

// TODO: it would be nice if the clients and also these mock clients would be generated... this way, it's a lot of work.

type (
	wrapper struct {
		t *testing.T
	}
	api struct {
		asset   *apimocks.AssetServiceClient
		cluster *apimocks.ClusterServiceClient
		health  *apimocks.HealthServiceClient
		ip      *apimocks.IPServiceClient
		payment *apimocks.PaymentServiceClient
		tenant  *apimocks.TenantServiceClient
		token   *apimocks.TokenServiceClient
		version *apimocks.VersionServiceClient
		volume  *apimocks.VolumeServiceClient
	}
	admin struct {
		payment *adminmocks.PaymentServiceClient
		tenant  *adminmocks.TenantServiceClient
	}
	status struct {
		message *statusmocks.MessageServiceClient
		status  *statusmocks.StatusServiceClient
	}

	APIMockFns struct {
		Asset   func(m *mock.Mock)
		Cluster func(m *mock.Mock)
		Health  func(m *mock.Mock)
		IP      func(m *mock.Mock)
		Payment func(m *mock.Mock)
		Tenant  func(m *mock.Mock)
		Token   func(m *mock.Mock)
		Version func(m *mock.Mock)
		Volume  func(m *mock.Mock)
	}
	AdminMockFns struct {
		Payment func(m *mock.Mock)
		Tenant  func(m *mock.Mock)
	}
	StatusMockFns struct {
		Message func(m *mock.Mock)
		Status  func(m *mock.Mock)
	}
)

func New(t *testing.T) *wrapper {
	return &wrapper{t: t}
}

func (w wrapper) API(fns *APIMockFns) *api {
	return newapi(w.t, fns)
}

func (w wrapper) Admin(fns *AdminMockFns) *admin {
	return newadmin(w.t, fns)
}

func (w wrapper) Status(fns *StatusMockFns) *status {
	return newstatus(w.t, fns)
}

func newapi(t *testing.T, fns *APIMockFns) *api {
	a := &api{
		asset:   apimocks.NewAssetServiceClient(t),
		cluster: apimocks.NewClusterServiceClient(t),
		health:  apimocks.NewHealthServiceClient(t),
		ip:      apimocks.NewIPServiceClient(t),
		payment: apimocks.NewPaymentServiceClient(t),
		tenant:  apimocks.NewTenantServiceClient(t),
		token:   apimocks.NewTokenServiceClient(t),
		version: apimocks.NewVersionServiceClient(t),
		volume:  apimocks.NewVolumeServiceClient(t),
	}

	if fns != nil {
		if fns.Asset != nil {
			fns.Asset(&a.asset.Mock)
		}
		if fns.Cluster != nil {
			fns.Cluster(&a.cluster.Mock)
		}
		if fns.Health != nil {
			fns.Health(&a.health.Mock)
		}
		if fns.IP != nil {
			fns.IP(&a.ip.Mock)
		}
		if fns.Payment != nil {
			fns.Payment(&a.payment.Mock)
		}
		if fns.Tenant != nil {
			fns.Tenant(&a.tenant.Mock)
		}
		if fns.Token != nil {
			fns.Token(&a.token.Mock)
		}
		if fns.Version != nil {
			fns.Version(&a.version.Mock)
		}
		if fns.Volume != nil {
			fns.Volume(&a.volume.Mock)
		}
	}

	return a
}

func (c api) Asset() apiv1connect.AssetServiceClient {
	return c.asset
}

func (c api) Cluster() apiv1connect.ClusterServiceClient {
	return c.cluster
}

func (c api) Health() apiv1connect.HealthServiceClient {
	return c.health
}

func (c api) IP() apiv1connect.IPServiceClient {
	return c.ip
}

func (c api) Payment() apiv1connect.PaymentServiceClient {
	return c.payment
}

func (c api) Tenant() apiv1connect.TenantServiceClient {
	return c.tenant
}

func (c api) Token() apiv1connect.TokenServiceClient {
	return c.token
}

func (c api) Version() apiv1connect.VersionServiceClient {
	return c.version
}

func (c api) Volume() apiv1connect.VolumeServiceClient {
	return c.volume
}

func newadmin(t *testing.T, fns *AdminMockFns) *admin {
	a := &admin{
		payment: adminmocks.NewPaymentServiceClient(t),
		tenant:  adminmocks.NewTenantServiceClient(t),
	}

	if fns != nil {
		if fns.Payment != nil {
			fns.Payment(&a.payment.Mock)
		}
		if fns.Tenant != nil {
			fns.Tenant(&a.tenant.Mock)
		}
	}

	return a
}

func (c admin) Payment() adminv1connect.PaymentServiceClient {
	return c.payment
}

func (c admin) Tenant() adminv1connect.TenantServiceClient {
	return c.tenant
}

func newstatus(t *testing.T, fns *StatusMockFns) *status {
	s := &status{
		message: statusmocks.NewMessageServiceClient(t),
		status:  statusmocks.NewStatusServiceClient(t),
	}

	if fns != nil {
		if fns.Message != nil {
			fns.Message(&s.message.Mock)
		}
		if fns.Status != nil {
			fns.Status(&s.status.Mock)
		}
	}

	return s
}

func (c status) Message() statusv1connect.MessageServiceClient {
	return c.message
}

func (c status) Status() statusv1connect.StatusServiceClient {
	return c.status
}
