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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.status = {};
proto.status.v1 = require('./message_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.status.v1.MessageServiceClient =
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
proto.status.v1.MessageServicePromiseClient =
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
 *   !proto.status.v1.MessageServiceListRequest,
 *   !proto.status.v1.MessageServiceListResponse>}
 */
const methodDescriptor_MessageService_List = new grpc.web.MethodDescriptor(
  '/status.v1.MessageService/List',
  grpc.web.MethodType.UNARY,
  proto.status.v1.MessageServiceListRequest,
  proto.status.v1.MessageServiceListResponse,
  /**
   * @param {!proto.status.v1.MessageServiceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.status.v1.MessageServiceListResponse.deserializeBinary
);


/**
 * @param {!proto.status.v1.MessageServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.status.v1.MessageServiceListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.status.v1.MessageServiceListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.status.v1.MessageServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/status.v1.MessageService/List',
      request,
      metadata || {},
      methodDescriptor_MessageService_List,
      callback);
};


/**
 * @param {!proto.status.v1.MessageServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.status.v1.MessageServiceListResponse>}
 *     Promise that resolves to the response
 */
proto.status.v1.MessageServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/status.v1.MessageService/List',
      request,
      metadata || {},
      methodDescriptor_MessageService_List);
};


module.exports = proto.status.v1;
