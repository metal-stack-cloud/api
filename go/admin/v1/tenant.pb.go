// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        (unknown)
// source: admin/v1/tenant.proto

package adminv1

import (
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
	// page_token is used for pagination, if unset only the first page is returned, the list response contains then token for the next page.
	PageToken *string `protobuf:"bytes,7,opt,name=page_token,json=pageToken,proto3,oneof" json:"page_token,omitempty"`
	// count is the number of results returned per page, if no given server side defaults apply
	Count *int32 `protobuf:"varint,8,opt,name=count,proto3,oneof" json:"count,omitempty"`
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

func (x *TenantServiceListRequest) GetPageToken() string {
	if x != nil && x.PageToken != nil {
		return *x.PageToken
	}
	return ""
}

func (x *TenantServiceListRequest) GetCount() int32 {
	if x != nil && x.Count != nil {
		return *x.Count
	}
	return 0
}

type TenantServiceListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Tenants []*v1.Tenant `protobuf:"bytes,1,rep,name=tenants,proto3" json:"tenants,omitempty"`
	// next_page_token is used for pagination, returns the next page to be fetched and must then be provided in the list request.
	NextPageToken string `protobuf:"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3" json:"next_page_token,omitempty"`
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

func (x *TenantServiceListResponse) GetNextPageToken() string {
	if x != nil {
		return x.NextPageToken
	}
	return ""
}

type TenantServiceAdmitRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TenantId string `protobuf:"bytes,1,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
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

var File_admin_v1_tenant_proto protoreflect.FileDescriptor

var file_admin_v1_tenant_proto_rawDesc = []byte{
	0x0a, 0x15, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x65, 0x6e, 0x61, 0x6e,
	0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76,
	0x31, 0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x74,
	0x65, 0x6e, 0x61, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa4, 0x03, 0x0a, 0x18,
	0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73,
	0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x19, 0x0a, 0x05, 0x6c, 0x6f, 0x67, 0x69,
	0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x05, 0x6c, 0x6f, 0x67, 0x69, 0x6e,
	0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x48, 0x01, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x88, 0x01, 0x01, 0x12, 0x19, 0x0a, 0x05,
	0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x05, 0x65,
	0x6d, 0x61, 0x69, 0x6c, 0x88, 0x01, 0x01, 0x12, 0x2c, 0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e,
	0x69, 0x73, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x03, 0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x73, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x41, 0x0a, 0x0e, 0x6f, 0x61, 0x75, 0x74, 0x68, 0x5f, 0x70,
	0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x15, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x4f, 0x41, 0x75, 0x74, 0x68, 0x50, 0x72, 0x6f, 0x76,
	0x69, 0x64, 0x65, 0x72, 0x48, 0x04, 0x52, 0x0d, 0x6f, 0x61, 0x75, 0x74, 0x68, 0x50, 0x72, 0x6f,
	0x76, 0x69, 0x64, 0x65, 0x72, 0x88, 0x01, 0x01, 0x12, 0x1f, 0x0a, 0x08, 0x61, 0x64, 0x6d, 0x69,
	0x74, 0x74, 0x65, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x48, 0x05, 0x52, 0x08, 0x61, 0x64,
	0x6d, 0x69, 0x74, 0x74, 0x65, 0x64, 0x88, 0x01, 0x01, 0x12, 0x22, 0x0a, 0x0a, 0x70, 0x61, 0x67,
	0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x48, 0x06, 0x52,
	0x09, 0x70, 0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x88, 0x01, 0x01, 0x12, 0x19, 0x0a,
	0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x05, 0x48, 0x07, 0x52, 0x05,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x88, 0x01, 0x01, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x6c, 0x6f, 0x67,
	0x69, 0x6e, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x42, 0x08, 0x0a, 0x06, 0x5f,
	0x65, 0x6d, 0x61, 0x69, 0x6c, 0x42, 0x12, 0x0a, 0x10, 0x5f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69,
	0x73, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x42, 0x11, 0x0a, 0x0f, 0x5f, 0x6f, 0x61,
	0x75, 0x74, 0x68, 0x5f, 0x70, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x42, 0x0b, 0x0a, 0x09,
	0x5f, 0x61, 0x64, 0x6d, 0x69, 0x74, 0x74, 0x65, 0x64, 0x42, 0x0d, 0x0a, 0x0b, 0x5f, 0x70, 0x61,
	0x67, 0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x22, 0x6d, 0x0a, 0x19, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x28, 0x0a, 0x07, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74,
	0x52, 0x07, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x73, 0x12, 0x26, 0x0a, 0x0f, 0x6e, 0x65, 0x78,
	0x74, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0d, 0x6e, 0x65, 0x78, 0x74, 0x50, 0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x22, 0x38, 0x0a, 0x19, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x41, 0x64, 0x6d, 0x69, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b,
	0x0a, 0x09, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x49, 0x64, 0x22, 0x44, 0x0a, 0x1a, 0x54,
	0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x6d, 0x69,
	0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x26, 0x0a, 0x06, 0x74, 0x65, 0x6e,
	0x61, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x52, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e,
	0x74, 0x32, 0xc0, 0x01, 0x0a, 0x0d, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x12, 0x55, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x22, 0x2e, 0x61, 0x64,
	0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x23, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e,
	0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x04, 0xd0, 0xf3, 0x18, 0x02, 0x12, 0x58, 0x0a, 0x05, 0x41, 0x64,
	0x6d, 0x69, 0x74, 0x12, 0x23, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54,
	0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x6d, 0x69,
	0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e,
	0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x41, 0x64, 0x6d, 0x69, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x04,
	0xd0, 0xf3, 0x18, 0x01, 0x42, 0x92, 0x01, 0x0a, 0x0c, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x64, 0x6d,
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

var file_admin_v1_tenant_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_admin_v1_tenant_proto_goTypes = []interface{}{
	(*TenantServiceListRequest)(nil),   // 0: admin.v1.TenantServiceListRequest
	(*TenantServiceListResponse)(nil),  // 1: admin.v1.TenantServiceListResponse
	(*TenantServiceAdmitRequest)(nil),  // 2: admin.v1.TenantServiceAdmitRequest
	(*TenantServiceAdmitResponse)(nil), // 3: admin.v1.TenantServiceAdmitResponse
	(v1.OAuthProvider)(0),              // 4: api.v1.OAuthProvider
	(*v1.Tenant)(nil),                  // 5: api.v1.Tenant
}
var file_admin_v1_tenant_proto_depIdxs = []int32{
	4, // 0: admin.v1.TenantServiceListRequest.oauth_provider:type_name -> api.v1.OAuthProvider
	5, // 1: admin.v1.TenantServiceListResponse.tenants:type_name -> api.v1.Tenant
	5, // 2: admin.v1.TenantServiceAdmitResponse.tenant:type_name -> api.v1.Tenant
	0, // 3: admin.v1.TenantService.List:input_type -> admin.v1.TenantServiceListRequest
	2, // 4: admin.v1.TenantService.Admit:input_type -> admin.v1.TenantServiceAdmitRequest
	1, // 5: admin.v1.TenantService.List:output_type -> admin.v1.TenantServiceListResponse
	3, // 6: admin.v1.TenantService.Admit:output_type -> admin.v1.TenantServiceAdmitResponse
	5, // [5:7] is the sub-list for method output_type
	3, // [3:5] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
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
	}
	file_admin_v1_tenant_proto_msgTypes[0].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_admin_v1_tenant_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
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
