// Generated from Pokémon GO masterfile — group "partyPlayGeneralSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ComplianceZonesEnabledPlus12 {
    pub compliance_zones_enabled: bool,
    pub creation_to_start_timeout_ms: String,
    pub enabled: bool,
    pub enabled_friend_status_increase: bool,
    pub enable_party_raid_information: bool,
    pub fallback_party_quest_enabled: bool,
    pub friend_requests_enabled: bool,
    pub max_stacked_encounter_reward: u64,
    pub min_player_level: u64,
    pub party_catch_tags_enabled: bool,
    pub party_expiry_duration_ms: String,
    pub party_expiry_warning_minutes: u64,
    pub party_iap_boosts_enabled: bool,
    pub party_new_quest_notification_v2_enabled: bool,
    pub party_quest_encounter_reward_enabled: bool,
    pub pg_delivery_mechanic: String,
    pub restart_party_rejoin_prompt_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DayAndTimeEndTime {
    pub day_of_week: u64,
    pub hour_of_day: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NearEndNotification {
    pub avalible_window_hours: u64,
    pub enabled: bool,
    pub is_local: bool,
    pub time: DayAndTimeEndTime,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RecurringChallengeSchedule {
    pub day_and_time_end_time: DayAndTimeEndTime,
    pub day_and_time_start_time: DayAndTimeEndTime,
    pub max_num_challenge_per_cycle: u64,
    pub near_end_notification: NearEndNotification,
    pub start_notification: NearEndNotification,
    pub timezone_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PartySchedulingSettings {
    pub recurring_challenge_schedule: RecurringChallengeSchedule,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InviteExpirationMsPlus7 {
    pub enabled: bool,
    pub fallback_party_quest_enabled: bool,
    pub friend_requests_enabled: bool,
    pub invite_expiration_ms: u64,
    pub matchmaking_enabled: bool,
    pub max_invites_per_player: u64,
    pub max_party_size: u64,
    pub min_player_level: u64,
    pub notification_milestones: [f64; 4],
    pub party_reward_grace_period_ms: String,
    pub party_scheduling_settings: PartySchedulingSettings,
    pub send_invite_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PartyPlayGeneralSettings {
    ComplianceZonesEnabledPlus12(ComplianceZonesEnabledPlus12),
    InviteExpirationMsPlus7(InviteExpirationMsPlus7),
}
