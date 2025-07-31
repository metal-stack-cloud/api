import datetime

from api.v1 import common_pb2 as _common_pb2
from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import duration_pb2 as _duration_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Snapshot(_message.Message):
    __slots__ = ("uuid", "name", "description", "project", "partition", "storage_class", "size", "usage", "state", "source_volume_uuid", "source_volume_name", "replica_count", "primary_node_uuid", "retention", "statistics", "created_at")
    UUID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    STORAGE_CLASS_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    USAGE_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    SOURCE_VOLUME_UUID_FIELD_NUMBER: _ClassVar[int]
    SOURCE_VOLUME_NAME_FIELD_NUMBER: _ClassVar[int]
    REPLICA_COUNT_FIELD_NUMBER: _ClassVar[int]
    PRIMARY_NODE_UUID_FIELD_NUMBER: _ClassVar[int]
    RETENTION_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    name: str
    description: str
    project: str
    partition: str
    storage_class: str
    size: int
    usage: int
    state: str
    source_volume_uuid: str
    source_volume_name: str
    replica_count: int
    primary_node_uuid: str
    retention: _duration_pb2.Duration
    statistics: SnapshotStatistics
    created_at: _timestamp_pb2.Timestamp
    def __init__(self, uuid: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., project: _Optional[str] = ..., partition: _Optional[str] = ..., storage_class: _Optional[str] = ..., size: _Optional[int] = ..., usage: _Optional[int] = ..., state: _Optional[str] = ..., source_volume_uuid: _Optional[str] = ..., source_volume_name: _Optional[str] = ..., replica_count: _Optional[int] = ..., primary_node_uuid: _Optional[str] = ..., retention: _Optional[_Union[datetime.timedelta, _duration_pb2.Duration, _Mapping]] = ..., statistics: _Optional[_Union[SnapshotStatistics, _Mapping]] = ..., created_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class SnapshotStatistics(_message.Message):
    __slots__ = ("physical_capacity", "physical_owned_capacity", "physical_owned_memory", "physical_memory", "user_written")
    PHYSICAL_CAPACITY_FIELD_NUMBER: _ClassVar[int]
    PHYSICAL_OWNED_CAPACITY_FIELD_NUMBER: _ClassVar[int]
    PHYSICAL_OWNED_MEMORY_FIELD_NUMBER: _ClassVar[int]
    PHYSICAL_MEMORY_FIELD_NUMBER: _ClassVar[int]
    USER_WRITTEN_FIELD_NUMBER: _ClassVar[int]
    physical_capacity: int
    physical_owned_capacity: int
    physical_owned_memory: int
    physical_memory: int
    user_written: int
    def __init__(self, physical_capacity: _Optional[int] = ..., physical_owned_capacity: _Optional[int] = ..., physical_owned_memory: _Optional[int] = ..., physical_memory: _Optional[int] = ..., user_written: _Optional[int] = ...) -> None: ...

class SnapshotServiceGetRequest(_message.Message):
    __slots__ = ("uuid", "project")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ...) -> None: ...

class SnapshotServiceListRequest(_message.Message):
    __slots__ = ("uuid", "project", "partition", "name")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    partition: str
    name: str
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ..., partition: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class SnapshotServiceDeleteRequest(_message.Message):
    __slots__ = ("uuid", "project")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ...) -> None: ...

class SnapshotServiceGetResponse(_message.Message):
    __slots__ = ("snapshot",)
    SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    snapshot: Snapshot
    def __init__(self, snapshot: _Optional[_Union[Snapshot, _Mapping]] = ...) -> None: ...

class SnapshotServiceListResponse(_message.Message):
    __slots__ = ("snapshots",)
    SNAPSHOTS_FIELD_NUMBER: _ClassVar[int]
    snapshots: _containers.RepeatedCompositeFieldContainer[Snapshot]
    def __init__(self, snapshots: _Optional[_Iterable[_Union[Snapshot, _Mapping]]] = ...) -> None: ...

class SnapshotServiceDeleteResponse(_message.Message):
    __slots__ = ("snapshot",)
    SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    snapshot: Snapshot
    def __init__(self, snapshot: _Optional[_Union[Snapshot, _Mapping]] = ...) -> None: ...
