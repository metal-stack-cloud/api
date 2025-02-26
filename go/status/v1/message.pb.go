// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.5
// 	protoc        (unknown)
// source: status/v1/message.proto

package statusv1

import (
	_ "github.com/metal-stack-cloud/api/go/api/v1"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
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

// MessageKind defines what type of message it is
type MessageKind int32

const (
	// MESSAGE_KIND_UNSPECIFIED is not specified
	MessageKind_MESSAGE_KIND_UNSPECIFIED MessageKind = 0
	// MESSAGE_KIND_INFO is a informational message
	MessageKind_MESSAGE_KIND_INFO MessageKind = 1
	// MESSAGE_KIND_INCIDENT is a incident message
	MessageKind_MESSAGE_KIND_INCIDENT MessageKind = 2
	// MESSAGE_KIND_CHANGE is a change message
	MessageKind_MESSAGE_KIND_CHANGE MessageKind = 3
	// MESSAGE_KIND_RESOLVED is a resolved message
	MessageKind_MESSAGE_KIND_RESOLVED MessageKind = 4
	// MESSAGE_KIND_UPDATE is a update message
	MessageKind_MESSAGE_KIND_UPDATE MessageKind = 5
)

// Enum value maps for MessageKind.
var (
	MessageKind_name = map[int32]string{
		0: "MESSAGE_KIND_UNSPECIFIED",
		1: "MESSAGE_KIND_INFO",
		2: "MESSAGE_KIND_INCIDENT",
		3: "MESSAGE_KIND_CHANGE",
		4: "MESSAGE_KIND_RESOLVED",
		5: "MESSAGE_KIND_UPDATE",
	}
	MessageKind_value = map[string]int32{
		"MESSAGE_KIND_UNSPECIFIED": 0,
		"MESSAGE_KIND_INFO":        1,
		"MESSAGE_KIND_INCIDENT":    2,
		"MESSAGE_KIND_CHANGE":      3,
		"MESSAGE_KIND_RESOLVED":    4,
		"MESSAGE_KIND_UPDATE":      5,
	}
)

func (x MessageKind) Enum() *MessageKind {
	p := new(MessageKind)
	*p = x
	return p
}

func (x MessageKind) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (MessageKind) Descriptor() protoreflect.EnumDescriptor {
	return file_status_v1_message_proto_enumTypes[0].Descriptor()
}

func (MessageKind) Type() protoreflect.EnumType {
	return &file_status_v1_message_proto_enumTypes[0]
}

func (x MessageKind) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use MessageKind.Descriptor instead.
func (MessageKind) EnumDescriptor() ([]byte, []int) {
	return file_status_v1_message_proto_rawDescGZIP(), []int{0}
}

// MessageServiceListRequest is the request payload to get the messages
type MessageServiceListRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *MessageServiceListRequest) Reset() {
	*x = MessageServiceListRequest{}
	mi := &file_status_v1_message_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *MessageServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MessageServiceListRequest) ProtoMessage() {}

func (x *MessageServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_status_v1_message_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MessageServiceListRequest.ProtoReflect.Descriptor instead.
func (*MessageServiceListRequest) Descriptor() ([]byte, []int) {
	return file_status_v1_message_proto_rawDescGZIP(), []int{0}
}

// MessageServiceListResponse is the response payload with the messages
type MessageServiceListResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Items is a slice of all messages
	Items []*Message `protobuf:"bytes,1,rep,name=items,proto3" json:"items,omitempty"`
	// PinnedItems are messages which are of special interest
	PinnedItems   []*Message `protobuf:"bytes,2,rep,name=pinned_items,json=pinnedItems,proto3" json:"pinned_items,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *MessageServiceListResponse) Reset() {
	*x = MessageServiceListResponse{}
	mi := &file_status_v1_message_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *MessageServiceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MessageServiceListResponse) ProtoMessage() {}

func (x *MessageServiceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_status_v1_message_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MessageServiceListResponse.ProtoReflect.Descriptor instead.
func (*MessageServiceListResponse) Descriptor() ([]byte, []int) {
	return file_status_v1_message_proto_rawDescGZIP(), []int{1}
}

func (x *MessageServiceListResponse) GetItems() []*Message {
	if x != nil {
		return x.Items
	}
	return nil
}

func (x *MessageServiceListResponse) GetPinnedItems() []*Message {
	if x != nil {
		return x.PinnedItems
	}
	return nil
}

// Message is a test message to be displayed in the status
type Message struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Id of the message
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Text of the message
	Text string `protobuf:"bytes,2,opt,name=text,proto3" json:"text,omitempty"`
	// Kind of the message, this is to distinguish between the importance of a message
	Kind MessageKind `protobuf:"varint,3,opt,name=kind,proto3,enum=status.v1.MessageKind" json:"kind,omitempty"`
	// Timestamp when this message was created
	Timestamp *timestamppb.Timestamp `protobuf:"bytes,4,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	// Replies are messages which are followups to the initial message
	Replies       []*ReplyMessage `protobuf:"bytes,5,rep,name=replies,proto3" json:"replies,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Message) Reset() {
	*x = Message{}
	mi := &file_status_v1_message_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Message) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Message) ProtoMessage() {}

func (x *Message) ProtoReflect() protoreflect.Message {
	mi := &file_status_v1_message_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Message.ProtoReflect.Descriptor instead.
func (*Message) Descriptor() ([]byte, []int) {
	return file_status_v1_message_proto_rawDescGZIP(), []int{2}
}

func (x *Message) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Message) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

func (x *Message) GetKind() MessageKind {
	if x != nil {
		return x.Kind
	}
	return MessageKind_MESSAGE_KIND_UNSPECIFIED
}

func (x *Message) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

func (x *Message) GetReplies() []*ReplyMessage {
	if x != nil {
		return x.Replies
	}
	return nil
}

// ReplyMessage is a message as a followup of a initial message
type ReplyMessage struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Id of the message
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Text of the message
	Text string `protobuf:"bytes,2,opt,name=text,proto3" json:"text,omitempty"`
	// Kind of the message, this is to distinguish between the importance of a message
	Kind MessageKind `protobuf:"varint,3,opt,name=kind,proto3,enum=status.v1.MessageKind" json:"kind,omitempty"`
	// Timestamp when this message was created
	Timestamp     *timestamppb.Timestamp `protobuf:"bytes,4,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *ReplyMessage) Reset() {
	*x = ReplyMessage{}
	mi := &file_status_v1_message_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ReplyMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReplyMessage) ProtoMessage() {}

