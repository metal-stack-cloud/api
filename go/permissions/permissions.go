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
	Chargeable Chargeable `json:"chargeable,omitempty"`
}
type Admin struct {
	// TODO map from string to bool would be better
	// maybe map[string][]string where key is method and values is slice of roles like
	// "v1.SampleService/Get": ["editor", "viewer"]
	Editor map[string]bool `json:"editor,omitempty"`
	Viewer map[string]bool `json:"viewer,omitempty"`
}
type Tenant struct {
	// TODO same as above
	Owner  map[string]bool `json:"owner,omitempty"`
	Editor map[string]bool `json:"editor,omitempty"`
	Viewer map[string]bool `json:"viewer,omitempty"`
}
type Project struct {
	// TODO same as above
	Owner  map[string]bool `json:"owner,omitempty"`
	Editor map[string]bool `json:"editor,omitempty"`
	Viewer map[string]bool `json:"viewer,omitempty"`
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
type Chargeable map[string]bool

func Get() (*ServicePermissions, error) {
	result := &ServicePermissions{}
	err := json.Unmarshal([]byte(servicePermissionsJSON), result)
	return result, err
}
