from api.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Asset(_message.Message):
    __slots__ = ("region", "machine_types", "kubernetes")
    class MachineTypesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: MachineType
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[MachineType, _Mapping]] = ...) -> None: ...
    REGION_FIELD_NUMBER: _ClassVar[int]
    MACHINE_TYPES_FIELD_NUMBER: _ClassVar[int]
    KUBERNETES_FIELD_NUMBER: _ClassVar[int]
    region: Region
    machine_types: _containers.MessageMap[str, MachineType]
    kubernetes: _containers.RepeatedCompositeFieldContainer[Kubernetes]
    def __init__(self, region: _Optional[_Union[Region, _Mapping]] = ..., machine_types: _Optional[_Mapping[str, MachineType]] = ..., kubernetes: _Optional[_Iterable[_Union[Kubernetes, _Mapping]]] = ...) -> None: ...

class Region(_message.Message):
    __slots__ = ("id", "name", "address", "active", "partitions", "defaults")
    class PartitionsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Partition
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Partition, _Mapping]] = ...) -> None: ...
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    ACTIVE_FIELD_NUMBER: _ClassVar[int]
    PARTITIONS_FIELD_NUMBER: _ClassVar[int]
    DEFAULTS_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    address: str
    active: bool
    partitions: _containers.MessageMap[str, Partition]
    defaults: AssetDefaults
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., address: _Optional[str] = ..., active: bool = ..., partitions: _Optional[_Mapping[str, Partition]] = ..., defaults: _Optional[_Union[AssetDefaults, _Mapping]] = ...) -> None: ...

class Partition(_message.Message):
    __slots__ = ("id", "name", "address", "active")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    ACTIVE_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    address: str
    active: bool
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., address: _Optional[str] = ..., active: bool = ...) -> None: ...

class MachineType(_message.Message):
    __slots__ = ("id", "name", "cpus", "memory", "storage")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    CPUS_FIELD_NUMBER: _ClassVar[int]
    MEMORY_FIELD_NUMBER: _ClassVar[int]
    STORAGE_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    cpus: int
    memory: int
    storage: int
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., cpus: _Optional[int] = ..., memory: _Optional[int] = ..., storage: _Optional[int] = ...) -> None: ...

class Kubernetes(_message.Message):
    __slots__ = ("version",)
    VERSION_FIELD_NUMBER: _ClassVar[int]
    version: str
    def __init__(self, version: _Optional[str] = ...) -> None: ...

class AssetDefaults(_message.Message):
    __slots__ = ("machine_type", "kubernetes_version", "worker_min", "worker_max", "partition")
    MACHINE_TYPE_FIELD_NUMBER: _ClassVar[int]
    KUBERNETES_VERSION_FIELD_NUMBER: _ClassVar[int]
    WORKER_MIN_FIELD_NUMBER: _ClassVar[int]
    WORKER_MAX_FIELD_NUMBER: _ClassVar[int]
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    machine_type: str
    kubernetes_version: str
    worker_min: int
    worker_max: int
    partition: str
    def __init__(self, machine_type: _Optional[str] = ..., kubernetes_version: _Optional[str] = ..., worker_min: _Optional[int] = ..., worker_max: _Optional[int] = ..., partition: _Optional[str] = ...) -> None: ...

class AssetServiceListRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AssetServiceListResponse(_message.Message):
    __slots__ = ("assets",)
    class AssetsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Asset
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Asset, _Mapping]] = ...) -> None: ...
    ASSETS_FIELD_NUMBER: _ClassVar[int]
    assets: _containers.MessageMap[str, Asset]
    def __init__(self, assets: _Optional[_Mapping[str, Asset]] = ...) -> None: ...
