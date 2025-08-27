.PHONY: install
install:
	bun install -dd

.PHONY: clean
clean:
	rm -rf api admin status

.PHONY: build
build: install
	bun run build
