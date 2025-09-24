.PHONY: install
install:
	bun install -dd

.PHONY: clean
clean:
	rm -rf api admin status

.PHONY: build
build: install
ifeq ($(CI),true)
	cd .. &&\
	yq e -i -o=json ".version=\"$(VERSION)\"" package.json &&\
	yq e -o=json ".version" package.json
endif
	cd .. && bun run build
