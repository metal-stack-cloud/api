// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        (unknown)
// source: api/v1/volume.proto

package apiv1

import (
	_ "buf.build/gen/go/bufbuild/protovalidate/protocolbuffers/go/buf/validate"
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

// Volume is a unit of block storage
type Volume struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Uuid is the unique identifier of the volume
	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	// Name of the volume
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	// Project this volume belongs to
	Project string `protobuf:"bytes,3,opt,name=project,proto3" json:"project,omitempty"`
	// Partition where this volume resides
	Partition string `protobuf:"bytes,4,opt,name=partition,proto3" json:"partition,omitempty"`
	// StorageClass where this volume is created
	StorageClass string `protobuf:"bytes,5,opt,name=storage_class,json=storageClass,proto3" json:"storage_class,omitempty"`
	// Size in bytes of the volume
	Size uint64 `protobuf:"varint,6,opt,name=size,proto3" json:"size,omitempty"`
	// Usage in bytes of the volume
	Usage uint64 `protobuf:"varint,7,opt,name=usage,proto3" json:"usage,omitempty"`
	// State of the volume
	State string `protobuf:"bytes,8,opt,name=state,proto3" json:"state,omitempty"`
	// AttachedTo us a list of nodes this volume is attached
	AttachedTo []string `protobuf:"bytes,9,rep,name=attached_to,json=attachedTo,proto3" json:"attached_to,omitempty"`
	// SourceSnapshotUuid if this volume was created from a snapshot, this was the uuid source
	SourceSnapshotUuid string `protobuf:"bytes,10,opt,name=source_snapshot_uuid,json=sourceSnapshotUuid,proto3" json:"source_snapshot_uuid,omitempty"`
	// SourceSnapshotName if this volume was created from a snapshot, this was the name of the source
	SourceSnapshotName string `protobuf:"bytes,11,opt,name=source_snapshot_name,json=sourceSnapshotName,proto3" json:"source_snapshot_name,omitempty"`
	// VolumeHandle is the handle to mount this volume manually
	VolumeHandle string `protobuf:"bytes,12,opt,name=volume_handle,json=volumeHandle,proto3" json:"volume_handle,omitempty"`
	// NodeIps is a list of storage server node ips
	NodeIps []string `protobuf:"bytes,13,rep,name=node_ips,json=nodeIps,proto3" json:"node_ips,omitempty"`
	// RebuildProgress shows the progress of a rebuild if any
	RebuildProgress string `protobuf:"bytes,14,opt,name=rebuild_progress,json=rebuildProgress,proto3" json:"rebuild_progress,omitempty"`
	// PrimaryNodeUuid is the uuid of the storage server node where the primary replica of this volume resides
	PrimaryNodeUuid string `protobuf:"bytes,15,opt,name=primary_node_uuid,json=primaryNodeUuid,proto3" json:"primary_node_uuid,omitempty"`
	// QosPolicyUuid is the uuid of the QOS policy if any
	QosPolicyUuid string `protobuf:"bytes,16,opt,name=qos_policy_uuid,json=qosPolicyUuid,proto3" json:"qos_policy_uuid,omitempty"`
	// QosPolicyName is the name of the QOS policy if any
	QosPolicyName string `protobuf:"bytes,17,opt,name=qos_policy_name,json=qosPolicyName,proto3" json:"qos_policy_name,omitempty"`
	// ReplicaCount shows how many replicas of this volume exist
	ReplicaCount uint32 `protobuf:"varint,18,opt,name=replica_count,json=replicaCount,proto3" json:"replica_count,omitempty"`
	// ProtectionState shows the state of failure protection of this volume
	ProtectionState string `protobuf:"bytes,19,opt,name=protection_state,json=protectionState,proto3" json:"protection_state,omitempty"`
	// LogicalUsedStorage in bytes of the volume
	LogicalUsedStorage uint64 `protobuf:"varint,20,opt,name=logical_used_storage,json=logicalUsedStorage,proto3" json:"logical_used_storage,omitempty"`
	// VolumeStatistics are only visible to admins
	Statistics *VolumeStatistics `protobuf:"bytes,21,opt,name=statistics,proto3" json:"statistics,omitempty"`
	// ClusterName if set points to the cluster this volume is attached to
	ClusterName string `protobuf:"bytes,22,opt,name=cluster_name,json=clusterName,proto3" json:"cluster_name,omitempty"`
	// ClusterID if set points to the cluster this volume is attached to
	ClusterId string `protobuf:"bytes,23,opt,name=cluster_id,json=clusterId,proto3" json:"cluster_id,omitempty"`
	// Labels stored in the volume
	Labels        []*VolumeLabel `protobuf:"bytes,24,rep,name=labels,proto3" json:"labels,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Volume) Reset() {
	*x = Volume{}
	mi := &file_api_v1_volume_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Volume) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Volume) ProtoMessage() {}

func (x *Volume) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[0]
	if x != nil {
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

func (x *Volume) GetState() string {
	if x != nil {
		return x.State
	}
	return ""
}

func (x *Volume) GetAttachedTo() []string {
	if x != nil {
		return x.AttachedTo
	}
	return nil
}

func (x *Volume) GetSourceSnapshotUuid() string {
	if x != nil {
		return x.SourceSnapshotUuid
	}
	return ""
}

func (x *Volume) GetSourceSnapshotName() string {
	if x != nil {
		return x.SourceSnapshotName
	}
	return ""
}

func (x *Volume) GetVolumeHandle() string {
	if x != nil {
		return x.VolumeHandle
	}
	return ""
}

func (x *Volume) GetNodeIps() []string {
	if x != nil {
		return x.NodeIps
	}
	return nil
}

func (x *Volume) GetRebuildProgress() string {
	if x != nil {
		return x.RebuildProgress
	}
	return ""
}

func (x *Volume) GetPrimaryNodeUuid() string {
	if x != nil {
		return x.PrimaryNodeUuid
	}
	return ""
}

func (x *Volume) GetQosPolicyUuid() string {
	if x != nil {
		return x.QosPolicyUuid
	}
	return ""
}

func (x *Volume) GetQosPolicyName() string {
	if x != nil {
		return x.QosPolicyName
	}
	return ""
}

func (x *Volume) GetReplicaCount() uint32 {
	if x != nil {
		return x.ReplicaCount
	}
	return 0
}

func (x *Volume) GetProtectionState() string {
	if x != nil {
		return x.ProtectionState
	}
	return ""
}

func (x *Volume) GetLogicalUsedStorage() uint64 {
	if x != nil {
		return x.LogicalUsedStorage
	}
	return 0
}

func (x *Volume) GetStatistics() *VolumeStatistics {
	if x != nil {
		return x.Statistics
	}
	return nil
}

func (x *Volume) GetClusterName() string {
	if x != nil {
		return x.ClusterName
	}
	return ""
}

func (x *Volume) GetClusterId() string {
	if x != nil {
		return x.ClusterId
	}
	return ""
}

func (x *Volume) GetLabels() []*VolumeLabel {
	if x != nil {
		return x.Labels
	}
	return nil
}

// label-key and label-value length must be between 1 and 253 characters and
// may contain any of: alphanumeric characters (a-z, A-Z, 0-9), hyphen (-),
// underscore (_) and dot (.).
type VolumeLabel struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// key under which the value is stored
	Key string `protobuf:"bytes,1,opt,name=key,proto3" json:"key,omitempty"`
	// value of this label
	Value         string `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *VolumeLabel) Reset() {
	*x = VolumeLabel{}
	mi := &file_api_v1_volume_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *VolumeLabel) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeLabel) ProtoMessage() {}

