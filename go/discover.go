package main

import (
	"bytes"
	"fmt"
	"go/ast"
	"go/format"
	"go/parser"
	"go/token"
	"html/template"
	"os"
	"path"
	"path/filepath"
	"sort"
	"strings"
)

const templ = `// Code generated discover.go. DO NOT EDIT.
package generated

import (
	"google.golang.org/grpc"
{{ range $name, $path := .Packages -}}
	{{ $name }} "github.com/metal-stack-cloud/api/go/{{ $path }}"
{{ end }}
)

func DefaultGRPCServiceMocks() func(server *grpc.Server) {
	return func(server *grpc.Server) {
{{ range $svc := .Services -}}
	{{ $svc.Package }}.{{ $svc.RegisterFunc }}(server, nil)
{{ end -}}
	}
}
`

type discovery struct {
	Packages map[string]string
	Services []struct {
		Package      string
		RegisterFunc string
	}
}

func main() {
	clients, err := discoverServiceClients(".")
	if err != nil {
		panic(err)
	}

	err = writeTemplate("generated/discovery.go", templ, clients)
	if err != nil {
		panic(err)
	}
}

func discoverServiceClients(root string) (*discovery, error) {
	var (
		result = discovery{
			Packages: map[string]string{},
		}
		set  = token.NewFileSet()
		walk = func(root string) ([]string, error) {
			var dirs []string
			err := filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
				if info.IsDir() {
					dirs = append(dirs, path)
				}
				return nil
			})
			return dirs, err
		}
	)

	dirs, err := walk(root)
	if err != nil {
		return nil, err
	}

	for _, dir := range dirs {
		packs, err := parser.ParseDir(set, dir, nil, parser.ParseComments)
		if err != nil {
			return nil, err
		}

		for _, pack := range packs {
			for fileName, f := range pack.Files {
				for _, d := range f.Decls {
					if fn, isFn := d.(*ast.FuncDecl); isFn {
						name := fn.Name.Name
						if strings.HasPrefix(name, "Register") && strings.HasSuffix(name, "ServiceServer") {
							result.Packages[pack.Name] = path.Dir(fileName)
							result.Services = append(result.Services, struct {
								Package      string
								RegisterFunc string
							}{
								Package:      pack.Name,
								RegisterFunc: name,
							})
						}
					}
				}
			}
		}
	}

	sort.Slice(result.Services, func(i, j int) bool {
		if result.Services[i].Package == result.Services[j].Package {
			return result.Services[i].RegisterFunc < result.Services[j].RegisterFunc
		}
		return result.Services[i].Package < result.Services[j].Package
	})

	return &result, nil
}

func writeTemplate(dest, text string, data any) error {
	t, err := template.New("").Parse(text)
	if err != nil {
		return err
	}

	var buf bytes.Buffer
	if err := t.Execute(&buf, data); err != nil {
		return err
	}

	p, err := format.Source(buf.Bytes())
	if err != nil {
		return err
	}

	fmt.Printf("writing to %s\n", dest)

	return os.WriteFile(dest, p, 0755) // nolint:gosec
}
