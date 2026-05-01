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

func TestGroups_EmptyBeforeCodegen(t *testing.T) {
	mf := FromEntries(nil)
	got := mf.Groups()
	if got == nil {
		t.Error("Groups() should return a non-nil empty slice, got nil")
	}
	if len(got) != 0 {
		t.Errorf("Groups() should be empty pre-codegen, got %v", got)
	}
}
