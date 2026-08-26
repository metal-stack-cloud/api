from api.v1 import common_pb2 as _common_pb2
from api.v1 import tenant_pb2 as _tenant_pb2
from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class TenantServiceListRequest(_message.Message):
    __slots__ = ("tenant", "name", "email", "oauth_provider", "admitted", "paging")
    TENANT_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    OAUTH_PROVIDER_FIELD_NUMBER: _ClassVar[int]
    ADMITTED_FIELD_NUMBER: _ClassVar[int]
    PAGING_FIELD_NUMBER: _ClassVar[int]
    tenant: str
    name: str
    email: str
    oauth_provider: _common_pb2.OAuthProvider
    admitted: bool
    paging: _common_pb2.Paging
    def __init__(self, tenant: _Optional[str] = ..., name: _Optional[str] = ..., email: _Optional[str] = ..., oauth_provider: _Optional[_Union[_common_pb2.OAuthProvider, str]] = ..., admitted: bool = ..., paging: _Optional[_Union[_common_pb2.Paging, _Mapping]] = ...) -> None: ...

class TenantServiceListResponse(_message.Message):
    __slots__ = ("tenants", "next_page")
    TENANTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_FIELD_NUMBER: _ClassVar[int]
    tenants: _containers.RepeatedCompositeFieldContainer[_tenant_pb2.Tenant]
    next_page: int
    def __init__(self, tenants: _Optional[_Iterable[_Union[_tenant_pb2.Tenant, _Mapping]]] = ..., next_page: _Optional[int] = ...) -> None: ...

class TenantServiceAdmitRequest(_message.Message):
    __slots__ = ("tenant_id",)
    TENANT_ID_FIELD_NUMBER: _ClassVar[int]
    tenant_id: str
    def __init__(self, tenant_id: _Optional[str] = ...) -> None: ...

class TenantServiceAdmitResponse(_message.Message):
    __slots__ = ("tenant",)
    TENANT_FIELD_NUMBER: _ClassVar[int]
    tenant: _tenant_pb2.Tenant
    def __init__(self, tenant: _Optional[_Union[_tenant_pb2.Tenant, _Mapping]] = ...) -> None: ...

class TenantServiceRevokeRequest(_message.Message):
    __slots__ = ("tenant_id",)
    TENANT_ID_FIELD_NUMBER: _ClassVar[int]
    tenant_id: str
    def __init__(self, tenant_id: _Optional[str] = ...) -> None: ...

class TenantServiceRevokeResponse(_message.Message):
    __slots__ = ("tenant",)
    TENANT_FIELD_NUMBER: _ClassVar[int]
    tenant: _tenant_pb2.Tenant
    def __init__(self, tenant: _Optional[_Union[_tenant_pb2.Tenant, _Mapping]] = ...) -> None: ...

class TenantServiceAddMemberRequest(_message.Message):
    __slots__ = ("tenant_id", "member_id", "role")
    TENANT_ID_FIELD_NUMBER: _ClassVar[int]
    MEMBER_ID_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    tenant_id: str
    member_id: str
    role: _common_pb2.TenantRole
    def __init__(self, tenant_id: _Optional[str] = ..., member_id: _Optional[str] = ..., role: _Optional[_Union[_common_pb2.TenantRole, str]] = ...) -> None: ...

class TenantServiceAddMemberResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
