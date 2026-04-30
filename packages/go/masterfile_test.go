package masterfile

import "testing"

func TestParseEmptyList(t *testing.T) {
	entries, err := ParseMasterfile([]byte("[]"))
	if err != nil {
		t.Fatalf("expected ok, got error: %v", err)
	}
	if len(entries) != 0 {
		t.Errorf("expected 0 entries, got %d", len(entries))
	}
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
	entry, ok := entries[0].(AccessibilitySettingsEntry)
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
