/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as api_v1_tenant_pb from '../../api/v1/tenant_pb';
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
    methodDescriptorCreate: any;
    create(request: api_v1_tenant_pb.TenantServiceCreateRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_tenant_pb.TenantServiceCreateResponse>;
    create(request: api_v1_tenant_pb.TenantServiceCreateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_tenant_pb.TenantServiceCreateResponse) => void): grpcWeb.ClientReadableStream<api_v1_tenant_pb.TenantServiceCreateResponse>;
    methodDescriptorCreateOrUpdate: any;
    createOrUpdate(request: api_v1_tenant_pb.TenantServiceCreateOrUpdateRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_tenant_pb.TenantServiceCreateOrUpdateResponse>;
    createOrUpdate(request: api_v1_tenant_pb.TenantServiceCreateOrUpdateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_tenant_pb.TenantServiceCreateOrUpdateResponse) => void): grpcWeb.ClientReadableStream<api_v1_tenant_pb.TenantServiceCreateOrUpdateResponse>;
    methodDescriptorGet: any;
    get(request: api_v1_tenant_pb.TenantServiceGetRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_tenant_pb.TenantServiceGetResponse>;
    get(request: api_v1_tenant_pb.TenantServiceGetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_tenant_pb.TenantServiceGetResponse) => void): grpcWeb.ClientReadableStream<api_v1_tenant_pb.TenantServiceGetResponse>;
    methodDescriptorUpdate: any;
    update(request: api_v1_tenant_pb.TenantServiceUpdateRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_tenant_pb.TenantServiceUpdateResponse>;
    update(request: api_v1_tenant_pb.TenantServiceUpdateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_tenant_pb.TenantServiceUpdateResponse) => void): grpcWeb.ClientReadableStream<api_v1_tenant_pb.TenantServiceUpdateResponse>;
    methodDescriptorDelete: any;
    delete(request: api_v1_tenant_pb.TenantServiceDeleteRequest, metadata: grpcWeb.Metadata | null): Promise<api_v1_tenant_pb.TenantServiceDeleteResponse>;
    delete(request: api_v1_tenant_pb.TenantServiceDeleteRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: api_v1_tenant_pb.TenantServiceDeleteResponse) => void): grpcWeb.ClientReadableStream<api_v1_tenant_pb.TenantServiceDeleteResponse>;
}
