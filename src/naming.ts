export function groupName(discriminator: string): string {
	return discriminator[0]!.toUpperCase() + discriminator.slice(1);
}
