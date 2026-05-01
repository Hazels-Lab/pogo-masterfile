package masterfileapi

import (
	"errors"
	"fmt"
)

// FetchError reports a transport-level failure (DNS, connection, EOF, etc.) when
// loading the masterfile.
type FetchError struct {
	URL string
	Err error
}

func (e *FetchError) Error() string {
	return fmt.Sprintf("masterfile: fetch %s: %v", e.URL, e.Err)
}

func (e *FetchError) Unwrap() error { return e.Err }

// StatusError reports a non-2xx HTTP response.
type StatusError struct {
	URL    string
	Status int
}

func (e *StatusError) Error() string {
	return fmt.Sprintf("masterfile: HTTP %d from %s", e.Status, e.URL)
}

// ParseError reports a JSON decoding failure.
type ParseError struct {
	Err error
}

func (e *ParseError) Error() string {
	return fmt.Sprintf("masterfile: parse: %v", e.Err)
}

func (e *ParseError) Unwrap() error { return e.Err }

// ErrInvalidShape is returned when the loaded JSON is not a top-level array.
var ErrInvalidShape = errors.New("masterfile: expected JSON array of entries")
