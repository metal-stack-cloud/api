package validation

import (
	"testing"

	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"

	"buf.build/go/protovalidate"
	"github.com/stretchr/testify/require"
)

func TestValidateIP(t *testing.T) {

	validator, err := protovalidate.New()
	require.NoError(t, err)

	ip := &apiv1.IP{
		Uuid:    "abc",
		Ip:      "192.168.0.1",
		Name:    "Loadbalancer",
		Project: "6daa2dbf-2d6c-43f4-9d60-35e393572010",
		Network: "internet",
	}

	err = validator.Validate(ip)
	require.Error(t, err)
	require.EqualError(t, err, "validation error:\n - uuid: value must be a valid UUID [string.uuid]")
}
