googleapi:
	if ! [ -s google/api/annotations.proto ] ; \
	then \
		wget https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/annotations.proto -O google/api/annotations.proto ; \
		wget https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/http.proto -O google/api/http.proto ; \
	fi


.PHONY: protolint
protolint: googleapi
	buf format -w api/v1
	buf lint -v

.PHONY: protoc
protoc: protolint
	buf generate -v