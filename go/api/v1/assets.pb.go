// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        (unknown)
// source: api/v1/assets.proto

package apiv1

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

// Asset defines the available resources which can be used
type Asset struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Region defines a datacenter location, e.g. a city.
	Region *Region `protobuf:"bytes,1,opt,name=region,proto3" json:"region,omitempty"`
	// MachineTypes available by region
	MachineTypes map[string]*MachineType `protobuf:"bytes,2,rep,name=machine_types,json=machineTypes,proto3" json:"machine_types,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Kubernetes a list of kubernetes versions
	Kubernetes []*Kubernetes `protobuf:"bytes,3,rep,name=kubernetes,proto3" json:"kubernetes,omitempty"`
}

func (x *Asset) Reset() {
	*x = Asset{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_assets_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Asset) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Asset) ProtoMessage() {}

func (x *Asset) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_assets_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Asset.ProtoReflect.Descriptor instead.
func (*Asset) Descriptor() ([]byte, []int) {
	return file_api_v1_assets_proto_rawDescGZIP(), []int{0}
}

func (x *Asset) GetRegion() *Region {
	if x != nil {
		return x.Region
	}
	return nil
}

func (x *Asset) GetMachineTypes() map[string]*MachineType {
	if x != nil {
		return x.MachineTypes
	}
	return nil
}

func (x *Asset) GetKubernetes() []*Kubernetes {
	if x != nil {
		return x.Kubernetes
	}
	return nil
}

// Region defines a datacenter location
type Region struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Id is the technical identifier of this region
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Name of the region
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	// Address is the postal address of the region
	Address string `protobuf:"bytes,3,opt,name=address,proto3" json:"address,omitempty"`
	// Active indicates if this region is usable
	Active bool `protobuf:"varint,4,opt,name=active,proto3" json:"active,omitempty"`
	// Partitions in this region
	Partitions map[string]*Partition `protobuf:"bytes,5,rep,name=partitions,proto3" json:"partitions,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Defaults are the default assets used if not otherwise speecified.
	Defaults *AssetDefaults `protobuf:"bytes,6,opt,name=defaults,proto3" json:"defaults,omitempty"`
}

func (x *Region) Reset() {
	*x = Region{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_assets_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Region) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Region) ProtoMessage() {}

func (x *Region) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_assets_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Region.ProtoReflect.Descriptor instead.
func (*Region) Descriptor() ([]byte, []int) {
	return file_api_v1_assets_proto_rawDescGZIP(), []int{1}
}

func (x *Region) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Region) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Region) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *Region) GetActive() bool {
	if x != nil {
		return x.Active
	}
	return false
}

func (x *Region) GetPartitions() map[string]*Partition {
	if x != nil {
		return x.Partitions
	}
	return nil
}

func (x *Region) GetDefaults() *AssetDefaults {
	if x != nil {
		return x.Defaults
	}
	return nil
}

// Partition defines a failure domain in one Region.
type Partition struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Id is the technical id of this partition
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Name of this partition
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	// Address is the postal address of the partition
	Address string `protobuf:"bytes,3,opt,name=address,proto3" json:"address,omitempty"`
	// Active indicates if this partition is usable
	Active bool `protobuf:"varint,4,opt,name=active,proto3" json:"active,omitempty"`
}

func (x *Partition) Reset() {
	*x = Partition{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_assets_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Partition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Partition) ProtoMessage() {}

func (x *Partition) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_assets_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Partition.ProtoReflect.Descriptor instead.
func (*Partition) Descriptor() ([]byte, []int) {
	return file_api_v1_assets_proto_rawDescGZIP(), []int{2}
}

func (x *Partition) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Partition) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Partition) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *Partition) GetActive() bool {
	if x != nil {
		return x.Active
	}
	return false
}

