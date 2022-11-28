import { MessageServiceListRequest, MessageServiceListResponse } from "./message_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service status.v1.MessageService
 */
export declare const MessageService: {
    readonly typeName: "status.v1.MessageService";
    readonly methods: {
        /**
         * @generated from rpc status.v1.MessageService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof MessageServiceListRequest;
            readonly O: typeof MessageServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
