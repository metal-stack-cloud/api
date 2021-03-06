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
proto.api.v1 = require('./volume_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.v1.VolumeServiceClient =
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
proto.api.v1.VolumeServicePromiseClient =
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
 *   !proto.api.v1.VolumeServiceGetRequest,
 *   !proto.api.v1.VolumeServiceGetResponse>}
 */
const methodDescriptor_VolumeService_Get = new grpc.web.MethodDescriptor(
  '/api.v1.VolumeService/Get',
  grpc.web.MethodType.UNARY,
  proto.api.v1.VolumeServiceGetRequest,
  proto.api.v1.VolumeServiceGetResponse,
  /**
   * @param {!proto.api.v1.VolumeServiceGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.VolumeServiceGetResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.VolumeServiceGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.VolumeServiceGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.VolumeServiceGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.VolumeServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.VolumeService/Get',
      request,
      metadata || {},
      methodDescriptor_VolumeService_Get,
      callback);
};


/**
 * @param {!proto.api.v1.VolumeServiceGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.VolumeServiceGetResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.VolumeServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.VolumeService/Get',
      request,
      metadata || {},
      methodDescriptor_VolumeService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.VolumeServiceListRequest,
 *   !proto.api.v1.VolumeServiceListResponse>}
 */
const methodDescriptor_VolumeService_List = new grpc.web.MethodDescriptor(
  '/api.v1.VolumeService/List',
  grpc.web.MethodType.UNARY,
  proto.api.v1.VolumeServiceListRequest,
  proto.api.v1.VolumeServiceListResponse,
  /**
   * @param {!proto.api.v1.VolumeServiceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.VolumeServiceListResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.VolumeServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.VolumeServiceListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.VolumeServiceListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.VolumeServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.VolumeService/List',
      request,
      metadata || {},
      methodDescriptor_VolumeService_List,
      callback);
};


/**
 * @param {!proto.api.v1.VolumeServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.VolumeServiceListResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.VolumeServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.VolumeService/List',
      request,
      metadata || {},
      methodDescriptor_VolumeService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.VolumeServiceDeleteRequest,
 *   !proto.api.v1.VolumeServiceDeleteResponse>}
 */
const methodDescriptor_VolumeService_Delete = new grpc.web.MethodDescriptor(
  '/api.v1.VolumeService/Delete',
  grpc.web.MethodType.UNARY,
  proto.api.v1.VolumeServiceDeleteRequest,
  proto.api.v1.VolumeServiceDeleteResponse,
  /**
   * @param {!proto.api.v1.VolumeServiceDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.VolumeServiceDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.VolumeServiceDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.VolumeServiceDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.VolumeServiceDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.VolumeServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.VolumeService/Delete',
      request,
      metadata || {},
      methodDescriptor_VolumeService_Delete,
      callback);
};


/**
 * @param {!proto.api.v1.VolumeServiceDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.VolumeServiceDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.VolumeServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.VolumeService/Delete',
      request,
      metadata || {},
      methodDescriptor_VolumeService_Delete);
};


module.exports = proto.api.v1;

