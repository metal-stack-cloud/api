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

var validate_validate_pb = require('../../validate/validate_pb.js')
const proto = {};
proto.api = {};
proto.api.v1 = require('./ip_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.v1.IPServiceClient =
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
proto.api.v1.IPServicePromiseClient =
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
 *   !proto.api.v1.IPServiceGetRequest,
 *   !proto.api.v1.IPServiceGetResponse>}
 */
const methodDescriptor_IPService_Get = new grpc.web.MethodDescriptor(
  '/api.v1.IPService/Get',
  grpc.web.MethodType.UNARY,
  proto.api.v1.IPServiceGetRequest,
  proto.api.v1.IPServiceGetResponse,
  /**
   * @param {!proto.api.v1.IPServiceGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.IPServiceGetResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.IPServiceGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.IPServiceGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.IPServiceGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.IPServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.IPService/Get',
      request,
      metadata || {},
      methodDescriptor_IPService_Get,
      callback);
};


/**
 * @param {!proto.api.v1.IPServiceGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.IPServiceGetResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.IPServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.IPService/Get',
      request,
      metadata || {},
      methodDescriptor_IPService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.IPServiceAllocateRequest,
 *   !proto.api.v1.IPServiceAllocateResponse>}
 */
const methodDescriptor_IPService_Allocate = new grpc.web.MethodDescriptor(
  '/api.v1.IPService/Allocate',
  grpc.web.MethodType.UNARY,
  proto.api.v1.IPServiceAllocateRequest,
  proto.api.v1.IPServiceAllocateResponse,
  /**
   * @param {!proto.api.v1.IPServiceAllocateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.IPServiceAllocateResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.IPServiceAllocateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.IPServiceAllocateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.IPServiceAllocateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.IPServiceClient.prototype.allocate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.IPService/Allocate',
      request,
      metadata || {},
      methodDescriptor_IPService_Allocate,
      callback);
};


/**
 * @param {!proto.api.v1.IPServiceAllocateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.IPServiceAllocateResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.IPServicePromiseClient.prototype.allocate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.IPService/Allocate',
      request,
      metadata || {},
      methodDescriptor_IPService_Allocate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.IPServiceStaticRequest,
 *   !proto.api.v1.IPServiceStaticResponse>}
 */
const methodDescriptor_IPService_Static = new grpc.web.MethodDescriptor(
  '/api.v1.IPService/Static',
  grpc.web.MethodType.UNARY,
  proto.api.v1.IPServiceStaticRequest,
  proto.api.v1.IPServiceStaticResponse,
  /**
   * @param {!proto.api.v1.IPServiceStaticRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.IPServiceStaticResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.IPServiceStaticRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.IPServiceStaticResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.IPServiceStaticResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.IPServiceClient.prototype.static =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.IPService/Static',
      request,
      metadata || {},
      methodDescriptor_IPService_Static,
      callback);
};


/**
 * @param {!proto.api.v1.IPServiceStaticRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.IPServiceStaticResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.IPServicePromiseClient.prototype.static =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.IPService/Static',
      request,
      metadata || {},
      methodDescriptor_IPService_Static);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.IPServiceListRequest,
 *   !proto.api.v1.IPServiceListResponse>}
 */
const methodDescriptor_IPService_List = new grpc.web.MethodDescriptor(
  '/api.v1.IPService/List',
  grpc.web.MethodType.UNARY,
  proto.api.v1.IPServiceListRequest,
  proto.api.v1.IPServiceListResponse,
  /**
   * @param {!proto.api.v1.IPServiceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.IPServiceListResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.IPServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.IPServiceListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.IPServiceListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.IPServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.IPService/List',
      request,
      metadata || {},
      methodDescriptor_IPService_List,
      callback);
};


/**
 * @param {!proto.api.v1.IPServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.IPServiceListResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.IPServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.IPService/List',
      request,
      metadata || {},
      methodDescriptor_IPService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.IPServiceDeleteRequest,
 *   !proto.api.v1.IPServiceDeleteResponse>}
 */
const methodDescriptor_IPService_Delete = new grpc.web.MethodDescriptor(
  '/api.v1.IPService/Delete',
  grpc.web.MethodType.UNARY,
  proto.api.v1.IPServiceDeleteRequest,
  proto.api.v1.IPServiceDeleteResponse,
  /**
   * @param {!proto.api.v1.IPServiceDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.IPServiceDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.IPServiceDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.IPServiceDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.IPServiceDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.IPServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.IPService/Delete',
      request,
      metadata || {},
      methodDescriptor_IPService_Delete,
      callback);
};


/**
 * @param {!proto.api.v1.IPServiceDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.IPServiceDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.IPServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.IPService/Delete',
      request,
      metadata || {},
      methodDescriptor_IPService_Delete);
};


module.exports = proto.api.v1;

