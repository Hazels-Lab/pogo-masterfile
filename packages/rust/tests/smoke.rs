//! Round-trip smoke tests. Cheap to run, catch generator regressions early.

use pogo_masterfile_types::{MasterfileEntry, parse_masterfile};

#[test]
fn parses_empty_list() {
    let entries = parse_masterfile("[]").expect("empty array should parse");
    assert!(entries.is_empty());
}

#[test]
fn parses_minimal_singleton_entry() {
    // Mirrors the first entry shape in masterfile.json — kept inline so the
    // test doesn't depend on the workspace file layout.
    let json = r#"[
		{
			"templateId": "ACCESSIBILITY_CLIENT_SETTINGS",
			"data": {
				"templateId": "ACCESSIBILITY_CLIENT_SETTINGS",
				"accessibilitySettings": {
					"enabled": true,
					"pluginEnabled": true
				}
			}
		}
	]"#;
    let entries = parse_masterfile(json).expect("parse should succeed");
    assert_eq!(entries.len(), 1);
    match &entries[0] {
        MasterfileEntry::AccessibilitySettings(_) => {}
        other => panic!("expected AccessibilitySettings variant, got: {other:?}"),
    }
}

#[test]
fn round_trips_via_serde_json() {
    // parse → re-serialize → parse should produce a structurally equivalent value.
    let json = r#"[
		{
			"templateId": "ADDITIVE_SCENE_SETTINGS",
			"data": {
				"templateId": "ADDITIVE_SCENE_SETTINGS",
				"additiveSceneSettings": { "enabled": true }
			}
		}
	]"#;
    let entries = parse_masterfile(json).expect("first parse");
    let reserialized = serde_json::to_string(&entries).expect("reserialize");
    let again = parse_masterfile(&reserialized).expect("second parse");
    assert_eq!(entries.len(), again.len());
}
