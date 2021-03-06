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

var validate_validate_pb = require('../../validate/validate_pb.js')
const proto = {};
proto.api = {};
proto.api.v1 = require('./payment_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.v1.PaymentServiceClient =
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
proto.api.v1.PaymentServicePromiseClient =
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
 *   !proto.api.v1.PaymentServiceCreateOrUpdateCustomerRequest,
 *   !proto.api.v1.PaymentServiceCreateOrUpdateCustomerResponse>}
 */
const methodDescriptor_PaymentService_CreateOrUpdateCustomer = new grpc.web.MethodDescriptor(
  '/api.v1.PaymentService/CreateOrUpdateCustomer',
  grpc.web.MethodType.UNARY,
  proto.api.v1.PaymentServiceCreateOrUpdateCustomerRequest,
  proto.api.v1.PaymentServiceCreateOrUpdateCustomerResponse,
  /**
   * @param {!proto.api.v1.PaymentServiceCreateOrUpdateCustomerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.PaymentServiceCreateOrUpdateCustomerResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.PaymentServiceCreateOrUpdateCustomerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.PaymentServiceCreateOrUpdateCustomerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.PaymentServiceCreateOrUpdateCustomerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.PaymentServiceClient.prototype.createOrUpdateCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.PaymentService/CreateOrUpdateCustomer',
      request,
      metadata || {},
      methodDescriptor_PaymentService_CreateOrUpdateCustomer,
      callback);
};


/**
 * @param {!proto.api.v1.PaymentServiceCreateOrUpdateCustomerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.PaymentServiceCreateOrUpdateCustomerResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.PaymentServicePromiseClient.prototype.createOrUpdateCustomer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.PaymentService/CreateOrUpdateCustomer',
      request,
      metadata || {},
      methodDescriptor_PaymentService_CreateOrUpdateCustomer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.PaymentServiceGetCustomerRequest,
 *   !proto.api.v1.PaymentServiceGetCustomerResponse>}
 */
const methodDescriptor_PaymentService_GetCustomer = new grpc.web.MethodDescriptor(
  '/api.v1.PaymentService/GetCustomer',
  grpc.web.MethodType.UNARY,
  proto.api.v1.PaymentServiceGetCustomerRequest,
  proto.api.v1.PaymentServiceGetCustomerResponse,
  /**
   * @param {!proto.api.v1.PaymentServiceGetCustomerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.PaymentServiceGetCustomerResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.PaymentServiceGetCustomerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.PaymentServiceGetCustomerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.PaymentServiceGetCustomerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.PaymentServiceClient.prototype.getCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.PaymentService/GetCustomer',
      request,
      metadata || {},
      methodDescriptor_PaymentService_GetCustomer,
      callback);
};


/**
 * @param {!proto.api.v1.PaymentServiceGetCustomerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.PaymentServiceGetCustomerResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.PaymentServicePromiseClient.prototype.getCustomer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.PaymentService/GetCustomer',
      request,
      metadata || {},
      methodDescriptor_PaymentService_GetCustomer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.PaymentServiceGetCustomerWithLoginRequest,
 *   !proto.api.v1.PaymentServiceGetCustomerWithLoginResponse>}
 */
const methodDescriptor_PaymentService_GetCustomerWithLogin = new grpc.web.MethodDescriptor(
  '/api.v1.PaymentService/GetCustomerWithLogin',
  grpc.web.MethodType.UNARY,
  proto.api.v1.PaymentServiceGetCustomerWithLoginRequest,
  proto.api.v1.PaymentServiceGetCustomerWithLoginResponse,
  /**
   * @param {!proto.api.v1.PaymentServiceGetCustomerWithLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.PaymentServiceGetCustomerWithLoginResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.PaymentServiceGetCustomerWithLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.PaymentServiceGetCustomerWithLoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.PaymentServiceGetCustomerWithLoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.PaymentServiceClient.prototype.getCustomerWithLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.PaymentService/GetCustomerWithLogin',
      request,
      metadata || {},
      methodDescriptor_PaymentService_GetCustomerWithLogin,
      callback);
};


/**
 * @param {!proto.api.v1.PaymentServiceGetCustomerWithLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.PaymentServiceGetCustomerWithLoginResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.PaymentServicePromiseClient.prototype.getCustomerWithLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.PaymentService/GetCustomerWithLogin',
      request,
      metadata || {},
      methodDescriptor_PaymentService_GetCustomerWithLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.PaymentServiceCheckIfCustomerExistsRequest,
 *   !proto.api.v1.PaymentServiceCheckIfCustomerExistsResponse>}
 */
const methodDescriptor_PaymentService_CheckIfCustomerExists = new grpc.web.MethodDescriptor(
  '/api.v1.PaymentService/CheckIfCustomerExists',
  grpc.web.MethodType.UNARY,
  proto.api.v1.PaymentServiceCheckIfCustomerExistsRequest,
  proto.api.v1.PaymentServiceCheckIfCustomerExistsResponse,
  /**
   * @param {!proto.api.v1.PaymentServiceCheckIfCustomerExistsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.PaymentServiceCheckIfCustomerExistsResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.PaymentServiceCheckIfCustomerExistsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.PaymentServiceCheckIfCustomerExistsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.PaymentServiceCheckIfCustomerExistsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.PaymentServiceClient.prototype.checkIfCustomerExists =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.PaymentService/CheckIfCustomerExists',
      request,
      metadata || {},
      methodDescriptor_PaymentService_CheckIfCustomerExists,
      callback);
};


/**
 * @param {!proto.api.v1.PaymentServiceCheckIfCustomerExistsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.PaymentServiceCheckIfCustomerExistsResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.PaymentServicePromiseClient.prototype.checkIfCustomerExists =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.PaymentService/CheckIfCustomerExists',
      request,
      metadata || {},
      methodDescriptor_PaymentService_CheckIfCustomerExists);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.PaymentServiceHasPaymentMethodRequest,
 *   !proto.api.v1.PaymentServiceHasPaymentMethodResponse>}
 */
const methodDescriptor_PaymentService_HasPaymentMethod = new grpc.web.MethodDescriptor(
  '/api.v1.PaymentService/HasPaymentMethod',
  grpc.web.MethodType.UNARY,
  proto.api.v1.PaymentServiceHasPaymentMethodRequest,
  proto.api.v1.PaymentServiceHasPaymentMethodResponse,
  /**
   * @param {!proto.api.v1.PaymentServiceHasPaymentMethodRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.PaymentServiceHasPaymentMethodResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.PaymentServiceHasPaymentMethodRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.PaymentServiceHasPaymentMethodResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.PaymentServiceHasPaymentMethodResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.PaymentServiceClient.prototype.hasPaymentMethod =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.PaymentService/HasPaymentMethod',
      request,
      metadata || {},
      methodDescriptor_PaymentService_HasPaymentMethod,
      callback);
};


/**
 * @param {!proto.api.v1.PaymentServiceHasPaymentMethodRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.PaymentServiceHasPaymentMethodResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.PaymentServicePromiseClient.prototype.hasPaymentMethod =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.PaymentService/HasPaymentMethod',
      request,
      metadata || {},
      methodDescriptor_PaymentService_HasPaymentMethod);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.v1.PaymentServiceDeletePaymentMethodRequest,
 *   !proto.api.v1.PaymentServiceDeletePaymentMethodResponse>}
 */
const methodDescriptor_PaymentService_DeletePaymentMethod = new grpc.web.MethodDescriptor(
  '/api.v1.PaymentService/DeletePaymentMethod',
  grpc.web.MethodType.UNARY,
  proto.api.v1.PaymentServiceDeletePaymentMethodRequest,
  proto.api.v1.PaymentServiceDeletePaymentMethodResponse,
  /**
   * @param {!proto.api.v1.PaymentServiceDeletePaymentMethodRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.v1.PaymentServiceDeletePaymentMethodResponse.deserializeBinary
);


/**
 * @param {!proto.api.v1.PaymentServiceDeletePaymentMethodRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.v1.PaymentServiceDeletePaymentMethodResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.v1.PaymentServiceDeletePaymentMethodResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.v1.PaymentServiceClient.prototype.deletePaymentMethod =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.v1.PaymentService/DeletePaymentMethod',
      request,
      metadata || {},
      methodDescriptor_PaymentService_DeletePaymentMethod,
      callback);
};


/**
 * @param {!proto.api.v1.PaymentServiceDeletePaymentMethodRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.v1.PaymentServiceDeletePaymentMethodResponse>}
 *     Promise that resolves to the response
 */
proto.api.v1.PaymentServicePromiseClient.prototype.deletePaymentMethod =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.v1.PaymentService/DeletePaymentMethod',
      request,
      metadata || {},
      methodDescriptor_PaymentService_DeletePaymentMethod);
};


module.exports = proto.api.v1;

