// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        (unknown)
// source: api/v1/common.proto

package apiv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	descriptorpb "google.golang.org/protobuf/types/descriptorpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type OAuthProvider int32

const (
	OAuthProvider_O_AUTH_PROVIDER_UNSPECIFIED OAuthProvider = 0
	OAuthProvider_O_AUTH_PROVIDER_GITHUB      OAuthProvider = 1
	OAuthProvider_O_AUTH_PROVIDER_AZURE       OAuthProvider = 2
)

// Enum value maps for OAuthProvider.
var (
	OAuthProvider_name = map[int32]string{
		0: "O_AUTH_PROVIDER_UNSPECIFIED",
		1: "O_AUTH_PROVIDER_GITHUB",
		2: "O_AUTH_PROVIDER_AZURE",
	}
	OAuthProvider_value = map[string]int32{
		"O_AUTH_PROVIDER_UNSPECIFIED": 0,
		"O_AUTH_PROVIDER_GITHUB":      1,
		"O_AUTH_PROVIDER_AZURE":       2,
	}
)

func (x OAuthProvider) Enum() *OAuthProvider {
	p := new(OAuthProvider)
	*p = x
	return p
}

func (x OAuthProvider) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (OAuthProvider) Descriptor() protoreflect.EnumDescriptor {
	return file_api_v1_common_proto_enumTypes[0].Descriptor()
}

func (OAuthProvider) Type() protoreflect.EnumType {
	return &file_api_v1_common_proto_enumTypes[0]
}

func (x OAuthProvider) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use OAuthProvider.Descriptor instead.
func (OAuthProvider) EnumDescriptor() ([]byte, []int) {
	return file_api_v1_common_proto_rawDescGZIP(), []int{0}
}

type Role int32

const (
	Role_ROLE_UNSPECIFIED Role = 0
	Role_ROLE_MEMBER      Role = 1
	Role_ROLE_MAINTAINER  Role = 2
	Role_ROLE_ADMIN       Role = 3
	Role_ROLE_OWNER       Role = 4
)

// Enum value maps for Role.
var (
	Role_name = map[int32]string{
		0: "ROLE_UNSPECIFIED",
		1: "ROLE_MEMBER",
		2: "ROLE_MAINTAINER",
		3: "ROLE_ADMIN",
		4: "ROLE_OWNER",
	}
	Role_value = map[string]int32{
		"ROLE_UNSPECIFIED": 0,
		"ROLE_MEMBER":      1,
		"ROLE_MAINTAINER":  2,
		"ROLE_ADMIN":       3,
		"ROLE_OWNER":       4,
	}
)

func (x Role) Enum() *Role {
	p := new(Role)
	*p = x
	return p
}

func (x Role) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Role) Descriptor() protoreflect.EnumDescriptor {
	return file_api_v1_common_proto_enumTypes[1].Descriptor()
}

func (Role) Type() protoreflect.EnumType {
	return &file_api_v1_common_proto_enumTypes[1]
}

func (x Role) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Role.Descriptor instead.
func (Role) EnumDescriptor() ([]byte, []int) {
	return file_api_v1_common_proto_rawDescGZIP(), []int{1}
}

type TenantRole int32

const (
	TenantRole_TENANT_ROLE_UNSPECIFIED TenantRole = 0
	TenantRole_TENANT_ROLE_OWNER       TenantRole = 1
	TenantRole_TENANT_ROLE_EDITOR      TenantRole = 2
	TenantRole_TENANT_ROLE_VIEWER      TenantRole = 3
)

// Enum value maps for TenantRole.
var (
	TenantRole_name = map[int32]string{
		0: "TENANT_ROLE_UNSPECIFIED",
		1: "TENANT_ROLE_OWNER",
		2: "TENANT_ROLE_EDITOR",
		3: "TENANT_ROLE_VIEWER",
	}
	TenantRole_value = map[string]int32{
		"TENANT_ROLE_UNSPECIFIED": 0,
		"TENANT_ROLE_OWNER":       1,
		"TENANT_ROLE_EDITOR":      2,
		"TENANT_ROLE_VIEWER":      3,
	}
)

