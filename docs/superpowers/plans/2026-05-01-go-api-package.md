# Go API Package Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the runtime Go module `packages/go-api/` (package name `masterfileapi`), a sibling of the existing `packages/go/` types module. Provides a stateful `Masterfile` struct that loads, indexes, and queries masterfile entries with per-group typed accessors.

**Architecture:** Mirrors `packages/rust-api/`:
1. **Scaffolding** — `.gitignore` rule, module skeleton (`go.mod`, `LICENSE`, `CHANGELOG.md`, `README.md`).
2. **Hand-written runtime templates** — `errors.go`, `fetcher.go`, `loader.go`, `doc.go`, `masterfile.go` (methods only) live in `src/go-api/templates/` and are copied verbatim into `packages/go-api/` on every regenerate.
3. **Generated artifacts** — `masterfile_gen.go` (struct + `newMasterfile` orchestrator) and `accessor/<group>.go` (one per group, plus `singletons.go`) in `packages/go-api/`, emitted from `src/go-api/`.
4. **Build orchestration** — `src/go-api/generate.ts` orchestrates emit + template-copy, wired into root `src/generate.ts`.
5. **Hand-written tests + examples** — sibling to `packages/go-api/`, NOT regenerated.

**Tech Stack:** Go 1.24+ (matches existing `packages/go/go.mod`), stdlib `net/http` + `context`. Bun for codegen. No third-party Go dependencies.

**Reference:** Spec at [`docs/superpowers/specs/2026-05-01-go-api-package-design.md`](../specs/2026-05-01-go-api-package-design.md).

**Bootstrap note:** Until codegen runs (Task 12), the hand-written `masterfile_gen.go` stub uses `reflect.FieldByName("TemplateID")` to populate `byID`. After codegen, this is replaced by a typed switch. The reflection import disappears with the replacement.

---

## Phase 1 — Scaffolding

### Task 1: Update root `.gitignore`

Add force-include rules for `packages/go-api/` (mirrors the existing `packages/rust-api/src/` and `packages/ts-api/src/` rules).

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Append the new rule**

In `.gitignore`, find the existing `!packages/rust-api/src/**` block and append immediately after:

```gitignore

# packages/go-api holds generated runtime sources alongside hand-written
# templates and tests. Track everything under it so PR review covers regen output.
!packages/go-api
!packages/go-api/**
```

- [ ] **Step 2: Verify**

Run: `git check-ignore -v packages/go-api/foo.go ; echo done`
Expected: prints the matched negation rule line and `done`. The path is NOT ignored.

- [ ] **Step 3: Commit**

```bash
git add .gitignore
git commit -m "Update .gitignore for go-api package layout"
```

### Task 2: Scaffold `packages/go-api/`

Create the module skeleton — `go.mod`, `LICENSE`, `CHANGELOG.md`, `README.md` placeholder, `doc.go`. Adds a local `replace` directive pointing at `packages/go/`.

**Files:**
- Create: `packages/go-api/go.mod`
- Create: `packages/go-api/LICENSE` (copy from `packages/go/LICENSE`)
- Create: `packages/go-api/CHANGELOG.md`
- Create: `packages/go-api/README.md`
- Create: `packages/go-api/doc.go`

- [ ] **Step 1: Create `packages/go-api/go.mod`**

```go
// TODO: replace PLACEHOLDER with the GitHub owner once the repo is hosted.
// The module path here is also the import path consumers use with `go get`.
module github.com/PLACEHOLDER/pogo-masterfile-types/packages/go-api

go 1.24

require github.com/PLACEHOLDER/pogo-masterfile-types/packages/go v0.0.0

replace github.com/PLACEHOLDER/pogo-masterfile-types/packages/go => ../go
```

- [ ] **Step 2: Copy LICENSE**

Run: `cp packages/go/LICENSE packages/go-api/LICENSE`
Expected: file copied (no output).

- [ ] **Step 3: Create `packages/go-api/CHANGELOG.md`**

```markdown
# Changelog

All notable changes to the Go runtime API module are recorded here. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this module adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> Note: Go module releases for this package are tagged as `packages/go-api/vX.Y.Z` (subdirectory-prefixed), per Go's monorepo tagging rules.

## [Unreleased]

### Added
- Initial publishable scaffolding (go.mod with importable path, doc.go, README, LICENSE, smoke test).
```

- [ ] **Step 4: Create `packages/go-api/README.md`** (placeholder — final README written in Task 17)

```markdown
# pogo-masterfile (Go)

Runtime API for the Pokémon GO masterfile. Loads, indexes, and queries entries with per-group typed accessors. Built on [`pogo-masterfile-types`](../go/README.md).

> Documentation in progress — see the [design spec](../../docs/superpowers/specs/2026-05-01-go-api-package-design.md).

## License

MIT — see [LICENSE](./LICENSE).
```

- [ ] **Step 5: Create `packages/go-api/doc.go`**

```go
// Package masterfileapi provides a runtime API for the Pokémon GO masterfile —
// loads, indexes, and queries entries by templateID with per-group typed
// accessors. Built on top of the types module at github.com/PLACEHOLDER/pogo-masterfile-types/packages/go.
//
// # Quick start
//
//	import (
//	    "context"
//	    masterfileapi "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go-api"
//	    "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/move_settings"
//	)
//
//	mf, err := masterfileapi.LoadRemote(context.Background())
//	if err != nil {
//	    log.Fatal(err)
//	}
//	move, ok := mf.MoveSettings.Get(move_settings.MoveSettingsTemplateIDV0033MoveTackleFast)
//	if ok {
//	    fmt.Println(move.Data.MoveSettings.Power)
//	}
package masterfileapi
```

- [ ] **Step 6: Verify the module builds**

Run: `cd packages/go-api && go build ./...`
Expected: no output (success). Note: `go.mod`'s `require` references a non-existent v0.0.0 — Go's `replace` directive resolves it to `../go` so this still works.

- [ ] **Step 7: Commit**

```bash
git add packages/go-api/
git commit -m "Scaffold packages/go-api/ module"
```

---

## Phase 2 — Hand-written runtime templates (TDD)

These files all live in `packages/go-api/` initially. In Phase 4 they are MOVED to `src/go-api/templates/` (their permanent source-of-truth location); regenerate copies them back. Tests stay in `packages/go-api/`.

### Task 3: Errors

TDD: tests then implementation.

**Files:**
- Create: `packages/go-api/errors_test.go`
- Create: `packages/go-api/errors.go`

- [ ] **Step 1: Write `packages/go-api/errors_test.go`**

```go
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
```

- [ ] **Step 2: Run, expect FAIL**

Run: `cd packages/go-api && go test -run "TestFetchError|TestStatusError|TestParseError|TestErrInvalidShape" ./...`
Expected: build error — `FetchError`, `StatusError`, `ParseError`, `ErrInvalidShape` undefined.

- [ ] **Step 3: Write `packages/go-api/errors.go`**

```go
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
```

- [ ] **Step 4: Run, expect PASS**

Run: `cd packages/go-api && go test -run "TestFetchError|TestStatusError|TestParseError|TestErrInvalidShape" ./...`
Expected: `PASS` for all four tests.

- [ ] **Step 5: Commit**

```bash
git add packages/go-api/errors.go packages/go-api/errors_test.go
git commit -m "go-api: errors with errors.As/Is round-trips"
```

### Task 4: Masterfile core (struct stub + methods)

