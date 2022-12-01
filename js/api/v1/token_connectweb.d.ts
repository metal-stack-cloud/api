import { TokenServiceCreateRequest, TokenServiceCreateResponse } from "./token_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service api.v1.TokenService
 */
export declare const TokenService: {
    readonly typeName: "api.v1.TokenService";
    readonly methods: {
        /**
         * @generated from rpc api.v1.TokenService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof TokenServiceCreateRequest;
            readonly O: typeof TokenServiceCreateResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
