import datetime

from admin.v1 import machine_pb2 as _machine_pb2
from api.v1 import cluster_pb2 as _cluster_pb2
from api.v1 import common_pb2 as _common_pb2
from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import duration_pb2 as _duration_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ClusterServiceGetRequest(_message.Message):
    __slots__ = ("uuid", "with_machines")
    UUID_FIELD_NUMBER: _ClassVar[int]
    WITH_MACHINES_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    with_machines: bool
    def __init__(self, uuid: _Optional[str] = ..., with_machines: bool = ...) -> None: ...

class ClusterServiceListRequest(_message.Message):
    __slots__ = ("uuid", "project", "tenant", "partition", "seed", "name", "purpose", "labels")
    class LabelsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    UUID_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    SEED_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PURPOSE_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    project: str
    tenant: str
    partition: str
    seed: str
    name: str
    purpose: str
    labels: _containers.ScalarMap[str, str]
    def __init__(self, uuid: _Optional[str] = ..., project: _Optional[str] = ..., tenant: _Optional[str] = ..., partition: _Optional[str] = ..., seed: _Optional[str] = ..., name: _Optional[str] = ..., purpose: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class ClusterServiceCredentialsRequest(_message.Message):
    __slots__ = ("uuid", "with_vpn", "with_ssh", "expiration")
    UUID_FIELD_NUMBER: _ClassVar[int]
    WITH_VPN_FIELD_NUMBER: _ClassVar[int]
    WITH_SSH_FIELD_NUMBER: _ClassVar[int]
    EXPIRATION_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    with_vpn: bool
    with_ssh: bool
    expiration: _duration_pb2.Duration
    def __init__(self, uuid: _Optional[str] = ..., with_vpn: bool = ..., with_ssh: bool = ..., expiration: _Optional[_Union[datetime.timedelta, _duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class ClusterServiceGetResponse(_message.Message):
    __slots__ = ("cluster", "machines")
    CLUSTER_FIELD_NUMBER: _ClassVar[int]
    MACHINES_FIELD_NUMBER: _ClassVar[int]
    cluster: _cluster_pb2.Cluster
    machines: _containers.RepeatedCompositeFieldContainer[_machine_pb2.Machine]
    def __init__(self, cluster: _Optional[_Union[_cluster_pb2.Cluster, _Mapping]] = ..., machines: _Optional[_Iterable[_Union[_machine_pb2.Machine, _Mapping]]] = ...) -> None: ...

class ClusterServiceListResponse(_message.Message):
    __slots__ = ("clusters",)
    CLUSTERS_FIELD_NUMBER: _ClassVar[int]
    clusters: _containers.RepeatedCompositeFieldContainer[_cluster_pb2.Cluster]
    def __init__(self, clusters: _Optional[_Iterable[_Union[_cluster_pb2.Cluster, _Mapping]]] = ...) -> None: ...

class ClusterServiceCredentialsResponse(_message.Message):
    __slots__ = ("kubeconfig", "ssh_keypair", "vpn")
    KUBECONFIG_FIELD_NUMBER: _ClassVar[int]
    SSH_KEYPAIR_FIELD_NUMBER: _ClassVar[int]
    VPN_FIELD_NUMBER: _ClassVar[int]
    kubeconfig: str
    ssh_keypair: SSHKeyPair
    vpn: _machine_pb2.VPN
    def __init__(self, kubeconfig: _Optional[str] = ..., ssh_keypair: _Optional[_Union[SSHKeyPair, _Mapping]] = ..., vpn: _Optional[_Union[_machine_pb2.VPN, _Mapping]] = ...) -> None: ...

class SSHKeyPair(_message.Message):
    __slots__ = ("publickey", "privatekey")
    PUBLICKEY_FIELD_NUMBER: _ClassVar[int]
    PRIVATEKEY_FIELD_NUMBER: _ClassVar[int]
    publickey: bytes
    privatekey: bytes
    def __init__(self, publickey: _Optional[bytes] = ..., privatekey: _Optional[bytes] = ...) -> None: ...
