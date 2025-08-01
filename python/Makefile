.PHONY: clean
clean:
	rm -rf buf
	rm -rf metalstackcloud/api
	rm -rf metalstackcloud/admin
	rm -rf metalstackcloud/status

.PHONY: generate
generate:
	@find . -type d -exec touch {}/__init__.py \;
	mv metalstackcloud/buf .
