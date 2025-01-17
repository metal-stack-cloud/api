// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.2
// 	protoc        (unknown)
// source: api/v1/audit.proto

package apiv1

import (
	_ "buf.build/gen/go/bufbuild/protovalidate/protocolbuffers/go/buf/validate"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// AuditTrace is an audit trace
type AuditTrace struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Uuid of the audit trace
	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	// Timestamp is the timestamp when the request arrived at the api
	Timestamp *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	// User is the user who called the api method
	User string `protobuf:"bytes,3,opt,name=user,proto3" json:"user,omitempty"`
	// Tenant is the tenant targeted by the api call
	Tenant string `protobuf:"bytes,4,opt,name=tenant,proto3" json:"tenant,omitempty"`
	// Project is the project targeted by the api call
	Project string `protobuf:"bytes,5,opt,name=project,proto3" json:"project,omitempty"`
	// Method is the api method that was called
	Method string `protobuf:"bytes,6,opt,name=method,proto3" json:"method,omitempty"`
	// Request is the payload of the request
	RequestPayload string `protobuf:"bytes,7,opt,name=request_payload,json=requestPayload,proto3" json:"request_payload,omitempty"`
	// Response is the payload of the response
	ResponsePayload string `protobuf:"bytes,8,opt,name=response_payload,json=responsePayload,proto3" json:"response_payload,omitempty"`
	// SourceIP contains the ip address of the caller
	SourceIp string `protobuf:"bytes,9,opt,name=source_ip,json=sourceIp,proto3" json:"source_ip,omitempty"`
	// ResultCode is a string describing the result of the api call
	ResultCode string `protobuf:"bytes,10,opt,name=result_code,json=resultCode,proto3" json:"result_code,omitempty"`
}

func (x *AuditTrace) Reset() {
	*x = AuditTrace{}
	mi := &file_api_v1_audit_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *AuditTrace) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuditTrace) ProtoMessage() {}

func (x *AuditTrace) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_audit_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuditTrace.ProtoReflect.Descriptor instead.
func (*AuditTrace) Descriptor() ([]byte, []int) {
	return file_api_v1_audit_proto_rawDescGZIP(), []int{0}
}

func (x *AuditTrace) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *AuditTrace) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

func (x *AuditTrace) GetUser() string {
	if x != nil {
		return x.User
	}
	return ""
}

func (x *AuditTrace) GetTenant() string {
	if x != nil {
		return x.Tenant
	}
	return ""
}

func (x *AuditTrace) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

func (x *AuditTrace) GetMethod() string {
	if x != nil {
		return x.Method
	}
	return ""
}

func (x *AuditTrace) GetRequestPayload() string {
	if x != nil {
		return x.RequestPayload
	}
	return ""
}

func (x *AuditTrace) GetResponsePayload() string {
	if x != nil {
		return x.ResponsePayload
	}
	return ""
}

func (x *AuditTrace) GetSourceIp() string {
	if x != nil {
		return x.SourceIp
	}
	return ""
}

func (x *AuditTrace) GetResultCode() string {
	if x != nil {
		return x.ResultCode
	}
	return ""
}

// AuditServiceListRequest is the request payload to list audits
type AuditServiceListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Login of the tenant
	Login string `protobuf:"bytes,1,opt,name=login,proto3" json:"login,omitempty"`
	// Uuid of the audit trace
	Uuid *string `protobuf:"bytes,2,opt,name=uuid,proto3,oneof" json:"uuid,omitempty"`
	// From describes the start of the time window in which to list audit traces
	From *timestamppb.Timestamp `protobuf:"bytes,3,opt,name=from,proto3" json:"from,omitempty"`
	// To describes the end of the time window in which to list audit traces
	To *timestamppb.Timestamp `protobuf:"bytes,4,opt,name=to,proto3" json:"to,omitempty"`
	// User is the user who called the api method
	User *string `protobuf:"bytes,5,opt,name=user,proto3,oneof" json:"user,omitempty"`
	// Tenant is the tenant targeted by the api call
	Tenant string `protobuf:"bytes,6,opt,name=tenant,proto3" json:"tenant,omitempty"`
	// Project is the project targeted by the api call
	Project *string `protobuf:"bytes,7,opt,name=project,proto3,oneof" json:"project,omitempty"`
	// Method is the api method that was called
	Method *string `protobuf:"bytes,8,opt,name=method,proto3,oneof" json:"method,omitempty"`
	// ResultCode is a string describing the result of the api call
	ResultCode *string `protobuf:"bytes,9,opt,name=result_code,json=resultCode,proto3,oneof" json:"result_code,omitempty"`
}

