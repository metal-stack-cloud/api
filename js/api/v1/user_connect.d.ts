import { UserServiceGetRequest, UserServiceGetResponse } from "./user_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * UserService exposes rpc calls for users
 *
 * @generated from service api.v1.UserService
 */
export declare const UserService: {
    readonly typeName: "api.v1.UserService";
    readonly methods: {
        /**
         * Get a User
         *
         * @generated from rpc api.v1.UserService.Get
         */
        readonly get: {
            readonly name: "Get";
            readonly I: typeof UserServiceGetRequest;
            readonly O: typeof UserServiceGetResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
