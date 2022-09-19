/**
 * @fileoverview gRPC-Web generated client stub for admin.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as admin_v1_customer_pb from '../../admin/v1/customer_pb';
export declare class CustomerServiceClient {
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
    list(request: admin_v1_customer_pb.CustomerServiceListRequest, metadata: grpcWeb.Metadata | null): Promise<admin_v1_customer_pb.CustomerServiceListResponse>;
    list(request: admin_v1_customer_pb.CustomerServiceListRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: admin_v1_customer_pb.CustomerServiceListResponse) => void): grpcWeb.ClientReadableStream<admin_v1_customer_pb.CustomerServiceListResponse>;
    methodDescriptorAdmit: any;
    admit(request: admin_v1_customer_pb.CustomerServiceAdmitRequest, metadata: grpcWeb.Metadata | null): Promise<admin_v1_customer_pb.CustomerServiceAdmitResponse>;
    admit(request: admin_v1_customer_pb.CustomerServiceAdmitRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: admin_v1_customer_pb.CustomerServiceAdmitResponse) => void): grpcWeb.ClientReadableStream<admin_v1_customer_pb.CustomerServiceAdmitResponse>;
}
