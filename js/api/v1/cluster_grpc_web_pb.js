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
proto.api.v1 = require('./cluster_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.v1.ClusterServiceClient =
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
proto.api.v1.ClusterServicePromiseClient =
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
 *   !proto.api.v1.ClusterServiceCreateRequest,
 *   !proto.api.v1.ClusterServiceCreateResponse>}
 */
const methodDescriptor_ClusterService_Create = new grpc.web.MethodDescriptor(
  '/api.v1.ClusterService/Create',
  grpc.web.MethodType.UNARY,
  proto.api.v1.ClusterServiceCreateRequest,
  proto.api.v1.ClusterServiceCreateResponse,
  /**
   * @param {!proto.api.v1.ClusterServiceCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.ClusterServiceCreateResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.ClusterServiceCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.ClusterServiceCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.ClusterServiceCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.ClusterServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.ClusterService/Create',
      request,
      metadata || {},
      methodDescriptor_ClusterService_Create,
      callback);
};


/**
 * @param {!proto.api.v1.ClusterServiceCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.ClusterServiceCreateResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.ClusterServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.ClusterService/Create',
      request,
      metadata || {},
      methodDescriptor_ClusterService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.ClusterServiceGetRequest,
 *   !proto.api.v1.ClusterServiceGetResponse>}
 */
const methodDescriptor_ClusterService_Get = new grpc.web.MethodDescriptor(
  '/api.v1.ClusterService/Get',
  grpc.web.MethodType.UNARY,
  proto.api.v1.ClusterServiceGetRequest,
  proto.api.v1.ClusterServiceGetResponse,
  /**
   * @param {!proto.api.v1.ClusterServiceGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.ClusterServiceGetResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.ClusterServiceGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.ClusterServiceGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.ClusterServiceGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.ClusterServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.ClusterService/Get',
      request,
      metadata || {},
      methodDescriptor_ClusterService_Get,
      callback);
};


/**
 * @param {!proto.api.v1.ClusterServiceGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.ClusterServiceGetResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.ClusterServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.ClusterService/Get',
      request,
      metadata || {},
      methodDescriptor_ClusterService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.ClusterServiceListRequest,
 *   !proto.api.v1.ClusterServiceListResponse>}
 */
const methodDescriptor_ClusterService_List = new grpc.web.MethodDescriptor(
  '/api.v1.ClusterService/List',
  grpc.web.MethodType.UNARY,
  proto.api.v1.ClusterServiceListRequest,
  proto.api.v1.ClusterServiceListResponse,
  /**
   * @param {!proto.api.v1.ClusterServiceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.ClusterServiceListResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.ClusterServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.ClusterServiceListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.ClusterServiceListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.ClusterServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.ClusterService/List',
      request,
      metadata || {},
      methodDescriptor_ClusterService_List,
      callback);
};


/**
 * @param {!proto.api.v1.ClusterServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.ClusterServiceListResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.ClusterServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.ClusterService/List',
      request,
      metadata || {},
      methodDescriptor_ClusterService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.ClusterServiceWatchStatusRequest,
 *   !proto.api.v1.ClusterServiceWatchStatusResponse>}
 */
const methodDescriptor_ClusterService_WatchStatus = new grpc.web.MethodDescriptor(
  '/api.v1.ClusterService/WatchStatus',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.api.v1.ClusterServiceWatchStatusRequest,
  proto.api.v1.ClusterServiceWatchStatusResponse,
  /**
   * @param {!proto.api.v1.ClusterServiceWatchStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.ClusterServiceWatchStatusResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.ClusterServiceWatchStatusRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.ClusterServiceWatchStatusResponse>}
 *     The XHR Node Readable Stream
 */
proto.api.v1.ClusterServiceClient.prototype.watchStatus =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.v1.ClusterService/WatchStatus',
      request,
      metadata || {},
      methodDescriptor_ClusterService_WatchStatus);
};


/**
 * @param {!proto.api.v1.ClusterServiceWatchStatusRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.ClusterServiceWatchStatusResponse>}
 *     The XHR Node Readable Stream
 */
proto.api.v1.ClusterServicePromiseClient.prototype.watchStatus =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.v1.ClusterService/WatchStatus',
      request,
      metadata || {},
      methodDescriptor_ClusterService_WatchStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.ClusterServiceDeleteRequest,
 *   !proto.api.v1.ClusterServiceDeleteResponse>}
 */
const methodDescriptor_ClusterService_Delete = new grpc.web.MethodDescriptor(
  '/api.v1.ClusterService/Delete',
  grpc.web.MethodType.UNARY,
  proto.api.v1.ClusterServiceDeleteRequest,
  proto.api.v1.ClusterServiceDeleteResponse,
  /**
   * @param {!proto.api.v1.ClusterServiceDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.ClusterServiceDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.ClusterServiceDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.ClusterServiceDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.ClusterServiceDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.ClusterServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.ClusterService/Delete',
      request,
      metadata || {},
      methodDescriptor_ClusterService_Delete,
      callback);
};


/**
 * @param {!proto.api.v1.ClusterServiceDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.ClusterServiceDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.ClusterServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.ClusterService/Delete',
      request,
      metadata || {},
      methodDescriptor_ClusterService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.ClusterServiceUpdateRequest,
 *   !proto.api.v1.ClusterServiceUpdateResponse>}
 */
const methodDescriptor_ClusterService_Update = new grpc.web.MethodDescriptor(
  '/api.v1.ClusterService/Update',
  grpc.web.MethodType.UNARY,
  proto.api.v1.ClusterServiceUpdateRequest,
  proto.api.v1.ClusterServiceUpdateResponse,
  /**
   * @param {!proto.api.v1.ClusterServiceUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.ClusterServiceUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.ClusterServiceUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.ClusterServiceUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.ClusterServiceUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.ClusterServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.ClusterService/Update',
      request,
      metadata || {},
      methodDescriptor_ClusterService_Update,
      callback);
};


/**
 * @param {!proto.api.v1.ClusterServiceUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.ClusterServiceUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.ClusterServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.ClusterService/Update',
      request,
      metadata || {},
      methodDescriptor_ClusterService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.ClusterServiceGetCredentialsRequest,
 *   !proto.api.v1.ClusterServiceGetCredentialsResponse>}
 */
const methodDescriptor_ClusterService_GetCredentials = new grpc.web.MethodDescriptor(
  '/api.v1.ClusterService/GetCredentials',
  grpc.web.MethodType.UNARY,
  proto.api.v1.ClusterServiceGetCredentialsRequest,
  proto.api.v1.ClusterServiceGetCredentialsResponse,
  /**
   * @param {!proto.api.v1.ClusterServiceGetCredentialsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.ClusterServiceGetCredentialsResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.ClusterServiceGetCredentialsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.ClusterServiceGetCredentialsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.ClusterServiceGetCredentialsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.ClusterServiceClient.prototype.getCredentials =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.ClusterService/GetCredentials',
      request,
      metadata || {},
      methodDescriptor_ClusterService_GetCredentials,
      callback);
};


/**
 * @param {!proto.api.v1.ClusterServiceGetCredentialsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.ClusterServiceGetCredentialsResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.ClusterServicePromiseClient.prototype.getCredentials =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.ClusterService/GetCredentials',
      request,
      metadata || {},
      methodDescriptor_ClusterService_GetCredentials);
};


module.exports = proto.api.v1;

