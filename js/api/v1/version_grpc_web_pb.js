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
proto.api.v1 = require('./version_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.v1.VersionServiceClient =
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
proto.api.v1.VersionServicePromiseClient =
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
 *   !proto.api.v1.VersionServiceGetRequest,
 *   !proto.api.v1.VersionServiceGetResponse>}
 */
const methodDescriptor_VersionService_Get = new grpc.web.MethodDescriptor(
  '/api.v1.VersionService/Get',
  grpc.web.MethodType.UNARY,
  proto.api.v1.VersionServiceGetRequest,
  proto.api.v1.VersionServiceGetResponse,
  /**
   * @param {!proto.api.v1.VersionServiceGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.VersionServiceGetResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.VersionServiceGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.VersionServiceGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.VersionServiceGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.VersionServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.VersionService/Get',
      request,
      metadata || {},
      methodDescriptor_VersionService_Get,
      callback);
};


/**
 * @param {!proto.api.v1.VersionServiceGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.VersionServiceGetResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.VersionServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.VersionService/Get',
      request,
      metadata || {},
      methodDescriptor_VersionService_Get);
};


module.exports = proto.api.v1;

