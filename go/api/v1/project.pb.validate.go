// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: api/v1/project.proto

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

// define the regex for a UUID once up-front
var _project_uuidPattern = regexp.MustCompile("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$")

// Validate checks the field values on Project with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Project) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Project with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in ProjectMultiError, or nil if none found.
func (m *Project) ValidateAll() error {
	return m.validate(true)
}

func (m *Project) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Uuid

	// no validation rules for Name

	// no validation rules for Description

	// no validation rules for Tenant

	if all {
		switch v := interface{}(m.GetCreatedAt()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, ProjectValidationError{
					field:  "CreatedAt",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, ProjectValidationError{
					field:  "CreatedAt",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetCreatedAt()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return ProjectValidationError{
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
				errors = append(errors, ProjectValidationError{
					field:  "UpdatedAt",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, ProjectValidationError{
					field:  "UpdatedAt",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetUpdatedAt()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return ProjectValidationError{
				field:  "UpdatedAt",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return ProjectMultiError(errors)
	}

	return nil
}

// ProjectMultiError is an error wrapping multiple validation errors returned
// by Project.ValidateAll() if the designated constraints aren't met.
type ProjectMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ProjectMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ProjectMultiError) AllErrors() []error { return m }

// ProjectValidationError is the validation error returned by Project.Validate
// if the designated constraints aren't met.
type ProjectValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ProjectValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ProjectValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ProjectValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ProjectValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ProjectValidationError) ErrorName() string { return "ProjectValidationError" }

// Error satisfies the builtin error interface
func (e ProjectValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sProject.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ProjectValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ProjectValidationError{}

// Validate checks the field values on ProjectServiceListRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *ProjectServiceListRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ProjectServiceListRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// ProjectServiceListRequestMultiError, or nil if none found.
func (m *ProjectServiceListRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *ProjectServiceListRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if m.Name != nil {

		if l := utf8.RuneCountInString(m.GetName()); l < 2 || l > 128 {
			err := ProjectServiceListRequestValidationError{
				field:  "Name",
				reason: "value length must be between 2 and 128 runes, inclusive",
			}
			if !all {
				return err
			}
			errors = append(errors, err)
		}

	}

	if m.Tenant != nil {

		if l := utf8.RuneCountInString(m.GetTenant()); l < 2 || l > 128 {
			err := ProjectServiceListRequestValidationError{
				field:  "Tenant",
				reason: "value length must be between 2 and 128 runes, inclusive",
			}
			if !all {
				return err
			}
			errors = append(errors, err)
		}

	}

	if len(errors) > 0 {
		return ProjectServiceListRequestMultiError(errors)
	}

	return nil
}

// ProjectServiceListRequestMultiError is an error wrapping multiple validation
// errors returned by ProjectServiceListRequest.ValidateAll() if the
// designated constraints aren't met.
type ProjectServiceListRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ProjectServiceListRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ProjectServiceListRequestMultiError) AllErrors() []error { return m }

// ProjectServiceListRequestValidationError is the validation error returned by
// ProjectServiceListRequest.Validate if the designated constraints aren't met.
type ProjectServiceListRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ProjectServiceListRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ProjectServiceListRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ProjectServiceListRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ProjectServiceListRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ProjectServiceListRequestValidationError) ErrorName() string {
	return "ProjectServiceListRequestValidationError"
}

// Error satisfies the builtin error interface
func (e ProjectServiceListRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sProjectServiceListRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ProjectServiceListRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ProjectServiceListRequestValidationError{}

// Validate checks the field values on ProjectServiceListResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *ProjectServiceListResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ProjectServiceListResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// ProjectServiceListResponseMultiError, or nil if none found.
func (m *ProjectServiceListResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *ProjectServiceListResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	for idx, item := range m.GetProjects() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, ProjectServiceListResponseValidationError{
						field:  fmt.Sprintf("Projects[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, ProjectServiceListResponseValidationError{
						field:  fmt.Sprintf("Projects[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return ProjectServiceListResponseValidationError{
					field:  fmt.Sprintf("Projects[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(errors) > 0 {
		return ProjectServiceListResponseMultiError(errors)
	}

	return nil
}

// ProjectServiceListResponseMultiError is an error wrapping multiple
// validation errors returned by ProjectServiceListResponse.ValidateAll() if
// the designated constraints aren't met.
type ProjectServiceListResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ProjectServiceListResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ProjectServiceListResponseMultiError) AllErrors() []error { return m }

// ProjectServiceListResponseValidationError is the validation error returned
// by ProjectServiceListResponse.Validate if the designated constraints aren't met.
type ProjectServiceListResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ProjectServiceListResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ProjectServiceListResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ProjectServiceListResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ProjectServiceListResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ProjectServiceListResponseValidationError) ErrorName() string {
	return "ProjectServiceListResponseValidationError"
}

// Error satisfies the builtin error interface
func (e ProjectServiceListResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sProjectServiceListResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ProjectServiceListResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ProjectServiceListResponseValidationError{}

// Validate checks the field values on ProjectServiceGetRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *ProjectServiceGetRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ProjectServiceGetRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// ProjectServiceGetRequestMultiError, or nil if none found.
func (m *ProjectServiceGetRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *ProjectServiceGetRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if err := m._validateUuid(m.GetProject()); err != nil {
		err = ProjectServiceGetRequestValidationError{
			field:  "Project",
			reason: "value must be a valid UUID",
			cause:  err,
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return ProjectServiceGetRequestMultiError(errors)
	}

	return nil
}

func (m *ProjectServiceGetRequest) _validateUuid(uuid string) error {
	if matched := _project_uuidPattern.MatchString(uuid); !matched {
		return errors.New("invalid uuid format")
	}

	return nil
}

// ProjectServiceGetRequestMultiError is an error wrapping multiple validation
// errors returned by ProjectServiceGetRequest.ValidateAll() if the designated
// constraints aren't met.
type ProjectServiceGetRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ProjectServiceGetRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ProjectServiceGetRequestMultiError) AllErrors() []error { return m }

// ProjectServiceGetRequestValidationError is the validation error returned by
// ProjectServiceGetRequest.Validate if the designated constraints aren't met.
type ProjectServiceGetRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ProjectServiceGetRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ProjectServiceGetRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ProjectServiceGetRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ProjectServiceGetRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ProjectServiceGetRequestValidationError) ErrorName() string {
	return "ProjectServiceGetRequestValidationError"
}

// Error satisfies the builtin error interface
func (e ProjectServiceGetRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sProjectServiceGetRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ProjectServiceGetRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ProjectServiceGetRequestValidationError{}

// Validate checks the field values on ProjectServiceGetResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *ProjectServiceGetResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ProjectServiceGetResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// ProjectServiceGetResponseMultiError, or nil if none found.
func (m *ProjectServiceGetResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *ProjectServiceGetResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetProject()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, ProjectServiceGetResponseValidationError{
					field:  "Project",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, ProjectServiceGetResponseValidationError{
					field:  "Project",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetProject()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return ProjectServiceGetResponseValidationError{
				field:  "Project",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return ProjectServiceGetResponseMultiError(errors)
	}

	return nil
}

// ProjectServiceGetResponseMultiError is an error wrapping multiple validation
// errors returned by ProjectServiceGetResponse.ValidateAll() if the
// designated constraints aren't met.
type ProjectServiceGetResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ProjectServiceGetResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ProjectServiceGetResponseMultiError) AllErrors() []error { return m }

// ProjectServiceGetResponseValidationError is the validation error returned by
// ProjectServiceGetResponse.Validate if the designated constraints aren't met.
type ProjectServiceGetResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ProjectServiceGetResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ProjectServiceGetResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ProjectServiceGetResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ProjectServiceGetResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ProjectServiceGetResponseValidationError) ErrorName() string {
	return "ProjectServiceGetResponseValidationError"
}

// Error satisfies the builtin error interface
func (e ProjectServiceGetResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sProjectServiceGetResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ProjectServiceGetResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ProjectServiceGetResponseValidationError{}
