from api.v1 import common_pb2 as _common_pb2
from google.protobuf import duration_pb2 as _duration_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from validate import validate_pb2 as _validate_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Volume(_message.Message):
    __slots__ = ("uuid", "name", "project", "partition", "storage_class", "size", "usage", "state", "attached_to", "source_snapshot_uuid", "source_snapshot_name", "volume_handle", "node_ips", "rebuild_progress", "primary_node_uuid", "qos_policy_uuid", "qos_policy_name", "replica_count", "protection_state", "logical_used_storage", "statistics")
    UUID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    STORAGE_CLASS_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    USAGE_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    ATTACHED_TO_FIELD_NUMBER: _ClassVar[int]
    SOURCE_SNAPSHOT_UUID_FIELD_NUMBER: _ClassVar[int]
    SOURCE_SNAPSHOT_NAME_FIELD_NUMBER: _ClassVar[int]
    VOLUME_HANDLE_FIELD_NUMBER: _ClassVar[int]
    NODE_IPS_FIELD_NUMBER: _ClassVar[int]
    REBUILD_PROGRESS_FIELD_NUMBER: _ClassVar[int]
    PRIMARY_NODE_UUID_FIELD_NUMBER: _ClassVar[int]
    QOS_POLICY_UUID_FIELD_NUMBER: _ClassVar[int]
    QOS_POLICY_NAME_FIELD_NUMBER: _ClassVar[int]
    REPLICA_COUNT_FIELD_NUMBER: _ClassVar[int]
    PROTECTION_STATE_FIELD_NUMBER: _ClassVar[int]
    LOGICAL_USED_STORAGE_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    name: str
    project: str
    partition: str
    storage_class: str
    size: int
    usage: int
    state: str
    attached_to: _containers.RepeatedScalarFieldContainer[str]
    source_snapshot_uuid: str
    source_snapshot_name: str
    volume_handle: str
    node_ips: _containers.RepeatedScalarFieldContainer[str]
    rebuild_progress: str
    primary_node_uuid: str
    qos_policy_uuid: str
    qos_policy_name: str
    replica_count: int
    protection_state: str
    logical_used_storage: int
    statistics: VolumeStatistics
    def __init__(self, uuid: _Optional[str] = ..., name: _Optional[str] = ..., project: _Optional[str] = ..., partition: _Optional[str] = ..., storage_class: _Optional[str] = ..., size: _Optional[int] = ..., usage: _Optional[int] = ..., state: _Optional[str] = ..., attached_to: _Optional[_Iterable[str]] = ..., source_snapshot_uuid: _Optional[str] = ..., source_snapshot_name: _Optional[str] = ..., volume_handle: _Optional[str] = ..., node_ips: _Optional[_Iterable[str]] = ..., rebuild_progress: _Optional[str] = ..., primary_node_uuid: _Optional[str] = ..., qos_policy_uuid: _Optional[str] = ..., qos_policy_name: _Optional[str] = ..., replica_count: _Optional[int] = ..., protection_state: _Optional[str] = ..., logical_used_storage: _Optional[int] = ..., statistics: _Optional[_Union[VolumeStatistics, _Mapping]] = ...) -> None: ...

class VolumeStatistics(_message.Message):
    __slots__ = ("logical_used_storage", "physical_used_storage", "compression_ratio", "total_compression_ratio", "physical_capacity", "physical_owned_capacity", "physical_owned_memory", "physical_memory", "user_written", "unrecoverable_data_integrity_errors", "recoverable_data_integrity_errors")
    LOGICAL_USED_STORAGE_FIELD_NUMBER: _ClassVar[int]
    PHYSICAL_USED_STORAGE_FIELD_NUMBER: _ClassVar[int]
    COMPRESSION_RATIO_FIELD_NUMBER: _ClassVar[int]
    TOTAL_COMPRESSION_RATIO_FIELD_NUMBER: _ClassVar[int]
    PHYSICAL_CAPACITY_FIELD_NUMBER: _ClassVar[int]
    PHYSICAL_OWNED_CAPACITY_FIELD_NUMBER: _ClassVar[int]
    PHYSICAL_OWNED_MEMORY_FIELD_NUMBER: _ClassVar[int]
    PHYSICAL_MEMORY_FIELD_NUMBER: _ClassVar[int]
    USER_WRITTEN_FIELD_NUMBER: _ClassVar[int]
    UNRECOVERABLE_DATA_INTEGRITY_ERRORS_FIELD_NUMBER: _ClassVar[int]
    RECOVERABLE_DATA_INTEGRITY_ERRORS_FIELD_NUMBER: _ClassVar[int]
    logical_used_storage: int
    physical_used_storage: int
    compression_ratio: float
    total_compression_ratio: float
    physical_capacity: int
    physical_owned_capacity: int
    physical_owned_memory: int
    physical_memory: int
    user_written: int
    unrecoverable_data_integrity_errors: int
    recoverable_data_integrity_errors: int
    def __init__(self, logical_used_storage: _Optional[int] = ..., physical_used_storage: _Optional[int] = ..., compression_ratio: _Optional[float] = ..., total_compression_ratio: _Optional[float] = ..., physical_capacity: _Optional[int] = ..., physical_owned_capacity: _Optional[int] = ..., physical_owned_memory: _Optional[int] = ..., physical_memory: _Optional[int] = ..., user_written: _Optional[int] = ..., unrecoverable_data_integrity_errors: _Optional[int] = ..., recoverable_data_integrity_errors: _Optional[int] = ...) -> None: ...

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
    def __init__(self, uuid: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., project: _Optional[str] = ..., partition: _Optional[str] = ..., storage_class: _Optional[str] = ..., size: _Optional[int] = ..., usage: _Optional[int] = ..., state: _Optional[str] = ..., source_volume_uuid: _Optional[str] = ..., source_volume_name: _Optional[str] = ..., replica_count: _Optional[int] = ..., primary_node_uuid: _Optional[str] = ..., retention: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ..., statistics: _Optional[_Union[SnapshotStatistics, _Mapping]] = ..., created_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

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

class VolumeServiceGetRequest(_message.Message):
    __slots__ = ("uuid", "project")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ...) -> None: ...

class VolumeServiceListRequest(_message.Message):
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

class VolumeServiceDeleteRequest(_message.Message):
    __slots__ = ("uuid", "project")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ...) -> None: ...

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

class VolumeServiceGetResponse(_message.Message):
    __slots__ = ("volume",)
    VOLUME_FIELD_NUMBER: _ClassVar[int]
    volume: Volume
    def __init__(self, volume: _Optional[_Union[Volume, _Mapping]] = ...) -> None: ...

class VolumeServiceListResponse(_message.Message):
    __slots__ = ("volumes",)
    VOLUMES_FIELD_NUMBER: _ClassVar[int]
    volumes: _containers.RepeatedCompositeFieldContainer[Volume]
    def __init__(self, volumes: _Optional[_Iterable[_Union[Volume, _Mapping]]] = ...) -> None: ...

class VolumeServiceDeleteResponse(_message.Message):
    __slots__ = ("volume",)
    VOLUME_FIELD_NUMBER: _ClassVar[int]
    volume: Volume
    def __init__(self, volume: _Optional[_Union[Volume, _Mapping]] = ...) -> None: ...

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
