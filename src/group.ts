export interface Entry {
	templateId: string;
	data: Record<string, unknown>;
}

export interface Group {
	discriminator: string;
	entries: Entry[];
}

export function isStubGroup(group: Group): boolean {
	const first = group.entries[0];
	if (!first) return true;
	return Object.keys(first.data).filter((k) => k !== "templateId").length === 0;
}

export function groupEntries(entries: Entry[]): Map<string, Group> {
	const groups = new Map<string, Group>();
	for (const entry of entries) {
		const keys = Object.keys(entry.data).filter((k) => k !== "templateId");
		if (keys.length > 1) {
			throw new Error(`Entry ${entry.templateId} has ${keys.length} non-templateId data keys, expected 0 or 1`);
		}
		// Stub entries (0 keys) bucket under their templateId.
		// Real camelCase discriminators cannot collide with SCREAMING_SNAKE templateIds.
		const disc = keys[0] ?? entry.templateId;
		let group = groups.get(disc);
		if (!group) {
			group = { discriminator: disc, entries: [] };
			groups.set(disc, group);
		}
		group.entries.push(entry);
	}
	return groups;
}
