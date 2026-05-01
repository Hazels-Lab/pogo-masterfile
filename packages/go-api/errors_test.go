package masterfileapi

import (
	"errors"
	"io"
	"testing"
)

func TestFetchError_ErrorAndUnwrap(t *testing.T) {
	cause := io.ErrUnexpectedEOF
	err := &FetchError{URL: "http://example.test/x", Err: cause}
	if got := err.Error(); got != "masterfile: fetch http://example.test/x: unexpected EOF" {
		t.Errorf("unexpected message: %q", got)
	}
	if !errors.Is(err, io.ErrUnexpectedEOF) {
		t.Error("errors.Is should unwrap to cause")
	}
	var fe *FetchError
	if !errors.As(err, &fe) || fe.URL != "http://example.test/x" {
		t.Error("errors.As should bind URL")
	}
}

func TestStatusError_Error(t *testing.T) {
	err := &StatusError{URL: "http://example.test/x", Status: 503}
	if got := err.Error(); got != "masterfile: HTTP 503 from http://example.test/x" {
		t.Errorf("unexpected message: %q", got)
	}
	var se *StatusError
	if !errors.As(err, &se) || se.Status != 503 {
		t.Error("errors.As should bind Status")
	}
}

func TestParseError_ErrorAndUnwrap(t *testing.T) {
	cause := errors.New("syntax")
	err := &ParseError{Err: cause}
	if got := err.Error(); got != "masterfile: parse: syntax" {
		t.Errorf("unexpected message: %q", got)
	}
	if !errors.Is(err, cause) {
		t.Error("errors.Is should unwrap to cause")
	}
}

func TestErrInvalidShape_IsSentinel(t *testing.T) {
	wrapped := errors.Join(ErrInvalidShape, errors.New("extra"))
	if !errors.Is(wrapped, ErrInvalidShape) {
		t.Error("errors.Is should match the sentinel through Join")
	}
}
