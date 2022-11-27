package main

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/jhump/protoreflect/desc/protoparse"
	v1 "github.com/metal-stack-cloud/api/go/api/v1"
)

// serverReflectionInfo is always allowed to access to get a list of exposed services for example with grpcurl
const serverReflectionInfo = "/grpc.reflection.v1alpha.ServerReflection/ServerReflectionInfo"

type ServicePermissions struct {
	Roles      Roles
	Methods    Methods
	Visibility Visibility
}
type Admin struct {
	// TODO map from string to bool would be better
	Editor []string `json:"editor,omitempty"`
	Viewer []string `json:"viewer,omitempty"`
}
type Tenant struct {
	Owner  []string `json:"owner,omitempty"`
	Editor []string `json:"editor,omitempty"`
	Viewer []string `json:"viewer,omitempty"`
}
type Project struct {
	Owner  []string `json:"owner,omitempty"`
	Editor []string `json:"editor,omitempty"`
	Viewer []string `json:"viewer,omitempty"`
}
type Methods []string

// Roles
type Roles struct {
	Admin   *Admin   `json:"admin,omitempty"`
	Tenant  *Tenant  `json:"tenant,omitempty"`
	Project *Project `json:"project,omitempty"`
}

type Visibility struct {
	Public  map[string]bool `json:"public,omitempty"`
	Private map[string]bool `json:"private,omitempty"`
}

func main() {
	perms, err := servicePermissions("proto")
	if err != nil {
		panic(err)
	}
	j, _ := json.MarshalIndent(perms, "", "  ")
	fmt.Printf("%s\n", string(j))
}

func servicePermissions(root string) (*ServicePermissions, error) {
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
		roles = Roles{
			Admin:   &Admin{},
			Tenant:  &Tenant{},
			Project: &Project{},
		}
		methods    = Methods{}
		visibility = Visibility{
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
					// fmt.Printf("/%s.%s/%s\n", *fd.Package, *serviceDesc.Name, *method.Name)
					// fmt.Printf("\t %v\n", method.Options)
					// fmt.Printf("\t %v\n", method.Options.UninterpretedOption)

					methodName := fmt.Sprintf("/%s.%s/%s", *fd.Package, *serviceDesc.Name, *method.Name)
					methodOpts := method.Options.GetUninterpretedOption()
					// hasProjectRoles := proto.HasExtension(method.Options, v1.E_ProjectRoles)
					// tenantRoles := proto.GetExtension(method.Options, v1.E_TenantRoles)
					// adminRoles := proto.GetExtension(method.GetOptions(), v1.E_AdminRoles.TypeDescriptor().Type())
					// fmt.Printf("name: %s hasProjectRole :%t tenant role: %v %v\n", methodName, hasProjectRoles, tenantRoles, adminRoles)

					for _, methodOpt := range methodOpts {
						// tenantRoles := proto.GetExtension(methodOpt, v1.E_TenantRoles).([]v1.TenantRole)
						// fmt.Printf("methodName: %s tenant: %v", methodName, tenantRoles)

						for _, namePart := range methodOpt.Name {
							if !*namePart.IsExtension {
								continue
							}

							// fmt.Printf("method: %s identifier: %s \n", methodName, *methodOpt.IdentifierValue)
							switch *methodOpt.IdentifierValue {
							case v1.TenantRole_TENANT_ROLE_OWNER.String():
								roles.Tenant.Owner = append(roles.Tenant.Owner, methodName)
							case v1.TenantRole_TENANT_ROLE_EDITOR.String():
								roles.Tenant.Editor = append(roles.Tenant.Editor, methodName)
							case v1.TenantRole_TENANT_ROLE_VIEWER.String():
								roles.Tenant.Viewer = append(roles.Tenant.Viewer, methodName)
							case v1.TenantRole_TENANT_ROLE_UNSPECIFIED.String():
								// noop

							case v1.ProjectRole_PROJECT_ROLE_OWNER.String():
								roles.Project.Owner = append(roles.Project.Owner, methodName)
							case v1.ProjectRole_PROJECT_ROLE_EDITOR.String():
								roles.Project.Editor = append(roles.Project.Editor, methodName)
							case v1.ProjectRole_PROJECT_ROLE_VIEWER.String():
								roles.Project.Viewer = append(roles.Project.Viewer, methodName)
							case v1.ProjectRole_PROJECT_ROLE_UNSPECIFIED.String():
								// noop

							case v1.AdminRole_ADMIN_ROLE_EDITOR.String():
								roles.Admin.Editor = append(roles.Admin.Editor, methodName)
							case v1.AdminRole_ADMIN_ROLE_VIEWER.String():
								roles.Admin.Viewer = append(roles.Admin.Viewer, methodName)
							case v1.AdminRole_ADMIN_ROLE_UNSPECIFIED.String():
								// noop
							case v1.Visibility_VISIBILITY_PUBLIC.String():
								visibility.Public[methodName] = true
							case v1.Visibility_VISIBILITY_PRIVATE.String():
								visibility.Private[methodName] = true
							case v1.Visibility_VISIBILITY_UNSPECIFIED.String():
								// noop
							default:
								// noop

							}
							methods = append(methods, methodName)
						}
					}

				}
			}
		}
	}

	sp := &ServicePermissions{
		Roles:      roles,
		Methods:    methods,
		Visibility: visibility,
	}
	return sp, nil
}
