// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: api/v1/methods.proto

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

// MethodServiceListRequest is the request payload to list all public methods
type MethodServiceListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *MethodServiceListRequest) Reset() {
	*x = MethodServiceListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_methods_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MethodServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MethodServiceListRequest) ProtoMessage() {}

func (x *MethodServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_methods_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MethodServiceListRequest.ProtoReflect.Descriptor instead.
func (*MethodServiceListRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_methods_proto_rawDescGZIP(), []int{0}
}

// MethodServiceListResponse is the response payload with all public visible methods
type MethodServiceListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Methods is a list of methods public callable
	Methods []string `protobuf:"bytes,1,rep,name=methods,proto3" json:"methods,omitempty"`
}

func (x *MethodServiceListResponse) Reset() {
	*x = MethodServiceListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_methods_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MethodServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MethodServiceListResponse) ProtoMessage() {}

func (x *MethodServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_methods_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MethodServiceListResponse.ProtoReflect.Descriptor instead.
func (*MethodServiceListResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_methods_proto_rawDescGZIP(), []int{1}
}

func (x *MethodServiceListResponse) GetMethods() []string {
	if x != nil {
		return x.Methods
	}
	return nil
}

// MethodServiceTokenScopedListRequest is the request payload to list all methods callable with the token present in the request
type MethodServiceTokenScopedListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *MethodServiceTokenScopedListRequest) Reset() {
	*x = MethodServiceTokenScopedListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_methods_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MethodServiceTokenScopedListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MethodServiceTokenScopedListRequest) ProtoMessage() {}

func (x *MethodServiceTokenScopedListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_methods_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MethodServiceTokenScopedListRequest.ProtoReflect.Descriptor instead.
func (*MethodServiceTokenScopedListRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_methods_proto_rawDescGZIP(), []int{2}
}

// MethodServiceTokenScopedListResponse is the response payload which contains all methods which are callable with the given token
type MethodServiceTokenScopedListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Permissions a list of methods which can be called
	Permissions []*MethodPermission `protobuf:"bytes,1,rep,name=permissions,proto3" json:"permissions,omitempty"`
	// Roles a list of roles the presented token contains
	Roles []*TokenRole `protobuf:"bytes,2,rep,name=roles,proto3" json:"roles,omitempty"`
}

func (x *MethodServiceTokenScopedListResponse) Reset() {
	*x = MethodServiceTokenScopedListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_methods_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MethodServiceTokenScopedListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MethodServiceTokenScopedListResponse) ProtoMessage() {}

func (x *MethodServiceTokenScopedListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_methods_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MethodServiceTokenScopedListResponse.ProtoReflect.Descriptor instead.
func (*MethodServiceTokenScopedListResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_methods_proto_rawDescGZIP(), []int{3}
}

func (x *MethodServiceTokenScopedListResponse) GetPermissions() []*MethodPermission {
	if x != nil {
		return x.Permissions
	}
	return nil
}

func (x *MethodServiceTokenScopedListResponse) GetRoles() []*TokenRole {
	if x != nil {
		return x.Roles
	}
	return nil
}

var File_api_v1_methods_proto protoreflect.FileDescriptor

var file_api_v1_methods_proto_rawDesc = []byte{
	0x0a, 0x14, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x1a, 0x13,
	0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x6f, 0x6b, 0x65,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x1a, 0x0a, 0x18, 0x4d, 0x65, 0x74, 0x68, 0x6f,
	0x64, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x22, 0x35, 0x0a, 0x19, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28,
	0x09, 0x52, 0x07, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x73, 0x22, 0x25, 0x0a, 0x23, 0x4d, 0x65,
	0x74, 0x68, 0x6f, 0x64, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e,
	0x53, 0x63, 0x6f, 0x70, 0x65, 0x64, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x22, 0x8b, 0x01, 0x0a, 0x24, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x53, 0x63, 0x6f, 0x70, 0x65, 0x64, 0x4c, 0x69,
	0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3a, 0x0a, 0x0b, 0x70, 0x65,
	0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x18, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x50,
	0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x0b, 0x70, 0x65, 0x72, 0x6d, 0x69,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x27, 0x0a, 0x05, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x18,
	0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x05, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x32,
	0xd6, 0x01, 0x0a, 0x0d, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x12, 0x51, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x20, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x31, 0x2e, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x04,
	0xd8, 0xf3, 0x18, 0x01, 0x12, 0x72, 0x0a, 0x0f, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x53, 0x63, 0x6f,
	0x70, 0x65, 0x64, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x2b, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31,
	0x2e, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x54, 0x6f,
	0x6b, 0x65, 0x6e, 0x53, 0x63, 0x6f, 0x70, 0x65, 0x64, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x65,
	0x74, 0x68, 0x6f, 0x64, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e,
	0x53, 0x63, 0x6f, 0x70, 0x65, 0x64, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x04, 0xd8, 0xf3, 0x18, 0x03, 0x42, 0x85, 0x01, 0x0a, 0x0a, 0x63, 0x6f, 0x6d,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x42, 0x0c, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x73,
	0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x30, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2d,
	0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x76, 0x31, 0x3b, 0x61, 0x70, 0x69, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa,
	0x02, 0x06, 0x41, 0x70, 0x69, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x06, 0x41, 0x70, 0x69, 0x5c, 0x56,
	0x31, 0xe2, 0x02, 0x12, 0x41, 0x70, 0x69, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x07, 0x41, 0x70, 0x69, 0x3a, 0x3a, 0x56, 0x31,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_v1_methods_proto_rawDescOnce sync.Once
	file_api_v1_methods_proto_rawDescData = file_api_v1_methods_proto_rawDesc
)

func file_api_v1_methods_proto_rawDescGZIP() []byte {
	file_api_v1_methods_proto_rawDescOnce.Do(func() {
		file_api_v1_methods_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_v1_methods_proto_rawDescData)
	})
	return file_api_v1_methods_proto_rawDescData
}

