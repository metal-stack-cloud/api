// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        (unknown)
// source: api/v1/volume.proto

package v1

import (
	_ "github.com/envoyproxy/protoc-gen-validate/validate"
	_ "google.golang.org/genproto/googleapis/api/annotations"
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

// Types
type Volume struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid         string                 `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Name         string                 `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Project      string                 `protobuf:"bytes,3,opt,name=project,proto3" json:"project,omitempty"`
	Partition    string                 `protobuf:"bytes,4,opt,name=partition,proto3" json:"partition,omitempty"` // partition is part of a region
	StorageClass string                 `protobuf:"bytes,5,opt,name=storage_class,json=storageClass,proto3" json:"storage_class,omitempty"`
	Size         uint64                 `protobuf:"varint,6,opt,name=size,proto3" json:"size,omitempty"`
	Usage        uint64                 `protobuf:"varint,7,opt,name=usage,proto3" json:"usage,omitempty"`
	AttachedTo   *string                `protobuf:"bytes,8,opt,name=attached_to,json=attachedTo,proto3,oneof" json:"attached_to,omitempty"`
	CreatedAt    *timestamppb.Timestamp `protobuf:"bytes,10,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt    *timestamppb.Timestamp `protobuf:"bytes,11,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	DeletedAt    *timestamppb.Timestamp `protobuf:"bytes,12,opt,name=deleted_at,json=deletedAt,proto3" json:"deleted_at,omitempty"`
}

func (x *Volume) Reset() {
	*x = Volume{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_volume_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Volume) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Volume) ProtoMessage() {}

func (x *Volume) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Volume.ProtoReflect.Descriptor instead.
func (*Volume) Descriptor() ([]byte, []int) {
	return file_api_v1_volume_proto_rawDescGZIP(), []int{0}
}

func (x *Volume) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *Volume) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Volume) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

func (x *Volume) GetPartition() string {
	if x != nil {
		return x.Partition
	}
	return ""
}

func (x *Volume) GetStorageClass() string {
	if x != nil {
		return x.StorageClass
	}
	return ""
}

func (x *Volume) GetSize() uint64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *Volume) GetUsage() uint64 {
	if x != nil {
		return x.Usage
	}
	return 0
}

func (x *Volume) GetAttachedTo() string {
	if x != nil && x.AttachedTo != nil {
		return *x.AttachedTo
	}
	return ""
}

func (x *Volume) GetCreatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

func (x *Volume) GetUpdatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdatedAt
	}
	return nil
}

func (x *Volume) GetDeletedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.DeletedAt
	}
	return nil
}

// Requests
type VolumeServiceGetRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid    string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Project string `protobuf:"bytes,2,opt,name=project,proto3" json:"project,omitempty"`
}

func (x *VolumeServiceGetRequest) Reset() {
	*x = VolumeServiceGetRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_volume_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VolumeServiceGetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeServiceGetRequest) ProtoMessage() {}

func (x *VolumeServiceGetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VolumeServiceGetRequest.ProtoReflect.Descriptor instead.
func (*VolumeServiceGetRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_volume_proto_rawDescGZIP(), []int{1}
}

func (x *VolumeServiceGetRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *VolumeServiceGetRequest) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

type VolumeServiceListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Project string `protobuf:"bytes,2,opt,name=project,proto3" json:"project,omitempty"`
}

func (x *VolumeServiceListRequest) Reset() {
	*x = VolumeServiceListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_volume_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VolumeServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeServiceListRequest) ProtoMessage() {}

func (x *VolumeServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VolumeServiceListRequest.ProtoReflect.Descriptor instead.
func (*VolumeServiceListRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_volume_proto_rawDescGZIP(), []int{2}
}

func (x *VolumeServiceListRequest) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

type VolumeServiceDeleteRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid    string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Project string `protobuf:"bytes,2,opt,name=project,proto3" json:"project,omitempty"`
}

