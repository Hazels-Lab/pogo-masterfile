import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { groupEntries } from "../group.ts";
import { emitAccessor } from "./emit-accessor.ts";

describe("emitAccessor", () => {
	test("declares <Group>Accessor struct with three borrowed fields", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const moveLike = [...groups.values()].find((g) => g.entries.length > 1)!;
		const out = emitAccessor(moveLike);
		expect(out).toMatch(/pub struct \w+Accessor<'a> \{/);
		expect(out).toContain("entries: &'a [MasterfileEntry]");
		expect(out).toContain("index: &'a HashMap<");
		expect(out).toContain("order: &'a [usize]");
	});

	test("provides polymorphic get<I: TryInto<TemplateId>>", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const g = [...groups.values()].find((g) => g.entries.length > 1)!;
		const out = emitAccessor(g);
		expect(out).toContain("pub fn get<I>(&self, id: I) -> Option<&'a");
		expect(out).toMatch(/where\s+I: TryInto<\w+TemplateId>/);
	});

	test("provides has, iter, template_ids, len, is_empty", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const g = [...groups.values()].find((g) => g.entries.length > 1)!;
		const out = emitAccessor(g);
		expect(out).toContain("pub fn has<I");
		expect(out).toContain("pub fn iter(&self)");
		expect(out).toContain("pub fn template_ids(&self)");
		expect(out).toContain("pub fn len(&self) -> usize");
		expect(out).toContain("pub fn is_empty(&self) -> bool");
	});

	test("dispatches into the right MasterfileEntry variant", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const g = [...groups.values()].find((g) => g.entries.length > 1)!;
		const out = emitAccessor(g);
		expect(out).toMatch(/MasterfileEntry::\w+\(e\) => Some\(e\)/);
	});

	test("starts with the generated-file header comment", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const g = [...groups.values()].find((g) => g.entries.length > 1)!;
		const out = emitAccessor(g);
		expect(out.startsWith("//! Generated from")).toBe(true);
	});
});
