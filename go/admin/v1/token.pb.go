// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.5
// 	protoc        (unknown)
// source: admin/v1/token.proto

package adminv1

import (
	_ "buf.build/gen/go/bufbuild/protovalidate/protocolbuffers/go/buf/validate"
	v1 "github.com/metal-stack-cloud/api/go/api/v1"
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

// TokenServiceListRequest is the request payload for the token list request
type TokenServiceListRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// UserId is the id of the user for which the tokens should be listed
	UserId        *string `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3,oneof" json:"user_id,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TokenServiceListRequest) Reset() {
	*x = TokenServiceListRequest{}
	mi := &file_admin_v1_token_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TokenServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TokenServiceListRequest) ProtoMessage() {}

func (x *TokenServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_token_proto_msgTypes[0]
	if x != nil {
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

func (x *TokenServiceListRequest) GetUserId() string {
	if x != nil && x.UserId != nil {
		return *x.UserId
	}
	return ""
}

// TokenServiceListResponse is the response payload for the token list request
type TokenServiceListResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Tokens is the list of tokens
	Tokens        []*v1.Token `protobuf:"bytes,1,rep,name=tokens,proto3" json:"tokens,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TokenServiceListResponse) Reset() {
	*x = TokenServiceListResponse{}
	mi := &file_admin_v1_token_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TokenServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TokenServiceListResponse) ProtoMessage() {}

func (x *TokenServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_token_proto_msgTypes[1]
	if x != nil {
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

// TokenServiceRevokeRequest is the request payload for the token revoke request
type TokenServiceRevokeRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Uuid is the uuid of the token which should be revoked
	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	// UserId is the id of the user for which the token should be revoked
	UserId        string `protobuf:"bytes,2,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TokenServiceRevokeRequest) Reset() {
	*x = TokenServiceRevokeRequest{}
	mi := &file_admin_v1_token_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TokenServiceRevokeRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TokenServiceRevokeRequest) ProtoMessage() {}

func (x *TokenServiceRevokeRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_token_proto_msgTypes[2]
	if x != nil {
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

func (x *TokenServiceRevokeRequest) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

// TokenServiceRevokeResponse is the response payload for the token revoke request
type TokenServiceRevokeResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TokenServiceRevokeResponse) Reset() {
	*x = TokenServiceRevokeResponse{}
	mi := &file_admin_v1_token_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TokenServiceRevokeResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TokenServiceRevokeResponse) ProtoMessage() {}

func (x *TokenServiceRevokeResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_token_proto_msgTypes[3]
	if x != nil {
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

var file_admin_v1_token_proto_rawDesc = string([]byte{
	0x0a, 0x14, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31,
	0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x6f,
	0x6b, 0x65, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x62, 0x75, 0x66, 0x2f, 0x76,
	0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x43, 0x0a, 0x17, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x1c, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x48, 0x00, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x88, 0x01, 0x01, 0x42,
	0x0a, 0x0a, 0x08, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x22, 0x41, 0x0a, 0x18, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x25, 0x0a, 0x06, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0d, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31,
	0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x06, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x22, 0x5e,
	0x0a, 0x19, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65,
	0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1c, 0x0a, 0x04, 0x75,
	0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xba, 0x48, 0x05, 0x72, 0x03,
	0xb0, 0x01, 0x01, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x23, 0x0a, 0x07, 0x75, 0x73, 0x65,
	0x72, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xba, 0x48, 0x07, 0x72,
	0x05, 0x10, 0x02, 0x18, 0x80, 0x04, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x22, 0x1c,
	0x0a, 0x1a, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65,
	0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x32, 0xc1, 0x01, 0x0a,
	0x0c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x55, 0x0a,
	0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x21, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31,
	0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73,
	0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x22, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e,
	0x2e, 0x76, 0x31, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x06, 0xd2, 0xf3,
	0x18, 0x02, 0x01, 0x02, 0x12, 0x5a, 0x0a, 0x06, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x12, 0x23,
	0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x76, 0x6f, 0x6b,
	0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x05, 0xd2, 0xf3, 0x18, 0x01, 0x01,
	0x42, 0x91, 0x01, 0x0a, 0x0c, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76,
	0x31, 0x42, 0x0a, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a,
	0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61,
	0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2d, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x61, 0x70,
	0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31, 0x3b, 0x61, 0x64,
	0x6d, 0x69, 0x6e, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x08, 0x41, 0x64,
	0x6d, 0x69, 0x6e, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x08, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x5c, 0x56,
	0x31, 0xe2, 0x02, 0x14, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42,
	0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x09, 0x41, 0x64, 0x6d, 0x69, 0x6e,
	0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
})

var (
	file_admin_v1_token_proto_rawDescOnce sync.Once
	file_admin_v1_token_proto_rawDescData []byte
)

func file_admin_v1_token_proto_rawDescGZIP() []byte {
	file_admin_v1_token_proto_rawDescOnce.Do(func() {
		file_admin_v1_token_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_admin_v1_token_proto_rawDesc), len(file_admin_v1_token_proto_rawDesc)))
	})
	return file_admin_v1_token_proto_rawDescData
}

var file_admin_v1_token_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_admin_v1_token_proto_goTypes = []any{
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
	file_admin_v1_token_proto_msgTypes[0].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_admin_v1_token_proto_rawDesc), len(file_admin_v1_token_proto_rawDesc)),
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
	file_admin_v1_token_proto_goTypes = nil
	file_admin_v1_token_proto_depIdxs = nil
}
