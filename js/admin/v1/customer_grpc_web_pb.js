/**
 * @fileoverview gRPC-Web generated client stub for admin.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var api_v1_common_pb = require('../../api/v1/common_pb.js')

var api_v1_payment_pb = require('../../api/v1/payment_pb.js')
const proto = {};
proto.admin = {};
proto.admin.v1 = require('./customer_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.admin.v1.CustomerServiceClient =
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
proto.admin.v1.CustomerServicePromiseClient =
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
 *   !proto.admin.v1.CustomerServiceListRequest,
 *   !proto.admin.v1.CustomerServiceListResponse>}
 */
const methodDescriptor_CustomerService_List = new grpc.web.MethodDescriptor(
  '/admin.v1.CustomerService/List',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.CustomerServiceListRequest,
  proto.admin.v1.CustomerServiceListResponse,
  /**
   * @param {!proto.admin.v1.CustomerServiceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.CustomerServiceListResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.CustomerServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.admin.v1.CustomerServiceListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.CustomerServiceListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.CustomerServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.CustomerService/List',
      request,
      metadata || {},
      methodDescriptor_CustomerService_List,
      callback);
};


/**
 * @param {!proto.admin.v1.CustomerServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.CustomerServiceListResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.CustomerServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.CustomerService/List',
      request,
      metadata || {},
      methodDescriptor_CustomerService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.CustomerServiceAdmitRequest,
 *   !proto.admin.v1.CustomerServiceAdmitResponse>}
 */
const methodDescriptor_CustomerService_Admit = new grpc.web.MethodDescriptor(
  '/admin.v1.CustomerService/Admit',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.CustomerServiceAdmitRequest,
  proto.admin.v1.CustomerServiceAdmitResponse,
  /**
   * @param {!proto.admin.v1.CustomerServiceAdmitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.CustomerServiceAdmitResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.CustomerServiceAdmitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.admin.v1.CustomerServiceAdmitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.CustomerServiceAdmitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.CustomerServiceClient.prototype.admit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.CustomerService/Admit',
      request,
      metadata || {},
      methodDescriptor_CustomerService_Admit,
      callback);
};


/**
 * @param {!proto.admin.v1.CustomerServiceAdmitRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.CustomerServiceAdmitResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.CustomerServicePromiseClient.prototype.admit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.CustomerService/Admit',
      request,
      metadata || {},
      methodDescriptor_CustomerService_Admit);
};


module.exports = proto.admin.v1;
