# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: status/v1/status.proto
# Protobuf Python Version: 4.25.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from api.v1 import common_pb2 as api_dot_v1_dot_common__pb2
from api.v1 import health_pb2 as api_dot_v1_dot_health__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x16status/v1/status.proto\x12\tstatus.v1\x1a\x13\x61pi/v1/common.proto\x1a\x13\x61pi/v1/health.proto\"\x19\n\x17StatusServiceGetRequest\"\xce\x01\n\x18StatusServiceGetResponse\x12&\n\x06health\x18\x01 \x01(\x0b\x32\x0e.api.v1.HealthR\x06health\x12<\n\x0eoverall_status\x18\x02 \x01(\x0e\x32\x15.api.v1.ServiceStatusR\roverallStatus\x12+\n\x11\x63onnection_broken\x18\x03 \x01(\x08R\x10\x63onnectionBroken\x12\x1f\n\x0b\x61pi_version\x18\x04 \x01(\tR\napiVersion2e\n\rStatusService\x12T\n\x03Get\x12\".status.v1.StatusServiceGetRequest\x1a#.status.v1.StatusServiceGetResponse\"\x04\xd8\xf3\x18\x01\x42\x99\x01\n\rcom.status.v1B\x0bStatusProtoP\x01Z6github.com/metal-stack-cloud/api/go/status/v1;statusv1\xa2\x02\x03SXX\xaa\x02\tStatus.V1\xca\x02\tStatus\\V1\xe2\x02\x15Status\\V1\\GPBMetadata\xea\x02\nStatus::V1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'status.v1.status_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  _globals['DESCRIPTOR']._options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\rcom.status.v1B\013StatusProtoP\001Z6github.com/metal-stack-cloud/api/go/status/v1;statusv1\242\002\003SXX\252\002\tStatus.V1\312\002\tStatus\\V1\342\002\025Status\\V1\\GPBMetadata\352\002\nStatus::V1'
  _globals['_STATUSSERVICE'].methods_by_name['Get']._options = None
  _globals['_STATUSSERVICE'].methods_by_name['Get']._serialized_options = b'\330\363\030\001'
  _globals['_STATUSSERVICEGETREQUEST']._serialized_start=79
  _globals['_STATUSSERVICEGETREQUEST']._serialized_end=104
  _globals['_STATUSSERVICEGETRESPONSE']._serialized_start=107
  _globals['_STATUSSERVICEGETRESPONSE']._serialized_end=313
  _globals['_STATUSSERVICE']._serialized_start=315
  _globals['_STATUSSERVICE']._serialized_end=416
# @@protoc_insertion_point(module_scope)
