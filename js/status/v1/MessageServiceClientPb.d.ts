/**
 * @fileoverview gRPC-Web generated client stub for status.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as status_v1_message_pb from '../../status/v1/message_pb';
export declare class MessageServiceClient {
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
    list(request: status_v1_message_pb.MessageServiceListRequest, metadata: grpcWeb.Metadata | null): Promise<status_v1_message_pb.MessageServiceListResponse>;
    list(request: status_v1_message_pb.MessageServiceListRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: status_v1_message_pb.MessageServiceListResponse) => void): grpcWeb.ClientReadableStream<status_v1_message_pb.MessageServiceListResponse>;
}
