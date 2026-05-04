import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Extract templateId string literals from one discriminator's entries.d.ts text.
 *
 * Looks for `<DiscriminatorPascal><"TEMPLATE_ID"` — the first quoted string
 * after the discriminator type's opening angle bracket. The live generator's
 * output is regular, so this is reliable; a schema break shows up as zero
 * matches and Task 10's first-run safety guard handles that case.
 */
export function extractTemplateIdsFromEntries(source: string, discriminatorPascal: string): string[] {
	const escaped = discriminatorPascal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const pattern = new RegExp(`${escaped}<\\s*"([^"]+)"`, "g");
	const ids: string[] = [];
	for (const match of source.matchAll(pattern)) {
		ids.push(match[1]);
	}
	return ids;
}

/**
 * Walk `packages/ts/dist/` and build {templateId -> discriminator} for every
 * per-discriminator folder that has an entries.d.ts.
 *
 * KNOWN LIMITATION: This does NOT walk packages/ts/dist/singletons/, which
 * uses a different emission shape (per-templateId .d.ts files with interface
 * declarations rather than per-discriminator entries.d.ts with type aliases).
 * The bootstrap consumes a JSON snapshot directly so this gap doesn't affect
 * it. Steady-state will miss future deprecations of singleton-mode templates;
 * adding singleton support is a follow-up. See the plan's known-limitations
 * section.
 */
export function parseLiveTsEmission(distRoot: string): Map<string, string> {
	const result = new Map<string, string>();
	if (!existsSync(distRoot)) return result;

	for (const dirent of readdirSync(distRoot, { withFileTypes: true })) {
		if (!dirent.isDirectory()) continue;
		const entriesPath = join(distRoot, dirent.name, "entries.d.ts");
		if (!existsSync(entriesPath)) continue;

		const discriminator = kebabToCamel(dirent.name);
		const discriminatorPascal = pascalCase(discriminator);
		const source = readFileSync(entriesPath, "utf8");
		const ids = extractTemplateIdsFromEntries(source, discriminatorPascal);
		for (const id of ids) {
			result.set(id, discriminator);
		}
	}
	return result;
}

function kebabToCamel(s: string): string {
	return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function pascalCase(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}
