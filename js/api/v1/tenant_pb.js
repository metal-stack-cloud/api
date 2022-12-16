"use strict";
// @generated by protoc-gen-es v0.4.0 with parameter "target=ts"
// @generated from file api/v1/tenant.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantServiceRequestAdmissionResponse = exports.TenantServiceCheckAdmittedResponse = exports.TenantServiceDeleteResponse = exports.TenantServiceUpdateResponse = exports.TenantServiceCreateOrUpdateResponse = exports.TenantServiceCreateResponse = exports.TenantServiceGetResponse = exports.TenantServiceRequestAdmissionRequest = exports.TenantServiceCheckAdmittedRequest = exports.TenantServiceDeleteRequest = exports.TenantServiceUpdateRequest = exports.TenantServiceCreateOrUpdateRequest = exports.TenantServiceCreateRequest = exports.TenantServiceGetRequest = exports.TermsAndConditionsUpdate = exports.TermsAndConditions = exports.PaymentDetailsUpdate = exports.PaymentDetails = exports.Tenant = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const common_pb_js_1 = require("./common_pb.js");
const payment_pb_js_1 = require("./payment_pb.js");
/**
 * Tenant
 *
 * @generated from message api.v1.Tenant
 */
class Tenant extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * the login at the provider
         *
         * @generated from field: string login = 1;
         */
        this.login = "";
        /**
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * @generated from field: string email = 3;
         */
        this.email = "";
        /**
         * @generated from field: string avatar_url = 5;
         */
        this.avatarUrl = "";
        /**
         * @generated from field: api.v1.OAuthProvider oauth_provider = 6;
         */
        this.oauthProvider = common_pb_js_1.OAuthProvider.UNSPECIFIED;
        /**
         * @generated from field: bool admitted = 9;
         */
        this.admitted = false;
        /**
         * @generated from field: string phone_number = 10;
         */
        this.phoneNumber = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Tenant().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Tenant().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Tenant().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Tenant, a, b);
    }
}
exports.Tenant = Tenant;
Tenant.runtime = protobuf_1.proto3;
Tenant.typeName = "api.v1.Tenant";
Tenant.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "oauth_provider", kind: "enum", T: protobuf_1.proto3.getEnumType(common_pb_js_1.OAuthProvider) },
    { no: 8, name: "payment_details", kind: "message", T: PaymentDetails },
    { no: 9, name: "admitted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "terms_and_conditions", kind: "message", T: TermsAndConditions },
    { no: 20, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 22, name: "deleted_at", kind: "message", T: protobuf_1.Timestamp },
]);
/**
 * @generated from message api.v1.PaymentDetails
 */
class PaymentDetails extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string customer_id = 1;
         */
        this.customerId = "";
        /**
         * @generated from field: string payment_method_id = 2;
         */
        this.paymentMethodId = "";
        /**
         * @generated from field: string subscription_id = 3;
         */
        this.subscriptionId = "";
        /**
         * @generated from field: repeated api.v1.Coupon coupons = 4;
         */
        this.coupons = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentDetails().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentDetails().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentDetails().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentDetails, a, b);
    }
}
exports.PaymentDetails = PaymentDetails;
PaymentDetails.runtime = protobuf_1.proto3;
PaymentDetails.typeName = "api.v1.PaymentDetails";
PaymentDetails.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "customer_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "payment_method_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "coupons", kind: "message", T: payment_pb_js_1.Coupon, repeated: true },
]);
/**
 * @generated from message api.v1.PaymentDetailsUpdate
 */
class PaymentDetailsUpdate extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaymentDetailsUpdate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaymentDetailsUpdate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaymentDetailsUpdate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaymentDetailsUpdate, a, b);
    }
}
exports.PaymentDetailsUpdate = PaymentDetailsUpdate;
PaymentDetailsUpdate.runtime = protobuf_1.proto3;
PaymentDetailsUpdate.typeName = "api.v1.PaymentDetailsUpdate";
PaymentDetailsUpdate.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "customer_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "payment_method_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * @generated from message api.v1.TermsAndConditions
 */
class TermsAndConditions extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bool accepted_terms_and_conditions = 1;
         */
        this.acceptedTermsAndConditions = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TermsAndConditions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TermsAndConditions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TermsAndConditions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TermsAndConditions, a, b);
    }
}
exports.TermsAndConditions = TermsAndConditions;
TermsAndConditions.runtime = protobuf_1.proto3;
TermsAndConditions.typeName = "api.v1.TermsAndConditions";
TermsAndConditions.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "accepted_terms_and_conditions", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "accepted_terms_and_conditions_timestamp", kind: "message", T: protobuf_1.Timestamp },
]);
/**
 * @generated from message api.v1.TermsAndConditionsUpdate
 */