func (x *VolumeServiceDeleteRequest) Reset() {
	*x = VolumeServiceDeleteRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_volume_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VolumeServiceDeleteRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeServiceDeleteRequest) ProtoMessage() {}

func (x *VolumeServiceDeleteRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VolumeServiceDeleteRequest.ProtoReflect.Descriptor instead.
func (*VolumeServiceDeleteRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_volume_proto_rawDescGZIP(), []int{3}
}

func (x *VolumeServiceDeleteRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *VolumeServiceDeleteRequest) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

// Responses
type VolumeServiceGetResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Volume *Volume `protobuf:"bytes,1,opt,name=volume,proto3" json:"volume,omitempty"`
}

func (x *VolumeServiceGetResponse) Reset() {
	*x = VolumeServiceGetResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_volume_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VolumeServiceGetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeServiceGetResponse) ProtoMessage() {}

func (x *VolumeServiceGetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VolumeServiceGetResponse.ProtoReflect.Descriptor instead.
func (*VolumeServiceGetResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_volume_proto_rawDescGZIP(), []int{4}
}

func (x *VolumeServiceGetResponse) GetVolume() *Volume {
	if x != nil {
		return x.Volume
	}
	return nil
}

type VolumeServiceListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Volumes []*Volume `protobuf:"bytes,1,rep,name=volumes,proto3" json:"volumes,omitempty"`
}

func (x *VolumeServiceListResponse) Reset() {
	*x = VolumeServiceListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_volume_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VolumeServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeServiceListResponse) ProtoMessage() {}

func (x *VolumeServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VolumeServiceListResponse.ProtoReflect.Descriptor instead.
func (*VolumeServiceListResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_volume_proto_rawDescGZIP(), []int{5}
}

func (x *VolumeServiceListResponse) GetVolumes() []*Volume {
	if x != nil {
		return x.Volumes
	}
	return nil
}

type VolumeServiceDeleteResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Volume *Volume `protobuf:"bytes,1,opt,name=volume,proto3" json:"volume,omitempty"`
}

func (x *VolumeServiceDeleteResponse) Reset() {
	*x = VolumeServiceDeleteResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_volume_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VolumeServiceDeleteResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeServiceDeleteResponse) ProtoMessage() {}

