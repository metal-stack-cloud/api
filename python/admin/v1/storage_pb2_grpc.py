# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from admin.v1 import storage_pb2 as admin_dot_v1_dot_storage__pb2


class StorageServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ClusterInfo = channel.unary_unary(
                '/admin.v1.StorageService/ClusterInfo',
                request_serializer=admin_dot_v1_dot_storage__pb2.StorageServiceClusterInfoRequest.SerializeToString,
                response_deserializer=admin_dot_v1_dot_storage__pb2.StorageServiceClusterInfoResponse.FromString,
                )
        self.ListVolumes = channel.unary_unary(
                '/admin.v1.StorageService/ListVolumes',
                request_serializer=admin_dot_v1_dot_storage__pb2.StorageServiceListVolumesRequest.SerializeToString,
                response_deserializer=admin_dot_v1_dot_storage__pb2.StorageServiceListVolumesResponse.FromString,
                )
        self.ListSnapshots = channel.unary_unary(
                '/admin.v1.StorageService/ListSnapshots',
                request_serializer=admin_dot_v1_dot_storage__pb2.StorageServiceListSnapshotsRequest.SerializeToString,
                response_deserializer=admin_dot_v1_dot_storage__pb2.StorageServiceListSnapshotsResponse.FromString,
                )


class StorageServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ClusterInfo(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListVolumes(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListSnapshots(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_StorageServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ClusterInfo': grpc.unary_unary_rpc_method_handler(
                    servicer.ClusterInfo,
                    request_deserializer=admin_dot_v1_dot_storage__pb2.StorageServiceClusterInfoRequest.FromString,
                    response_serializer=admin_dot_v1_dot_storage__pb2.StorageServiceClusterInfoResponse.SerializeToString,
            ),
            'ListVolumes': grpc.unary_unary_rpc_method_handler(
                    servicer.ListVolumes,
                    request_deserializer=admin_dot_v1_dot_storage__pb2.StorageServiceListVolumesRequest.FromString,
                    response_serializer=admin_dot_v1_dot_storage__pb2.StorageServiceListVolumesResponse.SerializeToString,
            ),
            'ListSnapshots': grpc.unary_unary_rpc_method_handler(
                    servicer.ListSnapshots,
                    request_deserializer=admin_dot_v1_dot_storage__pb2.StorageServiceListSnapshotsRequest.FromString,
                    response_serializer=admin_dot_v1_dot_storage__pb2.StorageServiceListSnapshotsResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'admin.v1.StorageService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class StorageService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ClusterInfo(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/admin.v1.StorageService/ClusterInfo',
            admin_dot_v1_dot_storage__pb2.StorageServiceClusterInfoRequest.SerializeToString,
            admin_dot_v1_dot_storage__pb2.StorageServiceClusterInfoResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ListVolumes(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/admin.v1.StorageService/ListVolumes',
            admin_dot_v1_dot_storage__pb2.StorageServiceListVolumesRequest.SerializeToString,
            admin_dot_v1_dot_storage__pb2.StorageServiceListVolumesResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ListSnapshots(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/admin.v1.StorageService/ListSnapshots',
            admin_dot_v1_dot_storage__pb2.StorageServiceListSnapshotsRequest.SerializeToString,
            admin_dot_v1_dot_storage__pb2.StorageServiceListSnapshotsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
