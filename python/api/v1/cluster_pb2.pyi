from api.v1 import common_pb2 as _common_pb2
from google.protobuf import duration_pb2 as _duration_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from validate import validate_pb2 as _validate_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Cluster(_message.Message):
    __slots__ = ("uuid", "name", "project", "partition", "kubernetes", "workers", "maintenance", "tenant", "created_at", "updated_at", "deleted_at", "status", "purpose", "monitoring")
    UUID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    KUBERNETES_FIELD_NUMBER: _ClassVar[int]
    WORKERS_FIELD_NUMBER: _ClassVar[int]
    MAINTENANCE_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    DELETED_AT_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    PURPOSE_FIELD_NUMBER: _ClassVar[int]
    MONITORING_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    name: str
    project: str
    partition: str
    kubernetes: KubernetesSpec
    workers: _containers.RepeatedCompositeFieldContainer[Worker]
    maintenance: Maintenance
    tenant: str
    created_at: _timestamp_pb2.Timestamp
    updated_at: _timestamp_pb2.Timestamp
    deleted_at: _timestamp_pb2.Timestamp
    status: ClusterStatus
    purpose: str
    monitoring: ClusterMonitoring
    def __init__(self, uuid: _Optional[str] = ..., name: _Optional[str] = ..., project: _Optional[str] = ..., partition: _Optional[str] = ..., kubernetes: _Optional[_Union[KubernetesSpec, _Mapping]] = ..., workers: _Optional[_Iterable[_Union[Worker, _Mapping]]] = ..., maintenance: _Optional[_Union[Maintenance, _Mapping]] = ..., tenant: _Optional[str] = ..., created_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., updated_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., deleted_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., status: _Optional[_Union[ClusterStatus, _Mapping]] = ..., purpose: _Optional[str] = ..., monitoring: _Optional[_Union[ClusterMonitoring, _Mapping]] = ...) -> None: ...

class KubernetesSpec(_message.Message):
    __slots__ = ("version",)
    VERSION_FIELD_NUMBER: _ClassVar[int]
    version: str
    def __init__(self, version: _Optional[str] = ...) -> None: ...

class Maintenance(_message.Message):
    __slots__ = ("kubernetes_autoupdate", "machineimage_autoupdate", "time_window")
    KUBERNETES_AUTOUPDATE_FIELD_NUMBER: _ClassVar[int]
    MACHINEIMAGE_AUTOUPDATE_FIELD_NUMBER: _ClassVar[int]
    TIME_WINDOW_FIELD_NUMBER: _ClassVar[int]
    kubernetes_autoupdate: bool
    machineimage_autoupdate: bool
    time_window: MaintenanceTimeWindow
    def __init__(self, kubernetes_autoupdate: bool = ..., machineimage_autoupdate: bool = ..., time_window: _Optional[_Union[MaintenanceTimeWindow, _Mapping]] = ...) -> None: ...

