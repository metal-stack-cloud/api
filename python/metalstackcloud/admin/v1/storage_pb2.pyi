from api.v1 import common_pb2 as _common_pb2
from api.v1 import snapshot_pb2 as _snapshot_pb2
from api.v1 import volume_pb2 as _volume_pb2
from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class StorageServiceClusterInfoRequest(_message.Message):
    __slots__ = ("partition",)
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    partition: str
    def __init__(self, partition: _Optional[str] = ...) -> None: ...

class StorageServiceClusterInfoResponse(_message.Message):
    __slots__ = ("infos",)
    INFOS_FIELD_NUMBER: _ClassVar[int]
    infos: _containers.RepeatedCompositeFieldContainer[StorageClusterInfo]
    def __init__(self, infos: _Optional[_Iterable[_Union[StorageClusterInfo, _Mapping]]] = ...) -> None: ...

class StorageClusterInfo(_message.Message):
    __slots__ = ("partition", "uuid", "subsystem_nqn", "current_max_replicas", "supported_max_replicas", "statistics", "health", "min_version_in_cluster", "min_allowed_version", "max_allowed_version", "api_endpoints", "discovery_endpoints", "servers")
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    UUID_FIELD_NUMBER: _ClassVar[int]
    SUBSYSTEM_NQN_FIELD_NUMBER: _ClassVar[int]
    CURRENT_MAX_REPLICAS_FIELD_NUMBER: _ClassVar[int]
    SUPPORTED_MAX_REPLICAS_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    HEALTH_FIELD_NUMBER: _ClassVar[int]
    MIN_VERSION_IN_CLUSTER_FIELD_NUMBER: _ClassVar[int]
    MIN_ALLOWED_VERSION_FIELD_NUMBER: _ClassVar[int]
    MAX_ALLOWED_VERSION_FIELD_NUMBER: _ClassVar[int]
    API_ENDPOINTS_FIELD_NUMBER: _ClassVar[int]
    DISCOVERY_ENDPOINTS_FIELD_NUMBER: _ClassVar[int]
    SERVERS_FIELD_NUMBER: _ClassVar[int]
    partition: str
    uuid: str
    subsystem_nqn: str
    current_max_replicas: int
    supported_max_replicas: int
    statistics: ClusterStatisticsApi
    health: ClusterHealth
    min_version_in_cluster: str
    min_allowed_version: str
    max_allowed_version: str
    api_endpoints: _containers.RepeatedScalarFieldContainer[str]
    discovery_endpoints: _containers.RepeatedScalarFieldContainer[str]
    servers: _containers.RepeatedCompositeFieldContainer[StorageServerInfo]
    def __init__(self, partition: _Optional[str] = ..., uuid: _Optional[str] = ..., subsystem_nqn: _Optional[str] = ..., current_max_replicas: _Optional[int] = ..., supported_max_replicas: _Optional[int] = ..., statistics: _Optional[_Union[ClusterStatisticsApi, _Mapping]] = ..., health: _Optional[_Union[ClusterHealth, _Mapping]] = ..., min_version_in_cluster: _Optional[str] = ..., min_allowed_version: _Optional[str] = ..., max_allowed_version: _Optional[str] = ..., api_endpoints: _Optional[_Iterable[str]] = ..., discovery_endpoints: _Optional[_Iterable[str]] = ..., servers: _Optional[_Iterable[_Union[StorageServerInfo, _Mapping]]] = ...) -> None: ...

class StorageServerInfo(_message.Message):
    __slots__ = ("uuid", "name", "risk_of_service_loss_state", "state", "server_endpoints", "light_os_version")
    UUID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    RISK_OF_SERVICE_LOSS_STATE_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    SERVER_ENDPOINTS_FIELD_NUMBER: _ClassVar[int]
    LIGHT_OS_VERSION_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    name: str
    risk_of_service_loss_state: str
    state: str
    server_endpoints: _containers.RepeatedScalarFieldContainer[str]
    light_os_version: str
    def __init__(self, uuid: _Optional[str] = ..., name: _Optional[str] = ..., risk_of_service_loss_state: _Optional[str] = ..., state: _Optional[str] = ..., server_endpoints: _Optional[_Iterable[str]] = ..., light_os_version: _Optional[str] = ...) -> None: ...

