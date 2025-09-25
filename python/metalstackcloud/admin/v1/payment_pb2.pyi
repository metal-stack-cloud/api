from api.v1 import common_pb2 as _common_pb2
from api.v1 import payment_pb2 as _payment_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PaymentServiceAddBalanceToCustomerRequest(_message.Message):
    __slots__ = ("tenant_id", "balance_to_add")
    TENANT_ID_FIELD_NUMBER: _ClassVar[int]
    BALANCE_TO_ADD_FIELD_NUMBER: _ClassVar[int]
    tenant_id: str
    balance_to_add: int
    def __init__(self, tenant_id: _Optional[str] = ..., balance_to_add: _Optional[int] = ...) -> None: ...

class PaymentServiceAddBalanceToCustomerResponse(_message.Message):
    __slots__ = ("customer",)
    CUSTOMER_FIELD_NUMBER: _ClassVar[int]
    customer: _payment_pb2.PaymentCustomer
    def __init__(self, customer: _Optional[_Union[_payment_pb2.PaymentCustomer, _Mapping]] = ...) -> None: ...
