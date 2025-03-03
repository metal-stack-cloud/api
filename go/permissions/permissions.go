package permissions

import (
	_ "embed"
)

type ServicePermissions struct {
	Roles      Roles      `json:"roles"`
	Methods    Methods    `json:"methods"`
	Scope      Scope      `json:"scope"`
	Chargeable Chargeable `json:"chargeable,omitempty"`
	Auditable  Auditable  `json:"auditable,omitempty"`
	Services   []string   `json:"services,omitempty"`
}

type (
	Methods map[string]bool

	Chargeable map[string]bool
	Auditable  map[string]bool

	Admin   map[string][]string
	Tenant  map[string][]string
	Project map[string][]string
)

type Roles struct {
	Admin   Admin   `json:"admin,omitempty"`
	Tenant  Tenant  `json:"tenant,omitempty"`
	Project Project `json:"project,omitempty"`
}

type Scope struct {
	Public  map[string]bool `json:"public,omitempty"`
	Self    map[string]bool `json:"self,omitempty"`
	Admin   map[string]bool `json:"admin,omitempty"`
	Tenant  map[string]bool `json:"tenant,omitempty"`
	Project map[string]bool `json:"project,omitempty"`
}
