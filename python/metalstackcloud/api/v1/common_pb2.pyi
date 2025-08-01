from google.protobuf import descriptor_pb2 as _descriptor_pb2
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class OAuthProvider(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    O_AUTH_PROVIDER_UNSPECIFIED: _ClassVar[OAuthProvider]
    O_AUTH_PROVIDER_GITHUB: _ClassVar[OAuthProvider]
    O_AUTH_PROVIDER_AZURE: _ClassVar[OAuthProvider]
    O_AUTH_PROVIDER_GOOGLE: _ClassVar[OAuthProvider]

class TenantRole(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TENANT_ROLE_UNSPECIFIED: _ClassVar[TenantRole]
    TENANT_ROLE_OWNER: _ClassVar[TenantRole]
    TENANT_ROLE_EDITOR: _ClassVar[TenantRole]
    TENANT_ROLE_VIEWER: _ClassVar[TenantRole]
    TENANT_ROLE_GUEST: _ClassVar[TenantRole]

class ProjectRole(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PROJECT_ROLE_UNSPECIFIED: _ClassVar[ProjectRole]
    PROJECT_ROLE_OWNER: _ClassVar[ProjectRole]
    PROJECT_ROLE_EDITOR: _ClassVar[ProjectRole]
    PROJECT_ROLE_VIEWER: _ClassVar[ProjectRole]

class AdminRole(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ADMIN_ROLE_UNSPECIFIED: _ClassVar[AdminRole]
    ADMIN_ROLE_EDITOR: _ClassVar[AdminRole]
    ADMIN_ROLE_VIEWER: _ClassVar[AdminRole]

class Visibility(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    VISIBILITY_UNSPECIFIED: _ClassVar[Visibility]
    VISIBILITY_PUBLIC: _ClassVar[Visibility]
    VISIBILITY_SELF: _ClassVar[Visibility]

class Chargeable(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    CHARGEABLE_UNSPECIFIED: _ClassVar[Chargeable]
    CHARGEABLE_TRUE: _ClassVar[Chargeable]
    CHARGEABLE_FALSE: _ClassVar[Chargeable]

class Auditing(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    AUDITING_UNSPECIFIED: _ClassVar[Auditing]
    AUDITING_INCLUDED: _ClassVar[Auditing]
    AUDITING_EXCLUDED: _ClassVar[Auditing]
O_AUTH_PROVIDER_UNSPECIFIED: OAuthProvider
O_AUTH_PROVIDER_GITHUB: OAuthProvider
O_AUTH_PROVIDER_AZURE: OAuthProvider
O_AUTH_PROVIDER_GOOGLE: OAuthProvider
TENANT_ROLE_UNSPECIFIED: TenantRole
TENANT_ROLE_OWNER: TenantRole
TENANT_ROLE_EDITOR: TenantRole
TENANT_ROLE_VIEWER: TenantRole
TENANT_ROLE_GUEST: TenantRole
PROJECT_ROLE_UNSPECIFIED: ProjectRole
PROJECT_ROLE_OWNER: ProjectRole
PROJECT_ROLE_EDITOR: ProjectRole
PROJECT_ROLE_VIEWER: ProjectRole
ADMIN_ROLE_UNSPECIFIED: AdminRole
ADMIN_ROLE_EDITOR: AdminRole
ADMIN_ROLE_VIEWER: AdminRole
VISIBILITY_UNSPECIFIED: Visibility
VISIBILITY_PUBLIC: Visibility
VISIBILITY_SELF: Visibility
CHARGEABLE_UNSPECIFIED: Chargeable
CHARGEABLE_TRUE: Chargeable
CHARGEABLE_FALSE: Chargeable
AUDITING_UNSPECIFIED: Auditing
AUDITING_INCLUDED: Auditing
AUDITING_EXCLUDED: Auditing
TENANT_ROLES_FIELD_NUMBER: _ClassVar[int]
tenant_roles: _descriptor.FieldDescriptor
PROJECT_ROLES_FIELD_NUMBER: _ClassVar[int]
project_roles: _descriptor.FieldDescriptor
ADMIN_ROLES_FIELD_NUMBER: _ClassVar[int]
admin_roles: _descriptor.FieldDescriptor
VISIBILITY_FIELD_NUMBER: _ClassVar[int]
visibility: _descriptor.FieldDescriptor
CHARGEABLE_FIELD_NUMBER: _ClassVar[int]
chargeable: _descriptor.FieldDescriptor
AUDITING_FIELD_NUMBER: _ClassVar[int]
auditing: _descriptor.FieldDescriptor

class Paging(_message.Message):
    __slots__ = ("page", "count")
    PAGE_FIELD_NUMBER: _ClassVar[int]
    COUNT_FIELD_NUMBER: _ClassVar[int]
    page: int
    count: int
    def __init__(self, page: _Optional[int] = ..., count: _Optional[int] = ...) -> None: ...