func (x *AuditServiceListRequest) Reset() {
	*x = AuditServiceListRequest{}
	mi := &file_api_v1_audit_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *AuditServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuditServiceListRequest) ProtoMessage() {}

func (x *AuditServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_audit_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuditServiceListRequest.ProtoReflect.Descriptor instead.
func (*AuditServiceListRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_audit_proto_rawDescGZIP(), []int{1}
}

func (x *AuditServiceListRequest) GetLogin() string {
	if x != nil {
		return x.Login
	}
	return ""
}

func (x *AuditServiceListRequest) GetUuid() string {
	if x != nil && x.Uuid != nil {
		return *x.Uuid
	}
	return ""
}

func (x *AuditServiceListRequest) GetFrom() *timestamppb.Timestamp {
	if x != nil {
		return x.From
	}
	return nil
}

func (x *AuditServiceListRequest) GetTo() *timestamppb.Timestamp {
	if x != nil {
		return x.To
	}
	return nil
}

func (x *AuditServiceListRequest) GetUser() string {
	if x != nil && x.User != nil {
		return *x.User
	}
	return ""
}

func (x *AuditServiceListRequest) GetTenant() string {
	if x != nil {
		return x.Tenant
	}
	return ""
}

func (x *AuditServiceListRequest) GetProject() string {
	if x != nil && x.Project != nil {
		return *x.Project
	}
	return ""
}

func (x *AuditServiceListRequest) GetMethod() string {
	if x != nil && x.Method != nil {
		return *x.Method
	}
	return ""
}

func (x *AuditServiceListRequest) GetResultCode() string {
	if x != nil && x.ResultCode != nil {
		return *x.ResultCode
	}
	return ""
}

// AuditServiceListResponse is the response payload of a audit list request
type AuditServiceListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Audits is a list of audits without the secrets
	Audits []*AuditTrace `protobuf:"bytes,1,rep,name=audits,proto3" json:"audits,omitempty"`
}

func (x *AuditServiceListResponse) Reset() {
	*x = AuditServiceListResponse{}
	mi := &file_api_v1_audit_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *AuditServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuditServiceListResponse) ProtoMessage() {}