func (x TenantRole) Enum() *TenantRole {
	p := new(TenantRole)
	*p = x
	return p
}

func (x TenantRole) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TenantRole) Descriptor() protoreflect.EnumDescriptor {
	return file_api_v1_common_proto_enumTypes[2].Descriptor()
}

func (TenantRole) Type() protoreflect.EnumType {
	return &file_api_v1_common_proto_enumTypes[2]
}

func (x TenantRole) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TenantRole.Descriptor instead.
func (TenantRole) EnumDescriptor() ([]byte, []int) {
	return file_api_v1_common_proto_rawDescGZIP(), []int{2}
}

type ProjectRole int32

const (
	ProjectRole_PROJECT_ROLE_UNSPECIFIED ProjectRole = 0
	ProjectRole_PROJECT_ROLE_OWNER       ProjectRole = 1
	ProjectRole_PROJECT_ROLE_EDITOR      ProjectRole = 2
	ProjectRole_PROJECT_ROLE_VIEWER      ProjectRole = 3
)

// Enum value maps for ProjectRole.
var (
	ProjectRole_name = map[int32]string{
		0: "PROJECT_ROLE_UNSPECIFIED",
		1: "PROJECT_ROLE_OWNER",
		2: "PROJECT_ROLE_EDITOR",
		3: "PROJECT_ROLE_VIEWER",
	}
	ProjectRole_value = map[string]int32{
		"PROJECT_ROLE_UNSPECIFIED": 0,
		"PROJECT_ROLE_OWNER":       1,
		"PROJECT_ROLE_EDITOR":      2,
		"PROJECT_ROLE_VIEWER":      3,
	}
)

func (x ProjectRole) Enum() *ProjectRole {
	p := new(ProjectRole)
	*p = x
	return p
}

func (x ProjectRole) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ProjectRole) Descriptor() protoreflect.EnumDescriptor {
	return file_api_v1_common_proto_enumTypes[3].Descriptor()
}

func (ProjectRole) Type() protoreflect.EnumType {
	return &file_api_v1_common_proto_enumTypes[3]
}

func (x ProjectRole) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ProjectRole.Descriptor instead.
func (ProjectRole) EnumDescriptor() ([]byte, []int) {
	return file_api_v1_common_proto_rawDescGZIP(), []int{3}
}

type AdminRole int32

const (
	AdminRole_ADMIN_ROLE_UNSPECIFIED AdminRole = 0
	AdminRole_ADMIN_ROLE_EDITOR      AdminRole = 1
	AdminRole_ADMIN_ROLE_VIEWER      AdminRole = 2
)

// Enum value maps for AdminRole.
var (
	AdminRole_name = map[int32]string{
		0: "ADMIN_ROLE_UNSPECIFIED",
		1: "ADMIN_ROLE_EDITOR",
		2: "ADMIN_ROLE_VIEWER",
	}
	AdminRole_value = map[string]int32{
		"ADMIN_ROLE_UNSPECIFIED": 0,
		"ADMIN_ROLE_EDITOR":      1,
		"ADMIN_ROLE_VIEWER":      2,
	}
)

func (x AdminRole) Enum() *AdminRole {
	p := new(AdminRole)
	*p = x
	return p
}

func (x AdminRole) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (AdminRole) Descriptor() protoreflect.EnumDescriptor {
	return file_api_v1_common_proto_enumTypes[4].Descriptor()
}

func (AdminRole) Type() protoreflect.EnumType {
	return &file_api_v1_common_proto_enumTypes[4]
}

func (x AdminRole) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use AdminRole.Descriptor instead.
func (AdminRole) EnumDescriptor() ([]byte, []int) {
	return file_api_v1_common_proto_rawDescGZIP(), []int{4}
}

type Paging struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// page is used for pagination, if unset only the first page is returned, the list response contains then token for the next page.
	Page *uint64 `protobuf:"varint,7,opt,name=page,proto3,oneof" json:"page,omitempty"`
	// count is the number of results returned per page, if no given server side defaults apply
	Count *uint64 `protobuf:"varint,8,opt,name=count,proto3,oneof" json:"count,omitempty"`
}

func (x *Paging) Reset() {
	*x = Paging{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_common_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Paging) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Paging) ProtoMessage() {}

