import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { groupEntries } from "../group.ts";
import {
	emitGroupModFile,
	emitGroupTemplateIdsFile,
	emitGroupTypesFile,
	emitSingletonsModFile,
	emitSingletonsTemplateIdsFile,
	emitSingletonsTypesFile,
} from "./emit.ts";

describe("emitGroupModFile", () => {
	test("emits a deterministic three-line module that re-exports types and template_ids", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupModFile(typeEffective);
		expect(out).toContain('//! Generated from Pokémon GO masterfile — group "typeEffective".');
		expect(out).toContain("pub mod template_ids;");
		expect(out).toContain("pub mod types;");
		expect(out).toContain("pub use template_ids::*;");
		expect(out).toContain("pub use types::*;");
	});
});

describe("emitGroupTypesFile", () => {
	test("emits the same struct + entry-wrapper content as before, minus the file header", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupTypesFile(typeEffective);
		expect(out).toContain("use serde::{Deserialize, Serialize};");
		expect(out).toContain("pub struct TypeEffective");
		expect(out).toContain("crate::masterfile_entry!(TypeEffectiveEntry, TypeEffectiveEntryData, type_effective: TypeEffective);");
		// Header must NOT be in this file — it lives in mod.rs.
		expect(out).not.toContain("//! Generated from Pokémon GO masterfile —");
	});
});

describe("emitGroupTemplateIdsFile", () => {
	test("emits a unit-variant enum with three derives and serde renames", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupTemplateIdsFile(typeEffective);
		expect(out).toContain('//! Generated from Pokémon GO masterfile — group "typeEffective" templateIds.');
		expect(out).toContain("use crate::{AllVariants, AsStr, FromStrEnum};");
		expect(out).toContain("use serde::{Deserialize, Serialize};");
		expect(out).toContain("#[derive(");
		expect(out).toContain("AllVariants");
		expect(out).toContain("AsStr");
		expect(out).toContain("FromStrEnum");
		expect(out).toContain("pub enum TypeEffectiveTemplateId {");
		expect(out).toContain('#[serde(rename = "POKEMON_TYPE_BUG")]');
		expect(out).toContain("    PokemonTypeBug,");
		expect(out).toContain('#[serde(rename = "POKEMON_TYPE_DARK")]');
		expect(out).toContain("    PokemonTypeDark,");
	});

	test("variants are sorted alphabetically by templateId", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupTemplateIdsFile(typeEffective);
		const bugIdx = out.indexOf("PokemonTypeBug");
		const darkIdx = out.indexOf("PokemonTypeDark");
		expect(bugIdx).toBeLessThan(darkIdx);
	});
});

describe("emitSingletonsModFile", () => {
	test("emits the same trivial three-line module shape as group mod files", () => {
		const out = emitSingletonsModFile();
		expect(out).toContain("//! Generated from Pokémon GO masterfile — singletons (one-of-a-kind entries).");
		expect(out).toContain("pub mod template_ids;");
		expect(out).toContain("pub mod types;");
		expect(out).toContain("pub use template_ids::*;");
		expect(out).toContain("pub use types::*;");
	});
});

describe("emitSingletonsTypesFile", () => {
	test("emits the per-singleton struct content without a file-level header", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const accessibility = groups.get("accessibilitySettings")!;
		const out = emitSingletonsTypesFile([accessibility]);
		expect(out).toContain("use serde::{Deserialize, Serialize};");
		expect(out).toContain("AccessibilitySettings");
		expect(out).not.toContain("//! Generated from Pokémon GO masterfile —");
	});
});

describe("emitSingletonsTemplateIdsFile", () => {
	test("emits one combined SingletonsTemplateId enum with full PascalCase variants", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const accessibility = groups.get("accessibilitySettings")!;
		const out = emitSingletonsTemplateIdsFile([accessibility]);
		expect(out).toContain("//! Generated from Pokémon GO masterfile — singletons templateIds.");
		expect(out).toContain("pub enum SingletonsTemplateId {");
		expect(out).toContain('#[serde(rename = "ACCESSIBILITY_CLIENT_SETTINGS")]');
		expect(out).toContain("    AccessibilityClientSettings,");
	});
});
