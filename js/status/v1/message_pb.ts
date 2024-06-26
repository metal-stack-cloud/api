// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file status/v1/message.proto (package status.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message as Message$1, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * MessageKind defines what type of message it is
 *
 * @generated from enum status.v1.MessageKind
 */
export enum MessageKind {
  /**
   * MESSAGE_KIND_UNSPECIFIED is not specified
   *
   * @generated from enum value: MESSAGE_KIND_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * MESSAGE_KIND_INFO is a informational message
   *
   * @generated from enum value: MESSAGE_KIND_INFO = 1;
   */
  INFO = 1,

  /**
   * MESSAGE_KIND_INCIDENT is a incident message
   *
   * @generated from enum value: MESSAGE_KIND_INCIDENT = 2;
   */
  INCIDENT = 2,

  /**
   * MESSAGE_KIND_CHANGE is a change message
   *
   * @generated from enum value: MESSAGE_KIND_CHANGE = 3;
   */
  CHANGE = 3,

  /**
   * MESSAGE_KIND_RESOLVED is a resolved message
   *
   * @generated from enum value: MESSAGE_KIND_RESOLVED = 4;
   */
  RESOLVED = 4,

  /**
   * MESSAGE_KIND_UPDATE is a update message
   *
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
 * MessageServiceListRequest is the request payload to get the messages
 *
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
 * MessageServiceListResponse is the response payload with the messages
 *
 * @generated from message status.v1.MessageServiceListResponse
 */
export class MessageServiceListResponse extends Message$1<MessageServiceListResponse> {
  /**
   * Items is a slice of all messages
   *
   * @generated from field: repeated status.v1.Message items = 1;
   */
  items: Message[] = [];

  /**
   * PinnedItems are messages which are of special interest
   *
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
 * Message is a test message to be displayed in the status
 *
 * @generated from message status.v1.Message
 */
export class Message extends Message$1<Message> {
  /**
   * Id of the message
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * Text of the message
   *
   * @generated from field: string text = 2;
   */
  text = "";

  /**
   * Kind of the message, this is to distinguish between the importance of a message
   *
   * @generated from field: status.v1.MessageKind kind = 3;
   */
  kind = MessageKind.UNSPECIFIED;

  /**
   * Timestamp when this message was created
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 4;
   */
  timestamp?: Timestamp;

  /**
   * Replies are messages which are followups to the initial message
   *
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
 * ReplyMessage is a message as a followup of a initial message
 *
 * @generated from message status.v1.ReplyMessage
 */
export class ReplyMessage extends Message$1<ReplyMessage> {
  /**
   * Id of the message
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * Text of the message
   *
   * @generated from field: string text = 2;
   */
  text = "";

  /**
   * Kind of the message, this is to distinguish between the importance of a message
   *
   * @generated from field: status.v1.MessageKind kind = 3;
   */
  kind = MessageKind.UNSPECIFIED;

  /**
   * Timestamp when this message was created
   *
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

