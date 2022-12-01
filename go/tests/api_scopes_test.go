package apitests

// import (
// 	"fmt"
// 	"testing"

// 	"github.com/metal-stack-cloud/api/go/permissions"
// 	"github.com/stretchr/testify/require"
// )

// func Test_APIScopes(t *testing.T) {

// 	servicePermissions, err := permissions.Get()
// 	require.NoError(t, err)
// 	for _, method := range servicePermissions.Methods {
// 		var (
// 			scopes = map[string][]string{
// 				"tenant scope":     tenant{}.Get(method.Options),
// 				"project scope":    project{}.Get(method.Options),
// 				"admin scope":      admin{}.Get(method.Options),
// 				"visibility scope": visibility{}.Get(method.Options),
// 			}
// 			allScopeNames = func() (names []string) {
// 				for name := range scopes {
// 					names = append(names, name)
// 				}
// 				return
// 			}()
// 		)
// 		for name, s := range scopes {
// 			if len(s) > 0 {
// 				if methodScope != "" {
// 					t.Errorf("api service method: %q can not have %s and %s (%s) at the same time. only one scope is allowed.", methodName, methodScope, name, s)
// 				}
// 				methodScope = fmt.Sprintf("%s (%s)", name, s)
// 			}
// 		}

// 		if methodScope == "" {
// 			t.Errorf("api service method: %q has no scope defined. one scope needs to be defined though. use one of the following scopes: %s", methodName, allScopeNames)
// 		}
// 	}

// }
