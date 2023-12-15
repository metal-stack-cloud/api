from api.v1 import common_pb2 as _common_pb2
from api.v1 import token_pb2 as _token_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class MethodServiceListRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class MethodServiceListResponse(_message.Message):
    __slots__ = ("methods",)
    METHODS_FIELD_NUMBER: _ClassVar[int]
    methods: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, methods: _Optional[_Iterable[str]] = ...) -> None: ...

class MethodServiceTokenScopedListRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class MethodServiceTokenScopedListResponse(_message.Message):
    __slots__ = ("permissions", "roles")
    PERMISSIONS_FIELD_NUMBER: _ClassVar[int]
    ROLES_FIELD_NUMBER: _ClassVar[int]
    permissions: _containers.RepeatedCompositeFieldContainer[_token_pb2.MethodPermission]
    roles: _containers.RepeatedCompositeFieldContainer[_token_pb2.TokenRole]
    def __init__(self, permissions: _Optional[_Iterable[_Union[_token_pb2.MethodPermission, _Mapping]]] = ..., roles: _Optional[_Iterable[_Union[_token_pb2.TokenRole, _Mapping]]] = ...) -> None: ...