func (x *VolumeLabel) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VolumeLabel.ProtoReflect.Descriptor instead.
func (*VolumeLabel) Descriptor() ([]byte, []int) {
	return file_api_v1_volume_proto_rawDescGZIP(), []int{1}
}

func (x *VolumeLabel) GetKey() string {
	if x != nil {
		return x.Key
	}
	return ""
}

func (x *VolumeLabel) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

// UpdateVolumeLabels allows updating the labels
type UpdateVolumeLabels struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Update volume labels. New ones will be added, existing ones overwritten
	Update []*VolumeLabel `protobuf:"bytes,1,rep,name=update,proto3" json:"update,omitempty"`
	// Remove volume labels
	Remove        []string `protobuf:"bytes,2,rep,name=remove,proto3" json:"remove,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *UpdateVolumeLabels) Reset() {
	*x = UpdateVolumeLabels{}
	mi := &file_api_v1_volume_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UpdateVolumeLabels) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateVolumeLabels) ProtoMessage() {}

func (x *UpdateVolumeLabels) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateVolumeLabels.ProtoReflect.Descriptor instead.
func (*UpdateVolumeLabels) Descriptor() ([]byte, []int) {
	return file_api_v1_volume_proto_rawDescGZIP(), []int{2}
}

func (x *UpdateVolumeLabels) GetUpdate() []*VolumeLabel {
	if x != nil {
		return x.Update
	}
	return nil
}

func (x *UpdateVolumeLabels) GetRemove() []string {
	if x != nil {
		return x.Remove
	}
	return nil
}

// VolumeStatistics are all detailed statistics of a volume
type VolumeStatistics struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// LogicalUsedStorage
	//
	// Logical storage space used by volume, given in bytes.
	LogicalUsedStorage uint64 `protobuf:"varint,1,opt,name=logical_used_storage,json=logicalUsedStorage,proto3" json:"logical_used_storage,omitempty"`
	// PhysicalUsedStorage
	//
	// Physical storage space used by volume excluding parity, given in bytes.
	PhysicalUsedStorage uint64 `protobuf:"varint,2,opt,name=physical_used_storage,json=physicalUsedStorage,proto3" json:"physical_used_storage,omitempty"`
	// CompressionRatio
	//
	// compression ratio userWritten/physicalCapacity
	CompressionRatio float64 `protobuf:"fixed64,3,opt,name=compression_ratio,json=compressionRatio,proto3" json:"compression_ratio,omitempty"`
	// TotalCompressionRatio
	//
	// compression ratio sum(userWritten) / sum(physical capacity)
	TotalCompressionRatio float64 `protobuf:"fixed64,4,opt,name=total_compression_ratio,json=totalCompressionRatio,proto3" json:"total_compression_ratio,omitempty"`
	// PhysicalCapacity
	//
	// The physical capacity that exists in this volume layer
	PhysicalCapacity uint64 `protobuf:"varint,5,opt,name=physical_capacity,json=physicalCapacity,proto3" json:"physical_capacity,omitempty"`
	// PhysicalOwnedStorageCapacity
	//
	// The capacity that would be freed when volume is deleted
	PhysicalOwnedCapacity uint64 `protobuf:"varint,6,opt,name=physical_owned_capacity,json=physicalOwnedCapacity,proto3" json:"physical_owned_capacity,omitempty"`
	// PhysicalOwnedMemory
	//
	// The memory that would be freed when volume is deleted
	PhysicalOwnedMemory uint64 `protobuf:"varint,7,opt,name=physical_owned_memory,json=physicalOwnedMemory,proto3" json:"physical_owned_memory,omitempty"`
	// PhysicalMemory
	//
	// The memory that exists for this volume
	PhysicalMemory uint64 `protobuf:"varint,8,opt,name=physical_memory,json=physicalMemory,proto3" json:"physical_memory,omitempty"`
	// UserWritten
	//
	// The amount of bytes written to this volume by the user
	UserWritten uint64 `protobuf:"varint,9,opt,name=user_written,json=userWritten,proto3" json:"user_written,omitempty"`
	// UnrecoverableDataIntegrityErrors
	//
	// Number of data integrity errors that could no be recovered by the system.
	UnrecoverableDataIntegrityErrors uint32 `protobuf:"varint,10,opt,name=unrecoverable_data_integrity_errors,json=unrecoverableDataIntegrityErrors,proto3" json:"unrecoverable_data_integrity_errors,omitempty"`
	// RecoverableDataIntegrityErrors
	//
	// Number of data integrity errors that were recovered by the system.
	RecoverableDataIntegrityErrors uint32 `protobuf:"varint,12,opt,name=recoverable_data_integrity_errors,json=recoverableDataIntegrityErrors,proto3" json:"recoverable_data_integrity_errors,omitempty"`
	unknownFields                  protoimpl.UnknownFields
	sizeCache                      protoimpl.SizeCache
}

func (x *VolumeStatistics) Reset() {
	*x = VolumeStatistics{}
	mi := &file_api_v1_volume_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *VolumeStatistics) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeStatistics) ProtoMessage() {}

func (x *VolumeStatistics) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VolumeStatistics.ProtoReflect.Descriptor instead.
func (*VolumeStatistics) Descriptor() ([]byte, []int) {
	return file_api_v1_volume_proto_rawDescGZIP(), []int{3}
}

func (x *VolumeStatistics) GetLogicalUsedStorage() uint64 {
	if x != nil {
		return x.LogicalUsedStorage
	}
	return 0
}

func (x *VolumeStatistics) GetPhysicalUsedStorage() uint64 {
	if x != nil {
		return x.PhysicalUsedStorage
	}
	return 0
}

func (x *VolumeStatistics) GetCompressionRatio() float64 {
	if x != nil {
		return x.CompressionRatio
	}
	return 0
}

func (x *VolumeStatistics) GetTotalCompressionRatio() float64 {
	if x != nil {
		return x.TotalCompressionRatio
	}
	return 0
}

func (x *VolumeStatistics) GetPhysicalCapacity() uint64 {
	if x != nil {
		return x.PhysicalCapacity
	}
	return 0
}

func (x *VolumeStatistics) GetPhysicalOwnedCapacity() uint64 {
	if x != nil {
		return x.PhysicalOwnedCapacity
	}
	return 0
}

func (x *VolumeStatistics) GetPhysicalOwnedMemory() uint64 {
	if x != nil {
		return x.PhysicalOwnedMemory
	}
	return 0
}

func (x *VolumeStatistics) GetPhysicalMemory() uint64 {
	if x != nil {
		return x.PhysicalMemory
	}
	return 0
}

func (x *VolumeStatistics) GetUserWritten() uint64 {
	if x != nil {
		return x.UserWritten
	}
	return 0
}

func (x *VolumeStatistics) GetUnrecoverableDataIntegrityErrors() uint32 {
	if x != nil {
		return x.UnrecoverableDataIntegrityErrors
	}
	return 0
}

func (x *VolumeStatistics) GetRecoverableDataIntegrityErrors() uint32 {
	if x != nil {
		return x.RecoverableDataIntegrityErrors
	}
	return 0
}

// VolumeServiceGetRequest is the request payload of the volume get request
type VolumeServiceGetRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Uuid of the volume
	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	// Project of the volume
	Project       string `protobuf:"bytes,2,opt,name=project,proto3" json:"project,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *VolumeServiceGetRequest) Reset() {
	*x = VolumeServiceGetRequest{}
	mi := &file_api_v1_volume_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *VolumeServiceGetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeServiceGetRequest) ProtoMessage() {}

