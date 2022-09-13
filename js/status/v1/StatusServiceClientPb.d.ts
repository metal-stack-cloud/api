/**
 * @fileoverview gRPC-Web generated client stub for status.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as status_v1_status_pb from '../../status/v1/status_pb';
export declare class StatusServiceClient {
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
    get(request: status_v1_status_pb.StatusServiceGetRequest, metadata: grpcWeb.Metadata | null): Promise<status_v1_status_pb.StatusServiceGetResponse>;
    get(request: status_v1_status_pb.StatusServiceGetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: status_v1_status_pb.StatusServiceGetResponse) => void): grpcWeb.ClientReadableStream<status_v1_status_pb.StatusServiceGetResponse>;
}