Bootstrap stub of `masterfile_gen.go` (hand-written, replaced by codegen in Task 12) plus the full `masterfile.go` template. Tests cover `FromEntries`, `GetEntry`, `Has`, `Entries`, `TemplateIDs`, `Len`, `Groups`.

**Files:**
- Create: `packages/go-api/masterfile_gen.go` (temporary stub — replaced in Task 13)
- Create: `packages/go-api/masterfile.go`
- Create: `packages/go-api/masterfile_test.go`

- [ ] **Step 1: Write `packages/go-api/masterfile_gen.go` (stub)**

```go
// Code generated. DO NOT EDIT — regenerated by `bun run generate`.
// During Phase 2 of the implementation plan this is a hand-written bootstrap stub:
// it uses reflection to populate byID and leaves all per-group accessor fields nil.
// Codegen replaces it with a typed switch and full accessor wiring.

package masterfileapi

import (
	"reflect"

	masterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"
)

type Masterfile struct {
	entries []masterfile.MasterfileEntry
	byID    map[string]int
}

// GroupNames lists every group discriminator. The stub returns an empty slice;
// codegen replaces this with the full ordered list.
var GroupNames = []string{}

func newMasterfile(entries []masterfile.MasterfileEntry) *Masterfile {
	m := &Masterfile{
		entries: entries,
		byID:    make(map[string]int, len(entries)),
	}
	for i, e := range entries {
		v := reflect.ValueOf(e)
		f := v.FieldByName("TemplateID")
		if f.IsValid() && f.Kind() == reflect.String {
			m.byID[f.String()] = i
		}
	}
	return m
}
```

- [ ] **Step 2: Write `packages/go-api/masterfile.go`**

```go
package masterfileapi

import (
	"reflect"

	masterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"
)

// FromEntries wraps a pre-parsed slice of MasterfileEntry values, building the
// per-templateID lookup index and per-group accessors.
func FromEntries(entries []masterfile.MasterfileEntry) *Masterfile {
	return newMasterfile(entries)
}

// Load parses a JSON byte slice and constructs a Masterfile. Returns *ParseError
// on JSON failures.
func Load(jsonBytes []byte) (*Masterfile, error) {
	entries, err := masterfile.ParseMasterfile(jsonBytes)
	if err != nil {
		return nil, &ParseError{Err: err}
	}
	return FromEntries(entries), nil
}

// GetEntry returns the entry registered under id (the wide MasterfileEntry
// interface). The second return is false if no entry has that templateID.
func (m *Masterfile) GetEntry(id string) (masterfile.MasterfileEntry, bool) {
	idx, ok := m.byID[id]
	if !ok {
		return nil, false
	}
	return m.entries[idx], true
}

// Has reports whether an entry exists for id.
func (m *Masterfile) Has(id string) bool {
	_, ok := m.byID[id]
	return ok
}

// Entries returns the underlying slice of entries (zero-copy view; do not
// mutate). Order matches the source JSON.
func (m *Masterfile) Entries() []masterfile.MasterfileEntry {
	return m.entries
}

// TemplateIDs returns every templateID in source order.
func (m *Masterfile) TemplateIDs() []string {
	ids := make([]string, 0, len(m.entries))
	for _, e := range m.entries {
		ids = append(ids, reflectFieldString(e, "TemplateID"))
	}
	return ids
}

// Len returns the number of entries.
func (m *Masterfile) Len() int {
	return len(m.entries)
}

// Groups returns every per-group discriminator name in canonical order. After
// codegen runs this returns the full set; pre-codegen the stub returns an
// empty slice.
func (m *Masterfile) Groups() []string {
	return GroupNames
}

// reflectFieldString extracts a named string field from any struct via
// reflection. Used by TemplateIDs during the bootstrap phase before codegen
// generates a typed switch; removed in Task 13 once byID is reliably populated.
func reflectFieldString(v any, name string) string {
	f := reflect.ValueOf(v).FieldByName(name)
	if f.IsValid() && f.Kind() == reflect.String {
		return f.String()
	}
	return ""
}
```

- [ ] **Step 3: Write `packages/go-api/masterfile_test.go`**

```go
package masterfileapi

import (
	"testing"

	masterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"
)

const fixtureJSON = `[
    {
        "templateId": "ACCESSIBILITY_CLIENT_SETTINGS",
        "data": {
            "templateId": "ACCESSIBILITY_CLIENT_SETTINGS",
            "accessibilitySettings": { "enabled": true, "pluginEnabled": true }
        }
    }
]`

func TestFromEntries_BasicLookups(t *testing.T) {
	entries, err := masterfile.ParseMasterfile([]byte(fixtureJSON))
	if err != nil {
		t.Fatalf("parse: %v", err)
	}
	mf := FromEntries(entries)
	if mf.Len() != 1 {
		t.Errorf("Len = %d; want 1", mf.Len())
	}
	if !mf.Has("ACCESSIBILITY_CLIENT_SETTINGS") {
		t.Error("Has should report true")
	}
	e, ok := mf.GetEntry("ACCESSIBILITY_CLIENT_SETTINGS")
	if !ok || e == nil {
		t.Fatal("GetEntry should succeed")
	}
}

func TestFromEntries_MissingLookup(t *testing.T) {
	mf := FromEntries(nil)
	if _, ok := mf.GetEntry("DOES_NOT_EXIST"); ok {
		t.Error("GetEntry should return false for missing")
	}
	if mf.Has("DOES_NOT_EXIST") {
		t.Error("Has should return false for missing")
	}
}

func TestFromEntries_TemplateIDsAndEntries(t *testing.T) {
	entries, err := masterfile.ParseMasterfile([]byte(fixtureJSON))
	if err != nil {
		t.Fatalf("parse: %v", err)
	}
	mf := FromEntries(entries)
	ids := mf.TemplateIDs()
	if len(ids) != 1 || ids[0] != "ACCESSIBILITY_CLIENT_SETTINGS" {
		t.Errorf("TemplateIDs = %v", ids)
	}
	if got := mf.Entries(); len(got) != 1 {
		t.Errorf("Entries len = %d", len(got))
	}
}
```

- [ ] **Step 4: Run, expect PASS**

Run: `cd packages/go-api && go test ./...`
Expected: all tests PASS (errors_test.go from Task 3 plus the new ones).

- [ ] **Step 5: Commit**

```bash
git add packages/go-api/masterfile.go packages/go-api/masterfile_gen.go packages/go-api/masterfile_test.go
git commit -m "go-api: Masterfile core types + top-level lookups (bootstrap stub)"
```

### Task 5: Load(json) error paths

Cover `*ParseError` wrapping and the `ErrInvalidShape` sentinel via `Load`.

**Files:**
- Modify: `packages/go-api/masterfile_test.go`

- [ ] **Step 1: Add tests to `masterfile_test.go`**

Append:

```go
func TestLoad_ValidJSON(t *testing.T) {
	mf, err := Load([]byte(fixtureJSON))
	if err != nil {
		t.Fatalf("unexpected: %v", err)
	}
	if mf.Len() != 1 {
		t.Errorf("Len = %d", mf.Len())
	}
}

func TestLoad_InvalidJSON_ReturnsParseError(t *testing.T) {
	_, err := Load([]byte("{not json"))
	var pe *ParseError
	if err == nil {
		t.Fatal("expected error")
	}
	if !errorAsParseError(err, &pe) {
		t.Errorf("expected *ParseError, got %T: %v", err, err)
	}
}

func TestLoad_NonArrayJSON_ReturnsParseError(t *testing.T) {
	_, err := Load([]byte(`{"foo":1}`))
	var pe *ParseError
	if !errorAsParseError(err, &pe) {
		t.Errorf("expected *ParseError, got %T: %v", err, err)
	}
}

// errorAsParseError is a tiny helper to keep the test bodies readable.
func errorAsParseError(err error, target **ParseError) bool {
	if pe, ok := err.(*ParseError); ok {
		*target = pe
		return true
	}
	return false
}
```

