// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        (unknown)
// source: api/v1/project.proto

package apiv1

import (
	_ "github.com/envoyproxy/protoc-gen-validate/validate"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Project defines a group of resources belonging to a tenant
// a tenant can have multiple projects
type Project struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Uuid of this project
	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	// Name of this project must be unique per tenant
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	// Description of this project
	Description string `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	// Tenant this project belongs to
	Tenant string `protobuf:"bytes,4,opt,name=tenant,proto3" json:"tenant,omitempty"`
	// CreatedAt the date when this project was created
	CreatedAt *timestamppb.Timestamp `protobuf:"bytes,10,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	// UpdatedAt the date when this project was updated
	UpdatedAt *timestamppb.Timestamp `protobuf:"bytes,11,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
}

func (x *Project) Reset() {
	*x = Project{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_project_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Project) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Project) ProtoMessage() {}

func (x *Project) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_project_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Project.ProtoReflect.Descriptor instead.
func (*Project) Descriptor() ([]byte, []int) {
	return file_api_v1_project_proto_rawDescGZIP(), []int{0}
}

func (x *Project) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *Project) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Project) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Project) GetTenant() string {
	if x != nil {
		return x.Tenant
	}
	return ""
}

func (x *Project) GetCreatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

func (x *Project) GetUpdatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdatedAt
	}
	return nil
}

// ProjectServiceListRequest is the request payload to list all projects
type ProjectServiceListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name list only projects with this name
	Name *string `protobuf:"bytes,1,opt,name=name,proto3,oneof" json:"name,omitempty"`
	// Tenant list only projects of this tenant
	Tenant *string `protobuf:"bytes,2,opt,name=tenant,proto3,oneof" json:"tenant,omitempty"`
}

func (x *ProjectServiceListRequest) Reset() {
	*x = ProjectServiceListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_project_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectServiceListRequest) ProtoMessage() {}

func (x *ProjectServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_project_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProjectServiceListRequest.ProtoReflect.Descriptor instead.
func (*ProjectServiceListRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_project_proto_rawDescGZIP(), []int{1}
}

func (x *ProjectServiceListRequest) GetName() string {
	if x != nil && x.Name != nil {
		return *x.Name
	}
	return ""
}

func (x *ProjectServiceListRequest) GetTenant() string {
	if x != nil && x.Tenant != nil {
		return *x.Tenant
	}
	return ""
}

// ProjectServiceListResponse is the response payload to list all projects
type ProjectServiceListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Projects is a list of all your projects
	Projects []*Project `protobuf:"bytes,1,rep,name=projects,proto3" json:"projects,omitempty"`
}

func (x *ProjectServiceListResponse) Reset() {
	*x = ProjectServiceListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_project_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectServiceListResponse) ProtoMessage() {}

func (x *ProjectServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_project_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProjectServiceListResponse.ProtoReflect.Descriptor instead.
func (*ProjectServiceListResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_project_proto_rawDescGZIP(), []int{2}
}

func (x *ProjectServiceListResponse) GetProjects() []*Project {
	if x != nil {
		return x.Projects
	}
	return nil
}

// ProjectServiceGetRequest is the request payload to get a project
type ProjectServiceGetRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Project is the uuid of the project to get
	Project string `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
}

func (x *ProjectServiceGetRequest) Reset() {
	*x = ProjectServiceGetRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_project_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectServiceGetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectServiceGetRequest) ProtoMessage() {}

