// Generated from Pokémon GO masterfile — group "limitedPurchaseSkuSettings", 34 entries (structural types).

import type { W } from "../_utils";

export interface LimitedPurchaseSkuSettings<TemplateID extends string = string, TData extends LimitedPurchaseSkuSettingsData = LimitedPurchaseSkuSettingsData> {
    templateId: TemplateID;
    data: {
        templateId: TemplateID;
        limitedPurchaseSkuSettings: TData;
    };
}
export type LimitedPurchaseSkuSettingsType = W<LimitedPurchaseSkuSettings>;

export interface LimitedPurchaseSkuSettingsData {
    chronoUnit?: "DAY";
    lootTableId?: "BUNDLE_GENERAL1_FREE1_1_LOOT_TABLE";
    purchaseLimit: number;
    resetInterval?: number;
    version?: number;
}
