import { describe, expect, test } from "bun:test";
import { emitGo } from "./emit-go";
import type { DeprecatedSet } from "./types";

describe("emitGo", () => {
	test("emits package header and a discriminator with // Deprecated comment", () => {
		const set: DeprecatedSet = new Map();
		set.set("eventPassTierSettings", {
			discriminator: "eventPassTierSettings",
			templateIds: new Set(["FOO"]),
			lastSeen: "2026-04-09",
			entryCount: 1,
			dataTypeBody: {
				ts: "",
				rust: "",
				go: `type EventPassTierSettingsData struct {\n\tRank  uint64 \`json:"rank"\`\n\tTrack string \`json:"track"\`\n}`,
			},
		});
		const out = emitGo(set);
		expect(out).toContain("package deprecated");
		expect(out).toContain("// Deprecated: lastSeen 2026-04-09, 1 entries");
		expect(out).toContain("type EventPassTierSettingsData struct");
		expect(out).toContain("type EventPassTierSettings struct");
		expect(out).toContain("TemplateID");
		expect(out).toContain("EventPassTierSettings EventPassTierSettingsData");
	});

	test("empty set produces a header-only file", () => {
		const out = emitGo(new Map());
		expect(out).toContain("package deprecated");
		expect(out).not.toContain("// Deprecated:");
	});
});
