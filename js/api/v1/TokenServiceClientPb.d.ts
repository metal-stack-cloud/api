/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as api_v1_token_pb from '../../api/v1/token_pb';
export declare class TokenServiceClient {
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
    create(request: api_v1_token_pb.TokenServiceCreateRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_token_pb.TokenServiceCreateResponse>;
    create(request: api_v1_token_pb.TokenServiceCreateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_token_pb.TokenServiceCreateResponse) => void): grpcWeb.ClientReadableStream<api_v1_token_pb.TokenServiceCreateResponse>;
}
