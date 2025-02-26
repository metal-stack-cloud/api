// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.1
// 	protoc        (unknown)
// source: admin/v1/payment.proto

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

// PaymentServiceListCouponsRequest is the request payload for the coupons list request
type PaymentServiceListCouponsRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *PaymentServiceListCouponsRequest) Reset() {
	*x = PaymentServiceListCouponsRequest{}
	mi := &file_admin_v1_payment_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *PaymentServiceListCouponsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PaymentServiceListCouponsRequest) ProtoMessage() {}

func (x *PaymentServiceListCouponsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_payment_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PaymentServiceListCouponsRequest.ProtoReflect.Descriptor instead.
func (*PaymentServiceListCouponsRequest) Descriptor() ([]byte, []int) {
	return file_admin_v1_payment_proto_rawDescGZIP(), []int{0}
}

// PaymentServiceListCouponsResponse is the response payload for the coupons list request
type PaymentServiceListCouponsResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Coupons is the list of all coupons
	Coupons       []*v1.Coupon `protobuf:"bytes,1,rep,name=coupons,proto3" json:"coupons,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *PaymentServiceListCouponsResponse) Reset() {
	*x = PaymentServiceListCouponsResponse{}
	mi := &file_admin_v1_payment_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *PaymentServiceListCouponsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PaymentServiceListCouponsResponse) ProtoMessage() {}

func (x *PaymentServiceListCouponsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_payment_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PaymentServiceListCouponsResponse.ProtoReflect.Descriptor instead.
func (*PaymentServiceListCouponsResponse) Descriptor() ([]byte, []int) {
	return file_admin_v1_payment_proto_rawDescGZIP(), []int{1}
}

func (x *PaymentServiceListCouponsResponse) GetCoupons() []*v1.Coupon {
	if x != nil {
		return x.Coupons
	}
	return nil
}

// PaymentServiceAddBalanceToCustomerRequest is the request payload for the balance to customer request
type PaymentServiceAddBalanceToCustomerRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Tenant is the tenant
	TenantId string `protobuf:"bytes,1,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
	// BalanceToAdd is the balance in euro cent which should be added to the customer
	BalanceToAdd  uint64 `protobuf:"varint,2,opt,name=balance_to_add,json=balanceToAdd,proto3" json:"balance_to_add,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *PaymentServiceAddBalanceToCustomerRequest) Reset() {
	*x = PaymentServiceAddBalanceToCustomerRequest{}
	mi := &file_admin_v1_payment_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *PaymentServiceAddBalanceToCustomerRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PaymentServiceAddBalanceToCustomerRequest) ProtoMessage() {}

func (x *PaymentServiceAddBalanceToCustomerRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_payment_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PaymentServiceAddBalanceToCustomerRequest.ProtoReflect.Descriptor instead.
func (*PaymentServiceAddBalanceToCustomerRequest) Descriptor() ([]byte, []int) {
	return file_admin_v1_payment_proto_rawDescGZIP(), []int{2}
}

func (x *PaymentServiceAddBalanceToCustomerRequest) GetTenantId() string {
	if x != nil {
		return x.TenantId
	}
	return ""
}

func (x *PaymentServiceAddBalanceToCustomerRequest) GetBalanceToAdd() uint64 {
	if x != nil {
		return x.BalanceToAdd
	}
	return 0
}

// PaymentServiceAddBalanceToCustomerResponse is the response payload for the balance to customer request
type PaymentServiceAddBalanceToCustomerResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Customer is the customer
	Customer      *v1.PaymentCustomer `protobuf:"bytes,1,opt,name=customer,proto3" json:"customer,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *PaymentServiceAddBalanceToCustomerResponse) Reset() {
	*x = PaymentServiceAddBalanceToCustomerResponse{}
	mi := &file_admin_v1_payment_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *PaymentServiceAddBalanceToCustomerResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PaymentServiceAddBalanceToCustomerResponse) ProtoMessage() {}

func (x *PaymentServiceAddBalanceToCustomerResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_payment_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PaymentServiceAddBalanceToCustomerResponse.ProtoReflect.Descriptor instead.
func (*PaymentServiceAddBalanceToCustomerResponse) Descriptor() ([]byte, []int) {
	return file_admin_v1_payment_proto_rawDescGZIP(), []int{3}
}

func (x *PaymentServiceAddBalanceToCustomerResponse) GetCustomer() *v1.PaymentCustomer {
	if x != nil {
		return x.Customer
	}
	return nil
}

var File_admin_v1_payment_proto protoreflect.FileDescriptor

var file_admin_v1_payment_proto_rawDesc = []byte{
	0x0a, 0x16, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x61, 0x79, 0x6d, 0x65,
	0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e,
	0x76, 0x31, 0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x14, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f,
	0x70, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x22, 0x0a,
	0x20, 0x50, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c,
	0x69, 0x73, 0x74, 0x43, 0x6f, 0x75, 0x70, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x22, 0x4d, 0x0a, 0x21, 0x50, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x6f, 0x75, 0x70, 0x6f, 0x6e, 0x73, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x28, 0x0a, 0x07, 0x63, 0x6f, 0x75, 0x70, 0x6f, 0x6e,
	0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31,
	0x2e, 0x43, 0x6f, 0x75, 0x70, 0x6f, 0x6e, 0x52, 0x07, 0x63, 0x6f, 0x75, 0x70, 0x6f, 0x6e, 0x73,
	0x22, 0x6e, 0x0a, 0x29, 0x50, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x41, 0x64, 0x64, 0x42, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x54, 0x6f, 0x43, 0x75,
	0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a,
	0x09, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x24, 0x0a, 0x0e, 0x62, 0x61,
	0x6c, 0x61, 0x6e, 0x63, 0x65, 0x5f, 0x74, 0x6f, 0x5f, 0x61, 0x64, 0x64, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x04, 0x52, 0x0c, 0x62, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x54, 0x6f, 0x41, 0x64, 0x64,
	0x22, 0x61, 0x0a, 0x2a, 0x50, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x41, 0x64, 0x64, 0x42, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x54, 0x6f, 0x43, 0x75,
	0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x33,
	0x0a, 0x08, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x17, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x61, 0x79, 0x6d, 0x65, 0x6e,
	0x74, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x52, 0x08, 0x63, 0x75, 0x73, 0x74, 0x6f,
	0x6d, 0x65, 0x72, 0x32, 0x8b, 0x02, 0x0a, 0x0e, 0x50, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x6e, 0x0a, 0x0b, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x6f,
	0x75, 0x70, 0x6f, 0x6e, 0x73, 0x12, 0x2a, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31,
	0x2e, 0x50, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c,
	0x69, 0x73, 0x74, 0x43, 0x6f, 0x75, 0x70, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x2b, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x61, 0x79,
	0x6d, 0x65, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x43,
	0x6f, 0x75, 0x70, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x06,
	0xd2, 0xf3, 0x18, 0x02, 0x01, 0x02, 0x12, 0x88, 0x01, 0x0a, 0x14, 0x41, 0x64, 0x64, 0x42, 0x61,
	0x6c, 0x61, 0x6e, 0x63, 0x65, 0x54, 0x6f, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x12,
	0x33, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x61, 0x79, 0x6d, 0x65,
	0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x64, 0x42, 0x61, 0x6c, 0x61,
	0x6e, 0x63, 0x65, 0x54, 0x6f, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x34, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e,
	0x50, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x41, 0x64,
	0x64, 0x42, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x54, 0x6f, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d,
	0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x05, 0xd2, 0xf3, 0x18, 0x01,
	0x01, 0x42, 0x93, 0x01, 0x0a, 0x0c, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e,
	0x76, 0x31, 0x42, 0x0c, 0x50, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x50, 0x01, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d,
	0x65, 0x74, 0x61, 0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2d, 0x63, 0x6c, 0x6f, 0x75, 0x64,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31,
	0x3b, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02,
	0x08, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x08, 0x41, 0x64, 0x6d, 0x69,
	0x6e, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x14, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x5c, 0x56, 0x31, 0x5c,
	0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x09, 0x41, 0x64,
	0x6d, 0x69, 0x6e, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_admin_v1_payment_proto_rawDescOnce sync.Once
	file_admin_v1_payment_proto_rawDescData = file_admin_v1_payment_proto_rawDesc
)

func file_admin_v1_payment_proto_rawDescGZIP() []byte {
	file_admin_v1_payment_proto_rawDescOnce.Do(func() {
		file_admin_v1_payment_proto_rawDescData = protoimpl.X.CompressGZIP(file_admin_v1_payment_proto_rawDescData)
	})
	return file_admin_v1_payment_proto_rawDescData
}

var file_admin_v1_payment_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_admin_v1_payment_proto_goTypes = []any{
	(*PaymentServiceListCouponsRequest)(nil),           // 0: admin.v1.PaymentServiceListCouponsRequest
	(*PaymentServiceListCouponsResponse)(nil),          // 1: admin.v1.PaymentServiceListCouponsResponse
	(*PaymentServiceAddBalanceToCustomerRequest)(nil),  // 2: admin.v1.PaymentServiceAddBalanceToCustomerRequest
	(*PaymentServiceAddBalanceToCustomerResponse)(nil), // 3: admin.v1.PaymentServiceAddBalanceToCustomerResponse
	(*v1.Coupon)(nil),          // 4: api.v1.Coupon
	(*v1.PaymentCustomer)(nil), // 5: api.v1.PaymentCustomer
}
var file_admin_v1_payment_proto_depIdxs = []int32{
	4, // 0: admin.v1.PaymentServiceListCouponsResponse.coupons:type_name -> api.v1.Coupon
	5, // 1: admin.v1.PaymentServiceAddBalanceToCustomerResponse.customer:type_name -> api.v1.PaymentCustomer
	0, // 2: admin.v1.PaymentService.ListCoupons:input_type -> admin.v1.PaymentServiceListCouponsRequest
	2, // 3: admin.v1.PaymentService.AddBalanceToCustomer:input_type -> admin.v1.PaymentServiceAddBalanceToCustomerRequest
	1, // 4: admin.v1.PaymentService.ListCoupons:output_type -> admin.v1.PaymentServiceListCouponsResponse
	3, // 5: admin.v1.PaymentService.AddBalanceToCustomer:output_type -> admin.v1.PaymentServiceAddBalanceToCustomerResponse
	4, // [4:6] is the sub-list for method output_type
	2, // [2:4] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_admin_v1_payment_proto_init() }
func file_admin_v1_payment_proto_init() {
	if File_admin_v1_payment_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_admin_v1_payment_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_admin_v1_payment_proto_goTypes,
		DependencyIndexes: file_admin_v1_payment_proto_depIdxs,
		MessageInfos:      file_admin_v1_payment_proto_msgTypes,
	}.Build()
	File_admin_v1_payment_proto = out.File
	file_admin_v1_payment_proto_rawDesc = nil
	file_admin_v1_payment_proto_goTypes = nil
	file_admin_v1_payment_proto_depIdxs = nil
}
