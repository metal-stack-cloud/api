// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: admin/v1/tenant.proto

package adminv1

import (
	_ "github.com/envoyproxy/protoc-gen-validate/validate"
	v1 "github.com/metal-stack-cloud/api/go/api/v1"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type TenantServiceListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Login          *string           `protobuf:"bytes,1,opt,name=login,proto3,oneof" json:"login,omitempty"`
	Name           *string           `protobuf:"bytes,2,opt,name=name,proto3,oneof" json:"name,omitempty"`
	Email          *string           `protobuf:"bytes,3,opt,name=email,proto3,oneof" json:"email,omitempty"`
	OrganisationId *string           `protobuf:"bytes,4,opt,name=organisation_id,json=organisationId,proto3,oneof" json:"organisation_id,omitempty"`
	OauthProvider  *v1.OAuthProvider `protobuf:"varint,5,opt,name=oauth_provider,json=oauthProvider,proto3,enum=api.v1.OAuthProvider,oneof" json:"oauth_provider,omitempty"`
	Admitted       *bool             `protobuf:"varint,6,opt,name=admitted,proto3,oneof" json:"admitted,omitempty"`
	Paging         *v1.Paging        `protobuf:"bytes,7,opt,name=paging,proto3" json:"paging,omitempty"`
}

func (x *TenantServiceListRequest) Reset() {
	*x = TenantServiceListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_tenant_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TenantServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TenantServiceListRequest) ProtoMessage() {}

func (x *TenantServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_tenant_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TenantServiceListRequest.ProtoReflect.Descriptor instead.
func (*TenantServiceListRequest) Descriptor() ([]byte, []int) {
	return file_admin_v1_tenant_proto_rawDescGZIP(), []int{0}
}

func (x *TenantServiceListRequest) GetLogin() string {
	if x != nil && x.Login != nil {
		return *x.Login
	}
	return ""
}

func (x *TenantServiceListRequest) GetName() string {
	if x != nil && x.Name != nil {
		return *x.Name
	}
	return ""
}

func (x *TenantServiceListRequest) GetEmail() string {
	if x != nil && x.Email != nil {
		return *x.Email
	}
	return ""
}

func (x *TenantServiceListRequest) GetOrganisationId() string {
	if x != nil && x.OrganisationId != nil {
		return *x.OrganisationId
	}
	return ""
}

func (x *TenantServiceListRequest) GetOauthProvider() v1.OAuthProvider {
	if x != nil && x.OauthProvider != nil {
		return *x.OauthProvider
	}
	return v1.OAuthProvider(0)
}

func (x *TenantServiceListRequest) GetAdmitted() bool {
	if x != nil && x.Admitted != nil {
		return *x.Admitted
	}
	return false
}

func (x *TenantServiceListRequest) GetPaging() *v1.Paging {
	if x != nil {
		return x.Paging
	}
	return nil
}

type TenantServiceListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Tenants []*v1.Tenant `protobuf:"bytes,1,rep,name=tenants,proto3" json:"tenants,omitempty"`
	// next_page is used for pagination, returns the next page to be fetched and must then be provided in the list request.
	NextPage *uint64 `protobuf:"varint,2,opt,name=next_page,json=nextPage,proto3,oneof" json:"next_page,omitempty"`
}

func (x *TenantServiceListResponse) Reset() {
	*x = TenantServiceListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_tenant_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TenantServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TenantServiceListResponse) ProtoMessage() {}

