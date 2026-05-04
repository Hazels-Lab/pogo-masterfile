import { describe, expect, test } from "bun:test";
import { emitRust } from "./emit-rust";
import type { DeprecatedSet } from "./types";

describe("emitRust", () => {
	test("emits header and a discriminator with #[deprecated]", () => {
		const set: DeprecatedSet = new Map();
		set.set("eventPassTierSettings", {
			discriminator: "eventPassTierSettings",
			templateIds: new Set(["FOO", "BAR"]),
			lastSeen: "2026-04-09",
			entryCount: 2,
			dataTypeBody: {
				ts: "",
				rust: `#[derive(Debug, Clone, Serialize, Deserialize)]\n#[serde(rename_all = "camelCase")]\npub struct EventPassTierSettingsData {\n\tpub rank: u64,\n\tpub track: String,\n}`,
				go: "",
			},
		});
		const out = emitRust(set);
		expect(out).toContain("use serde::{Deserialize, Serialize};");
		expect(out).toContain('#[deprecated(note = "lastSeen 2026-04-09 — 2 entries")]');
		expect(out).toContain("pub struct EventPassTierSettingsData");
		expect(out).toContain("pub struct EventPassTierSettings");
	});

	test("empty set produces a header-only file", () => {
		const out = emitRust(new Map());
		expect(out).toContain("use serde::{Deserialize, Serialize};");
		expect(out).not.toContain("#[deprecated");
	});
});
