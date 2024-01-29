import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { OAuthProvider } from "./common_pb.js";
import { Coupon } from "./payment_pb.js";
/**
 * Tenant is a customer of the platform
 *
 * @generated from message api.v1.Tenant
 */
export declare class Tenant extends Message<Tenant> {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Name if the tenant
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Email of the tenant
     *
     * @generated from field: string email = 3;
     */
    email: string;
    /**
     * AvatarUrl of the tenant
     *
     * @generated from field: string avatar_url = 5;
     */
    avatarUrl: string;
    /**
     * OauthProvider of the tenant
     *
     * @generated from field: api.v1.OAuthProvider oauth_provider = 6;
     */
    oauthProvider: OAuthProvider;
    /**
     * PaymentDetails the tenant provides
     *
     * @generated from field: api.v1.PaymentDetails payment_details = 8;
     */
    paymentDetails?: PaymentDetails;
    /**
     * Admitted indicates if this tenant is allowed to use the platform
     *
     * @generated from field: bool admitted = 9;
     */
    admitted: boolean;
    /**
     * PhoneNumber of the tenant
     *
     * @generated from field: string phone_number = 10;
     */
    phoneNumber: string;
    /**
     * TermsAndConditions the tenant accepted
     *
     * @generated from field: api.v1.TermsAndConditions terms_and_conditions = 11;
     */
    termsAndConditions?: TermsAndConditions;
    /**
     * EmailConsent the tenant made
     *
     * @generated from field: bool email_consent = 12;
     */
    emailConsent: boolean;
    /**
     * Onboarded checks if the tenant was asked to be onboared
     *
     * @generated from field: bool onboarded = 13;
     */
    onboarded: boolean;
    /**
     * CreatedAt the date when this tenant was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 20;
     */
    createdAt?: Timestamp;
    /**
     * UpdatedAt the date when this tenant was updated
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 21;
     */
    updatedAt?: Timestamp;
    /**
     * DeletedAt the date when this tenant was deleted
     *
     * @generated from field: google.protobuf.Timestamp deleted_at = 22;
     */
    deletedAt?: Timestamp;
    constructor(data?: PartialMessage<Tenant>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.Tenant";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tenant;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tenant;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tenant;
    static equals(a: Tenant | PlainMessage<Tenant> | undefined, b: Tenant | PlainMessage<Tenant> | undefined): boolean;
}
/**
 * PaymentDetails of a tenant
 *
 * @generated from message api.v1.PaymentDetails
 */
export declare class PaymentDetails extends Message<PaymentDetails> {
    /**
     * CustomerId at the payment processor
     *
     * @generated from field: string customer_id = 1;
     */
    customerId: string;
    /**
     * PaymentMethodId of the tenant at the payment processor
     *
     * @generated from field: optional string payment_method_id = 2;
     */
    paymentMethodId?: string;
    /**
     * SubscriptionId at the payment processor
     *
     * @generated from field: string subscription_id = 3;
     */
    subscriptionId: string;
    /**
     * Coupons a list of coupons the tenant has
     *
     * @generated from field: repeated api.v1.Coupon coupons = 4;
     */
    coupons: Coupon[];
    /**
     * Vat which applies to this tenant
     *
     * @generated from field: string vat = 5;
     */
    vat: string;
    constructor(data?: PartialMessage<PaymentDetails>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentDetails";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentDetails;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentDetails;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentDetails;
    static equals(a: PaymentDetails | PlainMessage<PaymentDetails> | undefined, b: PaymentDetails | PlainMessage<PaymentDetails> | undefined): boolean;
}
/**
 * PaymentDetailsUpdate is used to update PaymentDetails
 *
 * @generated from message api.v1.PaymentDetailsUpdate
 */
export declare class PaymentDetailsUpdate extends Message<PaymentDetailsUpdate> {
    /**
     * CustomerId at the payment processor
     *
     * @generated from field: optional string customer_id = 1;
     */
    customerId?: string;
    /**
     * PaymentMethodId of the tenant at the payment processor
     *
     * @generated from field: optional string payment_method_id = 2;
     */
    paymentMethodId?: string;
    /**
     * SubscriptionId at the payment processor
     *
     * @generated from field: optional string subscription_id = 3;
     */
    subscriptionId?: string;
    /**
     * Vat which applies to this tenant
     *
     * @generated from field: optional string vat = 4;
     */
    vat?: string;
    constructor(data?: PartialMessage<PaymentDetailsUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.PaymentDetailsUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentDetailsUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentDetailsUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentDetailsUpdate;
    static equals(a: PaymentDetailsUpdate | PlainMessage<PaymentDetailsUpdate> | undefined, b: PaymentDetailsUpdate | PlainMessage<PaymentDetailsUpdate> | undefined): boolean;
}
/**
 * TermsAndConditions the tenant accepted
 *
 * @generated from message api.v1.TermsAndConditions
 */
export declare class TermsAndConditions extends Message<TermsAndConditions> {
    /**
     * Accepted indicates if the tenant accepted the terms and conditions
     *
     * @generated from field: bool accepted = 1;
     */
    accepted: boolean;
    /**
     * When is the date when the tenant accepted the terms and conditions
     *
     * @generated from field: google.protobuf.Timestamp when = 2;
     */
    when?: Timestamp;
    constructor(data?: PartialMessage<TermsAndConditions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TermsAndConditions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TermsAndConditions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TermsAndConditions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TermsAndConditions;
    static equals(a: TermsAndConditions | PlainMessage<TermsAndConditions> | undefined, b: TermsAndConditions | PlainMessage<TermsAndConditions> | undefined): boolean;
}
/**
 * TermsAndConditionsUpdate
 *
 * @generated from message api.v1.TermsAndConditionsUpdate
 */
export declare class TermsAndConditionsUpdate extends Message<TermsAndConditionsUpdate> {
    /**
     * Accepted indicates if the tenant accepted the terms and conditions
     *
     * @generated from field: optional bool accepted = 1;
     */
    accepted?: boolean;
    /**
     * When is the date when the tenant accepted the terms and conditions
     *
     * @generated from field: optional google.protobuf.Timestamp when = 2;
     */
    when?: Timestamp;
    constructor(data?: PartialMessage<TermsAndConditionsUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TermsAndConditionsUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TermsAndConditionsUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TermsAndConditionsUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TermsAndConditionsUpdate;
    static equals(a: TermsAndConditionsUpdate | PlainMessage<TermsAndConditionsUpdate> | undefined, b: TermsAndConditionsUpdate | PlainMessage<TermsAndConditionsUpdate> | undefined): boolean;
}
/**
 * TenantServiceGetRequest is the request payload of the tenant get request
 *
 * @generated from message api.v1.TenantServiceGetRequest
 */
export declare class TenantServiceGetRequest extends Message<TenantServiceGetRequest> {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<TenantServiceGetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceGetRequest;
    static equals(a: TenantServiceGetRequest | PlainMessage<TenantServiceGetRequest> | undefined, b: TenantServiceGetRequest | PlainMessage<TenantServiceGetRequest> | undefined): boolean;
}
/**
 * TenantServiceCreateRequest is the request payload of the tenant create request
 *
 * @generated from message api.v1.TenantServiceCreateRequest
 */
export declare class TenantServiceCreateRequest extends Message<TenantServiceCreateRequest> {
    /**
     * Tenant the tenant to create
     *
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCreateRequest;
    static equals(a: TenantServiceCreateRequest | PlainMessage<TenantServiceCreateRequest> | undefined, b: TenantServiceCreateRequest | PlainMessage<TenantServiceCreateRequest> | undefined): boolean;
}
/**
 * TenantServiceCreateOrUpdateRequest is the request payload of the tenant create or update request
 *
 * @generated from message api.v1.TenantServiceCreateOrUpdateRequest
 */
export declare class TenantServiceCreateOrUpdateRequest extends Message<TenantServiceCreateOrUpdateRequest> {
    /**
     * Tenant the tenant to create or update
     *
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceCreateOrUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceCreateOrUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCreateOrUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCreateOrUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCreateOrUpdateRequest;
    static equals(a: TenantServiceCreateOrUpdateRequest | PlainMessage<TenantServiceCreateOrUpdateRequest> | undefined, b: TenantServiceCreateOrUpdateRequest | PlainMessage<TenantServiceCreateOrUpdateRequest> | undefined): boolean;
}
/**
 * TenantServiceUpdateRequest is the request payload of the tenant update request
 *
 * @generated from message api.v1.TenantServiceUpdateRequest
 */
export declare class TenantServiceUpdateRequest extends Message<TenantServiceUpdateRequest> {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Name of the tenant
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * Email of the tenant
     *
     * @generated from field: optional string email = 3;
     */
    email?: string;
    /**
     * AvatarUrl of the tenant
     *
     * @generated from field: optional string avatar_url = 5;
     */
    avatarUrl?: string;
    /**
     * PaymentDetails of the tenant
     *
     * @generated from field: optional api.v1.PaymentDetailsUpdate payment_details = 8;
     */
    paymentDetails?: PaymentDetailsUpdate;
    /**
     * TermsAndConditions of the tenant
     *
     * @generated from field: optional api.v1.TermsAndConditionsUpdate terms_and_conditions = 9;
     */
    termsAndConditions?: TermsAndConditionsUpdate;
    /**
     * Onboarded checks if the tenant was asked to be onboared
     *
     * @generated from field: optional bool onboarded = 13;
     */
    onboarded?: boolean;
    constructor(data?: PartialMessage<TenantServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceUpdateRequest;
    static equals(a: TenantServiceUpdateRequest | PlainMessage<TenantServiceUpdateRequest> | undefined, b: TenantServiceUpdateRequest | PlainMessage<TenantServiceUpdateRequest> | undefined): boolean;
}
/**
 * TenantServiceDeleteRequest is the request payload of the tenant delete request
 *
 * @generated from message api.v1.TenantServiceDeleteRequest
 */
export declare class TenantServiceDeleteRequest extends Message<TenantServiceDeleteRequest> {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<TenantServiceDeleteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceDeleteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceDeleteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceDeleteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceDeleteRequest;
    static equals(a: TenantServiceDeleteRequest | PlainMessage<TenantServiceDeleteRequest> | undefined, b: TenantServiceDeleteRequest | PlainMessage<TenantServiceDeleteRequest> | undefined): boolean;
}
/**
 * TenantServiceGetResponse is the response payload of the tenant get request
 *
 * @generated from message api.v1.TenantServiceGetResponse
 */
export declare class TenantServiceGetResponse extends Message<TenantServiceGetResponse> {
    /**
     * Tenant is the tenant
     *
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceGetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceGetResponse;
    static equals(a: TenantServiceGetResponse | PlainMessage<TenantServiceGetResponse> | undefined, b: TenantServiceGetResponse | PlainMessage<TenantServiceGetResponse> | undefined): boolean;
}
/**
 * TenantServiceCreateResponse is the response payload of the tenant create request
 *
 * @generated from message api.v1.TenantServiceCreateResponse
 */
export declare class TenantServiceCreateResponse extends Message<TenantServiceCreateResponse> {
    /**
     * Tenant is the tenant
     *
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceCreateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceCreateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCreateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCreateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCreateResponse;
    static equals(a: TenantServiceCreateResponse | PlainMessage<TenantServiceCreateResponse> | undefined, b: TenantServiceCreateResponse | PlainMessage<TenantServiceCreateResponse> | undefined): boolean;
}
/**
 * TenantServiceCreateOrUpdateResponse is the response payload of the tenant create or update request
 *
 * @generated from message api.v1.TenantServiceCreateOrUpdateResponse
 */
export declare class TenantServiceCreateOrUpdateResponse extends Message<TenantServiceCreateOrUpdateResponse> {
    /**
     * Tenant is the tenant
     *
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceCreateOrUpdateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceCreateOrUpdateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceCreateOrUpdateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceCreateOrUpdateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceCreateOrUpdateResponse;
    static equals(a: TenantServiceCreateOrUpdateResponse | PlainMessage<TenantServiceCreateOrUpdateResponse> | undefined, b: TenantServiceCreateOrUpdateResponse | PlainMessage<TenantServiceCreateOrUpdateResponse> | undefined): boolean;
}
/**
 * TenantServiceUpdateResponse is the response payload of the tenant update request
 *
 * @generated from message api.v1.TenantServiceUpdateResponse
 */
export declare class TenantServiceUpdateResponse extends Message<TenantServiceUpdateResponse> {
    /**
     * Tenant is the tenant
     *
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceUpdateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceUpdateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceUpdateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceUpdateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceUpdateResponse;
    static equals(a: TenantServiceUpdateResponse | PlainMessage<TenantServiceUpdateResponse> | undefined, b: TenantServiceUpdateResponse | PlainMessage<TenantServiceUpdateResponse> | undefined): boolean;
}
/**
 * TenantServiceDeleteResponse is the response payload of the tenant delete request
 *
 * @generated from message api.v1.TenantServiceDeleteResponse
 */
export declare class TenantServiceDeleteResponse extends Message<TenantServiceDeleteResponse> {
    /**
     * Tenant is the tenant
     *
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<TenantServiceDeleteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceDeleteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceDeleteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceDeleteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceDeleteResponse;
    static equals(a: TenantServiceDeleteResponse | PlainMessage<TenantServiceDeleteResponse> | undefined, b: TenantServiceDeleteResponse | PlainMessage<TenantServiceDeleteResponse> | undefined): boolean;
}
