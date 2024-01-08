import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message as Message$1, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * MessageKind defines what type of message it is
 *
 * @generated from enum status.v1.MessageKind
 */
export declare enum MessageKind {
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
    UPDATE = 5
}
/**
 * MessageServiceListRequest is the request payload to get the messages
 *
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
 * MessageServiceListResponse is the response payload with the messages
 *
 * @generated from message status.v1.MessageServiceListResponse
 */
export declare class MessageServiceListResponse extends Message$1<MessageServiceListResponse> {
    /**
     * Items is a slice of all messages
     *
     * @generated from field: repeated status.v1.Message items = 1;
     */
    items: Message[];
    /**
     * PinnedItems are messages which are of special interest
     *
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
 * Message is a test message to be displayed in the status
 *
 * @generated from message status.v1.Message
 */
export declare class Message extends Message$1<Message> {
    /**
     * Id of the message
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Text of the message
     *
     * @generated from field: string text = 2;
     */
    text: string;
    /**
     * Kind of the message, this is to distinguish between the importance of a message
     *
     * @generated from field: status.v1.MessageKind kind = 3;
     */
    kind: MessageKind;
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
 * ReplyMessage is a message as a followup of a initial message
 *
 * @generated from message status.v1.ReplyMessage
 */
export declare class ReplyMessage extends Message$1<ReplyMessage> {
    /**
     * Id of the message
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Text of the message
     *
     * @generated from field: string text = 2;
     */
    text: string;
    /**
     * Kind of the message, this is to distinguish between the importance of a message
     *
     * @generated from field: status.v1.MessageKind kind = 3;
     */
    kind: MessageKind;
    /**
     * Timestamp when this message was created
     *
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
