// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        (unknown)
// source: admin/v1/cluster.proto

package adminv1

import (
	_ "github.com/envoyproxy/protoc-gen-validate/validate"
	v1 "github.com/metal-stack-cloud/api/go/api/v1"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	durationpb "google.golang.org/protobuf/types/known/durationpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Operate defines the types of reconcilation to be triggered
type Operate int32

const (
	// OPERATE_UNSPECIFIED is not specified
	Operate_OPERATE_UNSPECIFIED Operate = 0
	// OPERATE_RECONCILE reconcile the cluster
	Operate_OPERATE_RECONCILE Operate = 1
	// OPERATE_MAINTAIN maintain the cluster
	Operate_OPERATE_MAINTAIN Operate = 2
	// OPERATE_RETRY retry the reconcilation of the cluster
	Operate_OPERATE_RETRY Operate = 3
)

// Enum value maps for Operate.
var (
	Operate_name = map[int32]string{
		0: "OPERATE_UNSPECIFIED",
		1: "OPERATE_RECONCILE",
		2: "OPERATE_MAINTAIN",
		3: "OPERATE_RETRY",
	}
	Operate_value = map[string]int32{
		"OPERATE_UNSPECIFIED": 0,
		"OPERATE_RECONCILE":   1,
		"OPERATE_MAINTAIN":    2,
		"OPERATE_RETRY":       3,
	}
)

func (x Operate) Enum() *Operate {
	p := new(Operate)
	*p = x
	return p
}

func (x Operate) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Operate) Descriptor() protoreflect.EnumDescriptor {
	return file_admin_v1_cluster_proto_enumTypes[0].Descriptor()
}

func (Operate) Type() protoreflect.EnumType {
	return &file_admin_v1_cluster_proto_enumTypes[0]
}

func (x Operate) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Operate.Descriptor instead.
func (Operate) EnumDescriptor() ([]byte, []int) {
	return file_admin_v1_cluster_proto_rawDescGZIP(), []int{0}
}

// ClusterServiceGetRequest is the request payload for the cluster get request
type ClusterServiceGetRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Uuid of the cluster to get
	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	// WithMachines if set to true machines of all worker groups are also returned
	WithMachines bool `protobuf:"varint,2,opt,name=with_machines,json=withMachines,proto3" json:"with_machines,omitempty"`
}

func (x *ClusterServiceGetRequest) Reset() {
	*x = ClusterServiceGetRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_cluster_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ClusterServiceGetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ClusterServiceGetRequest) ProtoMessage() {}

