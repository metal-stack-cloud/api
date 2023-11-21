
SHA := $(shell git rev-parse --short=8 HEAD)
GITVERSION := $(shell git describe --long --all)
BUILDDATE := $(shell date -Iseconds)
VERSION := $(or ${VERSION},$(shell git describe --tags --exact-match 2> /dev/null || git symbolic-ref -q --short HEAD || git rev-parse --short HEAD))

all: proto generate test npm-build

release: proto generate test npm-build-tagged

.PHONY: proto
proto: protolint
	$(MAKE) -C go clean
	$(MAKE) -C js clean
	$(MAKE) -C proto protoc

.PHONY: protolint
protolint:
	$(MAKE) -C proto protolint

.PHONY: generate
generate:
	$(MAKE) -C go client
	$(MAKE) -C go mocks

.PHONY: test
test:
	$(MAKE) -C go test

# TODO: this target should be moved to the js dir:
.PHONY: npm-build
npm-build:
	make -C js build

.PHONY: npm-build-tagged
npm-build-tagged:
	yq e -ij ".version=\"$(shell version=$$(git describe --tags `git rev-list --tags --max-count=1`); echo $${version#v})\"" js/package.json
	yq e '.version' js/package.json
	$(MAKE)	npm-build
