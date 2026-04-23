/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: misc
// Filters: all
// Entries emitted: 1462

export interface Accessibility_client_settingsdataaccessibilitysettings {
  enabled: boolean;
  pluginEnabled: boolean;
}
export interface Accessibility_client_settingsdata {
  accessibilitySettings: Accessibility_client_settingsdataaccessibilitysettings;
  templateId: string;
}
export interface Accessibility_client_settingsEntry {
  templateId: "ACCESSIBILITY_CLIENT_SETTINGS";
  data: Accessibility_client_settingsdata;
}
export interface Additive_scene_settingsdataadditivescenesettings {
  enabled: boolean;
}
export interface Additive_scene_settingsdata {
  additiveSceneSettings: Additive_scene_settingsdataadditivescenesettings;
  templateId: string;
}
export interface Additive_scene_settingsEntry {
  templateId: "ADDITIVE_SCENE_SETTINGS";
  data: Additive_scene_settingsdata;
}
export interface Addressable_pokemon_settingsdataaddressablepokemonsettings {
  addressablePokemonIds: (string)[];
}
export interface Addressable_pokemon_settingsdata {
  addressablePokemonSettings: Addressable_pokemon_settingsdataaddressablepokemonsettings;
  templateId: string;
}
export interface Addressable_pokemon_settingsEntry {
  templateId: "ADDRESSABLE_POKEMON_SETTINGS";
  data: Addressable_pokemon_settingsdata;
}
export interface Address_book_import_settingsdataaddressbookimportsettings {
  isEnabled: boolean;
  onboardingScreenLevel: number;
  repromptOnboardingForV1: boolean;
  showOptOutCheckbox: boolean;
}
export interface Address_book_import_settingsdata {
  addressBookImportSettings: Address_book_import_settingsdataaddressbookimportsettings;
  templateId: string;
}
export interface Address_book_import_settingsEntry {
  templateId: "ADDRESS_BOOK_IMPORT_SETTINGS";
  data: Address_book_import_settingsdata;
}
export interface Admin_gm_nia_ops_only_filter_ams_feature_gatedatafeaturegate {
  rolloutPercentage: number;
  status: number;
}
export interface Admin_gm_nia_ops_only_filter_ams_feature_gatedata {
  featureGate: Admin_gm_nia_ops_only_filter_ams_feature_gatedatafeaturegate;
  templateId: string;
}
export interface Admin_gm_nia_ops_only_filter_ams_feature_gateEntry {
  templateId: "ADMIN_GM_NIA_OPS_ONLY_FILTER_AMS_FEATURE_GATE";
  data: Admin_gm_nia_ops_only_filter_ams_feature_gatedata;
}
export interface Advanced_settingsdataadvancedsettings {
  downloadAllAssetsEnabled: boolean;
}
export interface Advanced_settingsdata {
  advancedSettings: Advanced_settingsdataadvancedsettings;
  templateId: string;
}
export interface Advanced_settingsEntry {
  templateId: "ADVANCED_SETTINGS";
  data: Advanced_settingsdata;
}
export interface Ams_feature_gateEntry {
  templateId: "AMS_FEATURE_GATE";
  data: Admin_gm_nia_ops_only_filter_ams_feature_gatedata;
}
export interface Ams_frontend_feature_gateEntry {
  templateId: "AMS_FRONTEND_FEATURE_GATE";
  data: Admin_gm_nia_ops_only_filter_ams_feature_gatedata;
}
export interface Android_sensors_roll_backdatarollback {
  rollbackPercentage: number;
}
export interface Android_sensors_roll_backdata {
  rollBack: Android_sensors_roll_backdatarollback;
  templateId: string;
}
export interface Android_sensors_roll_backEntry {
  templateId: "ANDROID_SENSORS_ROLL_BACK";
  data: Android_sensors_roll_backdata;
}
export interface Ar_photo_feature_flagsdataarphotofeatureflagscapturesettings {
  contextualCheckIntervalSeconds: number;
  countdownSeconds: number;
}
export interface Ar_photo_feature_flagsdataarphotofeatureflagserrorreportingsettings {
  isEnabled: boolean;
  maxEventsPerSlidingWindow: number;
  maxTotalEventsBeforeShutdown: string;
  percentChancePlayerSends: number;
  slidingWindowLengthS: number;
}
export interface Ar_photo_feature_flagsdataarphotofeatureflagsincentivesitem {
  incentiveIconName: string;
  incentiveStringKey: string;
}
export interface Ar_photo_feature_flagsdataarphotofeatureflagspokemonwithexcludedformsitem {
  excludedForms: (string)[];
  pokemonId: string;
}
export interface Ar_photo_feature_flagsdataarphotofeatureflags {
  arMenuEntryEnabled: number;
  captureSettings: Ar_photo_feature_flagsdataarphotofeatureflagscapturesettings;
  errorReportingSettings: Ar_photo_feature_flagsdataarphotofeatureflagserrorreportingsettings;
  excludedPokemonIds: (string)[];
  incentives: (Ar_photo_feature_flagsdataarphotofeatureflagsincentivesitem)[];
  incentivesEnabled: boolean;
  isFeatureEnabled: boolean;
  lapsedDaysCutoff: number;
  mainMenuEntryEnabled: number;
  newDaysCutoff: number;
  pokemonWithExcludedForms: (Ar_photo_feature_flagsdataarphotofeatureflagspokemonwithexcludedformsitem)[];
  preLoginDeviceAllowList: (string)[];
  preLoginMetricsEnabled: number;
  preLoginRollOutRatio: number;
  shareFunctionalityEnabled: number;
  showSticker: string;
}
export interface Ar_photo_feature_flagsdata {
  arPhotoFeatureFlags: Ar_photo_feature_flagsdataarphotofeatureflags;
  templateId: string;
}
export interface Ar_photo_feature_flagsEntry {
  templateId: "AR_PHOTO_FEATURE_FLAGS";
  data: Ar_photo_feature_flagsdata;
}
export interface Ar_telemetry_settingsdataartelemetrysettings {
  batterySamplingIntervalMs: number;
  enableArdkTelemetry: boolean;
  framerateSamplingIntervalMs: number;
  measureBattery: boolean;
  measureFramerate: boolean;
  percentageSessionsToSample: number;
}
export interface Ar_telemetry_settingsdata {
  arTelemetrySettings: Ar_telemetry_settingsdataartelemetrysettings;
  templateId: string;
}
export interface Ar_telemetry_settingsEntry {
  templateId: "AR_TELEMETRY_SETTINGS";
  data: Ar_telemetry_settingsdata;
}
export interface Asset_refresh_protodataassetrefreshproto {
  stringRefreshSeconds: number;
}
export interface Asset_refresh_protodata {
  assetRefreshProto: Asset_refresh_protodataassetrefreshproto;
  templateId: string;
}
export interface Asset_refresh_protoEntry {
  templateId: "ASSET_REFRESH_PROTO";
  data: Asset_refresh_protodata;
}
export interface Avatar_feature_flagsdataavatarfeatureflags {
  corndogEnabled: boolean;
}
export interface Avatar_feature_flagsdata {
  avatarFeatureFlags: Avatar_feature_flagsdataavatarfeatureflags;
  templateId: string;
}
export interface Avatar_feature_flagsEntry {
  templateId: "AVATAR_FEATURE_FLAGS";
  data: Avatar_feature_flagsdata;
}
export interface Avatar_group_order_settingsdataavatargroupordersettingsgroupitem {
  name: string;
  order: number;
}
export interface Avatar_group_order_settingsdataavatargroupordersettings {
  group: (Avatar_group_order_settingsdataavatargroupordersettingsgroupitem)[];
}
export interface Avatar_group_order_settingsdata {
  avatarGroupOrderSettings: Avatar_group_order_settingsdataavatargroupordersettings;
  templateId: string;
}
export interface Avatar_group_order_settingsEntry {
  templateId: "AVATAR_GROUP_ORDER_SETTINGS";
  data: Avatar_group_order_settingsdata;
}
export interface Avatar_group_settingsdataavatargroupordersettingsgroupitem {
  name: string;
  newTagEnabled?: boolean;
  order: number;
}
export interface Avatar_group_settingsdataavatargroupordersettings {
  group: (Avatar_group_settingsdataavatargroupordersettingsgroupitem)[];
}
export interface Avatar_group_settingsdata {
  avatarGroupOrderSettings: Avatar_group_settingsdataavatargroupordersettings;
  templateId: string;
}
export interface Avatar_group_settingsEntry {
  templateId: "AVATAR_GROUP_SETTINGS";
  data: Avatar_group_settingsdata;
}
export interface Background_mode_settingsdatabackgroundmodesettings {
  weeklyFitnessGoalLevel1DistanceKm: number;
  weeklyFitnessGoalLevel2DistanceKm: number;
  weeklyFitnessGoalLevel3DistanceKm: number;
  weeklyFitnessGoalLevel4DistanceKm: number;
  weeklyFitnessGoalReminderKm: number;
}
export interface Background_mode_settingsdata {
  backgroundModeSettings: Background_mode_settingsdatabackgroundmodesettings;
  templateId: string;
}
export interface Background_mode_settingsEntry {
  templateId: "BACKGROUND_MODE_SETTINGS";
  data: Background_mode_settingsdata;
}
export interface Battle_accessibility_code_gatedatacodegateprotosubcodegatelist {
  isEnabled: boolean;
  name: string;
}
export interface Battle_accessibility_code_gatedatacodegateproto {
  isEnabled: boolean;
  subCodeGateList: Battle_accessibility_code_gatedatacodegateprotosubcodegatelist;
}
export interface Battle_accessibility_code_gatedata {
  codeGateProto: Battle_accessibility_code_gatedatacodegateproto;
  templateId: string;
}
export interface Battle_accessibility_code_gateEntry {
  templateId: "BATTLE_ACCESSIBILITY_CODE_GATE";
  data: Battle_accessibility_code_gatedata;
}
export interface Battle_hub_badge_settingsdatabattlehubbadgesettings {
  combatHubDisplayedBadges: (string)[];
}
export interface Battle_hub_badge_settingsdata {
  battleHubBadgeSettings: Battle_hub_badge_settingsdatabattlehubbadgesettings;
  templateId: string;
}
export interface Battle_hub_badge_settingsEntry {
  templateId: "BATTLE_HUB_BADGE_SETTINGS";
  data: Battle_hub_badge_settingsdata;
}
export interface Battle_hub_order_settingsdatabattlehubordersettingssectionitem {
  mainSection: string;
  subsection: (string)[];
}
export interface Battle_hub_order_settingsdatabattlehubordersettingssectiongroupitem {
  section: (string)[];
}
export interface Battle_hub_order_settingsdatabattlehubordersettings {
  section: (Battle_hub_order_settingsdatabattlehubordersettingssectionitem)[];
  sectionGroup: (Battle_hub_order_settingsdatabattlehubordersettingssectiongroupitem)[];
}
export interface Battle_hub_order_settingsdata {
  battleHubOrderSettings: Battle_hub_order_settingsdatabattlehubordersettings;
  templateId: string;
}
export interface Battle_hub_order_settingsEntry {
  templateId: "BATTLE_HUB_ORDER_SETTINGS";
  data: Battle_hub_order_settingsdata;
}
export interface Battle_party_settingsdatabattlepartysettings {
  enableBattlePartySaving: boolean;
  maxBattleParties: number;
  overallPartiesCap: number;
}
export interface Battle_party_settingsdata {
  battlePartySettings: Battle_party_settingsdatabattlepartysettings;
  templateId: string;
}
export interface Battle_party_settingsEntry {
  templateId: "BATTLE_PARTY_SETTINGS";
  data: Battle_party_settingsdata;
}
export interface Battle_rewards_code_gatedatacodegateprotosubcodegatelist {
  name: string;
}
export interface Battle_rewards_code_gatedatacodegateproto {
  isEnabled: boolean;
  subCodeGateList: Battle_rewards_code_gatedatacodegateprotosubcodegatelist;
}
export interface Battle_rewards_code_gatedata {
  codeGateProto: Battle_rewards_code_gatedatacodegateproto;
  templateId: string;
}
export interface Battle_rewards_code_gateEntry {
  templateId: "BATTLE_REWARDS_CODE_GATE";
  data: Battle_rewards_code_gatedata;
}
export interface Battle_settingsdatabattlesettings {
  attackServerInterval: number;
  bonusTimePerAllySeconds: number;
  bossEnergyRegenerationPerHealthLost: number;
  dodgeDamageReductionPercent: number;
  dodgeDurationMs: number;
  enemyAttackInterval: number;
  energyDeltaPerHealthLost: number;
  maximumAttackersPerBattle: number;
  maximumEnergy: number;
  minimumPlayerLevel: number;
  minimumRaidPlayerLevel: number;
  purifiedPokemonAttackMultiplierVsShadow: number;
  retargetSeconds: number;
  roundDurationSeconds: number;
  sameTypeAttackBonusMultiplier: number;
  shadowPokemonAttackBonusMultiplier: number;
  shadowPokemonDefenseBonusMultiplier: number;
  swapDurationMs: number;
}
export interface Battle_settingsdata {
  battleSettings: Battle_settingsdatabattlesettings;
  templateId: string;
}
export interface Battle_settingsEntry {
  templateId: "BATTLE_SETTINGS";
  data: Battle_settingsdata;
}
export interface Battle_visual_settingsdatabattlevisualsettings {
  bannerTextureAsset: string;
  crowdTextureAsset: string;
  enhancementsEnabled: boolean;
}
export interface Battle_visual_settingsdata {
  battleVisualSettings: Battle_visual_settingsdatabattlevisualsettings;
  templateId: string;
}
export interface Battle_visual_settingsEntry {
  templateId: "BATTLE_VISUAL_SETTINGS";
  data: Battle_visual_settingsdata;
}
export interface Beluga_pokemon_whitelistdatabelugapokemonwhitelist {
  additionalPokemonAllowed: (string)[];
  costumesAllowed: (string)[];
  maxAllowedPokemonPokedexNumber: number;
}
export interface Beluga_pokemon_whitelistdata {
  belugaPokemonWhitelist: Beluga_pokemon_whitelistdatabelugapokemonwhitelist;
  templateId: string;
}
export interface Beluga_pokemon_whitelistEntry {
  templateId: "BELUGA_POKEMON_WHITELIST";
  data: Beluga_pokemon_whitelistdata;
}
export interface Best_friends_plus_settingsdatabestfriendsplussettings {
  enabled: boolean;
  tutorialTimeCutoff: string;
}
export interface Best_friends_plus_settingsdata {
  bestFriendsPlusSettings: Best_friends_plus_settingsdatabestfriendsplussettings;
  templateId: string;
}
export interface Best_friends_plus_settingsEntry {
  templateId: "BEST_FRIENDS_PLUS_SETTINGS";
  data: Best_friends_plus_settingsdata;
}
export interface Bidirectional_fp_weekly_challenge_reward_roll_backEntry {
  templateId: "BIDIRECTIONAL_FP_WEEKLY_CHALLENGE_REWARD_ROLL_BACK";
  data: Android_sensors_roll_backdata;
}
export interface Bread_battle_client_settingsdatabreadbattleclientsettings {
  breadBattleMinPlayerLevel: number;
  canInviteFriendsInPerson: boolean;
  canInviteFriendsRemotely: boolean;
  fetchProfileFromSocialEnabled: boolean;
  friendInviteCutoffTimeSec: number;
  inviteCooldownDurationMillis: string;
  maxNumFriendInvites: number;
  maxNumFriendInvitesPerAction: number;
  maxNumFriendInvitesToBreadDoughLobbyPerAction: number;
  maxPlayersPerBreadDoughLobby: number;
  maxPlayersPerBreadLobby: number;
  maxPlayersToPrepareBreadDoughLobby: number;
  maxRemoteBreadBattlePassesAllowed: number;
  maxRemotePlayersPerBreadDoughLobby: number;
  maxRemotePlayersPerBreadLobby: number;
  minPlayersToPrepareBreadLobby: number;
  prepareBreadLobbyCutoffMs: number;
  prepareBreadLobbyEnabled: boolean;
  prepareBreadLobbySoloMs: number;
  remoteBreadBattleEnabled: boolean;
  remoteBreadBattleMinPlayerLevel: number;
  rvnVersion: number;
}
export interface Bread_battle_client_settingsdata {
  breadBattleClientSettings: Bread_battle_client_settingsdatabreadbattleclientsettings;
  templateId: string;
}
export interface Bread_battle_client_settingsEntry {
  templateId: "BREAD_BATTLE_CLIENT_SETTINGS";
  data: Bread_battle_client_settingsdata;
}
export interface Bread_feature_flagsdatabreadfeatureflags {
  battleEnabled: boolean;
  battleSpawnMode: string;
  boostItemEnabled: boolean;
  breadPostBattleRecoveryEnabled: boolean;
  canUseMasterBallPostBattle: boolean;
  debugRpcEnabled: boolean;
  discoveryEnabled: boolean;
  enabled: boolean;
  minimumPlayerLevel: number;
  mpEnabled: boolean;
  nearbyLobbyCounterEnabled: boolean;
  powerSpotEditsEnabled: boolean;
  stationDiscoveryMode: string;
}
export interface Bread_feature_flagsdata {
  breadFeatureFlags: Bread_feature_flagsdatabreadfeatureflags;
  templateId: string;
}
export interface Bread_feature_flagsEntry {
  templateId: "BREAD_FEATURE_FLAGS";
  data: Bread_feature_flagsdata;
}
export interface Bread_lobby_counter_settingsdatabreadlobbycountersettings {
  breadDoughLobbyMaxCountToUpdate: number;
  publishCutoffTimeMs: string;
  showCounterRadiusMeters: number;
  subscribeS2Level: number;
  subscriptionNamespace: string;
}
export interface Bread_lobby_counter_settingsdata {
  breadLobbyCounterSettings: Bread_lobby_counter_settingsdatabreadlobbycountersettings;
  templateId: string;
}
export interface Bread_lobby_counter_settingsEntry {
  templateId: "BREAD_LOBBY_COUNTER_SETTINGS";
  data: Bread_lobby_counter_settingsdata;
}
export interface Bread_lobby_update_settingsdatabreadlobbyupdatesettings {
  joinPublishCutoffTimeMs: string;
  serverPublishRateLimitIntervalMs: string;
}
export interface Bread_lobby_update_settingsdata {
  breadLobbyUpdateSettings: Bread_lobby_update_settingsdatabreadlobbyupdatesettings;
  templateId: string;
}
export interface Bread_lobby_update_settingsEntry {
  templateId: "BREAD_LOBBY_UPDATE_SETTINGS";
  data: Bread_lobby_update_settingsdata;
}
export interface Bread_move_level_settings_group_1databreadmovelevelsettingsasettingsitem {
  candyCost?: number;
  mpCost: number;
  xlCandyCost?: number;
  xpRewards?: number;
}
export interface Bread_move_level_settings_group_1databreadmovelevelsettingsbsettingsitem {
  candyCost?: number;
  mpCost: number;
  xlCandyCost?: number;
  xpRewards: number;
}
export interface Bread_move_level_settings_group_1databreadmovelevelsettings {
  aSettings: (Bread_move_level_settings_group_1databreadmovelevelsettingsasettingsitem)[];
  bSettings: (Bread_move_level_settings_group_1databreadmovelevelsettingsbsettingsitem)[];
  cSettings: (Bread_move_level_settings_group_1databreadmovelevelsettingsbsettingsitem)[];
  group: string;
}
export interface Bread_move_level_settings_group_1data {
  breadMoveLevelSettings: Bread_move_level_settings_group_1databreadmovelevelsettings;
  templateId: string;
}
export interface Bread_move_level_settings_group_1Entry {
  templateId: "BREAD_MOVE_LEVEL_SETTINGS_GROUP_1";
  data: Bread_move_level_settings_group_1data;
}
export interface Bread_move_level_settings_group_2Entry {
  templateId: "BREAD_MOVE_LEVEL_SETTINGS_GROUP_2";
  data: Bread_move_level_settings_group_1data;
}
export interface Bread_move_level_settings_group_3Entry {
  templateId: "BREAD_MOVE_LEVEL_SETTINGS_GROUP_3";
  data: Bread_move_level_settings_group_1data;
}
export interface Bread_move_level_settings_group_4Entry {
  templateId: "BREAD_MOVE_LEVEL_SETTINGS_GROUP_4";
  data: Bread_move_level_settings_group_1data;
}
export interface Bread_move_level_settings_group_7databreadmovelevelsettingsasettingsitem {
  candyCost?: number;
  stardustCost: number;
  xlCandyCost?: number;
  xpRewards?: number;
}
export interface Bread_move_level_settings_group_7databreadmovelevelsettingsbsettingsitem {
  candyCost?: number;
  stardustCost: number;
  xlCandyCost?: number;
  xpRewards: number;
}
export interface Bread_move_level_settings_group_7databreadmovelevelsettings {
  aSettings: (Bread_move_level_settings_group_7databreadmovelevelsettingsasettingsitem)[];
  bSettings: (Bread_move_level_settings_group_7databreadmovelevelsettingsbsettingsitem)[];
  cSettings: (Bread_move_level_settings_group_7databreadmovelevelsettingsbsettingsitem)[];
  group: number;
}
export interface Bread_move_level_settings_group_7data {
  breadMoveLevelSettings: Bread_move_level_settings_group_7databreadmovelevelsettings;
  templateId: string;
}
export interface Bread_move_level_settings_group_7Entry {
  templateId: "BREAD_MOVE_LEVEL_SETTINGS_GROUP_7";
  data: Bread_move_level_settings_group_7data;
}
export interface Bread_move_level_settings_group_8databreadmovelevelsettingsasettingsitem {
  candyCost: number;
  mpCost: number;
  xlCandyCost?: number;
  xpRewards?: number;
}
export interface Bread_move_level_settings_group_8databreadmovelevelsettingsbsettingsitem {
  candyCost: number;
  mpCost: number;
  xlCandyCost?: number;
  xpRewards: number;
}
export interface Bread_move_level_settings_group_8databreadmovelevelsettings {
  aSettings: (Bread_move_level_settings_group_8databreadmovelevelsettingsasettingsitem)[];
  bSettings: (Bread_move_level_settings_group_8databreadmovelevelsettingsbsettingsitem)[];
  cSettings: (Bread_move_level_settings_group_8databreadmovelevelsettingsbsettingsitem)[];
  group: number;
}
export interface Bread_move_level_settings_group_8data {
  breadMoveLevelSettings: Bread_move_level_settings_group_8databreadmovelevelsettings;
  templateId: string;
}
export interface Bread_move_level_settings_group_8Entry {
  templateId: "BREAD_MOVE_LEVEL_SETTINGS_GROUP_8";
  data: Bread_move_level_settings_group_8data;
}
export interface Bread_move_level_settings_group_zEntry {
  templateId: "BREAD_MOVE_LEVEL_SETTINGS_GROUP_Z";
  data: Bread_move_level_settings_group_7data;
}
export interface Bread_move_mapping_settingsdatabreadmovemappingsmappingsitem {
  move: string;
  "type": string;
}
export interface Bread_move_mapping_settingsdatabreadmovemappings {
  mappings: (Bread_move_mapping_settingsdatabreadmovemappingsmappingsitem)[];
}
export interface Bread_move_mapping_settingsdata {
  breadMoveMappings: Bread_move_mapping_settingsdatabreadmovemappings;
  templateId: string;
}
export interface Bread_move_mapping_settingsEntry {
  templateId: "BREAD_MOVE_MAPPING_SETTINGS";
  data: Bread_move_mapping_settingsdata;
}
export interface Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitempokemonformdataitemvisualdataitembreadbattlebossvisualdata {
  scale: number;
  xOffset: number;
  yOffset: number;
}
export interface Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitempokemonformdataitemvisualdataitembreadbattletrainervisualdata {
  xOffset: number;
  yOffset?: number;
}
export interface Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitempokemonformdataitemvisualdataitembreadbattlevisualdata {
  scale: number;
  xOffset?: number;
  yOffset?: number;
}
export interface Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitempokemonformdataitemvisualdataitembreadencountervisiualdata {
  cameraDistance: number;
  maxReticleSize?: number;
  scale: number;
}
export interface Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitempokemonformdataitemvisualdataitembreadstationvisualdata {
  scale: number;
  xOffset?: number;
}
export interface Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitempokemonformdataitemvisualdataitem {
  breadBattleBossVisualData?: Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitempokemonformdataitemvisualdataitembreadbattlebossvisualdata;
  breadBattleTrainerVisualData?: Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitempokemonformdataitemvisualdataitembreadbattletrainervisualdata;
  breadBattleVisualData?: Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitempokemonformdataitemvisualdataitembreadbattlevisualdata;
  breadEncounterVisiualData?: Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitempokemonformdataitemvisualdataitembreadencountervisiualdata;
  breadMode: string | number;
  breadStationVisualData?: Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitempokemonformdataitemvisualdataitembreadstationvisualdata;
}
export interface Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitempokemonformdataitem {
  pokemonForm?: string;
  visualData: (Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitempokemonformdataitemvisualdataitem)[];
}
export interface Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitem {
  pokemonFormData: (Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitempokemonformdataitem)[];
  pokemonId: string;
}
export interface Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettings {
  visualSettings: (Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettingsvisualsettingsitem)[];
}
export interface Bread_pokemon_scaling_settingsdata {
  breadPokemonScalingSettings: Bread_pokemon_scaling_settingsdatabreadpokemonscalingsettings;
  templateId: string;
}
export interface Bread_pokemon_scaling_settingsEntry {
  templateId: "BREAD_POKEMON_SCALING_SETTINGS";
  data: Bread_pokemon_scaling_settingsdata;
}
export interface Bread_shared_settingsdatabreadsettingsallowedsourdoughpokemonitem {
  breadMode: string;
  form: (string)[];
  pokemonId: string;
}
export interface Bread_shared_settingsdatabreadsettingsbreadbattleavailability {
  breadBattleAvailabilityEndMinute: number;
  breadBattleAvailabilityStartMinute: number;
}
export interface Bread_shared_settingsdatabreadsettings {
  allowedSourdoughPokemon: (Bread_shared_settingsdatabreadsettingsallowedsourdoughpokemonitem)[];
  breadBattleAvailability: Bread_shared_settingsdatabreadsettingsbreadbattleavailability;
  maxRangeForNearbyStateMeters: number;
  maxStationedPokemon: number;
  maxStationedPokemonDisplayCount: number;
  maxStationedPokemonPerPlayer: number;
  minMsToReceiveReleaseStationRewards: string;
  numStationedPokemonToReturn: number;
  showTimerWhenFar: boolean;
  startOfDayOffsetDurationMs: string;
  tutorialMaxBoostItemDurationS: number;
}
export interface Bread_shared_settingsdata {
  breadSettings: Bread_shared_settingsdatabreadsettings;
  templateId: string;
}
export interface Bread_shared_settingsEntry {
  templateId: "BREAD_SHARED_SETTINGS";
  data: Bread_shared_settingsdata;
}
export interface Buddy_category_battledatabuddyactivitycategorysettings {
  activityCategory: string;
  maxPointsPerDay: number;
}
export interface Buddy_category_battledata {
  buddyActivityCategorySettings: Buddy_category_battledatabuddyactivitycategorysettings;
  templateId: string;
}
export interface Buddy_category_battleEntry {
  templateId: "BUDDY_CATEGORY_BATTLE";
  data: Buddy_category_battledata;
}
export interface Buddy_category_bonusEntry {
  templateId: "BUDDY_CATEGORY_BONUS";
  data: Buddy_category_battledata;
}
export interface Buddy_category_careEntry {
  templateId: "BUDDY_CATEGORY_CARE";
  data: Buddy_category_battledata;
}
export interface Buddy_category_exploreEntry {
  templateId: "BUDDY_CATEGORY_EXPLORE";
  data: Buddy_category_battledata;
}
export interface Buddy_category_feedEntry {
  templateId: "BUDDY_CATEGORY_FEED";
  data: Buddy_category_battledata;
}
export interface Buddy_category_routeEntry {
  templateId: "BUDDY_CATEGORY_ROUTE";
  data: Buddy_category_battledata;
}
export interface Buddy_category_snapshotEntry {
  templateId: "BUDDY_CATEGORY_SNAPSHOT";
  data: Buddy_category_battledata;
}
export interface Buddy_category_walkEntry {
  templateId: "BUDDY_CATEGORY_WALK";
  data: Buddy_category_battledata;
}
export interface Buddy_emotion_level_0databuddyemotionlevelsettings {
  emotionAnimation: string;
  emotionLevel: string;
}
export interface Buddy_emotion_level_0data {
  buddyEmotionLevelSettings: Buddy_emotion_level_0databuddyemotionlevelsettings;
  templateId: string;
}
export interface Buddy_emotion_level_0Entry {
  templateId: "BUDDY_EMOTION_LEVEL_0";
  data: Buddy_emotion_level_0data;
}
export interface Buddy_emotion_level_1databuddyemotionlevelsettings {
  emotionAnimation: string;
  emotionLevel: string;
  minEmotionPointsRequired: number;
}
export interface Buddy_emotion_level_1data {
  buddyEmotionLevelSettings: Buddy_emotion_level_1databuddyemotionlevelsettings;
  templateId: string;
}
export interface Buddy_emotion_level_1Entry {
  templateId: "BUDDY_EMOTION_LEVEL_1";
  data: Buddy_emotion_level_1data;
}
export interface Buddy_emotion_level_2Entry {
  templateId: "BUDDY_EMOTION_LEVEL_2";
  data: Buddy_emotion_level_1data;
}
export interface Buddy_emotion_level_3Entry {
  templateId: "BUDDY_EMOTION_LEVEL_3";
  data: Buddy_emotion_level_1data;
}
export interface Buddy_emotion_level_4Entry {
  templateId: "BUDDY_EMOTION_LEVEL_4";
  data: Buddy_emotion_level_1data;
}
export interface Buddy_emotion_level_5Entry {
  templateId: "BUDDY_EMOTION_LEVEL_5";
  data: Buddy_emotion_level_1data;
}
export interface Buddy_emotion_level_6Entry {
  templateId: "BUDDY_EMOTION_LEVEL_6";
  data: Buddy_emotion_level_1data;
}
export interface Buddy_encounter_cameo_settingsdatabuddyencountercameosettings {
  buddyInvasionEncounterCameoChancePercent: number;
  buddyQuestEncounterCameoChancePercent: number;
  buddyRaidEncounterCameoChancePercent: number;
  buddyWildEncounterCameoChancePercent: number;
}
export interface Buddy_encounter_cameo_settingsdata {
  buddyEncounterCameoSettings: Buddy_encounter_cameo_settingsdatabuddyencountercameosettings;
  templateId: string;
}
export interface Buddy_encounter_cameo_settingsEntry {
  templateId: "BUDDY_ENCOUNTER_CAMEO_SETTINGS";
  data: Buddy_encounter_cameo_settingsdata;
}
export interface Buddy_hunger_settingsdatabuddyhungersettings {
  cooldownDurationMs: string;
  decayDurationAfterFullMs: string;
  decayPointsPerBucket: number;
  millisecondsPerBucket: string;
  numHungerPointsRequiredForFull: number;
}
export interface Buddy_hunger_settingsdata {
  buddyHungerSettings: Buddy_hunger_settingsdatabuddyhungersettings;
  templateId: string;
}
export interface Buddy_hunger_settingsEntry {
  templateId: "BUDDY_HUNGER_SETTINGS";
  data: Buddy_hunger_settingsdata;
}
export interface Buddy_interaction_settingsdatabuddyinteractionsettings {
  feedItemWhitelist: (string)[];
}
export interface Buddy_interaction_settingsdata {
  buddyInteractionSettings: Buddy_interaction_settingsdatabuddyinteractionsettings;
  templateId: string;
}
export interface Buddy_interaction_settingsEntry {
  templateId: "BUDDY_INTERACTION_SETTINGS";
  data: Buddy_interaction_settingsdata;
}
export interface Buddy_level_0databuddylevelsettings {
  level: string;
}
export interface Buddy_level_0data {
  buddyLevelSettings: Buddy_level_0databuddylevelsettings;
  templateId: string;
}
export interface Buddy_level_0Entry {
  templateId: "BUDDY_LEVEL_0";
  data: Buddy_level_0data;
}
export interface Buddy_level_1databuddylevelsettings {
  level: string;
  minNonCumulativePointsRequired: number;
  unlockedTraits: (string)[];
}
export interface Buddy_level_1data {
  buddyLevelSettings: Buddy_level_1databuddylevelsettings;
  templateId: string;
}
export interface Buddy_level_1Entry {
  templateId: "BUDDY_LEVEL_1";
  data: Buddy_level_1data;
}
export interface Buddy_level_2Entry {
  templateId: "BUDDY_LEVEL_2";
  data: Buddy_level_1data;
}
export interface Buddy_level_3Entry {
  templateId: "BUDDY_LEVEL_3";
  data: Buddy_level_1data;
}
export interface Buddy_level_4Entry {
  templateId: "BUDDY_LEVEL_4";
  data: Buddy_level_1data;
}
export interface Buddy_swap_settingsdatabuddyswapsettings {
  enableQuickSwap: boolean;
  enableSwapFreeEvolution: boolean;
  maxSwapsPerDay: number;
}
export interface Buddy_swap_settingsdata {
  buddySwapSettings: Buddy_swap_settingsdatabuddyswapsettings;
  templateId: string;
}
export interface Buddy_swap_settingsEntry {
  templateId: "BUDDY_SWAP_SETTINGS";
  data: Buddy_swap_settingsdata;
}
export interface Buddy_walk_settingsdatabuddywalksettings {
  kmRequiredPerAffectionPoint: number;
}
export interface Buddy_walk_settingsdata {
  buddyWalkSettings: Buddy_walk_settingsdatabuddywalksettings;
  templateId: string;
}
export interface Buddy_walk_settingsEntry {
  templateId: "BUDDY_WALK_SETTINGS";
  data: Buddy_walk_settingsdata;
}
export interface Bulk_healing_settingsdatabulkhealingsettings {
  enabled: boolean;
  maxPokemonsPerHeal: number;
}
export interface Bulk_healing_settingsdata {
  bulkHealingSettings: Bulk_healing_settingsdatabulkhealingsettings;
  templateId: string;
}
export interface Bulk_healing_settingsEntry {
  templateId: "BULK_HEALING_SETTINGS";
  data: Bulk_healing_settingsdata;
}
export interface Butterfly_collector_settingsdatabutterflycollectorsettings {
  dailyProgressFromInventory: number;
  enabled: boolean;
  region: (string)[];
  version: number;
}
export interface Butterfly_collector_settingsdata {
  butterflyCollectorSettings: Butterfly_collector_settingsdatabutterflycollectorsettings;
  templateId: string;
}
export interface Butterfly_collector_settingsEntry {
  templateId: "BUTTERFLY_COLLECTOR_SETTINGS";
  data: Butterfly_collector_settingsdata;
}
export interface Campfire_settingsdatacampfiresettings {
  arCatchCardEnabled: boolean;
  arCatchCardShareCampfireEnabled: boolean;
  campfireEnabled: boolean;
  catchCardAvailableSeconds: number;
  catchCardEnabled: boolean;
  catchCardShareCampfireEnabled: boolean;
  mapButtonsEnabled: boolean;
  meetupQueryTimerMs: string;
  passwordlessLoginEnabled: boolean;
}
export interface Campfire_settingsdata {
  campfireSettings: Campfire_settingsdatacampfiresettings;
  templateId: string;
}
export interface Campfire_settingsEntry {
  templateId: "CAMPFIRE_SETTINGS";
  data: Campfire_settingsdata;
}
export interface Catch_radius_multiplier_settingsdatacatchradiusmultipliersettings {
  catchRadiusMultiplierSettingsEnabled: boolean;
}
export interface Catch_radius_multiplier_settingsdata {
  catchRadiusMultiplierSettings: Catch_radius_multiplier_settingsdatacatchradiusmultipliersettings;
  templateId: string;
}
export interface Catch_radius_multiplier_settingsEntry {
  templateId: "CATCH_RADIUS_MULTIPLIER_SETTINGS";
  data: Catch_radius_multiplier_settingsdata;
}
export interface Character_blanchedatainvasionnpcdisplaysettingsavatar {
  avatar: number;
}
export interface Character_blanchedatainvasionnpcdisplaysettings {
  avatar: Character_blanchedatainvasionnpcdisplaysettingsavatar;
  backdropImageBundle: string;
  iconUrl: string;
  modelName: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
}
export interface Character_blanchedata {
  invasionNpcDisplaySettings: Character_blanchedatainvasionnpcdisplaysettings;
  templateId: string;
}
export interface Character_blancheEntry {
  templateId: "CHARACTER_BLANCHE";
  data: Character_blanchedata;
}
export interface Character_bug_grunt_femaledatainvasionnpcdisplaysettings {
  avatar: Character_blanchedatainvasionnpcdisplaysettingsavatar;
  iconUrl: string;
  modelName: string;
  tipsType: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
  tutorialOnLossString: string;
}
export interface Character_bug_grunt_femaledata {
  invasionNpcDisplaySettings: Character_bug_grunt_femaledatainvasionnpcdisplaysettings;
  templateId: string;
}
export interface Character_bug_grunt_femaleEntry {
  templateId: "CHARACTER_BUG_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_bug_grunt_maledatainvasionnpcdisplaysettings {
  avatar: Character_blanchedatainvasionnpcdisplaysettingsavatar;
  iconUrl: string;
  isMale: boolean;
  modelName: string;
  tipsType: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
  tutorialOnLossString: string;
}
export interface Character_bug_grunt_maledata {
  invasionNpcDisplaySettings: Character_bug_grunt_maledatainvasionnpcdisplaysettings;
  templateId: string;
}
export interface Character_bug_grunt_maleEntry {
  templateId: "CHARACTER_BUG_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_candelaEntry {
  templateId: "CHARACTER_CANDELA";
  data: Character_blanchedata;
}
export interface Character_dark_grunt_femaleEntry {
  templateId: "CHARACTER_DARK_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_dark_grunt_maleEntry {
  templateId: "CHARACTER_DARK_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_decoy_grunt_femaledatainvasionnpcdisplaysettings {
  avatar: Character_blanchedatainvasionnpcdisplaysettingsavatar;
  iconUrl: string;
  modelName: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
  tutorialOnLossString: string;
}
export interface Character_decoy_grunt_femaledata {
  invasionNpcDisplaySettings: Character_decoy_grunt_femaledatainvasionnpcdisplaysettings;
  templateId: string;
}
export interface Character_decoy_grunt_femaleEntry {
  templateId: "CHARACTER_DECOY_GRUNT_FEMALE";
  data: Character_decoy_grunt_femaledata;
}
export interface Character_decoy_grunt_maledatainvasionnpcdisplaysettings {
  avatar: Character_blanchedatainvasionnpcdisplaysettingsavatar;
  iconUrl: string;
  isMale: boolean;
  modelName: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
  tutorialOnLossString: string;
}
export interface Character_decoy_grunt_maledata {
  invasionNpcDisplaySettings: Character_decoy_grunt_maledatainvasionnpcdisplaysettings;
  templateId: string;
}
export interface Character_decoy_grunt_maleEntry {
  templateId: "CHARACTER_DECOY_GRUNT_MALE";
  data: Character_decoy_grunt_maledata;
}
export interface Character_dragon_grunt_femaleEntry {
  templateId: "CHARACTER_DRAGON_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_dragon_grunt_maleEntry {
  templateId: "CHARACTER_DRAGON_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_electric_grunt_femaleEntry {
  templateId: "CHARACTER_ELECTRIC_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_electric_grunt_maleEntry {
  templateId: "CHARACTER_ELECTRIC_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_event_arlo_unticketedEntry {
  templateId: "CHARACTER_EVENT_ARLO_UNTICKETED";
  data: Character_decoy_grunt_maledata;
}
export interface Character_event_cliff_unticketedEntry {
  templateId: "CHARACTER_EVENT_CLIFF_UNTICKETED";
  data: Character_decoy_grunt_maledata;
}
export interface Character_event_giovanni_unticketedEntry {
  templateId: "CHARACTER_EVENT_GIOVANNI_UNTICKETED";
  data: Character_decoy_grunt_maledata;
}
export interface Character_event_npc_0datainvasionnpcdisplaysettingsavatar {
  avatarBackpack: string;
  avatarBelt: string;
  avatarEyes: string;
  avatarFace: string;
  avatarGlasses: string;
  avatarGloves: string;
  avatarHair: string;
  avatarHat: string;
  avatarNecklace: string;
  avatarPants: string;
  avatarPose: string;
  avatarShirt: string;
  avatarShoes: string;
  avatarSocks: string;
  skin: number;
}
export interface Character_event_npc_0datainvasionnpcdisplaysettings {
  avatar: Character_event_npc_0datainvasionnpcdisplaysettingsavatar;
  backdropImageBundle: string;
  customCombatMusic: string;
  customIncidentMusic: string;
  iconUrl: string;
  isMale: boolean;
  modelName: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
  tutorialOnLossString: string;
}
export interface Character_event_npc_0data {
  invasionNpcDisplaySettings: Character_event_npc_0datainvasionnpcdisplaysettings;
  templateId: string;
}
export interface Character_event_npc_0Entry {
  templateId: "CHARACTER_EVENT_NPC_0";
  data: Character_event_npc_0data;
}
export interface Character_event_npc_1datainvasionnpcdisplaysettingsavatar {
  avatar: number;
  avatarBackpack: string;
  avatarBelt: string;
  avatarEyes: string;
  avatarFace: string;
  avatarGlasses: string;
  avatarGloves: string;
  avatarHair: string;
  avatarHat: string;
  avatarNecklace: string;
  avatarPants: string;
  avatarPose: string;
  avatarShirt: string;
  avatarShoes: string;
  avatarSocks: string;
  skin: number;
}
export interface Character_event_npc_1datainvasionnpcdisplaysettings {
  avatar: Character_event_npc_1datainvasionnpcdisplaysettingsavatar;
  backdropImageBundle: string;
  customCombatMusic: string;
  customIncidentMusic: string;
  iconUrl: string;
  isMale: boolean;
  modelName: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
  tutorialOnLossString: string;
}
export interface Character_event_npc_1data {
  invasionNpcDisplaySettings: Character_event_npc_1datainvasionnpcdisplaysettings;
  templateId: string;
}
export interface Character_event_npc_1Entry {
  templateId: "CHARACTER_EVENT_NPC_1";
  data: Character_event_npc_1data;
}
export interface Character_event_npc_10datainvasionnpcdisplaysettings {
  avatar: Character_event_npc_1datainvasionnpcdisplaysettingsavatar;
  backdropImageBundle: string;
  customCombatMusic: string;
  customIncidentMusic: string;
  iconUrl: string;
  modelName: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
  tutorialOnLossString: string;
}
export interface Character_event_npc_10data {
  invasionNpcDisplaySettings: Character_event_npc_10datainvasionnpcdisplaysettings;
  templateId: string;
}
export interface Character_event_npc_10Entry {
  templateId: "CHARACTER_EVENT_NPC_10";
  data: Character_event_npc_10data;
}
export interface Character_event_npc_2datainvasionnpcdisplaysettingsavatar {
  avatar: number;
  avatarBackpack: string;
  avatarEyes: string;
  avatarFace: string;
  avatarGlasses: string;
  avatarGloves: string;
  avatarHair: string;
  avatarHat: string;
  avatarPants: string;
  avatarPose: string;
  avatarShirt: string;
  avatarShoes: string;
  avatarSocks: string;
  skin: number;
}
export interface Character_event_npc_2datainvasionnpcdisplaysettings {
  avatar: Character_event_npc_2datainvasionnpcdisplaysettingsavatar;
  backdropImageBundle: string;
  customCombatMusic: string;
  customIncidentMusic: string;
  iconUrl: string;
  modelName: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
  tutorialOnLossString: string;
}
export interface Character_event_npc_2data {
  invasionNpcDisplaySettings: Character_event_npc_2datainvasionnpcdisplaysettings;
  templateId: string;
}
export interface Character_event_npc_2Entry {
  templateId: "CHARACTER_EVENT_NPC_2";
  data: Character_event_npc_2data;
}
export interface Character_event_npc_3Entry {
  templateId: "CHARACTER_EVENT_NPC_3";
  data: Character_event_npc_2data;
}
export interface Character_event_npc_4Entry {
  templateId: "CHARACTER_EVENT_NPC_4";
  data: Character_event_npc_1data;
}
export interface Character_event_npc_5datainvasionnpcdisplaysettingsavatar {
  avatarBackpack: string;
  avatarEyes: string;
  avatarFace: string;
  avatarGlasses: string;
  avatarGloves: string;
  avatarHair: string;
  avatarHat: string;
  avatarPants: string;
  avatarPose: string;
  avatarShirt: string;
  avatarShoes: string;
  avatarSocks: string;
  skin: number;
}
export interface Character_event_npc_5datainvasionnpcdisplaysettings {
  avatar: Character_event_npc_5datainvasionnpcdisplaysettingsavatar;
  backdropImageBundle: string;
  customCombatMusic: string;
  customIncidentMusic: string;
  iconUrl: string;
  isMale: boolean;
  modelName: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
  tutorialOnLossString: string;
}
export interface Character_event_npc_5data {
  invasionNpcDisplaySettings: Character_event_npc_5datainvasionnpcdisplaysettings;
  templateId: string;
}
export interface Character_event_npc_5Entry {
  templateId: "CHARACTER_EVENT_NPC_5";
  data: Character_event_npc_5data;
}
export interface Character_event_npc_6Entry {
  templateId: "CHARACTER_EVENT_NPC_6";
  data: Character_event_npc_2data;
}
export interface Character_event_npc_7Entry {
  templateId: "CHARACTER_EVENT_NPC_7";
  data: Character_event_npc_2data;
}
export interface Character_event_npc_8datainvasionnpcdisplaysettingsavatar {
  avatarBackpack: string;
  avatarEyes: string;
  avatarGlasses: string;
  avatarGloves: string;
  avatarHair: string;
  avatarHat: string;
  avatarPants: string;
  avatarPose: string;
  avatarShirt: string;
  avatarShoes: string;
  avatarSocks: string;
  skin: number;
}
export interface Character_event_npc_8datainvasionnpcdisplaysettings {
  avatar: Character_event_npc_8datainvasionnpcdisplaysettingsavatar;
  backdropImageBundle: string;
  customCombatMusic: string;
  customIncidentMusic: string;
  iconUrl: string;
  isMale: boolean;
  modelName: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
  tutorialOnLossString: string;
}
export interface Character_event_npc_8data {
  invasionNpcDisplaySettings: Character_event_npc_8datainvasionnpcdisplaysettings;
  templateId: string;
}
export interface Character_event_npc_8Entry {
  templateId: "CHARACTER_EVENT_NPC_8";
  data: Character_event_npc_8data;
}
export interface Character_event_npc_9Entry {
  templateId: "CHARACTER_EVENT_NPC_9";
  data: Character_event_npc_10data;
}
export interface Character_event_sierra_unticketedEntry {
  templateId: "CHARACTER_EVENT_SIERRA_UNTICKETED";
  data: Character_decoy_grunt_femaledata;
}
export interface Character_executive_arloEntry {
  templateId: "CHARACTER_EXECUTIVE_ARLO";
  data: Character_decoy_grunt_maledata;
}
export interface Character_executive_cliffEntry {
  templateId: "CHARACTER_EXECUTIVE_CLIFF";
  data: Character_decoy_grunt_maledata;
}
export interface Character_executive_sierraEntry {
  templateId: "CHARACTER_EXECUTIVE_SIERRA";
  data: Character_decoy_grunt_femaledata;
}
export interface Character_explorerdatainvasionnpcdisplaysettings {
  avatar: Character_blanchedatainvasionnpcdisplaysettingsavatar;
  backdropImageBundle: string;
  iconUrl: string;
  isMale: boolean;
  modelName: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
}
export interface Character_explorerdata {
  invasionNpcDisplaySettings: Character_explorerdatainvasionnpcdisplaysettings;
  templateId: string;
}
export interface Character_explorerEntry {
  templateId: "CHARACTER_EXPLORER";
  data: Character_explorerdata;
}
export interface Character_fairy_grunt_femaleEntry {
  templateId: "CHARACTER_FAIRY_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_fairy_grunt_maleEntry {
  templateId: "CHARACTER_FAIRY_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_fighting_grunt_femaleEntry {
  templateId: "CHARACTER_FIGHTING_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_fighting_grunt_maleEntry {
  templateId: "CHARACTER_FIGHTING_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_fire_grunt_femaleEntry {
  templateId: "CHARACTER_FIRE_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_fire_grunt_maleEntry {
  templateId: "CHARACTER_FIRE_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_flying_grunt_femaleEntry {
  templateId: "CHARACTER_FLYING_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_flying_grunt_maleEntry {
  templateId: "CHARACTER_FLYING_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_ghost_grunt_femaleEntry {
  templateId: "CHARACTER_GHOST_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_ghost_grunt_maleEntry {
  templateId: "CHARACTER_GHOST_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_giovanniEntry {
  templateId: "CHARACTER_GIOVANNI";
  data: Character_decoy_grunt_maledata;
}
export interface Character_grass_grunt_femaleEntry {
  templateId: "CHARACTER_GRASS_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_grass_grunt_maleEntry {
  templateId: "CHARACTER_GRASS_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_ground_grunt_femaleEntry {
  templateId: "CHARACTER_GROUND_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_ground_grunt_maleEntry {
  templateId: "CHARACTER_GROUND_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_gruntb_femaleEntry {
  templateId: "CHARACTER_GRUNTB_FEMALE";
  data: Character_decoy_grunt_femaledata;
}
export interface Character_gruntb_maleEntry {
  templateId: "CHARACTER_GRUNTB_MALE";
  data: Character_decoy_grunt_maledata;
}
export interface Character_grunt_femaleEntry {
  templateId: "CHARACTER_GRUNT_FEMALE";
  data: Character_decoy_grunt_femaledata;
}
export interface Character_grunt_maleEntry {
  templateId: "CHARACTER_GRUNT_MALE";
  data: Character_decoy_grunt_maledata;
}
export interface Character_ice_grunt_femaleEntry {
  templateId: "CHARACTER_ICE_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_ice_grunt_maleEntry {
  templateId: "CHARACTER_ICE_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_metal_grunt_femaleEntry {
  templateId: "CHARACTER_METAL_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_metal_grunt_maleEntry {
  templateId: "CHARACTER_METAL_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_normal_grunt_femaleEntry {
  templateId: "CHARACTER_NORMAL_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_normal_grunt_maleEntry {
  templateId: "CHARACTER_NORMAL_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_poison_grunt_femaleEntry {
  templateId: "CHARACTER_POISON_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_poison_grunt_maleEntry {
  templateId: "CHARACTER_POISON_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_psychic_grunt_femaleEntry {
  templateId: "CHARACTER_PSYCHIC_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_psychic_grunt_maleEntry {
  templateId: "CHARACTER_PSYCHIC_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_rock_grunt_femaleEntry {
  templateId: "CHARACTER_ROCK_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_rock_grunt_maleEntry {
  templateId: "CHARACTER_ROCK_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_sparkEntry {
  templateId: "CHARACTER_SPARK";
  data: Character_explorerdata;
}
export interface Character_water_grunt_femaleEntry {
  templateId: "CHARACTER_WATER_GRUNT_FEMALE";
  data: Character_bug_grunt_femaledata;
}
export interface Character_water_grunt_maleEntry {
  templateId: "CHARACTER_WATER_GRUNT_MALE";
  data: Character_bug_grunt_maledata;
}
export interface Character_willowdatainvasionnpcdisplaysettings {
  avatar: Character_blanchedatainvasionnpcdisplaysettingsavatar;
  customIncidentMusic: string;
  iconUrl: string;
  modelName: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
}
export interface Character_willowdata {
  invasionNpcDisplaySettings: Character_willowdatainvasionnpcdisplaysettings;
  templateId: string;
}
export interface Character_willowEntry {
  templateId: "CHARACTER_WILLOW";
  data: Character_willowdata;
}
export interface Character_willowbEntry {
  templateId: "CHARACTER_WILLOWB";
  data: Character_willowdata;
}
export interface Client_vnext_battle_configdatavnextbattleconfigmaxbattleconfig {
  badNetworkWarningThresholdTurns: string;
  battleEndTimeoutThresholdMs: string;
  deadNetworkDisconnectThresholdTurns: string;
  noOpponentConnectionDisconnectThresholdTurns: string;
}
export interface Client_vnext_battle_configdatavnextbattleconfig {
  maxBattleConfig: Client_vnext_battle_configdatavnextbattleconfigmaxbattleconfig;
  pvpBattleConfig: Client_vnext_battle_configdatavnextbattleconfigmaxbattleconfig;
  raidsBattleConfig: Client_vnext_battle_configdatavnextbattleconfigmaxbattleconfig;
}
export interface Client_vnext_battle_configdata {
  templateId: string;
  vnextBattleConfig: Client_vnext_battle_configdatavnextbattleconfig;
}
export interface Client_vnext_battle_configEntry {
  templateId: "CLIENT_VNEXT_BATTLE_CONFIG";
  data: Client_vnext_battle_configdata;
}
export interface Combat_competitive_season_settingsdatacombatcompetitiveseasonsettings {
  rankingAdjustmentPercentage: number;
  ratingAdjustmentPercentage: number;
  seasonEndTimeTimestamp: (string)[];
}
export interface Combat_competitive_season_settingsdata {
  combatCompetitiveSeasonSettings: Combat_competitive_season_settingsdatacombatcompetitiveseasonsettings;
  templateId: string;
}
export interface Combat_competitive_season_settingsEntry {
  templateId: "COMBAT_COMPETITIVE_SEASON_SETTINGS";
  data: Combat_competitive_season_settingsdata;
}
export interface Combat_league_settingsdatacombatleaguesettings {
  combatLeagueTemplateId: (string)[];
}
export interface Combat_league_settingsdata {
  combatLeagueSettings: Combat_league_settingsdatacombatleaguesettings;
  templateId: string;
}
export interface Combat_league_settingsEntry {
  templateId: "COMBAT_LEAGUE_SETTINGS";
  data: Combat_league_settingsdata;
}
export interface Combat_settingsdatacombatsettingsclocksyncsettings {
  enabled: boolean;
  syncAttemptCount: number;
}
export interface Combat_settingsdatacombatsettingscombatfeatureflags {
  realDeviceTimeEnabled: boolean;
}
export interface Combat_settingsdatacombatsettings {
  blockedFlyoutDurationTurns: number;
  changePokemonDurationSeconds: number;
  chargeAttackBonusMultiplier: number;
  chargeScoreBase: number;
  chargeScoreExcellent: number;
  chargeScoreGreat: number;
  chargeScoreNice: number;
  clockSyncSettings: Combat_settingsdatacombatsettingsclocksyncsettings;
  combatExperiment: (string | number)[];
  combatFeatureFlags: Combat_settingsdatacombatsettingscombatfeatureflags;
  defenderMinigameMultiplier: number;
  defenseBonusMultiplier: number;
  fastAttackBonusMultiplier: number;
  flyinDurationTurns: number;
  maxEnergy: number;
  minigameBonusBaseMultiplier: number;
  minigameBonusVariableMultiplier: number;
  minigameDurationSeconds: number;
  minigameSubmitScoreDurationSeconds: number;
  normalEffectiveFlyoutDurationTurns: number;
  notVeryEffectiveFlyoutDurationTurns: number;
  obCombatSettingsNotPushedBool2: boolean;
  purifiedPokemonAttackMultiplierVsShadow: number;
  quickSwapCooldownDurationSeconds: number;
  roundDurationSeconds: number;
  sameTypeAttackBonusMultiplier: number;
  shadowPokemonAttackBonusMultiplier: number;
  shadowPokemonDefenseBonusMultiplier: number;
  showQuickSwapButtonsDuringCountdown: boolean;
  superEffectiveFlyoutDurationTurns: number;
  turnDurationSeconds: number;
}
export interface Combat_settingsdata {
  combatSettings: Combat_settingsdatacombatsettings;
  templateId: string;
}
export interface Combat_settingsEntry {
  templateId: "COMBAT_SETTINGS";
  data: Combat_settingsdata;
}
export interface Combat_stat_stage_settingsdatacombatstatstagesettings {
  attackBuffMultiplier: (number)[];
  defenseBuffMultiplier: (number)[];
  maximumStatStage: number;
  minimumStatStage: number;
}
export interface Combat_stat_stage_settingsdata {
  combatStatStageSettings: Combat_stat_stage_settingsdatacombatstatstagesettings;
  templateId: string;
}
export interface Combat_stat_stage_settingsEntry {
  templateId: "COMBAT_STAT_STAGE_SETTINGS";
  data: Combat_stat_stage_settingsdata;
}
export interface Combat_vnext_code_gateEntry {
  templateId: "COMBAT_VNEXT_CODE_GATE";
  data: Battle_accessibility_code_gatedata;
}
export interface Contest_settingsdatacontestsettingscontestlengththresholdsitem {
  length: string;
  maxDurationMs: string;
  minDurationMs: string;
}
export interface Contest_settingsdatacontestsettingscontestlimitsitemcontestmetric {
  pokemonMetric: string;
  rankingStandard: string;
}
export interface Contest_settingsdatacontestsettingscontestlimitsitem {
  contestMetric: Contest_settingsdatacontestsettingscontestlimitsitemcontestmetric;
  contestOccurrence: string;
  perContestMaxEntries: number;
}
export interface Contest_settingsdatacontestsettingscontestscorecoefficientitempokemonsize {
  heightCoefficient: number;
  ivCoefficient: number;
  weightCoefficient: number;
  xxlAdjustmentFactor: number;
}
export interface Contest_settingsdatacontestsettingscontestscorecoefficientitem {
  pokemonSize: Contest_settingsdatacontestsettingscontestscorecoefficientitempokemonsize;
}
export interface Contest_settingsdatacontestsettingscontestwarmupandcooldowndurationsmsitem {
  contestOccurrence: string;
  cycleCooldownDurationMs: string;
  cycleWarmupDurationMs: string;
}
export interface Contest_settingsdatacontestsettings {
  catchPromptTimeoutMs: number;
  contestLengthThresholds: (Contest_settingsdatacontestsettingscontestlengththresholdsitem)[];
  contestLimits: (Contest_settingsdatacontestsettingscontestlimitsitem)[];
  contestScoreCoefficient: (Contest_settingsdatacontestsettingscontestscorecoefficientitem)[];
  contestWarmupAndCooldownDurationsMs: (Contest_settingsdatacontestsettingscontestwarmupandcooldowndurationsmsitem)[];
  defaultContestMaxEntries: number;
  defaultCycleCooldownDurationMs: string;
  defaultCycleWarmupDurationMs: string;
  isAnticheatRemovalEnabled: boolean;
  isContestInNearbyMenu: boolean;
  isFeatureEnabled: boolean;
  isFriendsDisplayEnabled: boolean;
  isNormalizedScoreToSpecies: boolean;
  isPokemonScalarEnabled: boolean;
  isV2FeatureEnabled: boolean;
  isV2FocusesEnabled: boolean;
  maxCatchPromptRange: number;
  minCooldownBeforeSeasonEndMs: string;
  playerContestMaxEntries: number;
}
export interface Contest_settingsdata {
  contestSettings: Contest_settingsdatacontestsettings;
  templateId: string;
}
export interface Contest_settingsEntry {
  templateId: "CONTEST_SETTINGS";
  data: Contest_settingsdata;
}
export interface Conversation_settingsdataconversationsettingspokemonformappraisaloverridesitem {
  addToStart: boolean;
  appraisalKey: string;
  form: string;
  id: string;
}
export interface Conversation_settingsdataconversationsettings {
  pokemonFormAppraisalOverrides: (Conversation_settingsdataconversationsettingspokemonformappraisaloverridesitem)[];
}
export interface Conversation_settingsdata {
  conversationSettings: Conversation_settingsdataconversationsettings;
  templateId: string;
}
export interface Conversation_settingsEntry {
  templateId: "CONVERSATION_SETTINGS";
  data: Conversation_settingsdata;
}
export interface Cross_game_social_settingdatacrossgamesocialsettings {
  nianticProfileEnabledOverrideLevel: boolean;
  onlineStatusEnabledOverrideLevel: boolean;
}
export interface Cross_game_social_settingdata {
  crossGameSocialSettings: Cross_game_social_settingdatacrossgamesocialsettings;
  templateId: string;
}
export interface Cross_game_social_settingEntry {
  templateId: "CROSS_GAME_SOCIAL_SETTING";
  data: Cross_game_social_settingdata;
}
export interface Daily_adventure_incense_settingsdatadailyadventureincensesettingspokeballgrantlootitemitem {
  count: number;
  item: string;
}
export interface Daily_adventure_incense_settingsdatadailyadventureincensesettingspokeballgrant {
  lootItem: (Daily_adventure_incense_settingsdatadailyadventureincensesettingspokeballgrantlootitemitem)[];
}
export interface Daily_adventure_incense_settingsdatadailyadventureincensesettings {
  enabled: boolean;
  enablePushNotification: boolean;
  localDeliveryTime: string;
  pokeballGrant: Daily_adventure_incense_settingsdatadailyadventureincensesettingspokeballgrant;
  pokeballGrantThreshold: number;
  pushNotificationHourOfDay: number;
}
export interface Daily_adventure_incense_settingsdata {
  dailyAdventureIncenseSettings: Daily_adventure_incense_settingsdatadailyadventureincensesettings;
  templateId: string;
}
export interface Daily_adventure_incense_settingsEntry {
  templateId: "DAILY_ADVENTURE_INCENSE_SETTINGS";
  data: Daily_adventure_incense_settingsdata;
}
export interface Day_night_poi_feature_gateEntry {
  templateId: "DAY_NIGHT_POI_FEATURE_GATE";
  data: Admin_gm_nia_ops_only_filter_ams_feature_gatedata;
}
export interface Deep_linking_settingsdatadeeplinkingsettings {
  actionsThatExecuteBeforeMapLoads: (string | number)[];
  actionsThatIgnoreMinLevel: (string | number)[];
  iosActionButtonEnabled: boolean;
  minPlayerLevelForExternalLink: number;
  minPlayerLevelForNotificationLink: number;
}
export interface Deep_linking_settingsdata {
  deepLinkingSettings: Deep_linking_settingsdatadeeplinkingsettings;
  templateId: string;
}
export interface Deep_linking_settingsEntry {
  templateId: "DEEP_LINKING_SETTINGS";
  data: Deep_linking_settingsdata;
}
export interface Default_battle_input_buffer_settingsdatabattleinputbuffersettingsbreadinputbufferprioritylist {
  eventPriority: (string)[];
  priorityEventTypeList: (string)[];
}
export interface Default_battle_input_buffer_settingsdatabattleinputbuffersettings {
  breadInputBufferPriorityList: Default_battle_input_buffer_settingsdatabattleinputbuffersettingsbreadinputbufferprioritylist;
  combatInputBufferPriorityList: Default_battle_input_buffer_settingsdatabattleinputbuffersettingsbreadinputbufferprioritylist;
  raidsInputBufferPriorityList: Default_battle_input_buffer_settingsdatabattleinputbuffersettingsbreadinputbufferprioritylist;
}
export interface Default_battle_input_buffer_settingsdata {
  battleInputBufferSettings: Default_battle_input_buffer_settingsdatabattleinputbuffersettings;
  templateId: string;
}
export interface Default_battle_input_buffer_settingsEntry {
  templateId: "DEFAULT_BATTLE_INPUT_BUFFER_SETTINGS";
  data: Default_battle_input_buffer_settingsdata;
}
export interface Egg_hatch_improvements_settingsdataegghatchimprovementssettings {
  bootDelayMs: number;
  featureEnabled: boolean;
  raidInviteHardCapMs: number;
}
export interface Egg_hatch_improvements_settingsdata {
  eggHatchImprovementsSettings: Egg_hatch_improvements_settingsdataegghatchimprovementssettings;
  templateId: string;
}
export interface Egg_hatch_improvements_settingsEntry {
  templateId: "EGG_HATCH_IMPROVEMENTS_SETTINGS";
  data: Egg_hatch_improvements_settingsdata;
}
export interface Enable_pvp_challenge_spanner_feature_gateEntry {
  templateId: "ENABLE_PVP_CHALLENGE_SPANNER_FEATURE_GATE";
  data: Admin_gm_nia_ops_only_filter_ams_feature_gatedata;
}
export interface Encounter_settingsdataencountersettings {
  arCloseProximityThreshold: number;
  arLowAwarenessThreshold: number;
  arPlusModeEnabled: boolean;
  enableItemSelectionSliderV2: boolean;
  excellentThrowThreshold: number;
  greatThrowThreshold: number;
  milestoneThreshold: number;
  niceThrowThreshold: number;
  spinBonusThreshold: number;
}
export interface Encounter_settingsdata {
  encounterSettings: Encounter_settingsdataencountersettings;
  templateId: string;
}
export interface Encounter_settingsEntry {
  templateId: "ENCOUNTER_SETTINGS";
  data: Encounter_settingsdata;
}
export interface Event_list_feature_gateEntry {
  templateId: "EVENT_LIST_FEATURE_GATE";
  data: Admin_gm_nia_ops_only_filter_ams_feature_gatedata;
}
export interface Event_pass_april2026_seasondataeventpasssettingseventpassdisplaysettingsbonusboxesitem {
  iconType: string;
  quantity: number;
  text: string;
}
export interface Event_pass_april2026_seasondataeventpasssettingseventpassdisplaysettingseventpasstrackupgradedescriptionsitem {
  detailsLinkKey: string;
  eventDurationKey: string;
  eventPassTrackToUpgradeTo: string;
  passTrackUpgradeHeaderDescription: string;
  ranksToHighlightRewards: (number)[];
  trackUnlockImageUrl: string;
  trackUnlockPlusPointsImageUrl: string;
  trackUnlockPlusPointsSkuId: string;
  trackUnlockSkuId: string;
  upgradeDescriptionKey: string;
}
export interface Event_pass_april2026_seasondataeventpasssettingseventpassdisplaysettings {
  bonusBoxes: (Event_pass_april2026_seasondataeventpasssettingseventpassdisplaysettingsbonusboxesitem)[];
  eventPassTitleKey: string;
  eventPassTrackUpgradeDescriptions: (Event_pass_april2026_seasondataeventpasssettingseventpassdisplaysettingseventpasstrackupgradedescriptionsitem)[];
  headerIconUrl: string;
  premiumRewardBannerBottom: string;
  premiumRewardBannerImageUrl: string;
  premiumRewardBannerMiddle: string;
  premiumRewardBannerTop: string;
  premiumRewardsDescription: string;
  sectionDisplayPriority: number;
  todayViewSection: string;
}
export interface Event_pass_april2026_seasondataeventpasssettingstrackconditionsitem {
  badge?: string;
  track: string;
  trackTitleKey: string;
}
export interface Event_pass_april2026_seasondataeventpasssettings {
  additionalBonusTiersLevel: number;
  eventPassDisplaySettings: Event_pass_april2026_seasondataeventpasssettingseventpassdisplaysettings;
  expirationTime: string;
  gracePeriodEndTime: string;
  maxTierLevel: number;
  pointsItemId: string;
  prefix: string;
  trackConditions: (Event_pass_april2026_seasondataeventpasssettingstrackconditionsitem)[];
}
export interface Event_pass_april2026_seasondata {
  eventPassSettings: Event_pass_april2026_seasondataeventpasssettings;
  templateId: string;
}
export interface Event_pass_april2026_seasonEntry {
  templateId: "EVENT_PASS_APRIL2026_SEASON";
  data: Event_pass_april2026_seasondata;
}
export interface Event_pass_bonus_ranks_feature_gateEntry {
  templateId: "EVENT_PASS_BONUS_RANKS_FEATURE_GATE";
  data: Admin_gm_nia_ops_only_filter_ams_feature_gatedata;
}
export interface Event_pass_milestone_rewards_feature_gateEntry {
  templateId: "EVENT_PASS_MILESTONE_REWARDS_FEATURE_GATE";
  data: Admin_gm_nia_ops_only_filter_ams_feature_gatedata;
}
export interface Event_pass_sustainability2026_eventEntry {
  templateId: "EVENT_PASS_SUSTAINABILITY2026_EVENT";
  data: Event_pass_april2026_seasondata;
}
export interface Event_planner_popular_raid_rsvp_settingsdataeventplannerpopularnotificationsettings {
  battleLevels: (number)[];
  firstScanOffsetSeconds: string;
  maxNotifPerDay: number;
  nearbyPoiThreshold: number;
  notifDelayIntervalsSeconds: string;
  ruralThreshold: number;
  scanIntervalSeconds: string;
  timeslotBufferWindowSeconds: string;
  urbanThreshold: number;
}
export interface Event_planner_popular_raid_rsvp_settingsdata {
  eventPlannerPopularNotificationSettings: Event_planner_popular_raid_rsvp_settingsdataeventplannerpopularnotificationsettings;
  templateId: string;
}
export interface Event_planner_popular_raid_rsvp_settingsEntry {
  templateId: "EVENT_PLANNER_POPULAR_RAID_RSVP_SETTINGS";
  data: Event_planner_popular_raid_rsvp_settingsdata;
}
export interface Event_planner_settingsdataplannersettingseventsettingsitemmessagetimingitem {
  messageSendBeforeEventSeconds?: number;
  messageSendTime: string;
}
export interface Event_planner_settingsdataplannersettingseventsettingsitem {
  eventType?: string;
  maxRsvpsPerSlot: number;
  maxTimeslots: number;
  messageTiming: (Event_planner_settingsdataplannersettingseventsettingsitemmessagetimingitem)[];
  rsvpBonusTimeWindowMinutes: number;
  rsvpClearInventoryMinutes: number;
  rsvpInviteEnabled: boolean;
  rsvpTimeslotDurationSeconds: number;
  timeslotGapSeconds: number;
}
export interface Event_planner_settingsdataplannersettings {
  activeReminderTimeSeconds: number;
  enabled: boolean;
  eventSettings: (Event_planner_settingsdataplannersettingseventsettingsitem)[];
  maxPendingRsvpInvites: number;
  maxRsvpDisplayDistanceM: number;
  maxRsvpInvites: number;
  maxRsvpsPerTrainer: number;
  nearbyRsvpTabEnabled: boolean;
  rsvpCountGeoPushGatewayNamespace: string;
  rsvpCountPushGatewayNamespace: string;
  rsvpCountTopperPollingTimeSeconds: number;
  rsvpCountUpdateTimeSeconds: number;
  sendRsvpInviteEnabled: boolean;
}
export interface Event_planner_settingsdata {
  plannerSettings: Event_planner_settingsdataplannersettings;
  templateId: string;
}
export interface Event_planner_settingsEntry {
  templateId: "EVENT_PLANNER_SETTINGS";
  data: Event_planner_settingsdata;
}
export interface Evolution_v0052_pokemon_meowthdataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem {
  form?: string;
  pokemon: string;
}
export interface Evolution_v0052_pokemon_meowthdataevolutionchaindisplaysettingsevolutionchainsitem {
  evolutionInfos: (Evolution_v0052_pokemon_meowthdataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem)[];
  headerMessage?: string;
}
export interface Evolution_v0052_pokemon_meowthdataevolutionchaindisplaysettings {
  evolutionChains: (Evolution_v0052_pokemon_meowthdataevolutionchaindisplaysettingsevolutionchainsitem)[];
  pokemon: string;
}
export interface Evolution_v0052_pokemon_meowthdata {
  evolutionChainDisplaySettings: Evolution_v0052_pokemon_meowthdataevolutionchaindisplaysettings;
  templateId: string;
}
export interface Evolution_v0052_pokemon_meowthEntry {
  templateId: "EVOLUTION_V0052_POKEMON_MEOWTH";
  data: Evolution_v0052_pokemon_meowthdata;
}
export interface Evolution_v0083_pokemon_farfetchdEntry {
  templateId: "EVOLUTION_V0083_POKEMON_FARFETCHD";
  data: Evolution_v0052_pokemon_meowthdata;
}
export interface Evolution_v0122_pokemon_mr_mimeEntry {
  templateId: "EVOLUTION_V0122_POKEMON_MR_MIME";
  data: Evolution_v0052_pokemon_meowthdata;
}
export interface Evolution_v0123_pokemon_scytherdataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem {
  pokemon: string;
}
export interface Evolution_v0123_pokemon_scytherdataevolutionchaindisplaysettingsevolutionchainsitem {
  evolutionInfos: (Evolution_v0123_pokemon_scytherdataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem)[];
}
export interface Evolution_v0123_pokemon_scytherdataevolutionchaindisplaysettings {
  evolutionChains: (Evolution_v0123_pokemon_scytherdataevolutionchaindisplaysettingsevolutionchainsitem)[];
  pokemon: string;
}
export interface Evolution_v0123_pokemon_scytherdata {
  evolutionChainDisplaySettings: Evolution_v0123_pokemon_scytherdataevolutionchaindisplaysettings;
  templateId: string;
}
export interface Evolution_v0123_pokemon_scytherEntry {
  templateId: "EVOLUTION_V0123_POKEMON_SCYTHER";
  data: Evolution_v0123_pokemon_scytherdata;
}
export interface Evolution_v0150_pokemon_mewtwodataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem {
  gender: string;
  pokemon: string;
}
export interface Evolution_v0150_pokemon_mewtwodataevolutionchaindisplaysettingsevolutionchainsitem {
  evolutionInfos: (Evolution_v0150_pokemon_mewtwodataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem)[];
}
export interface Evolution_v0150_pokemon_mewtwodataevolutionchaindisplaysettings {
  evolutionChains: (Evolution_v0150_pokemon_mewtwodataevolutionchaindisplaysettingsevolutionchainsitem)[];
  pokemon: string;
}
export interface Evolution_v0150_pokemon_mewtwodata {
  evolutionChainDisplaySettings: Evolution_v0150_pokemon_mewtwodataevolutionchaindisplaysettings;
  templateId: string;
}
export interface Evolution_v0150_pokemon_mewtwoEntry {
  templateId: "EVOLUTION_V0150_POKEMON_MEWTWO";
  data: Evolution_v0150_pokemon_mewtwodata;
}
export interface Evolution_v0155_pokemon_cyndaquilEntry {
  templateId: "EVOLUTION_V0155_POKEMON_CYNDAQUIL";
  data: Evolution_v0123_pokemon_scytherdata;
}
export interface Evolution_v0156_pokemon_quilavaEntry {
  templateId: "EVOLUTION_V0156_POKEMON_QUILAVA";
  data: Evolution_v0123_pokemon_scytherdata;
}
export interface Evolution_v0157_pokemon_typhlosionEntry {
  templateId: "EVOLUTION_V0157_POKEMON_TYPHLOSION";
  data: Evolution_v0123_pokemon_scytherdata;
}
export interface Evolution_v0194_pokemon_wooperEntry {
  templateId: "EVOLUTION_V0194_POKEMON_WOOPER";
  data: Evolution_v0052_pokemon_meowthdata;
}
export interface Evolution_v0211_pokemon_qwilfishEntry {
  templateId: "EVOLUTION_V0211_POKEMON_QWILFISH";
  data: Evolution_v0052_pokemon_meowthdata;
}
export interface Evolution_v0215_pokemon_sneaselEntry {
  templateId: "EVOLUTION_V0215_POKEMON_SNEASEL";
  data: Evolution_v0052_pokemon_meowthdata;
}
export interface Evolution_v0222_pokemon_corsolaEntry {
  templateId: "EVOLUTION_V0222_POKEMON_CORSOLA";
  data: Evolution_v0052_pokemon_meowthdata;
}
export interface Evolution_v0234_pokemon_stantlerEntry {
  templateId: "EVOLUTION_V0234_POKEMON_STANTLER";
  data: Evolution_v0123_pokemon_scytherdata;
}
export interface Evolution_v0263_pokemon_zigzagoonEntry {
  templateId: "EVOLUTION_V0263_POKEMON_ZIGZAGOON";
  data: Evolution_v0052_pokemon_meowthdata;
}
export interface Evolution_v0264_pokemon_linooneEntry {
  templateId: "EVOLUTION_V0264_POKEMON_LINOONE";
  data: Evolution_v0052_pokemon_meowthdata;
}
export interface Evolution_v0290_pokemon_nincadadataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem {
  form: string;
  pokemon: string;
}
export interface Evolution_v0290_pokemon_nincadadataevolutionchaindisplaysettingsevolutionchainsitem {
  evolutionInfos: (Evolution_v0290_pokemon_nincadadataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem)[];
}
export interface Evolution_v0290_pokemon_nincadadataevolutionchaindisplaysettings {
  evolutionChains: (Evolution_v0290_pokemon_nincadadataevolutionchaindisplaysettingsevolutionchainsitem)[];
  pokemon: string;
}
export interface Evolution_v0290_pokemon_nincadadata {
  evolutionChainDisplaySettings: Evolution_v0290_pokemon_nincadadataevolutionchaindisplaysettings;
  templateId: string;
}
export interface Evolution_v0290_pokemon_nincadaEntry {
  templateId: "EVOLUTION_V0290_POKEMON_NINCADA";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0412_pokemon_burmydataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem {
  form?: string;
  gender?: string;
  pokemon: string;
}
export interface Evolution_v0412_pokemon_burmydataevolutionchaindisplaysettingsevolutionchainsitem {
  evolutionInfos: (Evolution_v0412_pokemon_burmydataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem)[];
  headerMessage?: string;
}
export interface Evolution_v0412_pokemon_burmydataevolutionchaindisplaysettings {
  evolutionChains: (Evolution_v0412_pokemon_burmydataevolutionchaindisplaysettingsevolutionchainsitem)[];
  pokemon: string;
}
export interface Evolution_v0412_pokemon_burmydata {
  evolutionChainDisplaySettings: Evolution_v0412_pokemon_burmydataevolutionchaindisplaysettings;
  templateId: string;
}
export interface Evolution_v0412_pokemon_burmyEntry {
  templateId: "EVOLUTION_V0412_POKEMON_BURMY";
  data: Evolution_v0412_pokemon_burmydata;
}
export interface Evolution_v0413_pokemon_wormadamdataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem {
  form: string;
  gender?: string;
  pokemon: string;
}
export interface Evolution_v0413_pokemon_wormadamdataevolutionchaindisplaysettingsevolutionchainsitem {
  evolutionInfos: (Evolution_v0413_pokemon_wormadamdataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem)[];
  headerMessage?: string;
}
export interface Evolution_v0413_pokemon_wormadamdataevolutionchaindisplaysettings {
  evolutionChains: (Evolution_v0413_pokemon_wormadamdataevolutionchaindisplaysettingsevolutionchainsitem)[];
  pokemon: string;
}
export interface Evolution_v0413_pokemon_wormadamdata {
  evolutionChainDisplaySettings: Evolution_v0413_pokemon_wormadamdataevolutionchaindisplaysettings;
  templateId: string;
}
export interface Evolution_v0413_pokemon_wormadamEntry {
  templateId: "EVOLUTION_V0413_POKEMON_WORMADAM";
  data: Evolution_v0413_pokemon_wormadamdata;
}
export interface Evolution_v0414_pokemon_mothimEntry {
  templateId: "EVOLUTION_V0414_POKEMON_MOTHIM";
  data: Evolution_v0412_pokemon_burmydata;
}
export interface Evolution_v0420_pokemon_cherubidataevolutionchaindisplaysettingsevolutionchainsitem {
  evolutionInfos: (Evolution_v0052_pokemon_meowthdataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem)[];
}
export interface Evolution_v0420_pokemon_cherubidataevolutionchaindisplaysettings {
  evolutionChains: (Evolution_v0420_pokemon_cherubidataevolutionchaindisplaysettingsevolutionchainsitem)[];
  pokemon: string;
}
export interface Evolution_v0420_pokemon_cherubidata {
  evolutionChainDisplaySettings: Evolution_v0420_pokemon_cherubidataevolutionchaindisplaysettings;
  templateId: string;
}
export interface Evolution_v0420_pokemon_cherubiEntry {
  templateId: "EVOLUTION_V0420_POKEMON_CHERUBI";
  data: Evolution_v0420_pokemon_cherubidata;
}
export interface Evolution_v0421_pokemon_cherrimEntry {
  templateId: "EVOLUTION_V0421_POKEMON_CHERRIM";
  data: Evolution_v0420_pokemon_cherubidata;
}
export interface Evolution_v0422_pokemon_shellosEntry {
  templateId: "EVOLUTION_V0422_POKEMON_SHELLOS";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0423_pokemon_gastrodonEntry {
  templateId: "EVOLUTION_V0423_POKEMON_GASTRODON";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0449_pokemon_hippopotasdataevolutionchaindisplaysettingsevolutionchainsitem {
  evolutionInfos: (Evolution_v0150_pokemon_mewtwodataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem)[];
  headerMessage: string;
}
export interface Evolution_v0449_pokemon_hippopotasdataevolutionchaindisplaysettings {
  evolutionChains: (Evolution_v0449_pokemon_hippopotasdataevolutionchaindisplaysettingsevolutionchainsitem)[];
  pokemon: string;
}
export interface Evolution_v0449_pokemon_hippopotasdata {
  evolutionChainDisplaySettings: Evolution_v0449_pokemon_hippopotasdataevolutionchaindisplaysettings;
  templateId: string;
}
export interface Evolution_v0449_pokemon_hippopotasEntry {
  templateId: "EVOLUTION_V0449_POKEMON_HIPPOPOTAS";
  data: Evolution_v0449_pokemon_hippopotasdata;
}
export interface Evolution_v0450_pokemon_hippowdonEntry {
  templateId: "EVOLUTION_V0450_POKEMON_HIPPOWDON";
  data: Evolution_v0449_pokemon_hippopotasdata;
}
export interface Evolution_v0501_pokemon_oshawottEntry {
  templateId: "EVOLUTION_V0501_POKEMON_OSHAWOTT";
  data: Evolution_v0123_pokemon_scytherdata;
}
export interface Evolution_v0502_pokemon_dewottEntry {
  templateId: "EVOLUTION_V0502_POKEMON_DEWOTT";
  data: Evolution_v0123_pokemon_scytherdata;
}
export interface Evolution_v0503_pokemon_samurottEntry {
  templateId: "EVOLUTION_V0503_POKEMON_SAMUROTT";
  data: Evolution_v0123_pokemon_scytherdata;
}
export interface Evolution_v0519_pokemon_pidoveEntry {
  templateId: "EVOLUTION_V0519_POKEMON_PIDOVE";
  data: Evolution_v0449_pokemon_hippopotasdata;
}
export interface Evolution_v0520_pokemon_tranquillEntry {
  templateId: "EVOLUTION_V0520_POKEMON_TRANQUILL";
  data: Evolution_v0449_pokemon_hippopotasdata;
}
export interface Evolution_v0521_pokemon_unfezantEntry {
  templateId: "EVOLUTION_V0521_POKEMON_UNFEZANT";
  data: Evolution_v0449_pokemon_hippopotasdata;
}
export interface Evolution_v0550_pokemon_basculinEntry {
  templateId: "EVOLUTION_V0550_POKEMON_BASCULIN";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0554_pokemon_darumakaEntry {
  templateId: "EVOLUTION_V0554_POKEMON_DARUMAKA";
  data: Evolution_v0052_pokemon_meowthdata;
}
export interface Evolution_v0562_pokemon_yamaskEntry {
  templateId: "EVOLUTION_V0562_POKEMON_YAMASK";
  data: Evolution_v0052_pokemon_meowthdata;
}
export interface Evolution_v0585_pokemon_deerlingEntry {
  templateId: "EVOLUTION_V0585_POKEMON_DEERLING";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0586_pokemon_sawsbuckEntry {
  templateId: "EVOLUTION_V0586_POKEMON_SAWSBUCK";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0592_pokemon_frillishdataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem {
  form: string;
  gender: string;
  pokemon: string;
}
export interface Evolution_v0592_pokemon_frillishdataevolutionchaindisplaysettingsevolutionchainsitem {
  evolutionInfos: (Evolution_v0592_pokemon_frillishdataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem)[];
  headerMessage: string;
}
export interface Evolution_v0592_pokemon_frillishdataevolutionchaindisplaysettings {
  evolutionChains: (Evolution_v0592_pokemon_frillishdataevolutionchaindisplaysettingsevolutionchainsitem)[];
  pokemon: string;
}
export interface Evolution_v0592_pokemon_frillishdata {
  evolutionChainDisplaySettings: Evolution_v0592_pokemon_frillishdataevolutionchaindisplaysettings;
  templateId: string;
}
export interface Evolution_v0592_pokemon_frillishEntry {
  templateId: "EVOLUTION_V0592_POKEMON_FRILLISH";
  data: Evolution_v0592_pokemon_frillishdata;
}
export interface Evolution_v0593_pokemon_jellicentEntry {
  templateId: "EVOLUTION_V0593_POKEMON_JELLICENT";
  data: Evolution_v0592_pokemon_frillishdata;
}
export interface Evolution_v0664_pokemon_scatterbugEntry {
  templateId: "EVOLUTION_V0664_POKEMON_SCATTERBUG";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0665_pokemon_spewpaEntry {
  templateId: "EVOLUTION_V0665_POKEMON_SPEWPA";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0666_pokemon_vivillonEntry {
  templateId: "EVOLUTION_V0666_POKEMON_VIVILLON";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0667_pokemon_litleodataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem {
  form?: string;
  gender: string;
  pokemon: string;
}
export interface Evolution_v0667_pokemon_litleodataevolutionchaindisplaysettingsevolutionchainsitem {
  evolutionInfos: (Evolution_v0667_pokemon_litleodataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem)[];
  headerMessage: string;
}
export interface Evolution_v0667_pokemon_litleodataevolutionchaindisplaysettings {
  evolutionChains: (Evolution_v0667_pokemon_litleodataevolutionchaindisplaysettingsevolutionchainsitem)[];
  pokemon: string;
}
export interface Evolution_v0667_pokemon_litleodata {
  evolutionChainDisplaySettings: Evolution_v0667_pokemon_litleodataevolutionchaindisplaysettings;
  templateId: string;
}
export interface Evolution_v0667_pokemon_litleoEntry {
  templateId: "EVOLUTION_V0667_POKEMON_LITLEO";
  data: Evolution_v0667_pokemon_litleodata;
}
export interface Evolution_v0668_pokemon_pyroarEntry {
  templateId: "EVOLUTION_V0668_POKEMON_PYROAR";
  data: Evolution_v0667_pokemon_litleodata;
}
export interface Evolution_v0669_pokemon_flabebeEntry {
  templateId: "EVOLUTION_V0669_POKEMON_FLABEBE";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0670_pokemon_floetteEntry {
  templateId: "EVOLUTION_V0670_POKEMON_FLOETTE";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0671_pokemon_florgesEntry {
  templateId: "EVOLUTION_V0671_POKEMON_FLORGES";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0677_pokemon_espurrEntry {
  templateId: "EVOLUTION_V0677_POKEMON_ESPURR";
  data: Evolution_v0667_pokemon_litleodata;
}
export interface Evolution_v0678_pokemon_meowsticEntry {
  templateId: "EVOLUTION_V0678_POKEMON_MEOWSTIC";
  data: Evolution_v0667_pokemon_litleodata;
}
export interface Evolution_v0679_pokemon_honedgeEntry {
  templateId: "EVOLUTION_V0679_POKEMON_HONEDGE";
  data: Evolution_v0420_pokemon_cherubidata;
}
export interface Evolution_v0680_pokemon_doubladeEntry {
  templateId: "EVOLUTION_V0680_POKEMON_DOUBLADE";
  data: Evolution_v0420_pokemon_cherubidata;
}
export interface Evolution_v0681_pokemon_aegislashEntry {
  templateId: "EVOLUTION_V0681_POKEMON_AEGISLASH";
  data: Evolution_v0420_pokemon_cherubidata;
}
export interface Evolution_v0710_pokemon_pumpkabooEntry {
  templateId: "EVOLUTION_V0710_POKEMON_PUMPKABOO";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0711_pokemon_gourgeistEntry {
  templateId: "EVOLUTION_V0711_POKEMON_GOURGEIST";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0718_pokemon_zygardeEntry {
  templateId: "EVOLUTION_V0718_POKEMON_ZYGARDE";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0722_pokemon_rowletEntry {
  templateId: "EVOLUTION_V0722_POKEMON_ROWLET";
  data: Evolution_v0123_pokemon_scytherdata;
}
export interface Evolution_v0723_pokemon_dartrixEntry {
  templateId: "EVOLUTION_V0723_POKEMON_DARTRIX";
  data: Evolution_v0123_pokemon_scytherdata;
}
export interface Evolution_v0724_pokemon_decidueyeEntry {
  templateId: "EVOLUTION_V0724_POKEMON_DECIDUEYE";
  data: Evolution_v0123_pokemon_scytherdata;
}
export interface Evolution_v0744_pokemon_rockruffEntry {
  templateId: "EVOLUTION_V0744_POKEMON_ROCKRUFF";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0745_pokemon_lycanrocEntry {
  templateId: "EVOLUTION_V0745_POKEMON_LYCANROC";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0800_pokemon_necrozmaEntry {
  templateId: "EVOLUTION_V0800_POKEMON_NECROZMA";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0848_pokemon_toxelEntry {
  templateId: "EVOLUTION_V0848_POKEMON_TOXEL";
  data: Evolution_v0420_pokemon_cherubidata;
}
export interface Evolution_v0849_pokemon_toxtricityEntry {
  templateId: "EVOLUTION_V0849_POKEMON_TOXTRICITY";
  data: Evolution_v0420_pokemon_cherubidata;
}
export interface Evolution_v0862_pokemon_obstagoonEntry {
  templateId: "EVOLUTION_V0862_POKEMON_OBSTAGOON";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0863_pokemon_perrserkerEntry {
  templateId: "EVOLUTION_V0863_POKEMON_PERRSERKER";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0864_pokemon_cursolaEntry {
  templateId: "EVOLUTION_V0864_POKEMON_CURSOLA";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0865_pokemon_sirfetchdEntry {
  templateId: "EVOLUTION_V0865_POKEMON_SIRFETCHD";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0866_pokemon_mr_rimeEntry {
  templateId: "EVOLUTION_V0866_POKEMON_MR_RIME";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0867_pokemon_runerigusEntry {
  templateId: "EVOLUTION_V0867_POKEMON_RUNERIGUS";
  data: Evolution_v0290_pokemon_nincadadata;
}
export interface Evolution_v0899_pokemon_wyrdeerdata {
  evolutionChainDisplaySettings: Evolution_v0123_pokemon_scytherdataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem;
  templateId: string;
}
export interface Evolution_v0899_pokemon_wyrdeerEntry {
  templateId: "EVOLUTION_V0899_POKEMON_WYRDEER";
  data: Evolution_v0899_pokemon_wyrdeerdata;
}
export interface Evolution_v0900_pokemon_kleavorEntry {
  templateId: "EVOLUTION_V0900_POKEMON_KLEAVOR";
  data: Evolution_v0123_pokemon_scytherdata;
}
export interface Evolution_v0903_pokemon_sneaslerEntry {
  templateId: "EVOLUTION_V0903_POKEMON_SNEASLER";
  data: Evolution_v0420_pokemon_cherubidata;
}
export interface Evolution_v0904_pokemon_overqwilEntry {
  templateId: "EVOLUTION_V0904_POKEMON_OVERQWIL";
  data: Evolution_v0420_pokemon_cherubidata;
}
export interface Evolution_v0915_pokemon_lechonkEntry {
  templateId: "EVOLUTION_V0915_POKEMON_LECHONK";
  data: Evolution_v0667_pokemon_litleodata;
}
export interface Evolution_v0916_pokemon_oinkologneEntry {
  templateId: "EVOLUTION_V0916_POKEMON_OINKOLOGNE";
  data: Evolution_v0667_pokemon_litleodata;
}
export interface Evolution_v0924_pokemon_tandemausEntry {
  templateId: "EVOLUTION_V0924_POKEMON_TANDEMAUS";
  data: Evolution_v0420_pokemon_cherubidata;
}
export interface Evolution_v0925_pokemon_mausholdEntry {
  templateId: "EVOLUTION_V0925_POKEMON_MAUSHOLD";
  data: Evolution_v0420_pokemon_cherubidata;
}
export interface Evolution_v0980_pokemon_clodsireEntry {
  templateId: "EVOLUTION_V0980_POKEMON_CLODSIRE";
  data: Evolution_v0420_pokemon_cherubidata;
}
export interface Evolution_v1012_pokemon_poltchageistdataevolutionchaindisplaysettingsevolutionchainsitem {
  evolutionInfos: (Evolution_v0290_pokemon_nincadadataevolutionchaindisplaysettingsevolutionchainsitemevolutioninfositem)[];
  headerMessage: string;
}
export interface Evolution_v1012_pokemon_poltchageistdataevolutionchaindisplaysettings {
  evolutionChains: (Evolution_v1012_pokemon_poltchageistdataevolutionchaindisplaysettingsevolutionchainsitem)[];
  pokemon: string;
}
export interface Evolution_v1012_pokemon_poltchageistdata {
  evolutionChainDisplaySettings: Evolution_v1012_pokemon_poltchageistdataevolutionchaindisplaysettings;
  templateId: string;
}
export interface Evolution_v1012_pokemon_poltchageistEntry {
  templateId: "EVOLUTION_V1012_POKEMON_POLTCHAGEIST";
  data: Evolution_v1012_pokemon_poltchageistdata;
}
export interface Evolution_v1013_pokemon_sinistchaEntry {
  templateId: "EVOLUTION_V1013_POKEMON_SINISTCHA";
  data: Evolution_v1012_pokemon_poltchageistdata;
}
export interface External_addressable_assets_settingsdataexternaladdressableassetssettings {

}
export interface External_addressable_assets_settingsdata {
  externalAddressableAssetsSettings: External_addressable_assets_settingsdataexternaladdressableassetssettings;
  templateId: string;
}
export interface External_addressable_assets_settingsEntry {
  templateId: "EXTERNAL_ADDRESSABLE_ASSETS_SETTINGS";
  data: External_addressable_assets_settingsdata;
}
export interface Feature_unlock_level_settingsdatafeatureunlocklevelsettings {
  luresUnlockLevel: number;
  rareCandyConversionUnlockLevel: number;
}
export interface Feature_unlock_level_settingsdata {
  featureUnlockLevelSettings: Feature_unlock_level_settingsdatafeatureunlocklevelsettings;
  templateId: string;
}
export interface Feature_unlock_level_settingsEntry {
  templateId: "FEATURE_UNLOCK_LEVEL_SETTINGS";
  data: Feature_unlock_level_settingsdata;
}
export interface Fort_power_up_level_0data {
  fortPowerUpLevelSettings: Buddy_level_0databuddylevelsettings;
  templateId: string;
}
export interface Fort_power_up_level_0Entry {
  templateId: "FORT_POWER_UP_LEVEL_0";
  data: Fort_power_up_level_0data;
}
export interface Fort_power_up_level_1datafortpoweruplevelsettings {
  additionalLevelPowerupDurationMs: number;
  level: string;
  minPowerUpPointsRequired: number;
  powerupLevelRewards: (string)[];
}
export interface Fort_power_up_level_1data {
  fortPowerUpLevelSettings: Fort_power_up_level_1datafortpoweruplevelsettings;
  templateId: string;
}
export interface Fort_power_up_level_1Entry {
  templateId: "FORT_POWER_UP_LEVEL_1";
  data: Fort_power_up_level_1data;
}
export interface Fort_power_up_level_2Entry {
  templateId: "FORT_POWER_UP_LEVEL_2";
  data: Fort_power_up_level_1data;
}
export interface Fort_power_up_level_3Entry {
  templateId: "FORT_POWER_UP_LEVEL_3";
  data: Fort_power_up_level_1data;
}
export interface Friendship_level_0datafriendshipmilestonesettings {
  attackBonusPercentage: number;
  milestoneXpReward: number;
  unlockedTrading: (string)[];
}
export interface Friendship_level_0data {
  friendshipMilestoneSettings: Friendship_level_0datafriendshipmilestonesettings;
  templateId: string;
}
export interface Friendship_level_0Entry {
  templateId: "FRIENDSHIP_LEVEL_0";
  data: Friendship_level_0data;
}
export interface Friendship_level_1datafriendshipmilestonesettings {
  attackBonusPercentage: number;
  milestoneXpReward: number;
  minPointsToReach: number;
  unlockedTrading: (string)[];
}
export interface Friendship_level_1data {
  friendshipMilestoneSettings: Friendship_level_1datafriendshipmilestonesettings;
  templateId: string;
}
export interface Friendship_level_1Entry {
  templateId: "FRIENDSHIP_LEVEL_1";
  data: Friendship_level_1data;
}
export interface Friendship_level_2datafriendshipmilestonesettings {
  attackBonusPercentage: number;
  milestoneXpReward: number;
  minPointsToReach: number;
  raidBallBonus: number;
  tradingDiscount: number;
  unlockedLuckyFriendApplicator: boolean;
  unlockedTrading: (string)[];
}
export interface Friendship_level_2data {
  friendshipMilestoneSettings: Friendship_level_2datafriendshipmilestonesettings;
  templateId: string;
}
export interface Friendship_level_2Entry {
  templateId: "FRIENDSHIP_LEVEL_2";
  data: Friendship_level_2data;
}
export interface Friendship_level_3Entry {
  templateId: "FRIENDSHIP_LEVEL_3";
  data: Friendship_level_2data;
}
export interface Friendship_level_4Entry {
  templateId: "FRIENDSHIP_LEVEL_4";
  data: Friendship_level_2data;
}
export interface Friendship_level_5datafriendshipmilestonesettings {
  attackBonusPercentage: number;
  milestoneXpReward: number;
  minPointsToReach: number;
  raidBallBonus: number;
  relativePointsToReach: number;
  tradingDiscount: number;
  unlockedLuckyFriendApplicator: boolean;
  unlockedTrading: (string)[];
}
export interface Friendship_level_5data {
  friendshipMilestoneSettings: Friendship_level_5datafriendshipmilestonesettings;
  templateId: string;
}
export interface Friendship_level_5Entry {
  templateId: "FRIENDSHIP_LEVEL_5";
  data: Friendship_level_5data;
}
export interface Geotargeted_quest_settingsdatageotargetedquestsettings {
  enableGeotargetedQuests: boolean;
}
export interface Geotargeted_quest_settingsdata {
  geotargetedQuestSettings: Geotargeted_quest_settingsdatageotargetedquestsettings;
  templateId: string;
}
export interface Geotargeted_quest_settingsEntry {
  templateId: "GEOTARGETED_QUEST_SETTINGS";
  data: Geotargeted_quest_settingsdata;
}
export interface Gifting_settingsdatagiftingsettingsstardustmultiplieritem {
  multiplier: number;
  randomWeight: number;
}
export interface Gifting_settingsdatagiftingsettings {
  enableGiftToStardust: boolean;
  flowPolishEnabled: boolean;
  multiMajorRewardUiEnabled: boolean;
  stardustMultiplier: (Gifting_settingsdatagiftingsettingsstardustmultiplieritem)[];
  stardustPerGift: number;
}
export interface Gifting_settingsdata {
  giftingSettings: Gifting_settingsdatagiftingsettings;
  templateId: string;
}
export interface Gifting_settingsEntry {
  templateId: "GIFTING_SETTINGS";
  data: Gifting_settingsdata;
}
export interface Gui_search_settingsdataguisearchsettings {
  completeStartLetterCountPerLanguage: (string)[];
  guiSearchEnabled: boolean;
  maxNumberFavoriteSearches: number;
  maxNumberRecentSearches: number;
  maxQueryLength: number;
  searchHelpUrl: string;
}
export interface Gui_search_settingsdata {
  guiSearchSettings: Gui_search_settingsdataguisearchsettings;
  templateId: string;
}
export interface Gui_search_settingsEntry {
  templateId: "GUI_SEARCH_SETTINGS";
  data: Gui_search_settingsdata;
}
export interface Gym_badge_settingsdatagymbadgesettings {
  battleWinningScorePerDefenderCp: number;
  berryFeedingScore: number;
  gymDefendingScorePerMinute: number;
  loseAllBattlesScore: number;
  pokemonDeployScore: number;
  raidBattleWinningScore: number;
  target: (number)[];
}
export interface Gym_badge_settingsdata {
  gymBadgeSettings: Gym_badge_settingsdatagymbadgesettings;
  templateId: string;
}
export interface Gym_badge_settingsEntry {
  templateId: "GYM_BADGE_SETTINGS";
  data: Gym_badge_settingsdata;
}
export interface Haptics_settingsdatahapticssettings {
  advancedHapticsEnabled: boolean;
}
export interface Haptics_settingsdata {
  hapticsSettings: Haptics_settingsdatahapticssettings;
  templateId: string;
}
export interface Haptics_settingsEntry {
  templateId: "HAPTICS_SETTINGS";
  data: Haptics_settingsdata;
}
export interface Heal_toast_feature_gateEntry {
  templateId: "HEAL_TOAST_FEATURE_GATE";
  data: Admin_gm_nia_ops_only_filter_ams_feature_gatedata;
}
export interface Hindidatalanguagesettings {
  isEnabled: boolean;
  language: string;
}
export interface Hindidata {
  languageSettings: Hindidatalanguagesettings;
  templateId: string;
}
export interface HindiEntry {
  templateId: "Hindi";
  data: Hindidata;
}
export interface Iap_settingsdataiapsettings {
  dailyDefenderBonusCurrency: (string)[];
  dailyDefenderBonusMaxDefenders: number;
  dailyDefenderBonusPerPokemon: (number)[];
  minTimeBetweenClaimsMs: string;
  prohibitPurchaseInTestEnvirnment: boolean;
}
export interface Iap_settingsdata {
  iapSettings: Iap_settingsdataiapsettings;
  templateId: string;
}
export interface Iap_settingsEntry {
  templateId: "IAP_SETTINGS";
  data: Iap_settingsdata;
}
export interface Ibfc_lightweight_settingsdataibfclightweightsettings {
  defaultDefenseMultiplier: number;
  defaultDefenseOverride: number;
  defaultEnergyChargeOverride: number;
  defaultStaminaOverride: number;
}
export interface Ibfc_lightweight_settingsdata {
  ibfcLightweightSettings: Ibfc_lightweight_settingsdataibfclightweightsettings;
  templateId: string;
}
export interface Ibfc_lightweight_settingsEntry {
  templateId: "IBFC_LIGHTWEIGHT_SETTINGS";
  data: Ibfc_lightweight_settingsdata;
}
export interface Ibfc_lws_code_gatedatacodegateproto {
  isEnabled: boolean;
}
export interface Ibfc_lws_code_gatedata {
  codeGateProto: Ibfc_lws_code_gatedatacodegateproto;
  templateId: string;
}
export interface Ibfc_lws_code_gateEntry {
  templateId: "IBFC_LWS_CODE_GATE";
  data: Ibfc_lws_code_gatedata;
}
export interface Incident_priority_settingsdataincidentprioritysettingsincidentpriorityitem {
  displayType: string;
  priority: number;
}
export interface Incident_priority_settingsdataincidentprioritysettings {
  incidentPriority: (Incident_priority_settingsdataincidentprioritysettingsincidentpriorityitem)[];
}
export interface Incident_priority_settingsdata {
  incidentPrioritySettings: Incident_priority_settingsdataincidentprioritysettings;
  templateId: string;
}
export interface Incident_priority_settingsEntry {
  templateId: "INCIDENT_PRIORITY_SETTINGS";
  data: Incident_priority_settingsdata;
}
export interface Incident_visibility_settingsdataincidentvisibilitysettings {
  hideIncidentForCharacter: (string)[];
}
export interface Incident_visibility_settingsdata {
  incidentVisibilitySettings: Incident_visibility_settingsdataincidentvisibilitysettings;
  templateId: string;
}
export interface Incident_visibility_settingsEntry {
  templateId: "INCIDENT_VISIBILITY_SETTINGS";
  data: Incident_visibility_settingsdata;
}
export interface Input_tracker_code_gateEntry {
  templateId: "INPUT_TRACKER_CODE_GATE";
  data: Battle_accessibility_code_gatedata;
}
export interface Invasion_availability_settings_fridaydatapokestopinvasionavailabilitysettings {
  availabilityEndMinute: string;
  availabilityStartMinute: string;
}
export interface Invasion_availability_settings_fridaydata {
  pokestopInvasionAvailabilitySettings: Invasion_availability_settings_fridaydatapokestopinvasionavailabilitysettings;
  templateId: string;
}
export interface Invasion_availability_settings_fridayEntry {
  templateId: "INVASION_AVAILABILITY_SETTINGS_FRIDAY";
  data: Invasion_availability_settings_fridaydata;
}
export interface Invasion_availability_settings_mondayEntry {
  templateId: "INVASION_AVAILABILITY_SETTINGS_MONDAY";
  data: Invasion_availability_settings_fridaydata;
}
export interface Invasion_availability_settings_saturdayEntry {
  templateId: "INVASION_AVAILABILITY_SETTINGS_SATURDAY";
  data: Invasion_availability_settings_fridaydata;
}
export interface Invasion_availability_settings_sundayEntry {
  templateId: "INVASION_AVAILABILITY_SETTINGS_SUNDAY";
  data: Invasion_availability_settings_fridaydata;
}
export interface Invasion_availability_settings_thursdayEntry {
  templateId: "INVASION_AVAILABILITY_SETTINGS_THURSDAY";
  data: Invasion_availability_settings_fridaydata;
}
export interface Invasion_availability_settings_tuesdayEntry {
  templateId: "INVASION_AVAILABILITY_SETTINGS_TUESDAY";
  data: Invasion_availability_settings_fridaydata;
}
export interface Invasion_availability_settings_wednesdayEntry {
  templateId: "INVASION_AVAILABILITY_SETTINGS_WEDNESDAY";
  data: Invasion_availability_settings_fridaydata;
}
export interface Inventory_settingsdatainventorysettingsbagupgradetimerstagesitem {
  dismissStageSecs: number;
}
export interface Inventory_settingsdatainventorysettings {
  bagUpgradeBannerContexts: (string)[];
  bagUpgradeBannerEnabled: boolean;
  bagUpgradeTimerStages: (Inventory_settingsdatainventorysettingsbagupgradetimerstagesitem)[];
  baseBagItems: number;
  baseDailyAdventureEggs: number;
  baseEggs: number;
  basePokemon: number;
  basePostcards: number;
  canRaidPassOverflowBagSpace: boolean;
  easyIncubatorBuyEnabled: boolean;
  enableEggsNotInventory: boolean;
  luckyFriendApplicatorSettingsToggleEnabled: boolean;
  maxBagItems: number;
  maxItemBoostDurationMs: string;
  maxPokemon: number;
  maxPostcards: number;
  maxStoneACount: number;
  maxTeamChanges: number;
  specialEggOverflowSpots: number;
  teamChangeItemResetPeriodInDays: string;
}
export interface Inventory_settingsdata {
  inventorySettings: Inventory_settingsdatainventorysettings;
  templateId: string;
}
export interface Inventory_settingsEntry {
  templateId: "INVENTORY_SETTINGS";
  data: Inventory_settingsdata;
}
export interface Iris_social_settingsdatairissocialsettings {
  addPokemonModalDelayMs: number;
  bannedPokedexIds: (string)[];
  combinedShadowsEnabled: boolean;
  enableSqcGuidance: boolean;
  expressionUpdateBroadcastMethod: string;
  ftueVersion: string;
  gameplayReportsActive: boolean;
  groundFocusGuardrailEnabled: boolean;
  groundFocusGuardrailEnterAngle: number;
  groundFocusGuardrailExitAngle: number;
  guidanceInCarThreshold: number;
  guidancePathNearbyFinishDelayMs: number;
  guidancePathNearbyFinishDistanceMeters: number;
  irisSocialEnabled: boolean;
  irisSocialPoiDeactivationCooldownMs: string;
  limitedLocalizationTimeoutDurationMs: string;
  limitedPokedexIds: (string)[];
  localizationGuidancePathEnabled: boolean;
  localizationTimeoutDurationMs: string;
  locationManagerJpegCompressionQuality: number;
  maxBoundaryAreaSqMeters: number;
  maxDistanceAllowLocalizationMeters: string;
  maxNumPokemonPerPlayer: number;
  maxNumPokemonPerScene: number;
  maxTimeBgModeBeforeExpulsionMs: string;
  maxTimeNoActivityPlayerInactiveMs: string;
  minBoundaryAreaSqMeters: number;
  pokeballPingTimeDelayMs: number;
  pokemonExpireAfterMs: string;
  pokemonSpawnStaggerDurationMs: string;
  pushGatewayEnabled: boolean;
  sunriseThresholdOffsetMs: string;
  sunsetThresholdOffsetMs: string;
  sunThresholdCheckEnabled: boolean;
  useBoundaryVerticesFromDataFlow: boolean;
  useVpsEnabledStatus: boolean;
}
export interface Iris_social_settingsdata {
  irisSocialSettings: Iris_social_settingsdatairissocialsettings;
  templateId: string;
}
export interface Iris_social_settingsEntry {
  templateId: "IRIS_SOCIAL_SETTINGS";
  data: Iris_social_settingsdata;
}
export interface Iris_social_ux_funnel_settingsdatairissocialuxfunnelsettingseventstepitem {
  event: string | number;
  stepNumber: number;
}
export interface Iris_social_ux_funnel_settingsdatairissocialuxfunnelsettings {
  eventStep: (Iris_social_ux_funnel_settingsdatairissocialuxfunnelsettingseventstepitem)[];
  uxFunnelVersion: number;
}
export interface Iris_social_ux_funnel_settingsdata {
  irisSocialUxFunnelSettings: Iris_social_ux_funnel_settingsdatairissocialuxfunnelsettings;
  templateId: string;
}
export interface Iris_social_ux_funnel_settingsEntry {
  templateId: "IRIS_SOCIAL_UX_FUNNEL_SETTINGS";
  data: Iris_social_ux_funnel_settingsdata;
}
export interface Is_sku_available_no_app_id_code_gateEntry {
  templateId: "IS_SKU_AVAILABLE_NO_APP_ID_CODE_GATE";
  data: Ibfc_lws_code_gatedata;
}
export interface Item_expiration_item_event_pass_point_go_fest_01dataitemexpirationsettings {
  expirationTime: string;
  item: string;
}
export interface Item_expiration_item_event_pass_point_go_fest_01data {
  itemExpirationSettings: Item_expiration_item_event_pass_point_go_fest_01dataitemexpirationsettings;
  templateId: string;
}
export interface Item_expiration_item_event_pass_point_go_fest_01Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_FEST_01";
  data: Item_expiration_item_event_pass_point_go_fest_01data;
}
export interface Item_expiration_item_event_pass_point_go_fest_02dataitemexpirationsettings {
  emergencyExpirationTime: string;
  expirationTime: string;
  item: string;
}
export interface Item_expiration_item_event_pass_point_go_fest_02data {
  itemExpirationSettings: Item_expiration_item_event_pass_point_go_fest_02dataitemexpirationsettings;
  templateId: string;
}
export interface Item_expiration_item_event_pass_point_go_fest_02Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_FEST_02";
  data: Item_expiration_item_event_pass_point_go_fest_02data;
}
export interface Item_expiration_item_event_pass_point_go_tour_01Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_TOUR_01";
  data: Item_expiration_item_event_pass_point_go_fest_01data;
}
export interface Item_expiration_item_event_pass_point_go_tour_02Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_TOUR_02";
  data: Item_expiration_item_event_pass_point_go_fest_01data;
}
export interface Item_expiration_item_event_pass_point_go_wild_area_01Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_WILD_AREA_01";
  data: Item_expiration_item_event_pass_point_go_fest_01data;
}
export interface Item_expiration_item_event_pass_point_live_ops_01Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_01";
  data: Item_expiration_item_event_pass_point_go_fest_02data;
}
export interface Item_expiration_item_event_pass_point_live_ops_02Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_02";
  data: Item_expiration_item_event_pass_point_go_fest_02data;
}
export interface Item_expiration_item_event_pass_point_live_ops_03Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_03";
  data: Item_expiration_item_event_pass_point_go_fest_02data;
}
export interface Item_expiration_item_event_pass_point_live_ops_04Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_04";
  data: Item_expiration_item_event_pass_point_go_fest_02data;
}
export interface Item_expiration_item_event_pass_point_live_ops_05Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_05";
  data: Item_expiration_item_event_pass_point_go_fest_02data;
}
export interface Item_expiration_item_event_pass_point_live_ops_06Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_06";
  data: Item_expiration_item_event_pass_point_go_fest_02data;
}
export interface Item_expiration_item_event_pass_point_live_ops_07Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_07";
  data: Item_expiration_item_event_pass_point_go_fest_02data;
}
export interface Item_expiration_item_event_pass_point_live_ops_08Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_08";
  data: Item_expiration_item_event_pass_point_go_fest_02data;
}
export interface Item_expiration_item_event_pass_point_monthly_01Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_01";
  data: Item_expiration_item_event_pass_point_go_fest_02data;
}
export interface Item_expiration_item_event_pass_point_monthly_02Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_02";
  data: Item_expiration_item_event_pass_point_go_fest_02data;
}
export interface Item_expiration_item_event_pass_point_monthly_03Entry {
  templateId: "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_03";
  data: Item_expiration_item_event_pass_point_go_fest_02data;
}
export interface Item_expiration_item_incubator_timedEntry {
  templateId: "ITEM_EXPIRATION_ITEM_INCUBATOR_TIMED";
  data: Item_expiration_item_event_pass_point_go_fest_01data;
}
export interface Item_expiration_item_lucky_friend_applicatorEntry {
  templateId: "ITEM_EXPIRATION_ITEM_LUCKY_FRIEND_APPLICATOR";
  data: Item_expiration_item_event_pass_point_go_fest_02data;
}
export interface Item_expiration_item_single_stat_increasedataitemexpirationsettingsconsolationitemslootitemitem {
  count: number;
  stardust: boolean;
}
export interface Item_expiration_item_single_stat_increasedataitemexpirationsettingsconsolationitems {
  lootItem: (Item_expiration_item_single_stat_increasedataitemexpirationsettingsconsolationitemslootitemitem)[];
}
export interface Item_expiration_item_single_stat_increasedataitemexpirationsettings {
  consolationItems: Item_expiration_item_single_stat_increasedataitemexpirationsettingsconsolationitems;
  expirationTime: string;
  item: string;
}
export interface Item_expiration_item_single_stat_increasedata {
  itemExpirationSettings: Item_expiration_item_single_stat_increasedataitemexpirationsettings;
  templateId: string;
}
export interface Item_expiration_item_single_stat_increaseEntry {
  templateId: "ITEM_EXPIRATION_ITEM_SINGLE_STAT_INCREASE";
  data: Item_expiration_item_single_stat_increasedata;
}
export interface Item_expiration_item_triple_stat_increaseEntry {
  templateId: "ITEM_EXPIRATION_ITEM_TRIPLE_STAT_INCREASE";
  data: Item_expiration_item_single_stat_increasedata;
}
export interface Item_expiration_item_wild_balldataitemexpirationsettingsitemenablementsettingsenabledtimeperiodsitem {
  enabledEndTime: string;
  enabledStartTime: string;
}
export interface Item_expiration_item_wild_balldataitemexpirationsettingsitemenablementsettings {
  enabledTimePeriods: (Item_expiration_item_wild_balldataitemexpirationsettingsitemenablementsettingsenabledtimeperiodsitem)[];
}
export interface Item_expiration_item_wild_balldataitemexpirationsettings {
  emergencyExpirationTime: string;
  expirationTime: string;
  item: string;
  itemEnablementSettings: Item_expiration_item_wild_balldataitemexpirationsettingsitemenablementsettings;
}
export interface Item_expiration_item_wild_balldata {
  itemExpirationSettings: Item_expiration_item_wild_balldataitemexpirationsettings;
  templateId: string;
}
export interface Item_expiration_item_wild_ballEntry {
  templateId: "ITEM_EXPIRATION_ITEM_WILD_BALL";
  data: Item_expiration_item_wild_balldata;
}
export interface Item_expiration_item_wild_ball_premierEntry {
  templateId: "ITEM_EXPIRATION_ITEM_WILD_BALL_PREMIER";
  data: Item_expiration_item_wild_balldata;
}
export interface Item_inventory_update_settingsdataiteminventoryupdatesettingscategoryprotoitem {
  category: (string)[];
  categoryName: string;
  sortOrder?: number;
}
export interface Item_inventory_update_settingsdataiteminventoryupdatesettings {
  categoryProto: (Item_inventory_update_settingsdataiteminventoryupdatesettingscategoryprotoitem)[];
}
export interface Item_inventory_update_settingsdata {
  itemInventoryUpdateSettings: Item_inventory_update_settingsdataiteminventoryupdatesettings;
  templateId: string;
}
export interface Item_inventory_update_settingsEntry {
  templateId: "ITEM_INVENTORY_UPDATE_SETTINGS";
  data: Item_inventory_update_settingsdata;
}
export interface IndonesianEntry {
  templateId: "Indonesian";
  data: Hindidata;
}
export interface Join_raid_via_friend_list_settingsdatajoinraidviafriendlistsettings {
  enabled: boolean;
  friendActivitiesBackgroundUpdatePeriodMs: string;
  maxBattleEnabled: boolean;
  maxBattleMinFriendshipScore: number;
  maxBattleMinPlayerLevel: number;
  minFriendshipScore: number;
  minPlayerLevel: number;
}
export interface Join_raid_via_friend_list_settingsdata {
  joinRaidViaFriendListSettings: Join_raid_via_friend_list_settingsdatajoinraidviafriendlistsettings;
  templateId: string;
}
export interface Join_raid_via_friend_list_settingsEntry {
  templateId: "JOIN_RAID_VIA_FRIEND_LIST_SETTINGS";
  data: Join_raid_via_friend_list_settingsdata;
}
export interface Language_selector_settingsdatalanguageselectorsettings {
  languageSelectorEnabled: boolean;
}
export interface Language_selector_settingsdata {
  languageSelectorSettings: Language_selector_settingsdatalanguageselectorsettings;
  templateId: string;
}
export interface Language_selector_settingsEntry {
  templateId: "LANGUAGE_SELECTOR_SETTINGS";
  data: Language_selector_settingsdata;
}
export interface LatamEntry {
  templateId: "LATAM";
  data: Hindidata;
}
export interface Lucky_pokemon_settingsdataluckypokemonsettings {
  powerUpStardustDiscountPercent: number;
}
export interface Lucky_pokemon_settingsdata {
  luckyPokemonSettings: Lucky_pokemon_settingsdataluckypokemonsettings;
  templateId: string;
}
export interface Lucky_pokemon_settingsEntry {
  templateId: "LUCKY_POKEMON_SETTINGS";
  data: Lucky_pokemon_settingsdata;
}
export interface Main_menu_camera_button_settingsdata {
  mainMenuChanges: Additive_scene_settingsdataadditivescenesettings;
  templateId: string;
}
export interface Main_menu_camera_button_settingsEntry {
  templateId: "MAIN_MENU_CAMERA_BUTTON_SETTINGS";
  data: Main_menu_camera_button_settingsdata;
}
export interface Map_display_settingsdatamapdisplaysettings {
  showEnhancedSky: boolean;
}
export interface Map_display_settingsdata {
  mapDisplaySettings: Map_display_settingsdatamapdisplaysettings;
  templateId: string;
}
export interface Map_display_settingsEntry {
  templateId: "MAP_DISPLAY_SETTINGS";
  data: Map_display_settingsdata;
}
export interface Map_objects_interaction_range_settingsdatamapobjectsinteractionrangesettings {
  farInteractionRangeMeters: number;
  interactionRangeMeters: number;
  remoteInteractionRangeMeters: number;
  whitePulseRadiusMeters: number;
}
export interface Map_objects_interaction_range_settingsdata {
  mapObjectsInteractionRangeSettings: Map_objects_interaction_range_settingsdatamapobjectsinteractionrangesettings;
  templateId: string;
}
export interface Map_objects_interaction_range_settingsEntry {
  templateId: "MAP_OBJECTS_INTERACTION_RANGE_SETTINGS";
  data: Map_objects_interaction_range_settingsdata;
}
export interface Map_theme_low_perf_code_gateEntry {
  templateId: "MAP_THEME_LOW_PERF_CODE_GATE";
  data: Ibfc_lws_code_gatedata;
}
export interface Mega_2026_feature_gatedatafeaturegatesubfeaturegatelistitem {
  name: string;
  rolloutPercentage: number;
  status: number;
}
export interface Mega_2026_feature_gatedatafeaturegate {
  rolloutPercentage: number;
  status: number;
  subFeatureGateList: (Mega_2026_feature_gatedatafeaturegatesubfeaturegatelistitem)[];
}
export interface Mega_2026_feature_gatedata {
  featureGate: Mega_2026_feature_gatedatafeaturegate;
  templateId: string;
}
export interface Mega_2026_feature_gateEntry {
  templateId: "MEGA_2026_FEATURE_GATE";
  data: Mega_2026_feature_gatedata;
}
export interface Mega_evolution_level_0datamegaevolevelsettingscooldown {
  bypassCostInitial: number;
  bypassCostRoundingValue: number;
  durationMs: string;
}
export interface Mega_evolution_level_0datamegaevolevelsettingseffects {
  differentTypeAttackBoost: number;
  sameTypeAttackBoost: number;
  sameTypeExtraCatchCandy: number;
}
export interface Mega_evolution_level_0datamegaevolevelsettingsprogression {
  pointsLimitPerPeriod: number;
  pointsPerMegaEvoAction: number;
}
export interface Mega_evolution_level_0datamegaevolevelsettings {
  cooldown: Mega_evolution_level_0datamegaevolevelsettingscooldown;
  effects: Mega_evolution_level_0datamegaevolevelsettingseffects;
  progression: Mega_evolution_level_0datamegaevolevelsettingsprogression;
}
export interface Mega_evolution_level_0data {
  megaEvoLevelSettings: Mega_evolution_level_0datamegaevolevelsettings;
  templateId: string;
}
export interface Mega_evolution_level_0Entry {
  templateId: "MEGA_EVOLUTION_LEVEL_0";
  data: Mega_evolution_level_0data;
}
export interface Mega_evolution_level_0_v0015_pokemon_beedrilldatamegaevolevelsettings {
  cooldown: Mega_evolution_level_0datamegaevolevelsettingscooldown;
  effects: Mega_evolution_level_0datamegaevolevelsettingseffects;
  pokemonId: string;
  progression: Mega_evolution_level_0datamegaevolevelsettingsprogression;
}
export interface Mega_evolution_level_0_v0015_pokemon_beedrilldata {
  megaEvoLevelSettings: Mega_evolution_level_0_v0015_pokemon_beedrilldatamegaevolevelsettings;
  templateId: string;
}
export interface Mega_evolution_level_0_v0015_pokemon_beedrillEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0015_POKEMON_BEEDRILL";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0018_pokemon_pidgeotEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0018_POKEMON_PIDGEOT";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0071_pokemon_victreebelEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0071_POKEMON_VICTREEBEL";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0080_pokemon_slowbroEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0080_POKEMON_SLOWBRO";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0130_pokemon_gyaradosEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0130_POKEMON_GYARADOS";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0149_pokemon_dragoniteEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0149_POKEMON_DRAGONITE";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0150_pokemon_mewtwoEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0150_POKEMON_MEWTWO";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0229_pokemon_houndoomEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0229_POKEMON_HOUNDOOM";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0248_pokemon_tyranitarEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0248_POKEMON_TYRANITAR";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0302_pokemon_sableyeEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0302_POKEMON_SABLEYE";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0308_pokemon_medichamEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0308_POKEMON_MEDICHAM";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0310_pokemon_manectricEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0310_POKEMON_MANECTRIC";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0334_pokemon_altariaEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0334_POKEMON_ALTARIA";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0354_pokemon_banetteEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0354_POKEMON_BANETTE";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0373_pokemon_salamenceEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0373_POKEMON_SALAMENCE";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0376_pokemon_metagrossEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0376_POKEMON_METAGROSS";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0380_pokemon_latiasEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0380_POKEMON_LATIAS";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0381_pokemon_latiosEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0381_POKEMON_LATIOS";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0382_pokemon_kyogreEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0382_POKEMON_KYOGRE";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0383_pokemon_groudonEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0383_POKEMON_GROUDON";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0384_pokemon_rayquazaEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0384_POKEMON_RAYQUAZA";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0445_pokemon_garchompEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0445_POKEMON_GARCHOMP";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0687_pokemon_malamarEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0687_POKEMON_MALAMAR";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_0_v0719_pokemon_diancieEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_0_V0719_POKEMON_DIANCIE";
  data: Mega_evolution_level_0_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1datamegaevolevelsettingsprogression {
  pointsLimitPerPeriod: number;
  pointsPerMegaEvoAction: number;
  pointsRequired: number;
}
export interface Mega_evolution_level_1datamegaevolevelsettings {
  cooldown: Mega_evolution_level_0datamegaevolevelsettingscooldown;
  effects: Mega_evolution_level_0datamegaevolevelsettingseffects;
  level: number;
  progression: Mega_evolution_level_1datamegaevolevelsettingsprogression;
}
export interface Mega_evolution_level_1data {
  megaEvoLevelSettings: Mega_evolution_level_1datamegaevolevelsettings;
  templateId: string;
}
export interface Mega_evolution_level_1Entry {
  templateId: "MEGA_EVOLUTION_LEVEL_1";
  data: Mega_evolution_level_1data;
}
export interface Mega_evolution_level_1_v0015_pokemon_beedrilldatamegaevolevelsettings {
  cooldown: Mega_evolution_level_0datamegaevolevelsettingscooldown;
  effects: Mega_evolution_level_0datamegaevolevelsettingseffects;
  level: number;
  pokemonId: string;
  progression: Mega_evolution_level_1datamegaevolevelsettingsprogression;
}
export interface Mega_evolution_level_1_v0015_pokemon_beedrilldata {
  megaEvoLevelSettings: Mega_evolution_level_1_v0015_pokemon_beedrilldatamegaevolevelsettings;
  templateId: string;
}
export interface Mega_evolution_level_1_v0015_pokemon_beedrillEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0015_POKEMON_BEEDRILL";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0018_pokemon_pidgeotEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0018_POKEMON_PIDGEOT";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0071_pokemon_victreebelEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0071_POKEMON_VICTREEBEL";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0080_pokemon_slowbroEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0080_POKEMON_SLOWBRO";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0130_pokemon_gyaradosEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0130_POKEMON_GYARADOS";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0149_pokemon_dragoniteEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0149_POKEMON_DRAGONITE";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0150_pokemon_mewtwoEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0150_POKEMON_MEWTWO";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0229_pokemon_houndoomEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0229_POKEMON_HOUNDOOM";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0248_pokemon_tyranitarEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0248_POKEMON_TYRANITAR";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0302_pokemon_sableyeEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0302_POKEMON_SABLEYE";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0308_pokemon_medichamEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0308_POKEMON_MEDICHAM";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0310_pokemon_manectricEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0310_POKEMON_MANECTRIC";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0334_pokemon_altariaEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0334_POKEMON_ALTARIA";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0354_pokemon_banetteEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0354_POKEMON_BANETTE";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0373_pokemon_salamenceEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0373_POKEMON_SALAMENCE";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0376_pokemon_metagrossEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0376_POKEMON_METAGROSS";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0380_pokemon_latiasEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0380_POKEMON_LATIAS";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0381_pokemon_latiosEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0381_POKEMON_LATIOS";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0382_pokemon_kyogreEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0382_POKEMON_KYOGRE";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0383_pokemon_groudonEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0383_POKEMON_GROUDON";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0384_pokemon_rayquazaEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0384_POKEMON_RAYQUAZA";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0445_pokemon_garchompEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0445_POKEMON_GARCHOMP";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0687_pokemon_malamarEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0687_POKEMON_MALAMAR";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_1_v0719_pokemon_diancieEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_1_V0719_POKEMON_DIANCIE";
  data: Mega_evolution_level_1_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2datamegaevolevelsettingseffects {
  differentTypeAttackBoost: number;
  sameTypeAttackBoost: number;
  sameTypeExtraCatchCandy: number;
  sameTypeExtraCatchCandyXlChance: number;
  sameTypeExtraCatchXp: number;
}
export interface Mega_evolution_level_2datamegaevolevelsettings {
  cooldown: Mega_evolution_level_0datamegaevolevelsettingscooldown;
  effects: Mega_evolution_level_2datamegaevolevelsettingseffects;
  level: number;
  progression: Mega_evolution_level_1datamegaevolevelsettingsprogression;
}
export interface Mega_evolution_level_2data {
  megaEvoLevelSettings: Mega_evolution_level_2datamegaevolevelsettings;
  templateId: string;
}
export interface Mega_evolution_level_2Entry {
  templateId: "MEGA_EVOLUTION_LEVEL_2";
  data: Mega_evolution_level_2data;
}
export interface Mega_evolution_level_2_v0015_pokemon_beedrilldatamegaevolevelsettings {
  cooldown: Mega_evolution_level_0datamegaevolevelsettingscooldown;
  effects: Mega_evolution_level_2datamegaevolevelsettingseffects;
  level: number;
  pokemonId: string;
  progression: Mega_evolution_level_1datamegaevolevelsettingsprogression;
}
export interface Mega_evolution_level_2_v0015_pokemon_beedrilldata {
  megaEvoLevelSettings: Mega_evolution_level_2_v0015_pokemon_beedrilldatamegaevolevelsettings;
  templateId: string;
}
export interface Mega_evolution_level_2_v0015_pokemon_beedrillEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0015_POKEMON_BEEDRILL";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0018_pokemon_pidgeotEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0018_POKEMON_PIDGEOT";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0071_pokemon_victreebelEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0071_POKEMON_VICTREEBEL";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0080_pokemon_slowbroEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0080_POKEMON_SLOWBRO";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0130_pokemon_gyaradosEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0130_POKEMON_GYARADOS";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0149_pokemon_dragoniteEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0149_POKEMON_DRAGONITE";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0150_pokemon_mewtwoEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0150_POKEMON_MEWTWO";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0229_pokemon_houndoomEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0229_POKEMON_HOUNDOOM";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0248_pokemon_tyranitarEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0248_POKEMON_TYRANITAR";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0302_pokemon_sableyeEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0302_POKEMON_SABLEYE";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0308_pokemon_medichamEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0308_POKEMON_MEDICHAM";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0310_pokemon_manectricEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0310_POKEMON_MANECTRIC";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0334_pokemon_altariaEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0334_POKEMON_ALTARIA";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0354_pokemon_banetteEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0354_POKEMON_BANETTE";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0373_pokemon_salamenceEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0373_POKEMON_SALAMENCE";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0376_pokemon_metagrossEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0376_POKEMON_METAGROSS";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0380_pokemon_latiasEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0380_POKEMON_LATIAS";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0381_pokemon_latiosEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0381_POKEMON_LATIOS";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0382_pokemon_kyogreEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0382_POKEMON_KYOGRE";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0383_pokemon_groudonEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0383_POKEMON_GROUDON";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0384_pokemon_rayquazaEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0384_POKEMON_RAYQUAZA";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0445_pokemon_garchompEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0445_POKEMON_GARCHOMP";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0687_pokemon_malamarEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0687_POKEMON_MALAMAR";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_2_v0719_pokemon_diancieEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_2_V0719_POKEMON_DIANCIE";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3Entry {
  templateId: "MEGA_EVOLUTION_LEVEL_3";
  data: Mega_evolution_level_2data;
}
export interface Mega_evolution_level_3_v0015_pokemon_beedrillEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0015_POKEMON_BEEDRILL";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0018_pokemon_pidgeotEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0018_POKEMON_PIDGEOT";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0071_pokemon_victreebelEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0071_POKEMON_VICTREEBEL";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0080_pokemon_slowbroEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0080_POKEMON_SLOWBRO";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0130_pokemon_gyaradosEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0130_POKEMON_GYARADOS";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0149_pokemon_dragoniteEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0149_POKEMON_DRAGONITE";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0150_pokemon_mewtwoEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0150_POKEMON_MEWTWO";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0229_pokemon_houndoomEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0229_POKEMON_HOUNDOOM";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0248_pokemon_tyranitarEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0248_POKEMON_TYRANITAR";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0302_pokemon_sableyeEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0302_POKEMON_SABLEYE";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0308_pokemon_medichamEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0308_POKEMON_MEDICHAM";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0310_pokemon_manectricEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0310_POKEMON_MANECTRIC";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0334_pokemon_altariaEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0334_POKEMON_ALTARIA";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0354_pokemon_banetteEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0354_POKEMON_BANETTE";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0373_pokemon_salamenceEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0373_POKEMON_SALAMENCE";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0376_pokemon_metagrossEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0376_POKEMON_METAGROSS";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0380_pokemon_latiasEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0380_POKEMON_LATIAS";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0381_pokemon_latiosEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0381_POKEMON_LATIOS";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0382_pokemon_kyogreEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0382_POKEMON_KYOGRE";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0383_pokemon_groudonEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0383_POKEMON_GROUDON";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0384_pokemon_rayquazaEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0384_POKEMON_RAYQUAZA";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0445_pokemon_garchompEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0445_POKEMON_GARCHOMP";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0687_pokemon_malamarEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0687_POKEMON_MALAMAR";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_3_v0719_pokemon_diancieEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_3_V0719_POKEMON_DIANCIE";
  data: Mega_evolution_level_2_v0015_pokemon_beedrilldata;
}
export interface Mega_evolution_level_4_v0071_pokemon_victreebeldatamegaevolevelsettingseffects {
  differentTypeAttackBoost: number;
  sameTypeAttackBoost: number;
  sameTypeExtraCatchCandy: number;
  sameTypeExtraCatchCandyXlChance: number;
  sameTypeExtraCatchXp: number;
  selfCpBoostAdditionalLevel: number;
}
export interface Mega_evolution_level_4_v0071_pokemon_victreebeldatamegaevolevelsettings {
  cooldown: Mega_evolution_level_0datamegaevolevelsettingscooldown;
  effects: Mega_evolution_level_4_v0071_pokemon_victreebeldatamegaevolevelsettingseffects;
  ftueExpirationTimestamp: string;
  level: number;
  megaEnergyCostToUnlock: number;
  pokemonId: string;
  progression: Mega_evolution_level_1datamegaevolevelsettingsprogression;
}
export interface Mega_evolution_level_4_v0071_pokemon_victreebeldata {
  megaEvoLevelSettings: Mega_evolution_level_4_v0071_pokemon_victreebeldatamegaevolevelsettings;
  templateId: string;
}
export interface Mega_evolution_level_4_v0071_pokemon_victreebelEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_4_V0071_POKEMON_VICTREEBEL";
  data: Mega_evolution_level_4_v0071_pokemon_victreebeldata;
}
export interface Mega_evolution_level_4_v0149_pokemon_dragoniteEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_4_V0149_POKEMON_DRAGONITE";
  data: Mega_evolution_level_4_v0071_pokemon_victreebeldata;
}
export interface Mega_evolution_level_4_v0687_pokemon_malamarEntry {
  templateId: "MEGA_EVOLUTION_LEVEL_4_V0687_POKEMON_MALAMAR";
  data: Mega_evolution_level_4_v0071_pokemon_victreebeldata;
}
export interface Mega_evo_settingsdatamegaevosettings {
  activeMegaBonusCatchCandy: number;
  attackBoostFromMegaDifferentType: number;
  attackBoostFromMegaSameType: number;
  clientMegaCooldownBufferMs: number;
  enableBuddyWalkingMegaEnergyAward: boolean;
  enableMegaEvolveInLobby: boolean;
  enableMegaLevel: boolean;
  enableMegaLevelLegacyAward: boolean;
  evolutionLengthMs: string;
  maxCandyHoardSize: number;
  numMegaLevels: number;
}
export interface Mega_evo_settingsdata {
  megaEvoSettings: Mega_evo_settingsdatamegaevosettings;
  templateId: string;
}
export interface Mega_evo_settingsEntry {
  templateId: "MEGA_EVO_SETTINGS";
  data: Mega_evo_settingsdata;
}
export interface Monodepth_settingsdatamonodepthsettings {
  enableGroundSuppression: boolean;
  enableOcclusions: boolean;
  minGroundSuppressionThresh: number;
  occlusionsToggleVisible: boolean;
  suppressionChannelId: number;
}
export interface Monodepth_settingsdata {
  monodepthSettings: Monodepth_settingsdatamonodepthsettings;
  templateId: string;
}
export interface Monodepth_settingsEntry {
  templateId: "MONODEPTH_SETTINGS";
  data: Monodepth_settingsdata;
}
export interface Mp_shared_settingsdatampsettingsbattlempcostpertieritem {
  battleLevel: string | number;
  breadBattleCatchMpCost: number;
  breadBattleRemoteCatchMpCost: number;
}
export interface Mp_shared_settingsdatampsettings {
  battleMpCostPerTier: (Mp_shared_settingsdatampsettingsbattlempcostpertieritem)[];
  debugAllowRemoveWalkQuest: boolean;
  ftueMpCapacity: number;
  mpBaseDailyLimit: number;
  mpCapacity: number;
  mpClaimParticleSpeedMultiplier: number;
  numExtraMpFromFirstLootStation: number;
  numMetersGoal: number;
  numMpFromLootStation: number;
  numMpFromWalkQuest: number;
}
export interface Mp_shared_settingsdata {
  mpSettings: Mp_shared_settingsdatampsettings;
  templateId: string;
}
export interface Mp_shared_settingsEntry {
  templateId: "MP_SHARED_SETTINGS";
  data: Mp_shared_settingsdata;
}
export interface Natural_art_day_night_feature_settingsdatanaturalartdaynightfeaturesettings {
  dayEndTime: string;
  dayStartTime: string;
  dbsSpawnRadiusMeters: number;
  nightEndTime: string;
}
export interface Natural_art_day_night_feature_settingsdata {
  naturalArtDayNightFeatureSettings: Natural_art_day_night_feature_settingsdatanaturalartdaynightfeaturesettings;
  templateId: string;
}
export interface Natural_art_day_night_feature_settingsEntry {
  templateId: "NATURAL_ART_DAY_NIGHT_FEATURE_SETTINGS";
  data: Natural_art_day_night_feature_settingsdata;
}
export interface Nearby_pokemon_settingsdatanearbypokemonsettings {
  obEnabled: boolean;
  obNearbyPokemonSettingsBool1: boolean;
}
export interface Nearby_pokemon_settingsdata {
  nearbyPokemonSettings: Nearby_pokemon_settingsdatanearbypokemonsettings;
  templateId: string;
}
export interface Nearby_pokemon_settingsEntry {
  templateId: "NEARBY_POKEMON_SETTINGS";
  data: Nearby_pokemon_settingsdata;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsbodyslidersettingsbustslider {
  maxBounds: number;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsbodyslidersettingssizeslider {
  maxBounds: number;
  minBounds: number;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsbodyslidersettings {
  bustSlider: Neutral_avatar_settingsdataneutralavatarsettingsbodyslidersettingsbustslider;
  hipsSlider: Neutral_avatar_settingsdataneutralavatarsettingsbodyslidersettingsbustslider;
  muscleSlider: Neutral_avatar_settingsdataneutralavatarsettingsbodyslidersettingsbustslider;
  shoulderSlider: Neutral_avatar_settingsdataneutralavatarsettingsbodyslidersettingsbustslider;
  sizeSlider: Neutral_avatar_settingsdataneutralavatarsettingsbodyslidersettingssizeslider;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack {
  articleId: string;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticles {
  backpack: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  bodyPreset: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  eyebrow: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  eyelash: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  facePreset: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  gloves: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  hair: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  pants: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  pose: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  shirt: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  shoes: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  socks: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarbodyblend {
  hips: number;
  musculature: number;
  shoulders: number;
  size: number;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection {
  selection: string;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatareyegradientcolorkeysitem {
  blue?: number;
  green?: number;
  keyPosition: number;
  red?: number;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatareyegradient {
  colorKeys: (Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatareyegradientcolorkeysitem)[];
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarfacepositions {
  browDepth: number;
  browVertical: number;
  eyeDepth: number;
  eyeHorizontal: number;
  eyeVertical: number;
  mouthDepth: number;
  mouthHorizontal: number;
  mouthVertical: number;
  noseDepth: number;
  noseVertical: number;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarhairgradientcolorkeysitem {
  blue: number;
  green: number;
  keyPosition?: number;
  red: number;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarhairgradient {
  colorKeys: (Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarhairgradientcolorkeysitem)[];
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarskingradientcolorkeysitem {
  blue: number;
  green: number;
  keyPosition: number;
  red: number;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarskingradient {
  colorKeys: (Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarskingradientcolorkeysitem)[];
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatar {
  articles: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticles;
  bodyBlend: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarbodyblend;
  earSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  eyeGradient: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatareyegradient;
  eyeSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  facePositions: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarfacepositions;
  hairGradient: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarhairgradient;
  headSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  mouthSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  noseSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  skinGradient: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarskingradient;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsfemaleneutralavatararticles {
  backpack: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  belt: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  bodyPreset: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  eyebrow: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  eyelash: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  facePreset: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  gloves: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  hair: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  hat: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  necklace: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  pants: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  pose: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  shirt: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  shoes: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  socks: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsfemaleneutralavatarbodyblend {
  bust: number;
  hips: number;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsfemaleneutralavatarfacepositions {
  browDepth: number;
  browHorizontal: number;
  browVertical: number;
  eyeDepth: number;
  eyeHorizontal: number;
  eyeVertical: number;
  mouthDepth: number;
  mouthHorizontal: number;
  mouthVertical: number;
  noseDepth: number;
  noseVertical: number;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsfemaleneutralavatar {
  articles: Neutral_avatar_settingsdataneutralavatarsettingsfemaleneutralavatararticles;
  bodyBlend: Neutral_avatar_settingsdataneutralavatarsettingsfemaleneutralavatarbodyblend;
  earSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  eyeGradient: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatareyegradient;
  eyeSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  facePositions: Neutral_avatar_settingsdataneutralavatarsettingsfemaleneutralavatarfacepositions;
  hairGradient: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarhairgradient;
  headSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  mouthSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  noseSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  skinGradient: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarskingradient;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsmaleneutralavatararticles {
  backpack: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  bodyPreset: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  eyebrow: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  eyelash: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  facePreset: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  gloves: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  hair: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  hat: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  pants: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  pose: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  shirt: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  shoes: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
  socks: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatararticlesbackpack;
}
export interface Neutral_avatar_settingsdataneutralavatarsettingsmaleneutralavatar {
  articles: Neutral_avatar_settingsdataneutralavatarsettingsmaleneutralavatararticles;
  bodyBlend: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarbodyblend;
  earSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  eyeGradient: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatareyegradient;
  eyeSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  facePositions: Neutral_avatar_settingsdataneutralavatarsettingsfemaleneutralavatarfacepositions;
  hairGradient: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarhairgradient;
  headSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  mouthSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  noseSelection: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarearselection;
  skinGradient: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatarskingradient;
}
export interface Neutral_avatar_settingsdataneutralavatarsettings {
  bodySliderSettings: Neutral_avatar_settingsdataneutralavatarsettingsbodyslidersettings;
  defaultNeutralAvatar: Neutral_avatar_settingsdataneutralavatarsettingsdefaultneutralavatar;
  femaleNeutralAvatar: Neutral_avatar_settingsdataneutralavatarsettingsfemaleneutralavatar;
  maleNeutralAvatar: Neutral_avatar_settingsdataneutralavatarsettingsmaleneutralavatar;
  neutralAvatarLegacyMappingVersion: number;
  neutralAvatarSettingsEnabled: boolean;
  neutralAvatarSettingsSentinelValue: number;
  obMoveSettingsNumber101: boolean;
  obMoveSettingsNumber120: boolean;
  obMoveSettingsNumber123: boolean;
  obMoveSettingsNumber124: boolean;
}
export interface Neutral_avatar_settingsdata {
  neutralAvatarSettings: Neutral_avatar_settingsdataneutralavatarsettings;
  templateId: string;
}
export interface Neutral_avatar_settingsEntry {
  templateId: "NEUTRAL_AVATAR_SETTINGS";
  data: Neutral_avatar_settingsdata;
}
export interface Onboarding_settingsdataonboardingsettings {
  adventureSyncPromptStep: number;
  arPromptPlayerLevel: number;
  disableInitialArPrompt: boolean;
}
export interface Onboarding_settingsdata {
  onboardingSettings: Onboarding_settingsdataonboardingsettings;
  templateId: string;
}
export interface Onboarding_settingsEntry {
  templateId: "ONBOARDING_SETTINGS";
  data: Onboarding_settingsdata;
}
export interface Optimizations_settingsdataoptimizationsproto {
  adaptivePerformanceMinResolutionScale: number;
  adaptivePerformanceUpdateInterval: number;
  optimizationPhysicsToggleEnabled: boolean;
}
export interface Optimizations_settingsdata {
  optimizationsProto: Optimizations_settingsdataoptimizationsproto;
  templateId: string;
}
export interface Optimizations_settingsEntry {
  templateId: "OPTIMIZATIONS_SETTINGS";
  data: Optimizations_settingsdata;
}
export interface Party_play_dark_launch_settingsdatapartydarklaunchsettingscreateorjoinwaitprobabilityitem {
  waitTimeMs: number;
  weight: number;
}
export interface Party_play_dark_launch_settingsdatapartydarklaunchsettingsleavepartyprobablityitem {
  maxDurationMs: number;
  weight: number;
}
export interface Party_play_dark_launch_settingsdatapartydarklaunchsettings {
  createOrJoinWaitProbability: (Party_play_dark_launch_settingsdatapartydarklaunchsettingscreateorjoinwaitprobabilityitem)[];
  leavePartyProbablity: (Party_play_dark_launch_settingsdatapartydarklaunchsettingsleavepartyprobablityitem)[];
  probabilityToCreatePercent: number;
  rolloutPlayersPerBillion: number;
  updateLocationEnabled: boolean;
  updateLocationOverridePeriodMs: number;
}
export interface Party_play_dark_launch_settingsdata {
  partyDarkLaunchSettings: Party_play_dark_launch_settingsdatapartydarklaunchsettings;
  templateId: string;
}
export interface Party_play_dark_launch_settingsEntry {
  templateId: "PARTY_PLAY_DARK_LAUNCH_SETTINGS";
  data: Party_play_dark_launch_settingsdata;
}
export interface Party_play_general_settingsdatapartyplaygeneralsettings {
  complianceZonesEnabled: boolean;
  creationToStartTimeoutMs: string;
  enabled: boolean;
  enabledFriendStatusIncrease: boolean;
  enablePartyRaidInformation: boolean;
  fallbackPartyQuestEnabled: boolean;
  friendRequestsEnabled: boolean;
  maxStackedEncounterReward: number;
  minPlayerLevel: number;
  partyCatchTagsEnabled: boolean;
  partyExpiryDurationMs: string;
  partyExpiryWarningMinutes: number;
  partyIapBoostsEnabled: boolean;
  partyNewQuestNotificationV2Enabled: boolean;
  partyQuestEncounterRewardEnabled: boolean;
  pgDeliveryMechanic: string;
  restartPartyRejoinPromptEnabled: boolean;
}
export interface Party_play_general_settingsdata {
  partyPlayGeneralSettings: Party_play_general_settingsdatapartyplaygeneralsettings;
  templateId: string;
}
export interface Party_play_general_settingsEntry {
  templateId: "PARTY_PLAY_GENERAL_SETTINGS";
  data: Party_play_general_settingsdata;
}
export interface Party_play_iap_boosts_settingsdatapartyiapboostssettingsboostitem {
  dailyContributionLimit: number;
  durationMultiplier: number;
  supportedItemTypes: string;
}
export interface Party_play_iap_boosts_settingsdatapartyiapboostssettings {
  boost: (Party_play_iap_boosts_settingsdatapartyiapboostssettingsboostitem)[];
}
export interface Party_play_iap_boosts_settingsdata {
  partyIapBoostsSettings: Party_play_iap_boosts_settingsdatapartyiapboostssettings;
  templateId: string;
}
export interface Party_play_iap_boosts_settingsEntry {
  templateId: "PARTY_PLAY_IAP_BOOSTS_SETTINGS";
  data: Party_play_iap_boosts_settingsdata;
}
export interface Party_recommendation_settingsdatapartyrecommendationsettings {
  megaEvoCombatRatingScale: number;
  mode: string;
  thirdMoveWeight: number;
  variance: number;
}
export interface Party_recommendation_settingsdata {
  partyRecommendationSettings: Party_recommendation_settingsdatapartyrecommendationsettings;
  templateId: string;
}
export interface Party_recommendation_settingsEntry {
  templateId: "PARTY_RECOMMENDATION_SETTINGS";
  data: Party_recommendation_settingsdata;
}
export interface Photo_settingsdataphotosettings {
  bannerImageUrl: (string)[];
  irisFlags: number;
  isIrisEnabled: boolean;
  screenCaptureSize: number;
}
export interface Photo_settingsdata {
  photoSettings: Photo_settingsdataphotosettings;
  templateId: string;
}
export interface Photo_settingsEntry {
  templateId: "PHOTO_SETTINGS";
  data: Photo_settingsdata;
}
export interface Photo_set_aloladataphotosetssettingsprotopokemonitem {
  pokemonId: string;
}
export interface Photo_set_aloladataphotosetssettingsproto {
  displayOrder: number;
  frameColor: string;
  minimumPokemon: number;
  nameKey: string;
  pokemon: (Photo_set_aloladataphotosetssettingsprotopokemonitem)[];
}
export interface Photo_set_aloladata {
  photoSetsSettingsProto: Photo_set_aloladataphotosetssettingsproto;
  templateId: string;
}
export interface Photo_set_alolaEntry {
  templateId: "PHOTO_SET_ALOLA";
  data: Photo_set_aloladata;
}
export interface Photo_set_ancient_fossilsdataphotosetssettingsprotopokemonitem {
  form?: string;
  pokemonId: string;
}
export interface Photo_set_ancient_fossilsdataphotosetssettingsproto {
  displayOrder: number;
  frameColor: string;
  minimumPokemon: number;
  nameKey: string;
  pokemon: (Photo_set_ancient_fossilsdataphotosetssettingsprotopokemonitem)[];
}
export interface Photo_set_ancient_fossilsdata {
  photoSetsSettingsProto: Photo_set_ancient_fossilsdataphotosetssettingsproto;
  templateId: string;
}
export interface Photo_set_ancient_fossilsEntry {
  templateId: "PHOTO_SET_ANCIENT_FOSSILS";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_battle_pokemonEntry {
  templateId: "PHOTO_SET_BATTLE_POKEMON";
  data: Photo_set_aloladata;
}
export interface Photo_set_bundle_of_joyEntry {
  templateId: "PHOTO_SET_BUNDLE_OF_JOY";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_busy_cityEntry {
  templateId: "PHOTO_SET_BUSY_CITY";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_clawed_cutiesEntry {
  templateId: "PHOTO_SET_CLAWED_CUTIES";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_cute_pokemon_pinkEntry {
  templateId: "PHOTO_SET_CUTE_POKEMON_PINK";
  data: Photo_set_aloladata;
}
export interface Photo_set_fall_vibesEntry {
  templateId: "PHOTO_SET_FALL_VIBES";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_feathered_friendsEntry {
  templateId: "PHOTO_SET_FEATHERED_FRIENDS";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_feathered_friends_largeEntry {
  templateId: "PHOTO_SET_FEATHERED_FRIENDS_LARGE";
  data: Photo_set_aloladata;
}
export interface Photo_set_feeling_fancyEntry {
  templateId: "PHOTO_SET_FEELING_FANCY";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_furry_friendsEntry {
  templateId: "PHOTO_SET_FURRY_FRIENDS";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_furry_friends_largeEntry {
  templateId: "PHOTO_SET_FURRY_FRIENDS_LARGE";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_graceful_flyersEntry {
  templateId: "PHOTO_SET_GRACEFUL_FLYERS";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_hisuiEntry {
  templateId: "PHOTO_SET_HISUI";
  data: Photo_set_aloladata;
}
export interface Photo_set_hoennEntry {
  templateId: "PHOTO_SET_HOENN";
  data: Photo_set_aloladata;
}
export interface Photo_set_johtoEntry {
  templateId: "PHOTO_SET_JOHTO";
  data: Photo_set_aloladata;
}
export interface Photo_set_just_lovelyEntry {
  templateId: "PHOTO_SET_JUST_LOVELY";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_kalosEntry {
  templateId: "PHOTO_SET_KALOS";
  data: Photo_set_aloladata;
}
export interface Photo_set_kantoEntry {
  templateId: "PHOTO_SET_KANTO";
  data: Photo_set_aloladata;
}
export interface Photo_set_little_chonkersEntry {
  templateId: "PHOTO_SET_LITTLE_CHONKERS";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_mountain_passEntry {
  templateId: "PHOTO_SET_MOUNTAIN_PASS";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_museum_fossilsEntry {
  templateId: "PHOTO_SET_MUSEUM_FOSSILS";
  data: Photo_set_aloladata;
}
export interface Photo_set_paldeaEntry {
  templateId: "PHOTO_SET_PALDEA";
  data: Photo_set_aloladata;
}
export interface Photo_set_playful_pals_largeEntry {
  templateId: "PHOTO_SET_PLAYFUL_PALS_LARGE";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_relaxing_gardenEntry {
  templateId: "PHOTO_SET_RELAXING_GARDEN";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_safari_trekEntry {
  templateId: "PHOTO_SET_SAFARI_TREK";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_sandy_shorelineEntry {
  templateId: "PHOTO_SET_SANDY_SHORELINE";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_shadows_of_nightEntry {
  templateId: "PHOTO_SET_SHADOWS_OF_NIGHT";
  data: Photo_set_aloladata;
}
export interface Photo_set_sinnohEntry {
  templateId: "PHOTO_SET_SINNOH";
  data: Photo_set_aloladata;
}
export interface Photo_set_small_and_cuteEntry {
  templateId: "PHOTO_SET_SMALL_AND_CUTE";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_small_cute_pokemonEntry {
  templateId: "PHOTO_SET_SMALL_CUTE_POKEMON";
  data: Photo_set_aloladata;
}
export interface Photo_set_small_cute_pokemon_pikachu_and_eeveeEntry {
  templateId: "PHOTO_SET_SMALL_CUTE_POKEMON_PIKACHU_AND_EEVEE";
  data: Photo_set_aloladata;
}
export interface Photo_set_small_cute_pokemon_pinkEntry {
  templateId: "PHOTO_SET_SMALL_CUTE_POKEMON_PINK";
  data: Photo_set_aloladata;
}
export interface Photo_set_small_flower_pokemonEntry {
  templateId: "PHOTO_SET_SMALL_FLOWER_POKEMON";
  data: Photo_set_aloladata;
}
export interface Photo_set_small_flower_pokemon_mediumEntry {
  templateId: "PHOTO_SET_SMALL_FLOWER_POKEMON_MEDIUM";
  data: Photo_set_aloladata;
}
export interface Photo_set_small_flower_pokemon_seedsEntry {
  templateId: "PHOTO_SET_SMALL_FLOWER_POKEMON_SEEDS";
  data: Photo_set_aloladata;
}
export interface Photo_set_small_water_pokemonEntry {
  templateId: "PHOTO_SET_SMALL_WATER_POKEMON";
  data: Photo_set_aloladata;
}
export interface Photo_set_spring_vibesEntry {
  templateId: "PHOTO_SET_SPRING_VIBES";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_startersEntry {
  templateId: "PHOTO_SET_STARTERS";
  data: Photo_set_aloladata;
}
export interface Photo_set_summer_vibesEntry {
  templateId: "PHOTO_SET_SUMMER_VIBES";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_tiny_tikesEntry {
  templateId: "PHOTO_SET_TINY_TIKES";
  data: Photo_set_ancient_fossilsdata;
}
export interface Photo_set_unovaEntry {
  templateId: "PHOTO_SET_UNOVA";
  data: Photo_set_aloladata;
}
export interface Photo_set_wings_pokemonEntry {
  templateId: "PHOTO_SET_WINGS_POKEMON";
  data: Photo_set_aloladata;
}
export interface Photo_set_winter_vibesEntry {
  templateId: "PHOTO_SET_WINTER_VIBES";
  data: Photo_set_ancient_fossilsdata;
}
export interface Player_bonus_system_settingsdataplayerbonussystemsettings {
  dayNightEvoEnabled: boolean;
  maxBonusDurationMs: string;
}
export interface Player_bonus_system_settingsdata {
  playerBonusSystemSettings: Player_bonus_system_settingsdataplayerbonussystemsettings;
  templateId: string;
}
export interface Player_bonus_system_settingsEntry {
  templateId: "PLAYER_BONUS_SYSTEM_SETTINGS";
  data: Player_bonus_system_settingsdata;
}
export interface Player_level_settingsdataplayerlevelxprewardv2thresholds {
  source: string;
  threshold: number;
}
export interface Player_level_settingsdataplayerlevel {
  cpMultiplier: (number)[];
  extendedPlayerLevelThreshold: number;
  levelRequirementsV2Enabled: boolean;
  levelUpScreenV3Enabled: boolean;
  maxEggPlayerLevel: number;
  maxEncounterPlayerLevel: number;
  maxQuestEncounterPlayerLevel: number;
  milestoneLevels: (number)[];
  rankNum: (number)[];
  requiredExperience: (number)[];
  smoreFtueImageUrl: string;
  xpRewardV2Enabled: boolean;
  xpRewardV2Thresholds: Player_level_settingsdataplayerlevelxprewardv2thresholds;
}
export interface Player_level_settingsdata {
  playerLevel: Player_level_settingsdataplayerlevel;
  templateId: string;
}
export interface Player_level_settingsEntry {
  templateId: "PLAYER_LEVEL_SETTINGS";
  data: Player_level_settingsdata;
}
export interface Pokeball_throw_property_settingsdatapokeballthrowpropertysettingsthrowpropertiesitemcurveballmodifier {
  x: number;
  y: number;
  z: number;
}
export interface Pokeball_throw_property_settingsdatapokeballthrowpropertysettingsthrowpropertiesitemlaunchvelocitymultiplier {
  x: number;
  y: number;
}
export interface Pokeball_throw_property_settingsdatapokeballthrowpropertysettingsthrowpropertiesitem {
  belowGroundFlyTimeoutSeconds: number;
  curveballModifier: Pokeball_throw_property_settingsdatapokeballthrowpropertysettingsthrowpropertiesitemcurveballmodifier;
  dragSnapSpeed: number;
  flyTimeoutDuration: number;
  launchSpeedThreshold: number;
  launchVelocityMultiplier: Pokeball_throw_property_settingsdatapokeballthrowpropertysettingsthrowpropertiesitemlaunchvelocitymultiplier;
  maxAngularVelocity: number;
  maxLaunchAngle: number;
  maxLaunchAngleHeight: number;
  maxLaunchSpeed: number;
  minLaunchAngle: number;
  minSpinParticleAmount: number;
  overshootCorrection: number;
  throwProertiesCategory: string;
  undershootCorrection: number;
}
export interface Pokeball_throw_property_settingsdatapokeballthrowpropertysettings {
  throwProperties: (Pokeball_throw_property_settingsdatapokeballthrowpropertysettingsthrowpropertiesitem)[];
}
export interface Pokeball_throw_property_settingsdata {
  pokeballThrowPropertySettings: Pokeball_throw_property_settingsdatapokeballthrowpropertysettings;
  templateId: string;
}
export interface Pokeball_throw_property_settingsEntry {
  templateId: "POKEBALL_THROW_PROPERTY_SETTINGS";
  data: Pokeball_throw_property_settingsdata;
}
export interface Pokecoin_purchase_display_gmtdatapokecoinpurchasedisplaygmt {
  featureEnabled: boolean;
}
export interface Pokecoin_purchase_display_gmtdata {
  pokecoinPurchaseDisplayGmt: Pokecoin_purchase_display_gmtdatapokecoinpurchasedisplaygmt;
  templateId: string;
}
export interface Pokecoin_purchase_display_gmtEntry {
  templateId: "POKECOIN_PURCHASE_DISPLAY_GMT";
  data: Pokecoin_purchase_display_gmtdata;
}
export interface Pokedexv2_feature_flagsdatapokedexv2featureflags {
  celebV1Flag: number;
  detailBattleFlag: number;
  detailV1Flag: number;
  isFeatureEnabled: boolean;
  navigationFlag: number;
  notificationFlag: number;
}
export interface Pokedexv2_feature_flagsdata {
  pokedexv2FeatureFlags: Pokedexv2_feature_flagsdatapokedexv2featureflags;
  templateId: string;
}
export interface Pokedexv2_feature_flagsEntry {
  templateId: "POKEDEXV2_FEATURE_FLAGS";
  data: Pokedexv2_feature_flagsdata;
}
export interface Pokedex_categories_settingsdatapokedexcategoriessettingspokedexcategorysettingsinorderitem {
  milestoneGoal: number;
  pokedexCategory: string | number;
  visuallyHidden?: boolean;
}
export interface Pokedex_categories_settingsdatapokedexcategoriessettings {
  clientShinyFormCheck: boolean;
  featureEnabled: boolean;
  pokedexCategorySettingsInOrder: (Pokedex_categories_settingsdatapokedexcategoriessettingspokedexcategorysettingsinorderitem)[];
  searchEnabled: boolean;
  showDexAfterNewFormEnabled: boolean;
  showShinyDexCelebrationEnabled: boolean;
}
export interface Pokedex_categories_settingsdata {
  pokedexCategoriesSettings: Pokedex_categories_settingsdatapokedexcategoriessettings;
  templateId: string;
}
export interface Pokedex_categories_settingsEntry {
  templateId: "POKEDEX_CATEGORIES_SETTINGS";
  data: Pokedex_categories_settingsdata;
}
export interface Pokedex_size_stats_system_settingsdatapokedexsizestatssystemsettings {
  displayEnabled: boolean;
  enableRandomizedHeightAndWeightForWildPokemon: boolean;
  numDaysNewBubbleTrack: number;
  pokedexDisplayPokemonTrackedThreshold: number;
  recordDisplayPokemonTrackedThreshold: number;
}
export interface Pokedex_size_stats_system_settingsdata {
  pokedexSizeStatsSystemSettings: Pokedex_size_stats_system_settingsdatapokedexsizestatssystemsettings;
  templateId: string;
}
export interface Pokedex_size_stats_system_settingsEntry {
  templateId: "POKEDEX_SIZE_STATS_SYSTEM_SETTINGS";
  data: Pokedex_size_stats_system_settingsdata;
}
export interface Pokedex_v2_settingsdatapokedexv2settings {
  maxTrackedPokemon: number;
  pokemonAlertExcluded: (string)[];
}
export interface Pokedex_v2_settingsdata {
  pokedexV2Settings: Pokedex_v2_settingsdatapokedexv2settings;
  templateId: string;
}
export interface Pokedex_v2_settingsEntry {
  templateId: "POKEDEX_V2_SETTINGS";
  data: Pokedex_v2_settingsdata;
}
export interface Popup_control_settingsdatapopupcontrolsettings {
  hideAwareOfYourSurroundingsPopup: boolean;
  hideMedalEarnedPopupUnitAfterFirstPokemon: boolean;
  hideWeatherWarningPopup: boolean;
}
export interface Popup_control_settingsdata {
  popupControlSettings: Popup_control_settingsdatapopupcontrolsettings;
  templateId: string;
}
export interface Popup_control_settingsEntry {
  templateId: "POPUP_CONTROL_SETTINGS";
  data: Popup_control_settingsdata;
}
export interface Postcard_collection_settingsdata {
  postcardCollectionSettings: Additive_scene_settingsdataadditivescenesettings;
  templateId: string;
}
export interface Postcard_collection_settingsEntry {
  templateId: "POSTCARD_COLLECTION_SETTINGS";
  data: Postcard_collection_settingsdata;
}
export interface Power_up_pokestop_shared_settingsdatapoweruppokestopssettings {
  powerUpPokestopsMinPlayerLevel: number;
  validatePokestopOnFortSearchPercent: number;
}
export interface Power_up_pokestop_shared_settingsdata {
  powerUpPokestopsSettings: Power_up_pokestop_shared_settingsdatapoweruppokestopssettings;
  templateId: string;
}
export interface Power_up_pokestop_shared_settingsEntry {
  templateId: "POWER_UP_POKESTOP_SHARED_SETTINGS";
  data: Power_up_pokestop_shared_settingsdata;
}
export interface Predict_charge_move_on_submit_roll_back_code_gateEntry {
  templateId: "PREDICT_CHARGE_MOVE_ON_SUBMIT_ROLL_BACK_CODE_GATE";
  data: Ibfc_lws_code_gatedata;
}
export interface Primal_evo_settingsdataprimalevosettingscommontempsettings {
  enableBuddyWalkingTempEvoEnergyAward: boolean;
  evolutionLengthMs: string;
  numTempEvoLevels: number;
}
export interface Primal_evo_settingsdataprimalevosettingstypeboostsitem {
  boostType: (string)[];
  pokemonId: string;
}
export interface Primal_evo_settingsdataprimalevosettings {
  commonTempSettings: Primal_evo_settingsdataprimalevosettingscommontempsettings;
  maxCandyHoardSize: number;
  typeBoosts: (Primal_evo_settingsdataprimalevosettingstypeboostsitem)[];
}
export interface Primal_evo_settingsdata {
  primalEvoSettings: Primal_evo_settingsdataprimalevosettings;
  templateId: string;
}
export interface Primal_evo_settingsEntry {
  templateId: "PRIMAL_EVO_SETTINGS";
  data: Primal_evo_settingsdata;
}
export interface Ptc_oauth_settingsdataptcoauthsettings {
  endTimeMs: string;
  linkingRewardItem: string;
  ptcAccountLinkingEnabled: boolean;
}
export interface Ptc_oauth_settingsdata {
  ptcOauthSettings: Ptc_oauth_settingsdataptcoauthsettings;
  templateId: string;
}
export interface Ptc_oauth_settingsEntry {
  templateId: "PTC_OAUTH_SETTINGS";
  data: Ptc_oauth_settingsdata;
}
export interface Push_gateway_multi_action_code_gateEntry {
  templateId: "PUSH_GATEWAY_MULTI_ACTION_CODE_GATE";
  data: Ibfc_lws_code_gatedata;
}
export interface Quest_first_catch_of_the_daydataquestsettingsdailyquest {
  bucketsPerDay: number;
  streakLength: number;
}
export interface Quest_first_catch_of_the_daydataquestsettings {
  dailyQuest: Quest_first_catch_of_the_daydataquestsettingsdailyquest;
  questType: string;
}
export interface Quest_first_catch_of_the_daydata {
  questSettings: Quest_first_catch_of_the_daydataquestsettings;
  templateId: string;
}
export interface Quest_first_catch_of_the_dayEntry {
  templateId: "QUEST_FIRST_CATCH_OF_THE_DAY";
  data: Quest_first_catch_of_the_daydata;
}
export interface Quest_first_pokestop_of_the_daydataquestsettingsdailyquest {
  bonusMultiplier: number;
  bucketsPerDay: number;
  streakBonusMultiplier: number;
  streakLength: number;
}
export interface Quest_first_pokestop_of_the_daydataquestsettings {
  dailyQuest: Quest_first_pokestop_of_the_daydataquestsettingsdailyquest;
  questType: string;
}
export interface Quest_first_pokestop_of_the_daydata {
  questSettings: Quest_first_pokestop_of_the_daydataquestsettings;
  templateId: string;
}
export interface Quest_first_pokestop_of_the_dayEntry {
  templateId: "QUEST_FIRST_POKESTOP_OF_THE_DAY";
  data: Quest_first_pokestop_of_the_daydata;
}
export interface Quest_first_route_of_the_dayEntry {
  templateId: "QUEST_FIRST_ROUTE_OF_THE_DAY";
  data: Quest_first_catch_of_the_daydata;
}
export interface Quick_invite_settings_raiddataquickinvitesettings {
  enabled: boolean;
  suggestedPlayersVariation: string;
}
export interface Quick_invite_settings_raiddata {
  quickInviteSettings: Quick_invite_settings_raiddataquickinvitesettings;
  templateId: string;
}
export interface Quick_invite_settings_raidEntry {
  templateId: "QUICK_INVITE_SETTINGS_RAID";
  data: Quick_invite_settings_raiddata;
}
export interface Raid_client_settingsdataraidsettingspokemonmusicoverridesitem {
  battleMusicKey: string;
  forms?: (string)[];
  pokemon: string;
}
export interface Raid_client_settingsdataraidsettingsraidfeatureflags {
  useCachedRaidBossPokemon: boolean;
}
export interface Raid_client_settingsdataraidsettingsraidlevelmusicoverridesitem {
  battleMusicKey: string;
  raidLevel: string;
}
export interface Raid_client_settingsdataraidsettings {
  ablcemdnbkc: boolean;
  bootCutoffMs: number;
  bootRaidEnabled: boolean;
  bootSoloMs: number;
  canInviteFriendsInPerson: boolean;
  canInviteFriendsRemotely: boolean;
  failedFriendInviteInfoEnabled: boolean;
  fetchProfileFromSocialEnabled: boolean;
  friendInviteCutoffTimeSec: number;
  friendRequestsEnabled: boolean;
  inviteCooldownDurationMillis: string;
  maxNumFriendInvites: number;
  maxNumFriendInvitesPerAction: number;
  maxPlayersPerLobby: number;
  maxRemotePlayersPerLobby: number;
  maxRemoteRaidPasses: number;
  minPlayersToBoot: number;
  obRaidClientSettingsNumber1: number;
  obRaidClientSettingsNumber29: number;
  pokemonMusicOverrides: (Raid_client_settingsdataraidsettingspokemonmusicoverridesitem)[];
  popupTimeMs: number;
  raidFeatureFlags: Raid_client_settingsdataraidsettingsraidfeatureflags;
  raidLevelMusicOverrides: (Raid_client_settingsdataraidsettingsraidlevelmusicoverridesitem)[];
  remoteDamageModifier: number;
  remoteRaidDistanceValidation: boolean;
  remoteRaidEnabled: boolean;
  remoteRaidsMinPlayerLevel: number;
  unsupportedRaidLevelsForFriendInvites: (string)[];
  unsupportedRemoteRaidLevels: (string)[];
}
export interface Raid_client_settingsdata {
  raidSettings: Raid_client_settingsdataraidsettings;
  templateId: string;
}
export interface Raid_client_settingsEntry {
  templateId: "RAID_CLIENT_SETTINGS";
  data: Raid_client_settingsdata;
}
export interface Raid_entry_cost_settingsdata {
  templateId: string;
}
export interface Raid_entry_cost_settingsEntry {
  templateId: "RAID_ENTRY_COST_SETTINGS";
  data: Raid_entry_cost_settingsdata;
}
export interface Raid_lobby_counter_settingsdataraidlobbycountersettings {
  mapDisplayEnabled: boolean;
  maxCountToUpdate: number;
  nearbyDisplayEnabled: boolean;
  pollingEnabled: boolean;
  pollingIntervalMs: number;
  pollingRadiusMeters: number;
  publishCutoffTimeMs: number;
  publishEnabled: boolean;
  showCounterRadiusMeters: number;
  subscribeEnabled: boolean;
  subscribeS2Level: number;
  subscriptionNamespace: string;
}
export interface Raid_lobby_counter_settingsdata {
  raidLobbyCounterSettings: Raid_lobby_counter_settingsdataraidlobbycountersettings;
  templateId: string;
}
export interface Raid_lobby_counter_settingsEntry {
  templateId: "RAID_LOBBY_COUNTER_SETTINGS";
  data: Raid_lobby_counter_settingsdata;
}
export interface Recommended_search_appraisal_iv_highdatarecommendedsearchsettings {
  appendSearchString: string;
  searchLabel: string;
}
export interface Recommended_search_appraisal_iv_highdata {
  recommendedSearchSettings: Recommended_search_appraisal_iv_highdatarecommendedsearchsettings;
  templateId: string;
}
export interface Recommended_search_appraisal_iv_highEntry {
  templateId: "RECOMMENDED_SEARCH_APPRAISAL_IV_HIGH";
  data: Recommended_search_appraisal_iv_highdata;
}
export interface Recommended_search_appraisal_iv_lowEntry {
  templateId: "RECOMMENDED_SEARCH_APPRAISAL_IV_LOW";
  data: Recommended_search_appraisal_iv_highdata;
}
export interface Recommended_search_appraisal_label_evolve_megadatarecommendedsearchsettings {
  searchKey: string;
  searchLabel: string;
}
export interface Recommended_search_appraisal_label_evolve_megadata {
  recommendedSearchSettings: Recommended_search_appraisal_label_evolve_megadatarecommendedsearchsettings;
  templateId: string;
}
export interface Recommended_search_appraisal_label_evolve_megaEntry {
  templateId: "RECOMMENDED_SEARCH_APPRAISAL_LABEL_EVOLVE_MEGA";
  data: Recommended_search_appraisal_label_evolve_megadata;
}
export interface Recommended_search_badge_kanto_regionEntry {
  templateId: "RECOMMENDED_SEARCH_BADGE_KANTO_REGION";
  data: Recommended_search_appraisal_label_evolve_megadata;
}
export interface Recommended_search_filter_label_evolvableEntry {
  templateId: "RECOMMENDED_SEARCH_FILTER_LABEL_EVOLVABLE";
  data: Recommended_search_appraisal_label_evolve_megadata;
}
export interface Recommended_search_filter_label_hatchedEntry {
  templateId: "RECOMMENDED_SEARCH_FILTER_LABEL_HATCHED";
  data: Recommended_search_appraisal_label_evolve_megadata;
}
export interface Recommended_search_filter_label_legendaryEntry {
  templateId: "RECOMMENDED_SEARCH_FILTER_LABEL_LEGENDARY";
  data: Recommended_search_appraisal_label_evolve_megadata;
}
export interface Recommended_search_filter_label_shinyEntry {
  templateId: "RECOMMENDED_SEARCH_FILTER_LABEL_SHINY";
  data: Recommended_search_appraisal_label_evolve_megadata;
}
export interface Recommended_search_filter_label_tradedEntry {
  templateId: "RECOMMENDED_SEARCH_FILTER_LABEL_TRADED";
  data: Recommended_search_appraisal_label_evolve_megadata;
}
export interface Recommended_search_pokemon_type_normalEntry {
  templateId: "RECOMMENDED_SEARCH_POKEMON_TYPE_NORMAL";
  data: Recommended_search_appraisal_label_evolve_megadata;
}
export interface Referral_settingsdatareferralsettingsrecentfeaturesitem {
  description: string;
  featureName: string;
  iconType: string | number;
}
export interface Referral_settingsdatareferralsettings {
  addReferrerGracePeriodMs: string;
  deepLinkUrl: string;
  featureEnabled: boolean;
  imageShareReferralEnabled: boolean;
  minNumDaysWithoutSessionForLapsedPlayer: number;
  recentFeatures: (Referral_settingsdatareferralsettingsrecentfeaturesitem)[];
}
export interface Referral_settingsdata {
  referralSettings: Referral_settingsdatareferralsettings;
  templateId: string;
}
export interface Referral_settingsEntry {
  templateId: "REFERRAL_SETTINGS";
  data: Referral_settingsdata;
}
export interface Remote_raid_limit_settingsdatasquashsettings {
  dailySquashLimit: number;
  enabled: boolean;
}
export interface Remote_raid_limit_settingsdata {
  squashSettings: Remote_raid_limit_settingsdatasquashsettings;
  templateId: string;
}
export interface Remote_raid_limit_settingsEntry {
  templateId: "REMOTE_RAID_LIMIT_SETTINGS";
  data: Remote_raid_limit_settingsdata;
}
export interface Remote_trade_settingsdataremotetradesettings {
  enabled: boolean;
  maxRemoteTradesPerDay: number;
  pokemonUntradableDays: number;
  requestedPokemonCount: number;
  taggingUnlockPointThreshold: number;
  timeLimitMinutes: number;
  tradeExpiryReminderMinutes: number;
}
export interface Remote_trade_settingsdata {
  remoteTradeSettings: Remote_trade_settingsdataremotetradesettings;
  templateId: string;
}
export interface Remote_trade_settingsEntry {
  templateId: "REMOTE_TRADE_SETTINGS";
  data: Remote_trade_settingsdata;
}
export interface Routes_nearby_notif_settingsdataroutesnearbynotifsettings {
  maxNotifs: number;
  timeBetweenNotifsMs: string;
}
export interface Routes_nearby_notif_settingsdata {
  routesNearbyNotifSettings: Routes_nearby_notif_settingsdataroutesnearbynotifsettings;
  templateId: string;
}
export interface Routes_nearby_notif_settingsEntry {
  templateId: "ROUTES_NEARBY_NOTIF_SETTINGS";
  data: Routes_nearby_notif_settingsdata;
}
export interface Routes_party_play_interop_settingsdataroutespartyplayinteropsettings {
  consumptionInteroperable: boolean;
}
export interface Routes_party_play_interop_settingsdata {
  routesPartyPlayInteropSettings: Routes_party_play_interop_settingsdataroutespartyplayinteropsettings;
  templateId: string;
}
export interface Routes_party_play_interop_settingsEntry {
  templateId: "ROUTES_PARTY_PLAY_INTEROP_SETTINGS";
  data: Routes_party_play_interop_settingsdata;
}
export interface Route_badge_settingsdataroutebadgesettings {
  target: (number)[];
}
export interface Route_badge_settingsdata {
  routeBadgeSettings: Route_badge_settingsdataroutebadgesettings;
  templateId: string;
}
export interface Route_badge_settingsEntry {
  templateId: "ROUTE_BADGE_SETTINGS";
  data: Route_badge_settingsdata;
}
export interface Route_creation_settingsdataroutecreationsettingsclientbreadcrumbsettings {
  asFallbackForegroundReportingInvervalS: number;
  sessionDurationM: number;
  updateIntervalS: number;
}
export interface Route_creation_settingsdataroutecreationsettings {
  allowableGpsDriftMeters: number;
  allowAppeals: boolean;
  clientBreadcrumbSettings: Route_creation_settingsdataroutecreationsettingsclientbreadcrumbsettings;
  creationLimitPerWindow: number;
  creationLimitWindowDays: number;
  disabledTags: (string)[];
  durationBufferS: number;
  durationDistanceToSpeedMultiplier: number;
  enabled: boolean;
  enableImmediateRouteIngestion: boolean;
  interactionRangeMeters: number;
  maxClientMapPanningDistanceM: number;
  maxDescriptionLength: number;
  maxDistanceFromAnchorPotsM: number;
  maxDistanceWarningDistanceMeters: number;
  maxNameLength: number;
  maxOpenRoutes: number;
  maxPostPunishmentBanTimeMs: string;
  maxRecallCountThreshold: number;
  maxRecordingSpeedMetersPerSecond: number;
  maxSubmissionCountThreshold: number;
  maxTotalDistanceM: number;
  minBreadcrumbDistanceDeltaMeters: number;
  minPlayerLevel: number;
  minTotalDistanceM: number;
  moderationEnabled: boolean;
  resumeRangeMeters: number;
  showSubmissionStatusHistory: boolean;
}
export interface Route_creation_settingsdata {
  routeCreationSettings: Route_creation_settingsdataroutecreationsettings;
  templateId: string;
}
export interface Route_creation_settingsEntry {
  templateId: "ROUTE_CREATION_SETTINGS";
  data: Route_creation_settingsdata;
}
export interface Route_discovery_settingsdataroutediscoverysettings {
  enableBadgeRoutesDiscovery: boolean;
  maxBadgeRoutesDiscoverySpannerTxns: number;
  maxClientMapPanningDistanceMeters: number;
  maxFavoriteRoutes: number;
  maxRoutesViewable: number;
  nearbyVisibleRadiusMeters: number;
  newRouteThreshold: number;
  popularRoutesFraction: number;
}
export interface Route_discovery_settingsdata {
  routeDiscoverySettings: Route_discovery_settingsdataroutediscoverysettings;
  templateId: string;
}
export interface Route_discovery_settingsEntry {
  templateId: "ROUTE_DISCOVERY_SETTINGS";
  data: Route_discovery_settingsdata;
}
export interface Route_pin_settingsdataroutepinsettingspinmessageitem {
  category: (string)[];
  key: string;
  levelRequired: number;
}
export interface Route_pin_settingsdataroutepinsettings {
  creatorMax: number;
  maxDistanceFromRouteM: number;
  maxNamedStickersPerPin: number;
  maxPinsForClientDisplay: number;
  maxPinsPerRoute: number;
  pinMessage: (Route_pin_settingsdataroutepinsettingspinmessageitem)[];
  playerMax: number;
}
export interface Route_pin_settingsdata {
  routePinSettings: Route_pin_settingsdataroutepinsettings;
  templateId: string;
}
export interface Route_pin_settingsEntry {
  templateId: "ROUTE_PIN_SETTINGS";
  data: Route_pin_settingsdata;
}
export interface Route_play_settingsdatarouteplaysettings {
  bonusActiveDistanceThresholdMeters: number;
  enableRouteRatingDetails: boolean;
  marginMinimumMeters: number;
  marginPercentage: number;
  minPlayerLevel: number;
  obRoutePlaySettingsNumber29: number;
  obRoutePlaySettingsNumber30: number;
  obRoutePlaySettingsNumber33: number;
  obRoutePlaySettingsNumber45: number;
  resumeRangeMeters: number;
  routeEngagementStatsShardCount: number;
  routeExpirationMinutes: number;
  routePauseDistanceM: number;
}
export interface Route_play_settingsdata {
  routePlaySettings: Route_play_settingsdatarouteplaysettings;
  templateId: string;
}
export interface Route_play_settingsEntry {
  templateId: "ROUTE_PLAY_SETTINGS";
  data: Route_play_settingsdata;
}
export interface Route_stamp_category_defaultdataroutestampcategorysettings {
  active: boolean;
  category: string;
  collectionSize: number;
  sortOrder: number;
}
export interface Route_stamp_category_defaultdata {
  routeStampCategorySettings: Route_stamp_category_defaultdataroutestampcategorysettings;
  templateId: string;
}
export interface Route_stamp_category_defaultEntry {
  templateId: "ROUTE_STAMP_CATEGORY_DEFAULT";
  data: Route_stamp_category_defaultdata;
}
export interface Settings_rules_allow_asusasus_i006ddatasettingsoverriderule {
  meshingEnabled: string;
  occlusionEnabled: string;
  ruleType: string;
  ruleValue: string;
  semanticsEnabled: string;
  sortOrder: number;
  vpsEnabled: string;
}
export interface Settings_rules_allow_asusasus_i006ddata {
  settingsOverrideRule: Settings_rules_allow_asusasus_i006ddatasettingsoverriderule;
  templateId: string;
}
export interface Settings_rules_allow_asusasus_i006dEntry {
  templateId: "SETTINGS_RULES_ALLOW_ASUSASUS_I006D";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_googlepixel6Entry {
  templateId: "SETTINGS_RULES_ALLOW_GOOGLEPIXEL6";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_googlepixel6aEntry {
  templateId: "SETTINGS_RULES_ALLOW_GOOGLEPIXEL6A";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_googlepixel6proEntry {
  templateId: "SETTINGS_RULES_ALLOW_GOOGLEPIXEL6PRO";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_googlepixel7Entry {
  templateId: "SETTINGS_RULES_ALLOW_GOOGLEPIXEL7";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_googlepixel7aEntry {
  templateId: "SETTINGS_RULES_ALLOW_GOOGLEPIXEL7A";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_googlepixel7proEntry {
  templateId: "SETTINGS_RULES_ALLOW_GOOGLEPIXEL7PRO";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_googlepixel8Entry {
  templateId: "SETTINGS_RULES_ALLOW_GOOGLEPIXEL8";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_googlepixel8proEntry {
  templateId: "SETTINGS_RULES_ALLOW_GOOGLEPIXEL8PRO";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_googlepixel9Entry {
  templateId: "SETTINGS_RULES_ALLOW_GOOGLEPIXEL9";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_googlepixel9proEntry {
  templateId: "SETTINGS_RULES_ALLOW_GOOGLEPIXEL9PRO";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_googlepixelprofoldEntry {
  templateId: "SETTINGS_RULES_ALLOW_GOOGLEPIXELPROFOLD";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_googlepixelproxlEntry {
  templateId: "SETTINGS_RULES_ALLOW_GOOGLEPIXELPROXL";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_lgelm_v600Entry {
  templateId: "SETTINGS_RULES_ALLOW_LGELM_V600";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_motorolamotorolaedge40Entry {
  templateId: "SETTINGS_RULES_ALLOW_MOTOROLAMOTOROLAEDGE40";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_onepluscph2399Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUSCPH2399";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_onepluscph2449Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUSCPH2449";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplusdn2103Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUSDN2103";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_onepluskb2003Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUSKB2003";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplusle2113Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUSLE2113";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplusle2123Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUSLE2123";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplusne2213Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUSNE2213";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_cph2413Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2413";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_cph2415Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2415";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_cph2417Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2417";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_cph2447Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2447";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_cph2451Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2451";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_cph2573Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2573";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_cph2581Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2581";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_cph2583Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2583";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_cph2585Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2585";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_cph2609Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2609";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_le2115Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_LE2115";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_le2120Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_LE2120";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_le2121Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_LE2121";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_le2123Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_LE2123";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_le2125Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_LE2125";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_le2127Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_LE2127";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_ne2210Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_NE2210";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_ne2211Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_NE2211";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_ne2213Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_NE2213";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_ne2215Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_NE2215";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_ne2217Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_NE2217";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_phb110Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_PHB110";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oneplus_pjd110Entry {
  templateId: "SETTINGS_RULES_ALLOW_ONEPLUS_PJD110";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_oppocph2359Entry {
  templateId: "SETTINGS_RULES_ALLOW_OPPOCPH2359";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungscg09Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSCG09";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungscg13Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSCG13";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsc_51aEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSC_51A";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsc_51bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSC_51B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsc_51cEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSC_51C";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsc_51dEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSC_51D";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsc_52cEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSC_52C";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsc_52dEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSC_52D";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsc_a528bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSC_A528B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f711bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F711B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f711nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F711N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f711uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F711U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f721bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F721B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f721nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F721N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f721uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F721U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f731bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F731B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f731nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F731N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f731uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F731U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f926bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F926B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f926nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F926N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f926uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F926U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f936bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F936B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f936nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F936N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f936uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F936U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f946bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F946B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f946nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F946N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_f946uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_F946U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g780fEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G780F";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g780gEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G780G";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g781bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G781B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g781nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G781N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g781uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G781U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g781u1Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G781U1";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g781vEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G781V";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g781wEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G781W";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g980fEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G980F";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g981bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G981B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g981nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G981N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g981uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G981U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g981u1Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G981U1";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g985fEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G985F";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g986bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G986B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g986nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G986N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g986uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G986U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g986u1Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G986U1";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g988bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G988B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g988nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G988N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g988uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G988U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g990bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G990B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g990b2Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G990B2";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g990eEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G990E";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g990uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G990U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g990u2Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G990U2";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g990w2Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G990W2";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g9910Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G9910";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g991bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G991B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g991nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G991N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g991uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G991U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g991u1Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G991U1";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g991wEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G991W";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g996bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G996B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g996nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G996N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g996uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G996U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g996u1Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G996U1";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g998bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G998B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g998nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G998N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g998uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G998U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_g998u1Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_G998U1";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_n970uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_N970U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_n980fEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_N980F";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_n981bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_N981B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_n981nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_N981N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_n981uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_N981U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_n9860Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_N9860";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_n986bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_N986B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_n986nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_N986N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_n986uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_N986U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_n986u1Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_N986U1";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s711bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S711B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s711nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S711N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s711uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S711U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s711wEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S711W";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s901bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S901B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s901eEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S901E";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s901nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S901N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s901uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S901U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s901u1Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S901U1";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s901wEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S901W";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s9060Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S9060";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s906bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S906B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s906eEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S906E";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s906nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S906N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s906uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S906U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s906u1Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S906U1";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s9080Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S9080";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s908bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S908B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s908eEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S908E";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s908nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S908N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s908uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S908U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s908u1Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S908U1";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s908wEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S908W";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s911bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S911B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s911nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S911N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s911uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S911U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s911u1Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S911U1";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s911wEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S911W";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s9160Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S9160";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s916bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S916B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s916nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S916N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s916uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S916U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s916u1Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S916U1";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s9180Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S9180";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s918bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S918B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s918nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S918N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s918uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S918U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s918u1Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S918U1";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s918wEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S918W";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s921bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S921B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s921nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S921N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s9260Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S9260";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s926uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S926U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s9280Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S9280";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s928bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S928B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s928nEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S928N";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s928uEntry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S928U";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_samsungsm_s928u1Entry {
  templateId: "SETTINGS_RULES_ALLOW_SAMSUNGSM_S928U1";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sharpsh_51bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SHARPSH_51B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sonysog02Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONYSOG02";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sonysog05Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONYSOG05";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sonysog06Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONYSOG06";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sonyso_51aEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONYSO_51A";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sonyso_51bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONYSO_51B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sonyso_51cEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONYSO_51C";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sonyso_52aEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONYSO_52A";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sonyso_53bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONYSO_53B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sonyso_54cEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONYSO_54C";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_a002soEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_A002SO";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_a101soEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_A101SO";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_a103soEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_A103SO";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_a201soEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_A201SO";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_so53bEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_SO53B";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_sog01Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_SOG01";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_sog03Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_SOG03";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xperia_1_iiEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XPERIA_1_II";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xperia_1_iiiEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XPERIA_1_III";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xperia_1_ivEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XPERIA_1_IV";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xperia_1_vEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XPERIA_1_V";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xperia_5_iiEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XPERIA_5_II";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xperia_5_iiiEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XPERIA_5_III";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xperia_5_vEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XPERIA_5_V";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xperia_proEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XPERIA_PRO";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xperia_proiEntry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XPERIA_PROI";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqaq52Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQAQ52";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqaq62Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQAQ62";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqas42Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQAS42";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqas52Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQAS52";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqas62Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQAS62";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqas72Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQAS72";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqat42Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQAT42";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqat51Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQAT51";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqat52Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQAT52";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqat72Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQAT72";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqbc42Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQBC42";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqbc52Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQBC52";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqbc62Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQBC62";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqbc72Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQBC72";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqbe52Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQBE52";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqbe62Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQBE62";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqbe72Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQBE72";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqbq42Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQBQ42";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqbq52Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQBQ52";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqbq62Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQBQ62";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqbq72Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQBQ72";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqct54Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQCT54";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqct62Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQCT62";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xqct72Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQCT72";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xq_de44Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQ_DE44";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_sony_xq_dq44Entry {
  templateId: "SETTINGS_RULES_ALLOW_SONY_XQ_DQ44";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_xiaomi21061110agEntry {
  templateId: "SETTINGS_RULES_ALLOW_XIAOMI21061110AG";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_xiaomi2107113sgEntry {
  templateId: "SETTINGS_RULES_ALLOW_XIAOMI2107113SG";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_xiaomi21081111rgEntry {
  templateId: "SETTINGS_RULES_ALLOW_XIAOMI21081111RG";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_xiaomi21121210gEntry {
  templateId: "SETTINGS_RULES_ALLOW_XIAOMI21121210G";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_xiaomi2201123gEntry {
  templateId: "SETTINGS_RULES_ALLOW_XIAOMI2201123G";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_xiaomi22021211rgEntry {
  templateId: "SETTINGS_RULES_ALLOW_XIAOMI22021211RG";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_xiaomi22041216gEntry {
  templateId: "SETTINGS_RULES_ALLOW_XIAOMI22041216G";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_xiaomi22081212ugEntry {
  templateId: "SETTINGS_RULES_ALLOW_XIAOMI22081212UG";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_xiaomi23049pcd8gEntry {
  templateId: "SETTINGS_RULES_ALLOW_XIAOMI23049PCD8G";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_xiaomim2007j3sgEntry {
  templateId: "SETTINGS_RULES_ALLOW_XIAOMIM2007J3SG";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_xiaomim2007j3syEntry {
  templateId: "SETTINGS_RULES_ALLOW_XIAOMIM2007J3SY";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_xiaomim2012k11agEntry {
  templateId: "SETTINGS_RULES_ALLOW_XIAOMIM2012K11AG";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_allow_xiaomim2102k1acEntry {
  templateId: "SETTINGS_RULES_ALLOW_XIAOMIM2102K1AC";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_androidEntry {
  templateId: "SETTINGS_RULES_ANDROID";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_android_14_onwarddatasettingsoverriderule {
  occlusionEnabled: string;
  ruleType: number;
  ruleValue: string;
  semanticsEnabled: string;
  sortOrder: number;
}
export interface Settings_rules_android_14_onwarddata {
  settingsOverrideRule: Settings_rules_android_14_onwarddatasettingsoverriderule;
  templateId: string;
}
export interface Settings_rules_android_14_onwardEntry {
  templateId: "SETTINGS_RULES_ANDROID_14_ONWARD";
  data: Settings_rules_android_14_onwarddata;
}
export interface Settings_rules_basedatasettingsoverriderule {
  fusedDepthEnabled: string;
  meshingEnabled: string;
  occlusionDefaultOn: string;
  occlusionEnabled: string;
  ruleType: string;
  semanticsEnabled: string;
  sortOrder: number;
  vpsEnabled: string;
}
export interface Settings_rules_basedata {
  settingsOverrideRule: Settings_rules_basedatasettingsoverriderule;
  templateId: string;
}
export interface Settings_rules_baseEntry {
  templateId: "SETTINGS_RULES_BASE";
  data: Settings_rules_basedata;
}
export interface Settings_rules_deny_googlepixel10Entry {
  templateId: "SETTINGS_RULES_DENY_GOOGLEPIXEL10";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_deny_googlepixel10proEntry {
  templateId: "SETTINGS_RULES_DENY_GOOGLEPIXEL10PRO";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_deny_googlepixel10profoldEntry {
  templateId: "SETTINGS_RULES_DENY_GOOGLEPIXEL10PROFOLD";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_deny_googlepixel10proxlEntry {
  templateId: "SETTINGS_RULES_DENY_GOOGLEPIXEL10PROXL";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_deny_ipad4Entry {
  templateId: "SETTINGS_RULES_DENY_IPAD4";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_deny_ipad5Entry {
  templateId: "SETTINGS_RULES_DENY_IPAD5";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_deny_ipad6Entry {
  templateId: "SETTINGS_RULES_DENY_IPAD6";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_deny_iphone6Entry {
  templateId: "SETTINGS_RULES_DENY_IPHONE6";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_deny_iphone7Entry {
  templateId: "SETTINGS_RULES_DENY_IPHONE7";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Settings_rules_deny_iphoneseEntry {
  templateId: "SETTINGS_RULES_DENY_IPHONESE";
  data: Settings_rules_allow_asusasus_i006ddata;
}
export interface Shared_fusion_settingsdatasharedfusionsettings {
  fusionEnabled: boolean;
}
export interface Shared_fusion_settingsdata {
  sharedFusionSettings: Shared_fusion_settingsdatasharedfusionsettings;
  templateId: string;
}
export interface Shared_fusion_settingsEntry {
  templateId: "SHARED_FUSION_SETTINGS";
  data: Shared_fusion_settingsdata;
}
export interface Shared_move_settingsdatasharedmovesettings {
  purifiedThirdMoveUnlockCandyMultiplier: number;
  purifiedThirdMoveUnlockStardustMultiplier: number;
  shadowThirdMoveUnlockCandyMultiplier: number;
  shadowThirdMoveUnlockStardustMultiplier: number;
  sharedMoveSettingsBool1: boolean;
}
export interface Shared_move_settingsdata {
  sharedMoveSettings: Shared_move_settingsdatasharedmovesettings;
  templateId: string;
}
export interface Shared_move_settingsEntry {
  templateId: "SHARED_MOVE_SETTINGS";
  data: Shared_move_settingsdata;
}
export interface Soft_sfida_settingsEntry {
  templateId: "SOFT_SFIDA_SETTINGS";
  data: Raid_entry_cost_settingsdata;
}
export interface Sourdough_move_mapping_settingsdatasourdoughmovemappingsettingsmappingsitemoptionalbmoveoverride {
  move: string;
  override: boolean;
}
export interface Sourdough_move_mapping_settingsdatasourdoughmovemappingsettingsmappingsitem {
  form?: string;
  move: string;
  optionalBMoveOverride?: Sourdough_move_mapping_settingsdatasourdoughmovemappingsettingsmappingsitemoptionalbmoveoverride;
  optionalCMoveOverride?: Sourdough_move_mapping_settingsdatasourdoughmovemappingsettingsmappingsitemoptionalbmoveoverride;
  pokemonId: string;
}
export interface Sourdough_move_mapping_settingsdatasourdoughmovemappingsettings {
  mappings: (Sourdough_move_mapping_settingsdatasourdoughmovemappingsettingsmappingsitem)[];
}
export interface Sourdough_move_mapping_settingsdata {
  sourdoughMoveMappingSettings: Sourdough_move_mapping_settingsdatasourdoughmovemappingsettings;
  templateId: string;
}
export interface Sourdough_move_mapping_settingsEntry {
  templateId: "SOURDOUGH_MOVE_MAPPING_SETTINGS";
  data: Sourdough_move_mapping_settingsdata;
}
export interface Special_egg_settingsdataspecialeggsettings {
  enabled: boolean;
  mapIconEnabled: boolean;
  minLevel: number;
  xpReward: number;
}
export interface Special_egg_settingsdata {
  specialEggSettings: Special_egg_settingsdataspecialeggsettings;
  templateId: string;
}
export interface Special_egg_settingsEntry {
  templateId: "SPECIAL_EGG_SETTINGS";
  data: Special_egg_settingsdata;
}
export interface Sponsored_geofence_gift_settingsdatasponsoredgeofencegiftsettingsballoongiftsettings {
  balloonAutoDismissTimeMs: number;
  enableBalloonGift: boolean;
  enableBalloonWebView: boolean;
  getWasabiAdRpcIntervalMs: number;
}
export interface Sponsored_geofence_gift_settingsdatasponsoredgeofencegiftsettings {
  balloonGiftSettings: Sponsored_geofence_gift_settingsdatasponsoredgeofencegiftsettingsballoongiftsettings;
  enableSponsoredGeofenceGift: boolean;
  fullscreenDisableExitButtonTimeMs: number;
  giftPersistenceTimeMs: number;
  mapPresentationTimeMs: number;
}
export interface Sponsored_geofence_gift_settingsdata {
  sponsoredGeofenceGiftSettings: Sponsored_geofence_gift_settingsdatasponsoredgeofencegiftsettings;
  templateId: string;
}
export interface Sponsored_geofence_gift_settingsEntry {
  templateId: "SPONSORED_GEOFENCE_GIFT_SETTINGS";
  data: Sponsored_geofence_gift_settingsdata;
}
export interface Stamp_collection_settingsdatastampcollectionsettings {
  defaultColorPool: (string)[];
  giftingMinFriendshipLevel: number;
  minPlayerLevel: number;
  version: number;
}
export interface Stamp_collection_settingsdata {
  stampCollectionSettings: Stamp_collection_settingsdatastampcollectionsettings;
  templateId: string;
}
export interface Stamp_collection_settingsEntry {
  templateId: "STAMP_COLLECTION_SETTINGS";
  data: Stamp_collection_settingsdata;
}
export interface Stamp_collection_snapshot_enabled_code_gateEntry {
  templateId: "STAMP_COLLECTION_SNAPSHOT_ENABLED_CODE_GATE";
  data: Ibfc_lws_code_gatedata;
}
export interface Stationed_pokemon_power_boost_table_settingsdatastationedpokemontablesettingstierboostsitem {
  numBoostIcons: number;
  numStationed: number;
}
export interface Stationed_pokemon_power_boost_table_settingsdatastationedpokemontablesettings {
  stationedPokemonTableEnum: string;
  tierBoosts: (Stationed_pokemon_power_boost_table_settingsdatastationedpokemontablesettingstierboostsitem)[];
}
export interface Stationed_pokemon_power_boost_table_settingsdata {
  stationedPokemonTableSettings: Stationed_pokemon_power_boost_table_settingsdatastationedpokemontablesettings;
  templateId: string;
}
export interface Stationed_pokemon_power_boost_table_settingsEntry {
  templateId: "STATIONED_POKEMON_POWER_BOOST_TABLE_SETTINGS";
  data: Stationed_pokemon_power_boost_table_settingsdata;
}
export interface Sticker_2023collab_1datastickermetadata {
  category: (string)[];
  maxCount: number;
  pokemonId: string;
  releaseDate: number;
  stickerId: string;
}
export interface Sticker_2023collab_1data {
  stickerMetadata: Sticker_2023collab_1datastickermetadata;
  templateId: string;
}
export interface Sticker_2023collab_1Entry {
  templateId: "STICKER_2023COLLAB_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_2023collab_2Entry {
  templateId: "STICKER_2023COLLAB_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_2023collab_3Entry {
  templateId: "STICKER_2023COLLAB_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_2023collab_4datastickermetadata {
  category: (string)[];
  maxCount: number;
  releaseDate: number;
  stickerId: string;
}
export interface Sticker_2023collab_4data {
  stickerMetadata: Sticker_2023collab_4datastickermetadata;
  templateId: string;
}
export interface Sticker_2023collab_4Entry {
  templateId: "STICKER_2023COLLAB_4";
  data: Sticker_2023collab_4data;
}
export interface Sticker_6anniv_1datastickermetadata {
  category: (string)[];
  maxCount: number;
  regionId: number;
  releaseDate: number;
  stickerId: string;
}
export interface Sticker_6anniv_1data {
  stickerMetadata: Sticker_6anniv_1datastickermetadata;
  templateId: string;
}
export interface Sticker_6anniv_1Entry {
  templateId: "STICKER_6ANNIV_1";
  data: Sticker_6anniv_1data;
}
export interface Sticker_6anniv_2Entry {
  templateId: "STICKER_6ANNIV_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_6anniv_3Entry {
  templateId: "STICKER_6ANNIV_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_6anniv_4Entry {
  templateId: "STICKER_6ANNIV_4";
  data: Sticker_2023collab_1data;
}
export interface Sticker_6anniv_5Entry {
  templateId: "STICKER_6ANNIV_5";
  data: Sticker_2023collab_1data;
}
export interface Sticker_6anniv_6Entry {
  templateId: "STICKER_6ANNIV_6";
  data: Sticker_2023collab_1data;
}
export interface Sticker_7anniv_1Entry {
  templateId: "STICKER_7ANNIV_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_7anniv_2Entry {
  templateId: "STICKER_7ANNIV_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_7anniv_3Entry {
  templateId: "STICKER_7ANNIV_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_7anniv_4Entry {
  templateId: "STICKER_7ANNIV_4";
  data: Sticker_2023collab_1data;
}
export interface Sticker_7anniv_5datastickermetadata {
  category: (string)[];
  maxCount: number;
  pokemonId: string;
  regionId: number;
  releaseDate: number;
  stickerId: string;
}
export interface Sticker_7anniv_5data {
  stickerMetadata: Sticker_7anniv_5datastickermetadata;
  templateId: string;
}
export interface Sticker_7anniv_5Entry {
  templateId: "STICKER_7ANNIV_5";
  data: Sticker_7anniv_5data;
}
export interface Sticker_8anniv_1Entry {
  templateId: "STICKER_8ANNIV_1";
  data: Sticker_2023collab_4data;
}
export interface Sticker_8anniv_2Entry {
  templateId: "STICKER_8ANNIV_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_8anniv_3Entry {
  templateId: "STICKER_8ANNIV_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_8anniv_4Entry {
  templateId: "STICKER_8ANNIV_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_9anniv_1Entry {
  templateId: "STICKER_9ANNIV_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_9anniv_2Entry {
  templateId: "STICKER_9ANNIV_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_9anniv_3Entry {
  templateId: "STICKER_9ANNIV_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_alolaishi_1Entry {
  templateId: "STICKER_ALOLAISHI_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_alolaishi_2Entry {
  templateId: "STICKER_ALOLAISHI_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_alolaishi_3Entry {
  templateId: "STICKER_ALOLAISHI_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_alolaishi_4Entry {
  templateId: "STICKER_ALOLAISHI_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_aprilfool2023_1Entry {
  templateId: "STICKER_APRILFOOL2023_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_aprilfool2023_2Entry {
  templateId: "STICKER_APRILFOOL2023_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_audinodatastickermetadata {
  category: (string)[];
  maxCount: number;
  pokemonId: string;
  regionId: number;
  releaseDate: number;
  stickerId: string;
  stickerUrl: string;
}
export interface Sticker_audinodata {
  stickerMetadata: Sticker_audinodatastickermetadata;
  templateId: string;
}
export interface Sticker_audinoEntry {
  templateId: "STICKER_AUDINO";
  data: Sticker_audinodata;
}
export interface Sticker_bellsproutcd_1Entry {
  templateId: "STICKER_BELLSPROUTCD_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_bellsproutcd_2Entry {
  templateId: "STICKER_BELLSPROUTCD_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_bellsproutcd_3Entry {
  templateId: "STICKER_BELLSPROUTCD_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_bellsproutcd_4Entry {
  templateId: "STICKER_BELLSPROUTCD_4";
  data: Sticker_2023collab_1data;
}
export interface Sticker_bidoofday_1Entry {
  templateId: "STICKER_BIDOOFDAY_1";
  data: Sticker_audinodata;
}
export interface Sticker_bidoofday_2Entry {
  templateId: "STICKER_BIDOOFDAY_2";
  data: Sticker_audinodata;
}
export interface Sticker_bidoofday_3Entry {
  templateId: "STICKER_BIDOOFDAY_3";
  data: Sticker_audinodata;
}
export interface Sticker_bounsweetcd2024_1Entry {
  templateId: "STICKER_BOUNSWEETCD2024_1";
  data: Sticker_6anniv_1data;
}
export interface Sticker_bounsweetcd2024_2Entry {
  templateId: "STICKER_BOUNSWEETCD2024_2";
  data: Sticker_6anniv_1data;
}
export interface Sticker_bounsweetcd2024_3Entry {
  templateId: "STICKER_BOUNSWEETCD2024_3";
  data: Sticker_6anniv_1data;
}
export interface Sticker_bounsweetcd2024_4Entry {
  templateId: "STICKER_BOUNSWEETCD2024_4";
  data: Sticker_6anniv_1data;
}
export interface Sticker_breadkorea_001Entry {
  templateId: "STICKER_BREADKOREA_001";
  data: Sticker_2023collab_1data;
}
export interface Sticker_breadkorea_002Entry {
  templateId: "STICKER_BREADKOREA_002";
  data: Sticker_2023collab_1data;
}
export interface Sticker_breadkorea_003Entry {
  templateId: "STICKER_BREADKOREA_003";
  data: Sticker_2023collab_1data;
}
export interface Sticker_breadkorea_004Entry {
  templateId: "STICKER_BREADKOREA_004";
  data: Sticker_2023collab_1data;
}
export interface Sticker_breadkorea_005Entry {
  templateId: "STICKER_BREADKOREA_005";
  data: Sticker_2023collab_1data;
}
export interface Sticker_breadkorea_006Entry {
  templateId: "STICKER_BREADKOREA_006";
  data: Sticker_2023collab_1data;
}
export interface Sticker_chanseycd_1Entry {
  templateId: "STICKER_CHANSEYCD_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_chanseycd_2Entry {
  templateId: "STICKER_CHANSEYCD_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_chanseycd_3Entry {
  templateId: "STICKER_CHANSEYCD_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_chanseycd_4Entry {
  templateId: "STICKER_CHANSEYCD_4";
  data: Sticker_2023collab_1data;
}
export interface Sticker_charizard_1Entry {
  templateId: "STICKER_CHARIZARD_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_charizard_2Entry {
  templateId: "STICKER_CHARIZARD_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_charizard_3Entry {
  templateId: "STICKER_CHARIZARD_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_chespin_1Entry {
  templateId: "STICKER_CHESPIN_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_chespin_2Entry {
  templateId: "STICKER_CHESPIN_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_chespin_3Entry {
  templateId: "STICKER_CHESPIN_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_chespin_4Entry {
  templateId: "STICKER_CHESPIN_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_cityspotlightdatastickermetadata {
  category: (string)[];
  maxCount: number;
  releaseDate: number;
  stickerId: string;
  stickerUrl: string;
}
export interface Sticker_cityspotlightdata {
  stickerMetadata: Sticker_cityspotlightdatastickermetadata;
  templateId: string;
}
export interface Sticker_cityspotlightEntry {
  templateId: "STICKER_CITYSPOTLIGHT";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_concierge_eeveeEntry {
  templateId: "STICKER_CONCIERGE_EEVEE";
  data: Sticker_2023collab_1data;
}
export interface Sticker_concierge_psyduckEntry {
  templateId: "STICKER_CONCIERGE_PSYDUCK";
  data: Sticker_2023collab_1data;
}
export interface Sticker_concierge_sealeoEntry {
  templateId: "STICKER_CONCIERGE_SEALEO";
  data: Sticker_7anniv_5data;
}
export interface Sticker_concierge_shinxEntry {
  templateId: "STICKER_CONCIERGE_SHINX";
  data: Sticker_7anniv_5data;
}
export interface Sticker_deino_1Entry {
  templateId: "STICKER_DEINO_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_deino_2Entry {
  templateId: "STICKER_DEINO_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_deino_3Entry {
  templateId: "STICKER_DEINO_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_deino_4Entry {
  templateId: "STICKER_DEINO_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_diademuertos2023_1Entry {
  templateId: "STICKER_DIADEMUERTOS2023_1";
  data: Sticker_2023collab_4data;
}
export interface Sticker_diademuertos2023_2Entry {
  templateId: "STICKER_DIADEMUERTOS2023_2";
  data: Sticker_2023collab_4data;
}
export interface Sticker_diademuertos2023_3Entry {
  templateId: "STICKER_DIADEMUERTOS2023_3";
  data: Sticker_2023collab_4data;
}
export interface Sticker_diademuertos2023_4Entry {
  templateId: "STICKER_DIADEMUERTOS2023_4";
  data: Sticker_2023collab_4data;
}
export interface Sticker_diamondpearlchimcharEntry {
  templateId: "STICKER_DIAMONDPEARLCHIMCHAR";
  data: Sticker_audinodata;
}
export interface Sticker_diamondpearldialgaEntry {
  templateId: "STICKER_DIAMONDPEARLDIALGA";
  data: Sticker_audinodata;
}
export interface Sticker_diamondpearllucarioEntry {
  templateId: "STICKER_DIAMONDPEARLLUCARIO";
  data: Sticker_audinodata;
}
export interface Sticker_diamondpearlpalkiaEntry {
  templateId: "STICKER_DIAMONDPEARLPALKIA";
  data: Sticker_audinodata;
}
export interface Sticker_diamondpearlpiplupEntry {
  templateId: "STICKER_DIAMONDPEARLPIPLUP";
  data: Sticker_audinodata;
}
export interface Sticker_diamondpearlturtwigEntry {
  templateId: "STICKER_DIAMONDPEARLTURTWIG";
  data: Sticker_audinodata;
}
export interface Sticker_ditto_1datastickermetadata {
  category: (string)[];
  maxCount: number;
  pokemonId: string;
  releaseDate: number;
  stickerId: string;
  stickerUrl: string;
}
export interface Sticker_ditto_1data {
  stickerMetadata: Sticker_ditto_1datastickermetadata;
  templateId: string;
}
export interface Sticker_ditto_1Entry {
  templateId: "STICKER_DITTO_1";
  data: Sticker_ditto_1data;
}
export interface Sticker_ditto_2Entry {
  templateId: "STICKER_DITTO_2";
  data: Sticker_ditto_1data;
}
export interface Sticker_ditto_3Entry {
  templateId: "STICKER_DITTO_3";
  data: Sticker_ditto_1data;
}
export interface Sticker_ditto_4Entry {
  templateId: "STICKER_DITTO_4";
  data: Sticker_ditto_1data;
}
export interface Sticker_ditto_5Entry {
  templateId: "STICKER_DITTO_5";
  data: Sticker_ditto_1data;
}
export interface Sticker_ditto_6Entry {
  templateId: "STICKER_DITTO_6";
  data: Sticker_ditto_1data;
}
export interface Sticker_eeveefriends_1Entry {
  templateId: "STICKER_EEVEEFRIENDS_1";
  data: Sticker_audinodata;
}
export interface Sticker_eeveefriends_2Entry {
  templateId: "STICKER_EEVEEFRIENDS_2";
  data: Sticker_audinodata;
}
export interface Sticker_eeveefriends_3Entry {
  templateId: "STICKER_EEVEEFRIENDS_3";
  data: Sticker_audinodata;
}
export interface Sticker_eeveefriends_4Entry {
  templateId: "STICKER_EEVEEFRIENDS_4";
  data: Sticker_audinodata;
}
export interface Sticker_eeveefriends_5Entry {
  templateId: "STICKER_EEVEEFRIENDS_5";
  data: Sticker_audinodata;
}
export interface Sticker_eeveefriends_6Entry {
  templateId: "STICKER_EEVEEFRIENDS_6";
  data: Sticker_ditto_1data;
}
export interface Sticker_eeveefriends_7Entry {
  templateId: "STICKER_EEVEEFRIENDS_7";
  data: Sticker_ditto_1data;
}
export interface Sticker_eeveefriends_8Entry {
  templateId: "STICKER_EEVEEFRIENDS_8";
  data: Sticker_ditto_1data;
}
export interface Sticker_eeveefriends_9Entry {
  templateId: "STICKER_EEVEEFRIENDS_9";
  data: Sticker_ditto_1data;
}
export interface Sticker_eternatusEntry {
  templateId: "STICKER_ETERNATUS";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_2023_1Entry {
  templateId: "STICKER_FALL_2023_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_2023_2Entry {
  templateId: "STICKER_FALL_2023_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_2023_3Entry {
  templateId: "STICKER_FALL_2023_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_2023_4Entry {
  templateId: "STICKER_FALL_2023_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_2023_5Entry {
  templateId: "STICKER_FALL_2023_5";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_2023_6Entry {
  templateId: "STICKER_FALL_2023_6";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_2024_1Entry {
  templateId: "STICKER_FALL_2024_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_2024_2Entry {
  templateId: "STICKER_FALL_2024_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_2024_3Entry {
  templateId: "STICKER_FALL_2024_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_2024_4Entry {
  templateId: "STICKER_FALL_2024_4";
  data: Sticker_2023collab_1data;
}
export interface Sticker_fall_2024_5Entry {
  templateId: "STICKER_FALL_2024_5";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_2024_6Entry {
  templateId: "STICKER_FALL_2024_6";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_2025_1Entry {
  templateId: "STICKER_FALL_2025_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_2025_2Entry {
  templateId: "STICKER_FALL_2025_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_2025_3Entry {
  templateId: "STICKER_FALL_2025_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_fall_2025_4Entry {
  templateId: "STICKER_FALL_2025_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_sawsbuckEntry {
  templateId: "STICKER_FALL_SAWSBUCK";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_shroomishEntry {
  templateId: "STICKER_FALL_SHROOMISH";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_skwovetEntry {
  templateId: "STICKER_FALL_SKWOVET";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_teddiursaEntry {
  templateId: "STICKER_FALL_TEDDIURSA";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_trevenantEntry {
  templateId: "STICKER_FALL_TREVENANT";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fall_vulpixEntry {
  templateId: "STICKER_FALL_VULPIX";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fennekin_1Entry {
  templateId: "STICKER_FENNEKIN_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fennekin_2Entry {
  templateId: "STICKER_FENNEKIN_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fennekin_3Entry {
  templateId: "STICKER_FENNEKIN_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_fennekin_4Entry {
  templateId: "STICKER_FENNEKIN_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_festivaloflight_morelullEntry {
  templateId: "STICKER_FESTIVALOFLIGHT_MORELULL";
  data: Sticker_7anniv_5data;
}
export interface Sticker_festivaloflight_shiinoticEntry {
  templateId: "STICKER_FESTIVALOFLIGHT_SHIINOTIC";
  data: Sticker_7anniv_5data;
}
export interface Sticker_festivalofthelights21_v1Entry {
  templateId: "STICKER_FESTIVALOFTHELIGHTS21_V1";
  data: Sticker_audinodata;
}
export interface Sticker_festivalofthelights21_v2Entry {
  templateId: "STICKER_FESTIVALOFTHELIGHTS21_V2";
  data: Sticker_audinodata;
}
export interface Sticker_festivalofthelights21_v3Entry {
  templateId: "STICKER_FESTIVALOFTHELIGHTS21_V3";
  data: Sticker_audinodata;
}
export interface Sticker_festivalofthelights21_v4Entry {
  templateId: "STICKER_FESTIVALOFTHELIGHTS21_V4";
  data: Sticker_audinodata;
}
export interface Sticker_flabebe_1Entry {
  templateId: "STICKER_FLABEBE_1";
  data: Sticker_audinodata;
}
export interface Sticker_flabebe_2Entry {
  templateId: "STICKER_FLABEBE_2";
  data: Sticker_audinodata;
}
export interface Sticker_flair_heart_1datastickermetadata {
  category: (string)[];
  maxCount: number;
  stickerId: string;
}
export interface Sticker_flair_heart_1data {
  stickerMetadata: Sticker_flair_heart_1datastickermetadata;
  templateId: string;
}
export interface Sticker_flair_heart_1Entry {
  templateId: "STICKER_FLAIR_HEART_1";
  data: Sticker_flair_heart_1data;
}
export interface Sticker_flair_heart_2Entry {
  templateId: "STICKER_FLAIR_HEART_2";
  data: Sticker_flair_heart_1data;
}
export interface Sticker_flair_heart_3Entry {
  templateId: "STICKER_FLAIR_HEART_3";
  data: Sticker_flair_heart_1data;
}
export interface Sticker_flair_heart_4Entry {
  templateId: "STICKER_FLAIR_HEART_4";
  data: Sticker_flair_heart_1data;
}
export interface Sticker_flair_heart_5Entry {
  templateId: "STICKER_FLAIR_HEART_5";
  data: Sticker_flair_heart_1data;
}
export interface Sticker_flair_star_1Entry {
  templateId: "STICKER_FLAIR_STAR_1";
  data: Sticker_flair_heart_1data;
}
export interface Sticker_flair_star_2Entry {
  templateId: "STICKER_FLAIR_STAR_2";
  data: Sticker_flair_heart_1data;
}
export interface Sticker_flair_star_3Entry {
  templateId: "STICKER_FLAIR_STAR_3";
  data: Sticker_flair_heart_1data;
}
export interface Sticker_flair_star_4Entry {
  templateId: "STICKER_FLAIR_STAR_4";
  data: Sticker_flair_heart_1data;
}
export interface Sticker_flair_star_5Entry {
  templateId: "STICKER_FLAIR_STAR_5";
  data: Sticker_flair_heart_1data;
}
export interface Sticker_flair_star_6Entry {
  templateId: "STICKER_FLAIR_STAR_6";
  data: Sticker_flair_heart_1data;
}
export interface Sticker_flair_star_7Entry {
  templateId: "STICKER_FLAIR_STAR_7";
  data: Sticker_flair_heart_1data;
}
export interface Sticker_formulaekorea_pikachuEntry {
  templateId: "STICKER_FORMULAEKOREA_PIKACHU";
  data: Sticker_2023collab_1data;
}
export interface Sticker_fossilmuseum_1Entry {
  templateId: "STICKER_FOSSILMUSEUM_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_fossilmuseum_2Entry {
  templateId: "STICKER_FOSSILMUSEUM_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_froakie_1Entry {
  templateId: "STICKER_FROAKIE_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_froakie_2Entry {
  templateId: "STICKER_FROAKIE_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_froakie_3Entry {
  templateId: "STICKER_FROAKIE_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_froakie_4Entry {
  templateId: "STICKER_FROAKIE_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_funawari_04_312Entry {
  templateId: "STICKER_FUNAWARI_04_312";
  data: Sticker_ditto_1data;
}
export interface Sticker_funawari_05_312Entry {
  templateId: "STICKER_FUNAWARI_05_312";
  data: Sticker_ditto_1data;
}
export interface Sticker_funawari_06_312Entry {
  templateId: "STICKER_FUNAWARI_06_312";
  data: Sticker_ditto_1data;
}
export interface Sticker_funawari_22_312Entry {
  templateId: "STICKER_FUNAWARI_22_312";
  data: Sticker_ditto_1data;
}
export interface Sticker_funwari_02_0608Entry {
  templateId: "STICKER_FUNWARI_02_0608";
  data: Sticker_ditto_1data;
}
export interface Sticker_funwari_10Entry {
  templateId: "STICKER_FUNWARI_10";
  data: Sticker_audinodata;
}
export interface Sticker_funwari_11_thankuEntry {
  templateId: "STICKER_FUNWARI_11_THANKU";
  data: Sticker_audinodata;
}
export interface Sticker_funwari_12_02Entry {
  templateId: "STICKER_FUNWARI_12_02";
  data: Sticker_audinodata;
}
export interface Sticker_funwari_18Entry {
  templateId: "STICKER_FUNWARI_18";
  data: Sticker_ditto_1data;
}
export interface Sticker_funwari_20Entry {
  templateId: "STICKER_FUNWARI_20";
  data: Sticker_audinodata;
}
export interface Sticker_funwari_35Entry {
  templateId: "STICKER_FUNWARI_35";
  data: Sticker_audinodata;
}
export interface Sticker_funwari_pidgey_18Entry {
  templateId: "STICKER_FUNWARI_PIDGEY_18";
  data: Sticker_ditto_1data;
}
export interface Sticker_furfrouheart_1Entry {
  templateId: "STICKER_FURFROUHEART_1";
  data: Sticker_audinodata;
}
export interface Sticker_furfrouheart_2Entry {
  templateId: "STICKER_FURFROUHEART_2";
  data: Sticker_audinodata;
}
export interface Sticker_galarianzigzagoon_1Entry {
  templateId: "STICKER_GALARIANZIGZAGOON_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_galarianzigzagoon_2Entry {
  templateId: "STICKER_GALARIANZIGZAGOON_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_galarianzigzagoon_3Entry {
  templateId: "STICKER_GALARIANZIGZAGOON_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_galarianzigzagoon_4Entry {
  templateId: "STICKER_GALARIANZIGZAGOON_4";
  data: Sticker_6anniv_1data;
}
export interface Sticker_giftthankyouEntry {
  templateId: "STICKER_GIFTTHANKYOU";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_gimmighoul_1Entry {
  templateId: "STICKER_GIMMIGHOUL_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gimmighoul_2Entry {
  templateId: "STICKER_GIMMIGHOUL_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gimmighoul_3Entry {
  templateId: "STICKER_GIMMIGHOUL_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gimmighoul_4Entry {
  templateId: "STICKER_GIMMIGHOUL_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gimmighoul_5Entry {
  templateId: "STICKER_GIMMIGHOUL_5";
  data: Sticker_7anniv_5data;
}
export interface Sticker_goomycd_1Entry {
  templateId: "STICKER_GOOMYCD_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_goomycd_2Entry {
  templateId: "STICKER_GOOMYCD_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_goomycd_3Entry {
  templateId: "STICKER_GOOMYCD_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_goomycd_4Entry {
  templateId: "STICKER_GOOMYCD_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gotour2021Entry {
  templateId: "STICKER_GOTOUR2021";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_gotour2022_1Entry {
  templateId: "STICKER_GOTOUR2022_1";
  data: Sticker_ditto_1data;
}
export interface Sticker_gotour2022_2Entry {
  templateId: "STICKER_GOTOUR2022_2";
  data: Sticker_ditto_1data;
}
export interface Sticker_gotour2022_3Entry {
  templateId: "STICKER_GOTOUR2022_3";
  data: Sticker_ditto_1data;
}
export interface Sticker_gotour2022_4Entry {
  templateId: "STICKER_GOTOUR2022_4";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_gotour2022_chikoritaEntry {
  templateId: "STICKER_GOTOUR2022_CHIKORITA";
  data: Sticker_audinodata;
}
export interface Sticker_gotour2022_cyndaquilEntry {
  templateId: "STICKER_GOTOUR2022_CYNDAQUIL";
  data: Sticker_audinodata;
}
export interface Sticker_gotour2022_hoohEntry {
  templateId: "STICKER_GOTOUR2022_HOOH";
  data: Sticker_audinodata;
}
export interface Sticker_gotour2022_lugiaEntry {
  templateId: "STICKER_GOTOUR2022_LUGIA";
  data: Sticker_audinodata;
}
export interface Sticker_gotour2022_togepiEntry {
  templateId: "STICKER_GOTOUR2022_TOGEPI";
  data: Sticker_audinodata;
}
export interface Sticker_gotour2022_totodileEntry {
  templateId: "STICKER_GOTOUR2022_TOTODILE";
  data: Sticker_audinodata;
}
export interface Sticker_gotour2025_badgeEntry {
  templateId: "STICKER_GOTOUR2025_BADGE";
  data: Sticker_2023collab_4data;
}
export interface Sticker_gotour2025_kyuremblackEntry {
  templateId: "STICKER_GOTOUR2025_KYUREMBLACK";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gotour2025_kyuremwhiteEntry {
  templateId: "STICKER_GOTOUR2025_KYUREMWHITE";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gotour2025_reshiramEntry {
  templateId: "STICKER_GOTOUR2025_RESHIRAM";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gotour2025_rzEntry {
  templateId: "STICKER_GOTOUR2025_RZ";
  data: Sticker_2023collab_4data;
}
export interface Sticker_gotour2025_zekromEntry {
  templateId: "STICKER_GOTOUR2025_ZEKROM";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gotourhoenn_1Entry {
  templateId: "STICKER_GOTOURHOENN_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gotourhoenn_2Entry {
  templateId: "STICKER_GOTOURHOENN_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gotourhoenn_3Entry {
  templateId: "STICKER_GOTOURHOENN_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gotourhoenn_4Entry {
  templateId: "STICKER_GOTOURHOENN_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gotourhoenn_5Entry {
  templateId: "STICKER_GOTOURHOENN_5";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gotourhoenn_6Entry {
  templateId: "STICKER_GOTOURHOENN_6";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gowa2025_01Entry {
  templateId: "STICKER_GOWA2025_01";
  data: Sticker_2023collab_4data;
}
export interface Sticker_gowa2025_02Entry {
  templateId: "STICKER_GOWA2025_02";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gowa2025_03Entry {
  templateId: "STICKER_GOWA2025_03";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gowa2025_04Entry {
  templateId: "STICKER_GOWA2025_04";
  data: Sticker_7anniv_5data;
}
export interface Sticker_gowa2025_05Entry {
  templateId: "STICKER_GOWA2025_05";
  data: Sticker_7anniv_5data;
}
export interface Sticker_grubbin_1Entry {
  templateId: "STICKER_GRUBBIN_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_grubbin_2Entry {
  templateId: "STICKER_GRUBBIN_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_grubbin_3Entry {
  templateId: "STICKER_GRUBBIN_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_grubbin_4Entry {
  templateId: "STICKER_GRUBBIN_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_halloween2022_gengarEntry {
  templateId: "STICKER_HALLOWEEN2022_GENGAR";
  data: Sticker_2023collab_1data;
}
export interface Sticker_halloween2022_pumpkabooEntry {
  templateId: "STICKER_HALLOWEEN2022_PUMPKABOO";
  data: Sticker_7anniv_5data;
}
export interface Sticker_halloween2022_vulpixEntry {
  templateId: "STICKER_HALLOWEEN2022_VULPIX";
  data: Sticker_2023collab_1data;
}
export interface Sticker_halloween2025_noibatEntry {
  templateId: "STICKER_HALLOWEEN2025_NOIBAT";
  data: Sticker_7anniv_5data;
}
export interface Sticker_halloween2025_teddiursaEntry {
  templateId: "STICKER_HALLOWEEN2025_TEDDIURSA";
  data: Sticker_7anniv_5data;
}
export interface Sticker_halloween21_fuwaraidEntry {
  templateId: "STICKER_HALLOWEEN21_FUWARAID";
  data: Sticker_audinodata;
}
export interface Sticker_halloween21_ghostpikaEntry {
  templateId: "STICKER_HALLOWEEN21_GHOSTPIKA";
  data: Sticker_ditto_1data;
}
export interface Sticker_halloween21_pikachuEntry {
  templateId: "STICKER_HALLOWEEN21_PIKACHU";
  data: Sticker_ditto_1data;
}
export interface Sticker_halloween21_pochamaEntry {
  templateId: "STICKER_HALLOWEEN21_POCHAMA";
  data: Sticker_audinodata;
}
export interface Sticker_halloween23_gengarEntry {
  templateId: "STICKER_HALLOWEEN23_GENGAR";
  data: Sticker_2023collab_1data;
}
export interface Sticker_halloween23_greavardEntry {
  templateId: "STICKER_HALLOWEEN23_GREAVARD";
  data: Sticker_7anniv_5data;
}
export interface Sticker_halloween23_misdreavusEntry {
  templateId: "STICKER_HALLOWEEN23_MISDREAVUS";
  data: Sticker_7anniv_5data;
}
export interface Sticker_halloween23_phantumpEntry {
  templateId: "STICKER_HALLOWEEN23_PHANTUMP";
  data: Sticker_7anniv_5data;
}
export interface Sticker_halloween24_froakieEntry {
  templateId: "STICKER_HALLOWEEN24_FROAKIE";
  data: Sticker_7anniv_5data;
}
export interface Sticker_halloween24_rowletEntry {
  templateId: "STICKER_HALLOWEEN24_ROWLET";
  data: Sticker_7anniv_5data;
}
export interface Sticker_halloween_bulbEntry {
  templateId: "STICKER_HALLOWEEN_BULB";
  data: Sticker_ditto_1data;
}
export interface Sticker_halloween_charmEntry {
  templateId: "STICKER_HALLOWEEN_CHARM";
  data: Sticker_ditto_1data;
}
export interface Sticker_halloween_gengarmdEntry {
  templateId: "STICKER_HALLOWEEN_GENGARMD";
  data: Sticker_ditto_1data;
}
export interface Sticker_halloween_pikaEntry {
  templateId: "STICKER_HALLOWEEN_PIKA";
  data: Sticker_ditto_1data;
}
export interface Sticker_halloween_sableyemdEntry {
  templateId: "STICKER_HALLOWEEN_SABLEYEMD";
  data: Sticker_audinodata;
}
export interface Sticker_halloween_squEntry {
  templateId: "STICKER_HALLOWEEN_SQU";
  data: Sticker_ditto_1data;
}
export interface Sticker_haru_cherrimEntry {
  templateId: "STICKER_HARU_CHERRIM";
  data: Sticker_7anniv_5data;
}
export interface Sticker_haru_dredearpikaEntry {
  templateId: "STICKER_HARU_DREDEARPIKA";
  data: Sticker_6anniv_1data;
}
export interface Sticker_haru_kireihanaEntry {
  templateId: "STICKER_HARU_KIREIHANA";
  data: Sticker_7anniv_5data;
}
export interface Sticker_haru_lalantesEntry {
  templateId: "STICKER_HARU_LALANTES";
  data: Sticker_7anniv_5data;
}
export interface Sticker_haru_mebukishikijikEntry {
  templateId: "STICKER_HARU_MEBUKISHIKIJIK";
  data: Sticker_7anniv_5data;
}
export interface Sticker_haru_mitsuhoneyEntry {
  templateId: "STICKER_HARU_MITSUHONEY";
  data: Sticker_7anniv_5data;
}
export interface Sticker_hawlucha_01Entry {
  templateId: "STICKER_HAWLUCHA_01";
  data: Sticker_7anniv_5data;
}
export interface Sticker_hisuidisco_arcanineEntry {
  templateId: "STICKER_HISUIDISCO_ARCANINE";
  data: Sticker_7anniv_5data;
}
export interface Sticker_hisuidisco_braviaryEntry {
  templateId: "STICKER_HISUIDISCO_BRAVIARY";
  data: Sticker_7anniv_5data;
}
export interface Sticker_hisuidisco_growlitheEntry {
  templateId: "STICKER_HISUIDISCO_GROWLITHE";
  data: Sticker_7anniv_5data;
}
export interface Sticker_holidayevent21_1Entry {
  templateId: "STICKER_HOLIDAYEVENT21_1";
  data: Sticker_ditto_1data;
}
export interface Sticker_holidayevent21_2Entry {
  templateId: "STICKER_HOLIDAYEVENT21_2";
  data: Sticker_audinodata;
}
export interface Sticker_holidayevent21_3Entry {
  templateId: "STICKER_HOLIDAYEVENT21_3";
  data: Sticker_audinodata;
}
export interface Sticker_holidayevent21_4Entry {
  templateId: "STICKER_HOLIDAYEVENT21_4";
  data: Sticker_audinodata;
}
export interface Sticker_holidayevent22_cubchooEntry {
  templateId: "STICKER_HOLIDAYEVENT22_CUBCHOO";
  data: Sticker_7anniv_5data;
}
export interface Sticker_holidayevent22_scatterbugEntry {
  templateId: "STICKER_HOLIDAYEVENT22_SCATTERBUG";
  data: Sticker_7anniv_5data;
}
export interface Sticker_holidayevent22_snowpikaEntry {
  templateId: "STICKER_HOLIDAYEVENT22_SNOWPIKA";
  data: Sticker_2023collab_1data;
}
export interface Sticker_holidayevent22_vulpixEntry {
  templateId: "STICKER_HOLIDAYEVENT22_VULPIX";
  data: Sticker_7anniv_5data;
}
export interface Sticker_holidayevent23_cetoddleEntry {
  templateId: "STICKER_HOLIDAYEVENT23_CETODDLE";
  data: Sticker_7anniv_5data;
}
export interface Sticker_holidayevent23_cryogonalEntry {
  templateId: "STICKER_HOLIDAYEVENT23_CRYOGONAL";
  data: Sticker_7anniv_5data;
}
export interface Sticker_holidayevent23_psyduckEntry {
  templateId: "STICKER_HOLIDAYEVENT23_PSYDUCK";
  data: Sticker_2023collab_1data;
}
export interface Sticker_holidayevent23_seelEntry {
  templateId: "STICKER_HOLIDAYEVENT23_SEEL";
  data: Sticker_2023collab_1data;
}
export interface Sticker_holidayevent23_vanillishEntry {
  templateId: "STICKER_HOLIDAYEVENT23_VANILLISH";
  data: Sticker_7anniv_5data;
}
export interface Sticker_holographic_chanceyEntry {
  templateId: "STICKER_HOLOGRAPHIC_CHANCEY";
  data: Sticker_2023collab_1data;
}
export interface Sticker_holographic_charmeleonEntry {
  templateId: "STICKER_HOLOGRAPHIC_CHARMELEON";
  data: Sticker_2023collab_1data;
}
export interface Sticker_holographic_ivysaurEntry {
  templateId: "STICKER_HOLOGRAPHIC_IVYSAUR";
  data: Sticker_2023collab_1data;
}
export interface Sticker_holographic_meltanEntry {
  templateId: "STICKER_HOLOGRAPHIC_MELTAN";
  data: Sticker_7anniv_5data;
}
export interface Sticker_holographic_pikachuEntry {
  templateId: "STICKER_HOLOGRAPHIC_PIKACHU";
  data: Sticker_2023collab_1data;
}
export interface Sticker_holographic_wartortleEntry {
  templateId: "STICKER_HOLOGRAPHIC_WARTORTLE";
  data: Sticker_2023collab_1data;
}
export interface Sticker_hoppip_1Entry {
  templateId: "STICKER_HOPPIP_1";
  data: Sticker_audinodata;
}
export interface Sticker_hoppip_2Entry {
  templateId: "STICKER_HOPPIP_2";
  data: Sticker_audinodata;
}
export interface Sticker_hoppip_3Entry {
  templateId: "STICKER_HOPPIP_3";
  data: Sticker_audinodata;
}
export interface Sticker_hoppip_4Entry {
  templateId: "STICKER_HOPPIP_4";
  data: Sticker_audinodata;
}
export interface Sticker_indonesiajourney_1Entry {
  templateId: "STICKER_INDONESIAJOURNEY_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_indonesiajourney_2Entry {
  templateId: "STICKER_INDONESIAJOURNEY_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_iplpartnership_1Entry {
  templateId: "STICKER_IPLPARTNERSHIP_1";
  data: Sticker_2023collab_4data;
}
export interface Sticker_iplpartnership_2Entry {
  templateId: "STICKER_IPLPARTNERSHIP_2";
  data: Sticker_2023collab_4data;
}
export interface Sticker_junecd2023_axew_1Entry {
  templateId: "STICKER_JUNECD2023_AXEW_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_junecd2023_axew_2Entry {
  templateId: "STICKER_JUNECD2023_AXEW_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_junecd2023_axew_3Entry {
  templateId: "STICKER_JUNECD2023_AXEW_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_junecd2023_axew_4Entry {
  templateId: "STICKER_JUNECD2023_AXEW_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_koreatown_1Entry {
  templateId: "STICKER_KOREATOWN_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_koreatown_2Entry {
  templateId: "STICKER_KOREATOWN_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_koreatown_3Entry {
  templateId: "STICKER_KOREATOWN_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_kr_dittoEntry {
  templateId: "STICKER_KR_DITTO";
  data: Sticker_2023collab_1data;
}
export interface Sticker_kurtasaree_1Entry {
  templateId: "STICKER_KURTASAREE_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_kurtasaree_2Entry {
  templateId: "STICKER_KURTASAREE_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_kurtasaree_3Entry {
  templateId: "STICKER_KURTASAREE_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_kurtasaree_4Entry {
  templateId: "STICKER_KURTASAREE_4";
  data: Sticker_2023collab_1data;
}
export interface Sticker_kurtasaree_5Entry {
  templateId: "STICKER_KURTASAREE_5";
  data: Sticker_2023collab_1data;
}
export interface Sticker_kurtasaree_6Entry {
  templateId: "STICKER_KURTASAREE_6";
  data: Sticker_2023collab_1data;
}
export interface Sticker_lentillaunch_cameraEntry {
  templateId: "STICKER_LENTILLAUNCH_CAMERA";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_littencd_1datastickermetadata {
  category: (string)[];
  maxCount: number;
  pokemonId: string;
  regionId: number;
  stickerId: string;
}
export interface Sticker_littencd_1data {
  stickerMetadata: Sticker_littencd_1datastickermetadata;
  templateId: string;
}
export interface Sticker_littencd_1Entry {
  templateId: "STICKER_LITTENCD_1";
  data: Sticker_littencd_1data;
}
export interface Sticker_littencd_2Entry {
  templateId: "STICKER_LITTENCD_2";
  data: Sticker_littencd_1data;
}
export interface Sticker_littencd_3Entry {
  templateId: "STICKER_LITTENCD_3";
  data: Sticker_littencd_1data;
}
export interface Sticker_littencd_4Entry {
  templateId: "STICKER_LITTENCD_4";
  data: Sticker_littencd_1data;
}
export interface Sticker_litwick_1Entry {
  templateId: "STICKER_LITWICK_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_litwick_2Entry {
  templateId: "STICKER_LITWICK_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_litwick_3Entry {
  templateId: "STICKER_LITWICK_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_litwick_4Entry {
  templateId: "STICKER_LITWICK_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_luvdiscEntry {
  templateId: "STICKER_LUVDISC";
  data: Sticker_audinodata;
}
export interface Sticker_mankey_1datastickermetadata {
  category: (string)[];
  maxCount: number;
  pokemonId: string;
  stickerId: string;
}
export interface Sticker_mankey_1data {
  stickerMetadata: Sticker_mankey_1datastickermetadata;
  templateId: string;
}
export interface Sticker_mankey_1Entry {
  templateId: "STICKER_MANKEY_1";
  data: Sticker_mankey_1data;
}
export interface Sticker_mankey_2Entry {
  templateId: "STICKER_MANKEY_2";
  data: Sticker_mankey_1data;
}
export interface Sticker_mankey_3Entry {
  templateId: "STICKER_MANKEY_3";
  data: Sticker_mankey_1data;
}
export interface Sticker_mankey_4Entry {
  templateId: "STICKER_MANKEY_4";
  data: Sticker_littencd_1data;
}
export interface Sticker_megaevolution_paris_1Entry {
  templateId: "STICKER_MEGAEVOLUTION_PARIS_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_megaevolution_paris_2Entry {
  templateId: "STICKER_MEGAEVOLUTION_PARIS_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_megaevolution_paris_3Entry {
  templateId: "STICKER_MEGAEVOLUTION_PARIS_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_mewtwoEntry {
  templateId: "STICKER_MEWTWO";
  data: Sticker_ditto_1data;
}
export interface Sticker_mew_laughEntry {
  templateId: "STICKER_MEW_LAUGH";
  data: Sticker_ditto_1data;
}
export interface Sticker_mukkuru_cd_1Entry {
  templateId: "STICKER_MUKKURU_CD_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_mukkuru_cd_2Entry {
  templateId: "STICKER_MUKKURU_CD_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_mukkuru_cd_3Entry {
  templateId: "STICKER_MUKKURU_CD_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_mukkuru_cd_4Entry {
  templateId: "STICKER_MUKKURU_CD_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_nagano_06_312datastickermetadata {
  category: (string)[];
  maxCount: number;
  regionId: number;
  releaseDate: number;
  stickerId: string;
  stickerUrl: string;
}
export interface Sticker_nagano_06_312data {
  stickerMetadata: Sticker_nagano_06_312datastickermetadata;
  templateId: string;
}
export interface Sticker_nagano_06_312Entry {
  templateId: "STICKER_NAGANO_06_312";
  data: Sticker_nagano_06_312data;
}
export interface Sticker_nagano_08Entry {
  templateId: "STICKER_NAGANO_08";
  data: Sticker_audinodata;
}
export interface Sticker_nagano_11Entry {
  templateId: "STICKER_NAGANO_11";
  data: Sticker_ditto_1data;
}
export interface Sticker_nagano_15Entry {
  templateId: "STICKER_NAGANO_15";
  data: Sticker_ditto_1data;
}
export interface Sticker_nagano_15_312Entry {
  templateId: "STICKER_NAGANO_15_312";
  data: Sticker_ditto_1data;
}
export interface Sticker_nagano_bathEntry {
  templateId: "STICKER_NAGANO_BATH";
  data: Sticker_audinodata;
}
export interface Sticker_nagano_marillEntry {
  templateId: "STICKER_NAGANO_MARILL";
  data: Sticker_audinodata;
}
export interface Sticker_nagano_yadonEntry {
  templateId: "STICKER_NAGANO_YADON";
  data: Sticker_ditto_1data;
}
export interface Sticker_newpokemon2_1Entry {
  templateId: "STICKER_NEWPOKEMON2_1";
  data: Sticker_ditto_1data;
}
export interface Sticker_newpokemon2_15Entry {
  templateId: "STICKER_NEWPOKEMON2_15";
  data: Sticker_nagano_06_312data;
}
export interface Sticker_newpokemon2_33Entry {
  templateId: "STICKER_NEWPOKEMON2_33";
  data: Sticker_nagano_06_312data;
}
export interface Sticker_newpokemon_04Entry {
  templateId: "STICKER_NEWPOKEMON_04";
  data: Sticker_ditto_1data;
}
export interface Sticker_newpokemon_20Entry {
  templateId: "STICKER_NEWPOKEMON_20";
  data: Sticker_audinodata;
}
export interface Sticker_newpokemon_37Entry {
  templateId: "STICKER_NEWPOKEMON_37";
  data: Sticker_ditto_1data;
}
export interface Sticker_newteamrascalEntry {
  templateId: "STICKER_NEWTEAMRASCAL";
  data: Sticker_ditto_1data;
}
export interface Sticker_newteamrascalpikachu_26Entry {
  templateId: "STICKER_NEWTEAMRASCALPIKACHU_26";
  data: Sticker_ditto_1data;
}
export interface Sticker_newyears22_1Entry {
  templateId: "STICKER_NEWYEARS22_1";
  data: Sticker_ditto_1data;
}
export interface Sticker_newyears22_2Entry {
  templateId: "STICKER_NEWYEARS22_2";
  data: Sticker_audinodata;
}
export interface Sticker_newyears22_3Entry {
  templateId: "STICKER_NEWYEARS22_3";
  data: Sticker_ditto_1data;
}
export interface Sticker_newyears22_4Entry {
  templateId: "STICKER_NEWYEARS22_4";
  data: Sticker_ditto_1data;
}
export interface Sticker_newyears23_1Entry {
  templateId: "STICKER_NEWYEARS23_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_newyears23_2Entry {
  templateId: "STICKER_NEWYEARS23_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_newyears23_3Entry {
  templateId: "STICKER_NEWYEARS23_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_newyears23_4Entry {
  templateId: "STICKER_NEWYEARS23_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_nia_logoEntry {
  templateId: "STICKER_NIA_LOGO";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_nigiyaka_08_0508_312Entry {
  templateId: "STICKER_NIGIYAKA_08_0508_312";
  data: Sticker_ditto_1data;
}
export interface Sticker_nigiyaka_16_0508_312Entry {
  templateId: "STICKER_NIGIYAKA_16_0508_312";
  data: Sticker_ditto_1data;
}
export interface Sticker_noibat_cd_1Entry {
  templateId: "STICKER_NOIBAT_CD_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_noibat_cd_2Entry {
  templateId: "STICKER_NOIBAT_CD_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_noibat_cd_3Entry {
  templateId: "STICKER_NOIBAT_CD_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_noibat_cd_4Entry {
  templateId: "STICKER_NOIBAT_CD_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_nyarth_38Entry {
  templateId: "STICKER_NYARTH_38";
  data: Sticker_audinodata;
}
export interface Sticker_observatory_01Entry {
  templateId: "STICKER_OBSERVATORY_01";
  data: Sticker_2023collab_1data;
}
export interface Sticker_observatory_02Entry {
  templateId: "STICKER_OBSERVATORY_02";
  data: Sticker_2023collab_1data;
}
export interface Sticker_papelpicadotgr_1Entry {
  templateId: "STICKER_PAPELPICADOTGR_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_papelpicadotgr_2Entry {
  templateId: "STICKER_PAPELPICADOTGR_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_papelpicadotgr_3Entry {
  templateId: "STICKER_PAPELPICADOTGR_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_papelpicadotgr_4Entry {
  templateId: "STICKER_PAPELPICADOTGR_4";
  data: Sticker_2023collab_4data;
}
export interface Sticker_papelpicadotgr_5Entry {
  templateId: "STICKER_PAPELPICADOTGR_5";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgofest2021_galarianzigzagoonEntry {
  templateId: "STICKER_PGOFEST2021_GALARIANZIGZAGOON";
  data: Sticker_audinodata;
}
export interface Sticker_pgofest2021_logoEntry {
  templateId: "STICKER_PGOFEST2021_LOGO";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_pgofest2021_meloetta_1Entry {
  templateId: "STICKER_PGOFEST2021_MELOETTA_1";
  data: Sticker_audinodata;
}
export interface Sticker_pgofest2021_meloetta_2Entry {
  templateId: "STICKER_PGOFEST2021_MELOETTA_2";
  data: Sticker_audinodata;
}
export interface Sticker_pgofest2021_ponytaEntry {
  templateId: "STICKER_PGOFEST2021_PONYTA";
  data: Sticker_audinodata;
}
export interface Sticker_pgofest2021_shirticonEntry {
  templateId: "STICKER_PGOFEST2021_SHIRTICON";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_pgofest2022_denjyumokuEntry {
  templateId: "STICKER_PGOFEST2022_DENJYUMOKU";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgofest2022_groudonEntry {
  templateId: "STICKER_PGOFEST2022_GROUDON";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgofest2022_kibagoEntry {
  templateId: "STICKER_PGOFEST2022_KIBAGO";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgofest2022_kyogreEntry {
  templateId: "STICKER_PGOFEST2022_KYOGRE";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgofest2022_massivoonEntry {
  templateId: "STICKER_PGOFEST2022_MASSIVOON";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgofest2022_pheroacheEntry {
  templateId: "STICKER_PGOFEST2022_PHEROACHE";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgofest2022_pikachuEntry {
  templateId: "STICKER_PGOFEST2022_PIKACHU";
  data: Sticker_2023collab_1data;
}
export interface Sticker_pgofest2022_pochamaEntry {
  templateId: "STICKER_PGOFEST2022_POCHAMA";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgofest2022_shayminEntry {
  templateId: "STICKER_PGOFEST2022_SHAYMIN";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgofest2022_shayminskyEntry {
  templateId: "STICKER_PGOFEST2022_SHAYMINSKY";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgofest2022_uturoidEntry {
  templateId: "STICKER_PGOFEST2022_UTUROID";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_fest_2017Entry {
  templateId: "STICKER_PGO_FEST_2017";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_pgo_fest_2018Entry {
  templateId: "STICKER_PGO_FEST_2018";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_pgo_fest_2019Entry {
  templateId: "STICKER_PGO_FEST_2019";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_pgo_fest_2020Entry {
  templateId: "STICKER_PGO_FEST_2020";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_pgo_fest_2020_logoEntry {
  templateId: "STICKER_PGO_FEST_2020_LOGO";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_pgo_fest_2022Entry {
  templateId: "STICKER_PGO_FEST_2022";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgo_fest_2022_logoEntry {
  templateId: "STICKER_PGO_FEST_2022_LOGO";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgo_fest_2023Entry {
  templateId: "STICKER_PGO_FEST_2023";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgo_fest_2023_1Entry {
  templateId: "STICKER_PGO_FEST_2023_1";
  data: Sticker_6anniv_1data;
}
export interface Sticker_pgo_fest_2023_2Entry {
  templateId: "STICKER_PGO_FEST_2023_2";
  data: Sticker_6anniv_1data;
}
export interface Sticker_pgo_fest_2023_3Entry {
  templateId: "STICKER_PGO_FEST_2023_3";
  data: Sticker_6anniv_1data;
}
export interface Sticker_pgo_fest_2023_4Entry {
  templateId: "STICKER_PGO_FEST_2023_4";
  data: Sticker_6anniv_1data;
}
export interface Sticker_pgo_fest_2023_5Entry {
  templateId: "STICKER_PGO_FEST_2023_5";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgo_fest_2023_6Entry {
  templateId: "STICKER_PGO_FEST_2023_6";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgo_fest_2023_logoEntry {
  templateId: "STICKER_PGO_FEST_2023_LOGO";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgo_fest_2024Entry {
  templateId: "STICKER_PGO_FEST_2024";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgo_fest_2024_1Entry {
  templateId: "STICKER_PGO_FEST_2024_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_fest_2024_2Entry {
  templateId: "STICKER_PGO_FEST_2024_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_fest_2024_3Entry {
  templateId: "STICKER_PGO_FEST_2024_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_fest_2024_4Entry {
  templateId: "STICKER_PGO_FEST_2024_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_fest_2024_5Entry {
  templateId: "STICKER_PGO_FEST_2024_5";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_fest_2024_6Entry {
  templateId: "STICKER_PGO_FEST_2024_6";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_fest_2024_logoEntry {
  templateId: "STICKER_PGO_FEST_2024_LOGO";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgo_fest_2025Entry {
  templateId: "STICKER_PGO_FEST_2025";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_fest_2025_1Entry {
  templateId: "STICKER_PGO_FEST_2025_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_fest_2025_2Entry {
  templateId: "STICKER_PGO_FEST_2025_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_fest_2025_3Entry {
  templateId: "STICKER_PGO_FEST_2025_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_fest_2025_logoEntry {
  templateId: "STICKER_PGO_FEST_2025_LOGO";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgo_fest_victini_05Entry {
  templateId: "STICKER_PGO_FEST_VICTINI_05";
  data: Sticker_audinodata;
}
export interface Sticker_pgo_tour_2024Entry {
  templateId: "STICKER_PGO_TOUR_2024";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgo_tour_2024_1Entry {
  templateId: "STICKER_PGO_TOUR_2024_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_tour_2024_2Entry {
  templateId: "STICKER_PGO_TOUR_2024_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_tour_2024_3Entry {
  templateId: "STICKER_PGO_TOUR_2024_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_tour_2024_4Entry {
  templateId: "STICKER_PGO_TOUR_2024_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_tour_2024_5Entry {
  templateId: "STICKER_PGO_TOUR_2024_5";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_tour_2024_logoEntry {
  templateId: "STICKER_PGO_TOUR_2024_LOGO";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgo_tour_2026Entry {
  templateId: "STICKER_PGO_TOUR_2026";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgo_tour_2026_1Entry {
  templateId: "STICKER_PGO_TOUR_2026_1";
  data: Sticker_6anniv_1data;
}
export interface Sticker_pgo_tour_2026_2Entry {
  templateId: "STICKER_PGO_TOUR_2026_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_tour_2026_3Entry {
  templateId: "STICKER_PGO_TOUR_2026_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_tour_2026_logoEntry {
  templateId: "STICKER_PGO_TOUR_2026_LOGO";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgo_wildarea_2024Entry {
  templateId: "STICKER_PGO_WILDAREA_2024";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pgo_wildarea_2024_1Entry {
  templateId: "STICKER_PGO_WILDAREA_2024_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_wildarea_2024_2Entry {
  templateId: "STICKER_PGO_WILDAREA_2024_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_wildarea_2024_3Entry {
  templateId: "STICKER_PGO_WILDAREA_2024_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_wildarea_2024_4Entry {
  templateId: "STICKER_PGO_WILDAREA_2024_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_pgo_wildarea_2024_logoEntry {
  templateId: "STICKER_PGO_WILDAREA_2024_LOGO";
  data: Sticker_2023collab_4data;
}
export interface Sticker_pikaairadventure_1Entry {
  templateId: "STICKER_PIKAAIRADVENTURE_1";
  data: Sticker_ditto_1data;
}
export interface Sticker_pikaairadventure_2Entry {
  templateId: "STICKER_PIKAAIRADVENTURE_2";
  data: Sticker_ditto_1data;
}
export interface Sticker_pikaairadventure_3Entry {
  templateId: "STICKER_PIKAAIRADVENTURE_3";
  data: Sticker_audinodata;
}
export interface Sticker_pikaairjeju_pikachuEntry {
  templateId: "STICKER_PIKAAIRJEJU_PIKACHU";
  data: Sticker_2023collab_1data;
}
export interface Sticker_pikaairsingapore_laprasEntry {
  templateId: "STICKER_PIKAAIRSINGAPORE_LAPRAS";
  data: Sticker_2023collab_1data;
}
export interface Sticker_pikaairsingapore_pikachuEntry {
  templateId: "STICKER_PIKAAIRSINGAPORE_PIKACHU";
  data: Sticker_2023collab_1data;
}
export interface Sticker_pikaairtaiwan_pikachuEntry {
  templateId: "STICKER_PIKAAIRTAIWAN_PIKACHU";
  data: Sticker_2023collab_1data;
}
export interface Sticker_pikaairtaiwan_snorlaxEntry {
  templateId: "STICKER_PIKAAIRTAIWAN_SNORLAX";
  data: Sticker_2023collab_1data;
}
export interface Sticker_pikachu_jolEntry {
  templateId: "STICKER_PIKACHU_JOL";
  data: Sticker_ditto_1data;
}
export interface Sticker_pika_14_thankyouEntry {
  templateId: "STICKER_PIKA_14_THANKYOU";
  data: Sticker_ditto_1data;
}
export interface Sticker_pokemonchatpals2_04Entry {
  templateId: "STICKER_POKEMONCHATPALS2_04";
  data: Sticker_ditto_1data;
}
export interface Sticker_pokemonchatpals2_40Entry {
  templateId: "STICKER_POKEMONCHATPALS2_40";
  data: Sticker_nagano_06_312data;
}
export interface Sticker_pokopia_bulbasaurEntry {
  templateId: "STICKER_POKOPIA_BULBASAUR";
  data: Sticker_2023collab_1data;
}
export interface Sticker_pokopia_pikachuEntry {
  templateId: "STICKER_POKOPIA_PIKACHU";
  data: Sticker_2023collab_1data;
}
export interface Sticker_pokopia_snorlaxEntry {
  templateId: "STICKER_POKOPIA_SNORLAX";
  data: Sticker_2023collab_1data;
}
export interface Sticker_pokopia_tangrowthEntry {
  templateId: "STICKER_POKOPIA_TANGROWTH";
  data: Sticker_7anniv_5data;
}
export interface Sticker_poliwag_1Entry {
  templateId: "STICKER_POLIWAG_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_poliwag_2Entry {
  templateId: "STICKER_POLIWAG_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_poliwag_3Entry {
  templateId: "STICKER_POLIWAG_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_poliwag_4Entry {
  templateId: "STICKER_POLIWAG_4";
  data: Sticker_2023collab_1data;
}
export interface Sticker_ponyta_1Entry {
  templateId: "STICKER_PONYTA_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_ponyta_2Entry {
  templateId: "STICKER_PONYTA_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_ponyta_3Entry {
  templateId: "STICKER_PONYTA_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_ponyta_4Entry {
  templateId: "STICKER_PONYTA_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_poppliocd_1Entry {
  templateId: "STICKER_POPPLIOCD_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_poppliocd_2Entry {
  templateId: "STICKER_POPPLIOCD_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_poppliocd_3Entry {
  templateId: "STICKER_POPPLIOCD_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_poppliocd_4Entry {
  templateId: "STICKER_POPPLIOCD_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_projectguitar_04Entry {
  templateId: "STICKER_PROJECTGUITAR_04";
  data: Sticker_audinodata;
}
export interface Sticker_projectguitar_07Entry {
  templateId: "STICKER_PROJECTGUITAR_07";
  data: Sticker_nagano_06_312data;
}
export interface Sticker_projectguitar_13Entry {
  templateId: "STICKER_PROJECTGUITAR_13";
  data: Sticker_audinodata;
}
export interface Sticker_projectguitar_25Entry {
  templateId: "STICKER_PROJECTGUITAR_25";
  data: Sticker_ditto_1data;
}
export interface Sticker_projectguitar_froakieEntry {
  templateId: "STICKER_PROJECTGUITAR_FROAKIE";
  data: Sticker_audinodata;
}
export interface Sticker_psychicspec21_inkayEntry {
  templateId: "STICKER_PSYCHICSPEC21_INKAY";
  data: Sticker_audinodata;
}
export interface Sticker_psychicspec21_inkay2Entry {
  templateId: "STICKER_PSYCHICSPEC21_INKAY2";
  data: Sticker_audinodata;
}
export interface Sticker_roggenrola_cd_1Entry {
  templateId: "STICKER_ROGGENROLA_CD_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_roggenrola_cd_2Entry {
  templateId: "STICKER_ROGGENROLA_CD_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_roggenrola_cd_3Entry {
  templateId: "STICKER_ROGGENROLA_CD_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_roggenrola_cd_4Entry {
  templateId: "STICKER_ROGGENROLA_CD_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_rowletcd_1Entry {
  templateId: "STICKER_ROWLETCD_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_rowletcd_2Entry {
  templateId: "STICKER_ROWLETCD_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_rowletcd_3Entry {
  templateId: "STICKER_ROWLETCD_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_rowletcd_4Entry {
  templateId: "STICKER_ROWLETCD_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_sandshrew_1Entry {
  templateId: "STICKER_SANDSHREW_1";
  data: Sticker_ditto_1data;
}
export interface Sticker_sandshrew_2Entry {
  templateId: "STICKER_SANDSHREW_2";
  data: Sticker_ditto_1data;
}
export interface Sticker_sandshrew_3Entry {
  templateId: "STICKER_SANDSHREW_3";
  data: Sticker_audinodata;
}
export interface Sticker_sandshrew_4Entry {
  templateId: "STICKER_SANDSHREW_4";
  data: Sticker_ditto_1data;
}
export interface Sticker_secretsofthejungle_1Entry {
  templateId: "STICKER_SECRETSOFTHEJUNGLE_1";
  data: Sticker_audinodata;
}
export interface Sticker_secretsofthejungle_4Entry {
  templateId: "STICKER_SECRETSOFTHEJUNGLE_4";
  data: Sticker_ditto_1data;
}
export interface Sticker_secretsofthejungle_5Entry {
  templateId: "STICKER_SECRETSOFTHEJUNGLE_5";
  data: Sticker_nagano_06_312data;
}
export interface Sticker_secretsofthejungle_6Entry {
  templateId: "STICKER_SECRETSOFTHEJUNGLE_6";
  data: Sticker_ditto_1data;
}
export interface Sticker_secretsofthejungle_7Entry {
  templateId: "STICKER_SECRETSOFTHEJUNGLE_7";
  data: Sticker_ditto_1data;
}
export interface Sticker_secretsofthejungle_8Entry {
  templateId: "STICKER_SECRETSOFTHEJUNGLE_8";
  data: Sticker_ditto_1data;
}
export interface Sticker_secretsofthejungle_9Entry {
  templateId: "STICKER_SECRETSOFTHEJUNGLE_9";
  data: Sticker_audinodata;
}
export interface Sticker_sewaddlecd_1Entry {
  templateId: "STICKER_SEWADDLECD_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_sewaddlecd_2Entry {
  templateId: "STICKER_SEWADDLECD_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_sewaddlecd_3Entry {
  templateId: "STICKER_SEWADDLECD_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_sewaddlecd_4Entry {
  templateId: "STICKER_SEWADDLECD_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_shelmet_karrablast_1Entry {
  templateId: "STICKER_SHELMET_KARRABLAST_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_shelmet_karrablast_2Entry {
  templateId: "STICKER_SHELMET_KARRABLAST_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_shelmet_karrablast_3Entry {
  templateId: "STICKER_SHELMET_KARRABLAST_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_sleep_1Entry {
  templateId: "STICKER_SLEEP_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_sleep_2Entry {
  templateId: "STICKER_SLEEP_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_sleep_3Entry {
  templateId: "STICKER_SLEEP_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_sleep_4Entry {
  templateId: "STICKER_SLEEP_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_sleep_5Entry {
  templateId: "STICKER_SLEEP_5";
  data: Sticker_7anniv_5data;
}
export interface Sticker_sleep_6Entry {
  templateId: "STICKER_SLEEP_6";
  data: Sticker_7anniv_5data;
}
export interface Sticker_sleep_7Entry {
  templateId: "STICKER_SLEEP_7";
  data: Sticker_7anniv_5data;
}
export interface Sticker_slowpoke_1Entry {
  templateId: "STICKER_SLOWPOKE_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_slowpoke_2Entry {
  templateId: "STICKER_SLOWPOKE_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_slowpoke_3Entry {
  templateId: "STICKER_SLOWPOKE_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_slowpoke_4Entry {
  templateId: "STICKER_SLOWPOKE_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_spheal_1Entry {
  templateId: "STICKER_SPHEAL_1";
  data: Sticker_audinodata;
}
export interface Sticker_spheal_2Entry {
  templateId: "STICKER_SPHEAL_2";
  data: Sticker_audinodata;
}
export interface Sticker_spheal_3Entry {
  templateId: "STICKER_SPHEAL_3";
  data: Sticker_audinodata;
}
export interface Sticker_spheal_4Entry {
  templateId: "STICKER_SPHEAL_4";
  data: Sticker_audinodata;
}
export interface Sticker_sprigatito_1Entry {
  templateId: "STICKER_SPRIGATITO_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_sprigatito_2Entry {
  templateId: "STICKER_SPRIGATITO_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_sprigatito_3Entry {
  templateId: "STICKER_SPRIGATITO_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_sprigatito_4Entry {
  templateId: "STICKER_SPRIGATITO_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_spring_2024_1Entry {
  templateId: "STICKER_SPRING_2024_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_spring_2024_2Entry {
  templateId: "STICKER_SPRING_2024_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_spring_2024_3Entry {
  templateId: "STICKER_SPRING_2024_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_spring_2024_4Entry {
  templateId: "STICKER_SPRING_2024_4";
  data: Sticker_2023collab_1data;
}
export interface Sticker_spring_2024_5Entry {
  templateId: "STICKER_SPRING_2024_5";
  data: Sticker_2023collab_1data;
}
export interface Sticker_spring_2024_6Entry {
  templateId: "STICKER_SPRING_2024_6";
  data: Sticker_7anniv_5data;
}
export interface Sticker_spring_2025_1Entry {
  templateId: "STICKER_SPRING_2025_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_spring_2025_2Entry {
  templateId: "STICKER_SPRING_2025_2";
  data: Sticker_2023collab_1data;
}
export interface Sticker_spring_2025_3Entry {
  templateId: "STICKER_SPRING_2025_3";
  data: Sticker_2023collab_1data;
}
export interface Sticker_spring_2025_4Entry {
  templateId: "STICKER_SPRING_2025_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_spring_2026_1Entry {
  templateId: "STICKER_SPRING_2026_1";
  data: Sticker_2023collab_1data;
}
export interface Sticker_spring_2026_2Entry {
  templateId: "STICKER_SPRING_2026_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_spring_2026_3Entry {
  templateId: "STICKER_SPRING_2026_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_spring_2026_4Entry {
  templateId: "STICKER_SPRING_2026_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_spring_eievuiEntry {
  templateId: "STICKER_SPRING_EIEVUI";
  data: Sticker_ditto_1data;
}
export interface Sticker_spring_hapinasEntry {
  templateId: "STICKER_SPRING_HAPINAS";
  data: Sticker_audinodata;
}
export interface Sticker_spring_mimirolEntry {
  templateId: "STICKER_SPRING_MIMIROL";
  data: Sticker_audinodata;
}
export interface Sticker_spring_nimphiaEntry {
  templateId: "STICKER_SPRING_NIMPHIA";
  data: Sticker_audinodata;
}
export interface Sticker_spring_pikachuEntry {
  templateId: "STICKER_SPRING_PIKACHU";
  data: Sticker_ditto_1data;
}
export interface Sticker_spring_pipitoEntry {
  templateId: "STICKER_SPRING_PIPITO";
  data: Sticker_nagano_06_312data;
}
export interface Sticker_stufful_1Entry {
  templateId: "STICKER_STUFFUL_1";
  data: Sticker_audinodata;
}
export interface Sticker_stufful_2Entry {
  templateId: "STICKER_STUFFUL_2";
  data: Sticker_audinodata;
}
export interface Sticker_stufful_3Entry {
  templateId: "STICKER_STUFFUL_3";
  data: Sticker_audinodata;
}
export interface Sticker_stufful_4Entry {
  templateId: "STICKER_STUFFUL_4";
  data: Sticker_audinodata;
}
export interface Sticker_summer_1Entry {
  templateId: "STICKER_SUMMER_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_summer_2Entry {
  templateId: "STICKER_SUMMER_2";
  data: Sticker_6anniv_1data;
}
export interface Sticker_summer_2023_blastoiseEntry {
  templateId: "STICKER_SUMMER_2023_BLASTOISE";
  data: Sticker_2023collab_1data;
}
export interface Sticker_summer_2023_butterfreeEntry {
  templateId: "STICKER_SUMMER_2023_BUTTERFREE";
  data: Sticker_2023collab_1data;
}
export interface Sticker_summer_2023_clamperlEntry {
  templateId: "STICKER_SUMMER_2023_CLAMPERL";
  data: Sticker_7anniv_5data;
}
export interface Sticker_summer_2023_ledianEntry {
  templateId: "STICKER_SUMMER_2023_LEDIAN";
  data: Sticker_7anniv_5data;
}
export interface Sticker_summer_2023_sawsbuckEntry {
  templateId: "STICKER_SUMMER_2023_SAWSBUCK";
  data: Sticker_7anniv_5data;
}
export interface Sticker_summer_2023_squirtleEntry {
  templateId: "STICKER_SUMMER_2023_SQUIRTLE";
  data: Sticker_2023collab_1data;
}
export interface Sticker_summer_2024_1Entry {
  templateId: "STICKER_SUMMER_2024_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_summer_2024_2Entry {
  templateId: "STICKER_SUMMER_2024_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_summer_2024_3Entry {
  templateId: "STICKER_SUMMER_2024_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_summer_2024_4Entry {
  templateId: "STICKER_SUMMER_2024_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_summer_2024_5Entry {
  templateId: "STICKER_SUMMER_2024_5";
  data: Sticker_7anniv_5data;
}
export interface Sticker_summer_2024_6Entry {
  templateId: "STICKER_SUMMER_2024_6";
  data: Sticker_7anniv_5data;
}
export interface Sticker_summer_2025_1Entry {
  templateId: "STICKER_SUMMER_2025_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_summer_2025_2Entry {
  templateId: "STICKER_SUMMER_2025_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_summer_2025_3Entry {
  templateId: "STICKER_SUMMER_2025_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_summer_2025_4Entry {
  templateId: "STICKER_SUMMER_2025_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_summer_3Entry {
  templateId: "STICKER_SUMMER_3";
  data: Sticker_6anniv_1data;
}
export interface Sticker_summer_4Entry {
  templateId: "STICKER_SUMMER_4";
  data: Sticker_2023collab_4data;
}
export interface Sticker_summer_5Entry {
  templateId: "STICKER_SUMMER_5";
  data: Sticker_6anniv_1data;
}
export interface Sticker_summer_6Entry {
  templateId: "STICKER_SUMMER_6";
  data: Sticker_7anniv_5data;
}
export interface Sticker_swordshield21_1Entry {
  templateId: "STICKER_SWORDSHIELD21_1";
  data: Sticker_audinodata;
}
export interface Sticker_swordshield21_2Entry {
  templateId: "STICKER_SWORDSHIELD21_2";
  data: Sticker_audinodata;
}
export interface Sticker_swordshield21_3Entry {
  templateId: "STICKER_SWORDSHIELD21_3";
  data: Sticker_audinodata;
}
export interface Sticker_swordshield21_4Entry {
  templateId: "STICKER_SWORDSHIELD21_4";
  data: Sticker_audinodata;
}
export interface Sticker_swordshield21_5Entry {
  templateId: "STICKER_SWORDSHIELD21_5";
  data: Sticker_audinodata;
}
export interface Sticker_teddiursa_1Entry {
  templateId: "STICKER_TEDDIURSA_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_teddiursa_2Entry {
  templateId: "STICKER_TEDDIURSA_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_teddiursa_3Entry {
  templateId: "STICKER_TEDDIURSA_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_teddiursa_4Entry {
  templateId: "STICKER_TEDDIURSA_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_timburr_1Entry {
  templateId: "STICKER_TIMBURR_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_timburr_2Entry {
  templateId: "STICKER_TIMBURR_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_timburr_3Entry {
  templateId: "STICKER_TIMBURR_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_timburr_4Entry {
  templateId: "STICKER_TIMBURR_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_tl_blancheEntry {
  templateId: "STICKER_TL_BLANCHE";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_tl_candelaEntry {
  templateId: "STICKER_TL_CANDELA";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_tl_sparkEntry {
  templateId: "STICKER_TL_SPARK";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_togeticcd2023_1Entry {
  templateId: "STICKER_TOGETICCD2023_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_togeticcd2023_2Entry {
  templateId: "STICKER_TOGETICCD2023_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_togeticcd2023_3Entry {
  templateId: "STICKER_TOGETICCD2023_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_togeticcd2023_4Entry {
  templateId: "STICKER_TOGETICCD2023_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_tr_arloEntry {
  templateId: "STICKER_TR_ARLO";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_tr_cliffEntry {
  templateId: "STICKER_TR_CLIFF";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_tr_sierraEntry {
  templateId: "STICKER_TR_SIERRA";
  data: Sticker_cityspotlightdata;
}
export interface Sticker_tynamocd_1Entry {
  templateId: "STICKER_TYNAMOCD_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_tynamocd_2Entry {
  templateId: "STICKER_TYNAMOCD_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_tynamocd_3Entry {
  templateId: "STICKER_TYNAMOCD_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_tynamocd_4Entry {
  templateId: "STICKER_TYNAMOCD_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_valentine2023_1Entry {
  templateId: "STICKER_VALENTINE2023_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_valentine2023_2Entry {
  templateId: "STICKER_VALENTINE2023_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_valentine2023_3Entry {
  templateId: "STICKER_VALENTINE2023_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_wcs2025_car_groupEntry {
  templateId: "STICKER_WCS2025_CAR_GROUP";
  data: Sticker_6anniv_1data;
}
export interface Sticker_wcs2025_jigglypuffEntry {
  templateId: "STICKER_WCS2025_JIGGLYPUFF";
  data: Sticker_2023collab_1data;
}
export interface Sticker_wcs2025_murkrowEntry {
  templateId: "STICKER_WCS2025_MURKROW";
  data: Sticker_7anniv_5data;
}
export interface Sticker_wcs2025_pikachuEntry {
  templateId: "STICKER_WCS2025_PIKACHU";
  data: Sticker_2023collab_1data;
}
export interface Sticker_wcs_playEntry {
  templateId: "STICKER_WCS_PLAY";
  data: Sticker_2023collab_4data;
}
export interface Sticker_willow_bronzeEntry {
  templateId: "STICKER_WILLOW_BRONZE";
  data: Sticker_2023collab_4data;
}
export interface Sticker_willow_goldEntry {
  templateId: "STICKER_WILLOW_GOLD";
  data: Sticker_2023collab_4data;
}
export interface Sticker_willow_silverEntry {
  templateId: "STICKER_WILLOW_SILVER";
  data: Sticker_2023collab_4data;
}
export interface Sticker_winter2023_1Entry {
  templateId: "STICKER_WINTER2023_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter2023_2Entry {
  templateId: "STICKER_WINTER2023_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter2023_3Entry {
  templateId: "STICKER_WINTER2023_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter2023_4Entry {
  templateId: "STICKER_WINTER2023_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter2023_5Entry {
  templateId: "STICKER_WINTER2023_5";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter2023_6Entry {
  templateId: "STICKER_WINTER2023_6";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter2025_1Entry {
  templateId: "STICKER_WINTER2025_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter2025_2Entry {
  templateId: "STICKER_WINTER2025_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter2025_3Entry {
  templateId: "STICKER_WINTER2025_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter2025_4Entry {
  templateId: "STICKER_WINTER2025_4";
  data: Sticker_2023collab_1data;
}
export interface Sticker_winter_2024_1Entry {
  templateId: "STICKER_WINTER_2024_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter_2024_2Entry {
  templateId: "STICKER_WINTER_2024_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter_2024_3Entry {
  templateId: "STICKER_WINTER_2024_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter_2024_4Entry {
  templateId: "STICKER_WINTER_2024_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter_2024_5Entry {
  templateId: "STICKER_WINTER_2024_5";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter_2024_6Entry {
  templateId: "STICKER_WINTER_2024_6";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter_amauraEntry {
  templateId: "STICKER_WINTER_AMAURA";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter_darumakaEntry {
  templateId: "STICKER_WINTER_DARUMAKA";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter_glaceonEntry {
  templateId: "STICKER_WINTER_GLACEON";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter_pikachuEntry {
  templateId: "STICKER_WINTER_PIKACHU";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter_sawsbuckEntry {
  templateId: "STICKER_WINTER_SAWSBUCK";
  data: Sticker_7anniv_5data;
}
export interface Sticker_winter_snoruntEntry {
  templateId: "STICKER_WINTER_SNORUNT";
  data: Sticker_7anniv_5data;
}
export interface Sticker_woopercd2023_1Entry {
  templateId: "STICKER_WOOPERCD2023_1";
  data: Sticker_7anniv_5data;
}
export interface Sticker_woopercd2023_2Entry {
  templateId: "STICKER_WOOPERCD2023_2";
  data: Sticker_7anniv_5data;
}
export interface Sticker_woopercd2023_3Entry {
  templateId: "STICKER_WOOPERCD2023_3";
  data: Sticker_7anniv_5data;
}
export interface Sticker_woopercd2023_4Entry {
  templateId: "STICKER_WOOPERCD2023_4";
  data: Sticker_7anniv_5data;
}
export interface Sticker_yadonEntry {
  templateId: "STICKER_YADON";
  data: Sticker_ditto_1data;
}
export interface Sticker_yurutto_12Entry {
  templateId: "STICKER_YURUTTO_12";
  data: Sticker_audinodata;
}
export interface Sticker_yurutto_24Entry {
  templateId: "STICKER_YURUTTO_24";
  data: Sticker_ditto_1data;
}
export interface Sticker_yurutto_26Entry {
  templateId: "STICKER_YURUTTO_26";
  data: Sticker_ditto_1data;
}
export interface Sticker_yurutto_33Entry {
  templateId: "STICKER_YURUTTO_33";
  data: Sticker_nagano_06_312data;
}
export interface Sticker_yurutto_36Entry {
  templateId: "STICKER_YURUTTO_36";
  data: Sticker_ditto_1data;
}
export interface Sticker_yurutto_37Entry {
  templateId: "STICKER_YURUTTO_37";
  data: Sticker_ditto_1data;
}
export interface Store_refresh_feature_gateEntry {
  templateId: "STORE_REFRESH_FEATURE_GATE";
  data: Admin_gm_nia_ops_only_filter_ams_feature_gatedata;
}
export interface Style_shop_settingsdatastyleshopsettings {
  cartDisabled: boolean;
  recommendedItemIconNames: (string)[];
  setsEnabled: boolean;
  v2Enabled: boolean;
}
export interface Style_shop_settingsdata {
  styleShopSettings: Style_shop_settingsdatastyleshopsettings;
  templateId: string;
}
export interface Style_shop_settingsEntry {
  templateId: "STYLE_SHOP_SETTINGS";
  data: Style_shop_settingsdata;
}
export interface Survey_settingsdatainappsurveysettings {
  surveyPollFrequencyS: number;
}
export interface Survey_settingsdata {
  inAppSurveySettings: Survey_settingsdatainappsurveysettings;
  templateId: string;
}
export interface Survey_settingsEntry {
  templateId: "SURVEY_SETTINGS";
  data: Survey_settingsdata;
}
export interface Tappable_settingsdatatappablesettings {
  avgTappablesInView: number;
  buddyFovDegress: number;
  movementRespawnThresholdMeters: number;
  spawnAngleDegrees: number;
  visibleRadiusMeters: number;
}
export interface Tappable_settingsdata {
  tappableSettings: Tappable_settingsdatatappablesettings;
  templateId: string;
}
export interface Tappable_settingsEntry {
  templateId: "TAPPABLE_SETTINGS";
  data: Tappable_settingsdata;
}
export interface Tappable_settings_breakfastdatatappablesettings {
  avgTappablesInView: number;
  buddyFovDegress: number;
  movementRespawnThresholdMeters: number;
  removeWhenTapped: boolean;
  spawnAngleDegrees: number;
  "type": string;
  visibleRadiusMeters: number;
}
export interface Tappable_settings_breakfastdata {
  tappableSettings: Tappable_settings_breakfastdatatappablesettings;
  templateId: string;
}
export interface Tappable_settings_breakfastEntry {
  templateId: "TAPPABLE_SETTINGS_BREAKFAST";
  data: Tappable_settings_breakfastdata;
}
export interface Tappable_type_hatdatatappablesettings {
  removeWhenTapped: boolean;
  tappableAssetKey: string;
  visibleRadiusMeters: number;
}
export interface Tappable_type_hatdata {
  tappableSettings: Tappable_type_hatdatatappablesettings;
  templateId: string;
}
export interface Tappable_type_hatEntry {
  templateId: "TAPPABLE_TYPE_HAT";
  data: Tappable_type_hatdata;
}
export interface Tappable_type_mapleEntry {
  templateId: "TAPPABLE_TYPE_MAPLE";
  data: Tappable_type_hatdata;
}
export interface Tappable_type_pokeballEntry {
  templateId: "TAPPABLE_TYPE_POKEBALL";
  data: Tappable_type_hatdata;
}
export interface Temporary_evolution_v0003_pokemon_venusaurdatatemporaryevolutionsettingstemporaryevolutionsitem {
  assetBundleValue: number;
  temporaryEvolutionId: string;
}
export interface Temporary_evolution_v0003_pokemon_venusaurdatatemporaryevolutionsettings {
  pokemonId: string;
  temporaryEvolutions: (Temporary_evolution_v0003_pokemon_venusaurdatatemporaryevolutionsettingstemporaryevolutionsitem)[];
}
export interface Temporary_evolution_v0003_pokemon_venusaurdata {
  templateId: string;
  temporaryEvolutionSettings: Temporary_evolution_v0003_pokemon_venusaurdatatemporaryevolutionsettings;
}
export interface Temporary_evolution_v0003_pokemon_venusaurEntry {
  templateId: "TEMPORARY_EVOLUTION_V0003_POKEMON_VENUSAUR";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0006_pokemon_charizardEntry {
  templateId: "TEMPORARY_EVOLUTION_V0006_POKEMON_CHARIZARD";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0009_pokemon_blastoiseEntry {
  templateId: "TEMPORARY_EVOLUTION_V0009_POKEMON_BLASTOISE";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0015_pokemon_beedrillEntry {
  templateId: "TEMPORARY_EVOLUTION_V0015_POKEMON_BEEDRILL";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0018_pokemon_pidgeotEntry {
  templateId: "TEMPORARY_EVOLUTION_V0018_POKEMON_PIDGEOT";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0065_pokemon_alakazamEntry {
  templateId: "TEMPORARY_EVOLUTION_V0065_POKEMON_ALAKAZAM";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0071_pokemon_victreebelEntry {
  templateId: "TEMPORARY_EVOLUTION_V0071_POKEMON_VICTREEBEL";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0080_pokemon_slowbroEntry {
  templateId: "TEMPORARY_EVOLUTION_V0080_POKEMON_SLOWBRO";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0094_pokemon_gengarEntry {
  templateId: "TEMPORARY_EVOLUTION_V0094_POKEMON_GENGAR";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0115_pokemon_kangaskhanEntry {
  templateId: "TEMPORARY_EVOLUTION_V0115_POKEMON_KANGASKHAN";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0127_pokemon_pinsirEntry {
  templateId: "TEMPORARY_EVOLUTION_V0127_POKEMON_PINSIR";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0130_pokemon_gyaradosEntry {
  templateId: "TEMPORARY_EVOLUTION_V0130_POKEMON_GYARADOS";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0142_pokemon_aerodactylEntry {
  templateId: "TEMPORARY_EVOLUTION_V0142_POKEMON_AERODACTYL";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0149_pokemon_dragoniteEntry {
  templateId: "TEMPORARY_EVOLUTION_V0149_POKEMON_DRAGONITE";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0181_pokemon_ampharosEntry {
  templateId: "TEMPORARY_EVOLUTION_V0181_POKEMON_AMPHAROS";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0208_pokemon_steelixEntry {
  templateId: "TEMPORARY_EVOLUTION_V0208_POKEMON_STEELIX";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0212_pokemon_scizorEntry {
  templateId: "TEMPORARY_EVOLUTION_V0212_POKEMON_SCIZOR";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0214_pokemon_heracrossEntry {
  templateId: "TEMPORARY_EVOLUTION_V0214_POKEMON_HERACROSS";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0229_pokemon_houndoomEntry {
  templateId: "TEMPORARY_EVOLUTION_V0229_POKEMON_HOUNDOOM";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0248_pokemon_tyranitarEntry {
  templateId: "TEMPORARY_EVOLUTION_V0248_POKEMON_TYRANITAR";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0254_pokemon_sceptileEntry {
  templateId: "TEMPORARY_EVOLUTION_V0254_POKEMON_SCEPTILE";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0257_pokemon_blazikenEntry {
  templateId: "TEMPORARY_EVOLUTION_V0257_POKEMON_BLAZIKEN";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0260_pokemon_swampertEntry {
  templateId: "TEMPORARY_EVOLUTION_V0260_POKEMON_SWAMPERT";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0282_pokemon_gardevoirEntry {
  templateId: "TEMPORARY_EVOLUTION_V0282_POKEMON_GARDEVOIR";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0302_pokemon_sableyeEntry {
  templateId: "TEMPORARY_EVOLUTION_V0302_POKEMON_SABLEYE";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0303_pokemon_mawileEntry {
  templateId: "TEMPORARY_EVOLUTION_V0303_POKEMON_MAWILE";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0306_pokemon_aggronEntry {
  templateId: "TEMPORARY_EVOLUTION_V0306_POKEMON_AGGRON";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0308_pokemon_medichamEntry {
  templateId: "TEMPORARY_EVOLUTION_V0308_POKEMON_MEDICHAM";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0310_pokemon_manectricEntry {
  templateId: "TEMPORARY_EVOLUTION_V0310_POKEMON_MANECTRIC";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0319_pokemon_sharpedoEntry {
  templateId: "TEMPORARY_EVOLUTION_V0319_POKEMON_SHARPEDO";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0323_pokemon_cameruptEntry {
  templateId: "TEMPORARY_EVOLUTION_V0323_POKEMON_CAMERUPT";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0334_pokemon_altariaEntry {
  templateId: "TEMPORARY_EVOLUTION_V0334_POKEMON_ALTARIA";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0354_pokemon_banetteEntry {
  templateId: "TEMPORARY_EVOLUTION_V0354_POKEMON_BANETTE";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0359_pokemon_absolEntry {
  templateId: "TEMPORARY_EVOLUTION_V0359_POKEMON_ABSOL";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0362_pokemon_glalieEntry {
  templateId: "TEMPORARY_EVOLUTION_V0362_POKEMON_GLALIE";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0373_pokemon_salamenceEntry {
  templateId: "TEMPORARY_EVOLUTION_V0373_POKEMON_SALAMENCE";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0376_pokemon_metagrossEntry {
  templateId: "TEMPORARY_EVOLUTION_V0376_POKEMON_METAGROSS";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0380_pokemon_latiasEntry {
  templateId: "TEMPORARY_EVOLUTION_V0380_POKEMON_LATIAS";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0381_pokemon_latiosEntry {
  templateId: "TEMPORARY_EVOLUTION_V0381_POKEMON_LATIOS";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0382_pokemon_kyogreEntry {
  templateId: "TEMPORARY_EVOLUTION_V0382_POKEMON_KYOGRE";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0383_pokemon_groudonEntry {
  templateId: "TEMPORARY_EVOLUTION_V0383_POKEMON_GROUDON";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0384_pokemon_rayquazaEntry {
  templateId: "TEMPORARY_EVOLUTION_V0384_POKEMON_RAYQUAZA";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0428_pokemon_garchompEntry {
  templateId: "TEMPORARY_EVOLUTION_V0428_POKEMON_GARCHOMP";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0428_pokemon_lopunnyEntry {
  templateId: "TEMPORARY_EVOLUTION_V0428_POKEMON_LOPUNNY";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0448_pokemon_lucarioEntry {
  templateId: "TEMPORARY_EVOLUTION_V0448_POKEMON_LUCARIO";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0460_pokemon_abomasnowEntry {
  templateId: "TEMPORARY_EVOLUTION_V0460_POKEMON_ABOMASNOW";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0475_pokemon_galladeEntry {
  templateId: "TEMPORARY_EVOLUTION_V0475_POKEMON_GALLADE";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0531_pokemon_audinoEntry {
  templateId: "TEMPORARY_EVOLUTION_V0531_POKEMON_AUDINO";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0687_pokemon_malamarEntry {
  templateId: "TEMPORARY_EVOLUTION_V0687_POKEMON_MALAMAR";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Temporary_evolution_v0719_pokemon_diancieEntry {
  templateId: "TEMPORARY_EVOLUTION_V0719_POKEMON_DIANCIE";
  data: Temporary_evolution_v0003_pokemon_venusaurdata;
}
export interface Ticket_gifting_settingsdataticketgiftingsettings {
  dailyPlayerGiftingLimit: number;
  minPlayerLevel: number;
  minRequiredFriendshipLevel: string;
}
export interface Ticket_gifting_settingsdata {
  templateId: string;
  ticketGiftingSettings: Ticket_gifting_settingsdataticketgiftingsettings;
}
export interface Ticket_gifting_settingsEntry {
  templateId: "TICKET_GIFTING_SETTINGS";
  data: Ticket_gifting_settingsdata;
}
export interface Today_view_settings_v2datatodayviewsettings {
  favoriteQuestEnabled: boolean;
  notificationServerAuthoritative: boolean;
  pinClaimableQuestEnabled: boolean;
}
export interface Today_view_settings_v2data {
  templateId: string;
  todayViewSettings: Today_view_settings_v2datatodayviewsettings;
}
export interface Today_view_settings_v2Entry {
  templateId: "TODAY_VIEW_SETTINGS_V2";
  data: Today_view_settings_v2data;
}
export interface Today_view_v3_code_gateEntry {
  templateId: "TODAY_VIEW_V3_CODE_GATE";
  data: Ibfc_lws_code_gatedata;
}
export interface Trainer_personality_easydatacombatnpcpersonality {
  offensiveMaximumScore: number;
  offensiveMinimumScore: number;
  personalityName: string;
  specialChance: number;
  superEffectiveChance: number;
}
export interface Trainer_personality_easydata {
  combatNpcPersonality: Trainer_personality_easydatacombatnpcpersonality;
  templateId: string;
}
export interface Trainer_personality_easyEntry {
  templateId: "TRAINER_PERSONALITY_EASY";
  data: Trainer_personality_easydata;
}
export interface Trainer_personality_harddatacombatnpcpersonality {
  defensiveMaximumScore: number;
  defensiveMinimumScore: number;
  offensiveMaximumScore: number;
  offensiveMinimumScore: number;
  personalityName: string;
  specialChance: number;
  superEffectiveChance: number;
}
export interface Trainer_personality_harddata {
  combatNpcPersonality: Trainer_personality_harddatacombatnpcpersonality;
  templateId: string;
}
export interface Trainer_personality_hardEntry {
  templateId: "TRAINER_PERSONALITY_HARD";
  data: Trainer_personality_harddata;
}
export interface Trainer_personality_mediumEntry {
  templateId: "TRAINER_PERSONALITY_MEDIUM";
  data: Trainer_personality_easydata;
}
export interface Tutorials_settingsdatatutorialsettingstutorialitemrewardsitemitemitem {
  count: number;
  itemId: string;
}
export interface Tutorials_settingsdatatutorialsettingstutorialitemrewardsitem {
  item?: (Tutorials_settingsdatatutorialsettingstutorialitemrewardsitemitemitem)[];
  tutorial: string | number;
}
export interface Tutorials_settingsdatatutorialsettings {
  friendsTutorialEnabled: boolean;
  giftsTutorialEnabled: boolean;
  luckyFriendTutorialEnabled: boolean;
  luckyTradeTutorialEnabled: boolean;
  luresTutorialEnabled: boolean;
  pokemonTaggingTutorialEnabled: boolean;
  razzberryCatchTutorialEnabled: boolean;
  revivesAndPotionsTutorialEnabled: boolean;
  taskHelpTutorialsEnabled: boolean;
  tradingTutorialEnabled: boolean;
  tutorialItemRewards: (Tutorials_settingsdatatutorialsettingstutorialitemrewardsitem)[];
  typeEffectivenessTipsEnabled: boolean;
}
export interface Tutorials_settingsdata {
  templateId: string;
  tutorialSettings: Tutorials_settingsdatatutorialsettings;
}
export interface Tutorials_settingsEntry {
  templateId: "TUTORIALS_SETTINGS";
  data: Tutorials_settingsdata;
}
export interface Update_tickets_string_feature_gateEntry {
  templateId: "UPDATE_TICKETS_STRING_FEATURE_GATE";
  data: Admin_gm_nia_ops_only_filter_ams_feature_gatedata;
}
export interface Use_extended_settings_for_max_scale_code_gateEntry {
  templateId: "USE_EXTENDED_SETTINGS_FOR_MAX_SCALE_CODE_GATE";
  data: Ibfc_lws_code_gatedata;
}
export interface Use_gmt_sku_data_code_gateEntry {
  templateId: "USE_GMT_SKU_DATA_CODE_GATE";
  data: Ibfc_lws_code_gatedata;
}
export interface Verbose_log_combat_settingsdataverboselogcombatsettings {
  clientLogDecayTimeInHours: number;
  enableCombatChallengeSetup: boolean;
  enableCombatVsSeekerSetup: boolean;
  enableCoreCombat: boolean;
  enabled: boolean;
  enableExceptionCaught: boolean;
  enableOnApplicationFocus: boolean;
  enableOnApplicationPause: boolean;
  enableOnApplicationQuit: boolean;
  enableRpcErrorData: boolean;
  enableWebSocket: boolean;
  progressTokenPriority: number;
}
export interface Verbose_log_combat_settingsdata {
  templateId: string;
  verboseLogCombatSettings: Verbose_log_combat_settingsdataverboselogcombatsettings;
}
export interface Verbose_log_combat_settingsEntry {
  templateId: "VERBOSE_LOG_COMBAT_SETTINGS";
  data: Verbose_log_combat_settingsdata;
}
export interface Verbose_log_raid_settingsdataverboselograidsettings {
  enableAttackRaid: boolean;
  enableClientPredictionInconsistencyData: boolean;
  enableExceptionCaught: boolean;
  enableGetRaidDetails: boolean;
  enableJoinLobby: boolean;
  enableLeaveLobby: boolean;
  enableOnApplicationFocus: boolean;
  enableOnApplicationPause: boolean;
  enableOnApplicationQuit: boolean;
  enableProgressToken: boolean;
  enableRpcErrorData: boolean;
  enableSendRaidInvitation: boolean;
  enableStartRaidBattle: boolean;
}
export interface Verbose_log_raid_settingsdata {
  templateId: string;
  verboseLogRaidSettings: Verbose_log_raid_settingsdataverboselograidsettings;
}
export interface Verbose_log_raid_settingsEntry {
  templateId: "VERBOSE_LOG_RAID_SETTINGS";
  data: Verbose_log_raid_settingsdata;
}
export interface Vista_general_settingsdatavistageneralsettings {
  isFeatureEnabled: boolean;
  isVistaBattleEnabled: boolean;
  isVistaEncounterEnabled: boolean;
  isVistaMapEnabled: boolean;
  isVistaSpawnsEnabled: boolean;
}
export interface Vista_general_settingsdata {
  templateId: string;
  vistaGeneralSettings: Vista_general_settingsdatavistageneralsettings;
}
export interface Vista_general_settingsEntry {
  templateId: "VISTA_GENERAL_SETTINGS";
  data: Vista_general_settingsdata;
}
export interface Vnext_animation_configurationdatabattleanimationsettingscombatanimationconfiguration {
  fastAttackSettings: External_addressable_assets_settingsdataexternaladdressableassetssettings;
  projectedHealthAnimationDurationSeconds: number;
}
export interface Vnext_animation_configurationdatabattleanimationsettingsmaxbattleanimationconfigurationfastattacksettings {
  crossFadeDurationSeconds: number;
  normalizedStartOffset: number;
}
export interface Vnext_animation_configurationdatabattleanimationsettingsmaxbattleanimationconfiguration {
  fastAttackSettings: Vnext_animation_configurationdatabattleanimationsettingsmaxbattleanimationconfigurationfastattacksettings;
}
export interface Vnext_animation_configurationdatabattleanimationsettings {
  combatAnimationConfiguration: Vnext_animation_configurationdatabattleanimationsettingscombatanimationconfiguration;
  maxBattleAnimationConfiguration: Vnext_animation_configurationdatabattleanimationsettingsmaxbattleanimationconfiguration;
  raidsAnimationConfiguration: Vnext_animation_configurationdatabattleanimationsettingsmaxbattleanimationconfiguration;
}
export interface Vnext_animation_configurationdata {
  battleAnimationSettings: Vnext_animation_configurationdatabattleanimationsettings;
  templateId: string;
}
export interface Vnext_animation_configurationEntry {
  templateId: "VNEXT_ANIMATION_CONFIGURATION";
  data: Vnext_animation_configurationdata;
}
export interface Vnext_battle_configdatavnextbattleconfigmaxbattleconfig {
  deadNetworkDisconnectThresholdTurns: string;
}
export interface Vnext_battle_configdatavnextbattleconfig {
  maxBattleConfig: Vnext_battle_configdatavnextbattleconfigmaxbattleconfig;
  raidsBattleConfig: Vnext_battle_configdatavnextbattleconfigmaxbattleconfig;
}
export interface Vnext_battle_configdata {
  templateId: string;
  vnextBattleConfig: Vnext_battle_configdatavnextbattleconfig;
}
export interface Vnext_battle_configEntry {
  templateId: "VNEXT_BATTLE_CONFIG";
  data: Vnext_battle_configdata;
}
export interface Vnext_pre_response_input_blocking_behavior_feature_gateEntry {
  templateId: "VNEXT_PRE_RESPONSE_INPUT_BLOCKING_BEHAVIOR_FEATURE_GATE";
  data: Mega_2026_feature_gatedata;
}
export interface Vs_seeker_client_settingsdatavsseekerclientsettings {
  allowedVsSeekerLeagueTemplateId: (string)[];
}
export interface Vs_seeker_client_settingsdata {
  templateId: string;
  vsSeekerClientSettings: Vs_seeker_client_settingsdatavsseekerclientsettings;
}
export interface Vs_seeker_client_settingsEntry {
  templateId: "VS_SEEKER_CLIENT_SETTINGS";
  data: Vs_seeker_client_settingsdata;
}
export interface Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitemattackivoverriderange {
  max: number;
  min: number;
}
export interface Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitemattackivoverride {
  range: Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitemattackivoverriderange;
}
export interface Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitemguaranteedlimitedpokemonrewardpokemonpokemondisplay {
  form: string;
}
export interface Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitemguaranteedlimitedpokemonrewardpokemon {
  pokemonDisplay: Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitemguaranteedlimitedpokemonrewardpokemonpokemondisplay;
  pokemonId: string;
  shinyProbability?: number;
}
export interface Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitemguaranteedlimitedpokemonreward {
  identifier: string;
  lifetimeMaxCount?: number;
  perCompetitiveCombatSeasonMaxCount?: number;
  pokemon: Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitemguaranteedlimitedpokemonrewardpokemon;
}
export interface Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitempokemon {
  pokemonDisplay: Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitemguaranteedlimitedpokemonrewardpokemonpokemondisplay;
  pokemonId: string;
}
export interface Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitem {
  attackIvOverride: Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitemattackivoverride;
  defenseIvOverride: Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitemattackivoverride;
  guaranteedLimitedPokemonReward?: Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitemguaranteedlimitedpokemonreward;
  pokemon?: Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitempokemon;
  staminaIvOverride: Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitemattackivoverride;
  unlockedAtRank: number;
}
export interface Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewards {
  availablePokemon: (Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitem)[];
}
export interface Vs_seeker_pokemon_rewards_freedata {
  templateId: string;
  vsSeekerPokemonRewards: Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewards;
}
export interface Vs_seeker_pokemon_rewards_freeEntry {
  templateId: "VS_SEEKER_POKEMON_REWARDS_FREE";
  data: Vs_seeker_pokemon_rewards_freedata;
}
export interface Vs_seeker_pokemon_rewards_premiumdatavsseekerpokemonrewards {
  availablePokemon: (Vs_seeker_pokemon_rewards_freedatavsseekerpokemonrewardsavailablepokemonitem)[];
  rewardTrack: string;
}
export interface Vs_seeker_pokemon_rewards_premiumdata {
  templateId: string;
  vsSeekerPokemonRewards: Vs_seeker_pokemon_rewards_premiumdatavsseekerpokemonrewards;
}
export interface Vs_seeker_pokemon_rewards_premiumEntry {
  templateId: "VS_SEEKER_POKEMON_REWARDS_PREMIUM";
  data: Vs_seeker_pokemon_rewards_premiumdata;
}
export interface Vs_seeker_schedule_settingsdatavsseekerschedulesettingsseasonschedulesitemvsseekerschedulesitem {
  endTimeMs: string;
  startTimeMs: string;
  vsSeekerLeagueTempalteId: (string)[];
}
export interface Vs_seeker_schedule_settingsdatavsseekerschedulesettingsseasonschedulesitem {
  blogUrl: string;
  descriptionKey: string;
  seasonTitle: string;
  vsSeekerSchedules: (Vs_seeker_schedule_settingsdatavsseekerschedulesettingsseasonschedulesitemvsseekerschedulesitem)[];
}
export interface Vs_seeker_schedule_settingsdatavsseekerschedulesettings {
  enableCombatHubMain: boolean;
  enableCombatLeagueView: boolean;
  enableTodayView: boolean;
  seasonSchedules: (Vs_seeker_schedule_settingsdatavsseekerschedulesettingsseasonschedulesitem)[];
}
export interface Vs_seeker_schedule_settingsdata {
  templateId: string;
  vsSeekerScheduleSettings: Vs_seeker_schedule_settingsdatavsseekerschedulesettings;
}
export interface Vs_seeker_schedule_settingsEntry {
  templateId: "VS_SEEKER_SCHEDULE_SETTINGS";
  data: Vs_seeker_schedule_settingsdata;
}
export interface Weather_affinity_cleardataweatheraffinities {
  pokemonType: (string)[];
  weatherCondition: string;
}
export interface Weather_affinity_cleardata {
  templateId: string;
  weatherAffinities: Weather_affinity_cleardataweatheraffinities;
}
export interface Weather_affinity_clearEntry {
  templateId: "WEATHER_AFFINITY_CLEAR";
  data: Weather_affinity_cleardata;
}
export interface Weather_affinity_fogEntry {
  templateId: "WEATHER_AFFINITY_FOG";
  data: Weather_affinity_cleardata;
}
export interface Weather_affinity_overcastEntry {
  templateId: "WEATHER_AFFINITY_OVERCAST";
  data: Weather_affinity_cleardata;
}
export interface Weather_affinity_partly_cloudyEntry {
  templateId: "WEATHER_AFFINITY_PARTLY_CLOUDY";
  data: Weather_affinity_cleardata;
}
export interface Weather_affinity_rainyEntry {
  templateId: "WEATHER_AFFINITY_RAINY";
  data: Weather_affinity_cleardata;
}
export interface Weather_affinity_snowEntry {
  templateId: "WEATHER_AFFINITY_SNOW";
  data: Weather_affinity_cleardata;
}
export interface Weather_affinity_windyEntry {
  templateId: "WEATHER_AFFINITY_WINDY";
  data: Weather_affinity_cleardata;
}
export interface Weather_bonus_settingsdataweatherbonussettings {
  attackBonusMultiplier: number;
  cpBaseLevelBonus: number;
  guaranteedIndividualValues: number;
  raidEncounterCpBaseLevelBonus: number;
  raidEncounterGuaranteedIndividualValues: number;
  stardustBonusMultiplier: number;
}
export interface Weather_bonus_settingsdata {
  templateId: string;
  weatherBonusSettings: Weather_bonus_settingsdataweatherbonussettings;
}
export interface Weather_bonus_settingsEntry {
  templateId: "WEATHER_BONUS_SETTINGS";
  data: Weather_bonus_settingsdata;
}
export interface Weekly_challenge_general_settingsdatapartyplaygeneralsettingspartyschedulingsettingsrecurringchallengescheduledayandtimeendtime {
  dayOfWeek: number;
  hourOfDay: number;
}
export interface Weekly_challenge_general_settingsdatapartyplaygeneralsettingspartyschedulingsettingsrecurringchallengeschedulenearendnotification {
  avalibleWindowHours: number;
  enabled: boolean;
  isLocal: boolean;
  time: Weekly_challenge_general_settingsdatapartyplaygeneralsettingspartyschedulingsettingsrecurringchallengescheduledayandtimeendtime;
}
export interface Weekly_challenge_general_settingsdatapartyplaygeneralsettingspartyschedulingsettingsrecurringchallengeschedule {
  dayAndTimeEndTime: Weekly_challenge_general_settingsdatapartyplaygeneralsettingspartyschedulingsettingsrecurringchallengescheduledayandtimeendtime;
  dayAndTimeStartTime: Weekly_challenge_general_settingsdatapartyplaygeneralsettingspartyschedulingsettingsrecurringchallengescheduledayandtimeendtime;
  maxNumChallengePerCycle: number;
  nearEndNotification: Weekly_challenge_general_settingsdatapartyplaygeneralsettingspartyschedulingsettingsrecurringchallengeschedulenearendnotification;
  startNotification: Weekly_challenge_general_settingsdatapartyplaygeneralsettingspartyschedulingsettingsrecurringchallengeschedulenearendnotification;
  timezoneId: string;
}
export interface Weekly_challenge_general_settingsdatapartyplaygeneralsettingspartyschedulingsettings {
  recurringChallengeSchedule: Weekly_challenge_general_settingsdatapartyplaygeneralsettingspartyschedulingsettingsrecurringchallengeschedule;
}
export interface Weekly_challenge_general_settingsdatapartyplaygeneralsettings {
  enabled: boolean;
  fallbackPartyQuestEnabled: boolean;
  friendRequestsEnabled: boolean;
  inviteExpirationMs: number;
  matchmakingEnabled: boolean;
  maxInvitesPerPlayer: number;
  maxPartySize: number;
  minPlayerLevel: number;
  notificationMilestones: (number)[];
  partyRewardGracePeriodMs: string;
  partySchedulingSettings: Weekly_challenge_general_settingsdatapartyplaygeneralsettingspartyschedulingsettings;
  sendInviteEnabled: boolean;
}
export interface Weekly_challenge_general_settingsdata {
  partyPlayGeneralSettings: Weekly_challenge_general_settingsdatapartyplaygeneralsettings;
  templateId: string;
}
export interface Weekly_challenge_general_settingsEntry {
  templateId: "WEEKLY_CHALLENGE_GENERAL_SETTINGS";
  data: Weekly_challenge_general_settingsdata;
}
export interface Avatar_store_footer_flagsdata {
  avatarStoreFooterFlags: Additive_scene_settingsdataadditivescenesettings;
  templateId: string;
}
export interface Avatar_store_footer_flagsEntry {
  templateId: "avatar_store_footer_flags";
  data: Avatar_store_footer_flagsdata;
}
export interface Avatar_store_subcategory_filtering_flagsdata {
  avatarStoreSubcategoryFilteringFlags: Additive_scene_settingsdataadditivescenesettings;
  templateId: string;
}
export interface Avatar_store_subcategory_filtering_flagsEntry {
  templateId: "avatar_store_subcategory_filtering_flags";
  data: Avatar_store_subcategory_filtering_flagsdata;
}
export interface Impression_tracking_settingsdataimpressiontrackingsettings {
  approachGymTrackingEnabled: boolean;
  approachRaidTrackingEnabled: boolean;
  fullScreenAdViewTrackingEnabled: boolean;
  impressionTrackingEnabled: boolean;
  pokestopSpinnerInteractionTrackingEnabled: boolean;
}
export interface Impression_tracking_settingsdata {
  impressionTrackingSettings: Impression_tracking_settingsdataimpressiontrackingsettings;
  templateId: string;
}
export interface Impression_tracking_settingsEntry {
  templateId: "impression_tracking_settings";
  data: Impression_tracking_settingsdata;
}
export interface Sticker_category_settingsdatastickercategorysettingsstickercategoryitem {
  active: boolean;
  category: string;
  preferredCategoryIcon?: string;
  sortOrder: number;
}
export interface Sticker_category_settingsdatastickercategorysettings {
  enabled: boolean;
  stickerCategory: (Sticker_category_settingsdatastickercategorysettingsstickercategoryitem)[];
}
export interface Sticker_category_settingsdata {
  stickerCategorySettings: Sticker_category_settingsdatastickercategorysettings;
  templateId: string;
}
export interface Sticker_category_settingsEntry {
  templateId: "sticker_category_settings";
  data: Sticker_category_settingsdata;
}
export interface Username_suggestion_settingsdatausernamesuggestionsettings {
  featureEnabled: boolean;
  numSuggestionsDisplayed: number;
  numSuggestionsGenerated: number;
}
export interface Username_suggestion_settingsdata {
  templateId: string;
  usernameSuggestionSettings: Username_suggestion_settingsdatausernamesuggestionsettings;
}
export interface Username_suggestion_settingsEntry {
  templateId: "username_suggestion_settings";
  data: Username_suggestion_settingsdata;
}

export interface MiscMasterfileByTemplateId {
  "ACCESSIBILITY_CLIENT_SETTINGS": Accessibility_client_settingsEntry;
  "ADDITIVE_SCENE_SETTINGS": Additive_scene_settingsEntry;
  "ADDRESSABLE_POKEMON_SETTINGS": Addressable_pokemon_settingsEntry;
  "ADDRESS_BOOK_IMPORT_SETTINGS": Address_book_import_settingsEntry;
  "ADMIN_GM_NIA_OPS_ONLY_FILTER_AMS_FEATURE_GATE": Admin_gm_nia_ops_only_filter_ams_feature_gateEntry;
  "ADVANCED_SETTINGS": Advanced_settingsEntry;
  "AMS_FEATURE_GATE": Ams_feature_gateEntry;
  "AMS_FRONTEND_FEATURE_GATE": Ams_frontend_feature_gateEntry;
  "ANDROID_SENSORS_ROLL_BACK": Android_sensors_roll_backEntry;
  "AR_PHOTO_FEATURE_FLAGS": Ar_photo_feature_flagsEntry;
  "AR_TELEMETRY_SETTINGS": Ar_telemetry_settingsEntry;
  "ASSET_REFRESH_PROTO": Asset_refresh_protoEntry;
  "AVATAR_FEATURE_FLAGS": Avatar_feature_flagsEntry;
  "AVATAR_GROUP_ORDER_SETTINGS": Avatar_group_order_settingsEntry;
  "AVATAR_GROUP_SETTINGS": Avatar_group_settingsEntry;
  "BACKGROUND_MODE_SETTINGS": Background_mode_settingsEntry;
  "BATTLE_ACCESSIBILITY_CODE_GATE": Battle_accessibility_code_gateEntry;
  "BATTLE_HUB_BADGE_SETTINGS": Battle_hub_badge_settingsEntry;
  "BATTLE_HUB_ORDER_SETTINGS": Battle_hub_order_settingsEntry;
  "BATTLE_PARTY_SETTINGS": Battle_party_settingsEntry;
  "BATTLE_REWARDS_CODE_GATE": Battle_rewards_code_gateEntry;
  "BATTLE_SETTINGS": Battle_settingsEntry;
  "BATTLE_VISUAL_SETTINGS": Battle_visual_settingsEntry;
  "BELUGA_POKEMON_WHITELIST": Beluga_pokemon_whitelistEntry;
  "BEST_FRIENDS_PLUS_SETTINGS": Best_friends_plus_settingsEntry;
  "BIDIRECTIONAL_FP_WEEKLY_CHALLENGE_REWARD_ROLL_BACK": Bidirectional_fp_weekly_challenge_reward_roll_backEntry;
  "BREAD_BATTLE_CLIENT_SETTINGS": Bread_battle_client_settingsEntry;
  "BREAD_FEATURE_FLAGS": Bread_feature_flagsEntry;
  "BREAD_LOBBY_COUNTER_SETTINGS": Bread_lobby_counter_settingsEntry;
  "BREAD_LOBBY_UPDATE_SETTINGS": Bread_lobby_update_settingsEntry;
  "BREAD_MOVE_LEVEL_SETTINGS_GROUP_1": Bread_move_level_settings_group_1Entry;
  "BREAD_MOVE_LEVEL_SETTINGS_GROUP_2": Bread_move_level_settings_group_2Entry;
  "BREAD_MOVE_LEVEL_SETTINGS_GROUP_3": Bread_move_level_settings_group_3Entry;
  "BREAD_MOVE_LEVEL_SETTINGS_GROUP_4": Bread_move_level_settings_group_4Entry;
  "BREAD_MOVE_LEVEL_SETTINGS_GROUP_7": Bread_move_level_settings_group_7Entry;
  "BREAD_MOVE_LEVEL_SETTINGS_GROUP_8": Bread_move_level_settings_group_8Entry;
  "BREAD_MOVE_LEVEL_SETTINGS_GROUP_Z": Bread_move_level_settings_group_zEntry;
  "BREAD_MOVE_MAPPING_SETTINGS": Bread_move_mapping_settingsEntry;
  "BREAD_POKEMON_SCALING_SETTINGS": Bread_pokemon_scaling_settingsEntry;
  "BREAD_SHARED_SETTINGS": Bread_shared_settingsEntry;
  "BUDDY_CATEGORY_BATTLE": Buddy_category_battleEntry;
  "BUDDY_CATEGORY_BONUS": Buddy_category_bonusEntry;
  "BUDDY_CATEGORY_CARE": Buddy_category_careEntry;
  "BUDDY_CATEGORY_EXPLORE": Buddy_category_exploreEntry;
  "BUDDY_CATEGORY_FEED": Buddy_category_feedEntry;
  "BUDDY_CATEGORY_ROUTE": Buddy_category_routeEntry;
  "BUDDY_CATEGORY_SNAPSHOT": Buddy_category_snapshotEntry;
  "BUDDY_CATEGORY_WALK": Buddy_category_walkEntry;
  "BUDDY_EMOTION_LEVEL_0": Buddy_emotion_level_0Entry;
  "BUDDY_EMOTION_LEVEL_1": Buddy_emotion_level_1Entry;
  "BUDDY_EMOTION_LEVEL_2": Buddy_emotion_level_2Entry;
  "BUDDY_EMOTION_LEVEL_3": Buddy_emotion_level_3Entry;
  "BUDDY_EMOTION_LEVEL_4": Buddy_emotion_level_4Entry;
  "BUDDY_EMOTION_LEVEL_5": Buddy_emotion_level_5Entry;
  "BUDDY_EMOTION_LEVEL_6": Buddy_emotion_level_6Entry;
  "BUDDY_ENCOUNTER_CAMEO_SETTINGS": Buddy_encounter_cameo_settingsEntry;
  "BUDDY_HUNGER_SETTINGS": Buddy_hunger_settingsEntry;
  "BUDDY_INTERACTION_SETTINGS": Buddy_interaction_settingsEntry;
  "BUDDY_LEVEL_0": Buddy_level_0Entry;
  "BUDDY_LEVEL_1": Buddy_level_1Entry;
  "BUDDY_LEVEL_2": Buddy_level_2Entry;
  "BUDDY_LEVEL_3": Buddy_level_3Entry;
  "BUDDY_LEVEL_4": Buddy_level_4Entry;
  "BUDDY_SWAP_SETTINGS": Buddy_swap_settingsEntry;
  "BUDDY_WALK_SETTINGS": Buddy_walk_settingsEntry;
  "BULK_HEALING_SETTINGS": Bulk_healing_settingsEntry;
  "BUTTERFLY_COLLECTOR_SETTINGS": Butterfly_collector_settingsEntry;
  "CAMPFIRE_SETTINGS": Campfire_settingsEntry;
  "CATCH_RADIUS_MULTIPLIER_SETTINGS": Catch_radius_multiplier_settingsEntry;
  "CHARACTER_BLANCHE": Character_blancheEntry;
  "CHARACTER_BUG_GRUNT_FEMALE": Character_bug_grunt_femaleEntry;
  "CHARACTER_BUG_GRUNT_MALE": Character_bug_grunt_maleEntry;
  "CHARACTER_CANDELA": Character_candelaEntry;
  "CHARACTER_DARK_GRUNT_FEMALE": Character_dark_grunt_femaleEntry;
  "CHARACTER_DARK_GRUNT_MALE": Character_dark_grunt_maleEntry;
  "CHARACTER_DECOY_GRUNT_FEMALE": Character_decoy_grunt_femaleEntry;
  "CHARACTER_DECOY_GRUNT_MALE": Character_decoy_grunt_maleEntry;
  "CHARACTER_DRAGON_GRUNT_FEMALE": Character_dragon_grunt_femaleEntry;
  "CHARACTER_DRAGON_GRUNT_MALE": Character_dragon_grunt_maleEntry;
  "CHARACTER_ELECTRIC_GRUNT_FEMALE": Character_electric_grunt_femaleEntry;
  "CHARACTER_ELECTRIC_GRUNT_MALE": Character_electric_grunt_maleEntry;
  "CHARACTER_EVENT_ARLO_UNTICKETED": Character_event_arlo_unticketedEntry;
  "CHARACTER_EVENT_CLIFF_UNTICKETED": Character_event_cliff_unticketedEntry;
  "CHARACTER_EVENT_GIOVANNI_UNTICKETED": Character_event_giovanni_unticketedEntry;
  "CHARACTER_EVENT_NPC_0": Character_event_npc_0Entry;
  "CHARACTER_EVENT_NPC_1": Character_event_npc_1Entry;
  "CHARACTER_EVENT_NPC_10": Character_event_npc_10Entry;
  "CHARACTER_EVENT_NPC_2": Character_event_npc_2Entry;
  "CHARACTER_EVENT_NPC_3": Character_event_npc_3Entry;
  "CHARACTER_EVENT_NPC_4": Character_event_npc_4Entry;
  "CHARACTER_EVENT_NPC_5": Character_event_npc_5Entry;
  "CHARACTER_EVENT_NPC_6": Character_event_npc_6Entry;
  "CHARACTER_EVENT_NPC_7": Character_event_npc_7Entry;
  "CHARACTER_EVENT_NPC_8": Character_event_npc_8Entry;
  "CHARACTER_EVENT_NPC_9": Character_event_npc_9Entry;
  "CHARACTER_EVENT_SIERRA_UNTICKETED": Character_event_sierra_unticketedEntry;
  "CHARACTER_EXECUTIVE_ARLO": Character_executive_arloEntry;
  "CHARACTER_EXECUTIVE_CLIFF": Character_executive_cliffEntry;
  "CHARACTER_EXECUTIVE_SIERRA": Character_executive_sierraEntry;
  "CHARACTER_EXPLORER": Character_explorerEntry;
  "CHARACTER_FAIRY_GRUNT_FEMALE": Character_fairy_grunt_femaleEntry;
  "CHARACTER_FAIRY_GRUNT_MALE": Character_fairy_grunt_maleEntry;
  "CHARACTER_FIGHTING_GRUNT_FEMALE": Character_fighting_grunt_femaleEntry;
  "CHARACTER_FIGHTING_GRUNT_MALE": Character_fighting_grunt_maleEntry;
  "CHARACTER_FIRE_GRUNT_FEMALE": Character_fire_grunt_femaleEntry;
  "CHARACTER_FIRE_GRUNT_MALE": Character_fire_grunt_maleEntry;
  "CHARACTER_FLYING_GRUNT_FEMALE": Character_flying_grunt_femaleEntry;
  "CHARACTER_FLYING_GRUNT_MALE": Character_flying_grunt_maleEntry;
  "CHARACTER_GHOST_GRUNT_FEMALE": Character_ghost_grunt_femaleEntry;
  "CHARACTER_GHOST_GRUNT_MALE": Character_ghost_grunt_maleEntry;
  "CHARACTER_GIOVANNI": Character_giovanniEntry;
  "CHARACTER_GRASS_GRUNT_FEMALE": Character_grass_grunt_femaleEntry;
  "CHARACTER_GRASS_GRUNT_MALE": Character_grass_grunt_maleEntry;
  "CHARACTER_GROUND_GRUNT_FEMALE": Character_ground_grunt_femaleEntry;
  "CHARACTER_GROUND_GRUNT_MALE": Character_ground_grunt_maleEntry;
  "CHARACTER_GRUNTB_FEMALE": Character_gruntb_femaleEntry;
  "CHARACTER_GRUNTB_MALE": Character_gruntb_maleEntry;
  "CHARACTER_GRUNT_FEMALE": Character_grunt_femaleEntry;
  "CHARACTER_GRUNT_MALE": Character_grunt_maleEntry;
  "CHARACTER_ICE_GRUNT_FEMALE": Character_ice_grunt_femaleEntry;
  "CHARACTER_ICE_GRUNT_MALE": Character_ice_grunt_maleEntry;
  "CHARACTER_METAL_GRUNT_FEMALE": Character_metal_grunt_femaleEntry;
  "CHARACTER_METAL_GRUNT_MALE": Character_metal_grunt_maleEntry;
  "CHARACTER_NORMAL_GRUNT_FEMALE": Character_normal_grunt_femaleEntry;
  "CHARACTER_NORMAL_GRUNT_MALE": Character_normal_grunt_maleEntry;
  "CHARACTER_POISON_GRUNT_FEMALE": Character_poison_grunt_femaleEntry;
  "CHARACTER_POISON_GRUNT_MALE": Character_poison_grunt_maleEntry;
  "CHARACTER_PSYCHIC_GRUNT_FEMALE": Character_psychic_grunt_femaleEntry;
  "CHARACTER_PSYCHIC_GRUNT_MALE": Character_psychic_grunt_maleEntry;
  "CHARACTER_ROCK_GRUNT_FEMALE": Character_rock_grunt_femaleEntry;
  "CHARACTER_ROCK_GRUNT_MALE": Character_rock_grunt_maleEntry;
  "CHARACTER_SPARK": Character_sparkEntry;
  "CHARACTER_WATER_GRUNT_FEMALE": Character_water_grunt_femaleEntry;
  "CHARACTER_WATER_GRUNT_MALE": Character_water_grunt_maleEntry;
  "CHARACTER_WILLOW": Character_willowEntry;
  "CHARACTER_WILLOWB": Character_willowbEntry;
  "CLIENT_VNEXT_BATTLE_CONFIG": Client_vnext_battle_configEntry;
  "COMBAT_COMPETITIVE_SEASON_SETTINGS": Combat_competitive_season_settingsEntry;
  "COMBAT_LEAGUE_SETTINGS": Combat_league_settingsEntry;
  "COMBAT_SETTINGS": Combat_settingsEntry;
  "COMBAT_STAT_STAGE_SETTINGS": Combat_stat_stage_settingsEntry;
  "COMBAT_VNEXT_CODE_GATE": Combat_vnext_code_gateEntry;
  "CONTEST_SETTINGS": Contest_settingsEntry;
  "CONVERSATION_SETTINGS": Conversation_settingsEntry;
  "CROSS_GAME_SOCIAL_SETTING": Cross_game_social_settingEntry;
  "DAILY_ADVENTURE_INCENSE_SETTINGS": Daily_adventure_incense_settingsEntry;
  "DAY_NIGHT_POI_FEATURE_GATE": Day_night_poi_feature_gateEntry;
  "DEEP_LINKING_SETTINGS": Deep_linking_settingsEntry;
  "DEFAULT_BATTLE_INPUT_BUFFER_SETTINGS": Default_battle_input_buffer_settingsEntry;
  "EGG_HATCH_IMPROVEMENTS_SETTINGS": Egg_hatch_improvements_settingsEntry;
  "ENABLE_PVP_CHALLENGE_SPANNER_FEATURE_GATE": Enable_pvp_challenge_spanner_feature_gateEntry;
  "ENCOUNTER_SETTINGS": Encounter_settingsEntry;
  "EVENT_LIST_FEATURE_GATE": Event_list_feature_gateEntry;
  "EVENT_PASS_APRIL2026_SEASON": Event_pass_april2026_seasonEntry;
  "EVENT_PASS_BONUS_RANKS_FEATURE_GATE": Event_pass_bonus_ranks_feature_gateEntry;
  "EVENT_PASS_MILESTONE_REWARDS_FEATURE_GATE": Event_pass_milestone_rewards_feature_gateEntry;
  "EVENT_PASS_SUSTAINABILITY2026_EVENT": Event_pass_sustainability2026_eventEntry;
  "EVENT_PLANNER_POPULAR_RAID_RSVP_SETTINGS": Event_planner_popular_raid_rsvp_settingsEntry;
  "EVENT_PLANNER_SETTINGS": Event_planner_settingsEntry;
  "EVOLUTION_V0052_POKEMON_MEOWTH": Evolution_v0052_pokemon_meowthEntry;
  "EVOLUTION_V0083_POKEMON_FARFETCHD": Evolution_v0083_pokemon_farfetchdEntry;
  "EVOLUTION_V0122_POKEMON_MR_MIME": Evolution_v0122_pokemon_mr_mimeEntry;
  "EVOLUTION_V0123_POKEMON_SCYTHER": Evolution_v0123_pokemon_scytherEntry;
  "EVOLUTION_V0150_POKEMON_MEWTWO": Evolution_v0150_pokemon_mewtwoEntry;
  "EVOLUTION_V0155_POKEMON_CYNDAQUIL": Evolution_v0155_pokemon_cyndaquilEntry;
  "EVOLUTION_V0156_POKEMON_QUILAVA": Evolution_v0156_pokemon_quilavaEntry;
  "EVOLUTION_V0157_POKEMON_TYPHLOSION": Evolution_v0157_pokemon_typhlosionEntry;
  "EVOLUTION_V0194_POKEMON_WOOPER": Evolution_v0194_pokemon_wooperEntry;
  "EVOLUTION_V0211_POKEMON_QWILFISH": Evolution_v0211_pokemon_qwilfishEntry;
  "EVOLUTION_V0215_POKEMON_SNEASEL": Evolution_v0215_pokemon_sneaselEntry;
  "EVOLUTION_V0222_POKEMON_CORSOLA": Evolution_v0222_pokemon_corsolaEntry;
  "EVOLUTION_V0234_POKEMON_STANTLER": Evolution_v0234_pokemon_stantlerEntry;
  "EVOLUTION_V0263_POKEMON_ZIGZAGOON": Evolution_v0263_pokemon_zigzagoonEntry;
  "EVOLUTION_V0264_POKEMON_LINOONE": Evolution_v0264_pokemon_linooneEntry;
  "EVOLUTION_V0290_POKEMON_NINCADA": Evolution_v0290_pokemon_nincadaEntry;
  "EVOLUTION_V0412_POKEMON_BURMY": Evolution_v0412_pokemon_burmyEntry;
  "EVOLUTION_V0413_POKEMON_WORMADAM": Evolution_v0413_pokemon_wormadamEntry;
  "EVOLUTION_V0414_POKEMON_MOTHIM": Evolution_v0414_pokemon_mothimEntry;
  "EVOLUTION_V0420_POKEMON_CHERUBI": Evolution_v0420_pokemon_cherubiEntry;
  "EVOLUTION_V0421_POKEMON_CHERRIM": Evolution_v0421_pokemon_cherrimEntry;
  "EVOLUTION_V0422_POKEMON_SHELLOS": Evolution_v0422_pokemon_shellosEntry;
  "EVOLUTION_V0423_POKEMON_GASTRODON": Evolution_v0423_pokemon_gastrodonEntry;
  "EVOLUTION_V0449_POKEMON_HIPPOPOTAS": Evolution_v0449_pokemon_hippopotasEntry;
  "EVOLUTION_V0450_POKEMON_HIPPOWDON": Evolution_v0450_pokemon_hippowdonEntry;
  "EVOLUTION_V0501_POKEMON_OSHAWOTT": Evolution_v0501_pokemon_oshawottEntry;
  "EVOLUTION_V0502_POKEMON_DEWOTT": Evolution_v0502_pokemon_dewottEntry;
  "EVOLUTION_V0503_POKEMON_SAMUROTT": Evolution_v0503_pokemon_samurottEntry;
  "EVOLUTION_V0519_POKEMON_PIDOVE": Evolution_v0519_pokemon_pidoveEntry;
  "EVOLUTION_V0520_POKEMON_TRANQUILL": Evolution_v0520_pokemon_tranquillEntry;
  "EVOLUTION_V0521_POKEMON_UNFEZANT": Evolution_v0521_pokemon_unfezantEntry;
  "EVOLUTION_V0550_POKEMON_BASCULIN": Evolution_v0550_pokemon_basculinEntry;
  "EVOLUTION_V0554_POKEMON_DARUMAKA": Evolution_v0554_pokemon_darumakaEntry;
  "EVOLUTION_V0562_POKEMON_YAMASK": Evolution_v0562_pokemon_yamaskEntry;
  "EVOLUTION_V0585_POKEMON_DEERLING": Evolution_v0585_pokemon_deerlingEntry;
  "EVOLUTION_V0586_POKEMON_SAWSBUCK": Evolution_v0586_pokemon_sawsbuckEntry;
  "EVOLUTION_V0592_POKEMON_FRILLISH": Evolution_v0592_pokemon_frillishEntry;
  "EVOLUTION_V0593_POKEMON_JELLICENT": Evolution_v0593_pokemon_jellicentEntry;
  "EVOLUTION_V0664_POKEMON_SCATTERBUG": Evolution_v0664_pokemon_scatterbugEntry;
  "EVOLUTION_V0665_POKEMON_SPEWPA": Evolution_v0665_pokemon_spewpaEntry;
  "EVOLUTION_V0666_POKEMON_VIVILLON": Evolution_v0666_pokemon_vivillonEntry;
  "EVOLUTION_V0667_POKEMON_LITLEO": Evolution_v0667_pokemon_litleoEntry;
  "EVOLUTION_V0668_POKEMON_PYROAR": Evolution_v0668_pokemon_pyroarEntry;
  "EVOLUTION_V0669_POKEMON_FLABEBE": Evolution_v0669_pokemon_flabebeEntry;
  "EVOLUTION_V0670_POKEMON_FLOETTE": Evolution_v0670_pokemon_floetteEntry;
  "EVOLUTION_V0671_POKEMON_FLORGES": Evolution_v0671_pokemon_florgesEntry;
  "EVOLUTION_V0677_POKEMON_ESPURR": Evolution_v0677_pokemon_espurrEntry;
  "EVOLUTION_V0678_POKEMON_MEOWSTIC": Evolution_v0678_pokemon_meowsticEntry;
  "EVOLUTION_V0679_POKEMON_HONEDGE": Evolution_v0679_pokemon_honedgeEntry;
  "EVOLUTION_V0680_POKEMON_DOUBLADE": Evolution_v0680_pokemon_doubladeEntry;
  "EVOLUTION_V0681_POKEMON_AEGISLASH": Evolution_v0681_pokemon_aegislashEntry;
  "EVOLUTION_V0710_POKEMON_PUMPKABOO": Evolution_v0710_pokemon_pumpkabooEntry;
  "EVOLUTION_V0711_POKEMON_GOURGEIST": Evolution_v0711_pokemon_gourgeistEntry;
  "EVOLUTION_V0718_POKEMON_ZYGARDE": Evolution_v0718_pokemon_zygardeEntry;
  "EVOLUTION_V0722_POKEMON_ROWLET": Evolution_v0722_pokemon_rowletEntry;
  "EVOLUTION_V0723_POKEMON_DARTRIX": Evolution_v0723_pokemon_dartrixEntry;
  "EVOLUTION_V0724_POKEMON_DECIDUEYE": Evolution_v0724_pokemon_decidueyeEntry;
  "EVOLUTION_V0744_POKEMON_ROCKRUFF": Evolution_v0744_pokemon_rockruffEntry;
  "EVOLUTION_V0745_POKEMON_LYCANROC": Evolution_v0745_pokemon_lycanrocEntry;
  "EVOLUTION_V0800_POKEMON_NECROZMA": Evolution_v0800_pokemon_necrozmaEntry;
  "EVOLUTION_V0848_POKEMON_TOXEL": Evolution_v0848_pokemon_toxelEntry;
  "EVOLUTION_V0849_POKEMON_TOXTRICITY": Evolution_v0849_pokemon_toxtricityEntry;
  "EVOLUTION_V0862_POKEMON_OBSTAGOON": Evolution_v0862_pokemon_obstagoonEntry;
  "EVOLUTION_V0863_POKEMON_PERRSERKER": Evolution_v0863_pokemon_perrserkerEntry;
  "EVOLUTION_V0864_POKEMON_CURSOLA": Evolution_v0864_pokemon_cursolaEntry;
  "EVOLUTION_V0865_POKEMON_SIRFETCHD": Evolution_v0865_pokemon_sirfetchdEntry;
  "EVOLUTION_V0866_POKEMON_MR_RIME": Evolution_v0866_pokemon_mr_rimeEntry;
  "EVOLUTION_V0867_POKEMON_RUNERIGUS": Evolution_v0867_pokemon_runerigusEntry;
  "EVOLUTION_V0899_POKEMON_WYRDEER": Evolution_v0899_pokemon_wyrdeerEntry;
  "EVOLUTION_V0900_POKEMON_KLEAVOR": Evolution_v0900_pokemon_kleavorEntry;
  "EVOLUTION_V0903_POKEMON_SNEASLER": Evolution_v0903_pokemon_sneaslerEntry;
  "EVOLUTION_V0904_POKEMON_OVERQWIL": Evolution_v0904_pokemon_overqwilEntry;
  "EVOLUTION_V0915_POKEMON_LECHONK": Evolution_v0915_pokemon_lechonkEntry;
  "EVOLUTION_V0916_POKEMON_OINKOLOGNE": Evolution_v0916_pokemon_oinkologneEntry;
  "EVOLUTION_V0924_POKEMON_TANDEMAUS": Evolution_v0924_pokemon_tandemausEntry;
  "EVOLUTION_V0925_POKEMON_MAUSHOLD": Evolution_v0925_pokemon_mausholdEntry;
  "EVOLUTION_V0980_POKEMON_CLODSIRE": Evolution_v0980_pokemon_clodsireEntry;
  "EVOLUTION_V1012_POKEMON_POLTCHAGEIST": Evolution_v1012_pokemon_poltchageistEntry;
  "EVOLUTION_V1013_POKEMON_SINISTCHA": Evolution_v1013_pokemon_sinistchaEntry;
  "EXTERNAL_ADDRESSABLE_ASSETS_SETTINGS": External_addressable_assets_settingsEntry;
  "FEATURE_UNLOCK_LEVEL_SETTINGS": Feature_unlock_level_settingsEntry;
  "FORT_POWER_UP_LEVEL_0": Fort_power_up_level_0Entry;
  "FORT_POWER_UP_LEVEL_1": Fort_power_up_level_1Entry;
  "FORT_POWER_UP_LEVEL_2": Fort_power_up_level_2Entry;
  "FORT_POWER_UP_LEVEL_3": Fort_power_up_level_3Entry;
  "FRIENDSHIP_LEVEL_0": Friendship_level_0Entry;
  "FRIENDSHIP_LEVEL_1": Friendship_level_1Entry;
  "FRIENDSHIP_LEVEL_2": Friendship_level_2Entry;
  "FRIENDSHIP_LEVEL_3": Friendship_level_3Entry;
  "FRIENDSHIP_LEVEL_4": Friendship_level_4Entry;
  "FRIENDSHIP_LEVEL_5": Friendship_level_5Entry;
  "GEOTARGETED_QUEST_SETTINGS": Geotargeted_quest_settingsEntry;
  "GIFTING_SETTINGS": Gifting_settingsEntry;
  "GUI_SEARCH_SETTINGS": Gui_search_settingsEntry;
  "GYM_BADGE_SETTINGS": Gym_badge_settingsEntry;
  "HAPTICS_SETTINGS": Haptics_settingsEntry;
  "HEAL_TOAST_FEATURE_GATE": Heal_toast_feature_gateEntry;
  "Hindi": HindiEntry;
  "IAP_SETTINGS": Iap_settingsEntry;
  "IBFC_LIGHTWEIGHT_SETTINGS": Ibfc_lightweight_settingsEntry;
  "IBFC_LWS_CODE_GATE": Ibfc_lws_code_gateEntry;
  "INCIDENT_PRIORITY_SETTINGS": Incident_priority_settingsEntry;
  "INCIDENT_VISIBILITY_SETTINGS": Incident_visibility_settingsEntry;
  "INPUT_TRACKER_CODE_GATE": Input_tracker_code_gateEntry;
  "INVASION_AVAILABILITY_SETTINGS_FRIDAY": Invasion_availability_settings_fridayEntry;
  "INVASION_AVAILABILITY_SETTINGS_MONDAY": Invasion_availability_settings_mondayEntry;
  "INVASION_AVAILABILITY_SETTINGS_SATURDAY": Invasion_availability_settings_saturdayEntry;
  "INVASION_AVAILABILITY_SETTINGS_SUNDAY": Invasion_availability_settings_sundayEntry;
  "INVASION_AVAILABILITY_SETTINGS_THURSDAY": Invasion_availability_settings_thursdayEntry;
  "INVASION_AVAILABILITY_SETTINGS_TUESDAY": Invasion_availability_settings_tuesdayEntry;
  "INVASION_AVAILABILITY_SETTINGS_WEDNESDAY": Invasion_availability_settings_wednesdayEntry;
  "INVENTORY_SETTINGS": Inventory_settingsEntry;
  "IRIS_SOCIAL_SETTINGS": Iris_social_settingsEntry;
  "IRIS_SOCIAL_UX_FUNNEL_SETTINGS": Iris_social_ux_funnel_settingsEntry;
  "IS_SKU_AVAILABLE_NO_APP_ID_CODE_GATE": Is_sku_available_no_app_id_code_gateEntry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_FEST_01": Item_expiration_item_event_pass_point_go_fest_01Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_FEST_02": Item_expiration_item_event_pass_point_go_fest_02Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_TOUR_01": Item_expiration_item_event_pass_point_go_tour_01Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_TOUR_02": Item_expiration_item_event_pass_point_go_tour_02Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_WILD_AREA_01": Item_expiration_item_event_pass_point_go_wild_area_01Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_01": Item_expiration_item_event_pass_point_live_ops_01Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_02": Item_expiration_item_event_pass_point_live_ops_02Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_03": Item_expiration_item_event_pass_point_live_ops_03Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_04": Item_expiration_item_event_pass_point_live_ops_04Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_05": Item_expiration_item_event_pass_point_live_ops_05Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_06": Item_expiration_item_event_pass_point_live_ops_06Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_07": Item_expiration_item_event_pass_point_live_ops_07Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_08": Item_expiration_item_event_pass_point_live_ops_08Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_01": Item_expiration_item_event_pass_point_monthly_01Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_02": Item_expiration_item_event_pass_point_monthly_02Entry;
  "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_03": Item_expiration_item_event_pass_point_monthly_03Entry;
  "ITEM_EXPIRATION_ITEM_INCUBATOR_TIMED": Item_expiration_item_incubator_timedEntry;
  "ITEM_EXPIRATION_ITEM_LUCKY_FRIEND_APPLICATOR": Item_expiration_item_lucky_friend_applicatorEntry;
  "ITEM_EXPIRATION_ITEM_SINGLE_STAT_INCREASE": Item_expiration_item_single_stat_increaseEntry;
  "ITEM_EXPIRATION_ITEM_TRIPLE_STAT_INCREASE": Item_expiration_item_triple_stat_increaseEntry;
  "ITEM_EXPIRATION_ITEM_WILD_BALL": Item_expiration_item_wild_ballEntry;
  "ITEM_EXPIRATION_ITEM_WILD_BALL_PREMIER": Item_expiration_item_wild_ball_premierEntry;
  "ITEM_INVENTORY_UPDATE_SETTINGS": Item_inventory_update_settingsEntry;
  "Indonesian": IndonesianEntry;
  "JOIN_RAID_VIA_FRIEND_LIST_SETTINGS": Join_raid_via_friend_list_settingsEntry;
  "LANGUAGE_SELECTOR_SETTINGS": Language_selector_settingsEntry;
  "LATAM": LatamEntry;
  "LUCKY_POKEMON_SETTINGS": Lucky_pokemon_settingsEntry;
  "MAIN_MENU_CAMERA_BUTTON_SETTINGS": Main_menu_camera_button_settingsEntry;
  "MAP_DISPLAY_SETTINGS": Map_display_settingsEntry;
  "MAP_OBJECTS_INTERACTION_RANGE_SETTINGS": Map_objects_interaction_range_settingsEntry;
  "MAP_THEME_LOW_PERF_CODE_GATE": Map_theme_low_perf_code_gateEntry;
  "MEGA_2026_FEATURE_GATE": Mega_2026_feature_gateEntry;
  "MEGA_EVOLUTION_LEVEL_0": Mega_evolution_level_0Entry;
  "MEGA_EVOLUTION_LEVEL_0_V0015_POKEMON_BEEDRILL": Mega_evolution_level_0_v0015_pokemon_beedrillEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0018_POKEMON_PIDGEOT": Mega_evolution_level_0_v0018_pokemon_pidgeotEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0071_POKEMON_VICTREEBEL": Mega_evolution_level_0_v0071_pokemon_victreebelEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0080_POKEMON_SLOWBRO": Mega_evolution_level_0_v0080_pokemon_slowbroEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0130_POKEMON_GYARADOS": Mega_evolution_level_0_v0130_pokemon_gyaradosEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0149_POKEMON_DRAGONITE": Mega_evolution_level_0_v0149_pokemon_dragoniteEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0150_POKEMON_MEWTWO": Mega_evolution_level_0_v0150_pokemon_mewtwoEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0229_POKEMON_HOUNDOOM": Mega_evolution_level_0_v0229_pokemon_houndoomEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0248_POKEMON_TYRANITAR": Mega_evolution_level_0_v0248_pokemon_tyranitarEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0302_POKEMON_SABLEYE": Mega_evolution_level_0_v0302_pokemon_sableyeEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0308_POKEMON_MEDICHAM": Mega_evolution_level_0_v0308_pokemon_medichamEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0310_POKEMON_MANECTRIC": Mega_evolution_level_0_v0310_pokemon_manectricEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0334_POKEMON_ALTARIA": Mega_evolution_level_0_v0334_pokemon_altariaEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0354_POKEMON_BANETTE": Mega_evolution_level_0_v0354_pokemon_banetteEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0373_POKEMON_SALAMENCE": Mega_evolution_level_0_v0373_pokemon_salamenceEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0376_POKEMON_METAGROSS": Mega_evolution_level_0_v0376_pokemon_metagrossEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0380_POKEMON_LATIAS": Mega_evolution_level_0_v0380_pokemon_latiasEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0381_POKEMON_LATIOS": Mega_evolution_level_0_v0381_pokemon_latiosEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0382_POKEMON_KYOGRE": Mega_evolution_level_0_v0382_pokemon_kyogreEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0383_POKEMON_GROUDON": Mega_evolution_level_0_v0383_pokemon_groudonEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0384_POKEMON_RAYQUAZA": Mega_evolution_level_0_v0384_pokemon_rayquazaEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0445_POKEMON_GARCHOMP": Mega_evolution_level_0_v0445_pokemon_garchompEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0687_POKEMON_MALAMAR": Mega_evolution_level_0_v0687_pokemon_malamarEntry;
  "MEGA_EVOLUTION_LEVEL_0_V0719_POKEMON_DIANCIE": Mega_evolution_level_0_v0719_pokemon_diancieEntry;
  "MEGA_EVOLUTION_LEVEL_1": Mega_evolution_level_1Entry;
  "MEGA_EVOLUTION_LEVEL_1_V0015_POKEMON_BEEDRILL": Mega_evolution_level_1_v0015_pokemon_beedrillEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0018_POKEMON_PIDGEOT": Mega_evolution_level_1_v0018_pokemon_pidgeotEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0071_POKEMON_VICTREEBEL": Mega_evolution_level_1_v0071_pokemon_victreebelEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0080_POKEMON_SLOWBRO": Mega_evolution_level_1_v0080_pokemon_slowbroEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0130_POKEMON_GYARADOS": Mega_evolution_level_1_v0130_pokemon_gyaradosEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0149_POKEMON_DRAGONITE": Mega_evolution_level_1_v0149_pokemon_dragoniteEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0150_POKEMON_MEWTWO": Mega_evolution_level_1_v0150_pokemon_mewtwoEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0229_POKEMON_HOUNDOOM": Mega_evolution_level_1_v0229_pokemon_houndoomEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0248_POKEMON_TYRANITAR": Mega_evolution_level_1_v0248_pokemon_tyranitarEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0302_POKEMON_SABLEYE": Mega_evolution_level_1_v0302_pokemon_sableyeEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0308_POKEMON_MEDICHAM": Mega_evolution_level_1_v0308_pokemon_medichamEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0310_POKEMON_MANECTRIC": Mega_evolution_level_1_v0310_pokemon_manectricEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0334_POKEMON_ALTARIA": Mega_evolution_level_1_v0334_pokemon_altariaEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0354_POKEMON_BANETTE": Mega_evolution_level_1_v0354_pokemon_banetteEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0373_POKEMON_SALAMENCE": Mega_evolution_level_1_v0373_pokemon_salamenceEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0376_POKEMON_METAGROSS": Mega_evolution_level_1_v0376_pokemon_metagrossEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0380_POKEMON_LATIAS": Mega_evolution_level_1_v0380_pokemon_latiasEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0381_POKEMON_LATIOS": Mega_evolution_level_1_v0381_pokemon_latiosEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0382_POKEMON_KYOGRE": Mega_evolution_level_1_v0382_pokemon_kyogreEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0383_POKEMON_GROUDON": Mega_evolution_level_1_v0383_pokemon_groudonEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0384_POKEMON_RAYQUAZA": Mega_evolution_level_1_v0384_pokemon_rayquazaEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0445_POKEMON_GARCHOMP": Mega_evolution_level_1_v0445_pokemon_garchompEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0687_POKEMON_MALAMAR": Mega_evolution_level_1_v0687_pokemon_malamarEntry;
  "MEGA_EVOLUTION_LEVEL_1_V0719_POKEMON_DIANCIE": Mega_evolution_level_1_v0719_pokemon_diancieEntry;
  "MEGA_EVOLUTION_LEVEL_2": Mega_evolution_level_2Entry;
  "MEGA_EVOLUTION_LEVEL_2_V0015_POKEMON_BEEDRILL": Mega_evolution_level_2_v0015_pokemon_beedrillEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0018_POKEMON_PIDGEOT": Mega_evolution_level_2_v0018_pokemon_pidgeotEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0071_POKEMON_VICTREEBEL": Mega_evolution_level_2_v0071_pokemon_victreebelEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0080_POKEMON_SLOWBRO": Mega_evolution_level_2_v0080_pokemon_slowbroEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0130_POKEMON_GYARADOS": Mega_evolution_level_2_v0130_pokemon_gyaradosEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0149_POKEMON_DRAGONITE": Mega_evolution_level_2_v0149_pokemon_dragoniteEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0150_POKEMON_MEWTWO": Mega_evolution_level_2_v0150_pokemon_mewtwoEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0229_POKEMON_HOUNDOOM": Mega_evolution_level_2_v0229_pokemon_houndoomEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0248_POKEMON_TYRANITAR": Mega_evolution_level_2_v0248_pokemon_tyranitarEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0302_POKEMON_SABLEYE": Mega_evolution_level_2_v0302_pokemon_sableyeEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0308_POKEMON_MEDICHAM": Mega_evolution_level_2_v0308_pokemon_medichamEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0310_POKEMON_MANECTRIC": Mega_evolution_level_2_v0310_pokemon_manectricEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0334_POKEMON_ALTARIA": Mega_evolution_level_2_v0334_pokemon_altariaEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0354_POKEMON_BANETTE": Mega_evolution_level_2_v0354_pokemon_banetteEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0373_POKEMON_SALAMENCE": Mega_evolution_level_2_v0373_pokemon_salamenceEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0376_POKEMON_METAGROSS": Mega_evolution_level_2_v0376_pokemon_metagrossEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0380_POKEMON_LATIAS": Mega_evolution_level_2_v0380_pokemon_latiasEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0381_POKEMON_LATIOS": Mega_evolution_level_2_v0381_pokemon_latiosEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0382_POKEMON_KYOGRE": Mega_evolution_level_2_v0382_pokemon_kyogreEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0383_POKEMON_GROUDON": Mega_evolution_level_2_v0383_pokemon_groudonEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0384_POKEMON_RAYQUAZA": Mega_evolution_level_2_v0384_pokemon_rayquazaEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0445_POKEMON_GARCHOMP": Mega_evolution_level_2_v0445_pokemon_garchompEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0687_POKEMON_MALAMAR": Mega_evolution_level_2_v0687_pokemon_malamarEntry;
  "MEGA_EVOLUTION_LEVEL_2_V0719_POKEMON_DIANCIE": Mega_evolution_level_2_v0719_pokemon_diancieEntry;
  "MEGA_EVOLUTION_LEVEL_3": Mega_evolution_level_3Entry;
  "MEGA_EVOLUTION_LEVEL_3_V0015_POKEMON_BEEDRILL": Mega_evolution_level_3_v0015_pokemon_beedrillEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0018_POKEMON_PIDGEOT": Mega_evolution_level_3_v0018_pokemon_pidgeotEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0071_POKEMON_VICTREEBEL": Mega_evolution_level_3_v0071_pokemon_victreebelEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0080_POKEMON_SLOWBRO": Mega_evolution_level_3_v0080_pokemon_slowbroEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0130_POKEMON_GYARADOS": Mega_evolution_level_3_v0130_pokemon_gyaradosEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0149_POKEMON_DRAGONITE": Mega_evolution_level_3_v0149_pokemon_dragoniteEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0150_POKEMON_MEWTWO": Mega_evolution_level_3_v0150_pokemon_mewtwoEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0229_POKEMON_HOUNDOOM": Mega_evolution_level_3_v0229_pokemon_houndoomEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0248_POKEMON_TYRANITAR": Mega_evolution_level_3_v0248_pokemon_tyranitarEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0302_POKEMON_SABLEYE": Mega_evolution_level_3_v0302_pokemon_sableyeEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0308_POKEMON_MEDICHAM": Mega_evolution_level_3_v0308_pokemon_medichamEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0310_POKEMON_MANECTRIC": Mega_evolution_level_3_v0310_pokemon_manectricEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0334_POKEMON_ALTARIA": Mega_evolution_level_3_v0334_pokemon_altariaEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0354_POKEMON_BANETTE": Mega_evolution_level_3_v0354_pokemon_banetteEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0373_POKEMON_SALAMENCE": Mega_evolution_level_3_v0373_pokemon_salamenceEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0376_POKEMON_METAGROSS": Mega_evolution_level_3_v0376_pokemon_metagrossEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0380_POKEMON_LATIAS": Mega_evolution_level_3_v0380_pokemon_latiasEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0381_POKEMON_LATIOS": Mega_evolution_level_3_v0381_pokemon_latiosEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0382_POKEMON_KYOGRE": Mega_evolution_level_3_v0382_pokemon_kyogreEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0383_POKEMON_GROUDON": Mega_evolution_level_3_v0383_pokemon_groudonEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0384_POKEMON_RAYQUAZA": Mega_evolution_level_3_v0384_pokemon_rayquazaEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0445_POKEMON_GARCHOMP": Mega_evolution_level_3_v0445_pokemon_garchompEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0687_POKEMON_MALAMAR": Mega_evolution_level_3_v0687_pokemon_malamarEntry;
  "MEGA_EVOLUTION_LEVEL_3_V0719_POKEMON_DIANCIE": Mega_evolution_level_3_v0719_pokemon_diancieEntry;
  "MEGA_EVOLUTION_LEVEL_4_V0071_POKEMON_VICTREEBEL": Mega_evolution_level_4_v0071_pokemon_victreebelEntry;
  "MEGA_EVOLUTION_LEVEL_4_V0149_POKEMON_DRAGONITE": Mega_evolution_level_4_v0149_pokemon_dragoniteEntry;
  "MEGA_EVOLUTION_LEVEL_4_V0687_POKEMON_MALAMAR": Mega_evolution_level_4_v0687_pokemon_malamarEntry;
  "MEGA_EVO_SETTINGS": Mega_evo_settingsEntry;
  "MONODEPTH_SETTINGS": Monodepth_settingsEntry;
  "MP_SHARED_SETTINGS": Mp_shared_settingsEntry;
  "NATURAL_ART_DAY_NIGHT_FEATURE_SETTINGS": Natural_art_day_night_feature_settingsEntry;
  "NEARBY_POKEMON_SETTINGS": Nearby_pokemon_settingsEntry;
  "NEUTRAL_AVATAR_SETTINGS": Neutral_avatar_settingsEntry;
  "ONBOARDING_SETTINGS": Onboarding_settingsEntry;
  "OPTIMIZATIONS_SETTINGS": Optimizations_settingsEntry;
  "PARTY_PLAY_DARK_LAUNCH_SETTINGS": Party_play_dark_launch_settingsEntry;
  "PARTY_PLAY_GENERAL_SETTINGS": Party_play_general_settingsEntry;
  "PARTY_PLAY_IAP_BOOSTS_SETTINGS": Party_play_iap_boosts_settingsEntry;
  "PARTY_RECOMMENDATION_SETTINGS": Party_recommendation_settingsEntry;
  "PHOTO_SETTINGS": Photo_settingsEntry;
  "PHOTO_SET_ALOLA": Photo_set_alolaEntry;
  "PHOTO_SET_ANCIENT_FOSSILS": Photo_set_ancient_fossilsEntry;
  "PHOTO_SET_BATTLE_POKEMON": Photo_set_battle_pokemonEntry;
  "PHOTO_SET_BUNDLE_OF_JOY": Photo_set_bundle_of_joyEntry;
  "PHOTO_SET_BUSY_CITY": Photo_set_busy_cityEntry;
  "PHOTO_SET_CLAWED_CUTIES": Photo_set_clawed_cutiesEntry;
  "PHOTO_SET_CUTE_POKEMON_PINK": Photo_set_cute_pokemon_pinkEntry;
  "PHOTO_SET_FALL_VIBES": Photo_set_fall_vibesEntry;
  "PHOTO_SET_FEATHERED_FRIENDS": Photo_set_feathered_friendsEntry;
  "PHOTO_SET_FEATHERED_FRIENDS_LARGE": Photo_set_feathered_friends_largeEntry;
  "PHOTO_SET_FEELING_FANCY": Photo_set_feeling_fancyEntry;
  "PHOTO_SET_FURRY_FRIENDS": Photo_set_furry_friendsEntry;
  "PHOTO_SET_FURRY_FRIENDS_LARGE": Photo_set_furry_friends_largeEntry;
  "PHOTO_SET_GRACEFUL_FLYERS": Photo_set_graceful_flyersEntry;
  "PHOTO_SET_HISUI": Photo_set_hisuiEntry;
  "PHOTO_SET_HOENN": Photo_set_hoennEntry;
  "PHOTO_SET_JOHTO": Photo_set_johtoEntry;
  "PHOTO_SET_JUST_LOVELY": Photo_set_just_lovelyEntry;
  "PHOTO_SET_KALOS": Photo_set_kalosEntry;
  "PHOTO_SET_KANTO": Photo_set_kantoEntry;
  "PHOTO_SET_LITTLE_CHONKERS": Photo_set_little_chonkersEntry;
  "PHOTO_SET_MOUNTAIN_PASS": Photo_set_mountain_passEntry;
  "PHOTO_SET_MUSEUM_FOSSILS": Photo_set_museum_fossilsEntry;
  "PHOTO_SET_PALDEA": Photo_set_paldeaEntry;
  "PHOTO_SET_PLAYFUL_PALS_LARGE": Photo_set_playful_pals_largeEntry;
  "PHOTO_SET_RELAXING_GARDEN": Photo_set_relaxing_gardenEntry;
  "PHOTO_SET_SAFARI_TREK": Photo_set_safari_trekEntry;
  "PHOTO_SET_SANDY_SHORELINE": Photo_set_sandy_shorelineEntry;
  "PHOTO_SET_SHADOWS_OF_NIGHT": Photo_set_shadows_of_nightEntry;
  "PHOTO_SET_SINNOH": Photo_set_sinnohEntry;
  "PHOTO_SET_SMALL_AND_CUTE": Photo_set_small_and_cuteEntry;
  "PHOTO_SET_SMALL_CUTE_POKEMON": Photo_set_small_cute_pokemonEntry;
  "PHOTO_SET_SMALL_CUTE_POKEMON_PIKACHU_AND_EEVEE": Photo_set_small_cute_pokemon_pikachu_and_eeveeEntry;
  "PHOTO_SET_SMALL_CUTE_POKEMON_PINK": Photo_set_small_cute_pokemon_pinkEntry;
  "PHOTO_SET_SMALL_FLOWER_POKEMON": Photo_set_small_flower_pokemonEntry;
  "PHOTO_SET_SMALL_FLOWER_POKEMON_MEDIUM": Photo_set_small_flower_pokemon_mediumEntry;
  "PHOTO_SET_SMALL_FLOWER_POKEMON_SEEDS": Photo_set_small_flower_pokemon_seedsEntry;
  "PHOTO_SET_SMALL_WATER_POKEMON": Photo_set_small_water_pokemonEntry;
  "PHOTO_SET_SPRING_VIBES": Photo_set_spring_vibesEntry;
  "PHOTO_SET_STARTERS": Photo_set_startersEntry;
  "PHOTO_SET_SUMMER_VIBES": Photo_set_summer_vibesEntry;
  "PHOTO_SET_TINY_TIKES": Photo_set_tiny_tikesEntry;
  "PHOTO_SET_UNOVA": Photo_set_unovaEntry;
  "PHOTO_SET_WINGS_POKEMON": Photo_set_wings_pokemonEntry;
  "PHOTO_SET_WINTER_VIBES": Photo_set_winter_vibesEntry;
  "PLAYER_BONUS_SYSTEM_SETTINGS": Player_bonus_system_settingsEntry;
  "PLAYER_LEVEL_SETTINGS": Player_level_settingsEntry;
  "POKEBALL_THROW_PROPERTY_SETTINGS": Pokeball_throw_property_settingsEntry;
  "POKECOIN_PURCHASE_DISPLAY_GMT": Pokecoin_purchase_display_gmtEntry;
  "POKEDEXV2_FEATURE_FLAGS": Pokedexv2_feature_flagsEntry;
  "POKEDEX_CATEGORIES_SETTINGS": Pokedex_categories_settingsEntry;
  "POKEDEX_SIZE_STATS_SYSTEM_SETTINGS": Pokedex_size_stats_system_settingsEntry;
  "POKEDEX_V2_SETTINGS": Pokedex_v2_settingsEntry;
  "POPUP_CONTROL_SETTINGS": Popup_control_settingsEntry;
  "POSTCARD_COLLECTION_SETTINGS": Postcard_collection_settingsEntry;
  "POWER_UP_POKESTOP_SHARED_SETTINGS": Power_up_pokestop_shared_settingsEntry;
  "PREDICT_CHARGE_MOVE_ON_SUBMIT_ROLL_BACK_CODE_GATE": Predict_charge_move_on_submit_roll_back_code_gateEntry;
  "PRIMAL_EVO_SETTINGS": Primal_evo_settingsEntry;
  "PTC_OAUTH_SETTINGS": Ptc_oauth_settingsEntry;
  "PUSH_GATEWAY_MULTI_ACTION_CODE_GATE": Push_gateway_multi_action_code_gateEntry;
  "QUEST_FIRST_CATCH_OF_THE_DAY": Quest_first_catch_of_the_dayEntry;
  "QUEST_FIRST_POKESTOP_OF_THE_DAY": Quest_first_pokestop_of_the_dayEntry;
  "QUEST_FIRST_ROUTE_OF_THE_DAY": Quest_first_route_of_the_dayEntry;
  "QUICK_INVITE_SETTINGS_RAID": Quick_invite_settings_raidEntry;
  "RAID_CLIENT_SETTINGS": Raid_client_settingsEntry;
  "RAID_ENTRY_COST_SETTINGS": Raid_entry_cost_settingsEntry;
  "RAID_LOBBY_COUNTER_SETTINGS": Raid_lobby_counter_settingsEntry;
  "RECOMMENDED_SEARCH_APPRAISAL_IV_HIGH": Recommended_search_appraisal_iv_highEntry;
  "RECOMMENDED_SEARCH_APPRAISAL_IV_LOW": Recommended_search_appraisal_iv_lowEntry;
  "RECOMMENDED_SEARCH_APPRAISAL_LABEL_EVOLVE_MEGA": Recommended_search_appraisal_label_evolve_megaEntry;
  "RECOMMENDED_SEARCH_BADGE_KANTO_REGION": Recommended_search_badge_kanto_regionEntry;
  "RECOMMENDED_SEARCH_FILTER_LABEL_EVOLVABLE": Recommended_search_filter_label_evolvableEntry;
  "RECOMMENDED_SEARCH_FILTER_LABEL_HATCHED": Recommended_search_filter_label_hatchedEntry;
  "RECOMMENDED_SEARCH_FILTER_LABEL_LEGENDARY": Recommended_search_filter_label_legendaryEntry;
  "RECOMMENDED_SEARCH_FILTER_LABEL_SHINY": Recommended_search_filter_label_shinyEntry;
  "RECOMMENDED_SEARCH_FILTER_LABEL_TRADED": Recommended_search_filter_label_tradedEntry;
  "RECOMMENDED_SEARCH_POKEMON_TYPE_NORMAL": Recommended_search_pokemon_type_normalEntry;
  "REFERRAL_SETTINGS": Referral_settingsEntry;
  "REMOTE_RAID_LIMIT_SETTINGS": Remote_raid_limit_settingsEntry;
  "REMOTE_TRADE_SETTINGS": Remote_trade_settingsEntry;
  "ROUTES_NEARBY_NOTIF_SETTINGS": Routes_nearby_notif_settingsEntry;
  "ROUTES_PARTY_PLAY_INTEROP_SETTINGS": Routes_party_play_interop_settingsEntry;
  "ROUTE_BADGE_SETTINGS": Route_badge_settingsEntry;
  "ROUTE_CREATION_SETTINGS": Route_creation_settingsEntry;
  "ROUTE_DISCOVERY_SETTINGS": Route_discovery_settingsEntry;
  "ROUTE_PIN_SETTINGS": Route_pin_settingsEntry;
  "ROUTE_PLAY_SETTINGS": Route_play_settingsEntry;
  "ROUTE_STAMP_CATEGORY_DEFAULT": Route_stamp_category_defaultEntry;
  "SETTINGS_RULES_ALLOW_ASUSASUS_I006D": Settings_rules_allow_asusasus_i006dEntry;
  "SETTINGS_RULES_ALLOW_GOOGLEPIXEL6": Settings_rules_allow_googlepixel6Entry;
  "SETTINGS_RULES_ALLOW_GOOGLEPIXEL6A": Settings_rules_allow_googlepixel6aEntry;
  "SETTINGS_RULES_ALLOW_GOOGLEPIXEL6PRO": Settings_rules_allow_googlepixel6proEntry;
  "SETTINGS_RULES_ALLOW_GOOGLEPIXEL7": Settings_rules_allow_googlepixel7Entry;
  "SETTINGS_RULES_ALLOW_GOOGLEPIXEL7A": Settings_rules_allow_googlepixel7aEntry;
  "SETTINGS_RULES_ALLOW_GOOGLEPIXEL7PRO": Settings_rules_allow_googlepixel7proEntry;
  "SETTINGS_RULES_ALLOW_GOOGLEPIXEL8": Settings_rules_allow_googlepixel8Entry;
  "SETTINGS_RULES_ALLOW_GOOGLEPIXEL8PRO": Settings_rules_allow_googlepixel8proEntry;
  "SETTINGS_RULES_ALLOW_GOOGLEPIXEL9": Settings_rules_allow_googlepixel9Entry;
  "SETTINGS_RULES_ALLOW_GOOGLEPIXEL9PRO": Settings_rules_allow_googlepixel9proEntry;
  "SETTINGS_RULES_ALLOW_GOOGLEPIXELPROFOLD": Settings_rules_allow_googlepixelprofoldEntry;
  "SETTINGS_RULES_ALLOW_GOOGLEPIXELPROXL": Settings_rules_allow_googlepixelproxlEntry;
  "SETTINGS_RULES_ALLOW_LGELM_V600": Settings_rules_allow_lgelm_v600Entry;
  "SETTINGS_RULES_ALLOW_MOTOROLAMOTOROLAEDGE40": Settings_rules_allow_motorolamotorolaedge40Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUSCPH2399": Settings_rules_allow_onepluscph2399Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUSCPH2449": Settings_rules_allow_onepluscph2449Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUSDN2103": Settings_rules_allow_oneplusdn2103Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUSKB2003": Settings_rules_allow_onepluskb2003Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUSLE2113": Settings_rules_allow_oneplusle2113Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUSLE2123": Settings_rules_allow_oneplusle2123Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUSNE2213": Settings_rules_allow_oneplusne2213Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2413": Settings_rules_allow_oneplus_cph2413Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2415": Settings_rules_allow_oneplus_cph2415Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2417": Settings_rules_allow_oneplus_cph2417Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2447": Settings_rules_allow_oneplus_cph2447Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2451": Settings_rules_allow_oneplus_cph2451Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2573": Settings_rules_allow_oneplus_cph2573Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2581": Settings_rules_allow_oneplus_cph2581Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2583": Settings_rules_allow_oneplus_cph2583Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2585": Settings_rules_allow_oneplus_cph2585Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_CPH2609": Settings_rules_allow_oneplus_cph2609Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_LE2115": Settings_rules_allow_oneplus_le2115Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_LE2120": Settings_rules_allow_oneplus_le2120Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_LE2121": Settings_rules_allow_oneplus_le2121Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_LE2123": Settings_rules_allow_oneplus_le2123Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_LE2125": Settings_rules_allow_oneplus_le2125Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_LE2127": Settings_rules_allow_oneplus_le2127Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_NE2210": Settings_rules_allow_oneplus_ne2210Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_NE2211": Settings_rules_allow_oneplus_ne2211Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_NE2213": Settings_rules_allow_oneplus_ne2213Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_NE2215": Settings_rules_allow_oneplus_ne2215Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_NE2217": Settings_rules_allow_oneplus_ne2217Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_PHB110": Settings_rules_allow_oneplus_phb110Entry;
  "SETTINGS_RULES_ALLOW_ONEPLUS_PJD110": Settings_rules_allow_oneplus_pjd110Entry;
  "SETTINGS_RULES_ALLOW_OPPOCPH2359": Settings_rules_allow_oppocph2359Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSCG09": Settings_rules_allow_samsungscg09Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSCG13": Settings_rules_allow_samsungscg13Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSC_51A": Settings_rules_allow_samsungsc_51aEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSC_51B": Settings_rules_allow_samsungsc_51bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSC_51C": Settings_rules_allow_samsungsc_51cEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSC_51D": Settings_rules_allow_samsungsc_51dEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSC_52C": Settings_rules_allow_samsungsc_52cEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSC_52D": Settings_rules_allow_samsungsc_52dEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSC_A528B": Settings_rules_allow_samsungsc_a528bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F711B": Settings_rules_allow_samsungsm_f711bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F711N": Settings_rules_allow_samsungsm_f711nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F711U": Settings_rules_allow_samsungsm_f711uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F721B": Settings_rules_allow_samsungsm_f721bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F721N": Settings_rules_allow_samsungsm_f721nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F721U": Settings_rules_allow_samsungsm_f721uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F731B": Settings_rules_allow_samsungsm_f731bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F731N": Settings_rules_allow_samsungsm_f731nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F731U": Settings_rules_allow_samsungsm_f731uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F926B": Settings_rules_allow_samsungsm_f926bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F926N": Settings_rules_allow_samsungsm_f926nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F926U": Settings_rules_allow_samsungsm_f926uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F936B": Settings_rules_allow_samsungsm_f936bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F936N": Settings_rules_allow_samsungsm_f936nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F936U": Settings_rules_allow_samsungsm_f936uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F946B": Settings_rules_allow_samsungsm_f946bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F946N": Settings_rules_allow_samsungsm_f946nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_F946U": Settings_rules_allow_samsungsm_f946uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G780F": Settings_rules_allow_samsungsm_g780fEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G780G": Settings_rules_allow_samsungsm_g780gEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G781B": Settings_rules_allow_samsungsm_g781bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G781N": Settings_rules_allow_samsungsm_g781nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G781U": Settings_rules_allow_samsungsm_g781uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G781U1": Settings_rules_allow_samsungsm_g781u1Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G781V": Settings_rules_allow_samsungsm_g781vEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G781W": Settings_rules_allow_samsungsm_g781wEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G980F": Settings_rules_allow_samsungsm_g980fEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G981B": Settings_rules_allow_samsungsm_g981bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G981N": Settings_rules_allow_samsungsm_g981nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G981U": Settings_rules_allow_samsungsm_g981uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G981U1": Settings_rules_allow_samsungsm_g981u1Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G985F": Settings_rules_allow_samsungsm_g985fEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G986B": Settings_rules_allow_samsungsm_g986bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G986N": Settings_rules_allow_samsungsm_g986nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G986U": Settings_rules_allow_samsungsm_g986uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G986U1": Settings_rules_allow_samsungsm_g986u1Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G988B": Settings_rules_allow_samsungsm_g988bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G988N": Settings_rules_allow_samsungsm_g988nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G988U": Settings_rules_allow_samsungsm_g988uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G990B": Settings_rules_allow_samsungsm_g990bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G990B2": Settings_rules_allow_samsungsm_g990b2Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G990E": Settings_rules_allow_samsungsm_g990eEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G990U": Settings_rules_allow_samsungsm_g990uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G990U2": Settings_rules_allow_samsungsm_g990u2Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G990W2": Settings_rules_allow_samsungsm_g990w2Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G9910": Settings_rules_allow_samsungsm_g9910Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G991B": Settings_rules_allow_samsungsm_g991bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G991N": Settings_rules_allow_samsungsm_g991nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G991U": Settings_rules_allow_samsungsm_g991uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G991U1": Settings_rules_allow_samsungsm_g991u1Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G991W": Settings_rules_allow_samsungsm_g991wEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G996B": Settings_rules_allow_samsungsm_g996bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G996N": Settings_rules_allow_samsungsm_g996nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G996U": Settings_rules_allow_samsungsm_g996uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G996U1": Settings_rules_allow_samsungsm_g996u1Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G998B": Settings_rules_allow_samsungsm_g998bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G998N": Settings_rules_allow_samsungsm_g998nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G998U": Settings_rules_allow_samsungsm_g998uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_G998U1": Settings_rules_allow_samsungsm_g998u1Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_N970U": Settings_rules_allow_samsungsm_n970uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_N980F": Settings_rules_allow_samsungsm_n980fEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_N981B": Settings_rules_allow_samsungsm_n981bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_N981N": Settings_rules_allow_samsungsm_n981nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_N981U": Settings_rules_allow_samsungsm_n981uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_N9860": Settings_rules_allow_samsungsm_n9860Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_N986B": Settings_rules_allow_samsungsm_n986bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_N986N": Settings_rules_allow_samsungsm_n986nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_N986U": Settings_rules_allow_samsungsm_n986uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_N986U1": Settings_rules_allow_samsungsm_n986u1Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S711B": Settings_rules_allow_samsungsm_s711bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S711N": Settings_rules_allow_samsungsm_s711nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S711U": Settings_rules_allow_samsungsm_s711uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S711W": Settings_rules_allow_samsungsm_s711wEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S901B": Settings_rules_allow_samsungsm_s901bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S901E": Settings_rules_allow_samsungsm_s901eEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S901N": Settings_rules_allow_samsungsm_s901nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S901U": Settings_rules_allow_samsungsm_s901uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S901U1": Settings_rules_allow_samsungsm_s901u1Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S901W": Settings_rules_allow_samsungsm_s901wEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S9060": Settings_rules_allow_samsungsm_s9060Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S906B": Settings_rules_allow_samsungsm_s906bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S906E": Settings_rules_allow_samsungsm_s906eEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S906N": Settings_rules_allow_samsungsm_s906nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S906U": Settings_rules_allow_samsungsm_s906uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S906U1": Settings_rules_allow_samsungsm_s906u1Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S9080": Settings_rules_allow_samsungsm_s9080Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S908B": Settings_rules_allow_samsungsm_s908bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S908E": Settings_rules_allow_samsungsm_s908eEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S908N": Settings_rules_allow_samsungsm_s908nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S908U": Settings_rules_allow_samsungsm_s908uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S908U1": Settings_rules_allow_samsungsm_s908u1Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S908W": Settings_rules_allow_samsungsm_s908wEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S911B": Settings_rules_allow_samsungsm_s911bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S911N": Settings_rules_allow_samsungsm_s911nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S911U": Settings_rules_allow_samsungsm_s911uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S911U1": Settings_rules_allow_samsungsm_s911u1Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S911W": Settings_rules_allow_samsungsm_s911wEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S9160": Settings_rules_allow_samsungsm_s9160Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S916B": Settings_rules_allow_samsungsm_s916bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S916N": Settings_rules_allow_samsungsm_s916nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S916U": Settings_rules_allow_samsungsm_s916uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S916U1": Settings_rules_allow_samsungsm_s916u1Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S9180": Settings_rules_allow_samsungsm_s9180Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S918B": Settings_rules_allow_samsungsm_s918bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S918N": Settings_rules_allow_samsungsm_s918nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S918U": Settings_rules_allow_samsungsm_s918uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S918U1": Settings_rules_allow_samsungsm_s918u1Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S918W": Settings_rules_allow_samsungsm_s918wEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S921B": Settings_rules_allow_samsungsm_s921bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S921N": Settings_rules_allow_samsungsm_s921nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S9260": Settings_rules_allow_samsungsm_s9260Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S926U": Settings_rules_allow_samsungsm_s926uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S9280": Settings_rules_allow_samsungsm_s9280Entry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S928B": Settings_rules_allow_samsungsm_s928bEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S928N": Settings_rules_allow_samsungsm_s928nEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S928U": Settings_rules_allow_samsungsm_s928uEntry;
  "SETTINGS_RULES_ALLOW_SAMSUNGSM_S928U1": Settings_rules_allow_samsungsm_s928u1Entry;
  "SETTINGS_RULES_ALLOW_SHARPSH_51B": Settings_rules_allow_sharpsh_51bEntry;
  "SETTINGS_RULES_ALLOW_SONYSOG02": Settings_rules_allow_sonysog02Entry;
  "SETTINGS_RULES_ALLOW_SONYSOG05": Settings_rules_allow_sonysog05Entry;
  "SETTINGS_RULES_ALLOW_SONYSOG06": Settings_rules_allow_sonysog06Entry;
  "SETTINGS_RULES_ALLOW_SONYSO_51A": Settings_rules_allow_sonyso_51aEntry;
  "SETTINGS_RULES_ALLOW_SONYSO_51B": Settings_rules_allow_sonyso_51bEntry;
  "SETTINGS_RULES_ALLOW_SONYSO_51C": Settings_rules_allow_sonyso_51cEntry;
  "SETTINGS_RULES_ALLOW_SONYSO_52A": Settings_rules_allow_sonyso_52aEntry;
  "SETTINGS_RULES_ALLOW_SONYSO_53B": Settings_rules_allow_sonyso_53bEntry;
  "SETTINGS_RULES_ALLOW_SONYSO_54C": Settings_rules_allow_sonyso_54cEntry;
  "SETTINGS_RULES_ALLOW_SONY_A002SO": Settings_rules_allow_sony_a002soEntry;
  "SETTINGS_RULES_ALLOW_SONY_A101SO": Settings_rules_allow_sony_a101soEntry;
  "SETTINGS_RULES_ALLOW_SONY_A103SO": Settings_rules_allow_sony_a103soEntry;
  "SETTINGS_RULES_ALLOW_SONY_A201SO": Settings_rules_allow_sony_a201soEntry;
  "SETTINGS_RULES_ALLOW_SONY_SO53B": Settings_rules_allow_sony_so53bEntry;
  "SETTINGS_RULES_ALLOW_SONY_SOG01": Settings_rules_allow_sony_sog01Entry;
  "SETTINGS_RULES_ALLOW_SONY_SOG03": Settings_rules_allow_sony_sog03Entry;
  "SETTINGS_RULES_ALLOW_SONY_XPERIA_1_II": Settings_rules_allow_sony_xperia_1_iiEntry;
  "SETTINGS_RULES_ALLOW_SONY_XPERIA_1_III": Settings_rules_allow_sony_xperia_1_iiiEntry;
  "SETTINGS_RULES_ALLOW_SONY_XPERIA_1_IV": Settings_rules_allow_sony_xperia_1_ivEntry;
  "SETTINGS_RULES_ALLOW_SONY_XPERIA_1_V": Settings_rules_allow_sony_xperia_1_vEntry;
  "SETTINGS_RULES_ALLOW_SONY_XPERIA_5_II": Settings_rules_allow_sony_xperia_5_iiEntry;
  "SETTINGS_RULES_ALLOW_SONY_XPERIA_5_III": Settings_rules_allow_sony_xperia_5_iiiEntry;
  "SETTINGS_RULES_ALLOW_SONY_XPERIA_5_V": Settings_rules_allow_sony_xperia_5_vEntry;
  "SETTINGS_RULES_ALLOW_SONY_XPERIA_PRO": Settings_rules_allow_sony_xperia_proEntry;
  "SETTINGS_RULES_ALLOW_SONY_XPERIA_PROI": Settings_rules_allow_sony_xperia_proiEntry;
  "SETTINGS_RULES_ALLOW_SONY_XQAQ52": Settings_rules_allow_sony_xqaq52Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQAQ62": Settings_rules_allow_sony_xqaq62Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQAS42": Settings_rules_allow_sony_xqas42Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQAS52": Settings_rules_allow_sony_xqas52Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQAS62": Settings_rules_allow_sony_xqas62Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQAS72": Settings_rules_allow_sony_xqas72Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQAT42": Settings_rules_allow_sony_xqat42Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQAT51": Settings_rules_allow_sony_xqat51Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQAT52": Settings_rules_allow_sony_xqat52Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQAT72": Settings_rules_allow_sony_xqat72Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQBC42": Settings_rules_allow_sony_xqbc42Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQBC52": Settings_rules_allow_sony_xqbc52Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQBC62": Settings_rules_allow_sony_xqbc62Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQBC72": Settings_rules_allow_sony_xqbc72Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQBE52": Settings_rules_allow_sony_xqbe52Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQBE62": Settings_rules_allow_sony_xqbe62Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQBE72": Settings_rules_allow_sony_xqbe72Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQBQ42": Settings_rules_allow_sony_xqbq42Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQBQ52": Settings_rules_allow_sony_xqbq52Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQBQ62": Settings_rules_allow_sony_xqbq62Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQBQ72": Settings_rules_allow_sony_xqbq72Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQCT54": Settings_rules_allow_sony_xqct54Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQCT62": Settings_rules_allow_sony_xqct62Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQCT72": Settings_rules_allow_sony_xqct72Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQ_DE44": Settings_rules_allow_sony_xq_de44Entry;
  "SETTINGS_RULES_ALLOW_SONY_XQ_DQ44": Settings_rules_allow_sony_xq_dq44Entry;
  "SETTINGS_RULES_ALLOW_XIAOMI21061110AG": Settings_rules_allow_xiaomi21061110agEntry;
  "SETTINGS_RULES_ALLOW_XIAOMI2107113SG": Settings_rules_allow_xiaomi2107113sgEntry;
  "SETTINGS_RULES_ALLOW_XIAOMI21081111RG": Settings_rules_allow_xiaomi21081111rgEntry;
  "SETTINGS_RULES_ALLOW_XIAOMI21121210G": Settings_rules_allow_xiaomi21121210gEntry;
  "SETTINGS_RULES_ALLOW_XIAOMI2201123G": Settings_rules_allow_xiaomi2201123gEntry;
  "SETTINGS_RULES_ALLOW_XIAOMI22021211RG": Settings_rules_allow_xiaomi22021211rgEntry;
  "SETTINGS_RULES_ALLOW_XIAOMI22041216G": Settings_rules_allow_xiaomi22041216gEntry;
  "SETTINGS_RULES_ALLOW_XIAOMI22081212UG": Settings_rules_allow_xiaomi22081212ugEntry;
  "SETTINGS_RULES_ALLOW_XIAOMI23049PCD8G": Settings_rules_allow_xiaomi23049pcd8gEntry;
  "SETTINGS_RULES_ALLOW_XIAOMIM2007J3SG": Settings_rules_allow_xiaomim2007j3sgEntry;
  "SETTINGS_RULES_ALLOW_XIAOMIM2007J3SY": Settings_rules_allow_xiaomim2007j3syEntry;
  "SETTINGS_RULES_ALLOW_XIAOMIM2012K11AG": Settings_rules_allow_xiaomim2012k11agEntry;
  "SETTINGS_RULES_ALLOW_XIAOMIM2102K1AC": Settings_rules_allow_xiaomim2102k1acEntry;
  "SETTINGS_RULES_ANDROID": Settings_rules_androidEntry;
  "SETTINGS_RULES_ANDROID_14_ONWARD": Settings_rules_android_14_onwardEntry;
  "SETTINGS_RULES_BASE": Settings_rules_baseEntry;
  "SETTINGS_RULES_DENY_GOOGLEPIXEL10": Settings_rules_deny_googlepixel10Entry;
  "SETTINGS_RULES_DENY_GOOGLEPIXEL10PRO": Settings_rules_deny_googlepixel10proEntry;
  "SETTINGS_RULES_DENY_GOOGLEPIXEL10PROFOLD": Settings_rules_deny_googlepixel10profoldEntry;
  "SETTINGS_RULES_DENY_GOOGLEPIXEL10PROXL": Settings_rules_deny_googlepixel10proxlEntry;
  "SETTINGS_RULES_DENY_IPAD4": Settings_rules_deny_ipad4Entry;
  "SETTINGS_RULES_DENY_IPAD5": Settings_rules_deny_ipad5Entry;
  "SETTINGS_RULES_DENY_IPAD6": Settings_rules_deny_ipad6Entry;
  "SETTINGS_RULES_DENY_IPHONE6": Settings_rules_deny_iphone6Entry;
  "SETTINGS_RULES_DENY_IPHONE7": Settings_rules_deny_iphone7Entry;
  "SETTINGS_RULES_DENY_IPHONESE": Settings_rules_deny_iphoneseEntry;
  "SHARED_FUSION_SETTINGS": Shared_fusion_settingsEntry;
  "SHARED_MOVE_SETTINGS": Shared_move_settingsEntry;
  "SOFT_SFIDA_SETTINGS": Soft_sfida_settingsEntry;
  "SOURDOUGH_MOVE_MAPPING_SETTINGS": Sourdough_move_mapping_settingsEntry;
  "SPECIAL_EGG_SETTINGS": Special_egg_settingsEntry;
  "SPONSORED_GEOFENCE_GIFT_SETTINGS": Sponsored_geofence_gift_settingsEntry;
  "STAMP_COLLECTION_SETTINGS": Stamp_collection_settingsEntry;
  "STAMP_COLLECTION_SNAPSHOT_ENABLED_CODE_GATE": Stamp_collection_snapshot_enabled_code_gateEntry;
  "STATIONED_POKEMON_POWER_BOOST_TABLE_SETTINGS": Stationed_pokemon_power_boost_table_settingsEntry;
  "STICKER_2023COLLAB_1": Sticker_2023collab_1Entry;
  "STICKER_2023COLLAB_2": Sticker_2023collab_2Entry;
  "STICKER_2023COLLAB_3": Sticker_2023collab_3Entry;
  "STICKER_2023COLLAB_4": Sticker_2023collab_4Entry;
  "STICKER_6ANNIV_1": Sticker_6anniv_1Entry;
  "STICKER_6ANNIV_2": Sticker_6anniv_2Entry;
  "STICKER_6ANNIV_3": Sticker_6anniv_3Entry;
  "STICKER_6ANNIV_4": Sticker_6anniv_4Entry;
  "STICKER_6ANNIV_5": Sticker_6anniv_5Entry;
  "STICKER_6ANNIV_6": Sticker_6anniv_6Entry;
  "STICKER_7ANNIV_1": Sticker_7anniv_1Entry;
  "STICKER_7ANNIV_2": Sticker_7anniv_2Entry;
  "STICKER_7ANNIV_3": Sticker_7anniv_3Entry;
  "STICKER_7ANNIV_4": Sticker_7anniv_4Entry;
  "STICKER_7ANNIV_5": Sticker_7anniv_5Entry;
  "STICKER_8ANNIV_1": Sticker_8anniv_1Entry;
  "STICKER_8ANNIV_2": Sticker_8anniv_2Entry;
  "STICKER_8ANNIV_3": Sticker_8anniv_3Entry;
  "STICKER_8ANNIV_4": Sticker_8anniv_4Entry;
  "STICKER_9ANNIV_1": Sticker_9anniv_1Entry;
  "STICKER_9ANNIV_2": Sticker_9anniv_2Entry;
  "STICKER_9ANNIV_3": Sticker_9anniv_3Entry;
  "STICKER_ALOLAISHI_1": Sticker_alolaishi_1Entry;
  "STICKER_ALOLAISHI_2": Sticker_alolaishi_2Entry;
  "STICKER_ALOLAISHI_3": Sticker_alolaishi_3Entry;
  "STICKER_ALOLAISHI_4": Sticker_alolaishi_4Entry;
  "STICKER_APRILFOOL2023_1": Sticker_aprilfool2023_1Entry;
  "STICKER_APRILFOOL2023_2": Sticker_aprilfool2023_2Entry;
  "STICKER_AUDINO": Sticker_audinoEntry;
  "STICKER_BELLSPROUTCD_1": Sticker_bellsproutcd_1Entry;
  "STICKER_BELLSPROUTCD_2": Sticker_bellsproutcd_2Entry;
  "STICKER_BELLSPROUTCD_3": Sticker_bellsproutcd_3Entry;
  "STICKER_BELLSPROUTCD_4": Sticker_bellsproutcd_4Entry;
  "STICKER_BIDOOFDAY_1": Sticker_bidoofday_1Entry;
  "STICKER_BIDOOFDAY_2": Sticker_bidoofday_2Entry;
  "STICKER_BIDOOFDAY_3": Sticker_bidoofday_3Entry;
  "STICKER_BOUNSWEETCD2024_1": Sticker_bounsweetcd2024_1Entry;
  "STICKER_BOUNSWEETCD2024_2": Sticker_bounsweetcd2024_2Entry;
  "STICKER_BOUNSWEETCD2024_3": Sticker_bounsweetcd2024_3Entry;
  "STICKER_BOUNSWEETCD2024_4": Sticker_bounsweetcd2024_4Entry;
  "STICKER_BREADKOREA_001": Sticker_breadkorea_001Entry;
  "STICKER_BREADKOREA_002": Sticker_breadkorea_002Entry;
  "STICKER_BREADKOREA_003": Sticker_breadkorea_003Entry;
  "STICKER_BREADKOREA_004": Sticker_breadkorea_004Entry;
  "STICKER_BREADKOREA_005": Sticker_breadkorea_005Entry;
  "STICKER_BREADKOREA_006": Sticker_breadkorea_006Entry;
  "STICKER_CHANSEYCD_1": Sticker_chanseycd_1Entry;
  "STICKER_CHANSEYCD_2": Sticker_chanseycd_2Entry;
  "STICKER_CHANSEYCD_3": Sticker_chanseycd_3Entry;
  "STICKER_CHANSEYCD_4": Sticker_chanseycd_4Entry;
  "STICKER_CHARIZARD_1": Sticker_charizard_1Entry;
  "STICKER_CHARIZARD_2": Sticker_charizard_2Entry;
  "STICKER_CHARIZARD_3": Sticker_charizard_3Entry;
  "STICKER_CHESPIN_1": Sticker_chespin_1Entry;
  "STICKER_CHESPIN_2": Sticker_chespin_2Entry;
  "STICKER_CHESPIN_3": Sticker_chespin_3Entry;
  "STICKER_CHESPIN_4": Sticker_chespin_4Entry;
  "STICKER_CITYSPOTLIGHT": Sticker_cityspotlightEntry;
  "STICKER_CONCIERGE_EEVEE": Sticker_concierge_eeveeEntry;
  "STICKER_CONCIERGE_PSYDUCK": Sticker_concierge_psyduckEntry;
  "STICKER_CONCIERGE_SEALEO": Sticker_concierge_sealeoEntry;
  "STICKER_CONCIERGE_SHINX": Sticker_concierge_shinxEntry;
  "STICKER_DEINO_1": Sticker_deino_1Entry;
  "STICKER_DEINO_2": Sticker_deino_2Entry;
  "STICKER_DEINO_3": Sticker_deino_3Entry;
  "STICKER_DEINO_4": Sticker_deino_4Entry;
  "STICKER_DIADEMUERTOS2023_1": Sticker_diademuertos2023_1Entry;
  "STICKER_DIADEMUERTOS2023_2": Sticker_diademuertos2023_2Entry;
  "STICKER_DIADEMUERTOS2023_3": Sticker_diademuertos2023_3Entry;
  "STICKER_DIADEMUERTOS2023_4": Sticker_diademuertos2023_4Entry;
  "STICKER_DIAMONDPEARLCHIMCHAR": Sticker_diamondpearlchimcharEntry;
  "STICKER_DIAMONDPEARLDIALGA": Sticker_diamondpearldialgaEntry;
  "STICKER_DIAMONDPEARLLUCARIO": Sticker_diamondpearllucarioEntry;
  "STICKER_DIAMONDPEARLPALKIA": Sticker_diamondpearlpalkiaEntry;
  "STICKER_DIAMONDPEARLPIPLUP": Sticker_diamondpearlpiplupEntry;
  "STICKER_DIAMONDPEARLTURTWIG": Sticker_diamondpearlturtwigEntry;
  "STICKER_DITTO_1": Sticker_ditto_1Entry;
  "STICKER_DITTO_2": Sticker_ditto_2Entry;
  "STICKER_DITTO_3": Sticker_ditto_3Entry;
  "STICKER_DITTO_4": Sticker_ditto_4Entry;
  "STICKER_DITTO_5": Sticker_ditto_5Entry;
  "STICKER_DITTO_6": Sticker_ditto_6Entry;
  "STICKER_EEVEEFRIENDS_1": Sticker_eeveefriends_1Entry;
  "STICKER_EEVEEFRIENDS_2": Sticker_eeveefriends_2Entry;
  "STICKER_EEVEEFRIENDS_3": Sticker_eeveefriends_3Entry;
  "STICKER_EEVEEFRIENDS_4": Sticker_eeveefriends_4Entry;
  "STICKER_EEVEEFRIENDS_5": Sticker_eeveefriends_5Entry;
  "STICKER_EEVEEFRIENDS_6": Sticker_eeveefriends_6Entry;
  "STICKER_EEVEEFRIENDS_7": Sticker_eeveefriends_7Entry;
  "STICKER_EEVEEFRIENDS_8": Sticker_eeveefriends_8Entry;
  "STICKER_EEVEEFRIENDS_9": Sticker_eeveefriends_9Entry;
  "STICKER_ETERNATUS": Sticker_eternatusEntry;
  "STICKER_FALL_2023_1": Sticker_fall_2023_1Entry;
  "STICKER_FALL_2023_2": Sticker_fall_2023_2Entry;
  "STICKER_FALL_2023_3": Sticker_fall_2023_3Entry;
  "STICKER_FALL_2023_4": Sticker_fall_2023_4Entry;
  "STICKER_FALL_2023_5": Sticker_fall_2023_5Entry;
  "STICKER_FALL_2023_6": Sticker_fall_2023_6Entry;
  "STICKER_FALL_2024_1": Sticker_fall_2024_1Entry;
  "STICKER_FALL_2024_2": Sticker_fall_2024_2Entry;
  "STICKER_FALL_2024_3": Sticker_fall_2024_3Entry;
  "STICKER_FALL_2024_4": Sticker_fall_2024_4Entry;
  "STICKER_FALL_2024_5": Sticker_fall_2024_5Entry;
  "STICKER_FALL_2024_6": Sticker_fall_2024_6Entry;
  "STICKER_FALL_2025_1": Sticker_fall_2025_1Entry;
  "STICKER_FALL_2025_2": Sticker_fall_2025_2Entry;
  "STICKER_FALL_2025_3": Sticker_fall_2025_3Entry;
  "STICKER_FALL_2025_4": Sticker_fall_2025_4Entry;
  "STICKER_FALL_SAWSBUCK": Sticker_fall_sawsbuckEntry;
  "STICKER_FALL_SHROOMISH": Sticker_fall_shroomishEntry;
  "STICKER_FALL_SKWOVET": Sticker_fall_skwovetEntry;
  "STICKER_FALL_TEDDIURSA": Sticker_fall_teddiursaEntry;
  "STICKER_FALL_TREVENANT": Sticker_fall_trevenantEntry;
  "STICKER_FALL_VULPIX": Sticker_fall_vulpixEntry;
  "STICKER_FENNEKIN_1": Sticker_fennekin_1Entry;
  "STICKER_FENNEKIN_2": Sticker_fennekin_2Entry;
  "STICKER_FENNEKIN_3": Sticker_fennekin_3Entry;
  "STICKER_FENNEKIN_4": Sticker_fennekin_4Entry;
  "STICKER_FESTIVALOFLIGHT_MORELULL": Sticker_festivaloflight_morelullEntry;
  "STICKER_FESTIVALOFLIGHT_SHIINOTIC": Sticker_festivaloflight_shiinoticEntry;
  "STICKER_FESTIVALOFTHELIGHTS21_V1": Sticker_festivalofthelights21_v1Entry;
  "STICKER_FESTIVALOFTHELIGHTS21_V2": Sticker_festivalofthelights21_v2Entry;
  "STICKER_FESTIVALOFTHELIGHTS21_V3": Sticker_festivalofthelights21_v3Entry;
  "STICKER_FESTIVALOFTHELIGHTS21_V4": Sticker_festivalofthelights21_v4Entry;
  "STICKER_FLABEBE_1": Sticker_flabebe_1Entry;
  "STICKER_FLABEBE_2": Sticker_flabebe_2Entry;
  "STICKER_FLAIR_HEART_1": Sticker_flair_heart_1Entry;
  "STICKER_FLAIR_HEART_2": Sticker_flair_heart_2Entry;
  "STICKER_FLAIR_HEART_3": Sticker_flair_heart_3Entry;
  "STICKER_FLAIR_HEART_4": Sticker_flair_heart_4Entry;
  "STICKER_FLAIR_HEART_5": Sticker_flair_heart_5Entry;
  "STICKER_FLAIR_STAR_1": Sticker_flair_star_1Entry;
  "STICKER_FLAIR_STAR_2": Sticker_flair_star_2Entry;
  "STICKER_FLAIR_STAR_3": Sticker_flair_star_3Entry;
  "STICKER_FLAIR_STAR_4": Sticker_flair_star_4Entry;
  "STICKER_FLAIR_STAR_5": Sticker_flair_star_5Entry;
  "STICKER_FLAIR_STAR_6": Sticker_flair_star_6Entry;
  "STICKER_FLAIR_STAR_7": Sticker_flair_star_7Entry;
  "STICKER_FORMULAEKOREA_PIKACHU": Sticker_formulaekorea_pikachuEntry;
  "STICKER_FOSSILMUSEUM_1": Sticker_fossilmuseum_1Entry;
  "STICKER_FOSSILMUSEUM_2": Sticker_fossilmuseum_2Entry;
  "STICKER_FROAKIE_1": Sticker_froakie_1Entry;
  "STICKER_FROAKIE_2": Sticker_froakie_2Entry;
  "STICKER_FROAKIE_3": Sticker_froakie_3Entry;
  "STICKER_FROAKIE_4": Sticker_froakie_4Entry;
  "STICKER_FUNAWARI_04_312": Sticker_funawari_04_312Entry;
  "STICKER_FUNAWARI_05_312": Sticker_funawari_05_312Entry;
  "STICKER_FUNAWARI_06_312": Sticker_funawari_06_312Entry;
  "STICKER_FUNAWARI_22_312": Sticker_funawari_22_312Entry;
  "STICKER_FUNWARI_02_0608": Sticker_funwari_02_0608Entry;
  "STICKER_FUNWARI_10": Sticker_funwari_10Entry;
  "STICKER_FUNWARI_11_THANKU": Sticker_funwari_11_thankuEntry;
  "STICKER_FUNWARI_12_02": Sticker_funwari_12_02Entry;
  "STICKER_FUNWARI_18": Sticker_funwari_18Entry;
  "STICKER_FUNWARI_20": Sticker_funwari_20Entry;
  "STICKER_FUNWARI_35": Sticker_funwari_35Entry;
  "STICKER_FUNWARI_PIDGEY_18": Sticker_funwari_pidgey_18Entry;
  "STICKER_FURFROUHEART_1": Sticker_furfrouheart_1Entry;
  "STICKER_FURFROUHEART_2": Sticker_furfrouheart_2Entry;
  "STICKER_GALARIANZIGZAGOON_1": Sticker_galarianzigzagoon_1Entry;
  "STICKER_GALARIANZIGZAGOON_2": Sticker_galarianzigzagoon_2Entry;
  "STICKER_GALARIANZIGZAGOON_3": Sticker_galarianzigzagoon_3Entry;
  "STICKER_GALARIANZIGZAGOON_4": Sticker_galarianzigzagoon_4Entry;
  "STICKER_GIFTTHANKYOU": Sticker_giftthankyouEntry;
  "STICKER_GIMMIGHOUL_1": Sticker_gimmighoul_1Entry;
  "STICKER_GIMMIGHOUL_2": Sticker_gimmighoul_2Entry;
  "STICKER_GIMMIGHOUL_3": Sticker_gimmighoul_3Entry;
  "STICKER_GIMMIGHOUL_4": Sticker_gimmighoul_4Entry;
  "STICKER_GIMMIGHOUL_5": Sticker_gimmighoul_5Entry;
  "STICKER_GOOMYCD_1": Sticker_goomycd_1Entry;
  "STICKER_GOOMYCD_2": Sticker_goomycd_2Entry;
  "STICKER_GOOMYCD_3": Sticker_goomycd_3Entry;
  "STICKER_GOOMYCD_4": Sticker_goomycd_4Entry;
  "STICKER_GOTOUR2021": Sticker_gotour2021Entry;
  "STICKER_GOTOUR2022_1": Sticker_gotour2022_1Entry;
  "STICKER_GOTOUR2022_2": Sticker_gotour2022_2Entry;
  "STICKER_GOTOUR2022_3": Sticker_gotour2022_3Entry;
  "STICKER_GOTOUR2022_4": Sticker_gotour2022_4Entry;
  "STICKER_GOTOUR2022_CHIKORITA": Sticker_gotour2022_chikoritaEntry;
  "STICKER_GOTOUR2022_CYNDAQUIL": Sticker_gotour2022_cyndaquilEntry;
  "STICKER_GOTOUR2022_HOOH": Sticker_gotour2022_hoohEntry;
  "STICKER_GOTOUR2022_LUGIA": Sticker_gotour2022_lugiaEntry;
  "STICKER_GOTOUR2022_TOGEPI": Sticker_gotour2022_togepiEntry;
  "STICKER_GOTOUR2022_TOTODILE": Sticker_gotour2022_totodileEntry;
  "STICKER_GOTOUR2025_BADGE": Sticker_gotour2025_badgeEntry;
  "STICKER_GOTOUR2025_KYUREMBLACK": Sticker_gotour2025_kyuremblackEntry;
  "STICKER_GOTOUR2025_KYUREMWHITE": Sticker_gotour2025_kyuremwhiteEntry;
  "STICKER_GOTOUR2025_RESHIRAM": Sticker_gotour2025_reshiramEntry;
  "STICKER_GOTOUR2025_RZ": Sticker_gotour2025_rzEntry;
  "STICKER_GOTOUR2025_ZEKROM": Sticker_gotour2025_zekromEntry;
  "STICKER_GOTOURHOENN_1": Sticker_gotourhoenn_1Entry;
  "STICKER_GOTOURHOENN_2": Sticker_gotourhoenn_2Entry;
  "STICKER_GOTOURHOENN_3": Sticker_gotourhoenn_3Entry;
  "STICKER_GOTOURHOENN_4": Sticker_gotourhoenn_4Entry;
  "STICKER_GOTOURHOENN_5": Sticker_gotourhoenn_5Entry;
  "STICKER_GOTOURHOENN_6": Sticker_gotourhoenn_6Entry;
  "STICKER_GOWA2025_01": Sticker_gowa2025_01Entry;
  "STICKER_GOWA2025_02": Sticker_gowa2025_02Entry;
  "STICKER_GOWA2025_03": Sticker_gowa2025_03Entry;
  "STICKER_GOWA2025_04": Sticker_gowa2025_04Entry;
  "STICKER_GOWA2025_05": Sticker_gowa2025_05Entry;
  "STICKER_GRUBBIN_1": Sticker_grubbin_1Entry;
  "STICKER_GRUBBIN_2": Sticker_grubbin_2Entry;
  "STICKER_GRUBBIN_3": Sticker_grubbin_3Entry;
  "STICKER_GRUBBIN_4": Sticker_grubbin_4Entry;
  "STICKER_HALLOWEEN2022_GENGAR": Sticker_halloween2022_gengarEntry;
  "STICKER_HALLOWEEN2022_PUMPKABOO": Sticker_halloween2022_pumpkabooEntry;
  "STICKER_HALLOWEEN2022_VULPIX": Sticker_halloween2022_vulpixEntry;
  "STICKER_HALLOWEEN2025_NOIBAT": Sticker_halloween2025_noibatEntry;
  "STICKER_HALLOWEEN2025_TEDDIURSA": Sticker_halloween2025_teddiursaEntry;
  "STICKER_HALLOWEEN21_FUWARAID": Sticker_halloween21_fuwaraidEntry;
  "STICKER_HALLOWEEN21_GHOSTPIKA": Sticker_halloween21_ghostpikaEntry;
  "STICKER_HALLOWEEN21_PIKACHU": Sticker_halloween21_pikachuEntry;
  "STICKER_HALLOWEEN21_POCHAMA": Sticker_halloween21_pochamaEntry;
  "STICKER_HALLOWEEN23_GENGAR": Sticker_halloween23_gengarEntry;
  "STICKER_HALLOWEEN23_GREAVARD": Sticker_halloween23_greavardEntry;
  "STICKER_HALLOWEEN23_MISDREAVUS": Sticker_halloween23_misdreavusEntry;
  "STICKER_HALLOWEEN23_PHANTUMP": Sticker_halloween23_phantumpEntry;
  "STICKER_HALLOWEEN24_FROAKIE": Sticker_halloween24_froakieEntry;
  "STICKER_HALLOWEEN24_ROWLET": Sticker_halloween24_rowletEntry;
  "STICKER_HALLOWEEN_BULB": Sticker_halloween_bulbEntry;
  "STICKER_HALLOWEEN_CHARM": Sticker_halloween_charmEntry;
  "STICKER_HALLOWEEN_GENGARMD": Sticker_halloween_gengarmdEntry;
  "STICKER_HALLOWEEN_PIKA": Sticker_halloween_pikaEntry;
  "STICKER_HALLOWEEN_SABLEYEMD": Sticker_halloween_sableyemdEntry;
  "STICKER_HALLOWEEN_SQU": Sticker_halloween_squEntry;
  "STICKER_HARU_CHERRIM": Sticker_haru_cherrimEntry;
  "STICKER_HARU_DREDEARPIKA": Sticker_haru_dredearpikaEntry;
  "STICKER_HARU_KIREIHANA": Sticker_haru_kireihanaEntry;
  "STICKER_HARU_LALANTES": Sticker_haru_lalantesEntry;
  "STICKER_HARU_MEBUKISHIKIJIK": Sticker_haru_mebukishikijikEntry;
  "STICKER_HARU_MITSUHONEY": Sticker_haru_mitsuhoneyEntry;
  "STICKER_HAWLUCHA_01": Sticker_hawlucha_01Entry;
  "STICKER_HISUIDISCO_ARCANINE": Sticker_hisuidisco_arcanineEntry;
  "STICKER_HISUIDISCO_BRAVIARY": Sticker_hisuidisco_braviaryEntry;
  "STICKER_HISUIDISCO_GROWLITHE": Sticker_hisuidisco_growlitheEntry;
  "STICKER_HOLIDAYEVENT21_1": Sticker_holidayevent21_1Entry;
  "STICKER_HOLIDAYEVENT21_2": Sticker_holidayevent21_2Entry;
  "STICKER_HOLIDAYEVENT21_3": Sticker_holidayevent21_3Entry;
  "STICKER_HOLIDAYEVENT21_4": Sticker_holidayevent21_4Entry;
  "STICKER_HOLIDAYEVENT22_CUBCHOO": Sticker_holidayevent22_cubchooEntry;
  "STICKER_HOLIDAYEVENT22_SCATTERBUG": Sticker_holidayevent22_scatterbugEntry;
  "STICKER_HOLIDAYEVENT22_SNOWPIKA": Sticker_holidayevent22_snowpikaEntry;
  "STICKER_HOLIDAYEVENT22_VULPIX": Sticker_holidayevent22_vulpixEntry;
  "STICKER_HOLIDAYEVENT23_CETODDLE": Sticker_holidayevent23_cetoddleEntry;
  "STICKER_HOLIDAYEVENT23_CRYOGONAL": Sticker_holidayevent23_cryogonalEntry;
  "STICKER_HOLIDAYEVENT23_PSYDUCK": Sticker_holidayevent23_psyduckEntry;
  "STICKER_HOLIDAYEVENT23_SEEL": Sticker_holidayevent23_seelEntry;
  "STICKER_HOLIDAYEVENT23_VANILLISH": Sticker_holidayevent23_vanillishEntry;
  "STICKER_HOLOGRAPHIC_CHANCEY": Sticker_holographic_chanceyEntry;
  "STICKER_HOLOGRAPHIC_CHARMELEON": Sticker_holographic_charmeleonEntry;
  "STICKER_HOLOGRAPHIC_IVYSAUR": Sticker_holographic_ivysaurEntry;
  "STICKER_HOLOGRAPHIC_MELTAN": Sticker_holographic_meltanEntry;
  "STICKER_HOLOGRAPHIC_PIKACHU": Sticker_holographic_pikachuEntry;
  "STICKER_HOLOGRAPHIC_WARTORTLE": Sticker_holographic_wartortleEntry;
  "STICKER_HOPPIP_1": Sticker_hoppip_1Entry;
  "STICKER_HOPPIP_2": Sticker_hoppip_2Entry;
  "STICKER_HOPPIP_3": Sticker_hoppip_3Entry;
  "STICKER_HOPPIP_4": Sticker_hoppip_4Entry;
  "STICKER_INDONESIAJOURNEY_1": Sticker_indonesiajourney_1Entry;
  "STICKER_INDONESIAJOURNEY_2": Sticker_indonesiajourney_2Entry;
  "STICKER_IPLPARTNERSHIP_1": Sticker_iplpartnership_1Entry;
  "STICKER_IPLPARTNERSHIP_2": Sticker_iplpartnership_2Entry;
  "STICKER_JUNECD2023_AXEW_1": Sticker_junecd2023_axew_1Entry;
  "STICKER_JUNECD2023_AXEW_2": Sticker_junecd2023_axew_2Entry;
  "STICKER_JUNECD2023_AXEW_3": Sticker_junecd2023_axew_3Entry;
  "STICKER_JUNECD2023_AXEW_4": Sticker_junecd2023_axew_4Entry;
  "STICKER_KOREATOWN_1": Sticker_koreatown_1Entry;
  "STICKER_KOREATOWN_2": Sticker_koreatown_2Entry;
  "STICKER_KOREATOWN_3": Sticker_koreatown_3Entry;
  "STICKER_KR_DITTO": Sticker_kr_dittoEntry;
  "STICKER_KURTASAREE_1": Sticker_kurtasaree_1Entry;
  "STICKER_KURTASAREE_2": Sticker_kurtasaree_2Entry;
  "STICKER_KURTASAREE_3": Sticker_kurtasaree_3Entry;
  "STICKER_KURTASAREE_4": Sticker_kurtasaree_4Entry;
  "STICKER_KURTASAREE_5": Sticker_kurtasaree_5Entry;
  "STICKER_KURTASAREE_6": Sticker_kurtasaree_6Entry;
  "STICKER_LENTILLAUNCH_CAMERA": Sticker_lentillaunch_cameraEntry;
  "STICKER_LITTENCD_1": Sticker_littencd_1Entry;
  "STICKER_LITTENCD_2": Sticker_littencd_2Entry;
  "STICKER_LITTENCD_3": Sticker_littencd_3Entry;
  "STICKER_LITTENCD_4": Sticker_littencd_4Entry;
  "STICKER_LITWICK_1": Sticker_litwick_1Entry;
  "STICKER_LITWICK_2": Sticker_litwick_2Entry;
  "STICKER_LITWICK_3": Sticker_litwick_3Entry;
  "STICKER_LITWICK_4": Sticker_litwick_4Entry;
  "STICKER_LUVDISC": Sticker_luvdiscEntry;
  "STICKER_MANKEY_1": Sticker_mankey_1Entry;
  "STICKER_MANKEY_2": Sticker_mankey_2Entry;
  "STICKER_MANKEY_3": Sticker_mankey_3Entry;
  "STICKER_MANKEY_4": Sticker_mankey_4Entry;
  "STICKER_MEGAEVOLUTION_PARIS_1": Sticker_megaevolution_paris_1Entry;
  "STICKER_MEGAEVOLUTION_PARIS_2": Sticker_megaevolution_paris_2Entry;
  "STICKER_MEGAEVOLUTION_PARIS_3": Sticker_megaevolution_paris_3Entry;
  "STICKER_MEWTWO": Sticker_mewtwoEntry;
  "STICKER_MEW_LAUGH": Sticker_mew_laughEntry;
  "STICKER_MUKKURU_CD_1": Sticker_mukkuru_cd_1Entry;
  "STICKER_MUKKURU_CD_2": Sticker_mukkuru_cd_2Entry;
  "STICKER_MUKKURU_CD_3": Sticker_mukkuru_cd_3Entry;
  "STICKER_MUKKURU_CD_4": Sticker_mukkuru_cd_4Entry;
  "STICKER_NAGANO_06_312": Sticker_nagano_06_312Entry;
  "STICKER_NAGANO_08": Sticker_nagano_08Entry;
  "STICKER_NAGANO_11": Sticker_nagano_11Entry;
  "STICKER_NAGANO_15": Sticker_nagano_15Entry;
  "STICKER_NAGANO_15_312": Sticker_nagano_15_312Entry;
  "STICKER_NAGANO_BATH": Sticker_nagano_bathEntry;
  "STICKER_NAGANO_MARILL": Sticker_nagano_marillEntry;
  "STICKER_NAGANO_YADON": Sticker_nagano_yadonEntry;
  "STICKER_NEWPOKEMON2_1": Sticker_newpokemon2_1Entry;
  "STICKER_NEWPOKEMON2_15": Sticker_newpokemon2_15Entry;
  "STICKER_NEWPOKEMON2_33": Sticker_newpokemon2_33Entry;
  "STICKER_NEWPOKEMON_04": Sticker_newpokemon_04Entry;
  "STICKER_NEWPOKEMON_20": Sticker_newpokemon_20Entry;
  "STICKER_NEWPOKEMON_37": Sticker_newpokemon_37Entry;
  "STICKER_NEWTEAMRASCAL": Sticker_newteamrascalEntry;
  "STICKER_NEWTEAMRASCALPIKACHU_26": Sticker_newteamrascalpikachu_26Entry;
  "STICKER_NEWYEARS22_1": Sticker_newyears22_1Entry;
  "STICKER_NEWYEARS22_2": Sticker_newyears22_2Entry;
  "STICKER_NEWYEARS22_3": Sticker_newyears22_3Entry;
  "STICKER_NEWYEARS22_4": Sticker_newyears22_4Entry;
  "STICKER_NEWYEARS23_1": Sticker_newyears23_1Entry;
  "STICKER_NEWYEARS23_2": Sticker_newyears23_2Entry;
  "STICKER_NEWYEARS23_3": Sticker_newyears23_3Entry;
  "STICKER_NEWYEARS23_4": Sticker_newyears23_4Entry;
  "STICKER_NIA_LOGO": Sticker_nia_logoEntry;
  "STICKER_NIGIYAKA_08_0508_312": Sticker_nigiyaka_08_0508_312Entry;
  "STICKER_NIGIYAKA_16_0508_312": Sticker_nigiyaka_16_0508_312Entry;
  "STICKER_NOIBAT_CD_1": Sticker_noibat_cd_1Entry;
  "STICKER_NOIBAT_CD_2": Sticker_noibat_cd_2Entry;
  "STICKER_NOIBAT_CD_3": Sticker_noibat_cd_3Entry;
  "STICKER_NOIBAT_CD_4": Sticker_noibat_cd_4Entry;
  "STICKER_NYARTH_38": Sticker_nyarth_38Entry;
  "STICKER_OBSERVATORY_01": Sticker_observatory_01Entry;
  "STICKER_OBSERVATORY_02": Sticker_observatory_02Entry;
  "STICKER_PAPELPICADOTGR_1": Sticker_papelpicadotgr_1Entry;
  "STICKER_PAPELPICADOTGR_2": Sticker_papelpicadotgr_2Entry;
  "STICKER_PAPELPICADOTGR_3": Sticker_papelpicadotgr_3Entry;
  "STICKER_PAPELPICADOTGR_4": Sticker_papelpicadotgr_4Entry;
  "STICKER_PAPELPICADOTGR_5": Sticker_papelpicadotgr_5Entry;
  "STICKER_PGOFEST2021_GALARIANZIGZAGOON": Sticker_pgofest2021_galarianzigzagoonEntry;
  "STICKER_PGOFEST2021_LOGO": Sticker_pgofest2021_logoEntry;
  "STICKER_PGOFEST2021_MELOETTA_1": Sticker_pgofest2021_meloetta_1Entry;
  "STICKER_PGOFEST2021_MELOETTA_2": Sticker_pgofest2021_meloetta_2Entry;
  "STICKER_PGOFEST2021_PONYTA": Sticker_pgofest2021_ponytaEntry;
  "STICKER_PGOFEST2021_SHIRTICON": Sticker_pgofest2021_shirticonEntry;
  "STICKER_PGOFEST2022_DENJYUMOKU": Sticker_pgofest2022_denjyumokuEntry;
  "STICKER_PGOFEST2022_GROUDON": Sticker_pgofest2022_groudonEntry;
  "STICKER_PGOFEST2022_KIBAGO": Sticker_pgofest2022_kibagoEntry;
  "STICKER_PGOFEST2022_KYOGRE": Sticker_pgofest2022_kyogreEntry;
  "STICKER_PGOFEST2022_MASSIVOON": Sticker_pgofest2022_massivoonEntry;
  "STICKER_PGOFEST2022_PHEROACHE": Sticker_pgofest2022_pheroacheEntry;
  "STICKER_PGOFEST2022_PIKACHU": Sticker_pgofest2022_pikachuEntry;
  "STICKER_PGOFEST2022_POCHAMA": Sticker_pgofest2022_pochamaEntry;
  "STICKER_PGOFEST2022_SHAYMIN": Sticker_pgofest2022_shayminEntry;
  "STICKER_PGOFEST2022_SHAYMINSKY": Sticker_pgofest2022_shayminskyEntry;
  "STICKER_PGOFEST2022_UTUROID": Sticker_pgofest2022_uturoidEntry;
  "STICKER_PGO_FEST_2017": Sticker_pgo_fest_2017Entry;
  "STICKER_PGO_FEST_2018": Sticker_pgo_fest_2018Entry;
  "STICKER_PGO_FEST_2019": Sticker_pgo_fest_2019Entry;
  "STICKER_PGO_FEST_2020": Sticker_pgo_fest_2020Entry;
  "STICKER_PGO_FEST_2020_LOGO": Sticker_pgo_fest_2020_logoEntry;
  "STICKER_PGO_FEST_2022": Sticker_pgo_fest_2022Entry;
  "STICKER_PGO_FEST_2022_LOGO": Sticker_pgo_fest_2022_logoEntry;
  "STICKER_PGO_FEST_2023": Sticker_pgo_fest_2023Entry;
  "STICKER_PGO_FEST_2023_1": Sticker_pgo_fest_2023_1Entry;
  "STICKER_PGO_FEST_2023_2": Sticker_pgo_fest_2023_2Entry;
  "STICKER_PGO_FEST_2023_3": Sticker_pgo_fest_2023_3Entry;
  "STICKER_PGO_FEST_2023_4": Sticker_pgo_fest_2023_4Entry;
  "STICKER_PGO_FEST_2023_5": Sticker_pgo_fest_2023_5Entry;
  "STICKER_PGO_FEST_2023_6": Sticker_pgo_fest_2023_6Entry;
  "STICKER_PGO_FEST_2023_LOGO": Sticker_pgo_fest_2023_logoEntry;
  "STICKER_PGO_FEST_2024": Sticker_pgo_fest_2024Entry;
  "STICKER_PGO_FEST_2024_1": Sticker_pgo_fest_2024_1Entry;
  "STICKER_PGO_FEST_2024_2": Sticker_pgo_fest_2024_2Entry;
  "STICKER_PGO_FEST_2024_3": Sticker_pgo_fest_2024_3Entry;
  "STICKER_PGO_FEST_2024_4": Sticker_pgo_fest_2024_4Entry;
  "STICKER_PGO_FEST_2024_5": Sticker_pgo_fest_2024_5Entry;
  "STICKER_PGO_FEST_2024_6": Sticker_pgo_fest_2024_6Entry;
  "STICKER_PGO_FEST_2024_LOGO": Sticker_pgo_fest_2024_logoEntry;
  "STICKER_PGO_FEST_2025": Sticker_pgo_fest_2025Entry;
  "STICKER_PGO_FEST_2025_1": Sticker_pgo_fest_2025_1Entry;
  "STICKER_PGO_FEST_2025_2": Sticker_pgo_fest_2025_2Entry;
  "STICKER_PGO_FEST_2025_3": Sticker_pgo_fest_2025_3Entry;
  "STICKER_PGO_FEST_2025_LOGO": Sticker_pgo_fest_2025_logoEntry;
  "STICKER_PGO_FEST_VICTINI_05": Sticker_pgo_fest_victini_05Entry;
  "STICKER_PGO_TOUR_2024": Sticker_pgo_tour_2024Entry;
  "STICKER_PGO_TOUR_2024_1": Sticker_pgo_tour_2024_1Entry;
  "STICKER_PGO_TOUR_2024_2": Sticker_pgo_tour_2024_2Entry;
  "STICKER_PGO_TOUR_2024_3": Sticker_pgo_tour_2024_3Entry;
  "STICKER_PGO_TOUR_2024_4": Sticker_pgo_tour_2024_4Entry;
  "STICKER_PGO_TOUR_2024_5": Sticker_pgo_tour_2024_5Entry;
  "STICKER_PGO_TOUR_2024_LOGO": Sticker_pgo_tour_2024_logoEntry;
  "STICKER_PGO_TOUR_2026": Sticker_pgo_tour_2026Entry;
  "STICKER_PGO_TOUR_2026_1": Sticker_pgo_tour_2026_1Entry;
  "STICKER_PGO_TOUR_2026_2": Sticker_pgo_tour_2026_2Entry;
  "STICKER_PGO_TOUR_2026_3": Sticker_pgo_tour_2026_3Entry;
  "STICKER_PGO_TOUR_2026_LOGO": Sticker_pgo_tour_2026_logoEntry;
  "STICKER_PGO_WILDAREA_2024": Sticker_pgo_wildarea_2024Entry;
  "STICKER_PGO_WILDAREA_2024_1": Sticker_pgo_wildarea_2024_1Entry;
  "STICKER_PGO_WILDAREA_2024_2": Sticker_pgo_wildarea_2024_2Entry;
  "STICKER_PGO_WILDAREA_2024_3": Sticker_pgo_wildarea_2024_3Entry;
  "STICKER_PGO_WILDAREA_2024_4": Sticker_pgo_wildarea_2024_4Entry;
  "STICKER_PGO_WILDAREA_2024_LOGO": Sticker_pgo_wildarea_2024_logoEntry;
  "STICKER_PIKAAIRADVENTURE_1": Sticker_pikaairadventure_1Entry;
  "STICKER_PIKAAIRADVENTURE_2": Sticker_pikaairadventure_2Entry;
  "STICKER_PIKAAIRADVENTURE_3": Sticker_pikaairadventure_3Entry;
  "STICKER_PIKAAIRJEJU_PIKACHU": Sticker_pikaairjeju_pikachuEntry;
  "STICKER_PIKAAIRSINGAPORE_LAPRAS": Sticker_pikaairsingapore_laprasEntry;
  "STICKER_PIKAAIRSINGAPORE_PIKACHU": Sticker_pikaairsingapore_pikachuEntry;
  "STICKER_PIKAAIRTAIWAN_PIKACHU": Sticker_pikaairtaiwan_pikachuEntry;
  "STICKER_PIKAAIRTAIWAN_SNORLAX": Sticker_pikaairtaiwan_snorlaxEntry;
  "STICKER_PIKACHU_JOL": Sticker_pikachu_jolEntry;
  "STICKER_PIKA_14_THANKYOU": Sticker_pika_14_thankyouEntry;
  "STICKER_POKEMONCHATPALS2_04": Sticker_pokemonchatpals2_04Entry;
  "STICKER_POKEMONCHATPALS2_40": Sticker_pokemonchatpals2_40Entry;
  "STICKER_POKOPIA_BULBASAUR": Sticker_pokopia_bulbasaurEntry;
  "STICKER_POKOPIA_PIKACHU": Sticker_pokopia_pikachuEntry;
  "STICKER_POKOPIA_SNORLAX": Sticker_pokopia_snorlaxEntry;
  "STICKER_POKOPIA_TANGROWTH": Sticker_pokopia_tangrowthEntry;
  "STICKER_POLIWAG_1": Sticker_poliwag_1Entry;
  "STICKER_POLIWAG_2": Sticker_poliwag_2Entry;
  "STICKER_POLIWAG_3": Sticker_poliwag_3Entry;
  "STICKER_POLIWAG_4": Sticker_poliwag_4Entry;
  "STICKER_PONYTA_1": Sticker_ponyta_1Entry;
  "STICKER_PONYTA_2": Sticker_ponyta_2Entry;
  "STICKER_PONYTA_3": Sticker_ponyta_3Entry;
  "STICKER_PONYTA_4": Sticker_ponyta_4Entry;
  "STICKER_POPPLIOCD_1": Sticker_poppliocd_1Entry;
  "STICKER_POPPLIOCD_2": Sticker_poppliocd_2Entry;
  "STICKER_POPPLIOCD_3": Sticker_poppliocd_3Entry;
  "STICKER_POPPLIOCD_4": Sticker_poppliocd_4Entry;
  "STICKER_PROJECTGUITAR_04": Sticker_projectguitar_04Entry;
  "STICKER_PROJECTGUITAR_07": Sticker_projectguitar_07Entry;
  "STICKER_PROJECTGUITAR_13": Sticker_projectguitar_13Entry;
  "STICKER_PROJECTGUITAR_25": Sticker_projectguitar_25Entry;
  "STICKER_PROJECTGUITAR_FROAKIE": Sticker_projectguitar_froakieEntry;
  "STICKER_PSYCHICSPEC21_INKAY": Sticker_psychicspec21_inkayEntry;
  "STICKER_PSYCHICSPEC21_INKAY2": Sticker_psychicspec21_inkay2Entry;
  "STICKER_ROGGENROLA_CD_1": Sticker_roggenrola_cd_1Entry;
  "STICKER_ROGGENROLA_CD_2": Sticker_roggenrola_cd_2Entry;
  "STICKER_ROGGENROLA_CD_3": Sticker_roggenrola_cd_3Entry;
  "STICKER_ROGGENROLA_CD_4": Sticker_roggenrola_cd_4Entry;
  "STICKER_ROWLETCD_1": Sticker_rowletcd_1Entry;
  "STICKER_ROWLETCD_2": Sticker_rowletcd_2Entry;
  "STICKER_ROWLETCD_3": Sticker_rowletcd_3Entry;
  "STICKER_ROWLETCD_4": Sticker_rowletcd_4Entry;
  "STICKER_SANDSHREW_1": Sticker_sandshrew_1Entry;
  "STICKER_SANDSHREW_2": Sticker_sandshrew_2Entry;
  "STICKER_SANDSHREW_3": Sticker_sandshrew_3Entry;
  "STICKER_SANDSHREW_4": Sticker_sandshrew_4Entry;
  "STICKER_SECRETSOFTHEJUNGLE_1": Sticker_secretsofthejungle_1Entry;
  "STICKER_SECRETSOFTHEJUNGLE_4": Sticker_secretsofthejungle_4Entry;
  "STICKER_SECRETSOFTHEJUNGLE_5": Sticker_secretsofthejungle_5Entry;
  "STICKER_SECRETSOFTHEJUNGLE_6": Sticker_secretsofthejungle_6Entry;
  "STICKER_SECRETSOFTHEJUNGLE_7": Sticker_secretsofthejungle_7Entry;
  "STICKER_SECRETSOFTHEJUNGLE_8": Sticker_secretsofthejungle_8Entry;
  "STICKER_SECRETSOFTHEJUNGLE_9": Sticker_secretsofthejungle_9Entry;
  "STICKER_SEWADDLECD_1": Sticker_sewaddlecd_1Entry;
  "STICKER_SEWADDLECD_2": Sticker_sewaddlecd_2Entry;
  "STICKER_SEWADDLECD_3": Sticker_sewaddlecd_3Entry;
  "STICKER_SEWADDLECD_4": Sticker_sewaddlecd_4Entry;
  "STICKER_SHELMET_KARRABLAST_1": Sticker_shelmet_karrablast_1Entry;
  "STICKER_SHELMET_KARRABLAST_2": Sticker_shelmet_karrablast_2Entry;
  "STICKER_SHELMET_KARRABLAST_3": Sticker_shelmet_karrablast_3Entry;
  "STICKER_SLEEP_1": Sticker_sleep_1Entry;
  "STICKER_SLEEP_2": Sticker_sleep_2Entry;
  "STICKER_SLEEP_3": Sticker_sleep_3Entry;
  "STICKER_SLEEP_4": Sticker_sleep_4Entry;
  "STICKER_SLEEP_5": Sticker_sleep_5Entry;
  "STICKER_SLEEP_6": Sticker_sleep_6Entry;
  "STICKER_SLEEP_7": Sticker_sleep_7Entry;
  "STICKER_SLOWPOKE_1": Sticker_slowpoke_1Entry;
  "STICKER_SLOWPOKE_2": Sticker_slowpoke_2Entry;
  "STICKER_SLOWPOKE_3": Sticker_slowpoke_3Entry;
  "STICKER_SLOWPOKE_4": Sticker_slowpoke_4Entry;
  "STICKER_SPHEAL_1": Sticker_spheal_1Entry;
  "STICKER_SPHEAL_2": Sticker_spheal_2Entry;
  "STICKER_SPHEAL_3": Sticker_spheal_3Entry;
  "STICKER_SPHEAL_4": Sticker_spheal_4Entry;
  "STICKER_SPRIGATITO_1": Sticker_sprigatito_1Entry;
  "STICKER_SPRIGATITO_2": Sticker_sprigatito_2Entry;
  "STICKER_SPRIGATITO_3": Sticker_sprigatito_3Entry;
  "STICKER_SPRIGATITO_4": Sticker_sprigatito_4Entry;
  "STICKER_SPRING_2024_1": Sticker_spring_2024_1Entry;
  "STICKER_SPRING_2024_2": Sticker_spring_2024_2Entry;
  "STICKER_SPRING_2024_3": Sticker_spring_2024_3Entry;
  "STICKER_SPRING_2024_4": Sticker_spring_2024_4Entry;
  "STICKER_SPRING_2024_5": Sticker_spring_2024_5Entry;
  "STICKER_SPRING_2024_6": Sticker_spring_2024_6Entry;
  "STICKER_SPRING_2025_1": Sticker_spring_2025_1Entry;
  "STICKER_SPRING_2025_2": Sticker_spring_2025_2Entry;
  "STICKER_SPRING_2025_3": Sticker_spring_2025_3Entry;
  "STICKER_SPRING_2025_4": Sticker_spring_2025_4Entry;
  "STICKER_SPRING_2026_1": Sticker_spring_2026_1Entry;
  "STICKER_SPRING_2026_2": Sticker_spring_2026_2Entry;
  "STICKER_SPRING_2026_3": Sticker_spring_2026_3Entry;
  "STICKER_SPRING_2026_4": Sticker_spring_2026_4Entry;
  "STICKER_SPRING_EIEVUI": Sticker_spring_eievuiEntry;
  "STICKER_SPRING_HAPINAS": Sticker_spring_hapinasEntry;
  "STICKER_SPRING_MIMIROL": Sticker_spring_mimirolEntry;
  "STICKER_SPRING_NIMPHIA": Sticker_spring_nimphiaEntry;
  "STICKER_SPRING_PIKACHU": Sticker_spring_pikachuEntry;
  "STICKER_SPRING_PIPITO": Sticker_spring_pipitoEntry;
  "STICKER_STUFFUL_1": Sticker_stufful_1Entry;
  "STICKER_STUFFUL_2": Sticker_stufful_2Entry;
  "STICKER_STUFFUL_3": Sticker_stufful_3Entry;
  "STICKER_STUFFUL_4": Sticker_stufful_4Entry;
  "STICKER_SUMMER_1": Sticker_summer_1Entry;
  "STICKER_SUMMER_2": Sticker_summer_2Entry;
  "STICKER_SUMMER_2023_BLASTOISE": Sticker_summer_2023_blastoiseEntry;
  "STICKER_SUMMER_2023_BUTTERFREE": Sticker_summer_2023_butterfreeEntry;
  "STICKER_SUMMER_2023_CLAMPERL": Sticker_summer_2023_clamperlEntry;
  "STICKER_SUMMER_2023_LEDIAN": Sticker_summer_2023_ledianEntry;
  "STICKER_SUMMER_2023_SAWSBUCK": Sticker_summer_2023_sawsbuckEntry;
  "STICKER_SUMMER_2023_SQUIRTLE": Sticker_summer_2023_squirtleEntry;
  "STICKER_SUMMER_2024_1": Sticker_summer_2024_1Entry;
  "STICKER_SUMMER_2024_2": Sticker_summer_2024_2Entry;
  "STICKER_SUMMER_2024_3": Sticker_summer_2024_3Entry;
  "STICKER_SUMMER_2024_4": Sticker_summer_2024_4Entry;
  "STICKER_SUMMER_2024_5": Sticker_summer_2024_5Entry;
  "STICKER_SUMMER_2024_6": Sticker_summer_2024_6Entry;
  "STICKER_SUMMER_2025_1": Sticker_summer_2025_1Entry;
  "STICKER_SUMMER_2025_2": Sticker_summer_2025_2Entry;
  "STICKER_SUMMER_2025_3": Sticker_summer_2025_3Entry;
  "STICKER_SUMMER_2025_4": Sticker_summer_2025_4Entry;
  "STICKER_SUMMER_3": Sticker_summer_3Entry;
  "STICKER_SUMMER_4": Sticker_summer_4Entry;
  "STICKER_SUMMER_5": Sticker_summer_5Entry;
  "STICKER_SUMMER_6": Sticker_summer_6Entry;
  "STICKER_SWORDSHIELD21_1": Sticker_swordshield21_1Entry;
  "STICKER_SWORDSHIELD21_2": Sticker_swordshield21_2Entry;
  "STICKER_SWORDSHIELD21_3": Sticker_swordshield21_3Entry;
  "STICKER_SWORDSHIELD21_4": Sticker_swordshield21_4Entry;
  "STICKER_SWORDSHIELD21_5": Sticker_swordshield21_5Entry;
  "STICKER_TEDDIURSA_1": Sticker_teddiursa_1Entry;
  "STICKER_TEDDIURSA_2": Sticker_teddiursa_2Entry;
  "STICKER_TEDDIURSA_3": Sticker_teddiursa_3Entry;
  "STICKER_TEDDIURSA_4": Sticker_teddiursa_4Entry;
  "STICKER_TIMBURR_1": Sticker_timburr_1Entry;
  "STICKER_TIMBURR_2": Sticker_timburr_2Entry;
  "STICKER_TIMBURR_3": Sticker_timburr_3Entry;
  "STICKER_TIMBURR_4": Sticker_timburr_4Entry;
  "STICKER_TL_BLANCHE": Sticker_tl_blancheEntry;
  "STICKER_TL_CANDELA": Sticker_tl_candelaEntry;
  "STICKER_TL_SPARK": Sticker_tl_sparkEntry;
  "STICKER_TOGETICCD2023_1": Sticker_togeticcd2023_1Entry;
  "STICKER_TOGETICCD2023_2": Sticker_togeticcd2023_2Entry;
  "STICKER_TOGETICCD2023_3": Sticker_togeticcd2023_3Entry;
  "STICKER_TOGETICCD2023_4": Sticker_togeticcd2023_4Entry;
  "STICKER_TR_ARLO": Sticker_tr_arloEntry;
  "STICKER_TR_CLIFF": Sticker_tr_cliffEntry;
  "STICKER_TR_SIERRA": Sticker_tr_sierraEntry;
  "STICKER_TYNAMOCD_1": Sticker_tynamocd_1Entry;
  "STICKER_TYNAMOCD_2": Sticker_tynamocd_2Entry;
  "STICKER_TYNAMOCD_3": Sticker_tynamocd_3Entry;
  "STICKER_TYNAMOCD_4": Sticker_tynamocd_4Entry;
  "STICKER_VALENTINE2023_1": Sticker_valentine2023_1Entry;
  "STICKER_VALENTINE2023_2": Sticker_valentine2023_2Entry;
  "STICKER_VALENTINE2023_3": Sticker_valentine2023_3Entry;
  "STICKER_WCS2025_CAR_GROUP": Sticker_wcs2025_car_groupEntry;
  "STICKER_WCS2025_JIGGLYPUFF": Sticker_wcs2025_jigglypuffEntry;
  "STICKER_WCS2025_MURKROW": Sticker_wcs2025_murkrowEntry;
  "STICKER_WCS2025_PIKACHU": Sticker_wcs2025_pikachuEntry;
  "STICKER_WCS_PLAY": Sticker_wcs_playEntry;
  "STICKER_WILLOW_BRONZE": Sticker_willow_bronzeEntry;
  "STICKER_WILLOW_GOLD": Sticker_willow_goldEntry;
  "STICKER_WILLOW_SILVER": Sticker_willow_silverEntry;
  "STICKER_WINTER2023_1": Sticker_winter2023_1Entry;
  "STICKER_WINTER2023_2": Sticker_winter2023_2Entry;
  "STICKER_WINTER2023_3": Sticker_winter2023_3Entry;
  "STICKER_WINTER2023_4": Sticker_winter2023_4Entry;
  "STICKER_WINTER2023_5": Sticker_winter2023_5Entry;
  "STICKER_WINTER2023_6": Sticker_winter2023_6Entry;
  "STICKER_WINTER2025_1": Sticker_winter2025_1Entry;
  "STICKER_WINTER2025_2": Sticker_winter2025_2Entry;
  "STICKER_WINTER2025_3": Sticker_winter2025_3Entry;
  "STICKER_WINTER2025_4": Sticker_winter2025_4Entry;
  "STICKER_WINTER_2024_1": Sticker_winter_2024_1Entry;
  "STICKER_WINTER_2024_2": Sticker_winter_2024_2Entry;
  "STICKER_WINTER_2024_3": Sticker_winter_2024_3Entry;
  "STICKER_WINTER_2024_4": Sticker_winter_2024_4Entry;
  "STICKER_WINTER_2024_5": Sticker_winter_2024_5Entry;
  "STICKER_WINTER_2024_6": Sticker_winter_2024_6Entry;
  "STICKER_WINTER_AMAURA": Sticker_winter_amauraEntry;
  "STICKER_WINTER_DARUMAKA": Sticker_winter_darumakaEntry;
  "STICKER_WINTER_GLACEON": Sticker_winter_glaceonEntry;
  "STICKER_WINTER_PIKACHU": Sticker_winter_pikachuEntry;
  "STICKER_WINTER_SAWSBUCK": Sticker_winter_sawsbuckEntry;
  "STICKER_WINTER_SNORUNT": Sticker_winter_snoruntEntry;
  "STICKER_WOOPERCD2023_1": Sticker_woopercd2023_1Entry;
  "STICKER_WOOPERCD2023_2": Sticker_woopercd2023_2Entry;
  "STICKER_WOOPERCD2023_3": Sticker_woopercd2023_3Entry;
  "STICKER_WOOPERCD2023_4": Sticker_woopercd2023_4Entry;
  "STICKER_YADON": Sticker_yadonEntry;
  "STICKER_YURUTTO_12": Sticker_yurutto_12Entry;
  "STICKER_YURUTTO_24": Sticker_yurutto_24Entry;
  "STICKER_YURUTTO_26": Sticker_yurutto_26Entry;
  "STICKER_YURUTTO_33": Sticker_yurutto_33Entry;
  "STICKER_YURUTTO_36": Sticker_yurutto_36Entry;
  "STICKER_YURUTTO_37": Sticker_yurutto_37Entry;
  "STORE_REFRESH_FEATURE_GATE": Store_refresh_feature_gateEntry;
  "STYLE_SHOP_SETTINGS": Style_shop_settingsEntry;
  "SURVEY_SETTINGS": Survey_settingsEntry;
  "TAPPABLE_SETTINGS": Tappable_settingsEntry;
  "TAPPABLE_SETTINGS_BREAKFAST": Tappable_settings_breakfastEntry;
  "TAPPABLE_TYPE_HAT": Tappable_type_hatEntry;
  "TAPPABLE_TYPE_MAPLE": Tappable_type_mapleEntry;
  "TAPPABLE_TYPE_POKEBALL": Tappable_type_pokeballEntry;
  "TEMPORARY_EVOLUTION_V0003_POKEMON_VENUSAUR": Temporary_evolution_v0003_pokemon_venusaurEntry;
  "TEMPORARY_EVOLUTION_V0006_POKEMON_CHARIZARD": Temporary_evolution_v0006_pokemon_charizardEntry;
  "TEMPORARY_EVOLUTION_V0009_POKEMON_BLASTOISE": Temporary_evolution_v0009_pokemon_blastoiseEntry;
  "TEMPORARY_EVOLUTION_V0015_POKEMON_BEEDRILL": Temporary_evolution_v0015_pokemon_beedrillEntry;
  "TEMPORARY_EVOLUTION_V0018_POKEMON_PIDGEOT": Temporary_evolution_v0018_pokemon_pidgeotEntry;
  "TEMPORARY_EVOLUTION_V0065_POKEMON_ALAKAZAM": Temporary_evolution_v0065_pokemon_alakazamEntry;
  "TEMPORARY_EVOLUTION_V0071_POKEMON_VICTREEBEL": Temporary_evolution_v0071_pokemon_victreebelEntry;
  "TEMPORARY_EVOLUTION_V0080_POKEMON_SLOWBRO": Temporary_evolution_v0080_pokemon_slowbroEntry;
  "TEMPORARY_EVOLUTION_V0094_POKEMON_GENGAR": Temporary_evolution_v0094_pokemon_gengarEntry;
  "TEMPORARY_EVOLUTION_V0115_POKEMON_KANGASKHAN": Temporary_evolution_v0115_pokemon_kangaskhanEntry;
  "TEMPORARY_EVOLUTION_V0127_POKEMON_PINSIR": Temporary_evolution_v0127_pokemon_pinsirEntry;
  "TEMPORARY_EVOLUTION_V0130_POKEMON_GYARADOS": Temporary_evolution_v0130_pokemon_gyaradosEntry;
  "TEMPORARY_EVOLUTION_V0142_POKEMON_AERODACTYL": Temporary_evolution_v0142_pokemon_aerodactylEntry;
  "TEMPORARY_EVOLUTION_V0149_POKEMON_DRAGONITE": Temporary_evolution_v0149_pokemon_dragoniteEntry;
  "TEMPORARY_EVOLUTION_V0181_POKEMON_AMPHAROS": Temporary_evolution_v0181_pokemon_ampharosEntry;
  "TEMPORARY_EVOLUTION_V0208_POKEMON_STEELIX": Temporary_evolution_v0208_pokemon_steelixEntry;
  "TEMPORARY_EVOLUTION_V0212_POKEMON_SCIZOR": Temporary_evolution_v0212_pokemon_scizorEntry;
  "TEMPORARY_EVOLUTION_V0214_POKEMON_HERACROSS": Temporary_evolution_v0214_pokemon_heracrossEntry;
  "TEMPORARY_EVOLUTION_V0229_POKEMON_HOUNDOOM": Temporary_evolution_v0229_pokemon_houndoomEntry;
  "TEMPORARY_EVOLUTION_V0248_POKEMON_TYRANITAR": Temporary_evolution_v0248_pokemon_tyranitarEntry;
  "TEMPORARY_EVOLUTION_V0254_POKEMON_SCEPTILE": Temporary_evolution_v0254_pokemon_sceptileEntry;
  "TEMPORARY_EVOLUTION_V0257_POKEMON_BLAZIKEN": Temporary_evolution_v0257_pokemon_blazikenEntry;
  "TEMPORARY_EVOLUTION_V0260_POKEMON_SWAMPERT": Temporary_evolution_v0260_pokemon_swampertEntry;
  "TEMPORARY_EVOLUTION_V0282_POKEMON_GARDEVOIR": Temporary_evolution_v0282_pokemon_gardevoirEntry;
  "TEMPORARY_EVOLUTION_V0302_POKEMON_SABLEYE": Temporary_evolution_v0302_pokemon_sableyeEntry;
  "TEMPORARY_EVOLUTION_V0303_POKEMON_MAWILE": Temporary_evolution_v0303_pokemon_mawileEntry;
  "TEMPORARY_EVOLUTION_V0306_POKEMON_AGGRON": Temporary_evolution_v0306_pokemon_aggronEntry;
  "TEMPORARY_EVOLUTION_V0308_POKEMON_MEDICHAM": Temporary_evolution_v0308_pokemon_medichamEntry;
  "TEMPORARY_EVOLUTION_V0310_POKEMON_MANECTRIC": Temporary_evolution_v0310_pokemon_manectricEntry;
  "TEMPORARY_EVOLUTION_V0319_POKEMON_SHARPEDO": Temporary_evolution_v0319_pokemon_sharpedoEntry;
  "TEMPORARY_EVOLUTION_V0323_POKEMON_CAMERUPT": Temporary_evolution_v0323_pokemon_cameruptEntry;
  "TEMPORARY_EVOLUTION_V0334_POKEMON_ALTARIA": Temporary_evolution_v0334_pokemon_altariaEntry;
  "TEMPORARY_EVOLUTION_V0354_POKEMON_BANETTE": Temporary_evolution_v0354_pokemon_banetteEntry;
  "TEMPORARY_EVOLUTION_V0359_POKEMON_ABSOL": Temporary_evolution_v0359_pokemon_absolEntry;
  "TEMPORARY_EVOLUTION_V0362_POKEMON_GLALIE": Temporary_evolution_v0362_pokemon_glalieEntry;
  "TEMPORARY_EVOLUTION_V0373_POKEMON_SALAMENCE": Temporary_evolution_v0373_pokemon_salamenceEntry;
  "TEMPORARY_EVOLUTION_V0376_POKEMON_METAGROSS": Temporary_evolution_v0376_pokemon_metagrossEntry;
  "TEMPORARY_EVOLUTION_V0380_POKEMON_LATIAS": Temporary_evolution_v0380_pokemon_latiasEntry;
  "TEMPORARY_EVOLUTION_V0381_POKEMON_LATIOS": Temporary_evolution_v0381_pokemon_latiosEntry;
  "TEMPORARY_EVOLUTION_V0382_POKEMON_KYOGRE": Temporary_evolution_v0382_pokemon_kyogreEntry;
  "TEMPORARY_EVOLUTION_V0383_POKEMON_GROUDON": Temporary_evolution_v0383_pokemon_groudonEntry;
  "TEMPORARY_EVOLUTION_V0384_POKEMON_RAYQUAZA": Temporary_evolution_v0384_pokemon_rayquazaEntry;
  "TEMPORARY_EVOLUTION_V0428_POKEMON_GARCHOMP": Temporary_evolution_v0428_pokemon_garchompEntry;
  "TEMPORARY_EVOLUTION_V0428_POKEMON_LOPUNNY": Temporary_evolution_v0428_pokemon_lopunnyEntry;
  "TEMPORARY_EVOLUTION_V0448_POKEMON_LUCARIO": Temporary_evolution_v0448_pokemon_lucarioEntry;
  "TEMPORARY_EVOLUTION_V0460_POKEMON_ABOMASNOW": Temporary_evolution_v0460_pokemon_abomasnowEntry;
  "TEMPORARY_EVOLUTION_V0475_POKEMON_GALLADE": Temporary_evolution_v0475_pokemon_galladeEntry;
  "TEMPORARY_EVOLUTION_V0531_POKEMON_AUDINO": Temporary_evolution_v0531_pokemon_audinoEntry;
  "TEMPORARY_EVOLUTION_V0687_POKEMON_MALAMAR": Temporary_evolution_v0687_pokemon_malamarEntry;
  "TEMPORARY_EVOLUTION_V0719_POKEMON_DIANCIE": Temporary_evolution_v0719_pokemon_diancieEntry;
  "TICKET_GIFTING_SETTINGS": Ticket_gifting_settingsEntry;
  "TODAY_VIEW_SETTINGS_V2": Today_view_settings_v2Entry;
  "TODAY_VIEW_V3_CODE_GATE": Today_view_v3_code_gateEntry;
  "TRAINER_PERSONALITY_EASY": Trainer_personality_easyEntry;
  "TRAINER_PERSONALITY_HARD": Trainer_personality_hardEntry;
  "TRAINER_PERSONALITY_MEDIUM": Trainer_personality_mediumEntry;
  "TUTORIALS_SETTINGS": Tutorials_settingsEntry;
  "UPDATE_TICKETS_STRING_FEATURE_GATE": Update_tickets_string_feature_gateEntry;
  "USE_EXTENDED_SETTINGS_FOR_MAX_SCALE_CODE_GATE": Use_extended_settings_for_max_scale_code_gateEntry;
  "USE_GMT_SKU_DATA_CODE_GATE": Use_gmt_sku_data_code_gateEntry;
  "VERBOSE_LOG_COMBAT_SETTINGS": Verbose_log_combat_settingsEntry;
  "VERBOSE_LOG_RAID_SETTINGS": Verbose_log_raid_settingsEntry;
  "VISTA_GENERAL_SETTINGS": Vista_general_settingsEntry;
  "VNEXT_ANIMATION_CONFIGURATION": Vnext_animation_configurationEntry;
  "VNEXT_BATTLE_CONFIG": Vnext_battle_configEntry;
  "VNEXT_PRE_RESPONSE_INPUT_BLOCKING_BEHAVIOR_FEATURE_GATE": Vnext_pre_response_input_blocking_behavior_feature_gateEntry;
  "VS_SEEKER_CLIENT_SETTINGS": Vs_seeker_client_settingsEntry;
  "VS_SEEKER_POKEMON_REWARDS_FREE": Vs_seeker_pokemon_rewards_freeEntry;
  "VS_SEEKER_POKEMON_REWARDS_PREMIUM": Vs_seeker_pokemon_rewards_premiumEntry;
  "VS_SEEKER_SCHEDULE_SETTINGS": Vs_seeker_schedule_settingsEntry;
  "WEATHER_AFFINITY_CLEAR": Weather_affinity_clearEntry;
  "WEATHER_AFFINITY_FOG": Weather_affinity_fogEntry;
  "WEATHER_AFFINITY_OVERCAST": Weather_affinity_overcastEntry;
  "WEATHER_AFFINITY_PARTLY_CLOUDY": Weather_affinity_partly_cloudyEntry;
  "WEATHER_AFFINITY_RAINY": Weather_affinity_rainyEntry;
  "WEATHER_AFFINITY_SNOW": Weather_affinity_snowEntry;
  "WEATHER_AFFINITY_WINDY": Weather_affinity_windyEntry;
  "WEATHER_BONUS_SETTINGS": Weather_bonus_settingsEntry;
  "WEEKLY_CHALLENGE_GENERAL_SETTINGS": Weekly_challenge_general_settingsEntry;
  "avatar_store_footer_flags": Avatar_store_footer_flagsEntry;
  "avatar_store_subcategory_filtering_flags": Avatar_store_subcategory_filtering_flagsEntry;
  "impression_tracking_settings": Impression_tracking_settingsEntry;
  "sticker_category_settings": Sticker_category_settingsEntry;
  "username_suggestion_settings": Username_suggestion_settingsEntry;
}

export type MiscMasterfileEntry = Accessibility_client_settingsEntry | Additive_scene_settingsEntry | Addressable_pokemon_settingsEntry | Address_book_import_settingsEntry | Admin_gm_nia_ops_only_filter_ams_feature_gateEntry | Advanced_settingsEntry | Ams_feature_gateEntry | Ams_frontend_feature_gateEntry | Android_sensors_roll_backEntry | Ar_photo_feature_flagsEntry | Ar_telemetry_settingsEntry | Asset_refresh_protoEntry | Avatar_feature_flagsEntry | Avatar_group_order_settingsEntry | Avatar_group_settingsEntry | Background_mode_settingsEntry | Battle_accessibility_code_gateEntry | Battle_hub_badge_settingsEntry | Battle_hub_order_settingsEntry | Battle_party_settingsEntry | Battle_rewards_code_gateEntry | Battle_settingsEntry | Battle_visual_settingsEntry | Beluga_pokemon_whitelistEntry | Best_friends_plus_settingsEntry | Bidirectional_fp_weekly_challenge_reward_roll_backEntry | Bread_battle_client_settingsEntry | Bread_feature_flagsEntry | Bread_lobby_counter_settingsEntry | Bread_lobby_update_settingsEntry | Bread_move_level_settings_group_1Entry | Bread_move_level_settings_group_2Entry | Bread_move_level_settings_group_3Entry | Bread_move_level_settings_group_4Entry | Bread_move_level_settings_group_7Entry | Bread_move_level_settings_group_8Entry | Bread_move_level_settings_group_zEntry | Bread_move_mapping_settingsEntry | Bread_pokemon_scaling_settingsEntry | Bread_shared_settingsEntry | Buddy_category_battleEntry | Buddy_category_bonusEntry | Buddy_category_careEntry | Buddy_category_exploreEntry | Buddy_category_feedEntry | Buddy_category_routeEntry | Buddy_category_snapshotEntry | Buddy_category_walkEntry | Buddy_emotion_level_0Entry | Buddy_emotion_level_1Entry | Buddy_emotion_level_2Entry | Buddy_emotion_level_3Entry | Buddy_emotion_level_4Entry | Buddy_emotion_level_5Entry | Buddy_emotion_level_6Entry | Buddy_encounter_cameo_settingsEntry | Buddy_hunger_settingsEntry | Buddy_interaction_settingsEntry | Buddy_level_0Entry | Buddy_level_1Entry | Buddy_level_2Entry | Buddy_level_3Entry | Buddy_level_4Entry | Buddy_swap_settingsEntry | Buddy_walk_settingsEntry | Bulk_healing_settingsEntry | Butterfly_collector_settingsEntry | Campfire_settingsEntry | Catch_radius_multiplier_settingsEntry | Character_blancheEntry | Character_bug_grunt_femaleEntry | Character_bug_grunt_maleEntry | Character_candelaEntry | Character_dark_grunt_femaleEntry | Character_dark_grunt_maleEntry | Character_decoy_grunt_femaleEntry | Character_decoy_grunt_maleEntry | Character_dragon_grunt_femaleEntry | Character_dragon_grunt_maleEntry | Character_electric_grunt_femaleEntry | Character_electric_grunt_maleEntry | Character_event_arlo_unticketedEntry | Character_event_cliff_unticketedEntry | Character_event_giovanni_unticketedEntry | Character_event_npc_0Entry | Character_event_npc_1Entry | Character_event_npc_10Entry | Character_event_npc_2Entry | Character_event_npc_3Entry | Character_event_npc_4Entry | Character_event_npc_5Entry | Character_event_npc_6Entry | Character_event_npc_7Entry | Character_event_npc_8Entry | Character_event_npc_9Entry | Character_event_sierra_unticketedEntry | Character_executive_arloEntry | Character_executive_cliffEntry | Character_executive_sierraEntry | Character_explorerEntry | Character_fairy_grunt_femaleEntry | Character_fairy_grunt_maleEntry | Character_fighting_grunt_femaleEntry | Character_fighting_grunt_maleEntry | Character_fire_grunt_femaleEntry | Character_fire_grunt_maleEntry | Character_flying_grunt_femaleEntry | Character_flying_grunt_maleEntry | Character_ghost_grunt_femaleEntry | Character_ghost_grunt_maleEntry | Character_giovanniEntry | Character_grass_grunt_femaleEntry | Character_grass_grunt_maleEntry | Character_ground_grunt_femaleEntry | Character_ground_grunt_maleEntry | Character_gruntb_femaleEntry | Character_gruntb_maleEntry | Character_grunt_femaleEntry | Character_grunt_maleEntry | Character_ice_grunt_femaleEntry | Character_ice_grunt_maleEntry | Character_metal_grunt_femaleEntry | Character_metal_grunt_maleEntry | Character_normal_grunt_femaleEntry | Character_normal_grunt_maleEntry | Character_poison_grunt_femaleEntry | Character_poison_grunt_maleEntry | Character_psychic_grunt_femaleEntry | Character_psychic_grunt_maleEntry | Character_rock_grunt_femaleEntry | Character_rock_grunt_maleEntry | Character_sparkEntry | Character_water_grunt_femaleEntry | Character_water_grunt_maleEntry | Character_willowEntry | Character_willowbEntry | Client_vnext_battle_configEntry | Combat_competitive_season_settingsEntry | Combat_league_settingsEntry | Combat_settingsEntry | Combat_stat_stage_settingsEntry | Combat_vnext_code_gateEntry | Contest_settingsEntry | Conversation_settingsEntry | Cross_game_social_settingEntry | Daily_adventure_incense_settingsEntry | Day_night_poi_feature_gateEntry | Deep_linking_settingsEntry | Default_battle_input_buffer_settingsEntry | Egg_hatch_improvements_settingsEntry | Enable_pvp_challenge_spanner_feature_gateEntry | Encounter_settingsEntry | Event_list_feature_gateEntry | Event_pass_april2026_seasonEntry | Event_pass_bonus_ranks_feature_gateEntry | Event_pass_milestone_rewards_feature_gateEntry | Event_pass_sustainability2026_eventEntry | Event_planner_popular_raid_rsvp_settingsEntry | Event_planner_settingsEntry | Evolution_v0052_pokemon_meowthEntry | Evolution_v0083_pokemon_farfetchdEntry | Evolution_v0122_pokemon_mr_mimeEntry | Evolution_v0123_pokemon_scytherEntry | Evolution_v0150_pokemon_mewtwoEntry | Evolution_v0155_pokemon_cyndaquilEntry | Evolution_v0156_pokemon_quilavaEntry | Evolution_v0157_pokemon_typhlosionEntry | Evolution_v0194_pokemon_wooperEntry | Evolution_v0211_pokemon_qwilfishEntry | Evolution_v0215_pokemon_sneaselEntry | Evolution_v0222_pokemon_corsolaEntry | Evolution_v0234_pokemon_stantlerEntry | Evolution_v0263_pokemon_zigzagoonEntry | Evolution_v0264_pokemon_linooneEntry | Evolution_v0290_pokemon_nincadaEntry | Evolution_v0412_pokemon_burmyEntry | Evolution_v0413_pokemon_wormadamEntry | Evolution_v0414_pokemon_mothimEntry | Evolution_v0420_pokemon_cherubiEntry | Evolution_v0421_pokemon_cherrimEntry | Evolution_v0422_pokemon_shellosEntry | Evolution_v0423_pokemon_gastrodonEntry | Evolution_v0449_pokemon_hippopotasEntry | Evolution_v0450_pokemon_hippowdonEntry | Evolution_v0501_pokemon_oshawottEntry | Evolution_v0502_pokemon_dewottEntry | Evolution_v0503_pokemon_samurottEntry | Evolution_v0519_pokemon_pidoveEntry | Evolution_v0520_pokemon_tranquillEntry | Evolution_v0521_pokemon_unfezantEntry | Evolution_v0550_pokemon_basculinEntry | Evolution_v0554_pokemon_darumakaEntry | Evolution_v0562_pokemon_yamaskEntry | Evolution_v0585_pokemon_deerlingEntry | Evolution_v0586_pokemon_sawsbuckEntry | Evolution_v0592_pokemon_frillishEntry | Evolution_v0593_pokemon_jellicentEntry | Evolution_v0664_pokemon_scatterbugEntry | Evolution_v0665_pokemon_spewpaEntry | Evolution_v0666_pokemon_vivillonEntry | Evolution_v0667_pokemon_litleoEntry | Evolution_v0668_pokemon_pyroarEntry | Evolution_v0669_pokemon_flabebeEntry | Evolution_v0670_pokemon_floetteEntry | Evolution_v0671_pokemon_florgesEntry | Evolution_v0677_pokemon_espurrEntry | Evolution_v0678_pokemon_meowsticEntry | Evolution_v0679_pokemon_honedgeEntry | Evolution_v0680_pokemon_doubladeEntry | Evolution_v0681_pokemon_aegislashEntry | Evolution_v0710_pokemon_pumpkabooEntry | Evolution_v0711_pokemon_gourgeistEntry | Evolution_v0718_pokemon_zygardeEntry | Evolution_v0722_pokemon_rowletEntry | Evolution_v0723_pokemon_dartrixEntry | Evolution_v0724_pokemon_decidueyeEntry | Evolution_v0744_pokemon_rockruffEntry | Evolution_v0745_pokemon_lycanrocEntry | Evolution_v0800_pokemon_necrozmaEntry | Evolution_v0848_pokemon_toxelEntry | Evolution_v0849_pokemon_toxtricityEntry | Evolution_v0862_pokemon_obstagoonEntry | Evolution_v0863_pokemon_perrserkerEntry | Evolution_v0864_pokemon_cursolaEntry | Evolution_v0865_pokemon_sirfetchdEntry | Evolution_v0866_pokemon_mr_rimeEntry | Evolution_v0867_pokemon_runerigusEntry | Evolution_v0899_pokemon_wyrdeerEntry | Evolution_v0900_pokemon_kleavorEntry | Evolution_v0903_pokemon_sneaslerEntry | Evolution_v0904_pokemon_overqwilEntry | Evolution_v0915_pokemon_lechonkEntry | Evolution_v0916_pokemon_oinkologneEntry | Evolution_v0924_pokemon_tandemausEntry | Evolution_v0925_pokemon_mausholdEntry | Evolution_v0980_pokemon_clodsireEntry | Evolution_v1012_pokemon_poltchageistEntry | Evolution_v1013_pokemon_sinistchaEntry | External_addressable_assets_settingsEntry | Feature_unlock_level_settingsEntry | Fort_power_up_level_0Entry | Fort_power_up_level_1Entry | Fort_power_up_level_2Entry | Fort_power_up_level_3Entry | Friendship_level_0Entry | Friendship_level_1Entry | Friendship_level_2Entry | Friendship_level_3Entry | Friendship_level_4Entry | Friendship_level_5Entry | Geotargeted_quest_settingsEntry | Gifting_settingsEntry | Gui_search_settingsEntry | Gym_badge_settingsEntry | Haptics_settingsEntry | Heal_toast_feature_gateEntry | HindiEntry | Iap_settingsEntry | Ibfc_lightweight_settingsEntry | Ibfc_lws_code_gateEntry | Incident_priority_settingsEntry | Incident_visibility_settingsEntry | Input_tracker_code_gateEntry | Invasion_availability_settings_fridayEntry | Invasion_availability_settings_mondayEntry | Invasion_availability_settings_saturdayEntry | Invasion_availability_settings_sundayEntry | Invasion_availability_settings_thursdayEntry | Invasion_availability_settings_tuesdayEntry | Invasion_availability_settings_wednesdayEntry | Inventory_settingsEntry | Iris_social_settingsEntry | Iris_social_ux_funnel_settingsEntry | Is_sku_available_no_app_id_code_gateEntry | Item_expiration_item_event_pass_point_go_fest_01Entry | Item_expiration_item_event_pass_point_go_fest_02Entry | Item_expiration_item_event_pass_point_go_tour_01Entry | Item_expiration_item_event_pass_point_go_tour_02Entry | Item_expiration_item_event_pass_point_go_wild_area_01Entry | Item_expiration_item_event_pass_point_live_ops_01Entry | Item_expiration_item_event_pass_point_live_ops_02Entry | Item_expiration_item_event_pass_point_live_ops_03Entry | Item_expiration_item_event_pass_point_live_ops_04Entry | Item_expiration_item_event_pass_point_live_ops_05Entry | Item_expiration_item_event_pass_point_live_ops_06Entry | Item_expiration_item_event_pass_point_live_ops_07Entry | Item_expiration_item_event_pass_point_live_ops_08Entry | Item_expiration_item_event_pass_point_monthly_01Entry | Item_expiration_item_event_pass_point_monthly_02Entry | Item_expiration_item_event_pass_point_monthly_03Entry | Item_expiration_item_incubator_timedEntry | Item_expiration_item_lucky_friend_applicatorEntry | Item_expiration_item_single_stat_increaseEntry | Item_expiration_item_triple_stat_increaseEntry | Item_expiration_item_wild_ballEntry | Item_expiration_item_wild_ball_premierEntry | Item_inventory_update_settingsEntry | IndonesianEntry | Join_raid_via_friend_list_settingsEntry | Language_selector_settingsEntry | LatamEntry | Lucky_pokemon_settingsEntry | Main_menu_camera_button_settingsEntry | Map_display_settingsEntry | Map_objects_interaction_range_settingsEntry | Map_theme_low_perf_code_gateEntry | Mega_2026_feature_gateEntry | Mega_evolution_level_0Entry | Mega_evolution_level_0_v0015_pokemon_beedrillEntry | Mega_evolution_level_0_v0018_pokemon_pidgeotEntry | Mega_evolution_level_0_v0071_pokemon_victreebelEntry | Mega_evolution_level_0_v0080_pokemon_slowbroEntry | Mega_evolution_level_0_v0130_pokemon_gyaradosEntry | Mega_evolution_level_0_v0149_pokemon_dragoniteEntry | Mega_evolution_level_0_v0150_pokemon_mewtwoEntry | Mega_evolution_level_0_v0229_pokemon_houndoomEntry | Mega_evolution_level_0_v0248_pokemon_tyranitarEntry | Mega_evolution_level_0_v0302_pokemon_sableyeEntry | Mega_evolution_level_0_v0308_pokemon_medichamEntry | Mega_evolution_level_0_v0310_pokemon_manectricEntry | Mega_evolution_level_0_v0334_pokemon_altariaEntry | Mega_evolution_level_0_v0354_pokemon_banetteEntry | Mega_evolution_level_0_v0373_pokemon_salamenceEntry | Mega_evolution_level_0_v0376_pokemon_metagrossEntry | Mega_evolution_level_0_v0380_pokemon_latiasEntry | Mega_evolution_level_0_v0381_pokemon_latiosEntry | Mega_evolution_level_0_v0382_pokemon_kyogreEntry | Mega_evolution_level_0_v0383_pokemon_groudonEntry | Mega_evolution_level_0_v0384_pokemon_rayquazaEntry | Mega_evolution_level_0_v0445_pokemon_garchompEntry | Mega_evolution_level_0_v0687_pokemon_malamarEntry | Mega_evolution_level_0_v0719_pokemon_diancieEntry | Mega_evolution_level_1Entry | Mega_evolution_level_1_v0015_pokemon_beedrillEntry | Mega_evolution_level_1_v0018_pokemon_pidgeotEntry | Mega_evolution_level_1_v0071_pokemon_victreebelEntry | Mega_evolution_level_1_v0080_pokemon_slowbroEntry | Mega_evolution_level_1_v0130_pokemon_gyaradosEntry | Mega_evolution_level_1_v0149_pokemon_dragoniteEntry | Mega_evolution_level_1_v0150_pokemon_mewtwoEntry | Mega_evolution_level_1_v0229_pokemon_houndoomEntry | Mega_evolution_level_1_v0248_pokemon_tyranitarEntry | Mega_evolution_level_1_v0302_pokemon_sableyeEntry | Mega_evolution_level_1_v0308_pokemon_medichamEntry | Mega_evolution_level_1_v0310_pokemon_manectricEntry | Mega_evolution_level_1_v0334_pokemon_altariaEntry | Mega_evolution_level_1_v0354_pokemon_banetteEntry | Mega_evolution_level_1_v0373_pokemon_salamenceEntry | Mega_evolution_level_1_v0376_pokemon_metagrossEntry | Mega_evolution_level_1_v0380_pokemon_latiasEntry | Mega_evolution_level_1_v0381_pokemon_latiosEntry | Mega_evolution_level_1_v0382_pokemon_kyogreEntry | Mega_evolution_level_1_v0383_pokemon_groudonEntry | Mega_evolution_level_1_v0384_pokemon_rayquazaEntry | Mega_evolution_level_1_v0445_pokemon_garchompEntry | Mega_evolution_level_1_v0687_pokemon_malamarEntry | Mega_evolution_level_1_v0719_pokemon_diancieEntry | Mega_evolution_level_2Entry | Mega_evolution_level_2_v0015_pokemon_beedrillEntry | Mega_evolution_level_2_v0018_pokemon_pidgeotEntry | Mega_evolution_level_2_v0071_pokemon_victreebelEntry | Mega_evolution_level_2_v0080_pokemon_slowbroEntry | Mega_evolution_level_2_v0130_pokemon_gyaradosEntry | Mega_evolution_level_2_v0149_pokemon_dragoniteEntry | Mega_evolution_level_2_v0150_pokemon_mewtwoEntry | Mega_evolution_level_2_v0229_pokemon_houndoomEntry | Mega_evolution_level_2_v0248_pokemon_tyranitarEntry | Mega_evolution_level_2_v0302_pokemon_sableyeEntry | Mega_evolution_level_2_v0308_pokemon_medichamEntry | Mega_evolution_level_2_v0310_pokemon_manectricEntry | Mega_evolution_level_2_v0334_pokemon_altariaEntry | Mega_evolution_level_2_v0354_pokemon_banetteEntry | Mega_evolution_level_2_v0373_pokemon_salamenceEntry | Mega_evolution_level_2_v0376_pokemon_metagrossEntry | Mega_evolution_level_2_v0380_pokemon_latiasEntry | Mega_evolution_level_2_v0381_pokemon_latiosEntry | Mega_evolution_level_2_v0382_pokemon_kyogreEntry | Mega_evolution_level_2_v0383_pokemon_groudonEntry | Mega_evolution_level_2_v0384_pokemon_rayquazaEntry | Mega_evolution_level_2_v0445_pokemon_garchompEntry | Mega_evolution_level_2_v0687_pokemon_malamarEntry | Mega_evolution_level_2_v0719_pokemon_diancieEntry | Mega_evolution_level_3Entry | Mega_evolution_level_3_v0015_pokemon_beedrillEntry | Mega_evolution_level_3_v0018_pokemon_pidgeotEntry | Mega_evolution_level_3_v0071_pokemon_victreebelEntry | Mega_evolution_level_3_v0080_pokemon_slowbroEntry | Mega_evolution_level_3_v0130_pokemon_gyaradosEntry | Mega_evolution_level_3_v0149_pokemon_dragoniteEntry | Mega_evolution_level_3_v0150_pokemon_mewtwoEntry | Mega_evolution_level_3_v0229_pokemon_houndoomEntry | Mega_evolution_level_3_v0248_pokemon_tyranitarEntry | Mega_evolution_level_3_v0302_pokemon_sableyeEntry | Mega_evolution_level_3_v0308_pokemon_medichamEntry | Mega_evolution_level_3_v0310_pokemon_manectricEntry | Mega_evolution_level_3_v0334_pokemon_altariaEntry | Mega_evolution_level_3_v0354_pokemon_banetteEntry | Mega_evolution_level_3_v0373_pokemon_salamenceEntry | Mega_evolution_level_3_v0376_pokemon_metagrossEntry | Mega_evolution_level_3_v0380_pokemon_latiasEntry | Mega_evolution_level_3_v0381_pokemon_latiosEntry | Mega_evolution_level_3_v0382_pokemon_kyogreEntry | Mega_evolution_level_3_v0383_pokemon_groudonEntry | Mega_evolution_level_3_v0384_pokemon_rayquazaEntry | Mega_evolution_level_3_v0445_pokemon_garchompEntry | Mega_evolution_level_3_v0687_pokemon_malamarEntry | Mega_evolution_level_3_v0719_pokemon_diancieEntry | Mega_evolution_level_4_v0071_pokemon_victreebelEntry | Mega_evolution_level_4_v0149_pokemon_dragoniteEntry | Mega_evolution_level_4_v0687_pokemon_malamarEntry | Mega_evo_settingsEntry | Monodepth_settingsEntry | Mp_shared_settingsEntry | Natural_art_day_night_feature_settingsEntry | Nearby_pokemon_settingsEntry | Neutral_avatar_settingsEntry | Onboarding_settingsEntry | Optimizations_settingsEntry | Party_play_dark_launch_settingsEntry | Party_play_general_settingsEntry | Party_play_iap_boosts_settingsEntry | Party_recommendation_settingsEntry | Photo_settingsEntry | Photo_set_alolaEntry | Photo_set_ancient_fossilsEntry | Photo_set_battle_pokemonEntry | Photo_set_bundle_of_joyEntry | Photo_set_busy_cityEntry | Photo_set_clawed_cutiesEntry | Photo_set_cute_pokemon_pinkEntry | Photo_set_fall_vibesEntry | Photo_set_feathered_friendsEntry | Photo_set_feathered_friends_largeEntry | Photo_set_feeling_fancyEntry | Photo_set_furry_friendsEntry | Photo_set_furry_friends_largeEntry | Photo_set_graceful_flyersEntry | Photo_set_hisuiEntry | Photo_set_hoennEntry | Photo_set_johtoEntry | Photo_set_just_lovelyEntry | Photo_set_kalosEntry | Photo_set_kantoEntry | Photo_set_little_chonkersEntry | Photo_set_mountain_passEntry | Photo_set_museum_fossilsEntry | Photo_set_paldeaEntry | Photo_set_playful_pals_largeEntry | Photo_set_relaxing_gardenEntry | Photo_set_safari_trekEntry | Photo_set_sandy_shorelineEntry | Photo_set_shadows_of_nightEntry | Photo_set_sinnohEntry | Photo_set_small_and_cuteEntry | Photo_set_small_cute_pokemonEntry | Photo_set_small_cute_pokemon_pikachu_and_eeveeEntry | Photo_set_small_cute_pokemon_pinkEntry | Photo_set_small_flower_pokemonEntry | Photo_set_small_flower_pokemon_mediumEntry | Photo_set_small_flower_pokemon_seedsEntry | Photo_set_small_water_pokemonEntry | Photo_set_spring_vibesEntry | Photo_set_startersEntry | Photo_set_summer_vibesEntry | Photo_set_tiny_tikesEntry | Photo_set_unovaEntry | Photo_set_wings_pokemonEntry | Photo_set_winter_vibesEntry | Player_bonus_system_settingsEntry | Player_level_settingsEntry | Pokeball_throw_property_settingsEntry | Pokecoin_purchase_display_gmtEntry | Pokedexv2_feature_flagsEntry | Pokedex_categories_settingsEntry | Pokedex_size_stats_system_settingsEntry | Pokedex_v2_settingsEntry | Popup_control_settingsEntry | Postcard_collection_settingsEntry | Power_up_pokestop_shared_settingsEntry | Predict_charge_move_on_submit_roll_back_code_gateEntry | Primal_evo_settingsEntry | Ptc_oauth_settingsEntry | Push_gateway_multi_action_code_gateEntry | Quest_first_catch_of_the_dayEntry | Quest_first_pokestop_of_the_dayEntry | Quest_first_route_of_the_dayEntry | Quick_invite_settings_raidEntry | Raid_client_settingsEntry | Raid_entry_cost_settingsEntry | Raid_lobby_counter_settingsEntry | Recommended_search_appraisal_iv_highEntry | Recommended_search_appraisal_iv_lowEntry | Recommended_search_appraisal_label_evolve_megaEntry | Recommended_search_badge_kanto_regionEntry | Recommended_search_filter_label_evolvableEntry | Recommended_search_filter_label_hatchedEntry | Recommended_search_filter_label_legendaryEntry | Recommended_search_filter_label_shinyEntry | Recommended_search_filter_label_tradedEntry | Recommended_search_pokemon_type_normalEntry | Referral_settingsEntry | Remote_raid_limit_settingsEntry | Remote_trade_settingsEntry | Routes_nearby_notif_settingsEntry | Routes_party_play_interop_settingsEntry | Route_badge_settingsEntry | Route_creation_settingsEntry | Route_discovery_settingsEntry | Route_pin_settingsEntry | Route_play_settingsEntry | Route_stamp_category_defaultEntry | Settings_rules_allow_asusasus_i006dEntry | Settings_rules_allow_googlepixel6Entry | Settings_rules_allow_googlepixel6aEntry | Settings_rules_allow_googlepixel6proEntry | Settings_rules_allow_googlepixel7Entry | Settings_rules_allow_googlepixel7aEntry | Settings_rules_allow_googlepixel7proEntry | Settings_rules_allow_googlepixel8Entry | Settings_rules_allow_googlepixel8proEntry | Settings_rules_allow_googlepixel9Entry | Settings_rules_allow_googlepixel9proEntry | Settings_rules_allow_googlepixelprofoldEntry | Settings_rules_allow_googlepixelproxlEntry | Settings_rules_allow_lgelm_v600Entry | Settings_rules_allow_motorolamotorolaedge40Entry | Settings_rules_allow_onepluscph2399Entry | Settings_rules_allow_onepluscph2449Entry | Settings_rules_allow_oneplusdn2103Entry | Settings_rules_allow_onepluskb2003Entry | Settings_rules_allow_oneplusle2113Entry | Settings_rules_allow_oneplusle2123Entry | Settings_rules_allow_oneplusne2213Entry | Settings_rules_allow_oneplus_cph2413Entry | Settings_rules_allow_oneplus_cph2415Entry | Settings_rules_allow_oneplus_cph2417Entry | Settings_rules_allow_oneplus_cph2447Entry | Settings_rules_allow_oneplus_cph2451Entry | Settings_rules_allow_oneplus_cph2573Entry | Settings_rules_allow_oneplus_cph2581Entry | Settings_rules_allow_oneplus_cph2583Entry | Settings_rules_allow_oneplus_cph2585Entry | Settings_rules_allow_oneplus_cph2609Entry | Settings_rules_allow_oneplus_le2115Entry | Settings_rules_allow_oneplus_le2120Entry | Settings_rules_allow_oneplus_le2121Entry | Settings_rules_allow_oneplus_le2123Entry | Settings_rules_allow_oneplus_le2125Entry | Settings_rules_allow_oneplus_le2127Entry | Settings_rules_allow_oneplus_ne2210Entry | Settings_rules_allow_oneplus_ne2211Entry | Settings_rules_allow_oneplus_ne2213Entry | Settings_rules_allow_oneplus_ne2215Entry | Settings_rules_allow_oneplus_ne2217Entry | Settings_rules_allow_oneplus_phb110Entry | Settings_rules_allow_oneplus_pjd110Entry | Settings_rules_allow_oppocph2359Entry | Settings_rules_allow_samsungscg09Entry | Settings_rules_allow_samsungscg13Entry | Settings_rules_allow_samsungsc_51aEntry | Settings_rules_allow_samsungsc_51bEntry | Settings_rules_allow_samsungsc_51cEntry | Settings_rules_allow_samsungsc_51dEntry | Settings_rules_allow_samsungsc_52cEntry | Settings_rules_allow_samsungsc_52dEntry | Settings_rules_allow_samsungsc_a528bEntry | Settings_rules_allow_samsungsm_f711bEntry | Settings_rules_allow_samsungsm_f711nEntry | Settings_rules_allow_samsungsm_f711uEntry | Settings_rules_allow_samsungsm_f721bEntry | Settings_rules_allow_samsungsm_f721nEntry | Settings_rules_allow_samsungsm_f721uEntry | Settings_rules_allow_samsungsm_f731bEntry | Settings_rules_allow_samsungsm_f731nEntry | Settings_rules_allow_samsungsm_f731uEntry | Settings_rules_allow_samsungsm_f926bEntry | Settings_rules_allow_samsungsm_f926nEntry | Settings_rules_allow_samsungsm_f926uEntry | Settings_rules_allow_samsungsm_f936bEntry | Settings_rules_allow_samsungsm_f936nEntry | Settings_rules_allow_samsungsm_f936uEntry | Settings_rules_allow_samsungsm_f946bEntry | Settings_rules_allow_samsungsm_f946nEntry | Settings_rules_allow_samsungsm_f946uEntry | Settings_rules_allow_samsungsm_g780fEntry | Settings_rules_allow_samsungsm_g780gEntry | Settings_rules_allow_samsungsm_g781bEntry | Settings_rules_allow_samsungsm_g781nEntry | Settings_rules_allow_samsungsm_g781uEntry | Settings_rules_allow_samsungsm_g781u1Entry | Settings_rules_allow_samsungsm_g781vEntry | Settings_rules_allow_samsungsm_g781wEntry | Settings_rules_allow_samsungsm_g980fEntry | Settings_rules_allow_samsungsm_g981bEntry | Settings_rules_allow_samsungsm_g981nEntry | Settings_rules_allow_samsungsm_g981uEntry | Settings_rules_allow_samsungsm_g981u1Entry | Settings_rules_allow_samsungsm_g985fEntry | Settings_rules_allow_samsungsm_g986bEntry | Settings_rules_allow_samsungsm_g986nEntry | Settings_rules_allow_samsungsm_g986uEntry | Settings_rules_allow_samsungsm_g986u1Entry | Settings_rules_allow_samsungsm_g988bEntry | Settings_rules_allow_samsungsm_g988nEntry | Settings_rules_allow_samsungsm_g988uEntry | Settings_rules_allow_samsungsm_g990bEntry | Settings_rules_allow_samsungsm_g990b2Entry | Settings_rules_allow_samsungsm_g990eEntry | Settings_rules_allow_samsungsm_g990uEntry | Settings_rules_allow_samsungsm_g990u2Entry | Settings_rules_allow_samsungsm_g990w2Entry | Settings_rules_allow_samsungsm_g9910Entry | Settings_rules_allow_samsungsm_g991bEntry | Settings_rules_allow_samsungsm_g991nEntry | Settings_rules_allow_samsungsm_g991uEntry | Settings_rules_allow_samsungsm_g991u1Entry | Settings_rules_allow_samsungsm_g991wEntry | Settings_rules_allow_samsungsm_g996bEntry | Settings_rules_allow_samsungsm_g996nEntry | Settings_rules_allow_samsungsm_g996uEntry | Settings_rules_allow_samsungsm_g996u1Entry | Settings_rules_allow_samsungsm_g998bEntry | Settings_rules_allow_samsungsm_g998nEntry | Settings_rules_allow_samsungsm_g998uEntry | Settings_rules_allow_samsungsm_g998u1Entry | Settings_rules_allow_samsungsm_n970uEntry | Settings_rules_allow_samsungsm_n980fEntry | Settings_rules_allow_samsungsm_n981bEntry | Settings_rules_allow_samsungsm_n981nEntry | Settings_rules_allow_samsungsm_n981uEntry | Settings_rules_allow_samsungsm_n9860Entry | Settings_rules_allow_samsungsm_n986bEntry | Settings_rules_allow_samsungsm_n986nEntry | Settings_rules_allow_samsungsm_n986uEntry | Settings_rules_allow_samsungsm_n986u1Entry | Settings_rules_allow_samsungsm_s711bEntry | Settings_rules_allow_samsungsm_s711nEntry | Settings_rules_allow_samsungsm_s711uEntry | Settings_rules_allow_samsungsm_s711wEntry | Settings_rules_allow_samsungsm_s901bEntry | Settings_rules_allow_samsungsm_s901eEntry | Settings_rules_allow_samsungsm_s901nEntry | Settings_rules_allow_samsungsm_s901uEntry | Settings_rules_allow_samsungsm_s901u1Entry | Settings_rules_allow_samsungsm_s901wEntry | Settings_rules_allow_samsungsm_s9060Entry | Settings_rules_allow_samsungsm_s906bEntry | Settings_rules_allow_samsungsm_s906eEntry | Settings_rules_allow_samsungsm_s906nEntry | Settings_rules_allow_samsungsm_s906uEntry | Settings_rules_allow_samsungsm_s906u1Entry | Settings_rules_allow_samsungsm_s9080Entry | Settings_rules_allow_samsungsm_s908bEntry | Settings_rules_allow_samsungsm_s908eEntry | Settings_rules_allow_samsungsm_s908nEntry | Settings_rules_allow_samsungsm_s908uEntry | Settings_rules_allow_samsungsm_s908u1Entry | Settings_rules_allow_samsungsm_s908wEntry | Settings_rules_allow_samsungsm_s911bEntry | Settings_rules_allow_samsungsm_s911nEntry | Settings_rules_allow_samsungsm_s911uEntry | Settings_rules_allow_samsungsm_s911u1Entry | Settings_rules_allow_samsungsm_s911wEntry | Settings_rules_allow_samsungsm_s9160Entry | Settings_rules_allow_samsungsm_s916bEntry | Settings_rules_allow_samsungsm_s916nEntry | Settings_rules_allow_samsungsm_s916uEntry | Settings_rules_allow_samsungsm_s916u1Entry | Settings_rules_allow_samsungsm_s9180Entry | Settings_rules_allow_samsungsm_s918bEntry | Settings_rules_allow_samsungsm_s918nEntry | Settings_rules_allow_samsungsm_s918uEntry | Settings_rules_allow_samsungsm_s918u1Entry | Settings_rules_allow_samsungsm_s918wEntry | Settings_rules_allow_samsungsm_s921bEntry | Settings_rules_allow_samsungsm_s921nEntry | Settings_rules_allow_samsungsm_s9260Entry | Settings_rules_allow_samsungsm_s926uEntry | Settings_rules_allow_samsungsm_s9280Entry | Settings_rules_allow_samsungsm_s928bEntry | Settings_rules_allow_samsungsm_s928nEntry | Settings_rules_allow_samsungsm_s928uEntry | Settings_rules_allow_samsungsm_s928u1Entry | Settings_rules_allow_sharpsh_51bEntry | Settings_rules_allow_sonysog02Entry | Settings_rules_allow_sonysog05Entry | Settings_rules_allow_sonysog06Entry | Settings_rules_allow_sonyso_51aEntry | Settings_rules_allow_sonyso_51bEntry | Settings_rules_allow_sonyso_51cEntry | Settings_rules_allow_sonyso_52aEntry | Settings_rules_allow_sonyso_53bEntry | Settings_rules_allow_sonyso_54cEntry | Settings_rules_allow_sony_a002soEntry | Settings_rules_allow_sony_a101soEntry | Settings_rules_allow_sony_a103soEntry | Settings_rules_allow_sony_a201soEntry | Settings_rules_allow_sony_so53bEntry | Settings_rules_allow_sony_sog01Entry | Settings_rules_allow_sony_sog03Entry | Settings_rules_allow_sony_xperia_1_iiEntry | Settings_rules_allow_sony_xperia_1_iiiEntry | Settings_rules_allow_sony_xperia_1_ivEntry | Settings_rules_allow_sony_xperia_1_vEntry | Settings_rules_allow_sony_xperia_5_iiEntry | Settings_rules_allow_sony_xperia_5_iiiEntry | Settings_rules_allow_sony_xperia_5_vEntry | Settings_rules_allow_sony_xperia_proEntry | Settings_rules_allow_sony_xperia_proiEntry | Settings_rules_allow_sony_xqaq52Entry | Settings_rules_allow_sony_xqaq62Entry | Settings_rules_allow_sony_xqas42Entry | Settings_rules_allow_sony_xqas52Entry | Settings_rules_allow_sony_xqas62Entry | Settings_rules_allow_sony_xqas72Entry | Settings_rules_allow_sony_xqat42Entry | Settings_rules_allow_sony_xqat51Entry | Settings_rules_allow_sony_xqat52Entry | Settings_rules_allow_sony_xqat72Entry | Settings_rules_allow_sony_xqbc42Entry | Settings_rules_allow_sony_xqbc52Entry | Settings_rules_allow_sony_xqbc62Entry | Settings_rules_allow_sony_xqbc72Entry | Settings_rules_allow_sony_xqbe52Entry | Settings_rules_allow_sony_xqbe62Entry | Settings_rules_allow_sony_xqbe72Entry | Settings_rules_allow_sony_xqbq42Entry | Settings_rules_allow_sony_xqbq52Entry | Settings_rules_allow_sony_xqbq62Entry | Settings_rules_allow_sony_xqbq72Entry | Settings_rules_allow_sony_xqct54Entry | Settings_rules_allow_sony_xqct62Entry | Settings_rules_allow_sony_xqct72Entry | Settings_rules_allow_sony_xq_de44Entry | Settings_rules_allow_sony_xq_dq44Entry | Settings_rules_allow_xiaomi21061110agEntry | Settings_rules_allow_xiaomi2107113sgEntry | Settings_rules_allow_xiaomi21081111rgEntry | Settings_rules_allow_xiaomi21121210gEntry | Settings_rules_allow_xiaomi2201123gEntry | Settings_rules_allow_xiaomi22021211rgEntry | Settings_rules_allow_xiaomi22041216gEntry | Settings_rules_allow_xiaomi22081212ugEntry | Settings_rules_allow_xiaomi23049pcd8gEntry | Settings_rules_allow_xiaomim2007j3sgEntry | Settings_rules_allow_xiaomim2007j3syEntry | Settings_rules_allow_xiaomim2012k11agEntry | Settings_rules_allow_xiaomim2102k1acEntry | Settings_rules_androidEntry | Settings_rules_android_14_onwardEntry | Settings_rules_baseEntry | Settings_rules_deny_googlepixel10Entry | Settings_rules_deny_googlepixel10proEntry | Settings_rules_deny_googlepixel10profoldEntry | Settings_rules_deny_googlepixel10proxlEntry | Settings_rules_deny_ipad4Entry | Settings_rules_deny_ipad5Entry | Settings_rules_deny_ipad6Entry | Settings_rules_deny_iphone6Entry | Settings_rules_deny_iphone7Entry | Settings_rules_deny_iphoneseEntry | Shared_fusion_settingsEntry | Shared_move_settingsEntry | Soft_sfida_settingsEntry | Sourdough_move_mapping_settingsEntry | Special_egg_settingsEntry | Sponsored_geofence_gift_settingsEntry | Stamp_collection_settingsEntry | Stamp_collection_snapshot_enabled_code_gateEntry | Stationed_pokemon_power_boost_table_settingsEntry | Sticker_2023collab_1Entry | Sticker_2023collab_2Entry | Sticker_2023collab_3Entry | Sticker_2023collab_4Entry | Sticker_6anniv_1Entry | Sticker_6anniv_2Entry | Sticker_6anniv_3Entry | Sticker_6anniv_4Entry | Sticker_6anniv_5Entry | Sticker_6anniv_6Entry | Sticker_7anniv_1Entry | Sticker_7anniv_2Entry | Sticker_7anniv_3Entry | Sticker_7anniv_4Entry | Sticker_7anniv_5Entry | Sticker_8anniv_1Entry | Sticker_8anniv_2Entry | Sticker_8anniv_3Entry | Sticker_8anniv_4Entry | Sticker_9anniv_1Entry | Sticker_9anniv_2Entry | Sticker_9anniv_3Entry | Sticker_alolaishi_1Entry | Sticker_alolaishi_2Entry | Sticker_alolaishi_3Entry | Sticker_alolaishi_4Entry | Sticker_aprilfool2023_1Entry | Sticker_aprilfool2023_2Entry | Sticker_audinoEntry | Sticker_bellsproutcd_1Entry | Sticker_bellsproutcd_2Entry | Sticker_bellsproutcd_3Entry | Sticker_bellsproutcd_4Entry | Sticker_bidoofday_1Entry | Sticker_bidoofday_2Entry | Sticker_bidoofday_3Entry | Sticker_bounsweetcd2024_1Entry | Sticker_bounsweetcd2024_2Entry | Sticker_bounsweetcd2024_3Entry | Sticker_bounsweetcd2024_4Entry | Sticker_breadkorea_001Entry | Sticker_breadkorea_002Entry | Sticker_breadkorea_003Entry | Sticker_breadkorea_004Entry | Sticker_breadkorea_005Entry | Sticker_breadkorea_006Entry | Sticker_chanseycd_1Entry | Sticker_chanseycd_2Entry | Sticker_chanseycd_3Entry | Sticker_chanseycd_4Entry | Sticker_charizard_1Entry | Sticker_charizard_2Entry | Sticker_charizard_3Entry | Sticker_chespin_1Entry | Sticker_chespin_2Entry | Sticker_chespin_3Entry | Sticker_chespin_4Entry | Sticker_cityspotlightEntry | Sticker_concierge_eeveeEntry | Sticker_concierge_psyduckEntry | Sticker_concierge_sealeoEntry | Sticker_concierge_shinxEntry | Sticker_deino_1Entry | Sticker_deino_2Entry | Sticker_deino_3Entry | Sticker_deino_4Entry | Sticker_diademuertos2023_1Entry | Sticker_diademuertos2023_2Entry | Sticker_diademuertos2023_3Entry | Sticker_diademuertos2023_4Entry | Sticker_diamondpearlchimcharEntry | Sticker_diamondpearldialgaEntry | Sticker_diamondpearllucarioEntry | Sticker_diamondpearlpalkiaEntry | Sticker_diamondpearlpiplupEntry | Sticker_diamondpearlturtwigEntry | Sticker_ditto_1Entry | Sticker_ditto_2Entry | Sticker_ditto_3Entry | Sticker_ditto_4Entry | Sticker_ditto_5Entry | Sticker_ditto_6Entry | Sticker_eeveefriends_1Entry | Sticker_eeveefriends_2Entry | Sticker_eeveefriends_3Entry | Sticker_eeveefriends_4Entry | Sticker_eeveefriends_5Entry | Sticker_eeveefriends_6Entry | Sticker_eeveefriends_7Entry | Sticker_eeveefriends_8Entry | Sticker_eeveefriends_9Entry | Sticker_eternatusEntry | Sticker_fall_2023_1Entry | Sticker_fall_2023_2Entry | Sticker_fall_2023_3Entry | Sticker_fall_2023_4Entry | Sticker_fall_2023_5Entry | Sticker_fall_2023_6Entry | Sticker_fall_2024_1Entry | Sticker_fall_2024_2Entry | Sticker_fall_2024_3Entry | Sticker_fall_2024_4Entry | Sticker_fall_2024_5Entry | Sticker_fall_2024_6Entry | Sticker_fall_2025_1Entry | Sticker_fall_2025_2Entry | Sticker_fall_2025_3Entry | Sticker_fall_2025_4Entry | Sticker_fall_sawsbuckEntry | Sticker_fall_shroomishEntry | Sticker_fall_skwovetEntry | Sticker_fall_teddiursaEntry | Sticker_fall_trevenantEntry | Sticker_fall_vulpixEntry | Sticker_fennekin_1Entry | Sticker_fennekin_2Entry | Sticker_fennekin_3Entry | Sticker_fennekin_4Entry | Sticker_festivaloflight_morelullEntry | Sticker_festivaloflight_shiinoticEntry | Sticker_festivalofthelights21_v1Entry | Sticker_festivalofthelights21_v2Entry | Sticker_festivalofthelights21_v3Entry | Sticker_festivalofthelights21_v4Entry | Sticker_flabebe_1Entry | Sticker_flabebe_2Entry | Sticker_flair_heart_1Entry | Sticker_flair_heart_2Entry | Sticker_flair_heart_3Entry | Sticker_flair_heart_4Entry | Sticker_flair_heart_5Entry | Sticker_flair_star_1Entry | Sticker_flair_star_2Entry | Sticker_flair_star_3Entry | Sticker_flair_star_4Entry | Sticker_flair_star_5Entry | Sticker_flair_star_6Entry | Sticker_flair_star_7Entry | Sticker_formulaekorea_pikachuEntry | Sticker_fossilmuseum_1Entry | Sticker_fossilmuseum_2Entry | Sticker_froakie_1Entry | Sticker_froakie_2Entry | Sticker_froakie_3Entry | Sticker_froakie_4Entry | Sticker_funawari_04_312Entry | Sticker_funawari_05_312Entry | Sticker_funawari_06_312Entry | Sticker_funawari_22_312Entry | Sticker_funwari_02_0608Entry | Sticker_funwari_10Entry | Sticker_funwari_11_thankuEntry | Sticker_funwari_12_02Entry | Sticker_funwari_18Entry | Sticker_funwari_20Entry | Sticker_funwari_35Entry | Sticker_funwari_pidgey_18Entry | Sticker_furfrouheart_1Entry | Sticker_furfrouheart_2Entry | Sticker_galarianzigzagoon_1Entry | Sticker_galarianzigzagoon_2Entry | Sticker_galarianzigzagoon_3Entry | Sticker_galarianzigzagoon_4Entry | Sticker_giftthankyouEntry | Sticker_gimmighoul_1Entry | Sticker_gimmighoul_2Entry | Sticker_gimmighoul_3Entry | Sticker_gimmighoul_4Entry | Sticker_gimmighoul_5Entry | Sticker_goomycd_1Entry | Sticker_goomycd_2Entry | Sticker_goomycd_3Entry | Sticker_goomycd_4Entry | Sticker_gotour2021Entry | Sticker_gotour2022_1Entry | Sticker_gotour2022_2Entry | Sticker_gotour2022_3Entry | Sticker_gotour2022_4Entry | Sticker_gotour2022_chikoritaEntry | Sticker_gotour2022_cyndaquilEntry | Sticker_gotour2022_hoohEntry | Sticker_gotour2022_lugiaEntry | Sticker_gotour2022_togepiEntry | Sticker_gotour2022_totodileEntry | Sticker_gotour2025_badgeEntry | Sticker_gotour2025_kyuremblackEntry | Sticker_gotour2025_kyuremwhiteEntry | Sticker_gotour2025_reshiramEntry | Sticker_gotour2025_rzEntry | Sticker_gotour2025_zekromEntry | Sticker_gotourhoenn_1Entry | Sticker_gotourhoenn_2Entry | Sticker_gotourhoenn_3Entry | Sticker_gotourhoenn_4Entry | Sticker_gotourhoenn_5Entry | Sticker_gotourhoenn_6Entry | Sticker_gowa2025_01Entry | Sticker_gowa2025_02Entry | Sticker_gowa2025_03Entry | Sticker_gowa2025_04Entry | Sticker_gowa2025_05Entry | Sticker_grubbin_1Entry | Sticker_grubbin_2Entry | Sticker_grubbin_3Entry | Sticker_grubbin_4Entry | Sticker_halloween2022_gengarEntry | Sticker_halloween2022_pumpkabooEntry | Sticker_halloween2022_vulpixEntry | Sticker_halloween2025_noibatEntry | Sticker_halloween2025_teddiursaEntry | Sticker_halloween21_fuwaraidEntry | Sticker_halloween21_ghostpikaEntry | Sticker_halloween21_pikachuEntry | Sticker_halloween21_pochamaEntry | Sticker_halloween23_gengarEntry | Sticker_halloween23_greavardEntry | Sticker_halloween23_misdreavusEntry | Sticker_halloween23_phantumpEntry | Sticker_halloween24_froakieEntry | Sticker_halloween24_rowletEntry | Sticker_halloween_bulbEntry | Sticker_halloween_charmEntry | Sticker_halloween_gengarmdEntry | Sticker_halloween_pikaEntry | Sticker_halloween_sableyemdEntry | Sticker_halloween_squEntry | Sticker_haru_cherrimEntry | Sticker_haru_dredearpikaEntry | Sticker_haru_kireihanaEntry | Sticker_haru_lalantesEntry | Sticker_haru_mebukishikijikEntry | Sticker_haru_mitsuhoneyEntry | Sticker_hawlucha_01Entry | Sticker_hisuidisco_arcanineEntry | Sticker_hisuidisco_braviaryEntry | Sticker_hisuidisco_growlitheEntry | Sticker_holidayevent21_1Entry | Sticker_holidayevent21_2Entry | Sticker_holidayevent21_3Entry | Sticker_holidayevent21_4Entry | Sticker_holidayevent22_cubchooEntry | Sticker_holidayevent22_scatterbugEntry | Sticker_holidayevent22_snowpikaEntry | Sticker_holidayevent22_vulpixEntry | Sticker_holidayevent23_cetoddleEntry | Sticker_holidayevent23_cryogonalEntry | Sticker_holidayevent23_psyduckEntry | Sticker_holidayevent23_seelEntry | Sticker_holidayevent23_vanillishEntry | Sticker_holographic_chanceyEntry | Sticker_holographic_charmeleonEntry | Sticker_holographic_ivysaurEntry | Sticker_holographic_meltanEntry | Sticker_holographic_pikachuEntry | Sticker_holographic_wartortleEntry | Sticker_hoppip_1Entry | Sticker_hoppip_2Entry | Sticker_hoppip_3Entry | Sticker_hoppip_4Entry | Sticker_indonesiajourney_1Entry | Sticker_indonesiajourney_2Entry | Sticker_iplpartnership_1Entry | Sticker_iplpartnership_2Entry | Sticker_junecd2023_axew_1Entry | Sticker_junecd2023_axew_2Entry | Sticker_junecd2023_axew_3Entry | Sticker_junecd2023_axew_4Entry | Sticker_koreatown_1Entry | Sticker_koreatown_2Entry | Sticker_koreatown_3Entry | Sticker_kr_dittoEntry | Sticker_kurtasaree_1Entry | Sticker_kurtasaree_2Entry | Sticker_kurtasaree_3Entry | Sticker_kurtasaree_4Entry | Sticker_kurtasaree_5Entry | Sticker_kurtasaree_6Entry | Sticker_lentillaunch_cameraEntry | Sticker_littencd_1Entry | Sticker_littencd_2Entry | Sticker_littencd_3Entry | Sticker_littencd_4Entry | Sticker_litwick_1Entry | Sticker_litwick_2Entry | Sticker_litwick_3Entry | Sticker_litwick_4Entry | Sticker_luvdiscEntry | Sticker_mankey_1Entry | Sticker_mankey_2Entry | Sticker_mankey_3Entry | Sticker_mankey_4Entry | Sticker_megaevolution_paris_1Entry | Sticker_megaevolution_paris_2Entry | Sticker_megaevolution_paris_3Entry | Sticker_mewtwoEntry | Sticker_mew_laughEntry | Sticker_mukkuru_cd_1Entry | Sticker_mukkuru_cd_2Entry | Sticker_mukkuru_cd_3Entry | Sticker_mukkuru_cd_4Entry | Sticker_nagano_06_312Entry | Sticker_nagano_08Entry | Sticker_nagano_11Entry | Sticker_nagano_15Entry | Sticker_nagano_15_312Entry | Sticker_nagano_bathEntry | Sticker_nagano_marillEntry | Sticker_nagano_yadonEntry | Sticker_newpokemon2_1Entry | Sticker_newpokemon2_15Entry | Sticker_newpokemon2_33Entry | Sticker_newpokemon_04Entry | Sticker_newpokemon_20Entry | Sticker_newpokemon_37Entry | Sticker_newteamrascalEntry | Sticker_newteamrascalpikachu_26Entry | Sticker_newyears22_1Entry | Sticker_newyears22_2Entry | Sticker_newyears22_3Entry | Sticker_newyears22_4Entry | Sticker_newyears23_1Entry | Sticker_newyears23_2Entry | Sticker_newyears23_3Entry | Sticker_newyears23_4Entry | Sticker_nia_logoEntry | Sticker_nigiyaka_08_0508_312Entry | Sticker_nigiyaka_16_0508_312Entry | Sticker_noibat_cd_1Entry | Sticker_noibat_cd_2Entry | Sticker_noibat_cd_3Entry | Sticker_noibat_cd_4Entry | Sticker_nyarth_38Entry | Sticker_observatory_01Entry | Sticker_observatory_02Entry | Sticker_papelpicadotgr_1Entry | Sticker_papelpicadotgr_2Entry | Sticker_papelpicadotgr_3Entry | Sticker_papelpicadotgr_4Entry | Sticker_papelpicadotgr_5Entry | Sticker_pgofest2021_galarianzigzagoonEntry | Sticker_pgofest2021_logoEntry | Sticker_pgofest2021_meloetta_1Entry | Sticker_pgofest2021_meloetta_2Entry | Sticker_pgofest2021_ponytaEntry | Sticker_pgofest2021_shirticonEntry | Sticker_pgofest2022_denjyumokuEntry | Sticker_pgofest2022_groudonEntry | Sticker_pgofest2022_kibagoEntry | Sticker_pgofest2022_kyogreEntry | Sticker_pgofest2022_massivoonEntry | Sticker_pgofest2022_pheroacheEntry | Sticker_pgofest2022_pikachuEntry | Sticker_pgofest2022_pochamaEntry | Sticker_pgofest2022_shayminEntry | Sticker_pgofest2022_shayminskyEntry | Sticker_pgofest2022_uturoidEntry | Sticker_pgo_fest_2017Entry | Sticker_pgo_fest_2018Entry | Sticker_pgo_fest_2019Entry | Sticker_pgo_fest_2020Entry | Sticker_pgo_fest_2020_logoEntry | Sticker_pgo_fest_2022Entry | Sticker_pgo_fest_2022_logoEntry | Sticker_pgo_fest_2023Entry | Sticker_pgo_fest_2023_1Entry | Sticker_pgo_fest_2023_2Entry | Sticker_pgo_fest_2023_3Entry | Sticker_pgo_fest_2023_4Entry | Sticker_pgo_fest_2023_5Entry | Sticker_pgo_fest_2023_6Entry | Sticker_pgo_fest_2023_logoEntry | Sticker_pgo_fest_2024Entry | Sticker_pgo_fest_2024_1Entry | Sticker_pgo_fest_2024_2Entry | Sticker_pgo_fest_2024_3Entry | Sticker_pgo_fest_2024_4Entry | Sticker_pgo_fest_2024_5Entry | Sticker_pgo_fest_2024_6Entry | Sticker_pgo_fest_2024_logoEntry | Sticker_pgo_fest_2025Entry | Sticker_pgo_fest_2025_1Entry | Sticker_pgo_fest_2025_2Entry | Sticker_pgo_fest_2025_3Entry | Sticker_pgo_fest_2025_logoEntry | Sticker_pgo_fest_victini_05Entry | Sticker_pgo_tour_2024Entry | Sticker_pgo_tour_2024_1Entry | Sticker_pgo_tour_2024_2Entry | Sticker_pgo_tour_2024_3Entry | Sticker_pgo_tour_2024_4Entry | Sticker_pgo_tour_2024_5Entry | Sticker_pgo_tour_2024_logoEntry | Sticker_pgo_tour_2026Entry | Sticker_pgo_tour_2026_1Entry | Sticker_pgo_tour_2026_2Entry | Sticker_pgo_tour_2026_3Entry | Sticker_pgo_tour_2026_logoEntry | Sticker_pgo_wildarea_2024Entry | Sticker_pgo_wildarea_2024_1Entry | Sticker_pgo_wildarea_2024_2Entry | Sticker_pgo_wildarea_2024_3Entry | Sticker_pgo_wildarea_2024_4Entry | Sticker_pgo_wildarea_2024_logoEntry | Sticker_pikaairadventure_1Entry | Sticker_pikaairadventure_2Entry | Sticker_pikaairadventure_3Entry | Sticker_pikaairjeju_pikachuEntry | Sticker_pikaairsingapore_laprasEntry | Sticker_pikaairsingapore_pikachuEntry | Sticker_pikaairtaiwan_pikachuEntry | Sticker_pikaairtaiwan_snorlaxEntry | Sticker_pikachu_jolEntry | Sticker_pika_14_thankyouEntry | Sticker_pokemonchatpals2_04Entry | Sticker_pokemonchatpals2_40Entry | Sticker_pokopia_bulbasaurEntry | Sticker_pokopia_pikachuEntry | Sticker_pokopia_snorlaxEntry | Sticker_pokopia_tangrowthEntry | Sticker_poliwag_1Entry | Sticker_poliwag_2Entry | Sticker_poliwag_3Entry | Sticker_poliwag_4Entry | Sticker_ponyta_1Entry | Sticker_ponyta_2Entry | Sticker_ponyta_3Entry | Sticker_ponyta_4Entry | Sticker_poppliocd_1Entry | Sticker_poppliocd_2Entry | Sticker_poppliocd_3Entry | Sticker_poppliocd_4Entry | Sticker_projectguitar_04Entry | Sticker_projectguitar_07Entry | Sticker_projectguitar_13Entry | Sticker_projectguitar_25Entry | Sticker_projectguitar_froakieEntry | Sticker_psychicspec21_inkayEntry | Sticker_psychicspec21_inkay2Entry | Sticker_roggenrola_cd_1Entry | Sticker_roggenrola_cd_2Entry | Sticker_roggenrola_cd_3Entry | Sticker_roggenrola_cd_4Entry | Sticker_rowletcd_1Entry | Sticker_rowletcd_2Entry | Sticker_rowletcd_3Entry | Sticker_rowletcd_4Entry | Sticker_sandshrew_1Entry | Sticker_sandshrew_2Entry | Sticker_sandshrew_3Entry | Sticker_sandshrew_4Entry | Sticker_secretsofthejungle_1Entry | Sticker_secretsofthejungle_4Entry | Sticker_secretsofthejungle_5Entry | Sticker_secretsofthejungle_6Entry | Sticker_secretsofthejungle_7Entry | Sticker_secretsofthejungle_8Entry | Sticker_secretsofthejungle_9Entry | Sticker_sewaddlecd_1Entry | Sticker_sewaddlecd_2Entry | Sticker_sewaddlecd_3Entry | Sticker_sewaddlecd_4Entry | Sticker_shelmet_karrablast_1Entry | Sticker_shelmet_karrablast_2Entry | Sticker_shelmet_karrablast_3Entry | Sticker_sleep_1Entry | Sticker_sleep_2Entry | Sticker_sleep_3Entry | Sticker_sleep_4Entry | Sticker_sleep_5Entry | Sticker_sleep_6Entry | Sticker_sleep_7Entry | Sticker_slowpoke_1Entry | Sticker_slowpoke_2Entry | Sticker_slowpoke_3Entry | Sticker_slowpoke_4Entry | Sticker_spheal_1Entry | Sticker_spheal_2Entry | Sticker_spheal_3Entry | Sticker_spheal_4Entry | Sticker_sprigatito_1Entry | Sticker_sprigatito_2Entry | Sticker_sprigatito_3Entry | Sticker_sprigatito_4Entry | Sticker_spring_2024_1Entry | Sticker_spring_2024_2Entry | Sticker_spring_2024_3Entry | Sticker_spring_2024_4Entry | Sticker_spring_2024_5Entry | Sticker_spring_2024_6Entry | Sticker_spring_2025_1Entry | Sticker_spring_2025_2Entry | Sticker_spring_2025_3Entry | Sticker_spring_2025_4Entry | Sticker_spring_2026_1Entry | Sticker_spring_2026_2Entry | Sticker_spring_2026_3Entry | Sticker_spring_2026_4Entry | Sticker_spring_eievuiEntry | Sticker_spring_hapinasEntry | Sticker_spring_mimirolEntry | Sticker_spring_nimphiaEntry | Sticker_spring_pikachuEntry | Sticker_spring_pipitoEntry | Sticker_stufful_1Entry | Sticker_stufful_2Entry | Sticker_stufful_3Entry | Sticker_stufful_4Entry | Sticker_summer_1Entry | Sticker_summer_2Entry | Sticker_summer_2023_blastoiseEntry | Sticker_summer_2023_butterfreeEntry | Sticker_summer_2023_clamperlEntry | Sticker_summer_2023_ledianEntry | Sticker_summer_2023_sawsbuckEntry | Sticker_summer_2023_squirtleEntry | Sticker_summer_2024_1Entry | Sticker_summer_2024_2Entry | Sticker_summer_2024_3Entry | Sticker_summer_2024_4Entry | Sticker_summer_2024_5Entry | Sticker_summer_2024_6Entry | Sticker_summer_2025_1Entry | Sticker_summer_2025_2Entry | Sticker_summer_2025_3Entry | Sticker_summer_2025_4Entry | Sticker_summer_3Entry | Sticker_summer_4Entry | Sticker_summer_5Entry | Sticker_summer_6Entry | Sticker_swordshield21_1Entry | Sticker_swordshield21_2Entry | Sticker_swordshield21_3Entry | Sticker_swordshield21_4Entry | Sticker_swordshield21_5Entry | Sticker_teddiursa_1Entry | Sticker_teddiursa_2Entry | Sticker_teddiursa_3Entry | Sticker_teddiursa_4Entry | Sticker_timburr_1Entry | Sticker_timburr_2Entry | Sticker_timburr_3Entry | Sticker_timburr_4Entry | Sticker_tl_blancheEntry | Sticker_tl_candelaEntry | Sticker_tl_sparkEntry | Sticker_togeticcd2023_1Entry | Sticker_togeticcd2023_2Entry | Sticker_togeticcd2023_3Entry | Sticker_togeticcd2023_4Entry | Sticker_tr_arloEntry | Sticker_tr_cliffEntry | Sticker_tr_sierraEntry | Sticker_tynamocd_1Entry | Sticker_tynamocd_2Entry | Sticker_tynamocd_3Entry | Sticker_tynamocd_4Entry | Sticker_valentine2023_1Entry | Sticker_valentine2023_2Entry | Sticker_valentine2023_3Entry | Sticker_wcs2025_car_groupEntry | Sticker_wcs2025_jigglypuffEntry | Sticker_wcs2025_murkrowEntry | Sticker_wcs2025_pikachuEntry | Sticker_wcs_playEntry | Sticker_willow_bronzeEntry | Sticker_willow_goldEntry | Sticker_willow_silverEntry | Sticker_winter2023_1Entry | Sticker_winter2023_2Entry | Sticker_winter2023_3Entry | Sticker_winter2023_4Entry | Sticker_winter2023_5Entry | Sticker_winter2023_6Entry | Sticker_winter2025_1Entry | Sticker_winter2025_2Entry | Sticker_winter2025_3Entry | Sticker_winter2025_4Entry | Sticker_winter_2024_1Entry | Sticker_winter_2024_2Entry | Sticker_winter_2024_3Entry | Sticker_winter_2024_4Entry | Sticker_winter_2024_5Entry | Sticker_winter_2024_6Entry | Sticker_winter_amauraEntry | Sticker_winter_darumakaEntry | Sticker_winter_glaceonEntry | Sticker_winter_pikachuEntry | Sticker_winter_sawsbuckEntry | Sticker_winter_snoruntEntry | Sticker_woopercd2023_1Entry | Sticker_woopercd2023_2Entry | Sticker_woopercd2023_3Entry | Sticker_woopercd2023_4Entry | Sticker_yadonEntry | Sticker_yurutto_12Entry | Sticker_yurutto_24Entry | Sticker_yurutto_26Entry | Sticker_yurutto_33Entry | Sticker_yurutto_36Entry | Sticker_yurutto_37Entry | Store_refresh_feature_gateEntry | Style_shop_settingsEntry | Survey_settingsEntry | Tappable_settingsEntry | Tappable_settings_breakfastEntry | Tappable_type_hatEntry | Tappable_type_mapleEntry | Tappable_type_pokeballEntry | Temporary_evolution_v0003_pokemon_venusaurEntry | Temporary_evolution_v0006_pokemon_charizardEntry | Temporary_evolution_v0009_pokemon_blastoiseEntry | Temporary_evolution_v0015_pokemon_beedrillEntry | Temporary_evolution_v0018_pokemon_pidgeotEntry | Temporary_evolution_v0065_pokemon_alakazamEntry | Temporary_evolution_v0071_pokemon_victreebelEntry | Temporary_evolution_v0080_pokemon_slowbroEntry | Temporary_evolution_v0094_pokemon_gengarEntry | Temporary_evolution_v0115_pokemon_kangaskhanEntry | Temporary_evolution_v0127_pokemon_pinsirEntry | Temporary_evolution_v0130_pokemon_gyaradosEntry | Temporary_evolution_v0142_pokemon_aerodactylEntry | Temporary_evolution_v0149_pokemon_dragoniteEntry | Temporary_evolution_v0181_pokemon_ampharosEntry | Temporary_evolution_v0208_pokemon_steelixEntry | Temporary_evolution_v0212_pokemon_scizorEntry | Temporary_evolution_v0214_pokemon_heracrossEntry | Temporary_evolution_v0229_pokemon_houndoomEntry | Temporary_evolution_v0248_pokemon_tyranitarEntry | Temporary_evolution_v0254_pokemon_sceptileEntry | Temporary_evolution_v0257_pokemon_blazikenEntry | Temporary_evolution_v0260_pokemon_swampertEntry | Temporary_evolution_v0282_pokemon_gardevoirEntry | Temporary_evolution_v0302_pokemon_sableyeEntry | Temporary_evolution_v0303_pokemon_mawileEntry | Temporary_evolution_v0306_pokemon_aggronEntry | Temporary_evolution_v0308_pokemon_medichamEntry | Temporary_evolution_v0310_pokemon_manectricEntry | Temporary_evolution_v0319_pokemon_sharpedoEntry | Temporary_evolution_v0323_pokemon_cameruptEntry | Temporary_evolution_v0334_pokemon_altariaEntry | Temporary_evolution_v0354_pokemon_banetteEntry | Temporary_evolution_v0359_pokemon_absolEntry | Temporary_evolution_v0362_pokemon_glalieEntry | Temporary_evolution_v0373_pokemon_salamenceEntry | Temporary_evolution_v0376_pokemon_metagrossEntry | Temporary_evolution_v0380_pokemon_latiasEntry | Temporary_evolution_v0381_pokemon_latiosEntry | Temporary_evolution_v0382_pokemon_kyogreEntry | Temporary_evolution_v0383_pokemon_groudonEntry | Temporary_evolution_v0384_pokemon_rayquazaEntry | Temporary_evolution_v0428_pokemon_garchompEntry | Temporary_evolution_v0428_pokemon_lopunnyEntry | Temporary_evolution_v0448_pokemon_lucarioEntry | Temporary_evolution_v0460_pokemon_abomasnowEntry | Temporary_evolution_v0475_pokemon_galladeEntry | Temporary_evolution_v0531_pokemon_audinoEntry | Temporary_evolution_v0687_pokemon_malamarEntry | Temporary_evolution_v0719_pokemon_diancieEntry | Ticket_gifting_settingsEntry | Today_view_settings_v2Entry | Today_view_v3_code_gateEntry | Trainer_personality_easyEntry | Trainer_personality_hardEntry | Trainer_personality_mediumEntry | Tutorials_settingsEntry | Update_tickets_string_feature_gateEntry | Use_extended_settings_for_max_scale_code_gateEntry | Use_gmt_sku_data_code_gateEntry | Verbose_log_combat_settingsEntry | Verbose_log_raid_settingsEntry | Vista_general_settingsEntry | Vnext_animation_configurationEntry | Vnext_battle_configEntry | Vnext_pre_response_input_blocking_behavior_feature_gateEntry | Vs_seeker_client_settingsEntry | Vs_seeker_pokemon_rewards_freeEntry | Vs_seeker_pokemon_rewards_premiumEntry | Vs_seeker_schedule_settingsEntry | Weather_affinity_clearEntry | Weather_affinity_fogEntry | Weather_affinity_overcastEntry | Weather_affinity_partly_cloudyEntry | Weather_affinity_rainyEntry | Weather_affinity_snowEntry | Weather_affinity_windyEntry | Weather_bonus_settingsEntry | Weekly_challenge_general_settingsEntry | Avatar_store_footer_flagsEntry | Avatar_store_subcategory_filtering_flagsEntry | Impression_tracking_settingsEntry | Sticker_category_settingsEntry | Username_suggestion_settingsEntry;
