// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        (unknown)
// source: status/v1/status.proto

package statusv1

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

type StatusServiceGetRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *StatusServiceGetRequest) Reset() {
	*x = StatusServiceGetRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_status_v1_status_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StatusServiceGetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StatusServiceGetRequest) ProtoMessage() {}

func (x *StatusServiceGetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_status_v1_status_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StatusServiceGetRequest.ProtoReflect.Descriptor instead.
func (*StatusServiceGetRequest) Descriptor() ([]byte, []int) {
	return file_status_v1_status_proto_rawDescGZIP(), []int{0}
}

type StatusServiceGetResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Health           *v1.Health `protobuf:"bytes,1,opt,name=health,proto3" json:"health,omitempty"`
	ConnectionBroken bool       `protobuf:"varint,2,opt,name=connection_broken,json=connectionBroken,proto3" json:"connection_broken,omitempty"`
	ApiVersion       string     `protobuf:"bytes,3,opt,name=api_version,json=apiVersion,proto3" json:"api_version,omitempty"`
}

func (x *StatusServiceGetResponse) Reset() {
	*x = StatusServiceGetResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_status_v1_status_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StatusServiceGetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StatusServiceGetResponse) ProtoMessage() {}

func (x *StatusServiceGetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_status_v1_status_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StatusServiceGetResponse.ProtoReflect.Descriptor instead.
func (*StatusServiceGetResponse) Descriptor() ([]byte, []int) {
	return file_status_v1_status_proto_rawDescGZIP(), []int{1}
}

func (x *StatusServiceGetResponse) GetHealth() *v1.Health {
	if x != nil {
		return x.Health
	}
	return nil
}

func (x *StatusServiceGetResponse) GetConnectionBroken() bool {
	if x != nil {
		return x.ConnectionBroken
	}
	return false
}

func (x *StatusServiceGetResponse) GetApiVersion() string {
	if x != nil {
		return x.ApiVersion
	}
	return ""
}

var File_status_v1_status_proto protoreflect.FileDescriptor

var file_status_v1_status_proto_rawDesc = []byte{
	0x0a, 0x16, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2f, 0x76, 0x31, 0x2f, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x2e, 0x76, 0x31, 0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x68, 0x65, 0x61, 0x6c,
	0x74, 0x68, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x19, 0x0a, 0x17, 0x53, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x22, 0x90, 0x01, 0x0a, 0x18, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x26, 0x0a, 0x06, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68,
	0x52, 0x06, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x12, 0x2b, 0x0a, 0x11, 0x63, 0x6f, 0x6e, 0x6e,
	0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x62, 0x72, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x10, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x42,
	0x72, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x1f, 0x0a, 0x0b, 0x61, 0x70, 0x69, 0x5f, 0x76, 0x65, 0x72,
	0x73, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x61, 0x70, 0x69, 0x56,
	0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x32, 0x61, 0x0a, 0x0d, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x50, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x22,
	0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x23, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x53,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x99, 0x01, 0x0a, 0x0d, 0x63, 0x6f,
	0x6d, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x76, 0x31, 0x42, 0x0b, 0x53, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x36, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x6c, 0x2d, 0x73, 0x74, 0x61,
	0x63, 0x6b, 0x2d, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2f, 0x76, 0x31, 0x3b, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x76, 0x31, 0xa2, 0x02, 0x03, 0x53, 0x58, 0x58, 0xaa, 0x02, 0x09, 0x53, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x09, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x5c, 0x56, 0x31,
	0xe2, 0x02, 0x15, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42,
	0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0a, 0x53, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_status_v1_status_proto_rawDescOnce sync.Once
	file_status_v1_status_proto_rawDescData = file_status_v1_status_proto_rawDesc
)

func file_status_v1_status_proto_rawDescGZIP() []byte {
	file_status_v1_status_proto_rawDescOnce.Do(func() {
		file_status_v1_status_proto_rawDescData = protoimpl.X.CompressGZIP(file_status_v1_status_proto_rawDescData)
	})
	return file_status_v1_status_proto_rawDescData
}

var file_status_v1_status_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_status_v1_status_proto_goTypes = []interface{}{
	(*StatusServiceGetRequest)(nil),  // 0: status.v1.StatusServiceGetRequest
	(*StatusServiceGetResponse)(nil), // 1: status.v1.StatusServiceGetResponse
	(*v1.Health)(nil),                // 2: api.v1.Health
}
var file_status_v1_status_proto_depIdxs = []int32{
	2, // 0: status.v1.StatusServiceGetResponse.health:type_name -> api.v1.Health
	0, // 1: status.v1.StatusService.Get:input_type -> status.v1.StatusServiceGetRequest
	1, // 2: status.v1.StatusService.Get:output_type -> status.v1.StatusServiceGetResponse
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_status_v1_status_proto_init() }
func file_status_v1_status_proto_init() {
	if File_status_v1_status_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_status_v1_status_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StatusServiceGetRequest); i {
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
		file_status_v1_status_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StatusServiceGetResponse); i {
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
			RawDescriptor: file_status_v1_status_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_status_v1_status_proto_goTypes,
		DependencyIndexes: file_status_v1_status_proto_depIdxs,
		MessageInfos:      file_status_v1_status_proto_msgTypes,
	}.Build()
	File_status_v1_status_proto = out.File
	file_status_v1_status_proto_rawDesc = nil
	file_status_v1_status_proto_goTypes = nil
	file_status_v1_status_proto_depIdxs = nil
}
