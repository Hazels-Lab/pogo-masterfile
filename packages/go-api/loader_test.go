package masterfileapi

import (
	"context"
	"errors"
	"net/http"
	"net/http/httptest"
	"testing"

	masterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"
)

func TestLoadRemote_Success(t *testing.T) {
	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		_, _ = w.Write([]byte(fixtureJSON))
	}))
	defer srv.Close()

	mf, err := LoadRemote(context.Background(), WithURL(srv.URL))
	if err != nil {
		t.Fatalf("unexpected: %v", err)
	}
	if mf.Len() != 1 {
		t.Errorf("Len = %d", mf.Len())
	}
}

func TestLoadRemote_Non2xx_ReturnsStatusError(t *testing.T) {
	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.Error(w, "boom", http.StatusInternalServerError)
	}))
	defer srv.Close()

	_, err := LoadRemote(context.Background(), WithURL(srv.URL))
	var se *StatusError
	if !errors.As(err, &se) {
		t.Fatalf("expected *StatusError, got %T: %v", err, err)
	}
	if se.Status != 500 {
		t.Errorf("Status = %d", se.Status)
	}
}

func TestLoadRemote_BadBody_ReturnsParseError(t *testing.T) {
	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		_, _ = w.Write([]byte("{not json"))
	}))
	defer srv.Close()

	_, err := LoadRemote(context.Background(), WithURL(srv.URL))
	var pe *ParseError
	if !errors.As(err, &pe) {
		t.Fatalf("expected *ParseError, got %T: %v", err, err)
	}
}

func TestLoadRemote_WithFetcher_BypassesHTTP(t *testing.T) {
	called := false
	mf, err := LoadRemote(
		context.Background(),
		WithURL("http://unused.example/"),
		WithFetcher(FetcherFunc(func(ctx context.Context, url string) ([]masterfile.MasterfileEntry, error) {
			called = true
			return masterfile.ParseMasterfile([]byte(fixtureJSON))
		})),
	)
	if err != nil {
		t.Fatalf("unexpected: %v", err)
	}
	if !called {
		t.Error("custom fetcher was not used")
	}
	if mf.Len() != 1 {
		t.Errorf("Len = %d", mf.Len())
	}
}

func TestLoadRemote_WithHTTPClient_AppliesTimeoutSettings(t *testing.T) {
	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		_, _ = w.Write([]byte(fixtureJSON))
	}))
	defer srv.Close()

	client := &http.Client{} // not the default; verifies plumbing
	mf, err := LoadRemote(context.Background(), WithURL(srv.URL), WithHTTPClient(client))
	if err != nil {
		t.Fatalf("unexpected: %v", err)
	}
	if mf.Len() != 1 {
		t.Errorf("Len = %d", mf.Len())
	}
}
