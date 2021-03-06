// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        (unknown)
// source: api/v1/health.proto

package v1

import (
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

type ServiceStatus int32

const (
	ServiceStatus_SERVICE_STATUS_UNSPECIFIED ServiceStatus = 0
	ServiceStatus_SERVICE_STATUS_DEGRADED    ServiceStatus = 1
	ServiceStatus_SERVICE_STATUS_UNHEALTHY   ServiceStatus = 2
	ServiceStatus_SERVICE_STATUS_HEALTHY     ServiceStatus = 3
)

// Enum value maps for ServiceStatus.
var (
	ServiceStatus_name = map[int32]string{
		0: "SERVICE_STATUS_UNSPECIFIED",
		1: "SERVICE_STATUS_DEGRADED",
		2: "SERVICE_STATUS_UNHEALTHY",
		3: "SERVICE_STATUS_HEALTHY",
	}
	ServiceStatus_value = map[string]int32{
		"SERVICE_STATUS_UNSPECIFIED": 0,
		"SERVICE_STATUS_DEGRADED":    1,
		"SERVICE_STATUS_UNHEALTHY":   2,
		"SERVICE_STATUS_HEALTHY":     3,
	}
)

func (x ServiceStatus) Enum() *ServiceStatus {
	p := new(ServiceStatus)
	*p = x
	return p
}

func (x ServiceStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ServiceStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_api_v1_health_proto_enumTypes[0].Descriptor()
}

func (ServiceStatus) Type() protoreflect.EnumType {
	return &file_api_v1_health_proto_enumTypes[0]
}

func (x ServiceStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ServiceStatus.Descriptor instead.
func (ServiceStatus) EnumDescriptor() ([]byte, []int) {
	return file_api_v1_health_proto_rawDescGZIP(), []int{0}
}

type Service int32

const (
	Service_SERVICE_UNSPECIFIED Service = 0
	Service_SERVICE_CLUSTER     Service = 1
	Service_SERVICE_VOLUME      Service = 2
	Service_SERVICE_MACHINES    Service = 3
)

// Enum value maps for Service.
var (
	Service_name = map[int32]string{
		0: "SERVICE_UNSPECIFIED",
		1: "SERVICE_CLUSTER",
		2: "SERVICE_VOLUME",
		3: "SERVICE_MACHINES",
	}
	Service_value = map[string]int32{
		"SERVICE_UNSPECIFIED": 0,
		"SERVICE_CLUSTER":     1,
		"SERVICE_VOLUME":      2,
		"SERVICE_MACHINES":    3,
	}
)

func (x Service) Enum() *Service {
	p := new(Service)
	*p = x
	return p
}

func (x Service) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Service) Descriptor() protoreflect.EnumDescriptor {
	return file_api_v1_health_proto_enumTypes[1].Descriptor()
}

func (Service) Type() protoreflect.EnumType {
	return &file_api_v1_health_proto_enumTypes[1]
}

func (x Service) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Service.Descriptor instead.
func (Service) EnumDescriptor() ([]byte, []int) {
	return file_api_v1_health_proto_rawDescGZIP(), []int{1}
}

type HealthStatus struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name    Service       `protobuf:"varint,1,opt,name=name,proto3,enum=api.v1.Service" json:"name,omitempty"`
	Status  ServiceStatus `protobuf:"varint,2,opt,name=status,proto3,enum=api.v1.ServiceStatus" json:"status,omitempty"`
	Message string        `protobuf:"bytes,3,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *HealthStatus) Reset() {
	*x = HealthStatus{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_health_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HealthStatus) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HealthStatus) ProtoMessage() {}

func (x *HealthStatus) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_health_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HealthStatus.ProtoReflect.Descriptor instead.
func (*HealthStatus) Descriptor() ([]byte, []int) {
	return file_api_v1_health_proto_rawDescGZIP(), []int{0}
}

func (x *HealthStatus) GetName() Service {
	if x != nil {
		return x.Name
	}
	return Service_SERVICE_UNSPECIFIED
}

func (x *HealthStatus) GetStatus() ServiceStatus {
	if x != nil {
		return x.Status
	}
	return ServiceStatus_SERVICE_STATUS_UNSPECIFIED
}

func (x *HealthStatus) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

type PartitionHealth struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ServiceStatus []*HealthStatus `protobuf:"bytes,1,rep,name=service_status,json=serviceStatus,proto3" json:"service_status,omitempty"`
}

func (x *PartitionHealth) Reset() {
	*x = PartitionHealth{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_health_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PartitionHealth) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PartitionHealth) ProtoMessage() {}

func (x *PartitionHealth) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_health_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PartitionHealth.ProtoReflect.Descriptor instead.
func (*PartitionHealth) Descriptor() ([]byte, []int) {
	return file_api_v1_health_proto_rawDescGZIP(), []int{1}
}

func (x *PartitionHealth) GetServiceStatus() []*HealthStatus {
	if x != nil {
		return x.ServiceStatus
	}
	return nil
}

type Health struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PartitionStatus map[string]*PartitionHealth `protobuf:"bytes,1,rep,name=partition_status,json=partitionStatus,proto3" json:"partition_status,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Health) Reset() {
	*x = Health{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_health_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Health) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Health) ProtoMessage() {}

