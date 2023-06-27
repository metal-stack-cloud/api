// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        (unknown)
// source: api/v1/ip.proto

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

type IPType int32

const (
	IPType_IP_TYPE_UNSPECIFIED IPType = 0
	IPType_IP_TYPE_EPHEMERAL   IPType = 1
	IPType_IP_TYPE_STATIC      IPType = 2
)

// Enum value maps for IPType.
var (
	IPType_name = map[int32]string{
		0: "IP_TYPE_UNSPECIFIED",
		1: "IP_TYPE_EPHEMERAL",
		2: "IP_TYPE_STATIC",
	}
	IPType_value = map[string]int32{
		"IP_TYPE_UNSPECIFIED": 0,
		"IP_TYPE_EPHEMERAL":   1,
		"IP_TYPE_STATIC":      2,
	}
)

func (x IPType) Enum() *IPType {
	p := new(IPType)
	*p = x
	return p
}

func (x IPType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (IPType) Descriptor() protoreflect.EnumDescriptor {
	return file_api_v1_ip_proto_enumTypes[0].Descriptor()
}

func (IPType) Type() protoreflect.EnumType {
	return &file_api_v1_ip_proto_enumTypes[0]
}

func (x IPType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use IPType.Descriptor instead.
func (IPType) EnumDescriptor() ([]byte, []int) {
	return file_api_v1_ip_proto_rawDescGZIP(), []int{0}
}

// Types
type IP struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid        string                 `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Ip          string                 `protobuf:"bytes,2,opt,name=ip,proto3" json:"ip,omitempty"`
	Name        string                 `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	Description string                 `protobuf:"bytes,4,opt,name=description,proto3" json:"description,omitempty"`
	Network     string                 `protobuf:"bytes,5,opt,name=network,proto3" json:"network,omitempty"`
	Project     string                 `protobuf:"bytes,6,opt,name=project,proto3" json:"project,omitempty"`
	Type        IPType                 `protobuf:"varint,7,opt,name=type,proto3,enum=api.v1.IPType" json:"type,omitempty"`
	Tags        []string               `protobuf:"bytes,8,rep,name=tags,proto3" json:"tags,omitempty"`
	CreatedAt   *timestamppb.Timestamp `protobuf:"bytes,10,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt   *timestamppb.Timestamp `protobuf:"bytes,11,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	DeletedAt   *timestamppb.Timestamp `protobuf:"bytes,12,opt,name=deleted_at,json=deletedAt,proto3" json:"deleted_at,omitempty"`
}

func (x *IP) Reset() {
	*x = IP{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_ip_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IP) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IP) ProtoMessage() {}

func (x *IP) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_ip_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IP.ProtoReflect.Descriptor instead.
func (*IP) Descriptor() ([]byte, []int) {
	return file_api_v1_ip_proto_rawDescGZIP(), []int{0}
}

func (x *IP) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *IP) GetIp() string {
	if x != nil {
		return x.Ip
	}
	return ""
}

func (x *IP) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *IP) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *IP) GetNetwork() string {
	if x != nil {
		return x.Network
	}
	return ""
}

func (x *IP) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

func (x *IP) GetType() IPType {
	if x != nil {
		return x.Type
	}
	return IPType_IP_TYPE_UNSPECIFIED
}

func (x *IP) GetTags() []string {
	if x != nil {
		return x.Tags
	}
	return nil
}

func (x *IP) GetCreatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

func (x *IP) GetUpdatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdatedAt
	}
	return nil
}

func (x *IP) GetDeletedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.DeletedAt
	}
	return nil
}

// Requests
type IPServiceGetRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid    string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Project string `protobuf:"bytes,2,opt,name=project,proto3" json:"project,omitempty"`
}

func (x *IPServiceGetRequest) Reset() {
	*x = IPServiceGetRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_ip_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IPServiceGetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IPServiceGetRequest) ProtoMessage() {}

