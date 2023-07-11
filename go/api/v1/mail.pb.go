// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: api/v1/mail.proto

package apiv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	anypb "google.golang.org/protobuf/types/known/anypb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type MailType int32

const (
	MailType_MAIL_TYPE_UNSPECIFIED                    MailType = 0
	MailType_MAIL_TYPE_ADMITTED                       MailType = 1
	MailType_MAIL_TYPE_COUPON_PERCENTAGE_USED_WARNING MailType = 2
	MailType_MAIL_TYPE_COUPON_COMPLETELY_USED_WARNING MailType = 3
	MailType_MAIL_TYPE_PAYMENT_UPDATED                MailType = 4
	MailType_MAIL_TYPE_ADMISSION_REQUESTED            MailType = 5
	MailType_MAIL_TYPE_WELCOME                        MailType = 6
)

// Enum value maps for MailType.
var (
	MailType_name = map[int32]string{
		0: "MAIL_TYPE_UNSPECIFIED",
		1: "MAIL_TYPE_ADMITTED",
		2: "MAIL_TYPE_COUPON_PERCENTAGE_USED_WARNING",
		3: "MAIL_TYPE_COUPON_COMPLETELY_USED_WARNING",
		4: "MAIL_TYPE_PAYMENT_UPDATED",
		5: "MAIL_TYPE_ADMISSION_REQUESTED",
		6: "MAIL_TYPE_WELCOME",
	}
	MailType_value = map[string]int32{
		"MAIL_TYPE_UNSPECIFIED":                    0,
		"MAIL_TYPE_ADMITTED":                       1,
		"MAIL_TYPE_COUPON_PERCENTAGE_USED_WARNING": 2,
		"MAIL_TYPE_COUPON_COMPLETELY_USED_WARNING": 3,
		"MAIL_TYPE_PAYMENT_UPDATED":                4,
		"MAIL_TYPE_ADMISSION_REQUESTED":            5,
		"MAIL_TYPE_WELCOME":                        6,
	}
)

func (x MailType) Enum() *MailType {
	p := new(MailType)
	*p = x
	return p
}