func (x *Health) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_health_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Health.ProtoReflect.Descriptor instead.
func (*Health) Descriptor() ([]byte, []int) {
	return file_api_v1_health_proto_rawDescGZIP(), []int{2}
}

func (x *Health) GetPartitionStatus() map[string]*PartitionHealth {
	if x != nil {
		return x.PartitionStatus
	}
	return nil
}

type HealthServiceGetRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *HealthServiceGetRequest) Reset() {
	*x = HealthServiceGetRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_health_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HealthServiceGetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HealthServiceGetRequest) ProtoMessage() {}

func (x *HealthServiceGetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_health_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HealthServiceGetRequest.ProtoReflect.Descriptor instead.
func (*HealthServiceGetRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_health_proto_rawDescGZIP(), []int{3}
}

type HealthServiceGetResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Health *Health `protobuf:"bytes,1,opt,name=health,proto3" json:"health,omitempty"`
}

func (x *HealthServiceGetResponse) Reset() {
	*x = HealthServiceGetResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_health_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HealthServiceGetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HealthServiceGetResponse) ProtoMessage() {}

func (x *HealthServiceGetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_health_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HealthServiceGetResponse.ProtoReflect.Descriptor instead.
func (*HealthServiceGetResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_health_proto_rawDescGZIP(), []int{4}
}

func (x *HealthServiceGetResponse) GetHealth() *Health {
	if x != nil {
		return x.Health
	}
	return nil
}

var File_api_v1_health_proto protoreflect.FileDescriptor

var file_api_v1_health_proto_rawDesc = []byte{
	0x0a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x22, 0x7c, 0x0a,
	0x0c, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x23, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x0f, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x2d, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x15, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x4e, 0x0a, 0x0f, 0x50,
	0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x12, 0x3b,
	0x0a, 0x0e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e,
	0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x0d, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0xb5, 0x01, 0x0a, 0x06,
	0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x12, 0x4e, 0x0a, 0x10, 0x70, 0x61, 0x72, 0x74, 0x69, 0x74,
	0x69, 0x6f, 0x6e, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x23, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68,
	0x2e, 0x50, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0f, 0x70, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e,
	0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x1a, 0x5b, 0x0a, 0x14, 0x50, 0x61, 0x72, 0x74, 0x69, 0x74,
	0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10,
	0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79,
	0x12, 0x2d, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x17, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69,
	0x6f, 0x6e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a,
	0x02, 0x38, 0x01, 0x22, 0x19, 0x0a, 0x17, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x42,
	0x0a, 0x18, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47,
	0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x26, 0x0a, 0x06, 0x68, 0x65,
	0x61, 0x6c, 0x74, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x31, 0x2e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x52, 0x06, 0x68, 0x65, 0x61, 0x6c,
	0x74, 0x68, 0x2a, 0x86, 0x01, 0x0a, 0x0d, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x53, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x12, 0x1e, 0x0a, 0x1a, 0x53, 0x45, 0x52, 0x56, 0x49, 0x43, 0x45, 0x5f,
	0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49,
	0x45, 0x44, 0x10, 0x00, 0x12, 0x1b, 0x0a, 0x17, 0x53, 0x45, 0x52, 0x56, 0x49, 0x43, 0x45, 0x5f,
	0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x44, 0x45, 0x47, 0x52, 0x41, 0x44, 0x45, 0x44, 0x10,
	0x01, 0x12, 0x1c, 0x0a, 0x18, 0x53, 0x45, 0x52, 0x56, 0x49, 0x43, 0x45, 0x5f, 0x53, 0x54, 0x41,
	0x54, 0x55, 0x53, 0x5f, 0x55, 0x4e, 0x48, 0x45, 0x41, 0x4c, 0x54, 0x48, 0x59, 0x10, 0x02, 0x12,
	0x1a, 0x0a, 0x16, 0x53, 0x45, 0x52, 0x56, 0x49, 0x43, 0x45, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55,
	0x53, 0x5f, 0x48, 0x45, 0x41, 0x4c, 0x54, 0x48, 0x59, 0x10, 0x03, 0x2a, 0x61, 0x0a, 0x07, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x17, 0x0a, 0x13, 0x53, 0x45, 0x52, 0x56, 0x49, 0x43,
	0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12,
	0x13, 0x0a, 0x0f, 0x53, 0x45, 0x52, 0x56, 0x49, 0x43, 0x45, 0x5f, 0x43, 0x4c, 0x55, 0x53, 0x54,
	0x45, 0x52, 0x10, 0x01, 0x12, 0x12, 0x0a, 0x0e, 0x53, 0x45, 0x52, 0x56, 0x49, 0x43, 0x45, 0x5f,
	0x56, 0x4f, 0x4c, 0x55, 0x4d, 0x45, 0x10, 0x02, 0x12, 0x14, 0x0a, 0x10, 0x53, 0x45, 0x52, 0x56,
	0x49, 0x43, 0x45, 0x5f, 0x4d, 0x41, 0x43, 0x48, 0x49, 0x4e, 0x45, 0x53, 0x10, 0x03, 0x32, 0x5b,
	0x0a, 0x0d, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x4a, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x1f, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e,
	0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x20, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31,
	0x2e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65,
	0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x06, 0x5a, 0x04, 0x2e,
	0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_v1_health_proto_rawDescOnce sync.Once
	file_api_v1_health_proto_rawDescData = file_api_v1_health_proto_rawDesc
)

func file_api_v1_health_proto_rawDescGZIP() []byte {
	file_api_v1_health_proto_rawDescOnce.Do(func() {
		file_api_v1_health_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_v1_health_proto_rawDescData)
	})
	return file_api_v1_health_proto_rawDescData
}

