export interface CombatNpcTrainer<TemplateID extends string> {
	templateId: TemplateID;
	data: CombatNpcTrainerData<TemplateID>;
}

export interface CombatNpcTrainerData<TemplateID extends string> {
	templateId: TemplateID;
	combatNpcTrainer: {
		availablePokemon: CombatNpcTrainerAvailablePokemon;
		avatar: {
			avatar: 2;
		};
		backdropImageBundle: CombatNpcTrainerBackdropImageBundle;
		combatLeagueTemplateId: CombatNpcTrainerCombatLeagueTemplateID;
		combatPersonalityId: CombatNpcTrainerCombatPersonalityID;
		iconUrl: CombatNpcTrainerIconUrl;
		trainerName: CombatNpcTrainerTrainerName;
		trainerQuote: CombatNpcTrainerTrainerQuote;
		trainerTitle: CombatNpcTrainerTrainerTitle;
	};
}

export type CombatNpcTrainerAvailablePokemon = [
	{
		pokemonDisplay?: {
			form: "SNEASEL_NORMAL";
		};
		pokemonType: "COMBUSKEN" | "ENTEI" | "FLAREON" | "GLACEON" | "JOLTEON" | "PLUSLE" | "RAIKOU" | "SNEASEL" | "SUICUNE";
	},
	{
		pokemonDisplay?: {
			form: "TYRANITAR_NORMAL";
		};
		pokemonType: "ELECTRODE" | "EMPOLEON" | "LUXRAY" | "MAGCARGO" | "METAGROSS" | "SALAMENCE" | "SEALEO" | "TYPHLOSION" | "TYRANITAR";
	},
	{
		pokemonDisplay?: {
			form: "ARTICUNO_NORMAL" | "MAGMORTAR_NORMAL" | "MAGNEZONE_NORMAL";
		};
		pokemonType: "ARTICUNO" | "FLAREON" | "JOLTEON" | "MAGMORTAR" | "MAGNEZONE" | "MAMOSWINE" | "MOLTRES" | "VAPOREON" | "ZAPDOS";
	}
];

export type CombatNpcTrainerBackdropImageBundle = "combat_blanche_backdrop" | "combat_candela_backdrop" | "combat_spark_backdrop";

export type CombatNpcTrainerCombatLeagueTemplateID = "COMBAT_LEAGUE_DEFAULT_GREAT" | "COMBAT_LEAGUE_DEFAULT_MASTER" | "COMBAT_LEAGUE_DEFAULT_ULTRA";

export type CombatNpcTrainerCombatPersonalityID = "TRAINER_PERSONALITY_EASY" | "TRAINER_PERSONALITY_HARD" | "TRAINER_PERSONALITY_MEDIUM";

export type CombatNpcTrainerIconUrl = "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png" | "https://storage.googleapis.com/prod-public-images/Icon_Candela.png" | "https://storage.googleapis.com/prod-public-images/Icon_Spark.png";

export type CombatNpcTrainerTrainerName = "combat_blanche" | "combat_candela" | "combat_spark";

export type CombatNpcTrainerTrainerQuote = "combat_blanche_quote" | "combat_candela_quote" | "combat_spark_quote";

export type CombatNpcTrainerTrainerTitle = "combat_blanche_title" | "combat_candela_title" | "combat_spark_title";

export type CombatNpcTrainerBlancheGreat = CombatNpcTrainer<"TRAINER_BLANCHE_GREAT">;
export type CombatNpcTrainerBlancheMaster = CombatNpcTrainer<"TRAINER_BLANCHE_MASTER">;
export type CombatNpcTrainerBlancheUltra = CombatNpcTrainer<"TRAINER_BLANCHE_ULTRA">;
export type CombatNpcTrainerCandelaGreat = CombatNpcTrainer<"TRAINER_CANDELA_GREAT">;
export type CombatNpcTrainerCandelaMaster = CombatNpcTrainer<"TRAINER_CANDELA_MASTER">;
export type CombatNpcTrainerCandelaUltra = CombatNpcTrainer<"TRAINER_CANDELA_ULTRA">;
export type CombatNpcTrainerSparkGreat = CombatNpcTrainer<"TRAINER_SPARK_GREAT">;
export type CombatNpcTrainerSparkMaster = CombatNpcTrainer<"TRAINER_SPARK_MASTER">;
export type CombatNpcTrainerSparkUltra = CombatNpcTrainer<"TRAINER_SPARK_ULTRA">;

export type CombatNpcTrainerMasterfileEntry =
	| CombatNpcTrainerBlancheGreat
	| CombatNpcTrainerBlancheMaster
	| CombatNpcTrainerBlancheUltra
	| CombatNpcTrainerCandelaGreat
	| CombatNpcTrainerCandelaMaster
	| CombatNpcTrainerCandelaUltra
	| CombatNpcTrainerSparkGreat
	| CombatNpcTrainerSparkMaster
	| CombatNpcTrainerSparkUltra;

export type CombatNpcTrainerTemplateID = CombatNpcTrainerMasterfileEntry["templateId"];