func (x *IPServiceGetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_ip_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IPServiceGetRequest.ProtoReflect.Descriptor instead.
func (*IPServiceGetRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_ip_proto_rawDescGZIP(), []int{1}
}

func (x *IPServiceGetRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *IPServiceGetRequest) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

type IPServiceAllocateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Project     string   `protobuf:"bytes,2,opt,name=project,proto3" json:"project,omitempty"`
	Name        string   `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	Description string   `protobuf:"bytes,4,opt,name=description,proto3" json:"description,omitempty"`
	Tags        []string `protobuf:"bytes,8,rep,name=tags,proto3" json:"tags,omitempty"`
	Static      bool     `protobuf:"varint,9,opt,name=static,proto3" json:"static,omitempty"`
}

func (x *IPServiceAllocateRequest) Reset() {
	*x = IPServiceAllocateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_ip_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IPServiceAllocateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IPServiceAllocateRequest) ProtoMessage() {}

func (x *IPServiceAllocateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_ip_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IPServiceAllocateRequest.ProtoReflect.Descriptor instead.
func (*IPServiceAllocateRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_ip_proto_rawDescGZIP(), []int{2}
}

func (x *IPServiceAllocateRequest) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

func (x *IPServiceAllocateRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *IPServiceAllocateRequest) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *IPServiceAllocateRequest) GetTags() []string {
	if x != nil {
		return x.Tags
	}
	return nil
}

func (x *IPServiceAllocateRequest) GetStatic() bool {
	if x != nil {
		return x.Static
	}
	return false
}

type IPServiceUpdateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Project string `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
	Ip      *IP    `protobuf:"bytes,2,opt,name=ip,proto3" json:"ip,omitempty"`
}

func (x *IPServiceUpdateRequest) Reset() {
	*x = IPServiceUpdateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_ip_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IPServiceUpdateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IPServiceUpdateRequest) ProtoMessage() {}

func (x *IPServiceUpdateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_ip_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IPServiceUpdateRequest.ProtoReflect.Descriptor instead.
func (*IPServiceUpdateRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_ip_proto_rawDescGZIP(), []int{3}
}

func (x *IPServiceUpdateRequest) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

func (x *IPServiceUpdateRequest) GetIp() *IP {
	if x != nil {
		return x.Ip
	}
	return nil
}

type IPServiceListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Project string `protobuf:"bytes,2,opt,name=project,proto3" json:"project,omitempty"`
}

func (x *IPServiceListRequest) Reset() {
	*x = IPServiceListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_ip_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IPServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IPServiceListRequest) ProtoMessage() {}

func (x *IPServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_ip_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IPServiceListRequest.ProtoReflect.Descriptor instead.
func (*IPServiceListRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_ip_proto_rawDescGZIP(), []int{4}
}

func (x *IPServiceListRequest) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

type IPServiceDeleteRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid    string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Project string `protobuf:"bytes,2,opt,name=project,proto3" json:"project,omitempty"`
}

func (x *IPServiceDeleteRequest) Reset() {
	*x = IPServiceDeleteRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_ip_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IPServiceDeleteRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IPServiceDeleteRequest) ProtoMessage() {}

func (x *IPServiceDeleteRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_ip_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IPServiceDeleteRequest.ProtoReflect.Descriptor instead.
func (*IPServiceDeleteRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_ip_proto_rawDescGZIP(), []int{5}
}

func (x *IPServiceDeleteRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *IPServiceDeleteRequest) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

// Responses
type IPServiceGetResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ip *IP `protobuf:"bytes,1,opt,name=ip,proto3" json:"ip,omitempty"`
}

func (x *IPServiceGetResponse) Reset() {
	*x = IPServiceGetResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_ip_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IPServiceGetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IPServiceGetResponse) ProtoMessage() {}

func (x *IPServiceGetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_ip_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IPServiceGetResponse.ProtoReflect.Descriptor instead.
func (*IPServiceGetResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_ip_proto_rawDescGZIP(), []int{6}
}

func (x *IPServiceGetResponse) GetIp() *IP {
	if x != nil {
		return x.Ip
	}
	return nil
}

type IPServiceUpdateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ip *IP `protobuf:"bytes,1,opt,name=ip,proto3" json:"ip,omitempty"`
}

func (x *IPServiceUpdateResponse) Reset() {
	*x = IPServiceUpdateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_ip_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IPServiceUpdateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IPServiceUpdateResponse) ProtoMessage() {}

