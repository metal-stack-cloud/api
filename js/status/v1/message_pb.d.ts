import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message as Message$1, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from enum status.v1.MessageKind
 */
export declare enum MessageKind {
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
    UPDATE = 5
}
/**
 * @generated from message status.v1.MessageServiceListRequest
 */
export declare class MessageServiceListRequest extends Message$1<MessageServiceListRequest> {
    constructor(data?: PartialMessage<MessageServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "status.v1.MessageServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessageServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessageServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessageServiceListRequest;
    static equals(a: MessageServiceListRequest | PlainMessage<MessageServiceListRequest> | undefined, b: MessageServiceListRequest | PlainMessage<MessageServiceListRequest> | undefined): boolean;
}
/**
 * @generated from message status.v1.MessageServiceListResponse
 */
export declare class MessageServiceListResponse extends Message$1<MessageServiceListResponse> {
    /**
     * @generated from field: repeated status.v1.Message items = 1;
     */
    items: Message[];
    /**
     * @generated from field: repeated status.v1.Message pinned_items = 2;
     */
    pinnedItems: Message[];
    constructor(data?: PartialMessage<MessageServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "status.v1.MessageServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessageServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessageServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessageServiceListResponse;
    static equals(a: MessageServiceListResponse | PlainMessage<MessageServiceListResponse> | undefined, b: MessageServiceListResponse | PlainMessage<MessageServiceListResponse> | undefined): boolean;
}
/**
 * @generated from message status.v1.Message
 */
export declare class Message extends Message$1<Message> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string text = 2;
     */
    text: string;
    /**
     * @generated from field: status.v1.MessageKind kind = 3;
     */
    kind: MessageKind;
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 4;
     */
    timestamp?: Timestamp;
    /**
     * @generated from field: repeated status.v1.ReplyMessage replies = 5;
     */
    replies: ReplyMessage[];
    constructor(data?: PartialMessage<Message>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "status.v1.Message";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Message;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Message;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Message;
    static equals(a: Message | PlainMessage<Message> | undefined, b: Message | PlainMessage<Message> | undefined): boolean;
}
/**
 * @generated from message status.v1.ReplyMessage
 */
export declare class ReplyMessage extends Message$1<ReplyMessage> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string text = 2;
     */
    text: string;
    /**
     * @generated from field: status.v1.MessageKind kind = 3;
     */
    kind: MessageKind;
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 4;
     */
    timestamp?: Timestamp;
    constructor(data?: PartialMessage<ReplyMessage>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "status.v1.ReplyMessage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplyMessage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplyMessage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplyMessage;
    static equals(a: ReplyMessage | PlainMessage<ReplyMessage> | undefined, b: ReplyMessage | PlainMessage<ReplyMessage> | undefined): boolean;
}
