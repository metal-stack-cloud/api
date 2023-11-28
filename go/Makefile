.PHONY: clean
clean:
	rm -rf api/v1/*.pb*.go admin status tests/mocks

.PHONY: test
test:
	go test -v ./...

.PHONY: generate
generate:
	go run ./tests/generate/generate_clients.go

	rm -f permissions/servicepermissions.go
	rm -f permissions/servicepermissions.json
	go run ./discover.go

.PHONY: mocks
mocks:
	docker run --rm \
		--user $$(id -u):$$(id -g) \
		-w /work \
		-v $(PWD):/work \
		vektra/mockery:v2.38.0 --keeptree --inpackage --dir go --output go/tests/mocks --all --log-level debug
	go run ./tests/generate/generate_clients.go mocks