class ClusterHealth(_message.Message):
    __slots__ = ("state", "num_degraded_volumes", "num_read_only_volumes", "num_not_available_volumes", "num_inactive_nodes")
    STATE_FIELD_NUMBER: _ClassVar[int]
    NUM_DEGRADED_VOLUMES_FIELD_NUMBER: _ClassVar[int]
    NUM_READ_ONLY_VOLUMES_FIELD_NUMBER: _ClassVar[int]
    NUM_NOT_AVAILABLE_VOLUMES_FIELD_NUMBER: _ClassVar[int]
    NUM_INACTIVE_NODES_FIELD_NUMBER: _ClassVar[int]
    state: str
    num_degraded_volumes: int
    num_read_only_volumes: int
    num_not_available_volumes: int
    num_inactive_nodes: int
    def __init__(self, state: _Optional[str] = ..., num_degraded_volumes: _Optional[int] = ..., num_read_only_volumes: _Optional[int] = ..., num_not_available_volumes: _Optional[int] = ..., num_inactive_nodes: _Optional[int] = ...) -> None: ...

class ClusterStatisticsApi(_message.Message):
    __slots__ = ("installed_physical_storage", "managed_physical_storage", "effective_physical_storage", "logical_storage", "logical_used_storage", "physical_used_storage", "physical_used_storage_including_parity", "free_physical_storage", "estimated_free_logical_storage", "estimated_logical_storage", "compression_ratio")
    INSTALLED_PHYSICAL_STORAGE_FIELD_NUMBER: _ClassVar[int]
    MANAGED_PHYSICAL_STORAGE_FIELD_NUMBER: _ClassVar[int]
    EFFECTIVE_PHYSICAL_STORAGE_FIELD_NUMBER: _ClassVar[int]
    LOGICAL_STORAGE_FIELD_NUMBER: _ClassVar[int]
    LOGICAL_USED_STORAGE_FIELD_NUMBER: _ClassVar[int]
    PHYSICAL_USED_STORAGE_FIELD_NUMBER: _ClassVar[int]
    PHYSICAL_USED_STORAGE_INCLUDING_PARITY_FIELD_NUMBER: _ClassVar[int]
    FREE_PHYSICAL_STORAGE_FIELD_NUMBER: _ClassVar[int]
    ESTIMATED_FREE_LOGICAL_STORAGE_FIELD_NUMBER: _ClassVar[int]
    ESTIMATED_LOGICAL_STORAGE_FIELD_NUMBER: _ClassVar[int]
    COMPRESSION_RATIO_FIELD_NUMBER: _ClassVar[int]
    installed_physical_storage: int
    managed_physical_storage: int
    effective_physical_storage: int
    logical_storage: int
    logical_used_storage: int
    physical_used_storage: int
    physical_used_storage_including_parity: int
    free_physical_storage: int
    estimated_free_logical_storage: int
    estimated_logical_storage: int
    compression_ratio: float
    def __init__(self, installed_physical_storage: _Optional[int] = ..., managed_physical_storage: _Optional[int] = ..., effective_physical_storage: _Optional[int] = ..., logical_storage: _Optional[int] = ..., logical_used_storage: _Optional[int] = ..., physical_used_storage: _Optional[int] = ..., physical_used_storage_including_parity: _Optional[int] = ..., free_physical_storage: _Optional[int] = ..., estimated_free_logical_storage: _Optional[int] = ..., estimated_logical_storage: _Optional[int] = ..., compression_ratio: _Optional[float] = ...) -> None: ...

class StorageServiceListVolumesRequest(_message.Message):
    __slots__ = ("uuid", "project", "partition", "name", "tenant")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    partition: str
    name: str
    tenant: str
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ..., partition: _Optional[str] = ..., name: _Optional[str] = ..., tenant: _Optional[str] = ...) -> None: ...

class StorageServiceListVolumesResponse(_message.Message):
    __slots__ = ("volumes",)
    VOLUMES_FIELD_NUMBER: _ClassVar[int]
    volumes: _containers.RepeatedCompositeFieldContainer[_volume_pb2.Volume]
    def __init__(self, volumes: _Optional[_Iterable[_Union[_volume_pb2.Volume, _Mapping]]] = ...) -> None: ...

class StorageServiceListSnapshotsRequest(_message.Message):
    __slots__ = ("uuid", "project", "partition", "name", "tenant")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    partition: str
    name: str
    tenant: str
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ..., partition: _Optional[str] = ..., name: _Optional[str] = ..., tenant: _Optional[str] = ...) -> None: ...

class StorageServiceListSnapshotsResponse(_message.Message):
    __slots__ = ("snapshots",)
    SNAPSHOTS_FIELD_NUMBER: _ClassVar[int]
    snapshots: _containers.RepeatedCompositeFieldContainer[_snapshot_pb2.Snapshot]
    def __init__(self, snapshots: _Optional[_Iterable[_Union[_snapshot_pb2.Snapshot, _Mapping]]] = ...) -> None: ...
