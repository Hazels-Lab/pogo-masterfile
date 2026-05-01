import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { groupEntries } from "../group.ts";
import { emitAccessorMod } from "./emit-accessor-mod.ts";

describe("emitAccessorMod", () => {
	test("declares pub mod for each group + re-exports the accessor types", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitAccessorMod(groups);
		expect(out).toContain("pub mod ");
		expect(out).toMatch(/pub use \w+::\w+Accessor;/);
	});

	test("modules are alphabetical (snake_case)", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitAccessorMod(groups);
		const matches = [...out.matchAll(/pub mod (\w+);/g)].map((m) => m[1]!);
		const sorted = [...matches].sort();
		expect(matches).toEqual(sorted);
	});

	test("includes a singletons module when fixture has any", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const hasSingleton = [...groups.values()].some((g) => g.entries.length === 1);
		const out = emitAccessorMod(groups);
		if (hasSingleton) {
			expect(out).toContain("pub mod singletons;");
			expect(out).toContain("pub use singletons::SingletonsAccessor;");
		}
	});

	test("starts with the generated-file header comment", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitAccessorMod(groups);
		expect(out.startsWith("//! Generated from")).toBe(true);
	});
});
