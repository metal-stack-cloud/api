import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { OAuthProvider, TenantRole } from "./common_pb.js";
import { Project } from "./project_pb.js";
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
     * Name of the tenant
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
     * Description of this tenant
     *
     * @generated from field: string description = 4;
     */
    description: string;
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
     * Onboarded checks if the tenant was asked to be onboarded
     *
     * @generated from field: bool onboarded = 13;
     */
    onboarded: boolean;
    /**
     * CreatedBy stores who created this tenant
     *
     * @generated from field: string created_by = 15;
     */
    createdBy: string;
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
 * TenantMember defines a user that participates at a tenant
 *
 * @generated from message api.v1.TenantMember
 */
export declare class TenantMember extends Message<TenantMember> {
    /**
     * Id is the user id of the member
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Role is the role of the member
     *
     * @generated from field: api.v1.TenantRole role = 2;
     */
    role: TenantRole;
    /**
     * Projects of the member
     *
     * @generated from field: repeated api.v1.Project projects = 3;
     */
    projects: Project[];
    /**
     * CreatedAt the date when the member was added to the tenant
     *
     * @generated from field: google.protobuf.Timestamp created_at = 10;
     */
    createdAt?: Timestamp;
    constructor(data?: PartialMessage<TenantMember>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantMember";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantMember;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantMember;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantMember;
    static equals(a: TenantMember | PlainMessage<TenantMember> | undefined, b: TenantMember | PlainMessage<TenantMember> | undefined): boolean;
}
/**
 * TenantInvite defines invite to tenant
 *
 * @generated from message api.v1.TenantInvite
 */
export declare class TenantInvite extends Message<TenantInvite> {
    /**
     * Secret is the secret part of the invite, typically part of the url
     *
     * @generated from field: string secret = 1;
     */
    secret: string;
    /**
     * TargetTenant is the tenant id for which this invite was created
     *
     * @generated from field: string target_tenant = 2;
     */
    targetTenant: string;
    /**
     * Role is the role in this tenant the user will get after accepting the invitation
     *
     * @generated from field: api.v1.TenantRole role = 3;
     */
    role: TenantRole;
    /**
     * Joined is false as long as a user has not accepted the invite
     *
     * @generated from field: bool joined = 4;
     */
    joined: boolean;
    /**
     * TargetTenantName is the tenant name for which this invite was created
     *
     * @generated from field: string target_tenant_name = 5;
     */
    targetTenantName: string;
    /**
     * Tenant is the login of tenant who invites to join this tenant
     *
     * @generated from field: string tenant = 6;
     */
    tenant: string;
    /**
     * TenantName is the name of tenant who invites to join this tenant
     *
     * @generated from field: string tenant_name = 7;
     */
    tenantName: string;
    /**
     * ExpiresAt the date when this invite expires
     *
     * @generated from field: google.protobuf.Timestamp expires_at = 10;
     */
    expiresAt?: Timestamp;
    /**
     * JoinedAt the date when the member accepted this invite
     *
     * @generated from field: google.protobuf.Timestamp joined_at = 11;
     */
    joinedAt?: Timestamp;
    constructor(data?: PartialMessage<TenantInvite>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantInvite";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantInvite;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantInvite;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantInvite;
    static equals(a: TenantInvite | PlainMessage<TenantInvite> | undefined, b: TenantInvite | PlainMessage<TenantInvite> | undefined): boolean;
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
 * TenantServiceListRequest is the request payload of the tenant list request
 *
 * @generated from message api.v1.TenantServiceListRequest
 */
export declare class TenantServiceListRequest extends Message<TenantServiceListRequest> {
    /**
     * Id filters tenants by id
     *
     * @generated from field: optional string id = 1;
     */
    id?: string;
    /**
     * Name filters tenants by name
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    constructor(data?: PartialMessage<TenantServiceListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceListRequest;
    static equals(a: TenantServiceListRequest | PlainMessage<TenantServiceListRequest> | undefined, b: TenantServiceListRequest | PlainMessage<TenantServiceListRequest> | undefined): boolean;
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
     * Name of this tenant
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Description of this tenant
     *
     * @generated from field: optional string description = 2;
     */
    description?: string;
    /**
     * Email of the tenant, if not set will be inherited from the creator
     *
     * @generated from field: optional string email = 3;
     */
    email?: string;
    /**
     * AvatarUrl of the tenant
     *
     * @generated from field: optional string avatar_url = 4;
     */
    avatarUrl?: string;
    /**
     * PhoneNumber of the tenant
     *
     * @generated from field: optional string phone_number = 5;
     */
    phoneNumber?: string;
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
     * Description of this tenant
     *
     * @generated from field: optional string description = 4;
     */
    description?: string;
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
     * Onboarded checks if the tenant was asked to be onboarded
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
    /**
     * TenantMembers of this tenant
     *
     * @generated from field: repeated api.v1.TenantMember tenant_members = 2;
     */
    tenantMembers: TenantMember[];
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
 * TenantServiceListResponse is the response payload of the tenant list request
 *
 * @generated from message api.v1.TenantServiceListResponse
 */
export declare class TenantServiceListResponse extends Message<TenantServiceListResponse> {
    /**
     * Tenants is the list of tenants
     *
     * @generated from field: repeated api.v1.Tenant tenants = 1;
     */
    tenants: Tenant[];
    constructor(data?: PartialMessage<TenantServiceListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceListResponse;
    static equals(a: TenantServiceListResponse | PlainMessage<TenantServiceListResponse> | undefined, b: TenantServiceListResponse | PlainMessage<TenantServiceListResponse> | undefined): boolean;
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
/**
 * TenantServiceInviteRequest is used to invite a member to a tenant
 *
 * @generated from message api.v1.TenantServiceInviteRequest
 */
export declare class TenantServiceInviteRequest extends Message<TenantServiceInviteRequest> {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Role of this user in this tenant
     *
     * @generated from field: api.v1.TenantRole role = 2;
     */
    role: TenantRole;
    constructor(data?: PartialMessage<TenantServiceInviteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceInviteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceInviteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceInviteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceInviteRequest;
    static equals(a: TenantServiceInviteRequest | PlainMessage<TenantServiceInviteRequest> | undefined, b: TenantServiceInviteRequest | PlainMessage<TenantServiceInviteRequest> | undefined): boolean;
}
/**
 * TenantServiceInviteRequest is the response payload to a invite member request
 *
 * @generated from message api.v1.TenantServiceInviteResponse
 */
export declare class TenantServiceInviteResponse extends Message<TenantServiceInviteResponse> {
    /**
     * Invite contains a secret which can be sent to a potential user
     * can be appended to the invitation endpoint at our cloud console like
     * console.metalstack.cloud/invite/<secret>
     *
     * @generated from field: api.v1.TenantInvite invite = 1;
     */
    invite?: TenantInvite;
    constructor(data?: PartialMessage<TenantServiceInviteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceInviteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceInviteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceInviteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceInviteResponse;
    static equals(a: TenantServiceInviteResponse | PlainMessage<TenantServiceInviteResponse> | undefined, b: TenantServiceInviteResponse | PlainMessage<TenantServiceInviteResponse> | undefined): boolean;
}
/**
 * TenantServiceInvitesListRequest is the request payload to a list invites request
 *
 * @generated from message api.v1.TenantServiceInvitesListRequest
 */
export declare class TenantServiceInvitesListRequest extends Message<TenantServiceInvitesListRequest> {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
    constructor(data?: PartialMessage<TenantServiceInvitesListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceInvitesListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceInvitesListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceInvitesListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceInvitesListRequest;
    static equals(a: TenantServiceInvitesListRequest | PlainMessage<TenantServiceInvitesListRequest> | undefined, b: TenantServiceInvitesListRequest | PlainMessage<TenantServiceInvitesListRequest> | undefined): boolean;
}
/**
 * TenantServiceInvitesListResponse is the response payload to a list invites request
 *
 * @generated from message api.v1.TenantServiceInvitesListResponse
 */
export declare class TenantServiceInvitesListResponse extends Message<TenantServiceInvitesListResponse> {
    /**
     * Invites not already accepted the invitation to this tenant
     *
     * @generated from field: repeated api.v1.TenantInvite invites = 1;
     */
    invites: TenantInvite[];
    constructor(data?: PartialMessage<TenantServiceInvitesListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceInvitesListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceInvitesListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceInvitesListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceInvitesListResponse;
    static equals(a: TenantServiceInvitesListResponse | PlainMessage<TenantServiceInvitesListResponse> | undefined, b: TenantServiceInvitesListResponse | PlainMessage<TenantServiceInvitesListResponse> | undefined): boolean;
}
/**
 * TenantServiceInviteGetRequest is the request payload to get a invite
 *
 * @generated from message api.v1.TenantServiceInviteGetRequest
 */
export declare class TenantServiceInviteGetRequest extends Message<TenantServiceInviteGetRequest> {
    /**
     * Secret of the invite to get
     *
     * @generated from field: string secret = 1;
     */
    secret: string;
    constructor(data?: PartialMessage<TenantServiceInviteGetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceInviteGetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceInviteGetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceInviteGetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceInviteGetRequest;
    static equals(a: TenantServiceInviteGetRequest | PlainMessage<TenantServiceInviteGetRequest> | undefined, b: TenantServiceInviteGetRequest | PlainMessage<TenantServiceInviteGetRequest> | undefined): boolean;
}
/**
 * TenantServiceInviteGetResponse is the response payload to a get invite request
 *
 * @generated from message api.v1.TenantServiceInviteGetResponse
 */
export declare class TenantServiceInviteGetResponse extends Message<TenantServiceInviteGetResponse> {
    /**
     * Invite is the invite
     *
     * @generated from field: api.v1.TenantInvite invite = 1;
     */
    invite?: TenantInvite;
    constructor(data?: PartialMessage<TenantServiceInviteGetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceInviteGetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceInviteGetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceInviteGetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceInviteGetResponse;
    static equals(a: TenantServiceInviteGetResponse | PlainMessage<TenantServiceInviteGetResponse> | undefined, b: TenantServiceInviteGetResponse | PlainMessage<TenantServiceInviteGetResponse> | undefined): boolean;
}
/**
 * TenantServiceRemoveMemberRequest is used to remove a member from a tenant
 *
 * @generated from message api.v1.TenantServiceRemoveMemberRequest
 */
export declare class TenantServiceRemoveMemberRequest extends Message<TenantServiceRemoveMemberRequest> {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * MemberID is the id of the member to remove from this tenant
     *
     * @generated from field: string member_id = 2;
     */
    memberId: string;
    constructor(data?: PartialMessage<TenantServiceRemoveMemberRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceRemoveMemberRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceRemoveMemberRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceRemoveMemberRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceRemoveMemberRequest;
    static equals(a: TenantServiceRemoveMemberRequest | PlainMessage<TenantServiceRemoveMemberRequest> | undefined, b: TenantServiceRemoveMemberRequest | PlainMessage<TenantServiceRemoveMemberRequest> | undefined): boolean;
}
/**
 * TenantServiceRemoveMemberResponse is the response payload to a remove member request
 *
 * @generated from message api.v1.TenantServiceRemoveMemberResponse
 */
export declare class TenantServiceRemoveMemberResponse extends Message<TenantServiceRemoveMemberResponse> {
    constructor(data?: PartialMessage<TenantServiceRemoveMemberResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceRemoveMemberResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceRemoveMemberResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceRemoveMemberResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceRemoveMemberResponse;
    static equals(a: TenantServiceRemoveMemberResponse | PlainMessage<TenantServiceRemoveMemberResponse> | undefined, b: TenantServiceRemoveMemberResponse | PlainMessage<TenantServiceRemoveMemberResponse> | undefined): boolean;
}
/**
 * TenantServiceInviteAcceptRequest is the request payload to a accept invite request
 *
 * @generated from message api.v1.TenantServiceInviteAcceptRequest
 */
export declare class TenantServiceInviteAcceptRequest extends Message<TenantServiceInviteAcceptRequest> {
    /**
     * Secret is the invitation secret part of the invitation url
     *
     * @generated from field: string secret = 1;
     */
    secret: string;
    constructor(data?: PartialMessage<TenantServiceInviteAcceptRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceInviteAcceptRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceInviteAcceptRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceInviteAcceptRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceInviteAcceptRequest;
    static equals(a: TenantServiceInviteAcceptRequest | PlainMessage<TenantServiceInviteAcceptRequest> | undefined, b: TenantServiceInviteAcceptRequest | PlainMessage<TenantServiceInviteAcceptRequest> | undefined): boolean;
}
/**
 * TenantServiceInvitesListResponse is the response payload to a accept invite request
 *
 * @generated from message api.v1.TenantServiceInviteAcceptResponse
 */
export declare class TenantServiceInviteAcceptResponse extends Message<TenantServiceInviteAcceptResponse> {
    /**
     * Tenant ID of the joined tenant
     *
     * @generated from field: string tenant = 1;
     */
    tenant: string;
    /**
     * TenantName of the joined tenant
     *
     * @generated from field: string tenant_name = 2;
     */
    tenantName: string;
    constructor(data?: PartialMessage<TenantServiceInviteAcceptResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceInviteAcceptResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceInviteAcceptResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceInviteAcceptResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceInviteAcceptResponse;
    static equals(a: TenantServiceInviteAcceptResponse | PlainMessage<TenantServiceInviteAcceptResponse> | undefined, b: TenantServiceInviteAcceptResponse | PlainMessage<TenantServiceInviteAcceptResponse> | undefined): boolean;
}
/**
 * TenantServiceInviteDeleteRequest is the request payload to a delete invite
 *
 * @generated from message api.v1.TenantServiceInviteDeleteRequest
 */
export declare class TenantServiceInviteDeleteRequest extends Message<TenantServiceInviteDeleteRequest> {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Secret of the invite to delete
     *
     * @generated from field: string secret = 2;
     */
    secret: string;
    constructor(data?: PartialMessage<TenantServiceInviteDeleteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceInviteDeleteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceInviteDeleteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceInviteDeleteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceInviteDeleteRequest;
    static equals(a: TenantServiceInviteDeleteRequest | PlainMessage<TenantServiceInviteDeleteRequest> | undefined, b: TenantServiceInviteDeleteRequest | PlainMessage<TenantServiceInviteDeleteRequest> | undefined): boolean;
}
/**
 * TenantServiceInviteDeleteResponse is the response payload of a delete invite request
 *
 * @generated from message api.v1.TenantServiceInviteDeleteResponse
 */
export declare class TenantServiceInviteDeleteResponse extends Message<TenantServiceInviteDeleteResponse> {
    constructor(data?: PartialMessage<TenantServiceInviteDeleteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceInviteDeleteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceInviteDeleteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceInviteDeleteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceInviteDeleteResponse;
    static equals(a: TenantServiceInviteDeleteResponse | PlainMessage<TenantServiceInviteDeleteResponse> | undefined, b: TenantServiceInviteDeleteResponse | PlainMessage<TenantServiceInviteDeleteResponse> | undefined): boolean;
}
/**
 * TenantServiceUpdateMemberRequest is used to update a member from a tenant
 *
 * @generated from message api.v1.TenantServiceUpdateMemberRequest
 */
export declare class TenantServiceUpdateMemberRequest extends Message<TenantServiceUpdateMemberRequest> {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * MemberID is the id of the member to update in this tenant
     *
     * @generated from field: string member_id = 2;
     */
    memberId: string;
    /**
     * Role of this user in this tenant
     *
     * @generated from field: api.v1.TenantRole role = 3;
     */
    role: TenantRole;
    constructor(data?: PartialMessage<TenantServiceUpdateMemberRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceUpdateMemberRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceUpdateMemberRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceUpdateMemberRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceUpdateMemberRequest;
    static equals(a: TenantServiceUpdateMemberRequest | PlainMessage<TenantServiceUpdateMemberRequest> | undefined, b: TenantServiceUpdateMemberRequest | PlainMessage<TenantServiceUpdateMemberRequest> | undefined): boolean;
}
/**
 * TenantServiceUpdateMemberResponse is the response payload to a update member request
 *
 * @generated from message api.v1.TenantServiceUpdateMemberResponse
 */
export declare class TenantServiceUpdateMemberResponse extends Message<TenantServiceUpdateMemberResponse> {
    /**
     * TenantMember is the updated membership
     *
     * @generated from field: api.v1.TenantMember tenant_member = 1;
     */
    tenantMember?: TenantMember;
    constructor(data?: PartialMessage<TenantServiceUpdateMemberResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "api.v1.TenantServiceUpdateMemberResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantServiceUpdateMemberResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantServiceUpdateMemberResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantServiceUpdateMemberResponse;
    static equals(a: TenantServiceUpdateMemberResponse | PlainMessage<TenantServiceUpdateMemberResponse> | undefined, b: TenantServiceUpdateMemberResponse | PlainMessage<TenantServiceUpdateMemberResponse> | undefined): boolean;
}