func (x *ProjectServiceGetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_project_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProjectServiceGetRequest.ProtoReflect.Descriptor instead.
func (*ProjectServiceGetRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_project_proto_rawDescGZIP(), []int{3}
}

func (x *ProjectServiceGetRequest) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

// ProjectServiceGetResponse is the response payload to get a projects
type ProjectServiceGetResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Project is the project
	Project *Project `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
}

func (x *ProjectServiceGetResponse) Reset() {
	*x = ProjectServiceGetResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_project_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectServiceGetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectServiceGetResponse) ProtoMessage() {}

func (x *ProjectServiceGetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_project_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProjectServiceGetResponse.ProtoReflect.Descriptor instead.
func (*ProjectServiceGetResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_project_proto_rawDescGZIP(), []int{4}
}

func (x *ProjectServiceGetResponse) GetProject() *Project {
	if x != nil {
		return x.Project
	}
	return nil
}

// ProjectServiceCreateRequest is the request payload to Create a project
type ProjectServiceCreateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Tenant is the owner of this project
	Tenant string `protobuf:"bytes,1,opt,name=tenant,proto3" json:"tenant,omitempty"`
	// Name of this project, unique per tenant
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	// Description of this project
	Description string `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
}

func (x *ProjectServiceCreateRequest) Reset() {
	*x = ProjectServiceCreateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_project_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectServiceCreateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectServiceCreateRequest) ProtoMessage() {}

func (x *ProjectServiceCreateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_project_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProjectServiceCreateRequest.ProtoReflect.Descriptor instead.
func (*ProjectServiceCreateRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_project_proto_rawDescGZIP(), []int{5}
}

func (x *ProjectServiceCreateRequest) GetTenant() string {
	if x != nil {
		return x.Tenant
	}
	return ""
}

func (x *ProjectServiceCreateRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ProjectServiceCreateRequest) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

// ProjectServiceCreateResponse is the response payload of creation of a project
type ProjectServiceCreateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Login is the tenant of the project to create
	// TODO: is login really a good name?
	Login string `protobuf:"bytes,1,opt,name=login,proto3" json:"login,omitempty"`
}

func (x *ProjectServiceCreateResponse) Reset() {
	*x = ProjectServiceCreateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_project_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectServiceCreateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectServiceCreateResponse) ProtoMessage() {}

func (x *ProjectServiceCreateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_project_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProjectServiceCreateResponse.ProtoReflect.Descriptor instead.
func (*ProjectServiceCreateResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_project_proto_rawDescGZIP(), []int{6}
}

func (x *ProjectServiceCreateResponse) GetLogin() string {
	if x != nil {
		return x.Login
	}
	return ""
}

// ProjectServiceDeleteRequest is the request payload to delete a project
type ProjectServiceDeleteRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Project is the uuid of the project to get
	Project string `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
}

func (x *ProjectServiceDeleteRequest) Reset() {
	*x = ProjectServiceDeleteRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_project_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectServiceDeleteRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectServiceDeleteRequest) ProtoMessage() {}

func (x *ProjectServiceDeleteRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_project_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProjectServiceDeleteRequest.ProtoReflect.Descriptor instead.
func (*ProjectServiceDeleteRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_project_proto_rawDescGZIP(), []int{7}
}

func (x *ProjectServiceDeleteRequest) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

// ProjectServiceDeleteResponse is the response payload to delete a project
type ProjectServiceDeleteResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Project is the project
	Project *Project `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
}

func (x *ProjectServiceDeleteResponse) Reset() {
	*x = ProjectServiceDeleteResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_project_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectServiceDeleteResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectServiceDeleteResponse) ProtoMessage() {}

