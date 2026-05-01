import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { groupEntries } from "../group.ts";
import { emitLib } from "./emit-lib.ts";

describe("emitLib", () => {
	test("declares modules: masterfile, error, fetcher, builder, accessor, blocking", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out).toContain("mod masterfile;");
		expect(out).toContain("pub mod error;");
		expect(out).toContain("pub mod fetcher;");
		expect(out).toContain("pub mod builder;");
		expect(out).toContain("pub mod accessor;");
		expect(out).toContain('#[cfg(feature = "blocking")]');
		expect(out).toContain("pub mod blocking;");
	});

	test("re-exports public types from submodules", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out).toContain("pub use crate::masterfile::Masterfile;");
		expect(out).toContain("pub use crate::error::{Error, Result};");
		expect(out).toContain("pub use crate::builder::MasterfileBuilder;");
	});

	test("re-exports the upstream pogo_masterfile_types crate", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out).toContain("pub use pogo_masterfile_types::");
	});

	test("declares GroupIndexes with per-group HashMap + order Vec fields", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out).toContain("pub(crate) struct GroupIndexes {");
		expect(out).toContain("_index: HashMap<");
		expect(out).toContain("_order: Vec<usize>");
	});

	test("declares impl GroupIndexes::build that walks entries by variant", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out).toContain("impl GroupIndexes {");
		expect(out).toContain("pub(crate) fn build(entries: &[MasterfileEntry]) -> Self");
		expect(out).toMatch(/MasterfileEntry::\w+\(_\) =>/);
	});

	test("declares impl Masterfile with per-group accessor methods", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out).toContain("impl Masterfile {");
		expect(out).toMatch(/pub fn \w+\(&self\) -> accessor::\w+Accessor<'_>/);
	});

	test("does NOT emit a custom template_id dispatcher (delegates to TemplateId derive)", () => {
		// The TemplateId derive on upstream MasterfileEntry provides
		// `.template_id()`, so the emitter no longer generates the match
		// arms locally — they live in the macro.
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out).not.toContain("fn entry_template_id");
		expect(out).not.toContain("template_id.as_str()");
	});

	test("starts with the generated-file header comment", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out.startsWith("//! Generated from")).toBe(true);
	});
});