func (x *IPServiceUpdateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_ip_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IPServiceUpdateResponse.ProtoReflect.Descriptor instead.
func (*IPServiceUpdateResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_ip_proto_rawDescGZIP(), []int{7}
}

func (x *IPServiceUpdateResponse) GetIp() *IP {
	if x != nil {
		return x.Ip
	}
	return nil
}

type IPServiceAllocateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ip *IP `protobuf:"bytes,1,opt,name=ip,proto3" json:"ip,omitempty"`
}

func (x *IPServiceAllocateResponse) Reset() {
	*x = IPServiceAllocateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_ip_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IPServiceAllocateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IPServiceAllocateResponse) ProtoMessage() {}

func (x *IPServiceAllocateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_ip_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IPServiceAllocateResponse.ProtoReflect.Descriptor instead.
func (*IPServiceAllocateResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_ip_proto_rawDescGZIP(), []int{8}
}

func (x *IPServiceAllocateResponse) GetIp() *IP {
	if x != nil {
		return x.Ip
	}
	return nil
}

type IPServiceStaticResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ip *IP `protobuf:"bytes,1,opt,name=ip,proto3" json:"ip,omitempty"`
}

func (x *IPServiceStaticResponse) Reset() {
	*x = IPServiceStaticResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_ip_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IPServiceStaticResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IPServiceStaticResponse) ProtoMessage() {}

func (x *IPServiceStaticResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_ip_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IPServiceStaticResponse.ProtoReflect.Descriptor instead.
func (*IPServiceStaticResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_ip_proto_rawDescGZIP(), []int{9}
}

func (x *IPServiceStaticResponse) GetIp() *IP {
	if x != nil {
		return x.Ip
	}
	return nil
}

type IPServiceListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ips []*IP `protobuf:"bytes,1,rep,name=ips,proto3" json:"ips,omitempty"`
}

func (x *IPServiceListResponse) Reset() {
	*x = IPServiceListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_ip_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IPServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IPServiceListResponse) ProtoMessage() {}

func (x *IPServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_ip_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IPServiceListResponse.ProtoReflect.Descriptor instead.
func (*IPServiceListResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_ip_proto_rawDescGZIP(), []int{10}
}

func (x *IPServiceListResponse) GetIps() []*IP {
	if x != nil {
		return x.Ips
	}
	return nil
}

type IPServiceDeleteResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ip *IP `protobuf:"bytes,1,opt,name=ip,proto3" json:"ip,omitempty"`
}

func (x *IPServiceDeleteResponse) Reset() {
	*x = IPServiceDeleteResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_ip_proto_msgTypes[11]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IPServiceDeleteResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IPServiceDeleteResponse) ProtoMessage() {}

