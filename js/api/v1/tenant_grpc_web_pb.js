/**
 * @fileoverview gRPC-Web generated client stub for api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var api_v1_common_pb = require('../../api/v1/common_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.api = {};
proto.api.v1 = require('./tenant_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.v1.TenantServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.v1.TenantServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.TenantServiceCreateRequest,
 *   !proto.api.v1.TenantServiceCreateResponse>}
 */
const methodDescriptor_TenantService_Create = new grpc.web.MethodDescriptor(
  '/api.v1.TenantService/Create',
  grpc.web.MethodType.UNARY,
  proto.api.v1.TenantServiceCreateRequest,
  proto.api.v1.TenantServiceCreateResponse,
  /**
   * @param {!proto.api.v1.TenantServiceCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.TenantServiceCreateResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.TenantServiceCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.TenantServiceCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.TenantServiceCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.TenantServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.TenantService/Create',
      request,
      metadata || {},
      methodDescriptor_TenantService_Create,
      callback);
};


/**
 * @param {!proto.api.v1.TenantServiceCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.TenantServiceCreateResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.TenantServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.TenantService/Create',
      request,
      metadata || {},
      methodDescriptor_TenantService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.TenantServiceCreateOrUpdateRequest,
 *   !proto.api.v1.TenantServiceCreateOrUpdateResponse>}
 */
const methodDescriptor_TenantService_CreateOrUpdate = new grpc.web.MethodDescriptor(
  '/api.v1.TenantService/CreateOrUpdate',
  grpc.web.MethodType.UNARY,
  proto.api.v1.TenantServiceCreateOrUpdateRequest,
  proto.api.v1.TenantServiceCreateOrUpdateResponse,
  /**
   * @param {!proto.api.v1.TenantServiceCreateOrUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.TenantServiceCreateOrUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.TenantServiceCreateOrUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.TenantServiceCreateOrUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.TenantServiceCreateOrUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.TenantServiceClient.prototype.createOrUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.TenantService/CreateOrUpdate',
      request,
      metadata || {},
      methodDescriptor_TenantService_CreateOrUpdate,
      callback);
};


/**
 * @param {!proto.api.v1.TenantServiceCreateOrUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.TenantServiceCreateOrUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.TenantServicePromiseClient.prototype.createOrUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.TenantService/CreateOrUpdate',
      request,
      metadata || {},
      methodDescriptor_TenantService_CreateOrUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.TenantServiceGetRequest,
 *   !proto.api.v1.TenantServiceGetResponse>}
 */
const methodDescriptor_TenantService_Get = new grpc.web.MethodDescriptor(
  '/api.v1.TenantService/Get',
  grpc.web.MethodType.UNARY,
  proto.api.v1.TenantServiceGetRequest,
  proto.api.v1.TenantServiceGetResponse,
  /**
   * @param {!proto.api.v1.TenantServiceGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.TenantServiceGetResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.TenantServiceGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.TenantServiceGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.TenantServiceGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.TenantServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.TenantService/Get',
      request,
      metadata || {},
      methodDescriptor_TenantService_Get,
      callback);
};


/**
 * @param {!proto.api.v1.TenantServiceGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.TenantServiceGetResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.TenantServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.TenantService/Get',
      request,
      metadata || {},
      methodDescriptor_TenantService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.TenantServiceUpdateRequest,
 *   !proto.api.v1.TenantServiceUpdateResponse>}
 */
const methodDescriptor_TenantService_Update = new grpc.web.MethodDescriptor(
  '/api.v1.TenantService/Update',
  grpc.web.MethodType.UNARY,
  proto.api.v1.TenantServiceUpdateRequest,
  proto.api.v1.TenantServiceUpdateResponse,
  /**
   * @param {!proto.api.v1.TenantServiceUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.TenantServiceUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.TenantServiceUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.TenantServiceUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.TenantServiceUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.TenantServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.TenantService/Update',
      request,
      metadata || {},
      methodDescriptor_TenantService_Update,
      callback);
};


/**
 * @param {!proto.api.v1.TenantServiceUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.TenantServiceUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.TenantServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.TenantService/Update',
      request,
      metadata || {},
      methodDescriptor_TenantService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.TenantServiceDeleteRequest,
 *   !proto.api.v1.TenantServiceDeleteResponse>}
 */
const methodDescriptor_TenantService_Delete = new grpc.web.MethodDescriptor(
  '/api.v1.TenantService/Delete',
  grpc.web.MethodType.UNARY,
  proto.api.v1.TenantServiceDeleteRequest,
  proto.api.v1.TenantServiceDeleteResponse,
  /**
   * @param {!proto.api.v1.TenantServiceDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.TenantServiceDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.TenantServiceDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.TenantServiceDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.TenantServiceDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.TenantServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.TenantService/Delete',
      request,
      metadata || {},
      methodDescriptor_TenantService_Delete,
      callback);
};


/**
 * @param {!proto.api.v1.TenantServiceDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.TenantServiceDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.TenantServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.TenantService/Delete',
      request,
      metadata || {},
      methodDescriptor_TenantService_Delete);
};


module.exports = proto.api.v1;

