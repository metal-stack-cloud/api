// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: admin/v1/payment.proto

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

// Validate checks the field values on PaymentServiceListCouponsRequest with
// the rules defined in the proto definition for this message. If any rules
// are violated, the first error encountered is returned, or nil if there are
// no violations.
func (m *PaymentServiceListCouponsRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on PaymentServiceListCouponsRequest with
// the rules defined in the proto definition for this message. If any rules
// are violated, the result is a list of violation errors wrapped in
// PaymentServiceListCouponsRequestMultiError, or nil if none found.
func (m *PaymentServiceListCouponsRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *PaymentServiceListCouponsRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if len(errors) > 0 {
		return PaymentServiceListCouponsRequestMultiError(errors)
	}

	return nil
}

// PaymentServiceListCouponsRequestMultiError is an error wrapping multiple
// validation errors returned by
// PaymentServiceListCouponsRequest.ValidateAll() if the designated
// constraints aren't met.
type PaymentServiceListCouponsRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m PaymentServiceListCouponsRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m PaymentServiceListCouponsRequestMultiError) AllErrors() []error { return m }

// PaymentServiceListCouponsRequestValidationError is the validation error
// returned by PaymentServiceListCouponsRequest.Validate if the designated
// constraints aren't met.
type PaymentServiceListCouponsRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e PaymentServiceListCouponsRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e PaymentServiceListCouponsRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e PaymentServiceListCouponsRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e PaymentServiceListCouponsRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e PaymentServiceListCouponsRequestValidationError) ErrorName() string {
	return "PaymentServiceListCouponsRequestValidationError"
}