var file_api_v1_health_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_api_v1_health_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_api_v1_health_proto_goTypes = []interface{}{
	(ServiceStatus)(0),               // 0: api.v1.ServiceStatus
	(Service)(0),                     // 1: api.v1.Service
	(*HealthStatus)(nil),             // 2: api.v1.HealthStatus
	(*PartitionHealth)(nil),          // 3: api.v1.PartitionHealth
	(*Health)(nil),                   // 4: api.v1.Health
	(*HealthServiceGetRequest)(nil),  // 5: api.v1.HealthServiceGetRequest
	(*HealthServiceGetResponse)(nil), // 6: api.v1.HealthServiceGetResponse
	nil,                              // 7: api.v1.Health.PartitionStatusEntry
}
var file_api_v1_health_proto_depIdxs = []int32{
	1, // 0: api.v1.HealthStatus.name:type_name -> api.v1.Service
	0, // 1: api.v1.HealthStatus.status:type_name -> api.v1.ServiceStatus
	2, // 2: api.v1.PartitionHealth.service_status:type_name -> api.v1.HealthStatus
	7, // 3: api.v1.Health.partition_status:type_name -> api.v1.Health.PartitionStatusEntry
	4, // 4: api.v1.HealthServiceGetResponse.health:type_name -> api.v1.Health
	3, // 5: api.v1.Health.PartitionStatusEntry.value:type_name -> api.v1.PartitionHealth
	5, // 6: api.v1.HealthService.Get:input_type -> api.v1.HealthServiceGetRequest
	6, // 7: api.v1.HealthService.Get:output_type -> api.v1.HealthServiceGetResponse
	7, // [7:8] is the sub-list for method output_type
	6, // [6:7] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_api_v1_health_proto_init() }
func file_api_v1_health_proto_init() {
	if File_api_v1_health_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_api_v1_health_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HealthStatus); i {
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
		file_api_v1_health_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PartitionHealth); i {
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
		file_api_v1_health_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Health); i {
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
		file_api_v1_health_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HealthServiceGetRequest); i {
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
		file_api_v1_health_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HealthServiceGetResponse); i {
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
			RawDescriptor: file_api_v1_health_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_api_v1_health_proto_goTypes,
		DependencyIndexes: file_api_v1_health_proto_depIdxs,
		EnumInfos:         file_api_v1_health_proto_enumTypes,
		MessageInfos:      file_api_v1_health_proto_msgTypes,
	}.Build()
	File_api_v1_health_proto = out.File
	file_api_v1_health_proto_rawDesc = nil
	file_api_v1_health_proto_goTypes = nil
	file_api_v1_health_proto_depIdxs = nil
}
