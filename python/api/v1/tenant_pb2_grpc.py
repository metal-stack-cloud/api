# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from api.v1 import tenant_pb2 as api_dot_v1_dot_tenant__pb2


class TenantServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Create = channel.unary_unary(
                '/api.v1.TenantService/Create',
                request_serializer=api_dot_v1_dot_tenant__pb2.TenantServiceCreateRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_tenant__pb2.TenantServiceCreateResponse.FromString,
                )
        self.CreateOrUpdate = channel.unary_unary(
                '/api.v1.TenantService/CreateOrUpdate',
                request_serializer=api_dot_v1_dot_tenant__pb2.TenantServiceCreateOrUpdateRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_tenant__pb2.TenantServiceCreateOrUpdateResponse.FromString,
                )
        self.Get = channel.unary_unary(
                '/api.v1.TenantService/Get',
                request_serializer=api_dot_v1_dot_tenant__pb2.TenantServiceGetRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_tenant__pb2.TenantServiceGetResponse.FromString,
                )
        self.Update = channel.unary_unary(
                '/api.v1.TenantService/Update',
                request_serializer=api_dot_v1_dot_tenant__pb2.TenantServiceUpdateRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_tenant__pb2.TenantServiceUpdateResponse.FromString,
                )
        self.Delete = channel.unary_unary(
                '/api.v1.TenantService/Delete',
                request_serializer=api_dot_v1_dot_tenant__pb2.TenantServiceDeleteRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_tenant__pb2.TenantServiceDeleteResponse.FromString,
                )


class TenantServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Create(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateOrUpdate(self, request, context):
        """CreateOrUpdate should only be used from within the application
        will check if tenant already exists and updates if necessary, otherwise create a new tenant
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Get(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Update(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Delete(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_TenantServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Create': grpc.unary_unary_rpc_method_handler(
                    servicer.Create,
                    request_deserializer=api_dot_v1_dot_tenant__pb2.TenantServiceCreateRequest.FromString,
                    response_serializer=api_dot_v1_dot_tenant__pb2.TenantServiceCreateResponse.SerializeToString,
            ),
            'CreateOrUpdate': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateOrUpdate,
                    request_deserializer=api_dot_v1_dot_tenant__pb2.TenantServiceCreateOrUpdateRequest.FromString,
                    response_serializer=api_dot_v1_dot_tenant__pb2.TenantServiceCreateOrUpdateResponse.SerializeToString,
            ),
            'Get': grpc.unary_unary_rpc_method_handler(
                    servicer.Get,
                    request_deserializer=api_dot_v1_dot_tenant__pb2.TenantServiceGetRequest.FromString,
                    response_serializer=api_dot_v1_dot_tenant__pb2.TenantServiceGetResponse.SerializeToString,
            ),
            'Update': grpc.unary_unary_rpc_method_handler(
                    servicer.Update,
                    request_deserializer=api_dot_v1_dot_tenant__pb2.TenantServiceUpdateRequest.FromString,
                    response_serializer=api_dot_v1_dot_tenant__pb2.TenantServiceUpdateResponse.SerializeToString,
            ),
            'Delete': grpc.unary_unary_rpc_method_handler(
                    servicer.Delete,
                    request_deserializer=api_dot_v1_dot_tenant__pb2.TenantServiceDeleteRequest.FromString,
                    response_serializer=api_dot_v1_dot_tenant__pb2.TenantServiceDeleteResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'api.v1.TenantService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class TenantService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def Create(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.v1.TenantService/Create',
            api_dot_v1_dot_tenant__pb2.TenantServiceCreateRequest.SerializeToString,
            api_dot_v1_dot_tenant__pb2.TenantServiceCreateResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateOrUpdate(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.v1.TenantService/CreateOrUpdate',
            api_dot_v1_dot_tenant__pb2.TenantServiceCreateOrUpdateRequest.SerializeToString,
            api_dot_v1_dot_tenant__pb2.TenantServiceCreateOrUpdateResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Get(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.v1.TenantService/Get',
            api_dot_v1_dot_tenant__pb2.TenantServiceGetRequest.SerializeToString,
            api_dot_v1_dot_tenant__pb2.TenantServiceGetResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Update(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.v1.TenantService/Update',
            api_dot_v1_dot_tenant__pb2.TenantServiceUpdateRequest.SerializeToString,
            api_dot_v1_dot_tenant__pb2.TenantServiceUpdateResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Delete(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.v1.TenantService/Delete',
            api_dot_v1_dot_tenant__pb2.TenantServiceDeleteRequest.SerializeToString,
            api_dot_v1_dot_tenant__pb2.TenantServiceDeleteResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
