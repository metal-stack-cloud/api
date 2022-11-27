.PHONY: clean
clean:
	rm -rf api/v1/*.pb*.go admin status

.PHONY: test
test:
	go run ./discovery.go > permissions/servicepermissions.json
	go test -v ./...
