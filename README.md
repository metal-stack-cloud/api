# metalstack.cloud api

[![Release](https://github.com/metal-stack-cloud/api/actions/workflows/main.yml/badge.svg)](https://github.com/metal-stack-cloud/api/actions/workflows/main.yml) [![go.dev reference](https://img.shields.io/badge/go.dev-reference-007d9c?logo=go&logoColor=white&style=flat-square)](https://pkg.go.dev/github.com/metal-stack-cloud/api) ![GitHub go.mod Go version](https://img.shields.io/github/go-mod/go-version/metal-stack-cloud/api) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/metal-stack-cloud/api) [![Go Report Card](https://goreportcard.com/badge/github.com/metal-stack-cloud/api)](https://goreportcard.com/report/github.com/metal-stack-cloud/api)

This is the API of [metalstack.cloud](https://metalstack.cloud).

## Usage examples

Can be found in the [examples](examples/) folder.

## Conventions

Method options provide an intuitve and declarative way of providing annotations to service methods.
These are used for scoping api-methods, which are getting utilized for authentication, authorization, auditing and payment (mainly in interceptors).

### Motivational Example

```proto
service IPService {
  // Get a ip
  rpc Get(IPServiceGetRequest) returns (IPServiceGetResponse) {
    option (project_roles) = PROJECT_ROLE_OWNER;
    option (project_roles) = PROJECT_ROLE_EDITOR;
    option (project_roles) = PROJECT_ROLE_VIEWER;
    option (auditing) = AUDITING_EXCLUDED;
  }
  // Allocate a ip
  rpc Allocate(IPServiceAllocateRequest) returns (IPServiceAllocateResponse) {
    option (project_roles) = PROJECT_ROLE_OWNER;
    option (project_roles) = PROJECT_ROLE_EDITOR;
    option (chargeable) = CHARGEABLE_TRUE;
  }
}

message IPServiceAllocateRequest {
  string project = 2 [(buf.validate.field).string = {
    min_len: 2
    max_len: 128
  }];
  string name = 3 [(buf.validate.field).string = {
    min_len: 2
    max_len: 128
  }];
  string description = 4 [(buf.validate.field).string = {max_len: 128}];
  repeated string tags = 8 [(buf.validate.field).repeated.max_items = 100];
  bool static = 9;
}
```

In this example we can see the motivation behind the method options.

1. Get: can be issued by project owner, editor, viewer and is excluded from auditing
2. Allocate: can be used by project owner, editor and is an service-method which requires deposited payment information
3. Both methods are project-scoped, since they are annotated by a project role -> Request object needs to have the **project** field in order to specify the target project of the service method

Further explanations are explained in the following:

### Auth

These options specify the RBAC of the api-endpoint.

| Option         | Description                                  | Values      | Explanation                                            |
| -------------- | -------------------------------------------- | ----------- | ------------------------------------------------------ |
| TENANT_ROLE\_  | Specifies the required tenant role           | UNSPECIFIED |                                                        |
|                |                                              | OWNER       | tenant owner                                           |
|                |                                              | EDITOR      | tenant editor                                          |
|                |                                              | VIEWER      | tenant viewer                                          |
|                |                                              | GUEST       | tenant guest                                           |
| PROJECT_ROLE\_ | Specifies the required project role          | UNSPECIFIED |                                                        |
|                |                                              | OWNER       | project owner                                          |
|                |                                              | EDITOR      | project editor                                         |
|                |                                              | VIEWER      | project viewer                                         |
| ADMIN_ROLE\_   | Specifies the required admin role            | UNSPECIFIED |                                                        |
|                |                                              | EDITOR      | admin editor                                           |
|                |                                              | VIEWER      | admin viewer                                           |
| VISIBILITY\_   | Specifies the visibility of the api-endpoint | UNSPECIFIED |                                                        |
|                |                                              | PUBLIC      | api-method is visbile to public, a token is not needed |
|                |                                              | SELF        | api-method is scoped to owner resources                |

> [!IMPORTANT]
>
> Every operation needs at least an option, which references the scope of the request: **ROLE** or **VISIBILITY**

> [!CAUTION]
>
> If we use a Tenant or Project role, the request will be respectively scoped as Tenant or Project request.
> Tenant-Requests must have the field **login**, which is the tenant id and specifies the tenant on which the service-method is scoped.
> Project-Requests must have the field **project**, which is the project id and specifies the project on which the service-method is scoped.

### Payment

Some api-methods are associated with payment and will result in costs. In order to use these kind of operations the user must have deposited its payment information.
If the payment information are not deposited the user is not allowed to issue these actions.

| Option       | Description                                 | Values      | Explanation                                                                |
| ------------ | ------------------------------------------- | ----------- | -------------------------------------------------------------------------- |
| CHARGEABLE\_ | Specifies if the api-endpoint is chargeable | UNSPECIFIED |                                                                            |
|              |                                             | TRUE        | api-method is associated with payment and requires deposited payment infos |
|              |                                             | FALSE       | api-method is not associated with payment                                  |

### Auditing

For traceability we require to store audit-logs.

| Option     | Description                              | Values      | Explanation              |
| ---------- | ---------------------------------------- | ----------- | ------------------------ |
| AUDITING\_ | Specifies if the api-endpoint is audited | UNSPECIFIED | DEFAULT: included        |
|            |                                          | INCLUDED    | operation is audited     |
|            |                                          | EXCLUDED    | operation is not audited |
