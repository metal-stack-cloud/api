package main

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	v1 "github.com/metal-stack-cloud/api/go/api/v1"
	"github.com/metal-stack-cloud/api/go/permissions"
	"github.com/metal-stack-cloud/api/go/tests/protoparser"
)

// serverReflectionInfo is always allowed to access to get a list of exposed services for example with grpcurl
const serverReflectionInfo = "/grpc.reflection.v1alpha.ServerReflection/ServerReflectionInfo"

func main() {
	perms, err := servicePermissions("../proto")
	if err != nil {
		panic(err)
	}
	j, err := json.MarshalIndent(perms, "", "  ")
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s\n", string(j))
}

func servicePermissions(root string) (*permissions.ServicePermissions, error) {
	var (
		walk = func(root string) ([]string, error) {
			var files []string
			err := filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
				if info.IsDir() {
					return nil
				}
				if strings.HasSuffix(info.Name(), ".proto") {
					files = append(files, path)
				}
				return nil
			})
			return files, err
		}
		roles = permissions.Roles{
			Admin:   &permissions.Admin{},
			Tenant:  &permissions.Tenant{},
			Project: &permissions.Project{},
		}
		methods    = permissions.Methods{}
		visibility = permissions.Visibility{
			Public: map[string]bool{
				// Allow service reflection to list available methods
				serverReflectionInfo: true,
			},
			Private: map[string]bool{},
		}
		chargeable = permissions.Chargeable{}
		auditable  = permissions.Auditable{}
	)

	files, err := walk(root)
	if err != nil {
		return nil, err
	}

	for _, filename := range files {
		fd, err := protoparser.Parse(filename)
		if err != nil {
			return nil, err
		}
		for _, serviceDesc := range fd.GetService() {
			for _, method := range serviceDesc.GetMethod() {
				methodName := fmt.Sprintf("/%s.%s/%s", *fd.Package, *serviceDesc.Name, *method.Name)
				methodOpts := method.Options.GetUninterpretedOption()
				for _, methodOpt := range methodOpts {
					for _, namePart := range methodOpt.Name {
						if !*namePart.IsExtension {
							continue
						}
						auditable[methodName] = true
						// Tenant
						switch *methodOpt.IdentifierValue {
						case v1.TenantRole_TENANT_ROLE_OWNER.String():
							roles.Tenant.Owner = append(roles.Tenant.Owner, methodName)
						case v1.TenantRole_TENANT_ROLE_EDITOR.String():
							roles.Tenant.Editor = append(roles.Tenant.Editor, methodName)
						case v1.TenantRole_TENANT_ROLE_VIEWER.String():
							roles.Tenant.Viewer = append(roles.Tenant.Viewer, methodName)
						case v1.TenantRole_TENANT_ROLE_UNSPECIFIED.String():
							// noop
						// Project
						case v1.ProjectRole_PROJECT_ROLE_OWNER.String():
							roles.Project.Owner = append(roles.Project.Owner, methodName)
						case v1.ProjectRole_PROJECT_ROLE_EDITOR.String():
							roles.Project.Editor = append(roles.Project.Editor, methodName)
						case v1.ProjectRole_PROJECT_ROLE_VIEWER.String():
							roles.Project.Viewer = append(roles.Project.Viewer, methodName)
						case v1.ProjectRole_PROJECT_ROLE_UNSPECIFIED.String():
							// noop
						// Admin
						case v1.AdminRole_ADMIN_ROLE_EDITOR.String():
							roles.Admin.Editor = append(roles.Admin.Editor, methodName)
						case v1.AdminRole_ADMIN_ROLE_VIEWER.String():
							roles.Admin.Viewer = append(roles.Admin.Viewer, methodName)
						case v1.AdminRole_ADMIN_ROLE_UNSPECIFIED.String():
							// noop
						// Visibility
						case v1.Visibility_VISIBILITY_PUBLIC.String():
							visibility.Public[methodName] = true
						case v1.Visibility_VISIBILITY_PRIVATE.String():
							visibility.Private[methodName] = true
						case v1.Visibility_VISIBILITY_UNSPECIFIED.String():
							// noop
						// Chargeable
						case v1.Chargeable_CHARGEABLE_TRUE.String():
							chargeable[methodName] = true
						case v1.Chargeable_CHARGEABLE_FALSE.String():
							chargeable[methodName] = false
						case v1.Chargeable_CHARGEABLE_UNSPECIFIED.String():
							// noop
						// Auditable
						case v1.Auditing_AUDITING_EXCLUDED.String():
							auditable[methodName] = false
						case v1.Auditing_AUDITING_INCLUDED.String():
							auditable[methodName] = true
						case v1.Auditing_AUDITING_UNSPECIFIED.String():
							auditable[methodName] = true
						// noop
						default:
							return nil, fmt.Errorf("unknown method identifier value detected:%s", *methodOpt.IdentifierValue)

						}
						methods[methodName] = true
					}
				}
			}
		}
	}

	sp := &permissions.ServicePermissions{
		Roles:      roles,
		Methods:    methods,
		Visibility: visibility,
		Chargeable: chargeable,
		Auditable:  auditable,
	}
	return sp, nil
}
