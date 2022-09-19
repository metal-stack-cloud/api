/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as api_v1_volume_pb from '../../api/v1/volume_pb';
export declare class VolumeServiceClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorGet: any;
    get(request: api_v1_volume_pb.VolumeServiceGetRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_volume_pb.VolumeServiceGetResponse>;
    get(request: api_v1_volume_pb.VolumeServiceGetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_volume_pb.VolumeServiceGetResponse) => void): grpcWeb.ClientReadableStream<api_v1_volume_pb.VolumeServiceGetResponse>;
    methodDescriptorList: any;
    list(request: api_v1_volume_pb.VolumeServiceListRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_volume_pb.VolumeServiceListResponse>;
    list(request: api_v1_volume_pb.VolumeServiceListRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_volume_pb.VolumeServiceListResponse) => void): grpcWeb.ClientReadableStream<api_v1_volume_pb.VolumeServiceListResponse>;
    methodDescriptorDelete: any;
    delete(request: api_v1_volume_pb.VolumeServiceDeleteRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_volume_pb.VolumeServiceDeleteResponse>;
    delete(request: api_v1_volume_pb.VolumeServiceDeleteRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_volume_pb.VolumeServiceDeleteResponse) => void): grpcWeb.ClientReadableStream<api_v1_volume_pb.VolumeServiceDeleteResponse>;
}
