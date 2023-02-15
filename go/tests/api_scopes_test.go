package apitests

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/jhump/protoreflect/desc/protoparse"
	v1 "github.com/metal-stack-cloud/api/go/api/v1"
	"github.com/stretchr/testify/require"
	"google.golang.org/protobuf/types/descriptorpb"

	"golang.org/x/exp/slices"
)

type (
	tenant     struct{}
	project    struct{}
	admin      struct{}
	visibility struct{}
)

func (tenant) Get(methodOpts []*descriptorpb.UninterpretedOption) (scopes []string) {
	scopes = getScopes(methodOpts, []string{
		v1.TenantRole_TENANT_ROLE_OWNER.String(),
		v1.TenantRole_TENANT_ROLE_EDITOR.String(),
		v1.TenantRole_TENANT_ROLE_VIEWER.String(),
	})
	return
}

func (project) Get(methodOpts []*descriptorpb.UninterpretedOption) (scopes []string) {
	scopes = getScopes(methodOpts, []string{
		v1.ProjectRole_PROJECT_ROLE_OWNER.String(),
		v1.ProjectRole_PROJECT_ROLE_EDITOR.String(),
		v1.ProjectRole_PROJECT_ROLE_VIEWER.String(),
	})
	return
}

func (admin) Get(methodOpts []*descriptorpb.UninterpretedOption) (scopes []string) {
	scopes = getScopes(methodOpts, []string{
		v1.AdminRole_ADMIN_ROLE_EDITOR.String(),
		v1.AdminRole_ADMIN_ROLE_VIEWER.String(),
	})
	return
}

func (visibility) Get(methodOpts []*descriptorpb.UninterpretedOption) (scopes []string) {
	scopes = getScopes(methodOpts, []string{
		v1.Visibility_VISIBILITY_PUBLIC.String(),
		v1.Visibility_VISIBILITY_PRIVATE.String(),
	})
	return
}

func getScopes(methodOpts []*descriptorpb.UninterpretedOption, identifiers []string) (scopes []string) {
	for _, methodOpt := range methodOpts {
		for _, namePart := range methodOpt.Name {
			if !*namePart.IsExtension {
				continue
			}
			if slices.Contains(identifiers, *methodOpt.IdentifierValue) {
				scopes = append(scopes, *methodOpt.IdentifierValue)
			}
		}
	}
	return
}

func getProtos(root string) ([]string, error) {
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
	)

	files, err := walk("../../proto")
	if err != nil {
		return nil, err
	}
	return files, nil
}

func Test_APIScopes(t *testing.T) {
	files, err := getProtos("../../proto")
	if err != nil {
		require.NoError(t, err)
	}

	for _, f := range files {
		p := protoparse.Parser{}
		fds, err := p.ParseFilesButDoNotLink(f)
		if err != nil {
			require.NoError(t, err)
		}
		for _, fd := range fds {
			for _, serviceDesc := range fd.GetService() {
				for _, method := range serviceDesc.GetMethod() {
					var (
						methodName  = fmt.Sprintf("/%s.%s/%s", *fd.Package, *serviceDesc.Name, *method.Name)
						methodOpts  = method.Options.GetUninterpretedOption()
						methodScope = ""
						scopes      = map[string][]string{
							"tenant scope":     tenant{}.Get(methodOpts),
							"project scope":    project{}.Get(methodOpts),
							"admin scope":      admin{}.Get(methodOpts),
							"visibility scope": visibility{}.Get(methodOpts),
						}
						allScopeNames = func() (names []string) {
							for name := range scopes {
								names = append(names, name)
							}
							return
						}()
					)

					for name, s := range scopes {
						if len(s) > 0 {
							if methodScope != "" {
								t.Errorf("api service method: %q can not have %s and %s (%s) at the same time. only one scope is allowed.", methodName, methodScope, name, s)
							}
							methodScope = fmt.Sprintf("%s (%s)", name, s)
						}
					}

					if methodScope == "" {
						t.Errorf("api service method: %q has no scope defined. one scope needs to be defined though. use one of the following scopes: %s", methodName, allScopeNames)
					}
				}
			}
		}
	}

}