func (x *ProjectServiceDeleteResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_project_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProjectServiceDeleteResponse.ProtoReflect.Descriptor instead.
func (*ProjectServiceDeleteResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_project_proto_rawDescGZIP(), []int{8}
}

func (x *ProjectServiceDeleteResponse) GetProject() *Project {
	if x != nil {
		return x.Project
	}
	return nil
}

// ProjectServiceUpdateRequest is the request payload to update a project
type ProjectServiceUpdateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Project is the uuid of the project to get
	Project string `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
	// Name of this project unique per tenant
	Name *string `protobuf:"bytes,2,opt,name=name,proto3,oneof" json:"name,omitempty"`
	// Description of this project
	Description *string `protobuf:"bytes,3,opt,name=description,proto3,oneof" json:"description,omitempty"`
}

func (x *ProjectServiceUpdateRequest) Reset() {
	*x = ProjectServiceUpdateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_project_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectServiceUpdateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectServiceUpdateRequest) ProtoMessage() {}

func (x *ProjectServiceUpdateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_project_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProjectServiceUpdateRequest.ProtoReflect.Descriptor instead.
func (*ProjectServiceUpdateRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_project_proto_rawDescGZIP(), []int{9}
}

func (x *ProjectServiceUpdateRequest) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

func (x *ProjectServiceUpdateRequest) GetName() string {
	if x != nil && x.Name != nil {
		return *x.Name
	}
	return ""
}

func (x *ProjectServiceUpdateRequest) GetDescription() string {
	if x != nil && x.Description != nil {
		return *x.Description
	}
	return ""
}

// ProjectServiceUpdateResponse is the response payload to update a project
type ProjectServiceUpdateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Project is the project
	Project *Project `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
}

func (x *ProjectServiceUpdateResponse) Reset() {
	*x = ProjectServiceUpdateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_project_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectServiceUpdateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectServiceUpdateResponse) ProtoMessage() {}

func (x *ProjectServiceUpdateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_project_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProjectServiceUpdateResponse.ProtoReflect.Descriptor instead.
func (*ProjectServiceUpdateResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_project_proto_rawDescGZIP(), []int{10}
}

func (x *ProjectServiceUpdateResponse) GetProject() *Project {
	if x != nil {
		return x.Project
	}
	return nil
}

var File_api_v1_project_proto protoreflect.FileDescriptor

var file_api_v1_project_proto_rawDesc = []byte{
	0x0a, 0x14, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x1a, 0x13,
	0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76,
	0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xe1, 0x01,
	0x0a, 0x07, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x16, 0x0a, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x63,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x63, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x64, 0x5f, 0x61, 0x74, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41,
	0x74, 0x22, 0x7d, 0x0a, 0x19, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x23,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42,
	0x07, 0x72, 0x05, 0x10, 0x02, 0x18, 0x80, 0x01, 0x48, 0x00, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x88, 0x01, 0x01, 0x12, 0x27, 0x0a, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05, 0x10, 0x02, 0x18, 0x80, 0x01, 0x48,
	0x01, 0x52, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x88, 0x01, 0x01, 0x42, 0x07, 0x0a, 0x05,
	0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x42, 0x09, 0x0a, 0x07, 0x5f, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74,
	0x22, 0x49, 0x0a, 0x1a, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2b,
	0x0a, 0x08, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x0f, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63,
	0x74, 0x52, 0x08, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x22, 0x3e, 0x0a, 0x18, 0x50,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x22, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65,
	0x63, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x72, 0x03, 0xb0,
	0x01, 0x01, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x22, 0x46, 0x0a, 0x19, 0x50,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x29, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x22, 0x8e, 0x01, 0x0a, 0x1b, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x22, 0x0a, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05, 0x10, 0x02, 0x18, 0x80, 0x01, 0x52,
	0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x12, 0x1d, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x09, 0xfa, 0x42, 0x06, 0x72, 0x04, 0x10, 0x02, 0x18, 0x40,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2c, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07,
	0x72, 0x05, 0x10, 0x02, 0x18, 0x80, 0x04, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x22, 0x40, 0x0a, 0x1c, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x20, 0x0a, 0x05, 0x6c, 0x6f, 0x67, 0x69, 0x6e, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05, 0x10, 0x02, 0x18, 0x80, 0x01, 0x52,
	0x05, 0x6c, 0x6f, 0x67, 0x69, 0x6e, 0x22, 0x41, 0x0a, 0x1b, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63,
	0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x22, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x72, 0x03, 0xb0, 0x01, 0x01,
	0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x22, 0x49, 0x0a, 0x1c, 0x50, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x29, 0x0a, 0x07, 0x70, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x07, 0x70, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x22, 0xb1, 0x01, 0x0a, 0x1b, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x22, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x72, 0x03, 0xb0, 0x01, 0x01, 0x52,
	0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x12, 0x22, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x09, 0xfa, 0x42, 0x06, 0x72, 0x04, 0x10, 0x02, 0x18,
	0x40, 0x48, 0x00, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x88, 0x01, 0x01, 0x12, 0x31, 0x0a, 0x0b,
	0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05, 0x10, 0x02, 0x18, 0x80, 0x04, 0x48, 0x01, 0x52,
	0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x88, 0x01, 0x01, 0x42,
	0x07, 0x0a, 0x05, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x42, 0x0e, 0x0a, 0x0c, 0x5f, 0x64, 0x65, 0x73,
	0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x49, 0x0a, 0x1c, 0x50, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x29, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x32, 0xec, 0x03, 0x0a, 0x0e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x57, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x21,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x22, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65,
	0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x08, 0xd8, 0xf3, 0x18, 0x03, 0xe8, 0xf3, 0x18, 0x02, 0x12,
	0x5c, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x20, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e,
	0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65,
	0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76,
	0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x10, 0xc8, 0xf3, 0x18,
	0x01, 0xc8, 0xf3, 0x18, 0x02, 0xc8, 0xf3, 0x18, 0x03, 0xe8, 0xf3, 0x18, 0x02, 0x12, 0x61, 0x0a,
	0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x23, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31,
	0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x0c, 0xc0, 0xf3, 0x18, 0x01, 0xc0, 0xf3, 0x18, 0x02, 0xe8, 0xf3, 0x18, 0x01,
	0x12, 0x5d, 0x0a, 0x06, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x23, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x24, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x08, 0xc8, 0xf3, 0x18, 0x01, 0xe8, 0xf3, 0x18, 0x01, 0x12,
	0x61, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x23, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x0c, 0xc8, 0xf3, 0x18, 0x01, 0xc8, 0xf3, 0x18, 0x02, 0xe8, 0xf3,
	0x18, 0x01, 0x42, 0x85, 0x01, 0x0a, 0x0a, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76,
	0x31, 0x42, 0x0c, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50,
	0x01, 0x5a, 0x30, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65,
	0x74, 0x61, 0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2d, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x3b, 0x61, 0x70,
	0x69, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x06, 0x41, 0x70, 0x69, 0x2e,
	0x56, 0x31, 0xca, 0x02, 0x06, 0x41, 0x70, 0x69, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x12, 0x41, 0x70,
	0x69, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0xea, 0x02, 0x07, 0x41, 0x70, 0x69, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_api_v1_project_proto_rawDescOnce sync.Once
	file_api_v1_project_proto_rawDescData = file_api_v1_project_proto_rawDesc
)

func file_api_v1_project_proto_rawDescGZIP() []byte {
	file_api_v1_project_proto_rawDescOnce.Do(func() {
		file_api_v1_project_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_v1_project_proto_rawDescData)
	})
	return file_api_v1_project_proto_rawDescData
}

