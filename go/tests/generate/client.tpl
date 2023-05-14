// Code generated generate_mock_client.go. DO NOT EDIT.
package client

import (
	compress "github.com/klauspost/connect-compress"

{{ range $name, $api := . -}}
	"github.com/metal-stack-cloud/api/go{{ $api.Path }}/{{ $api.Name }}connect"
{{ end }}
)

type (
	Client struct {
		config DialConfig
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

func New(config DialConfig) *Client {
	return &Client{
		config: config,
	}
}

{{ range $name, $api := . -}}
func (c Client) {{ $name | title }}() {{ $name | title }} {
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
