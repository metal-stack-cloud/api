// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: api/v1/volume.proto

package v1

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"sort"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
	_ = sort.Sort
)

// define the regex for a UUID once up-front
var _volume_uuidPattern = regexp.MustCompile("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$")

// Validate checks the field values on Volume with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Volume) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Volume with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in VolumeMultiError, or nil if none found.
func (m *Volume) ValidateAll() error {
	return m.validate(true)
}

func (m *Volume) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Uuid

	// no validation rules for Name

	// no validation rules for Project

	// no validation rules for Partition

	// no validation rules for StorageClass

	// no validation rules for Size

	// no validation rules for Usage

	if all {
		switch v := interface{}(m.GetCreatedAt()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, VolumeValidationError{
					field:  "CreatedAt",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, VolumeValidationError{
					field:  "CreatedAt",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetCreatedAt()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return VolumeValidationError{
				field:  "CreatedAt",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if all {
		switch v := interface{}(m.GetUpdatedAt()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, VolumeValidationError{
					field:  "UpdatedAt",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, VolumeValidationError{
					field:  "UpdatedAt",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetUpdatedAt()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return VolumeValidationError{
				field:  "UpdatedAt",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if all {
		switch v := interface{}(m.GetDeletedAt()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, VolumeValidationError{
					field:  "DeletedAt",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, VolumeValidationError{
					field:  "DeletedAt",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetDeletedAt()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return VolumeValidationError{
				field:  "DeletedAt",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if m.AttachedTo != nil {
		// no validation rules for AttachedTo
	}

	if len(errors) > 0 {
		return VolumeMultiError(errors)
	}

	return nil
}

// VolumeMultiError is an error wrapping multiple validation errors returned by
// Volume.ValidateAll() if the designated constraints aren't met.
type VolumeMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m VolumeMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m VolumeMultiError) AllErrors() []error { return m }

// VolumeValidationError is the validation error returned by Volume.Validate if
// the designated constraints aren't met.
type VolumeValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e VolumeValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e VolumeValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e VolumeValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e VolumeValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e VolumeValidationError) ErrorName() string { return "VolumeValidationError" }

// Error satisfies the builtin error interface
func (e VolumeValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sVolume.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = VolumeValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = VolumeValidationError{}

// Validate checks the field values on VolumeServiceGetRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *VolumeServiceGetRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on VolumeServiceGetRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// VolumeServiceGetRequestMultiError, or nil if none found.
func (m *VolumeServiceGetRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *VolumeServiceGetRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if err := m._validateUuid(m.GetUuid()); err != nil {
		err = VolumeServiceGetRequestValidationError{
			field:  "Uuid",
			reason: "value must be a valid UUID",
			cause:  err,
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if l := utf8.RuneCountInString(m.GetProject()); l < 2 || l > 128 {
		err := VolumeServiceGetRequestValidationError{
			field:  "Project",
			reason: "value length must be between 2 and 128 runes, inclusive",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return VolumeServiceGetRequestMultiError(errors)
	}

	return nil
}

func (m *VolumeServiceGetRequest) _validateUuid(uuid string) error {
	if matched := _volume_uuidPattern.MatchString(uuid); !matched {
		return errors.New("invalid uuid format")
	}

	return nil
}

// VolumeServiceGetRequestMultiError is an error wrapping multiple validation
// errors returned by VolumeServiceGetRequest.ValidateAll() if the designated
// constraints aren't met.
type VolumeServiceGetRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m VolumeServiceGetRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m VolumeServiceGetRequestMultiError) AllErrors() []error { return m }

// VolumeServiceGetRequestValidationError is the validation error returned by
// VolumeServiceGetRequest.Validate if the designated constraints aren't met.
type VolumeServiceGetRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e VolumeServiceGetRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e VolumeServiceGetRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e VolumeServiceGetRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e VolumeServiceGetRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e VolumeServiceGetRequestValidationError) ErrorName() string {
	return "VolumeServiceGetRequestValidationError"
}

// Error satisfies the builtin error interface
func (e VolumeServiceGetRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sVolumeServiceGetRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = VolumeServiceGetRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = VolumeServiceGetRequestValidationError{}

// Validate checks the field values on VolumeServiceListRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *VolumeServiceListRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on VolumeServiceListRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// VolumeServiceListRequestMultiError, or nil if none found.
func (m *VolumeServiceListRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *VolumeServiceListRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if l := utf8.RuneCountInString(m.GetProject()); l < 2 || l > 128 {
		err := VolumeServiceListRequestValidationError{
			field:  "Project",
			reason: "value length must be between 2 and 128 runes, inclusive",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return VolumeServiceListRequestMultiError(errors)
	}

	return nil
}

// VolumeServiceListRequestMultiError is an error wrapping multiple validation
// errors returned by VolumeServiceListRequest.ValidateAll() if the designated
// constraints aren't met.
type VolumeServiceListRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m VolumeServiceListRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m VolumeServiceListRequestMultiError) AllErrors() []error { return m }

// VolumeServiceListRequestValidationError is the validation error returned by
// VolumeServiceListRequest.Validate if the designated constraints aren't met.
type VolumeServiceListRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e VolumeServiceListRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e VolumeServiceListRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e VolumeServiceListRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e VolumeServiceListRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e VolumeServiceListRequestValidationError) ErrorName() string {
	return "VolumeServiceListRequestValidationError"
}

// Error satisfies the builtin error interface
func (e VolumeServiceListRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sVolumeServiceListRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = VolumeServiceListRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = VolumeServiceListRequestValidationError{}

// Validate checks the field values on VolumeServiceDeleteRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *VolumeServiceDeleteRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on VolumeServiceDeleteRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// VolumeServiceDeleteRequestMultiError, or nil if none found.
func (m *VolumeServiceDeleteRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *VolumeServiceDeleteRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if err := m._validateUuid(m.GetUuid()); err != nil {
		err = VolumeServiceDeleteRequestValidationError{
			field:  "Uuid",
			reason: "value must be a valid UUID",
			cause:  err,
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if l := utf8.RuneCountInString(m.GetProject()); l < 2 || l > 128 {
		err := VolumeServiceDeleteRequestValidationError{
			field:  "Project",
			reason: "value length must be between 2 and 128 runes, inclusive",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return VolumeServiceDeleteRequestMultiError(errors)
	}

	return nil
}

func (m *VolumeServiceDeleteRequest) _validateUuid(uuid string) error {
	if matched := _volume_uuidPattern.MatchString(uuid); !matched {
		return errors.New("invalid uuid format")
	}

	return nil
}

// VolumeServiceDeleteRequestMultiError is an error wrapping multiple
// validation errors returned by VolumeServiceDeleteRequest.ValidateAll() if
// the designated constraints aren't met.
type VolumeServiceDeleteRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m VolumeServiceDeleteRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m VolumeServiceDeleteRequestMultiError) AllErrors() []error { return m }

// VolumeServiceDeleteRequestValidationError is the validation error returned
// by VolumeServiceDeleteRequest.Validate if the designated constraints aren't met.
type VolumeServiceDeleteRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e VolumeServiceDeleteRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e VolumeServiceDeleteRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e VolumeServiceDeleteRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e VolumeServiceDeleteRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e VolumeServiceDeleteRequestValidationError) ErrorName() string {
	return "VolumeServiceDeleteRequestValidationError"
}

// Error satisfies the builtin error interface
func (e VolumeServiceDeleteRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sVolumeServiceDeleteRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = VolumeServiceDeleteRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = VolumeServiceDeleteRequestValidationError{}

// Validate checks the field values on VolumeServiceGetResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *VolumeServiceGetResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on VolumeServiceGetResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// VolumeServiceGetResponseMultiError, or nil if none found.
func (m *VolumeServiceGetResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *VolumeServiceGetResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetVolume()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, VolumeServiceGetResponseValidationError{
					field:  "Volume",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, VolumeServiceGetResponseValidationError{
					field:  "Volume",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetVolume()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return VolumeServiceGetResponseValidationError{
				field:  "Volume",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return VolumeServiceGetResponseMultiError(errors)
	}

	return nil
}

// VolumeServiceGetResponseMultiError is an error wrapping multiple validation
// errors returned by VolumeServiceGetResponse.ValidateAll() if the designated
// constraints aren't met.
type VolumeServiceGetResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m VolumeServiceGetResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m VolumeServiceGetResponseMultiError) AllErrors() []error { return m }

// VolumeServiceGetResponseValidationError is the validation error returned by
// VolumeServiceGetResponse.Validate if the designated constraints aren't met.
type VolumeServiceGetResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e VolumeServiceGetResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e VolumeServiceGetResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e VolumeServiceGetResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e VolumeServiceGetResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e VolumeServiceGetResponseValidationError) ErrorName() string {
	return "VolumeServiceGetResponseValidationError"
}

// Error satisfies the builtin error interface
func (e VolumeServiceGetResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sVolumeServiceGetResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = VolumeServiceGetResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = VolumeServiceGetResponseValidationError{}

// Validate checks the field values on VolumeServiceListResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *VolumeServiceListResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on VolumeServiceListResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// VolumeServiceListResponseMultiError, or nil if none found.
func (m *VolumeServiceListResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *VolumeServiceListResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	for idx, item := range m.GetVolumes() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, VolumeServiceListResponseValidationError{
						field:  fmt.Sprintf("Volumes[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, VolumeServiceListResponseValidationError{
						field:  fmt.Sprintf("Volumes[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return VolumeServiceListResponseValidationError{
					field:  fmt.Sprintf("Volumes[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(errors) > 0 {
		return VolumeServiceListResponseMultiError(errors)
	}

	return nil
}

// VolumeServiceListResponseMultiError is an error wrapping multiple validation
// errors returned by VolumeServiceListResponse.ValidateAll() if the
// designated constraints aren't met.
type VolumeServiceListResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m VolumeServiceListResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m VolumeServiceListResponseMultiError) AllErrors() []error { return m }

// VolumeServiceListResponseValidationError is the validation error returned by
// VolumeServiceListResponse.Validate if the designated constraints aren't met.
type VolumeServiceListResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e VolumeServiceListResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e VolumeServiceListResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e VolumeServiceListResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e VolumeServiceListResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e VolumeServiceListResponseValidationError) ErrorName() string {
	return "VolumeServiceListResponseValidationError"
}

// Error satisfies the builtin error interface
func (e VolumeServiceListResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sVolumeServiceListResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = VolumeServiceListResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = VolumeServiceListResponseValidationError{}

// Validate checks the field values on VolumeServiceDeleteResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *VolumeServiceDeleteResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on VolumeServiceDeleteResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// VolumeServiceDeleteResponseMultiError, or nil if none found.
func (m *VolumeServiceDeleteResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *VolumeServiceDeleteResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetVolume()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, VolumeServiceDeleteResponseValidationError{
					field:  "Volume",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, VolumeServiceDeleteResponseValidationError{
					field:  "Volume",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetVolume()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return VolumeServiceDeleteResponseValidationError{
				field:  "Volume",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return VolumeServiceDeleteResponseMultiError(errors)
	}

	return nil
}

// VolumeServiceDeleteResponseMultiError is an error wrapping multiple
// validation errors returned by VolumeServiceDeleteResponse.ValidateAll() if
// the designated constraints aren't met.
type VolumeServiceDeleteResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m VolumeServiceDeleteResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m VolumeServiceDeleteResponseMultiError) AllErrors() []error { return m }

// VolumeServiceDeleteResponseValidationError is the validation error returned
// by VolumeServiceDeleteResponse.Validate if the designated constraints
// aren't met.
type VolumeServiceDeleteResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e VolumeServiceDeleteResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e VolumeServiceDeleteResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e VolumeServiceDeleteResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e VolumeServiceDeleteResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e VolumeServiceDeleteResponseValidationError) ErrorName() string {
	return "VolumeServiceDeleteResponseValidationError"
}

// Error satisfies the builtin error interface
func (e VolumeServiceDeleteResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sVolumeServiceDeleteResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = VolumeServiceDeleteResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = VolumeServiceDeleteResponseValidationError{}