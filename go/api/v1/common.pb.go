// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
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

// OAuthProvider defines which login providers are supported
type OAuthProvider int32

const (
	// O_AUTH_PROVIDER_UNSPECIFIED is an unknown login provider
	OAuthProvider_O_AUTH_PROVIDER_UNSPECIFIED OAuthProvider = 0
	// O_AUTH_PROVIDER_GITHUB specifies github as oauth login provider
	OAuthProvider_O_AUTH_PROVIDER_GITHUB OAuthProvider = 1
	// O_AUTH_PROVIDER_AZURE specifies azure as oauth login provider
	OAuthProvider_O_AUTH_PROVIDER_AZURE OAuthProvider = 2
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

// Role defines which role the logged in user got from the login provider
type Role int32

const (
	// ROLE_UNSPECIFIED is not specified
	Role_ROLE_UNSPECIFIED Role = 0
	// ROLE_MEMBER the user has member role in the scope
	Role_ROLE_MEMBER Role = 1
	// ROLE_MAINTAINER the user has maintainer role in the scope
	Role_ROLE_MAINTAINER Role = 2
	// ROLE_ADMIN the user has admin role in the scope
	Role_ROLE_ADMIN Role = 3
	// ROLE_OWNER the user has owner role in the scope
	Role_ROLE_OWNER Role = 4
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

// TenantRole specifies what role a logged in user needs to call this tenant scoped service
type TenantRole int32

const (
	// TENANT_ROLE_UNSPECIFIED is not specified
	TenantRole_TENANT_ROLE_UNSPECIFIED TenantRole = 0
	// TENANT_ROLE_OWNER the logged in user needs at least owner role to call this method
	TenantRole_TENANT_ROLE_OWNER TenantRole = 1
	// TENANT_ROLE_EDITOR the logged in user needs at least editor role to call this method
	TenantRole_TENANT_ROLE_EDITOR TenantRole = 2
	// TENANT_ROLE_VIEWER the logged in user needs at least viewer role to call this method
	TenantRole_TENANT_ROLE_VIEWER TenantRole = 3
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

// ProjectRole specifies what role a logged in user needs to call this project scoped service
type ProjectRole int32

const (
	// PROJECT_ROLE_UNSPECIFIED is not specified
	ProjectRole_PROJECT_ROLE_UNSPECIFIED ProjectRole = 0
	// PROJECT_ROLE_OWNER the logged in user needs at least owner role to call this method
	ProjectRole_PROJECT_ROLE_OWNER ProjectRole = 1
	// PROJECT_ROLE_EDITOR the logged in user needs at least editor role to call this method
	ProjectRole_PROJECT_ROLE_EDITOR ProjectRole = 2
	// PROJECT_ROLE_VIEWER the logged in user needs at least viewer role to call this method
	ProjectRole_PROJECT_ROLE_VIEWER ProjectRole = 3
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

// AdminRole specifies what role a logged in user needs to call this admin service
type AdminRole int32

const (
	// ADMIN_ROLE_UNSPECIFIED is not specified
	AdminRole_ADMIN_ROLE_UNSPECIFIED AdminRole = 0
	// ADMIN_ROLE_EDITOR the logged in user needs at least editor role to call this method
	AdminRole_ADMIN_ROLE_EDITOR AdminRole = 1
	// ADMIN_ROLE_VIEWER the logged in user needs at least viewer role to call this method
	AdminRole_ADMIN_ROLE_VIEWER AdminRole = 2
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

// Visibility of a method
type Visibility int32

const (
	// VISIBILITY_UNSPECIFIED is not defined
	Visibility_VISIBILITY_UNSPECIFIED Visibility = 0
	// VISIBILITY_PUBLIC specifies that this service is accessible without authentication
	Visibility_VISIBILITY_PUBLIC Visibility = 1
	// VISIBILITY_PRIVATE makes this service blocked
	Visibility_VISIBILITY_PRIVATE Visibility = 2
	// VISIBILITY_SELF enable call this endpoint from the authenticated user only
	Visibility_VISIBILITY_SELF Visibility = 3
)

// Enum value maps for Visibility.
var (
	Visibility_name = map[int32]string{
		0: "VISIBILITY_UNSPECIFIED",
		1: "VISIBILITY_PUBLIC",
		2: "VISIBILITY_PRIVATE",
		3: "VISIBILITY_SELF",
	}
	Visibility_value = map[string]int32{
		"VISIBILITY_UNSPECIFIED": 0,
		"VISIBILITY_PUBLIC":      1,
		"VISIBILITY_PRIVATE":     2,
		"VISIBILITY_SELF":        3,
	}
)

func (x Visibility) Enum() *Visibility {
	p := new(Visibility)
	*p = x
	return p
}

func (x Visibility) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Visibility) Descriptor() protoreflect.EnumDescriptor {
	return file_api_v1_common_proto_enumTypes[5].Descriptor()
}

func (Visibility) Type() protoreflect.EnumType {
	return &file_api_v1_common_proto_enumTypes[5]
}

func (x Visibility) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Visibility.Descriptor instead.
func (Visibility) EnumDescriptor() ([]byte, []int) {
	return file_api_v1_common_proto_rawDescGZIP(), []int{5}
}

// Chargable defines if calling a method requires that billing credentials are present or not
type Chargeable int32

const (
	// CHARGEABLE_UNSPECIFIED no chargeable option is set
	Chargeable_CHARGEABLE_UNSPECIFIED Chargeable = 0
	// CHARGEABLE_TRUE if this is set on a method, calling it requires that billing credentials are present
	Chargeable_CHARGEABLE_TRUE Chargeable = 1
	// CHARGEABLE_FALSE if this is set on a method, no billing credentials are required
	Chargeable_CHARGEABLE_FALSE Chargeable = 2
)

// Enum value maps for Chargeable.
var (
	Chargeable_name = map[int32]string{
		0: "CHARGEABLE_UNSPECIFIED",
		1: "CHARGEABLE_TRUE",
		2: "CHARGEABLE_FALSE",
	}
	Chargeable_value = map[string]int32{
		"CHARGEABLE_UNSPECIFIED": 0,
		"CHARGEABLE_TRUE":        1,
		"CHARGEABLE_FALSE":       2,
	}
)

func (x Chargeable) Enum() *Chargeable {
	p := new(Chargeable)
	*p = x
	return p
}

func (x Chargeable) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Chargeable) Descriptor() protoreflect.EnumDescriptor {
	return file_api_v1_common_proto_enumTypes[6].Descriptor()
}

func (Chargeable) Type() protoreflect.EnumType {
	return &file_api_v1_common_proto_enumTypes[6]
}

func (x Chargeable) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Chargeable.Descriptor instead.
func (Chargeable) EnumDescriptor() ([]byte, []int) {
	return file_api_v1_common_proto_rawDescGZIP(), []int{6}
}

// Auditing option specified per service method
// by default all service methods are included
// add the auditing option if you want to exclude a method in auditing
type Auditing int32

const (
	Auditing_AUDITING_UNSPECIFIED Auditing = 0
	// AUDITING_INCLUDED if a method is annotated with this, all calls are audited
	Auditing_AUDITING_INCLUDED Auditing = 1
	// AUDITING_EXCLUDED if a method is annotated with this, no calls are audited
	Auditing_AUDITING_EXCLUDED Auditing = 2
)

// Enum value maps for Auditing.
var (
	Auditing_name = map[int32]string{
		0: "AUDITING_UNSPECIFIED",
		1: "AUDITING_INCLUDED",
		2: "AUDITING_EXCLUDED",
	}
	Auditing_value = map[string]int32{
		"AUDITING_UNSPECIFIED": 0,
		"AUDITING_INCLUDED":    1,
		"AUDITING_EXCLUDED":    2,
	}
)

func (x Auditing) Enum() *Auditing {
	p := new(Auditing)
	*p = x
	return p
}

func (x Auditing) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Auditing) Descriptor() protoreflect.EnumDescriptor {
	return file_api_v1_common_proto_enumTypes[7].Descriptor()
}

func (Auditing) Type() protoreflect.EnumType {
	return &file_api_v1_common_proto_enumTypes[7]
}

func (x Auditing) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Auditing.Descriptor instead.
func (Auditing) EnumDescriptor() ([]byte, []int) {
	return file_api_v1_common_proto_rawDescGZIP(), []int{7}
}

// Paging defines paging for methods with a lot of results
type Paging struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Page is used for pagination, if unset only the first page is returned,
	// the list response contains then the page number for the next page.
	Page *uint64 `protobuf:"varint,1,opt,name=page,proto3,oneof" json:"page,omitempty"`
	// Count is the number of results returned per page, if not given server side defaults apply
	Count *uint64 `protobuf:"varint,2,opt,name=count,proto3,oneof" json:"count,omitempty"`
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
	{
		ExtendedType:  (*descriptorpb.MethodOptions)(nil),
		ExtensionType: (*Visibility)(nil),
		Field:         51003,
		Name:          "api.v1.visibility",
		Tag:           "varint,51003,opt,name=visibility,enum=api.v1.Visibility",
		Filename:      "api/v1/common.proto",
	},
	{
		ExtendedType:  (*descriptorpb.MethodOptions)(nil),
		ExtensionType: (*Chargeable)(nil),
		Field:         51004,
		Name:          "api.v1.chargeable",
		Tag:           "varint,51004,opt,name=chargeable,enum=api.v1.Chargeable",
		Filename:      "api/v1/common.proto",
	},
	{
		ExtendedType:  (*descriptorpb.MethodOptions)(nil),
		ExtensionType: (*Auditing)(nil),
		Field:         51005,
		Name:          "api.v1.auditing",
		Tag:           "varint,51005,opt,name=auditing,enum=api.v1.Auditing",
		Filename:      "api/v1/common.proto",
	},
}

// Extension fields to descriptorpb.MethodOptions.
var (
	// TenantRoles are used to define which tenant role a logged in user must provide to call this method
	//
	// repeated api.v1.TenantRole tenant_roles = 51000;
	E_TenantRoles = &file_api_v1_common_proto_extTypes[0]
	// ProjectRoles are used to define which project role a logged in user must provide to call this method
	//
	// repeated api.v1.ProjectRole project_roles = 51001;
	E_ProjectRoles = &file_api_v1_common_proto_extTypes[1]
	// AdminRoles are used to define which admin role a logged in user must provide to call this method
	//
	// repeated api.v1.AdminRole admin_roles = 51002;
	E_AdminRoles = &file_api_v1_common_proto_extTypes[2]
	// Visibility defines the visibility of this method, this is used to have public, private or self visible methods
	//
	// optional api.v1.Visibility visibility = 51003;
	E_Visibility = &file_api_v1_common_proto_extTypes[3]
	// Chargeable if this is set on a method, calling it requires that billing credentials are present
	//
	// optional api.v1.Chargeable chargeable = 51004;
	E_Chargeable = &file_api_v1_common_proto_extTypes[4]
	// Auditing defines if calls to this method should be audited or not
	//
	// optional api.v1.Auditing auditing = 51005;
	E_Auditing = &file_api_v1_common_proto_extTypes[5]
)

var File_api_v1_common_proto protoreflect.FileDescriptor

var file_api_v1_common_proto_rawDesc = []byte{
	0x0a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x1a, 0x20, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x64,
	0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x4f, 0x0a, 0x06, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x67, 0x12, 0x17, 0x0a, 0x04, 0x70, 0x61, 0x67,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x48, 0x00, 0x52, 0x04, 0x70, 0x61, 0x67, 0x65, 0x88,
	0x01, 0x01, 0x12, 0x19, 0x0a, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28,
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
	0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x56, 0x49, 0x45, 0x57, 0x45, 0x52, 0x10, 0x02, 0x2a, 0x6c, 0x0a,
	0x0a, 0x56, 0x69, 0x73, 0x69, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x12, 0x1a, 0x0a, 0x16, 0x56,
	0x49, 0x53, 0x49, 0x42, 0x49, 0x4c, 0x49, 0x54, 0x59, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43,
	0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x15, 0x0a, 0x11, 0x56, 0x49, 0x53, 0x49, 0x42,
	0x49, 0x4c, 0x49, 0x54, 0x59, 0x5f, 0x50, 0x55, 0x42, 0x4c, 0x49, 0x43, 0x10, 0x01, 0x12, 0x16,
	0x0a, 0x12, 0x56, 0x49, 0x53, 0x49, 0x42, 0x49, 0x4c, 0x49, 0x54, 0x59, 0x5f, 0x50, 0x52, 0x49,
	0x56, 0x41, 0x54, 0x45, 0x10, 0x02, 0x12, 0x13, 0x0a, 0x0f, 0x56, 0x49, 0x53, 0x49, 0x42, 0x49,
	0x4c, 0x49, 0x54, 0x59, 0x5f, 0x53, 0x45, 0x4c, 0x46, 0x10, 0x03, 0x2a, 0x53, 0x0a, 0x0a, 0x43,
	0x68, 0x61, 0x72, 0x67, 0x65, 0x61, 0x62, 0x6c, 0x65, 0x12, 0x1a, 0x0a, 0x16, 0x43, 0x48, 0x41,
	0x52, 0x47, 0x45, 0x41, 0x42, 0x4c, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46,
	0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x13, 0x0a, 0x0f, 0x43, 0x48, 0x41, 0x52, 0x47, 0x45, 0x41,
	0x42, 0x4c, 0x45, 0x5f, 0x54, 0x52, 0x55, 0x45, 0x10, 0x01, 0x12, 0x14, 0x0a, 0x10, 0x43, 0x48,
	0x41, 0x52, 0x47, 0x45, 0x41, 0x42, 0x4c, 0x45, 0x5f, 0x46, 0x41, 0x4c, 0x53, 0x45, 0x10, 0x02,
	0x2a, 0x52, 0x0a, 0x08, 0x41, 0x75, 0x64, 0x69, 0x74, 0x69, 0x6e, 0x67, 0x12, 0x18, 0x0a, 0x14,
	0x41, 0x55, 0x44, 0x49, 0x54, 0x49, 0x4e, 0x47, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49,
	0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x15, 0x0a, 0x11, 0x41, 0x55, 0x44, 0x49, 0x54, 0x49,
	0x4e, 0x47, 0x5f, 0x49, 0x4e, 0x43, 0x4c, 0x55, 0x44, 0x45, 0x44, 0x10, 0x01, 0x12, 0x15, 0x0a,
	0x11, 0x41, 0x55, 0x44, 0x49, 0x54, 0x49, 0x4e, 0x47, 0x5f, 0x45, 0x58, 0x43, 0x4c, 0x55, 0x44,
	0x45, 0x44, 0x10, 0x02, 0x3a, 0x57, 0x0a, 0x0c, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f, 0x72,
	0x6f, 0x6c, 0x65, 0x73, 0x12, 0x1e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x4f, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x18, 0xb8, 0x8e, 0x03, 0x20, 0x03, 0x28, 0x0e, 0x32, 0x12, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x52, 0x6f, 0x6c, 0x65,
	0x52, 0x0b, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x73, 0x3a, 0x5a, 0x0a,
	0x0d, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x12, 0x1e,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0xb9,
	0x8e, 0x03, 0x20, 0x03, 0x28, 0x0e, 0x32, 0x13, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e,
	0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x0c, 0x70, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x73, 0x3a, 0x54, 0x0a, 0x0b, 0x61, 0x64, 0x6d,
	0x69, 0x6e, 0x5f, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x12, 0x1e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x4d, 0x65, 0x74, 0x68, 0x6f,
	0x64, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0xba, 0x8e, 0x03, 0x20, 0x03, 0x28, 0x0e,
	0x32, 0x11, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x52,
	0x6f, 0x6c, 0x65, 0x52, 0x0a, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x52, 0x6f, 0x6c, 0x65, 0x73, 0x3a,
	0x54, 0x0a, 0x0a, 0x76, 0x69, 0x73, 0x69, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x12, 0x1e, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0xbb, 0x8e,
	0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x12, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x56,
	0x69, 0x73, 0x69, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x52, 0x0a, 0x76, 0x69, 0x73, 0x69, 0x62,
	0x69, 0x6c, 0x69, 0x74, 0x79, 0x3a, 0x54, 0x0a, 0x0a, 0x63, 0x68, 0x61, 0x72, 0x67, 0x65, 0x61,
	0x62, 0x6c, 0x65, 0x12, 0x1e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x4f, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x18, 0xbc, 0x8e, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x12, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x68, 0x61, 0x72, 0x67, 0x65, 0x61, 0x62, 0x6c, 0x65, 0x52,
	0x0a, 0x63, 0x68, 0x61, 0x72, 0x67, 0x65, 0x61, 0x62, 0x6c, 0x65, 0x3a, 0x4e, 0x0a, 0x08, 0x61,
	0x75, 0x64, 0x69, 0x74, 0x69, 0x6e, 0x67, 0x12, 0x1e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64,
	0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0xbd, 0x8e, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32,
	0x10, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x75, 0x64, 0x69, 0x74, 0x69, 0x6e,
	0x67, 0x52, 0x08, 0x61, 0x75, 0x64, 0x69, 0x74, 0x69, 0x6e, 0x67, 0x42, 0x84, 0x01, 0x0a, 0x0a,
	0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x42, 0x0b, 0x43, 0x6f, 0x6d, 0x6d,
	0x6f, 0x6e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x30, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63,
	0x6b, 0x2d, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x76, 0x31, 0x3b, 0x61, 0x70, 0x69, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58,
	0x58, 0xaa, 0x02, 0x06, 0x41, 0x70, 0x69, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x06, 0x41, 0x70, 0x69,
	0x5c, 0x56, 0x31, 0xe2, 0x02, 0x12, 0x41, 0x70, 0x69, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42,
	0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x07, 0x41, 0x70, 0x69, 0x3a, 0x3a,
	0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
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

var file_api_v1_common_proto_enumTypes = make([]protoimpl.EnumInfo, 8)
var file_api_v1_common_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_api_v1_common_proto_goTypes = []interface{}{
	(OAuthProvider)(0),                 // 0: api.v1.OAuthProvider
	(Role)(0),                          // 1: api.v1.Role
	(TenantRole)(0),                    // 2: api.v1.TenantRole
	(ProjectRole)(0),                   // 3: api.v1.ProjectRole
	(AdminRole)(0),                     // 4: api.v1.AdminRole
	(Visibility)(0),                    // 5: api.v1.Visibility
	(Chargeable)(0),                    // 6: api.v1.Chargeable
	(Auditing)(0),                      // 7: api.v1.Auditing
	(*Paging)(nil),                     // 8: api.v1.Paging
	(*descriptorpb.MethodOptions)(nil), // 9: google.protobuf.MethodOptions
}
var file_api_v1_common_proto_depIdxs = []int32{
	9,  // 0: api.v1.tenant_roles:extendee -> google.protobuf.MethodOptions
	9,  // 1: api.v1.project_roles:extendee -> google.protobuf.MethodOptions
	9,  // 2: api.v1.admin_roles:extendee -> google.protobuf.MethodOptions
	9,  // 3: api.v1.visibility:extendee -> google.protobuf.MethodOptions
	9,  // 4: api.v1.chargeable:extendee -> google.protobuf.MethodOptions
	9,  // 5: api.v1.auditing:extendee -> google.protobuf.MethodOptions
	2,  // 6: api.v1.tenant_roles:type_name -> api.v1.TenantRole
	3,  // 7: api.v1.project_roles:type_name -> api.v1.ProjectRole
	4,  // 8: api.v1.admin_roles:type_name -> api.v1.AdminRole
	5,  // 9: api.v1.visibility:type_name -> api.v1.Visibility
	6,  // 10: api.v1.chargeable:type_name -> api.v1.Chargeable
	7,  // 11: api.v1.auditing:type_name -> api.v1.Auditing
	12, // [12:12] is the sub-list for method output_type
	12, // [12:12] is the sub-list for method input_type
	6,  // [6:12] is the sub-list for extension type_name
	0,  // [0:6] is the sub-list for extension extendee
	0,  // [0:0] is the sub-list for field type_name
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
			NumEnums:      8,
			NumMessages:   1,
			NumExtensions: 6,
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
