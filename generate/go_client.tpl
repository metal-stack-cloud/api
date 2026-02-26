// Code generated generate_clients.go. DO NOT EDIT.
package client

import (
	"connectrpc.com/connect"
	compress "github.com/klauspost/connect-compress/v2"

{{ range $name, $api := . -}}
	"github.com/metal-stack-cloud/api/go{{ $api.Path }}/{{ $api.Name }}connect"
{{ end }}
)

type (
	Client interface {
{{ range $name, $api := . -}}
	{{ $name | title }}() {{ $name | title }}
{{ end }}
	}
	client struct {
		config *DialConfig
		interceptors []connect.Interceptor
	}
{{ range $name, $api := . -}}
	{{ $name | title }} interface {
{{ range $svc := $api.Services -}}
	{{ $svc | trimSuffix "Service" }}() {{ $name }}connect.{{ $svc }}Client
{{ end }}
	}

    {{ $name }} struct {
{{ range $svc := $api.Services -}}
	{{ $svc | lower }} {{ $name }}connect.{{ $svc }}Client
{{ end }}
    }

{{ end }}
)

func New(config *DialConfig) Client {
	c := &client{
		config:       config,
		interceptors: []connect.Interceptor{},
	}

	if config.Token != "" {
		authInterceptor := &authInterceptor{config: config}
		c.interceptors = append(c.interceptors, authInterceptor)
	}

	if config.Log != nil {
		loggingInterceptor := &loggingInterceptor{config: config}
		c.interceptors = append(c.interceptors, loggingInterceptor)
	}

	c.interceptors = append(c.interceptors, config.Interceptors...)

	return c
}

{{ range $name, $api := . -}}
func (c client) {{ $name | title }}() {{ $name | title }} {
	a := &{{ $name }}{
{{ range $svc := $api.Services -}}
	{{ $svc | lower }}:  {{ $name }}connect.New{{ $svc }}Client(
		c.config.HttpClient(),
		c.config.BaseURL,
		compress.WithAll(compress.LevelBalanced),
	),
{{ end }}
	}
	return a
}

{{ range $svc := $api.Services -}}
func (c  *{{ $name }} ) {{ $svc | trimSuffix "Service" }}() {{ $name }}connect.{{ $svc }}Client {
	return c.{{ $svc | lower }}
}
{{ end }}

{{ end }}
