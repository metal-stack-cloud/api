.PHONY: protolint
protolint:
	buf format -w api/v1
	buf format -w status/v1
	buf lint -v

.PHONY: protoc
protoc: protolint
	buf generate -v

PHONY: generate-docs
generate-docs:
	protoc --doc_out=../docs --doc_opt=json,docs.json --experimental_allow_proto3_optional $(wildcard ./api/v1/*.proto)