func (x *TenantServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_tenant_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TenantServiceListResponse.ProtoReflect.Descriptor instead.
func (*TenantServiceListResponse) Descriptor() ([]byte, []int) {
	return file_admin_v1_tenant_proto_rawDescGZIP(), []int{1}
}

func (x *TenantServiceListResponse) GetTenants() []*v1.Tenant {
	if x != nil {
		return x.Tenants
	}
	return nil
}

func (x *TenantServiceListResponse) GetNextPage() uint64 {
	if x != nil && x.NextPage != nil {
		return *x.NextPage
	}
	return 0
}

type TenantServiceAdmitRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TenantId     string  `protobuf:"bytes,1,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
	CouponId     *string `protobuf:"bytes,2,opt,name=coupon_id,json=couponId,proto3,oneof" json:"coupon_id,omitempty"`
	BalanceToAdd *int64  `protobuf:"varint,3,opt,name=balance_to_add,json=balanceToAdd,proto3,oneof" json:"balance_to_add,omitempty"`
}

func (x *TenantServiceAdmitRequest) Reset() {
	*x = TenantServiceAdmitRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_tenant_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TenantServiceAdmitRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TenantServiceAdmitRequest) ProtoMessage() {}

func (x *TenantServiceAdmitRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_tenant_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TenantServiceAdmitRequest.ProtoReflect.Descriptor instead.
func (*TenantServiceAdmitRequest) Descriptor() ([]byte, []int) {
	return file_admin_v1_tenant_proto_rawDescGZIP(), []int{2}
}

func (x *TenantServiceAdmitRequest) GetTenantId() string {
	if x != nil {
		return x.TenantId
	}
	return ""
}

func (x *TenantServiceAdmitRequest) GetCouponId() string {
	if x != nil && x.CouponId != nil {
		return *x.CouponId
	}
	return ""
}

func (x *TenantServiceAdmitRequest) GetBalanceToAdd() int64 {
	if x != nil && x.BalanceToAdd != nil {
		return *x.BalanceToAdd
	}
	return 0
}

type TenantServiceAdmitResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Tenant *v1.Tenant `protobuf:"bytes,1,opt,name=tenant,proto3" json:"tenant,omitempty"`
}

func (x *TenantServiceAdmitResponse) Reset() {
	*x = TenantServiceAdmitResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_tenant_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TenantServiceAdmitResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TenantServiceAdmitResponse) ProtoMessage() {}

func (x *TenantServiceAdmitResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_tenant_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TenantServiceAdmitResponse.ProtoReflect.Descriptor instead.
func (*TenantServiceAdmitResponse) Descriptor() ([]byte, []int) {
	return file_admin_v1_tenant_proto_rawDescGZIP(), []int{3}
}

func (x *TenantServiceAdmitResponse) GetTenant() *v1.Tenant {
	if x != nil {
		return x.Tenant
	}
	return nil
}

type TenantServiceRevokeRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TenantId string `protobuf:"bytes,1,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
}

func (x *TenantServiceRevokeRequest) Reset() {
	*x = TenantServiceRevokeRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_tenant_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TenantServiceRevokeRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TenantServiceRevokeRequest) ProtoMessage() {}

func (x *TenantServiceRevokeRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_tenant_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TenantServiceRevokeRequest.ProtoReflect.Descriptor instead.
func (*TenantServiceRevokeRequest) Descriptor() ([]byte, []int) {
	return file_admin_v1_tenant_proto_rawDescGZIP(), []int{4}
}

func (x *TenantServiceRevokeRequest) GetTenantId() string {
	if x != nil {
		return x.TenantId
	}
	return ""
}

type TenantServiceRevokeResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Tenant *v1.Tenant `protobuf:"bytes,1,opt,name=tenant,proto3" json:"tenant,omitempty"`
}

func (x *TenantServiceRevokeResponse) Reset() {
	*x = TenantServiceRevokeResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_tenant_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TenantServiceRevokeResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TenantServiceRevokeResponse) ProtoMessage() {}

