/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as api_v1_assets_pb from '../../api/v1/assets_pb';
export declare class AssetServiceClient {
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
    methodDescriptorList: any;
    list(request: api_v1_assets_pb.AssetServiceListRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_assets_pb.AssetServiceListResponse>;
    list(request: api_v1_assets_pb.AssetServiceListRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_assets_pb.AssetServiceListResponse) => void): grpcWeb.ClientReadableStream<api_v1_assets_pb.AssetServiceListResponse>;
}
