/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as api_v1_ip_pb from '../../api/v1/ip_pb';
export declare class IPServiceClient {
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
    get(request: api_v1_ip_pb.IPServiceGetRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_ip_pb.IPServiceGetResponse>;
    get(request: api_v1_ip_pb.IPServiceGetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_ip_pb.IPServiceGetResponse) => void): grpcWeb.ClientReadableStream<api_v1_ip_pb.IPServiceGetResponse>;
    methodDescriptorAllocate: any;
    allocate(request: api_v1_ip_pb.IPServiceAllocateRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_ip_pb.IPServiceAllocateResponse>;
    allocate(request: api_v1_ip_pb.IPServiceAllocateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_ip_pb.IPServiceAllocateResponse) => void): grpcWeb.ClientReadableStream<api_v1_ip_pb.IPServiceAllocateResponse>;
    methodDescriptorStatic: any;
    static(request: api_v1_ip_pb.IPServiceStaticRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_ip_pb.IPServiceStaticResponse>;
    static(request: api_v1_ip_pb.IPServiceStaticRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_ip_pb.IPServiceStaticResponse) => void): grpcWeb.ClientReadableStream<api_v1_ip_pb.IPServiceStaticResponse>;
    methodDescriptorList: any;
    list(request: api_v1_ip_pb.IPServiceListRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_ip_pb.IPServiceListResponse>;
    list(request: api_v1_ip_pb.IPServiceListRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_ip_pb.IPServiceListResponse) => void): grpcWeb.ClientReadableStream<api_v1_ip_pb.IPServiceListResponse>;
    methodDescriptorDelete: any;
    delete(request: api_v1_ip_pb.IPServiceDeleteRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_ip_pb.IPServiceDeleteResponse>;
    delete(request: api_v1_ip_pb.IPServiceDeleteRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_ip_pb.IPServiceDeleteResponse) => void): grpcWeb.ClientReadableStream<api_v1_ip_pb.IPServiceDeleteResponse>;
}
