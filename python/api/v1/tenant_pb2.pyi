from api.v1 import common_pb2 as _common_pb2
from api.v1 import payment_pb2 as _payment_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Tenant(_message.Message):
    __slots__ = ("login", "name", "email", "avatar_url", "oauth_provider", "payment_details", "admitted", "phone_number", "terms_and_conditions", "email_consent", "created_at", "updated_at", "deleted_at")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    AVATAR_URL_FIELD_NUMBER: _ClassVar[int]
    OAUTH_PROVIDER_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_DETAILS_FIELD_NUMBER: _ClassVar[int]
    ADMITTED_FIELD_NUMBER: _ClassVar[int]
    PHONE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    TERMS_AND_CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    EMAIL_CONSENT_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    DELETED_AT_FIELD_NUMBER: _ClassVar[int]
    login: str
    name: str
    email: str
    avatar_url: str
    oauth_provider: _common_pb2.OAuthProvider
    payment_details: PaymentDetails
    admitted: bool
    phone_number: str
    terms_and_conditions: TermsAndConditions
    email_consent: bool
    created_at: _timestamp_pb2.Timestamp
    updated_at: _timestamp_pb2.Timestamp
    deleted_at: _timestamp_pb2.Timestamp
    def __init__(self, login: _Optional[str] = ..., name: _Optional[str] = ..., email: _Optional[str] = ..., avatar_url: _Optional[str] = ..., oauth_provider: _Optional[_Union[_common_pb2.OAuthProvider, str]] = ..., payment_details: _Optional[_Union[PaymentDetails, _Mapping]] = ..., admitted: bool = ..., phone_number: _Optional[str] = ..., terms_and_conditions: _Optional[_Union[TermsAndConditions, _Mapping]] = ..., email_consent: bool = ..., created_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., updated_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., deleted_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

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

class PaymentDetailsUpdate(_message.Message):
    __slots__ = ("customer_id", "payment_method_id", "subscription_id", "vat")
    CUSTOMER_ID_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_ID_FIELD_NUMBER: _ClassVar[int]
    SUBSCRIPTION_ID_FIELD_NUMBER: _ClassVar[int]
    VAT_FIELD_NUMBER: _ClassVar[int]
    customer_id: str
    payment_method_id: str
    subscription_id: str
    vat: str
    def __init__(self, customer_id: _Optional[str] = ..., payment_method_id: _Optional[str] = ..., subscription_id: _Optional[str] = ..., vat: _Optional[str] = ...) -> None: ...

class TermsAndConditions(_message.Message):
    __slots__ = ("accepted", "when")
    ACCEPTED_FIELD_NUMBER: _ClassVar[int]
    WHEN_FIELD_NUMBER: _ClassVar[int]
    accepted: bool
    when: _timestamp_pb2.Timestamp
    def __init__(self, accepted: bool = ..., when: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class TermsAndConditionsUpdate(_message.Message):
    __slots__ = ("accepted", "when")
    ACCEPTED_FIELD_NUMBER: _ClassVar[int]
    WHEN_FIELD_NUMBER: _ClassVar[int]
    accepted: bool
    when: _timestamp_pb2.Timestamp
    def __init__(self, accepted: bool = ..., when: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class TenantServiceGetRequest(_message.Message):
    __slots__ = ("login",)
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    login: str
    def __init__(self, login: _Optional[str] = ...) -> None: ...

class TenantServiceCreateRequest(_message.Message):
    __slots__ = ("tenant",)
    TENANT_FIELD_NUMBER: _ClassVar[int]
    tenant: Tenant
    def __init__(self, tenant: _Optional[_Union[Tenant, _Mapping]] = ...) -> None: ...

class TenantServiceCreateOrUpdateRequest(_message.Message):
    __slots__ = ("tenant",)
    TENANT_FIELD_NUMBER: _ClassVar[int]
    tenant: Tenant
    def __init__(self, tenant: _Optional[_Union[Tenant, _Mapping]] = ...) -> None: ...

class TenantServiceUpdateRequest(_message.Message):
    __slots__ = ("login", "name", "email", "avatar_url", "payment_details", "terms_and_conditions")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    AVATAR_URL_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_DETAILS_FIELD_NUMBER: _ClassVar[int]
    TERMS_AND_CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    login: str
    name: str
    email: str
    avatar_url: str
    payment_details: PaymentDetailsUpdate
    terms_and_conditions: TermsAndConditionsUpdate
    def __init__(self, login: _Optional[str] = ..., name: _Optional[str] = ..., email: _Optional[str] = ..., avatar_url: _Optional[str] = ..., payment_details: _Optional[_Union[PaymentDetailsUpdate, _Mapping]] = ..., terms_and_conditions: _Optional[_Union[TermsAndConditionsUpdate, _Mapping]] = ...) -> None: ...

class TenantServiceDeleteRequest(_message.Message):
    __slots__ = ("login",)
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    login: str
    def __init__(self, login: _Optional[str] = ...) -> None: ...

class TenantServiceGetResponse(_message.Message):
    __slots__ = ("tenant",)
    TENANT_FIELD_NUMBER: _ClassVar[int]
    tenant: Tenant
    def __init__(self, tenant: _Optional[_Union[Tenant, _Mapping]] = ...) -> None: ...

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
