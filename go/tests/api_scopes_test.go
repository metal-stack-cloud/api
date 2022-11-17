package apitests

import (
	"fmt"
	"testing"

	"github.com/jhump/protoreflect/grpcreflect"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"
	"github.com/metal-stack-cloud/api/go/generated"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/descriptorpb"
)

type (
	tenant     struct{}
	project    struct{}
	admin      struct{}
	visibility struct{}
)

func (tenant) Get(methodOpts *descriptorpb.MethodOptions) (scopes []string) {
	for _, role := range proto.GetExtension(methodOpts, apiv1.E_TenantRoles).([]apiv1.TenantRole) {
		if role != apiv1.TenantRole_TENANT_ROLE_UNSPECIFIED {
			scopes = append(scopes, role.String())
		}
	}
	return
}

func (project) Get(methodOpts *descriptorpb.MethodOptions) (scopes []string) {
	for _, role := range proto.GetExtension(methodOpts, apiv1.E_ProjectRoles).([]apiv1.ProjectRole) {
		if role != apiv1.ProjectRole_PROJECT_ROLE_UNSPECIFIED {
			scopes = append(scopes, role.String())
		}
	}
	return
}

func (admin) Get(methodOpts *descriptorpb.MethodOptions) (scopes []string) {
	for _, role := range proto.GetExtension(methodOpts, apiv1.E_AdminRoles).([]apiv1.AdminRole) {
		if role != apiv1.AdminRole_ADMIN_ROLE_UNSPECIFIED {
			scopes = append(scopes, role.String())
		}
	}
	return
}

func (visibility) Get(methodOpts *descriptorpb.MethodOptions) (scopes []string) {
	vis := proto.GetExtension(methodOpts, apiv1.E_Visibility).(apiv1.Visibility)
	if vis != apiv1.Visibility_VISIBILITY_UNSPECIFIED {
		scopes = append(scopes, vis.String())
	}
	return
}

func Test_APIScopes(t *testing.T) {
	tests := []struct {
		name   string
		server func() *grpc.Server
	}{
		{
			name: "entire metal-stack-cloud api",
			server: func() *grpc.Server {
				server := grpc.NewServer()
				mocks := generated.DefaultGRPCServiceMocks()
				mocks(server)
				return server
			},
		},
	}
	for _, tt := range tests {
		tt := tt
		t.Run(tt.name, func(t *testing.T) {
			services, err := grpcreflect.LoadServiceDescriptors(tt.server())
			require.NoError(t, err)

			for name, descriptor := range services {
				descriptorProto := descriptor.AsServiceDescriptorProto()
				for _, method := range descriptorProto.Method {
					var (
						methodName = fmt.Sprintf("/%s/%s", name, *method.Name)

						scopes = map[string][]string{
							"tenant scope":     tenant{}.Get(method.Options),
							"project scope":    project{}.Get(method.Options),
							"admin scope":      admin{}.Get(method.Options),
							"visibility scope": visibility{}.Get(method.Options),
						}
					)

					scope := ""
					for name, s := range scopes {
						if len(s) > 0 {
							if scope != "" {
								t.Errorf("api service method: %q can not have %s and %s (%s) at the same time. only one scope is allowed.", methodName, scope, name, s)
							}
							scope = fmt.Sprintf("%s (%s)", name, s)
						}
					}

					if scope == "" {
						t.Errorf("api service method: %q has no scope (%s) defined. one scope needs to be defined though.", methodName, func() (names []string) {
							for name := range scopes {
								names = append(names, name)
							}
							return
						}())
					}
				}
			}
		})
	}
}
