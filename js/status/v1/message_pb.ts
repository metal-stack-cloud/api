// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file status/v1/message.proto (package status.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message as Message$1, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum status.v1.MessageKind
 */
export enum MessageKind {
  /**
   * @generated from enum value: MESSAGE_KIND_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: MESSAGE_KIND_INFO = 1;
   */
  INFO = 1,

  /**
   * @generated from enum value: MESSAGE_KIND_INCIDENT = 2;
   */
  INCIDENT = 2,

  /**
   * @generated from enum value: MESSAGE_KIND_CHANGE = 3;
   */
  CHANGE = 3,

  /**
   * @generated from enum value: MESSAGE_KIND_RESOLVED = 4;
   */
  RESOLVED = 4,

  /**
   * @generated from enum value: MESSAGE_KIND_UPDATE = 5;
   */
  UPDATE = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(MessageKind)
proto3.util.setEnumType(MessageKind, "status.v1.MessageKind", [
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
export class MessageServiceListRequest extends Message$1<MessageServiceListRequest> {
  constructor(data?: PartialMessage<MessageServiceListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "status.v1.MessageServiceListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessageServiceListRequest {
    return new MessageServiceListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessageServiceListRequest {
    return new MessageServiceListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessageServiceListRequest {
    return new MessageServiceListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MessageServiceListRequest | PlainMessage<MessageServiceListRequest> | undefined, b: MessageServiceListRequest | PlainMessage<MessageServiceListRequest> | undefined): boolean {
    return proto3.util.equals(MessageServiceListRequest, a, b);
  }
}

/**
 * @generated from message status.v1.MessageServiceListResponse
 */
export class MessageServiceListResponse extends Message$1<MessageServiceListResponse> {
  /**
   * @generated from field: repeated status.v1.Message items = 1;
   */
  items: Message[] = [];

  /**
   * @generated from field: repeated status.v1.Message pinned_items = 2;
   */
  pinnedItems: Message[] = [];

  constructor(data?: PartialMessage<MessageServiceListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "status.v1.MessageServiceListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "items", kind: "message", T: Message, repeated: true },
    { no: 2, name: "pinned_items", kind: "message", T: Message, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessageServiceListResponse {
    return new MessageServiceListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessageServiceListResponse {
    return new MessageServiceListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessageServiceListResponse {
    return new MessageServiceListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MessageServiceListResponse | PlainMessage<MessageServiceListResponse> | undefined, b: MessageServiceListResponse | PlainMessage<MessageServiceListResponse> | undefined): boolean {
    return proto3.util.equals(MessageServiceListResponse, a, b);
  }
}

/**
 * @generated from message status.v1.Message
 */
export class Message extends Message$1<Message> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string text = 2;
   */
  text = "";

  /**
   * @generated from field: status.v1.MessageKind kind = 3;
   */
  kind = MessageKind.UNSPECIFIED;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 4;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: repeated status.v1.ReplyMessage replies = 5;
   */
  replies: ReplyMessage[] = [];

  constructor(data?: PartialMessage<Message>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "status.v1.Message";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "kind", kind: "enum", T: proto3.getEnumType(MessageKind) },
    { no: 4, name: "timestamp", kind: "message", T: Timestamp },
    { no: 5, name: "replies", kind: "message", T: ReplyMessage, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Message {
    return new Message().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Message {
    return new Message().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Message {
    return new Message().fromJsonString(jsonString, options);
  }

  static equals(a: Message | PlainMessage<Message> | undefined, b: Message | PlainMessage<Message> | undefined): boolean {
    return proto3.util.equals(Message, a, b);
  }
}

/**
 * @generated from message status.v1.ReplyMessage
 */
export class ReplyMessage extends Message$1<ReplyMessage> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string text = 2;
   */
  text = "";

  /**
   * @generated from field: status.v1.MessageKind kind = 3;
   */
  kind = MessageKind.UNSPECIFIED;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 4;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<ReplyMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "status.v1.ReplyMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "kind", kind: "enum", T: proto3.getEnumType(MessageKind) },
    { no: 4, name: "timestamp", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplyMessage {
    return new ReplyMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplyMessage {
    return new ReplyMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplyMessage {
    return new ReplyMessage().fromJsonString(jsonString, options);
  }

  static equals(a: ReplyMessage | PlainMessage<ReplyMessage> | undefined, b: ReplyMessage | PlainMessage<ReplyMessage> | undefined): boolean {
    return proto3.util.equals(ReplyMessage, a, b);
  }
}

