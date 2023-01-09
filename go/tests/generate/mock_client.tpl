// Code generated discover.go. DO NOT EDIT.
package apitests

import (
	"testing"

{{ range $name, $api := . -}}
	"github.com/metal-stack-cloud/api/go{{ $api.Path }}/{{ $api.Name }}connect"
	{{ $name }}mocks "github.com/metal-stack-cloud/api/go/tests/mocks{{ $api.Path }}/{{ $api.Name }}connect"
{{ end }}
	"github.com/stretchr/testify/mock"
)

type (
	wrapper struct {
		t *testing.T
	}
{{ range $name, $api := . -}}
    {{ $name }} struct {
{{ range $svc := $api.Services -}}
	{{ $svc | lower }} *{{ $name }}mocks.{{ $svc }}Client
{{ end }}
    }

	{{ $name | title }}MockFns struct {
{{ range $svc := $api.Services -}}
	{{ $svc | trimSuffix "Service" }}  func(m *mock.Mock)
{{ end }}
	}
{{ end }}
)

func New(t *testing.T) *wrapper {
	return &wrapper{t: t}
}

{{ range $name, $api := . -}}
func (w wrapper) {{ $name | title }}(fns *{{ $name | title }}MockFns) *{{ $name }} {
	return new{{ $name }}(w.t, fns)
}

func new{{ $name }}(t *testing.T, fns *{{ $name | title }}MockFns) *{{ $name }} {
	a := &{{ $name }}{
{{ range $svc := $api.Services -}}
	{{ $svc | lower }}:  {{ $name }}mocks.New{{ $svc }}Client(t),
{{ end }}
	}

	if fns != nil {
{{ range $svc := $api.Services -}}
		if fns.{{ $svc | trimSuffix "Service" }} != nil {
			fns.{{ $svc | trimSuffix "Service" }}(&a.{{ $svc | lower }}.Mock)
		}
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
