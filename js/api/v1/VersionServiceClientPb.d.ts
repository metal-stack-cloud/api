/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as api_v1_version_pb from '../../api/v1/version_pb';
export declare class VersionServiceClient {
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
    get(request: api_v1_version_pb.VersionServiceGetRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_version_pb.VersionServiceGetResponse>;
    get(request: api_v1_version_pb.VersionServiceGetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_version_pb.VersionServiceGetResponse) => void): grpcWeb.ClientReadableStream<api_v1_version_pb.VersionServiceGetResponse>;
}
