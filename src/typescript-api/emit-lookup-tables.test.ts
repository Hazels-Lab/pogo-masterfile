import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { groupEntries } from "../group.ts";
import { emitLookupTables } from "./emit-lookup-tables.ts";

describe("emitLookupTables", () => {
	test("starts with header and imports from pogo-masterfile-types", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(out.startsWith("// Generated from")).toBe(true);
		expect(out).toContain('from "pogo-masterfile-types/entries"');
	});

	test("re-exports GroupName from ./group-names", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(out).toContain('export type { GroupName } from "./group-names";');
	});

	test("EntryByTemplateID maps each templateId to its literal entry type", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(out).toContain("export interface EntryByTemplateID {");
		// Sample a known fixture entry
		const allIds = [...groups.values()].flatMap((g) =>
			g.entries.map((e) => e.templateId),
		);
		for (const id of allIds) {
			expect(out).toContain(`"${id}":`);
		}
	});

	test("EntriesByGroup maps each multi-entry discriminator to its entry union", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(out).toContain("export interface EntriesByGroup {");
		for (const g of groups.values()) {
			if (g.entries.length > 1) {
				expect(out).toMatch(new RegExp(`\\b${g.discriminator}: `));
			}
		}
	});

	test("EntriesByGroup includes singletons key when fixture has any", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const hasSingleton = [...groups.values()].some((g) => g.entries.length === 1);
		const out = emitLookupTables(groups);
		if (hasSingleton) {
			expect(out).toContain("singletons: SingletonsMasterfileEntry;");
		}
	});

	test("TemplateIDsByGroup maps each group to its TemplateID alias", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(out).toContain("export interface TemplateIDsByGroup {");
		for (const g of groups.values()) {
			if (g.entries.length > 1) {
				expect(out).toContain(`${g.discriminator}: `);
			}
		}
	});

	test("multi-entry literal entry types use deriveGroupAliases naming", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		// The fixture has POKEMON_TYPE_BUG in typeEffective group; with
		// shared prefix "POKEMON_TYPE_" stripped, the variant suffix is "Bug"
		// and the type name is "TypeEffectiveBug".
		expect(out).toContain("TypeEffectiveBug");
		// V0001_POKEMON_BULBASAUR in pokemonSettings group has no shared prefix
		// at underscore boundary → "PokemonSettingsV0001PokemonBulbasaur".
		expect(out).toContain("PokemonSettingsV0001PokemonBulbasaur");
	});
});