class MaintenanceTimeWindow(_message.Message):
    __slots__ = ("begin", "duration")
    BEGIN_FIELD_NUMBER: _ClassVar[int]
    DURATION_FIELD_NUMBER: _ClassVar[int]
    begin: _timestamp_pb2.Timestamp
    duration: _duration_pb2.Duration
    def __init__(self, begin: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., duration: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class Worker(_message.Message):
    __slots__ = ("name", "machine_type", "minsize", "maxsize", "maxsurge", "maxunavailable")
    NAME_FIELD_NUMBER: _ClassVar[int]
    MACHINE_TYPE_FIELD_NUMBER: _ClassVar[int]
    MINSIZE_FIELD_NUMBER: _ClassVar[int]
    MAXSIZE_FIELD_NUMBER: _ClassVar[int]
    MAXSURGE_FIELD_NUMBER: _ClassVar[int]
    MAXUNAVAILABLE_FIELD_NUMBER: _ClassVar[int]
    name: str
    machine_type: str
    minsize: int
    maxsize: int
    maxsurge: int
    maxunavailable: int
    def __init__(self, name: _Optional[str] = ..., machine_type: _Optional[str] = ..., minsize: _Optional[int] = ..., maxsize: _Optional[int] = ..., maxsurge: _Optional[int] = ..., maxunavailable: _Optional[int] = ...) -> None: ...

class WorkerUpdate(_message.Message):
    __slots__ = ("name", "machine_type", "minsize", "maxsize", "maxsurge", "maxunavailable")
    NAME_FIELD_NUMBER: _ClassVar[int]
    MACHINE_TYPE_FIELD_NUMBER: _ClassVar[int]
    MINSIZE_FIELD_NUMBER: _ClassVar[int]
    MAXSIZE_FIELD_NUMBER: _ClassVar[int]
    MAXSURGE_FIELD_NUMBER: _ClassVar[int]
    MAXUNAVAILABLE_FIELD_NUMBER: _ClassVar[int]
    name: str
    machine_type: str
    minsize: int
    maxsize: int
    maxsurge: int
    maxunavailable: int
    def __init__(self, name: _Optional[str] = ..., machine_type: _Optional[str] = ..., minsize: _Optional[int] = ..., maxsize: _Optional[int] = ..., maxsurge: _Optional[int] = ..., maxunavailable: _Optional[int] = ...) -> None: ...

class ClusterServiceGetRequest(_message.Message):
    __slots__ = ("uuid", "project")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ...) -> None: ...

class ClusterServiceGetCredentialsRequest(_message.Message):
    __slots__ = ("uuid", "project", "expiration")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    EXPIRATION_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    expiration: _duration_pb2.Duration
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ..., expiration: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class ClusterServiceListRequest(_message.Message):
    __slots__ = ("project",)
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    project: str
    def __init__(self, project: _Optional[str] = ...) -> None: ...

class ClusterServiceCreateRequest(_message.Message):
    __slots__ = ("name", "project", "partition", "kubernetes", "workers", "maintenance")
    NAME_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    KUBERNETES_FIELD_NUMBER: _ClassVar[int]
    WORKERS_FIELD_NUMBER: _ClassVar[int]
    MAINTENANCE_FIELD_NUMBER: _ClassVar[int]
    name: str
    project: str
    partition: str
    kubernetes: KubernetesSpec
    workers: _containers.RepeatedCompositeFieldContainer[Worker]
    maintenance: Maintenance
    def __init__(self, name: _Optional[str] = ..., project: _Optional[str] = ..., partition: _Optional[str] = ..., kubernetes: _Optional[_Union[KubernetesSpec, _Mapping]] = ..., workers: _Optional[_Iterable[_Union[Worker, _Mapping]]] = ..., maintenance: _Optional[_Union[Maintenance, _Mapping]] = ...) -> None: ...

class ClusterServiceUpdateRequest(_message.Message):
    __slots__ = ("uuid", "project", "kubernetes", "workers", "maintenance")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    KUBERNETES_FIELD_NUMBER: _ClassVar[int]
    WORKERS_FIELD_NUMBER: _ClassVar[int]
    MAINTENANCE_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    kubernetes: KubernetesSpec
    workers: _containers.RepeatedCompositeFieldContainer[WorkerUpdate]
    maintenance: Maintenance
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ..., kubernetes: _Optional[_Union[KubernetesSpec, _Mapping]] = ..., workers: _Optional[_Iterable[_Union[WorkerUpdate, _Mapping]]] = ..., maintenance: _Optional[_Union[Maintenance, _Mapping]] = ...) -> None: ...

class ClusterServiceDeleteRequest(_message.Message):
    __slots__ = ("uuid", "project")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ...) -> None: ...

class ClusterServiceWatchStatusRequest(_message.Message):
    __slots__ = ("uuid", "project")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ...) -> None: ...

