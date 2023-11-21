// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: admin/v1/tenant.proto

package adminv1

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

	apiv1 "github.com/metal-stack-cloud/api/go/api/v1"
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

	_ = apiv1.OAuthProvider(0)
)

// Validate checks the field values on TenantServiceListRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *TenantServiceListRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on TenantServiceListRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// TenantServiceListRequestMultiError, or nil if none found.
func (m *TenantServiceListRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *TenantServiceListRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetPaging()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, TenantServiceListRequestValidationError{
					field:  "Paging",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, TenantServiceListRequestValidationError{
					field:  "Paging",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetPaging()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TenantServiceListRequestValidationError{
				field:  "Paging",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if m.Login != nil {
		// no validation rules for Login
	}

	if m.Name != nil {
		// no validation rules for Name
	}

	if m.Email != nil {
		// no validation rules for Email
	}

	if m.OrganisationId != nil {
		// no validation rules for OrganisationId
	}

	if m.OauthProvider != nil {
		// no validation rules for OauthProvider
	}

	if m.Admitted != nil {
		// no validation rules for Admitted
	}

	if len(errors) > 0 {
		return TenantServiceListRequestMultiError(errors)
	}

	return nil
}

// TenantServiceListRequestMultiError is an error wrapping multiple validation
// errors returned by TenantServiceListRequest.ValidateAll() if the designated
// constraints aren't met.
type TenantServiceListRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m TenantServiceListRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m TenantServiceListRequestMultiError) AllErrors() []error { return m }

// TenantServiceListRequestValidationError is the validation error returned by
// TenantServiceListRequest.Validate if the designated constraints aren't met.
type TenantServiceListRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TenantServiceListRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TenantServiceListRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TenantServiceListRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TenantServiceListRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TenantServiceListRequestValidationError) ErrorName() string {
	return "TenantServiceListRequestValidationError"
}

// Error satisfies the builtin error interface
func (e TenantServiceListRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTenantServiceListRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TenantServiceListRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TenantServiceListRequestValidationError{}

// Validate checks the field values on TenantServiceListResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *TenantServiceListResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on TenantServiceListResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// TenantServiceListResponseMultiError, or nil if none found.
func (m *TenantServiceListResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *TenantServiceListResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	for idx, item := range m.GetTenants() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, TenantServiceListResponseValidationError{
						field:  fmt.Sprintf("Tenants[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, TenantServiceListResponseValidationError{
						field:  fmt.Sprintf("Tenants[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return TenantServiceListResponseValidationError{
					field:  fmt.Sprintf("Tenants[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if m.NextPage != nil {
		// no validation rules for NextPage
	}

	if len(errors) > 0 {
		return TenantServiceListResponseMultiError(errors)
	}

	return nil
}

// TenantServiceListResponseMultiError is an error wrapping multiple validation
// errors returned by TenantServiceListResponse.ValidateAll() if the
// designated constraints aren't met.
type TenantServiceListResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m TenantServiceListResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m TenantServiceListResponseMultiError) AllErrors() []error { return m }

// TenantServiceListResponseValidationError is the validation error returned by
// TenantServiceListResponse.Validate if the designated constraints aren't met.
type TenantServiceListResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TenantServiceListResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TenantServiceListResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TenantServiceListResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TenantServiceListResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TenantServiceListResponseValidationError) ErrorName() string {
	return "TenantServiceListResponseValidationError"
}

// Error satisfies the builtin error interface
func (e TenantServiceListResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTenantServiceListResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TenantServiceListResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TenantServiceListResponseValidationError{}

// Validate checks the field values on TenantServiceAdmitRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *TenantServiceAdmitRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on TenantServiceAdmitRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// TenantServiceAdmitRequestMultiError, or nil if none found.
func (m *TenantServiceAdmitRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *TenantServiceAdmitRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for TenantId

	if m.CouponId != nil {
		// no validation rules for CouponId
	}

	if m.Balance != nil {
		// no validation rules for Balance
	}

	if len(errors) > 0 {
		return TenantServiceAdmitRequestMultiError(errors)
	}

	return nil
}

// TenantServiceAdmitRequestMultiError is an error wrapping multiple validation
// errors returned by TenantServiceAdmitRequest.ValidateAll() if the
// designated constraints aren't met.
type TenantServiceAdmitRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m TenantServiceAdmitRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m TenantServiceAdmitRequestMultiError) AllErrors() []error { return m }

// TenantServiceAdmitRequestValidationError is the validation error returned by
// TenantServiceAdmitRequest.Validate if the designated constraints aren't met.
type TenantServiceAdmitRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TenantServiceAdmitRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TenantServiceAdmitRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TenantServiceAdmitRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TenantServiceAdmitRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TenantServiceAdmitRequestValidationError) ErrorName() string {
	return "TenantServiceAdmitRequestValidationError"
}

// Error satisfies the builtin error interface
func (e TenantServiceAdmitRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTenantServiceAdmitRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TenantServiceAdmitRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TenantServiceAdmitRequestValidationError{}

// Validate checks the field values on TenantServiceAdmitResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *TenantServiceAdmitResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on TenantServiceAdmitResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// TenantServiceAdmitResponseMultiError, or nil if none found.
func (m *TenantServiceAdmitResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *TenantServiceAdmitResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetTenant()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, TenantServiceAdmitResponseValidationError{
					field:  "Tenant",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, TenantServiceAdmitResponseValidationError{
					field:  "Tenant",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetTenant()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TenantServiceAdmitResponseValidationError{
				field:  "Tenant",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return TenantServiceAdmitResponseMultiError(errors)
	}

	return nil
}

// TenantServiceAdmitResponseMultiError is an error wrapping multiple
// validation errors returned by TenantServiceAdmitResponse.ValidateAll() if
// the designated constraints aren't met.
type TenantServiceAdmitResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m TenantServiceAdmitResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m TenantServiceAdmitResponseMultiError) AllErrors() []error { return m }

// TenantServiceAdmitResponseValidationError is the validation error returned
// by TenantServiceAdmitResponse.Validate if the designated constraints aren't met.
type TenantServiceAdmitResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TenantServiceAdmitResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TenantServiceAdmitResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TenantServiceAdmitResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TenantServiceAdmitResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TenantServiceAdmitResponseValidationError) ErrorName() string {
	return "TenantServiceAdmitResponseValidationError"
}

// Error satisfies the builtin error interface
func (e TenantServiceAdmitResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTenantServiceAdmitResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TenantServiceAdmitResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TenantServiceAdmitResponseValidationError{}

// Validate checks the field values on TenantServiceRevokeRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *TenantServiceRevokeRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on TenantServiceRevokeRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// TenantServiceRevokeRequestMultiError, or nil if none found.
func (m *TenantServiceRevokeRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *TenantServiceRevokeRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for TenantId

	if len(errors) > 0 {
		return TenantServiceRevokeRequestMultiError(errors)
	}

	return nil
}

// TenantServiceRevokeRequestMultiError is an error wrapping multiple
// validation errors returned by TenantServiceRevokeRequest.ValidateAll() if
// the designated constraints aren't met.
type TenantServiceRevokeRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m TenantServiceRevokeRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m TenantServiceRevokeRequestMultiError) AllErrors() []error { return m }

// TenantServiceRevokeRequestValidationError is the validation error returned
// by TenantServiceRevokeRequest.Validate if the designated constraints aren't met.
type TenantServiceRevokeRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TenantServiceRevokeRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TenantServiceRevokeRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TenantServiceRevokeRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TenantServiceRevokeRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TenantServiceRevokeRequestValidationError) ErrorName() string {
	return "TenantServiceRevokeRequestValidationError"
}

// Error satisfies the builtin error interface
func (e TenantServiceRevokeRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTenantServiceRevokeRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TenantServiceRevokeRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TenantServiceRevokeRequestValidationError{}

// Validate checks the field values on TenantServiceRevokeResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *TenantServiceRevokeResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on TenantServiceRevokeResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// TenantServiceRevokeResponseMultiError, or nil if none found.
func (m *TenantServiceRevokeResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *TenantServiceRevokeResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetTenant()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, TenantServiceRevokeResponseValidationError{
					field:  "Tenant",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, TenantServiceRevokeResponseValidationError{
					field:  "Tenant",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetTenant()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TenantServiceRevokeResponseValidationError{
				field:  "Tenant",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return TenantServiceRevokeResponseMultiError(errors)
	}

	return nil
}

// TenantServiceRevokeResponseMultiError is an error wrapping multiple
// validation errors returned by TenantServiceRevokeResponse.ValidateAll() if
// the designated constraints aren't met.
type TenantServiceRevokeResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m TenantServiceRevokeResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m TenantServiceRevokeResponseMultiError) AllErrors() []error { return m }

// TenantServiceRevokeResponseValidationError is the validation error returned
// by TenantServiceRevokeResponse.Validate if the designated constraints
// aren't met.
type TenantServiceRevokeResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TenantServiceRevokeResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TenantServiceRevokeResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TenantServiceRevokeResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TenantServiceRevokeResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TenantServiceRevokeResponseValidationError) ErrorName() string {
	return "TenantServiceRevokeResponseValidationError"
}

// Error satisfies the builtin error interface
func (e TenantServiceRevokeResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTenantServiceRevokeResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TenantServiceRevokeResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TenantServiceRevokeResponseValidationError{}