func (x *VolumeServiceGetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[4]
	if x != nil {
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
	return file_api_v1_volume_proto_rawDescGZIP(), []int{4}
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

// VolumeServiceListRequest is the request payload of a volume list request
type VolumeServiceListRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Uuid of the volume
	Uuid *string `protobuf:"bytes,1,opt,name=uuid,proto3,oneof" json:"uuid,omitempty"`
	// Project of the volume
	Project string `protobuf:"bytes,2,opt,name=project,proto3" json:"project,omitempty"`
	// Partition where the volumes should be listed
	Partition *string `protobuf:"bytes,3,opt,name=partition,proto3,oneof" json:"partition,omitempty"`
	// Name of the volume
	Name          *string `protobuf:"bytes,4,opt,name=name,proto3,oneof" json:"name,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *VolumeServiceListRequest) Reset() {
	*x = VolumeServiceListRequest{}
	mi := &file_api_v1_volume_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *VolumeServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeServiceListRequest) ProtoMessage() {}

func (x *VolumeServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[5]
	if x != nil {
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
	return file_api_v1_volume_proto_rawDescGZIP(), []int{5}
}

func (x *VolumeServiceListRequest) GetUuid() string {
	if x != nil && x.Uuid != nil {
		return *x.Uuid
	}
	return ""
}

func (x *VolumeServiceListRequest) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

func (x *VolumeServiceListRequest) GetPartition() string {
	if x != nil && x.Partition != nil {
		return *x.Partition
	}
	return ""
}

func (x *VolumeServiceListRequest) GetName() string {
	if x != nil && x.Name != nil {
		return *x.Name
	}
	return ""
}

// VolumeServiceDeleteRequest is the request payload of a volume delete request
type VolumeServiceDeleteRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Uuid of the volume
	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	// Project of the volume
	Project       string `protobuf:"bytes,2,opt,name=project,proto3" json:"project,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *VolumeServiceDeleteRequest) Reset() {
	*x = VolumeServiceDeleteRequest{}
	mi := &file_api_v1_volume_proto_msgTypes[6]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *VolumeServiceDeleteRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeServiceDeleteRequest) ProtoMessage() {}

func (x *VolumeServiceDeleteRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[6]
	if x != nil {
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
	return file_api_v1_volume_proto_rawDescGZIP(), []int{6}
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

// VolumeServiceUpdateRequest is the request payload of a volume update request
type VolumeServiceUpdateRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Uuid of the volume
	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	// Project of the volume
	Project string `protobuf:"bytes,2,opt,name=project,proto3" json:"project,omitempty"`
	// Update Volume Labels stored in the volume. Some labels are immutable and cannot be changed.
	Labels        *UpdateVolumeLabels `protobuf:"bytes,24,opt,name=labels,proto3,oneof" json:"labels,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *VolumeServiceUpdateRequest) Reset() {
	*x = VolumeServiceUpdateRequest{}
	mi := &file_api_v1_volume_proto_msgTypes[7]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *VolumeServiceUpdateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeServiceUpdateRequest) ProtoMessage() {}

func (x *VolumeServiceUpdateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[7]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VolumeServiceUpdateRequest.ProtoReflect.Descriptor instead.
func (*VolumeServiceUpdateRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_volume_proto_rawDescGZIP(), []int{7}
}

func (x *VolumeServiceUpdateRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *VolumeServiceUpdateRequest) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

func (x *VolumeServiceUpdateRequest) GetLabels() *UpdateVolumeLabels {
	if x != nil {
		return x.Labels
	}
	return nil
}

// VolumeServiceGetResponse is the response payload of a volume get request
type VolumeServiceGetResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Volume the volume
	Volume        *Volume `protobuf:"bytes,1,opt,name=volume,proto3" json:"volume,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *VolumeServiceGetResponse) Reset() {
	*x = VolumeServiceGetResponse{}
	mi := &file_api_v1_volume_proto_msgTypes[8]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *VolumeServiceGetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeServiceGetResponse) ProtoMessage() {}

func (x *VolumeServiceGetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[8]
	if x != nil {
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
	return file_api_v1_volume_proto_rawDescGZIP(), []int{8}
}

func (x *VolumeServiceGetResponse) GetVolume() *Volume {
	if x != nil {
		return x.Volume
	}
	return nil
}

// VolumeServiceListResponse is the response payload of a volume list request
type VolumeServiceListResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Volumes the volumes
	Volumes       []*Volume `protobuf:"bytes,1,rep,name=volumes,proto3" json:"volumes,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *VolumeServiceListResponse) Reset() {
	*x = VolumeServiceListResponse{}
	mi := &file_api_v1_volume_proto_msgTypes[9]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *VolumeServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeServiceListResponse) ProtoMessage() {}

func (x *VolumeServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[9]
	if x != nil {
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
	return file_api_v1_volume_proto_rawDescGZIP(), []int{9}
}

func (x *VolumeServiceListResponse) GetVolumes() []*Volume {
	if x != nil {
		return x.Volumes
	}
	return nil
}

// VolumeServiceDeleteResponse is the response payload of a volume delete request
type VolumeServiceDeleteResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Volume the volume
	Volume        *Volume `protobuf:"bytes,1,opt,name=volume,proto3" json:"volume,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *VolumeServiceDeleteResponse) Reset() {
	*x = VolumeServiceDeleteResponse{}
	mi := &file_api_v1_volume_proto_msgTypes[10]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *VolumeServiceDeleteResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeServiceDeleteResponse) ProtoMessage() {}

func (x *VolumeServiceDeleteResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[10]
	if x != nil {
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
	return file_api_v1_volume_proto_rawDescGZIP(), []int{10}
}

func (x *VolumeServiceDeleteResponse) GetVolume() *Volume {
	if x != nil {
		return x.Volume
	}
	return nil
}

// VolumeServiceUpdateResponse is the response payload of a volume update request
type VolumeServiceUpdateResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Volume the volume
	Volume        *Volume `protobuf:"bytes,1,opt,name=volume,proto3" json:"volume,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *VolumeServiceUpdateResponse) Reset() {
	*x = VolumeServiceUpdateResponse{}
	mi := &file_api_v1_volume_proto_msgTypes[11]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *VolumeServiceUpdateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VolumeServiceUpdateResponse) ProtoMessage() {}

func (x *VolumeServiceUpdateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_volume_proto_msgTypes[11]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VolumeServiceUpdateResponse.ProtoReflect.Descriptor instead.
func (*VolumeServiceUpdateResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_volume_proto_rawDescGZIP(), []int{11}
}

func (x *VolumeServiceUpdateResponse) GetVolume() *Volume {
	if x != nil {
		return x.Volume
	}
	return nil
}

var File_api_v1_volume_proto protoreflect.FileDescriptor

const file_api_v1_volume_proto_rawDesc = "" +
	"\n" +
	"\x13api/v1/volume.proto\x12\x06api.v1\x1a\x13api/v1/common.proto\x1a\x1bbuf/validate/validate.proto\"\xe4\x06\n" +
	"\x06Volume\x12\x12\n" +
	"\x04uuid\x18\x01 \x01(\tR\x04uuid\x12\x12\n" +
	"\x04name\x18\x02 \x01(\tR\x04name\x12\x18\n" +
	"\aproject\x18\x03 \x01(\tR\aproject\x12\x1c\n" +
	"\tpartition\x18\x04 \x01(\tR\tpartition\x12#\n" +
	"\rstorage_class\x18\x05 \x01(\tR\fstorageClass\x12\x12\n" +
	"\x04size\x18\x06 \x01(\x04R\x04size\x12\x14\n" +
	"\x05usage\x18\a \x01(\x04R\x05usage\x12\x14\n" +
	"\x05state\x18\b \x01(\tR\x05state\x12\x1f\n" +
	"\vattached_to\x18\t \x03(\tR\n" +
	"attachedTo\x120\n" +
	"\x14source_snapshot_uuid\x18\n" +
	" \x01(\tR\x12sourceSnapshotUuid\x120\n" +
	"\x14source_snapshot_name\x18\v \x01(\tR\x12sourceSnapshotName\x12#\n" +
	"\rvolume_handle\x18\f \x01(\tR\fvolumeHandle\x12\x19\n" +
	"\bnode_ips\x18\r \x03(\tR\anodeIps\x12)\n" +
	"\x10rebuild_progress\x18\x0e \x01(\tR\x0frebuildProgress\x12*\n" +
	"\x11primary_node_uuid\x18\x0f \x01(\tR\x0fprimaryNodeUuid\x12&\n" +
	"\x0fqos_policy_uuid\x18\x10 \x01(\tR\rqosPolicyUuid\x12&\n" +
	"\x0fqos_policy_name\x18\x11 \x01(\tR\rqosPolicyName\x12#\n" +
	"\rreplica_count\x18\x12 \x01(\rR\freplicaCount\x12)\n" +
	"\x10protection_state\x18\x13 \x01(\tR\x0fprotectionState\x120\n" +
	"\x14logical_used_storage\x18\x14 \x01(\x04R\x12logicalUsedStorage\x128\n" +
	"\n" +
	"statistics\x18\x15 \x01(\v2\x18.api.v1.VolumeStatisticsR\n" +
	"statistics\x12!\n" +
	"\fcluster_name\x18\x16 \x01(\tR\vclusterName\x12\x1d\n" +
	"\n" +
	"cluster_id\x18\x17 \x01(\tR\tclusterId\x12+\n" +
	"\x06labels\x18\x18 \x03(\v2\x13.api.v1.VolumeLabelR\x06labels\"M\n" +
	"\vVolumeLabel\x12\x1c\n" +
	"\x03key\x18\x01 \x01(\tB\n" +
	"\xbaH\ar\x05\x10\x01\x18\xfd\x01R\x03key\x12 \n" +
	"\x05value\x18\x02 \x01(\tB\n" +
	"\xbaH\ar\x05\x10\x01\x18\xfd\x01R\x05value\"Y\n" +
	"\x12UpdateVolumeLabels\x12+\n" +
	"\x06update\x18\x01 \x03(\v2\x13.api.v1.VolumeLabelR\x06update\x12\x16\n" +
	"\x06remove\x18\x02 \x03(\tR\x06remove\"\xdc\x04\n" +
	"\x10VolumeStatistics\x120\n" +
	"\x14logical_used_storage\x18\x01 \x01(\x04R\x12logicalUsedStorage\x122\n" +
	"\x15physical_used_storage\x18\x02 \x01(\x04R\x13physicalUsedStorage\x12+\n" +
	"\x11compression_ratio\x18\x03 \x01(\x01R\x10compressionRatio\x126\n" +
	"\x17total_compression_ratio\x18\x04 \x01(\x01R\x15totalCompressionRatio\x12+\n" +
	"\x11physical_capacity\x18\x05 \x01(\x04R\x10physicalCapacity\x126\n" +
	"\x17physical_owned_capacity\x18\x06 \x01(\x04R\x15physicalOwnedCapacity\x122\n" +
	"\x15physical_owned_memory\x18\a \x01(\x04R\x13physicalOwnedMemory\x12'\n" +
	"\x0fphysical_memory\x18\b \x01(\x04R\x0ephysicalMemory\x12!\n" +
	"\fuser_written\x18\t \x01(\x04R\vuserWritten\x12M\n" +
	"#unrecoverable_data_integrity_errors\x18\n" +
	" \x01(\rR unrecoverableDataIntegrityErrors\x12I\n" +
	"!recoverable_data_integrity_errors\x18\f \x01(\rR\x1erecoverableDataIntegrityErrors\"]\n" +
	"\x17VolumeServiceGetRequest\x12\x1c\n" +
	"\x04uuid\x18\x01 \x01(\tB\b\xbaH\x05r\x03\xb0\x01\x01R\x04uuid\x12$\n" +
	"\aproject\x18\x02 \x01(\tB\n" +
	"\xbaH\ar\x05\x10\x02\x18\x80\x01R\aproject\"\xbf\x01\n" +
	"\x18VolumeServiceListRequest\x12!\n" +
	"\x04uuid\x18\x01 \x01(\tB\b\xbaH\x05r\x03\xb0\x01\x01H\x00R\x04uuid\x88\x01\x01\x12$\n" +
	"\aproject\x18\x02 \x01(\tB\n" +
	"\xbaH\ar\x05\x10\x02\x18\x80\x01R\aproject\x12!\n" +
	"\tpartition\x18\x03 \x01(\tH\x01R\tpartition\x88\x01\x01\x12\x17\n" +
	"\x04name\x18\x04 \x01(\tH\x02R\x04name\x88\x01\x01B\a\n" +
	"\x05_uuidB\f\n" +
	"\n" +
	"_partitionB\a\n" +
	"\x05_name\"`\n" +
	"\x1aVolumeServiceDeleteRequest\x12\x1c\n" +
	"\x04uuid\x18\x01 \x01(\tB\b\xbaH\x05r\x03\xb0\x01\x01R\x04uuid\x12$\n" +
	"\aproject\x18\x02 \x01(\tB\n" +
	"\xbaH\ar\x05\x10\x02\x18\x80\x01R\aproject\"\xa4\x01\n" +
	"\x1aVolumeServiceUpdateRequest\x12\x1c\n" +
	"\x04uuid\x18\x01 \x01(\tB\b\xbaH\x05r\x03\xb0\x01\x01R\x04uuid\x12$\n" +
	"\aproject\x18\x02 \x01(\tB\n" +
	"\xbaH\ar\x05\x10\x02\x18\x80\x01R\aproject\x127\n" +
	"\x06labels\x18\x18 \x01(\v2\x1a.api.v1.UpdateVolumeLabelsH\x00R\x06labels\x88\x01\x01B\t\n" +
	"\a_labels\"B\n" +
	"\x18VolumeServiceGetResponse\x12&\n" +
	"\x06volume\x18\x01 \x01(\v2\x0e.api.v1.VolumeR\x06volume\"E\n" +
	"\x19VolumeServiceListResponse\x12(\n" +
	"\avolumes\x18\x01 \x03(\v2\x0e.api.v1.VolumeR\avolumes\"E\n" +
	"\x1bVolumeServiceDeleteResponse\x12&\n" +
	"\x06volume\x18\x01 \x01(\v2\x0e.api.v1.VolumeR\x06volume\"E\n" +
	"\x1bVolumeServiceUpdateResponse\x12&\n" +
	"\x06volume\x18\x01 \x01(\v2\x0e.api.v1.VolumeR\x06volume2\xf6\x02\n" +
	"\rVolumeService\x12U\n" +
	"\x03Get\x12\x1f.api.v1.VolumeServiceGetRequest\x1a .api.v1.VolumeServiceGetResponse\"\v\xca\xf3\x18\x03\x01\x02\x03\xe8\xf3\x18\x02\x12X\n" +
	"\x04List\x12 .api.v1.VolumeServiceListRequest\x1a!.api.v1.VolumeServiceListResponse\"\v\xca\xf3\x18\x03\x01\x02\x03\xe8\xf3\x18\x02\x12Y\n" +
	"\x06Delete\x12\".api.v1.VolumeServiceDeleteRequest\x1a#.api.v1.VolumeServiceDeleteResponse\"\x06\xca\xf3\x18\x02\x01\x02\x12Y\n" +
	"\x06Update\x12\".api.v1.VolumeServiceUpdateRequest\x1a#.api.v1.VolumeServiceUpdateResponse\"\x06\xca\xf3\x18\x02\x01\x02B\x84\x01\n" +
	"\n" +
	"com.api.v1B\vVolumeProtoP\x01Z0github.com/metal-stack-cloud/api/go/api/v1;apiv1\xa2\x02\x03AXX\xaa\x02\x06Api.V1\xca\x02\x06Api\\V1\xe2\x02\x12Api\\V1\\GPBMetadata\xea\x02\aApi::V1b\x06proto3"

var (
	file_api_v1_volume_proto_rawDescOnce sync.Once
	file_api_v1_volume_proto_rawDescData []byte
)

func file_api_v1_volume_proto_rawDescGZIP() []byte {
	file_api_v1_volume_proto_rawDescOnce.Do(func() {
		file_api_v1_volume_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_api_v1_volume_proto_rawDesc), len(file_api_v1_volume_proto_rawDesc)))
	})
	return file_api_v1_volume_proto_rawDescData
}

