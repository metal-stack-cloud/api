from api.v1 import common_pb2 as _common_pb2
from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Volume(_message.Message):
    __slots__ = ("uuid", "name", "project", "partition", "storage_class", "size", "usage", "state", "attached_to", "source_snapshot_uuid", "source_snapshot_name", "volume_handle", "node_ips", "rebuild_progress", "primary_node_uuid", "qos_policy_uuid", "qos_policy_name", "replica_count", "protection_state", "logical_used_storage", "statistics", "cluster_name", "cluster_id", "labels")
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
    CLUSTER_NAME_FIELD_NUMBER: _ClassVar[int]
    CLUSTER_ID_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
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
    cluster_name: str
    cluster_id: str
    labels: _containers.RepeatedCompositeFieldContainer[VolumeLabel]
    def __init__(self, uuid: _Optional[str] = ..., name: _Optional[str] = ..., project: _Optional[str] = ..., partition: _Optional[str] = ..., storage_class: _Optional[str] = ..., size: _Optional[int] = ..., usage: _Optional[int] = ..., state: _Optional[str] = ..., attached_to: _Optional[_Iterable[str]] = ..., source_snapshot_uuid: _Optional[str] = ..., source_snapshot_name: _Optional[str] = ..., volume_handle: _Optional[str] = ..., node_ips: _Optional[_Iterable[str]] = ..., rebuild_progress: _Optional[str] = ..., primary_node_uuid: _Optional[str] = ..., qos_policy_uuid: _Optional[str] = ..., qos_policy_name: _Optional[str] = ..., replica_count: _Optional[int] = ..., protection_state: _Optional[str] = ..., logical_used_storage: _Optional[int] = ..., statistics: _Optional[_Union[VolumeStatistics, _Mapping]] = ..., cluster_name: _Optional[str] = ..., cluster_id: _Optional[str] = ..., labels: _Optional[_Iterable[_Union[VolumeLabel, _Mapping]]] = ...) -> None: ...

class VolumeLabel(_message.Message):
    __slots__ = ("key", "value")
    KEY_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    key: str
    value: str
    def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...

class UpdateVolumeLabels(_message.Message):
    __slots__ = ("update", "remove")
    UPDATE_FIELD_NUMBER: _ClassVar[int]
    REMOVE_FIELD_NUMBER: _ClassVar[int]
    update: _containers.RepeatedCompositeFieldContainer[VolumeLabel]
    remove: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, update: _Optional[_Iterable[_Union[VolumeLabel, _Mapping]]] = ..., remove: _Optional[_Iterable[str]] = ...) -> None: ...

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

class VolumeServiceUpdateRequest(_message.Message):
    __slots__ = ("uuid", "project", "labels")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    labels: UpdateVolumeLabels
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ..., labels: _Optional[_Union[UpdateVolumeLabels, _Mapping]] = ...) -> None: ...

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

class VolumeServiceUpdateResponse(_message.Message):
    __slots__ = ("volume",)
    VOLUME_FIELD_NUMBER: _ClassVar[int]
    volume: Volume
    def __init__(self, volume: _Optional[_Union[Volume, _Mapping]] = ...) -> None: ...
