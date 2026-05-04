/** Per-language inlined data-type body for one deprecated discriminator. */
export interface DataTypeBody {
	/** TypeScript declaration block. Must declare an interface named `Deprecated{Pascal}Data`. */
	ts: string;
	/** Rust declaration block. */
	rust: string;
	/** Go declaration block. */
	go: string;
}

/** One deprecated discriminator and its currently-deprecated templateIds. */
export interface DeprecatedDiscriminator {
	/** Discriminator key, e.g. "eventPassTierSettings". The `data.<discriminator>` key. */
	discriminator: string;
	/** Currently-deprecated templateIds for this discriminator. */
	templateIds: Set<string>;
	/** ISO date of the most recent removal among `templateIds`. */
	lastSeen: string;
	/** Convenience for emission; equals `templateIds.size`. */
	entryCount: number;
	/** Inlined data-type body for each language. Captured at first deprecation; never updated. */
	dataTypeBody: DataTypeBody;
}

/** Map of discriminator key -> deprecated record. The full deprecated emission state. */
export type DeprecatedSet = Map<string, DeprecatedDiscriminator>;

/** Result of diffing previous live emission against new live emission. */
export interface DiffResult {
	/** Template IDs that were live before regen but absent after. */
	newlyDeprecated: Set<string>;
	/** Template IDs that were deprecated before but live after. */
	newlyRevived: Set<string>;
}
