package apitests

import (
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"slices"
	"strings"
	"testing"

	v1 "github.com/metal-stack-cloud/api/go/api/v1"
	"github.com/metal-stack-cloud/api/go/tests/protoparser"
	"github.com/stretchr/testify/require"
	"google.golang.org/protobuf/types/descriptorpb"
)

type (
	tenant     struct{}
	project    struct{}
	admin      struct{}
	visibility struct{}
	chargeable struct{}
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
		v1.Visibility_VISIBILITY_SELF.String(),
	})
	return
}
func (chargeable) Get(methodOpts []*descriptorpb.UninterpretedOption) (scopes []string) {
	scopes = getScopes(methodOpts, []string{
		v1.Chargeable_CHARGEABLE_TRUE.String(),
		v1.Chargeable_CHARGEABLE_FALSE.String(),
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
		errors.New("api service method: \"/api.v1.WrongProjectService/Get\" has apiv1.ProjectRole but request payload \"WrongProjectServiceGetRequest\" does not have a project field"),
		errors.New("api service method: \"/api.v1.WrongProjectService/List\" has no scope defined. one scope needs to be defined though. use one of the following scopes: [apiv1.AdminRole apiv1.Chargeable apiv1.ProjectRole apiv1.TenantRole apiv1.Visibility]"),
		errors.New("api service method: \"/api.v1.WrongProjectService/Update\" can not have apiv1.AdminRole ([ADMIN_ROLE_VIEWER]) and apiv1.ProjectRole ([PROJECT_ROLE_OWNER]) at the same time. only one scope is allowed."),
		errors.New("api service method: \"/api.v1.WrongProjectService/Delete\" can not have apiv1.AdminRole ([ADMIN_ROLE_VIEWER]) and apiv1.Visibility ([VISIBILITY_PUBLIC]) at the same time. only one scope is allowed."),
		errors.New("api service method: \"/api.v1.WrongProjectService/Charge\" is marked \"apiv1.Chargeable\" but has no project scope"),
		errors.New("api service method: \"/api.v1.WrongProjectService/Charge\" has no scope defined. one scope needs to be defined though. use one of the following scopes: [apiv1.AdminRole apiv1.Chargeable apiv1.ProjectRole apiv1.TenantRole apiv1.Visibility]"),
	)

	require.Equal(t, err, errs)
}

func validateProto(root string) error {
	var (
		tr v1.TenantRole
		pr v1.ProjectRole
		ar v1.AdminRole
		vr v1.Visibility
		cr v1.Chargeable

		trs = fmt.Sprintf("%T", tr)
		prs = fmt.Sprintf("%T", pr)
		ars = fmt.Sprintf("%T", ar)
		vrs = fmt.Sprintf("%T", vr)
		crs = fmt.Sprintf("%T", cr)

		// add all *rs from above here
		scopeKeys = []string{
			trs, prs, ars, vrs, crs,
		}
	)
	slices.Sort(scopeKeys)
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
						trs: tenant{}.Get(methodOpts),
						prs: project{}.Get(methodOpts),
						ars: admin{}.Get(methodOpts),
						vrs: visibility{}.Get(methodOpts),
						crs: chargeable{}.Get(methodOpts),
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

				for _, name := range scopeKeys {
					s := scopes[name]
					if len(s) > 0 {
						if methodScope != "" {
							errs = append(errs, fmt.Errorf("api service method: %q can not have %s and %s (%s) at the same time. only one scope is allowed.", methodName, methodScope, name, s))
						}
						// Chargeable must not be counted as scope
						if name != crs {
							methodScope = fmt.Sprintf("%s (%s)", name, s)
						}
					}

					if name == prs && len(s) > 0 {
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
							errs = append(errs, fmt.Errorf("api service method: %q has %s but request payload %q does not have a project field", methodName, prs, projectRequest))
						}
					}
				}

				if len(scopes[crs]) > 0 && len(scopes[prs]) < 1 {
					errs = append(errs, fmt.Errorf("api service method: %q is marked %q but has no project scope", methodName, crs))
				}

				if methodScope == "" {
					errs = append(errs, fmt.Errorf("api service method: %q has no scope defined. one scope needs to be defined though. use one of the following scopes: %s", methodName, allScopeNames))
				}
			}
		}
	}
	return errors.Join(errs...)
}
