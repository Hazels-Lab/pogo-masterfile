import { describe, expect, test } from "bun:test";
import { filterGameMasterEntries } from "./codegen-core";
import { buildGoOutput, parseGoArgs } from "./go";
import { buildRustOutput, parseRustArgs } from "./rust";
import type { GameMasterEntryRaw } from "./types";
import { buildTypescriptOutput, parseTypescriptArgs } from "./typescript";

const FIXTURE_ENTRIES: GameMasterEntryRaw[] = [
	{
		templateId: "AVATAR_POSE",
		data: {
			enabled: true,
			items: [{ item: "hat" }, { item: "shirt", count: 2 }],
			score: 1,
			default: "x",
		},
	},
	{
		templateId: "FEATURE_GATE_MAIN",
		data: {
			state: null,
			values: [1, 2.5],
		},
	},
	{
		templateId: "AR_TEMPLATE",
		data: {
			flag: false,
		},
	},
];

const EXPECTED_TYPESCRIPT_OUTPUT = `/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Filters: prefix:AVATAR_, match:FEATURE_GATE
// Entries emitted: 2

export interface Avatar_posedataitemsitem {
  count?: number;
  item: string;
}
export interface Avatar_posedata {
  "default": string;
  enabled: boolean;
  items: (Avatar_posedataitemsitem)[];
  score: number;
}
export interface Avatar_poseEntry {
  templateId: "AVATAR_POSE";
  data: Avatar_posedata;
}
export interface Feature_gate_maindata {
  state: null;
  values: (number)[];
}
export interface Feature_gate_mainEntry {
  templateId: "FEATURE_GATE_MAIN";
  data: Feature_gate_maindata;
}

export interface GameMasterByTemplateId {
  "AVATAR_POSE": Avatar_poseEntry;
  "FEATURE_GATE_MAIN": Feature_gate_mainEntry;
}

export type GameMasterEntry = Avatar_poseEntry | Feature_gate_mainEntry;
export type GameMaster = GameMasterEntry[];
`;

const EXPECTED_GO_OUTPUT = `// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Entries emitted: 3
// Integer strategy: smart

package pkgweirdname

import (
	"encoding/json"
	"fmt"
)

type Avatarposedataitemsitem struct {
	Count *uint64 \`json:"count,omitempty"\`
	Item string \`json:"item"\`
}
type Avatarposedata struct {
	DefaultField string \`json:"default"\`
	Enabled bool \`json:"enabled"\`
	Items []Avatarposedataitemsitem \`json:"items"\`
	Score uint64 \`json:"score"\`
}
type Featuregatemaindata struct {
	State json.RawMessage \`json:"state"\`
	Values []float64 \`json:"values"\`
}
type Artemplatedata struct {
	Flag bool \`json:"flag"\`
}

type GameMasterEntryData interface {
	isGameMasterEntryData()
}

func (a Avatarposedata) isGameMasterEntryData() {}
func (f Featuregatemaindata) isGameMasterEntryData() {}
func (a Artemplatedata) isGameMasterEntryData() {}

type GameMasterEntry struct {
	TemplateID string          \`json:"templateId"\`
	Data       json.RawMessage \`json:"data"\`
}

type GameMaster []GameMasterEntry

func (e GameMasterEntry) DecodeData() (GameMasterEntryData, error) {
	switch e.TemplateID {
	case "AVATAR_POSE":
		var v Avatarposedata
		if err := json.Unmarshal(e.Data, &v); err != nil {
			return nil, err
		}
		return v, nil
	case "FEATURE_GATE_MAIN":
		var v Featuregatemaindata
		if err := json.Unmarshal(e.Data, &v); err != nil {
			return nil, err
		}
		return v, nil
	case "AR_TEMPLATE":
		var v Artemplatedata
		if err := json.Unmarshal(e.Data, &v); err != nil {
			return nil, err
		}
		return v, nil
	default:
		return nil, fmt.Errorf("unknown templateId: %s", e.TemplateID)
	}
}
`;