func (x *Paging) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_common_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Paging.ProtoReflect.Descriptor instead.
func (*Paging) Descriptor() ([]byte, []int) {
	return file_api_v1_common_proto_rawDescGZIP(), []int{0}
}

func (x *Paging) GetPage() uint64 {
	if x != nil && x.Page != nil {
		return *x.Page
	}
	return 0
}

func (x *Paging) GetCount() uint64 {
	if x != nil && x.Count != nil {
		return *x.Count
	}
	return 0
}

var file_api_v1_common_proto_extTypes = []protoimpl.ExtensionInfo{
	{
		ExtendedType:  (*descriptorpb.MethodOptions)(nil),
		ExtensionType: ([]TenantRole)(nil),
		Field:         51000,
		Name:          "api.v1.tenant_roles",
		Tag:           "varint,51000,rep,name=tenant_roles,enum=api.v1.TenantRole",
		Filename:      "api/v1/common.proto",
	},
	{
		ExtendedType:  (*descriptorpb.MethodOptions)(nil),
		ExtensionType: ([]ProjectRole)(nil),
		Field:         51001,
		Name:          "api.v1.project_roles",
		Tag:           "varint,51001,rep,name=project_roles,enum=api.v1.ProjectRole",
		Filename:      "api/v1/common.proto",
	},
	{
		ExtendedType:  (*descriptorpb.MethodOptions)(nil),
		ExtensionType: ([]AdminRole)(nil),
		Field:         51002,
		Name:          "api.v1.admin_roles",
		Tag:           "varint,51002,rep,name=admin_roles,enum=api.v1.AdminRole",
		Filename:      "api/v1/common.proto",
	},
}

// Extension fields to descriptorpb.MethodOptions.
var (
	// repeated api.v1.TenantRole tenant_roles = 51000;
	E_TenantRoles = &file_api_v1_common_proto_extTypes[0]
	// repeated api.v1.ProjectRole project_roles = 51001;
	E_ProjectRoles = &file_api_v1_common_proto_extTypes[1]
	// repeated api.v1.AdminRole admin_roles = 51002;
	E_AdminRoles = &file_api_v1_common_proto_extTypes[2]
)

var File_api_v1_common_proto protoreflect.FileDescriptor

