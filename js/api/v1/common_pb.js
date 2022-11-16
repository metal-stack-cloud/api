// source: api/v1/common.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.api.v1.AdminRole', null, global);
goog.exportSymbol('proto.api.v1.OAuthProvider', null, global);
goog.exportSymbol('proto.api.v1.Paging', null, global);
goog.exportSymbol('proto.api.v1.ProjectRole', null, global);
goog.exportSymbol('proto.api.v1.Role', null, global);
goog.exportSymbol('proto.api.v1.TenantRole', null, global);
goog.exportSymbol('proto.api.v1.Visibility', null, global);
goog.exportSymbol('proto.api.v1.adminRolesList', null, global);
goog.exportSymbol('proto.api.v1.projectRolesList', null, global);
goog.exportSymbol('proto.api.v1.tenantRolesList', null, global);
goog.exportSymbol('proto.api.v1.visibility', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1.Paging = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1.Paging, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1.Paging.displayName = 'proto.api.v1.Paging';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1.Paging.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1.Paging.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1.Paging} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1.Paging.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: jspb.Message.getFieldWithDefault(msg, 1, 0),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1.Paging}
 */
proto.api.v1.Paging.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1.Paging;
  return proto.api.v1.Paging.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1.Paging} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1.Paging}
 */
proto.api.v1.Paging.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1.Paging.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1.Paging.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1.Paging} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1.Paging.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 page = 1;
 * @return {number}
 */
proto.api.v1.Paging.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1.Paging} returns this
 */
proto.api.v1.Paging.prototype.setPage = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1.Paging} returns this
 */
proto.api.v1.Paging.prototype.clearPage = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1.Paging.prototype.hasPage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 count = 2;
 * @return {number}
 */
proto.api.v1.Paging.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1.Paging} returns this
 */
proto.api.v1.Paging.prototype.setCount = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1.Paging} returns this
 */
proto.api.v1.Paging.prototype.clearCount = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1.Paging.prototype.hasCount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * @enum {number}
 */
proto.api.v1.OAuthProvider = {
  O_AUTH_PROVIDER_UNSPECIFIED: 0,
  O_AUTH_PROVIDER_GITHUB: 1,
  O_AUTH_PROVIDER_AZURE: 2
};

/**
 * @enum {number}
 */
proto.api.v1.Role = {
  ROLE_UNSPECIFIED: 0,
  ROLE_MEMBER: 1,
  ROLE_MAINTAINER: 2,
  ROLE_ADMIN: 3,
  ROLE_OWNER: 4
};

/**
 * @enum {number}
 */
proto.api.v1.TenantRole = {
  TENANT_ROLE_UNSPECIFIED: 0,
  TENANT_ROLE_OWNER: 1,
  TENANT_ROLE_EDITOR: 2,
  TENANT_ROLE_VIEWER: 3
};

/**
 * @enum {number}
 */
proto.api.v1.ProjectRole = {
  PROJECT_ROLE_UNSPECIFIED: 0,
  PROJECT_ROLE_OWNER: 1,
  PROJECT_ROLE_EDITOR: 2,
  PROJECT_ROLE_VIEWER: 3
};

/**
 * @enum {number}
 */
proto.api.v1.AdminRole = {
  ADMIN_ROLE_UNSPECIFIED: 0,
  ADMIN_ROLE_EDITOR: 1,
  ADMIN_ROLE_VIEWER: 2
};

/**
 * @enum {number}
 */
proto.api.v1.Visibility = {
  VISIBILITY_UNSPECIFIED: 0,
  VISIBILITY_ANY: 1
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `tenantRolesList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.api.v1.TenantRole>>}
 */
proto.api.v1.tenantRolesList = new jspb.ExtensionFieldInfo(
    51000,
    {tenantRolesList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[51000] = new jspb.ExtensionFieldBinaryInfo(
    proto.api.v1.tenantRolesList,
    jspb.BinaryReader.prototype.readPackedEnum,
    jspb.BinaryWriter.prototype.writePackedEnum,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[51000] = proto.api.v1.tenantRolesList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `projectRolesList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.api.v1.ProjectRole>>}
 */
proto.api.v1.projectRolesList = new jspb.ExtensionFieldInfo(
    51001,
    {projectRolesList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[51001] = new jspb.ExtensionFieldBinaryInfo(
    proto.api.v1.projectRolesList,
    jspb.BinaryReader.prototype.readPackedEnum,
    jspb.BinaryWriter.prototype.writePackedEnum,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[51001] = proto.api.v1.projectRolesList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `adminRolesList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.api.v1.AdminRole>>}
 */
proto.api.v1.adminRolesList = new jspb.ExtensionFieldInfo(
    51002,
    {adminRolesList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[51002] = new jspb.ExtensionFieldBinaryInfo(
    proto.api.v1.adminRolesList,
    jspb.BinaryReader.prototype.readPackedEnum,
    jspb.BinaryWriter.prototype.writePackedEnum,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[51002] = proto.api.v1.adminRolesList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `visibility`.
 * @type {!jspb.ExtensionFieldInfo<!proto.api.v1.Visibility>}
 */
proto.api.v1.visibility = new jspb.ExtensionFieldInfo(
    51003,
    {visibility: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[51003] = new jspb.ExtensionFieldBinaryInfo(
    proto.api.v1.visibility,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[51003] = proto.api.v1.visibility;

goog.object.extend(exports, proto.api.v1);
