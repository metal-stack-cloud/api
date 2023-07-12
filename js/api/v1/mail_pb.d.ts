import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct } from "@bufbuild/protobuf";
/**
 * @generated from enum api.v1.MailType
 */
export declare enum MailType {
    /**
     * @generated from enum value: MAIL_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: MAIL_TYPE_ADMITTED = 1;
     */
    ADMITTED = 1,
    /**
     * @generated from enum value: MAIL_TYPE_COUPON_PERCENTAGE_USED_WARNING = 2;
     */
    COUPON_PERCENTAGE_USED_WARNING = 2,
    /**
     * @generated from enum value: MAIL_TYPE_COUPON_COMPLETELY_USED_WARNING = 3;
     */
    COUPON_COMPLETELY_USED_WARNING = 3,
    /**
     * @generated from enum value: MAIL_TYPE_PAYMENT_UPDATED = 4;
     */
    PAYMENT_UPDATED = 4,
    /**
     * @generated from enum value: MAIL_TYPE_ADMISSION_REQUESTED = 5;
     */
    ADMISSION_REQUESTED = 5,
    /**
     * @generated from enum value: MAIL_TYPE_WELCOME = 6;
     */
    WELCOME = 6
}
/**
 * @generated from message api.v1.Email
 */
export declare class Email extends Message<Email> {
    /**
     * @generated from field: repeated string to = 1;
     */
    to: string[];
    /**
     * @generated from field: optional string subject = 2;
     */
    subject?: string;
    /**
     * @generated from field: api.v1.MailType mail_type = 3;
     */
    mailType: MailType;
    /**
     * @generated from field: google.protobuf.Struct values = 4;
     */
    values?: Struct;
    /**
     * @generated from field: optional string msg = 5;
     */
    msg?: string;
    constructor(data?: PartialMessage<Email>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Email";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Email;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Email;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Email;
    static equals(a: Email | PlainMessage<Email> | undefined, b: Email | PlainMessage<Email> | undefined): boolean;
}