func (x MailType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (MailType) Descriptor() protoreflect.EnumDescriptor {
	return file_api_v1_mail_proto_enumTypes[0].Descriptor()
}

func (MailType) Type() protoreflect.EnumType {
	return &file_api_v1_mail_proto_enumTypes[0]
}

func (x MailType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use MailType.Descriptor instead.
func (MailType) EnumDescriptor() ([]byte, []int) {
	return file_api_v1_mail_proto_rawDescGZIP(), []int{0}
}

type Email struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	To       []string              `protobuf:"bytes,1,rep,name=to,proto3" json:"to,omitempty"`
	Subject  *string               `protobuf:"bytes,2,opt,name=subject,proto3,oneof" json:"subject,omitempty"`
	MailType MailType              `protobuf:"varint,3,opt,name=mail_type,json=mailType,proto3,enum=api.v1.MailType" json:"mail_type,omitempty"`
	Values   map[string]*anypb.Any `protobuf:"bytes,4,rep,name=values,proto3" json:"values,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Email) Reset() {
	*x = Email{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_v1_mail_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Email) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Email) ProtoMessage() {}

func (x *Email) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_mail_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Email.ProtoReflect.Descriptor instead.
func (*Email) Descriptor() ([]byte, []int) {
	return file_api_v1_mail_proto_rawDescGZIP(), []int{0}
}

func (x *Email) GetTo() []string {
	if x != nil {
		return x.To
	}
	return nil
}

func (x *Email) GetSubject() string {
	if x != nil && x.Subject != nil {
		return *x.Subject
	}
	return ""
}

func (x *Email) GetMailType() MailType {
	if x != nil {
		return x.MailType
	}
	return MailType_MAIL_TYPE_UNSPECIFIED
}

func (x *Email) GetValues() map[string]*anypb.Any {
	if x != nil {
		return x.Values
	}
	return nil
}

var File_api_v1_mail_proto protoreflect.FileDescriptor

var file_api_v1_mail_proto_rawDesc = []byte{
	0x0a, 0x11, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x6d, 0x61, 0x69, 0x6c, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x06, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x1a, 0x19, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x61, 0x6e, 0x79,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xf5, 0x01, 0x0a, 0x05, 0x45, 0x6d, 0x61, 0x69, 0x6c,
	0x12, 0x0e, 0x0a, 0x02, 0x74, 0x6f, 0x18, 0x01, 0x20, 0x03, 0x28, 0x09, 0x52, 0x02, 0x74, 0x6f,
	0x12, 0x1d, 0x0a, 0x07, 0x73, 0x75, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x48, 0x00, 0x52, 0x07, 0x73, 0x75, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x88, 0x01, 0x01, 0x12,
	0x2d, 0x0a, 0x09, 0x6d, 0x61, 0x69, 0x6c, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x10, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x61, 0x69, 0x6c,
	0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x6d, 0x61, 0x69, 0x6c, 0x54, 0x79, 0x70, 0x65, 0x12, 0x31,
	0x0a, 0x06, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x2e, 0x56, 0x61,
	0x6c, 0x75, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x73, 0x1a, 0x4f, 0x0a, 0x0b, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b,
	0x65, 0x79, 0x12, 0x2a, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x14, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x41, 0x6e, 0x79, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02,
	0x38, 0x01, 0x42, 0x0a, 0x0a, 0x08, 0x5f, 0x73, 0x75, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x2a, 0xf2,
	0x01, 0x0a, 0x08, 0x4d, 0x61, 0x69, 0x6c, 0x54, 0x79, 0x70, 0x65, 0x12, 0x19, 0x0a, 0x15, 0x4d,
	0x41, 0x49, 0x4c, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49,
	0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x16, 0x0a, 0x12, 0x4d, 0x41, 0x49, 0x4c, 0x5f, 0x54,
	0x59, 0x50, 0x45, 0x5f, 0x41, 0x44, 0x4d, 0x49, 0x54, 0x54, 0x45, 0x44, 0x10, 0x01, 0x12, 0x2c,
	0x0a, 0x28, 0x4d, 0x41, 0x49, 0x4c, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x43, 0x4f, 0x55, 0x50,
	0x4f, 0x4e, 0x5f, 0x50, 0x45, 0x52, 0x43, 0x45, 0x4e, 0x54, 0x41, 0x47, 0x45, 0x5f, 0x55, 0x53,
	0x45, 0x44, 0x5f, 0x57, 0x41, 0x52, 0x4e, 0x49, 0x4e, 0x47, 0x10, 0x02, 0x12, 0x2c, 0x0a, 0x28,
	0x4d, 0x41, 0x49, 0x4c, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x43, 0x4f, 0x55, 0x50, 0x4f, 0x4e,
	0x5f, 0x43, 0x4f, 0x4d, 0x50, 0x4c, 0x45, 0x54, 0x45, 0x4c, 0x59, 0x5f, 0x55, 0x53, 0x45, 0x44,
	0x5f, 0x57, 0x41, 0x52, 0x4e, 0x49, 0x4e, 0x47, 0x10, 0x03, 0x12, 0x1d, 0x0a, 0x19, 0x4d, 0x41,
	0x49, 0x4c, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x50, 0x41, 0x59, 0x4d, 0x45, 0x4e, 0x54, 0x5f,
	0x55, 0x50, 0x44, 0x41, 0x54, 0x45, 0x44, 0x10, 0x04, 0x12, 0x21, 0x0a, 0x1d, 0x4d, 0x41, 0x49,
	0x4c, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x41, 0x44, 0x4d, 0x49, 0x53, 0x53, 0x49, 0x4f, 0x4e,
	0x5f, 0x52, 0x45, 0x51, 0x55, 0x45, 0x53, 0x54, 0x45, 0x44, 0x10, 0x05, 0x12, 0x15, 0x0a, 0x11,
	0x4d, 0x41, 0x49, 0x4c, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x57, 0x45, 0x4c, 0x43, 0x4f, 0x4d,
	0x45, 0x10, 0x06, 0x42, 0x82, 0x01, 0x0a, 0x0a, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x31, 0x42, 0x09, 0x4d, 0x61, 0x69, 0x6c, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a,
	0x30, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61,
	0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2d, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x61, 0x70,
	0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x3b, 0x61, 0x70, 0x69, 0x76,
	0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x06, 0x41, 0x70, 0x69, 0x2e, 0x56, 0x31,
	0xca, 0x02, 0x06, 0x41, 0x70, 0x69, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x12, 0x41, 0x70, 0x69, 0x5c,
	0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02,
	0x07, 0x41, 0x70, 0x69, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_v1_mail_proto_rawDescOnce sync.Once
	file_api_v1_mail_proto_rawDescData = file_api_v1_mail_proto_rawDesc
)

func file_api_v1_mail_proto_rawDescGZIP() []byte {
	file_api_v1_mail_proto_rawDescOnce.Do(func() {
		file_api_v1_mail_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_v1_mail_proto_rawDescData)
	})
	return file_api_v1_mail_proto_rawDescData
}

var file_api_v1_mail_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_api_v1_mail_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_api_v1_mail_proto_goTypes = []interface{}{
	(MailType)(0),     // 0: api.v1.MailType
	(*Email)(nil),     // 1: api.v1.Email
	nil,               // 2: api.v1.Email.ValuesEntry
	(*anypb.Any)(nil), // 3: google.protobuf.Any
}
var file_api_v1_mail_proto_depIdxs = []int32{
	0, // 0: api.v1.Email.mail_type:type_name -> api.v1.MailType
	2, // 1: api.v1.Email.values:type_name -> api.v1.Email.ValuesEntry
	3, // 2: api.v1.Email.ValuesEntry.value:type_name -> google.protobuf.Any
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_api_v1_mail_proto_init() }
func file_api_v1_mail_proto_init() {
	if File_api_v1_mail_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_api_v1_mail_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Email); i {
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
	file_api_v1_mail_proto_msgTypes[0].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_v1_mail_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_api_v1_mail_proto_goTypes,
		DependencyIndexes: file_api_v1_mail_proto_depIdxs,
		EnumInfos:         file_api_v1_mail_proto_enumTypes,
		MessageInfos:      file_api_v1_mail_proto_msgTypes,
	}.Build()
	File_api_v1_mail_proto = out.File
	file_api_v1_mail_proto_rawDesc = nil
	file_api_v1_mail_proto_goTypes = nil
	file_api_v1_mail_proto_depIdxs = nil
}
