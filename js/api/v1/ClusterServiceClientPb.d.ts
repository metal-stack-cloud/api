/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as api_v1_cluster_pb from '../../api/v1/cluster_pb';
export declare class ClusterServiceClient {
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
    methodDescriptorCreate: any;
    create(request: api_v1_cluster_pb.ClusterServiceCreateRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_cluster_pb.ClusterServiceCreateResponse>;
    create(request: api_v1_cluster_pb.ClusterServiceCreateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_cluster_pb.ClusterServiceCreateResponse) => void): grpcWeb.ClientReadableStream<api_v1_cluster_pb.ClusterServiceCreateResponse>;
    methodDescriptorGet: any;
    get(request: api_v1_cluster_pb.ClusterServiceGetRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_cluster_pb.ClusterServiceGetResponse>;
    get(request: api_v1_cluster_pb.ClusterServiceGetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_cluster_pb.ClusterServiceGetResponse) => void): grpcWeb.ClientReadableStream<api_v1_cluster_pb.ClusterServiceGetResponse>;
    methodDescriptorList: any;
    list(request: api_v1_cluster_pb.ClusterServiceListRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_cluster_pb.ClusterServiceListResponse>;
    list(request: api_v1_cluster_pb.ClusterServiceListRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_cluster_pb.ClusterServiceListResponse) => void): grpcWeb.ClientReadableStream<api_v1_cluster_pb.ClusterServiceListResponse>;
    methodDescriptorWatchStatus: any;
    watchStatus(request: api_v1_cluster_pb.ClusterServiceWatchStatusRequest, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<api_v1_cluster_pb.ClusterServiceWatchStatusResponse>;
    methodDescriptorDelete: any;
    delete(request: api_v1_cluster_pb.ClusterServiceDeleteRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_cluster_pb.ClusterServiceDeleteResponse>;
    delete(request: api_v1_cluster_pb.ClusterServiceDeleteRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_cluster_pb.ClusterServiceDeleteResponse) => void): grpcWeb.ClientReadableStream<api_v1_cluster_pb.ClusterServiceDeleteResponse>;
    methodDescriptorUpdate: any;
    update(request: api_v1_cluster_pb.ClusterServiceUpdateRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_cluster_pb.ClusterServiceUpdateResponse>;
    update(request: api_v1_cluster_pb.ClusterServiceUpdateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_cluster_pb.ClusterServiceUpdateResponse) => void): grpcWeb.ClientReadableStream<api_v1_cluster_pb.ClusterServiceUpdateResponse>;
    methodDescriptorGetCredentials: any;
    getCredentials(request: api_v1_cluster_pb.ClusterServiceGetCredentialsRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_cluster_pb.ClusterServiceGetCredentialsResponse>;
    getCredentials(request: api_v1_cluster_pb.ClusterServiceGetCredentialsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_cluster_pb.ClusterServiceGetCredentialsResponse) => void): grpcWeb.ClientReadableStream<api_v1_cluster_pb.ClusterServiceGetCredentialsResponse>;
}