func (x *IPServiceDeleteResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_ip_proto_msgTypes[11]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IPServiceDeleteResponse.ProtoReflect.Descriptor instead.
func (*IPServiceDeleteResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_ip_proto_rawDescGZIP(), []int{11}
}

func (x *IPServiceDeleteResponse) GetIp() *IP {
	if x != nil {
		return x.Ip
	}
	return nil
}

var File_api_v1_ip_proto protoreflect.FileDescriptor

var file_api_v1_ip_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x69, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x06, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f,
	0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x17, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61,
	0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc6, 0x03, 0x0a, 0x02, 0x49, 0x50, 0x12,
	0x1c, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xfa,
	0x42, 0x05, 0x72, 0x03, 0xb0, 0x01, 0x01, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x17, 0x0a,
	0x02, 0x69, 0x70, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x07, 0xfa, 0x42, 0x04, 0x72, 0x02,
	0x70, 0x01, 0x52, 0x02, 0x69, 0x70, 0x12, 0x1e, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05, 0x10, 0x02, 0x18, 0x80, 0x01,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2a, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05,
	0x72, 0x03, 0x18, 0x80, 0x01, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x24, 0x0a, 0x07, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05, 0x10, 0x02, 0x18, 0x80, 0x01, 0x52,
	0x07, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x12, 0x24, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05,
	0x10, 0x02, 0x18, 0x80, 0x01, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x12, 0x22,
	0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x0e, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79,
	0x70, 0x65, 0x12, 0x1c, 0x0a, 0x04, 0x74, 0x61, 0x67, 0x73, 0x18, 0x08, 0x20, 0x03, 0x28, 0x09,
	0x42, 0x08, 0xfa, 0x42, 0x05, 0x92, 0x01, 0x02, 0x10, 0x64, 0x52, 0x04, 0x74, 0x61, 0x67, 0x73,
	0x12, 0x39, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x0a,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x75,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x75, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x64, 0x5f, 0x61, 0x74, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x41,
	0x74, 0x22, 0x59, 0x0a, 0x13, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65,
	0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1c, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x72, 0x03, 0xb0, 0x01, 0x01,
	0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x24, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63,
	0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05, 0x10, 0x02,
	0x18, 0x80, 0x01, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x22, 0xc2, 0x01, 0x0a,
	0x18, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x41, 0x6c, 0x6c, 0x6f, 0x63, 0x61,
	0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x24, 0x0a, 0x07, 0x70, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72,
	0x05, 0x10, 0x02, 0x18, 0x80, 0x01, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x12,
	0x1e, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa,
	0x42, 0x07, 0x72, 0x05, 0x10, 0x02, 0x18, 0x80, 0x01, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12,
	0x2a, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x72, 0x03, 0x18, 0x80, 0x01, 0x52, 0x0b,
	0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1c, 0x0a, 0x04, 0x74,
	0x61, 0x67, 0x73, 0x18, 0x08, 0x20, 0x03, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x92, 0x01,
	0x02, 0x10, 0x64, 0x52, 0x04, 0x74, 0x61, 0x67, 0x73, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61,
	0x74, 0x69, 0x63, 0x18, 0x09, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x69,
	0x63, 0x22, 0x5a, 0x0a, 0x16, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x24, 0x0a, 0x07, 0x70,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42,
	0x07, 0x72, 0x05, 0x10, 0x02, 0x18, 0x80, 0x01, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63,
	0x74, 0x12, 0x1a, 0x0a, 0x02, 0x69, 0x70, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0a, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x52, 0x02, 0x69, 0x70, 0x22, 0x3c, 0x0a,
	0x14, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x24, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05, 0x10, 0x02, 0x18,
	0x80, 0x01, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x22, 0x5c, 0x0a, 0x16, 0x49,
	0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1c, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x72, 0x03, 0xb0, 0x01, 0x01, 0x52, 0x04, 0x75,
	0x75, 0x69, 0x64, 0x12, 0x24, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05, 0x10, 0x02, 0x18, 0x80, 0x01,
	0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x22, 0x32, 0x0a, 0x14, 0x49, 0x50, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x1a, 0x0a, 0x02, 0x69, 0x70, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0a, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x52, 0x02, 0x69, 0x70, 0x22, 0x35, 0x0a,
	0x17, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1a, 0x0a, 0x02, 0x69, 0x70, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50,
	0x52, 0x02, 0x69, 0x70, 0x22, 0x37, 0x0a, 0x19, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x41, 0x6c, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x1a, 0x0a, 0x02, 0x69, 0x70, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0a, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x52, 0x02, 0x69, 0x70, 0x22, 0x35, 0x0a,
	0x17, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x53, 0x74, 0x61, 0x74, 0x69, 0x63,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1a, 0x0a, 0x02, 0x69, 0x70, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50,
	0x52, 0x02, 0x69, 0x70, 0x22, 0x35, 0x0a, 0x15, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1c, 0x0a,
	0x03, 0x69, 0x70, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x52, 0x03, 0x69, 0x70, 0x73, 0x22, 0x35, 0x0a, 0x17, 0x49,
	0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1a, 0x0a, 0x02, 0x69, 0x70, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x52, 0x02,
	0x69, 0x70, 0x2a, 0x4c, 0x0a, 0x06, 0x49, 0x50, 0x54, 0x79, 0x70, 0x65, 0x12, 0x17, 0x0a, 0x13,
	0x49, 0x50, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46,
	0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x15, 0x0a, 0x11, 0x49, 0x50, 0x5f, 0x54, 0x59, 0x50, 0x45,
	0x5f, 0x45, 0x50, 0x48, 0x45, 0x4d, 0x45, 0x52, 0x41, 0x4c, 0x10, 0x01, 0x12, 0x12, 0x0a, 0x0e,
	0x49, 0x50, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x49, 0x43, 0x10, 0x02,
	0x32, 0xc7, 0x03, 0x0a, 0x09, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x52,
	0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x1b, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49,
	0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x1c, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x10, 0xc8, 0xf3, 0x18, 0x01, 0xc8, 0xf3, 0x18, 0x02, 0xc8, 0xf3, 0x18, 0x03, 0xe8, 0xf3,
	0x18, 0x02, 0x12, 0x5d, 0x0a, 0x08, 0x41, 0x6c, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x65, 0x12, 0x20,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x41, 0x6c, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x21, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x41, 0x6c, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x0c, 0xc8, 0xf3, 0x18, 0x01, 0xc8, 0xf3, 0x18, 0x02, 0xe0, 0xf3, 0x18,
	0x01, 0x12, 0x57, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x1e, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1f, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x0c, 0xc8, 0xf3,
	0x18, 0x01, 0xc8, 0xf3, 0x18, 0x02, 0xe0, 0xf3, 0x18, 0x01, 0x12, 0x55, 0x0a, 0x04, 0x4c, 0x69,
	0x73, 0x74, 0x12, 0x1c, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x1d, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x10, 0xc8, 0xf3, 0x18, 0x01, 0xc8, 0xf3, 0x18, 0x02, 0xc8, 0xf3, 0x18, 0x03, 0xe8, 0xf3, 0x18,
	0x02, 0x12, 0x57, 0x0a, 0x06, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x1e, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1f, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x50, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x0c, 0xc8, 0xf3,
	0x18, 0x01, 0xc8, 0xf3, 0x18, 0x02, 0xe0, 0xf3, 0x18, 0x01, 0x42, 0x80, 0x01, 0x0a, 0x0a, 0x63,
	0x6f, 0x6d, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x42, 0x07, 0x49, 0x70, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x50, 0x01, 0x5a, 0x30, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x6d, 0x65, 0x74, 0x61, 0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2d, 0x63, 0x6c, 0x6f,
	0x75, 0x64, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31,
	0x3b, 0x61, 0x70, 0x69, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x06, 0x41,
	0x70, 0x69, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x06, 0x41, 0x70, 0x69, 0x5c, 0x56, 0x31, 0xe2, 0x02,
	0x12, 0x41, 0x70, 0x69, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0xea, 0x02, 0x07, 0x41, 0x70, 0x69, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_v1_ip_proto_rawDescOnce sync.Once
	file_api_v1_ip_proto_rawDescData = file_api_v1_ip_proto_rawDesc
)

