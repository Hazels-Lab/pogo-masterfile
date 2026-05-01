import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { groupEntries } from "../group.ts";
import { emitLookupTables } from "./emit-lookup-tables.ts";

describe("emitLookupTables (split)", () => {
	test("returns a main file and a per-group map", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(typeof out.main).toBe("string");
		expect(out.perGroup.size).toBeGreaterThan(0);
	});

	test("each per-group file is at lookup-tables/<kebab>.d.ts", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		for (const path of out.perGroup.keys()) {
			expect(path).toMatch(/^lookup-tables\/[a-z0-9-]+\.d\.ts$/);
		}
	});

	test("per-group file declares its <Group>Lookup interface", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		const moveOrTypeEffective = out.perGroup.get("lookup-tables/type-effective.d.ts");
		expect(moveOrTypeEffective).toBeDefined();
		expect(moveOrTypeEffective).toContain("export interface TypeEffectiveLookup {");
	});

	test("per-group file imports literal entry types from pogo-masterfile-types", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		const file = out.perGroup.get("lookup-tables/pokemon-settings.d.ts");
		expect(file).toBeDefined();
		expect(file).toContain('from "pogo-masterfile-types/entries"');
		expect(file).toContain("PokemonSettingsV0001PokemonBulbasaur");
	});

	test("per-group entry keys are sorted by templateId", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		const file = out.perGroup.get("lookup-tables/pokemon-settings.d.ts")!;
		const idx1 = file.indexOf("V0001_POKEMON_BULBASAUR");
		const idx2 = file.indexOf("V0002_POKEMON_IVYSAUR");
		expect(idx1).toBeGreaterThan(0);
		expect(idx2).toBeGreaterThan(idx1);
	});

	test("singletons collapse into a single SingletonsLookup interface", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const hasSingleton = [...groups.values()].some((g) => g.entries.length === 1);
		const out = emitLookupTables(groups);
		if (hasSingleton) {
			const file = out.perGroup.get("lookup-tables/singletons.d.ts");
			expect(file).toBeDefined();
			expect(file).toContain("export interface SingletonsLookup {");
		}
	});

	test("main file extends EntryByTemplateID from per-group interfaces", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(out.main).toContain("export interface EntryByTemplateID extends");
		// Should reference each per-group interface
		for (const file of out.perGroup.values()) {
			const match = file.match(/export interface (\w+Lookup)/);
			expect(match).not.toBeNull();
			const name = match![1]!;
			expect(out.main).toContain(name);
		}
	});

	test("main file re-exports GroupName + every per-group Lookup interface", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(out.main).toContain('export type { GroupName } from "./group-names";');
		for (const file of out.perGroup.values()) {
			const match = file.match(/export interface (\w+Lookup)/)!;
			const name = match[1]!;
			expect(out.main).toMatch(new RegExp(`export type \\{ ${name} \\}`));
		}
	});

	test("main file declares EntriesByGroup and TemplateIDsByGroup", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(out.main).toContain("export interface EntriesByGroup {");
		expect(out.main).toContain("export interface TemplateIDsByGroup {");
		for (const g of groups.values()) {
			if (g.entries.length > 1) {
				expect(out.main).toMatch(new RegExp(`\\b${g.discriminator}: `));
			}
		}
	});

	test("main file starts with the generated header", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(out.main.startsWith("// Generated from")).toBe(true);
	});
});
