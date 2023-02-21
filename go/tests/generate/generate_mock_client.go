package main

import (
	"bytes"
	"fmt"
	"go/format"
	"os"
	"path"
	"path/filepath"
	"strings"
	"text/template"

	"github.com/Masterminds/sprig/v3"
	"github.com/metal-stack-cloud/api/go/tests/protoparser"

	_ "embed"
)

//go:embed mock_client.tpl
var clientTpl string

type api struct {
	Name     string
	Services []string
	Path     string
}

func main() {
	svcs, err := svcs("../proto")
	if err != nil {
		panic(err)
	}

	err = writeTemplate("tests/mock_clients.go", clientTpl, svcs)
	if err != nil {
		panic(err)
	}
}

func svcs(root string) (map[string]api, error) {
	var (
		result = map[string]api{}
		walk   = func(root string) ([]string, error) {
			var files []string
			err := filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
				if info.IsDir() {
					return nil
				}
				if strings.HasSuffix(info.Name(), ".proto") {
					files = append(files, path)
				}
				return nil
			})
			return files, err
		}
	)

	files, err := walk(root)
	if err != nil {
		return nil, err
	}

	for _, filename := range files {
		fd, err := protoparser.Parse(filename)
		if err != nil {
			return nil, err
		}
		n := strings.ReplaceAll(*fd.Package, ".", "")
		a, ok := result[n]
		if !ok {
			a = api{
				Name: n,
				Path: path.Dir(strings.TrimPrefix(filename, root)),
			}
		}
		for _, serviceDesc := range fd.GetService() {
			a.Services = append(a.Services, *serviceDesc.Name)
		}
		result[n] = a
	}

	return result, nil
}

func writeTemplate(dest, text string, data any) error {
	t, err := template.New("").Funcs(sprig.FuncMap()).Parse(text)
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
