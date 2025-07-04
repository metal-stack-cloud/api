import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { OAuthProvider, TenantRole } from "./common_pb";
import type { Coupon } from "./payment_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file api/v1/tenant.proto.
 */
export declare const file_api_v1_tenant: GenFile;
/**
 * Tenant is a customer of the platform
 *
 * @generated from message api.v1.Tenant
 */
export type Tenant = Message<"api.v1.Tenant"> & {
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
};
/**
 * Describes the message api.v1.Tenant.
 * Use `create(TenantSchema)` to create a new message.
 */
export declare const TenantSchema: GenMessage<Tenant>;
/**
 * TenantMember defines a user that participates at a tenant
 *
 * @generated from message api.v1.TenantMember
 */
export type TenantMember = Message<"api.v1.TenantMember"> & {
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
     * ProjectIds for the projects in which a user is a direct member
     *
     * @generated from field: repeated string project_ids = 4;
     */
    projectIds: string[];
    /**
     * CreatedAt the date when the member was added to the tenant
     *
     * @generated from field: google.protobuf.Timestamp created_at = 10;
     */
    createdAt?: Timestamp;
};
/**
 * Describes the message api.v1.TenantMember.
 * Use `create(TenantMemberSchema)` to create a new message.
 */
export declare const TenantMemberSchema: GenMessage<TenantMember>;
/**
 * TenantInvite defines invite to tenant
 *
 * @generated from message api.v1.TenantInvite
 */
export type TenantInvite = Message<"api.v1.TenantInvite"> & {
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
};
/**
 * Describes the message api.v1.TenantInvite.
 * Use `create(TenantInviteSchema)` to create a new message.
 */
export declare const TenantInviteSchema: GenMessage<TenantInvite>;
/**
 * PaymentDetails of a tenant
 *
 * @generated from message api.v1.PaymentDetails
 */
export type PaymentDetails = Message<"api.v1.PaymentDetails"> & {
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
};
/**
 * Describes the message api.v1.PaymentDetails.
 * Use `create(PaymentDetailsSchema)` to create a new message.
 */
export declare const PaymentDetailsSchema: GenMessage<PaymentDetails>;
/**
 * TermsAndConditions the tenant accepted
 *
 * @generated from message api.v1.TermsAndConditions
 */
export type TermsAndConditions = Message<"api.v1.TermsAndConditions"> & {
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
};
/**
 * Describes the message api.v1.TermsAndConditions.
 * Use `create(TermsAndConditionsSchema)` to create a new message.
 */
export declare const TermsAndConditionsSchema: GenMessage<TermsAndConditions>;
/**
 * TermsAndConditionsUpdate
 *
 * @generated from message api.v1.TermsAndConditionsUpdate
 */
export type TermsAndConditionsUpdate = Message<"api.v1.TermsAndConditionsUpdate"> & {
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
};
/**
 * Describes the message api.v1.TermsAndConditionsUpdate.
 * Use `create(TermsAndConditionsUpdateSchema)` to create a new message.
 */
export declare const TermsAndConditionsUpdateSchema: GenMessage<TermsAndConditionsUpdate>;
/**
 * TenantServiceListRequest is the request payload of the tenant list request
 *
 * @generated from message api.v1.TenantServiceListRequest
 */
export type TenantServiceListRequest = Message<"api.v1.TenantServiceListRequest"> & {
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
};
/**
 * Describes the message api.v1.TenantServiceListRequest.
 * Use `create(TenantServiceListRequestSchema)` to create a new message.
 */
export declare const TenantServiceListRequestSchema: GenMessage<TenantServiceListRequest>;
/**
 * TenantServiceGetRequest is the request payload of the tenant get request
 *
 * @generated from message api.v1.TenantServiceGetRequest
 */
export type TenantServiceGetRequest = Message<"api.v1.TenantServiceGetRequest"> & {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
};
/**
 * Describes the message api.v1.TenantServiceGetRequest.
 * Use `create(TenantServiceGetRequestSchema)` to create a new message.
 */
export declare const TenantServiceGetRequestSchema: GenMessage<TenantServiceGetRequest>;
/**
 * TenantServiceCreateRequest is the request payload of the tenant create request
 *
 * @generated from message api.v1.TenantServiceCreateRequest
 */