// MachineType defines a server type
type MachineType struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Id is the technical id of this machine type
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Name of this machine type
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	// CPUs e.g. cores in this machine / server
	Cpus uint32 `protobuf:"varint,3,opt,name=cpus,proto3" json:"cpus,omitempty"`
	// Memory in this machine / server
	Memory uint64 `protobuf:"varint,4,opt,name=memory,proto3" json:"memory,omitempty"`
	// Storage in this machine / server
	Storage uint64 `protobuf:"varint,5,opt,name=storage,proto3" json:"storage,omitempty"`
	// CpuDescription descibes the CPUs of this machine / server
	CpuDescription string `protobuf:"bytes,6,opt,name=cpu_description,json=cpuDescription,proto3" json:"cpu_description,omitempty"`
	// StorageDescription descibes the disks of this machine / server
	StorageDesription string `protobuf:"bytes,7,opt,name=storage_desription,json=storageDesription,proto3" json:"storage_desription,omitempty"`
}

func (x *MachineType) Reset() {
	*x = MachineType{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_assets_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MachineType) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MachineType) ProtoMessage() {}

func (x *MachineType) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_assets_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MachineType.ProtoReflect.Descriptor instead.
func (*MachineType) Descriptor() ([]byte, []int) {
	return file_api_v1_assets_proto_rawDescGZIP(), []int{3}
}

func (x *MachineType) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *MachineType) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *MachineType) GetCpus() uint32 {
	if x != nil {
		return x.Cpus
	}
	return 0
}

func (x *MachineType) GetMemory() uint64 {
	if x != nil {
		return x.Memory
	}
	return 0
}

func (x *MachineType) GetStorage() uint64 {
	if x != nil {
		return x.Storage
	}
	return 0
}

func (x *MachineType) GetCpuDescription() string {
	if x != nil {
		return x.CpuDescription
	}
	return ""
}

func (x *MachineType) GetStorageDesription() string {
	if x != nil {
		return x.StorageDesription
	}
	return ""
}

// Kubernetes related configurations available
type Kubernetes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Version of kubernetes
	Version string `protobuf:"bytes,1,opt,name=version,proto3" json:"version,omitempty"`
}

func (x *Kubernetes) Reset() {
	*x = Kubernetes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_assets_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Kubernetes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Kubernetes) ProtoMessage() {}

func (x *Kubernetes) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_assets_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Kubernetes.ProtoReflect.Descriptor instead.
func (*Kubernetes) Descriptor() ([]byte, []int) {
	return file_api_v1_assets_proto_rawDescGZIP(), []int{4}
}

func (x *Kubernetes) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

// AssetDefaults apply if no specific properties are specified
type AssetDefaults struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// MachineType defines the default machine type used
	MachineType string `protobuf:"bytes,1,opt,name=machine_type,json=machineType,proto3" json:"machine_type,omitempty"`
	// KubernetesVersion defines the default kubernetes version to be used
	KubernetesVersion string `protobuf:"bytes,2,opt,name=kubernetes_version,json=kubernetesVersion,proto3" json:"kubernetes_version,omitempty"`
	// WorkerMin defines how many servers are specified as minimum
	WorkerMin uint32 `protobuf:"varint,3,opt,name=worker_min,json=workerMin,proto3" json:"worker_min,omitempty"`
	// WorkerMax defines how many servers are specified as maximum
	WorkerMax uint32 `protobuf:"varint,4,opt,name=worker_max,json=workerMax,proto3" json:"worker_max,omitempty"`
	// Partition defines where the cluster is created if not otherwise specified
	Partition string `protobuf:"bytes,7,opt,name=partition,proto3" json:"partition,omitempty"`
}

func (x *AssetDefaults) Reset() {
	*x = AssetDefaults{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_assets_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AssetDefaults) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AssetDefaults) ProtoMessage() {}

func (x *AssetDefaults) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_assets_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AssetDefaults.ProtoReflect.Descriptor instead.
func (*AssetDefaults) Descriptor() ([]byte, []int) {
	return file_api_v1_assets_proto_rawDescGZIP(), []int{5}
}

func (x *AssetDefaults) GetMachineType() string {
	if x != nil {
		return x.MachineType
	}
	return ""
}

func (x *AssetDefaults) GetKubernetesVersion() string {
	if x != nil {
		return x.KubernetesVersion
	}
	return ""
}

