/**
 * @fileoverview gRPC-Web generated client stub for status.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var api_v1_health_pb = require('../../api/v1/health_pb.js')
const proto = {};
proto.status = {};
proto.status.v1 = require('./status_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.status.v1.StatusServiceClient =
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
proto.status.v1.StatusServicePromiseClient =
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
 *   !proto.status.v1.StatusServiceGetRequest,
 *   !proto.status.v1.StatusServiceGetResponse>}
 */
const methodDescriptor_StatusService_Get = new grpc.web.MethodDescriptor(
  '/status.v1.StatusService/Get',
  grpc.web.MethodType.UNARY,
  proto.status.v1.StatusServiceGetRequest,
  proto.status.v1.StatusServiceGetResponse,
  /**
   * @param {!proto.status.v1.StatusServiceGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.status.v1.StatusServiceGetResponse.deserializeBinary
);


/**
 * @param {!proto.status.v1.StatusServiceGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.status.v1.StatusServiceGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.status.v1.StatusServiceGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.status.v1.StatusServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/status.v1.StatusService/Get',
      request,
      metadata || {},
      methodDescriptor_StatusService_Get,
      callback);
};


/**
 * @param {!proto.status.v1.StatusServiceGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.status.v1.StatusServiceGetResponse>}
 *     Promise that resolves to the response
 */
proto.status.v1.StatusServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/status.v1.StatusService/Get',
      request,
      metadata || {},
      methodDescriptor_StatusService_Get);
};


module.exports = proto.status.v1;

