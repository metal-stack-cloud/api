/**
 * @fileoverview gRPC-Web generated client stub for admin.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as admin_v1_tenant_pb from '../../admin/v1/tenant_pb';
export declare class TenantServiceClient {
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
    list(request: admin_v1_tenant_pb.TenantServiceListRequest, metadata: grpcWeb.Metadata | null): Promise<admin_v1_tenant_pb.TenantServiceListResponse>;
    list(request: admin_v1_tenant_pb.TenantServiceListRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: admin_v1_tenant_pb.TenantServiceListResponse) => void): grpcWeb.ClientReadableStream<admin_v1_tenant_pb.TenantServiceListResponse>;
    methodDescriptorAdmit: any;
    admit(request: admin_v1_tenant_pb.TenantServiceAdmitRequest, metadata: grpcWeb.Metadata | null): Promise<admin_v1_tenant_pb.TenantServiceAdmitResponse>;
    admit(request: admin_v1_tenant_pb.TenantServiceAdmitRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: admin_v1_tenant_pb.TenantServiceAdmitResponse) => void): grpcWeb.ClientReadableStream<admin_v1_tenant_pb.TenantServiceAdmitResponse>;
}
