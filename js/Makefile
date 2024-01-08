.PHONY: install
install:
	bun upgrade
	bun install -dd

.PHONY: clean
clean:
	rm -rf api admin status

.PHONY: build
build: install
	bun run build
