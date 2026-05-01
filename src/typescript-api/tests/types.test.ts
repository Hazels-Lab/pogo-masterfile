import { describe, test } from "bun:test";
import { expectTypeOf } from "expect-type";
import type { MasterfileEntry } from "pogo-masterfile-types/entries";
import type { EntriesByGroup, EntryByTemplateID, GroupName, TemplateIDsByGroup } from "../../../packages/ts-api/src/lookup-tables.d.ts";
import type { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";

// Type-only tests. We never actually execute these probes — `expectTypeOf`
// captures the type from the value's type without dereferencing the value.
declare const mf: Masterfile;

describe("Masterfile type narrowing", () => {
	test("getEntry narrows on literal templateId", () => {
		const probe = () => mf.getEntry("V0022_MOVE_MEGAHORN");
		expectTypeOf(probe).returns.toEqualTypeOf<EntryByTemplateID["V0022_MOVE_MEGAHORN"]>();
	});

	test("getEntry widens on string", () => {
		const probe = (s: string) => mf.getEntry(s);
		expectTypeOf(probe).returns.toEqualTypeOf<MasterfileEntry>();
	});

	test("tryGetEntry returns T | undefined for literals", () => {
		const probe = () => mf.tryGetEntry("V0022_MOVE_MEGAHORN");
		expectTypeOf(probe).returns.toEqualTypeOf<EntryByTemplateID["V0022_MOVE_MEGAHORN"] | undefined>();
	});

	test("getGroup returns the narrow group union", () => {
		const probe = () => mf.getGroup("moveSettings");
		expectTypeOf(probe).returns.toEqualTypeOf<readonly EntriesByGroup["moveSettings"][]>();
	});

	test("groups() returns readonly GroupName[]", () => {
		const probe = () => mf.groups();
		expectTypeOf(probe).returns.toEqualTypeOf<readonly GroupName[]>();
	});

	test("templateIds(group) narrows", () => {
		const probe = () => mf.templateIds("moveSettings");
		expectTypeOf(probe).returns.toEqualTypeOf<readonly (TemplateIDsByGroup["moveSettings"] & string)[]>();
	});

	test("has() narrows string to keyof EntryByTemplateID", () => {
		const probe = (s: string) => mf.has(s);
		expectTypeOf(probe).returns.toEqualTypeOf<boolean>();
	});

	test("group accessor parameter accepts narrow IDs", () => {
		// If `V0022_MOVE_MEGAHORN` is not a valid moveSettings ID, this would
		// be a type error. The function is never invoked.
		const probe = () => mf.moveSettings.get("V0022_MOVE_MEGAHORN");
		expectTypeOf(probe).returns.toMatchTypeOf<EntriesByGroup["moveSettings"]>();
	});

	test("group accessor.size is number", () => {
		const probe = () => mf.moveSettings.size;
		expectTypeOf(probe).returns.toEqualTypeOf<number>();
	});
});
