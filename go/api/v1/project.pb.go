// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: api/v1/project.proto

package apiv1

import (
	_ "github.com/envoyproxy/protoc-gen-validate/validate"
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

// ProjectServiceWatchRevisionRequest starts the stream of projectrevisions
type ProjectServiceWatchRevisionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// project to watch for changes
	Project string `protobuf:"bytes,2,opt,name=project,proto3" json:"project,omitempty"`
}

func (x *ProjectServiceWatchRevisionRequest) Reset() {
	*x = ProjectServiceWatchRevisionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_project_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectServiceWatchRevisionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectServiceWatchRevisionRequest) ProtoMessage() {}

func (x *ProjectServiceWatchRevisionRequest) ProtoReflect() protoreflect.Message {
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

// Deprecated: Use ProjectServiceWatchRevisionRequest.ProtoReflect.Descriptor instead.
func (*ProjectServiceWatchRevisionRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_project_proto_rawDescGZIP(), []int{0}
}

func (x *ProjectServiceWatchRevisionRequest) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

// ProjectServiceWatchRevisionResponse is returned in the stream
type ProjectServiceWatchRevisionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the project this watch is ment for
	Project string `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
	// revision is incremented if any of the resources from the project has changed
	Revision uint64 `protobuf:"varint,2,opt,name=revision,proto3" json:"revision,omitempty"`
	// resources show the revision per resource to have a more granular view.
	Resources *ResourceRevisions `protobuf:"bytes,3,opt,name=resources,proto3" json:"resources,omitempty"`
}

func (x *ProjectServiceWatchRevisionResponse) Reset() {
	*x = ProjectServiceWatchRevisionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_project_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectServiceWatchRevisionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectServiceWatchRevisionResponse) ProtoMessage() {}

func (x *ProjectServiceWatchRevisionResponse) ProtoReflect() protoreflect.Message {
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

// Deprecated: Use ProjectServiceWatchRevisionResponse.ProtoReflect.Descriptor instead.
func (*ProjectServiceWatchRevisionResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_project_proto_rawDescGZIP(), []int{1}
}

func (x *ProjectServiceWatchRevisionResponse) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

func (x *ProjectServiceWatchRevisionResponse) GetRevision() uint64 {
	if x != nil {
		return x.Revision
	}
	return 0
}

func (x *ProjectServiceWatchRevisionResponse) GetResources() *ResourceRevisions {
	if x != nil {
		return x.Resources
	}
	return nil
}

// ResourceRevisions contain revisions by resource
type ResourceRevisions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// cluster revision is incremented if anything changed on the projects clusters.
	Cluster uint64 `protobuf:"varint,1,opt,name=cluster,proto3" json:"cluster,omitempty"`
	// volume revision is incremented if anything changed on the projects volumes.
	Volume uint64 `protobuf:"varint,2,opt,name=volume,proto3" json:"volume,omitempty"`
	// ip revision is incremented if anything changed on the projects ips.
	Ip uint64 `protobuf:"varint,3,opt,name=ip,proto3" json:"ip,omitempty"`
}

func (x *ResourceRevisions) Reset() {
	*x = ResourceRevisions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_project_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResourceRevisions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResourceRevisions) ProtoMessage() {}

func (x *ResourceRevisions) ProtoReflect() protoreflect.Message {
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

// Deprecated: Use ResourceRevisions.ProtoReflect.Descriptor instead.
func (*ResourceRevisions) Descriptor() ([]byte, []int) {
	return file_api_v1_project_proto_rawDescGZIP(), []int{2}
}

func (x *ResourceRevisions) GetCluster() uint64 {
	if x != nil {
		return x.Cluster
	}
	return 0
}

func (x *ResourceRevisions) GetVolume() uint64 {
	if x != nil {
		return x.Volume
	}
	return 0
}

func (x *ResourceRevisions) GetIp() uint64 {
	if x != nil {
		return x.Ip
	}
	return 0
}

var File_api_v1_project_proto protoreflect.FileDescriptor

var file_api_v1_project_proto_rawDesc = []byte{
	0x0a, 0x14, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x1a, 0x13,
	0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76, 0x61,
	0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x4a, 0x0a, 0x22,
	0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x57, 0x61,
	0x74, 0x63, 0x68, 0x52, 0x65, 0x76, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x24, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05, 0x10, 0x02, 0x18, 0x80, 0x01, 0x52,
	0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x22, 0x94, 0x01, 0x0a, 0x23, 0x50, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x57, 0x61, 0x74, 0x63, 0x68,
	0x52, 0x65, 0x76, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x18, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x12, 0x1a, 0x0a, 0x08, 0x72, 0x65,
	0x76, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x08, 0x72, 0x65,
	0x76, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x37, 0x0a, 0x09, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72,
	0x63, 0x65, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x31, 0x2e, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x52, 0x65, 0x76, 0x69, 0x73,
	0x69, 0x6f, 0x6e, 0x73, 0x52, 0x09, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x22,
	0x55, 0x0a, 0x11, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x52, 0x65, 0x76, 0x69, 0x73,
	0x69, 0x6f, 0x6e, 0x73, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x07, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x12, 0x16,
	0x0a, 0x06, 0x76, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x06,
	0x76, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x70, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x04, 0x52, 0x02, 0x69, 0x70, 0x32, 0x8a, 0x01, 0x0a, 0x0e, 0x50, 0x72, 0x6f, 0x6a, 0x65,
	0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x78, 0x0a, 0x0d, 0x57, 0x61, 0x74,
	0x63, 0x68, 0x52, 0x65, 0x76, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x2a, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x57, 0x61, 0x74, 0x63, 0x68, 0x52, 0x65, 0x76, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2b, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e,
	0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x57, 0x61,
	0x74, 0x63, 0x68, 0x52, 0x65, 0x76, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x0c, 0xc8, 0xf3, 0x18, 0x01, 0xc8, 0xf3, 0x18, 0x02, 0xc8, 0xf3, 0x18,
	0x03, 0x30, 0x01, 0x42, 0x85, 0x01, 0x0a, 0x0a, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x31, 0x42, 0x0c, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x50, 0x01, 0x5a, 0x30, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d,
	0x65, 0x74, 0x61, 0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2d, 0x63, 0x6c, 0x6f, 0x75, 0x64,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x3b, 0x61,
	0x70, 0x69, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x06, 0x41, 0x70, 0x69,
	0x2e, 0x56, 0x31, 0xca, 0x02, 0x06, 0x41, 0x70, 0x69, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x12, 0x41,
	0x70, 0x69, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0xea, 0x02, 0x07, 0x41, 0x70, 0x69, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
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

var file_api_v1_project_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_api_v1_project_proto_goTypes = []interface{}{
	(*ProjectServiceWatchRevisionRequest)(nil),  // 0: api.v1.ProjectServiceWatchRevisionRequest
	(*ProjectServiceWatchRevisionResponse)(nil), // 1: api.v1.ProjectServiceWatchRevisionResponse
	(*ResourceRevisions)(nil),                   // 2: api.v1.ResourceRevisions
}
var file_api_v1_project_proto_depIdxs = []int32{
	2, // 0: api.v1.ProjectServiceWatchRevisionResponse.resources:type_name -> api.v1.ResourceRevisions
	0, // 1: api.v1.ProjectService.WatchRevision:input_type -> api.v1.ProjectServiceWatchRevisionRequest
	1, // 2: api.v1.ProjectService.WatchRevision:output_type -> api.v1.ProjectServiceWatchRevisionResponse
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_api_v1_project_proto_init() }
func file_api_v1_project_proto_init() {
	if File_api_v1_project_proto != nil {
		return
	}
	file_api_v1_common_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_api_v1_project_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProjectServiceWatchRevisionRequest); i {
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
			switch v := v.(*ProjectServiceWatchRevisionResponse); i {
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
			switch v := v.(*ResourceRevisions); i {
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
			RawDescriptor: file_api_v1_project_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
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
