// Code generated discover.go. DO NOT EDIT.
package permissions

func GetServices() []string {
	return []string{
{{- range $s := .Services }}
	"{{ $s }}",
{{- end }}
	}
}

func GetServicePermissions() *ServicePermissions {
	return &ServicePermissions{
		Roles:      Roles{
			Admin:   &Admin{
				Editor: []string{
					{{- range $role := .Roles.Admin.Editor }}
						"{{ $role }}",
					{{- end }}
				},
				Viewer: []string{
					{{- range $role := .Roles.Admin.Viewer }}
						"{{ $role }}",
					{{- end }}
				},
			},
			Tenant:  &Tenant{
				Owner:  []string{
					{{- range $role := .Roles.Tenant.Owner }}
						"{{ $role }}",
					{{- end }}
				},
				Editor: []string{
					{{- range $role := .Roles.Tenant.Editor }}
						"{{ $role }}",
					{{- end }}
				},
				Viewer: []string{
					{{- range $role := .Roles.Tenant.Viewer }}
						"{{ $role }}",
					{{- end }}
				},
			},
			Project: &Project{
				Owner:  []string{
					{{- range $role := .Roles.Project.Owner }}
						"{{ $role }}",
					{{- end }}
				},
				Editor: []string{
					{{- range $role := .Roles.Project.Editor }}
						"{{ $role }}",
					{{- end }}
				},
				Viewer: []string{
					{{- range $role := .Roles.Project.Viewer }}
						"{{ $role }}",
					{{- end }}
				},
			},
		},
		Methods:    map[string]bool{
{{- range $key, $value := .Methods }}
	"{{ $key }}": {{ $value }} ,
{{- end }}
		},
		Visibility: Visibility{
			Public:  map[string]bool{
{{- range $key, $value := .Visibility.Public }}
	"{{ $key }}": {{ $value }} ,
{{- end }}
			},
			Private: map[string]bool{
{{- range $key, $value := .Visibility.Private }}
	"{{ $key }}": {{ $value }} ,
{{- end }}
			},
			Self:    map[string]bool{
{{- range $key, $value := .Visibility.Self }}
	"{{ $key }}": {{ $value }} ,
{{- end }}
			},
		},
		Chargeable: map[string]bool{
{{- range $key, $value := .Chargeable }}
	"{{ $key }}": {{ $value }} ,
{{- end }}
		},
		Auditable:  map[string]bool{
{{- range $key, $value := .Auditable }}
	"{{ $key }}": {{ $value }} ,
{{- end }}
		},
	}
}
