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
