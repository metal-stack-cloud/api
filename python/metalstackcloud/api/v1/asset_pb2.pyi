import datetime

from api.v1 import common_pb2 as _common_pb2
from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

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
    __slots__ = ("id", "name", "address", "active", "partitions", "defaults", "description")
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
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    address: str
    active: bool
    partitions: _containers.MessageMap[str, Partition]
    defaults: AssetDefaults
    description: str
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., address: _Optional[str] = ..., active: bool = ..., partitions: _Optional[_Mapping[str, Partition]] = ..., defaults: _Optional[_Union[AssetDefaults, _Mapping]] = ..., description: _Optional[str] = ...) -> None: ...

class Partition(_message.Message):
    __slots__ = ("id", "name", "address", "active", "description")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    ACTIVE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    address: str
    active: bool
    description: str
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., address: _Optional[str] = ..., active: bool = ..., description: _Optional[str] = ...) -> None: ...

class MachineType(_message.Message):
    __slots__ = ("id", "name", "cpus", "memory", "storage", "cpu_description", "storage_description")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    CPUS_FIELD_NUMBER: _ClassVar[int]
    MEMORY_FIELD_NUMBER: _ClassVar[int]
    STORAGE_FIELD_NUMBER: _ClassVar[int]
    CPU_DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    STORAGE_DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    cpus: int
    memory: int
    storage: int
    cpu_description: str
    storage_description: str
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., cpus: _Optional[int] = ..., memory: _Optional[int] = ..., storage: _Optional[int] = ..., cpu_description: _Optional[str] = ..., storage_description: _Optional[str] = ...) -> None: ...

class Kubernetes(_message.Message):
    __slots__ = ("version", "expiration")
    VERSION_FIELD_NUMBER: _ClassVar[int]
    EXPIRATION_FIELD_NUMBER: _ClassVar[int]
    version: str
    expiration: _timestamp_pb2.Timestamp
    def __init__(self, version: _Optional[str] = ..., expiration: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

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
    __slots__ = ("assets", "environment")
    ASSETS_FIELD_NUMBER: _ClassVar[int]
    ENVIRONMENT_FIELD_NUMBER: _ClassVar[int]
    assets: _containers.RepeatedCompositeFieldContainer[Asset]
    environment: Environment
    def __init__(self, assets: _Optional[_Iterable[_Union[Asset, _Mapping]]] = ..., environment: _Optional[_Union[Environment, _Mapping]] = ...) -> None: ...

class Environment(_message.Message):
    __slots__ = ("console_url", "after_login_url", "stripe_public_token", "terms_and_conditions_url")
    CONSOLE_URL_FIELD_NUMBER: _ClassVar[int]
    AFTER_LOGIN_URL_FIELD_NUMBER: _ClassVar[int]
    STRIPE_PUBLIC_TOKEN_FIELD_NUMBER: _ClassVar[int]
    TERMS_AND_CONDITIONS_URL_FIELD_NUMBER: _ClassVar[int]
    console_url: str
    after_login_url: str
    stripe_public_token: str
    terms_and_conditions_url: str
    def __init__(self, console_url: _Optional[str] = ..., after_login_url: _Optional[str] = ..., stripe_public_token: _Optional[str] = ..., terms_and_conditions_url: _Optional[str] = ...) -> None: ...
