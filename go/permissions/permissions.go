package permissions

import (
	_ "embed"
	"encoding/json"
)

//go:embed servicepermissions.json
var servicePermissionsJSON string

type ServicePermissions struct {
	Roles      Roles      `json:"roles"`
	Methods    Methods    `json:"methods"`
	Visibility Visibility `json:"visibility"`
}
type Admin struct {
	// TODO map from string to bool would be better
	// maybe map[string][]string where key is method and values is slice of roles like
	// "v1.SampleService/Get": ["editor", "viewer"]
	Editor []string `json:"editor,omitempty"`
	Viewer []string `json:"viewer,omitempty"`
}
type Tenant struct {
	// TODO same as above
	Owner  []string `json:"owner,omitempty"`
	Editor []string `json:"editor,omitempty"`
	Viewer []string `json:"viewer,omitempty"`
}
type Project struct {
	// TODO same as above
	Owner  []string `json:"owner,omitempty"`
	Editor []string `json:"editor,omitempty"`
	Viewer []string `json:"viewer,omitempty"`
}

// TODO convert to map[string]bool
type Methods map[string]bool

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

func Get() (*ServicePermissions, error) {
	result := &ServicePermissions{}
	err := json.Unmarshal([]byte(servicePermissionsJSON), result)
	return result, err
}
