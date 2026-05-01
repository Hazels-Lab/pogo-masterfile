package masterfileapi

import (
	"context"

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
