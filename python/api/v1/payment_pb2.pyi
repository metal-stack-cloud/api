import datetime

from api.v1 import common_pb2 as _common_pb2
from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProductType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PRODUCT_TYPE_UNSPECIFIED: _ClassVar[ProductType]
    PRODUCT_TYPE_STORAGE: _ClassVar[ProductType]
    PRODUCT_TYPE_COMPUTE: _ClassVar[ProductType]
    PRODUCT_TYPE_NETWORK: _ClassVar[ProductType]
    PRODUCT_TYPE_KUBERNETES: _ClassVar[ProductType]

class UsageType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    USAGE_TYPE_UNSPECIFIED: _ClassVar[UsageType]
    USAGE_TYPE_METERED: _ClassVar[UsageType]
    USAGE_TYPE_LICENSED: _ClassVar[UsageType]
PRODUCT_TYPE_UNSPECIFIED: ProductType
PRODUCT_TYPE_STORAGE: ProductType
PRODUCT_TYPE_COMPUTE: ProductType
PRODUCT_TYPE_NETWORK: ProductType
PRODUCT_TYPE_KUBERNETES: ProductType
USAGE_TYPE_UNSPECIFIED: UsageType
USAGE_TYPE_METERED: UsageType
USAGE_TYPE_LICENSED: UsageType

class PaymentCustomer(_message.Message):
    __slots__ = ("login", "name", "customer_id", "payment_method_id", "subscription_id", "email", "card", "prices", "address", "coupon", "vat", "phone_number", "balance")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    CUSTOMER_ID_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_ID_FIELD_NUMBER: _ClassVar[int]
    SUBSCRIPTION_ID_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    CARD_FIELD_NUMBER: _ClassVar[int]
    PRICES_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    COUPON_FIELD_NUMBER: _ClassVar[int]
    VAT_FIELD_NUMBER: _ClassVar[int]
    PHONE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    BALANCE_FIELD_NUMBER: _ClassVar[int]
    login: str
    name: str
    customer_id: str
    payment_method_id: str
    subscription_id: str
    email: str
    card: Card
    prices: _containers.RepeatedCompositeFieldContainer[Price]
    address: Address
    coupon: Coupon
    vat: str
    phone_number: str
    balance: int
    def __init__(self, login: _Optional[str] = ..., name: _Optional[str] = ..., customer_id: _Optional[str] = ..., payment_method_id: _Optional[str] = ..., subscription_id: _Optional[str] = ..., email: _Optional[str] = ..., card: _Optional[_Union[Card, _Mapping]] = ..., prices: _Optional[_Iterable[_Union[Price, _Mapping]]] = ..., address: _Optional[_Union[Address, _Mapping]] = ..., coupon: _Optional[_Union[Coupon, _Mapping]] = ..., vat: _Optional[str] = ..., phone_number: _Optional[str] = ..., balance: _Optional[int] = ...) -> None: ...

class Card(_message.Message):
    __slots__ = ("brand", "country", "exp_month", "exp_year", "last_4")
    BRAND_FIELD_NUMBER: _ClassVar[int]
    COUNTRY_FIELD_NUMBER: _ClassVar[int]
    EXP_MONTH_FIELD_NUMBER: _ClassVar[int]
    EXP_YEAR_FIELD_NUMBER: _ClassVar[int]
    LAST_4_FIELD_NUMBER: _ClassVar[int]
    brand: str
    country: str
    exp_month: int
    exp_year: int
    last_4: str
    def __init__(self, brand: _Optional[str] = ..., country: _Optional[str] = ..., exp_month: _Optional[int] = ..., exp_year: _Optional[int] = ..., last_4: _Optional[str] = ...) -> None: ...

class Price(_message.Message):
    __slots__ = ("name", "unit_amount_decimal", "currency", "unit_label", "product_type", "description", "usage_type")
    NAME_FIELD_NUMBER: _ClassVar[int]
    UNIT_AMOUNT_DECIMAL_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    UNIT_LABEL_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_TYPE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    USAGE_TYPE_FIELD_NUMBER: _ClassVar[int]
    name: str
    unit_amount_decimal: float
    currency: str
    unit_label: str
    product_type: ProductType
    description: str
    usage_type: UsageType
    def __init__(self, name: _Optional[str] = ..., unit_amount_decimal: _Optional[float] = ..., currency: _Optional[str] = ..., unit_label: _Optional[str] = ..., product_type: _Optional[_Union[ProductType, str]] = ..., description: _Optional[str] = ..., usage_type: _Optional[_Union[UsageType, str]] = ...) -> None: ...

