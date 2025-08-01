from api.v1 import common_pb2 as _common_pb2
from api.v1 import project_pb2 as _project_pb2
from api.v1 import tenant_pb2 as _tenant_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class User(_message.Message):
    __slots__ = ("login", "name", "email", "avatar_url", "oauth_provider", "tenants", "projects", "default_tenant", "default_project")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    AVATAR_URL_FIELD_NUMBER: _ClassVar[int]
    OAUTH_PROVIDER_FIELD_NUMBER: _ClassVar[int]
    TENANTS_FIELD_NUMBER: _ClassVar[int]
    PROJECTS_FIELD_NUMBER: _ClassVar[int]
    DEFAULT_TENANT_FIELD_NUMBER: _ClassVar[int]
    DEFAULT_PROJECT_FIELD_NUMBER: _ClassVar[int]
    login: str
    name: str
    email: str
    avatar_url: str
    oauth_provider: _common_pb2.OAuthProvider
    tenants: _containers.RepeatedCompositeFieldContainer[_tenant_pb2.Tenant]
    projects: _containers.RepeatedCompositeFieldContainer[_project_pb2.Project]
    default_tenant: _tenant_pb2.Tenant
    default_project: _project_pb2.Project
    def __init__(self, login: _Optional[str] = ..., name: _Optional[str] = ..., email: _Optional[str] = ..., avatar_url: _Optional[str] = ..., oauth_provider: _Optional[_Union[_common_pb2.OAuthProvider, str]] = ..., tenants: _Optional[_Iterable[_Union[_tenant_pb2.Tenant, _Mapping]]] = ..., projects: _Optional[_Iterable[_Union[_project_pb2.Project, _Mapping]]] = ..., default_tenant: _Optional[_Union[_tenant_pb2.Tenant, _Mapping]] = ..., default_project: _Optional[_Union[_project_pb2.Project, _Mapping]] = ...) -> None: ...

class UserServiceGetRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UserServiceGetResponse(_message.Message):
    __slots__ = ("user",)
    USER_FIELD_NUMBER: _ClassVar[int]
    user: User
    def __init__(self, user: _Optional[_Union[User, _Mapping]] = ...) -> None: ...
