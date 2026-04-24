import { describe, expect, test } from "bun:test";
import type { Group } from "./group.ts";
import { emitGroupFile } from "./emit.ts";

describe("emitGroupFile", () => {
	test("emits generic interface + per-entry aliases + union + TemplateID for a multi-entry group", () => {
		const group: Group = {
			discriminator: "typeEffective",
			entries: [
				{
					templateId: "POKEMON_TYPE_BUG",
					data: { templateId: "POKEMON_TYPE_BUG", typeEffective: {} },
				},
				{
					templateId: "POKEMON_TYPE_DARK",
					data: { templateId: "POKEMON_TYPE_DARK", typeEffective: {} },
				},
			],
		};

		const output = emitGroupFile(group);

		expect(output).toContain(
			"export interface TypeEffective<T extends string> {",
		);
		expect(output).toContain("data: TypeEffectiveData<T>;");
		expect(output).toContain(
			"export interface TypeEffectiveData<T extends string> {",
		);
		expect(output).toContain("typeEffective: unknown;");
		expect(output).toContain(
			'export type TypeEffectiveBug = TypeEffective<"POKEMON_TYPE_BUG">;',
		);
		expect(output).toContain(
			'export type TypeEffectiveDark = TypeEffective<"POKEMON_TYPE_DARK">;',
		);
		expect(output).toContain(
			"export type TypeEffectiveMasterfileEntry =",
		);
		expect(output).toContain("| TypeEffectiveBug");
		expect(output).toContain("| TypeEffectiveDark");
		expect(output).toContain(
			'export type TypeEffectiveTemplateID = TypeEffectiveMasterfileEntry["templateId"];',
		);
	});

	test("sorts per-entry aliases by templateId lexicographically", () => {
		const group: Group = {
			discriminator: "typeEffective",
			entries: [
				{
					templateId: "POKEMON_TYPE_WATER",
					data: { templateId: "POKEMON_TYPE_WATER", typeEffective: {} },
				},
				{
					templateId: "POKEMON_TYPE_BUG",
					data: { templateId: "POKEMON_TYPE_BUG", typeEffective: {} },
				},
			],
		};

		const output = emitGroupFile(group);
		const bugIdx = output.indexOf("TypeEffectiveBug");
		const waterIdx = output.indexOf("TypeEffectiveWater");
		expect(bugIdx).toBeGreaterThan(-1);
		expect(waterIdx).toBeGreaterThan(-1);
		expect(bugIdx).toBeLessThan(waterIdx);
	});
});