var file_api_v1_common_proto_rawDesc = []byte{
	0x0a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x1a, 0x20, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x64,
	0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x4f, 0x0a, 0x06, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x67, 0x12, 0x17, 0x0a, 0x04, 0x70, 0x61, 0x67,
	0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x04, 0x48, 0x00, 0x52, 0x04, 0x70, 0x61, 0x67, 0x65, 0x88,
	0x01, 0x01, 0x12, 0x19, 0x0a, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28,
	0x04, 0x48, 0x01, 0x52, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x88, 0x01, 0x01, 0x42, 0x07, 0x0a,
	0x05, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x2a, 0x67, 0x0a, 0x0d, 0x4f, 0x41, 0x75, 0x74, 0x68, 0x50, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65,
	0x72, 0x12, 0x1f, 0x0a, 0x1b, 0x4f, 0x5f, 0x41, 0x55, 0x54, 0x48, 0x5f, 0x50, 0x52, 0x4f, 0x56,
	0x49, 0x44, 0x45, 0x52, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44,
	0x10, 0x00, 0x12, 0x1a, 0x0a, 0x16, 0x4f, 0x5f, 0x41, 0x55, 0x54, 0x48, 0x5f, 0x50, 0x52, 0x4f,
	0x56, 0x49, 0x44, 0x45, 0x52, 0x5f, 0x47, 0x49, 0x54, 0x48, 0x55, 0x42, 0x10, 0x01, 0x12, 0x19,
	0x0a, 0x15, 0x4f, 0x5f, 0x41, 0x55, 0x54, 0x48, 0x5f, 0x50, 0x52, 0x4f, 0x56, 0x49, 0x44, 0x45,
	0x52, 0x5f, 0x41, 0x5a, 0x55, 0x52, 0x45, 0x10, 0x02, 0x2a, 0x62, 0x0a, 0x04, 0x52, 0x6f, 0x6c,
	0x65, 0x12, 0x14, 0x0a, 0x10, 0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43,
	0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0f, 0x0a, 0x0b, 0x52, 0x4f, 0x4c, 0x45, 0x5f,
	0x4d, 0x45, 0x4d, 0x42, 0x45, 0x52, 0x10, 0x01, 0x12, 0x13, 0x0a, 0x0f, 0x52, 0x4f, 0x4c, 0x45,
	0x5f, 0x4d, 0x41, 0x49, 0x4e, 0x54, 0x41, 0x49, 0x4e, 0x45, 0x52, 0x10, 0x02, 0x12, 0x0e, 0x0a,
	0x0a, 0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x41, 0x44, 0x4d, 0x49, 0x4e, 0x10, 0x03, 0x12, 0x0e, 0x0a,
	0x0a, 0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x4f, 0x57, 0x4e, 0x45, 0x52, 0x10, 0x04, 0x2a, 0x70, 0x0a,
	0x0a, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x1b, 0x0a, 0x17, 0x54,
	0x45, 0x4e, 0x41, 0x4e, 0x54, 0x5f, 0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45,
	0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x15, 0x0a, 0x11, 0x54, 0x45, 0x4e, 0x41,
	0x4e, 0x54, 0x5f, 0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x4f, 0x57, 0x4e, 0x45, 0x52, 0x10, 0x01, 0x12,
	0x16, 0x0a, 0x12, 0x54, 0x45, 0x4e, 0x41, 0x4e, 0x54, 0x5f, 0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x45,
	0x44, 0x49, 0x54, 0x4f, 0x52, 0x10, 0x02, 0x12, 0x16, 0x0a, 0x12, 0x54, 0x45, 0x4e, 0x41, 0x4e,
	0x54, 0x5f, 0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x56, 0x49, 0x45, 0x57, 0x45, 0x52, 0x10, 0x03, 0x2a,
	0x75, 0x0a, 0x0b, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x1c,
	0x0a, 0x18, 0x50, 0x52, 0x4f, 0x4a, 0x45, 0x43, 0x54, 0x5f, 0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x55,
	0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x16, 0x0a, 0x12,
	0x50, 0x52, 0x4f, 0x4a, 0x45, 0x43, 0x54, 0x5f, 0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x4f, 0x57, 0x4e,
	0x45, 0x52, 0x10, 0x01, 0x12, 0x17, 0x0a, 0x13, 0x50, 0x52, 0x4f, 0x4a, 0x45, 0x43, 0x54, 0x5f,
	0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x45, 0x44, 0x49, 0x54, 0x4f, 0x52, 0x10, 0x02, 0x12, 0x17, 0x0a,
	0x13, 0x50, 0x52, 0x4f, 0x4a, 0x45, 0x43, 0x54, 0x5f, 0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x56, 0x49,
	0x45, 0x57, 0x45, 0x52, 0x10, 0x03, 0x2a, 0x55, 0x0a, 0x09, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x52,
	0x6f, 0x6c, 0x65, 0x12, 0x1a, 0x0a, 0x16, 0x41, 0x44, 0x4d, 0x49, 0x4e, 0x5f, 0x52, 0x4f, 0x4c,
	0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12,
	0x15, 0x0a, 0x11, 0x41, 0x44, 0x4d, 0x49, 0x4e, 0x5f, 0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x45, 0x44,
	0x49, 0x54, 0x4f, 0x52, 0x10, 0x01, 0x12, 0x15, 0x0a, 0x11, 0x41, 0x44, 0x4d, 0x49, 0x4e, 0x5f,
	0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x56, 0x49, 0x45, 0x57, 0x45, 0x52, 0x10, 0x02, 0x3a, 0x57, 0x0a,
	0x0c, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x12, 0x1e, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0xb8, 0x8e,
	0x03, 0x20, 0x03, 0x28, 0x0e, 0x32, 0x12, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x54,
	0x65, 0x6e, 0x61, 0x6e, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x0b, 0x74, 0x65, 0x6e, 0x61, 0x6e,
	0x74, 0x52, 0x6f, 0x6c, 0x65, 0x73, 0x3a, 0x5a, 0x0a, 0x0d, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63,
	0x74, 0x5f, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x12, 0x1e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64,
	0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0xb9, 0x8e, 0x03, 0x20, 0x03, 0x28, 0x0e, 0x32,
	0x13, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x52, 0x6f, 0x6c, 0x65, 0x52, 0x0c, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x6f, 0x6c,
	0x65, 0x73, 0x3a, 0x54, 0x0a, 0x0b, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x5f, 0x72, 0x6f, 0x6c, 0x65,
	0x73, 0x12, 0x1e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x18, 0xba, 0x8e, 0x03, 0x20, 0x03, 0x28, 0x0e, 0x32, 0x11, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x31, 0x2e, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x0a, 0x61, 0x64,
	0x6d, 0x69, 0x6e, 0x52, 0x6f, 0x6c, 0x65, 0x73, 0x42, 0x84, 0x01, 0x0a, 0x0a, 0x63, 0x6f, 0x6d,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x42, 0x0b, 0x43, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x50,
	0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x30, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2d, 0x63,
	0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x76, 0x31, 0x3b, 0x61, 0x70, 0x69, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02,
	0x06, 0x41, 0x70, 0x69, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x06, 0x41, 0x70, 0x69, 0x5c, 0x56, 0x31,
	0xe2, 0x02, 0x12, 0x41, 0x70, 0x69, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x07, 0x41, 0x70, 0x69, 0x3a, 0x3a, 0x56, 0x31, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_v1_common_proto_rawDescOnce sync.Once
	file_api_v1_common_proto_rawDescData = file_api_v1_common_proto_rawDesc
)

