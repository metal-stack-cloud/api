"use strict";
// @generated by protoc-gen-connect-web v0.7.0 with parameter "target=ts"
// @generated from file status/v1/message.proto (package status.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const message_pb_js_1 = require("./message_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service status.v1.MessageService
 */
exports.MessageService = {
    typeName: "status.v1.MessageService",
    methods: {
        /**
         * @generated from rpc status.v1.MessageService.List
         */
        list: {
            name: "List",
            I: message_pb_js_1.MessageServiceListRequest,
            O: message_pb_js_1.MessageServiceListResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