func (x *AssetDefaults) GetWorkerMin() uint32 {
	if x != nil {
		return x.WorkerMin
	}
	return 0
}

func (x *AssetDefaults) GetWorkerMax() uint32 {
	if x != nil {
		return x.WorkerMax
	}
	return 0
}

func (x *AssetDefaults) GetPartition() string {
	if x != nil {
		return x.Partition
	}
	return ""
}

// AssetServiceListRequest is the request payload to list all Assets
type AssetServiceListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *AssetServiceListRequest) Reset() {
	*x = AssetServiceListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_assets_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AssetServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AssetServiceListRequest) ProtoMessage() {}

func (x *AssetServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_assets_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AssetServiceListRequest.ProtoReflect.Descriptor instead.
func (*AssetServiceListRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_assets_proto_rawDescGZIP(), []int{6}
}

// AssetServiceListResponse is the response payload which containes the the Asset list
type AssetServiceListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Assets defines a list of assets
	Assets []*Asset `protobuf:"bytes,2,rep,name=assets,proto3" json:"assets,omitempty"`
}

func (x *AssetServiceListResponse) Reset() {
	*x = AssetServiceListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_assets_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AssetServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AssetServiceListResponse) ProtoMessage() {}

func (x *AssetServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_assets_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AssetServiceListResponse.ProtoReflect.Descriptor instead.
func (*AssetServiceListResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_assets_proto_rawDescGZIP(), []int{7}
}

func (x *AssetServiceListResponse) GetAssets() []*Asset {
	if x != nil {
		return x.Assets
	}
	return nil
}

var File_api_v1_assets_proto protoreflect.FileDescriptor

var file_api_v1_assets_proto_rawDesc = []byte{
	0x0a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x73, 0x73, 0x65, 0x74, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x1a, 0x13, 0x61,
	0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0xff, 0x01, 0x0a, 0x05, 0x41, 0x73, 0x73, 0x65, 0x74, 0x12, 0x26, 0x0a, 0x06,
	0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x52, 0x06, 0x72, 0x65,
	0x67, 0x69, 0x6f, 0x6e, 0x12, 0x44, 0x0a, 0x0d, 0x6d, 0x61, 0x63, 0x68, 0x69, 0x6e, 0x65, 0x5f,
	0x74, 0x79, 0x70, 0x65, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x73, 0x73, 0x65, 0x74, 0x2e, 0x4d, 0x61, 0x63, 0x68, 0x69,
	0x6e, 0x65, 0x54, 0x79, 0x70, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0c, 0x6d, 0x61,
	0x63, 0x68, 0x69, 0x6e, 0x65, 0x54, 0x79, 0x70, 0x65, 0x73, 0x12, 0x32, 0x0a, 0x0a, 0x6b, 0x75,
	0x62, 0x65, 0x72, 0x6e, 0x65, 0x74, 0x65, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x12,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x4b, 0x75, 0x62, 0x65, 0x72, 0x6e, 0x65, 0x74,
	0x65, 0x73, 0x52, 0x0a, 0x6b, 0x75, 0x62, 0x65, 0x72, 0x6e, 0x65, 0x74, 0x65, 0x73, 0x1a, 0x54,
	0x0a, 0x11, 0x4d, 0x61, 0x63, 0x68, 0x69, 0x6e, 0x65, 0x54, 0x79, 0x70, 0x65, 0x73, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x29, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x61,
	0x63, 0x68, 0x69, 0x6e, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x3a, 0x02, 0x38, 0x01, 0x22, 0xa3, 0x02, 0x0a, 0x06, 0x52, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x16, 0x0a,
	0x06, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x61,
	0x63, 0x74, 0x69, 0x76, 0x65, 0x12, 0x3e, 0x0a, 0x0a, 0x70, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x31, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x2e, 0x50, 0x61, 0x72, 0x74, 0x69, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0a, 0x70, 0x61, 0x72, 0x74, 0x69,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x31, 0x0a, 0x08, 0x64, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74,
	0x73, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31,
	0x2e, 0x41, 0x73, 0x73, 0x65, 0x74, 0x44, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x73, 0x52, 0x08,
	0x64, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x73, 0x1a, 0x50, 0x0a, 0x0f, 0x50, 0x61, 0x72, 0x74,
	0x69, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b,
	0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x27, 0x0a,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x61, 0x0a, 0x09, 0x50, 0x61,
	0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x61,
	0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x64,
	0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x22, 0xcf, 0x01,
	0x0a, 0x0b, 0x4d, 0x61, 0x63, 0x68, 0x69, 0x6e, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x70, 0x75, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x04, 0x63, 0x70, 0x75, 0x73, 0x12, 0x16, 0x0a, 0x06, 0x6d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x04, 0x52, 0x06, 0x6d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x12, 0x18, 0x0a,
	0x07, 0x73, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x04, 0x52, 0x07,
	0x73, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x12, 0x27, 0x0a, 0x0f, 0x63, 0x70, 0x75, 0x5f, 0x64,
	0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0e, 0x63, 0x70, 0x75, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x2d, 0x0a, 0x12, 0x73, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x5f, 0x64, 0x65, 0x73, 0x72,
	0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x11, 0x73, 0x74,
	0x6f, 0x72, 0x61, 0x67, 0x65, 0x44, 0x65, 0x73, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x22,
	0x26, 0x0a, 0x0a, 0x4b, 0x75, 0x62, 0x65, 0x72, 0x6e, 0x65, 0x74, 0x65, 0x73, 0x12, 0x18, 0x0a,
	0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x22, 0xbd, 0x01, 0x0a, 0x0d, 0x41, 0x73, 0x73, 0x65,
	0x74, 0x44, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x73, 0x12, 0x21, 0x0a, 0x0c, 0x6d, 0x61, 0x63,
	0x68, 0x69, 0x6e, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0b, 0x6d, 0x61, 0x63, 0x68, 0x69, 0x6e, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x2d, 0x0a, 0x12,
	0x6b, 0x75, 0x62, 0x65, 0x72, 0x6e, 0x65, 0x74, 0x65, 0x73, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69,
	0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x11, 0x6b, 0x75, 0x62, 0x65, 0x72, 0x6e,
	0x65, 0x74, 0x65, 0x73, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x1d, 0x0a, 0x0a, 0x77,
	0x6f, 0x72, 0x6b, 0x65, 0x72, 0x5f, 0x6d, 0x69, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x09, 0x77, 0x6f, 0x72, 0x6b, 0x65, 0x72, 0x4d, 0x69, 0x6e, 0x12, 0x1d, 0x0a, 0x0a, 0x77, 0x6f,
	0x72, 0x6b, 0x65, 0x72, 0x5f, 0x6d, 0x61, 0x78, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x09,
	0x77, 0x6f, 0x72, 0x6b, 0x65, 0x72, 0x4d, 0x61, 0x78, 0x12, 0x1c, 0x0a, 0x09, 0x70, 0x61, 0x72,
	0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x61,
	0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x19, 0x0a, 0x17, 0x41, 0x73, 0x73, 0x65, 0x74,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x22, 0x41, 0x0a, 0x18, 0x41, 0x73, 0x73, 0x65, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x25,
	0x0a, 0x06, 0x61, 0x73, 0x73, 0x65, 0x74, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0d,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x73, 0x73, 0x65, 0x74, 0x52, 0x06, 0x61,
	0x73, 0x73, 0x65, 0x74, 0x73, 0x32, 0x63, 0x0a, 0x0c, 0x41, 0x73, 0x73, 0x65, 0x74, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x53, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x1f, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x73, 0x73, 0x65, 0x74, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x20,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x73, 0x73, 0x65, 0x74, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x08, 0xd8, 0xf3, 0x18, 0x01, 0xe8, 0xf3, 0x18, 0x02, 0x42, 0x84, 0x01, 0x0a, 0x0a, 0x63,
	0x6f, 0x6d, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x42, 0x0b, 0x41, 0x73, 0x73, 0x65, 0x74,
	0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x30, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b,
	0x2d, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70,
	0x69, 0x2f, 0x76, 0x31, 0x3b, 0x61, 0x70, 0x69, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58,
	0xaa, 0x02, 0x06, 0x41, 0x70, 0x69, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x06, 0x41, 0x70, 0x69, 0x5c,
	0x56, 0x31, 0xe2, 0x02, 0x12, 0x41, 0x70, 0x69, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x07, 0x41, 0x70, 0x69, 0x3a, 0x3a, 0x56,
	0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_v1_assets_proto_rawDescOnce sync.Once
	file_api_v1_assets_proto_rawDescData = file_api_v1_assets_proto_rawDesc
)

func file_api_v1_assets_proto_rawDescGZIP() []byte {
	file_api_v1_assets_proto_rawDescOnce.Do(func() {
		file_api_v1_assets_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_v1_assets_proto_rawDescData)
	})
	return file_api_v1_assets_proto_rawDescData
}

