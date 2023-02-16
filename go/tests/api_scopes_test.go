package apitests

import (
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"testing"

	v1 "github.com/metal-stack-cloud/api/go/api/v1"
	"github.com/metal-stack-cloud/api/go/tests/protoparser"
	"github.com/stretchr/testify/require"
	"google.golang.org/protobuf/types/descriptorpb"

	"golang.org/x/exp/maps"
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

	files, err := walk(root)
	if err != nil {
		return nil, err
	}
	return files, nil
}

func Test_APIScopes(t *testing.T) {
	err := validateProto("../../proto")
	require.NoError(t, err)
	err = validateProto("./testproto")

	errs := errors.Join(
		errors.New("api service method: \"/api.v1.WrongProjectService/Get\" has project scope but request payload \"WrongProjectServiceGetRequest\" does not have a project field"),
		errors.New("api service method: \"/api.v1.WrongProjectService/List\" has no scope defined. one scope needs to be defined though. use one of the following scopes: [admin scope project scope tenant scope visibility scope]"),
		errors.New("api service method: \"/api.v1.WrongProjectService/Update\" can not have admin scope ([ADMIN_ROLE_VIEWER]) and project scope ([PROJECT_ROLE_OWNER]) at the same time. only one scope is allowed."),
		errors.New("api service method: \"/api.v1.WrongProjectService/Delete\" can not have admin scope ([ADMIN_ROLE_VIEWER]) and visibility scope ([VISIBILITY_PUBLIC]) at the same time. only one scope is allowed."),
	)

	require.Equal(t, err, errs)
}

func validateProto(root string) error {

	files, err := getProtos(root)
	if err != nil {
		return err
	}

	var errs []error
	for _, filename := range files {
		fd, err := protoparser.Parse(filename)
		if err != nil {
			return err
		}
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

				// Sort all to have stable results
				slices.Sort(allScopeNames)
				scopeKeys := maps.Keys(scopes)
				slices.Sort(scopeKeys)

				for _, name := range scopeKeys {
					s := scopes[name]
					if len(s) > 0 {
						if methodScope != "" {
							errs = append(errs, fmt.Errorf("api service method: %q can not have %s and %s (%s) at the same time. only one scope is allowed.", methodName, methodScope, name, s))
						}
						methodScope = fmt.Sprintf("%s (%s)", name, s)
					}

					if name == "project scope" && len(s) > 0 {
						projectFound := false
						projectRequest := ""
						for _, mt := range fd.GetMessageType() {
							if *mt.Name != method.GetInputType() {
								continue
							}
							for _, field := range mt.Field {
								if *field.Name == "project" {
									projectFound = true
								}
							}
							projectRequest = *mt.Name
						}
						if !projectFound {
							errs = append(errs, fmt.Errorf("api service method: %q has project scope but request payload %q does not have a project field", methodName, projectRequest))
						}
					}
				}

				if methodScope == "" {
					errs = append(errs, fmt.Errorf("api service method: %q has no scope defined. one scope needs to be defined though. use one of the following scopes: %s", methodName, allScopeNames))
				}
			}
		}
	}
	return errors.Join(errs...)
}
