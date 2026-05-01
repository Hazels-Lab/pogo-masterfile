// Generated from Pokémon GO masterfile — group "avatarCustomization", 1757 entries (structural types).

import type { W } from "../_utils";

export interface AvatarCustomization<TemplateID extends string = string, TData extends AvatarCustomizationData = AvatarCustomizationData> {
    templateId: TemplateID;
    data: {
        templateId: TemplateID;
        avatarCustomization: TData;
    };
}
export type AvatarCustomizationType = W<AvatarCustomization>;

export interface AvatarCustomizationData {
    assetName: string;
    avatarType?: "PLAYER_AVATAR_FEMALE";
    bundleName?: string;
    enabled?: boolean;
    groupName: "group_backpack" | "group_belt" | "group_eyes" | "group_face" | "group_glasses" | "group_gloves" | "group_hair" | "group_hat" | "group_necklace" | "group_pants" | "group_poses" | "group_seasonal" | "group_shirt" | "group_shoes" | "group_skin" | "group_socks" | "group_sponsor";
    iapSku?: string;
    iconName?: string;
    setNames?: Array<string>;
    setPrimeItem?: boolean;
    slot: [
        "BACKPACK" | "BELT" | "EYES" | "FACE" | "GLASSES" | "GLOVES" | "HAIR" | "HAT" | "NECKLACE" | "PANTS" | "POSE" | "SHIRT" | "SHOES" | "SKIN" | "SOCKS"
    ];
    sortOrder: number;
    unlockBadgeLevel?: number;
    unlockBadgeType?: "BADGE_BATTLE_ATTACK_WON" | "BADGE_BATTLE_TRAINING_WON" | "BADGE_BIG_MAGIKARP" | "BADGE_GREAT_LEAGUE" | "BADGE_HOURS_DEFENDED" | "BADGE_MASTER_LEAGUE" | "BADGE_MAX_SIZE_FIRST_PLACE_WIN" | "BADGE_PIKACHU" | "BADGE_POKEDEX_ENTRIES" | "BADGE_POKEDEX_ENTRIES_GEN2" | "BADGE_ROCKET_GIOVANNI_DEFEATED" | "BADGE_TRAVEL_KM" | "BADGE_ULTRA_LEAGUE";
    unlockPlayerLevel?: number;
    unlockType: "DEFAULT" | "IAP_CLOTHING" | "LEVEL_REWARD" | "MEDAL_REWARD";
}
