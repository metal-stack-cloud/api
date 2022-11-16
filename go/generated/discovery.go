// Code generated discover.go. DO NOT EDIT.
package generated

import (
	adminv1 "github.com/metal-stack-cloud/api/go/admin/v1"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"
	statusv1 "github.com/metal-stack-cloud/api/go/status/v1"
	"google.golang.org/grpc"
)

func NewGRPCWithDisoveredClientServices() *grpc.Server {
	server := grpc.NewServer()

	adminv1.RegisterTenantServiceServer(server, nil)
	apiv1.RegisterTenantServiceServer(server, nil)
	apiv1.RegisterHealthServiceServer(server, nil)
	apiv1.RegisterIPServiceServer(server, nil)
	apiv1.RegisterTokenServiceServer(server, nil)
	apiv1.RegisterClusterServiceServer(server, nil)
	apiv1.RegisterPaymentServiceServer(server, nil)
	apiv1.RegisterVersionServiceServer(server, nil)
	apiv1.RegisterVolumeServiceServer(server, nil)
	apiv1.RegisterSnapshotServiceServer(server, nil)
	apiv1.RegisterAssetServiceServer(server, nil)
	statusv1.RegisterMessageServiceServer(server, nil)
	statusv1.RegisterStatusServiceServer(server, nil)

	return server
}
