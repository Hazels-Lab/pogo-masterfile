package masterfileapi

import (
	"context"
	"net/http"
)

// LoadOption mutates the internal config for LoadRemote.
type LoadOption func(*loadConfig)

type loadConfig struct {
	url        string
	httpClient *http.Client
	fetcher    Fetcher
}

// WithURL overrides the default masterfile URL.
func WithURL(url string) LoadOption {
	return func(c *loadConfig) { c.url = url }
}

// WithHTTPClient supplies the *http.Client used by the default fetcher
// (timeouts, transport, headers via RoundTripper). Ignored when WithFetcher is
// also supplied.
func WithHTTPClient(client *http.Client) LoadOption {
	return func(c *loadConfig) { c.httpClient = client }
}

// WithFetcher replaces the entire fetch pipeline. Use for non-HTTP sources or
// upstreams that require custom JSON unwrapping.
func WithFetcher(fetcher Fetcher) LoadOption {
	return func(c *loadConfig) { c.fetcher = fetcher }
}

// LoadRemote fetches the masterfile and constructs a Masterfile. Defaults to
// DefaultMasterfileURL fetched with http.DefaultClient.
func LoadRemote(ctx context.Context, opts ...LoadOption) (*Masterfile, error) {
	cfg := loadConfig{url: DefaultMasterfileURL}
	for _, opt := range opts {
		opt(&cfg)
	}

	var fetcher Fetcher = cfg.fetcher
	if fetcher == nil {
		fetcher = &httpFetcher{client: cfg.httpClient}
	}

	entries, err := fetcher.Fetch(ctx, cfg.url)
	if err != nil {
		return nil, err
	}
	return FromEntries(entries), nil
}
