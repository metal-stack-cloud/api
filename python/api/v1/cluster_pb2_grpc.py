# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from api.v1 import cluster_pb2 as api_dot_v1_dot_cluster__pb2


class ClusterServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Create = channel.unary_unary(
                '/api.v1.ClusterService/Create',
                request_serializer=api_dot_v1_dot_cluster__pb2.ClusterServiceCreateRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_cluster__pb2.ClusterServiceCreateResponse.FromString,
                )
        self.Get = channel.unary_unary(
                '/api.v1.ClusterService/Get',
                request_serializer=api_dot_v1_dot_cluster__pb2.ClusterServiceGetRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_cluster__pb2.ClusterServiceGetResponse.FromString,
                )
        self.List = channel.unary_unary(
                '/api.v1.ClusterService/List',
                request_serializer=api_dot_v1_dot_cluster__pb2.ClusterServiceListRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_cluster__pb2.ClusterServiceListResponse.FromString,
                )
        self.WatchStatus = channel.unary_stream(
                '/api.v1.ClusterService/WatchStatus',
                request_serializer=api_dot_v1_dot_cluster__pb2.ClusterServiceWatchStatusRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_cluster__pb2.ClusterServiceWatchStatusResponse.FromString,
                )
        self.Delete = channel.unary_unary(
                '/api.v1.ClusterService/Delete',
                request_serializer=api_dot_v1_dot_cluster__pb2.ClusterServiceDeleteRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_cluster__pb2.ClusterServiceDeleteResponse.FromString,
                )
        self.Update = channel.unary_unary(
                '/api.v1.ClusterService/Update',
                request_serializer=api_dot_v1_dot_cluster__pb2.ClusterServiceUpdateRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_cluster__pb2.ClusterServiceUpdateResponse.FromString,
                )
        self.GetCredentials = channel.unary_unary(
                '/api.v1.ClusterService/GetCredentials',
                request_serializer=api_dot_v1_dot_cluster__pb2.ClusterServiceGetCredentialsRequest.SerializeToString,
                response_deserializer=api_dot_v1_dot_cluster__pb2.ClusterServiceGetCredentialsResponse.FromString,
                )


class ClusterServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Create(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Get(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def List(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def WatchStatus(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Delete(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Update(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetCredentials(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ClusterServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Create': grpc.unary_unary_rpc_method_handler(
                    servicer.Create,
                    request_deserializer=api_dot_v1_dot_cluster__pb2.ClusterServiceCreateRequest.FromString,
                    response_serializer=api_dot_v1_dot_cluster__pb2.ClusterServiceCreateResponse.SerializeToString,
            ),
            'Get': grpc.unary_unary_rpc_method_handler(
                    servicer.Get,
                    request_deserializer=api_dot_v1_dot_cluster__pb2.ClusterServiceGetRequest.FromString,
                    response_serializer=api_dot_v1_dot_cluster__pb2.ClusterServiceGetResponse.SerializeToString,
            ),
            'List': grpc.unary_unary_rpc_method_handler(
                    servicer.List,
                    request_deserializer=api_dot_v1_dot_cluster__pb2.ClusterServiceListRequest.FromString,
                    response_serializer=api_dot_v1_dot_cluster__pb2.ClusterServiceListResponse.SerializeToString,
            ),
            'WatchStatus': grpc.unary_stream_rpc_method_handler(
                    servicer.WatchStatus,
                    request_deserializer=api_dot_v1_dot_cluster__pb2.ClusterServiceWatchStatusRequest.FromString,
                    response_serializer=api_dot_v1_dot_cluster__pb2.ClusterServiceWatchStatusResponse.SerializeToString,
            ),
            'Delete': grpc.unary_unary_rpc_method_handler(
                    servicer.Delete,
                    request_deserializer=api_dot_v1_dot_cluster__pb2.ClusterServiceDeleteRequest.FromString,
                    response_serializer=api_dot_v1_dot_cluster__pb2.ClusterServiceDeleteResponse.SerializeToString,
            ),
            'Update': grpc.unary_unary_rpc_method_handler(
                    servicer.Update,
                    request_deserializer=api_dot_v1_dot_cluster__pb2.ClusterServiceUpdateRequest.FromString,
                    response_serializer=api_dot_v1_dot_cluster__pb2.ClusterServiceUpdateResponse.SerializeToString,
            ),
            'GetCredentials': grpc.unary_unary_rpc_method_handler(
                    servicer.GetCredentials,
                    request_deserializer=api_dot_v1_dot_cluster__pb2.ClusterServiceGetCredentialsRequest.FromString,
                    response_serializer=api_dot_v1_dot_cluster__pb2.ClusterServiceGetCredentialsResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'api.v1.ClusterService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ClusterService(object):
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
        return grpc.experimental.unary_unary(request, target, '/api.v1.ClusterService/Create',
            api_dot_v1_dot_cluster__pb2.ClusterServiceCreateRequest.SerializeToString,
            api_dot_v1_dot_cluster__pb2.ClusterServiceCreateResponse.FromString,
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
        return grpc.experimental.unary_unary(request, target, '/api.v1.ClusterService/Get',
            api_dot_v1_dot_cluster__pb2.ClusterServiceGetRequest.SerializeToString,
            api_dot_v1_dot_cluster__pb2.ClusterServiceGetResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

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
        return grpc.experimental.unary_unary(request, target, '/api.v1.ClusterService/List',
            api_dot_v1_dot_cluster__pb2.ClusterServiceListRequest.SerializeToString,
            api_dot_v1_dot_cluster__pb2.ClusterServiceListResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def WatchStatus(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/api.v1.ClusterService/WatchStatus',
            api_dot_v1_dot_cluster__pb2.ClusterServiceWatchStatusRequest.SerializeToString,
            api_dot_v1_dot_cluster__pb2.ClusterServiceWatchStatusResponse.FromString,
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
        return grpc.experimental.unary_unary(request, target, '/api.v1.ClusterService/Delete',
            api_dot_v1_dot_cluster__pb2.ClusterServiceDeleteRequest.SerializeToString,
            api_dot_v1_dot_cluster__pb2.ClusterServiceDeleteResponse.FromString,
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
        return grpc.experimental.unary_unary(request, target, '/api.v1.ClusterService/Update',
            api_dot_v1_dot_cluster__pb2.ClusterServiceUpdateRequest.SerializeToString,
            api_dot_v1_dot_cluster__pb2.ClusterServiceUpdateResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetCredentials(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.v1.ClusterService/GetCredentials',
            api_dot_v1_dot_cluster__pb2.ClusterServiceGetCredentialsRequest.SerializeToString,
            api_dot_v1_dot_cluster__pb2.ClusterServiceGetCredentialsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