func (x *ClusterServiceGetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_cluster_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ClusterServiceGetRequest.ProtoReflect.Descriptor instead.
func (*ClusterServiceGetRequest) Descriptor() ([]byte, []int) {
	return file_admin_v1_cluster_proto_rawDescGZIP(), []int{0}
}

func (x *ClusterServiceGetRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *ClusterServiceGetRequest) GetWithMachines() bool {
	if x != nil {
		return x.WithMachines
	}
	return false
}

// ClusterServiceListRequest is the request payload for the cluster list request
type ClusterServiceListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Uuid of the cluster
	Uuid *string `protobuf:"bytes,1,opt,name=uuid,proto3,oneof" json:"uuid,omitempty"`
	// Project of the cluster
	Project *string `protobuf:"bytes,2,opt,name=project,proto3,oneof" json:"project,omitempty"`
	// Tenant of the cluster
	Tenant *string `protobuf:"bytes,3,opt,name=tenant,proto3,oneof" json:"tenant,omitempty"`
	// Partiton of the cluster
	Partition *string `protobuf:"bytes,4,opt,name=partition,proto3,oneof" json:"partition,omitempty"`
	// Seed of the cluster
	Seed *string `protobuf:"bytes,5,opt,name=seed,proto3,oneof" json:"seed,omitempty"`
	// Name of the cluster
	Name *string `protobuf:"bytes,6,opt,name=name,proto3,oneof" json:"name,omitempty"`
	// Purpose of the cluster
	Purpose *string `protobuf:"bytes,7,opt,name=purpose,proto3,oneof" json:"purpose,omitempty"`
	// Labels of the cluster
	Labels map[string]string `protobuf:"bytes,8,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *ClusterServiceListRequest) Reset() {
	*x = ClusterServiceListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_cluster_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ClusterServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ClusterServiceListRequest) ProtoMessage() {}

func (x *ClusterServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_cluster_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ClusterServiceListRequest.ProtoReflect.Descriptor instead.
func (*ClusterServiceListRequest) Descriptor() ([]byte, []int) {
	return file_admin_v1_cluster_proto_rawDescGZIP(), []int{1}
}

func (x *ClusterServiceListRequest) GetUuid() string {
	if x != nil && x.Uuid != nil {
		return *x.Uuid
	}
	return ""
}

func (x *ClusterServiceListRequest) GetProject() string {
	if x != nil && x.Project != nil {
		return *x.Project
	}
	return ""
}

func (x *ClusterServiceListRequest) GetTenant() string {
	if x != nil && x.Tenant != nil {
		return *x.Tenant
	}
	return ""
}

func (x *ClusterServiceListRequest) GetPartition() string {
	if x != nil && x.Partition != nil {
		return *x.Partition
	}
	return ""
}

func (x *ClusterServiceListRequest) GetSeed() string {
	if x != nil && x.Seed != nil {
		return *x.Seed
	}
	return ""
}

func (x *ClusterServiceListRequest) GetName() string {
	if x != nil && x.Name != nil {
		return *x.Name
	}
	return ""
}

func (x *ClusterServiceListRequest) GetPurpose() string {
	if x != nil && x.Purpose != nil {
		return *x.Purpose
	}
	return ""
}

func (x *ClusterServiceListRequest) GetLabels() map[string]string {
	if x != nil {
		return x.Labels
	}
	return nil
}

// ClusterServiceCredentialsRequest is the request payload for the cluster credentials request
type ClusterServiceCredentialsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Uuid of the cluster
	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	// WithVpn if set VPN details are returned
	WithVpn bool `protobuf:"varint,2,opt,name=with_vpn,json=withVpn,proto3" json:"with_vpn,omitempty"`
	// WithSsh if set ssh access credentials are returned
	WithSsh bool `protobuf:"varint,3,opt,name=with_ssh,json=withSsh,proto3" json:"with_ssh,omitempty"`
	// Expiration defines the duration after which the kubernetes token is not valid anymore
	Expiration *durationpb.Duration `protobuf:"bytes,4,opt,name=expiration,proto3,oneof" json:"expiration,omitempty"`
}

func (x *ClusterServiceCredentialsRequest) Reset() {
	*x = ClusterServiceCredentialsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_cluster_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ClusterServiceCredentialsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ClusterServiceCredentialsRequest) ProtoMessage() {}

func (x *ClusterServiceCredentialsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_cluster_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ClusterServiceCredentialsRequest.ProtoReflect.Descriptor instead.
func (*ClusterServiceCredentialsRequest) Descriptor() ([]byte, []int) {
	return file_admin_v1_cluster_proto_rawDescGZIP(), []int{2}
}

func (x *ClusterServiceCredentialsRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *ClusterServiceCredentialsRequest) GetWithVpn() bool {
	if x != nil {
		return x.WithVpn
	}
	return false
}

func (x *ClusterServiceCredentialsRequest) GetWithSsh() bool {
	if x != nil {
		return x.WithSsh
	}
	return false
}

func (x *ClusterServiceCredentialsRequest) GetExpiration() *durationpb.Duration {
	if x != nil {
		return x.Expiration
	}
	return nil
}

// ClusterServiceOperateRequest is the request payload for the cluster operate request
type ClusterServiceOperateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Uuid of the cluster
	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	// Operate is the reconcilation operation which should be performed
	Operate Operate `protobuf:"varint,2,opt,name=operate,proto3,enum=admin.v1.Operate" json:"operate,omitempty"`
}

func (x *ClusterServiceOperateRequest) Reset() {
	*x = ClusterServiceOperateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_cluster_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ClusterServiceOperateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ClusterServiceOperateRequest) ProtoMessage() {}

func (x *ClusterServiceOperateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_cluster_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ClusterServiceOperateRequest.ProtoReflect.Descriptor instead.
func (*ClusterServiceOperateRequest) Descriptor() ([]byte, []int) {
	return file_admin_v1_cluster_proto_rawDescGZIP(), []int{3}
}

func (x *ClusterServiceOperateRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *ClusterServiceOperateRequest) GetOperate() Operate {
	if x != nil {
		return x.Operate
	}
	return Operate_OPERATE_UNSPECIFIED
}

// ClusterServiceGetResponse is the response payload for the cluster get request
type ClusterServiceGetResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Cluster is the cluster
	Cluster *v1.Cluster `protobuf:"bytes,1,opt,name=cluster,proto3" json:"cluster,omitempty"`
	// Machines is a list of all machines in all worker groups
	Machines []*Machine `protobuf:"bytes,2,rep,name=machines,proto3" json:"machines,omitempty"`
}

func (x *ClusterServiceGetResponse) Reset() {
	*x = ClusterServiceGetResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_cluster_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ClusterServiceGetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ClusterServiceGetResponse) ProtoMessage() {}

func (x *ClusterServiceGetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_cluster_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ClusterServiceGetResponse.ProtoReflect.Descriptor instead.
func (*ClusterServiceGetResponse) Descriptor() ([]byte, []int) {
	return file_admin_v1_cluster_proto_rawDescGZIP(), []int{4}
}

func (x *ClusterServiceGetResponse) GetCluster() *v1.Cluster {
	if x != nil {
		return x.Cluster
	}
	return nil
}

func (x *ClusterServiceGetResponse) GetMachines() []*Machine {
	if x != nil {
		return x.Machines
	}
	return nil
}

// ClusterServiceListResponse is the response payload for the cluster list request
type ClusterServiceListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Clusters is the list of clusters
	Clusters []*v1.Cluster `protobuf:"bytes,1,rep,name=clusters,proto3" json:"clusters,omitempty"`
}

func (x *ClusterServiceListResponse) Reset() {
	*x = ClusterServiceListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_cluster_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ClusterServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ClusterServiceListResponse) ProtoMessage() {}

func (x *ClusterServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_cluster_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ClusterServiceListResponse.ProtoReflect.Descriptor instead.
func (*ClusterServiceListResponse) Descriptor() ([]byte, []int) {
	return file_admin_v1_cluster_proto_rawDescGZIP(), []int{5}
}

func (x *ClusterServiceListResponse) GetClusters() []*v1.Cluster {
	if x != nil {
		return x.Clusters
	}
	return nil
}

// ClusterServiceCredentialsResponse is the response payload for the cluster credentials request
type ClusterServiceCredentialsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Kubeconfig is the access token for the kubernetes api of this cluster
	Kubeconfig string `protobuf:"bytes,1,opt,name=kubeconfig,proto3" json:"kubeconfig,omitempty"`
	// SshKeypair is the keypair to access the firewall of the cluster with ssh
	SshKeypair *SSHKeyPair `protobuf:"bytes,2,opt,name=ssh_keypair,json=sshKeypair,proto3" json:"ssh_keypair,omitempty"`
	// Vpn are the VPN access details
	Vpn *VPN `protobuf:"bytes,3,opt,name=vpn,proto3" json:"vpn,omitempty"`
}

func (x *ClusterServiceCredentialsResponse) Reset() {
	*x = ClusterServiceCredentialsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_cluster_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ClusterServiceCredentialsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ClusterServiceCredentialsResponse) ProtoMessage() {}

func (x *ClusterServiceCredentialsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_cluster_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ClusterServiceCredentialsResponse.ProtoReflect.Descriptor instead.
func (*ClusterServiceCredentialsResponse) Descriptor() ([]byte, []int) {
	return file_admin_v1_cluster_proto_rawDescGZIP(), []int{6}
}

func (x *ClusterServiceCredentialsResponse) GetKubeconfig() string {
	if x != nil {
		return x.Kubeconfig
	}
	return ""
}

func (x *ClusterServiceCredentialsResponse) GetSshKeypair() *SSHKeyPair {
	if x != nil {
		return x.SshKeypair
	}
	return nil
}

func (x *ClusterServiceCredentialsResponse) GetVpn() *VPN {
	if x != nil {
		return x.Vpn
	}
	return nil
}

// ClusterServiceOperateResponse is the response payload for the cluster operate request
type ClusterServiceOperateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Cluster is the cluster
	Cluster *v1.Cluster `protobuf:"bytes,1,opt,name=cluster,proto3" json:"cluster,omitempty"`
}

func (x *ClusterServiceOperateResponse) Reset() {
	*x = ClusterServiceOperateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_cluster_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ClusterServiceOperateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ClusterServiceOperateResponse) ProtoMessage() {}

func (x *ClusterServiceOperateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_cluster_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ClusterServiceOperateResponse.ProtoReflect.Descriptor instead.
func (*ClusterServiceOperateResponse) Descriptor() ([]byte, []int) {
	return file_admin_v1_cluster_proto_rawDescGZIP(), []int{7}
}

func (x *ClusterServiceOperateResponse) GetCluster() *v1.Cluster {
	if x != nil {
		return x.Cluster
	}
	return nil
}

// SSHKeyPair details to access a firewall via ssh
type SSHKeyPair struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Publickey is the public key
	Publickey []byte `protobuf:"bytes,1,opt,name=publickey,proto3" json:"publickey,omitempty"`
	// Privatekey is the private key
	Privatekey []byte `protobuf:"bytes,2,opt,name=privatekey,proto3" json:"privatekey,omitempty"`
}

func (x *SSHKeyPair) Reset() {
	*x = SSHKeyPair{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_cluster_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SSHKeyPair) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SSHKeyPair) ProtoMessage() {}

func (x *SSHKeyPair) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_cluster_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SSHKeyPair.ProtoReflect.Descriptor instead.
func (*SSHKeyPair) Descriptor() ([]byte, []int) {
	return file_admin_v1_cluster_proto_rawDescGZIP(), []int{8}
}

func (x *SSHKeyPair) GetPublickey() []byte {
	if x != nil {
		return x.Publickey
	}
	return nil
}

func (x *SSHKeyPair) GetPrivatekey() []byte {
	if x != nil {
		return x.Privatekey
	}
	return nil
}

var File_admin_v1_cluster_proto protoreflect.FileDescriptor

var file_admin_v1_cluster_proto_rawDesc = []byte{
	0x0a, 0x16, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6c, 0x75, 0x73, 0x74,
	0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e,
	0x76, 0x31, 0x1a, 0x16, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x6d, 0x61, 0x63,
	0x68, 0x69, 0x6e, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x14, 0x61, 0x70, 0x69, 0x2f,
	0x76, 0x31, 0x2f, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f,
	0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x5d,
	0x0a, 0x18, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x47, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1c, 0x0a, 0x04, 0x75, 0x75,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x72, 0x03, 0xb0,
	0x01, 0x01, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x23, 0x0a, 0x0d, 0x77, 0x69, 0x74, 0x68,
	0x5f, 0x6d, 0x61, 0x63, 0x68, 0x69, 0x6e, 0x65, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x0c, 0x77, 0x69, 0x74, 0x68, 0x4d, 0x61, 0x63, 0x68, 0x69, 0x6e, 0x65, 0x73, 0x22, 0xb4, 0x03,
	0x0a, 0x19, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x04, 0x75,
	0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x04, 0x75, 0x75, 0x69,
	0x64, 0x88, 0x01, 0x01, 0x12, 0x1d, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x88, 0x01, 0x01, 0x12, 0x1b, 0x0a, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x88, 0x01, 0x01,
	0x12, 0x21, 0x0a, 0x09, 0x70, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x48, 0x03, 0x52, 0x09, 0x70, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e,
	0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x73, 0x65, 0x65, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28,
	0x09, 0x48, 0x04, 0x52, 0x04, 0x73, 0x65, 0x65, 0x64, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x48, 0x05, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x88, 0x01, 0x01, 0x12, 0x1d, 0x0a, 0x07, 0x70, 0x75, 0x72, 0x70, 0x6f, 0x73, 0x65,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x48, 0x06, 0x52, 0x07, 0x70, 0x75, 0x72, 0x70, 0x6f, 0x73,
	0x65, 0x88, 0x01, 0x01, 0x12, 0x47, 0x0a, 0x06, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x18, 0x08,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x2f, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e,
	0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69,
	0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x2e, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73,
	0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x1a, 0x39, 0x0a,
	0x0b, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03,
	0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14,
	0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x75, 0x75, 0x69,
	0x64, 0x42, 0x0a, 0x0a, 0x08, 0x5f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x42, 0x09, 0x0a,
	0x07, 0x5f, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x42, 0x0c, 0x0a, 0x0a, 0x5f, 0x70, 0x61, 0x72,
	0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x73, 0x65, 0x65, 0x64, 0x42,
	0x07, 0x0a, 0x05, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x42, 0x0a, 0x0a, 0x08, 0x5f, 0x70, 0x75, 0x72,
	0x70, 0x6f, 0x73, 0x65, 0x22, 0xc5, 0x01, 0x0a, 0x20, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x43, 0x72, 0x65, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x61,
	0x6c, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1c, 0x0a, 0x04, 0x75, 0x75, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x72, 0x03, 0xb0, 0x01,
	0x01, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x77, 0x69, 0x74, 0x68, 0x5f,
	0x76, 0x70, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x77, 0x69, 0x74, 0x68, 0x56,
	0x70, 0x6e, 0x12, 0x19, 0x0a, 0x08, 0x77, 0x69, 0x74, 0x68, 0x5f, 0x73, 0x73, 0x68, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x77, 0x69, 0x74, 0x68, 0x53, 0x73, 0x68, 0x12, 0x3e, 0x0a,
	0x0a, 0x65, 0x78, 0x70, 0x69, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x19, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x44, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x48, 0x00, 0x52, 0x0a,
	0x65, 0x78, 0x70, 0x69, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x88, 0x01, 0x01, 0x42, 0x0d, 0x0a,
	0x0b, 0x5f, 0x65, 0x78, 0x70, 0x69, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x69, 0x0a, 0x1c,
	0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4f, 0x70,
	0x65, 0x72, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1c, 0x0a, 0x04,
	0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x72,
	0x03, 0xb0, 0x01, 0x01, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x2b, 0x0a, 0x07, 0x6f, 0x70,
	0x65, 0x72, 0x61, 0x74, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x11, 0x2e, 0x61, 0x64,
	0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x65, 0x52, 0x07,
	0x6f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x65, 0x22, 0x75, 0x0a, 0x19, 0x43, 0x6c, 0x75, 0x73, 0x74,
	0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x29, 0x0a, 0x07, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x43,
	0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x52, 0x07, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x12,
	0x2d, 0x0a, 0x08, 0x6d, 0x61, 0x63, 0x68, 0x69, 0x6e, 0x65, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x11, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x61, 0x63,
	0x68, 0x69, 0x6e, 0x65, 0x52, 0x08, 0x6d, 0x61, 0x63, 0x68, 0x69, 0x6e, 0x65, 0x73, 0x22, 0x49,
	0x0a, 0x1a, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2b, 0x0a, 0x08,
	0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0f,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x52,
	0x08, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x73, 0x22, 0x9b, 0x01, 0x0a, 0x21, 0x43, 0x6c,
	0x75, 0x73, 0x74, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x43, 0x72, 0x65, 0x64,
	0x65, 0x6e, 0x74, 0x69, 0x61, 0x6c, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x1e, 0x0a, 0x0a, 0x6b, 0x75, 0x62, 0x65, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0a, 0x6b, 0x75, 0x62, 0x65, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x12,
	0x35, 0x0a, 0x0b, 0x73, 0x73, 0x68, 0x5f, 0x6b, 0x65, 0x79, 0x70, 0x61, 0x69, 0x72, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e,
	0x53, 0x53, 0x48, 0x4b, 0x65, 0x79, 0x50, 0x61, 0x69, 0x72, 0x52, 0x0a, 0x73, 0x73, 0x68, 0x4b,
	0x65, 0x79, 0x70, 0x61, 0x69, 0x72, 0x12, 0x1f, 0x0a, 0x03, 0x76, 0x70, 0x6e, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x0d, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x56,
	0x50, 0x4e, 0x52, 0x03, 0x76, 0x70, 0x6e, 0x22, 0x4a, 0x0a, 0x1d, 0x43, 0x6c, 0x75, 0x73, 0x74,
	0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x29, 0x0a, 0x07, 0x63, 0x6c, 0x75, 0x73,
	0x74, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x31, 0x2e, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x52, 0x07, 0x63, 0x6c, 0x75, 0x73,
	0x74, 0x65, 0x72, 0x22, 0x4a, 0x0a, 0x0a, 0x53, 0x53, 0x48, 0x4b, 0x65, 0x79, 0x50, 0x61, 0x69,
	0x72, 0x12, 0x1c, 0x0a, 0x09, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x6b, 0x65, 0x79, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0c, 0x52, 0x09, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x6b, 0x65, 0x79, 0x12,
	0x1e, 0x0a, 0x0a, 0x70, 0x72, 0x69, 0x76, 0x61, 0x74, 0x65, 0x6b, 0x65, 0x79, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0c, 0x52, 0x0a, 0x70, 0x72, 0x69, 0x76, 0x61, 0x74, 0x65, 0x6b, 0x65, 0x79, 0x2a,
	0x62, 0x0a, 0x07, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x65, 0x12, 0x17, 0x0a, 0x13, 0x4f, 0x50,
	0x45, 0x52, 0x41, 0x54, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45,
	0x44, 0x10, 0x00, 0x12, 0x15, 0x0a, 0x11, 0x4f, 0x50, 0x45, 0x52, 0x41, 0x54, 0x45, 0x5f, 0x52,
	0x45, 0x43, 0x4f, 0x4e, 0x43, 0x49, 0x4c, 0x45, 0x10, 0x01, 0x12, 0x14, 0x0a, 0x10, 0x4f, 0x50,
	0x45, 0x52, 0x41, 0x54, 0x45, 0x5f, 0x4d, 0x41, 0x49, 0x4e, 0x54, 0x41, 0x49, 0x4e, 0x10, 0x02,
	0x12, 0x11, 0x0a, 0x0d, 0x4f, 0x50, 0x45, 0x52, 0x41, 0x54, 0x45, 0x5f, 0x52, 0x45, 0x54, 0x52,
	0x59, 0x10, 0x03, 0x32, 0x97, 0x03, 0x0a, 0x0e, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x58, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x22, 0x2e,
	0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x23, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x6c, 0x75,
	0x73, 0x74, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x08, 0xd0, 0xf3, 0x18, 0x01, 0xd0, 0xf3, 0x18, 0x02,
	0x12, 0x5b, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x23, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e,
	0x2e, 0x76, 0x31, 0x2e, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e,
	0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x08, 0xd0, 0xf3, 0x18, 0x01, 0xd0, 0xf3, 0x18, 0x02, 0x12, 0x6c, 0x0a,
	0x0b, 0x43, 0x72, 0x65, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x61, 0x6c, 0x73, 0x12, 0x2a, 0x2e, 0x61,
	0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x43, 0x72, 0x65, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x61, 0x6c,
	0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2b, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e,
	0x2e, 0x76, 0x31, 0x2e, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x43, 0x72, 0x65, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x61, 0x6c, 0x73, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x04, 0xd0, 0xf3, 0x18, 0x01, 0x12, 0x60, 0x0a, 0x07, 0x4f,
	0x70, 0x65, 0x72, 0x61, 0x74, 0x65, 0x12, 0x26, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76,
	0x31, 0x2e, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x27,
	0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65,
	0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x65, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x04, 0xd0, 0xf3, 0x18, 0x01, 0x42, 0x93, 0x01,
	0x0a, 0x0c, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x42, 0x0c,
	0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x34,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x6c,
	0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2d, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31, 0x3b, 0x61, 0x64, 0x6d,
	0x69, 0x6e, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x08, 0x41, 0x64, 0x6d,
	0x69, 0x6e, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x08, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x5c, 0x56, 0x31,
	0xe2, 0x02, 0x14, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x09, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x3a,
	0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_admin_v1_cluster_proto_rawDescOnce sync.Once
	file_admin_v1_cluster_proto_rawDescData = file_admin_v1_cluster_proto_rawDesc
)

func file_admin_v1_cluster_proto_rawDescGZIP() []byte {
	file_admin_v1_cluster_proto_rawDescOnce.Do(func() {
		file_admin_v1_cluster_proto_rawDescData = protoimpl.X.CompressGZIP(file_admin_v1_cluster_proto_rawDescData)
	})
	return file_admin_v1_cluster_proto_rawDescData
}

var file_admin_v1_cluster_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_admin_v1_cluster_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_admin_v1_cluster_proto_goTypes = []interface{}{
	(Operate)(0),                              // 0: admin.v1.Operate
	(*ClusterServiceGetRequest)(nil),          // 1: admin.v1.ClusterServiceGetRequest
	(*ClusterServiceListRequest)(nil),         // 2: admin.v1.ClusterServiceListRequest
	(*ClusterServiceCredentialsRequest)(nil),  // 3: admin.v1.ClusterServiceCredentialsRequest
	(*ClusterServiceOperateRequest)(nil),      // 4: admin.v1.ClusterServiceOperateRequest
	(*ClusterServiceGetResponse)(nil),         // 5: admin.v1.ClusterServiceGetResponse
	(*ClusterServiceListResponse)(nil),        // 6: admin.v1.ClusterServiceListResponse
	(*ClusterServiceCredentialsResponse)(nil), // 7: admin.v1.ClusterServiceCredentialsResponse
	(*ClusterServiceOperateResponse)(nil),     // 8: admin.v1.ClusterServiceOperateResponse
	(*SSHKeyPair)(nil),                        // 9: admin.v1.SSHKeyPair
	nil,                                       // 10: admin.v1.ClusterServiceListRequest.LabelsEntry
	(*durationpb.Duration)(nil),               // 11: google.protobuf.Duration
	(*v1.Cluster)(nil),                        // 12: api.v1.Cluster
	(*Machine)(nil),                           // 13: admin.v1.Machine
	(*VPN)(nil),                               // 14: admin.v1.VPN
}
var file_admin_v1_cluster_proto_depIdxs = []int32{
	10, // 0: admin.v1.ClusterServiceListRequest.labels:type_name -> admin.v1.ClusterServiceListRequest.LabelsEntry
	11, // 1: admin.v1.ClusterServiceCredentialsRequest.expiration:type_name -> google.protobuf.Duration
	0,  // 2: admin.v1.ClusterServiceOperateRequest.operate:type_name -> admin.v1.Operate
	12, // 3: admin.v1.ClusterServiceGetResponse.cluster:type_name -> api.v1.Cluster
	13, // 4: admin.v1.ClusterServiceGetResponse.machines:type_name -> admin.v1.Machine
	12, // 5: admin.v1.ClusterServiceListResponse.clusters:type_name -> api.v1.Cluster
	9,  // 6: admin.v1.ClusterServiceCredentialsResponse.ssh_keypair:type_name -> admin.v1.SSHKeyPair
	14, // 7: admin.v1.ClusterServiceCredentialsResponse.vpn:type_name -> admin.v1.VPN
	12, // 8: admin.v1.ClusterServiceOperateResponse.cluster:type_name -> api.v1.Cluster
	1,  // 9: admin.v1.ClusterService.Get:input_type -> admin.v1.ClusterServiceGetRequest
	2,  // 10: admin.v1.ClusterService.List:input_type -> admin.v1.ClusterServiceListRequest
	3,  // 11: admin.v1.ClusterService.Credentials:input_type -> admin.v1.ClusterServiceCredentialsRequest
	4,  // 12: admin.v1.ClusterService.Operate:input_type -> admin.v1.ClusterServiceOperateRequest
	5,  // 13: admin.v1.ClusterService.Get:output_type -> admin.v1.ClusterServiceGetResponse
	6,  // 14: admin.v1.ClusterService.List:output_type -> admin.v1.ClusterServiceListResponse
	7,  // 15: admin.v1.ClusterService.Credentials:output_type -> admin.v1.ClusterServiceCredentialsResponse
	8,  // 16: admin.v1.ClusterService.Operate:output_type -> admin.v1.ClusterServiceOperateResponse
	13, // [13:17] is the sub-list for method output_type
	9,  // [9:13] is the sub-list for method input_type
	9,  // [9:9] is the sub-list for extension type_name
	9,  // [9:9] is the sub-list for extension extendee
	0,  // [0:9] is the sub-list for field type_name
}

func init() { file_admin_v1_cluster_proto_init() }
func file_admin_v1_cluster_proto_init() {
	if File_admin_v1_cluster_proto != nil {
		return
	}
	file_admin_v1_machine_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_admin_v1_cluster_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ClusterServiceGetRequest); i {
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
		file_admin_v1_cluster_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ClusterServiceListRequest); i {
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
		file_admin_v1_cluster_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ClusterServiceCredentialsRequest); i {
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
		file_admin_v1_cluster_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ClusterServiceOperateRequest); i {
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
		file_admin_v1_cluster_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ClusterServiceGetResponse); i {
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
		file_admin_v1_cluster_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ClusterServiceListResponse); i {
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
		file_admin_v1_cluster_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ClusterServiceCredentialsResponse); i {
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
		file_admin_v1_cluster_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ClusterServiceOperateResponse); i {
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
		file_admin_v1_cluster_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SSHKeyPair); i {
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
	file_admin_v1_cluster_proto_msgTypes[1].OneofWrappers = []interface{}{}
	file_admin_v1_cluster_proto_msgTypes[2].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_admin_v1_cluster_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_admin_v1_cluster_proto_goTypes,
		DependencyIndexes: file_admin_v1_cluster_proto_depIdxs,
		EnumInfos:         file_admin_v1_cluster_proto_enumTypes,
		MessageInfos:      file_admin_v1_cluster_proto_msgTypes,
	}.Build()
	File_admin_v1_cluster_proto = out.File
	file_admin_v1_cluster_proto_rawDesc = nil
	file_admin_v1_cluster_proto_goTypes = nil
	file_admin_v1_cluster_proto_depIdxs = nil
}
