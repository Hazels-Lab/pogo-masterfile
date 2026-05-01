package masterfileapi

import (
	"context"
	"io"
	"net/http"

	masterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"
)

// DefaultMasterfileURL is the upstream URL used by LoadRemote when WithURL is
// not supplied.
const DefaultMasterfileURL = "https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json"

// Fetcher is the minimal abstraction LoadRemote uses to obtain a parsed
// []MasterfileEntry. Default implementation goes over HTTP via httpFetcher.
// Replace via WithFetcher for non-HTTP sources, custom JSON unwrapping, etc.
type Fetcher interface {
	Fetch(ctx context.Context, url string) ([]masterfile.MasterfileEntry, error)
}

// FetcherFunc adapts an ordinary function value to the Fetcher interface.
type FetcherFunc func(ctx context.Context, url string) ([]masterfile.MasterfileEntry, error)

// Fetch calls f.
func (f FetcherFunc) Fetch(ctx context.Context, url string) ([]masterfile.MasterfileEntry, error) {
	return f(ctx, url)
}

// httpFetcher is the default Fetcher when WithFetcher is not supplied.
type httpFetcher struct {
	client *http.Client // nil → uses http.DefaultClient
}

func (f *httpFetcher) Fetch(ctx context.Context, url string) ([]masterfile.MasterfileEntry, error) {
	client := f.client
	if client == nil {
		client = http.DefaultClient
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, url, nil)
	if err != nil {
		return nil, &FetchError{URL: url, Err: err}
	}
	resp, err := client.Do(req)
	if err != nil {
		return nil, &FetchError{URL: url, Err: err}
	}
	defer resp.Body.Close()

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		// Drain the body so the connection can be reused by the transport's
		// keep-alive pool. Without this, every error response forces a new TCP
		// connection on the next call.
		_, _ = io.Copy(io.Discard, resp.Body)
		return nil, &StatusError{URL: url, Status: resp.StatusCode}
	}

	// io.ReadAll failure is a transport error (body not fully received), not a
	// parse error — classify it the same as transport-level failures above.
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, &FetchError{URL: url, Err: err}
	}
	entries, err := masterfile.ParseMasterfile(body)
	if err != nil {
		return nil, wrapParseError(err)
	}
	return entries, nil
}
