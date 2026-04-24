export interface MoveSequenceSettings<TemplateID extends string> {
	templateId: TemplateID;
	data: MoveSequenceSettingsData<TemplateID>;
}

export interface MoveSequenceSettingsData<TemplateID extends string> {
	templateId: TemplateID;
	moveSequenceSettings: {
		sequence: Array<"anim attacker atk-move" | "anim attacker damage01" | "anim attacker damageS01" | "anim attacker down01" | "anim defender damageS01" | "background attacker 0.0/0.2/0.5/0.5" | "background attacker 1.0/0.0/0.0/0.8" | "cam CutFromDefender_ATKR_DFND_" | "cam CutToFaceDefender_ATKR_DFND_" | "cam EnterFaceAttacker_ATKR_DFND_" | "cam FortFaint" | "event" | "f2fvfx attacker hydro_pump_double_beam" | "f2fvfx attacker scald_double_beam" | "f2fvfx attacker water_gun_fast_double_beam_emit" | "reset_background attacker 0.0/0.2/0.5/0.5" | "reset_background attacker 1.0/0.0/0.0/0.8" | "reset_silhouette attacker 3.0/3.0/3.0/0.0" | "reset_silhouette defender 1.0/0.0/0.0/0.5" | "scale attacker 0.0/2.5" | "scale attacker 0.0/3" | "scale attacker 0.0/50" | "scale attacker 0.75/2.5" | "scale attacker 1.0/2.5" | "sfx attacker 001-0_pound" | "sfx attacker 002-0_karate_chop" | "sfx attacker 007-0_fire_punch" | "sfx attacker 008-0_ice_punch" | "sfx attacker 009-0_thunder_punch" | "sfx attacker 010-0_scratch" | "sfx attacker 011-0_vice_grip" | "sfx attacker 015-0_cut" | "sfx attacker 016-0_gust_fast" | "sfx attacker 017-0_wing_attack" | "sfx attacker 018-0_darkest_lariat" | "sfx attacker 019-0_fly" | "sfx attacker 022-0_vine_whip" | "sfx attacker 023-0_stomp" | "sfx attacker 024-0_double_kick_fast" | "sfx attacker 028-0_sand_attack" | "sfx attacker 030-0_horn_attack" | "sfx attacker 032-0_horn_drill" | "sfx attacker 033-0_tackle" | "sfx attacker 034-0_body_slam" | "sfx attacker 035-0_wrap" | "sfx attacker 035-1_wrap" | "sfx attacker 036-0_take_down" | "sfx attacker 044-0_bite" | "sfx attacker 051-0_acid" | "sfx attacker 052-0_ember" | "sfx attacker 053-0_flamethrower" | "sfx attacker 054-0_mist" | "sfx attacker 055-0_water_gun" | "sfx attacker 056-0_hydro_pump" | "sfx attacker 057-0_surf" | "sfx attacker 058-0_ice_beam" | "sfx attacker 059-0_blizzard" | "sfx attacker 060-0_psybeam" | "sfx attacker 061-0_bubble_beam" | "sfx attacker 062-0_aurora_beam" | "sfx attacker 063-0_hyper_beam" | "sfx attacker 064-0_peck" | "sfx attacker 065-0_drill_peck" | "sfx attacker 066-0_submission" | "sfx attacker 067-0_low_kick" | "sfx attacker 068-0_counter" | "sfx attacker 072-0_mega_drain" | "sfx attacker 075-0_razor_leaf" | "sfx attacker 076-0_solar_beam" | "sfx attacker 076-1_solar_beam" | "sfx attacker 083-0_fire_spin" | "sfx attacker 084-0_thunder_shock" | "sfx attacker 085-0_thunderbolt" | "sfx attacker 087-0_thunder" | "sfx attacker 088-0_rock_throw" | "sfx attacker 089-0_earthquake" | "sfx attacker 090-0_fissure" | "sfx attacker 091-0_dig" | "sfx attacker 091-1_dig" | "sfx attacker 094-0_psychic" | "sfx attacker 098-0_quick_attack" | "sfx attacker 101-0_night_shade" | "sfx attacker 120-0_self_destruct" | "sfx attacker 122-0_lick" | "sfx attacker 124-0_sludge" | "sfx attacker 125-0_bone_club" | "sfx attacker 126-0_fire_blast" | "sfx attacker 127-0_waterfall" | "sfx attacker 129-0_swift" | "sfx attacker 130-1_skull_bash" | "sfx attacker 136-0_high_jump_kick" | "sfx attacker 141-0_leech_life" | "sfx attacker 143-0_sky_attack" | "sfx attacker 149-0_psywave" | "sfx attacker 150-0_splash" | "sfx attacker 152-0_crabhammer" | "sfx attacker 156-0_rest" | "sfx attacker 157-0_rock_slide" | "sfx attacker 158-0_hyper_fang" | "sfx attacker 161-0_tri_attack" | "sfx attacker 165-0_struggle" | "sfx attacker 170-0_aeroblast" | "sfx attacker 172-0_flame_wheel" | "sfx attacker 181-0_powder_snow" | "sfx attacker 185-0_feint_attack" | "sfx attacker 188-0_sludge_bomb" | "sfx attacker 190-0_octazooka" | "sfx attacker 192-0_zap_cannon" | "sfx attacker 196-0_icy_wind" | "sfx attacker 199-0_lock_on_fast" | "sfx attacker 200-0_outrage" | "sfx attacker 201-0_sandstorm" | "sfx attacker 202-0_giga_drain" | "sfx attacker 204-0_charm" | "sfx attacker 205-0_rollout_fast" | "sfx attacker 209-0_spark" | "sfx attacker 210-0_fury_cutter" | "sfx attacker 216-0_return" | "sfx attacker 217-0_present" | "sfx attacker 218-0_frustration" | "sfx attacker 221-0_sacred_fire" | "sfx attacker 223-0_dynamic_punch" | "sfx attacker 224-0_megahorn" | "sfx attacker 225-0_dragon_breath" | "sfx attacker 231-0_iron_tail" | "sfx attacker 232-0_metal_claw" | "sfx attacker 237-0_hidden_power" | "sfx attacker 238-0_cross_chop" | "sfx attacker 239-0_twister" | "sfx attacker 242-0_crunch" | "sfx attacker 243-0_mirror_coat" | "sfx attacker 246-0_ancient_power" | "sfx attacker 247-0_shadow_ball" | "sfx attacker 248-0_future_sight" | "sfx attacker 257-0_heat_wave" | "sfx attacker 276-0_super_power" | "sfx attacker 280-0_brick_break" | "sfx attacker 281-0_yawn" | "sfx attacker 295-0_luster_purge" | "sfx attacker 296-0_mist_ball" | "sfx attacker 297-0_aqua_step" | "sfx attacker 297-0_feather_dance" | "sfx attacker 299-0_blaze_kick" | "sfx attacker 305-0_poison_fang" | "sfx attacker 306-0_crush_claw" | "sfx attacker 307-0_blast_burn" | "sfx attacker 308-0_hydro_cannon" | "sfx attacker 309-0_meteor_mash" | "sfx attacker 310-0_astonish" | "sfx attacker 311-0_weather_ball" | "sfx attacker 314-0_air_cutter" | "sfx attacker 315-0_overheat" | "sfx attacker 317-0_rock_tomb" | "sfx attacker 318-0_silver_wind" | "sfx attacker 319-0_metal_sound" | "sfx attacker 324-0_signal_beam" | "sfx attacker 325-0_shadow_punch" | "sfx attacker 326-0_extrasensory" | "sfx attacker 328-0_sand_tomb" | "sfx attacker 330-0_muddy_water" | "sfx attacker 331-0_bullet_seed" | "sfx attacker 332-0_aerial_ace" | "sfx attacker 333-0_icicle_spear" | "sfx attacker 337-0_dragon_claw" | "sfx attacker 338-0_frenzy_plant" | "sfx attacker 341-0_mud_shot" | "sfx attacker 344-0_volt_tackle" | "sfx attacker 345-0_magical_leaf_fast" | "sfx attacker 348-0_leaf_blade" | "sfx attacker 350-0_rock_blast" | "sfx attacker 352-0_water_pulse" | "sfx attacker 353-0_doom_desire" | "sfx attacker 354-0_psycho_boost" | "sfx attacker 360-0_gyro_ball" | "sfx attacker 362-0_brine" | "sfx attacker 370-0_close_combat" | "sfx attacker 371-0_payback" | "sfx attacker 379-0_breaking_swipe" | "sfx attacker 384-0_last_resort" | "sfx attacker 385-0_leafage_fast" | "sfx attacker 389-0_sucker_punch" | "sfx attacker 395-0_force_palm_fast" | "sfx attacker 396-0_aura_sphere" | "sfx attacker 398-0_poison_jab" | "sfx attacker 399-0_dark_pulse" | "sfx attacker 400-0_night_slash" | "sfx attacker 401-0_aqua_tail" | "sfx attacker 402-0_seed_bomb" | "sfx attacker 403-0_air_slash" | "sfx attacker 404-0_x_scissor" | "sfx attacker 405-0_bug_buzz" | "sfx attacker 406-0_dragon_pulse" | "sfx attacker 408-0_power_gem" | "sfx attacker 409-0_drain_punch" | "sfx attacker 411-0_focus_blast" | "sfx attacker 412-0_energy_ball" | "sfx attacker 413-0_brave_bird" | "sfx attacker 414-0_earth_power" | "sfx attacker 416-0_giga_impact" | "sfx attacker 418-0_bullet_punch" | "sfx attacker 419-0_avalanche" | "sfx attacker 420-0_ice_shard" | "sfx attacker 421-0_shadow_claw" | "sfx attacker 422-0_thunder_fang_fast" | "sfx attacker 423-0_ice_fang_fast" | "sfx attacker 425-0_shadow_sneak" | "sfx attacker 426-0_mud_bomb" | "sfx attacker 427-0_psycho_cut" | "sfx attacker 429-0_mirror_shot" | "sfx attacker 430-0_flash_cannon" | "sfx attacker 434-0_draco_meteor" | "sfx attacker 435-0_discharge" | "sfx attacker 437-0_leaf_storm" | "sfx attacker 438-0_power_whip" | "sfx attacker 439-0_rock_wrecker" | "sfx attacker 440-0_cross_poison" | "sfx attacker 441-0_gunk_shot" | "sfx attacker 442-0_double_iron_bash" | "sfx attacker 442-0_iron_head" | "sfx attacker 443-0_magnet_bomb" | "sfx attacker 444-0_stone_edge" | "sfx attacker 447-0_grass_knot" | "sfx attacker 450-0_bug_bite" | "sfx attacker 451-0_charge_beam" | "sfx attacker 453-0_aqua_jet" | "sfx attacker 456-0_roar_of_time" | "sfx attacker 460-0_spacial_rend" | "sfx attacker 463-0_magma_storm" | "sfx attacker 465-0_seed_flare" | "sfx attacker 466-0_ominous_wind" | "sfx attacker 467-0_shadow_force" | "sfx attacker 473-0_psyshock" | "sfx attacker 479-0_smack_down" | "sfx attacker 481-0_flame_burst" | "sfx attacker 482-0_sludge_wave" | "sfx attacker 484-0_heavy_slam" | "sfx attacker 485-0_synchronoise" | "sfx attacker 488-0_flame_charge" | "sfx attacker 490-0_low_sweep" | "sfx attacker 491-0_acid_spray" | "sfx attacker 492-0_foul_play" | "sfx attacker 493-0_simple_beam" | "sfx attacker 503-0_scald" | "sfx attacker 506-0_hex" | "sfx attacker 510-0_incinerate_fast" | "sfx attacker 512-0_acrobatics" | "sfx attacker 521-0_volt_switch" | "sfx attacker 522-0_struggle_bug" | "sfx attacker 523-0_bulldoze" | "sfx attacker 524-0_frost_breath" | "sfx attacker 525-0_dragon_tail" | "sfx attacker 528-0_wild_charge" | "sfx attacker 529-0_drill_run" | "sfx attacker 531-0_heart_stamp" | "sfx attacker 533-0_sacred_sword" | "sfx attacker 534-0_razor_shell" | "sfx attacker 536-0_leaf_tornado" | "sfx attacker 540-0_psystrike" | "sfx attacker 542-0_hurricane" | "sfx attacker 543-0_high_horsepower" | "sfx attacker 546-0_techno_blast" | "sfx attacker 548-0_secret_sword" | "sfx attacker 549-0_glaciate" | "sfx attacker 553-0_freeze_shock" | "sfx attacker 554-0_ice_burn" | "sfx attacker 555-0_snarl" | "sfx attacker 557-0_v_create" | "sfx attacker 558-0_fusion_flare" | "sfx attacker 559-0_fusion_bolt" | "sfx attacker 565-0_fell_stinger" | "sfx attacker 570-0_parabolic_charge" | "sfx attacker 572-0_petal_blizzard" | "sfx attacker 574-0_disarming_voice" | "sfx attacker 577-0_draining_kiss" | "sfx attacker 583-0_play_rough" | "sfx attacker 584-0_fairy_wind_fast" | "sfx attacker 585-0_moonblast" | "sfx attacker 586-0_boomburst" | "sfx attacker 587-0_gigaton_hammer" | "sfx attacker 594-0_water_shuriken_fast" | "sfx attacker 595-0_mystical_fire" | "sfx attacker 601-0_geomancy_fast" | "sfx attacker 605-0_dazzling_gleam" | "sfx attacker 611-0_infestation" | "sfx attacker 612-0_power-up_punch" | "sfx attacker 613-0_oblivion_wing" | "sfx attacker 618-0_origin_pulse" | "sfx attacker 619-0_precipice_blades" | "sfx attacker 620-0_dragon_ascent" | "sfx attacker 621-0_poltergeist" | "sfx attacker 744-0_dynamax_cannon" | "shake SideToSide/0.5/0.5" | "shake UpDown/0.5/0.5" | "shake UpDown/0.85/0.5" | "silhouette attacker 3.0/3.0/3.0/0.0" | "silhouette defender 1.0/0.0/0.0/0.5" | "sys complete" | "sys defender_poof" | "sys faintbegin" | "sys faintvfx" | "sys scaledown" | "sys ui-sync" | "vfx acid_fast" | "vfx acid_spray" | "vfx acrobatics" | "vfx aeroblast" | "vfx air_cutter" | "vfx ancient_power" | "vfx aqua_jet" | "vfx aqua_step" | "vfx aqua_tail" | "vfx attacker air_slash_fast" | "vfx attacker bulldoze" | "vfx attacker combat_pokeball_enter" | "vfx attacker earthquake" | "vfx attacker fire_spin_fast_emit" | "vfx attacker hydro_pump_cannon:Origin/Waist/LFeelerA/LFeelerB/LFeelerC" | "vfx attacker hydro_pump_cannon:Origin/Waist/RFeelerA/RFeelerB/RFeelerC" | "vfx attacker ice_beam_charge_up" | "vfx attacker lick_fast_slobber" | "vfx attacker low_kick_fast" | "vfx attacker MetamonFX" | "vfx attacker mirror_coat" | "vfx attacker mud_bomb" | "vfx attacker mud_slap_fast_emit" | "vfx attacker pokeball_enter" | "vfx attacker rest" | "vfx attacker rock_blast" | "vfx attacker sand_tomb_emit" | "vfx attacker scald_cannon:Origin/Waist/LFeelerA/LFeelerB/LFeelerC" | "vfx attacker scald_cannon:Origin/Waist/RFeelerA/RFeelerB/RFeelerC" | "vfx attacker seed_bomb" | "vfx attacker shadow_sneak" | "vfx attacker silver_wind" | "vfx attacker solar_beam_charge" | "vfx attacker solar_beam_charge_waist" | "vfx attacker speed_lines" | "vfx attacker tackle_fast" | "vfx attacker thunderbolt" | "vfx attacker thunderbolt_waist" | "vfx attacker volt_switch_fast" | "vfx attacker wild_charge" | "vfx attacker ZoruaFX" | "vfx aura_sphere" | "vfx aura_wheel_electric" | "vfx aurora_beam" | "vfx beak_blast" | "vfx behemoth_bash" | "vfx behemoth_blade" | "vfx blast_burn" | "vfx blaze_kick" | "vfx bleakwind_storm" | "vfx blizzard" | "vfx boomburst" | "vfx breaking_swipe" | "vfx brine" | "vfx brutal_swing" | "vfx bubble_beam" | "vfx bubble_fast" | "vfx bug_buzz" | "vfx bullet_seed_fast" | "vfx camera camera_horizontal_vignette_4s" | "vfx camera camera_speed_lines" | "vfx charge_beam_fast" | "vfx charm_fast" | "vfx chilling_water" | "vfx clanging_scales" | "vfx confusion_fast" | "vfx crabhammer" | "vfx crush_claw" | "vfx crush_grip" | "vfx dark_pulse" | "vfx darkest_lariat" | "vfx dazzling_gleam" | "vfx defender aerial_ace" | "vfx defender astonish_fast" | "vfx defender avalanche" | "vfx defender bite_fast" | "vfx defender body_slam" | "vfx defender bone_club" | "vfx defender brave_bird" | "vfx defender brick_break" | "vfx defender bug_bite_fast" | "vfx defender bullet_punch_fast" | "vfx defender close_combat_hit" | "vfx defender counter_fast_hit" | "vfx defender cross_chop" | "vfx defender cross_poison" | "vfx defender crunch" | "vfx defender cut_fast" | "vfx defender doom_desire" | "vfx defender draco_meteor" | "vfx defender dragon_tail_fast" | "vfx defender dynamic_punch_hit" | "vfx defender feint_attack_fast" | "vfx defender fire_fang_fast" | "vfx defender fire_punch" | "vfx defender fire_spin_fast_hit" | "vfx defender flame_burst_hit" | "vfx defender flamethrower_hit_waist" | "vfx defender futuresight" | "vfx defender grass_knot" | "vfx defender hurricane" | "vfx defender hydro_pump_hit" | "vfx defender hyper_fang" | "vfx defender infestation_fast" | "vfx defender iron_head" | "vfx defender iron_tail_fast" | "vfx defender karate_chop_fast" | "vfx defender leaf_blade" | "vfx defender lick_fast" | "vfx defender low_sweep" | "vfx defender mud_bomb_hit" | "vfx defender mud_slap_fast_hit" | "vfx defender ominous_wind_hit" | "vfx defender peck_fast" | "vfx defender petal_blizzard_hit" | "vfx defender play_rough" | "vfx defender poison_fang" | "vfx defender pound_fast" | "vfx defender powder_snow_fast_hit" | "vfx defender power_whip" | "vfx defender power_whip_hit_waist" | "vfx defender rock_slide" | "vfx defender rock_smash_fast" | "vfx defender rock_tomb" | "vfx defender sand_tomb_hit" | "vfx defender scratch_fast" | "vfx defender shadow_claw_fast" | "vfx defender shadow_punch" | "vfx defender shadow_sneak_hit" | "vfx defender solar_beam_hit" | "vfx defender splash" | "vfx defender steel_wing_fast" | "vfx defender stomp_hit" | "vfx defender stone_edge" | "vfx defender struggle" | "vfx defender submission" | "vfx defender sucker_punch_fast" | "vfx defender tackle_fast_hit" | "vfx defender thunder" | "vfx defender thunder_punch" | "vfx defender thunder_shock_hit_waist_fast" | "vfx defender thunderbolt_hit" | "vfx defender twister" | "vfx defender vice_grip" | "vfx defender water_gun_fast_double_beam hit" | "vfx defender wing_attack_fast" | "vfx defender wrap_tentacles" | "vfx defender wrap_tentacles_green" | "vfx defender wrap_tentacles_pink" | "vfx defender x_scissor" | "vfx dig" | "vfx disarming_voice" | "vfx discharge" | "vfx double_iron_bash" | "vfx double_kick_fast" | "vfx dragon_ascent" | "vfx dragon_breath_fast" | "vfx dragon_claw" | "vfx dragon_energy" | "vfx dragon_pulse" | "vfx drain_punch" | "vfx draining_kiss" | "vfx drill_peck" | "vfx drill_run" | "vfx drum_beating" | "vfx dynamax_cannon" | "vfx earth_power" | "vfx ember_fast" | "vfx energy_ball" | "vfx extrasensory_fast" | "vfx fairy_wind_fast" | "vfx feather_dance" | "vfx fell_stinger" | "vfx fire_blast" | "vfx fissure" | "vfx flame_burst" | "vfx flame_charge" | "vfx flame_wheel" | "vfx flamethrower" | "vfx flash_cannon" | "vfx flower_trick" | "vfx fly" | "vfx focus_blast" | "vfx force_palm_fast" | "vfx foul_play" | "vfx freeze_shock" | "vfx frenzy_plant" | "vfx frost_breath_fast" | "vfx frustration" | "vfx fury_cutter_fast" | "vfx fusion_bolt" | "vfx fusion_flare" | "vfx geomancy_fast" | "vfx giga_drain" | "vfx giga_impact" | "vfx gigaton_hammer" | "vfx glaciate" | "vfx gunk_shot" | "vfx gust_fast" | "vfx gyro_ball" | "vfx heart_stamp" | "vfx heat_wave" | "vfx heavy_slam" | "vfx hex_fast" | "vfx hidden_power_fast" | "vfx high_horsepower" | "vfx high_jump_kick" | "vfx horn_attack" | "vfx horn_drill" | "vfx hydro_cannon" | "vfx hydro_pump" | "vfx hyper_beam" | "vfx ice_beam" | "vfx ice_burn" | "vfx ice_fang_fast" | "vfx ice_punch" | "vfx ice_shard_fast" | "vfx icicle_spear" | "vfx icy_wind" | "vfx incinerate_fast" | "vfx last_resort" | "vfx leaf_storm" | "vfx leaf_tornado" | "vfx leafage_fast" | "vfx leech_life" | "vfx liquidation" | "vfx lock_on_fast" | "vfx lunge" | "vfx luster_purge" | "vfx magical_leaf_fast" | "vfx magma_storm" | "vfx magnet_bomb" | "vfx mega_drain" | "vfx megahorn" | "vfx metal_claw_fast" | "vfx metal_sound" | "vfx meteor_beam" | "vfx meteor_mash" | "vfx mind_blown" | "vfx mirror_shot" | "vfx mist_ball" | "vfx moonblast" | "vfx moongeist_beam" | "vfx mud_shot_fast" | "vfx muddy_water" | "vfx myst_fire" | "vfx natures_madness" | "vfx night_shade" | "vfx night_slash" | "vfx oblivion_wing" | "vfx obstruct" | "vfx octazooka" | "vfx origin_pulse" | "vfx outrage" | "vfx overheat" | "vfx parabolic_charge" | "vfx payback" | "vfx poison_jab_fast" | "vfx poison_sting_fast" | "vfx poltergeist" | "vfx power_gem" | "vfx power_up_punch" | "vfx precipice_blades" | "vfx present_fast" | "vfx psybeam" | "vfx psychic" | "vfx psychic_fangs" | "vfx psycho_boost" | "vfx psycho_cut_fast" | "vfx psyshock" | "vfx psystrike" | "vfx psywave" | "vfx pyroball" | "vfx quick_attack_fast" | "vfx rage_fist" | "vfx razor_leaf_fast" | "vfx razor_shell" | "vfx return" | "vfx roar_of_time" | "vfx rock_throw_fast" | "vfx rock_wrecker" | "vfx rollout_fast" | "vfx sacred_fire" | "vfx sacred_sword" | "vfx sand_attack" | "vfx sandsear_storm" | "vfx scald" | "vfx scorching_sands" | "vfx secret_sword" | "vfx seed_flare" | "vfx shadow_ball" | "vfx shadow_bone" | "vfx shadow_force" | "vfx signal_beam" | "vfx skull_bash" | "vfx sky_attack" | "vfx sludge" | "vfx sludge_bomb" | "vfx sludge_wave" | "vfx smack_down_fast" | "vfx snarl_fast" | "vfx spacial_rend" | "vfx spark_fast" | "vfx sparkling_aria" | "vfx spirit_shackle" | "vfx struggle_bug_fast" | "vfx sunsteel_strike" | "vfx super_power" | "vfx surf" | "vfx swift" | "vfx synchronoise" | "vfx take_down_fast" | "vfx techno_blast_burn" | "vfx techno_blast_chill" | "vfx techno_blast_normal" | "vfx techno_blast_shock" | "vfx techno_blast_water" | "vfx thunder_cage" | "vfx thunder_fang_fast" | "vfx thunder_shock_fast" | "vfx torch_song" | "vfx trailblaze" | "vfx tri_attack" | "vfx triple_axel" | "vfx upper_hand" | "vfx v_create" | "vfx vine_whip_fast" | "vfx volt_tackle" | "vfx water_gun_fast" | "vfx water_pulse" | "vfx water_shuriken_fast" | "vfx waterfall_fast" | "vfx weather_ball_fire" | "vfx weather_ball_ice" | "vfx weather_ball_normal" | "vfx weather_ball_rock" | "vfx weather_ball_water" | "vfx wildbolt_storm" | "vfx yawn_fast" | "vfx zap_cannon" | "vfx zen_headbutt_fast" | "wait .5" | "wait 0.0" | "wait 0.01" | "wait 0.05" | "wait 0.1" | "wait 0.13" | "wait 0.15" | "wait 0.2" | "wait 0.233" | "wait 0.25" | "wait 0.3" | "wait 0.33" | "wait 0.35" | "wait 0.36" | "wait 0.4" | "wait 0.40" | "wait 0.45" | "wait 0.5" | "wait 0.53" | "wait 0.54" | "wait 0.56" | "wait 0.6" | "wait 0.65" | "wait 0.66" | "wait 0.67" | "wait 0.7" | "wait 0.733" | "wait 0.74" | "wait 0.75" | "wait 0.8" | "wait 0.83" | "wait 0.85" | "wait 0.9" | "wait 1" | "wait 1.0" | "wait 1.15" | "wait 1.16" | "wait 1.2" | "wait 1.25" | "wait 1.26" | "wait 1.35" | "wait 1.4" | "wait 1.49" | "wait 1.5" | "wait 1.75" | "wait 1.8" | "wait 1.82" | "wait 2" | "wait 2.0" | "wait 2.05" | "wait 2.1" | "wait 2.41" | "wait 2.6" | "wait 2.7" | "wait 3.0" | "wait 3.13" | "wait 3.41" | "wait 3.5">;
	};
}

