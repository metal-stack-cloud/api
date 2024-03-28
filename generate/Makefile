.PHONY: generate
generate: go-mocks
	# we remove files explicitly to ensure files really get generated
	rm -f ../go/permissions/servicepermissions.go
	rm -f ../go/client/client.go
	rm -f ../go/tests/mock_clients.go
	rm -f ../js/permissions/servicepermissions.json

	go run ./generate.go

.PHONY: go-mocks
go-mocks:
	# we remove files explicitly to ensure files really get generated
	rm -rf ../go/tests/mocks

	docker run --rm \
		--user $$(id -u):$$(id -g) \
		-w /work \
		-v $(PWD):/work \
		vektra/mockery:v2.42.0 --keeptree --inpackage --dir go --output go/tests/mocks --all --log-level debug