export type TenantServiceCreateRequest = Message<"api.v1.TenantServiceCreateRequest"> & {
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
};
/**
 * Describes the message api.v1.TenantServiceCreateRequest.
 * Use `create(TenantServiceCreateRequestSchema)` to create a new message.
 */
export declare const TenantServiceCreateRequestSchema: GenMessage<TenantServiceCreateRequest>;
/**
 * TenantServiceCreateOrUpdateRequest is the request payload of the tenant create or update request
 *
 * @generated from message api.v1.TenantServiceCreateOrUpdateRequest
 */
export type TenantServiceCreateOrUpdateRequest = Message<"api.v1.TenantServiceCreateOrUpdateRequest"> & {
    /**
     * Tenant the tenant to create or update
     *
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
};
/**
 * Describes the message api.v1.TenantServiceCreateOrUpdateRequest.
 * Use `create(TenantServiceCreateOrUpdateRequestSchema)` to create a new message.
 */
export declare const TenantServiceCreateOrUpdateRequestSchema: GenMessage<TenantServiceCreateOrUpdateRequest>;
/**
 * TenantServiceUpdateRequest is the request payload of the tenant update request
 *
 * @generated from message api.v1.TenantServiceUpdateRequest
 */
export type TenantServiceUpdateRequest = Message<"api.v1.TenantServiceUpdateRequest"> & {
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
};
/**
 * Describes the message api.v1.TenantServiceUpdateRequest.
 * Use `create(TenantServiceUpdateRequestSchema)` to create a new message.
 */
export declare const TenantServiceUpdateRequestSchema: GenMessage<TenantServiceUpdateRequest>;
/**
 * TenantServiceDeleteRequest is the request payload of the tenant delete request
 *
 * @generated from message api.v1.TenantServiceDeleteRequest
 */
export type TenantServiceDeleteRequest = Message<"api.v1.TenantServiceDeleteRequest"> & {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
};
/**
 * Describes the message api.v1.TenantServiceDeleteRequest.
 * Use `create(TenantServiceDeleteRequestSchema)` to create a new message.
 */
export declare const TenantServiceDeleteRequestSchema: GenMessage<TenantServiceDeleteRequest>;
/**
 * TenantServiceGetResponse is the response payload of the tenant get request
 *
 * @generated from message api.v1.TenantServiceGetResponse
 */
export type TenantServiceGetResponse = Message<"api.v1.TenantServiceGetResponse"> & {
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
};
/**
 * Describes the message api.v1.TenantServiceGetResponse.
 * Use `create(TenantServiceGetResponseSchema)` to create a new message.
 */
export declare const TenantServiceGetResponseSchema: GenMessage<TenantServiceGetResponse>;
/**
 * TenantServiceListResponse is the response payload of the tenant list request
 *
 * @generated from message api.v1.TenantServiceListResponse
 */
export type TenantServiceListResponse = Message<"api.v1.TenantServiceListResponse"> & {
    /**
     * Tenants is the list of tenants
     *
     * @generated from field: repeated api.v1.Tenant tenants = 1;
     */
    tenants: Tenant[];
};
/**
 * Describes the message api.v1.TenantServiceListResponse.
 * Use `create(TenantServiceListResponseSchema)` to create a new message.
 */
export declare const TenantServiceListResponseSchema: GenMessage<TenantServiceListResponse>;
/**
 * TenantServiceCreateResponse is the response payload of the tenant create request
 *
 * @generated from message api.v1.TenantServiceCreateResponse
 */
export type TenantServiceCreateResponse = Message<"api.v1.TenantServiceCreateResponse"> & {
    /**
     * Tenant is the tenant
     *
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
};
/**
 * Describes the message api.v1.TenantServiceCreateResponse.
 * Use `create(TenantServiceCreateResponseSchema)` to create a new message.
 */
export declare const TenantServiceCreateResponseSchema: GenMessage<TenantServiceCreateResponse>;
/**
 * TenantServiceCreateOrUpdateResponse is the response payload of the tenant create or update request
 *
 * @generated from message api.v1.TenantServiceCreateOrUpdateResponse
 */
export type TenantServiceCreateOrUpdateResponse = Message<"api.v1.TenantServiceCreateOrUpdateResponse"> & {
    /**
     * Tenant is the tenant
     *
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
};
/**
 * Describes the message api.v1.TenantServiceCreateOrUpdateResponse.
 * Use `create(TenantServiceCreateOrUpdateResponseSchema)` to create a new message.
 */
export declare const TenantServiceCreateOrUpdateResponseSchema: GenMessage<TenantServiceCreateOrUpdateResponse>;
/**
 * TenantServiceUpdateResponse is the response payload of the tenant update request
 *
 * @generated from message api.v1.TenantServiceUpdateResponse
 */
export type TenantServiceUpdateResponse = Message<"api.v1.TenantServiceUpdateResponse"> & {
    /**
     * Tenant is the tenant
     *
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
};
/**
 * Describes the message api.v1.TenantServiceUpdateResponse.
 * Use `create(TenantServiceUpdateResponseSchema)` to create a new message.
 */
export declare const TenantServiceUpdateResponseSchema: GenMessage<TenantServiceUpdateResponse>;
/**
 * TenantServiceDeleteResponse is the response payload of the tenant delete request
 *
 * @generated from message api.v1.TenantServiceDeleteResponse
 */
export type TenantServiceDeleteResponse = Message<"api.v1.TenantServiceDeleteResponse"> & {
    /**
     * Tenant is the tenant
     *
     * @generated from field: api.v1.Tenant tenant = 1;
     */
    tenant?: Tenant;
};
/**
 * Describes the message api.v1.TenantServiceDeleteResponse.
 * Use `create(TenantServiceDeleteResponseSchema)` to create a new message.
 */
export declare const TenantServiceDeleteResponseSchema: GenMessage<TenantServiceDeleteResponse>;
/**
 * TenantServiceInviteRequest is used to invite a member to a tenant
 *
 * @generated from message api.v1.TenantServiceInviteRequest
 */
export type TenantServiceInviteRequest = Message<"api.v1.TenantServiceInviteRequest"> & {
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
};
/**
 * Describes the message api.v1.TenantServiceInviteRequest.
 * Use `create(TenantServiceInviteRequestSchema)` to create a new message.
 */
export declare const TenantServiceInviteRequestSchema: GenMessage<TenantServiceInviteRequest>;
/**
 * TenantServiceInviteRequest is the response payload to a invite member request
 *
 * @generated from message api.v1.TenantServiceInviteResponse
 */
export type TenantServiceInviteResponse = Message<"api.v1.TenantServiceInviteResponse"> & {
    /**
     * Invite contains a secret which can be sent to a potential user
     * can be appended to the invitation endpoint at our cloud console like
     * console.metalstack.cloud/invite/<secret>
     *
     * @generated from field: api.v1.TenantInvite invite = 1;
     */
    invite?: TenantInvite;
};
/**
 * Describes the message api.v1.TenantServiceInviteResponse.
 * Use `create(TenantServiceInviteResponseSchema)` to create a new message.
 */
export declare const TenantServiceInviteResponseSchema: GenMessage<TenantServiceInviteResponse>;
/**
 * TenantServiceInvitesListRequest is the request payload to a list invites request
 *
 * @generated from message api.v1.TenantServiceInvitesListRequest
 */
export type TenantServiceInvitesListRequest = Message<"api.v1.TenantServiceInvitesListRequest"> & {
    /**
     * Login of the tenant
     *
     * @generated from field: string login = 1;
     */
    login: string;
};
/**
 * Describes the message api.v1.TenantServiceInvitesListRequest.
 * Use `create(TenantServiceInvitesListRequestSchema)` to create a new message.
 */
export declare const TenantServiceInvitesListRequestSchema: GenMessage<TenantServiceInvitesListRequest>;
/**
 * TenantServiceInvitesListResponse is the response payload to a list invites request
 *
 * @generated from message api.v1.TenantServiceInvitesListResponse
 */
export type TenantServiceInvitesListResponse = Message<"api.v1.TenantServiceInvitesListResponse"> & {
    /**
     * Invites not already accepted the invitation to this tenant
     *
     * @generated from field: repeated api.v1.TenantInvite invites = 1;
     */
    invites: TenantInvite[];
};
/**
 * Describes the message api.v1.TenantServiceInvitesListResponse.
 * Use `create(TenantServiceInvitesListResponseSchema)` to create a new message.
 */
export declare const TenantServiceInvitesListResponseSchema: GenMessage<TenantServiceInvitesListResponse>;
/**
 * TenantServiceInviteGetRequest is the request payload to get a invite
 *
 * @generated from message api.v1.TenantServiceInviteGetRequest
 */
export type TenantServiceInviteGetRequest = Message<"api.v1.TenantServiceInviteGetRequest"> & {
    /**
     * Secret of the invite to get
     *
     * @generated from field: string secret = 1;
     */
    secret: string;
};
/**
 * Describes the message api.v1.TenantServiceInviteGetRequest.
 * Use `create(TenantServiceInviteGetRequestSchema)` to create a new message.
 */
export declare const TenantServiceInviteGetRequestSchema: GenMessage<TenantServiceInviteGetRequest>;
/**
 * TenantServiceInviteGetResponse is the response payload to a get invite request
 *
 * @generated from message api.v1.TenantServiceInviteGetResponse
 */
export type TenantServiceInviteGetResponse = Message<"api.v1.TenantServiceInviteGetResponse"> & {
    /**
     * Invite is the invite
     *
     * @generated from field: api.v1.TenantInvite invite = 1;
     */
    invite?: TenantInvite;
};
/**
 * Describes the message api.v1.TenantServiceInviteGetResponse.
 * Use `create(TenantServiceInviteGetResponseSchema)` to create a new message.
 */
export declare const TenantServiceInviteGetResponseSchema: GenMessage<TenantServiceInviteGetResponse>;
/**
 * TenantServiceRemoveMemberRequest is used to remove a member from a tenant
 *
 * @generated from message api.v1.TenantServiceRemoveMemberRequest
 */
export type TenantServiceRemoveMemberRequest = Message<"api.v1.TenantServiceRemoveMemberRequest"> & {
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
};
/**
 * Describes the message api.v1.TenantServiceRemoveMemberRequest.
 * Use `create(TenantServiceRemoveMemberRequestSchema)` to create a new message.
 */
export declare const TenantServiceRemoveMemberRequestSchema: GenMessage<TenantServiceRemoveMemberRequest>;
/**
 * TenantServiceRemoveMemberResponse is the response payload to a remove member request
 *
 * @generated from message api.v1.TenantServiceRemoveMemberResponse
 */
export type TenantServiceRemoveMemberResponse = Message<"api.v1.TenantServiceRemoveMemberResponse"> & {};
/**
 * Describes the message api.v1.TenantServiceRemoveMemberResponse.
 * Use `create(TenantServiceRemoveMemberResponseSchema)` to create a new message.
 */
export declare const TenantServiceRemoveMemberResponseSchema: GenMessage<TenantServiceRemoveMemberResponse>;
/**
 * TenantServiceInviteAcceptRequest is the request payload to a accept invite request
 *
 * @generated from message api.v1.TenantServiceInviteAcceptRequest
 */
export type TenantServiceInviteAcceptRequest = Message<"api.v1.TenantServiceInviteAcceptRequest"> & {
    /**
     * Secret is the invitation secret part of the invitation url
     *
     * @generated from field: string secret = 1;
     */
    secret: string;
};
/**
 * Describes the message api.v1.TenantServiceInviteAcceptRequest.
 * Use `create(TenantServiceInviteAcceptRequestSchema)` to create a new message.
 */
export declare const TenantServiceInviteAcceptRequestSchema: GenMessage<TenantServiceInviteAcceptRequest>;
/**
 * TenantServiceInvitesListResponse is the response payload to a accept invite request
 *
 * @generated from message api.v1.TenantServiceInviteAcceptResponse
 */
export type TenantServiceInviteAcceptResponse = Message<"api.v1.TenantServiceInviteAcceptResponse"> & {
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
};
/**
 * Describes the message api.v1.TenantServiceInviteAcceptResponse.
 * Use `create(TenantServiceInviteAcceptResponseSchema)` to create a new message.
 */
export declare const TenantServiceInviteAcceptResponseSchema: GenMessage<TenantServiceInviteAcceptResponse>;
/**
 * TenantServiceInviteDeleteRequest is the request payload to a delete invite
 *
 * @generated from message api.v1.TenantServiceInviteDeleteRequest
 */
export type TenantServiceInviteDeleteRequest = Message<"api.v1.TenantServiceInviteDeleteRequest"> & {
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
};
/**
 * Describes the message api.v1.TenantServiceInviteDeleteRequest.
 * Use `create(TenantServiceInviteDeleteRequestSchema)` to create a new message.
 */
export declare const TenantServiceInviteDeleteRequestSchema: GenMessage<TenantServiceInviteDeleteRequest>;
/**
 * TenantServiceInviteDeleteResponse is the response payload of a delete invite request
 *
 * @generated from message api.v1.TenantServiceInviteDeleteResponse
 */
export type TenantServiceInviteDeleteResponse = Message<"api.v1.TenantServiceInviteDeleteResponse"> & {};
/**
 * Describes the message api.v1.TenantServiceInviteDeleteResponse.
 * Use `create(TenantServiceInviteDeleteResponseSchema)` to create a new message.
 */
export declare const TenantServiceInviteDeleteResponseSchema: GenMessage<TenantServiceInviteDeleteResponse>;
/**
 * TenantServiceUpdateMemberRequest is used to update a member from a tenant
 *
 * @generated from message api.v1.TenantServiceUpdateMemberRequest
 */
export type TenantServiceUpdateMemberRequest = Message<"api.v1.TenantServiceUpdateMemberRequest"> & {
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
};
/**
 * Describes the message api.v1.TenantServiceUpdateMemberRequest.
 * Use `create(TenantServiceUpdateMemberRequestSchema)` to create a new message.
 */
export declare const TenantServiceUpdateMemberRequestSchema: GenMessage<TenantServiceUpdateMemberRequest>;
/**
 * TenantServiceUpdateMemberResponse is the response payload to a update member request
 *
 * @generated from message api.v1.TenantServiceUpdateMemberResponse
 */
export type TenantServiceUpdateMemberResponse = Message<"api.v1.TenantServiceUpdateMemberResponse"> & {
    /**
     * TenantMember is the updated membership
     *
     * @generated from field: api.v1.TenantMember tenant_member = 1;
     */
    tenantMember?: TenantMember;
};
/**
 * Describes the message api.v1.TenantServiceUpdateMemberResponse.
 * Use `create(TenantServiceUpdateMemberResponseSchema)` to create a new message.
 */
export declare const TenantServiceUpdateMemberResponseSchema: GenMessage<TenantServiceUpdateMemberResponse>;
/**
 * TenantServiceRequestAdmissionRequest is used to request admission for a tenant
 *
 * @generated from message api.v1.TenantServiceRequestAdmissionRequest
 */
export type TenantServiceRequestAdmissionRequest = Message<"api.v1.TenantServiceRequestAdmissionRequest"> & {
    /**
     * Login of the tenant for whom admission is requested
     *
     * @generated from field: string login = 1;
     */
    login: string;
    /**
     * Name of the user
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Email of the user
     *
     * @generated from field: string email = 3;
     */
    email: string;
    /**
     * AcceptedTermsAndConditions indicates if the user has accepted the terms and conditions
     *
     * @generated from field: bool accepted_terms_and_conditions = 4;
     */
    acceptedTermsAndConditions: boolean;
    /**
     * EmailConsent indicates if the user gave consent to receive emails
     *
     * @generated from field: bool email_consent = 5;
     */
    emailConsent: boolean;
};
/**
 * Describes the message api.v1.TenantServiceRequestAdmissionRequest.
 * Use `create(TenantServiceRequestAdmissionRequestSchema)` to create a new message.
 */
export declare const TenantServiceRequestAdmissionRequestSchema: GenMessage<TenantServiceRequestAdmissionRequest>;
/**
 * TenantServiceRequestAdmissionResponse is the response payload an admission request
 *
 * @generated from message api.v1.TenantServiceRequestAdmissionResponse
 */
export type TenantServiceRequestAdmissionResponse = Message<"api.v1.TenantServiceRequestAdmissionResponse"> & {};
/**
 * Describes the message api.v1.TenantServiceRequestAdmissionResponse.
 * Use `create(TenantServiceRequestAdmissionResponseSchema)` to create a new message.
 */
export declare const TenantServiceRequestAdmissionResponseSchema: GenMessage<TenantServiceRequestAdmissionResponse>;
/**
 * TenantService serves tenant related functions
 *
 * @generated from service api.v1.TenantService
 */
export declare const TenantService: GenService<{
    /**
     * Create a tenant
     *
     * @generated from rpc api.v1.TenantService.Create
     */
    create: {
        methodKind: "unary";
        input: typeof TenantServiceCreateRequestSchema;
        output: typeof TenantServiceCreateResponseSchema;
    };
    /**
     * List tenants
     *
     * @generated from rpc api.v1.TenantService.List
     */
    list: {
        methodKind: "unary";
        input: typeof TenantServiceListRequestSchema;
        output: typeof TenantServiceListResponseSchema;
    };
    /**
     * Get a tenant
     *
     * @generated from rpc api.v1.TenantService.Get
     */
    get: {
        methodKind: "unary";
        input: typeof TenantServiceGetRequestSchema;
        output: typeof TenantServiceGetResponseSchema;
    };
    /**
     * Update a tenant
     *
     * @generated from rpc api.v1.TenantService.Update
     */
    update: {
        methodKind: "unary";
        input: typeof TenantServiceUpdateRequestSchema;
        output: typeof TenantServiceUpdateResponseSchema;
    };
    /**
     * Delete a tenant
     *
     * @generated from rpc api.v1.TenantService.Delete
     */
    delete: {
        methodKind: "unary";
        input: typeof TenantServiceDeleteRequestSchema;
        output: typeof TenantServiceDeleteResponseSchema;
    };
    /**
     * RemoveMember remove a member of a tenant
     *
     * @generated from rpc api.v1.TenantService.RemoveMember
     */
    removeMember: {
        methodKind: "unary";
        input: typeof TenantServiceRemoveMemberRequestSchema;
        output: typeof TenantServiceRemoveMemberResponseSchema;
    };
    /**
     * UpdateMember update a member of a tenant
     *
     * @generated from rpc api.v1.TenantService.UpdateMember
     */
    updateMember: {
        methodKind: "unary";
        input: typeof TenantServiceUpdateMemberRequestSchema;
        output: typeof TenantServiceUpdateMemberResponseSchema;
    };
    /**
     * Invite a user to a tenant
     *
     * @generated from rpc api.v1.TenantService.Invite
     */
    invite: {
        methodKind: "unary";
        input: typeof TenantServiceInviteRequestSchema;
        output: typeof TenantServiceInviteResponseSchema;
    };
    /**
     * InviteAccept is called from a user to accept an invitation
     *
     * @generated from rpc api.v1.TenantService.InviteAccept
     */
    inviteAccept: {
        methodKind: "unary";
        input: typeof TenantServiceInviteAcceptRequestSchema;
        output: typeof TenantServiceInviteAcceptResponseSchema;
    };
    /**
     * InviteDelete deletes a pending invitation
     *
     * @generated from rpc api.v1.TenantService.InviteDelete
     */
    inviteDelete: {
        methodKind: "unary";
        input: typeof TenantServiceInviteDeleteRequestSchema;
        output: typeof TenantServiceInviteDeleteResponseSchema;
    };
    /**
     * InvitesList list all invites to a tenant
     *
     * @generated from rpc api.v1.TenantService.InvitesList
     */
    invitesList: {
        methodKind: "unary";
        input: typeof TenantServiceInvitesListRequestSchema;
        output: typeof TenantServiceInvitesListResponseSchema;
    };
    /**
     * InviteGet get an invite
     *
     * @generated from rpc api.v1.TenantService.InviteGet
     */
    inviteGet: {
        methodKind: "unary";
        input: typeof TenantServiceInviteGetRequestSchema;
        output: typeof TenantServiceInviteGetResponseSchema;
    };
    /**
     * RequestAdmission requests admission for a tenant to use the service
     *
     * @generated from rpc api.v1.TenantService.RequestAdmission
     */
    requestAdmission: {
        methodKind: "unary";
        input: typeof TenantServiceRequestAdmissionRequestSchema;
        output: typeof TenantServiceRequestAdmissionResponseSchema;
    };
}>;
