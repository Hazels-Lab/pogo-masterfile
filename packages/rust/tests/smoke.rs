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

#[test]
fn badge_settings_template_id_round_trips() {
    use pogo_masterfile_types::badge_settings::BadgeSettingsTemplateId;
    use std::str::FromStr;
    let s = "BADGE_BATTLE_ATTACK_WON";
    let parsed = BadgeSettingsTemplateId::from_str(s).expect("known badge templateId should parse");
    assert_eq!(parsed.as_str(), s);
}

#[test]
fn singletons_template_id_includes_accessibility() {
    use pogo_masterfile_types::singletons::SingletonsTemplateId;
    assert!(SingletonsTemplateId::ALL.contains(&SingletonsTemplateId::AccessibilityClientSettings));
}

mod template_id_macro_round_trip {
    //! Self-contained sanity check that the three derives compose: an enum
    //! with `AllVariants + AsStr + FromStrEnum` plus serde Serialize/Deserialize
    //! round-trips through string and JSON.

    use pogo_masterfile_types::{AllVariants, AsStr, FromStrEnum, UnknownTemplateId};
    use serde::{Deserialize, Serialize};
    use std::str::FromStr;

    #[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum)]
    enum Sample {
        #[serde(rename = "BADGE_ALPHA")]
        Alpha,
        #[serde(rename = "BADGE_BETA")]
        Beta,
    }

    #[test]
    fn size_and_all_match() {
        assert_eq!(Sample::SIZE, 2);
        assert_eq!(Sample::ALL, [Sample::Alpha, Sample::Beta]);
    }

    #[test]
    fn as_str_emits_serde_rename() {
        assert_eq!(Sample::Alpha.as_str(), "BADGE_ALPHA");
    }

    #[test]
    fn from_str_round_trips() {
        let parsed = Sample::from_str("BADGE_BETA").unwrap();
        assert_eq!(parsed, Sample::Beta);
    }

    #[test]
    fn from_str_unknown_returns_input() {
        let err: UnknownTemplateId = Sample::from_str("BADGE_GAMMA").unwrap_err();
        assert_eq!(err.0, "BADGE_GAMMA");
    }

    #[test]
    fn serde_json_round_trips() {
        let json = serde_json::to_string(&Sample::Alpha).unwrap();
        assert_eq!(json, "\"BADGE_ALPHA\"");
        let back: Sample = serde_json::from_str(&json).unwrap();
        assert_eq!(back, Sample::Alpha);
    }
}
