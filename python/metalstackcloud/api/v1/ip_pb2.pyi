import datetime

from api.v1 import common_pb2 as _common_pb2
from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class IPType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    IP_TYPE_UNSPECIFIED: _ClassVar[IPType]
    IP_TYPE_EPHEMERAL: _ClassVar[IPType]
    IP_TYPE_STATIC: _ClassVar[IPType]
IP_TYPE_UNSPECIFIED: IPType
IP_TYPE_EPHEMERAL: IPType
IP_TYPE_STATIC: IPType

class IP(_message.Message):
    __slots__ = ("uuid", "ip", "name", "description", "network", "project", "type", "tags", "created_at", "updated_at", "deleted_at")
    UUID_FIELD_NUMBER: _ClassVar[int]
    IP_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    NETWORK_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    DELETED_AT_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    ip: str
    name: str
    description: str
    network: str
    project: str
    type: IPType
    tags: _containers.RepeatedScalarFieldContainer[str]
    created_at: _timestamp_pb2.Timestamp
    updated_at: _timestamp_pb2.Timestamp
    deleted_at: _timestamp_pb2.Timestamp
    def __init__(self, uuid: _Optional[str] = ..., ip: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., network: _Optional[str] = ..., project: _Optional[str] = ..., type: _Optional[_Union[IPType, str]] = ..., tags: _Optional[_Iterable[str]] = ..., created_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., updated_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., deleted_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class IPServiceGetRequest(_message.Message):
    __slots__ = ("uuid", "project")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ...) -> None: ...

class IPServiceAllocateRequest(_message.Message):
    __slots__ = ("project", "name", "description", "tags", "static")
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    STATIC_FIELD_NUMBER: _ClassVar[int]
    project: str
    name: str
    description: str
    tags: _containers.RepeatedScalarFieldContainer[str]
    static: bool
    def __init__(self, project: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., tags: _Optional[_Iterable[str]] = ..., static: bool = ...) -> None: ...

class IPServiceUpdateRequest(_message.Message):
    __slots__ = ("project", "ip")
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    IP_FIELD_NUMBER: _ClassVar[int]
    project: str
    ip: IP
    def __init__(self, project: _Optional[str] = ..., ip: _Optional[_Union[IP, _Mapping]] = ...) -> None: ...

class IPServiceListRequest(_message.Message):
    __slots__ = ("project",)
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    project: str
    def __init__(self, project: _Optional[str] = ...) -> None: ...

class IPServiceDeleteRequest(_message.Message):
    __slots__ = ("uuid", "project")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ...) -> None: ...

class IPServiceGetResponse(_message.Message):
    __slots__ = ("ip",)
    IP_FIELD_NUMBER: _ClassVar[int]
    ip: IP
    def __init__(self, ip: _Optional[_Union[IP, _Mapping]] = ...) -> None: ...

class IPServiceUpdateResponse(_message.Message):
    __slots__ = ("ip",)
    IP_FIELD_NUMBER: _ClassVar[int]
    ip: IP
    def __init__(self, ip: _Optional[_Union[IP, _Mapping]] = ...) -> None: ...

class IPServiceAllocateResponse(_message.Message):
    __slots__ = ("ip",)
    IP_FIELD_NUMBER: _ClassVar[int]
    ip: IP
    def __init__(self, ip: _Optional[_Union[IP, _Mapping]] = ...) -> None: ...

class IPServiceListResponse(_message.Message):
    __slots__ = ("ips",)
    IPS_FIELD_NUMBER: _ClassVar[int]
    ips: _containers.RepeatedCompositeFieldContainer[IP]
    def __init__(self, ips: _Optional[_Iterable[_Union[IP, _Mapping]]] = ...) -> None: ...

class IPServiceDeleteResponse(_message.Message):
    __slots__ = ("ip",)
    IP_FIELD_NUMBER: _ClassVar[int]
    ip: IP
    def __init__(self, ip: _Optional[_Union[IP, _Mapping]] = ...) -> None: ...
