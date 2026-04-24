import type { Group } from "./group.ts";
import { deriveGroupAliases, groupName } from "./naming.ts";

export function emitGroupFile(group: Group): string {
	const gName = groupName(group.discriminator);
	const sortedIds = [...group.entries]
		.map((e) => e.templateId)
		.sort();
	const aliases = deriveGroupAliases(sortedIds);

	const lines: string[] = [];
	lines.push(`export interface ${gName}<T extends string> {`);
	lines.push(`\ttemplateId: T;`);
	lines.push(`\tdata: ${gName}Data<T>;`);
	lines.push(`}`);
	lines.push(``);
	lines.push(`export interface ${gName}Data<T extends string> {`);
	lines.push(`\ttemplateId: T;`);
	lines.push(`\t${group.discriminator}: unknown;`);
	lines.push(`}`);
	lines.push(``);

	for (const id of sortedIds) {
		const alias = aliases.get(id)!;
		lines.push(`export type ${gName}${alias} = ${gName}<"${id}">;`);
	}
	lines.push(``);

	lines.push(`export type ${gName}MasterfileEntry =`);
	sortedIds.forEach((id, i) => {
		const alias = aliases.get(id)!;
		const suffix = i === sortedIds.length - 1 ? ";" : "";
		lines.push(`\t| ${gName}${alias}${suffix}`);
	});
	lines.push(``);
	lines.push(
		`export type ${gName}TemplateID = ${gName}MasterfileEntry["templateId"];`,
	);
	lines.push(``);

	return lines.join("\n");
}

export function emitMiscFile(singletons: Group[]): string {
	const sorted = [...singletons].sort((a, b) =>
		groupName(a.discriminator).localeCompare(groupName(b.discriminator)),
	);

	const lines: string[] = [];
	for (const g of sorted) {
		const entry = g.entries[0]!;
		const name = groupName(g.discriminator);
		lines.push(`export interface ${name} {`);
		lines.push(`\ttemplateId: "${entry.templateId}";`);
		lines.push(`\tdata: {`);
		lines.push(`\t\ttemplateId: "${entry.templateId}";`);
		lines.push(`\t\t${g.discriminator}: unknown;`);
		lines.push(`\t};`);
		lines.push(`}`);
		lines.push(``);
	}
	return lines.join("\n");
}

export function kebabCase(camelCase: string): string {
	return camelCase.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}

export function emitIndexFile(multiEntryDiscriminators: string[]): string {
	const sorted = [...multiEntryDiscriminators].sort();
	const lines: string[] = [];

	for (const disc of sorted) {
		lines.push(`export type * from "./groups/${kebabCase(disc)}.ts";`);
	}
	lines.push(`export type * from "./groups/misc.ts";`);
	lines.push(``);

	for (const disc of sorted) {
		const name = groupName(disc);
		lines.push(
			`import type { ${name}MasterfileEntry } from "./groups/${kebabCase(disc)}.ts";`,
		);
	}
	lines.push(``);
	lines.push(`export type MasterfileEntry =`);
	sorted.forEach((disc, i) => {
		const name = groupName(disc);
		const suffix = i === sorted.length - 1 ? ";" : "";
		lines.push(`\t| ${name}MasterfileEntry${suffix}`);
	});
	lines.push(``);
	lines.push(
		`export type MasterfileTemplateID = MasterfileEntry["templateId"];`,
	);
	lines.push(``);

	return lines.join("\n");
}
