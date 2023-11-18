
SHA := $(shell git rev-parse --short=8 HEAD)
GITVERSION := $(shell git describe --long --all)
BUILDDATE := $(shell date -Iseconds)
VERSION := $(or ${VERSION},devel)

all: proto generate test npm-build

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