class Address(_message.Message):
    __slots__ = ("line1", "line2", "postal_code", "city", "state", "country")
    LINE1_FIELD_NUMBER: _ClassVar[int]
    LINE2_FIELD_NUMBER: _ClassVar[int]
    POSTAL_CODE_FIELD_NUMBER: _ClassVar[int]
    CITY_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    COUNTRY_FIELD_NUMBER: _ClassVar[int]
    line1: str
    line2: str
    postal_code: str
    city: str
    state: str
    country: str
    def __init__(self, line1: _Optional[str] = ..., line2: _Optional[str] = ..., postal_code: _Optional[str] = ..., city: _Optional[str] = ..., state: _Optional[str] = ..., country: _Optional[str] = ...) -> None: ...

class SubscriptionUsageItem(_message.Message):
    __slots__ = ("subscription_item_id", "subscription_item_name", "total_usage", "period_start", "period_end")
    SUBSCRIPTION_ITEM_ID_FIELD_NUMBER: _ClassVar[int]
    SUBSCRIPTION_ITEM_NAME_FIELD_NUMBER: _ClassVar[int]
    TOTAL_USAGE_FIELD_NUMBER: _ClassVar[int]
    PERIOD_START_FIELD_NUMBER: _ClassVar[int]
    PERIOD_END_FIELD_NUMBER: _ClassVar[int]
    subscription_item_id: str
    subscription_item_name: str
    total_usage: int
    period_start: _timestamp_pb2.Timestamp
    period_end: _timestamp_pb2.Timestamp
    def __init__(self, subscription_item_id: _Optional[str] = ..., subscription_item_name: _Optional[str] = ..., total_usage: _Optional[int] = ..., period_start: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., period_end: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class Invoice(_message.Message):
    __slots__ = ("id", "pdf_download_url", "period_start", "period_end")
    ID_FIELD_NUMBER: _ClassVar[int]
    PDF_DOWNLOAD_URL_FIELD_NUMBER: _ClassVar[int]
    PERIOD_START_FIELD_NUMBER: _ClassVar[int]
    PERIOD_END_FIELD_NUMBER: _ClassVar[int]
    id: str
    pdf_download_url: str
    period_start: _timestamp_pb2.Timestamp
    period_end: _timestamp_pb2.Timestamp
    def __init__(self, id: _Optional[str] = ..., pdf_download_url: _Optional[str] = ..., period_start: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., period_end: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class Coupon(_message.Message):
    __slots__ = ("id", "name", "amount_off", "currency", "duration_in_month", "created_at", "redeem_by", "times_redeemed", "max_redemptions", "amount_left")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_OFF_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    DURATION_IN_MONTH_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    REDEEM_BY_FIELD_NUMBER: _ClassVar[int]
    TIMES_REDEEMED_FIELD_NUMBER: _ClassVar[int]
    MAX_REDEMPTIONS_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_LEFT_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    amount_off: int
    currency: str
    duration_in_month: int
    created_at: _timestamp_pb2.Timestamp
    redeem_by: _timestamp_pb2.Timestamp
    times_redeemed: int
    max_redemptions: int
    amount_left: int
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., amount_off: _Optional[int] = ..., currency: _Optional[str] = ..., duration_in_month: _Optional[int] = ..., created_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., redeem_by: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., times_redeemed: _Optional[int] = ..., max_redemptions: _Optional[int] = ..., amount_left: _Optional[int] = ...) -> None: ...

class PaymentServiceCreateOrUpdateCustomerRequest(_message.Message):
    __slots__ = ("login", "name", "payment_method_id", "email", "card", "address", "vat", "phone_number")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_ID_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    CARD_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    VAT_FIELD_NUMBER: _ClassVar[int]
    PHONE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    login: str
    name: str
    payment_method_id: str
    email: str
    card: Card
    address: Address
    vat: str
    phone_number: str
    def __init__(self, login: _Optional[str] = ..., name: _Optional[str] = ..., payment_method_id: _Optional[str] = ..., email: _Optional[str] = ..., card: _Optional[_Union[Card, _Mapping]] = ..., address: _Optional[_Union[Address, _Mapping]] = ..., vat: _Optional[str] = ..., phone_number: _Optional[str] = ...) -> None: ...

class PaymentServiceCreateOrUpdateCustomerResponse(_message.Message):
    __slots__ = ("customer",)
    CUSTOMER_FIELD_NUMBER: _ClassVar[int]
    customer: PaymentCustomer
    def __init__(self, customer: _Optional[_Union[PaymentCustomer, _Mapping]] = ...) -> None: ...

class PaymentServiceGetCustomerRequest(_message.Message):
    __slots__ = ("login", "customer_id")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    CUSTOMER_ID_FIELD_NUMBER: _ClassVar[int]
    login: str
    customer_id: str
    def __init__(self, login: _Optional[str] = ..., customer_id: _Optional[str] = ...) -> None: ...

class PaymentServiceGetCustomerResponse(_message.Message):
    __slots__ = ("customer",)
    CUSTOMER_FIELD_NUMBER: _ClassVar[int]
    customer: PaymentCustomer
    def __init__(self, customer: _Optional[_Union[PaymentCustomer, _Mapping]] = ...) -> None: ...

class PaymentServiceCheckIfCustomerExistsRequest(_message.Message):
    __slots__ = ("login",)
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    login: str
    def __init__(self, login: _Optional[str] = ...) -> None: ...

class PaymentServiceCheckIfCustomerExistsResponse(_message.Message):
    __slots__ = ("customer", "exists")
    CUSTOMER_FIELD_NUMBER: _ClassVar[int]
    EXISTS_FIELD_NUMBER: _ClassVar[int]
    customer: PaymentCustomer
    exists: bool
    def __init__(self, customer: _Optional[_Union[PaymentCustomer, _Mapping]] = ..., exists: bool = ...) -> None: ...

class PaymentServiceHasPaymentMethodRequest(_message.Message):
    __slots__ = ("login",)
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    login: str
    def __init__(self, login: _Optional[str] = ...) -> None: ...

class PaymentServiceHasPaymentMethodResponse(_message.Message):
    __slots__ = ("exists", "coupon_left", "positive_balance")
    EXISTS_FIELD_NUMBER: _ClassVar[int]
    COUPON_LEFT_FIELD_NUMBER: _ClassVar[int]
    POSITIVE_BALANCE_FIELD_NUMBER: _ClassVar[int]
    exists: bool
    coupon_left: bool
    positive_balance: bool
    def __init__(self, exists: bool = ..., coupon_left: bool = ..., positive_balance: bool = ...) -> None: ...

class PaymentServiceDeletePaymentMethodRequest(_message.Message):
    __slots__ = ("login",)
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    login: str
    def __init__(self, login: _Optional[str] = ...) -> None: ...

class PaymentServiceDeletePaymentMethodResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class PaymentServiceGetSubscriptionUsageRequest(_message.Message):
    __slots__ = ("login",)
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    login: str
    def __init__(self, login: _Optional[str] = ...) -> None: ...

class PaymentServiceGetSubscriptionUsageResponse(_message.Message):
    __slots__ = ("subscription_usage_items",)
    SUBSCRIPTION_USAGE_ITEMS_FIELD_NUMBER: _ClassVar[int]
    subscription_usage_items: _containers.RepeatedCompositeFieldContainer[SubscriptionUsageItem]
    def __init__(self, subscription_usage_items: _Optional[_Iterable[_Union[SubscriptionUsageItem, _Mapping]]] = ...) -> None: ...

class PaymentServiceGetInvoicesRequest(_message.Message):
    __slots__ = ("login", "customer_id")
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    CUSTOMER_ID_FIELD_NUMBER: _ClassVar[int]
    login: str
    customer_id: str
    def __init__(self, login: _Optional[str] = ..., customer_id: _Optional[str] = ...) -> None: ...

class PaymentServiceGetInvoicesResponse(_message.Message):
    __slots__ = ("invoices",)
    INVOICES_FIELD_NUMBER: _ClassVar[int]
    invoices: _containers.RepeatedCompositeFieldContainer[Invoice]
    def __init__(self, invoices: _Optional[_Iterable[_Union[Invoice, _Mapping]]] = ...) -> None: ...

class PaymentServiceGetDefaultPricesRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class PaymentServiceGetDefaultPricesResponse(_message.Message):
    __slots__ = ("prices",)
    PRICES_FIELD_NUMBER: _ClassVar[int]
    prices: _containers.RepeatedCompositeFieldContainer[Price]
    def __init__(self, prices: _Optional[_Iterable[_Union[Price, _Mapping]]] = ...) -> None: ...

class PaymentServiceHasChargeableResourcesRequest(_message.Message):
    __slots__ = ("login",)
    LOGIN_FIELD_NUMBER: _ClassVar[int]
    login: str
    def __init__(self, login: _Optional[str] = ...) -> None: ...

class PaymentServiceHasChargeableResourcesResponse(_message.Message):
    __slots__ = ("has_resources",)
    HAS_RESOURCES_FIELD_NUMBER: _ClassVar[int]
    has_resources: bool
    def __init__(self, has_resources: bool = ...) -> None: ...