var file_api_v1_assets_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_api_v1_assets_proto_goTypes = []interface{}{
	(*Asset)(nil),                    // 0: api.v1.Asset
	(*Region)(nil),                   // 1: api.v1.Region
	(*Partition)(nil),                // 2: api.v1.Partition
	(*MachineType)(nil),              // 3: api.v1.MachineType
	(*Kubernetes)(nil),               // 4: api.v1.Kubernetes
	(*AssetDefaults)(nil),            // 5: api.v1.AssetDefaults
	(*AssetServiceListRequest)(nil),  // 6: api.v1.AssetServiceListRequest
	(*AssetServiceListResponse)(nil), // 7: api.v1.AssetServiceListResponse
	nil,                              // 8: api.v1.Asset.MachineTypesEntry
	nil,                              // 9: api.v1.Region.PartitionsEntry
}
var file_api_v1_assets_proto_depIdxs = []int32{
	1, // 0: api.v1.Asset.region:type_name -> api.v1.Region
	8, // 1: api.v1.Asset.machine_types:type_name -> api.v1.Asset.MachineTypesEntry
	4, // 2: api.v1.Asset.kubernetes:type_name -> api.v1.Kubernetes
	9, // 3: api.v1.Region.partitions:type_name -> api.v1.Region.PartitionsEntry
	5, // 4: api.v1.Region.defaults:type_name -> api.v1.AssetDefaults
	0, // 5: api.v1.AssetServiceListResponse.assets:type_name -> api.v1.Asset
	3, // 6: api.v1.Asset.MachineTypesEntry.value:type_name -> api.v1.MachineType
	2, // 7: api.v1.Region.PartitionsEntry.value:type_name -> api.v1.Partition
	6, // 8: api.v1.AssetService.List:input_type -> api.v1.AssetServiceListRequest
	7, // 9: api.v1.AssetService.List:output_type -> api.v1.AssetServiceListResponse
	9, // [9:10] is the sub-list for method output_type
	8, // [8:9] is the sub-list for method input_type
	8, // [8:8] is the sub-list for extension type_name
	8, // [8:8] is the sub-list for extension extendee
	0, // [0:8] is the sub-list for field type_name
}

func init() { file_api_v1_assets_proto_init() }
func file_api_v1_assets_proto_init() {
	if File_api_v1_assets_proto != nil {
		return
	}
	file_api_v1_common_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_api_v1_assets_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Asset); i {
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
		file_api_v1_assets_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Region); i {
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
		file_api_v1_assets_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Partition); i {
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
		file_api_v1_assets_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MachineType); i {
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
		file_api_v1_assets_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Kubernetes); i {
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
		file_api_v1_assets_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AssetDefaults); i {
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
		file_api_v1_assets_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AssetServiceListRequest); i {
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
		file_api_v1_assets_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AssetServiceListResponse); i {
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
			RawDescriptor: file_api_v1_assets_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_api_v1_assets_proto_goTypes,
		DependencyIndexes: file_api_v1_assets_proto_depIdxs,
		MessageInfos:      file_api_v1_assets_proto_msgTypes,
	}.Build()
	File_api_v1_assets_proto = out.File
	file_api_v1_assets_proto_rawDesc = nil
	file_api_v1_assets_proto_goTypes = nil
	file_api_v1_assets_proto_depIdxs = nil
}
