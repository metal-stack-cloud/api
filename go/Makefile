.PHONY: clean
clean:
	rm -rf api/v1/*.pb*.go admin status tests/mocks

.PHONY: test
test:
	go run ./discover.go > permissions/servicepermissions.json
	go test -v ./...

.PHONY: client
client:
	go run ./tests/generate/generate_clients.go

.PHONY: mocks
mocks:
	docker run --rm \
		--user $$(id -u):$$(id -g) \
		-w /work \
		-v $(PWD):/work \
		vektra/mockery:v2.26.1 --keeptree --inpackage --dir go --output go/tests/mocks --all --log-level debug
	go run ./tests/generate/generate_clients.go mocks
