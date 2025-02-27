# metalstack.cloud api

[![Release](https://github.com/metal-stack-cloud/api/actions/workflows/main.yml/badge.svg)](https://github.com/metal-stack-cloud/api/actions/workflows/main.yml) [![go.dev reference](https://img.shields.io/badge/go.dev-reference-007d9c?logo=go&logoColor=white&style=flat-square)](https://pkg.go.dev/github.com/metal-stack-cloud/api) ![GitHub go.mod Go version](https://img.shields.io/github/go-mod/go-version/metal-stack-cloud/api) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/metal-stack-cloud/api) [![Go Report Card](https://goreportcard.com/badge/github.com/metal-stack-cloud/api)](https://goreportcard.com/report/github.com/metal-stack-cloud/api)

This is the API of [metalstack.cloud](https://metalstack.cloud).

## Usage examples

Can be found in the [examples](examples/) folder.

## Method-Options

MethodOptions specify the additional behavior and restrictions of api-endpoints.
These are used to generate "ServicePermissions", which can be utilized for authentication, authorization, auditing and payment (mainly in interceptors).

### Options regarding authorization:

These options specify the RBAC of the api-endpoint.

| Option         | Description                         | Values      | Explanation    |
| -------------- | ----------------------------------- | ----------- | -------------- |
| TENANT_ROLE\_  | Specifies the required tenant role  | UNSPECIFIED |                |
|                |                                     | OWNER       | tenant owner   |
|                |                                     | EDITOR      | tenant editor  |
|                |                                     | VIEWER      | tenant viewer  |
|                |                                     | GUEST       | tenant guest   |
| PROJECT_ROLE\_ | Specifies the required project role | UNSPECIFIED |                |
|                |                                     | OWNER       | project owner  |
|                |                                     | EDITOR      | project editor |
|                |                                     | VIEWER      | project viewer |
| ADMIN_ROLE\_   | Specifies the required admin role   | UNSPECIFIED |                |
|                |                                     | EDITOR      | admin editor   |
|                |                                     | VIEWER      | admin viewer   |

### Options regarding additional behavior:

These options specify additional behavior of the api-endpoint.

| Option       | Description                                  | Values      | Explanation                            |
| ------------ | -------------------------------------------- | ----------- | -------------------------------------- |
| CHARGEABLE\_ | Specifies if the api-endpoint is chargeable  | UNSPECIFIED |                                        |
|              |                                              | TRUE        | operation is charged                   |
|              |                                              | FALSE       | operation is not charged               |
| AUDITING\_   | Specifies if the api-endpoint is audited     | UNSPECIFIED |                                        |
|              |                                              | INCLUDED    | operation is audited                   |
|              |                                              | EXCLUDED    | operation is not audited               |
| VISIBILITY\_ | Specifies the visibility of the api-endpoint | UNSPECIFIED |                                        |
|              |                                              | PUBLIC      | operation is visbile to public         |
|              |                                              | SELF        | operation is scoped to owner resources |

### Example

```proto
service ClusterService {
  // Create a cluster
  rpc Create(ClusterServiceCreateRequest) returns (ClusterServiceCreateResponse) {
    option (project_roles) = PROJECT_ROLE_OWNER;
    option (project_roles) = PROJECT_ROLE_EDITOR;
    option (chargeable) = CHARGEABLE_TRUE;
  }
  // Get a cluster
  rpc Get(ClusterServiceGetRequest) returns (ClusterServiceGetResponse) {
    option (project_roles) = PROJECT_ROLE_OWNER;
    option (project_roles) = PROJECT_ROLE_EDITOR;
    option (project_roles) = PROJECT_ROLE_VIEWER;
    option (auditing) = AUDITING_EXCLUDED;
  }
}
```