func (x *ReplyMessage) ProtoReflect() protoreflect.Message {
	mi := &file_status_v1_message_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReplyMessage.ProtoReflect.Descriptor instead.
func (*ReplyMessage) Descriptor() ([]byte, []int) {
	return file_status_v1_message_proto_rawDescGZIP(), []int{3}
}

func (x *ReplyMessage) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *ReplyMessage) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

func (x *ReplyMessage) GetKind() MessageKind {
	if x != nil {
		return x.Kind
	}
	return MessageKind_MESSAGE_KIND_UNSPECIFIED
}

func (x *ReplyMessage) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

var File_status_v1_message_proto protoreflect.FileDescriptor

var file_status_v1_message_proto_rawDesc = string([]byte{
	0x0a, 0x17, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2f, 0x76, 0x31, 0x2f, 0x6d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x2e, 0x76, 0x31, 0x1a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x1b, 0x0a, 0x19, 0x4d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x7d, 0x0a, 0x1a, 0x4d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x28, 0x0a, 0x05, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x18, 0x01,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x76, 0x31,
	0x2e, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x05, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x12,
	0x35, 0x0a, 0x0c, 0x70, 0x69, 0x6e, 0x6e, 0x65, 0x64, 0x5f, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x18,
	0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x76,
	0x31, 0x2e, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x0b, 0x70, 0x69, 0x6e, 0x6e, 0x65,
	0x64, 0x49, 0x74, 0x65, 0x6d, 0x73, 0x22, 0xc6, 0x01, 0x0a, 0x07, 0x4d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x65, 0x78, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x74, 0x65, 0x78, 0x74, 0x12, 0x2a, 0x0a, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x0e, 0x32, 0x16, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x76, 0x31,
	0x2e, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x4b, 0x69, 0x6e, 0x64, 0x52, 0x04, 0x6b, 0x69,
	0x6e, 0x64, 0x12, 0x38, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x31, 0x0a, 0x07,
	0x72, 0x65, 0x70, 0x6c, 0x69, 0x65, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x4d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x07, 0x72, 0x65, 0x70, 0x6c, 0x69, 0x65, 0x73, 0x22,
	0x98, 0x01, 0x0a, 0x0c, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64,
	0x12, 0x12, 0x0a, 0x04, 0x74, 0x65, 0x78, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x74, 0x65, 0x78, 0x74, 0x12, 0x2a, 0x0a, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x16, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x4d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x4b, 0x69, 0x6e, 0x64, 0x52, 0x04, 0x6b, 0x69, 0x6e, 0x64,
	0x12, 0x38, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52,
	0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2a, 0xaa, 0x01, 0x0a, 0x0b, 0x4d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x4b, 0x69, 0x6e, 0x64, 0x12, 0x1c, 0x0a, 0x18, 0x4d, 0x45,
	0x53, 0x53, 0x41, 0x47, 0x45, 0x5f, 0x4b, 0x49, 0x4e, 0x44, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45,
	0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x15, 0x0a, 0x11, 0x4d, 0x45, 0x53, 0x53,
	0x41, 0x47, 0x45, 0x5f, 0x4b, 0x49, 0x4e, 0x44, 0x5f, 0x49, 0x4e, 0x46, 0x4f, 0x10, 0x01, 0x12,
	0x19, 0x0a, 0x15, 0x4d, 0x45, 0x53, 0x53, 0x41, 0x47, 0x45, 0x5f, 0x4b, 0x49, 0x4e, 0x44, 0x5f,
	0x49, 0x4e, 0x43, 0x49, 0x44, 0x45, 0x4e, 0x54, 0x10, 0x02, 0x12, 0x17, 0x0a, 0x13, 0x4d, 0x45,
	0x53, 0x53, 0x41, 0x47, 0x45, 0x5f, 0x4b, 0x49, 0x4e, 0x44, 0x5f, 0x43, 0x48, 0x41, 0x4e, 0x47,
	0x45, 0x10, 0x03, 0x12, 0x19, 0x0a, 0x15, 0x4d, 0x45, 0x53, 0x53, 0x41, 0x47, 0x45, 0x5f, 0x4b,
	0x49, 0x4e, 0x44, 0x5f, 0x52, 0x45, 0x53, 0x4f, 0x4c, 0x56, 0x45, 0x44, 0x10, 0x04, 0x12, 0x17,
	0x0a, 0x13, 0x4d, 0x45, 0x53, 0x53, 0x41, 0x47, 0x45, 0x5f, 0x4b, 0x49, 0x4e, 0x44, 0x5f, 0x55,
	0x50, 0x44, 0x41, 0x54, 0x45, 0x10, 0x05, 0x32, 0x6b, 0x0a, 0x0e, 0x4d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x59, 0x0a, 0x04, 0x4c, 0x69, 0x73,
	0x74, 0x12, 0x24, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x04,
	0xd8, 0xf3, 0x18, 0x01, 0x42, 0x9a, 0x01, 0x0a, 0x0d, 0x63, 0x6f, 0x6d, 0x2e, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x2e, 0x76, 0x31, 0x42, 0x0c, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x50,
	0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x36, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x6c, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2d, 0x63,
	0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x2f, 0x76, 0x31, 0x3b, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x76, 0x31, 0xa2, 0x02,
	0x03, 0x53, 0x58, 0x58, 0xaa, 0x02, 0x09, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x56, 0x31,
	0xca, 0x02, 0x09, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x15, 0x53,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0a, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x3a, 0x3a, 0x56,
	0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
})

