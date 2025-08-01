from api.v1 import common_pb2 as _common_pb2
from api.v1 import health_pb2 as _health_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class StatusServiceWatchRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class StatusServiceWatchResponse(_message.Message):
    __slots__ = ("health", "overall_status", "connection_broken", "api_version")
    HEALTH_FIELD_NUMBER: _ClassVar[int]
    OVERALL_STATUS_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_BROKEN_FIELD_NUMBER: _ClassVar[int]
    API_VERSION_FIELD_NUMBER: _ClassVar[int]
    health: _health_pb2.Health
    overall_status: _health_pb2.ServiceStatus
    connection_broken: bool
    api_version: str
    def __init__(self, health: _Optional[_Union[_health_pb2.Health, _Mapping]] = ..., overall_status: _Optional[_Union[_health_pb2.ServiceStatus, str]] = ..., connection_broken: bool = ..., api_version: _Optional[str] = ...) -> None: ...