func file_api_v1_ip_proto_rawDescGZIP() []byte {
	file_api_v1_ip_proto_rawDescOnce.Do(func() {
		file_api_v1_ip_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_v1_ip_proto_rawDescData)
	})
	return file_api_v1_ip_proto_rawDescData
}

var file_api_v1_ip_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_api_v1_ip_proto_msgTypes = make([]protoimpl.MessageInfo, 12)
var file_api_v1_ip_proto_goTypes = []interface{}{
	(IPType)(0),                       // 0: api.v1.IPType
	(*IP)(nil),                        // 1: api.v1.IP
	(*IPServiceGetRequest)(nil),       // 2: api.v1.IPServiceGetRequest
	(*IPServiceAllocateRequest)(nil),  // 3: api.v1.IPServiceAllocateRequest
	(*IPServiceUpdateRequest)(nil),    // 4: api.v1.IPServiceUpdateRequest
	(*IPServiceListRequest)(nil),      // 5: api.v1.IPServiceListRequest
	(*IPServiceDeleteRequest)(nil),    // 6: api.v1.IPServiceDeleteRequest
	(*IPServiceGetResponse)(nil),      // 7: api.v1.IPServiceGetResponse
	(*IPServiceUpdateResponse)(nil),   // 8: api.v1.IPServiceUpdateResponse
	(*IPServiceAllocateResponse)(nil), // 9: api.v1.IPServiceAllocateResponse
	(*IPServiceStaticResponse)(nil),   // 10: api.v1.IPServiceStaticResponse
	(*IPServiceListResponse)(nil),     // 11: api.v1.IPServiceListResponse
	(*IPServiceDeleteResponse)(nil),   // 12: api.v1.IPServiceDeleteResponse
	(*timestamppb.Timestamp)(nil),     // 13: google.protobuf.Timestamp
}
var file_api_v1_ip_proto_depIdxs = []int32{
	0,  // 0: api.v1.IP.type:type_name -> api.v1.IPType
	13, // 1: api.v1.IP.created_at:type_name -> google.protobuf.Timestamp
	13, // 2: api.v1.IP.updated_at:type_name -> google.protobuf.Timestamp
	13, // 3: api.v1.IP.deleted_at:type_name -> google.protobuf.Timestamp
	1,  // 4: api.v1.IPServiceUpdateRequest.ip:type_name -> api.v1.IP
	1,  // 5: api.v1.IPServiceGetResponse.ip:type_name -> api.v1.IP
	1,  // 6: api.v1.IPServiceUpdateResponse.ip:type_name -> api.v1.IP
	1,  // 7: api.v1.IPServiceAllocateResponse.ip:type_name -> api.v1.IP
	1,  // 8: api.v1.IPServiceStaticResponse.ip:type_name -> api.v1.IP
	1,  // 9: api.v1.IPServiceListResponse.ips:type_name -> api.v1.IP
	1,  // 10: api.v1.IPServiceDeleteResponse.ip:type_name -> api.v1.IP
	2,  // 11: api.v1.IPService.Get:input_type -> api.v1.IPServiceGetRequest
	3,  // 12: api.v1.IPService.Allocate:input_type -> api.v1.IPServiceAllocateRequest
	4,  // 13: api.v1.IPService.Update:input_type -> api.v1.IPServiceUpdateRequest
	5,  // 14: api.v1.IPService.List:input_type -> api.v1.IPServiceListRequest
	6,  // 15: api.v1.IPService.Delete:input_type -> api.v1.IPServiceDeleteRequest
	7,  // 16: api.v1.IPService.Get:output_type -> api.v1.IPServiceGetResponse
	9,  // 17: api.v1.IPService.Allocate:output_type -> api.v1.IPServiceAllocateResponse
	8,  // 18: api.v1.IPService.Update:output_type -> api.v1.IPServiceUpdateResponse
	11, // 19: api.v1.IPService.List:output_type -> api.v1.IPServiceListResponse
	12, // 20: api.v1.IPService.Delete:output_type -> api.v1.IPServiceDeleteResponse
	16, // [16:21] is the sub-list for method output_type
	11, // [11:16] is the sub-list for method input_type
	11, // [11:11] is the sub-list for extension type_name
	11, // [11:11] is the sub-list for extension extendee
	0,  // [0:11] is the sub-list for field type_name
}

