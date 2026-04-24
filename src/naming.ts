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
	return parts
		.map((w) => w[0]!.toUpperCase() + w.slice(1).toLowerCase())
		.join("");
}