var file_api_v1_project_proto_msgTypes = make([]protoimpl.MessageInfo, 11)
var file_api_v1_project_proto_goTypes = []interface{}{
	(*Project)(nil),                      // 0: api.v1.Project
	(*ProjectServiceListRequest)(nil),    // 1: api.v1.ProjectServiceListRequest
	(*ProjectServiceListResponse)(nil),   // 2: api.v1.ProjectServiceListResponse
	(*ProjectServiceGetRequest)(nil),     // 3: api.v1.ProjectServiceGetRequest
	(*ProjectServiceGetResponse)(nil),    // 4: api.v1.ProjectServiceGetResponse
	(*ProjectServiceCreateRequest)(nil),  // 5: api.v1.ProjectServiceCreateRequest
	(*ProjectServiceCreateResponse)(nil), // 6: api.v1.ProjectServiceCreateResponse
	(*ProjectServiceDeleteRequest)(nil),  // 7: api.v1.ProjectServiceDeleteRequest
	(*ProjectServiceDeleteResponse)(nil), // 8: api.v1.ProjectServiceDeleteResponse
	(*ProjectServiceUpdateRequest)(nil),  // 9: api.v1.ProjectServiceUpdateRequest
	(*ProjectServiceUpdateResponse)(nil), // 10: api.v1.ProjectServiceUpdateResponse
	(*timestamppb.Timestamp)(nil),        // 11: google.protobuf.Timestamp
}
var file_api_v1_project_proto_depIdxs = []int32{
	11, // 0: api.v1.Project.created_at:type_name -> google.protobuf.Timestamp
	11, // 1: api.v1.Project.updated_at:type_name -> google.protobuf.Timestamp
	0,  // 2: api.v1.ProjectServiceListResponse.projects:type_name -> api.v1.Project
	0,  // 3: api.v1.ProjectServiceGetResponse.project:type_name -> api.v1.Project
	0,  // 4: api.v1.ProjectServiceDeleteResponse.project:type_name -> api.v1.Project
	0,  // 5: api.v1.ProjectServiceUpdateResponse.project:type_name -> api.v1.Project
	1,  // 6: api.v1.ProjectService.List:input_type -> api.v1.ProjectServiceListRequest
	3,  // 7: api.v1.ProjectService.Get:input_type -> api.v1.ProjectServiceGetRequest
	5,  // 8: api.v1.ProjectService.Create:input_type -> api.v1.ProjectServiceCreateRequest
	7,  // 9: api.v1.ProjectService.Delete:input_type -> api.v1.ProjectServiceDeleteRequest
	9,  // 10: api.v1.ProjectService.Update:input_type -> api.v1.ProjectServiceUpdateRequest
	2,  // 11: api.v1.ProjectService.List:output_type -> api.v1.ProjectServiceListResponse
	4,  // 12: api.v1.ProjectService.Get:output_type -> api.v1.ProjectServiceGetResponse
	6,  // 13: api.v1.ProjectService.Create:output_type -> api.v1.ProjectServiceCreateResponse
	8,  // 14: api.v1.ProjectService.Delete:output_type -> api.v1.ProjectServiceDeleteResponse
	10, // 15: api.v1.ProjectService.Update:output_type -> api.v1.ProjectServiceUpdateResponse
	11, // [11:16] is the sub-list for method output_type
	6,  // [6:11] is the sub-list for method input_type
	6,  // [6:6] is the sub-list for extension type_name
	6,  // [6:6] is the sub-list for extension extendee
	0,  // [0:6] is the sub-list for field type_name
}

