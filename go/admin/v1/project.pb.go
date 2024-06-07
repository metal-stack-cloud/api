// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.1
// 	protoc        (unknown)
// source: admin/v1/project.proto

package adminv1

import (
	v1 "github.com/metal-stack-cloud/api/go/api/v1"
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

// ProjectServiceListRequest is the request payload for the project list request
type ProjectServiceListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Paging details for the list request
	Paging *v1.Paging `protobuf:"bytes,1,opt,name=paging,proto3" json:"paging,omitempty"`
}

func (x *ProjectServiceListRequest) Reset() {
	*x = ProjectServiceListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_project_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectServiceListRequest) ProtoMessage() {}

func (x *ProjectServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_project_proto_msgTypes[0]
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
	return file_admin_v1_project_proto_rawDescGZIP(), []int{0}
}

func (x *ProjectServiceListRequest) GetPaging() *v1.Paging {
	if x != nil {
		return x.Paging
	}
	return nil
}

// ProjectServiceListResponse is the response payload for the project list request
type ProjectServiceListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Projects is the list of projects that match the filters
	Projects []*v1.Project `protobuf:"bytes,1,rep,name=projects,proto3" json:"projects,omitempty"`
	// NextPage is used for pagination, returns the next page to be fetched and must then be provided in the list request.
	NextPage *uint64 `protobuf:"varint,2,opt,name=next_page,json=nextPage,proto3,oneof" json:"next_page,omitempty"`
}

func (x *ProjectServiceListResponse) Reset() {
	*x = ProjectServiceListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_project_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectServiceListResponse) ProtoMessage() {}

func (x *ProjectServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_project_proto_msgTypes[1]
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
	return file_admin_v1_project_proto_rawDescGZIP(), []int{1}
}

func (x *ProjectServiceListResponse) GetProjects() []*v1.Project {
	if x != nil {
		return x.Projects
	}
	return nil
}

func (x *ProjectServiceListResponse) GetNextPage() uint64 {
	if x != nil && x.NextPage != nil {
		return *x.NextPage
	}
	return 0
}

var File_admin_v1_project_proto protoreflect.FileDescriptor

var file_admin_v1_project_proto_rawDesc = []byte{
	0x0a, 0x16, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x72, 0x6f, 0x6a, 0x65,
	0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e,
	0x76, 0x31, 0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x14, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f,
	0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x43, 0x0a,
	0x19, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c,
	0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x26, 0x0a, 0x06, 0x70, 0x61,
	0x67, 0x69, 0x6e, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x31, 0x2e, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x67, 0x52, 0x06, 0x70, 0x61, 0x67, 0x69,
	0x6e, 0x67, 0x22, 0x79, 0x0a, 0x1a, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x2b, 0x0a, 0x08, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x52, 0x08, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x12, 0x20, 0x0a,
	0x09, 0x6e, 0x65, 0x78, 0x74, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04,
	0x48, 0x00, 0x52, 0x08, 0x6e, 0x65, 0x78, 0x74, 0x50, 0x61, 0x67, 0x65, 0x88, 0x01, 0x01, 0x42,
	0x0c, 0x0a, 0x0a, 0x5f, 0x6e, 0x65, 0x78, 0x74, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x32, 0x6b, 0x0a,
	0x0e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x59, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x23, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e,
	0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x61,
	0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x06, 0xd2, 0xf3, 0x18, 0x02, 0x01, 0x02, 0x42, 0x93, 0x01, 0x0a, 0x0c, 0x63,
	0x6f, 0x6d, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x42, 0x0c, 0x50, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x34, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x6c, 0x2d, 0x73, 0x74,
	0x61, 0x63, 0x6b, 0x2d, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f,
	0x2f, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31, 0x3b, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x76,
	0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x08, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x2e,
	0x56, 0x31, 0xca, 0x02, 0x08, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x14,
	0x41, 0x64, 0x6d, 0x69, 0x6e, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x09, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x3a, 0x3a, 0x56, 0x31,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_admin_v1_project_proto_rawDescOnce sync.Once
	file_admin_v1_project_proto_rawDescData = file_admin_v1_project_proto_rawDesc
)

func file_admin_v1_project_proto_rawDescGZIP() []byte {
	file_admin_v1_project_proto_rawDescOnce.Do(func() {
		file_admin_v1_project_proto_rawDescData = protoimpl.X.CompressGZIP(file_admin_v1_project_proto_rawDescData)
	})
	return file_admin_v1_project_proto_rawDescData
}

var file_admin_v1_project_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_admin_v1_project_proto_goTypes = []interface{}{
	(*ProjectServiceListRequest)(nil),  // 0: admin.v1.ProjectServiceListRequest
	(*ProjectServiceListResponse)(nil), // 1: admin.v1.ProjectServiceListResponse
	(*v1.Paging)(nil),                  // 2: api.v1.Paging
	(*v1.Project)(nil),                 // 3: api.v1.Project
}
var file_admin_v1_project_proto_depIdxs = []int32{
	2, // 0: admin.v1.ProjectServiceListRequest.paging:type_name -> api.v1.Paging
	3, // 1: admin.v1.ProjectServiceListResponse.projects:type_name -> api.v1.Project
	0, // 2: admin.v1.ProjectService.List:input_type -> admin.v1.ProjectServiceListRequest
	1, // 3: admin.v1.ProjectService.List:output_type -> admin.v1.ProjectServiceListResponse
	3, // [3:4] is the sub-list for method output_type
	2, // [2:3] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_admin_v1_project_proto_init() }
func file_admin_v1_project_proto_init() {
	if File_admin_v1_project_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_admin_v1_project_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
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
		file_admin_v1_project_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
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
	}
	file_admin_v1_project_proto_msgTypes[1].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_admin_v1_project_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_admin_v1_project_proto_goTypes,
		DependencyIndexes: file_admin_v1_project_proto_depIdxs,
		MessageInfos:      file_admin_v1_project_proto_msgTypes,
	}.Build()
	File_admin_v1_project_proto = out.File
	file_admin_v1_project_proto_rawDesc = nil
	file_admin_v1_project_proto_goTypes = nil
	file_admin_v1_project_proto_depIdxs = nil
}
