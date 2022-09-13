.PHONY: protolint
protolint:
	buf format -w api/v1
	buf format -w status/v1
	buf lint -v

.PHONY: protoc
protoc: protolint
	buf generate -v
