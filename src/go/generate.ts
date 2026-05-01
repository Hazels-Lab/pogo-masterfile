import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { type Entry, type Group, groupEntries } from "../group.ts";
import { pascalCase, snakeCase } from "../naming.ts";
import { writeOutput } from "../write.ts";
import {
	type EntryVariant,
	emitGroupModule,
	emitGroupTemplateIdsFile,
	emitMasterfileFile,
	emitSingletonsModule,
	emitSingletonsTemplateIdsFile,
} from "./emit.ts";

const OUT_DIR = join(import.meta.dir, "..", "..", "packages", "go");
const SINGLETONS_FILE = "singletons";

function isStubGroup(group: Group): boolean {
	const first = group.entries[0];
	if (!first) return true;
	return Object.keys(first.data).filter((k) => k !== "templateId").length === 0;
}

async function readModulePath(): Promise<string> {
	const goMod = await readFile(join(OUT_DIR, "go.mod"), "utf8");
	const match = goMod.match(/^module\s+(\S+)/m);
	if (!match) throw new Error(`could not parse module path from ${join(OUT_DIR, "go.mod")}`);
	return match[1]!;
}

export async function generateGo(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[go] grouped into ${groups.size} discriminators.`);

	const _modulePath = await readModulePath();

	const files = new Map<string, string>();
	const singletons: Group[] = [];
	const enumVariants: EntryVariant[] = [];

	for (const group of groups.values()) {
		const baseName = pascalCase(group.discriminator);
		const entryTypeName = `${baseName}Entry`;
		const stub = isStubGroup(group);

		if (group.entries.length === 1) {
			singletons.push(group);
			enumVariants.push({
				variantName: baseName,
				entryTypeName,
				isStub: stub,
				discriminator: group.discriminator,
				entryCount: group.entries.length,
			});
			continue;
		}

		const fileName = snakeCase(group.discriminator);
		files.set(`${fileName}.go`, emitGroupModule(group));
		files.set(`${fileName}_template_ids.go`, emitGroupTemplateIdsFile(group));
		enumVariants.push({
			variantName: baseName,
			entryTypeName,
			isStub: stub,
			discriminator: group.discriminator,
			entryCount: group.entries.length,
		});
	}

	if (singletons.length > 0) {
		files.set(`${SINGLETONS_FILE}.go`, emitSingletonsModule(singletons));
		files.set(`${SINGLETONS_FILE}_template_ids.go`, emitSingletonsTemplateIdsFile(singletons));
	}

	files.set("masterfile.go", emitMasterfileFile(enumVariants));

	const preserve = ["go.mod", "go.sum", "doc.go", "README.md", "LICENSE", "CHANGELOG.md", "masterfile_test.go", "examples/parse/main.go"];

	await writeOutput(files, OUT_DIR, { preserve });
	console.log(`[go] wrote ${files.size} files to ${OUT_DIR} (${singletons.length} singletons folded into ${SINGLETONS_FILE}.go).`);
}
