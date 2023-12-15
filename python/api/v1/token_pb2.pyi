from api.v1 import common_pb2 as _common_pb2
from google.protobuf import duration_pb2 as _duration_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from validate import validate_pb2 as _validate_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

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
    __slots__ = ("uuid", "user_id", "description", "permissions", "roles", "expires", "issued_at", "token_type")
    UUID_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    PERMISSIONS_FIELD_NUMBER: _ClassVar[int]
    ROLES_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_FIELD_NUMBER: _ClassVar[int]
    ISSUED_AT_FIELD_NUMBER: _ClassVar[int]
    TOKEN_TYPE_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    user_id: str
    description: str
    permissions: _containers.RepeatedCompositeFieldContainer[MethodPermission]
    roles: _containers.RepeatedCompositeFieldContainer[TokenRole]
    expires: _timestamp_pb2.Timestamp
    issued_at: _timestamp_pb2.Timestamp
    token_type: TokenType
    def __init__(self, uuid: _Optional[str] = ..., user_id: _Optional[str] = ..., description: _Optional[str] = ..., permissions: _Optional[_Iterable[_Union[MethodPermission, _Mapping]]] = ..., roles: _Optional[_Iterable[_Union[TokenRole, _Mapping]]] = ..., expires: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., issued_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., token_type: _Optional[_Union[TokenType, str]] = ...) -> None: ...

class TokenServiceCreateRequest(_message.Message):
    __slots__ = ("description", "permissions", "roles", "expires")
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    PERMISSIONS_FIELD_NUMBER: _ClassVar[int]
    ROLES_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_FIELD_NUMBER: _ClassVar[int]
    description: str
    permissions: _containers.RepeatedCompositeFieldContainer[MethodPermission]
    roles: _containers.RepeatedCompositeFieldContainer[TokenRole]
    expires: _duration_pb2.Duration
    def __init__(self, description: _Optional[str] = ..., permissions: _Optional[_Iterable[_Union[MethodPermission, _Mapping]]] = ..., roles: _Optional[_Iterable[_Union[TokenRole, _Mapping]]] = ..., expires: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class MethodPermission(_message.Message):
    __slots__ = ("subject", "methods")
    SUBJECT_FIELD_NUMBER: _ClassVar[int]
    METHODS_FIELD_NUMBER: _ClassVar[int]
    subject: str
    methods: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, subject: _Optional[str] = ..., methods: _Optional[_Iterable[str]] = ...) -> None: ...

class TokenRole(_message.Message):
    __slots__ = ("subject", "role")
    SUBJECT_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    subject: str
    role: str
    def __init__(self, subject: _Optional[str] = ..., role: _Optional[str] = ...) -> None: ...

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
