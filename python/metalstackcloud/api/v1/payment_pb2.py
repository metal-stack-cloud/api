# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: api/v1/payment.proto
# Protobuf Python Version: 6.31.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    6,
    31,
    1,
    '',
    'api/v1/payment.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from metalstackcloud.api.v1 import common_pb2 as api_dot_v1_dot_common__pb2
from buf.validate import validate_pb2 as buf_dot_validate_dot_validate__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14\x61pi/v1/payment.proto\x12\x06\x61pi.v1\x1a\x13\x61pi/v1/common.proto\x1a\x1b\x62uf/validate/validate.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"\xda\x04\n\x0fPaymentCustomer\x12\x14\n\x05login\x18\x01 \x01(\tR\x05login\x12\x17\n\x04name\x18\x02 \x01(\tH\x00R\x04name\x88\x01\x01\x12$\n\x0b\x63ustomer_id\x18\x03 \x01(\tH\x01R\ncustomerId\x88\x01\x01\x12/\n\x11payment_method_id\x18\x04 \x01(\tH\x02R\x0fpaymentMethodId\x88\x01\x01\x12\'\n\x0fsubscription_id\x18\x05 \x01(\tR\x0esubscriptionId\x12\"\n\x05\x65mail\x18\x06 \x01(\tB\x07\xbaH\x04r\x02`\x01H\x03R\x05\x65mail\x88\x01\x01\x12%\n\x04\x63\x61rd\x18\x07 \x01(\x0b\x32\x0c.api.v1.CardH\x04R\x04\x63\x61rd\x88\x01\x01\x12%\n\x06prices\x18\x08 \x03(\x0b\x32\r.api.v1.PriceR\x06prices\x12)\n\x07\x61\x64\x64ress\x18\t \x01(\x0b\x32\x0f.api.v1.AddressR\x07\x61\x64\x64ress\x12+\n\x06\x63oupon\x18\n \x01(\x0b\x32\x0e.api.v1.CouponH\x05R\x06\x63oupon\x88\x01\x01\x12\x15\n\x03vat\x18\x0b \x01(\tH\x06R\x03vat\x88\x01\x01\x12&\n\x0cphone_number\x18\x0c \x01(\tH\x07R\x0bphoneNumber\x88\x01\x01\x12\x1d\n\x07\x62\x61lance\x18\r \x01(\x03H\x08R\x07\x62\x61lance\x88\x01\x01\x42\x07\n\x05_nameB\x0e\n\x0c_customer_idB\x14\n\x12_payment_method_idB\x08\n\x06_emailB\x07\n\x05_cardB\t\n\x07_couponB\x06\n\x04_vatB\x0f\n\r_phone_numberB\n\n\x08_balance\"\x85\x01\n\x04\x43\x61rd\x12\x14\n\x05\x62rand\x18\x01 \x01(\tR\x05\x62rand\x12\x18\n\x07\x63ountry\x18\x02 \x01(\tR\x07\x63ountry\x12\x1b\n\texp_month\x18\x03 \x01(\x03R\x08\x65xpMonth\x12\x19\n\x08\x65xp_year\x18\x04 \x01(\x03R\x07\x65xpYear\x12\x15\n\x06last_4\x18\x05 \x01(\tR\x05last4\"\xb3\x02\n\x05Price\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12.\n\x13unit_amount_decimal\x18\x02 \x01(\x01R\x11unitAmountDecimal\x12\x1a\n\x08\x63urrency\x18\x03 \x01(\tR\x08\x63urrency\x12\x1d\n\nunit_label\x18\x04 \x01(\tR\tunitLabel\x12\x36\n\x0cproduct_type\x18\x05 \x01(\x0e\x32\x13.api.v1.ProductTypeR\x0bproductType\x12\x31\n\x0b\x64\x65scription\x18\x06 \x01(\tB\n\xbaH\x07r\x05\x10\x02\x18\xf4\x03H\x00R\x0b\x64\x65scription\x88\x01\x01\x12\x30\n\nusage_type\x18\x07 \x01(\x0e\x32\x11.api.v1.UsageTypeR\tusageTypeB\x0e\n\x0c_description\"\x9a\x01\n\x07\x41\x64\x64ress\x12\x14\n\x05line1\x18\x01 \x01(\tR\x05line1\x12\x14\n\x05line2\x18\x02 \x01(\tR\x05line2\x12\x1f\n\x0bpostal_code\x18\x03 \x01(\tR\npostalCode\x12\x12\n\x04\x63ity\x18\x04 \x01(\tR\x04\x63ity\x12\x14\n\x05state\x18\x05 \x01(\tR\x05state\x12\x18\n\x07\x63ountry\x18\x06 \x01(\tR\x07\x63ountry\"\x9a\x02\n\x15SubscriptionUsageItem\x12\x30\n\x14subscription_item_id\x18\x01 \x01(\tR\x12subscriptionItemId\x12\x34\n\x16subscription_item_name\x18\x02 \x01(\tR\x14subscriptionItemName\x12\x1f\n\x0btotal_usage\x18\x03 \x01(\x03R\ntotalUsage\x12=\n\x0cperiod_start\x18\x04 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\x0bperiodStart\x12\x39\n\nperiod_end\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tperiodEnd\"\xbd\x01\n\x07Invoice\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12(\n\x10pdf_download_url\x18\x02 \x01(\tR\x0epdfDownloadUrl\x12=\n\x0cperiod_start\x18\x04 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\x0bperiodStart\x12\x39\n\nperiod_end\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tperiodEnd\"\xf8\x02\n\x06\x43oupon\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12\x1d\n\namount_off\x18\x03 \x01(\x03R\tamountOff\x12\x1a\n\x08\x63urrency\x18\x04 \x01(\tR\x08\x63urrency\x12*\n\x11\x64uration_in_month\x18\x05 \x01(\x03R\x0f\x64urationInMonth\x12\x39\n\ncreated_at\x18\x06 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tcreatedAt\x12\x37\n\tredeem_by\x18\x07 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\x08redeemBy\x12%\n\x0etimes_redeemed\x18\x08 \x01(\x03R\rtimesRedeemed\x12\'\n\x0fmax_redemptions\x18\t \x01(\x03R\x0emaxRedemptions\x12\x1f\n\x0b\x61mount_left\x18\n \x01(\x03R\namountLeft\"\xce\x03\n+PaymentServiceCreateOrUpdateCustomerRequest\x12 \n\x05login\x18\x01 \x01(\tB\n\xbaH\x07r\x05\x10\x02\x18\x80\x01R\x05login\x12\x17\n\x04name\x18\x04 \x01(\tH\x00R\x04name\x88\x01\x01\x12/\n\x11payment_method_id\x18\x05 \x01(\tH\x01R\x0fpaymentMethodId\x88\x01\x01\x12\"\n\x05\x65mail\x18\x06 \x01(\tB\x07\xbaH\x04r\x02`\x01H\x02R\x05\x65mail\x88\x01\x01\x12%\n\x04\x63\x61rd\x18\x07 \x01(\x0b\x32\x0c.api.v1.CardH\x03R\x04\x63\x61rd\x88\x01\x01\x12)\n\x07\x61\x64\x64ress\x18\x08 \x01(\x0b\x32\x0f.api.v1.AddressR\x07\x61\x64\x64ress\x12\x15\n\x03vat\x18\t \x01(\tH\x04R\x03vat\x88\x01\x01\x12&\n\x0cphone_number\x18\n \x01(\tH\x05R\x0bphoneNumber\x88\x01\x01\x42\x07\n\x05_nameB\x14\n\x12_payment_method_idB\x08\n\x06_emailB\x07\n\x05_cardB\x06\n\x04_vatB\x0f\n\r_phone_numberJ\x04\x08\x02\x10\x03J\x04\x08\x03\x10\x04R\x08\x63ustomerR\x1d\x61\x63\x63\x65pted_terms_and_conditions\"c\n,PaymentServiceCreateOrUpdateCustomerResponse\x12\x33\n\x08\x63ustomer\x18\x01 \x01(\x0b\x32\x17.api.v1.PaymentCustomerR\x08\x63ustomer\"e\n PaymentServiceGetCustomerRequest\x12 \n\x05login\x18\x01 \x01(\tB\n\xbaH\x07r\x05\x10\x02\x18\x80\x01R\x05login\x12\x1f\n\x0b\x63ustomer_id\x18\x02 \x01(\tR\ncustomerId\"X\n!PaymentServiceGetCustomerResponse\x12\x33\n\x08\x63ustomer\x18\x01 \x01(\x0b\x32\x17.api.v1.PaymentCustomerR\x08\x63ustomer\"N\n*PaymentServiceCheckIfCustomerExistsRequest\x12 \n\x05login\x18\x01 \x01(\tB\n\xbaH\x07r\x05\x10\x02\x18\x80\x01R\x05login\"z\n+PaymentServiceCheckIfCustomerExistsResponse\x12\x33\n\x08\x63ustomer\x18\x01 \x01(\x0b\x32\x17.api.v1.PaymentCustomerR\x08\x63ustomer\x12\x16\n\x06\x65xists\x18\x02 \x01(\x08R\x06\x65xists\"I\n%PaymentServiceHasPaymentMethodRequest\x12 \n\x05login\x18\x01 \x01(\tB\n\xbaH\x07r\x05\x10\x02\x18\x80\x01R\x05login\"\x8c\x01\n&PaymentServiceHasPaymentMethodResponse\x12\x16\n\x06\x65xists\x18\x01 \x01(\x08R\x06\x65xists\x12\x1f\n\x0b\x63oupon_left\x18\x02 \x01(\x08R\ncouponLeft\x12)\n\x10positive_balance\x18\x03 \x01(\x08R\x0fpositiveBalance\"L\n(PaymentServiceDeletePaymentMethodRequest\x12 \n\x05login\x18\x01 \x01(\tB\n\xbaH\x07r\x05\x10\x02\x18\x80\x01R\x05login\"+\n)PaymentServiceDeletePaymentMethodResponse\"M\n)PaymentServiceGetSubscriptionUsageRequest\x12 \n\x05login\x18\x01 \x01(\tB\n\xbaH\x07r\x05\x10\x02\x18\x80\x01R\x05login\"\x85\x01\n*PaymentServiceGetSubscriptionUsageResponse\x12W\n\x18subscription_usage_items\x18\x01 \x03(\x0b\x32\x1d.api.v1.SubscriptionUsageItemR\x16subscriptionUsageItems\"o\n PaymentServiceGetInvoicesRequest\x12 \n\x05login\x18\x01 \x01(\tB\n\xbaH\x07r\x05\x10\x02\x18\x80\x01R\x05login\x12)\n\x0b\x63ustomer_id\x18\x02 \x01(\tB\x08\xbaH\x05r\x03\x98\x01\x12R\ncustomerId\"P\n!PaymentServiceGetInvoicesResponse\x12+\n\x08invoices\x18\x01 \x03(\x0b\x32\x0f.api.v1.InvoiceR\x08invoices\"\'\n%PaymentServiceGetDefaultPricesRequest\"O\n&PaymentServiceGetDefaultPricesResponse\x12%\n\x06prices\x18\x01 \x03(\x0b\x32\r.api.v1.PriceR\x06prices\"C\n+PaymentServiceHasChargeableResourcesRequest\x12\x14\n\x05login\x18\x01 \x01(\tR\x05login\"S\n,PaymentServiceHasChargeableResourcesResponse\x12#\n\rhas_resources\x18\x01 \x01(\x08R\x0chasResources*\x96\x01\n\x0bProductType\x12\x1c\n\x18PRODUCT_TYPE_UNSPECIFIED\x10\x00\x12\x18\n\x14PRODUCT_TYPE_STORAGE\x10\x01\x12\x18\n\x14PRODUCT_TYPE_COMPUTE\x10\x02\x12\x18\n\x14PRODUCT_TYPE_NETWORK\x10\x03\x12\x1b\n\x17PRODUCT_TYPE_KUBERNETES\x10\x05*X\n\tUsageType\x12\x1a\n\x16USAGE_TYPE_UNSPECIFIED\x10\x00\x12\x16\n\x12USAGE_TYPE_METERED\x10\x01\x12\x17\n\x13USAGE_TYPE_LICENSED\x10\x02\x32\xaa\t\n\x0ePaymentService\x12\x8a\x01\n\x16\x43reateOrUpdateCustomer\x12\x33.api.v1.PaymentServiceCreateOrUpdateCustomerRequest\x1a\x34.api.v1.PaymentServiceCreateOrUpdateCustomerResponse\"\x05\xc2\xf3\x18\x01\x01\x12m\n\x0bGetCustomer\x12(.api.v1.PaymentServiceGetCustomerRequest\x1a).api.v1.PaymentServiceGetCustomerResponse\"\t\xc2\xf3\x18\x01\x01\xe8\xf3\x18\x02\x12\x8b\x01\n\x15\x43heckIfCustomerExists\x12\x32.api.v1.PaymentServiceCheckIfCustomerExistsRequest\x1a\x33.api.v1.PaymentServiceCheckIfCustomerExistsResponse\"\t\xc2\xf3\x18\x01\x01\xe8\xf3\x18\x02\x12\x7f\n\x10HasPaymentMethod\x12-.api.v1.PaymentServiceHasPaymentMethodRequest\x1a..api.v1.PaymentServiceHasPaymentMethodResponse\"\x0c\xc2\xf3\x18\x04\x01\x02\x03\x04\xe8\xf3\x18\x02\x12\x81\x01\n\x13\x44\x65letePaymentMethod\x12\x30.api.v1.PaymentServiceDeletePaymentMethodRequest\x1a\x31.api.v1.PaymentServiceDeletePaymentMethodResponse\"\x05\xc2\xf3\x18\x01\x01\x12\x88\x01\n\x14GetSubscriptionUsage\x12\x31.api.v1.PaymentServiceGetSubscriptionUsageRequest\x1a\x32.api.v1.PaymentServiceGetSubscriptionUsageResponse\"\t\xc2\xf3\x18\x01\x01\xe8\xf3\x18\x02\x12m\n\x0bGetInvoices\x12(.api.v1.PaymentServiceGetInvoicesRequest\x1a).api.v1.PaymentServiceGetInvoicesResponse\"\t\xc2\xf3\x18\x01\x01\xe8\xf3\x18\x02\x12{\n\x10GetDefaultPrices\x12-.api.v1.PaymentServiceGetDefaultPricesRequest\x1a..api.v1.PaymentServiceGetDefaultPricesResponse\"\x08\xd8\xf3\x18\x01\xe8\xf3\x18\x02\x12\x91\x01\n\x16HasChargeableResources\x12\x33.api.v1.PaymentServiceHasChargeableResourcesRequest\x1a\x34.api.v1.PaymentServiceHasChargeableResourcesResponse\"\x0c\xc2\xf3\x18\x04\x01\x02\x03\x04\xe8\xf3\x18\x02\x42\x85\x01\n\ncom.api.v1B\x0cPaymentProtoP\x01Z0github.com/metal-stack-cloud/api/go/api/v1;apiv1\xa2\x02\x03\x41XX\xaa\x02\x06\x41pi.V1\xca\x02\x06\x41pi\\V1\xe2\x02\x12\x41pi\\V1\\GPBMetadata\xea\x02\x07\x41pi::V1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'api.v1.payment_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\ncom.api.v1B\014PaymentProtoP\001Z0github.com/metal-stack-cloud/api/go/api/v1;apiv1\242\002\003AXX\252\002\006Api.V1\312\002\006Api\\V1\342\002\022Api\\V1\\GPBMetadata\352\002\007Api::V1'
  _globals['_PAYMENTCUSTOMER'].fields_by_name['email']._loaded_options = None
  _globals['_PAYMENTCUSTOMER'].fields_by_name['email']._serialized_options = b'\272H\004r\002`\001'
  _globals['_PRICE'].fields_by_name['description']._loaded_options = None
  _globals['_PRICE'].fields_by_name['description']._serialized_options = b'\272H\007r\005\020\002\030\364\003'
  _globals['_PAYMENTSERVICECREATEORUPDATECUSTOMERREQUEST'].fields_by_name['login']._loaded_options = None
  _globals['_PAYMENTSERVICECREATEORUPDATECUSTOMERREQUEST'].fields_by_name['login']._serialized_options = b'\272H\007r\005\020\002\030\200\001'
  _globals['_PAYMENTSERVICECREATEORUPDATECUSTOMERREQUEST'].fields_by_name['email']._loaded_options = None
  _globals['_PAYMENTSERVICECREATEORUPDATECUSTOMERREQUEST'].fields_by_name['email']._serialized_options = b'\272H\004r\002`\001'
  _globals['_PAYMENTSERVICEGETCUSTOMERREQUEST'].fields_by_name['login']._loaded_options = None
  _globals['_PAYMENTSERVICEGETCUSTOMERREQUEST'].fields_by_name['login']._serialized_options = b'\272H\007r\005\020\002\030\200\001'
  _globals['_PAYMENTSERVICECHECKIFCUSTOMEREXISTSREQUEST'].fields_by_name['login']._loaded_options = None
  _globals['_PAYMENTSERVICECHECKIFCUSTOMEREXISTSREQUEST'].fields_by_name['login']._serialized_options = b'\272H\007r\005\020\002\030\200\001'
  _globals['_PAYMENTSERVICEHASPAYMENTMETHODREQUEST'].fields_by_name['login']._loaded_options = None
  _globals['_PAYMENTSERVICEHASPAYMENTMETHODREQUEST'].fields_by_name['login']._serialized_options = b'\272H\007r\005\020\002\030\200\001'
  _globals['_PAYMENTSERVICEDELETEPAYMENTMETHODREQUEST'].fields_by_name['login']._loaded_options = None
  _globals['_PAYMENTSERVICEDELETEPAYMENTMETHODREQUEST'].fields_by_name['login']._serialized_options = b'\272H\007r\005\020\002\030\200\001'
  _globals['_PAYMENTSERVICEGETSUBSCRIPTIONUSAGEREQUEST'].fields_by_name['login']._loaded_options = None
  _globals['_PAYMENTSERVICEGETSUBSCRIPTIONUSAGEREQUEST'].fields_by_name['login']._serialized_options = b'\272H\007r\005\020\002\030\200\001'
  _globals['_PAYMENTSERVICEGETINVOICESREQUEST'].fields_by_name['login']._loaded_options = None
  _globals['_PAYMENTSERVICEGETINVOICESREQUEST'].fields_by_name['login']._serialized_options = b'\272H\007r\005\020\002\030\200\001'
  _globals['_PAYMENTSERVICEGETINVOICESREQUEST'].fields_by_name['customer_id']._loaded_options = None
  _globals['_PAYMENTSERVICEGETINVOICESREQUEST'].fields_by_name['customer_id']._serialized_options = b'\272H\005r\003\230\001\022'
  _globals['_PAYMENTSERVICE'].methods_by_name['CreateOrUpdateCustomer']._loaded_options = None
  _globals['_PAYMENTSERVICE'].methods_by_name['CreateOrUpdateCustomer']._serialized_options = b'\302\363\030\001\001'
  _globals['_PAYMENTSERVICE'].methods_by_name['GetCustomer']._loaded_options = None
  _globals['_PAYMENTSERVICE'].methods_by_name['GetCustomer']._serialized_options = b'\302\363\030\001\001\350\363\030\002'
  _globals['_PAYMENTSERVICE'].methods_by_name['CheckIfCustomerExists']._loaded_options = None
  _globals['_PAYMENTSERVICE'].methods_by_name['CheckIfCustomerExists']._serialized_options = b'\302\363\030\001\001\350\363\030\002'
  _globals['_PAYMENTSERVICE'].methods_by_name['HasPaymentMethod']._loaded_options = None
  _globals['_PAYMENTSERVICE'].methods_by_name['HasPaymentMethod']._serialized_options = b'\302\363\030\004\001\002\003\004\350\363\030\002'
  _globals['_PAYMENTSERVICE'].methods_by_name['DeletePaymentMethod']._loaded_options = None
  _globals['_PAYMENTSERVICE'].methods_by_name['DeletePaymentMethod']._serialized_options = b'\302\363\030\001\001'
  _globals['_PAYMENTSERVICE'].methods_by_name['GetSubscriptionUsage']._loaded_options = None
  _globals['_PAYMENTSERVICE'].methods_by_name['GetSubscriptionUsage']._serialized_options = b'\302\363\030\001\001\350\363\030\002'
  _globals['_PAYMENTSERVICE'].methods_by_name['GetInvoices']._loaded_options = None
  _globals['_PAYMENTSERVICE'].methods_by_name['GetInvoices']._serialized_options = b'\302\363\030\001\001\350\363\030\002'
  _globals['_PAYMENTSERVICE'].methods_by_name['GetDefaultPrices']._loaded_options = None
  _globals['_PAYMENTSERVICE'].methods_by_name['GetDefaultPrices']._serialized_options = b'\330\363\030\001\350\363\030\002'
  _globals['_PAYMENTSERVICE'].methods_by_name['HasChargeableResources']._loaded_options = None
  _globals['_PAYMENTSERVICE'].methods_by_name['HasChargeableResources']._serialized_options = b'\302\363\030\004\001\002\003\004\350\363\030\002'
  _globals['_PRODUCTTYPE']._serialized_start=4170
  _globals['_PRODUCTTYPE']._serialized_end=4320
  _globals['_USAGETYPE']._serialized_start=4322
  _globals['_USAGETYPE']._serialized_end=4410
  _globals['_PAYMENTCUSTOMER']._serialized_start=116
  _globals['_PAYMENTCUSTOMER']._serialized_end=718
  _globals['_CARD']._serialized_start=721
  _globals['_CARD']._serialized_end=854
  _globals['_PRICE']._serialized_start=857
  _globals['_PRICE']._serialized_end=1164
  _globals['_ADDRESS']._serialized_start=1167
  _globals['_ADDRESS']._serialized_end=1321
  _globals['_SUBSCRIPTIONUSAGEITEM']._serialized_start=1324
  _globals['_SUBSCRIPTIONUSAGEITEM']._serialized_end=1606
  _globals['_INVOICE']._serialized_start=1609
  _globals['_INVOICE']._serialized_end=1798
  _globals['_COUPON']._serialized_start=1801
  _globals['_COUPON']._serialized_end=2177
  _globals['_PAYMENTSERVICECREATEORUPDATECUSTOMERREQUEST']._serialized_start=2180
  _globals['_PAYMENTSERVICECREATEORUPDATECUSTOMERREQUEST']._serialized_end=2642
  _globals['_PAYMENTSERVICECREATEORUPDATECUSTOMERRESPONSE']._serialized_start=2644
  _globals['_PAYMENTSERVICECREATEORUPDATECUSTOMERRESPONSE']._serialized_end=2743
  _globals['_PAYMENTSERVICEGETCUSTOMERREQUEST']._serialized_start=2745
  _globals['_PAYMENTSERVICEGETCUSTOMERREQUEST']._serialized_end=2846
  _globals['_PAYMENTSERVICEGETCUSTOMERRESPONSE']._serialized_start=2848
  _globals['_PAYMENTSERVICEGETCUSTOMERRESPONSE']._serialized_end=2936
  _globals['_PAYMENTSERVICECHECKIFCUSTOMEREXISTSREQUEST']._serialized_start=2938
  _globals['_PAYMENTSERVICECHECKIFCUSTOMEREXISTSREQUEST']._serialized_end=3016
  _globals['_PAYMENTSERVICECHECKIFCUSTOMEREXISTSRESPONSE']._serialized_start=3018
  _globals['_PAYMENTSERVICECHECKIFCUSTOMEREXISTSRESPONSE']._serialized_end=3140
  _globals['_PAYMENTSERVICEHASPAYMENTMETHODREQUEST']._serialized_start=3142
  _globals['_PAYMENTSERVICEHASPAYMENTMETHODREQUEST']._serialized_end=3215
  _globals['_PAYMENTSERVICEHASPAYMENTMETHODRESPONSE']._serialized_start=3218
  _globals['_PAYMENTSERVICEHASPAYMENTMETHODRESPONSE']._serialized_end=3358
  _globals['_PAYMENTSERVICEDELETEPAYMENTMETHODREQUEST']._serialized_start=3360
  _globals['_PAYMENTSERVICEDELETEPAYMENTMETHODREQUEST']._serialized_end=3436
  _globals['_PAYMENTSERVICEDELETEPAYMENTMETHODRESPONSE']._serialized_start=3438
  _globals['_PAYMENTSERVICEDELETEPAYMENTMETHODRESPONSE']._serialized_end=3481
  _globals['_PAYMENTSERVICEGETSUBSCRIPTIONUSAGEREQUEST']._serialized_start=3483
  _globals['_PAYMENTSERVICEGETSUBSCRIPTIONUSAGEREQUEST']._serialized_end=3560
  _globals['_PAYMENTSERVICEGETSUBSCRIPTIONUSAGERESPONSE']._serialized_start=3563
  _globals['_PAYMENTSERVICEGETSUBSCRIPTIONUSAGERESPONSE']._serialized_end=3696
  _globals['_PAYMENTSERVICEGETINVOICESREQUEST']._serialized_start=3698
  _globals['_PAYMENTSERVICEGETINVOICESREQUEST']._serialized_end=3809
  _globals['_PAYMENTSERVICEGETINVOICESRESPONSE']._serialized_start=3811
  _globals['_PAYMENTSERVICEGETINVOICESRESPONSE']._serialized_end=3891
  _globals['_PAYMENTSERVICEGETDEFAULTPRICESREQUEST']._serialized_start=3893
  _globals['_PAYMENTSERVICEGETDEFAULTPRICESREQUEST']._serialized_end=3932
  _globals['_PAYMENTSERVICEGETDEFAULTPRICESRESPONSE']._serialized_start=3934
  _globals['_PAYMENTSERVICEGETDEFAULTPRICESRESPONSE']._serialized_end=4013
  _globals['_PAYMENTSERVICEHASCHARGEABLERESOURCESREQUEST']._serialized_start=4015
  _globals['_PAYMENTSERVICEHASCHARGEABLERESOURCESREQUEST']._serialized_end=4082
  _globals['_PAYMENTSERVICEHASCHARGEABLERESOURCESRESPONSE']._serialized_start=4084
  _globals['_PAYMENTSERVICEHASCHARGEABLERESOURCESRESPONSE']._serialized_end=4167
  _globals['_PAYMENTSERVICE']._serialized_start=4413
  _globals['_PAYMENTSERVICE']._serialized_end=5607
# @@protoc_insertion_point(module_scope)