- [ ] **Step 2: Run, expect PASS**

Run: `cd packages/go-api && go test ./...`
Expected: all tests PASS.

- [ ] **Step 3: Commit**

```bash
git add packages/go-api/masterfile_test.go
git commit -m "go-api: Load error paths return *ParseError"
```

### Task 6: Fetcher interface + FetcherFunc adapter

TDD the abstraction independently of HTTP.

**Files:**
- Create: `packages/go-api/fetcher_test.go`
- Create: `packages/go-api/fetcher.go`

- [ ] **Step 1: Write `packages/go-api/fetcher_test.go`**

```go
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
```

- [ ] **Step 2: Run, expect FAIL**

Run: `cd packages/go-api && go test ./...`
Expected: build error — `Fetcher`/`FetcherFunc` undefined.

- [ ] **Step 3: Write `packages/go-api/fetcher.go`** (interface + adapter only; httpFetcher comes in Task 7)

```go
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
```

- [ ] **Step 4: Run, expect PASS**

Run: `cd packages/go-api && go test -run TestFetcherFunc ./...`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add packages/go-api/fetcher.go packages/go-api/fetcher_test.go
git commit -m "go-api: Fetcher interface + FetcherFunc adapter"
```

### Task 7: httpFetcher + LoadRemote with options

End-to-end HTTP path tested with `httptest.NewServer`. This adds `loader.go` and `httpFetcher` (in `fetcher.go`).

**Files:**
- Modify: `packages/go-api/fetcher.go`
- Create: `packages/go-api/loader.go`
- Create: `packages/go-api/loader_test.go`

- [ ] **Step 1: Append `httpFetcher` to `fetcher.go`**

Add these imports to the existing import block:

```go
import (
	"context"
	"io"
	"net/http"

	masterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"
)
```

Append below `FetcherFunc`:

```go
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
		return nil, &StatusError{URL: url, Status: resp.StatusCode}
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, &FetchError{URL: url, Err: err}
	}
	entries, err := masterfile.ParseMasterfile(body)
	if err != nil {
		return nil, &ParseError{Err: err}
	}
	return entries, nil
}
```

- [ ] **Step 2: Create `packages/go-api/loader.go`**

```go
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
```

- [ ] **Step 3: Create `packages/go-api/loader_test.go`**

```go
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
```

- [ ] **Step 4: Run, expect PASS**

Run: `cd packages/go-api && go test ./...`
Expected: all tests PASS (errors, masterfile, fetcher, loader).

- [ ] **Step 5: Commit**

```bash
git add packages/go-api/fetcher.go packages/go-api/loader.go packages/go-api/loader_test.go
git commit -m "go-api: httpFetcher + LoadRemote with functional options"
```

---

## Phase 3 — Codegen

### Task 8: Codegen scaffold

Create `src/go-api/` directory layout: `constants.ts`, an empty `generate.ts`, the `templates/` directory.

**Files:**
- Create: `src/go-api/constants.ts`
- Create: `src/go-api/generate.ts` (initial skeleton)
- Create: `src/go-api/templates/` (empty for now — populated in Task 13)

- [ ] **Step 1: Create `src/go-api/constants.ts`**

```ts
import { join } from "node:path";

const REPO_ROOT = join(import.meta.dir, "..", "..");

export const PACKAGE_DIR = join(REPO_ROOT, "packages", "go-api");
export const TEMPLATES_DIR = join(REPO_ROOT, "src", "go-api", "templates");

export const DEFAULT_MASTERFILE_URL = "https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";
```

- [ ] **Step 2: Create `src/go-api/generate.ts` skeleton**

```ts
import { mkdir } from "node:fs/promises";
import type { Entry } from "../group.ts";
import { groupEntries } from "../group.ts";
import { PACKAGE_DIR } from "./constants.ts";

