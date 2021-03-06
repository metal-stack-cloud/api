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

const proto = {};
proto.api = {};
proto.api.v1 = require('./health_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.v1.HealthServiceClient =
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
proto.api.v1.HealthServicePromiseClient =
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
 *   !proto.api.v1.HealthServiceGetRequest,
 *   !proto.api.v1.HealthServiceGetResponse>}
 */
const methodDescriptor_HealthService_Get = new grpc.web.MethodDescriptor(
  '/api.v1.HealthService/Get',
  grpc.web.MethodType.UNARY,
  proto.api.v1.HealthServiceGetRequest,
  proto.api.v1.HealthServiceGetResponse,
  /**
   * @param {!proto.api.v1.HealthServiceGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.HealthServiceGetResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.HealthServiceGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.HealthServiceGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.HealthServiceGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.HealthServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.HealthService/Get',
      request,
      metadata || {},
      methodDescriptor_HealthService_Get,
      callback);
};


/**
 * @param {!proto.api.v1.HealthServiceGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.HealthServiceGetResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.HealthServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.HealthService/Get',
      request,
      metadata || {},
      methodDescriptor_HealthService_Get);
};


module.exports = proto.api.v1;

