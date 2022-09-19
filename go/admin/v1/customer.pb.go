// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        (unknown)
// source: admin/v1/customer.proto

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

type CustomerServiceListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Login          *string `protobuf:"bytes,1,opt,name=login,proto3,oneof" json:"login,omitempty"`
	Name           *string `protobuf:"bytes,2,opt,name=name,proto3,oneof" json:"name,omitempty"`
	Email          *string `protobuf:"bytes,3,opt,name=email,proto3,oneof" json:"email,omitempty"`
	OrganisationId *string `protobuf:"bytes,4,opt,name=organisation_id,json=organisationId,proto3,oneof" json:"organisation_id,omitempty"`
}

func (x *CustomerServiceListRequest) Reset() {
	*x = CustomerServiceListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_customer_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CustomerServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CustomerServiceListRequest) ProtoMessage() {}

func (x *CustomerServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_customer_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CustomerServiceListRequest.ProtoReflect.Descriptor instead.
func (*CustomerServiceListRequest) Descriptor() ([]byte, []int) {
	return file_admin_v1_customer_proto_rawDescGZIP(), []int{0}
}

func (x *CustomerServiceListRequest) GetLogin() string {
	if x != nil && x.Login != nil {
		return *x.Login
	}
	return ""
}

func (x *CustomerServiceListRequest) GetName() string {
	if x != nil && x.Name != nil {
		return *x.Name
	}
	return ""
}

func (x *CustomerServiceListRequest) GetEmail() string {
	if x != nil && x.Email != nil {
		return *x.Email
	}
	return ""
}

func (x *CustomerServiceListRequest) GetOrganisationId() string {
	if x != nil && x.OrganisationId != nil {
		return *x.OrganisationId
	}
	return ""
}

type CustomerServiceListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Customers []*v1.PaymentCustomer `protobuf:"bytes,1,rep,name=customers,proto3" json:"customers,omitempty"`
}

func (x *CustomerServiceListResponse) Reset() {
	*x = CustomerServiceListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_customer_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CustomerServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CustomerServiceListResponse) ProtoMessage() {}

func (x *CustomerServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_customer_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CustomerServiceListResponse.ProtoReflect.Descriptor instead.
func (*CustomerServiceListResponse) Descriptor() ([]byte, []int) {
	return file_admin_v1_customer_proto_rawDescGZIP(), []int{1}
}

func (x *CustomerServiceListResponse) GetCustomers() []*v1.PaymentCustomer {
	if x != nil {
		return x.Customers
	}
	return nil
}

type CustomerServiceAdmitRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	CustomerId string `protobuf:"bytes,1,opt,name=customer_id,json=customerId,proto3" json:"customer_id,omitempty"`
}

func (x *CustomerServiceAdmitRequest) Reset() {
	*x = CustomerServiceAdmitRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_customer_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CustomerServiceAdmitRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CustomerServiceAdmitRequest) ProtoMessage() {}

func (x *CustomerServiceAdmitRequest) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_customer_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CustomerServiceAdmitRequest.ProtoReflect.Descriptor instead.
func (*CustomerServiceAdmitRequest) Descriptor() ([]byte, []int) {
	return file_admin_v1_customer_proto_rawDescGZIP(), []int{2}
}

func (x *CustomerServiceAdmitRequest) GetCustomerId() string {
	if x != nil {
		return x.CustomerId
	}
	return ""
}

type CustomerServiceAdmitResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Customer *v1.PaymentCustomer `protobuf:"bytes,1,opt,name=customer,proto3" json:"customer,omitempty"`
}

func (x *CustomerServiceAdmitResponse) Reset() {
	*x = CustomerServiceAdmitResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_admin_v1_customer_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CustomerServiceAdmitResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CustomerServiceAdmitResponse) ProtoMessage() {}