func init() { file_api_v1_project_proto_init() }
func file_api_v1_project_proto_init() {
	if File_api_v1_project_proto != nil {
		return
	}
	file_api_v1_common_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_api_v1_project_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Project); i {
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
		file_api_v1_project_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProjectServiceListRequest); i {
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
		file_api_v1_project_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProjectServiceListResponse); i {
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
		file_api_v1_project_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProjectServiceGetRequest); i {
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
		file_api_v1_project_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProjectServiceGetResponse); i {
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
		file_api_v1_project_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProjectServiceCreateRequest); i {
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
		file_api_v1_project_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProjectServiceCreateResponse); i {
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
		file_api_v1_project_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProjectServiceDeleteRequest); i {
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
		file_api_v1_project_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProjectServiceDeleteResponse); i {
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
		file_api_v1_project_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProjectServiceUpdateRequest); i {
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
		file_api_v1_project_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProjectServiceUpdateResponse); i {
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
	file_api_v1_project_proto_msgTypes[1].OneofWrappers = []interface{}{}
	file_api_v1_project_proto_msgTypes[9].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_v1_project_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   11,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_api_v1_project_proto_goTypes,
		DependencyIndexes: file_api_v1_project_proto_depIdxs,
		MessageInfos:      file_api_v1_project_proto_msgTypes,
	}.Build()
	File_api_v1_project_proto = out.File
	file_api_v1_project_proto_rawDesc = nil
	file_api_v1_project_proto_goTypes = nil
	file_api_v1_project_proto_depIdxs = nil
}
