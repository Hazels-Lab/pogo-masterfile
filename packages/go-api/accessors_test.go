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
	move, ok := mf.MoveSettings.Get(move_settings.MoveSettingsTemplateIDV0013MoveWrap)
	if !ok {
		t.Fatal("expected V0013_MOVE_WRAP in fixture")
	}
	if move.TemplateID != "V0013_MOVE_WRAP" {
		t.Errorf("TemplateID = %q", move.TemplateID)
	}
	if !mf.MoveSettings.Has(move_settings.MoveSettingsTemplateIDV0013MoveWrap) {
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

func TestSingletonsAccessor_TemplateIDsIsDeterministic(t *testing.T) {
	mf := loadFixture(t)
	a := mf.Singletons.TemplateIDs()
	b := mf.Singletons.TemplateIDs()
	if len(a) != len(b) {
		t.Fatalf("length mismatch: %d vs %d", len(a), len(b))
	}
	for i := range a {
		if a[i] != b[i] {
			t.Errorf("position %d: %q vs %q", i, a[i], b[i])
		}
	}
}
