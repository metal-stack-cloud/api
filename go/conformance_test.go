package main

import (
	"fmt"
	"testing"

	"github.com/jhump/protoreflect/grpcreflect"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"
	"github.com/metal-stack-cloud/api/go/generated"
	"google.golang.org/protobuf/proto"
)

func Test_API(t *testing.T) {
	server := generated.NewGRPCWithDisoveredClientServices()

	services, err := grpcreflect.LoadServiceDescriptors(server)
	if err != nil {
		return nil, err
	}

	for name, descriptor := range services {
		descriptorProto := descriptor.AsServiceDescriptorProto()
		for j := 0; j < len(descriptorProto.Method); j++ {
			method := descriptorProto.Method[j]

			methodName := fmt.Sprintf("/%s/%s", name, *method.Name)

			methodOpts := method.Options
			tenantRoles := proto.GetExtension(methodOpts, apiv1.E_TenantRoles).([]apiv1.TenantRole)
			for _, tenantRole := range tenantRoles {
				hasTenantRole = true
				break
			}

			projectRoles := proto.GetExtension(methodOpts, apiv1.E_ProjectRoles).([]apiv1.ProjectRole)
			for _, projectRole := range projectRoles {
				hasProjectRole = true
				break
			}
			adminRoles := proto.GetExtension(methodOpts, apiv1.E_AdminRoles).([]apiv1.AdminRole)
			for _, adminRole := range adminRoles {
				hasAdminRole = true
				break
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
		}
	}

	t.Fail()
}

// func (s *ServicePermissions) validate() error {
// 	if s.hasAdminRole() && (s.hasProjectRole() || s.hasTenantRole() || s.hasVisibility()) {
// 		return fmt.Errorf("admin role and other roles are not supported")
// 	}
// 	if s.hasProjectRole() && (s.hasAdminRole() || s.hasTenantRole() || s.hasVisibility()) {
// 		return fmt.Errorf("project role and other roles are not supported")
// 	}
// 	if s.hasTenantRole() && (s.hasAdminRole() || s.hasProjectRole() || s.hasVisibility()) {
// 		return fmt.Errorf("tenant role and other roles are not supported")
// 	}
// 	if s.hasVisibility() && (s.hasAdminRole() || s.hasTenantRole() || s.hasProjectRole()) {
// 		return fmt.Errorf("public visibility and other roles are not supported")
// 	}
// 	return nil
// }
// func (s *ServicePermissions) hasTenantRole() bool {
// 	return len(s.Roles.Tenant.Editor) > 0 || len(s.Roles.Tenant.Owner) > 0 || len(s.Roles.Tenant.Viewer) > 0
// }
// func (s *ServicePermissions) hasProjectRole() bool {
// 	return len(s.Roles.Project.Editor) > 0 || len(s.Roles.Project.Owner) > 0 || len(s.Roles.Project.Viewer) > 0
// }
// func (s *ServicePermissions) hasAdminRole() bool {
// 	return len(s.Roles.Admin.Editor) > 0 || len(s.Roles.Admin.Viewer) > 0
// }

// func (s *ServicePermissions) hasVisibility() bool {
// 	return len(s.Visibility.Public) > 0
// }
