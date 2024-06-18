package validation

import (
	"testing"
	"time"

	adminv1 "github.com/metal-stack-cloud/api/go/admin/v1"
	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"
	"google.golang.org/protobuf/types/known/durationpb"

	"github.com/bufbuild/protovalidate-go"
	"github.com/stretchr/testify/require"
)

func TestValidateTenantServiceAddMemberRequest(t *testing.T) {

	validator, err := protovalidate.New()
	require.NoError(t, err)

	tsamr := &adminv1.TenantServiceAddMemberRequest{
		TenantId: "t1",
		MemberId: "m1",
		Role:     6,
	}

	err = validator.Validate(tsamr)
	require.Error(t, err)
	require.EqualError(t, err, "validation error:\n - role: value must be one of the defined enum values [enum.defined_only]")

	tsamr = &adminv1.TenantServiceAddMemberRequest{
		TenantId: "t1",
		MemberId: "m1",
		Role:     apiv1.TenantRole_TENANT_ROLE_GUEST,
	}

	err = validator.Validate(tsamr)
	require.NoError(t, err)
}

func TestValidateTokenServiceCreateRequest(t *testing.T) {

	validator, err := protovalidate.New()
	require.NoError(t, err)

	tscr := &apiv1.TokenServiceCreateRequest{
		Description: "New Token",
		ProjectRoles: map[string]apiv1.ProjectRole{
			"project-1": apiv1.ProjectRole_PROJECT_ROLE_OWNER,
			"project-2": apiv1.ProjectRole_PROJECT_ROLE_EDITOR,
			"project-3": -4,
		},
		TenantRoles: map[string]apiv1.TenantRole{
			"tenant-1": apiv1.TenantRole_TENANT_ROLE_GUEST,
			"tenant-2": apiv1.TenantRole_TENANT_ROLE_OWNER,
		},
		Expires: durationpb.New(1 * time.Hour),
	}

	err = validator.Validate(tscr)
	require.Error(t, err)
	require.EqualError(t, err, "validation error:\n - project_roles[\"project-3\"]: project role must be specified [role-specified]")

	tscr = &apiv1.TokenServiceCreateRequest{
		Description: "New Token",
		Expires:     durationpb.New(1 * time.Hour),
	}

	err = validator.Validate(tscr)
	require.NoError(t, err)
}
