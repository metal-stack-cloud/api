# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from api.v1 import methods_pb2 as api_dot_v1_dot_methods__pb2


class MethodServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.List = channel.unary_unary(
                '/api.v1.MethodService/List',
                request_serializer=api_dot_v1_dot_methods__pb2.MethodServiceListRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_methods__pb2.MethodServiceListResponse.FromString,
                )
        self.TokenScopedList = channel.unary_unary(
                '/api.v1.MethodService/TokenScopedList',
                request_serializer=api_dot_v1_dot_methods__pb2.MethodServiceTokenScopedListRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_methods__pb2.MethodServiceTokenScopedListResponse.FromString,
                )


class MethodServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def List(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def TokenScopedList(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_MethodServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'List': grpc.unary_unary_rpc_method_handler(
                    servicer.List,
                    request_deserializer=api_dot_v1_dot_methods__pb2.MethodServiceListRequest.FromString,
                    response_serializer=api_dot_v1_dot_methods__pb2.MethodServiceListResponse.SerializeToString,
            ),
            'TokenScopedList': grpc.unary_unary_rpc_method_handler(
                    servicer.TokenScopedList,
                    request_deserializer=api_dot_v1_dot_methods__pb2.MethodServiceTokenScopedListRequest.FromString,
                    response_serializer=api_dot_v1_dot_methods__pb2.MethodServiceTokenScopedListResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'api.v1.MethodService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class MethodService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def List(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.v1.MethodService/List',
            api_dot_v1_dot_methods__pb2.MethodServiceListRequest.SerializeToString,
            api_dot_v1_dot_methods__pb2.MethodServiceListResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def TokenScopedList(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.v1.MethodService/TokenScopedList',
            api_dot_v1_dot_methods__pb2.MethodServiceTokenScopedListRequest.SerializeToString,
            api_dot_v1_dot_methods__pb2.MethodServiceTokenScopedListResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
