// Generated from Pokémon GO masterfile — group "friendshipMilestoneSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MinPointsToReachPlus3 {
    pub attack_bonus_percentage: f64,
    pub milestone_xp_reward: u64,
    pub min_points_to_reach: u64,
    pub raid_ball_bonus: u64,
    pub trading_discount: f64,
    pub unlocked_lucky_friend_applicator: bool,
    pub unlocked_trading: [String; 9],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub attack_bonus_percentage: u64,
    pub milestone_xp_reward: u64,
    pub unlocked_trading: [String; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MinPointsToReach {
    pub attack_bonus_percentage: f64,
    pub milestone_xp_reward: u64,
    pub min_points_to_reach: u64,
    pub unlocked_trading: [String; 9],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MinPointsToReachPlus4 {
    pub attack_bonus_percentage: f64,
    pub milestone_xp_reward: u64,
    pub min_points_to_reach: u64,
    pub raid_ball_bonus: u64,
    pub relative_points_to_reach: u64,
    pub trading_discount: f64,
    pub unlocked_lucky_friend_applicator: bool,
    pub unlocked_trading: [String; 9],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FriendshipMilestoneSettings {
    MinPointsToReachPlus3(MinPointsToReachPlus3),
    Misc(Misc),
    MinPointsToReach(MinPointsToReach),
    MinPointsToReachPlus4(MinPointsToReachPlus4),
}