const EXPECTED_RUST_OUTPUT = `// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Filters: all
// Entries emitted: 3
// Integer strategy: smart
// Derive Default: true

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, Default)]
pub struct Avatarposedataitemsitem {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub count: Option<u64>,
    pub item: String,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, Default)]
pub struct Avatarposedata {
    pub default: String,
    pub enabled: bool,
    pub items: Vec<Avatarposedataitemsitem>,
    pub score: u64,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, Default)]
pub struct Featuregatemaindata {
    pub state: Option<serde_json::Value>,
    pub values: Vec<f64>,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, Default)]
pub struct Artemplatedata {
    pub flag: bool,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, Default)]
#[serde(tag = "templateId", content = "data")]
pub enum GameMasterEntry {
    #[serde(rename = "AVATAR_POSE")]
    AvatarPose(Avatarposedata),
    #[serde(rename = "FEATURE_GATE_MAIN")]
    FeatureGateMain(Featuregatemaindata),
    #[serde(rename = "AR_TEMPLATE")]
    ArTemplate(Artemplatedata),
}

pub type GameMaster = Vec<GameMasterEntry>;
`;

describe("codegen refactor parity", () => {
	test("TypeScript CLI still defaults to all when no filters are passed", () => {
		const options = parseTypescriptArgs([]);

		expect(options.includeAll).toBe(true);
		expect(options.prefixes).toEqual([]);
		expect(options.matches).toEqual([]);
	});

	test("generator parsers keep repeated filters and language-specific options", () => {
		const typescriptOptions = parseTypescriptArgs([
			"--prefix",
			"AVATAR_",
			"--prefix",
			"AR_",
			"--match",
			"FEATURE_GATE",
		]);
		const goOptions = parseGoArgs([
			"--package",
			"123 weird-name",
			"--validate",
		]);
		const rustOptions = parseRustArgs([
			"--integer-strategy",
			"f64",
			"--derive-default",
			"--all",
		]);

		expect(typescriptOptions.includeAll).toBe(false);
		expect(typescriptOptions.prefixes).toEqual(["AVATAR_", "AR_"]);
		expect(typescriptOptions.matches).toEqual(["FEATURE_GATE"]);
		expect(goOptions.includeAll).toBe(true);
		expect(goOptions.packageName).toBe("pkgweirdname");
		expect(goOptions.validate).toBe(true);
		expect(rustOptions.includeAll).toBe(true);
		expect(rustOptions.integerStrategy).toBe("f64");
		expect(rustOptions.deriveDefault).toBe(true);
	});

	test("shared filtering still ignores non-object payloads and keeps match order", () => {
		const filtered = filterGameMasterEntries(
			[
				...FIXTURE_ENTRIES,
				{
					templateId: "BROKEN_TEMPLATE",
					data: null as unknown as GameMasterEntryRaw["data"],
				},
			],
			{
				includeAll: false,
				prefixes: ["AVATAR_"],
				matches: ["FEATURE_GATE"],
			},
		);

		expect(filtered.map((entry) => entry.templateId)).toEqual([
			"AVATAR_POSE",
			"FEATURE_GATE_MAIN",
		]);
	});

	test("TypeScript output stays byte-for-byte the same for the fixture", () => {
		const options = parseTypescriptArgs([
			"--prefix",
			"AVATAR_",
			"--match",
			"FEATURE_GATE",
		]);
		const output = buildTypescriptOutput(FIXTURE_ENTRIES, options);

		expect(output.trim()).toBe(EXPECTED_TYPESCRIPT_OUTPUT.trim());
	});

	test("Go output stays byte-for-byte the same for the fixture", () => {
		const options = parseGoArgs(["--all", "--package", "123 weird-name"]);
		const output = buildGoOutput(FIXTURE_ENTRIES, options);

		expect(output.trim()).toBe(EXPECTED_GO_OUTPUT.trim());
	});

	test("Rust output stays byte-for-byte the same for the fixture", () => {
		const options = parseRustArgs(["--all", "--derive-default"]);
		const output = buildRustOutput(FIXTURE_ENTRIES, options);

		expect(output.trim()).toBe(EXPECTED_RUST_OUTPUT.trim());
	});
});