class ClusterStatus(_message.Message):
    __slots__ = ("uuid", "progress", "state", "type", "api_server_ready", "control_plane_ready", "nodes_ready", "system_components_ready", "last_errors")
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROGRESS_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    API_SERVER_READY_FIELD_NUMBER: _ClassVar[int]
    CONTROL_PLANE_READY_FIELD_NUMBER: _ClassVar[int]
    NODES_READY_FIELD_NUMBER: _ClassVar[int]
    SYSTEM_COMPONENTS_READY_FIELD_NUMBER: _ClassVar[int]
    LAST_ERRORS_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    progress: int
    state: str
    type: str
    api_server_ready: str
    control_plane_ready: str
    nodes_ready: str
    system_components_ready: str
    last_errors: _containers.RepeatedCompositeFieldContainer[ClusterStatusLastError]
    def __init__(self, uuid: _Optional[str] = ..., progress: _Optional[int] = ..., state: _Optional[str] = ..., type: _Optional[str] = ..., api_server_ready: _Optional[str] = ..., control_plane_ready: _Optional[str] = ..., nodes_ready: _Optional[str] = ..., system_components_ready: _Optional[str] = ..., last_errors: _Optional[_Iterable[_Union[ClusterStatusLastError, _Mapping]]] = ...) -> None: ...

class ClusterStatusLastError(_message.Message):
    __slots__ = ("description", "task_id", "codes", "last_update_time")
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    TASK_ID_FIELD_NUMBER: _ClassVar[int]
    CODES_FIELD_NUMBER: _ClassVar[int]
    LAST_UPDATE_TIME_FIELD_NUMBER: _ClassVar[int]
    description: str
    task_id: str
    codes: _containers.RepeatedScalarFieldContainer[str]
    last_update_time: _timestamp_pb2.Timestamp
    def __init__(self, description: _Optional[str] = ..., task_id: _Optional[str] = ..., codes: _Optional[_Iterable[str]] = ..., last_update_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class ClusterMonitoring(_message.Message):
    __slots__ = ("username", "password", "endpoint")
    USERNAME_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    ENDPOINT_FIELD_NUMBER: _ClassVar[int]
    username: str
    password: str
    endpoint: str
    def __init__(self, username: _Optional[str] = ..., password: _Optional[str] = ..., endpoint: _Optional[str] = ...) -> None: ...

class ClusterServiceCreateResponse(_message.Message):
    __slots__ = ("cluster",)
    CLUSTER_FIELD_NUMBER: _ClassVar[int]
    cluster: Cluster
    def __init__(self, cluster: _Optional[_Union[Cluster, _Mapping]] = ...) -> None: ...

class ClusterServiceGetResponse(_message.Message):
    __slots__ = ("cluster",)
    CLUSTER_FIELD_NUMBER: _ClassVar[int]
    cluster: Cluster
    def __init__(self, cluster: _Optional[_Union[Cluster, _Mapping]] = ...) -> None: ...

class ClusterServiceGetCredentialsResponse(_message.Message):
    __slots__ = ("kubeconfig",)
    KUBECONFIG_FIELD_NUMBER: _ClassVar[int]
    kubeconfig: str
    def __init__(self, kubeconfig: _Optional[str] = ...) -> None: ...

class ClusterServiceDeleteResponse(_message.Message):
    __slots__ = ("cluster",)
    CLUSTER_FIELD_NUMBER: _ClassVar[int]
    cluster: Cluster
    def __init__(self, cluster: _Optional[_Union[Cluster, _Mapping]] = ...) -> None: ...

class ClusterServiceUpdateResponse(_message.Message):
    __slots__ = ("cluster",)
    CLUSTER_FIELD_NUMBER: _ClassVar[int]
    cluster: Cluster
    def __init__(self, cluster: _Optional[_Union[Cluster, _Mapping]] = ...) -> None: ...

class ClusterServiceListResponse(_message.Message):
    __slots__ = ("clusters",)
    CLUSTERS_FIELD_NUMBER: _ClassVar[int]
    clusters: _containers.RepeatedCompositeFieldContainer[Cluster]
    def __init__(self, clusters: _Optional[_Iterable[_Union[Cluster, _Mapping]]] = ...) -> None: ...

class ClusterServiceWatchStatusResponse(_message.Message):
    __slots__ = ("status",)
    STATUS_FIELD_NUMBER: _ClassVar[int]
    status: ClusterStatus
    def __init__(self, status: _Optional[_Union[ClusterStatus, _Mapping]] = ...) -> None: ...
