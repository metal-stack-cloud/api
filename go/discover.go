package main

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/jhump/protoreflect/desc/protoparse"
	v1 "github.com/metal-stack-cloud/api/go/api/v1"
	"github.com/metal-stack-cloud/api/go/permissions"
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
			Admin:   &permissions.Admin{Editor: make(map[string]bool), Viewer: make(map[string]bool)},
			Tenant:  &permissions.Tenant{Owner: make(map[string]bool), Editor: make(map[string]bool), Viewer: make(map[string]bool)},
			Project: &permissions.Project{Owner: make(map[string]bool), Editor: make(map[string]bool), Viewer: make(map[string]bool)},
		}
		methods    = permissions.Methods{}
		visibility = permissions.Visibility{
			Public: map[string]bool{
				// Allow service reflection to list available methods
				serverReflectionInfo: true,
			},
			Private: map[string]bool{},
		}
	)

	files, err := walk(root)
	if err != nil {
		return nil, err
	}

	for _, f := range files {
		p := protoparse.Parser{}
		fds, err := p.ParseFilesButDoNotLink(f)
		if err != nil {
			return nil, err
		}
		for _, fd := range fds {
			for _, serviceDesc := range fd.GetService() {
				for _, method := range serviceDesc.GetMethod() {
					methodName := fmt.Sprintf("/%s.%s/%s", *fd.Package, *serviceDesc.Name, *method.Name)
					methodOpts := method.Options.GetUninterpretedOption()
					for _, methodOpt := range methodOpts {
						for _, namePart := range methodOpt.Name {
							if !*namePart.IsExtension {
								continue
							}

							// Tenant
							switch *methodOpt.IdentifierValue {
							case v1.TenantRole_TENANT_ROLE_OWNER.String():
								roles.Tenant.Owner[methodName] = true
							case v1.TenantRole_TENANT_ROLE_EDITOR.String():
								roles.Tenant.Editor[methodName] = true
							case v1.TenantRole_TENANT_ROLE_VIEWER.String():
								roles.Tenant.Viewer[methodName] = true
							case v1.TenantRole_TENANT_ROLE_UNSPECIFIED.String():
								// noop
							// Project
							case v1.ProjectRole_PROJECT_ROLE_OWNER.String():
								roles.Project.Owner[methodName] = true
							case v1.ProjectRole_PROJECT_ROLE_EDITOR.String():
								roles.Project.Editor[methodName] = true
							case v1.ProjectRole_PROJECT_ROLE_VIEWER.String():
								roles.Project.Viewer[methodName] = true
							case v1.ProjectRole_PROJECT_ROLE_UNSPECIFIED.String():
								// noop
							// Admin
							case v1.AdminRole_ADMIN_ROLE_EDITOR.String():
								roles.Admin.Editor[methodName] = true
							case v1.AdminRole_ADMIN_ROLE_VIEWER.String():
								roles.Admin.Viewer[methodName] = true
							case v1.AdminRole_ADMIN_ROLE_UNSPECIFIED.String():
								// noop
							// Visibility
							case v1.Visibility_VISIBILITY_PUBLIC.String():
								visibility.Public[methodName] = true
							case v1.Visibility_VISIBILITY_PRIVATE.String():
								visibility.Private[methodName] = true
							case v1.Visibility_VISIBILITY_UNSPECIFIED.String():
								// noop
							default:
								return nil, fmt.Errorf("unknonw method identifier value detected:%s", *methodOpt.IdentifierValue)

							}
							methods[methodName] = true
						}
					}
				}
			}
		}
	}

	sp := &permissions.ServicePermissions{
		Roles:      roles,
		Methods:    methods,
		Visibility: visibility,
	}
	return sp, nil
}
