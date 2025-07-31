import datetime

from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Machine(_message.Message):
    __slots__ = ("uuid", "name", "description", "project", "image", "size", "machine_networks", "hostname", "user_data", "role", "creator", "created", "partition", "rack", "state", "liveliness", "tags", "vpn")
    UUID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    MACHINE_NETWORKS_FIELD_NUMBER: _ClassVar[int]
    HOSTNAME_FIELD_NUMBER: _ClassVar[int]
    USER_DATA_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    CREATOR_FIELD_NUMBER: _ClassVar[int]
    CREATED_FIELD_NUMBER: _ClassVar[int]
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    RACK_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    LIVELINESS_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    VPN_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    name: str
    description: str
    project: str
    image: str
    size: str
    machine_networks: _containers.RepeatedCompositeFieldContainer[MachineNetwork]
    hostname: str
    user_data: str
    role: str
    creator: str
    created: _timestamp_pb2.Timestamp
    partition: str
    rack: str
    state: str
    liveliness: str
    tags: _containers.RepeatedScalarFieldContainer[str]
    vpn: VPN
    def __init__(self, uuid: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., project: _Optional[str] = ..., image: _Optional[str] = ..., size: _Optional[str] = ..., machine_networks: _Optional[_Iterable[_Union[MachineNetwork, _Mapping]]] = ..., hostname: _Optional[str] = ..., user_data: _Optional[str] = ..., role: _Optional[str] = ..., creator: _Optional[str] = ..., created: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., partition: _Optional[str] = ..., rack: _Optional[str] = ..., state: _Optional[str] = ..., liveliness: _Optional[str] = ..., tags: _Optional[_Iterable[str]] = ..., vpn: _Optional[_Union[VPN, _Mapping]] = ...) -> None: ...

class MachineNetwork(_message.Message):
    __slots__ = ("network", "prefixes", "ips", "destination_prefixes", "network_type", "vrf", "asn")
    NETWORK_FIELD_NUMBER: _ClassVar[int]
    PREFIXES_FIELD_NUMBER: _ClassVar[int]
    IPS_FIELD_NUMBER: _ClassVar[int]
    DESTINATION_PREFIXES_FIELD_NUMBER: _ClassVar[int]
    NETWORK_TYPE_FIELD_NUMBER: _ClassVar[int]
    VRF_FIELD_NUMBER: _ClassVar[int]
    ASN_FIELD_NUMBER: _ClassVar[int]
    network: str
    prefixes: _containers.RepeatedScalarFieldContainer[str]
    ips: _containers.RepeatedScalarFieldContainer[str]
    destination_prefixes: _containers.RepeatedScalarFieldContainer[str]
    network_type: str
    vrf: int
    asn: int
    def __init__(self, network: _Optional[str] = ..., prefixes: _Optional[_Iterable[str]] = ..., ips: _Optional[_Iterable[str]] = ..., destination_prefixes: _Optional[_Iterable[str]] = ..., network_type: _Optional[str] = ..., vrf: _Optional[int] = ..., asn: _Optional[int] = ...) -> None: ...

class VPN(_message.Message):
    __slots__ = ("address", "authkey")
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    AUTHKEY_FIELD_NUMBER: _ClassVar[int]
    address: str
    authkey: str
    def __init__(self, address: _Optional[str] = ..., authkey: _Optional[str] = ...) -> None: ...
