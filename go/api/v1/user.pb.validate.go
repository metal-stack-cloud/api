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

	for idx, item := range m.GetOrganizations() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, UserValidationError{
						field:  fmt.Sprintf("Organizations[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, UserValidationError{
						field:  fmt.Sprintf("Organizations[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return UserValidationError{
					field:  fmt.Sprintf("Organizations[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
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

// Validate checks the field values on Organization with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Organization) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Organization with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in OrganizationMultiError, or
// nil if none found.
func (m *Organization) ValidateAll() error {
	return m.validate(true)
}

func (m *Organization) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	// no validation rules for Login

	// no validation rules for Name

	// no validation rules for Email

	// no validation rules for BillingEmail

	// no validation rules for AvatarUrl

	// no validation rules for Role

	for idx, item := range m.GetTeams() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, OrganizationValidationError{
						field:  fmt.Sprintf("Teams[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, OrganizationValidationError{
						field:  fmt.Sprintf("Teams[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return OrganizationValidationError{
					field:  fmt.Sprintf("Teams[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if m.Admitted != nil {
		// no validation rules for Admitted
	}

	if len(errors) > 0 {
		return OrganizationMultiError(errors)
	}

	return nil
}

// OrganizationMultiError is an error wrapping multiple validation errors
// returned by Organization.ValidateAll() if the designated constraints aren't met.
type OrganizationMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m OrganizationMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m OrganizationMultiError) AllErrors() []error { return m }

// OrganizationValidationError is the validation error returned by
// Organization.Validate if the designated constraints aren't met.
type OrganizationValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e OrganizationValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e OrganizationValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e OrganizationValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e OrganizationValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e OrganizationValidationError) ErrorName() string { return "OrganizationValidationError" }

// Error satisfies the builtin error interface
func (e OrganizationValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sOrganization.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = OrganizationValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = OrganizationValidationError{}

// Validate checks the field values on Team with the rules defined in the proto
// definition for this message. If any rules are violated, the first error
// encountered is returned, or nil if there are no violations.
func (m *Team) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Team with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in TeamMultiError, or nil if none found.
func (m *Team) ValidateAll() error {
	return m.validate(true)
}

func (m *Team) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	// no validation rules for Name

	// no validation rules for AvatarUrl

	// no validation rules for Role

	// no validation rules for ProjectId

	if len(errors) > 0 {
		return TeamMultiError(errors)
	}

	return nil
}

// TeamMultiError is an error wrapping multiple validation errors returned by
// Team.ValidateAll() if the designated constraints aren't met.
type TeamMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m TeamMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m TeamMultiError) AllErrors() []error { return m }

// TeamValidationError is the validation error returned by Team.Validate if the
// designated constraints aren't met.
type TeamValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TeamValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TeamValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TeamValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TeamValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TeamValidationError) ErrorName() string { return "TeamValidationError" }

// Error satisfies the builtin error interface
func (e TeamValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTeam.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TeamValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TeamValidationError{}
