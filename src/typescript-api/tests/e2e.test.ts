import { describe, expect, test } from "bun:test";
import { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";

const E2E_ENABLED = process.env.BUN_E2E === "1";
const ifE2E = E2E_ENABLED ? test : test.skip;

describe("Masterfile e2e (gated by BUN_E2E=1)", () => {
	ifE2E(
		"loads from the real default URL",
		async () => {
			const mf = await Masterfile.fromRemote();
			expect(mf.size).toBeGreaterThan(0);
			expect(mf.groups()).toContain("moveSettings");
			expect(mf.groups()).toContain("pokemonSettings");
			const bulbasaur = mf.tryGetEntry("V0001_POKEMON_BULBASAUR");
			expect(bulbasaur).toBeDefined();
			expect(bulbasaur?.templateId).toBe("V0001_POKEMON_BULBASAUR");
		},
		60_000,
	);
});
