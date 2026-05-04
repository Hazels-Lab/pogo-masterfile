import { describe, expect, test } from "bun:test";
import { emitGo } from "./emit-go";
import type { DeprecatedSet } from "./types";

describe("emitGo", () => {
	test("emits package header and single MasterfileEntry struct with json.RawMessage", () => {
		const set: DeprecatedSet = new Map();
		set.set("eventPassTierSettings", {
			discriminator: "eventPassTierSettings",
			templateIds: new Set(["FOO"]),
			lastSeen: "2026-04-09",
			entryCount: 1,
		});
		const out = emitGo(set);
		expect(out).toContain("package deprecated");
		expect(out).toContain(`import "encoding/json"`);
		expect(out).toContain("Deprecated: historical masterfile entry type for templates removed from upstream");
		expect(out).toContain("type MasterfileEntry struct");
		expect(out).toContain("TemplateID string");
		expect(out).toContain("json.RawMessage");
		expect(out).not.toContain("EventPassTierSettingsData");
		expect(out).toContain("Currently tracking 1 deprecated templateIds across 1 discriminators");
	});

	test("empty set emits header and struct with no-tracking doc comment", () => {
		const out = emitGo(new Map());
		expect(out).toContain("package deprecated");
		expect(out).toContain(`import "encoding/json"`);
		expect(out).toContain("type MasterfileEntry struct");
		expect(out).toContain("No deprecated templateIds currently tracked");
	});
});
