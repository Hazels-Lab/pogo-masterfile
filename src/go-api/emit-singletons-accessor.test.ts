import { describe, expect, test } from "bun:test";
import { emitSingletonsAccessor } from "./emit-singletons-accessor.ts";

describe("emitSingletonsAccessor", () => {
	const out = emitSingletonsAccessor();

	test("Get returns wide interface, not a concrete type", () => {
		expect(out).toContain("(masterfile.MasterfileEntry, bool)");
	});

	test("imports both upstream packages", () => {
		expect(out).toContain('masterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"');
		expect(out).toContain('"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/singletons"');
	});

	test("constructor accepts entries + ids slice", () => {
		expect(out).toContain("NewSingletonsAccessor(entries []masterfile.MasterfileEntry, ids []singletons.SingletonsTemplateID)");
	});
});
