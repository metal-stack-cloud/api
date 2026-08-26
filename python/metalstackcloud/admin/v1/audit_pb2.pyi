import datetime

from api.v1 import audit_pb2 as _audit_pb2
from api.v1 import common_pb2 as _common_pb2
from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AuditServiceListRequest(_message.Message):
    __slots__ = ("uuid", "to", "user", "project", "method", "source_ip", "result_code", "body", "limit", "phase")
    UUID_FIELD_NUMBER: _ClassVar[int]
    FROM_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    METHOD_FIELD_NUMBER: _ClassVar[int]
    SOURCE_IP_FIELD_NUMBER: _ClassVar[int]
    RESULT_CODE_FIELD_NUMBER: _ClassVar[int]
    BODY_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    to: _timestamp_pb2.Timestamp
    user: str
    project: str
    method: str
    source_ip: str
    result_code: int
    body: str
    limit: int
    phase: _audit_pb2.AuditPhase
    def __init__(self, uuid: _Optional[str] = ..., to: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., user: _Optional[str] = ..., project: _Optional[str] = ..., method: _Optional[str] = ..., source_ip: _Optional[str] = ..., result_code: _Optional[int] = ..., body: _Optional[str] = ..., limit: _Optional[int] = ..., phase: _Optional[_Union[_audit_pb2.AuditPhase, str]] = ..., **kwargs) -> None: ...

class AuditServiceListResponse(_message.Message):
    __slots__ = ("traces",)
    TRACES_FIELD_NUMBER: _ClassVar[int]
    traces: _containers.RepeatedCompositeFieldContainer[_audit_pb2.AuditTrace]
    def __init__(self, traces: _Optional[_Iterable[_Union[_audit_pb2.AuditTrace, _Mapping]]] = ...) -> None: ...

class AuditServiceGetRequest(_message.Message):
    __slots__ = ("uuid", "phase")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    phase: _audit_pb2.AuditPhase
    def __init__(self, uuid: _Optional[str] = ..., phase: _Optional[_Union[_audit_pb2.AuditPhase, str]] = ...) -> None: ...

class AuditServiceGetResponse(_message.Message):
    __slots__ = ("trace",)
    TRACE_FIELD_NUMBER: _ClassVar[int]
    trace: _audit_pb2.AuditTrace
    def __init__(self, trace: _Optional[_Union[_audit_pb2.AuditTrace, _Mapping]] = ...) -> None: ...
