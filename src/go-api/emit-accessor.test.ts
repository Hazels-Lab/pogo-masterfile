import { describe, expect, test } from "bun:test";
import type { Group } from "../group.ts";
import { emitAccessor } from "./emit-accessor.ts";

const sampleGroup: Group = {
	discriminator: "moveSettings",
	entries: [
		{ templateId: "V0033_MOVE_TACKLE_FAST", data: { templateId: "V0033_MOVE_TACKLE_FAST", moveSettings: {} } },
		{ templateId: "V0022_MOVE_MEGAHORN", data: { templateId: "V0022_MOVE_MEGAHORN", moveSettings: {} } },
	] as never,
};

describe("emitAccessor", () => {
	test("emits a struct named <Pascal>Accessor", () => {
		const out = emitAccessor(sampleGroup);
		expect(out).toContain("type MoveSettingsAccessor struct {");
	});

	test("imports the per-group sub-package", () => {
		const out = emitAccessor(sampleGroup);
		expect(out).toContain('"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/move_settings"');
	});

	test("public constructor and method set", () => {
		const out = emitAccessor(sampleGroup);
		for (const sym of ["NewMoveSettingsAccessor", "Get(", "Has(", "All() []", "TemplateIDs() []", "Len() int"]) {
			expect(out).toContain(sym);
		}
	});

	test("Get returns zero value on miss", () => {
		const out = emitAccessor(sampleGroup);
		expect(out).toContain("var zero move_settings.MoveSettingsEntry");
	});
});
