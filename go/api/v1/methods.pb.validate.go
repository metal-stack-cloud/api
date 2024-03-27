// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: api/v1/methods.proto

package apiv1

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

// Validate checks the field values on MethodServiceListRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *MethodServiceListRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on MethodServiceListRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// MethodServiceListRequestMultiError, or nil if none found.
func (m *MethodServiceListRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *MethodServiceListRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if len(errors) > 0 {
		return MethodServiceListRequestMultiError(errors)
	}

	return nil
}

// MethodServiceListRequestMultiError is an error wrapping multiple validation
// errors returned by MethodServiceListRequest.ValidateAll() if the designated
// constraints aren't met.
type MethodServiceListRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m MethodServiceListRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m MethodServiceListRequestMultiError) AllErrors() []error { return m }

// MethodServiceListRequestValidationError is the validation error returned by
// MethodServiceListRequest.Validate if the designated constraints aren't met.
type MethodServiceListRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e MethodServiceListRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e MethodServiceListRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e MethodServiceListRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e MethodServiceListRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e MethodServiceListRequestValidationError) ErrorName() string {
	return "MethodServiceListRequestValidationError"
}

// Error satisfies the builtin error interface
func (e MethodServiceListRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sMethodServiceListRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = MethodServiceListRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = MethodServiceListRequestValidationError{}

// Validate checks the field values on MethodServiceListResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *MethodServiceListResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on MethodServiceListResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// MethodServiceListResponseMultiError, or nil if none found.
func (m *MethodServiceListResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *MethodServiceListResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if len(errors) > 0 {
		return MethodServiceListResponseMultiError(errors)
	}

	return nil
}

// MethodServiceListResponseMultiError is an error wrapping multiple validation
// errors returned by MethodServiceListResponse.ValidateAll() if the
// designated constraints aren't met.
type MethodServiceListResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m MethodServiceListResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m MethodServiceListResponseMultiError) AllErrors() []error { return m }

// MethodServiceListResponseValidationError is the validation error returned by
// MethodServiceListResponse.Validate if the designated constraints aren't met.
type MethodServiceListResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e MethodServiceListResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e MethodServiceListResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e MethodServiceListResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e MethodServiceListResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e MethodServiceListResponseValidationError) ErrorName() string {
	return "MethodServiceListResponseValidationError"
}

// Error satisfies the builtin error interface
func (e MethodServiceListResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sMethodServiceListResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = MethodServiceListResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = MethodServiceListResponseValidationError{}

// Validate checks the field values on MethodServiceTokenScopedListRequest with
// the rules defined in the proto definition for this message. If any rules
// are violated, the first error encountered is returned, or nil if there are
// no violations.
func (m *MethodServiceTokenScopedListRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on MethodServiceTokenScopedListRequest
// with the rules defined in the proto definition for this message. If any
// rules are violated, the result is a list of violation errors wrapped in
// MethodServiceTokenScopedListRequestMultiError, or nil if none found.
func (m *MethodServiceTokenScopedListRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *MethodServiceTokenScopedListRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if len(errors) > 0 {
		return MethodServiceTokenScopedListRequestMultiError(errors)
	}

	return nil
}

// MethodServiceTokenScopedListRequestMultiError is an error wrapping multiple
// validation errors returned by
// MethodServiceTokenScopedListRequest.ValidateAll() if the designated
// constraints aren't met.
type MethodServiceTokenScopedListRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m MethodServiceTokenScopedListRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m MethodServiceTokenScopedListRequestMultiError) AllErrors() []error { return m }

// MethodServiceTokenScopedListRequestValidationError is the validation error
// returned by MethodServiceTokenScopedListRequest.Validate if the designated
// constraints aren't met.
type MethodServiceTokenScopedListRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e MethodServiceTokenScopedListRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e MethodServiceTokenScopedListRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e MethodServiceTokenScopedListRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e MethodServiceTokenScopedListRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e MethodServiceTokenScopedListRequestValidationError) ErrorName() string {
	return "MethodServiceTokenScopedListRequestValidationError"
}

// Error satisfies the builtin error interface
func (e MethodServiceTokenScopedListRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sMethodServiceTokenScopedListRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = MethodServiceTokenScopedListRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = MethodServiceTokenScopedListRequestValidationError{}

// Validate checks the field values on MethodServiceTokenScopedListResponse
// with the rules defined in the proto definition for this message. If any
// rules are violated, the first error encountered is returned, or nil if
// there are no violations.
func (m *MethodServiceTokenScopedListResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on MethodServiceTokenScopedListResponse
// with the rules defined in the proto definition for this message. If any
// rules are violated, the result is a list of violation errors wrapped in
// MethodServiceTokenScopedListResponseMultiError, or nil if none found.
func (m *MethodServiceTokenScopedListResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *MethodServiceTokenScopedListResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	for idx, item := range m.GetPermissions() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, MethodServiceTokenScopedListResponseValidationError{
						field:  fmt.Sprintf("Permissions[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, MethodServiceTokenScopedListResponseValidationError{
						field:  fmt.Sprintf("Permissions[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return MethodServiceTokenScopedListResponseValidationError{
					field:  fmt.Sprintf("Permissions[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	// no validation rules for ProjectRoles

	// no validation rules for TenantRoles

	if m.AdminRole != nil {
		// no validation rules for AdminRole
	}

	if len(errors) > 0 {
		return MethodServiceTokenScopedListResponseMultiError(errors)
	}

	return nil
}

// MethodServiceTokenScopedListResponseMultiError is an error wrapping multiple
// validation errors returned by
// MethodServiceTokenScopedListResponse.ValidateAll() if the designated
// constraints aren't met.
type MethodServiceTokenScopedListResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m MethodServiceTokenScopedListResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m MethodServiceTokenScopedListResponseMultiError) AllErrors() []error { return m }

// MethodServiceTokenScopedListResponseValidationError is the validation error
// returned by MethodServiceTokenScopedListResponse.Validate if the designated
// constraints aren't met.
type MethodServiceTokenScopedListResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e MethodServiceTokenScopedListResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e MethodServiceTokenScopedListResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e MethodServiceTokenScopedListResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e MethodServiceTokenScopedListResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e MethodServiceTokenScopedListResponseValidationError) ErrorName() string {
	return "MethodServiceTokenScopedListResponseValidationError"
}

// Error satisfies the builtin error interface
func (e MethodServiceTokenScopedListResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sMethodServiceTokenScopedListResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = MethodServiceTokenScopedListResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = MethodServiceTokenScopedListResponseValidationError{}
