#!/usr/bin/env bash

curl \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${API_TOKEN}" \
    -d "{\"project\":\"${PROJECT_ID}\"}" \
    https://api.metalstack.cloud/api.v1.ClusterService/List \
    | jq '.clusters[] | .name, .uuid'