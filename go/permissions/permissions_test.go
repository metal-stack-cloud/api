package permissions

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestGet(t *testing.T) {

	perms, err := Get()
	require.NoError(t, err)
	require.NotNil(t, perms)
	require.Contains(t, perms.Methods, "/api.v1.AssetService/List")
	require.Contains(t, perms.Visibility.Self, "/api.v1.TokenService/Create")

}
