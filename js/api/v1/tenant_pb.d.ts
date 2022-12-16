import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, Timestamp } from "@bufbuild/protobuf";
import { OAuthProvider } from "./common_pb.js";
import { Coupon } from "./payment_pb.js";
/**
 * Tenant
 *
 * @generated from message api.v1.Tenant
 */
export declare class Tenant extends Message<Tenant> {
    /**
     * the login at the provider
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string email = 3;
     */
    email: string;
    /**
     * @generated from field: string avatar_url = 5;
     */
    avatarUrl: string;
    /**
     * @generated from field: api.v1.OAuthProvider oauth_provider = 6;
     */
    oauthProvider: OAuthProvider;
    /**
     * @generated from field: api.v1.PaymentDetails payment_details = 8;
     */
    paymentDetails?: PaymentDetails;
    /**
     * @generated from field: bool admitted = 9;
     */
    admitted: boolean;
    /**
     * @generated from field: string phone_number = 10;
     */
    phoneNumber: string;
    /**
     * @generated from field: api.v1.TermsAndConditions terms_and_conditions = 11;
     */
    termsAndConditions?: TermsAndConditions;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 20;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 21;
     */
    updatedAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp deleted_at = 22;
     */
    deletedAt?: Timestamp;
    constructor(data?: PartialMessage<Tenant>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.Tenant";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tenant;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tenant;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tenant;
    static equals(a: Tenant | PlainMessage<Tenant> | undefined, b: Tenant | PlainMessage<Tenant> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentDetails
 */
export declare class PaymentDetails extends Message<PaymentDetails> {
    /**
     * @generated from field: string customer_id = 1;
     */
    customerId: string;
    /**
     * @generated from field: string payment_method_id = 2;
     */
    paymentMethodId: string;
    /**
     * @generated from field: string subscription_id = 3;
     */
    subscriptionId: string;
    /**
     * @generated from field: repeated api.v1.Coupon coupons = 4;
     */
    coupons: Coupon[];
    constructor(data?: PartialMessage<PaymentDetails>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentDetails";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentDetails;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentDetails;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentDetails;
    static equals(a: PaymentDetails | PlainMessage<PaymentDetails> | undefined, b: PaymentDetails | PlainMessage<PaymentDetails> | undefined): boolean;
}
/**
 * @generated from message api.v1.PaymentDetailsUpdate
 */
export declare class PaymentDetailsUpdate extends Message<PaymentDetailsUpdate> {
    /**
     * @generated from field: optional string customer_id = 1;
     */
    customerId?: string;
    /**
     * @generated from field: optional string payment_method_id = 2;
     */
    paymentMethodId?: string;
    /**
     * @generated from field: optional string subscription_id = 3;
     */
    subscriptionId?: string;
    constructor(data?: PartialMessage<PaymentDetailsUpdate>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.PaymentDetailsUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentDetailsUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentDetailsUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentDetailsUpdate;
    static equals(a: PaymentDetailsUpdate | PlainMessage<PaymentDetailsUpdate> | undefined, b: PaymentDetailsUpdate | PlainMessage<PaymentDetailsUpdate> | undefined): boolean;
}
/**
 * @generated from message api.v1.TermsAndConditions
 */
export declare class TermsAndConditions extends Message<TermsAndConditions> {
    /**
     * @generated from field: bool accepted = 1;
     */
    accepted: boolean;
    /**
     * @generated from field: google.protobuf.Timestamp when = 2;
     */
    when?: Timestamp;
    constructor(data?: PartialMessage<TermsAndConditions>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TermsAndConditions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TermsAndConditions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TermsAndConditions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TermsAndConditions;
    static equals(a: TermsAndConditions | PlainMessage<TermsAndConditions> | undefined, b: TermsAndConditions | PlainMessage<TermsAndConditions> | undefined): boolean;
}
/**
 * @generated from message api.v1.TermsAndConditionsUpdate
 */
export declare class TermsAndConditionsUpdate extends Message<TermsAndConditionsUpdate> {
    /**
     * @generated from field: optional bool accepted = 1;
     */
    accepted?: boolean;
    /**
     * @generated from field: optional google.protobuf.Timestamp when = 2;
     */
    when?: Timestamp;
    constructor(data?: PartialMessage<TermsAndConditionsUpdate>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TermsAndConditionsUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TermsAndConditionsUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TermsAndConditionsUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TermsAndConditionsUpdate;
    static equals(a: TermsAndConditionsUpdate | PlainMessage<TermsAndConditionsUpdate> | undefined, b: TermsAndConditionsUpdate | PlainMessage<TermsAndConditionsUpdate> | undefined): boolean;
}
/**
 * @generated from message api.v1.TenantServiceGetRequest
 */
export declare class TenantServiceGetRequest extends Message<TenantServiceGetRequest> {
    /**
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<TenantServiceGetRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TenantServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceGetRequest;
    static equals(a: TenantServiceGetRequest | PlainMessage<TenantServiceGetRequest> | undefined, b: TenantServiceGetRequest | PlainMessage<TenantServiceGetRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.TenantServiceCreateRequest
 */
export declare class TenantServiceCreateRequest extends Message<TenantServiceCreateRequest> {
    /**
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceCreateRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TenantServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCreateRequest;
    static equals(a: TenantServiceCreateRequest | PlainMessage<TenantServiceCreateRequest> | undefined, b: TenantServiceCreateRequest | PlainMessage<TenantServiceCreateRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.TenantServiceCreateOrUpdateRequest
 */
export declare class TenantServiceCreateOrUpdateRequest extends Message<TenantServiceCreateOrUpdateRequest> {
    /**
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceCreateOrUpdateRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TenantServiceCreateOrUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCreateOrUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCreateOrUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCreateOrUpdateRequest;
    static equals(a: TenantServiceCreateOrUpdateRequest | PlainMessage<TenantServiceCreateOrUpdateRequest> | undefined, b: TenantServiceCreateOrUpdateRequest | PlainMessage<TenantServiceCreateOrUpdateRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.TenantServiceUpdateRequest
 */
export declare class TenantServiceUpdateRequest extends Message<TenantServiceUpdateRequest> {
    /**
     * the login at the provider
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * @generated from field: optional string email = 3;
     */
    email?: string;
    /**
     * @generated from field: optional string avatar_url = 5;
     */
    avatarUrl?: string;
    /**
     * @generated from field: optional api.v1.PaymentDetailsUpdate payment_details = 8;
     */
    paymentDetails?: PaymentDetailsUpdate;
    /**
     * @generated from field: optional api.v1.TermsAndConditionsUpdate terms_and_conditions = 9;
     */
    termsAndConditions?: TermsAndConditionsUpdate;
    constructor(data?: PartialMessage<TenantServiceUpdateRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TenantServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceUpdateRequest;
    static equals(a: TenantServiceUpdateRequest | PlainMessage<TenantServiceUpdateRequest> | undefined, b: TenantServiceUpdateRequest | PlainMessage<TenantServiceUpdateRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.TenantServiceDeleteRequest
 */
export declare class TenantServiceDeleteRequest extends Message<TenantServiceDeleteRequest> {
    /**
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<TenantServiceDeleteRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TenantServiceDeleteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceDeleteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceDeleteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceDeleteRequest;
    static equals(a: TenantServiceDeleteRequest | PlainMessage<TenantServiceDeleteRequest> | undefined, b: TenantServiceDeleteRequest | PlainMessage<TenantServiceDeleteRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.TenantServiceCheckAdmittedRequest
 */
export declare class TenantServiceCheckAdmittedRequest extends Message<TenantServiceCheckAdmittedRequest> {
    /**
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<TenantServiceCheckAdmittedRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TenantServiceCheckAdmittedRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCheckAdmittedRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCheckAdmittedRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCheckAdmittedRequest;
    static equals(a: TenantServiceCheckAdmittedRequest | PlainMessage<TenantServiceCheckAdmittedRequest> | undefined, b: TenantServiceCheckAdmittedRequest | PlainMessage<TenantServiceCheckAdmittedRequest> | undefined): boolean;
}
/**
 * @generated from message api.v1.TenantServiceRequestAdmissionRequest
 */
export declare class TenantServiceRequestAdmissionRequest extends Message<TenantServiceRequestAdmissionRequest> {
    /**
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * @generated from field: string email = 2;
     */
    email: string;
    /**
     * @generated from field: string phone_number = 3;
     */
    phoneNumber: string;
    constructor(data?: PartialMessage<TenantServiceRequestAdmissionRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TenantServiceRequestAdmissionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceRequestAdmissionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceRequestAdmissionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceRequestAdmissionRequest;
    static equals(a: TenantServiceRequestAdmissionRequest | PlainMessage<TenantServiceRequestAdmissionRequest> | undefined, b: TenantServiceRequestAdmissionRequest | PlainMessage<TenantServiceRequestAdmissionRequest> | undefined): boolean;
}
/**
 * Responses
 *
 * @generated from message api.v1.TenantServiceGetResponse
 */
export declare class TenantServiceGetResponse extends Message<TenantServiceGetResponse> {
    /**
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceGetResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TenantServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceGetResponse;
    static equals(a: TenantServiceGetResponse | PlainMessage<TenantServiceGetResponse> | undefined, b: TenantServiceGetResponse | PlainMessage<TenantServiceGetResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.TenantServiceCreateResponse
 */
export declare class TenantServiceCreateResponse extends Message<TenantServiceCreateResponse> {
    /**
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceCreateResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TenantServiceCreateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCreateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCreateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCreateResponse;
    static equals(a: TenantServiceCreateResponse | PlainMessage<TenantServiceCreateResponse> | undefined, b: TenantServiceCreateResponse | PlainMessage<TenantServiceCreateResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.TenantServiceCreateOrUpdateResponse
 */
export declare class TenantServiceCreateOrUpdateResponse extends Message<TenantServiceCreateOrUpdateResponse> {
    /**
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceCreateOrUpdateResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TenantServiceCreateOrUpdateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCreateOrUpdateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCreateOrUpdateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCreateOrUpdateResponse;
    static equals(a: TenantServiceCreateOrUpdateResponse | PlainMessage<TenantServiceCreateOrUpdateResponse> | undefined, b: TenantServiceCreateOrUpdateResponse | PlainMessage<TenantServiceCreateOrUpdateResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.TenantServiceUpdateResponse
 */
export declare class TenantServiceUpdateResponse extends Message<TenantServiceUpdateResponse> {
    /**
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceUpdateResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TenantServiceUpdateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceUpdateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceUpdateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceUpdateResponse;
    static equals(a: TenantServiceUpdateResponse | PlainMessage<TenantServiceUpdateResponse> | undefined, b: TenantServiceUpdateResponse | PlainMessage<TenantServiceUpdateResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.TenantServiceDeleteResponse
 */
export declare class TenantServiceDeleteResponse extends Message<TenantServiceDeleteResponse> {
    /**
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceDeleteResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TenantServiceDeleteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceDeleteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceDeleteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceDeleteResponse;
    static equals(a: TenantServiceDeleteResponse | PlainMessage<TenantServiceDeleteResponse> | undefined, b: TenantServiceDeleteResponse | PlainMessage<TenantServiceDeleteResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.TenantServiceCheckAdmittedResponse
 */
export declare class TenantServiceCheckAdmittedResponse extends Message<TenantServiceCheckAdmittedResponse> {
    /**
     * @generated from field: bool admitted = 1;
     */
    admitted: boolean;
    constructor(data?: PartialMessage<TenantServiceCheckAdmittedResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TenantServiceCheckAdmittedResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCheckAdmittedResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCheckAdmittedResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCheckAdmittedResponse;
    static equals(a: TenantServiceCheckAdmittedResponse | PlainMessage<TenantServiceCheckAdmittedResponse> | undefined, b: TenantServiceCheckAdmittedResponse | PlainMessage<TenantServiceCheckAdmittedResponse> | undefined): boolean;
}
/**
 * @generated from message api.v1.TenantServiceRequestAdmissionResponse
 */
export declare class TenantServiceRequestAdmissionResponse extends Message<TenantServiceRequestAdmissionResponse> {
    /**
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceRequestAdmissionResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "api.v1.TenantServiceRequestAdmissionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceRequestAdmissionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceRequestAdmissionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceRequestAdmissionResponse;
    static equals(a: TenantServiceRequestAdmissionResponse | PlainMessage<TenantServiceRequestAdmissionResponse> | undefined, b: TenantServiceRequestAdmissionResponse | PlainMessage<TenantServiceRequestAdmissionResponse> | undefined): boolean;
}
