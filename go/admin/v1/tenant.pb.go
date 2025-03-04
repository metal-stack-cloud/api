// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.5
// 	protoc        (unknown)
// source: admin/v1/tenant.proto

package adminv1

import (
	_ "buf.build/gen/go/bufbuild/protovalidate/protocolbuffers/go/buf/validate"
	v1 "github.com/metal-stack-cloud/api/go/api/v1"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
	unsafe "unsafe"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// TenantServiceListRequest is the request payload for a tenant list request
type TenantServiceListRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Tenant filters the result list by the given tenant id
	Tenant *string `protobuf:"bytes,9,opt,name=tenant,proto3,oneof" json:"tenant,omitempty"`
	// Name filters the result list by the given tenant name
	Name *string `protobuf:"bytes,2,opt,name=name,proto3,oneof" json:"name,omitempty"`
	// Email of the tenant to list
	Email *string `protobuf:"bytes,3,opt,name=email,proto3,oneof" json:"email,omitempty"`
	// OauthProvide of the tenant to list
	OauthProvider *v1.OAuthProvider `protobuf:"varint,5,opt,name=oauth_provider,json=oauthProvider,proto3,enum=api.v1.OAuthProvider,oneof" json:"oauth_provider,omitempty"`
	// Admitted on show admitted tenants
	Admitted *bool `protobuf:"varint,6,opt,name=admitted,proto3,oneof" json:"admitted,omitempty"`
	// Paging details for the list request
	Paging        *v1.Paging `protobuf:"bytes,7,opt,name=paging,proto3" json:"paging,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TenantServiceListRequest) Reset() {
	*x = TenantServiceListRequest{}
	mi := &file_admin_v1_tenant_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TenantServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TenantServiceListRequest) ProtoMessage() {}

func (x *TenantServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_tenant_proto_msgTypes[0]
	if x != nil {
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

func (x *TenantServiceListRequest) GetTenant() string {
	if x != nil && x.Tenant != nil {
		return *x.Tenant
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

// TenantServiceListResponse is the response payload for a tenant list request
type TenantServiceListResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Tenants are the list of tenants
	Tenants []*v1.Tenant `protobuf:"bytes,1,rep,name=tenants,proto3" json:"tenants,omitempty"`
	// NextPage is used for pagination, returns the next page to be fetched and must then be provided in the list request.
	NextPage      *uint64 `protobuf:"varint,2,opt,name=next_page,json=nextPage,proto3,oneof" json:"next_page,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TenantServiceListResponse) Reset() {
	*x = TenantServiceListResponse{}
	mi := &file_admin_v1_tenant_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TenantServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TenantServiceListResponse) ProtoMessage() {}

