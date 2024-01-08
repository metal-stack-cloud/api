// Code generated generate_clients.go. DO NOT EDIT.
package client

import (
	compress "github.com/klauspost/connect-compress/v2"

	"github.com/metal-stack-cloud/api/go/admin/v1/adminv1connect"
	"github.com/metal-stack-cloud/api/go/api/v1/apiv1connect"
	"github.com/metal-stack-cloud/api/go/status/v1/statusv1connect"
)

type (
	Client interface {
		Adminv1() Adminv1
		Apiv1() Apiv1
		Statusv1() Statusv1
	}
	client struct {
		config DialConfig
	}
	Adminv1 interface {
		Cluster() adminv1connect.ClusterServiceClient
		Payment() adminv1connect.PaymentServiceClient
		Storage() adminv1connect.StorageServiceClient
		Tenant() adminv1connect.TenantServiceClient
		Token() adminv1connect.TokenServiceClient
	}

	adminv1 struct {
		clusterservice adminv1connect.ClusterServiceClient
		paymentservice adminv1connect.PaymentServiceClient
		storageservice adminv1connect.StorageServiceClient
		tenantservice  adminv1connect.TenantServiceClient
		tokenservice   adminv1connect.TokenServiceClient
	}

	Apiv1 interface {
		Asset() apiv1connect.AssetServiceClient
		Cluster() apiv1connect.ClusterServiceClient
		Health() apiv1connect.HealthServiceClient
		IP() apiv1connect.IPServiceClient
		Method() apiv1connect.MethodServiceClient
		Payment() apiv1connect.PaymentServiceClient
		Project() apiv1connect.ProjectServiceClient
		Tenant() apiv1connect.TenantServiceClient
		Token() apiv1connect.TokenServiceClient
		Version() apiv1connect.VersionServiceClient
		Volume() apiv1connect.VolumeServiceClient
		Snapshot() apiv1connect.SnapshotServiceClient
	}

	apiv1 struct {
		assetservice    apiv1connect.AssetServiceClient
		clusterservice  apiv1connect.ClusterServiceClient
		healthservice   apiv1connect.HealthServiceClient
		ipservice       apiv1connect.IPServiceClient
		methodservice   apiv1connect.MethodServiceClient
		paymentservice  apiv1connect.PaymentServiceClient
		projectservice  apiv1connect.ProjectServiceClient
		tenantservice   apiv1connect.TenantServiceClient
		tokenservice    apiv1connect.TokenServiceClient
		versionservice  apiv1connect.VersionServiceClient
		volumeservice   apiv1connect.VolumeServiceClient
		snapshotservice apiv1connect.SnapshotServiceClient
	}

	Statusv1 interface {
		Message() statusv1connect.MessageServiceClient
		Status() statusv1connect.StatusServiceClient
	}

	statusv1 struct {
		messageservice statusv1connect.MessageServiceClient
		statusservice  statusv1connect.StatusServiceClient
	}
)

func New(config DialConfig) Client {
	return &client{
		config: config,
	}
}

func (c client) Adminv1() Adminv1 {
	a := &adminv1{
		clusterservice: adminv1connect.NewClusterServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		paymentservice: adminv1connect.NewPaymentServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		storageservice: adminv1connect.NewStorageServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		tenantservice: adminv1connect.NewTenantServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		tokenservice: adminv1connect.NewTokenServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
	}
	return a
}

func (c *adminv1) Cluster() adminv1connect.ClusterServiceClient {
	return c.clusterservice
}
func (c *adminv1) Payment() adminv1connect.PaymentServiceClient {
	return c.paymentservice
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

func (c client) Apiv1() Apiv1 {
	a := &apiv1{
		assetservice: apiv1connect.NewAssetServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		clusterservice: apiv1connect.NewClusterServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		healthservice: apiv1connect.NewHealthServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		ipservice: apiv1connect.NewIPServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		methodservice: apiv1connect.NewMethodServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		paymentservice: apiv1connect.NewPaymentServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		projectservice: apiv1connect.NewProjectServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		tenantservice: apiv1connect.NewTenantServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		tokenservice: apiv1connect.NewTokenServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		versionservice: apiv1connect.NewVersionServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		volumeservice: apiv1connect.NewVolumeServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		snapshotservice: apiv1connect.NewSnapshotServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
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
func (c *apiv1) Version() apiv1connect.VersionServiceClient {
	return c.versionservice
}
func (c *apiv1) Volume() apiv1connect.VolumeServiceClient {
	return c.volumeservice
}
func (c *apiv1) Snapshot() apiv1connect.SnapshotServiceClient {
	return c.snapshotservice
}

func (c client) Statusv1() Statusv1 {
	a := &statusv1{
		messageservice: statusv1connect.NewMessageServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
		statusservice: statusv1connect.NewStatusServiceClient(
			c.config.HttpClient(),
			c.config.BaseURL,
			compress.WithAll(compress.LevelBalanced),
		),
	}
	return a
}

func (c *statusv1) Message() statusv1connect.MessageServiceClient {
	return c.messageservice
}
func (c *statusv1) Status() statusv1connect.StatusServiceClient {
	return c.statusservice
}