export type MoveSequenceSettingsAcidFast = MoveSequenceSettings<"sequence_acid_fast">;
export type MoveSequenceSettingsAcidSpray = MoveSequenceSettings<"sequence_acid_spray">;
export type MoveSequenceSettingsAcrobatics = MoveSequenceSettings<"sequence_acrobatics">;
export type MoveSequenceSettingsAerialAce = MoveSequenceSettings<"sequence_aerial_ace">;
export type MoveSequenceSettingsAeroblast = MoveSequenceSettings<"sequence_aeroblast">;
export type MoveSequenceSettingsAirCutter = MoveSequenceSettings<"sequence_air_cutter">;
export type MoveSequenceSettingsAirSlashFast = MoveSequenceSettings<"sequence_air_slash_fast">;
export type MoveSequenceSettingsAncientPower = MoveSequenceSettings<"sequence_ancient_power">;
export type MoveSequenceSettingsAquaJet = MoveSequenceSettings<"sequence_aqua_jet">;
export type MoveSequenceSettingsAquaStep = MoveSequenceSettings<"sequence_aqua_step">;
export type MoveSequenceSettingsAquaTail = MoveSequenceSettings<"sequence_aqua_tail">;
export type MoveSequenceSettingsAstonishFast = MoveSequenceSettings<"sequence_astonish_fast">;
export type MoveSequenceSettingsAuraSphere = MoveSequenceSettings<"sequence_aura_sphere">;
export type MoveSequenceSettingsAuraWheelDark = MoveSequenceSettings<"sequence_aura_wheel_dark">;
export type MoveSequenceSettingsAuraWheelElectric = MoveSequenceSettings<"sequence_aura_wheel_electric">;
export type MoveSequenceSettingsAuroraBeam = MoveSequenceSettings<"sequence_aurora_beam">;
export type MoveSequenceSettingsAvalanche = MoveSequenceSettings<"sequence_avalanche">;
export type MoveSequenceSettingsBeakBlast = MoveSequenceSettings<"sequence_beak_blast">;
export type MoveSequenceSettingsBehemothBash = MoveSequenceSettings<"sequence_behemoth_bash">;
export type MoveSequenceSettingsBehemothBlade = MoveSequenceSettings<"sequence_behemoth_blade">;
export type MoveSequenceSettingsBiteFast = MoveSequenceSettings<"sequence_bite_fast">;
export type MoveSequenceSettingsBlastBurn = MoveSequenceSettings<"sequence_blast_burn">;
export type MoveSequenceSettingsBlazeKick = MoveSequenceSettings<"sequence_blaze_kick">;
export type MoveSequenceSettingsBleakwindStorm = MoveSequenceSettings<"sequence_bleakwind_storm">;
export type MoveSequenceSettingsBlizzard = MoveSequenceSettings<"sequence_blizzard">;
export type MoveSequenceSettingsBodySlam = MoveSequenceSettings<"sequence_body_slam">;
export type MoveSequenceSettingsBoneClub = MoveSequenceSettings<"sequence_bone_club">;
export type MoveSequenceSettingsBoomburst = MoveSequenceSettings<"sequence_boomburst">;
export type MoveSequenceSettingsBraveBird = MoveSequenceSettings<"sequence_brave_bird">;
export type MoveSequenceSettingsBreakingSwipe = MoveSequenceSettings<"sequence_breaking_swipe">;
export type MoveSequenceSettingsBrickBreak = MoveSequenceSettings<"sequence_brick_break">;
export type MoveSequenceSettingsBrine = MoveSequenceSettings<"sequence_brine">;
export type MoveSequenceSettingsBrutalSwing = MoveSequenceSettings<"sequence_brutal_swing">;
export type MoveSequenceSettingsBubbleBeam = MoveSequenceSettings<"sequence_bubble_beam">;
export type MoveSequenceSettingsBubbleFast = MoveSequenceSettings<"sequence_bubble_fast">;
export type MoveSequenceSettingsBugBiteFast = MoveSequenceSettings<"sequence_bug_bite_fast">;
export type MoveSequenceSettingsBugBuzz = MoveSequenceSettings<"sequence_bug_buzz">;
export type MoveSequenceSettingsBulldoze = MoveSequenceSettings<"sequence_bulldoze">;
export type MoveSequenceSettingsBulletPunchFast = MoveSequenceSettings<"sequence_bullet_punch_fast">;
export type MoveSequenceSettingsBulletSeedFast = MoveSequenceSettings<"sequence_bullet_seed_fast">;
export type MoveSequenceSettingsChargeBeamFast = MoveSequenceSettings<"sequence_charge_beam_fast">;
export type MoveSequenceSettingsCharmFast = MoveSequenceSettings<"sequence_charm_fast">;
export type MoveSequenceSettingsChillingWater = MoveSequenceSettings<"sequence_chilling_water">;
export type MoveSequenceSettingsClangingScales = MoveSequenceSettings<"sequence_clanging_scales">;
export type MoveSequenceSettingsCloseCombat = MoveSequenceSettings<"sequence_close_combat">;
export type MoveSequenceSettingsConfusionFast = MoveSequenceSettings<"sequence_confusion_fast">;
export type MoveSequenceSettingsCounterFast = MoveSequenceSettings<"sequence_counter_fast">;
export type MoveSequenceSettingsCrabhammer = MoveSequenceSettings<"sequence_crabhammer">;
export type MoveSequenceSettingsCrossChop = MoveSequenceSettings<"sequence_cross_chop">;
export type MoveSequenceSettingsCrossPoison = MoveSequenceSettings<"sequence_cross_poison">;
export type MoveSequenceSettingsCrunch = MoveSequenceSettings<"sequence_crunch">;
export type MoveSequenceSettingsCrushClaw = MoveSequenceSettings<"sequence_crush_claw">;
export type MoveSequenceSettingsCrushGrip = MoveSequenceSettings<"sequence_crush_grip">;
export type MoveSequenceSettingsCutFast = MoveSequenceSettings<"sequence_cut_fast">;
export type MoveSequenceSettingsDarkPulse = MoveSequenceSettings<"sequence_dark_pulse">;
export type MoveSequenceSettingsDarkestLariat = MoveSequenceSettings<"sequence_darkest_lariat">;
export type MoveSequenceSettingsDazzlingGleam = MoveSequenceSettings<"sequence_dazzling_gleam">;
export type MoveSequenceSettingsDefault = MoveSequenceSettings<"sequence_default">;
export type MoveSequenceSettingsDig = MoveSequenceSettings<"sequence_dig">;
export type MoveSequenceSettingsDisarmingVoice = MoveSequenceSettings<"sequence_disarming_voice">;
export type MoveSequenceSettingsDischarge = MoveSequenceSettings<"sequence_discharge">;
export type MoveSequenceSettingsDoomDesire = MoveSequenceSettings<"sequence_doom_desire">;
export type MoveSequenceSettingsDoubleIronBash = MoveSequenceSettings<"sequence_double_iron_bash">;
export type MoveSequenceSettingsDoubleKickFast = MoveSequenceSettings<"sequence_double_kick_fast">;
export type MoveSequenceSettingsDracoMeteor = MoveSequenceSettings<"sequence_draco_meteor">;
export type MoveSequenceSettingsDragonAscent = MoveSequenceSettings<"sequence_dragon_ascent">;
export type MoveSequenceSettingsDragonBreathFast = MoveSequenceSettings<"sequence_dragon_breath_fast">;
export type MoveSequenceSettingsDragonClaw = MoveSequenceSettings<"sequence_dragon_claw">;
export type MoveSequenceSettingsDragonEnergy = MoveSequenceSettings<"sequence_dragon_energy">;
export type MoveSequenceSettingsDragonPulse = MoveSequenceSettings<"sequence_dragon_pulse">;
export type MoveSequenceSettingsDragonTailFast = MoveSequenceSettings<"sequence_dragon_tail_fast">;
export type MoveSequenceSettingsDrainPunch = MoveSequenceSettings<"sequence_drain_punch">;
export type MoveSequenceSettingsDrainingKiss = MoveSequenceSettings<"sequence_draining_kiss">;
export type MoveSequenceSettingsDrillPeck = MoveSequenceSettings<"sequence_drill_peck">;
export type MoveSequenceSettingsDrillRun = MoveSequenceSettings<"sequence_drill_run">;
export type MoveSequenceSettingsDrumBeating = MoveSequenceSettings<"sequence_drum_beating">;
export type MoveSequenceSettingsDynamaxCannon = MoveSequenceSettings<"sequence_dynamax_cannon">;
export type MoveSequenceSettingsDynamicPunch = MoveSequenceSettings<"sequence_dynamic_punch">;
export type MoveSequenceSettingsEarthPower = MoveSequenceSettings<"sequence_earth_power">;
export type MoveSequenceSettingsEarthquake = MoveSequenceSettings<"sequence_earthquake">;
export type MoveSequenceSettingsEmberFast = MoveSequenceSettings<"sequence_ember_fast">;
export type MoveSequenceSettingsEnergyBall = MoveSequenceSettings<"sequence_energy_ball">;
export type MoveSequenceSettingsExtrasensoryFast = MoveSequenceSettings<"sequence_extrasensory_fast">;
export type MoveSequenceSettingsFairyWindFast = MoveSequenceSettings<"sequence_fairy_wind_fast">;
export type MoveSequenceSettingsFeatherDance = MoveSequenceSettings<"sequence_feather_dance">;
export type MoveSequenceSettingsFeintAttackFast = MoveSequenceSettings<"sequence_feint_attack_fast">;
export type MoveSequenceSettingsFellStinger = MoveSequenceSettings<"sequence_fell_stinger">;
export type MoveSequenceSettingsFireBlast = MoveSequenceSettings<"sequence_fire_blast">;
export type MoveSequenceSettingsFireFangFast = MoveSequenceSettings<"sequence_fire_fang_fast">;
export type MoveSequenceSettingsFirePunch = MoveSequenceSettings<"sequence_fire_punch">;
export type MoveSequenceSettingsFireSpinFast = MoveSequenceSettings<"sequence_fire_spin_fast">;
export type MoveSequenceSettingsFissure = MoveSequenceSettings<"sequence_fissure">;
export type MoveSequenceSettingsFlameBurst = MoveSequenceSettings<"sequence_flame_burst">;
export type MoveSequenceSettingsFlameCharge = MoveSequenceSettings<"sequence_flame_charge">;
export type MoveSequenceSettingsFlameWheel = MoveSequenceSettings<"sequence_flame_wheel">;
export type MoveSequenceSettingsFlamethrower = MoveSequenceSettings<"sequence_flamethrower">;
export type MoveSequenceSettingsFlashCannon = MoveSequenceSettings<"sequence_flash_cannon">;
export type MoveSequenceSettingsFlowerTrick = MoveSequenceSettings<"sequence_flower_trick">;
export type MoveSequenceSettingsFly = MoveSequenceSettings<"sequence_fly">;
export type MoveSequenceSettingsFocusBlast = MoveSequenceSettings<"sequence_focus_blast">;
export type MoveSequenceSettingsForcePalmFast = MoveSequenceSettings<"sequence_force_palm_fast">;
export type MoveSequenceSettingsFoulPlay = MoveSequenceSettings<"sequence_foul_play">;
export type MoveSequenceSettingsFreezeShock = MoveSequenceSettings<"sequence_freeze_shock">;
export type MoveSequenceSettingsFrenzyPlant = MoveSequenceSettings<"sequence_frenzy_plant">;
export type MoveSequenceSettingsFrostBreathFast = MoveSequenceSettings<"sequence_frost_breath_fast">;
export type MoveSequenceSettingsFrustration = MoveSequenceSettings<"sequence_frustration">;
export type MoveSequenceSettingsFuryCutterFast = MoveSequenceSettings<"sequence_fury_cutter_fast">;
export type MoveSequenceSettingsFusionBolt = MoveSequenceSettings<"sequence_fusion_bolt">;
export type MoveSequenceSettingsFusionFlare = MoveSequenceSettings<"sequence_fusion_flare">;
export type MoveSequenceSettingsFuturesight = MoveSequenceSettings<"sequence_futuresight">;
export type MoveSequenceSettingsGeomancyFast = MoveSequenceSettings<"sequence_geomancy_fast">;
export type MoveSequenceSettingsGigaDrain = MoveSequenceSettings<"sequence_giga_drain">;
export type MoveSequenceSettingsGigaImpact = MoveSequenceSettings<"sequence_giga_impact">;
export type MoveSequenceSettingsGigatonHammer = MoveSequenceSettings<"sequence_gigaton_hammer">;
export type MoveSequenceSettingsGlaciate = MoveSequenceSettings<"sequence_glaciate">;
export type MoveSequenceSettingsGrassKnot = MoveSequenceSettings<"sequence_grass_knot">;
export type MoveSequenceSettingsGunkShot = MoveSequenceSettings<"sequence_gunk_shot">;
export type MoveSequenceSettingsGustFast = MoveSequenceSettings<"sequence_gust_fast">;
export type MoveSequenceSettingsGyroBall = MoveSequenceSettings<"sequence_gyro_ball">;
export type MoveSequenceSettingsHeartStamp = MoveSequenceSettings<"sequence_heart_stamp">;
export type MoveSequenceSettingsHeatWave = MoveSequenceSettings<"sequence_heat_wave">;
export type MoveSequenceSettingsHeavySlam = MoveSequenceSettings<"sequence_heavy_slam">;
export type MoveSequenceSettingsHexFast = MoveSequenceSettings<"sequence_hex_fast">;
export type MoveSequenceSettingsHiddenPowerFast = MoveSequenceSettings<"sequence_hidden_power_fast">;
export type MoveSequenceSettingsHighHorsepower = MoveSequenceSettings<"sequence_high_horsepower">;
export type MoveSequenceSettingsHighJumpKick = MoveSequenceSettings<"sequence_high_jump_kick">;
export type MoveSequenceSettingsHornAttack = MoveSequenceSettings<"sequence_horn_attack">;
export type MoveSequenceSettingsHornDrill = MoveSequenceSettings<"sequence_horn_drill">;
export type MoveSequenceSettingsHurricane = MoveSequenceSettings<"sequence_hurricane">;
export type MoveSequenceSettingsHydroCannon = MoveSequenceSettings<"sequence_hydro_cannon">;
export type MoveSequenceSettingsHydroPump = MoveSequenceSettings<"sequence_hydro_pump">;
export type MoveSequenceSettingsHydroPumpBlastoise = MoveSequenceSettings<"sequence_hydro_pump_blastoise">;
export type MoveSequenceSettingsHyperBeam = MoveSequenceSettings<"sequence_hyper_beam">;
export type MoveSequenceSettingsHyperFang = MoveSequenceSettings<"sequence_hyper_fang">;
export type MoveSequenceSettingsIceBeam = MoveSequenceSettings<"sequence_ice_beam">;
export type MoveSequenceSettingsIceBurn = MoveSequenceSettings<"sequence_ice_burn">;
export type MoveSequenceSettingsIceFangFast = MoveSequenceSettings<"sequence_ice_fang_fast">;
export type MoveSequenceSettingsIcePunch = MoveSequenceSettings<"sequence_ice_punch">;
export type MoveSequenceSettingsIceShardFast = MoveSequenceSettings<"sequence_ice_shard_fast">;
export type MoveSequenceSettingsIcicleSpear = MoveSequenceSettings<"sequence_icicle_spear">;
export type MoveSequenceSettingsIcyWind = MoveSequenceSettings<"sequence_icy_wind">;
export type MoveSequenceSettingsIncinerateFast = MoveSequenceSettings<"sequence_incinerate_fast">;
export type MoveSequenceSettingsInfestationFast = MoveSequenceSettings<"sequence_infestation_fast">;
export type MoveSequenceSettingsIronHead = MoveSequenceSettings<"sequence_iron_head">;
export type MoveSequenceSettingsIronTailFast = MoveSequenceSettings<"sequence_iron_tail_fast">;
export type MoveSequenceSettingsKarateChopFast = MoveSequenceSettings<"sequence_karate_chop_fast">;
export type MoveSequenceSettingsLastResort = MoveSequenceSettings<"sequence_last_resort">;
export type MoveSequenceSettingsLeafBlade = MoveSequenceSettings<"sequence_leaf_blade">;
export type MoveSequenceSettingsLeafStorm = MoveSequenceSettings<"sequence_leaf_storm">;
export type MoveSequenceSettingsLeafTornado = MoveSequenceSettings<"sequence_leaf_tornado">;
export type MoveSequenceSettingsLeafageFast = MoveSequenceSettings<"sequence_leafage_fast">;
export type MoveSequenceSettingsLeechLife = MoveSequenceSettings<"sequence_leech_life">;
export type MoveSequenceSettingsLickFast = MoveSequenceSettings<"sequence_lick_fast">;
export type MoveSequenceSettingsLiquidation = MoveSequenceSettings<"sequence_liquidation">;
export type MoveSequenceSettingsLockOnFast = MoveSequenceSettings<"sequence_lock_on_fast">;
export type MoveSequenceSettingsLowKickFast = MoveSequenceSettings<"sequence_low_kick_fast">;
export type MoveSequenceSettingsLowSweep = MoveSequenceSettings<"sequence_low_sweep">;
export type MoveSequenceSettingsLunge = MoveSequenceSettings<"sequence_lunge">;
export type MoveSequenceSettingsLusterPurge = MoveSequenceSettings<"sequence_luster_purge">;
export type MoveSequenceSettingsMagicalLeafFast = MoveSequenceSettings<"sequence_magical_leaf_fast">;
export type MoveSequenceSettingsMagmaStorm = MoveSequenceSettings<"sequence_magma_storm">;
export type MoveSequenceSettingsMagnetBomb = MoveSequenceSettings<"sequence_magnet_bomb">;
export type MoveSequenceSettingsMegaDrain = MoveSequenceSettings<"sequence_mega_drain">;
export type MoveSequenceSettingsMegahorn = MoveSequenceSettings<"sequence_megahorn">;
export type MoveSequenceSettingsMetalClawFast = MoveSequenceSettings<"sequence_metal_claw_fast">;
export type MoveSequenceSettingsMetalSound = MoveSequenceSettings<"sequence_metal_sound">;
export type MoveSequenceSettingsMeteorBeam = MoveSequenceSettings<"sequence_meteor_beam">;
export type MoveSequenceSettingsMeteorMash = MoveSequenceSettings<"sequence_meteor_mash">;
export type MoveSequenceSettingsMindBlown = MoveSequenceSettings<"sequence_mind_blown">;
export type MoveSequenceSettingsMirrorCoat = MoveSequenceSettings<"sequence_mirror_coat">;
export type MoveSequenceSettingsMirrorShot = MoveSequenceSettings<"sequence_mirror_shot">;
export type MoveSequenceSettingsMistBall = MoveSequenceSettings<"sequence_mist_ball">;
export type MoveSequenceSettingsMoonblast = MoveSequenceSettings<"sequence_moonblast">;
export type MoveSequenceSettingsMoongeistBeam = MoveSequenceSettings<"sequence_moongeist_beam">;
export type MoveSequenceSettingsMudBomb = MoveSequenceSettings<"sequence_mud_bomb">;
export type MoveSequenceSettingsMudShotFast = MoveSequenceSettings<"sequence_mud_shot_fast">;
export type MoveSequenceSettingsMudSlapFast = MoveSequenceSettings<"sequence_mud_slap_fast">;
export type MoveSequenceSettingsMuddyWater = MoveSequenceSettings<"sequence_muddy_water">;
export type MoveSequenceSettingsMystFire = MoveSequenceSettings<"sequence_myst_fire">;
export type MoveSequenceSettingsNaturesMadness = MoveSequenceSettings<"sequence_natures_madness">;
export type MoveSequenceSettingsNightShade = MoveSequenceSettings<"sequence_night_shade">;
export type MoveSequenceSettingsNightSlash = MoveSequenceSettings<"sequence_night_slash">;
export type MoveSequenceSettingsOblivionWing = MoveSequenceSettings<"sequence_oblivion_wing">;
export type MoveSequenceSettingsObstruct = MoveSequenceSettings<"sequence_obstruct">;
export type MoveSequenceSettingsOctazooka = MoveSequenceSettings<"sequence_octazooka">;
export type MoveSequenceSettingsOminousWind = MoveSequenceSettings<"sequence_ominous_wind">;
export type MoveSequenceSettingsOriginPulse = MoveSequenceSettings<"sequence_origin_pulse">;
export type MoveSequenceSettingsOutrage = MoveSequenceSettings<"sequence_outrage">;
export type MoveSequenceSettingsOverheat = MoveSequenceSettings<"sequence_overheat">;
export type MoveSequenceSettingsParabolicCharge = MoveSequenceSettings<"sequence_parabolic_charge">;
export type MoveSequenceSettingsPayback = MoveSequenceSettings<"sequence_payback">;
export type MoveSequenceSettingsPeckFast = MoveSequenceSettings<"sequence_peck_fast">;
export type MoveSequenceSettingsPetalBlizzard = MoveSequenceSettings<"sequence_petal_blizzard">;
export type MoveSequenceSettingsPlayRough = MoveSequenceSettings<"sequence_play_rough">;
export type MoveSequenceSettingsPoisonFang = MoveSequenceSettings<"sequence_poison_fang">;
export type MoveSequenceSettingsPoisonJabFast = MoveSequenceSettings<"sequence_poison_jab_fast">;
export type MoveSequenceSettingsPoisonStingFast = MoveSequenceSettings<"sequence_poison_sting_fast">;
export type MoveSequenceSettingsPoltergeist = MoveSequenceSettings<"sequence_poltergeist">;
export type MoveSequenceSettingsPoundFast = MoveSequenceSettings<"sequence_pound_fast">;
export type MoveSequenceSettingsPowderSnowFast = MoveSequenceSettings<"sequence_powder_snow_fast">;
export type MoveSequenceSettingsPowerGem = MoveSequenceSettings<"sequence_power_gem">;
export type MoveSequenceSettingsPowerUpPunch = MoveSequenceSettings<"sequence_power_up_punch">;
export type MoveSequenceSettingsPowerWhip = MoveSequenceSettings<"sequence_power_whip">;
export type MoveSequenceSettingsPrecipiceBlades = MoveSequenceSettings<"sequence_precipice_blades">;
export type MoveSequenceSettingsPresentFast = MoveSequenceSettings<"sequence_present_fast">;
export type MoveSequenceSettingsPsybeam = MoveSequenceSettings<"sequence_psybeam">;
export type MoveSequenceSettingsPsychic = MoveSequenceSettings<"sequence_psychic">;
export type MoveSequenceSettingsPsychicFangs = MoveSequenceSettings<"sequence_psychic_fangs">;
export type MoveSequenceSettingsPsychoBoost = MoveSequenceSettings<"sequence_psycho_boost">;
export type MoveSequenceSettingsPsychoCutFast = MoveSequenceSettings<"sequence_psycho_cut_fast">;
export type MoveSequenceSettingsPsyshock = MoveSequenceSettings<"sequence_psyshock">;
export type MoveSequenceSettingsPsystrike = MoveSequenceSettings<"sequence_psystrike">;
export type MoveSequenceSettingsPsywave = MoveSequenceSettings<"sequence_psywave">;
export type MoveSequenceSettingsPyroball = MoveSequenceSettings<"sequence_pyroball">;
export type MoveSequenceSettingsQuickAttackFast = MoveSequenceSettings<"sequence_quick_attack_fast">;
export type MoveSequenceSettingsRageFist = MoveSequenceSettings<"sequence_rage_fist">;
export type MoveSequenceSettingsRazorLeafFast = MoveSequenceSettings<"sequence_razor_leaf_fast">;
export type MoveSequenceSettingsRazorShell = MoveSequenceSettings<"sequence_razor_shell">;
export type MoveSequenceSettingsRest = MoveSequenceSettings<"sequence_rest">;
export type MoveSequenceSettingsReturn = MoveSequenceSettings<"sequence_return">;
export type MoveSequenceSettingsRoarOfTime = MoveSequenceSettings<"sequence_roar_of_time">;
export type MoveSequenceSettingsRockBlast = MoveSequenceSettings<"sequence_rock_blast">;
export type MoveSequenceSettingsRockSlide = MoveSequenceSettings<"sequence_rock_slide">;
export type MoveSequenceSettingsRockSmashFast = MoveSequenceSettings<"sequence_rock_smash_fast">;
export type MoveSequenceSettingsRockThrowFast = MoveSequenceSettings<"sequence_rock_throw_fast">;
export type MoveSequenceSettingsRockTomb = MoveSequenceSettings<"sequence_rock_tomb">;
export type MoveSequenceSettingsRockWrecker = MoveSequenceSettings<"sequence_rock_wrecker">;
export type MoveSequenceSettingsRolloutFast = MoveSequenceSettings<"sequence_rollout_fast">;
export type MoveSequenceSettingsSacredFire = MoveSequenceSettings<"sequence_sacred_fire">;
export type MoveSequenceSettingsSacredSword = MoveSequenceSettings<"sequence_sacred_sword">;
export type MoveSequenceSettingsSandAttack = MoveSequenceSettings<"sequence_sand_attack">;
export type MoveSequenceSettingsSandTomb = MoveSequenceSettings<"sequence_sand_tomb">;
export type MoveSequenceSettingsSandsearStorm = MoveSequenceSettings<"sequence_sandsear_storm">;
export type MoveSequenceSettingsScald = MoveSequenceSettings<"sequence_scald">;
export type MoveSequenceSettingsScaldBlastoise = MoveSequenceSettings<"sequence_scald_blastoise">;
export type MoveSequenceSettingsScorchingSands = MoveSequenceSettings<"sequence_scorching_sands">;
export type MoveSequenceSettingsScratchFast = MoveSequenceSettings<"sequence_scratch_fast">;
export type MoveSequenceSettingsSecretSword = MoveSequenceSettings<"sequence_secret_sword">;
export type MoveSequenceSettingsSeedBomb = MoveSequenceSettings<"sequence_seed_bomb">;
export type MoveSequenceSettingsSeedFlare = MoveSequenceSettings<"sequence_seed_flare">;
export type MoveSequenceSettingsSeqCombatFaint = MoveSequenceSettings<"sequence_seq_combat_faint">;
export type MoveSequenceSettingsSeqCombatFaintEnding = MoveSequenceSettings<"sequence_seq_combat_faint_ending">;
export type MoveSequenceSettingsSeqCombatReturn = MoveSequenceSettings<"sequence_seq_combat_return">;
export type MoveSequenceSettingsSeqDing = MoveSequenceSettings<"sequence_seq_ding">;
export type MoveSequenceSettingsSeqDramaticFaint = MoveSequenceSettings<"sequence_seq_dramatic_faint">;
export type MoveSequenceSettingsSeqFaint = MoveSequenceSettings<"sequence_seq_faint">;
export type MoveSequenceSettingsSeqFortFaint = MoveSequenceSettings<"sequence_seq_fort_faint">;
export type MoveSequenceSettingsSeqIntro = MoveSequenceSettings<"sequence_seq_intro">;
export type MoveSequenceSettingsSeqOutro = MoveSequenceSettings<"sequence_seq_outro">;
export type MoveSequenceSettingsSeqReturn = MoveSequenceSettings<"sequence_seq_return">;
export type MoveSequenceSettingsSeqTransform = MoveSequenceSettings<"sequence_seq_transform">;
export type MoveSequenceSettingsSeqTransformDark = MoveSequenceSettings<"sequence_seq_transform_dark">;
export type MoveSequenceSettingsSeqTransformFast = MoveSequenceSettings<"sequence_seq_transform_fast">;
export type MoveSequenceSettingsShadowBall = MoveSequenceSettings<"sequence_shadow_ball">;
export type MoveSequenceSettingsShadowBone = MoveSequenceSettings<"sequence_shadow_bone">;
export type MoveSequenceSettingsShadowClawFast = MoveSequenceSettings<"sequence_shadow_claw_fast">;
export type MoveSequenceSettingsShadowForce = MoveSequenceSettings<"sequence_shadow_force">;
export type MoveSequenceSettingsShadowPunch = MoveSequenceSettings<"sequence_shadow_punch">;
export type MoveSequenceSettingsShadowSneak = MoveSequenceSettings<"sequence_shadow_sneak">;
export type MoveSequenceSettingsSignalBeam = MoveSequenceSettings<"sequence_signal_beam">;
export type MoveSequenceSettingsSilverWind = MoveSequenceSettings<"sequence_silver_wind">;
export type MoveSequenceSettingsSkullBash = MoveSequenceSettings<"sequence_skull_bash">;
export type MoveSequenceSettingsSkyAttack = MoveSequenceSettings<"sequence_sky_attack">;
export type MoveSequenceSettingsSludge = MoveSequenceSettings<"sequence_sludge">;
export type MoveSequenceSettingsSludgeBomb = MoveSequenceSettings<"sequence_sludge_bomb">;
export type MoveSequenceSettingsSludgeWave = MoveSequenceSettings<"sequence_sludge_wave">;
export type MoveSequenceSettingsSmackDown = MoveSequenceSettings<"sequence_smack_down">;
export type MoveSequenceSettingsSmackDownFast = MoveSequenceSettings<"sequence_smack_down_fast">;
export type MoveSequenceSettingsSnarlFast = MoveSequenceSettings<"sequence_snarl_fast">;
export type MoveSequenceSettingsSolarBeam = MoveSequenceSettings<"sequence_solar_beam">;
export type MoveSequenceSettingsSpacialRend = MoveSequenceSettings<"sequence_spacial_rend">;
export type MoveSequenceSettingsSparkFast = MoveSequenceSettings<"sequence_spark_fast">;
export type MoveSequenceSettingsSparklingAria = MoveSequenceSettings<"sequence_sparkling_aria">;
export type MoveSequenceSettingsSpiritShackle = MoveSequenceSettings<"sequence_spirit_shackle">;
export type MoveSequenceSettingsSplashFast = MoveSequenceSettings<"sequence_splash_fast">;
export type MoveSequenceSettingsSteelWingFast = MoveSequenceSettings<"sequence_steel_wing_fast">;
export type MoveSequenceSettingsStomp = MoveSequenceSettings<"sequence_stomp">;
export type MoveSequenceSettingsStoneEdge = MoveSequenceSettings<"sequence_stone_edge">;
export type MoveSequenceSettingsStruggle = MoveSequenceSettings<"sequence_struggle">;
export type MoveSequenceSettingsStruggleBugFast = MoveSequenceSettings<"sequence_struggle_bug_fast">;
export type MoveSequenceSettingsSubmission = MoveSequenceSettings<"sequence_submission">;
export type MoveSequenceSettingsSuckerPunchFast = MoveSequenceSettings<"sequence_sucker_punch_fast">;
export type MoveSequenceSettingsSunsteelStrike = MoveSequenceSettings<"sequence_sunsteel_strike">;
export type MoveSequenceSettingsSuperPower = MoveSequenceSettings<"sequence_super_power">;
export type MoveSequenceSettingsSurf = MoveSequenceSettings<"sequence_surf">;
export type MoveSequenceSettingsSwift = MoveSequenceSettings<"sequence_swift">;
export type MoveSequenceSettingsSynchronoise = MoveSequenceSettings<"sequence_synchronoise">;
export type MoveSequenceSettingsTackleFast = MoveSequenceSettings<"sequence_tackle_fast">;
export type MoveSequenceSettingsTakeDownFast = MoveSequenceSettings<"sequence_take_down_fast">;
export type MoveSequenceSettingsTechnoBlastBurn = MoveSequenceSettings<"sequence_techno_blast_burn">;
export type MoveSequenceSettingsTechnoBlastChill = MoveSequenceSettings<"sequence_techno_blast_chill">;
export type MoveSequenceSettingsTechnoBlastNormal = MoveSequenceSettings<"sequence_techno_blast_normal">;
export type MoveSequenceSettingsTechnoBlastShock = MoveSequenceSettings<"sequence_techno_blast_shock">;
export type MoveSequenceSettingsTechnoBlastWater = MoveSequenceSettings<"sequence_techno_blast_water">;
export type MoveSequenceSettingsThunder = MoveSequenceSettings<"sequence_thunder">;
export type MoveSequenceSettingsThunderCage = MoveSequenceSettings<"sequence_thunder_cage">;
export type MoveSequenceSettingsThunderFangFast = MoveSequenceSettings<"sequence_thunder_fang_fast">;
export type MoveSequenceSettingsThunderPunch = MoveSequenceSettings<"sequence_thunder_punch">;
export type MoveSequenceSettingsThunderShockFast = MoveSequenceSettings<"sequence_thunder_shock_fast">;
export type MoveSequenceSettingsThunderbolt = MoveSequenceSettings<"sequence_thunderbolt">;
export type MoveSequenceSettingsTorchSong = MoveSequenceSettings<"sequence_torch_song">;
export type MoveSequenceSettingsTrailblaze = MoveSequenceSettings<"sequence_trailblaze">;
export type MoveSequenceSettingsTriAttack = MoveSequenceSettings<"sequence_tri_attack">;
export type MoveSequenceSettingsTripleAxel = MoveSequenceSettings<"sequence_triple_axel">;
export type MoveSequenceSettingsTwister = MoveSequenceSettings<"sequence_twister">;
export type MoveSequenceSettingsUpperHand = MoveSequenceSettings<"sequence_upper_hand">;
export type MoveSequenceSettingsVCreate = MoveSequenceSettings<"sequence_v_create">;
export type MoveSequenceSettingsViceGrip = MoveSequenceSettings<"sequence_vice_grip">;
export type MoveSequenceSettingsVineWhipFast = MoveSequenceSettings<"sequence_vine_whip_fast">;
export type MoveSequenceSettingsVoltSwitchFast = MoveSequenceSettings<"sequence_volt_switch_fast">;
export type MoveSequenceSettingsVoltTackle = MoveSequenceSettings<"sequence_volt_tackle">;
export type MoveSequenceSettingsWaterGunFast = MoveSequenceSettings<"sequence_water_gun_fast">;
export type MoveSequenceSettingsWaterGunFastBlastoise = MoveSequenceSettings<"sequence_water_gun_fast_blastoise">;
export type MoveSequenceSettingsWaterPulse = MoveSequenceSettings<"sequence_water_pulse">;
export type MoveSequenceSettingsWaterShurikenFast = MoveSequenceSettings<"sequence_water_shuriken_fast">;
export type MoveSequenceSettingsWaterfallFast = MoveSequenceSettings<"sequence_waterfall_fast">;
export type MoveSequenceSettingsWeatherBallFire = MoveSequenceSettings<"sequence_weather_ball_fire">;
export type MoveSequenceSettingsWeatherBallIce = MoveSequenceSettings<"sequence_weather_ball_ice">;
export type MoveSequenceSettingsWeatherBallNormal = MoveSequenceSettings<"sequence_weather_ball_normal">;
export type MoveSequenceSettingsWeatherBallRock = MoveSequenceSettings<"sequence_weather_ball_rock">;
export type MoveSequenceSettingsWeatherBallWater = MoveSequenceSettings<"sequence_weather_ball_water">;
export type MoveSequenceSettingsWildCharge = MoveSequenceSettings<"sequence_wild_charge">;
export type MoveSequenceSettingsWildboltStorm = MoveSequenceSettings<"sequence_wildbolt_storm">;
export type MoveSequenceSettingsWingAttackFast = MoveSequenceSettings<"sequence_wing_attack_fast">;
export type MoveSequenceSettingsWrap = MoveSequenceSettings<"sequence_wrap">;
export type MoveSequenceSettingsWrapGreen = MoveSequenceSettings<"sequence_wrap_green">;
export type MoveSequenceSettingsWrapPink = MoveSequenceSettings<"sequence_wrap_pink">;
export type MoveSequenceSettingsXScissor = MoveSequenceSettings<"sequence_x_scissor">;
export type MoveSequenceSettingsYawnFast = MoveSequenceSettings<"sequence_yawn_fast">;
export type MoveSequenceSettingsZapCannon = MoveSequenceSettings<"sequence_zap_cannon">;
export type MoveSequenceSettingsZenHeadbuttFast = MoveSequenceSettings<"sequence_zen_headbutt_fast">;

