import datetime

from api.v1 import common_pb2 as _common_pb2
from api.v1 import payment_pb2 as _payment_pb2
from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Tenant(_message.Message):
    __slots__ = ("login", "name", "email", "description", "avatar_url", "oauth_provider", "payment_details", "admitted", "phone_number", "terms_and_conditions", "email_consent", "onboarded", "created_by", "created_at", "updated_at", "deleted_at")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    AVATAR_URL_FIELD_NUMBER: _ClassVar[int]
    OAUTH_PROVIDER_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_DETAILS_FIELD_NUMBER: _ClassVar[int]
    ADMITTED_FIELD_NUMBER: _ClassVar[int]
    PHONE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    TERMS_AND_CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    EMAIL_CONSENT_FIELD_NUMBER: _ClassVar[int]
    ONBOARDED_FIELD_NUMBER: _ClassVar[int]
    CREATED_BY_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    DELETED_AT_FIELD_NUMBER: _ClassVar[int]
    login: str
    name: str
    email: str
    description: str
    avatar_url: str
    oauth_provider: _common_pb2.OAuthProvider
    payment_details: PaymentDetails
    admitted: bool
    phone_number: str
    terms_and_conditions: TermsAndConditions
    email_consent: bool
    onboarded: bool
    created_by: str
    created_at: _timestamp_pb2.Timestamp
    updated_at: _timestamp_pb2.Timestamp
    deleted_at: _timestamp_pb2.Timestamp
    def __init__(self, login: _Optional[str] = ..., name: _Optional[str] = ..., email: _Optional[str] = ..., description: _Optional[str] = ..., avatar_url: _Optional[str] = ..., oauth_provider: _Optional[_Union[_common_pb2.OAuthProvider, str]] = ..., payment_details: _Optional[_Union[PaymentDetails, _Mapping]] = ..., admitted: bool = ..., phone_number: _Optional[str] = ..., terms_and_conditions: _Optional[_Union[TermsAndConditions, _Mapping]] = ..., email_consent: bool = ..., onboarded: bool = ..., created_by: _Optional[str] = ..., created_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., updated_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., deleted_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class TenantMember(_message.Message):
    __slots__ = ("id", "role", "project_ids", "created_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    PROJECT_IDS_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    role: _common_pb2.TenantRole
    project_ids: _containers.RepeatedScalarFieldContainer[str]
    created_at: _timestamp_pb2.Timestamp
    def __init__(self, id: _Optional[str] = ..., role: _Optional[_Union[_common_pb2.TenantRole, str]] = ..., project_ids: _Optional[_Iterable[str]] = ..., created_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class TenantInvite(_message.Message):
    __slots__ = ("secret", "target_tenant", "role", "joined", "target_tenant_name", "tenant", "tenant_name", "expires_at", "joined_at")
    SECRET_FIELD_NUMBER: _ClassVar[int]
    TARGET_TENANT_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    JOINED_FIELD_NUMBER: _ClassVar[int]
    TARGET_TENANT_NAME_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    TENANT_NAME_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_AT_FIELD_NUMBER: _ClassVar[int]
    JOINED_AT_FIELD_NUMBER: _ClassVar[int]
    secret: str
    target_tenant: str
    role: _common_pb2.TenantRole
    joined: bool
    target_tenant_name: str
    tenant: str
    tenant_name: str
    expires_at: _timestamp_pb2.Timestamp
    joined_at: _timestamp_pb2.Timestamp
    def __init__(self, secret: _Optional[str] = ..., target_tenant: _Optional[str] = ..., role: _Optional[_Union[_common_pb2.TenantRole, str]] = ..., joined: bool = ..., target_tenant_name: _Optional[str] = ..., tenant: _Optional[str] = ..., tenant_name: _Optional[str] = ..., expires_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., joined_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class PaymentDetails(_message.Message):
    __slots__ = ("customer_id", "payment_method_id", "subscription_id", "coupons", "vat")
    CUSTOMER_ID_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_ID_FIELD_NUMBER: _ClassVar[int]
    SUBSCRIPTION_ID_FIELD_NUMBER: _ClassVar[int]
    COUPONS_FIELD_NUMBER: _ClassVar[int]
    VAT_FIELD_NUMBER: _ClassVar[int]
    customer_id: str
    payment_method_id: str
    subscription_id: str
    coupons: _containers.RepeatedCompositeFieldContainer[_payment_pb2.Coupon]
    vat: str
    def __init__(self, customer_id: _Optional[str] = ..., payment_method_id: _Optional[str] = ..., subscription_id: _Optional[str] = ..., coupons: _Optional[_Iterable[_Union[_payment_pb2.Coupon, _Mapping]]] = ..., vat: _Optional[str] = ...) -> None: ...

class TermsAndConditions(_message.Message):
    __slots__ = ("accepted", "when")
    ACCEPTED_FIELD_NUMBER: _ClassVar[int]
    WHEN_FIELD_NUMBER: _ClassVar[int]
    accepted: bool
    when: _timestamp_pb2.Timestamp
    def __init__(self, accepted: bool = ..., when: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class TenantServiceListRequest(_message.Message):
    __slots__ = ("id", "name")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class TenantServiceGetRequest(_message.Message):
    __slots__ = ("login",)
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    login: str
    def __init__(self, login: _Optional[str] = ...) -> None: ...

class TenantServiceCreateRequest(_message.Message):
    __slots__ = ("name", "description", "email", "avatar_url", "phone_number")
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    AVATAR_URL_FIELD_NUMBER: _ClassVar[int]
    PHONE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    name: str
    description: str
    email: str
    avatar_url: str
    phone_number: str
    def __init__(self, name: _Optional[str] = ..., description: _Optional[str] = ..., email: _Optional[str] = ..., avatar_url: _Optional[str] = ..., phone_number: _Optional[str] = ...) -> None: ...

class TenantServiceUpdateRequest(_message.Message):
    __slots__ = ("login", "name", "email", "description", "avatar_url", "onboarded", "accept_terms_and_conditions")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    AVATAR_URL_FIELD_NUMBER: _ClassVar[int]
    ONBOARDED_FIELD_NUMBER: _ClassVar[int]
    ACCEPT_TERMS_AND_CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    login: str
    name: str
    email: str
    description: str
    avatar_url: str
    onboarded: bool
    accept_terms_and_conditions: bool
    def __init__(self, login: _Optional[str] = ..., name: _Optional[str] = ..., email: _Optional[str] = ..., description: _Optional[str] = ..., avatar_url: _Optional[str] = ..., onboarded: bool = ..., accept_terms_and_conditions: bool = ...) -> None: ...

class TenantServiceDeleteRequest(_message.Message):
    __slots__ = ("login",)
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    login: str
    def __init__(self, login: _Optional[str] = ...) -> None: ...

class TenantServiceGetResponse(_message.Message):
    __slots__ = ("tenant", "tenant_members")
    TENANT_FIELD_NUMBER: _ClassVar[int]
    TENANT_MEMBERS_FIELD_NUMBER: _ClassVar[int]
    tenant: Tenant
    tenant_members: _containers.RepeatedCompositeFieldContainer[TenantMember]
    def __init__(self, tenant: _Optional[_Union[Tenant, _Mapping]] = ..., tenant_members: _Optional[_Iterable[_Union[TenantMember, _Mapping]]] = ...) -> None: ...

class TenantServiceListResponse(_message.Message):
    __slots__ = ("tenants",)
    TENANTS_FIELD_NUMBER: _ClassVar[int]
    tenants: _containers.RepeatedCompositeFieldContainer[Tenant]
    def __init__(self, tenants: _Optional[_Iterable[_Union[Tenant, _Mapping]]] = ...) -> None: ...

class TenantServiceCreateResponse(_message.Message):
    __slots__ = ("tenant",)
    TENANT_FIELD_NUMBER: _ClassVar[int]
    tenant: Tenant
    def __init__(self, tenant: _Optional[_Union[Tenant, _Mapping]] = ...) -> None: ...

class TenantServiceCreateOrUpdateResponse(_message.Message):
    __slots__ = ("tenant",)
    TENANT_FIELD_NUMBER: _ClassVar[int]
    tenant: Tenant
    def __init__(self, tenant: _Optional[_Union[Tenant, _Mapping]] = ...) -> None: ...

class TenantServiceUpdateResponse(_message.Message):
    __slots__ = ("tenant",)
    TENANT_FIELD_NUMBER: _ClassVar[int]
    tenant: Tenant
    def __init__(self, tenant: _Optional[_Union[Tenant, _Mapping]] = ...) -> None: ...

class TenantServiceDeleteResponse(_message.Message):
    __slots__ = ("tenant",)
    TENANT_FIELD_NUMBER: _ClassVar[int]
    tenant: Tenant
    def __init__(self, tenant: _Optional[_Union[Tenant, _Mapping]] = ...) -> None: ...

class TenantServiceInviteRequest(_message.Message):
    __slots__ = ("login", "role")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    login: str
    role: _common_pb2.TenantRole
    def __init__(self, login: _Optional[str] = ..., role: _Optional[_Union[_common_pb2.TenantRole, str]] = ...) -> None: ...

class TenantServiceInviteResponse(_message.Message):
    __slots__ = ("invite",)
    INVITE_FIELD_NUMBER: _ClassVar[int]
    invite: TenantInvite
    def __init__(self, invite: _Optional[_Union[TenantInvite, _Mapping]] = ...) -> None: ...

class TenantServiceInvitesListRequest(_message.Message):
    __slots__ = ("login",)
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    login: str
    def __init__(self, login: _Optional[str] = ...) -> None: ...

class TenantServiceInvitesListResponse(_message.Message):
    __slots__ = ("invites",)
    INVITES_FIELD_NUMBER: _ClassVar[int]
    invites: _containers.RepeatedCompositeFieldContainer[TenantInvite]
    def __init__(self, invites: _Optional[_Iterable[_Union[TenantInvite, _Mapping]]] = ...) -> None: ...

class TenantServiceInviteGetRequest(_message.Message):
    __slots__ = ("secret",)
    SECRET_FIELD_NUMBER: _ClassVar[int]
    secret: str
    def __init__(self, secret: _Optional[str] = ...) -> None: ...

class TenantServiceInviteGetResponse(_message.Message):
    __slots__ = ("invite",)
    INVITE_FIELD_NUMBER: _ClassVar[int]
    invite: TenantInvite
    def __init__(self, invite: _Optional[_Union[TenantInvite, _Mapping]] = ...) -> None: ...

class TenantServiceRemoveMemberRequest(_message.Message):
    __slots__ = ("login", "member_id")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    MEMBER_ID_FIELD_NUMBER: _ClassVar[int]
    login: str
    member_id: str
    def __init__(self, login: _Optional[str] = ..., member_id: _Optional[str] = ...) -> None: ...

class TenantServiceRemoveMemberResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class TenantServiceInviteAcceptRequest(_message.Message):
    __slots__ = ("secret",)
    SECRET_FIELD_NUMBER: _ClassVar[int]
    secret: str
    def __init__(self, secret: _Optional[str] = ...) -> None: ...

class TenantServiceInviteAcceptResponse(_message.Message):
    __slots__ = ("tenant", "tenant_name")
    TENANT_FIELD_NUMBER: _ClassVar[int]
    TENANT_NAME_FIELD_NUMBER: _ClassVar[int]
    tenant: str
    tenant_name: str
    def __init__(self, tenant: _Optional[str] = ..., tenant_name: _Optional[str] = ...) -> None: ...

class TenantServiceInviteDeleteRequest(_message.Message):
    __slots__ = ("login", "secret")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    login: str
    secret: str
    def __init__(self, login: _Optional[str] = ..., secret: _Optional[str] = ...) -> None: ...

class TenantServiceInviteDeleteResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class TenantServiceUpdateMemberRequest(_message.Message):
    __slots__ = ("login", "member_id", "role")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    MEMBER_ID_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    login: str
    member_id: str
    role: _common_pb2.TenantRole
    def __init__(self, login: _Optional[str] = ..., member_id: _Optional[str] = ..., role: _Optional[_Union[_common_pb2.TenantRole, str]] = ...) -> None: ...

class TenantServiceUpdateMemberResponse(_message.Message):
    __slots__ = ("tenant_member",)
    TENANT_MEMBER_FIELD_NUMBER: _ClassVar[int]
    tenant_member: TenantMember
    def __init__(self, tenant_member: _Optional[_Union[TenantMember, _Mapping]] = ...) -> None: ...

class TenantServiceRequestAdmissionRequest(_message.Message):
    __slots__ = ("login", "name", "email", "accepted_terms_and_conditions", "email_consent")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    ACCEPTED_TERMS_AND_CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    EMAIL_CONSENT_FIELD_NUMBER: _ClassVar[int]
    login: str
    name: str
    email: str
    accepted_terms_and_conditions: bool
    email_consent: bool
    def __init__(self, login: _Optional[str] = ..., name: _Optional[str] = ..., email: _Optional[str] = ..., accepted_terms_and_conditions: bool = ..., email_consent: bool = ...) -> None: ...

class TenantServiceRequestAdmissionResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
