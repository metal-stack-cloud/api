/**
 * @fileoverview gRPC-Web generated client stub for admin.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as admin_v1_user_pb from '../../admin/v1/user_pb';
export declare class UserServiceClient {
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
    list(request: admin_v1_user_pb.UserServiceListRequest, metadata: grpcWeb.Metadata | null): Promise<admin_v1_user_pb.UserServiceListResponse>;
    list(request: admin_v1_user_pb.UserServiceListRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: admin_v1_user_pb.UserServiceListResponse) => void): grpcWeb.ClientReadableStream<admin_v1_user_pb.UserServiceListResponse>;
    methodDescriptorAdmit: any;
    admit(request: admin_v1_user_pb.UserServiceAdmitRequest, metadata: grpcWeb.Metadata | null): Promise<admin_v1_user_pb.UserServiceAdmitResponse>;
    admit(request: admin_v1_user_pb.UserServiceAdmitRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: admin_v1_user_pb.UserServiceAdmitResponse) => void): grpcWeb.ClientReadableStream<admin_v1_user_pb.UserServiceAdmitResponse>;
}
export declare class OrganizationServiceClient {
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
    list(request: admin_v1_user_pb.OrganizationServiceListRequest, metadata: grpcWeb.Metadata | null): Promise<admin_v1_user_pb.OrganizationServiceListResponse>;
    list(request: admin_v1_user_pb.OrganizationServiceListRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: admin_v1_user_pb.OrganizationServiceListResponse) => void): grpcWeb.ClientReadableStream<admin_v1_user_pb.OrganizationServiceListResponse>;
    methodDescriptorAdmit: any;
    admit(request: admin_v1_user_pb.OrganizationServiceAdmitRequest, metadata: grpcWeb.Metadata | null): Promise<admin_v1_user_pb.OrganizationServiceAdmitResponse>;
    admit(request: admin_v1_user_pb.OrganizationServiceAdmitRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: admin_v1_user_pb.OrganizationServiceAdmitResponse) => void): grpcWeb.ClientReadableStream<admin_v1_user_pb.OrganizationServiceAdmitResponse>;
}
