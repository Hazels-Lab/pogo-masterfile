package masterfileapi

import (
	"context"
	"errors"
	"testing"

	masterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"
)

func TestFetcherFunc_ImplementsFetcher(t *testing.T) {
	called := false
	var f Fetcher = FetcherFunc(func(ctx context.Context, url string) ([]masterfile.MasterfileEntry, error) {
		called = true
		if url != "http://example.test/x" {
			return nil, errors.New("wrong url")
		}
		return nil, nil
	})
	_, err := f.Fetch(context.Background(), "http://example.test/x")
	if err != nil {
		t.Fatalf("unexpected: %v", err)
	}
	if !called {
		t.Error("FetcherFunc was not invoked")
	}
}
