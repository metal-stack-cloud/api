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
goog.exportSymbol('proto.api.v1.ProjectRole', null, global);
goog.exportSymbol('proto.api.v1.Role', null, global);
goog.exportSymbol('proto.api.v1.TenantRole', null, global);
goog.exportSymbol('proto.api.v1.adminRolesList', null, global);
goog.exportSymbol('proto.api.v1.projectRolesList', null, global);
goog.exportSymbol('proto.api.v1.tenantRolesList', null, global);
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

goog.object.extend(exports, proto.api.v1);
