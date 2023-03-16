// @generated by protoc-gen-connect-es v0.8.3 with parameter "target=ts"
// @generated from file status/v1/message.proto (package status.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MessageServiceListRequest, MessageServiceListResponse } from "./message_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service status.v1.MessageService
 */
export const MessageService = {
  typeName: "status.v1.MessageService",
  methods: {
    /**
     * @generated from rpc status.v1.MessageService.List
     */
    list: {
      name: "List",
      I: MessageServiceListRequest,
      O: MessageServiceListResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