var file_api_v1_methods_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_api_v1_methods_proto_goTypes = []interface{}{
	(*MethodServiceListRequest)(nil),             // 0: api.v1.MethodServiceListRequest
	(*MethodServiceListResponse)(nil),            // 1: api.v1.MethodServiceListResponse
	(*MethodServiceTokenScopedListRequest)(nil),  // 2: api.v1.MethodServiceTokenScopedListRequest
	(*MethodServiceTokenScopedListResponse)(nil), // 3: api.v1.MethodServiceTokenScopedListResponse
	(*MethodPermission)(nil),                     // 4: api.v1.MethodPermission
	(*TokenRole)(nil),                            // 5: api.v1.TokenRole
}
var file_api_v1_methods_proto_depIdxs = []int32{
	4, // 0: api.v1.MethodServiceTokenScopedListResponse.permissions:type_name -> api.v1.MethodPermission
	5, // 1: api.v1.MethodServiceTokenScopedListResponse.roles:type_name -> api.v1.TokenRole
	0, // 2: api.v1.MethodService.List:input_type -> api.v1.MethodServiceListRequest
	2, // 3: api.v1.MethodService.TokenScopedList:input_type -> api.v1.MethodServiceTokenScopedListRequest
	1, // 4: api.v1.MethodService.List:output_type -> api.v1.MethodServiceListResponse
	3, // 5: api.v1.MethodService.TokenScopedList:output_type -> api.v1.MethodServiceTokenScopedListResponse
	4, // [4:6] is the sub-list for method output_type
	2, // [2:4] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_api_v1_methods_proto_init() }
func file_api_v1_methods_proto_init() {
	if File_api_v1_methods_proto != nil {
		return
	}
	file_api_v1_common_proto_init()
	file_api_v1_token_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_api_v1_methods_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MethodServiceListRequest); i {
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
		file_api_v1_methods_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MethodServiceListResponse); i {
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
		file_api_v1_methods_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MethodServiceTokenScopedListRequest); i {
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
		file_api_v1_methods_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MethodServiceTokenScopedListResponse); i {
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
			RawDescriptor: file_api_v1_methods_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_api_v1_methods_proto_goTypes,
		DependencyIndexes: file_api_v1_methods_proto_depIdxs,
		MessageInfos:      file_api_v1_methods_proto_msgTypes,
	}.Build()
	File_api_v1_methods_proto = out.File
	file_api_v1_methods_proto_rawDesc = nil
	file_api_v1_methods_proto_goTypes = nil
	file_api_v1_methods_proto_depIdxs = nil
}
