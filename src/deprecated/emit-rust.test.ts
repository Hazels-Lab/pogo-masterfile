import { describe, expect, test } from "bun:test";
import { emitRust } from "./emit-rust";
import type { DeprecatedSet } from "./types";

describe("emitRust", () => {
	test("emits header, serde_json import, and single DeprecatedMasterfileEntry struct", () => {
		const set: DeprecatedSet = new Map();
		set.set("eventPassTierSettings", {
			discriminator: "eventPassTierSettings",
			templateIds: new Set(["FOO", "BAR"]),
			lastSeen: "2026-04-09",
			entryCount: 2,
		});
		const out = emitRust(set);
		expect(out).toContain("use serde::{Deserialize, Serialize};");
		expect(out).toContain("use serde_json::Value;");
		expect(out).toContain('#[deprecated(note = "Historical masterfile entry type for templates removed from upstream")]');
		expect(out).toContain("pub struct DeprecatedMasterfileEntry");
		expect(out).toContain("pub template_id: String,");
		expect(out).toContain("pub data: Value,");
		expect(out).not.toContain("EventPassTierSettingsData");
		expect(out).toContain("Currently tracking 2 deprecated templateIds across 1 discriminators");
	});

	test("empty set emits header and struct with no-tracking doc comment", () => {
		const out = emitRust(new Map());
		expect(out).toContain("use serde::{Deserialize, Serialize};");
		expect(out).toContain("use serde_json::Value;");
		expect(out).toContain("pub struct DeprecatedMasterfileEntry");
		expect(out).toContain("No deprecated templateIds currently tracked");
	});
});