var file_api_v1_volume_proto_msgTypes = make([]protoimpl.MessageInfo, 12)
var file_api_v1_volume_proto_goTypes = []any{
	(*Volume)(nil),                      // 0: api.v1.Volume
	(*VolumeLabel)(nil),                 // 1: api.v1.VolumeLabel
	(*UpdateVolumeLabels)(nil),          // 2: api.v1.UpdateVolumeLabels
	(*VolumeStatistics)(nil),            // 3: api.v1.VolumeStatistics
	(*VolumeServiceGetRequest)(nil),     // 4: api.v1.VolumeServiceGetRequest
	(*VolumeServiceListRequest)(nil),    // 5: api.v1.VolumeServiceListRequest
	(*VolumeServiceDeleteRequest)(nil),  // 6: api.v1.VolumeServiceDeleteRequest
	(*VolumeServiceUpdateRequest)(nil),  // 7: api.v1.VolumeServiceUpdateRequest
	(*VolumeServiceGetResponse)(nil),    // 8: api.v1.VolumeServiceGetResponse
	(*VolumeServiceListResponse)(nil),   // 9: api.v1.VolumeServiceListResponse
	(*VolumeServiceDeleteResponse)(nil), // 10: api.v1.VolumeServiceDeleteResponse
	(*VolumeServiceUpdateResponse)(nil), // 11: api.v1.VolumeServiceUpdateResponse
}
var file_api_v1_volume_proto_depIdxs = []int32{
	3,  // 0: api.v1.Volume.statistics:type_name -> api.v1.VolumeStatistics
	1,  // 1: api.v1.Volume.labels:type_name -> api.v1.VolumeLabel
	1,  // 2: api.v1.UpdateVolumeLabels.update:type_name -> api.v1.VolumeLabel
	2,  // 3: api.v1.VolumeServiceUpdateRequest.labels:type_name -> api.v1.UpdateVolumeLabels
	0,  // 4: api.v1.VolumeServiceGetResponse.volume:type_name -> api.v1.Volume
	0,  // 5: api.v1.VolumeServiceListResponse.volumes:type_name -> api.v1.Volume
	0,  // 6: api.v1.VolumeServiceDeleteResponse.volume:type_name -> api.v1.Volume
	0,  // 7: api.v1.VolumeServiceUpdateResponse.volume:type_name -> api.v1.Volume
	4,  // 8: api.v1.VolumeService.Get:input_type -> api.v1.VolumeServiceGetRequest
	5,  // 9: api.v1.VolumeService.List:input_type -> api.v1.VolumeServiceListRequest
	6,  // 10: api.v1.VolumeService.Delete:input_type -> api.v1.VolumeServiceDeleteRequest
	7,  // 11: api.v1.VolumeService.Update:input_type -> api.v1.VolumeServiceUpdateRequest
	8,  // 12: api.v1.VolumeService.Get:output_type -> api.v1.VolumeServiceGetResponse
	9,  // 13: api.v1.VolumeService.List:output_type -> api.v1.VolumeServiceListResponse
	10, // 14: api.v1.VolumeService.Delete:output_type -> api.v1.VolumeServiceDeleteResponse
	11, // 15: api.v1.VolumeService.Update:output_type -> api.v1.VolumeServiceUpdateResponse
	12, // [12:16] is the sub-list for method output_type
	8,  // [8:12] is the sub-list for method input_type
	8,  // [8:8] is the sub-list for extension type_name
	8,  // [8:8] is the sub-list for extension extendee
	0,  // [0:8] is the sub-list for field type_name
}

func init() { file_api_v1_volume_proto_init() }
func file_api_v1_volume_proto_init() {
	if File_api_v1_volume_proto != nil {
		return
	}
	file_api_v1_common_proto_init()
	file_api_v1_volume_proto_msgTypes[5].OneofWrappers = []any{}
	file_api_v1_volume_proto_msgTypes[7].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_api_v1_volume_proto_rawDesc), len(file_api_v1_volume_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   12,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_api_v1_volume_proto_goTypes,
		DependencyIndexes: file_api_v1_volume_proto_depIdxs,
		MessageInfos:      file_api_v1_volume_proto_msgTypes,
	}.Build()
	File_api_v1_volume_proto = out.File
	file_api_v1_volume_proto_goTypes = nil
	file_api_v1_volume_proto_depIdxs = nil
}
