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


var google_api_annotations_pb = require('../../google/api/annotations_pb.js')
const proto = {};
proto.api = {};
proto.api.v1 = require('./assets_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.v1.AssetServiceClient =
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
proto.api.v1.AssetServicePromiseClient =
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
 *   !proto.api.v1.AssetServiceListRequest,
 *   !proto.api.v1.AssetServiceListResponse>}
 */
const methodDescriptor_AssetService_List = new grpc.web.MethodDescriptor(
  '/api.v1.AssetService/List',
  grpc.web.MethodType.UNARY,
  proto.api.v1.AssetServiceListRequest,
  proto.api.v1.AssetServiceListResponse,
  /**
   * @param {!proto.api.v1.AssetServiceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.AssetServiceListResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.AssetServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.AssetServiceListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.AssetServiceListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.AssetServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.AssetService/List',
      request,
      metadata || {},
      methodDescriptor_AssetService_List,
      callback);
};


/**
 * @param {!proto.api.v1.AssetServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.AssetServiceListResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.AssetServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.AssetService/List',
      request,
      metadata || {},
      methodDescriptor_AssetService_List);
};


module.exports = proto.api.v1;

