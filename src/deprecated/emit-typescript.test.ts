import { describe, expect, test } from "bun:test";
import { emitTypescript } from "./emit-typescript";
import type { DeprecatedSet } from "./types";

describe("emitTypescript", () => {
	test("emits header, re-exports, and a multi-entry discriminator block", () => {
		const set: DeprecatedSet = new Map();
		set.set("eventPassTierSettings", {
			discriminator: "eventPassTierSettings",
			templateIds: new Set(["FOO", "BAR"]),
			lastSeen: "2026-04-09",
			entryCount: 2,
			dataTypeBody: {
				ts: `export interface DeprecatedEventPassTierSettingsData {\n\trank?: number;\n\ttrack?: string;\n}`,
				rust: "",
				go: "",
			},
		});
		const out = emitTypescript(set);
		expect(out).toMatch(/^\/\/ Generated/);
		expect(out).toContain(`export type * from "./entries"`);
		expect(out).toContain(`export type * from "./types"`);
		expect(out).toContain("export interface DeprecatedEventPassTierSettingsData");
		expect(out).toContain("@deprecated lastSeen 2026-04-09 — 2 entries");
		expect(out).toMatch(/type DeprecatedEventPassTierSettingsIds = "BAR" \| "FOO"/);
		expect(out).toContain("export type DeprecatedEventPassTierSettings");
		expect(out).toContain("export type DeprecatedMasterfileEntry =");
	});

	test("emits singleton with single-literal union", () => {
		const set: DeprecatedSet = new Map();
		set.set("gymLevel", {
			discriminator: "gymLevel",
			templateIds: new Set(["GYM_LEVEL_SETTINGS"]),
			lastSeen: "2025-12-01",
			entryCount: 1,
			dataTypeBody: { ts: "export interface DeprecatedGymLevelData { value?: number; }", rust: "", go: "" },
		});
		const out = emitTypescript(set);
		expect(out).toMatch(/type DeprecatedGymLevelIds = "GYM_LEVEL_SETTINGS"/);
	});

	test("empty set produces a valid file with empty union", () => {
		const out = emitTypescript(new Map());
		expect(out).toMatch(/^\/\/ Generated/);
		expect(out).toContain(`export type * from "./entries"`);
		expect(out).toContain("export type DeprecatedMasterfileEntry = never");
	});
});
