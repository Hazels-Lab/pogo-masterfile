package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"

	masterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"
	masterfileapi "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go-api"
)

func main() {
	// Example: an upstream that wraps the entries inside a {"data": [...]} envelope.
	customFetcher := masterfileapi.FetcherFunc(func(ctx context.Context, url string) ([]masterfile.MasterfileEntry, error) {
		req, err := http.NewRequestWithContext(ctx, http.MethodGet, url, nil)
		if err != nil {
			return nil, err
		}
		resp, err := http.DefaultClient.Do(req)
		if err != nil {
			return nil, err
		}
		defer resp.Body.Close()

		body, err := io.ReadAll(resp.Body)
		if err != nil {
			return nil, err
		}
		var wrapped struct {
			Data json.RawMessage `json:"data"`
		}
		if err := json.Unmarshal(body, &wrapped); err != nil {
			return nil, err
		}
		return masterfile.ParseMasterfile(wrapped.Data)
	})

	mf, err := masterfileapi.LoadRemote(
		context.Background(),
		masterfileapi.WithURL("https://example.test/wrapped"),
		masterfileapi.WithFetcher(customFetcher),
	)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("loaded %d entries via custom fetcher\n", mf.Len())
}