func init() { file_api_v1_ip_proto_init() }
func file_api_v1_ip_proto_init() {
	if File_api_v1_ip_proto != nil {
		return
	}
	file_api_v1_common_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_api_v1_ip_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IP); i {
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
		file_api_v1_ip_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IPServiceGetRequest); i {
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
		file_api_v1_ip_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IPServiceAllocateRequest); i {
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
		file_api_v1_ip_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IPServiceUpdateRequest); i {
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
		file_api_v1_ip_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IPServiceListRequest); i {
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
		file_api_v1_ip_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IPServiceDeleteRequest); i {
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
		file_api_v1_ip_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IPServiceGetResponse); i {
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
		file_api_v1_ip_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IPServiceUpdateResponse); i {
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
		file_api_v1_ip_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IPServiceAllocateResponse); i {
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
		file_api_v1_ip_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IPServiceStaticResponse); i {
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
		file_api_v1_ip_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IPServiceListResponse); i {
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
		file_api_v1_ip_proto_msgTypes[11].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IPServiceDeleteResponse); i {
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
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_v1_ip_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   12,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_api_v1_ip_proto_goTypes,
		DependencyIndexes: file_api_v1_ip_proto_depIdxs,
		EnumInfos:         file_api_v1_ip_proto_enumTypes,
		MessageInfos:      file_api_v1_ip_proto_msgTypes,
	}.Build()
	File_api_v1_ip_proto = out.File
	file_api_v1_ip_proto_rawDesc = nil
	file_api_v1_ip_proto_goTypes = nil
	file_api_v1_ip_proto_depIdxs = nil
}
