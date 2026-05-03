package masterfileapi

import (
	"errors"
	"testing"

	masterfile "github.com/Hazels-Lab/pogo-masterfile/packages/go"
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
	if !errors.Is(err, ErrInvalidShape) {
		t.Errorf("non-array JSON should also match ErrInvalidShape; err = %v", err)
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