export async function generateGoApi(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[go-api] grouped into ${groups.size} discriminators.`);

	await mkdir(PACKAGE_DIR, { recursive: true });

	// Emitters wired in Task 12.
}
```

- [ ] **Step 3: Create `src/go-api/templates/` (empty placeholder)**

```bash
mkdir -p src/go-api/templates
touch src/go-api/templates/.gitkeep
```

- [ ] **Step 4: Verify import paths resolve**

Run: `bun run typecheck`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/go-api/
git commit -m "go-api codegen: scaffold src/go-api/"
```

### Task 9: emit-accessor.ts (per-group accessor file)

Emits `accessor/<group>.go` for one multi-entry group. Tested with bun test.

**Files:**
- Create: `src/go-api/emit-accessor.ts`
- Create: `src/go-api/emit-accessor.test.ts`

- [ ] **Step 1: Inspect existing helpers**

Run: `head -40 src/group.ts && head -20 src/naming.ts`
Expected: confirms `Group` shape (has `discriminator`, `entries`) and `snakeCase`/`pascalCase` helpers.

- [ ] **Step 2: Write `src/go-api/emit-accessor.ts`**

```ts
import type { Group } from "../group.ts";
import { pascalCase, snakeCase } from "../naming.ts";

export function emitAccessor(group: Group): string {
	const disc = group.discriminator;          // e.g. "moveSettings"
	const pkg = snakeCase(disc);                // "move_settings"
	const tName = `${pascalCase(disc)}TemplateID`; // "MoveSettingsTemplateID"
	const eName = `${pascalCase(disc)}Entry`;     // "MoveSettingsEntry"
	const aName = `${pascalCase(disc)}Accessor`;  // "MoveSettingsAccessor"

	return `// Code generated. DO NOT EDIT — regenerated by \`bun run generate\`.

package accessor

import (
	"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/${pkg}"
)

// ${aName} provides typed lookups for the "${disc}" group.
type ${aName} struct {
	entries []${pkg}.${eName}
	index   map[${pkg}.${tName}]int
}

// New${aName} builds a ${aName} from a typed slice. The constructor
// must be exported because the buildAccessors helper in masterfile_gen.go
// instantiates it from a different package (masterfileapi).
func New${aName}(entries []${pkg}.${eName}) *${aName} {
	idx := make(map[${pkg}.${tName}]int, len(entries))
	for i, e := range entries {
		idx[${pkg}.${tName}(e.TemplateID)] = i
	}
	return &${aName}{entries: entries, index: idx}
}

// Get returns the entry registered under id, or zero+false if missing.
func (a *${aName}) Get(id ${pkg}.${tName}) (${pkg}.${eName}, bool) {
	i, ok := a.index[id]
	if !ok {
		var zero ${pkg}.${eName}
		return zero, false
	}
	return a.entries[i], true
}

// Has reports whether an entry exists for id.
func (a *${aName}) Has(id ${pkg}.${tName}) bool {
	_, ok := a.index[id]
	return ok
}

// All returns the underlying slice (zero-copy view; do not mutate).
func (a *${aName}) All() []${pkg}.${eName} {
	return a.entries
}

// TemplateIDs returns every id in source order.
func (a *${aName}) TemplateIDs() []${pkg}.${tName} {
	ids := make([]${pkg}.${tName}, 0, len(a.entries))
	for _, e := range a.entries {
		ids = append(ids, ${pkg}.${tName}(e.TemplateID))
	}
	return ids
}

// Len returns the number of entries.
func (a *${aName}) Len() int {
	return len(a.entries)
}
`;
}
```

- [ ] **Step 3: Write `src/go-api/emit-accessor.test.ts`**

```ts
import { describe, expect, test } from "bun:test";
import type { Group } from "../group.ts";
import { emitAccessor } from "./emit-accessor.ts";

const sampleGroup: Group = {
	discriminator: "moveSettings",
	entries: [
		{ templateId: "V0033_MOVE_TACKLE_FAST", data: { templateId: "V0033_MOVE_TACKLE_FAST", moveSettings: {} } },
		{ templateId: "V0022_MOVE_MEGAHORN", data: { templateId: "V0022_MOVE_MEGAHORN", moveSettings: {} } },
	] as never,
};

describe("emitAccessor", () => {
	test("emits a struct named <Pascal>Accessor", () => {
		const out = emitAccessor(sampleGroup);
		expect(out).toContain("type MoveSettingsAccessor struct {");
	});

	test("imports the per-group sub-package", () => {
		const out = emitAccessor(sampleGroup);
		expect(out).toContain('"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/move_settings"');
	});

	test("public constructor and method set", () => {
		const out = emitAccessor(sampleGroup);
		for (const sym of ["NewMoveSettingsAccessor", "Get(", "Has(", "All() []", "TemplateIDs() []", "Len() int"]) {
			expect(out).toContain(sym);
		}
	});

	test("Get returns zero value on miss", () => {
		const out = emitAccessor(sampleGroup);
		expect(out).toContain("var zero move_settings.MoveSettingsEntry");
	});
});
```

- [ ] **Step 4: Run, expect PASS**

Run: `bun test src/go-api/emit-accessor.test.ts`
Expected: 4 PASS.

- [ ] **Step 5: Commit**

```bash
git add src/go-api/emit-accessor.ts src/go-api/emit-accessor.test.ts
git commit -m "go-api codegen: per-group accessor emitter"
```

### Task 10: emit-singletons-accessor.ts (heterogeneous case)

Singletons share one templateID type but every entry has a distinct concrete struct. Returns `masterfile.MasterfileEntry` from the upstream go module.

**Files:**
- Create: `src/go-api/emit-singletons-accessor.ts`
- Create: `src/go-api/emit-singletons-accessor.test.ts`

- [ ] **Step 1: Write `src/go-api/emit-singletons-accessor.ts`**

```ts
export function emitSingletonsAccessor(): string {
	return `// Code generated. DO NOT EDIT — regenerated by \`bun run generate\`.

package accessor

import (
	masterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"
	"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/singletons"
)

// SingletonsAccessor provides lookups across the "singletons" group. Singleton
// entries are heterogeneous — each one is its own concrete *Entry struct in
// the upstream singletons package — so Get returns the wide MasterfileEntry
// interface and the caller type-asserts to the concrete type.
type SingletonsAccessor struct {
	entries []masterfile.MasterfileEntry
	index   map[singletons.SingletonsTemplateID]int
}

// NewSingletonsAccessor builds a SingletonsAccessor from a slice of singleton
// entries paired with their resolved templateIDs (since the entries are
// heterogeneous, the caller passes the IDs alongside).
func NewSingletonsAccessor(entries []masterfile.MasterfileEntry, ids []singletons.SingletonsTemplateID) *SingletonsAccessor {
	idx := make(map[singletons.SingletonsTemplateID]int, len(entries))
	for i, id := range ids {
		idx[id] = i
	}
	return &SingletonsAccessor{entries: entries, index: idx}
}

// Get returns the singleton entry registered under id (wide interface — caller
// type-asserts to the concrete singleton struct).
func (a *SingletonsAccessor) Get(id singletons.SingletonsTemplateID) (masterfile.MasterfileEntry, bool) {
	i, ok := a.index[id]
	if !ok {
		return nil, false
	}
	return a.entries[i], true
}

// Has reports whether a singleton with id exists.
func (a *SingletonsAccessor) Has(id singletons.SingletonsTemplateID) bool {
	_, ok := a.index[id]
	return ok
}

// All returns the underlying slice (zero-copy view; do not mutate).
func (a *SingletonsAccessor) All() []masterfile.MasterfileEntry {
	return a.entries
}

// TemplateIDs returns every singleton id in source order.
func (a *SingletonsAccessor) TemplateIDs() []singletons.SingletonsTemplateID {
	ids := make([]singletons.SingletonsTemplateID, 0, len(a.index))
	for id := range a.index {
		ids = append(ids, id)
	}
	return ids
}

// Len returns the number of singleton entries.
func (a *SingletonsAccessor) Len() int {
	return len(a.entries)
}
`;
}
```

- [ ] **Step 2: Write `src/go-api/emit-singletons-accessor.test.ts`**

```ts
import { describe, expect, test } from "bun:test";
import { emitSingletonsAccessor } from "./emit-singletons-accessor.ts";

describe("emitSingletonsAccessor", () => {
	const out = emitSingletonsAccessor();

	test("Get returns wide interface, not a concrete type", () => {
		expect(out).toContain("(masterfile.MasterfileEntry, bool)");
	});

	test("imports both upstream packages", () => {
		expect(out).toContain('masterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"');
		expect(out).toContain('"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/singletons"');
	});

	test("constructor accepts entries + ids slice", () => {
		expect(out).toContain("NewSingletonsAccessor(entries []masterfile.MasterfileEntry, ids []singletons.SingletonsTemplateID)");
	});
});
```

- [ ] **Step 3: Run, expect PASS**

Run: `bun test src/go-api/emit-singletons-accessor.test.ts`
Expected: 3 PASS.

- [ ] **Step 4: Commit**

```bash
git add src/go-api/emit-singletons-accessor.ts src/go-api/emit-singletons-accessor.test.ts
git commit -m "go-api codegen: singletons accessor emitter"
```

### Task 11: emit-masterfile-gen.ts (Masterfile struct + newMasterfile)

Emits `masterfile_gen.go`: full struct with all accessor fields, plus the typed-switch `newMasterfile` helper that buckets entries and constructs each accessor.

**Files:**
- Create: `src/go-api/emit-masterfile-gen.ts`
- Create: `src/go-api/emit-masterfile-gen.test.ts`

- [ ] **Step 1: Write `src/go-api/emit-masterfile-gen.ts`**

```ts
import type { Group } from "../group.ts";
import { pascalCase, snakeCase } from "../naming.ts";

export function emitMasterfileGen(groups: Map<string, Group>): string {
	const multiEntry = [...groups.values()].filter((g) => g.entries.length > 1);
	const groupNames = multiEntry.map((g) => g.discriminator);

	// Imports — one per multi-entry group, plus singletons + masterfile + accessor.
	const importLines: string[] = [
		'\tmasterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"',
		'\t"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go-api/accessor"',
		'\t"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/singletons"',
	];
	for (const g of multiEntry) {
		importLines.push(`\t"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/${snakeCase(g.discriminator)}"`);
	}

	// Struct fields — one per multi-entry group, plus Singletons.
	const fieldLines: string[] = [];
	for (const g of multiEntry) {
		fieldLines.push(`\t${pascalCase(g.discriminator)} *accessor.${pascalCase(g.discriminator)}Accessor`);
	}
	fieldLines.push("\tSingletons *accessor.SingletonsAccessor");

	// Bucket declarations — one typed slice per multi-entry group, plus singleton bookkeeping.
	// Variable names use the discriminator directly (already camelCase from JSON keys),
	// which is idiomatic Go.
	const bucketDecls: string[] = [];
	for (const g of multiEntry) {
		const pkg = snakeCase(g.discriminator);
		const eName = `${pascalCase(g.discriminator)}Entry`;
		bucketDecls.push(`\t${g.discriminator}Bucket := []${pkg}.${eName}{}`);
	}
	bucketDecls.push("\tsingletonEntries := []masterfile.MasterfileEntry{}");
	bucketDecls.push("\tsingletonIDs := []singletons.SingletonsTemplateID{}");

	// Switch arms — one per multi-entry group + a wildcard for singletons.
	const switchArms: string[] = [];
	for (const g of multiEntry) {
		const pkg = snakeCase(g.discriminator);
		const eName = `${pascalCase(g.discriminator)}Entry`;
		switchArms.push(
			`\t\tcase ${pkg}.${eName}:`,
			`\t\t\tm.byID[v.TemplateID] = i`,
			`\t\t\t${g.discriminator}Bucket = append(${g.discriminator}Bucket, v)`,
		);
	}
	// Default arm: singletons + anything else falls through into the singletons bucket.
	switchArms.push(
		"\t\tdefault:",
		"\t\t\ttid := singletonTemplateID(v)",
		'\t\t\tif tid != "" {',
		"\t\t\t\tm.byID[tid] = i",
		"\t\t\t\tsingletonEntries = append(singletonEntries, v)",
		"\t\t\t\tsingletonIDs = append(singletonIDs, singletons.SingletonsTemplateID(tid))",
		"\t\t\t}",
	);

	// Accessor wiring at the end of newMasterfile.
	const wiring: string[] = [];
	for (const g of multiEntry) {
		const aName = `${pascalCase(g.discriminator)}Accessor`;
		wiring.push(`\tm.${pascalCase(g.discriminator)} = accessor.New${aName}(${g.discriminator}Bucket)`);
	}
	wiring.push("\tm.Singletons = accessor.NewSingletonsAccessor(singletonEntries, singletonIDs)");

	return `// Code generated. DO NOT EDIT — regenerated by \`bun run generate\`.

package masterfileapi

import (
	"reflect"

${importLines.join("\n")}
)

// Masterfile is the indexed runtime view of a parsed masterfile. Construct via
// FromEntries, Load, or LoadRemote; treat as read-only thereafter.
type Masterfile struct {
	entries []masterfile.MasterfileEntry
	byID    map[string]int

${fieldLines.join("\n")}
}

// GroupNames lists every multi-entry group discriminator in canonical order.
// Singletons are not included — they share a single accessor on Masterfile.
var GroupNames = []string{
${groupNames.map((n) => `\t"${n}",`).join("\n")}
}

func newMasterfile(entries []masterfile.MasterfileEntry) *Masterfile {
	m := &Masterfile{
		entries: entries,
		byID:    make(map[string]int, len(entries)),
	}

${bucketDecls.join("\n")}

	for i, e := range entries {
		switch v := e.(type) {
${switchArms.join("\n")}
		}
	}

${wiring.join("\n")}

	return m
}

// singletonTemplateID extracts the TemplateID field via reflection from a
// singleton entry. Singletons are heterogeneous so we cannot enumerate them
// in the type switch above without producing thousands of arms; reflection is
// used only here, only on the singleton-load slow path.
func singletonTemplateID(e masterfile.MasterfileEntry) string {
	rv := reflect.ValueOf(e)
	if rv.Kind() != reflect.Struct {
		return ""
	}
	f := rv.FieldByName("TemplateID")
	if f.IsValid() && f.Kind() == reflect.String {
		return f.String()
	}
	return ""
}
`;
}
```

- [ ] **Step 2: Write `src/go-api/emit-masterfile-gen.test.ts`**

```ts
import { describe, expect, test } from "bun:test";
import type { Group } from "../group.ts";
import { emitMasterfileGen } from "./emit-masterfile-gen.ts";

const groups = new Map<string, Group>([
	["moveSettings", { discriminator: "moveSettings", entries: [{}, {}] as never }],
	["pokemonSettings", { discriminator: "pokemonSettings", entries: [{}, {}] as never }],
	["uniqueOnly", { discriminator: "uniqueOnly", entries: [{}] as never }], // singleton-shaped
]);

describe("emitMasterfileGen", () => {
	const out = emitMasterfileGen(groups);

	test("emits one accessor field per multi-entry group + Singletons", () => {
		expect(out).toContain("MoveSettings *accessor.MoveSettingsAccessor");
		expect(out).toContain("PokemonSettings *accessor.PokemonSettingsAccessor");
		expect(out).toContain("Singletons *accessor.SingletonsAccessor");
		expect(out).not.toContain("UniqueOnly *accessor."); // single-entry → singleton, not its own accessor
	});

	test("type switch has one arm per multi-entry group", () => {
		expect(out).toContain("case move_settings.MoveSettingsEntry:");
		expect(out).toContain("case pokemon_settings.PokemonSettingsEntry:");
		expect(out).not.toContain("case unique_only.UniqueOnlyEntry:");
	});

	test("GroupNames lists multi-entry groups", () => {
		expect(out).toContain('"moveSettings",');
		expect(out).toContain('"pokemonSettings",');
		expect(out).not.toContain('"uniqueOnly",');
	});

	test("default arm routes singletons via reflection helper", () => {
		expect(out).toContain("singletonTemplateID(v)");
		expect(out).toContain("singletonEntries = append(singletonEntries, v)");
	});
});
```

- [ ] **Step 3: Run, expect PASS**

Run: `bun test src/go-api/emit-masterfile-gen.test.ts`
Expected: 4 PASS.

- [ ] **Step 4: Commit**

```bash
git add src/go-api/emit-masterfile-gen.ts src/go-api/emit-masterfile-gen.test.ts
git commit -m "go-api codegen: masterfile_gen.go emitter"
```

### Task 12: Wire `src/go-api/generate.ts` end-to-end

Wire the emitters together; call from root `src/generate.ts`.

**Files:**
- Modify: `src/go-api/generate.ts`
- Modify: `src/generate.ts`

- [ ] **Step 1: Replace `src/go-api/generate.ts`**

```ts
import { copyFile, mkdir, readdir } from "node:fs/promises";
import { join } from "node:path";
import type { Entry } from "../group.ts";
import { groupEntries } from "../group.ts";
import { snakeCase } from "../naming.ts";
import { writeOutput } from "../write.ts";
import { PACKAGE_DIR, TEMPLATES_DIR } from "./constants.ts";
import { emitAccessor } from "./emit-accessor.ts";
import { emitMasterfileGen } from "./emit-masterfile-gen.ts";
import { emitSingletonsAccessor } from "./emit-singletons-accessor.ts";

// Hand-written files that live alongside generated output in PACKAGE_DIR and
// must survive the wipe performed by writeOutput. Tests, go.mod, README,
// LICENSE, and CHANGELOG are all checked in by hand.
const PRESERVED_FILES = ["go.mod", "README.md", "LICENSE", "CHANGELOG.md", "errors_test.go", "fetcher_test.go", "loader_test.go", "masterfile_test.go"];

export async function generateGoApi(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[go-api] grouped into ${groups.size} discriminators.`);

	await mkdir(PACKAGE_DIR, { recursive: true });

	// 1. Build a single file map covering masterfile_gen.go (package root) and
	//    accessor/<group>.go + accessor/singletons.go (subdir). Writing in one
	//    call ensures the accessor/ subdir survives the PACKAGE_DIR wipe.
	const generated = new Map<string, string>();
	generated.set("masterfile_gen.go", emitMasterfileGen(groups));

	const multiEntry = [...groups.values()].filter((g) => g.entries.length > 1);
	for (const g of multiEntry) {
		generated.set(`accessor/${snakeCase(g.discriminator)}.go`, emitAccessor(g));
	}
	generated.set("accessor/singletons.go", emitSingletonsAccessor());

	await writeOutput(generated, PACKAGE_DIR, { preserve: PRESERVED_FILES });

	// 2. Copy hand-written runtime templates verbatim.
	//    Templates may not exist yet during early development — skip silently
	//    if missing (the user adds them in Task 13).
	let templateFiles: string[] = [];
	try {
		templateFiles = (await readdir(TEMPLATES_DIR)).filter((f) => f.endsWith(".go"));
	} catch (err) {
		if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
	}
	for (const file of templateFiles) {
		await copyFile(join(TEMPLATES_DIR, file), join(PACKAGE_DIR, file));
	}
}
```

- [ ] **Step 2: Wire into root `src/generate.ts`**

In `src/generate.ts`, add the import alongside the other generators:

```ts
import { generateGo } from "./go/generate.ts";
import { generateGoApi } from "./go-api/generate.ts";
```

In the `Promise.all` block, change the Go arm to run both generators sequentially:

```ts
(async () => {
    await generateGo(entries);
    await generateGoApi(entries);
})(),
```

- [ ] **Step 3: Type-check and lint**

Run: `bun run typecheck && bun run lint`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/go-api/generate.ts src/generate.ts
git commit -m "go-api codegen: orchestrator wired into root generate.ts"
```

---

## Phase 4 — Switch hand-written code to generated artifacts

### Task 13: Move hand-written runtime files into `src/go-api/templates/`

The hand-written `errors.go`, `fetcher.go`, `loader.go`, `doc.go`, `masterfile.go` from Phase 2 are now MOVED to their permanent home in `src/go-api/templates/`. The bootstrap stub `masterfile_gen.go` is DELETED — codegen produces the real one. Tests stay where they are.

**Files:**
- Move: `packages/go-api/errors.go` → `src/go-api/templates/errors.go`
- Move: `packages/go-api/fetcher.go` → `src/go-api/templates/fetcher.go`
- Move: `packages/go-api/loader.go` → `src/go-api/templates/loader.go`
- Move: `packages/go-api/doc.go` → `src/go-api/templates/doc.go`
- Move: `packages/go-api/masterfile.go` → `src/go-api/templates/masterfile.go`
- Delete: `packages/go-api/masterfile_gen.go` (bootstrap stub)
- Delete: `src/go-api/templates/.gitkeep`

- [ ] **Step 1: Move files with git**

```bash
git mv packages/go-api/errors.go src/go-api/templates/errors.go
git mv packages/go-api/fetcher.go src/go-api/templates/fetcher.go
git mv packages/go-api/loader.go src/go-api/templates/loader.go
git mv packages/go-api/doc.go src/go-api/templates/doc.go
git mv packages/go-api/masterfile.go src/go-api/templates/masterfile.go
git rm packages/go-api/masterfile_gen.go
git rm src/go-api/templates/.gitkeep
```

- [ ] **Step 2: Strip the reflection-based fallback from `masterfile.go`**

The template's `TemplateIDs` method had a `reflectFieldString` helper used during bootstrap. Now that codegen wires byID via a typed switch, simplify `TemplateIDs` to range the `m.byID` map.

Edit `src/go-api/templates/masterfile.go`: replace the entire `TemplateIDs` method (and remove the `reflectFieldString` helper + its `reflect` import) with:

```go
// TemplateIDs returns every templateID in source order.
func (m *Masterfile) TemplateIDs() []string {
	ids := make([]string, 0, len(m.entries))
	idxByPos := make(map[int]string, len(m.byID))
	for id, i := range m.byID {
		idxByPos[i] = id
	}
	for i := range m.entries {
		if id, ok := idxByPos[i]; ok {
			ids = append(ids, id)
		}
	}
	return ids
}
```

Also remove the `import "reflect"` line and the `reflectFieldString` helper from `masterfile.go`.

- [ ] **Step 3: Run codegen**

Run: `bun run generate`
Expected: completes without error. `packages/go-api/` now contains the templates copied back, plus `masterfile_gen.go` and `accessor/<group>.go` files.

- [ ] **Step 4: Run go tests**

Run: `cd packages/go-api && go test ./...`
Expected: all existing tests still PASS, including ones that exercise top-level `GetEntry`/`Has`. (Per-group accessors are now wired but no dedicated tests yet — added in Task 15.)

- [ ] **Step 5: Run go vet**

Run: `cd packages/go-api && go vet ./...`
Expected: no warnings.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "go-api: templates moved to src/go-api/, codegen produces masterfile_gen.go + accessors"
```

### Task 14: Extend `bun run format` to gofmt `packages/go-api/`

Currently the format script runs `gofmt -w .` only on `packages/go/`.

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Edit the `format` script**

In `package.json`, replace the `format` line with:

```json
"format": "biome check --write --unsafe & (cd packages/rust && cargo fmt) & (cd packages/rust-api && cargo fmt) & (cd packages/go && gofmt -w .) & (cd packages/go-api && gofmt -w .); wait;"
```

- [ ] **Step 2: Run format**

Run: `bun run format`
Expected: completes without error; `packages/go-api/` files are gofmt'd.

- [ ] **Step 3: Verify clean tree**

Run: `git status --short`
Expected: empty (format was a no-op since codegen already produced gofmt-clean output) OR a small set of whitespace tweaks. If the latter, commit them.

- [ ] **Step 4: Commit**

```bash
git add package.json
git commit -m "Format script covers packages/go-api/"
```

---

## Phase 5 — Polish

### Task 15: Per-group accessor + e2e tests

**Files:**
- Create: `packages/go-api/accessors_test.go`
- Create: `packages/go-api/e2e_test.go`
- Create: `packages/go-api/testdata/fixture.json` (~10 entries spanning multiple groups + a singleton)

- [ ] **Step 1: Create `packages/go-api/testdata/fixture.json`**

Pick 5-10 entries from the repo-root `masterfile.json` covering at least: `moveSettings`, `itemSettings`, `pokemonSettings`, and one singleton (e.g., `ACCESSIBILITY_CLIENT_SETTINGS`).

Run: `mkdir -p packages/go-api/testdata`
Then build the fixture by extracting matching entries from `masterfile.json`:

```bash
# Example: jq one-liner to assemble a fixture (run from repo root)
jq '[.[] | select(.templateId == "V0033_MOVE_TACKLE_FAST" or .templateId == "V0001_POKEMON_BULBASAUR" or .templateId == "ITEM_POKE_BALL" or .templateId == "ACCESSIBILITY_CLIENT_SETTINGS")]' \
  masterfile.json > packages/go-api/testdata/fixture.json
```

- [ ] **Step 2: Write `packages/go-api/accessors_test.go`**

```go
package masterfileapi

import (
	"os"
	"testing"

	"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/move_settings"
	"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/singletons"
)

func loadFixture(t *testing.T) *Masterfile {
	t.Helper()
	data, err := os.ReadFile("testdata/fixture.json")
	if err != nil {
		t.Fatalf("read fixture: %v", err)
	}
	mf, err := Load(data)
	if err != nil {
		t.Fatalf("load: %v", err)
	}
	return mf
}

func TestMoveSettingsAccessor_GetAndHas(t *testing.T) {
	mf := loadFixture(t)
	move, ok := mf.MoveSettings.Get(move_settings.MoveSettingsTemplateIDV0033MoveTackleFast)
	if !ok {
		t.Fatal("expected V0033_MOVE_TACKLE_FAST in fixture")
	}
	if move.TemplateID != "V0033_MOVE_TACKLE_FAST" {
		t.Errorf("TemplateID = %q", move.TemplateID)
	}
	if !mf.MoveSettings.Has(move_settings.MoveSettingsTemplateIDV0033MoveTackleFast) {
		t.Error("Has should return true")
	}
}

func TestMoveSettingsAccessor_Miss(t *testing.T) {
	mf := loadFixture(t)
	if _, ok := mf.MoveSettings.Get(move_settings.MoveSettingsTemplateID("DOES_NOT_EXIST")); ok {
		t.Error("Get should return false on miss")
	}
}

func TestMoveSettingsAccessor_AllAndLen(t *testing.T) {
	mf := loadFixture(t)
	all := mf.MoveSettings.All()
	if len(all) != mf.MoveSettings.Len() {
		t.Errorf("All() len %d != Len() %d", len(all), mf.MoveSettings.Len())
	}
	if mf.MoveSettings.Len() == 0 {
		t.Error("expected at least one move in fixture")
	}
}

func TestSingletonsAccessor_Get(t *testing.T) {
	mf := loadFixture(t)
	entry, ok := mf.Singletons.Get(singletons.SingletonsTemplateID("ACCESSIBILITY_CLIENT_SETTINGS"))
	if !ok {
		t.Fatal("expected accessibility singleton")
	}
	if _, ok := entry.(singletons.AccessibilitySettingsEntry); !ok {
		t.Errorf("expected AccessibilitySettingsEntry, got %T", entry)
	}
}

func TestGroups_PopulatedAfterCodegen(t *testing.T) {
	mf := loadFixture(t)
	if len(mf.Groups()) == 0 {
		t.Error("Groups() should be populated after codegen runs")
	}
}
```

- [ ] **Step 3: Write `packages/go-api/e2e_test.go`**

```go
package masterfileapi

import (
	"context"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"
)

func TestE2E_FullMasterfileViaLoadRemote(t *testing.T) {
	if testing.Short() {
		t.Skip("e2e test skipped in -short mode")
	}
	body, err := os.ReadFile("../../masterfile.json")
	if err != nil {
		t.Skipf("repo-root masterfile.json not available: %v", err)
	}
	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		_, _ = w.Write(body)
	}))
	defer srv.Close()

	mf, err := LoadRemote(context.Background(), WithURL(srv.URL))
	if err != nil {
		t.Fatalf("LoadRemote: %v", err)
	}
	if mf.Len() < 100 {
		t.Errorf("expected hundreds of entries, got %d", mf.Len())
	}
	if mf.MoveSettings.Len() == 0 {
		t.Error("expected at least one move in full masterfile")
	}
	if mf.Singletons.Len() == 0 {
		t.Error("expected at least one singleton in full masterfile")
	}
}
```

- [ ] **Step 4: Run, expect PASS**

Run: `cd packages/go-api && go test ./...`
Expected: all tests PASS, including the e2e test.

- [ ] **Step 5: Commit**

```bash
git add packages/go-api/accessors_test.go packages/go-api/e2e_test.go packages/go-api/testdata/
git commit -m "go-api: per-group accessor tests + e2e against full masterfile"
```

### Task 16: Examples

Five runnable example programs.

**Files:**
- Create: `packages/go-api/examples/load_remote/main.go`
- Create: `packages/go-api/examples/from_json/main.go`
- Create: `packages/go-api/examples/per_group/main.go`
- Create: `packages/go-api/examples/custom_fetcher/main.go`
- Create: `packages/go-api/examples/refresh/main.go`

- [ ] **Step 1: Create `examples/load_remote/main.go`**

```go
package main

import (
	"context"
	"fmt"
	"log"

	masterfileapi "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go-api"
	"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/move_settings"
)

func main() {
	mf, err := masterfileapi.LoadRemote(context.Background())
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("loaded %d entries (%d moves)\n", mf.Len(), mf.MoveSettings.Len())

	move, ok := mf.MoveSettings.Get(move_settings.MoveSettingsTemplateIDV0033MoveTackleFast)
	if ok {
		fmt.Printf("Tackle Fast: power = %v\n", move.Data.MoveSettings.Power)
	}
}
```

- [ ] **Step 2: Create `examples/from_json/main.go`**

```go
package main

import (
	"fmt"
	"log"
	"os"

	masterfileapi "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go-api"
)

func main() {
	if len(os.Args) != 2 {
		log.Fatalf("usage: %s <path/to/masterfile.json>", os.Args[0])
	}
	data, err := os.ReadFile(os.Args[1])
	if err != nil {
		log.Fatal(err)
	}
	mf, err := masterfileapi.Load(data)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("loaded %d entries from %s\n", mf.Len(), os.Args[1])
}
```

- [ ] **Step 3: Create `examples/per_group/main.go`**

```go
package main

import (
	"context"
	"fmt"
	"log"

	masterfileapi "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go-api"
	"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/move_settings"
)

func main() {
	mf, err := masterfileapi.LoadRemote(context.Background())
	if err != nil {
		log.Fatal(err)
	}

	// Iterate one group with the typed entry — fields autocomplete.
	count := 0
	for _, m := range mf.MoveSettings.All() {
		if m.Data.MoveSettings.Power != nil && *m.Data.MoveSettings.Power > 100 {
			count++
		}
	}
	fmt.Printf("%d moves have power > 100\n", count)

	// Typed-constant lookup.
	if mh, ok := mf.MoveSettings.Get(move_settings.MoveSettingsTemplateIDV0022MoveMegahorn); ok {
		fmt.Printf("Megahorn type: %s\n", mh.Data.MoveSettings.PokemonType)
	}
}
```

- [ ] **Step 4: Create `examples/custom_fetcher/main.go`**

```go
package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"

	masterfileapi "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go-api"
	masterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"
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
```

- [ ] **Step 5: Create `examples/refresh/main.go`**

```go
package main

import (
	"context"
	"fmt"
	"log"
	"sync/atomic"
	"time"

	masterfileapi "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go-api"
)

func main() {
	var current atomic.Pointer[masterfileapi.Masterfile]

	mf, err := masterfileapi.LoadRemote(context.Background())
	if err != nil {
		log.Fatal(err)
	}
	current.Store(mf)
	fmt.Printf("initial load: %d entries\n", mf.Len())

	// Refresh every 10 minutes in the background.
	ticker := time.NewTicker(10 * time.Minute)
	defer ticker.Stop()
	go func() {
		for range ticker.C {
			fresh, err := masterfileapi.LoadRemote(context.Background())
			if err != nil {
				log.Printf("refresh failed: %v", err)
				continue
			}
			current.Store(fresh)
			log.Printf("refreshed: %d entries", fresh.Len())
		}
	}()

	// Reader: load the latest pointer atomically.
	now := current.Load()
	fmt.Printf("reader sees %d entries\n", now.Len())
}
```

- [ ] **Step 6: Verify each example builds**

Run: `cd packages/go-api && go build ./examples/...`
Expected: clean build (no output).

- [ ] **Step 7: Commit**

```bash
git add packages/go-api/examples/
git commit -m "go-api: examples for load_remote, from_json, per_group, custom_fetcher, refresh"
```

### Task 17: Final README + CHANGELOG

Replace the placeholder README with the production version; bump CHANGELOG.

**Files:**
- Modify: `packages/go-api/README.md`
- Modify: `packages/go-api/CHANGELOG.md`

- [ ] **Step 1: Replace `packages/go-api/README.md`**

```markdown
# pogo-masterfile (Go)

Runtime API for the Pokémon GO masterfile. Loads, indexes, and queries entries with per-group typed accessors. Built on [`pogo-masterfile-types`](../go/README.md).

## Install

```bash
go get github.com/PLACEHOLDER/pogo-masterfile-types/packages/go-api
```

> Replace `PLACEHOLDER` with the actual GitHub owner once the repo is hosted.

## Quickstart

```go
package main

import (
    "context"
    "fmt"
    "log"

    masterfileapi "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go-api"
    "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/move_settings"
)

func main() {
    mf, err := masterfileapi.LoadRemote(context.Background())
    if err != nil {
        log.Fatal(err)
    }

    // Top-level lookup — returns the wide MasterfileEntry interface.
    entry, ok := mf.GetEntry("V0022_MOVE_MEGAHORN")
    _ = entry

    // Per-group accessor — typed return; fields autocomplete.
    move, ok := mf.MoveSettings.Get(move_settings.MoveSettingsTemplateIDV0033MoveTackleFast)
    if ok {
        fmt.Printf("power = %v\n", move.Data.MoveSettings.Power)
    }
}
```

## Top-level vs per-group lookups

- **Top-level** (`mf.GetEntry`, `mf.Has`) returns the wide `masterfile.MasterfileEntry` interface. Use it for arbitrary string IDs; type-assert to a concrete entry if you need fields.
- **Per-group** (`mf.MoveSettings.Get(id)`) returns the concrete typed entry. The id parameter is the typed `move_settings.MoveSettingsTemplateID` — predefined constants and string literals work directly; string variables need a one-character cast (`move_settings.MoveSettingsTemplateID(s)`).

## Loading

```go
// Default: alexelgt mirror, http.DefaultClient.
mf, err := masterfileapi.LoadRemote(ctx)

// Custom URL / timeout via *http.Client.
mf, err := masterfileapi.LoadRemote(
    ctx,
    masterfileapi.WithURL("https://my-cdn/masterfile.json"),
    masterfileapi.WithHTTPClient(&http.Client{Timeout: 30 * time.Second}),
)

// Fully custom fetcher (e.g. wrapped JSON shape, S3 source).
mf, err := masterfileapi.LoadRemote(
    ctx,
    masterfileapi.WithFetcher(masterfileapi.FetcherFunc(func(ctx context.Context, url string) ([]masterfile.MasterfileEntry, error) {
        // ...
    })),
)

// Pre-loaded JSON (no network).
mf, err := masterfileapi.Load(jsonBytes)

// Pre-parsed entries.
mf := masterfileapi.FromEntries(entries)
```

## Errors

```go
import "errors"

mf, err := masterfileapi.LoadRemote(ctx)
if err != nil {
    var fe *masterfileapi.FetchError
    var se *masterfileapi.StatusError
    var pe *masterfileapi.ParseError
    switch {
    case errors.As(err, &fe):  // network/transport (incl. context cancel)
    case errors.As(err, &se):  // non-2xx HTTP
    case errors.As(err, &pe):  // JSON malformed
    case errors.Is(err, masterfileapi.ErrInvalidShape): // not an array
    }
}
```

Lookups never error: `Get` and `Has` use the comma-ok pattern.

## Refresh / concurrent reads

`Masterfile` is read-safe across goroutines after construction. To refresh, swap the pointer atomically:

```go
var current atomic.Pointer[masterfileapi.Masterfile]
mf, _ := masterfileapi.LoadRemote(ctx)
current.Store(mf)

// background refresh
go func() {
    if mf2, err := masterfileapi.LoadRemote(ctx); err == nil {
        current.Store(mf2)
    }
}()

// readers
mf := current.Load()
```

## Releases

This module lives at `packages/go-api/` inside a multi-language monorepo. Go's module proxy treats subdirectory modules as independent and **requires** semver tags to be **prefixed with the subdirectory path**:

```bash
git tag packages/go-api/v0.1.0      # ✅ correct
git tag v0.1.0                       # ❌ won't resolve
```

See [Go modules in subdirectories](https://go.dev/ref/mod#vcs-version) for the underlying rule.

## Source

`masterfile_gen.go` and `accessor/*.go` are generated from the codegen pipeline at the [repo root](https://github.com/PLACEHOLDER/pogo-masterfile-types). Don't edit emitted files by hand — re-run `bun run generate` instead. The hand-written runtime templates (`masterfile.go`, `loader.go`, `fetcher.go`, `errors.go`, `doc.go`) live in `src/go-api/templates/` and are copied verbatim on each generate.

## License

MIT — see [LICENSE](./LICENSE).
```

- [ ] **Step 2: Update `packages/go-api/CHANGELOG.md`**

Replace the existing `[Unreleased]` block with:

```markdown
## [Unreleased]

### Added
- Initial release: `Masterfile` runtime with `Load`, `LoadRemote`, `FromEntries`.
- Per-group typed accessors (`mf.MoveSettings.Get`, etc.) with `Get`, `Has`, `All`, `TemplateIDs`, `Len`.
- Top-level lookups: `GetEntry`, `Has`, `Entries`, `TemplateIDs`, `Len`, `Groups`.
- `Fetcher` interface + `FetcherFunc` adapter; default HTTP fetcher; `WithURL` / `WithHTTPClient` / `WithFetcher` options.
- Typed errors: `*FetchError`, `*StatusError`, `*ParseError`, sentinel `ErrInvalidShape` — all compatible with `errors.As` / `errors.Is`.
- Examples: `load_remote`, `from_json`, `per_group`, `custom_fetcher`, `refresh`.
```

- [ ] **Step 3: Final smoke test**

Run: `bun run generate && cd packages/go-api && go test ./... && go build ./examples/...`
Expected: all green.

- [ ] **Step 4: Commit**

```bash
git add packages/go-api/README.md packages/go-api/CHANGELOG.md
git commit -m "go-api: README + CHANGELOG for v0.1.0"
```

---

## Self-review notes

After all 17 tasks are complete, the following invariants should hold (use as a final checklist):

- `bun run generate` produces `packages/go-api/masterfile_gen.go` and `packages/go-api/accessor/<group>.go` files (one per multi-entry group + `singletons.go`); no diff after a clean regenerate.
- `bun run format` formats every Go file under `packages/go-api/`.
- `cd packages/go-api && go test ./...` is green.
- `cd packages/go-api && go build ./examples/...` is green.
- `cd packages/go-api && go vet ./...` produces no output.
- `git check-ignore -v packages/go-api/foo.go` reports the negation rule (file is tracked, not ignored).
- The module's `go.mod` uses a `replace` directive to resolve `packages/go` from `../go` during local dev.
- All public API surfaces match the spec sections (constructors, top-level lookups, per-group accessors with comma-ok return, options, errors).
