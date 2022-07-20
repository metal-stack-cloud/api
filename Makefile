
SHA := $(shell git rev-parse --short=8 HEAD)
GITVERSION := $(shell git describe --long --all)
BUILDDATE := $(shell date -Iseconds)
VERSION := $(or ${VERSION},devel)

all: proto npm-build

.PHONY: proto
proto: protolint
	$(MAKE) -C js clean
	$(MAKE) -C proto protoc

.PHONY: protolint
protolint:
	$(MAKE) -C proto protolint

.PHONY: npm-build
npm-build:
	$(MAKE) -C js build

