/** Network or HTTP failure when fetching the masterfile. */
export class MasterfileFetchError extends Error {
	readonly url: string;
	override readonly cause?: unknown;

	constructor(message: string, url: string, cause?: unknown) {
		super(message);
		this.name = "MasterfileFetchError";
		this.url = url;
		this.cause = cause;
	}
}

/** Response could not be parsed as a `MasterfileEntry[]`. */
export class MasterfileParseError extends Error {
	override readonly cause?: unknown;

	constructor(message: string, cause?: unknown) {
		super(message);
		this.name = "MasterfileParseError";
		this.cause = cause;
	}
}

/** A `getEntry` lookup did not find an entry with the given templateId. */
export class EntryNotFoundError extends Error {
	readonly templateId: string;

	constructor(templateId: string) {
		super(`No entry with templateId "${templateId}"`);
		this.name = "EntryNotFoundError";
		this.templateId = templateId;
	}
}
