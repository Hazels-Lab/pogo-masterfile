// Generated from Pokémon GO masterfile — group "avatarItemDisplay", 1636 entries (structural types).

export interface AvatarItemDisplay<TemplateID extends string = string, TData extends AvatarItemDisplayData = AvatarItemDisplayData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		avatarItemDisplay: TData;
	};
}

export interface AvatarItemDisplayData {
	displayStringId?: string;
	iconAddress: string;
}
