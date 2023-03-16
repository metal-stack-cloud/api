"use strict";
// @generated by protoc-gen-es v1.1.1 with parameter "target=ts"
// @generated from file status/v1/message.proto (package status.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyMessage = exports.Message = exports.MessageServiceListResponse = exports.MessageServiceListRequest = exports.MessageKind = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from enum status.v1.MessageKind
 */
var MessageKind;
(function (MessageKind) {
    /**
     * @generated from enum value: MESSAGE_KIND_UNSPECIFIED = 0;
     */
    MessageKind[MessageKind["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: MESSAGE_KIND_INFO = 1;
     */
    MessageKind[MessageKind["INFO"] = 1] = "INFO";
    /**
     * @generated from enum value: MESSAGE_KIND_INCIDENT = 2;
     */
    MessageKind[MessageKind["INCIDENT"] = 2] = "INCIDENT";
    /**
     * @generated from enum value: MESSAGE_KIND_CHANGE = 3;
     */
    MessageKind[MessageKind["CHANGE"] = 3] = "CHANGE";
    /**
     * @generated from enum value: MESSAGE_KIND_RESOLVED = 4;
     */
    MessageKind[MessageKind["RESOLVED"] = 4] = "RESOLVED";
    /**
     * @generated from enum value: MESSAGE_KIND_UPDATE = 5;
     */
    MessageKind[MessageKind["UPDATE"] = 5] = "UPDATE";
})(MessageKind = exports.MessageKind || (exports.MessageKind = {}));
// Retrieve enum metadata with: proto3.getEnumType(MessageKind)
protobuf_1.proto3.util.setEnumType(MessageKind, "status.v1.MessageKind", [
    { no: 0, name: "MESSAGE_KIND_UNSPECIFIED" },
    { no: 1, name: "MESSAGE_KIND_INFO" },
    { no: 2, name: "MESSAGE_KIND_INCIDENT" },
    { no: 3, name: "MESSAGE_KIND_CHANGE" },
    { no: 4, name: "MESSAGE_KIND_RESOLVED" },
    { no: 5, name: "MESSAGE_KIND_UPDATE" },
]);
/**
 * @generated from message status.v1.MessageServiceListRequest
 */
class MessageServiceListRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MessageServiceListRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MessageServiceListRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MessageServiceListRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MessageServiceListRequest, a, b);
    }
}
exports.MessageServiceListRequest = MessageServiceListRequest;
MessageServiceListRequest.runtime = protobuf_1.proto3;
MessageServiceListRequest.typeName = "status.v1.MessageServiceListRequest";
MessageServiceListRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * @generated from message status.v1.MessageServiceListResponse
 */
class MessageServiceListResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated status.v1.Message items = 1;
         */
        this.items = [];
        /**
         * @generated from field: repeated status.v1.Message pinned_items = 2;
         */
        this.pinnedItems = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MessageServiceListResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MessageServiceListResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MessageServiceListResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MessageServiceListResponse, a, b);
    }
}
exports.MessageServiceListResponse = MessageServiceListResponse;
MessageServiceListResponse.runtime = protobuf_1.proto3;
MessageServiceListResponse.typeName = "status.v1.MessageServiceListResponse";
MessageServiceListResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "items", kind: "message", T: Message, repeated: true },
    { no: 2, name: "pinned_items", kind: "message", T: Message, repeated: true },
]);
/**
 * @generated from message status.v1.Message
 */
class Message extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * @generated from field: string text = 2;
         */
        this.text = "";
        /**
         * @generated from field: status.v1.MessageKind kind = 3;
         */
        this.kind = MessageKind.UNSPECIFIED;
        /**
         * @generated from field: repeated status.v1.ReplyMessage replies = 5;
         */
        this.replies = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Message().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Message().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Message().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Message, a, b);
    }
}
exports.Message = Message;
Message.runtime = protobuf_1.proto3;
Message.typeName = "status.v1.Message";
Message.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "kind", kind: "enum", T: protobuf_1.proto3.getEnumType(MessageKind) },
    { no: 4, name: "timestamp", kind: "message", T: protobuf_1.Timestamp },
    { no: 5, name: "replies", kind: "message", T: ReplyMessage, repeated: true },
]);
/**
 * @generated from message status.v1.ReplyMessage
 */
class ReplyMessage extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * @generated from field: string text = 2;
         */
        this.text = "";
        /**
         * @generated from field: status.v1.MessageKind kind = 3;
         */
        this.kind = MessageKind.UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ReplyMessage().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ReplyMessage().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ReplyMessage().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ReplyMessage, a, b);
    }
}
exports.ReplyMessage = ReplyMessage;
ReplyMessage.runtime = protobuf_1.proto3;
ReplyMessage.typeName = "status.v1.ReplyMessage";
ReplyMessage.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "kind", kind: "enum", T: protobuf_1.proto3.getEnumType(MessageKind) },
    { no: 4, name: "timestamp", kind: "message", T: protobuf_1.Timestamp },
]);
