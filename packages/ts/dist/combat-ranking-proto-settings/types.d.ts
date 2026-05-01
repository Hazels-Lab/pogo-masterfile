// Generated from Pokémon GO masterfile — group "combatRankingProtoSettings", 21 entries (structural types).

import type { W } from "../_utils";

export interface CombatRankingProtoSettings<TemplateID extends string = string, TData extends CombatRankingProtoSettingsData = CombatRankingProtoSettingsData> {
    templateId: TemplateID;
    data: {
        templateId: TemplateID;
        combatRankingProtoSettings: TData & {
            requiredForRewards: {
                additionalTotalBattlesRequired: 5;
                rankLevel: 1;
            };
        };
    };
}
export type CombatRankingProtoSettingsType = W<CombatRankingProtoSettings>;

export interface CombatRankingProtoSettingsData {
    minRankToDisplayRating: number;
    minRatingRequired?: number;
    rankLevel: Array<{
        additionalTotalBattlesRequired?: number;
        additionalWinsRequired?: number;
        minRatingRequired?: number;
        rankLevel: number;
    }>;
}
