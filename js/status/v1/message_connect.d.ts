import { MessageServiceListRequest, MessageServiceListResponse, MessageServiceWatchRequest, MessageServiceWatchResponse } from "./message_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * MessageService serves status message related functions
 * this service is used as backend for the status dashboard
 *
 * @generated from service status.v1.MessageService
 */
export declare const MessageService: {
    readonly typeName: "status.v1.MessageService";
    readonly methods: {
        /**
         * List returns all messages of interest
         *
         * @generated from rpc status.v1.MessageService.List
         */
        readonly list: {
            readonly name: "List";
            readonly I: typeof MessageServiceListRequest;
            readonly O: typeof MessageServiceListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Watch returns all messages of interest
         *
         * @generated from rpc status.v1.MessageService.Watch
         */
        readonly watch: {
            readonly name: "Watch";
            readonly I: typeof MessageServiceWatchRequest;
            readonly O: typeof MessageServiceWatchResponse;
            readonly kind: MethodKind.ServerStreaming;
        };
    };
};
