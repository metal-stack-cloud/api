import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message api.v1.MethodServiceListRequest
 */
export declare class MethodServiceListRequest extends Message<MethodServiceListRequest> {
    constructor(data?: PartialMessage<MethodServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MethodServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodServiceListRequest;
    static equals(a: MethodServiceListRequest | PlainMessage<MethodServiceListRequest> | undefined, b: MethodServiceListRequest | PlainMessage<MethodServiceListRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.MethodServiceListResponse
 */
export declare class MethodServiceListResponse extends Message<MethodServiceListResponse> {
    /**
     * @generated from field: repeated string methods = 1;
     */
    methods: string[];
    constructor(data?: PartialMessage<MethodServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.MethodServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodServiceListResponse;
    static equals(a: MethodServiceListResponse | PlainMessage<MethodServiceListResponse> | undefined, b: MethodServiceListResponse | PlainMessage<MethodServiceListResponse> | undefined): boolean;
}