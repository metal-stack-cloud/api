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


var api_v1_user_pb = require('../../api/v1/user_pb.js')
const proto = {};
proto.admin = {};
proto.admin.v1 = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.admin.v1.UserServiceClient =
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
proto.admin.v1.UserServicePromiseClient =
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
 *   !proto.admin.v1.UserServiceListRequest,
 *   !proto.admin.v1.UserServiceListResponse>}
 */
const methodDescriptor_UserService_List = new grpc.web.MethodDescriptor(
  '/admin.v1.UserService/List',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.UserServiceListRequest,
  proto.admin.v1.UserServiceListResponse,
  /**
   * @param {!proto.admin.v1.UserServiceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.UserServiceListResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.UserServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.admin.v1.UserServiceListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.UserServiceListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.UserServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.UserService/List',
      request,
      metadata || {},
      methodDescriptor_UserService_List,
      callback);
};


/**
 * @param {!proto.admin.v1.UserServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.UserServiceListResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.UserServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.UserService/List',
      request,
      metadata || {},
      methodDescriptor_UserService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.UserServiceAdmitRequest,
 *   !proto.admin.v1.UserServiceAdmitResponse>}
 */
const methodDescriptor_UserService_Admit = new grpc.web.MethodDescriptor(
  '/admin.v1.UserService/Admit',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.UserServiceAdmitRequest,
  proto.admin.v1.UserServiceAdmitResponse,
  /**
   * @param {!proto.admin.v1.UserServiceAdmitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.UserServiceAdmitResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.UserServiceAdmitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.admin.v1.UserServiceAdmitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.UserServiceAdmitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.UserServiceClient.prototype.admit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.UserService/Admit',
      request,
      metadata || {},
      methodDescriptor_UserService_Admit,
      callback);
};


/**
 * @param {!proto.admin.v1.UserServiceAdmitRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.UserServiceAdmitResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.UserServicePromiseClient.prototype.admit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.UserService/Admit',
      request,
      metadata || {},
      methodDescriptor_UserService_Admit);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.admin.v1.OrganizationServiceClient =
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
proto.admin.v1.OrganizationServicePromiseClient =
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
 *   !proto.admin.v1.OrganizationServiceListRequest,
 *   !proto.admin.v1.OrganizationServiceListResponse>}
 */
const methodDescriptor_OrganizationService_List = new grpc.web.MethodDescriptor(
  '/admin.v1.OrganizationService/List',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.OrganizationServiceListRequest,
  proto.admin.v1.OrganizationServiceListResponse,
  /**
   * @param {!proto.admin.v1.OrganizationServiceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.OrganizationServiceListResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.OrganizationServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.admin.v1.OrganizationServiceListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.OrganizationServiceListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.OrganizationServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.OrganizationService/List',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_List,
      callback);
};


/**
 * @param {!proto.admin.v1.OrganizationServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.OrganizationServiceListResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.OrganizationServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.OrganizationService/List',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.OrganizationServiceAdmitRequest,
 *   !proto.admin.v1.OrganizationServiceAdmitResponse>}
 */
const methodDescriptor_OrganizationService_Admit = new grpc.web.MethodDescriptor(
  '/admin.v1.OrganizationService/Admit',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.OrganizationServiceAdmitRequest,
  proto.admin.v1.OrganizationServiceAdmitResponse,
  /**
   * @param {!proto.admin.v1.OrganizationServiceAdmitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.OrganizationServiceAdmitResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.OrganizationServiceAdmitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.admin.v1.OrganizationServiceAdmitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.OrganizationServiceAdmitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.OrganizationServiceClient.prototype.admit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.OrganizationService/Admit',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Admit,
      callback);
};


/**
 * @param {!proto.admin.v1.OrganizationServiceAdmitRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.OrganizationServiceAdmitResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.OrganizationServicePromiseClient.prototype.admit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.OrganizationService/Admit',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Admit);
};


module.exports = proto.admin.v1;

