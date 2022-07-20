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

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')
const proto = {};
proto.api = {};
proto.api.v1 = require('./token_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.v1.TokenServiceClient =
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
proto.api.v1.TokenServicePromiseClient =
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
 *   !proto.api.v1.TokenServiceCreateRequest,
 *   !proto.api.v1.TokenServiceCreateResponse>}
 */
const methodDescriptor_TokenService_Create = new grpc.web.MethodDescriptor(
  '/api.v1.TokenService/Create',
  grpc.web.MethodType.UNARY,
  proto.api.v1.TokenServiceCreateRequest,
  proto.api.v1.TokenServiceCreateResponse,
  /**
   * @param {!proto.api.v1.TokenServiceCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.TokenServiceCreateResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.TokenServiceCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.TokenServiceCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.TokenServiceCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.TokenServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.TokenService/Create',
      request,
      metadata || {},
      methodDescriptor_TokenService_Create,
      callback);
};


/**
 * @param {!proto.api.v1.TokenServiceCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.TokenServiceCreateResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.TokenServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.TokenService/Create',
      request,
      metadata || {},
      methodDescriptor_TokenService_Create);
};


module.exports = proto.api.v1;