// Error satisfies the builtin error interface
func (e PaymentServiceListCouponsRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sPaymentServiceListCouponsRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = PaymentServiceListCouponsRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = PaymentServiceListCouponsRequestValidationError{}

// Validate checks the field values on PaymentServiceListCouponsResponse with
// the rules defined in the proto definition for this message. If any rules
// are violated, the first error encountered is returned, or nil if there are
// no violations.
func (m *PaymentServiceListCouponsResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on PaymentServiceListCouponsResponse
// with the rules defined in the proto definition for this message. If any
// rules are violated, the result is a list of violation errors wrapped in
// PaymentServiceListCouponsResponseMultiError, or nil if none found.
func (m *PaymentServiceListCouponsResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *PaymentServiceListCouponsResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	for idx, item := range m.GetCoupons() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, PaymentServiceListCouponsResponseValidationError{
						field:  fmt.Sprintf("Coupons[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, PaymentServiceListCouponsResponseValidationError{
						field:  fmt.Sprintf("Coupons[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return PaymentServiceListCouponsResponseValidationError{
					field:  fmt.Sprintf("Coupons[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(errors) > 0 {
		return PaymentServiceListCouponsResponseMultiError(errors)
	}

	return nil
}

// PaymentServiceListCouponsResponseMultiError is an error wrapping multiple
// validation errors returned by
// PaymentServiceListCouponsResponse.ValidateAll() if the designated
// constraints aren't met.
type PaymentServiceListCouponsResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m PaymentServiceListCouponsResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m PaymentServiceListCouponsResponseMultiError) AllErrors() []error { return m }

// PaymentServiceListCouponsResponseValidationError is the validation error
// returned by PaymentServiceListCouponsResponse.Validate if the designated
// constraints aren't met.
type PaymentServiceListCouponsResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e PaymentServiceListCouponsResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e PaymentServiceListCouponsResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e PaymentServiceListCouponsResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e PaymentServiceListCouponsResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e PaymentServiceListCouponsResponseValidationError) ErrorName() string {
	return "PaymentServiceListCouponsResponseValidationError"
}

// Error satisfies the builtin error interface
func (e PaymentServiceListCouponsResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sPaymentServiceListCouponsResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = PaymentServiceListCouponsResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = PaymentServiceListCouponsResponseValidationError{}

// Validate checks the field values on PaymentServiceAddCouponToCustomerRequest
// with the rules defined in the proto definition for this message. If any
// rules are violated, the first error encountered is returned, or nil if
// there are no violations.
func (m *PaymentServiceAddCouponToCustomerRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on
// PaymentServiceAddCouponToCustomerRequest with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in
// PaymentServiceAddCouponToCustomerRequestMultiError, or nil if none found.
func (m *PaymentServiceAddCouponToCustomerRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *PaymentServiceAddCouponToCustomerRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetCustomer()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, PaymentServiceAddCouponToCustomerRequestValidationError{
					field:  "Customer",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, PaymentServiceAddCouponToCustomerRequestValidationError{
					field:  "Customer",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetCustomer()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return PaymentServiceAddCouponToCustomerRequestValidationError{
				field:  "Customer",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	// no validation rules for CouponId

	if len(errors) > 0 {
		return PaymentServiceAddCouponToCustomerRequestMultiError(errors)
	}

	return nil
}

// PaymentServiceAddCouponToCustomerRequestMultiError is an error wrapping
// multiple validation errors returned by
// PaymentServiceAddCouponToCustomerRequest.ValidateAll() if the designated
// constraints aren't met.
type PaymentServiceAddCouponToCustomerRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m PaymentServiceAddCouponToCustomerRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m PaymentServiceAddCouponToCustomerRequestMultiError) AllErrors() []error { return m }

// PaymentServiceAddCouponToCustomerRequestValidationError is the validation
// error returned by PaymentServiceAddCouponToCustomerRequest.Validate if the
// designated constraints aren't met.
type PaymentServiceAddCouponToCustomerRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e PaymentServiceAddCouponToCustomerRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e PaymentServiceAddCouponToCustomerRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e PaymentServiceAddCouponToCustomerRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e PaymentServiceAddCouponToCustomerRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e PaymentServiceAddCouponToCustomerRequestValidationError) ErrorName() string {
	return "PaymentServiceAddCouponToCustomerRequestValidationError"
}

// Error satisfies the builtin error interface
func (e PaymentServiceAddCouponToCustomerRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sPaymentServiceAddCouponToCustomerRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = PaymentServiceAddCouponToCustomerRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = PaymentServiceAddCouponToCustomerRequestValidationError{}

// Validate checks the field values on
// PaymentServiceAddCouponToCustomerResponse with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *PaymentServiceAddCouponToCustomerResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on
// PaymentServiceAddCouponToCustomerResponse with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in
// PaymentServiceAddCouponToCustomerResponseMultiError, or nil if none found.
func (m *PaymentServiceAddCouponToCustomerResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *PaymentServiceAddCouponToCustomerResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetCustomer()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, PaymentServiceAddCouponToCustomerResponseValidationError{
					field:  "Customer",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, PaymentServiceAddCouponToCustomerResponseValidationError{
					field:  "Customer",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetCustomer()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return PaymentServiceAddCouponToCustomerResponseValidationError{
				field:  "Customer",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return PaymentServiceAddCouponToCustomerResponseMultiError(errors)
	}

	return nil
}

// PaymentServiceAddCouponToCustomerResponseMultiError is an error wrapping
// multiple validation errors returned by
// PaymentServiceAddCouponToCustomerResponse.ValidateAll() if the designated
// constraints aren't met.
type PaymentServiceAddCouponToCustomerResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m PaymentServiceAddCouponToCustomerResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m PaymentServiceAddCouponToCustomerResponseMultiError) AllErrors() []error { return m }

// PaymentServiceAddCouponToCustomerResponseValidationError is the validation
// error returned by PaymentServiceAddCouponToCustomerResponse.Validate if the
// designated constraints aren't met.
type PaymentServiceAddCouponToCustomerResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e PaymentServiceAddCouponToCustomerResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e PaymentServiceAddCouponToCustomerResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e PaymentServiceAddCouponToCustomerResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e PaymentServiceAddCouponToCustomerResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e PaymentServiceAddCouponToCustomerResponseValidationError) ErrorName() string {
	return "PaymentServiceAddCouponToCustomerResponseValidationError"
}

// Error satisfies the builtin error interface
func (e PaymentServiceAddCouponToCustomerResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sPaymentServiceAddCouponToCustomerResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = PaymentServiceAddCouponToCustomerResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = PaymentServiceAddCouponToCustomerResponseValidationError{}

// Validate checks the field values on
// PaymentServiceAddBalanceToCustomerRequest with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *PaymentServiceAddBalanceToCustomerRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on
// PaymentServiceAddBalanceToCustomerRequest with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in
// PaymentServiceAddBalanceToCustomerRequestMultiError, or nil if none found.
func (m *PaymentServiceAddBalanceToCustomerRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *PaymentServiceAddBalanceToCustomerRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetCustomer()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, PaymentServiceAddBalanceToCustomerRequestValidationError{
					field:  "Customer",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, PaymentServiceAddBalanceToCustomerRequestValidationError{
					field:  "Customer",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetCustomer()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return PaymentServiceAddBalanceToCustomerRequestValidationError{
				field:  "Customer",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	// no validation rules for BalanceToAdd

	if len(errors) > 0 {
		return PaymentServiceAddBalanceToCustomerRequestMultiError(errors)
	}

	return nil
}

// PaymentServiceAddBalanceToCustomerRequestMultiError is an error wrapping
// multiple validation errors returned by
// PaymentServiceAddBalanceToCustomerRequest.ValidateAll() if the designated
// constraints aren't met.
type PaymentServiceAddBalanceToCustomerRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m PaymentServiceAddBalanceToCustomerRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m PaymentServiceAddBalanceToCustomerRequestMultiError) AllErrors() []error { return m }

// PaymentServiceAddBalanceToCustomerRequestValidationError is the validation
// error returned by PaymentServiceAddBalanceToCustomerRequest.Validate if the
// designated constraints aren't met.
type PaymentServiceAddBalanceToCustomerRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e PaymentServiceAddBalanceToCustomerRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e PaymentServiceAddBalanceToCustomerRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e PaymentServiceAddBalanceToCustomerRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e PaymentServiceAddBalanceToCustomerRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e PaymentServiceAddBalanceToCustomerRequestValidationError) ErrorName() string {
	return "PaymentServiceAddBalanceToCustomerRequestValidationError"
}

// Error satisfies the builtin error interface
func (e PaymentServiceAddBalanceToCustomerRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sPaymentServiceAddBalanceToCustomerRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = PaymentServiceAddBalanceToCustomerRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = PaymentServiceAddBalanceToCustomerRequestValidationError{}

// Validate checks the field values on
// PaymentServiceAddBalanceToCustomerResponse with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *PaymentServiceAddBalanceToCustomerResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on
// PaymentServiceAddBalanceToCustomerResponse with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in
// PaymentServiceAddBalanceToCustomerResponseMultiError, or nil if none found.
func (m *PaymentServiceAddBalanceToCustomerResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *PaymentServiceAddBalanceToCustomerResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetCustomer()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, PaymentServiceAddBalanceToCustomerResponseValidationError{
					field:  "Customer",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, PaymentServiceAddBalanceToCustomerResponseValidationError{
					field:  "Customer",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetCustomer()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return PaymentServiceAddBalanceToCustomerResponseValidationError{
				field:  "Customer",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return PaymentServiceAddBalanceToCustomerResponseMultiError(errors)
	}

	return nil
}

// PaymentServiceAddBalanceToCustomerResponseMultiError is an error wrapping
// multiple validation errors returned by
// PaymentServiceAddBalanceToCustomerResponse.ValidateAll() if the designated
// constraints aren't met.
type PaymentServiceAddBalanceToCustomerResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m PaymentServiceAddBalanceToCustomerResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m PaymentServiceAddBalanceToCustomerResponseMultiError) AllErrors() []error { return m }

// PaymentServiceAddBalanceToCustomerResponseValidationError is the validation
// error returned by PaymentServiceAddBalanceToCustomerResponse.Validate if
// the designated constraints aren't met.
type PaymentServiceAddBalanceToCustomerResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e PaymentServiceAddBalanceToCustomerResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e PaymentServiceAddBalanceToCustomerResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e PaymentServiceAddBalanceToCustomerResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e PaymentServiceAddBalanceToCustomerResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e PaymentServiceAddBalanceToCustomerResponseValidationError) ErrorName() string {
	return "PaymentServiceAddBalanceToCustomerResponseValidationError"
}

// Error satisfies the builtin error interface
func (e PaymentServiceAddBalanceToCustomerResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sPaymentServiceAddBalanceToCustomerResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = PaymentServiceAddBalanceToCustomerResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = PaymentServiceAddBalanceToCustomerResponseValidationError{}
