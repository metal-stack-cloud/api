from api.v1 import common_pb2 as _common_pb2
from api.v1 import payment_pb2 as _payment_pb2
from validate import validate_pb2 as _validate_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PaymentServiceListCouponsRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class PaymentServiceListCouponsResponse(_message.Message):
    __slots__ = ("coupons",)
    COUPONS_FIELD_NUMBER: _ClassVar[int]
    coupons: _containers.RepeatedCompositeFieldContainer[_payment_pb2.Coupon]
    def __init__(self, coupons: _Optional[_Iterable[_Union[_payment_pb2.Coupon, _Mapping]]] = ...) -> None: ...

class PaymentServiceAddCouponToCustomerRequest(_message.Message):
    __slots__ = ("customer", "coupon_id")
    CUSTOMER_FIELD_NUMBER: _ClassVar[int]
    COUPON_ID_FIELD_NUMBER: _ClassVar[int]
    customer: _payment_pb2.PaymentCustomer
    coupon_id: str
    def __init__(self, customer: _Optional[_Union[_payment_pb2.PaymentCustomer, _Mapping]] = ..., coupon_id: _Optional[str] = ...) -> None: ...

class PaymentServiceAddCouponToCustomerResponse(_message.Message):
    __slots__ = ("customer",)
    CUSTOMER_FIELD_NUMBER: _ClassVar[int]
    customer: _payment_pb2.PaymentCustomer
    def __init__(self, customer: _Optional[_Union[_payment_pb2.PaymentCustomer, _Mapping]] = ...) -> None: ...

class PaymentServiceAddBalanceToCustomerRequest(_message.Message):
    __slots__ = ("customer", "balance_to_add")
    CUSTOMER_FIELD_NUMBER: _ClassVar[int]
    BALANCE_TO_ADD_FIELD_NUMBER: _ClassVar[int]
    customer: _payment_pb2.PaymentCustomer
    balance_to_add: int
    def __init__(self, customer: _Optional[_Union[_payment_pb2.PaymentCustomer, _Mapping]] = ..., balance_to_add: _Optional[int] = ...) -> None: ...

class PaymentServiceAddBalanceToCustomerResponse(_message.Message):
    __slots__ = ("customer",)
    CUSTOMER_FIELD_NUMBER: _ClassVar[int]
    customer: _payment_pb2.PaymentCustomer
    def __init__(self, customer: _Optional[_Union[_payment_pb2.PaymentCustomer, _Mapping]] = ...) -> None: ...
