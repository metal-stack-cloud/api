// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: admin/v1/token.proto

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

type TokenServiceListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *TokenServiceListRequest) Reset() {
	*x = TokenServiceListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_token_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TokenServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TokenServiceListRequest) ProtoMessage() {}

func (x *TokenServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_token_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TokenServiceListRequest.ProtoReflect.Descriptor instead.
func (*TokenServiceListRequest) Descriptor() ([]byte, []int) {
	return file_admin_v1_token_proto_rawDescGZIP(), []int{0}
}

type TokenServiceListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Tokens []*v1.Token `protobuf:"bytes,1,rep,name=tokens,proto3" json:"tokens,omitempty"`
}

func (x *TokenServiceListResponse) Reset() {
	*x = TokenServiceListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_token_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TokenServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TokenServiceListResponse) ProtoMessage() {}

func (x *TokenServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_token_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TokenServiceListResponse.ProtoReflect.Descriptor instead.
func (*TokenServiceListResponse) Descriptor() ([]byte, []int) {
	return file_admin_v1_token_proto_rawDescGZIP(), []int{1}
}

func (x *TokenServiceListResponse) GetTokens() []*v1.Token {
	if x != nil {
		return x.Tokens
	}
	return nil
}

type TokenServiceRevokeRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *TokenServiceRevokeRequest) Reset() {
	*x = TokenServiceRevokeRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_token_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TokenServiceRevokeRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TokenServiceRevokeRequest) ProtoMessage() {}

func (x *TokenServiceRevokeRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_token_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TokenServiceRevokeRequest.ProtoReflect.Descriptor instead.
func (*TokenServiceRevokeRequest) Descriptor() ([]byte, []int) {
	return file_admin_v1_token_proto_rawDescGZIP(), []int{2}
}

func (x *TokenServiceRevokeRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

type TokenServiceRevokeResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *TokenServiceRevokeResponse) Reset() {
	*x = TokenServiceRevokeResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_token_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TokenServiceRevokeResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TokenServiceRevokeResponse) ProtoMessage() {}

func (x *TokenServiceRevokeResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_token_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TokenServiceRevokeResponse.ProtoReflect.Descriptor instead.
func (*TokenServiceRevokeResponse) Descriptor() ([]byte, []int) {
	return file_admin_v1_token_proto_rawDescGZIP(), []int{3}
}

var File_admin_v1_token_proto protoreflect.FileDescriptor

var file_admin_v1_token_proto_rawDesc = []byte{
	0x0a, 0x14, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31,
	0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x6f,
	0x6b, 0x65, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x19, 0x0a, 0x17, 0x54, 0x6f, 0x6b,
	0x65, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x22, 0x41, 0x0a, 0x18, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x25, 0x0a, 0x06, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x0d, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52,
	0x06, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x22, 0x2f, 0x0a, 0x19, 0x54, 0x6f, 0x6b, 0x65, 0x6e,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x22, 0x1c, 0x0a, 0x1a, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x32, 0xc6, 0x01, 0x0a, 0x0c, 0x54, 0x6f, 0x6b, 0x65, 0x6e,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x57, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12,
	0x21, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x22, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x6f,
	0x6b, 0x65, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x08, 0xd0, 0xf3, 0x18, 0x01, 0xd0, 0xf3, 0x18, 0x02,
	0x12, 0x5d, 0x0a, 0x06, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x12, 0x23, 0x2e, 0x61, 0x64, 0x6d,
	0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x24, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x08, 0xd0, 0xf3, 0x18, 0x01, 0xd0, 0xf3, 0x18, 0x02, 0x42,
	0x91, 0x01, 0x0a, 0x0c, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31,
	0x42, 0x0a, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x34,
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
	file_admin_v1_token_proto_rawDescOnce sync.Once
	file_admin_v1_token_proto_rawDescData = file_admin_v1_token_proto_rawDesc
)

func file_admin_v1_token_proto_rawDescGZIP() []byte {
	file_admin_v1_token_proto_rawDescOnce.Do(func() {
		file_admin_v1_token_proto_rawDescData = protoimpl.X.CompressGZIP(file_admin_v1_token_proto_rawDescData)
	})
	return file_admin_v1_token_proto_rawDescData
}

var file_admin_v1_token_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_admin_v1_token_proto_goTypes = []interface{}{
	(*TokenServiceListRequest)(nil),    // 0: admin.v1.TokenServiceListRequest
	(*TokenServiceListResponse)(nil),   // 1: admin.v1.TokenServiceListResponse
	(*TokenServiceRevokeRequest)(nil),  // 2: admin.v1.TokenServiceRevokeRequest
	(*TokenServiceRevokeResponse)(nil), // 3: admin.v1.TokenServiceRevokeResponse
	(*v1.Token)(nil),                   // 4: api.v1.Token
}
var file_admin_v1_token_proto_depIdxs = []int32{
	4, // 0: admin.v1.TokenServiceListResponse.tokens:type_name -> api.v1.Token
	0, // 1: admin.v1.TokenService.List:input_type -> admin.v1.TokenServiceListRequest
	2, // 2: admin.v1.TokenService.Revoke:input_type -> admin.v1.TokenServiceRevokeRequest
	1, // 3: admin.v1.TokenService.List:output_type -> admin.v1.TokenServiceListResponse
	3, // 4: admin.v1.TokenService.Revoke:output_type -> admin.v1.TokenServiceRevokeResponse
	3, // [3:5] is the sub-list for method output_type
	1, // [1:3] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_admin_v1_token_proto_init() }
func file_admin_v1_token_proto_init() {
	if File_admin_v1_token_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_admin_v1_token_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TokenServiceListRequest); i {
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
		file_admin_v1_token_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TokenServiceListResponse); i {
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
		file_admin_v1_token_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TokenServiceRevokeRequest); i {
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
		file_admin_v1_token_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TokenServiceRevokeResponse); i {
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
			RawDescriptor: file_admin_v1_token_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_admin_v1_token_proto_goTypes,
		DependencyIndexes: file_admin_v1_token_proto_depIdxs,
		MessageInfos:      file_admin_v1_token_proto_msgTypes,
	}.Build()
	File_admin_v1_token_proto = out.File
	file_admin_v1_token_proto_rawDesc = nil
	file_admin_v1_token_proto_goTypes = nil
	file_admin_v1_token_proto_depIdxs = nil
}
