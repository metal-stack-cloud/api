
SHA := $(shell git rev-parse --short=8 HEAD)
GITVERSION := $(shell git describe --long --all)
BUILDDATE := $(shell date -Iseconds)
VERSION := $(or ${VERSION},devel)

all: proto npm-build

.PHONY: proto
proto: protolint test
	$(MAKE) -C go clean
	$(MAKE) -C js clean
	$(MAKE) -C openapiv2 clean
	$(MAKE) -C proto protoc


.PHONY: protolint
protolint:
	$(MAKE) -C proto protolint

.PHONY: npm-build
npm-build:
	docker pull node:19-bullseye
	docker run --rm -v ${PWD}:/work -w /work node:19-bullseye make -C js build

.PHONY: test
test: proto
	$(MAKE) -C go test
