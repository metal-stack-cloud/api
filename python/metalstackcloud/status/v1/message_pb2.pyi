import datetime

from api.v1 import common_pb2 as _common_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class MessageKind(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    MESSAGE_KIND_UNSPECIFIED: _ClassVar[MessageKind]
    MESSAGE_KIND_INFO: _ClassVar[MessageKind]
    MESSAGE_KIND_INCIDENT: _ClassVar[MessageKind]
    MESSAGE_KIND_CHANGE: _ClassVar[MessageKind]
    MESSAGE_KIND_RESOLVED: _ClassVar[MessageKind]
    MESSAGE_KIND_UPDATE: _ClassVar[MessageKind]
MESSAGE_KIND_UNSPECIFIED: MessageKind
MESSAGE_KIND_INFO: MessageKind
MESSAGE_KIND_INCIDENT: MessageKind
MESSAGE_KIND_CHANGE: MessageKind
MESSAGE_KIND_RESOLVED: MessageKind
MESSAGE_KIND_UPDATE: MessageKind

class MessageServiceWatchRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class MessageServiceWatchResponse(_message.Message):
    __slots__ = ("items", "pinned_items")
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    PINNED_ITEMS_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Message]
    pinned_items: _containers.RepeatedCompositeFieldContainer[Message]
    def __init__(self, items: _Optional[_Iterable[_Union[Message, _Mapping]]] = ..., pinned_items: _Optional[_Iterable[_Union[Message, _Mapping]]] = ...) -> None: ...

class Message(_message.Message):
    __slots__ = ("id", "text", "kind", "timestamp", "replies")
    ID_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    REPLIES_FIELD_NUMBER: _ClassVar[int]
    id: str
    text: str
    kind: MessageKind
    timestamp: _timestamp_pb2.Timestamp
    replies: _containers.RepeatedCompositeFieldContainer[ReplyMessage]
    def __init__(self, id: _Optional[str] = ..., text: _Optional[str] = ..., kind: _Optional[_Union[MessageKind, str]] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., replies: _Optional[_Iterable[_Union[ReplyMessage, _Mapping]]] = ...) -> None: ...

class ReplyMessage(_message.Message):
    __slots__ = ("id", "text", "kind", "timestamp")
    ID_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    id: str
    text: str
    kind: MessageKind
    timestamp: _timestamp_pb2.Timestamp
    def __init__(self, id: _Optional[str] = ..., text: _Optional[str] = ..., kind: _Optional[_Union[MessageKind, str]] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...