func (x *AuditServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_audit_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuditServiceListResponse.ProtoReflect.Descriptor instead.
func (*AuditServiceListResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_audit_proto_rawDescGZIP(), []int{2}
}

func (x *AuditServiceListResponse) GetAudits() []*AuditTrace {
	if x != nil {
		return x.Audits
	}
	return nil
}

// AuditServiceGetRequest is the request payload of a audit get request
type AuditServiceGetRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Login of the tenant
	Login string `protobuf:"bytes,1,opt,name=login,proto3" json:"login,omitempty"`
	// Uuid of the audit trace
	Uuid string `protobuf:"bytes,2,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *AuditServiceGetRequest) Reset() {
	*x = AuditServiceGetRequest{}
	mi := &file_api_v1_audit_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *AuditServiceGetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuditServiceGetRequest) ProtoMessage() {}

func (x *AuditServiceGetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_audit_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuditServiceGetRequest.ProtoReflect.Descriptor instead.
func (*AuditServiceGetRequest) Descriptor() ([]byte, []int) {
	return file_api_v1_audit_proto_rawDescGZIP(), []int{3}
}

func (x *AuditServiceGetRequest) GetLogin() string {
	if x != nil {
		return x.Login
	}
	return ""
}

func (x *AuditServiceGetRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

// AuditServiceGetResponse is the response payload of a audit get request
type AuditServiceGetResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Audit is the audit
	Audit *AuditTrace `protobuf:"bytes,2,opt,name=audit,proto3" json:"audit,omitempty"`
}

func (x *AuditServiceGetResponse) Reset() {
	*x = AuditServiceGetResponse{}
	mi := &file_api_v1_audit_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *AuditServiceGetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuditServiceGetResponse) ProtoMessage() {}

func (x *AuditServiceGetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v1_audit_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuditServiceGetResponse.ProtoReflect.Descriptor instead.
func (*AuditServiceGetResponse) Descriptor() ([]byte, []int) {
	return file_api_v1_audit_proto_rawDescGZIP(), []int{4}
}

func (x *AuditServiceGetResponse) GetAudit() *AuditTrace {
	if x != nil {
		return x.Audit
	}
	return nil
}

var File_api_v1_audit_proto protoreflect.FileDescriptor

var file_api_v1_audit_proto_rawDesc = []byte{
	0x0a, 0x12, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x75, 0x64, 0x69, 0x74, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x1a, 0x13, 0x61, 0x70,
	0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x1b, 0x62, 0x75, 0x66, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f,
	0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f,
	0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0xd4, 0x02, 0x0a, 0x0a, 0x41, 0x75, 0x64, 0x69, 0x74, 0x54, 0x72, 0x61, 0x63, 0x65, 0x12, 0x1c,
	0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xba, 0x48,
	0x05, 0x72, 0x03, 0xb0, 0x01, 0x01, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x38, 0x0a, 0x09,
	0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x74, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x73, 0x65, 0x72, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x73, 0x65, 0x72, 0x12, 0x16, 0x0a, 0x06, 0x74, 0x65,
	0x6e, 0x61, 0x6e, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x74, 0x65, 0x6e, 0x61,
	0x6e, 0x74, 0x12, 0x18, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x12, 0x16, 0x0a, 0x06,
	0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6d, 0x65,
	0x74, 0x68, 0x6f, 0x64, 0x12, 0x27, 0x0a, 0x0f, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x5f,
	0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x72,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x29, 0x0a,
	0x10, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x5f, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61,
	0x64, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x73, 0x6f, 0x75, 0x72,
	0x63, 0x65, 0x5f, 0x69, 0x70, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x73, 0x6f, 0x75,
	0x72, 0x63, 0x65, 0x49, 0x70, 0x12, 0x1f, 0x0a, 0x0b, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x5f,
	0x63, 0x6f, 0x64, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x72, 0x65, 0x73, 0x75,
	0x6c, 0x74, 0x43, 0x6f, 0x64, 0x65, 0x22, 0xfa, 0x02, 0x0a, 0x17, 0x41, 0x75, 0x64, 0x69, 0x74,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x6f, 0x67, 0x69, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x05, 0x6c, 0x6f, 0x67, 0x69, 0x6e, 0x12, 0x21, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xba, 0x48, 0x05, 0x72, 0x03, 0xb0, 0x01, 0x01,
	0x48, 0x00, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x88, 0x01, 0x01, 0x12, 0x2e, 0x0a, 0x04, 0x66,
	0x72, 0x6f, 0x6d, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65,
	0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x04, 0x66, 0x72, 0x6f, 0x6d, 0x12, 0x2a, 0x0a, 0x02, 0x74,
	0x6f, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x52, 0x02, 0x74, 0x6f, 0x12, 0x17, 0x0a, 0x04, 0x75, 0x73, 0x65, 0x72, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x04, 0x75, 0x73, 0x65, 0x72, 0x88, 0x01, 0x01,
	0x12, 0x16, 0x0a, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x12, 0x1d, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x07, 0x70, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x88, 0x01, 0x01, 0x12, 0x1b, 0x0a, 0x06, 0x6d, 0x65, 0x74, 0x68, 0x6f,
	0x64, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x48, 0x03, 0x52, 0x06, 0x6d, 0x65, 0x74, 0x68, 0x6f,
	0x64, 0x88, 0x01, 0x01, 0x12, 0x24, 0x0a, 0x0b, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x5f, 0x63,
	0x6f, 0x64, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x48, 0x04, 0x52, 0x0a, 0x72, 0x65, 0x73,
	0x75, 0x6c, 0x74, 0x43, 0x6f, 0x64, 0x65, 0x88, 0x01, 0x01, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x75,
	0x75, 0x69, 0x64, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x42, 0x0a, 0x0a, 0x08,
	0x5f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x42, 0x09, 0x0a, 0x07, 0x5f, 0x6d, 0x65, 0x74,
	0x68, 0x6f, 0x64, 0x42, 0x0e, 0x0a, 0x0c, 0x5f, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x5f, 0x63,
	0x6f, 0x64, 0x65, 0x22, 0x46, 0x0a, 0x18, 0x41, 0x75, 0x64, 0x69, 0x74, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x2a, 0x0a, 0x06, 0x61, 0x75, 0x64, 0x69, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x12, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x75, 0x64, 0x69, 0x74, 0x54, 0x72,
	0x61, 0x63, 0x65, 0x52, 0x06, 0x61, 0x75, 0x64, 0x69, 0x74, 0x73, 0x22, 0x4c, 0x0a, 0x16, 0x41,
	0x75, 0x64, 0x69, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x6f, 0x67, 0x69, 0x6e, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x6c, 0x6f, 0x67, 0x69, 0x6e, 0x12, 0x1c, 0x0a, 0x04, 0x75,
	0x75, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xba, 0x48, 0x05, 0x72, 0x03,
	0xb0, 0x01, 0x01, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x22, 0x43, 0x0a, 0x17, 0x41, 0x75, 0x64,
	0x69, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x28, 0x0a, 0x05, 0x61, 0x75, 0x64, 0x69, 0x74, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x75, 0x64,
	0x69, 0x74, 0x54, 0x72, 0x61, 0x63, 0x65, 0x52, 0x05, 0x61, 0x75, 0x64, 0x69, 0x74, 0x32, 0xb7,
	0x01, 0x0a, 0x0c, 0x41, 0x75, 0x64, 0x69, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x51, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x1e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e,
	0x41, 0x75, 0x64, 0x69, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1f, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e,
	0x41, 0x75, 0x64, 0x69, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x47, 0x65, 0x74, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x09, 0xc2, 0xf3, 0x18, 0x01, 0x01, 0xe8, 0xf3,
	0x18, 0x02, 0x12, 0x54, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x1f, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x31, 0x2e, 0x41, 0x75, 0x64, 0x69, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x20, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x75, 0x64, 0x69, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x09, 0xc2,
	0xf3, 0x18, 0x01, 0x01, 0xe8, 0xf3, 0x18, 0x02, 0x42, 0x83, 0x01, 0x0a, 0x0a, 0x63, 0x6f, 0x6d,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x42, 0x0a, 0x41, 0x75, 0x64, 0x69, 0x74, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x30, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2d, 0x63, 0x6c,
	0x6f, 0x75, 0x64, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x3b, 0x61, 0x70, 0x69, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x06,
	0x41, 0x70, 0x69, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x06, 0x41, 0x70, 0x69, 0x5c, 0x56, 0x31, 0xe2,
	0x02, 0x12, 0x41, 0x70, 0x69, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x07, 0x41, 0x70, 0x69, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_v1_audit_proto_rawDescOnce sync.Once
	file_api_v1_audit_proto_rawDescData = file_api_v1_audit_proto_rawDesc
)

func file_api_v1_audit_proto_rawDescGZIP() []byte {
	file_api_v1_audit_proto_rawDescOnce.Do(func() {
		file_api_v1_audit_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_v1_audit_proto_rawDescData)
	})
	return file_api_v1_audit_proto_rawDescData
}

var file_api_v1_audit_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_api_v1_audit_proto_goTypes = []any{
	(*AuditTrace)(nil),               // 0: api.v1.AuditTrace
	(*AuditServiceListRequest)(nil),  // 1: api.v1.AuditServiceListRequest
	(*AuditServiceListResponse)(nil), // 2: api.v1.AuditServiceListResponse
	(*AuditServiceGetRequest)(nil),   // 3: api.v1.AuditServiceGetRequest
	(*AuditServiceGetResponse)(nil),  // 4: api.v1.AuditServiceGetResponse
	(*timestamppb.Timestamp)(nil),    // 5: google.protobuf.Timestamp
}
var file_api_v1_audit_proto_depIdxs = []int32{
	5, // 0: api.v1.AuditTrace.timestamp:type_name -> google.protobuf.Timestamp
	5, // 1: api.v1.AuditServiceListRequest.from:type_name -> google.protobuf.Timestamp
	5, // 2: api.v1.AuditServiceListRequest.to:type_name -> google.protobuf.Timestamp
	0, // 3: api.v1.AuditServiceListResponse.audits:type_name -> api.v1.AuditTrace
	0, // 4: api.v1.AuditServiceGetResponse.audit:type_name -> api.v1.AuditTrace
	3, // 5: api.v1.AuditService.Get:input_type -> api.v1.AuditServiceGetRequest
	1, // 6: api.v1.AuditService.List:input_type -> api.v1.AuditServiceListRequest
	4, // 7: api.v1.AuditService.Get:output_type -> api.v1.AuditServiceGetResponse
	2, // 8: api.v1.AuditService.List:output_type -> api.v1.AuditServiceListResponse
	7, // [7:9] is the sub-list for method output_type
	5, // [5:7] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_api_v1_audit_proto_init() }
func file_api_v1_audit_proto_init() {
	if File_api_v1_audit_proto != nil {
		return
	}
	file_api_v1_common_proto_init()
	file_api_v1_audit_proto_msgTypes[1].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_v1_audit_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_api_v1_audit_proto_goTypes,
		DependencyIndexes: file_api_v1_audit_proto_depIdxs,
		MessageInfos:      file_api_v1_audit_proto_msgTypes,
	}.Build()
	File_api_v1_audit_proto = out.File
	file_api_v1_audit_proto_rawDesc = nil
	file_api_v1_audit_proto_goTypes = nil
	file_api_v1_audit_proto_depIdxs = nil
}