class TermsAndConditionsUpdate extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TermsAndConditionsUpdate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TermsAndConditionsUpdate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TermsAndConditionsUpdate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TermsAndConditionsUpdate, a, b);
    }
}
exports.TermsAndConditionsUpdate = TermsAndConditionsUpdate;
TermsAndConditionsUpdate.runtime = protobuf_1.proto3;
TermsAndConditionsUpdate.typeName = "api.v1.TermsAndConditionsUpdate";
TermsAndConditionsUpdate.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "accepted_terms_and_conditions", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 2, name: "accepted_terms_and_conditions_timestamp", kind: "message", T: protobuf_1.Timestamp, opt: true },
]);
/**
 * @generated from message api.v1.TenantServiceGetRequest
 */
class TenantServiceGetRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string login = 1;
         */
        this.login = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceGetRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceGetRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceGetRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceGetRequest, a, b);
    }
}
exports.TenantServiceGetRequest = TenantServiceGetRequest;
TenantServiceGetRequest.runtime = protobuf_1.proto3;
TenantServiceGetRequest.typeName = "api.v1.TenantServiceGetRequest";
TenantServiceGetRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.TenantServiceCreateRequest
 */
class TenantServiceCreateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceCreateRequest, a, b);
    }
}
exports.TenantServiceCreateRequest = TenantServiceCreateRequest;
TenantServiceCreateRequest.runtime = protobuf_1.proto3;
TenantServiceCreateRequest.typeName = "api.v1.TenantServiceCreateRequest";
TenantServiceCreateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
]);
/**
 * @generated from message api.v1.TenantServiceCreateOrUpdateRequest
 */
class TenantServiceCreateOrUpdateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceCreateOrUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceCreateOrUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceCreateOrUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceCreateOrUpdateRequest, a, b);
    }
}
exports.TenantServiceCreateOrUpdateRequest = TenantServiceCreateOrUpdateRequest;
TenantServiceCreateOrUpdateRequest.runtime = protobuf_1.proto3;
TenantServiceCreateOrUpdateRequest.typeName = "api.v1.TenantServiceCreateOrUpdateRequest";
TenantServiceCreateOrUpdateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
]);
/**
 * @generated from message api.v1.TenantServiceUpdateRequest
 */
class TenantServiceUpdateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * the login at the provider
         *
         * @generated from field: string login = 1;
         */
        this.login = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceUpdateRequest, a, b);
    }
}
exports.TenantServiceUpdateRequest = TenantServiceUpdateRequest;
TenantServiceUpdateRequest.runtime = protobuf_1.proto3;
TenantServiceUpdateRequest.typeName = "api.v1.TenantServiceUpdateRequest";
TenantServiceUpdateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "payment_details", kind: "message", T: PaymentDetailsUpdate, opt: true },
    { no: 9, name: "terms_and_conditions", kind: "message", T: TermsAndConditionsUpdate, opt: true },
]);
/**
 * @generated from message api.v1.TenantServiceDeleteRequest
 */
class TenantServiceDeleteRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string login = 1;
         */
        this.login = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceDeleteRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceDeleteRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceDeleteRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceDeleteRequest, a, b);
    }
}
exports.TenantServiceDeleteRequest = TenantServiceDeleteRequest;
TenantServiceDeleteRequest.runtime = protobuf_1.proto3;
TenantServiceDeleteRequest.typeName = "api.v1.TenantServiceDeleteRequest";
TenantServiceDeleteRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.TenantServiceCheckAdmittedRequest
 */
class TenantServiceCheckAdmittedRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string login = 1;
         */
        this.login = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceCheckAdmittedRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceCheckAdmittedRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceCheckAdmittedRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceCheckAdmittedRequest, a, b);
    }
}
exports.TenantServiceCheckAdmittedRequest = TenantServiceCheckAdmittedRequest;
TenantServiceCheckAdmittedRequest.runtime = protobuf_1.proto3;
TenantServiceCheckAdmittedRequest.typeName = "api.v1.TenantServiceCheckAdmittedRequest";
TenantServiceCheckAdmittedRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message api.v1.TenantServiceRequestAdmissionRequest
 */
class TenantServiceRequestAdmissionRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string login = 1;
         */
        this.login = "";
        /**
         * @generated from field: string email = 2;
         */
        this.email = "";
        /**
         * @generated from field: string phone_number = 3;
         */
        this.phoneNumber = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceRequestAdmissionRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceRequestAdmissionRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceRequestAdmissionRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceRequestAdmissionRequest, a, b);
    }
}
exports.TenantServiceRequestAdmissionRequest = TenantServiceRequestAdmissionRequest;
TenantServiceRequestAdmissionRequest.runtime = protobuf_1.proto3;
TenantServiceRequestAdmissionRequest.typeName = "api.v1.TenantServiceRequestAdmissionRequest";
TenantServiceRequestAdmissionRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "login", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Responses
 *
 * @generated from message api.v1.TenantServiceGetResponse
 */
class TenantServiceGetResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceGetResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceGetResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceGetResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceGetResponse, a, b);
    }
}
exports.TenantServiceGetResponse = TenantServiceGetResponse;
TenantServiceGetResponse.runtime = protobuf_1.proto3;
TenantServiceGetResponse.typeName = "api.v1.TenantServiceGetResponse";
TenantServiceGetResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
]);
/**
 * @generated from message api.v1.TenantServiceCreateResponse
 */
class TenantServiceCreateResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceCreateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceCreateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceCreateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceCreateResponse, a, b);
    }
}
exports.TenantServiceCreateResponse = TenantServiceCreateResponse;
TenantServiceCreateResponse.runtime = protobuf_1.proto3;
TenantServiceCreateResponse.typeName = "api.v1.TenantServiceCreateResponse";
TenantServiceCreateResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
]);
/**
 * @generated from message api.v1.TenantServiceCreateOrUpdateResponse
 */
class TenantServiceCreateOrUpdateResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceCreateOrUpdateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceCreateOrUpdateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceCreateOrUpdateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceCreateOrUpdateResponse, a, b);
    }
}
exports.TenantServiceCreateOrUpdateResponse = TenantServiceCreateOrUpdateResponse;
TenantServiceCreateOrUpdateResponse.runtime = protobuf_1.proto3;
TenantServiceCreateOrUpdateResponse.typeName = "api.v1.TenantServiceCreateOrUpdateResponse";
TenantServiceCreateOrUpdateResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
]);
/**
 * @generated from message api.v1.TenantServiceUpdateResponse
 */
class TenantServiceUpdateResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceUpdateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceUpdateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceUpdateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceUpdateResponse, a, b);
    }
}
exports.TenantServiceUpdateResponse = TenantServiceUpdateResponse;
TenantServiceUpdateResponse.runtime = protobuf_1.proto3;
TenantServiceUpdateResponse.typeName = "api.v1.TenantServiceUpdateResponse";
TenantServiceUpdateResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
]);
/**
 * @generated from message api.v1.TenantServiceDeleteResponse
 */
class TenantServiceDeleteResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceDeleteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceDeleteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceDeleteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceDeleteResponse, a, b);
    }
}
exports.TenantServiceDeleteResponse = TenantServiceDeleteResponse;
TenantServiceDeleteResponse.runtime = protobuf_1.proto3;
TenantServiceDeleteResponse.typeName = "api.v1.TenantServiceDeleteResponse";
TenantServiceDeleteResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
]);
/**
 * @generated from message api.v1.TenantServiceCheckAdmittedResponse
 */
class TenantServiceCheckAdmittedResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bool admitted = 1;
         */
        this.admitted = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceCheckAdmittedResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceCheckAdmittedResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceCheckAdmittedResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceCheckAdmittedResponse, a, b);
    }
}
exports.TenantServiceCheckAdmittedResponse = TenantServiceCheckAdmittedResponse;
TenantServiceCheckAdmittedResponse.runtime = protobuf_1.proto3;
TenantServiceCheckAdmittedResponse.typeName = "api.v1.TenantServiceCheckAdmittedResponse";
TenantServiceCheckAdmittedResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "admitted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message api.v1.TenantServiceRequestAdmissionResponse
 */
class TenantServiceRequestAdmissionResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantServiceRequestAdmissionResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantServiceRequestAdmissionResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantServiceRequestAdmissionResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantServiceRequestAdmissionResponse, a, b);
    }
}
exports.TenantServiceRequestAdmissionResponse = TenantServiceRequestAdmissionResponse;
TenantServiceRequestAdmissionResponse.runtime = protobuf_1.proto3;
TenantServiceRequestAdmissionResponse.typeName = "api.v1.TenantServiceRequestAdmissionResponse";
TenantServiceRequestAdmissionResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
]);
