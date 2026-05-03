import { describe, expect, test } from "bun:test";
import { emitSingletonsAccessor } from "./emit-singletons-accessor.ts";

describe("emitSingletonsAccessor", () => {
	const out = emitSingletonsAccessor();

	test("Get returns wide interface, not a concrete type", () => {
		expect(out).toContain("(masterfile.MasterfileEntry, bool)");
	});

	test("imports both upstream packages", () => {
		expect(out).toContain('masterfile "github.com/Hazels-Lab/pogo-masterfile/packages/go"');
		expect(out).toContain('"github.com/Hazels-Lab/pogo-masterfile/packages/go/singletons"');
	});

	test("constructor accepts entries + ids slice", () => {
		expect(out).toContain("NewSingletonsAccessor(entries []masterfile.MasterfileEntry, ids []singletons.SingletonsTemplateID)");
	});

	test("struct stores ids slice for deterministic order", () => {
		expect(out).toContain("ids     []singletons.SingletonsTemplateID");
		expect(out).toContain("entries: entries, ids: ids, index: idx");
	});

	test("TemplateIDs returns the stored ids slice (zero-copy)", () => {
		expect(out).toContain("return a.ids");
	});
});
