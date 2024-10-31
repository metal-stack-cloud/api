import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct } from "@bufbuild/protobuf";
/**
 * MailType specifies the different mail types we send
 *
 * @generated from enum api.v1.MailType
 */
export declare enum MailType {
    /**
     * MAIL_TYPE_UNSPECIFIED the mail is unspecified
     *
     * @generated from enum value: MAIL_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * MAIL_TYPE_ADMITTED mail send to users when they are admitted
     *
     * @generated from enum value: MAIL_TYPE_ADMITTED = 1;
     */
    ADMITTED = 1,
    /**
     * MAIL_TYPE_COUPON_PERCENTAGE_USED_WARNING mail send to users when they used a certain amount of their coupon
     *
     * @generated from enum value: MAIL_TYPE_COUPON_PERCENTAGE_USED_WARNING = 2;
     */
    COUPON_PERCENTAGE_USED_WARNING = 2,
    /**
     * MAIL_TYPE_COUPON_COMPLETELY_USED_WARNING mail send to users when the used their coupon completely
     *
     * @generated from enum value: MAIL_TYPE_COUPON_COMPLETELY_USED_WARNING = 3;
     */
    COUPON_COMPLETELY_USED_WARNING = 3,
    /**
     * MAIL_TYPE_PAYMENT_UPDATED mail send to user when he updates the payment information
     *
     * @generated from enum value: MAIL_TYPE_PAYMENT_UPDATED = 4;
     */
    PAYMENT_UPDATED = 4,
    /**
     * MAIL_TYPE_ADMISSION_REQUESTED mail send to support if a user requests the admission
     *
     * @generated from enum value: MAIL_TYPE_ADMISSION_REQUESTED = 5;
     */
    ADMISSION_REQUESTED = 5,
    /**
     * MAIL_TYPE_WELCOME welcome mail if a user registers
     *
     * @generated from enum value: MAIL_TYPE_WELCOME = 6;
     */
    WELCOME = 6
}
/**
 * MailFunction specifies how a mail should be send
 *
 * @generated from enum api.v1.MailFunction
 */
export declare enum MailFunction {
    /**
     * MAIL_FUNCTION_UNSPECIFIED the function is unspecified
     *
     * @generated from enum value: MAIL_FUNCTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * MAIL_FUNCTION_SEND send a mail with a message from code
     *
     * @generated from enum value: MAIL_FUNCTION_SEND = 1;
     */
    SEND = 1,
    /**
     * MAIL_FUNCTION_SEND_TEMPLATE send a mail template
     *
     * @generated from enum value: MAIL_FUNCTION_SEND_TEMPLATE = 2;
     */
    SEND_TEMPLATE = 2,
    /**
     * MAIL_FUNCTION_NOTIFY send a mail to our support address
     *
     * @generated from enum value: MAIL_FUNCTION_NOTIFY = 3;
     */
    NOTIFY = 3
}
/**
 * Email is an email we can send from the api-server
 *
 * @generated from message api.v1.Email
 */
export declare class Email extends Message<Email> {
    /**
     * to is the destination email address(es)
     *
     * @generated from field: repeated string to = 1;
     */
    to: string[];
    /**
     * subject is the the title of the mail
     *
     * @generated from field: optional string subject = 2;
     */
    subject?: string;
    /**
     * mail_type is what mail is send
     *
     * @generated from field: api.v1.MailType mail_type = 3;
     */
    mailType: MailType;
    /**
     * values is used in templates
     *
     * @generated from field: google.protobuf.Struct values = 4;
     */
    values?: Struct;
    /**
     * msg is used if the mail text is specified directly in code
     *
     * @generated from field: optional string msg = 5;
     */
    msg?: string;
    /**
     * mail_function is how the mail is send
     *
     * @generated from field: api.v1.MailFunction mail_function = 6;
     */
    mailFunction: MailFunction;
    constructor(data?: PartialMessage<Email>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Email";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Email;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Email;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Email;
    static equals(a: Email | PlainMessage<Email> | undefined, b: Email | PlainMessage<Email> | undefined): boolean;
}
