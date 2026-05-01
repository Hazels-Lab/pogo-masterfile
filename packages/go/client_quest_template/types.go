// Generated from Pokémon GO masterfile — group "clientQuestTemplate".

package client_quest_template

type ClientQuestTemplateWithBadgeType struct {
	BadgeRank uint64 `json:"badgeRank"`
	BadgeTypesToExclude [1]string `json:"badgeTypesToExclude"`
}

type ClientQuestTemplateWithCombatType struct {
	CombatType []string `json:"combatType"`
}

type ClientQuestTemplateWithDistance struct {
	DistanceKm float64 `json:"distanceKm"`
}

type ClientQuestTemplateWithInvasionCharacter struct {
	Category []string `json:"category"`
}

type ClientQuestTemplateWithPokemonLevel struct {
	MaxLevel bool `json:"maxLevel"`
}

type ClientQuestTemplateWithQuestContext struct {
	Context string `json:"context"`
}

type ClientQuestTemplateWithThrowType struct {
	ThrowType string `json:"throwType"`
}

type ClientQuestTemplateCondition struct {
	Type string `json:"type"`
	WithBadgeType *ClientQuestTemplateWithBadgeType `json:"withBadgeType,omitempty"`
	WithCombatType *ClientQuestTemplateWithCombatType `json:"withCombatType,omitempty"`
	WithDistance *ClientQuestTemplateWithDistance `json:"withDistance,omitempty"`
	WithInvasionCharacter *ClientQuestTemplateWithInvasionCharacter `json:"withInvasionCharacter,omitempty"`
	WithPokemonLevel *ClientQuestTemplateWithPokemonLevel `json:"withPokemonLevel,omitempty"`
	WithQuestContext *ClientQuestTemplateWithQuestContext `json:"withQuestContext,omitempty"`
	WithThrowType *ClientQuestTemplateWithThrowType `json:"withThrowType,omitempty"`
}

type ClientQuestTemplateGoal struct {
	Condition []ClientQuestTemplateCondition `json:"condition,omitempty"`
	Target uint64 `json:"target"`
}

type ClientQuestTemplateSubQuests struct {
	QuestId string `json:"questId"`
}

type ClientQuestTemplateMultiPart struct {
	SubQuests [4]ClientQuestTemplateSubQuests `json:"subQuests"`
}

type ClientQuestTemplateItem struct {
	Amount uint64 `json:"amount"`
	Item string `json:"item"`
}

type ClientQuestTemplatePokemonDisplay struct {
	Form string `json:"form"`
}

type ClientQuestTemplatePokemonEncounter struct {
	PokemonDisplay ClientQuestTemplatePokemonDisplay `json:"pokemonDisplay"`
	PokemonId string `json:"pokemonId"`
}

type ClientQuestTemplateQuestRewards struct {
	Exp *uint64 `json:"exp,omitempty"`
	FriendshipPoints *uint64 `json:"friendshipPoints,omitempty"`
	Item *ClientQuestTemplateItem `json:"item,omitempty"`
	LevelCap *uint64 `json:"levelCap,omitempty"`
	PokemonEncounter *ClientQuestTemplatePokemonEncounter `json:"pokemonEncounter,omitempty"`
	Stardust *uint64 `json:"stardust,omitempty"`
	Type string `json:"type"`
}

type ClientQuestTemplateQuest struct {
	Difficulty *string `json:"difficulty,omitempty"`
	Goal *ClientQuestTemplateGoal `json:"goal,omitempty"`
	MultiPart *ClientQuestTemplateMultiPart `json:"multiPart,omitempty"`
	QuestContext string `json:"questContext"`
	QuestId string `json:"questId"`
	QuestRewards []ClientQuestTemplateQuestRewards `json:"questRewards"`
	QuestType string `json:"questType"`
	QuestUpdateToastProgressPercentageThreshold *float64 `json:"questUpdateToastProgressPercentageThreshold,omitempty"`
	TemplateId string `json:"templateId"`
}

type ClientQuestTemplateQuestDisplay struct {
	Description *string `json:"description,omitempty"`
	SubquestDisplays *[4]ClientQuestTemplateSubQuests `json:"subquestDisplays,omitempty"`
	Title string `json:"title"`
}

type ClientQuestTemplate struct {
	Quest ClientQuestTemplateQuest `json:"quest"`
	QuestDisplay ClientQuestTemplateQuestDisplay `json:"questDisplay"`
}

type ClientQuestTemplateEntry struct {
	TemplateID string `json:"templateId"`
	Data       ClientQuestTemplateEntryData `json:"data"`
}

func (ClientQuestTemplateEntry) MasterfileEntry() {}

type ClientQuestTemplateEntryData struct {
	TemplateID     string `json:"templateId"`
	ClientQuestTemplate ClientQuestTemplate `json:"clientQuestTemplate"`
}