func (x *TenantServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_tenant_proto_msgTypes[1]
	if x != nil {
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

// TenantServiceAdmitRequest is the request payload for a tenant admit request
type TenantServiceAdmitRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// TenantId is the id of the tenant to admit
	TenantId      string `protobuf:"bytes,1,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TenantServiceAdmitRequest) Reset() {
	*x = TenantServiceAdmitRequest{}
	mi := &file_admin_v1_tenant_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TenantServiceAdmitRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TenantServiceAdmitRequest) ProtoMessage() {}

func (x *TenantServiceAdmitRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_tenant_proto_msgTypes[2]
	if x != nil {
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

// TenantServiceAdmitResponse is the response payload for a tenant admit request
type TenantServiceAdmitResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Tenant the tenant
	Tenant        *v1.Tenant `protobuf:"bytes,1,opt,name=tenant,proto3" json:"tenant,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TenantServiceAdmitResponse) Reset() {
	*x = TenantServiceAdmitResponse{}
	mi := &file_admin_v1_tenant_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TenantServiceAdmitResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TenantServiceAdmitResponse) ProtoMessage() {}

func (x *TenantServiceAdmitResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_tenant_proto_msgTypes[3]
	if x != nil {
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

// TenantServiceRevokeRequest is the request payload for a tenant revoke request
type TenantServiceRevokeRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// TenantId is the id of the tenant to revoke
	TenantId      string `protobuf:"bytes,1,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TenantServiceRevokeRequest) Reset() {
	*x = TenantServiceRevokeRequest{}
	mi := &file_admin_v1_tenant_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TenantServiceRevokeRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TenantServiceRevokeRequest) ProtoMessage() {}

func (x *TenantServiceRevokeRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_tenant_proto_msgTypes[4]
	if x != nil {
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

// TenantServiceRevokeResponse is the response payload for a tenant revoke request
type TenantServiceRevokeResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Tenant the tenant
	Tenant        *v1.Tenant `protobuf:"bytes,1,opt,name=tenant,proto3" json:"tenant,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TenantServiceRevokeResponse) Reset() {
	*x = TenantServiceRevokeResponse{}
	mi := &file_admin_v1_tenant_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TenantServiceRevokeResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TenantServiceRevokeResponse) ProtoMessage() {}

func (x *TenantServiceRevokeResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_tenant_proto_msgTypes[5]
	if x != nil {
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

// TenantServiceAddMemberRequest is the request payload for adding a member to a tenant
type TenantServiceAddMemberRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Tenant ID to which the member will be added
	TenantId string `protobuf:"bytes,1,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
	// Email of the member to add
	MemberId string `protobuf:"bytes,2,opt,name=member_id,json=memberId,proto3" json:"member_id,omitempty"`
	// Role to assign to the new member
	Role          v1.TenantRole `protobuf:"varint,3,opt,name=role,proto3,enum=api.v1.TenantRole" json:"role,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TenantServiceAddMemberRequest) Reset() {
	*x = TenantServiceAddMemberRequest{}
	mi := &file_admin_v1_tenant_proto_msgTypes[6]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TenantServiceAddMemberRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TenantServiceAddMemberRequest) ProtoMessage() {}

func (x *TenantServiceAddMemberRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_tenant_proto_msgTypes[6]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TenantServiceAddMemberRequest.ProtoReflect.Descriptor instead.
func (*TenantServiceAddMemberRequest) Descriptor() ([]byte, []int) {
	return file_admin_v1_tenant_proto_rawDescGZIP(), []int{6}
}

func (x *TenantServiceAddMemberRequest) GetTenantId() string {
	if x != nil {
		return x.TenantId
	}
	return ""
}

func (x *TenantServiceAddMemberRequest) GetMemberId() string {
	if x != nil {
		return x.MemberId
	}
	return ""
}

func (x *TenantServiceAddMemberRequest) GetRole() v1.TenantRole {
	if x != nil {
		return x.Role
	}
	return v1.TenantRole(0)
}

// TenantServiceAddMemberResponse is the response payload for the add member request
type TenantServiceAddMemberResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TenantServiceAddMemberResponse) Reset() {
	*x = TenantServiceAddMemberResponse{}
	mi := &file_admin_v1_tenant_proto_msgTypes[7]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TenantServiceAddMemberResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TenantServiceAddMemberResponse) ProtoMessage() {}

func (x *TenantServiceAddMemberResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_tenant_proto_msgTypes[7]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TenantServiceAddMemberResponse.ProtoReflect.Descriptor instead.
func (*TenantServiceAddMemberResponse) Descriptor() ([]byte, []int) {
	return file_admin_v1_tenant_proto_rawDescGZIP(), []int{7}
}

var File_admin_v1_tenant_proto protoreflect.FileDescriptor

var file_admin_v1_tenant_proto_rawDesc = string([]byte{
	0x0a, 0x15, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x65, 0x6e, 0x61, 0x6e,
	0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76,
	0x31, 0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x74,
	0x65, 0x6e, 0x61, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x62, 0x75, 0x66,
	0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61,
	0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xe5, 0x02, 0x0a, 0x18, 0x54, 0x65, 0x6e,
	0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x18,
	0x09, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x88,
	0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x01, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x88, 0x01, 0x01, 0x12, 0x19, 0x0a, 0x05, 0x65,
	0x6d, 0x61, 0x69, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x05, 0x65, 0x6d,
	0x61, 0x69, 0x6c, 0x88, 0x01, 0x01, 0x12, 0x41, 0x0a, 0x0e, 0x6f, 0x61, 0x75, 0x74, 0x68, 0x5f,
	0x70, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x15,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x4f, 0x41, 0x75, 0x74, 0x68, 0x50, 0x72, 0x6f,
	0x76, 0x69, 0x64, 0x65, 0x72, 0x48, 0x03, 0x52, 0x0d, 0x6f, 0x61, 0x75, 0x74, 0x68, 0x50, 0x72,
	0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x88, 0x01, 0x01, 0x12, 0x1f, 0x0a, 0x08, 0x61, 0x64, 0x6d,
	0x69, 0x74, 0x74, 0x65, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x48, 0x04, 0x52, 0x08, 0x61,
	0x64, 0x6d, 0x69, 0x74, 0x74, 0x65, 0x64, 0x88, 0x01, 0x01, 0x12, 0x26, 0x0a, 0x06, 0x70, 0x61,
	0x67, 0x69, 0x6e, 0x67, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x31, 0x2e, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x67, 0x52, 0x06, 0x70, 0x61, 0x67, 0x69,
	0x6e, 0x67, 0x42, 0x09, 0x0a, 0x07, 0x5f, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x42, 0x07, 0x0a,
	0x05, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x65, 0x6d, 0x61, 0x69, 0x6c,
	0x42, 0x11, 0x0a, 0x0f, 0x5f, 0x6f, 0x61, 0x75, 0x74, 0x68, 0x5f, 0x70, 0x72, 0x6f, 0x76, 0x69,
	0x64, 0x65, 0x72, 0x42, 0x0b, 0x0a, 0x09, 0x5f, 0x61, 0x64, 0x6d, 0x69, 0x74, 0x74, 0x65, 0x64,
	0x4a, 0x04, 0x08, 0x01, 0x10, 0x02, 0x4a, 0x04, 0x08, 0x04, 0x10, 0x05, 0x4a, 0x04, 0x08, 0x08,
	0x10, 0x09, 0x52, 0x05, 0x6c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e,
	0x69, 0x73, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64,
	0x22, 0x75, 0x0a, 0x19, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x28, 0x0a,
	0x07, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0e,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x52, 0x07,
	0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x73, 0x12, 0x20, 0x0a, 0x09, 0x6e, 0x65, 0x78, 0x74, 0x5f,
	0x70, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x48, 0x00, 0x52, 0x08, 0x6e, 0x65,
	0x78, 0x74, 0x50, 0x61, 0x67, 0x65, 0x88, 0x01, 0x01, 0x42, 0x0c, 0x0a, 0x0a, 0x5f, 0x6e, 0x65,
	0x78, 0x74, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x22, 0x38, 0x0a, 0x19, 0x54, 0x65, 0x6e, 0x61, 0x6e,
	0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x6d, 0x69, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x49,
	0x64, 0x22, 0x44, 0x0a, 0x1a, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x41, 0x64, 0x6d, 0x69, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x26, 0x0a, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x0e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x52,
	0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x22, 0x39, 0x0a, 0x1a, 0x54, 0x65, 0x6e, 0x61, 0x6e,
	0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74,
	0x49, 0x64, 0x22, 0x45, 0x0a, 0x1b, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x26, 0x0a, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e,
	0x74, 0x52, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x22, 0x8b, 0x01, 0x0a, 0x1d, 0x54, 0x65,
	0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x64, 0x4d, 0x65,
	0x6d, 0x62, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x74,
	0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x6d, 0x65, 0x6d, 0x62,
	0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6d, 0x65, 0x6d,
	0x62, 0x65, 0x72, 0x49, 0x64, 0x12, 0x30, 0x0a, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x0e, 0x32, 0x12, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e,
	0x61, 0x6e, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x42, 0x08, 0xba, 0x48, 0x05, 0x82, 0x01, 0x02, 0x10,
	0x01, 0x52, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x22, 0x20, 0x0a, 0x1e, 0x54, 0x65, 0x6e, 0x61, 0x6e,
	0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x64, 0x4d, 0x65, 0x6d, 0x62, 0x65,
	0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x32, 0x88, 0x03, 0x0a, 0x0d, 0x54, 0x65,
	0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x57, 0x0a, 0x04, 0x4c,
	0x69, 0x73, 0x74, 0x12, 0x22, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54,
	0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e,
	0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x06, 0xd2, 0xf3,
	0x18, 0x02, 0x01, 0x02, 0x12, 0x59, 0x0a, 0x05, 0x41, 0x64, 0x6d, 0x69, 0x74, 0x12, 0x23, 0x2e,
	0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x6d, 0x69, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x24, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65,
	0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x6d, 0x69, 0x74,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x05, 0xd2, 0xf3, 0x18, 0x01, 0x01, 0x12,
	0x5c, 0x0a, 0x06, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x12, 0x24, 0x2e, 0x61, 0x64, 0x6d, 0x69,
	0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x25, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e,
	0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x05, 0xd2, 0xf3, 0x18, 0x01, 0x01, 0x12, 0x65, 0x0a,
	0x09, 0x41, 0x64, 0x64, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x27, 0x2e, 0x61, 0x64, 0x6d,
	0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x41, 0x64, 0x64, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x28, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54,
	0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x64, 0x4d,
	0x65, 0x6d, 0x62, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x05, 0xd2,
	0xf3, 0x18, 0x01, 0x01, 0x42, 0x92, 0x01, 0x0a, 0x0c, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x64, 0x6d,
	0x69, 0x6e, 0x2e, 0x76, 0x31, 0x42, 0x0b, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x50, 0x01, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x6d, 0x65, 0x74, 0x61, 0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2d, 0x63, 0x6c, 0x6f,
	0x75, 0x64, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f,
	0x76, 0x31, 0x3b, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58,
	0xaa, 0x02, 0x08, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x08, 0x41, 0x64,
	0x6d, 0x69, 0x6e, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x14, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x5c, 0x56,
	0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x09,
	0x41, 0x64, 0x6d, 0x69, 0x6e, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
})

var (
	file_admin_v1_tenant_proto_rawDescOnce sync.Once
	file_admin_v1_tenant_proto_rawDescData []byte
)

func file_admin_v1_tenant_proto_rawDescGZIP() []byte {
	file_admin_v1_tenant_proto_rawDescOnce.Do(func() {
		file_admin_v1_tenant_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_admin_v1_tenant_proto_rawDesc), len(file_admin_v1_tenant_proto_rawDesc)))
	})
	return file_admin_v1_tenant_proto_rawDescData
}

var file_admin_v1_tenant_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_admin_v1_tenant_proto_goTypes = []any{
	(*TenantServiceListRequest)(nil),       // 0: admin.v1.TenantServiceListRequest
	(*TenantServiceListResponse)(nil),      // 1: admin.v1.TenantServiceListResponse
	(*TenantServiceAdmitRequest)(nil),      // 2: admin.v1.TenantServiceAdmitRequest
	(*TenantServiceAdmitResponse)(nil),     // 3: admin.v1.TenantServiceAdmitResponse
	(*TenantServiceRevokeRequest)(nil),     // 4: admin.v1.TenantServiceRevokeRequest
	(*TenantServiceRevokeResponse)(nil),    // 5: admin.v1.TenantServiceRevokeResponse
	(*TenantServiceAddMemberRequest)(nil),  // 6: admin.v1.TenantServiceAddMemberRequest
	(*TenantServiceAddMemberResponse)(nil), // 7: admin.v1.TenantServiceAddMemberResponse
	(v1.OAuthProvider)(0),                  // 8: api.v1.OAuthProvider
	(*v1.Paging)(nil),                      // 9: api.v1.Paging
	(*v1.Tenant)(nil),                      // 10: api.v1.Tenant
	(v1.TenantRole)(0),                     // 11: api.v1.TenantRole
}
var file_admin_v1_tenant_proto_depIdxs = []int32{
	8,  // 0: admin.v1.TenantServiceListRequest.oauth_provider:type_name -> api.v1.OAuthProvider
	9,  // 1: admin.v1.TenantServiceListRequest.paging:type_name -> api.v1.Paging
	10, // 2: admin.v1.TenantServiceListResponse.tenants:type_name -> api.v1.Tenant
	10, // 3: admin.v1.TenantServiceAdmitResponse.tenant:type_name -> api.v1.Tenant
	10, // 4: admin.v1.TenantServiceRevokeResponse.tenant:type_name -> api.v1.Tenant
	11, // 5: admin.v1.TenantServiceAddMemberRequest.role:type_name -> api.v1.TenantRole
	0,  // 6: admin.v1.TenantService.List:input_type -> admin.v1.TenantServiceListRequest
	2,  // 7: admin.v1.TenantService.Admit:input_type -> admin.v1.TenantServiceAdmitRequest
	4,  // 8: admin.v1.TenantService.Revoke:input_type -> admin.v1.TenantServiceRevokeRequest
	6,  // 9: admin.v1.TenantService.AddMember:input_type -> admin.v1.TenantServiceAddMemberRequest
	1,  // 10: admin.v1.TenantService.List:output_type -> admin.v1.TenantServiceListResponse
	3,  // 11: admin.v1.TenantService.Admit:output_type -> admin.v1.TenantServiceAdmitResponse
	5,  // 12: admin.v1.TenantService.Revoke:output_type -> admin.v1.TenantServiceRevokeResponse
	7,  // 13: admin.v1.TenantService.AddMember:output_type -> admin.v1.TenantServiceAddMemberResponse
	10, // [10:14] is the sub-list for method output_type
	6,  // [6:10] is the sub-list for method input_type
	6,  // [6:6] is the sub-list for extension type_name
	6,  // [6:6] is the sub-list for extension extendee
	0,  // [0:6] is the sub-list for field type_name
}

func init() { file_admin_v1_tenant_proto_init() }
func file_admin_v1_tenant_proto_init() {
	if File_admin_v1_tenant_proto != nil {
		return
	}
	file_admin_v1_tenant_proto_msgTypes[0].OneofWrappers = []any{}
	file_admin_v1_tenant_proto_msgTypes[1].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_admin_v1_tenant_proto_rawDesc), len(file_admin_v1_tenant_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_admin_v1_tenant_proto_goTypes,
		DependencyIndexes: file_admin_v1_tenant_proto_depIdxs,
		MessageInfos:      file_admin_v1_tenant_proto_msgTypes,
	}.Build()
	File_admin_v1_tenant_proto = out.File
	file_admin_v1_tenant_proto_goTypes = nil
	file_admin_v1_tenant_proto_depIdxs = nil
}
