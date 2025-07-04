import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message as Message$1 } from "@bufbuild/protobuf";
/**
 * Describes the file status/v1/message.proto.
 */
export declare const file_status_v1_message: GenFile;
/**
 * MessageServiceListRequest is the request payload to get the messages
 *
 * @generated from message status.v1.MessageServiceListRequest
 */
export type MessageServiceListRequest = Message$1<"status.v1.MessageServiceListRequest"> & {};
/**
 * Describes the message status.v1.MessageServiceListRequest.
 * Use `create(MessageServiceListRequestSchema)` to create a new message.
 */
export declare const MessageServiceListRequestSchema: GenMessage<MessageServiceListRequest>;
/**
 * MessageServiceListResponse is the response payload with the messages
 *
 * @generated from message status.v1.MessageServiceListResponse
 */
export type MessageServiceListResponse = Message$1<"status.v1.MessageServiceListResponse"> & {
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
};
/**
 * Describes the message status.v1.MessageServiceListResponse.
 * Use `create(MessageServiceListResponseSchema)` to create a new message.
 */
export declare const MessageServiceListResponseSchema: GenMessage<MessageServiceListResponse>;
/**
 * Message is a test message to be displayed in the status
 *
 * @generated from message status.v1.Message
 */
export type Message = Message$1<"status.v1.Message"> & {
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
};
/**
 * Describes the message status.v1.Message.
 * Use `create(MessageSchema)` to create a new message.
 */
export declare const MessageSchema: GenMessage<Message>;
/**
 * ReplyMessage is a message as a followup of a initial message
 *
 * @generated from message status.v1.ReplyMessage
 */
export type ReplyMessage = Message$1<"status.v1.ReplyMessage"> & {
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
};
/**
 * Describes the message status.v1.ReplyMessage.
 * Use `create(ReplyMessageSchema)` to create a new message.
 */
export declare const ReplyMessageSchema: GenMessage<ReplyMessage>;
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
 * Describes the enum status.v1.MessageKind.
 */
export declare const MessageKindSchema: GenEnum<MessageKind>;
/**
 * MessageService serves status message related functions
 * this service is used as backend for the status dashboard
 *
 * @generated from service status.v1.MessageService
 */
export declare const MessageService: GenService<{
    /**
     * List returns all messages of interest
     *
     * @generated from rpc status.v1.MessageService.List
     */
    list: {
        methodKind: "unary";
        input: typeof MessageServiceListRequestSchema;
        output: typeof MessageServiceListResponseSchema;
    };
}>;
