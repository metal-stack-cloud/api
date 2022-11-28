"use strict";
// @generated by protoc-gen-connect-web v0.3.2 with parameter "target=ts"
// @generated from file api/v1/token.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
var token_pb_js_1 = require("./token_pb.js");
var protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service api.v1.TokenService
 */
exports.TokenService = {
    typeName: "api.v1.TokenService",
    methods: {
        /**
         * @generated from rpc api.v1.TokenService.Create
         */
        create: {
            name: "Create",
            I: token_pb_js_1.TokenServiceCreateRequest,
            O: token_pb_js_1.TokenServiceCreateResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
