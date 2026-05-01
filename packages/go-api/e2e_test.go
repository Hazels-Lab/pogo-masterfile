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
