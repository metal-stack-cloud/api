import datetime

from api.v1 import common_pb2 as _common_pb2
from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import duration_pb2 as _duration_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class TokenType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TOKEN_TYPE_UNSPECIFIED: _ClassVar[TokenType]
    TOKEN_TYPE_API: _ClassVar[TokenType]
    TOKEN_TYPE_CONSOLE: _ClassVar[TokenType]
TOKEN_TYPE_UNSPECIFIED: TokenType
TOKEN_TYPE_API: TokenType
TOKEN_TYPE_CONSOLE: TokenType

class Token(_message.Message):
    __slots__ = ("uuid", "user_id", "description", "permissions", "expires", "issued_at", "token_type", "project_roles", "tenant_roles", "admin_role")
    class ProjectRolesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.ProjectRole
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.ProjectRole, str]] = ...) -> None: ...
    class TenantRolesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.TenantRole
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.TenantRole, str]] = ...) -> None: ...
    UUID_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    PERMISSIONS_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_FIELD_NUMBER: _ClassVar[int]
    ISSUED_AT_FIELD_NUMBER: _ClassVar[int]
    TOKEN_TYPE_FIELD_NUMBER: _ClassVar[int]
    PROJECT_ROLES_FIELD_NUMBER: _ClassVar[int]
    TENANT_ROLES_FIELD_NUMBER: _ClassVar[int]
    ADMIN_ROLE_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    user_id: str
    description: str
    permissions: _containers.RepeatedCompositeFieldContainer[MethodPermission]
    expires: _timestamp_pb2.Timestamp
    issued_at: _timestamp_pb2.Timestamp
    token_type: TokenType
    project_roles: _containers.ScalarMap[str, _common_pb2.ProjectRole]
    tenant_roles: _containers.ScalarMap[str, _common_pb2.TenantRole]
    admin_role: _common_pb2.AdminRole
    def __init__(self, uuid: _Optional[str] = ..., user_id: _Optional[str] = ..., description: _Optional[str] = ..., permissions: _Optional[_Iterable[_Union[MethodPermission, _Mapping]]] = ..., expires: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., issued_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., token_type: _Optional[_Union[TokenType, str]] = ..., project_roles: _Optional[_Mapping[str, _common_pb2.ProjectRole]] = ..., tenant_roles: _Optional[_Mapping[str, _common_pb2.TenantRole]] = ..., admin_role: _Optional[_Union[_common_pb2.AdminRole, str]] = ...) -> None: ...

class TokenServiceCreateRequest(_message.Message):
    __slots__ = ("description", "permissions", "expires", "project_roles", "tenant_roles", "admin_role")
    class ProjectRolesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.ProjectRole
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.ProjectRole, str]] = ...) -> None: ...
    class TenantRolesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.TenantRole
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.TenantRole, str]] = ...) -> None: ...
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    PERMISSIONS_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_FIELD_NUMBER: _ClassVar[int]
    PROJECT_ROLES_FIELD_NUMBER: _ClassVar[int]
    TENANT_ROLES_FIELD_NUMBER: _ClassVar[int]
    ADMIN_ROLE_FIELD_NUMBER: _ClassVar[int]
    description: str
    permissions: _containers.RepeatedCompositeFieldContainer[MethodPermission]
    expires: _duration_pb2.Duration
    project_roles: _containers.ScalarMap[str, _common_pb2.ProjectRole]
    tenant_roles: _containers.ScalarMap[str, _common_pb2.TenantRole]
    admin_role: _common_pb2.AdminRole
    def __init__(self, description: _Optional[str] = ..., permissions: _Optional[_Iterable[_Union[MethodPermission, _Mapping]]] = ..., expires: _Optional[_Union[datetime.timedelta, _duration_pb2.Duration, _Mapping]] = ..., project_roles: _Optional[_Mapping[str, _common_pb2.ProjectRole]] = ..., tenant_roles: _Optional[_Mapping[str, _common_pb2.TenantRole]] = ..., admin_role: _Optional[_Union[_common_pb2.AdminRole, str]] = ...) -> None: ...

class MethodPermission(_message.Message):
    __slots__ = ("subject", "methods")
    SUBJECT_FIELD_NUMBER: _ClassVar[int]
    METHODS_FIELD_NUMBER: _ClassVar[int]
    subject: str
    methods: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, subject: _Optional[str] = ..., methods: _Optional[_Iterable[str]] = ...) -> None: ...

class TokenServiceCreateResponse(_message.Message):
    __slots__ = ("token", "secret")
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    token: Token
    secret: str
    def __init__(self, token: _Optional[_Union[Token, _Mapping]] = ..., secret: _Optional[str] = ...) -> None: ...

class TokenServiceListRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class TokenServiceListResponse(_message.Message):
    __slots__ = ("tokens",)
    TOKENS_FIELD_NUMBER: _ClassVar[int]
    tokens: _containers.RepeatedCompositeFieldContainer[Token]
    def __init__(self, tokens: _Optional[_Iterable[_Union[Token, _Mapping]]] = ...) -> None: ...

class TokenServiceRevokeRequest(_message.Message):
    __slots__ = ("uuid",)
    UUID_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    def __init__(self, uuid: _Optional[str] = ...) -> None: ...

class TokenServiceRevokeResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class TokenServiceUpdateRequest(_message.Message):
    __slots__ = ("uuid", "description", "permissions", "project_roles", "tenant_roles", "admin_role")
    class ProjectRolesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.ProjectRole
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.ProjectRole, str]] = ...) -> None: ...
    class TenantRolesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.TenantRole
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.TenantRole, str]] = ...) -> None: ...
    UUID_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    PERMISSIONS_FIELD_NUMBER: _ClassVar[int]
    PROJECT_ROLES_FIELD_NUMBER: _ClassVar[int]
    TENANT_ROLES_FIELD_NUMBER: _ClassVar[int]
    ADMIN_ROLE_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    description: str
    permissions: _containers.RepeatedCompositeFieldContainer[MethodPermission]
    project_roles: _containers.ScalarMap[str, _common_pb2.ProjectRole]
    tenant_roles: _containers.ScalarMap[str, _common_pb2.TenantRole]
    admin_role: _common_pb2.AdminRole
    def __init__(self, uuid: _Optional[str] = ..., description: _Optional[str] = ..., permissions: _Optional[_Iterable[_Union[MethodPermission, _Mapping]]] = ..., project_roles: _Optional[_Mapping[str, _common_pb2.ProjectRole]] = ..., tenant_roles: _Optional[_Mapping[str, _common_pb2.TenantRole]] = ..., admin_role: _Optional[_Union[_common_pb2.AdminRole, str]] = ...) -> None: ...

class TokenServiceUpdateResponse(_message.Message):
    __slots__ = ("token",)
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    token: Token
    def __init__(self, token: _Optional[_Union[Token, _Mapping]] = ...) -> None: ...

class TokenServiceGetRequest(_message.Message):
    __slots__ = ("uuid",)
    UUID_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    def __init__(self, uuid: _Optional[str] = ...) -> None: ...

class TokenServiceGetResponse(_message.Message):
    __slots__ = ("token",)
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    token: Token
    def __init__(self, token: _Optional[_Union[Token, _Mapping]] = ...) -> None: ...
