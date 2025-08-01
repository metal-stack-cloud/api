# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from metalstackcloud.api.v1 import audit_pb2 as api_dot_v1_dot_audit__pb2


class AuditServiceStub(object):
    """AuditService serves audit related functions
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Get = channel.unary_unary(
                '/api.v1.AuditService/Get',
                request_serializer=api_dot_v1_dot_audit__pb2.AuditServiceGetRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_audit__pb2.AuditServiceGetResponse.FromString,
                _registered_method=True)
        self.List = channel.unary_unary(
                '/api.v1.AuditService/List',
                request_serializer=api_dot_v1_dot_audit__pb2.AuditServiceListRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_audit__pb2.AuditServiceListResponse.FromString,
                _registered_method=True)


class AuditServiceServicer(object):
    """AuditService serves audit related functions
    """

    def Get(self, request, context):
        """Get an audit trace
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def List(self, request, context):
        """List audit traces
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_AuditServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Get': grpc.unary_unary_rpc_method_handler(
                    servicer.Get,
                    request_deserializer=api_dot_v1_dot_audit__pb2.AuditServiceGetRequest.FromString,
                    response_serializer=api_dot_v1_dot_audit__pb2.AuditServiceGetResponse.SerializeToString,
            ),
            'List': grpc.unary_unary_rpc_method_handler(
                    servicer.List,
                    request_deserializer=api_dot_v1_dot_audit__pb2.AuditServiceListRequest.FromString,
                    response_serializer=api_dot_v1_dot_audit__pb2.AuditServiceListResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'api.v1.AuditService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
    server.add_registered_method_handlers('api.v1.AuditService', rpc_method_handlers)


 # This class is part of an EXPERIMENTAL API.
class AuditService(object):
    """AuditService serves audit related functions
    """

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
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.v1.AuditService/Get',
            api_dot_v1_dot_audit__pb2.AuditServiceGetRequest.SerializeToString,
            api_dot_v1_dot_audit__pb2.AuditServiceGetResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

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
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.v1.AuditService/List',
            api_dot_v1_dot_audit__pb2.AuditServiceListRequest.SerializeToString,
            api_dot_v1_dot_audit__pb2.AuditServiceListResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)