var (
	file_status_v1_message_proto_rawDescOnce sync.Once
	file_status_v1_message_proto_rawDescData []byte
)

func file_status_v1_message_proto_rawDescGZIP() []byte {
	file_status_v1_message_proto_rawDescOnce.Do(func() {
		file_status_v1_message_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_status_v1_message_proto_rawDesc), len(file_status_v1_message_proto_rawDesc)))
	})
	return file_status_v1_message_proto_rawDescData
}

var file_status_v1_message_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_status_v1_message_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_status_v1_message_proto_goTypes = []any{
	(MessageKind)(0),                   // 0: status.v1.MessageKind
	(*MessageServiceListRequest)(nil),  // 1: status.v1.MessageServiceListRequest
	(*MessageServiceListResponse)(nil), // 2: status.v1.MessageServiceListResponse
	(*Message)(nil),                    // 3: status.v1.Message
	(*ReplyMessage)(nil),               // 4: status.v1.ReplyMessage
	(*timestamppb.Timestamp)(nil),      // 5: google.protobuf.Timestamp
}
var file_status_v1_message_proto_depIdxs = []int32{
	3, // 0: status.v1.MessageServiceListResponse.items:type_name -> status.v1.Message
	3, // 1: status.v1.MessageServiceListResponse.pinned_items:type_name -> status.v1.Message
	0, // 2: status.v1.Message.kind:type_name -> status.v1.MessageKind
	5, // 3: status.v1.Message.timestamp:type_name -> google.protobuf.Timestamp
	4, // 4: status.v1.Message.replies:type_name -> status.v1.ReplyMessage
	0, // 5: status.v1.ReplyMessage.kind:type_name -> status.v1.MessageKind
	5, // 6: status.v1.ReplyMessage.timestamp:type_name -> google.protobuf.Timestamp
	1, // 7: status.v1.MessageService.List:input_type -> status.v1.MessageServiceListRequest
	2, // 8: status.v1.MessageService.List:output_type -> status.v1.MessageServiceListResponse
	8, // [8:9] is the sub-list for method output_type
	7, // [7:8] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_status_v1_message_proto_init() }
func file_status_v1_message_proto_init() {
	if File_status_v1_message_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_status_v1_message_proto_rawDesc), len(file_status_v1_message_proto_rawDesc)),
			NumEnums:      1,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_status_v1_message_proto_goTypes,
		DependencyIndexes: file_status_v1_message_proto_depIdxs,
		EnumInfos:         file_status_v1_message_proto_enumTypes,
		MessageInfos:      file_status_v1_message_proto_msgTypes,
	}.Build()
	File_status_v1_message_proto = out.File
	file_status_v1_message_proto_goTypes = nil
	file_status_v1_message_proto_depIdxs = nil
}
