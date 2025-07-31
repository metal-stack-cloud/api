
SHA := $(shell git rev-parse --short=8 HEAD)
GITVERSION := $(shell git describe --long --all)
BUILDDATE := $(shell date -Iseconds)
VERSION := $(or ${VERSION},$(shell git describe --tags --exact-match 2> /dev/null || git symbolic-ref -q --short HEAD || git rev-parse --short HEAD))
LOCALBIN ?= $(shell pwd)/bin
PROTOC_GEN_CONNECPY ?= $(LOCALBIN)/protoc-gen-connecpy
PROTOC_GEN_CONNECPY_VERSION ?= latest

all: proto generate test npm-build

release: proto generate test npm-build-tagged

.PHONY: proto
proto: protolint protoc-gen-connecpy
	$(MAKE) -C go clean
	$(MAKE) -C js clean
	$(MAKE) -C python clean
	$(MAKE) -C proto protoc
	$(MAKE) -C python generate

.PHONY: protolint
protolint:
	$(MAKE) -C proto protolint

.PHONY: generate
generate:
	$(MAKE) -C generate generate

.PHONY: test
test:
	$(MAKE) -C go test

# TODO: this target should be moved to the js dir:
.PHONY: npm-build
npm-build:
	make -C js build

.PHONY: npm-build-tagged
npm-build-tagged:
	yq e -i -o=json ".version=\"$(shell version=$$(git describe --tags `git rev-list --tags --max-count=1`); echo $${version#v})\"" js/package.json
	yq e -o=json '.version' js/package.json
	$(MAKE)	npm-build

.PHONY: protoc-gen-connecpy
protoc-gen-connecpy: $(PROTOC_GEN_CONNECPY)
$(PROTOC_GEN_CONNECPY): $(LOCALBIN)
	mkdir -p bin
	GOBIN=$(LOCALBIN) go install github.com/i2y/connecpy/protoc-gen-connecpy@$(PROTOC_GEN_CONNECPY_VERSION)
