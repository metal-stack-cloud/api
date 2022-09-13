import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class MessageServiceListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageServiceListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MessageServiceListRequest): MessageServiceListRequest.AsObject;
  static serializeBinaryToWriter(message: MessageServiceListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageServiceListRequest;
  static deserializeBinaryFromReader(message: MessageServiceListRequest, reader: jspb.BinaryReader): MessageServiceListRequest;
}

export namespace MessageServiceListRequest {
  export type AsObject = {
  }
}

export class MessageServiceListResponse extends jspb.Message {
  getItemsList(): Array<Message>;
  setItemsList(value: Array<Message>): MessageServiceListResponse;
  clearItemsList(): MessageServiceListResponse;
  addItems(value?: Message, index?: number): Message;

  getPinnedItemsList(): Array<Message>;
  setPinnedItemsList(value: Array<Message>): MessageServiceListResponse;
  clearPinnedItemsList(): MessageServiceListResponse;
  addPinnedItems(value?: Message, index?: number): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageServiceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MessageServiceListResponse): MessageServiceListResponse.AsObject;
  static serializeBinaryToWriter(message: MessageServiceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageServiceListResponse;
  static deserializeBinaryFromReader(message: MessageServiceListResponse, reader: jspb.BinaryReader): MessageServiceListResponse;
}

export namespace MessageServiceListResponse {
  export type AsObject = {
    itemsList: Array<Message.AsObject>,
    pinnedItemsList: Array<Message.AsObject>,
  }
}

export class Message extends jspb.Message {
  getId(): string;
  setId(value: string): Message;

  getText(): string;
  setText(value: string): Message;

  getKind(): MessageKind;
  setKind(value: MessageKind): Message;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Message;
  hasTimestamp(): boolean;
  clearTimestamp(): Message;

  getRepliesList(): Array<ReplyMessage>;
  setRepliesList(value: Array<ReplyMessage>): Message;
  clearRepliesList(): Message;
  addReplies(value?: ReplyMessage, index?: number): ReplyMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: string,
    text: string,
    kind: MessageKind,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    repliesList: Array<ReplyMessage.AsObject>,
  }
}

export class ReplyMessage extends jspb.Message {
  getId(): string;
  setId(value: string): ReplyMessage;

  getText(): string;
  setText(value: string): ReplyMessage;

  getKind(): MessageKind;
  setKind(value: MessageKind): ReplyMessage;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ReplyMessage;
  hasTimestamp(): boolean;
  clearTimestamp(): ReplyMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplyMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ReplyMessage): ReplyMessage.AsObject;
  static serializeBinaryToWriter(message: ReplyMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplyMessage;
  static deserializeBinaryFromReader(message: ReplyMessage, reader: jspb.BinaryReader): ReplyMessage;
}

export namespace ReplyMessage {
  export type AsObject = {
    id: string,
    text: string,
    kind: MessageKind,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export enum MessageKind { 
  MESSAGE_KIND_UNSPECIFIED = 0,
  MESSAGE_KIND_INFO = 1,
  MESSAGE_KIND_INCIDENT = 2,
  MESSAGE_KIND_CHANGE = 3,
  MESSAGE_KIND_RESOLVED = 4,
  MESSAGE_KIND_UPDATE = 5,
}
