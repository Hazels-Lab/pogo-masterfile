import { describe, test } from "bun:test";
import { expectTypeOf } from "expect-type";
import type { MasterfileEntry } from "pogo-masterfile-types/entries";
import type { EntriesByGroup, GroupName, LookupByGroup, TemplateIDsByGroup } from "pogo-masterfile-types/lookup-table";
import type { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";

// Type-only tests. We never actually execute these probes — `expectTypeOf`
// captures the type from the value's type without dereferencing the value.
declare const mf: Masterfile;

describe("Masterfile type narrowing", () => {
	test("getEntry returns the wide MasterfileEntry union (no literal narrowing)", () => {
		// Top-level lookups are wide on purpose — narrowing across all 18k
		// templateIds would force TS to materialize the global EntryByTemplateID.
		const probe = (s: string) => mf.getEntry(s);
		expectTypeOf(probe).returns.toEqualTypeOf<MasterfileEntry>();
	});

	test("tryGetEntry returns MasterfileEntry | undefined", () => {
		const probe = (s: string) => mf.tryGetEntry(s);
		expectTypeOf(probe).returns.toEqualTypeOf<MasterfileEntry | undefined>();
	});

	test("has returns boolean (no type predicate)", () => {
		const probe = (s: string) => mf.has(s);
		expectTypeOf(probe).returns.toEqualTypeOf<boolean>();
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

	test("group accessor.get narrows on literal templateId", () => {
		// This is where the literal narrowing lives. `mf.moveSettings.get("X")`
		// returns the exact entry interface for that templateId.
		const probe = () => mf.moveSettings.get("V0022_MOVE_MEGAHORN");
		expectTypeOf(probe).returns.toEqualTypeOf<LookupByGroup["moveSettings"]["V0022_MOVE_MEGAHORN"]>();
	});

	test("group accessor.tryGet returns T | undefined for literals", () => {
		const probe = () => mf.moveSettings.tryGet("V0022_MOVE_MEGAHORN");
		expectTypeOf(probe).returns.toEqualTypeOf<LookupByGroup["moveSettings"]["V0022_MOVE_MEGAHORN"] | undefined>();
	});

	test("group accessor.get widens on string", () => {
		const probe = (s: string) => mf.moveSettings.get(s);
		expectTypeOf(probe).returns.toEqualTypeOf<EntriesByGroup["moveSettings"]>();
	});

	test("group accessor.has narrows string to the per-group key union", () => {
		const probe = (s: string) => mf.moveSettings.has(s);
		expectTypeOf(probe).returns.toEqualTypeOf<boolean>();
	});

	test("group accessor.size is number", () => {
		const probe = () => mf.moveSettings.size;
		expectTypeOf(probe).returns.toEqualTypeOf<number>();
	});
});
