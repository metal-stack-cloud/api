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
			Admin:   Admin{
				{{- range $role, $methods := .Roles.Admin }}
					"{{ $role }}": []string{
						{{- range $method := $methods }}
							"{{ $method }}",
						{{- end }}
					},
				{{- end }}
			},
			Tenant:  Tenant{
				{{- range $role, $methods := .Roles.Tenant }}
					"{{ $role }}": []string{
						{{- range $method := $methods }}
							"{{ $method }}",
						{{- end }}
					},
				{{- end }}
			},
			Project: Project{
				{{- range $role, $methods := .Roles.Project }}
					"{{ $role }}": []string{
						{{- range $method := $methods }}
							"{{ $method }}",
						{{- end }}
					},
				{{- end }}
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