func (x *CustomerServiceAdmitResponse) ProtoReflect() protoreflect.Message {
	mi := &file_admin_v1_customer_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CustomerServiceAdmitResponse.ProtoReflect.Descriptor instead.
func (*CustomerServiceAdmitResponse) Descriptor() ([]byte, []int) {
	return file_admin_v1_customer_proto_rawDescGZIP(), []int{3}
}

func (x *CustomerServiceAdmitResponse) GetCustomer() *v1.PaymentCustomer {
	if x != nil {
		return x.Customer
	}
	return nil
}

var File_admin_v1_customer_proto protoreflect.FileDescriptor

var file_admin_v1_customer_proto_rawDesc = []byte{
	0x0a, 0x17, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x75, 0x73, 0x74, 0x6f,
	0x6d, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x61, 0x64, 0x6d, 0x69, 0x6e,
	0x2e, 0x76, 0x31, 0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d,
	0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x14, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31,
	0x2f, 0x70, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xca,
	0x01, 0x0a, 0x1a, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x19, 0x0a,
	0x05, 0x6c, 0x6f, 0x67, 0x69, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x05,
	0x6c, 0x6f, 0x67, 0x69, 0x6e, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x88, 0x01,
	0x01, 0x12, 0x19, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x02, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x88, 0x01, 0x01, 0x12, 0x2c, 0x0a, 0x0f,
	0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x73, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x03, 0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x73,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x88, 0x01, 0x01, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x6c,
	0x6f, 0x67, 0x69, 0x6e, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x42, 0x08, 0x0a,
	0x06, 0x5f, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x42, 0x12, 0x0a, 0x10, 0x5f, 0x6f, 0x72, 0x67, 0x61,
	0x6e, 0x69, 0x73, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x22, 0x54, 0x0a, 0x1b, 0x43,
	0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69,
	0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x35, 0x0a, 0x09, 0x63, 0x75,
	0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x43, 0x75,
	0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x52, 0x09, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72,
	0x73, 0x22, 0x3e, 0x0a, 0x1b, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x6d, 0x69, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x49,
	0x64, 0x22, 0x53, 0x0a, 0x1c, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x6d, 0x69, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x33, 0x0a, 0x08, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x61, 0x79,
	0x6d, 0x65, 0x6e, 0x74, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x52, 0x08, 0x63, 0x75,
	0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x32, 0xcc, 0x01, 0x0a, 0x0f, 0x43, 0x75, 0x73, 0x74, 0x6f,
	0x6d, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x5a, 0x0a, 0x04, 0x4c, 0x69,
	0x73, 0x74, 0x12, 0x24, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x75,
	0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73,
	0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e,
	0x2e, 0x76, 0x31, 0x2e, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x05, 0xd2, 0xf3, 0x18, 0x01, 0x02, 0x12, 0x5d, 0x0a, 0x05, 0x41, 0x64, 0x6d, 0x69, 0x74, 0x12,
	0x25, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x75, 0x73, 0x74, 0x6f,
	0x6d, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x41, 0x64, 0x6d, 0x69, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x26, 0x2e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x76,
	0x31, 0x2e, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x41, 0x64, 0x6d, 0x69, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x05,
	0xd2, 0xf3, 0x18, 0x01, 0x01, 0x42, 0x94, 0x01, 0x0a, 0x0c, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x64,
	0x6d, 0x69, 0x6e, 0x2e, 0x76, 0x31, 0x42, 0x0d, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72,
	0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2d,
	0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x64, 0x6d,
	0x69, 0x6e, 0x2f, 0x76, 0x31, 0x3b, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x76, 0x31, 0xa2, 0x02, 0x03,
	0x41, 0x58, 0x58, 0xaa, 0x02, 0x08, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x56, 0x31, 0xca, 0x02,
	0x08, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x14, 0x41, 0x64, 0x6d, 0x69,
	0x6e, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0xea, 0x02, 0x09, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_admin_v1_customer_proto_rawDescOnce sync.Once
	file_admin_v1_customer_proto_rawDescData = file_admin_v1_customer_proto_rawDesc
)

func file_admin_v1_customer_proto_rawDescGZIP() []byte {
	file_admin_v1_customer_proto_rawDescOnce.Do(func() {
		file_admin_v1_customer_proto_rawDescData = protoimpl.X.CompressGZIP(file_admin_v1_customer_proto_rawDescData)
	})
	return file_admin_v1_customer_proto_rawDescData
}

var file_admin_v1_customer_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_admin_v1_customer_proto_goTypes = []interface{}{
	(*CustomerServiceListRequest)(nil),   // 0: admin.v1.CustomerServiceListRequest
	(*CustomerServiceListResponse)(nil),  // 1: admin.v1.CustomerServiceListResponse
	(*CustomerServiceAdmitRequest)(nil),  // 2: admin.v1.CustomerServiceAdmitRequest
	(*CustomerServiceAdmitResponse)(nil), // 3: admin.v1.CustomerServiceAdmitResponse
	(*v1.PaymentCustomer)(nil),           // 4: api.v1.PaymentCustomer
}
var file_admin_v1_customer_proto_depIdxs = []int32{
	4, // 0: admin.v1.CustomerServiceListResponse.customers:type_name -> api.v1.PaymentCustomer
	4, // 1: admin.v1.CustomerServiceAdmitResponse.customer:type_name -> api.v1.PaymentCustomer
	0, // 2: admin.v1.CustomerService.List:input_type -> admin.v1.CustomerServiceListRequest
	2, // 3: admin.v1.CustomerService.Admit:input_type -> admin.v1.CustomerServiceAdmitRequest
	1, // 4: admin.v1.CustomerService.List:output_type -> admin.v1.CustomerServiceListResponse
	3, // 5: admin.v1.CustomerService.Admit:output_type -> admin.v1.CustomerServiceAdmitResponse
	4, // [4:6] is the sub-list for method output_type
	2, // [2:4] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_admin_v1_customer_proto_init() }
func file_admin_v1_customer_proto_init() {
	if File_admin_v1_customer_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_admin_v1_customer_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CustomerServiceListRequest); i {
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
		file_admin_v1_customer_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CustomerServiceListResponse); i {
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
		file_admin_v1_customer_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CustomerServiceAdmitRequest); i {
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
		file_admin_v1_customer_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CustomerServiceAdmitResponse); i {
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
	file_admin_v1_customer_proto_msgTypes[0].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_admin_v1_customer_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_admin_v1_customer_proto_goTypes,
		DependencyIndexes: file_admin_v1_customer_proto_depIdxs,
		MessageInfos:      file_admin_v1_customer_proto_msgTypes,
	}.Build()
	File_admin_v1_customer_proto = out.File
	file_admin_v1_customer_proto_rawDesc = nil
	file_admin_v1_customer_proto_goTypes = nil
	file_admin_v1_customer_proto_depIdxs = nil
}
