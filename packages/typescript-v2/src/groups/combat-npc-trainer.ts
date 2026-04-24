export interface CombatNpcTrainer<T extends string> {
	templateId: T;
	data: CombatNpcTrainerData<T>;
}

export interface CombatNpcTrainerData<T extends string> {
	templateId: T;
	combatNpcTrainer: unknown;
}

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
