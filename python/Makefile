.PHONY: clean
clean:
	rm -rf buf
	rm -rf metalstackcloud/api
	rm -rf metalstackcloud/admin
	rm -rf metalstackcloud/status

.PHONY: generate
generate:
	@find . -type d -exec touch {}/__init__.py \;
	mv metalstackcloud/buf . || true

	find . -name "*.py" -exec sed -i 's/^from admin.v1/from metalstackcloud.admin.v1/g' {} +
	find . -name "*.py" -exec sed -i 's/^from api.v1/from metalstackcloud.api.v1/g' {} +
	find . -name "*.py" -exec sed -i 's/^from status.v1/from metalstackcloud.status.v1/g' {} +
	find . -name "*.py" -exec sed -i 's/^import admin.v1/import metalstackcloud.admin.v1/g' {} +
	find . -name "*.py" -exec sed -i 's/^import api.v1/import metalstackcloud.api.v1/g' {} +
	find . -name "*.py" -exec sed -i 's/^import status.v1/import metalstackcloud.status.v1/g' {} +