func (x *TenantServiceRevokeResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_tenant_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TenantServiceRevokeResponse.ProtoReflect.Descriptor instead.
func (*TenantServiceRevokeResponse) Descriptor() ([]byte, []int) {
	return file_admin_v1_tenant_proto_rawDescGZIP(), []int{5}
}

func (x *TenantServiceRevokeResponse) GetTenant() *v1.Tenant {
	if x != nil {
		return x.Tenant
	}
	return nil
}

var File_admin_v1_tenant_proto protoreflect.FileDescriptor

var file_admin_v1_tenant_proto_rawDesc = []byte{
	0x0a, 0x15, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x65, 0x6e, 0x61, 0x6e,
	0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76,
	0x31, 0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x74,
	0x65, 0x6e, 0x61, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x76, 0x61, 0x6c,
	0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0xf4, 0x02, 0x0a, 0x18, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x19, 0x0a, 0x05, 0x6c, 0x6f, 0x67, 0x69, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x00, 0x52, 0x05, 0x6c, 0x6f, 0x67, 0x69, 0x6e, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x88, 0x01, 0x01, 0x12, 0x19, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x88, 0x01, 0x01,
	0x12, 0x2c, 0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x73, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x03, 0x52, 0x0e, 0x6f, 0x72, 0x67,
	0x61, 0x6e, 0x69, 0x73, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x41,
	0x0a, 0x0e, 0x6f, 0x61, 0x75, 0x74, 0x68, 0x5f, 0x70, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x15, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e,
	0x4f, 0x41, 0x75, 0x74, 0x68, 0x50, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x48, 0x04, 0x52,
	0x0d, 0x6f, 0x61, 0x75, 0x74, 0x68, 0x50, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x88, 0x01,
	0x01, 0x12, 0x1f, 0x0a, 0x08, 0x61, 0x64, 0x6d, 0x69, 0x74, 0x74, 0x65, 0x64, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x08, 0x48, 0x05, 0x52, 0x08, 0x61, 0x64, 0x6d, 0x69, 0x74, 0x74, 0x65, 0x64, 0x88,
	0x01, 0x01, 0x12, 0x26, 0x0a, 0x06, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x67, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x61, 0x67, 0x69,
	0x6e, 0x67, 0x52, 0x06, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x67, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x6c,
	0x6f, 0x67, 0x69, 0x6e, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x42, 0x08, 0x0a,
	0x06, 0x5f, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x42, 0x12, 0x0a, 0x10, 0x5f, 0x6f, 0x72, 0x67, 0x61,
	0x6e, 0x69, 0x73, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x42, 0x11, 0x0a, 0x0f, 0x5f,
	0x6f, 0x61, 0x75, 0x74, 0x68, 0x5f, 0x70, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x42, 0x0b,
	0x0a, 0x09, 0x5f, 0x61, 0x64, 0x6d, 0x69, 0x74, 0x74, 0x65, 0x64, 0x22, 0x75, 0x0a, 0x19, 0x54,
	0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x28, 0x0a, 0x07, 0x74, 0x65, 0x6e, 0x61,
	0x6e, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x52, 0x07, 0x74, 0x65, 0x6e, 0x61, 0x6e,
	0x74, 0x73, 0x12, 0x20, 0x0a, 0x09, 0x6e, 0x65, 0x78, 0x74, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x04, 0x48, 0x00, 0x52, 0x08, 0x6e, 0x65, 0x78, 0x74, 0x50, 0x61, 0x67,
	0x65, 0x88, 0x01, 0x01, 0x42, 0x0c, 0x0a, 0x0a, 0x5f, 0x6e, 0x65, 0x78, 0x74, 0x5f, 0x70, 0x61,
	0x67, 0x65, 0x22, 0xaf, 0x01, 0x0a, 0x19, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x6d, 0x69, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x1b, 0x0a, 0x09, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x20, 0x0a,
	0x09, 0x63, 0x6f, 0x75, 0x70, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x00, 0x52, 0x08, 0x63, 0x6f, 0x75, 0x70, 0x6f, 0x6e, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12,
	0x32, 0x0a, 0x0e, 0x62, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x5f, 0x74, 0x6f, 0x5f, 0x61, 0x64,
	0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x42, 0x07, 0xfa, 0x42, 0x04, 0x22, 0x02, 0x20, 0x00,
	0x48, 0x01, 0x52, 0x0c, 0x62, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x54, 0x6f, 0x41, 0x64, 0x64,
	0x88, 0x01, 0x01, 0x42, 0x0c, 0x0a, 0x0a, 0x5f, 0x63, 0x6f, 0x75, 0x70, 0x6f, 0x6e, 0x5f, 0x69,
	0x64, 0x42, 0x11, 0x0a, 0x0f, 0x5f, 0x62, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x5f, 0x74, 0x6f,
	0x5f, 0x61, 0x64, 0x64, 0x22, 0x44, 0x0a, 0x1a, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x6d, 0x69, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x26, 0x0a, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61,
	0x6e, 0x74, 0x52, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x22, 0x39, 0x0a, 0x1a, 0x54, 0x65,
	0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x76, 0x6f, 0x6b,
	0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x65, 0x6e, 0x61,
	0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x65, 0x6e,
	0x61, 0x6e, 0x74, 0x49, 0x64, 0x22, 0x45, 0x0a, 0x1b, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x26, 0x0a, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65,
	0x6e, 0x61, 0x6e, 0x74, 0x52, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x32, 0xa1, 0x02, 0x0a,
	0x0d, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x59,
	0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x22, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76,
	0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c,
	0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x61, 0x64, 0x6d,
	0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x08, 0xd0, 0xf3, 0x18, 0x01, 0xd0, 0xf3, 0x18, 0x02, 0x12, 0x58, 0x0a, 0x05, 0x41, 0x64, 0x6d,
	0x69, 0x74, 0x12, 0x23, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65,
	0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x6d, 0x69, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e,
	0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x41, 0x64, 0x6d, 0x69, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x04, 0xd0,
	0xf3, 0x18, 0x01, 0x12, 0x5b, 0x0a, 0x06, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x12, 0x24, 0x2e,
	0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54,
	0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x76, 0x6f,
	0x6b, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x04, 0xd0, 0xf3, 0x18, 0x01,
	0x42, 0x92, 0x01, 0x0a, 0x0c, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76,
	0x31, 0x42, 0x0b, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01,
	0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74,
	0x61, 0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2d, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31, 0x3b, 0x61,
	0x64, 0x6d, 0x69, 0x6e, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x08, 0x41,
	0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x08, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x5c,
	0x56, 0x31, 0xe2, 0x02, 0x14, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50,
	0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x09, 0x41, 0x64, 0x6d, 0x69,
	0x6e, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_admin_v1_tenant_proto_rawDescOnce sync.Once
	file_admin_v1_tenant_proto_rawDescData = file_admin_v1_tenant_proto_rawDesc
)

func file_admin_v1_tenant_proto_rawDescGZIP() []byte {
	file_admin_v1_tenant_proto_rawDescOnce.Do(func() {
		file_admin_v1_tenant_proto_rawDescData = protoimpl.X.CompressGZIP(file_admin_v1_tenant_proto_rawDescData)
	})
	return file_admin_v1_tenant_proto_rawDescData
}

var file_admin_v1_tenant_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_admin_v1_tenant_proto_goTypes = []interface{}{
	(*TenantServiceListRequest)(nil),    // 0: admin.v1.TenantServiceListRequest
	(*TenantServiceListResponse)(nil),   // 1: admin.v1.TenantServiceListResponse
	(*TenantServiceAdmitRequest)(nil),   // 2: admin.v1.TenantServiceAdmitRequest
	(*TenantServiceAdmitResponse)(nil),  // 3: admin.v1.TenantServiceAdmitResponse
	(*TenantServiceRevokeRequest)(nil),  // 4: admin.v1.TenantServiceRevokeRequest
	(*TenantServiceRevokeResponse)(nil), // 5: admin.v1.TenantServiceRevokeResponse
	(v1.OAuthProvider)(0),               // 6: api.v1.OAuthProvider
	(*v1.Paging)(nil),                   // 7: api.v1.Paging
	(*v1.Tenant)(nil),                   // 8: api.v1.Tenant
}
var file_admin_v1_tenant_proto_depIdxs = []int32{
	6, // 0: admin.v1.TenantServiceListRequest.oauth_provider:type_name -> api.v1.OAuthProvider
	7, // 1: admin.v1.TenantServiceListRequest.paging:type_name -> api.v1.Paging
	8, // 2: admin.v1.TenantServiceListResponse.tenants:type_name -> api.v1.Tenant
	8, // 3: admin.v1.TenantServiceAdmitResponse.tenant:type_name -> api.v1.Tenant
	8, // 4: admin.v1.TenantServiceRevokeResponse.tenant:type_name -> api.v1.Tenant
	0, // 5: admin.v1.TenantService.List:input_type -> admin.v1.TenantServiceListRequest
	2, // 6: admin.v1.TenantService.Admit:input_type -> admin.v1.TenantServiceAdmitRequest
	4, // 7: admin.v1.TenantService.Revoke:input_type -> admin.v1.TenantServiceRevokeRequest
	1, // 8: admin.v1.TenantService.List:output_type -> admin.v1.TenantServiceListResponse
	3, // 9: admin.v1.TenantService.Admit:output_type -> admin.v1.TenantServiceAdmitResponse
	5, // 10: admin.v1.TenantService.Revoke:output_type -> admin.v1.TenantServiceRevokeResponse
	8, // [8:11] is the sub-list for method output_type
	5, // [5:8] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_admin_v1_tenant_proto_init() }
func file_admin_v1_tenant_proto_init() {
	if File_admin_v1_tenant_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_admin_v1_tenant_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TenantServiceListRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_admin_v1_tenant_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TenantServiceListResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_admin_v1_tenant_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TenantServiceAdmitRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_admin_v1_tenant_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TenantServiceAdmitResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_admin_v1_tenant_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TenantServiceRevokeRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_admin_v1_tenant_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TenantServiceRevokeResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_admin_v1_tenant_proto_msgTypes[0].OneofWrappers = []interface{}{}
	file_admin_v1_tenant_proto_msgTypes[1].OneofWrappers = []interface{}{}
	file_admin_v1_tenant_proto_msgTypes[2].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_admin_v1_tenant_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_admin_v1_tenant_proto_goTypes,
		DependencyIndexes: file_admin_v1_tenant_proto_depIdxs,
		MessageInfos:      file_admin_v1_tenant_proto_msgTypes,
	}.Build()
	File_admin_v1_tenant_proto = out.File
	file_admin_v1_tenant_proto_rawDesc = nil
	file_admin_v1_tenant_proto_goTypes = nil
	file_admin_v1_tenant_proto_depIdxs = nil
}
