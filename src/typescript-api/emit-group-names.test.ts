import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { groupEntries } from "../group.ts";
import { emitGroupNames } from "./emit-group-names.ts";

describe("emitGroupNames", () => {
	test("emits a const array of camelCase discriminators", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitGroupNames(groups);
		expect(out).toContain("export const GROUP_NAMES = [");
		expect(out).toContain("] as const;");
		expect(out).toContain("export type GroupName = (typeof GROUP_NAMES)[number];");
	});

	test("entries are alphabetically sorted", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitGroupNames(groups);
		const names = [...out.matchAll(/^\t"([^"]+)",$/gm)].map((m) => m[1]!);
		const sorted = [...names].sort();
		expect(names).toEqual(sorted);
	});

	test("includes singletons as a group when fixture has any", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const hasSingleton = [...groups.values()].some((g) => g.entries.length === 1);
		const out = emitGroupNames(groups);
		if (hasSingleton) {
			expect(out).toContain('"singletons"');
		}
	});

	test("includes every multi-entry discriminator", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitGroupNames(groups);
		for (const g of groups.values()) {
			if (g.entries.length > 1) {
				expect(out).toContain(`"${g.discriminator}"`);
			}
		}
	});

	test("starts with the generated-file header comment", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitGroupNames(groups);
		expect(out.startsWith("// Generated from")).toBe(true);
	});
});
