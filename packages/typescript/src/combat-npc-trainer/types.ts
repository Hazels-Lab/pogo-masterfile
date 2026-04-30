// Generated from Pokémon GO masterfile — group "combatNpcTrainer", 9 entries (structural types).

import type { W } from "../_utils";
import type { CombatNpcPersonalityTemplateID } from "../combat-npc-personality/entries";

export interface CombatNpcTrainer<TemplateID extends string = string, TData extends CombatNpcTrainerData = CombatNpcTrainerData> {
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
export type CombatNpcTrainerType = W<CombatNpcTrainer>;

export interface CombatNpcTrainerData {
	availablePokemon: [
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
		},
	];
	backdropImageBundle: "combat_blanche_backdrop" | "combat_candela_backdrop" | "combat_spark_backdrop";
	combatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_GREAT" | "COMBAT_LEAGUE_DEFAULT_MASTER" | "COMBAT_LEAGUE_DEFAULT_ULTRA";
	combatPersonalityId: CombatNpcPersonalityTemplateID;
	iconUrl:
		| "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png"
		| "https://storage.googleapis.com/prod-public-images/Icon_Candela.png"
		| "https://storage.googleapis.com/prod-public-images/Icon_Spark.png";
	trainerName: "combat_blanche" | "combat_candela" | "combat_spark";
	trainerQuote: "combat_blanche_quote" | "combat_candela_quote" | "combat_spark_quote";
	trainerTitle: "combat_blanche_title" | "combat_candela_title" | "combat_spark_title";
}