func (x *VolumeServiceDeleteResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VolumeServiceDeleteResponse.ProtoReflect.Descriptor instead.
func (*VolumeServiceDeleteResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_volume_proto_rawDescGZIP(), []int{6}
}

func (x *VolumeServiceDeleteResponse) GetVolume() *Volume {
	if x != nil {
		return x.Volume
	}
	return nil
}

var File_api_v1_volume_proto protoreflect.FileDescriptor

var file_api_v1_volume_proto_rawDesc = []byte{
	0x0a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x76, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x1a, 0x13, 0x61,
	0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61,
	0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x17, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69,
	0x64, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x9e, 0x03, 0x0a, 0x06, 0x56,
	0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x18, 0x0a,
	0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x12, 0x1c, 0x0a, 0x09, 0x70, 0x61, 0x72, 0x74, 0x69,
	0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x61, 0x72, 0x74,
	0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x23, 0x0a, 0x0d, 0x73, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65,
	0x5f, 0x63, 0x6c, 0x61, 0x73, 0x73, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x73, 0x74,
	0x6f, 0x72, 0x61, 0x67, 0x65, 0x43, 0x6c, 0x61, 0x73, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69,
	0x7a, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x04, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x14,
	0x0a, 0x05, 0x75, 0x73, 0x61, 0x67, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x04, 0x52, 0x05, 0x75,
	0x73, 0x61, 0x67, 0x65, 0x12, 0x24, 0x0a, 0x0b, 0x61, 0x74, 0x74, 0x61, 0x63, 0x68, 0x65, 0x64,
	0x5f, 0x74, 0x6f, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x0a, 0x61, 0x74, 0x74,
	0x61, 0x63, 0x68, 0x65, 0x64, 0x54, 0x6f, 0x88, 0x01, 0x01, 0x12, 0x39, 0x0a, 0x0a, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64,
	0x5f, 0x61, 0x74, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65,
	0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74,
	0x12, 0x39, 0x0a, 0x0a, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x0c,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x52, 0x09, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x41, 0x74, 0x42, 0x0e, 0x0a, 0x0c, 0x5f,
	0x61, 0x74, 0x74, 0x61, 0x63, 0x68, 0x65, 0x64, 0x5f, 0x74, 0x6f, 0x22, 0x5d, 0x0a, 0x17, 0x56,
	0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1c, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x72, 0x03, 0xb0, 0x01, 0x01, 0x52, 0x04,
	0x75, 0x75, 0x69, 0x64, 0x12, 0x24, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05, 0x10, 0x02, 0x18, 0x80,
	0x01, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x22, 0x40, 0x0a, 0x18, 0x56, 0x6f,
	0x6c, 0x75, 0x6d, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x24, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63,
	0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05, 0x10, 0x02,
	0x18, 0x80, 0x01, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x22, 0x60, 0x0a, 0x1a,
	0x56, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x44, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1c, 0x0a, 0x04, 0x75, 0x75,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x72, 0x03, 0xb0,
	0x01, 0x01, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x24, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05,
	0x10, 0x02, 0x18, 0x80, 0x01, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x22, 0x42,
	0x0a, 0x18, 0x56, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47,
	0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x26, 0x0a, 0x06, 0x76, 0x6f,
	0x6c, 0x75, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x31, 0x2e, 0x56, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x52, 0x06, 0x76, 0x6f, 0x6c, 0x75,
	0x6d, 0x65, 0x22, 0x45, 0x0a, 0x19, 0x56, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x28, 0x0a, 0x07, 0x76, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x6f, 0x6c, 0x75, 0x6d, 0x65,
	0x52, 0x07, 0x76, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x73, 0x22, 0x45, 0x0a, 0x1b, 0x56, 0x6f, 0x6c,
	0x75, 0x6d, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x26, 0x0a, 0x06, 0x76, 0x6f, 0x6c, 0x75,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76,
	0x31, 0x2e, 0x56, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x52, 0x06, 0x76, 0x6f, 0x6c, 0x75, 0x6d, 0x65,
	0x32, 0xed, 0x02, 0x0a, 0x0d, 0x56, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x12, 0x78, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x1f, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x31, 0x2e, 0x56, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x47, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x20, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x31, 0x2e, 0x56, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x2e, 0x82, 0xd3,
	0xe4, 0x93, 0x02, 0x21, 0x12, 0x1f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x76, 0x6f,
	0x6c, 0x75, 0x6d, 0x65, 0x2f, 0x7b, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x7d, 0x2f, 0x7b,
	0x75, 0x75, 0x69, 0x64, 0x7d, 0xca, 0xf3, 0x18, 0x03, 0x01, 0x02, 0x03, 0x12, 0x6e, 0x0a, 0x04,
	0x4c, 0x69, 0x73, 0x74, 0x12, 0x20, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x6f,
	0x6c, 0x75, 0x6d, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e,
	0x56, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73,
	0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x21, 0x82, 0xd3, 0xe4, 0x93, 0x02,
	0x14, 0x3a, 0x01, 0x2a, 0x22, 0x0f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x76, 0x6f,
	0x6c, 0x75, 0x6d, 0x65, 0x73, 0xca, 0xf3, 0x18, 0x03, 0x01, 0x02, 0x03, 0x12, 0x72, 0x0a, 0x06,
	0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x22, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e,
	0x56, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x44, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x31, 0x2e, 0x56, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x1f, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x13, 0x3a, 0x01, 0x2a, 0x2a, 0x0e, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x76, 0x31, 0x2f, 0x76, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0xca, 0xf3, 0x18, 0x02, 0x01, 0x02,
	0x42, 0x06, 0x5a, 0x04, 0x2e, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_v1_volume_proto_rawDescOnce sync.Once
	file_api_v1_volume_proto_rawDescData = file_api_v1_volume_proto_rawDesc
)

func file_api_v1_volume_proto_rawDescGZIP() []byte {
	file_api_v1_volume_proto_rawDescOnce.Do(func() {
		file_api_v1_volume_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_v1_volume_proto_rawDescData)
	})
	return file_api_v1_volume_proto_rawDescData
}

