package main

import (
	"fmt"
	"testing"

	"github.com/jhump/protoreflect/grpcreflect"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"
	"github.com/metal-stack-cloud/api/go/generated"
	"github.com/stretchr/testify/require"
	"google.golang.org/protobuf/proto"
)

func Test_API(t *testing.T) {
	server := generated.NewGRPCWithDisoveredClientServices()

	services, err := grpcreflect.LoadServiceDescriptors(server)
	require.NoError(t, err)

	for name, descriptor := range services {
		descriptorProto := descriptor.AsServiceDescriptorProto()
		for j := 0; j < len(descriptorProto.Method); j++ {
			var (
				hasTenantRole, hasProjectRole, hasAdminRole, hasVisibility bool
			)
			method := descriptorProto.Method[j]

			methodName := fmt.Sprintf("/%s/%s", name, *method.Name)

			methodOpts := method.Options
			tenantRoles := proto.GetExtension(methodOpts, apiv1.E_TenantRoles).([]apiv1.TenantRole)
			for _, tenantRole := range tenantRoles {
				if tenantRole != apiv1.TenantRole_TENANT_ROLE_UNSPECIFIED {
					hasTenantRole = true
				}
			}

			projectRoles := proto.GetExtension(methodOpts, apiv1.E_ProjectRoles).([]apiv1.ProjectRole)
			for _, projectRole := range projectRoles {
				if projectRole != apiv1.ProjectRole_PROJECT_ROLE_UNSPECIFIED {
					hasProjectRole = true
				}
			}
			adminRoles := proto.GetExtension(methodOpts, apiv1.E_AdminRoles).([]apiv1.AdminRole)
			for _, adminRole := range adminRoles {
				if adminRole != apiv1.AdminRole_ADMIN_ROLE_UNSPECIFIED {
					hasAdminRole = true
				}
			}
			vis := proto.GetExtension(methodOpts, apiv1.E_Visibility).(apiv1.Visibility)
			switch vis {
			case apiv1.Visibility_VISIBILITY_PUBLIC:
				hasVisibility = true
			case apiv1.Visibility_VISIBILITY_UNSPECIFIED:
				// noop
			default:
				// noop
			}

			if hasAdminRole && (hasProjectRole || hasTenantRole || hasVisibility) {
				t.Errorf("method: %q has admin roles and other roles", methodName)
			}
			if hasProjectRole && (hasAdminRole || hasTenantRole || hasVisibility) {
				t.Errorf("method: %q has project roles and other roles", methodName)
			}
			if hasTenantRole && (hasProjectRole || hasAdminRole || hasVisibility) {
				t.Errorf("method: %q has tenant roles and other roles", methodName)
			}
			if hasVisibility && (hasProjectRole || hasTenantRole || hasAdminRole) {
				t.Errorf("method: %q has public visibility and other roles", methodName)
			}
			if !(hasAdminRole || hasProjectRole || hasTenantRole || hasVisibility) {
				t.Errorf("method: %q has neither role nor visibility specified", methodName)
			}
		}
	}
}
