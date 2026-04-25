export interface CombatNpcTrainer<
	TemplateID extends string = string,
	TData extends CombatNpcTrainerData = CombatNpcTrainerData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		combatNpcTrainer: TData & {
			avatar: {
				avatar: 2;
			};
		};
	};
}

export interface CombatNpcTrainerData {
	availablePokemon?: [
		{
			pokemonDisplay?: {
				form: string;
			};
			pokemonType: string;
		},
		{
			pokemonDisplay?: {
				form: string;
			};
			pokemonType: string;
		},
		{
			pokemonDisplay?: {
				form: string;
			};
			pokemonType: string;
		},
	];
	backdropImageBundle?: string;
	combatLeagueTemplateId?: string;
	combatPersonalityId?: string;
	iconUrl?: string;
	trainerName?: string;
	trainerQuote?: string;
	trainerTitle?: string;
}

export type CombatNpcTrainerBlancheGreat = CombatNpcTrainer<
	"TRAINER_BLANCHE_GREAT",
	{
		availablePokemon: [
			{
				pokemonDisplay: {
					form: "SNEASEL_NORMAL";
				};
				pokemonType: "SNEASEL";
			},
			{
				pokemonType: "SEALEO";
			},
			{
				pokemonType: "VAPOREON";
			},
		];
		backdropImageBundle: "combat_blanche_backdrop";
		combatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_GREAT";
		combatPersonalityId: "TRAINER_PERSONALITY_EASY";
		iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
		trainerName: "combat_blanche";
		trainerQuote: "combat_blanche_quote";
		trainerTitle: "combat_blanche_title";
	}
>;
export type CombatNpcTrainerBlancheMaster = CombatNpcTrainer<
	"TRAINER_BLANCHE_MASTER",
	{
		availablePokemon: [
			{
				pokemonType: "SUICUNE";
			},
			{
				pokemonType: "METAGROSS";
			},
			{
				pokemonDisplay: {
					form: "ARTICUNO_NORMAL";
				};
				pokemonType: "ARTICUNO";
			},
		];
		backdropImageBundle: "combat_blanche_backdrop";
		combatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_MASTER";
		combatPersonalityId: "TRAINER_PERSONALITY_HARD";
		iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
		trainerName: "combat_blanche";
		trainerQuote: "combat_blanche_quote";
		trainerTitle: "combat_blanche_title";
	}
>;
export type CombatNpcTrainerBlancheUltra = CombatNpcTrainer<
	"TRAINER_BLANCHE_ULTRA",
	{
		availablePokemon: [
			{
				pokemonType: "GLACEON";
			},
			{
				pokemonType: "EMPOLEON";
			},
			{
				pokemonType: "MAMOSWINE";
			},
		];
		backdropImageBundle: "combat_blanche_backdrop";
		combatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
		combatPersonalityId: "TRAINER_PERSONALITY_MEDIUM";
		iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
		trainerName: "combat_blanche";
		trainerQuote: "combat_blanche_quote";
		trainerTitle: "combat_blanche_title";
	}
>;
export type CombatNpcTrainerCandelaGreat = CombatNpcTrainer<
	"TRAINER_CANDELA_GREAT",
	{
		availablePokemon: [
			{
				pokemonType: "COMBUSKEN";
			},
			{
				pokemonType: "MAGCARGO";
			},
			{
				pokemonType: "FLAREON";
			},
		];
		backdropImageBundle: "combat_candela_backdrop";
		combatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_GREAT";
		combatPersonalityId: "TRAINER_PERSONALITY_EASY";
		iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Candela.png";
		trainerName: "combat_candela";
		trainerQuote: "combat_candela_quote";
		trainerTitle: "combat_candela_title";
	}
>;
export type CombatNpcTrainerCandelaMaster = CombatNpcTrainer<
	"TRAINER_CANDELA_MASTER",
	{
		availablePokemon: [
			{
				pokemonType: "ENTEI";
			},
			{
				pokemonType: "SALAMENCE";
			},
			{
				pokemonType: "MOLTRES";
			},
		];
		backdropImageBundle: "combat_candela_backdrop";
		combatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_MASTER";
		combatPersonalityId: "TRAINER_PERSONALITY_HARD";
		iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Candela.png";
		trainerName: "combat_candela";
		trainerQuote: "combat_candela_quote";
		trainerTitle: "combat_candela_title";
	}
>;
export type CombatNpcTrainerCandelaUltra = CombatNpcTrainer<
	"TRAINER_CANDELA_ULTRA",
	{
		availablePokemon: [
			{
				pokemonType: "FLAREON";
			},
			{
				pokemonType: "TYPHLOSION";
			},
			{
				pokemonDisplay: {
					form: "MAGMORTAR_NORMAL";
				};
				pokemonType: "MAGMORTAR";
			},
		];
		backdropImageBundle: "combat_candela_backdrop";
		combatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
		combatPersonalityId: "TRAINER_PERSONALITY_MEDIUM";
		iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Candela.png";
		trainerName: "combat_candela";
		trainerQuote: "combat_candela_quote";
		trainerTitle: "combat_candela_title";
	}
>;
export type CombatNpcTrainerSparkGreat = CombatNpcTrainer<
	"TRAINER_SPARK_GREAT",
	{
		availablePokemon: [
			{
				pokemonType: "PLUSLE";
			},
			{
				pokemonType: "ELECTRODE";
			},
			{
				pokemonType: "JOLTEON";
			},
		];
		backdropImageBundle: "combat_spark_backdrop";
		combatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_GREAT";
		combatPersonalityId: "TRAINER_PERSONALITY_EASY";
		iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Spark.png";
		trainerName: "combat_spark";
		trainerQuote: "combat_spark_quote";
		trainerTitle: "combat_spark_title";
	}
>;
export type CombatNpcTrainerSparkMaster = CombatNpcTrainer<
	"TRAINER_SPARK_MASTER",
	{
		availablePokemon: [
			{
				pokemonType: "RAIKOU";
			},
			{
				pokemonDisplay: {
					form: "TYRANITAR_NORMAL";
				};
				pokemonType: "TYRANITAR";
			},
			{
				pokemonType: "ZAPDOS";
			},
		];
		backdropImageBundle: "combat_spark_backdrop";
		combatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_MASTER";
		combatPersonalityId: "TRAINER_PERSONALITY_HARD";
		iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Spark.png";
		trainerName: "combat_spark";
		trainerQuote: "combat_spark_quote";
		trainerTitle: "combat_spark_title";
	}
>;
export type CombatNpcTrainerSparkUltra = CombatNpcTrainer<
	"TRAINER_SPARK_ULTRA",
	{
		availablePokemon: [
			{
				pokemonType: "JOLTEON";
			},
			{
				pokemonType: "LUXRAY";
			},
			{
				pokemonDisplay: {
					form: "MAGNEZONE_NORMAL";
				};
				pokemonType: "MAGNEZONE";
			},
		];
		backdropImageBundle: "combat_spark_backdrop";
		combatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
		combatPersonalityId: "TRAINER_PERSONALITY_MEDIUM";
		iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Spark.png";
		trainerName: "combat_spark";
		trainerQuote: "combat_spark_quote";
		trainerTitle: "combat_spark_title";
	}
>;

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
