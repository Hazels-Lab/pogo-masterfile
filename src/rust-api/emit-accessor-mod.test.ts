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

	test("does NOT include a singletons module", () => {
		// Singletons each get their own MasterfileEntry variant in the upstream
		// types crate, so the per-group accessor pattern doesn't fit them.
		// Singleton lookup goes through Masterfile::get_entry().
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitAccessorMod(groups);
		expect(out).not.toContain("pub mod singletons;");
		expect(out).not.toContain("SingletonsAccessor");
	});

	test("starts with the generated-file header comment", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitAccessorMod(groups);
		expect(out.startsWith("//! Generated from")).toBe(true);
	});
});
