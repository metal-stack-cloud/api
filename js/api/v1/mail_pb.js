"use strict";
// @generated by protoc-gen-es v1.2.1 with parameter "target=ts"
// @generated from file api/v1/mail.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = exports.MailType = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from enum api.v1.MailType
 */
var MailType;
(function (MailType) {
    /**
     * @generated from enum value: MAIL_TYPE_UNSPECIFIED = 0;
     */
    MailType[MailType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: MAIL_TYPE_ADMITTED = 1;
     */
    MailType[MailType["ADMITTED"] = 1] = "ADMITTED";
    /**
     * @generated from enum value: MAIL_TYPE_COUPON_PERCENTAGE_USED_WARNING = 2;
     */
    MailType[MailType["COUPON_PERCENTAGE_USED_WARNING"] = 2] = "COUPON_PERCENTAGE_USED_WARNING";
    /**
     * @generated from enum value: MAIL_TYPE_COUPON_COMPLETELY_USED_WARNING = 3;
     */
    MailType[MailType["COUPON_COMPLETELY_USED_WARNING"] = 3] = "COUPON_COMPLETELY_USED_WARNING";
    /**
     * @generated from enum value: MAIL_TYPE_PAYMENT_UPDATED = 4;
     */
    MailType[MailType["PAYMENT_UPDATED"] = 4] = "PAYMENT_UPDATED";
    /**
     * @generated from enum value: MAIL_TYPE_ADMISSION_REQUESTED = 5;
     */
    MailType[MailType["ADMISSION_REQUESTED"] = 5] = "ADMISSION_REQUESTED";
    /**
     * @generated from enum value: MAIL_TYPE_WELCOME = 6;
     */
    MailType[MailType["WELCOME"] = 6] = "WELCOME";
})(MailType || (exports.MailType = MailType = {}));
// Retrieve enum metadata with: proto3.getEnumType(MailType)
protobuf_1.proto3.util.setEnumType(MailType, "api.v1.MailType", [
    { no: 0, name: "MAIL_TYPE_UNSPECIFIED" },
    { no: 1, name: "MAIL_TYPE_ADMITTED" },
    { no: 2, name: "MAIL_TYPE_COUPON_PERCENTAGE_USED_WARNING" },
    { no: 3, name: "MAIL_TYPE_COUPON_COMPLETELY_USED_WARNING" },
    { no: 4, name: "MAIL_TYPE_PAYMENT_UPDATED" },
    { no: 5, name: "MAIL_TYPE_ADMISSION_REQUESTED" },
    { no: 6, name: "MAIL_TYPE_WELCOME" },
]);
/**
 * @generated from message api.v1.Email
 */
class Email extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string to = 1;
         */
        this.to = [];
        /**
         * @generated from field: api.v1.MailType mail_type = 3;
         */
        this.mailType = MailType.UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Email().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Email().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Email().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Email, a, b);
    }
}
exports.Email = Email;
Email.runtime = protobuf_1.proto3;
Email.typeName = "api.v1.Email";
Email.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "subject", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "mail_type", kind: "enum", T: protobuf_1.proto3.getEnumType(MailType) },
    { no: 4, name: "values", kind: "message", T: protobuf_1.Struct },
    { no: 5, name: "msg", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
