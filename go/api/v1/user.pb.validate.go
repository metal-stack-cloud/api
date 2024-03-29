// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: api/v1/user.proto

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

// Validate checks the field values on User with the rules defined in the proto
// definition for this message. If any rules are violated, the first error
// encountered is returned, or nil if there are no violations.
func (m *User) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on User with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in UserMultiError, or nil if none found.
func (m *User) ValidateAll() error {
	return m.validate(true)
}

func (m *User) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Login

	// no validation rules for Name

	// no validation rules for Email

	// no validation rules for AvatarUrl

	// no validation rules for OauthProvider

	for idx, item := range m.GetTenants() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, UserValidationError{
						field:  fmt.Sprintf("Tenants[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, UserValidationError{
						field:  fmt.Sprintf("Tenants[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return UserValidationError{
					field:  fmt.Sprintf("Tenants[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetProjects() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, UserValidationError{
						field:  fmt.Sprintf("Projects[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, UserValidationError{
						field:  fmt.Sprintf("Projects[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return UserValidationError{
					field:  fmt.Sprintf("Projects[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if all {
		switch v := interface{}(m.GetDefaultTenant()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, UserValidationError{
					field:  "DefaultTenant",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, UserValidationError{
					field:  "DefaultTenant",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetDefaultTenant()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return UserValidationError{
				field:  "DefaultTenant",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if all {
		switch v := interface{}(m.GetDefaultProject()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, UserValidationError{
					field:  "DefaultProject",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, UserValidationError{
					field:  "DefaultProject",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetDefaultProject()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return UserValidationError{
				field:  "DefaultProject",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return UserMultiError(errors)
	}

	return nil
}

// UserMultiError is an error wrapping multiple validation errors returned by
// User.ValidateAll() if the designated constraints aren't met.
type UserMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m UserMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m UserMultiError) AllErrors() []error { return m }

// UserValidationError is the validation error returned by User.Validate if the
// designated constraints aren't met.
type UserValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e UserValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e UserValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e UserValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e UserValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e UserValidationError) ErrorName() string { return "UserValidationError" }

// Error satisfies the builtin error interface
func (e UserValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sUser.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = UserValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = UserValidationError{}

// Validate checks the field values on UserServiceGetRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *UserServiceGetRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on UserServiceGetRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// UserServiceGetRequestMultiError, or nil if none found.
func (m *UserServiceGetRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *UserServiceGetRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if len(errors) > 0 {
		return UserServiceGetRequestMultiError(errors)
	}

	return nil
}

// UserServiceGetRequestMultiError is an error wrapping multiple validation
// errors returned by UserServiceGetRequest.ValidateAll() if the designated
// constraints aren't met.
type UserServiceGetRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m UserServiceGetRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m UserServiceGetRequestMultiError) AllErrors() []error { return m }

// UserServiceGetRequestValidationError is the validation error returned by
// UserServiceGetRequest.Validate if the designated constraints aren't met.
type UserServiceGetRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e UserServiceGetRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e UserServiceGetRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e UserServiceGetRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e UserServiceGetRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e UserServiceGetRequestValidationError) ErrorName() string {
	return "UserServiceGetRequestValidationError"
}

// Error satisfies the builtin error interface
func (e UserServiceGetRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sUserServiceGetRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = UserServiceGetRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = UserServiceGetRequestValidationError{}

// Validate checks the field values on UserServiceGetResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *UserServiceGetResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on UserServiceGetResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// UserServiceGetResponseMultiError, or nil if none found.
func (m *UserServiceGetResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *UserServiceGetResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetUser()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, UserServiceGetResponseValidationError{
					field:  "User",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, UserServiceGetResponseValidationError{
					field:  "User",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetUser()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return UserServiceGetResponseValidationError{
				field:  "User",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return UserServiceGetResponseMultiError(errors)
	}

	return nil
}

// UserServiceGetResponseMultiError is an error wrapping multiple validation
// errors returned by UserServiceGetResponse.ValidateAll() if the designated
// constraints aren't met.
type UserServiceGetResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m UserServiceGetResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m UserServiceGetResponseMultiError) AllErrors() []error { return m }

// UserServiceGetResponseValidationError is the validation error returned by
// UserServiceGetResponse.Validate if the designated constraints aren't met.
type UserServiceGetResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e UserServiceGetResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e UserServiceGetResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e UserServiceGetResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e UserServiceGetResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e UserServiceGetResponseValidationError) ErrorName() string {
	return "UserServiceGetResponseValidationError"
}

// Error satisfies the builtin error interface
func (e UserServiceGetResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sUserServiceGetResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = UserServiceGetResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = UserServiceGetResponseValidationError{}
