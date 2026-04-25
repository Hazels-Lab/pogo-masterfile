export function groupName(discriminator: string): string {
	return discriminator[0]!.toUpperCase() + discriminator.slice(1);
}

export function sharedPrefix(ids: string[]): string {
	if (ids.length <= 1) return "";
	let p = ids[0]!;
	for (const id of ids) {
		while (!id.startsWith(p)) p = p.slice(0, -1);
		if (p === "") return "";
	}
	const lastUnderscore = p.lastIndexOf("_");
	return lastUnderscore >= 0 ? p.slice(0, lastUnderscore + 1) : "";
}

export function aliasSuffix(templateId: string, prefix: string): string {
	const tail = templateId.slice(prefix.length);
	if (tail === "") return "Root";
	const parts = tail.split(/[^a-zA-Z0-9]+/).filter(Boolean);
	if (parts.length === 0) return "Root";
	return parts.map((w) => w[0]!.toUpperCase() + w.slice(1).toLowerCase()).join("");
}

export function deriveGroupAliases(templateIds: string[]): Map<string, string> {
	const prefix = sharedPrefix(templateIds);
	const result = new Map<string, string>();
	const suffixToIds = new Map<string, string[]>();

	for (const id of templateIds) {
		const suffix = aliasSuffix(id, prefix);
		const bucket = suffixToIds.get(suffix);
		if (bucket) bucket.push(id);
		else suffixToIds.set(suffix, [id]);
	}

	for (const [suffix, ids] of suffixToIds) {
		if (ids.length === 1) {
			result.set(ids[0]!, suffix);
			continue;
		}
		// Collision: re-derive from whole templateId.
		const reDerived = new Map<string, string[]>();
		for (const id of ids) {
			const s = aliasSuffix(id, "");
			const bucket = reDerived.get(s);
			if (bucket) bucket.push(id);
			else reDerived.set(s, [id]);
		}
		for (const [s, idList] of reDerived) {
			if (idList.length === 1) {
				result.set(idList[0]!, s);
			} else {
				// Still colliding — tie-break with numeric suffix, lexicographic order.
				const sorted = [...idList].sort();
				sorted.forEach((id, i) => {
					result.set(id, `${s}${i}`);
				});
			}
		}
	}

	return result;
}
