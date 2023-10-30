// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: admin/v1/token.proto

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
var _token_uuidPattern = regexp.MustCompile("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$")

// Validate checks the field values on TokenServiceListRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *TokenServiceListRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on TokenServiceListRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// TokenServiceListRequestMultiError, or nil if none found.
func (m *TokenServiceListRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *TokenServiceListRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if m.UserId != nil {
		// no validation rules for UserId
	}

	if len(errors) > 0 {
		return TokenServiceListRequestMultiError(errors)
	}

	return nil
}

// TokenServiceListRequestMultiError is an error wrapping multiple validation
// errors returned by TokenServiceListRequest.ValidateAll() if the designated
// constraints aren't met.
type TokenServiceListRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m TokenServiceListRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m TokenServiceListRequestMultiError) AllErrors() []error { return m }

// TokenServiceListRequestValidationError is the validation error returned by
// TokenServiceListRequest.Validate if the designated constraints aren't met.
type TokenServiceListRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TokenServiceListRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TokenServiceListRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TokenServiceListRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TokenServiceListRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TokenServiceListRequestValidationError) ErrorName() string {
	return "TokenServiceListRequestValidationError"
}

// Error satisfies the builtin error interface
func (e TokenServiceListRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTokenServiceListRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TokenServiceListRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TokenServiceListRequestValidationError{}

// Validate checks the field values on TokenServiceListResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *TokenServiceListResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on TokenServiceListResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// TokenServiceListResponseMultiError, or nil if none found.
func (m *TokenServiceListResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *TokenServiceListResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	for idx, item := range m.GetTokens() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, TokenServiceListResponseValidationError{
						field:  fmt.Sprintf("Tokens[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, TokenServiceListResponseValidationError{
						field:  fmt.Sprintf("Tokens[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return TokenServiceListResponseValidationError{
					field:  fmt.Sprintf("Tokens[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(errors) > 0 {
		return TokenServiceListResponseMultiError(errors)
	}

	return nil
}

// TokenServiceListResponseMultiError is an error wrapping multiple validation
// errors returned by TokenServiceListResponse.ValidateAll() if the designated
// constraints aren't met.
type TokenServiceListResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m TokenServiceListResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m TokenServiceListResponseMultiError) AllErrors() []error { return m }

// TokenServiceListResponseValidationError is the validation error returned by
// TokenServiceListResponse.Validate if the designated constraints aren't met.
type TokenServiceListResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TokenServiceListResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TokenServiceListResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TokenServiceListResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TokenServiceListResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TokenServiceListResponseValidationError) ErrorName() string {
	return "TokenServiceListResponseValidationError"
}

// Error satisfies the builtin error interface
func (e TokenServiceListResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTokenServiceListResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TokenServiceListResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TokenServiceListResponseValidationError{}

// Validate checks the field values on TokenServiceRevokeRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *TokenServiceRevokeRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on TokenServiceRevokeRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// TokenServiceRevokeRequestMultiError, or nil if none found.
func (m *TokenServiceRevokeRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *TokenServiceRevokeRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if err := m._validateUuid(m.GetUuid()); err != nil {
		err = TokenServiceRevokeRequestValidationError{
			field:  "Uuid",
			reason: "value must be a valid UUID",
			cause:  err,
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if l := utf8.RuneCountInString(m.GetUserId()); l < 2 || l > 512 {
		err := TokenServiceRevokeRequestValidationError{
			field:  "UserId",
			reason: "value length must be between 2 and 512 runes, inclusive",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return TokenServiceRevokeRequestMultiError(errors)
	}

	return nil
}

func (m *TokenServiceRevokeRequest) _validateUuid(uuid string) error {
	if matched := _token_uuidPattern.MatchString(uuid); !matched {
		return errors.New("invalid uuid format")
	}

	return nil
}

// TokenServiceRevokeRequestMultiError is an error wrapping multiple validation
// errors returned by TokenServiceRevokeRequest.ValidateAll() if the
// designated constraints aren't met.
type TokenServiceRevokeRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m TokenServiceRevokeRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m TokenServiceRevokeRequestMultiError) AllErrors() []error { return m }

// TokenServiceRevokeRequestValidationError is the validation error returned by
// TokenServiceRevokeRequest.Validate if the designated constraints aren't met.
type TokenServiceRevokeRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TokenServiceRevokeRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TokenServiceRevokeRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TokenServiceRevokeRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TokenServiceRevokeRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TokenServiceRevokeRequestValidationError) ErrorName() string {
	return "TokenServiceRevokeRequestValidationError"
}

// Error satisfies the builtin error interface
func (e TokenServiceRevokeRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTokenServiceRevokeRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TokenServiceRevokeRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TokenServiceRevokeRequestValidationError{}

// Validate checks the field values on TokenServiceRevokeResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *TokenServiceRevokeResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on TokenServiceRevokeResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// TokenServiceRevokeResponseMultiError, or nil if none found.
func (m *TokenServiceRevokeResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *TokenServiceRevokeResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if len(errors) > 0 {
		return TokenServiceRevokeResponseMultiError(errors)
	}

	return nil
}

// TokenServiceRevokeResponseMultiError is an error wrapping multiple
// validation errors returned by TokenServiceRevokeResponse.ValidateAll() if
// the designated constraints aren't met.
type TokenServiceRevokeResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m TokenServiceRevokeResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m TokenServiceRevokeResponseMultiError) AllErrors() []error { return m }

// TokenServiceRevokeResponseValidationError is the validation error returned
// by TokenServiceRevokeResponse.Validate if the designated constraints aren't met.
type TokenServiceRevokeResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TokenServiceRevokeResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TokenServiceRevokeResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TokenServiceRevokeResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TokenServiceRevokeResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TokenServiceRevokeResponseValidationError) ErrorName() string {
	return "TokenServiceRevokeResponseValidationError"
}

// Error satisfies the builtin error interface
func (e TokenServiceRevokeResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTokenServiceRevokeResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TokenServiceRevokeResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TokenServiceRevokeResponseValidationError{}