export type MoveSequenceSettingsMasterfileEntry =
	| MoveSequenceSettingsAcidFast
	| MoveSequenceSettingsAcidSpray
	| MoveSequenceSettingsAcrobatics
	| MoveSequenceSettingsAerialAce
	| MoveSequenceSettingsAeroblast
	| MoveSequenceSettingsAirCutter
	| MoveSequenceSettingsAirSlashFast
	| MoveSequenceSettingsAncientPower
	| MoveSequenceSettingsAquaJet
	| MoveSequenceSettingsAquaStep
	| MoveSequenceSettingsAquaTail
	| MoveSequenceSettingsAstonishFast
	| MoveSequenceSettingsAuraSphere
	| MoveSequenceSettingsAuraWheelDark
	| MoveSequenceSettingsAuraWheelElectric
	| MoveSequenceSettingsAuroraBeam
	| MoveSequenceSettingsAvalanche
	| MoveSequenceSettingsBeakBlast
	| MoveSequenceSettingsBehemothBash
	| MoveSequenceSettingsBehemothBlade
	| MoveSequenceSettingsBiteFast
	| MoveSequenceSettingsBlastBurn
	| MoveSequenceSettingsBlazeKick
	| MoveSequenceSettingsBleakwindStorm
	| MoveSequenceSettingsBlizzard
	| MoveSequenceSettingsBodySlam
	| MoveSequenceSettingsBoneClub
	| MoveSequenceSettingsBoomburst
	| MoveSequenceSettingsBraveBird
	| MoveSequenceSettingsBreakingSwipe
	| MoveSequenceSettingsBrickBreak
	| MoveSequenceSettingsBrine
	| MoveSequenceSettingsBrutalSwing
	| MoveSequenceSettingsBubbleBeam
	| MoveSequenceSettingsBubbleFast
	| MoveSequenceSettingsBugBiteFast
	| MoveSequenceSettingsBugBuzz
	| MoveSequenceSettingsBulldoze
	| MoveSequenceSettingsBulletPunchFast
	| MoveSequenceSettingsBulletSeedFast
	| MoveSequenceSettingsChargeBeamFast
	| MoveSequenceSettingsCharmFast
	| MoveSequenceSettingsChillingWater
	| MoveSequenceSettingsClangingScales
	| MoveSequenceSettingsCloseCombat
	| MoveSequenceSettingsConfusionFast
	| MoveSequenceSettingsCounterFast
	| MoveSequenceSettingsCrabhammer
	| MoveSequenceSettingsCrossChop
	| MoveSequenceSettingsCrossPoison
	| MoveSequenceSettingsCrunch
	| MoveSequenceSettingsCrushClaw
	| MoveSequenceSettingsCrushGrip
	| MoveSequenceSettingsCutFast
	| MoveSequenceSettingsDarkPulse
	| MoveSequenceSettingsDarkestLariat
	| MoveSequenceSettingsDazzlingGleam
	| MoveSequenceSettingsDefault
	| MoveSequenceSettingsDig
	| MoveSequenceSettingsDisarmingVoice
	| MoveSequenceSettingsDischarge
	| MoveSequenceSettingsDoomDesire
	| MoveSequenceSettingsDoubleIronBash
	| MoveSequenceSettingsDoubleKickFast
	| MoveSequenceSettingsDracoMeteor
	| MoveSequenceSettingsDragonAscent
	| MoveSequenceSettingsDragonBreathFast
	| MoveSequenceSettingsDragonClaw
	| MoveSequenceSettingsDragonEnergy
	| MoveSequenceSettingsDragonPulse
	| MoveSequenceSettingsDragonTailFast
	| MoveSequenceSettingsDrainPunch
	| MoveSequenceSettingsDrainingKiss
	| MoveSequenceSettingsDrillPeck
	| MoveSequenceSettingsDrillRun
	| MoveSequenceSettingsDrumBeating
	| MoveSequenceSettingsDynamaxCannon
	| MoveSequenceSettingsDynamicPunch
	| MoveSequenceSettingsEarthPower
	| MoveSequenceSettingsEarthquake
	| MoveSequenceSettingsEmberFast
	| MoveSequenceSettingsEnergyBall
	| MoveSequenceSettingsExtrasensoryFast
	| MoveSequenceSettingsFairyWindFast
	| MoveSequenceSettingsFeatherDance
	| MoveSequenceSettingsFeintAttackFast
	| MoveSequenceSettingsFellStinger
	| MoveSequenceSettingsFireBlast
	| MoveSequenceSettingsFireFangFast
	| MoveSequenceSettingsFirePunch
	| MoveSequenceSettingsFireSpinFast
	| MoveSequenceSettingsFissure
	| MoveSequenceSettingsFlameBurst
	| MoveSequenceSettingsFlameCharge
	| MoveSequenceSettingsFlameWheel
	| MoveSequenceSettingsFlamethrower
	| MoveSequenceSettingsFlashCannon
	| MoveSequenceSettingsFlowerTrick
	| MoveSequenceSettingsFly
	| MoveSequenceSettingsFocusBlast
	| MoveSequenceSettingsForcePalmFast
	| MoveSequenceSettingsFoulPlay
	| MoveSequenceSettingsFreezeShock
	| MoveSequenceSettingsFrenzyPlant
	| MoveSequenceSettingsFrostBreathFast
	| MoveSequenceSettingsFrustration
	| MoveSequenceSettingsFuryCutterFast
	| MoveSequenceSettingsFusionBolt
	| MoveSequenceSettingsFusionFlare
	| MoveSequenceSettingsFuturesight
	| MoveSequenceSettingsGeomancyFast
	| MoveSequenceSettingsGigaDrain
	| MoveSequenceSettingsGigaImpact
	| MoveSequenceSettingsGigatonHammer
	| MoveSequenceSettingsGlaciate
	| MoveSequenceSettingsGrassKnot
	| MoveSequenceSettingsGunkShot
	| MoveSequenceSettingsGustFast
	| MoveSequenceSettingsGyroBall
	| MoveSequenceSettingsHeartStamp
	| MoveSequenceSettingsHeatWave
	| MoveSequenceSettingsHeavySlam
	| MoveSequenceSettingsHexFast
	| MoveSequenceSettingsHiddenPowerFast
	| MoveSequenceSettingsHighHorsepower
	| MoveSequenceSettingsHighJumpKick
	| MoveSequenceSettingsHornAttack
	| MoveSequenceSettingsHornDrill
	| MoveSequenceSettingsHurricane
	| MoveSequenceSettingsHydroCannon
	| MoveSequenceSettingsHydroPump
	| MoveSequenceSettingsHydroPumpBlastoise
	| MoveSequenceSettingsHyperBeam
	| MoveSequenceSettingsHyperFang
	| MoveSequenceSettingsIceBeam
	| MoveSequenceSettingsIceBurn
	| MoveSequenceSettingsIceFangFast
	| MoveSequenceSettingsIcePunch
	| MoveSequenceSettingsIceShardFast
	| MoveSequenceSettingsIcicleSpear
	| MoveSequenceSettingsIcyWind
	| MoveSequenceSettingsIncinerateFast
	| MoveSequenceSettingsInfestationFast
	| MoveSequenceSettingsIronHead
	| MoveSequenceSettingsIronTailFast
	| MoveSequenceSettingsKarateChopFast
	| MoveSequenceSettingsLastResort
	| MoveSequenceSettingsLeafBlade
	| MoveSequenceSettingsLeafStorm
	| MoveSequenceSettingsLeafTornado
	| MoveSequenceSettingsLeafageFast
	| MoveSequenceSettingsLeechLife
	| MoveSequenceSettingsLickFast
	| MoveSequenceSettingsLiquidation
	| MoveSequenceSettingsLockOnFast
	| MoveSequenceSettingsLowKickFast
	| MoveSequenceSettingsLowSweep
	| MoveSequenceSettingsLunge
	| MoveSequenceSettingsLusterPurge
	| MoveSequenceSettingsMagicalLeafFast
	| MoveSequenceSettingsMagmaStorm
	| MoveSequenceSettingsMagnetBomb
	| MoveSequenceSettingsMegaDrain
	| MoveSequenceSettingsMegahorn
	| MoveSequenceSettingsMetalClawFast
	| MoveSequenceSettingsMetalSound
	| MoveSequenceSettingsMeteorBeam
	| MoveSequenceSettingsMeteorMash
	| MoveSequenceSettingsMindBlown
	| MoveSequenceSettingsMirrorCoat
	| MoveSequenceSettingsMirrorShot
	| MoveSequenceSettingsMistBall
	| MoveSequenceSettingsMoonblast
	| MoveSequenceSettingsMoongeistBeam
	| MoveSequenceSettingsMudBomb
	| MoveSequenceSettingsMudShotFast
	| MoveSequenceSettingsMudSlapFast
	| MoveSequenceSettingsMuddyWater
	| MoveSequenceSettingsMystFire
	| MoveSequenceSettingsNaturesMadness
	| MoveSequenceSettingsNightShade
	| MoveSequenceSettingsNightSlash
	| MoveSequenceSettingsOblivionWing
	| MoveSequenceSettingsObstruct
	| MoveSequenceSettingsOctazooka
	| MoveSequenceSettingsOminousWind
	| MoveSequenceSettingsOriginPulse
	| MoveSequenceSettingsOutrage
	| MoveSequenceSettingsOverheat
	| MoveSequenceSettingsParabolicCharge
	| MoveSequenceSettingsPayback
	| MoveSequenceSettingsPeckFast
	| MoveSequenceSettingsPetalBlizzard
	| MoveSequenceSettingsPlayRough
	| MoveSequenceSettingsPoisonFang
	| MoveSequenceSettingsPoisonJabFast
	| MoveSequenceSettingsPoisonStingFast
	| MoveSequenceSettingsPoltergeist
	| MoveSequenceSettingsPoundFast
	| MoveSequenceSettingsPowderSnowFast
	| MoveSequenceSettingsPowerGem
	| MoveSequenceSettingsPowerUpPunch
	| MoveSequenceSettingsPowerWhip
	| MoveSequenceSettingsPrecipiceBlades
	| MoveSequenceSettingsPresentFast
	| MoveSequenceSettingsPsybeam
	| MoveSequenceSettingsPsychic
	| MoveSequenceSettingsPsychicFangs
	| MoveSequenceSettingsPsychoBoost
	| MoveSequenceSettingsPsychoCutFast
	| MoveSequenceSettingsPsyshock
	| MoveSequenceSettingsPsystrike
	| MoveSequenceSettingsPsywave
	| MoveSequenceSettingsPyroball
	| MoveSequenceSettingsQuickAttackFast
	| MoveSequenceSettingsRageFist
	| MoveSequenceSettingsRazorLeafFast
	| MoveSequenceSettingsRazorShell
	| MoveSequenceSettingsRest
	| MoveSequenceSettingsReturn
	| MoveSequenceSettingsRoarOfTime
	| MoveSequenceSettingsRockBlast
	| MoveSequenceSettingsRockSlide
	| MoveSequenceSettingsRockSmashFast
	| MoveSequenceSettingsRockThrowFast
	| MoveSequenceSettingsRockTomb
	| MoveSequenceSettingsRockWrecker
	| MoveSequenceSettingsRolloutFast
	| MoveSequenceSettingsSacredFire
	| MoveSequenceSettingsSacredSword
	| MoveSequenceSettingsSandAttack
	| MoveSequenceSettingsSandTomb
	| MoveSequenceSettingsSandsearStorm
	| MoveSequenceSettingsScald
	| MoveSequenceSettingsScaldBlastoise
	| MoveSequenceSettingsScorchingSands
	| MoveSequenceSettingsScratchFast
	| MoveSequenceSettingsSecretSword
	| MoveSequenceSettingsSeedBomb
	| MoveSequenceSettingsSeedFlare
	| MoveSequenceSettingsSeqCombatFaint
	| MoveSequenceSettingsSeqCombatFaintEnding
	| MoveSequenceSettingsSeqCombatReturn
	| MoveSequenceSettingsSeqDing
	| MoveSequenceSettingsSeqDramaticFaint
	| MoveSequenceSettingsSeqFaint
	| MoveSequenceSettingsSeqFortFaint
	| MoveSequenceSettingsSeqIntro
	| MoveSequenceSettingsSeqOutro
	| MoveSequenceSettingsSeqReturn
	| MoveSequenceSettingsSeqTransform
	| MoveSequenceSettingsSeqTransformDark
	| MoveSequenceSettingsSeqTransformFast
	| MoveSequenceSettingsShadowBall
	| MoveSequenceSettingsShadowBone
	| MoveSequenceSettingsShadowClawFast
	| MoveSequenceSettingsShadowForce
	| MoveSequenceSettingsShadowPunch
	| MoveSequenceSettingsShadowSneak
	| MoveSequenceSettingsSignalBeam
	| MoveSequenceSettingsSilverWind
	| MoveSequenceSettingsSkullBash
	| MoveSequenceSettingsSkyAttack
	| MoveSequenceSettingsSludge
	| MoveSequenceSettingsSludgeBomb
	| MoveSequenceSettingsSludgeWave
	| MoveSequenceSettingsSmackDown
	| MoveSequenceSettingsSmackDownFast
	| MoveSequenceSettingsSnarlFast
	| MoveSequenceSettingsSolarBeam
	| MoveSequenceSettingsSpacialRend
	| MoveSequenceSettingsSparkFast
	| MoveSequenceSettingsSparklingAria
	| MoveSequenceSettingsSpiritShackle
	| MoveSequenceSettingsSplashFast
	| MoveSequenceSettingsSteelWingFast
	| MoveSequenceSettingsStomp
	| MoveSequenceSettingsStoneEdge
	| MoveSequenceSettingsStruggle
	| MoveSequenceSettingsStruggleBugFast
	| MoveSequenceSettingsSubmission
	| MoveSequenceSettingsSuckerPunchFast
	| MoveSequenceSettingsSunsteelStrike
	| MoveSequenceSettingsSuperPower
	| MoveSequenceSettingsSurf
	| MoveSequenceSettingsSwift
	| MoveSequenceSettingsSynchronoise
	| MoveSequenceSettingsTackleFast
	| MoveSequenceSettingsTakeDownFast
	| MoveSequenceSettingsTechnoBlastBurn
	| MoveSequenceSettingsTechnoBlastChill
	| MoveSequenceSettingsTechnoBlastNormal
	| MoveSequenceSettingsTechnoBlastShock
	| MoveSequenceSettingsTechnoBlastWater
	| MoveSequenceSettingsThunder
	| MoveSequenceSettingsThunderCage
	| MoveSequenceSettingsThunderFangFast
	| MoveSequenceSettingsThunderPunch
	| MoveSequenceSettingsThunderShockFast
	| MoveSequenceSettingsThunderbolt
	| MoveSequenceSettingsTorchSong
	| MoveSequenceSettingsTrailblaze
	| MoveSequenceSettingsTriAttack
	| MoveSequenceSettingsTripleAxel
	| MoveSequenceSettingsTwister
	| MoveSequenceSettingsUpperHand
	| MoveSequenceSettingsVCreate
	| MoveSequenceSettingsViceGrip
	| MoveSequenceSettingsVineWhipFast
	| MoveSequenceSettingsVoltSwitchFast
	| MoveSequenceSettingsVoltTackle
	| MoveSequenceSettingsWaterGunFast
	| MoveSequenceSettingsWaterGunFastBlastoise
	| MoveSequenceSettingsWaterPulse
	| MoveSequenceSettingsWaterShurikenFast
	| MoveSequenceSettingsWaterfallFast
	| MoveSequenceSettingsWeatherBallFire
	| MoveSequenceSettingsWeatherBallIce
	| MoveSequenceSettingsWeatherBallNormal
	| MoveSequenceSettingsWeatherBallRock
	| MoveSequenceSettingsWeatherBallWater
	| MoveSequenceSettingsWildCharge
	| MoveSequenceSettingsWildboltStorm
	| MoveSequenceSettingsWingAttackFast
	| MoveSequenceSettingsWrap
	| MoveSequenceSettingsWrapGreen
	| MoveSequenceSettingsWrapPink
	| MoveSequenceSettingsXScissor
	| MoveSequenceSettingsYawnFast
	| MoveSequenceSettingsZapCannon
	| MoveSequenceSettingsZenHeadbuttFast;

export type MoveSequenceSettingsTemplateID = MoveSequenceSettingsMasterfileEntry["templateId"];