func file_api_v1_common_proto_rawDescGZIP() []byte {
	file_api_v1_common_proto_rawDescOnce.Do(func() {
		file_api_v1_common_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_v1_common_proto_rawDescData)
	})
	return file_api_v1_common_proto_rawDescData
}

var file_api_v1_common_proto_enumTypes = make([]protoimpl.EnumInfo, 5)
var file_api_v1_common_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_api_v1_common_proto_goTypes = []interface{}{
	(OAuthProvider)(0),                 // 0: api.v1.OAuthProvider
	(Role)(0),                          // 1: api.v1.Role
	(TenantRole)(0),                    // 2: api.v1.TenantRole
	(ProjectRole)(0),                   // 3: api.v1.ProjectRole
	(AdminRole)(0),                     // 4: api.v1.AdminRole
	(*Paging)(nil),                     // 5: api.v1.Paging
	(*descriptorpb.MethodOptions)(nil), // 6: google.protobuf.MethodOptions
}
var file_api_v1_common_proto_depIdxs = []int32{
	6, // 0: api.v1.tenant_roles:extendee -> google.protobuf.MethodOptions
	6, // 1: api.v1.project_roles:extendee -> google.protobuf.MethodOptions
	6, // 2: api.v1.admin_roles:extendee -> google.protobuf.MethodOptions
	2, // 3: api.v1.tenant_roles:type_name -> api.v1.TenantRole
	3, // 4: api.v1.project_roles:type_name -> api.v1.ProjectRole
	4, // 5: api.v1.admin_roles:type_name -> api.v1.AdminRole
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	3, // [3:6] is the sub-list for extension type_name
	0, // [0:3] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_api_v1_common_proto_init() }
func file_api_v1_common_proto_init() {
	if File_api_v1_common_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_api_v1_common_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Paging); i {
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
	file_api_v1_common_proto_msgTypes[0].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_v1_common_proto_rawDesc,
			NumEnums:      5,
			NumMessages:   1,
			NumExtensions: 3,
			NumServices:   0,
		},
		GoTypes:           file_api_v1_common_proto_goTypes,
		DependencyIndexes: file_api_v1_common_proto_depIdxs,
		EnumInfos:         file_api_v1_common_proto_enumTypes,
		MessageInfos:      file_api_v1_common_proto_msgTypes,
		ExtensionInfos:    file_api_v1_common_proto_extTypes,
	}.Build()
	File_api_v1_common_proto = out.File
	file_api_v1_common_proto_rawDesc = nil
	file_api_v1_common_proto_goTypes = nil
	file_api_v1_common_proto_depIdxs = nil
}
