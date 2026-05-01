import { describe, expect, test } from "bun:test";
import type { Group } from "../group.ts";
import { emitMasterfileGen } from "./emit-masterfile-gen.ts";

const groups = new Map<string, Group>([
	["moveSettings", { discriminator: "moveSettings", entries: [{}, {}] as never }],
	["pokemonSettings", { discriminator: "pokemonSettings", entries: [{}, {}] as never }],
	["uniqueOnly", { discriminator: "uniqueOnly", entries: [{}] as never }], // singleton-shaped
]);

describe("emitMasterfileGen", () => {
	const out = emitMasterfileGen(groups);

	test("emits one accessor field per multi-entry group + Singletons", () => {
		expect(out).toContain("MoveSettings *accessor.MoveSettingsAccessor");
		expect(out).toContain("PokemonSettings *accessor.PokemonSettingsAccessor");
		expect(out).toContain("Singletons *accessor.SingletonsAccessor");
		expect(out).not.toContain("UniqueOnly *accessor."); // single-entry → singleton, not its own accessor
	});

	test("type switch has one arm per multi-entry group", () => {
		expect(out).toContain("case move_settings.MoveSettingsEntry:");
		expect(out).toContain("case pokemon_settings.PokemonSettingsEntry:");
		expect(out).not.toContain("case unique_only.UniqueOnlyEntry:");
	});

	test("GroupNames lists multi-entry groups", () => {
		expect(out).toContain('"moveSettings",');
		expect(out).toContain('"pokemonSettings",');
		expect(out).not.toContain('"uniqueOnly",');
	});

	test("default arm routes singletons via reflection helper", () => {
		expect(out).toContain("singletonTemplateID(v)");
		expect(out).toContain("singletonEntries = append(singletonEntries, v)");
	});
});
