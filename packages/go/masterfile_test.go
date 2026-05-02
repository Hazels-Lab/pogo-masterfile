package masterfile

import (
	"testing"

	"github.com/Hazels-Lab/pogo-masterfile-types/packages/go/badge_settings"
	"github.com/Hazels-Lab/pogo-masterfile-types/packages/go/singletons"
)

func TestParseEmptyList(t *testing.T) {
	entries, err := ParseMasterfile([]byte("[]"))
	if err != nil {
		t.Fatalf("expected ok, got error: %v", err)
	}
	if len(entries) != 0 {
		t.Errorf("expected 0 entries, got %d", len(entries))
	}
}

func TestBadgeSettingsTemplateIDValuesNotEmpty(t *testing.T) {
	if len(badge_settings.BadgeSettingsTemplateIDValues) == 0 {
		t.Fatal("expected at least one BadgeSettings templateID")
	}
	var first badge_settings.BadgeSettingsTemplateID = badge_settings.BadgeSettingsTemplateIDValues[0]
	if string(first) == "" {
		t.Fatal("first templateID was empty")
	}
}

func TestSingletonsTemplateIDIncludesAccessibility(t *testing.T) {
	wanted := singletons.SingletonsTemplateID("ACCESSIBILITY_CLIENT_SETTINGS")
	for _, v := range singletons.SingletonsTemplateIDValues {
		if v == wanted {
			return
		}
	}
	t.Fatalf("SingletonsTemplateIDValues missing %q", wanted)
}

func TestParseAccessibilitySingleton(t *testing.T) {
	json := []byte(`[
		{
			"templateId": "ACCESSIBILITY_CLIENT_SETTINGS",
			"data": {
				"templateId": "ACCESSIBILITY_CLIENT_SETTINGS",
				"accessibilitySettings": { "enabled": true, "pluginEnabled": true }
			}
		}
	]`)
	entries, err := ParseMasterfile(json)
	if err != nil {
		t.Fatalf("expected ok, got error: %v", err)
	}
	if len(entries) != 1 {
		t.Fatalf("expected 1 entry, got %d", len(entries))
	}
	entry, ok := entries[0].(singletons.AccessibilitySettingsEntry)
	if !ok {
		t.Fatalf("expected AccessibilitySettingsEntry, got %T", entries[0])
	}
	if entry.TemplateID != "ACCESSIBILITY_CLIENT_SETTINGS" {
		t.Errorf("unexpected templateId: %s", entry.TemplateID)
	}
	if !entry.Data.AccessibilitySettings.Enabled {
		t.Errorf("expected enabled=true")
	}
}
