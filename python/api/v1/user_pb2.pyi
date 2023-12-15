from api.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class User(_message.Message):
    __slots__ = ("login", "name", "email", "avatar_url", "oauth_provider", "organizations")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    AVATAR_URL_FIELD_NUMBER: _ClassVar[int]
    OAUTH_PROVIDER_FIELD_NUMBER: _ClassVar[int]
    ORGANIZATIONS_FIELD_NUMBER: _ClassVar[int]
    login: str
    name: str
    email: str
    avatar_url: str
    oauth_provider: _common_pb2.OAuthProvider
    organizations: _containers.RepeatedCompositeFieldContainer[Organization]
    def __init__(self, login: _Optional[str] = ..., name: _Optional[str] = ..., email: _Optional[str] = ..., avatar_url: _Optional[str] = ..., oauth_provider: _Optional[_Union[_common_pb2.OAuthProvider, str]] = ..., organizations: _Optional[_Iterable[_Union[Organization, _Mapping]]] = ...) -> None: ...

class Organization(_message.Message):
    __slots__ = ("id", "login", "name", "email", "billing_email", "avatar_url", "role", "teams", "admitted")
    ID_FIELD_NUMBER: _ClassVar[int]
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    BILLING_EMAIL_FIELD_NUMBER: _ClassVar[int]
    AVATAR_URL_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    TEAMS_FIELD_NUMBER: _ClassVar[int]
    ADMITTED_FIELD_NUMBER: _ClassVar[int]
    id: str
    login: str
    name: str
    email: str
    billing_email: str
    avatar_url: str
    role: _common_pb2.Role
    teams: _containers.RepeatedCompositeFieldContainer[Team]
    admitted: bool
    def __init__(self, id: _Optional[str] = ..., login: _Optional[str] = ..., name: _Optional[str] = ..., email: _Optional[str] = ..., billing_email: _Optional[str] = ..., avatar_url: _Optional[str] = ..., role: _Optional[_Union[_common_pb2.Role, str]] = ..., teams: _Optional[_Iterable[_Union[Team, _Mapping]]] = ..., admitted: bool = ...) -> None: ...

class Team(_message.Message):
    __slots__ = ("id", "name", "avatar_url", "role", "project_id")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    AVATAR_URL_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    PROJECT_ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    avatar_url: str
    role: _common_pb2.Role
    project_id: str
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., avatar_url: _Optional[str] = ..., role: _Optional[_Union[_common_pb2.Role, str]] = ..., project_id: _Optional[str] = ...) -> None: ...