var file_api_v1_volume_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_api_v1_volume_proto_goTypes = []interface{}{
	(*Volume)(nil),                      // 0: api.v1.Volume
	(*VolumeServiceGetRequest)(nil),     // 1: api.v1.VolumeServiceGetRequest
	(*VolumeServiceListRequest)(nil),    // 2: api.v1.VolumeServiceListRequest
	(*VolumeServiceDeleteRequest)(nil),  // 3: api.v1.VolumeServiceDeleteRequest
	(*VolumeServiceGetResponse)(nil),    // 4: api.v1.VolumeServiceGetResponse
	(*VolumeServiceListResponse)(nil),   // 5: api.v1.VolumeServiceListResponse
	(*VolumeServiceDeleteResponse)(nil), // 6: api.v1.VolumeServiceDeleteResponse
	(*timestamppb.Timestamp)(nil),       // 7: google.protobuf.Timestamp
}
var file_api_v1_volume_proto_depIdxs = []int32{
	7, // 0: api.v1.Volume.created_at:type_name -> google.protobuf.Timestamp
	7, // 1: api.v1.Volume.updated_at:type_name -> google.protobuf.Timestamp
	7, // 2: api.v1.Volume.deleted_at:type_name -> google.protobuf.Timestamp
	0, // 3: api.v1.VolumeServiceGetResponse.volume:type_name -> api.v1.Volume
	0, // 4: api.v1.VolumeServiceListResponse.volumes:type_name -> api.v1.Volume
	0, // 5: api.v1.VolumeServiceDeleteResponse.volume:type_name -> api.v1.Volume
	1, // 6: api.v1.VolumeService.Get:input_type -> api.v1.VolumeServiceGetRequest
	2, // 7: api.v1.VolumeService.List:input_type -> api.v1.VolumeServiceListRequest
	3, // 8: api.v1.VolumeService.Delete:input_type -> api.v1.VolumeServiceDeleteRequest
	4, // 9: api.v1.VolumeService.Get:output_type -> api.v1.VolumeServiceGetResponse
	5, // 10: api.v1.VolumeService.List:output_type -> api.v1.VolumeServiceListResponse
	6, // 11: api.v1.VolumeService.Delete:output_type -> api.v1.VolumeServiceDeleteResponse
	9, // [9:12] is the sub-list for method output_type
	6, // [6:9] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_api_v1_volume_proto_init() }
func file_api_v1_volume_proto_init() {
	if File_api_v1_volume_proto != nil {
		return
	}
	file_api_v1_common_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_api_v1_volume_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Volume); i {
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
		file_api_v1_volume_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VolumeServiceGetRequest); i {
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
		file_api_v1_volume_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VolumeServiceListRequest); i {
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
		file_api_v1_volume_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VolumeServiceDeleteRequest); i {
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
		file_api_v1_volume_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VolumeServiceGetResponse); i {
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
		file_api_v1_volume_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VolumeServiceListResponse); i {
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
		file_api_v1_volume_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VolumeServiceDeleteResponse); i {
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
	file_api_v1_volume_proto_msgTypes[0].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_v1_volume_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_api_v1_volume_proto_goTypes,
		DependencyIndexes: file_api_v1_volume_proto_depIdxs,
		MessageInfos:      file_api_v1_volume_proto_msgTypes,
	}.Build()
	File_api_v1_volume_proto = out.File
	file_api_v1_volume_proto_rawDesc = nil
	file_api_v1_volume_proto_goTypes = nil
	file_api_v1_volume_proto_depIdxs = nil
}
