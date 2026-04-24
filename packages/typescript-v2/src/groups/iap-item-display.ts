export interface IapItemDisplay<T extends string> {
	templateId: T;
	data: IapItemDisplayData<T>;
}

export interface IapItemDisplayData<T extends string> {
	templateId: T;
	iapItemDisplay: {
		category?: "IAP_CATEGORY_BUNDLE" | "IAP_CATEGORY_FLAIR_BUNDLE" | "IAP_CATEGORY_FREE" | "IAP_CATEGORY_GLOBAL_EVENT_TICKET" | "IAP_CATEGORY_ITEMS" | "IAP_CATEGORY_POKECOINS" | "IAP_CATEGORY_STICKER" | "IAP_CATEGORY_TRANSPORTER_ENERGY" | "IAP_CATEGORY_UPGRADES";
		description?: "battle_pass_ticket_IAP_description" | "event_pass_plus_points_6_ranks_description" | "first_time_gym_team_intro|2" | "gofest_2025_finale_deluxe_event_pass_track_unlock_description" | "gofest_2025_finale_deluxe_event_pass_track_unlock_plus_points_description" | "gosafariball.10_description" | "gosafariball.25_description" | "gosafariball.50_description" | "gotour_2025_deluxe_event_pass_track_unlock_description" | "gotour_2025_deluxe_event_pass_track_unlock_plus_points_description" | "iris_flair_free_description" | "item_event_ticket_gray_details_FinalJustice2025" | "item_ticket_city_safari_00_desc" | "item_ticket_city_safari_01_desc" | "item_ticket_city_safari_02_desc" | "MAXPOTION.5_DESCRIPTION" | "MAXREVIVE.3_DESCRIPTION" | "POSTCARD_EXPANSION_1_description" | "text_rewards_key_GOWA25";
		hidden?: true;
		imageUrl?: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F20260113_pgo_s22_oricorio_1024x576_nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FEvent%20Pass%20Placeholder.png" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fgo_tour_kalos_1024x512.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FGO_Wild_Area_2025_Global_1024x512_logo.png" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FGOWA_GO_Pass_Ticket_1024x512.png" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO_MCS_MasterBall_KeyArt_TK_GP_V2_S14_1024x512_nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-bug-out-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-deluxe-gopass-april-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-deluxe-gopass-march-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-entei-shadow-raid-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-fashion-raid-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-kanto-max-battle-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-pikachu-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-legendary-birds-nologo-2026.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Eternatus_Adventure_Effect_v2-1024x576.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_GO_Pass_May_2026_TICKET_v1-1204x576.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_GOPass_Halloween_v5_pose_1024x576_nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Into_The_Depths_LiveOp_2026_v3-1024x576-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Memory_Lane_Meltan_Celebration_SRR_v1-1024x576.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Shiny_Keldeo_KeyArt_v1-1024x576-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Winter_Holiday_2025_EventPass_v2-1024x576-nologo%20(1).jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-paid-shockingly-good-time-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-paid-sustainability-week-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-replay-water-research-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-riolu-hatch-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-shiny-jirachi-masterwork-ticket-nologo-2025.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-tinkatink-community-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-yampers-paw-prints-ticket-nologo-2025.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FTourPass2026.jpg" | "https://storage.googleapis.com/prod-public-images/GBL_SharedSkies_2024.jpeg" | "https://storage.googleapis.com/prod-public-images/gf20.jpg" | "https://storage.googleapis.com/prod-public-images/Safari_ticket_banner.png";
		maxLevel?: 20;
		sale?: true;
		showDiscountTag?: true;
		showStrikethroughPrice?: true;
		sku: "battlepassticket.1" | "BUNDLE_EC_200_RPP_1" | "BUNDLE_EC_600_RPP_3" | "bundle.adventurebrazil100.1" | "bundle.adventurebrazil200.1" | "bundle.anniversary2023.1" | "bundle.apacmar2025.1" | "bundle.arraia2025.1" | "bundle.arraia2025.2" | "bundle.atlanticav2box.1" | "bundle.atlanticav2box.2" | "bundle.blackfridaystickers24.1" | "bundle.blackfridaystickers24.2" | "bundle.boost2023.1" | "bundle.brazil2023.1" | "bundle.brazilrediscover1.1" | "bundle.brazilrediscover2.1" | "bundle.brazilvacations100.1" | "bundle.carnival2025.1" | "bundle.carnival2025.2" | "bundle.cd2022.1" | "bundle.cd2022.2" | "bundle.cdrecapstickers.1" | "bundle.citysafari450hktw.1" | "bundle.cswkmakegoodprep.100.1" | "bundle.cswkmakegoodprep.200.1" | "bundle.cswkmakegoodprep.300.1" | "bundle.decroutes2023.1" | "bundle.diademuertos2025.1" | "bundle.diademuertosmax100.1" | "bundle.diademuertosmax200.1" | "bundle.diwali2025.1" | "bundle.diwali2025.2" | "bundle.diwalimax100.1" | "bundle.EliteExp2024.1" | "bundle.EliteExp2024.2" | "bundle.EliteExp2024.3" | "bundle.EliteExp2024.4" | "bundle.EliteExp2024.5" | "bundle.emcarnival2026.1" | "bundle.emcarnival2026.2" | "bundle.emea2023.1" | "bundle.evolve2022.1" | "bundle.evolve2022.2" | "bundle.evolve2022.3" | "bundle.evolve2022.4" | "bundle.evolve2022.5" | "bundle.evolve2022.6" | "bundle.fol2022.1" | "bundle.fol2022.2" | "bundle.fol2022.3" | "bundle.fol2022.4" | "bundle.general.template4" | "bundle.general.template5" | "bundle.general.template6" | "bundle.general1.free.1" | "bundle.general1.large.1" | "bundle.general1.medium.1" | "bundle.general1.medium.2" | "bundle.general1.medium.3" | "bundle.general1.rocket.1" | "bundle.general1.small.1" | "bundle.general1.tiny.2" | "bundle.general1.tiny.3" | "bundle.general2.free.1" | "bundle.general2.large.1" | "bundle.general2.medium.1" | "bundle.general2.small.1" | "bundle.general3.free.1" | "bundle.general3.large.1" | "bundle.general3.small.1" | "bundle.general4.large.1" | "bundle.general4.small.2" | "bundle.general5.large.1" | "bundle.general5.small.1" | "bundle.general5.small.2" | "bundle.general5.small.3" | "bundle.general5.small.4" | "bundle.general5.small.5" | "bundle.general6.small.1" | "bundle.gmaxday.1" | "bundle.gofest2023.1" | "bundle.gofest2023.2" | "bundle.gofest2023.3" | "bundle.gofest2023.4" | "bundle.gofest2023.5" | "bundle.gofest2024.1" | "bundle.gofest2024.2" | "bundle.gofest2024.3" | "bundle.gofest2024.4" | "bundle.gofestmakegoodprep.1" | "bundle.gofestmakegoodprep.2" | "bundle.gofestmakegoodprep.3" | "bundle.GOTour2024.1" | "bundle.GOTour2024.2" | "bundle.GOTour2024.3" | "bundle.GOTour2024.4" | "bundle.GOTour2024.5" | "bundle.GOTour2024.6" | "bundle.GOTour2024.7" | "bundle.gowa2024.1" | "bundle.gowa2024.2" | "bundle.gowa2024.3" | "bundle.gowa2024.4" | "bundle.gpdindialaunch.1" | "bundle.gpmay2023.1" | "bundle.gwlatam2025.1" | "bundle.gwlatam2025.2" | "bundle.gwlatam2025.3" | "bundle.halloween.adventure.1" | "bundle.halloween.large.1" | "bundle.halloween.small.1" | "bundle.halloween2022.1" | "bundle.halloween2022.2" | "bundle.halloween2022.3" | "bundle.halloween2023.1" | "bundle.halloween2023.2" | "bundle.halloween2023.3" | "bundle.halloween2025.1" | "bundle.halloween2025.2" | "bundle.halloween2025.3" | "bundle.harvestcatch.1" | "bundle.harvestfestival.2025" | "bundle.hatchbox2024.1" | "bundle.hawlucha2025.1" | "bundle.hawlucha2025.2" | "bundle.hawluchacelebration100.1" | "bundle.hawluchacelebration200.1" | "bundle.hisuiraidday2023.1" | "bundle.holi2025.1" | "bundle.holi2025.2" | "bundle.holiday2022.1" | "bundle.holiday2022.2" | "bundle.holiday2022.3" | "bundle.holiday2024.1" | "bundle.incenseday.1" | "bundle.indiaaugust100.1" | "bundle.indiaboxfeature.1" | "bundle.indiafestivaloflights.1" | "bundle.indiamay2024.1" | "bundle.indiaseptember100.1" | "bundle.indiaseptember200.1" | "bundle.indonesiaboxfeature.1" | "bundle.indonesialaunch.1" | "bundle.indonesialaunch.2" | "bundle.jakartaaugust100.1" | "bundle.koreaseptember100.1" | "bundle.koreaseptember200.1" | "bundle.ksalaunch100.1" | "bundle.ksalaunch200.1" | "bundle.latbox100.1" | "bundle.latbox300.1" | "bundle.lunarnewyear.1" | "bundle.maxfinale.1" | "bundle.maxfinale.2" | "bundle.maxmonday.1" | "bundle.mega-lucario-raid-day2024.1" | "bundle.mheracrossraidday2024.1" | "bundle.midautumn.1" | "bundle.midautumn.2" | "bundle.midautumn.3" | "bundle.newyears2024.1" | "bundle.playsummerbox.1" | "bundle.primalraidday2023.1" | "bundle.psych_spec_2022.1" | "bundle.psych_spec_2022.2" | "bundle.psych_spec_2022.3" | "bundle.ramadan.1" | "bundle.ramadan.2" | "bundle.rarebundle.1" | "bundle.rarebundle.2" | "bundle.rarebundle.3" | "bundle.rarebundle.4" | "bundle.riolu2023.1" | "bundle.riolu2023.2" | "bundle.rockruffboost.1" | "bundle.rrpstar.1" | "bundle.s17seasonstart.1" | "bundle.season10evergreen.1" | "bundle.season10evergreen.2" | "bundle.season10evergreen.3" | "bundle.season11evergreen.1" | "bundle.season11evergreen.2" | "bundle.season11evergreen.3" | "bundle.season12evergreen2023.1" | "bundle.season12evergreen2023.2" | "bundle.season12evergreen2023.3" | "bundle.season13evergreen2023.1" | "bundle.season13evergreen2023.2" | "bundle.season13evergreen2023.3" | "bundle.season14evergreen2024.1" | "bundle.season14evergreen2024.2" | "bundle.season14evergreen2024.3" | "bundle.season15evergreen2024.1" | "bundle.season15evergreen2024.2" | "bundle.season15evergreen2024.3" | "bundle.season16evergreen2024.1" | "bundle.season16evergreen2024.2" | "bundle.season16evergreen2024.3" | "bundle.seasonaldelights2024.1" | "bundle.shadowlugia.1" | "bundle.smoresbump.2025" | "bundle.solstice2023.1" | "bundle.solstice2023.2" | "bundle.solstice2023.3" | "bundle.songkran2025.1" | "bundle.sparkbox.1" | "bundle.sparkbox.2" | "bundle.sparkbox.3" | "bundle.springtakeover2023.1" | "bundle.springtakeover2023.2" | "bundle.springtakeover2023.3" | "bundle.steel_mettle2022.1" | "bundle.steel_mettle2022.2" | "bundle.steel_mettle2022.3" | "bundle.takeover2022.1" | "bundle.takeover2022.2" | "bundle.takeover2022.3" | "bundle.tgrtakeover2024.1" | "bundle.thailandfeatureapril2024.1" | "bundle.tmexpert.1" | "bundle.ubraidday2022.1" | "bundle.ubraidday2022.2" | "bundle.ukfeature.1" | "bundle.ultrabeastraid.2024" | "bundle.ultraunlockraid2023.1" | "bundle.ultraunlockraid2023.2" | "bundle.uustorage.1" | "bundle.voyagerouttoplay.1" | "bundle.welcomebox.1" | "bundle.winterevergreen.1" | "bundle.winterevergreen.2" | "bundle.winterevergreen.3" | "bundle.winterholiday2023.1" | "bundle.winterholiday2023.2" | "bundle.winterholiday2023.3" | "bundle.xmas.large.1" | "bundle.zoruamakegood2022" | "bundle.zzraid.1" | "diademuertos" | "evergreenticket.1" | "evergreenticket.1.giftable" | "FLAIR_FREE_BUNDLE_0" | "general1.ticket.1" | "general1.ticket.1.giftable" | "general1.ticket.2" | "general1.ticket.2.giftable" | "general1.ticket.3" | "general1.ticket.4" | "general1.ticket.4.giftable" | "general1.ticket.6" | "general2.ticket.1" | "general2.ticket.1.giftable" | "general2.ticket.10" | "general2.ticket.10.giftable" | "general2.ticket.2" | "general2.ticket.2.giftable" | "general2.ticket.3" | "general2.ticket.3.giftable" | "general2.ticket.4" | "general2.ticket.4.giftable" | "general2.ticket.5" | "general2.ticket.5.giftable" | "general2.ticket.7" | "general2.ticket.7.giftable" | "general2.ticket.8" | "general2.ticket.8.giftable" | "general2.ticket.9" | "general2.ticket.9.giftable" | "general4.medium.1" | "general6.small.1" | "gowaticketfree.1" | "hometransport.1" | "incenseordinary.1" | "incenseordinary.8" | "incubatorbasic.1" | "incubatorsuper.1" | "ITEM_ENHANCED_CURRENCY_200" | "ITEM_ENHANCED_CURRENCY_600" | "itemleadermap" | "luckyegg.1" | "luckyegg.8" | "max_boost.1" | "max_boost.3" | "maxpotion.10" | "maxpotion.5" | "maxrevive.3" | "maxrevive.6" | "mp_replenish_rrp.1" | "mp_replenish_rrp.3" | "mp_replenish.1" | "mp_replenish.3" | "paidraidticket.1" | "paidraidticket.3" | "pgorelease.april1_2026_deluxe_event_pass_track_redirect" | "pgorelease.april1_2026_deluxe_event_pass_track_unlock" | "pgorelease.april1_2026_deluxe_event_pass_track_unlock_plus_points" | "pgorelease.april2_2026_deluxe_event_pass_track_redirect" | "pgorelease.april2_2026_deluxe_event_pass_track_unlock" | "pgorelease.april2_2026_deluxe_event_pass_track_unlock_plus_points" | "pgorelease.april3_2026_deluxe_event_pass_track_redirect" | "pgorelease.april3_2026_deluxe_event_pass_track_unlock" | "pgorelease.april3_2026_deluxe_event_pass_track_unlock_plus_points" | "pgorelease.bundle.1" | "pgorelease.bundle.2" | "pgorelease.bundle.blanchebox.1" | "pgorelease.bundle.citysafaribarcelona1" | "pgorelease.bundle.citysafaribarcelona2" | "pgorelease.bundle.citysafarimexico1" | "pgorelease.bundle.citysafarimexico2" | "pgorelease.bundle.eliteraidbox.1" | "pgorelease.bundle.eliteraidmay2023" | "pgorelease.bundle.flavoredlures.1" | "pgorelease.bundle.flavoredlures.2" | "pgorelease.bundle.flavoredlures.3" | "pgorelease.bundle.flavoredlures.4" | "pgorelease.bundle.flavoredlures.5" | "pgorelease.bundle.flavoredlures.6" | "pgorelease.bundle.flavoredlures.7" | "pgorelease.bundle.flavoredlures.8" | "pgorelease.bundle.foc2023box.1" | "pgorelease.bundle.general.thirdparty.large.2" | "pgorelease.bundle.general.thirdparty.large.4" | "pgorelease.bundle.general.thirdparty.medium.1" | "pgorelease.bundle.general.thirdparty.small.1" | "pgorelease.bundle.general.thirdparty.small.1.2" | "pgorelease.bundle.general.thirdparty.small.2" | "pgorelease.bundle.general1.tiny.4" | "pgorelease.bundle.general11.small.1331" | "pgorelease.bundle.gotour2023.0" | "pgorelease.bundle.gotour2023.1" | "pgorelease.bundle.gotour2023.2" | "pgorelease.bundle.gotour2023.3" | "pgorelease.bundle.gotour2023.4" | "pgorelease.bundle.gotour2023.5" | "pgorelease.bundle.gotour2023.6" | "pgorelease.bundle.gp2022.1" | "pgorelease.bundle.indiagp2023.1" | "pgorelease.bundle.lure.1" | "pgorelease.bundle.pokemonday.1" | "pgorelease.bundle.raiddaymay2023.1" | "pgorelease.bundle.raiddaymay2023.2" | "pgorelease.bundle.raiddaymay2023.3" | "pgorelease.bundle.raiddaymay2023.4" | "pgorelease.bundle.raiddaynov2023.1" | "pgorelease.bundle.raidhourbox.1" | "pgorelease.bundle.raidhourbox.2" | "pgorelease.bundle.ramadan2023box.1" | "pgorelease.bundle.RTSRaid" | "pgorelease.bundle.season10evergreen.1" | "pgorelease.bundle.season10evergreen.2" | "pgorelease.bundle.season10evergreen.3" | "pgorelease.bundle.season10launch.1" | "pgorelease.bundle.sustainabilitybonusmay2023" | "pgorelease.bundle.sustainabilitymay2023" | "pgorelease.bundle.template1" | "pgorelease.bundle.template2" | "pgorelease.bundle.template3" | "pgorelease.bundle.thailandspec2023.1" | "pgorelease.bundle.walkeratlantic2022.1" | "pgorelease.bundle.walkeratlantic2022.2" | "pgorelease.citysafariticket0.1" | "pgorelease.citysafariticket1.1" | "pgorelease.citysafariticket2.1" | "pgorelease.evergreenticket.1" | "pgorelease.evergreenticket.1.giftable" | "pgorelease.general1.ticket.1" | "pgorelease.general1.ticket.1.giftable" | "pgorelease.general1.ticket.2" | "pgorelease.general1.ticket.2.giftable" | "pgorelease.general1.ticket.4" | "pgorelease.general1.ticket.4.giftable" | "pgorelease.general1.ticket.5" | "pgorelease.general2.ticket.1" | "pgorelease.general2.ticket.1.giftable" | "pgorelease.general2.ticket.10" | "pgorelease.general2.ticket.10.giftable" | "pgorelease.general2.ticket.2" | "pgorelease.general2.ticket.2.giftable" | "pgorelease.general2.ticket.3" | "pgorelease.general2.ticket.3.giftable" | "pgorelease.general2.ticket.4" | "pgorelease.general2.ticket.4.giftable" | "pgorelease.general2.ticket.5" | "pgorelease.general2.ticket.5.giftable" | "pgorelease.general2.ticket.6" | "pgorelease.general2.ticket.7" | "pgorelease.general2.ticket.7.giftable" | "pgorelease.general2.ticket.8" | "pgorelease.general2.ticket.8.giftable" | "pgorelease.general2.ticket.9" | "pgorelease.general2.ticket.9.giftable" | "pgorelease.gofest_2025_deluxe_event_pass_track_redirect" | "pgorelease.gofest_deluxe_event_pass_track_unlock" | "pgorelease.gofest_deluxe_event_pass_track_unlock_plus_points" | "pgorelease.gofest_finale_2025_deluxe_event_pass_track_redirect" | "pgorelease.gofest_finale_2025_deluxe_event_pass_track_unlock" | "pgorelease.gofest_finale_2025_deluxe_event_pass_track_unlock_plus_points" | "pgorelease.gotour_2025_deluxe_event_pass_track_redirect" | "pgorelease.gotour_2025_deluxe_event_pass_track_unlock" | "pgorelease.gotour_2025_deluxe_event_pass_track_unlock_plus_points" | "pgorelease.gowild_2025_deluxe_event_pass_track_redirect" | "pgorelease.gowild_2025_deluxe_event_pass_track_unlock" | "pgorelease.gowild_2025_deluxe_event_pass_track_unlock_plus_points" | "pgorelease.halloween2025_deluxe_event_pass_track_redirect" | "pgorelease.halloween2025_deluxe_event_pass_track_unlock" | "pgorelease.halloween2025_deluxe_event_pass_track_unlock_plus_points" | "pgorelease.march1_2026_deluxe_event_pass_track_redirect" | "pgorelease.march1_2026_deluxe_event_pass_track_unlock" | "pgorelease.march1_2026_deluxe_event_pass_track_unlock_plus_points" | "pgorelease.march2_2026_deluxe_event_pass_track_redirect" | "pgorelease.march2_2026_deluxe_event_pass_track_unlock" | "pgorelease.march2_2026_deluxe_event_pass_track_unlock_plus_points" | "pgorelease.month1_deluxe_event_pass_track_redirect" | "pgorelease.month1_deluxe_event_pass_track_unlock" | "pgorelease.month1_deluxe_event_pass_track_unlock_plus_points" | "pgorelease.month2_deluxe_event_pass_track_redirect" | "pgorelease.month2_deluxe_event_pass_track_unlock" | "pgorelease.month2_deluxe_event_pass_track_unlock_plus_points" | "pgorelease.month3_deluxe_event_pass_track_redirect" | "pgorelease.month3_deluxe_event_pass_track_unlock" | "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points" | "pgorelease.pokecoin.15950" | "pgorelease.pokecoin.21375" | "pgorelease.pokecoin.2750" | "pgorelease.pokecoin.5720" | "pgorelease.safariball.10" | "pgorelease.safariball.25" | "pgorelease.safariball.50" | "pgorelease.winterholidays2025_deluxe_event_pass_track_redirect" | "pgorelease.winterholidays2025_deluxe_event_pass_track_unlock" | "pgorelease.winterholidays2025_deluxe_event_pass_track_unlock_plus_points" | "poffin" | "pokeball.100" | "pokeball.20" | "pokeball.200" | "postcardstorageupgrade.1" | "remoteraidticket.1" | "remoteraidticket.3" | "starpiece.1" | "starpiece.8" | "STICKER_2023COLLAB_1.3" | "STICKER_2023COLLAB_1.5" | "STICKER_2023COLLAB_2.3" | "STICKER_2023COLLAB_2.5" | "STICKER_2023COLLAB_3.3" | "STICKER_2023COLLAB_3.5" | "STICKER_2023COLLAB_4.3" | "STICKER_2023COLLAB_4.5" | "STICKER_8ANNIV_1.3" | "STICKER_8ANNIV_1.5" | "STICKER_8ANNIV_2.3" | "STICKER_8ANNIV_2.5" | "STICKER_8ANNIV_3.3" | "STICKER_8ANNIV_3.5" | "STICKER_8ANNIV_4.3" | "STICKER_8ANNIV_4.5" | "STICKER_9ANNIV_1.3" | "STICKER_9ANNIV_1.5" | "STICKER_9ANNIV_2.3" | "STICKER_9ANNIV_2.5" | "STICKER_9ANNIV_3.3" | "STICKER_9ANNIV_3.5" | "STICKER_APRILFOOL2023_1.3" | "STICKER_APRILFOOL2023_1.5" | "STICKER_APRILFOOL2023_2.3" | "STICKER_APRILFOOL2023_2.5" | "STICKER_AUDINO.3" | "STICKER_AUDINO.5" | "STICKER_BELLSPROUTCD_1.3" | "STICKER_BELLSPROUTCD_1.5" | "STICKER_BELLSPROUTCD_2.3" | "STICKER_BELLSPROUTCD_2.5" | "STICKER_BELLSPROUTCD_3.3" | "STICKER_BELLSPROUTCD_3.5" | "STICKER_BELLSPROUTCD_4.3" | "STICKER_BELLSPROUTCD_4.5" | "STICKER_BIDOOFDAY_1.3" | "STICKER_BIDOOFDAY_1.5" | "STICKER_BIDOOFDAY_2.3" | "STICKER_BIDOOFDAY_2.5" | "STICKER_BIDOOFDAY_3.3" | "STICKER_BIDOOFDAY_3.5" | "STICKER_BOUNSWEETCD2024_1.3" | "STICKER_BOUNSWEETCD2024_1.5" | "STICKER_BOUNSWEETCD2024_2.3" | "STICKER_BOUNSWEETCD2024_2.5" | "STICKER_BOUNSWEETCD2024_3.3" | "STICKER_BOUNSWEETCD2024_3.5" | "STICKER_BOUNSWEETCD2024_4.3" | "STICKER_BOUNSWEETCD2024_4.5" | "STICKER_CHANSEYCD_1.3" | "STICKER_CHANSEYCD_1.5" | "STICKER_CHANSEYCD_2.3" | "STICKER_CHANSEYCD_2.5" | "STICKER_CHANSEYCD_3.3" | "STICKER_CHANSEYCD_3.5" | "STICKER_CHANSEYCD_4.3" | "STICKER_CHANSEYCD_4.5" | "STICKER_DIAMONDPEARLCHIMCHAR.3" | "STICKER_DIAMONDPEARLCHIMCHAR.5" | "STICKER_DIAMONDPEARLDIALGA.3" | "STICKER_DIAMONDPEARLDIALGA.5" | "STICKER_DIAMONDPEARLLUCARIO.3" | "STICKER_DIAMONDPEARLLUCARIO.5" | "STICKER_DIAMONDPEARLPALKIA.3" | "STICKER_DIAMONDPEARLPALKIA.5" | "STICKER_DIAMONDPEARLPIPLUP.3" | "STICKER_DIAMONDPEARLPIPLUP.5" | "STICKER_DIAMONDPEARLTURTWIG.3" | "STICKER_DIAMONDPEARLTURTWIG.5" | "STICKER_DITTO_1.3" | "STICKER_DITTO_1.5" | "STICKER_DITTO_2.3" | "STICKER_DITTO_2.5" | "STICKER_DITTO_3.3" | "STICKER_DITTO_3.5" | "STICKER_DITTO_4.3" | "STICKER_DITTO_4.5" | "STICKER_DITTO_5.3" | "STICKER_DITTO_5.5" | "STICKER_DITTO_6.3" | "STICKER_DITTO_6.5" | "STICKER_EEVEEFRIENDS_1.3" | "STICKER_EEVEEFRIENDS_1.5" | "STICKER_EEVEEFRIENDS_2.3" | "STICKER_EEVEEFRIENDS_2.5" | "STICKER_EEVEEFRIENDS_3.3" | "STICKER_EEVEEFRIENDS_3.5" | "STICKER_EEVEEFRIENDS_4.3" | "STICKER_EEVEEFRIENDS_4.5" | "STICKER_EEVEEFRIENDS_5.3" | "STICKER_EEVEEFRIENDS_5.5" | "STICKER_EEVEEFRIENDS_6.3" | "STICKER_EEVEEFRIENDS_6.5" | "STICKER_EEVEEFRIENDS_7.3" | "STICKER_EEVEEFRIENDS_7.5" | "STICKER_EEVEEFRIENDS_8.3" | "STICKER_EEVEEFRIENDS_8.5" | "STICKER_EEVEEFRIENDS_9.3" | "STICKER_EEVEEFRIENDS_9.5" | "STICKER_ETERNATUS.3" | "STICKER_ETERNATUS.5" | "STICKER_FALL_2023_1.3" | "STICKER_FALL_2023_1.5" | "STICKER_FALL_2023_2.3" | "STICKER_FALL_2023_2.5" | "STICKER_FALL_2023_3.3" | "STICKER_FALL_2023_3.5" | "STICKER_FALL_2023_4.3" | "STICKER_FALL_2023_4.5" | "STICKER_FALL_2023_5.3" | "STICKER_FALL_2023_5.5" | "STICKER_FALL_2023_6.3" | "STICKER_FALL_2023_6.5" | "STICKER_FALL_2024_1.3" | "STICKER_FALL_2024_1.5" | "STICKER_FALL_2024_2.3" | "STICKER_FALL_2024_2.5" | "STICKER_FALL_2024_3.3" | "STICKER_FALL_2024_3.5" | "STICKER_FALL_2024_4.3" | "STICKER_FALL_2024_4.5" | "STICKER_FALL_2024_5.3" | "STICKER_FALL_2024_5.5" | "STICKER_FALL_2024_6.3" | "STICKER_FALL_2024_6.5" | "STICKER_FALL_2025_1.3" | "STICKER_FALL_2025_1.5" | "STICKER_FALL_2025_2.3" | "STICKER_FALL_2025_2.5" | "STICKER_FALL_2025_3.3" | "STICKER_FALL_2025_3.5" | "STICKER_FALL_2025_4.3" | "STICKER_FALL_2025_4.5" | "STICKER_FALL_SAWSBUCK.3" | "STICKER_FALL_SAWSBUCK.5" | "STICKER_FALL_SHROOMISH.3" | "STICKER_FALL_SHROOMISH.5" | "STICKER_FALL_SKWOVET.3" | "STICKER_FALL_SKWOVET.5" | "STICKER_FALL_TEDDIURSA.3" | "STICKER_FALL_TEDDIURSA.5" | "STICKER_FALL_TREVENANT.3" | "STICKER_FALL_TREVENANT.5" | "STICKER_FALL_VULPIX.3" | "STICKER_FALL_VULPIX.5" | "STICKER_FESTIVALOFLIGHT_MORELULL.3" | "STICKER_FESTIVALOFLIGHT_MORELULL.5" | "STICKER_FESTIVALOFLIGHT_SHIINOTIC.3" | "STICKER_FESTIVALOFLIGHT_SHIINOTIC.5" | "STICKER_FESTIVALOFTHELIGHTS21_V1.3" | "STICKER_FESTIVALOFTHELIGHTS21_V1.5" | "STICKER_FESTIVALOFTHELIGHTS21_V2.3" | "STICKER_FESTIVALOFTHELIGHTS21_V2.5" | "STICKER_FESTIVALOFTHELIGHTS21_V3.3" | "STICKER_FESTIVALOFTHELIGHTS21_V3.5" | "STICKER_FESTIVALOFTHELIGHTS21_V4.3" | "STICKER_FESTIVALOFTHELIGHTS21_V4.5" | "STICKER_FLABEBE_1.3" | "STICKER_FLABEBE_1.5" | "STICKER_FLABEBE_2.3" | "STICKER_FLABEBE_2.5" | "STICKER_FUNAWARI_22_312.3" | "STICKER_FUNAWARI_22_312.5" | "STICKER_FUNWARI_02_0608.3" | "STICKER_FUNWARI_02_0608.5" | "STICKER_FUNWARI_20.3" | "STICKER_FUNWARI_20.5" | "STICKER_FURFROUHEART_1.3" | "STICKER_FURFROUHEART_1.5" | "STICKER_FURFROUHEART_2.3" | "STICKER_FURFROUHEART_2.5" | "STICKER_GIFTTHANKYOU.3" | "STICKER_GIFTTHANKYOU.5" | "STICKER_GIMMIGHOUL_1.3" | "STICKER_GIMMIGHOUL_1.5" | "STICKER_GIMMIGHOUL_2.3" | "STICKER_GIMMIGHOUL_2.5" | "STICKER_GIMMIGHOUL_3.3" | "STICKER_GIMMIGHOUL_3.5" | "STICKER_GIMMIGHOUL_4.3" | "STICKER_GIMMIGHOUL_4.5" | "STICKER_GIMMIGHOUL_5.3" | "STICKER_GIMMIGHOUL_5.5" | "STICKER_GOOMYCD_1.3" | "STICKER_GOOMYCD_1.5" | "STICKER_GOOMYCD_2.3" | "STICKER_GOOMYCD_2.5" | "STICKER_GOOMYCD_3.3" | "STICKER_GOOMYCD_3.5" | "STICKER_GOOMYCD_4.3" | "STICKER_GOOMYCD_4.5" | "STICKER_GOTOUR2025_BADGE.3" | "STICKER_GOTOUR2025_BADGE.5" | "STICKER_GOTOUR2025_KYUREMBLACK.3" | "STICKER_GOTOUR2025_KYUREMBLACK.5" | "STICKER_GOTOUR2025_KYUREMWHITE.3" | "STICKER_GOTOUR2025_KYUREMWHITE.5" | "STICKER_GOTOUR2025_RESHIRAM.3" | "STICKER_GOTOUR2025_RESHIRAM.5" | "STICKER_GOTOUR2025_RZ.3" | "STICKER_GOTOUR2025_RZ.5" | "STICKER_GOTOUR2025_ZEKROM.3" | "STICKER_GOTOUR2025_ZEKROM.5" | "STICKER_GOWA2025_01.3" | "STICKER_GOWA2025_01.5" | "STICKER_GOWA2025_02.3" | "STICKER_GOWA2025_02.5" | "STICKER_GOWA2025_03.3" | "STICKER_GOWA2025_03.5" | "STICKER_GOWA2025_04.3" | "STICKER_GOWA2025_04.5" | "STICKER_GOWA2025_05.3" | "STICKER_GOWA2025_05.5" | "STICKER_HALLOWEEN_BULB.3" | "STICKER_HALLOWEEN_BULB.5" | "STICKER_HALLOWEEN_CHARM.3" | "STICKER_HALLOWEEN_CHARM.5" | "STICKER_HALLOWEEN_GENGARMD.3" | "STICKER_HALLOWEEN_GENGARMD.5" | "STICKER_HALLOWEEN_PIKA.3" | "STICKER_HALLOWEEN_PIKA.5" | "STICKER_HALLOWEEN_SQU.3" | "STICKER_HALLOWEEN_SQU.5" | "STICKER_HALLOWEEN2025_NOIBAT.3" | "STICKER_HALLOWEEN2025_NOIBAT.5" | "STICKER_HALLOWEEN2025_TEDDIURSA.3" | "STICKER_HALLOWEEN2025_TEDDIURSA.5" | "STICKER_HALLOWEEN21_FUWARAID.3" | "STICKER_HALLOWEEN21_FUWARAID.5" | "STICKER_HALLOWEEN21_GHOSTPIKA.3" | "STICKER_HALLOWEEN21_GHOSTPIKA.5" | "STICKER_HALLOWEEN21_PIKACHU.3" | "STICKER_HALLOWEEN21_PIKACHU.5" | "STICKER_HALLOWEEN21_POCHAMA.3" | "STICKER_HALLOWEEN21_POCHAMA.5" | "STICKER_HALLOWEEN24_FROAKIE.3" | "STICKER_HALLOWEEN24_FROAKIE.5" | "STICKER_HALLOWEEN24_ROWLET.3" | "STICKER_HALLOWEEN24_ROWLET.5" | "STICKER_HARU_CHERRIM.3" | "STICKER_HARU_CHERRIM.5" | "STICKER_HARU_DREDEARPIKA.3" | "STICKER_HARU_DREDEARPIKA.5" | "STICKER_HARU_KIREIHANA.3" | "STICKER_HARU_KIREIHANA.5" | "STICKER_HARU_LALANTES.3" | "STICKER_HARU_LALANTES.5" | "STICKER_HARU_MEBUKISHIKIJIK.3" | "STICKER_HARU_MEBUKISHIKIJIK.5" | "STICKER_HARU_MITSUHONEY.3" | "STICKER_HARU_MITSUHONEY.5" | "STICKER_HISUIDISCO_ARCANINE.3" | "STICKER_HISUIDISCO_ARCANINE.5" | "STICKER_HISUIDISCO_BRAVIARY.3" | "STICKER_HISUIDISCO_BRAVIARY.5" | "STICKER_HISUIDISCO_GROWLITHE.3" | "STICKER_HISUIDISCO_GROWLITHE.5" | "STICKER_HOLIDAYEVENT21_1.3" | "STICKER_HOLIDAYEVENT21_1.5" | "STICKER_HOLIDAYEVENT21_2.3" | "STICKER_HOLIDAYEVENT21_2.5" | "STICKER_HOLIDAYEVENT21_3.3" | "STICKER_HOLIDAYEVENT21_3.5" | "STICKER_HOLIDAYEVENT21_4.3" | "STICKER_HOLIDAYEVENT21_4.5" | "STICKER_HOLIDAYEVENT22_CUBCHOO.3" | "STICKER_HOLIDAYEVENT22_CUBCHOO.5" | "STICKER_HOLIDAYEVENT22_SCATTERBUG.3" | "STICKER_HOLIDAYEVENT22_SCATTERBUG.5" | "STICKER_HOLIDAYEVENT22_SNOWPIKA.3" | "STICKER_HOLIDAYEVENT22_SNOWPIKA.5" | "STICKER_HOLIDAYEVENT22_VULPIX.3" | "STICKER_HOLIDAYEVENT22_VULPIX.5" | "STICKER_HOLIDAYEVENT23_CETODDLE.3" | "STICKER_HOLIDAYEVENT23_CETODDLE.5" | "STICKER_HOLIDAYEVENT23_CRYOGONAL.3" | "STICKER_HOLIDAYEVENT23_CRYOGONAL.5" | "STICKER_HOLIDAYEVENT23_PSYDUCK.3" | "STICKER_HOLIDAYEVENT23_PSYDUCK.5" | "STICKER_HOLIDAYEVENT23_SEEL.3" | "STICKER_HOLIDAYEVENT23_SEEL.5" | "STICKER_HOLIDAYEVENT23_VANILLISH.3" | "STICKER_HOLIDAYEVENT23_VANILLISH.5" | "STICKER_HOPPIP_1.3" | "STICKER_HOPPIP_1.5" | "STICKER_HOPPIP_2.3" | "STICKER_HOPPIP_2.5" | "STICKER_HOPPIP_3.3" | "STICKER_HOPPIP_3.5" | "STICKER_HOPPIP_4.3" | "STICKER_HOPPIP_4.5" | "STICKER_LENTILLAUNCH_CAMERA.3" | "STICKER_LENTILLAUNCH_CAMERA.5" | "STICKER_LITTENCD_1.3" | "STICKER_LITTENCD_1.5" | "STICKER_LITTENCD_2.3" | "STICKER_LITTENCD_2.5" | "STICKER_LITTENCD_3.3" | "STICKER_LITTENCD_3.5" | "STICKER_LITTENCD_4.3" | "STICKER_LITTENCD_4.5" | "STICKER_LUVDISC.3" | "STICKER_LUVDISC.5" | "STICKER_MANKEY_1.3" | "STICKER_MANKEY_1.5" | "STICKER_MANKEY_2.3" | "STICKER_MANKEY_2.5" | "STICKER_MANKEY_3.3" | "STICKER_MANKEY_3.5" | "STICKER_MANKEY_4.3" | "STICKER_MANKEY_4.5" | "STICKER_NAGANO_06_312.3" | "STICKER_NAGANO_06_312.5" | "STICKER_NAGANO_11.3" | "STICKER_NAGANO_11.5" | "STICKER_NAGANO_15_312.3" | "STICKER_NAGANO_15_312.5" | "STICKER_NAGANO_BATH.3" | "STICKER_NAGANO_BATH.5" | "STICKER_NAGANO_MARILL.3" | "STICKER_NAGANO_MARILL.5" | "STICKER_NAGANO_YADON.3" | "STICKER_NAGANO_YADON.5" | "STICKER_NEWPOKEMON2_15.3" | "STICKER_NEWPOKEMON2_15.5" | "STICKER_NEWYEARS22_1.3" | "STICKER_NEWYEARS22_1.5" | "STICKER_NEWYEARS22_2.3" | "STICKER_NEWYEARS22_2.5" | "STICKER_NEWYEARS22_3.3" | "STICKER_NEWYEARS22_3.5" | "STICKER_NEWYEARS22_4.3" | "STICKER_NEWYEARS22_4.5" | "STICKER_NOIBAT_CD_1.3" | "STICKER_NOIBAT_CD_1.5" | "STICKER_NOIBAT_CD_2.3" | "STICKER_NOIBAT_CD_2.5" | "STICKER_NOIBAT_CD_3.3" | "STICKER_NOIBAT_CD_3.5" | "STICKER_NOIBAT_CD_4.3" | "STICKER_NOIBAT_CD_4.5" | "STICKER_PGO_FEST_2024_1.3" | "STICKER_PGO_FEST_2024_1.5" | "STICKER_PGO_FEST_2024_2.3" | "STICKER_PGO_FEST_2024_2.5" | "STICKER_PGO_FEST_2024_3.3" | "STICKER_PGO_FEST_2024_3.5" | "STICKER_PGO_FEST_2024_4.3" | "STICKER_PGO_FEST_2024_4.5" | "STICKER_PGO_FEST_2024_5.3" | "STICKER_PGO_FEST_2024_5.5" | "STICKER_PGO_FEST_2024_6.3" | "STICKER_PGO_FEST_2024_6.5" | "STICKER_PGO_FEST_2024_LOGO.3" | "STICKER_PGO_FEST_2024_LOGO.5" | "STICKER_PGO_FEST_2024.3" | "STICKER_PGO_FEST_2024.4" | "STICKER_PGO_FEST_2025_1.3" | "STICKER_PGO_FEST_2025_1.5" | "STICKER_PGO_FEST_2025_2.3" | "STICKER_PGO_FEST_2025_2.5" | "STICKER_PGO_FEST_2025_3.3" | "STICKER_PGO_FEST_2025_3.5" | "STICKER_PGO_FEST_2025_LOGO.3" | "STICKER_PGO_FEST_2025_LOGO.5" | "STICKER_PGO_FEST_2025.3" | "STICKER_PGO_FEST_2025.5" | "STICKER_PGO_FEST_VICTINI_05.3" | "STICKER_PGO_FEST_VICTINI_05.5" | "STICKER_PGO_TOUR_2026_1.3" | "STICKER_PGO_TOUR_2026_1.5" | "STICKER_PGO_TOUR_2026_2.3" | "STICKER_PGO_TOUR_2026_2.5" | "STICKER_PGO_TOUR_2026_3.3" | "STICKER_PGO_TOUR_2026_3.5" | "STICKER_PGO_TOUR_2026_LOGO.3" | "STICKER_PGO_TOUR_2026_LOGO.5" | "STICKER_PGO_TOUR_2026.3" | "STICKER_PGO_TOUR_2026.5" | "STICKER_PGO_WILDAREA_2024_1.3" | "STICKER_PGO_WILDAREA_2024_1.5" | "STICKER_PGO_WILDAREA_2024_2.3" | "STICKER_PGO_WILDAREA_2024_2.5" | "STICKER_PGO_WILDAREA_2024_3.3" | "STICKER_PGO_WILDAREA_2024_3.5" | "STICKER_PGO_WILDAREA_2024_4.3" | "STICKER_PGO_WILDAREA_2024_4.5" | "STICKER_PGO_WILDAREA_2024_LOGO.3" | "STICKER_PGO_WILDAREA_2024_LOGO.5" | "STICKER_PGO_WILDAREA_2024.3" | "STICKER_PGO_WILDAREA_2024.5" | "STICKER_PGOFEST2021_GALARIANZIGZAGOON.3" | "STICKER_PGOFEST2021_GALARIANZIGZAGOON.5" | "STICKER_PGOFEST2021_MELOETTA_1.3" | "STICKER_PGOFEST2021_MELOETTA_1.5" | "STICKER_PGOFEST2021_MELOETTA_2.3" | "STICKER_PGOFEST2021_MELOETTA_2.5" | "STICKER_PGOFEST2021_PONYTA.3" | "STICKER_PGOFEST2021_PONYTA.5" | "STICKER_PGOFEST2022_GROUDON.3" | "STICKER_PGOFEST2022_GROUDON.5" | "STICKER_PGOFEST2022_KIBAGO.3" | "STICKER_PGOFEST2022_KIBAGO.5" | "STICKER_PGOFEST2022_KYOGRE.3" | "STICKER_PGOFEST2022_KYOGRE.5" | "STICKER_PGOFEST2022_PIKACHU.3" | "STICKER_PGOFEST2022_PIKACHU.5" | "STICKER_PGOFEST2022_POCHAMA.3" | "STICKER_PGOFEST2022_POCHAMA.5" | "STICKER_PGOFEST2022_SHAYMIN.3" | "STICKER_PGOFEST2022_SHAYMIN.5" | "STICKER_PIKACHU_JOL.3" | "STICKER_PIKACHU_JOL.5" | "STICKER_POKEMONCHATPALS2_40.3" | "STICKER_POKEMONCHATPALS2_40.5" | "STICKER_PONYTA_1.3" | "STICKER_PONYTA_1.5" | "STICKER_PONYTA_2.3" | "STICKER_PONYTA_2.5" | "STICKER_PONYTA_3.3" | "STICKER_PONYTA_3.5" | "STICKER_PONYTA_4.3" | "STICKER_PONYTA_4.5" | "STICKER_POPPLIOCD_1.3" | "STICKER_POPPLIOCD_1.5" | "STICKER_POPPLIOCD_2.3" | "STICKER_POPPLIOCD_2.5" | "STICKER_POPPLIOCD_3.3" | "STICKER_POPPLIOCD_3.5" | "STICKER_POPPLIOCD_4.3" | "STICKER_POPPLIOCD_4.5" | "STICKER_PSYCHICSPEC21_INKAY.3" | "STICKER_PSYCHICSPEC21_INKAY.5" | "STICKER_PSYCHICSPEC21_INKAY2.3" | "STICKER_PSYCHICSPEC21_INKAY2.5" | "STICKER_ROWLETCD_1.3" | "STICKER_ROWLETCD_1.5" | "STICKER_ROWLETCD_2.3" | "STICKER_ROWLETCD_2.5" | "STICKER_ROWLETCD_3.3" | "STICKER_ROWLETCD_3.5" | "STICKER_ROWLETCD_4.3" | "STICKER_ROWLETCD_4.5" | "STICKER_SEWADDLECD_1.3" | "STICKER_SEWADDLECD_1.5" | "STICKER_SEWADDLECD_2.3" | "STICKER_SEWADDLECD_2.5" | "STICKER_SEWADDLECD_3.3" | "STICKER_SEWADDLECD_3.5" | "STICKER_SEWADDLECD_4.3" | "STICKER_SEWADDLECD_4.5" | "STICKER_SHELMET_KARRABLAST_1.3" | "STICKER_SHELMET_KARRABLAST_1.5" | "STICKER_SHELMET_KARRABLAST_2.3" | "STICKER_SHELMET_KARRABLAST_2.5" | "STICKER_SHELMET_KARRABLAST_3.3" | "STICKER_SHELMET_KARRABLAST_3.5" | "STICKER_SLOWPOKE_1.3" | "STICKER_SLOWPOKE_1.5" | "STICKER_SLOWPOKE_2.3" | "STICKER_SLOWPOKE_2.5" | "STICKER_SLOWPOKE_3.3" | "STICKER_SLOWPOKE_3.5" | "STICKER_SLOWPOKE_4.3" | "STICKER_SLOWPOKE_4.5" | "STICKER_SPHEAL_1.3" | "STICKER_SPHEAL_1.5" | "STICKER_SPHEAL_2.3" | "STICKER_SPHEAL_2.5" | "STICKER_SPHEAL_3.3" | "STICKER_SPHEAL_3.5" | "STICKER_SPHEAL_4.3" | "STICKER_SPHEAL_4.5" | "STICKER_SPRIGATITO_1.3" | "STICKER_SPRIGATITO_1.5" | "STICKER_SPRIGATITO_2.3" | "STICKER_SPRIGATITO_2.5" | "STICKER_SPRIGATITO_3.3" | "STICKER_SPRIGATITO_3.5" | "STICKER_SPRIGATITO_4.3" | "STICKER_SPRIGATITO_4.5" | "STICKER_SPRING_2024_1.3" | "STICKER_SPRING_2024_1.5" | "STICKER_SPRING_2024_2.3" | "STICKER_SPRING_2024_2.5" | "STICKER_SPRING_2024_3.3" | "STICKER_SPRING_2024_3.5" | "STICKER_SPRING_2024_4.3" | "STICKER_SPRING_2024_4.5" | "STICKER_SPRING_2024_5.3" | "STICKER_SPRING_2024_5.5" | "STICKER_SPRING_2024_6.3" | "STICKER_SPRING_2024_6.5" | "STICKER_SPRING_2025_1.3" | "STICKER_SPRING_2025_1.5" | "STICKER_SPRING_2025_2.3" | "STICKER_SPRING_2025_2.5" | "STICKER_SPRING_2025_3.3" | "STICKER_SPRING_2025_3.5" | "STICKER_SPRING_2025_4.3" | "STICKER_SPRING_2025_4.5" | "STICKER_SPRING_2026_1.3" | "STICKER_SPRING_2026_1.5" | "STICKER_SPRING_2026_2.3" | "STICKER_SPRING_2026_2.5" | "STICKER_SPRING_2026_3.3" | "STICKER_SPRING_2026_3.5" | "STICKER_SPRING_2026_4.3" | "STICKER_SPRING_2026_4.5" | "STICKER_SPRING_EIEVUI.3" | "STICKER_SPRING_EIEVUI.5" | "STICKER_SPRING_HAPINAS.3" | "STICKER_SPRING_HAPINAS.5" | "STICKER_SPRING_MIMIROL.3" | "STICKER_SPRING_MIMIROL.5" | "STICKER_SPRING_NIMPHIA.3" | "STICKER_SPRING_NIMPHIA.5" | "STICKER_SPRING_PIKACHU.3" | "STICKER_SPRING_PIKACHU.5" | "STICKER_SPRING_PIPITO.3" | "STICKER_SPRING_PIPITO.5" | "STICKER_STUFFUL_1.3" | "STICKER_STUFFUL_1.5" | "STICKER_STUFFUL_2.3" | "STICKER_STUFFUL_2.5" | "STICKER_STUFFUL_3.3" | "STICKER_STUFFUL_3.5" | "STICKER_STUFFUL_4.3" | "STICKER_STUFFUL_4.5" | "STICKER_SUMMER_1.3" | "STICKER_SUMMER_1.5" | "STICKER_SUMMER_2.3" | "STICKER_SUMMER_2.5" | "STICKER_SUMMER_2023_BLASTOISE.3" | "STICKER_SUMMER_2023_BLASTOISE.5" | "STICKER_SUMMER_2023_BUTTERFREE.3" | "STICKER_SUMMER_2023_BUTTERFREE.5" | "STICKER_SUMMER_2023_CLAMPERL.3" | "STICKER_SUMMER_2023_CLAMPERL.5" | "STICKER_SUMMER_2023_LEDIAN.3" | "STICKER_SUMMER_2023_LEDIAN.5" | "STICKER_SUMMER_2023_SAWSBUCK.3" | "STICKER_SUMMER_2023_SAWSBUCK.5" | "STICKER_SUMMER_2023_SQUIRTLE.3" | "STICKER_SUMMER_2023_SQUIRTLE.5" | "STICKER_SUMMER_2024_1.3" | "STICKER_SUMMER_2024_1.5" | "STICKER_SUMMER_2024_2.3" | "STICKER_SUMMER_2024_2.5" | "STICKER_SUMMER_2024_3.3" | "STICKER_SUMMER_2024_3.5" | "STICKER_SUMMER_2024_4.3" | "STICKER_SUMMER_2024_4.5" | "STICKER_SUMMER_2024_5.3" | "STICKER_SUMMER_2024_5.5" | "STICKER_SUMMER_2024_6.3" | "STICKER_SUMMER_2024_6.5" | "STICKER_SUMMER_2025_1.3" | "STICKER_SUMMER_2025_1.5" | "STICKER_SUMMER_2025_2.3" | "STICKER_SUMMER_2025_2.5" | "STICKER_SUMMER_2025_3.3" | "STICKER_SUMMER_2025_3.5" | "STICKER_SUMMER_2025_4.3" | "STICKER_SUMMER_2025_4.5" | "STICKER_SUMMER_3.3" | "STICKER_SUMMER_3.5" | "STICKER_SUMMER_4.3" | "STICKER_SUMMER_4.5" | "STICKER_SUMMER_5.3" | "STICKER_SUMMER_5.5" | "STICKER_SUMMER_6.3" | "STICKER_SUMMER_6.5" | "STICKER_SWORDSHIELD21_1.3" | "STICKER_SWORDSHIELD21_1.5" | "STICKER_SWORDSHIELD21_2.3" | "STICKER_SWORDSHIELD21_2.5" | "STICKER_SWORDSHIELD21_3.3" | "STICKER_SWORDSHIELD21_3.5" | "STICKER_SWORDSHIELD21_4.3" | "STICKER_SWORDSHIELD21_4.5" | "STICKER_SWORDSHIELD21_5.3" | "STICKER_SWORDSHIELD21_5.5" | "STICKER_TL_BLANCHE.3" | "STICKER_TL_BLANCHE.5" | "STICKER_TL_CANDELA.3" | "STICKER_TL_CANDELA.5" | "STICKER_TL_SPARK.3" | "STICKER_TL_SPARK.5" | "STICKER_TR_ARLO.3" | "STICKER_TR_ARLO.5" | "STICKER_TR_CLIFF.3" | "STICKER_TR_CLIFF.5" | "STICKER_TR_SIERRA.3" | "STICKER_TR_SIERRA.5" | "STICKER_TYNAMOCD_1.3" | "STICKER_TYNAMOCD_1.5" | "STICKER_TYNAMOCD_2.3" | "STICKER_TYNAMOCD_2.5" | "STICKER_TYNAMOCD_3.3" | "STICKER_TYNAMOCD_3.5" | "STICKER_TYNAMOCD_4.3" | "STICKER_TYNAMOCD_4.5" | "STICKER_VALENTINE2023_1.3" | "STICKER_VALENTINE2023_1.5" | "STICKER_VALENTINE2023_2.3" | "STICKER_VALENTINE2023_2.5" | "STICKER_VALENTINE2023_3.3" | "STICKER_VALENTINE2023_3.5" | "STICKER_WCS2025_CAR_GROUP.3" | "STICKER_WCS2025_CAR_GROUP.5" | "STICKER_WCS2025_JIGGLYPUFF.3" | "STICKER_WCS2025_JIGGLYPUFF.5" | "STICKER_WCS2025_MURKROW.3" | "STICKER_WCS2025_MURKROW.5" | "STICKER_WCS2025_PIKACHU.3" | "STICKER_WCS2025_PIKACHU.5" | "STICKER_WINTER_2024_1.3" | "STICKER_WINTER_2024_1.5" | "STICKER_WINTER_2024_2.3" | "STICKER_WINTER_2024_2.5" | "STICKER_WINTER_2024_3.3" | "STICKER_WINTER_2024_3.5" | "STICKER_WINTER_2024_4.3" | "STICKER_WINTER_2024_4.5" | "STICKER_WINTER_2024_5.3" | "STICKER_WINTER_2024_5.5" | "STICKER_WINTER_2024_6.3" | "STICKER_WINTER_2024_6.5" | "STICKER_WINTER_AMAURA.3" | "STICKER_WINTER_AMAURA.5" | "STICKER_WINTER_DARUMAKA.3" | "STICKER_WINTER_DARUMAKA.5" | "STICKER_WINTER_GLACEON.3" | "STICKER_WINTER_GLACEON.5" | "STICKER_WINTER_PIKACHU.3" | "STICKER_WINTER_PIKACHU.5" | "STICKER_WINTER_SAWSBUCK.3" | "STICKER_WINTER_SAWSBUCK.5" | "STICKER_WINTER_SNORUNT.3" | "STICKER_WINTER_SNORUNT.5" | "STICKER_WINTER2023_1.3" | "STICKER_WINTER2023_1.5" | "STICKER_WINTER2023_2.3" | "STICKER_WINTER2023_2.5" | "STICKER_WINTER2023_3.3" | "STICKER_WINTER2023_3.5" | "STICKER_WINTER2023_4.3" | "STICKER_WINTER2023_4.5" | "STICKER_WINTER2023_5.3" | "STICKER_WINTER2023_5.5" | "STICKER_WINTER2023_6.3" | "STICKER_WINTER2023_6.5" | "STICKER_WINTER2025_1.3" | "STICKER_WINTER2025_1.5" | "STICKER_WINTER2025_2.3" | "STICKER_WINTER2025_2.5" | "STICKER_WINTER2025_3.3" | "STICKER_WINTER2025_3.5" | "STICKER_WINTER2025_4.3" | "STICKER_WINTER2025_4.5" | "STICKER_YURUTTO_12.3" | "STICKER_YURUTTO_12.5" | "STICKER_YURUTTO_24.3" | "STICKER_YURUTTO_24.5" | "troydisk.1" | "troydisk.8" | "web-community-ambassador-bonus-bundle-2025" | "web-go-fest-hatch-box-2023" | "web-go-fest-raid-box-2023" | "web-raid-box-071323" | "web-seasonal-delights-2024-box" | "web-voyager-box-071323";
		skuDisableTime?: "2020-07-26T18:00:00" | "2022-06-02T13:00:00" | "2023-08-27T23:59:00" | "2023-11-24T18:15:00" | "2024-06-15T13:00:00" | "2024-10-10T22:00:00" | "2024-10-14T22:00:00" | "2024-11-04T10:00:00" | "2024-11-05T22:00:00" | "2024-11-30T20:00:00" | "2025-01-02T00:00:00" | "2025-03-24T00:00:00" | "2025-04-08T20:00:00" | "2025-04-09T10:00:00" | "2025-04-22T20:00:00" | "2025-05-06T20:00:00" | "2025-06-04T10:00:00" | "2025-06-22T23:59:59" | "2025-06-29T23:59:59" | "2025-07-06T20:00:00" | "2025-08-26T21:00:00" | "2025-11-16T18:00:00" | "2025-11-30T20:00:00" | "2025-12-29T23:59:00" | "2025-12-31T20:00:00" | "2026-01-08T20:00:00" | "2026-01-25T23:59:00" | "2026-02-01T20:00:00" | "2026-02-07T20:00:00" | "2026-03-01T18:00:00" | "2026-03-15T20:00:00" | "2026-03-21T17:00:00" | "2026-03-28T17:00:00" | "2026-04-04T17:00:00" | "2026-04-11T17:00:00" | "2026-04-18T17:00:00" | "2026-04-25T17:00:00" | "2026-05-02T17:00:00" | "2026-05-07T10:00:00";
		skuDisableTimeUtcMs?: "1595786400000" | "1654174800000" | "1693180740000" | "1700849700000" | "1718456400000" | "1728597600000" | "1728943200000" | "1730714400000" | "1730844000000" | "1732996800000" | "1735776000000" | "1742774400000" | "1744142400000" | "1744192800000" | "1745352000000" | "1746561600000" | "1749031200000" | "1750636799000" | "1751241599000" | "1751832000000" | "1756242000000" | "1763316000000" | "1764532800000" | "1767052740000" | "1767211200000" | "1767902400000" | "1769385540000" | "1769976000000" | "1770494400000" | "1772388000000" | "1773604800000" | "1774112400000" | "1774717200000" | "1775322000000" | "1775926800000" | "1776531600000" | "1777136400000" | "1777741200000" | "1778148000000";
		skuEnableTime?: "2019-03-14T08:00:00" | "2019-10-31T21:00:00" | "2020-01-01T00:00:00" | "2020-06-02T08:00:00" | "2022-03-01T00:00:00" | "2023-01-01T11:00:01" | "2023-01-01T11:00:03" | "2023-01-01T11:00:04" | "2023-02-27T20:00:00" | "2023-04-06T10:00:00" | "2023-07-31T00:00:00" | "2023-10-05T10:00:00" | "2023-10-06T10:00:00" | "2023-10-10T10:00:00" | "2023-10-10T11:00:00" | "2024-01-01T00:00:00" | "2024-08-18T10:00:00" | "2024-10-21T10:00:00" | "2024-11-10T10:00:00" | "2024-12-18T10:00:00" | "2025-01-01T00:00:00" | "2025-02-12T10:00:00" | "2025-03-03T10:00:00" | "2025-03-17T10:00:00" | "2025-03-31T10:00:00" | "2025-04-07T10:00:00" | "2025-04-14T10:00:00" | "2025-04-28T10:00:00" | "2025-05-05T10:00:00" | "2025-06-02T00:00:00";
		skuEnableTimeUtcMs?: "1552550400000" | "1572555600000" | "1577836800000" | "1591084800000" | "1646092800000" | "1672570801000" | "1672570803000" | "1672570804000" | "1677528000000" | "1680775200000" | "1690761600000" | "1696500000000" | "1696586400000" | "1696932000000" | "1696935600000" | "1704067200000" | "1723975200000" | "1729504800000" | "1731232800000" | "1734516000000" | "1735689600000" | "1739354400000" | "1740996000000" | "1742205600000" | "1743415200000" | "1744020000000" | "1744624800000" | "1745834400000" | "1746439200000" | "1748822400000";
		sortOrder?: -99999 | -99998 | -99997 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 | 160 | 161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 | 171 | 172 | 173 | 174 | 175 | 176 | 177 | 178 | 179 | 180 | 181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 | 191 | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 209 | 210 | 211 | 212 | 213 | 214 | 215 | 216 | 217 | 218 | 219 | 220 | 221 | 222 | 223 | 224 | 225 | 226 | 227 | 228 | 229 | 230 | 231 | 232 | 233 | 234 | 235 | 236 | 237 | 238 | 239 | 240 | 241 | 242 | 243 | 244 | 245 | 246 | 247 | 248 | 249 | 250 | 251 | 252 | 253 | 254 | 255 | 256 | 257 | 258 | 259 | 260 | 261 | 262 | 263 | 264 | 265 | 266 | 267 | 268 | 269 | 270 | 271 | 272 | 273 | 274 | 275 | 276 | 277 | 278 | 279 | 280 | 281 | 282 | 283 | 284 | 285 | 286 | 287 | 288 | 289 | 290 | 291 | 292 | 293 | 294 | 295 | 296 | 297 | 298 | 299 | 300 | 398 | 399 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 477 | 478 | 479 | 480 | 481 | 482 | 483 | 484 | 485 | 486 | 487 | 488 | 489 | 490 | 491 | 492 | 493 | 494 | 495 | 496 | 497 | 498 | 499 | 500 | 987 | 988 | 989 | 990 | 991 | 992 | 993 | 994 | 995 | 996 | 997 | 998 | 999 | 1000;
		spriteId?: "battlepassticket.1" | "bundle.flair.1" | "bundle.general.adventure.1" | "bundle.general.freebox.large.1" | "bundle.general.freebox.small.1" | "bundle.general.premiumbox.large.1" | "bundle.general.premiumbox.medium.1" | "bundle.general.premiumbox.small.1" | "bundle.general.remotebox.large.1" | "bundle.general.remotebox.medium.1" | "bundle.general.remotebox.small.1" | "bundle.general1.free.1" | "bundle.general1.large.1" | "bundle.general1.large.2" | "bundle.general1.medium.1" | "bundle.general1.medium.2" | "bundle.general1.rocket.1" | "bundle.general1.small.1" | "bundle.general1.small.2" | "bundle.general1.tiny.1" | "bundle.general2.free.1" | "bundle.general2.large.1" | "bundle.general2.large.2" | "bundle.general2.medium.2" | "bundle.general2.small.1" | "bundle.general2.small.2" | "bundle.general3.large.1" | "bundle.general3.medium.1" | "bundle.general3.small.1" | "bundle.general4.large.1" | "bundle.general4.medium.1" | "bundle.general4.small.1" | "bundle.general5.small.1" | "bundle.general6.small.1" | "bundle.halloween.adventure.1" | "bundle.halloween.large.1" | "bundle.halloween.small.1" | "bundle.latam.large.1" | "bundle.latam.small.1" | "bundle.xmas.large.1" | "bundle.xmas.medium.1" | "bundle.xmas.small.1" | "bundle1.sprite.a" | "bundle1.sprite.c" | "bundle1.sprite.d" | "bundle2.sprite.a" | "bundle2.sprite.b" | "bundle2.sprite.c" | "bundle3.sprite.b" | "bundle3.sprite.d" | "citysafariticket0.1" | "citysafariticket1.1" | "citysafariticket2.1" | "enhanced_currency_large" | "enhanced_currency_large_3rrp" | "enhanced_currency_medium" | "enhanced_currency_medium_rrp" | "evergreenticket.1" | "general1.ticket.1" | "general1.ticket.2" | "general1.ticket.4" | "general1.ticket.5" | "general2.ticket.10" | "general2.ticket.2" | "general2.ticket.5" | "general2.ticket.6" | "general2.ticket.7" | "general2.ticket.8" | "general2.ticket.9" | "general4.medium.1" | "general4.small.1" | "incenseordinary.1" | "incenseordinary.8" | "incubatorbasic.1" | "incubatorsuper.1" | "leadermap.1" | "luckyegg.1" | "luckyegg.8" | "max_boost.1" | "max_boost.3" | "maxpotion.10" | "maxrevive.6" | "mp_replenish.1" | "mp_replenish.3" | "paidraidticket.1" | "paidraidticket.3" | "pgorelease.bundle.general1.large.1" | "pgorelease.bundle.general5.small.1" | "poffin" | "pokeball.100" | "pokeball.20" | "pokeball.200" | "pokecoin.14500" | "pokecoin.2500" | "pokecoin.5200" | "postcardstorageupgrade.1" | "remoteraidticket.1" | "remoteraidticket.3" | "starpiece.1" | "starpiece.8" | "troydisk.1" | "troydisk.8" | "wildball.20" | "wildball.5" | "wildball.50";
		title?: "ace_box_title" | "battle_box" | "boost_box_title" | "bundle.citysafari.box.1_title" | "bundle.diademuertos.box.1_title" | "bundle.general1.large.1_title" | "bundle.general1.medium.1_title" | "bundle.general1.rocket.1_title" | "bundle.general1.small.1_title" | "bundle.general1.tiny.1_title" | "bundle.general1.tiny.2_title" | "bundle.general1.tiny.3_title" | "bundle.general1.tiny.4_title" | "bundle.general2.free.1_title" | "bundle.general2.large.1_title" | "bundle.general2.medium.1_title" | "bundle.general3.medium.1_title" | "bundle.general4.small.1_title" | "bundle.general5.small.1_title" | "bundle.halloween.adventure.1_title" | "bundle.halloween.large.1_title" | "bundle.halloween.small.1_title" | "bundle.midautumn.incubator" | "bundle.midautumn.maxparticle" | "bundle.midautumn.raid" | "bundle.newyears.medium.1_title" | "bundle.newyears.small.1_title" | "bundle.night.treats.incense_title" | "bundle.night.treats.raid_title" | "bundle.regional.box.1_title" | "bundle.silk.box.1_title" | "bundle.wicker.box.1_title" | "bundle.xmas.large.1_title" | "bundle.xmas.medium.1_title" | "bundle.xmas.small.1_title" | "catch_box" | "combat_battle" | "event_pass_gofest2025_premium_track_plus_points_title" | "event_pass_gofest2025_premium_track_title" | "event_pass_gowa_2025_premium_title" | "expert_box_title" | "explorer_box_title" | "external_box_name_2" | "flavoredlure_bundle_title" | "general1.ticket_CD_Tinkatink26_title" | "general1.ticket.2_WaterRRD26_title" | "general1.ticket.4_Riolu0426_title" | "general1.ticket.5_IntoTDepths26_title" | "general1.ticket.5.ENTEI_SHADOW_RAID_DAY" | "general2.ticket._GOWA25_title" | "general2.ticket.6.REPLAY_GO_BIGGER" | "general2.ticket.7_masterball25_title" | "general2.ticket.8_FinalJustice2025_title" | "general2.ticket.9_fashionRaidDay26_title" | "general2.ticket2.CATCH_MASTERY_ORICORIO" | "general2.ticket5.GMAX_PIKACHU_MAX_BATTLE" | "gimmighoul_goody_box" | "gofest_2025_finale_deluxe_event_pass_track_unlock_plus_points_title" | "gofest_2025_finale_deluxe_event_pass_track_unlock_title" | "gold_box_title" | "gosafariball.10_title" | "gosafariball.25_title" | "gosafariball.50_title" | "gotour_2025_deluxe_event_pass_track_unlock_plus_points_title" | "gotour_2025_deluxe_event_pass_track_unlock_title" | "GOTour_2026_ticket_title" | "gowa_2025_deluxe_event_pass_track_unlock_plus_points_title" | "great_raid_box_title" | "great_storage_box" | "hatch_box" | "holiday_box" | "iap_battle_pass_ticket_name" | "iris_flair_free_title" | "item_ticket_city_safari_00_name" | "item_ticket_city_safari_01_name" | "item_ticket_city_safari_02_name" | "itemleadermap_title" | "journeyer_box_title" | "legend_box_title" | "master_raid_box_title" | "masterwork_jirachi_title" | "max_battler_box" | "maxpotion.10_title" | "MAXPOTION.5_TITLE" | "MAXREVIVE.3_TITLE" | "maxrevive.6_title" | "new_years_box" | "oneyearanniversary.1_title" | "pgorelease.general1.ticket.2_PawPrint_20250620_Title" | "POSTCARD_EXPANSION_1_title" | "raiding_box" | "remote_max_battler_box" | "remote_raid_pass_box" | "remoteraidticket.3_title" | "season_pass_premium_track_plus_six_ranks_title_shockingly_good_2026" | "season_pass_premium_track_plus_six_ranks_title_steeled_resolve_2026" | "season_pass_premium_track_plus_six_ranks_title_sustainabilityweek2026" | "season_pass_premium_track_plus_ten_ranks_title_30anniv_2026" | "season_pass_premium_track_plus_ten_ranks_title_april" | "season_pass_premium_track_plus_ten_ranks_title_bugoutbuddies2026" | "season_pass_premium_track_plus_ten_ranks_title_halloween_2025" | "season_pass_premium_track_plus_ten_ranks_title_mar" | "season_pass_premium_track_plus_ten_ranks_title_may" | "season_pass_premium_track_plus_ten_ranks_title_winter_holidays_2025" | "season_pass_premium_track_title_30anniv_2026" | "season_pass_premium_track_title_april" | "season_pass_premium_track_title_bugoutbuddies2026" | "season_pass_premium_track_title_halloween_2025" | "season_pass_premium_track_title_mar" | "season_pass_premium_track_title_may" | "season_pass_premium_track_title_shockingly_good_2026" | "season_pass_premium_track_title_steeled_resolve_2026" | "season_pass_premium_track_title_sustainabilityweek2026" | "season_pass_premium_track_title_winter_holidays_2025" | "seasonal_delights_box" | "sku.name.web-gowa-2024-box-1" | "sku.name.web-gowa-2024-box-2" | "sku.name.web-gowa-2024-box-3" | "solstice_box" | "standard_raid_box_title" | "sticker_box" | "TM_Expert_Box" | "trainee_box_title" | "ultra_raid_box_title" | "voyager_box_title" | "vss_entry_premium_title";
		totalValue?: 72 | 140 | 200 | 250 | 295 | 300 | 320 | 450 | 500 | 550 | 585 | 640 | 800 | 885 | 1000 | 1200 | 1235 | 1395 | 1735 | 1750 | 1900 | 1910 | 2350 | 3500 | 3600 | 4735 | 5235 | 6175 | 11235;
		webstoreSkuId?: "web-2025-anniversary-ticket-box" | "web-2025-gowa-ticket-box" | "web-catch-mastery-feb-26-ticket-box" | "web-encounter-jan-26-ticket-box" | "web-fashion-raid-2026-ticket-box" | "web-gmax-kanto-box-ultra" | "web-gmax-pika-ticket-box" | "web-gotour-26-ticket-box" | "web-masterball-25-ticket-box" | "web-riolu-hatch-day-ultra" | "web-shadow-entei-raid-box-ultra" | "web-tinkatink-cd-deluxe" | "web-water-research-day-ticket-box";
		webstoreSkuPriceE6?: 1990000 | 4990000 | 7990000 | 9990000 | 11990000;
	};
}

export type IapItemDisplayApril12026DeluxeEventPassTrackUnlock = IapItemDisplay<"APRIL1_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK">;
export type IapItemDisplayApril12026DeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"APRIL1_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS">;
export type IapItemDisplayApril22026DeluxeEventPassTrackUnlock = IapItemDisplay<"APRIL2_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK">;
export type IapItemDisplayApril22026DeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"APRIL2_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS">;
export type IapItemDisplayApril32026DeluxeEventPassTrackUnlock = IapItemDisplay<"APRIL3_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK">;
export type IapItemDisplayApril32026DeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"APRIL3_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS">;
export type IapItemDisplayBundleEc200Rpp1 = IapItemDisplay<"BUNDLE_EC_200_RPP_1">;
export type IapItemDisplayBundleEc600Rpp3 = IapItemDisplay<"BUNDLE_EC_600_RPP_3">;
export type IapItemDisplayEventPassApril1SeasonStoreRedirect = IapItemDisplay<"EVENT_PASS_APRIL1_SEASON_STORE_REDIRECT">;
export type IapItemDisplayEventPassApril3EventStoreRedirect = IapItemDisplay<"EVENT_PASS_APRIL3_EVENT_STORE_REDIRECT">;
export type IapItemDisplayEventPassGofest2025FinaleStoreRedirect = IapItemDisplay<"EVENT_PASS_GOFEST2025_FINALE_STORE_REDIRECT">;
export type IapItemDisplayEventPassGofest2025GlobalStoreRedirect = IapItemDisplay<"EVENT_PASS_GOFEST2025_GLOBAL_STORE_REDIRECT">;
export type IapItemDisplayEventPassGotour2025GlobalStoreRedirect = IapItemDisplay<"EVENT_PASS_GOTOUR2025_GLOBAL_STORE_REDIRECT">;
export type IapItemDisplayEventPassGowild2025GlobalStoreRedirect = IapItemDisplay<"EVENT_PASS_GOWILD2025_GLOBAL_STORE_REDIRECT">;
export type IapItemDisplayEventPassHalloween2025SeasonStoreRedirect = IapItemDisplay<"EVENT_PASS_HALLOWEEN2025_SEASON_STORE_REDIRECT">;
export type IapItemDisplayEventPassMarch1SeasonStoreRedirect = IapItemDisplay<"EVENT_PASS_MARCH1_SEASON_STORE_REDIRECT">;
export type IapItemDisplayEventPassMarch2SeasonStoreRedirect = IapItemDisplay<"EVENT_PASS_MARCH2_SEASON_STORE_REDIRECT">;
export type IapItemDisplayEventPassMonth1SeasonStoreRedirect = IapItemDisplay<"EVENT_PASS_MONTH1_SEASON_STORE_REDIRECT">;
export type IapItemDisplayEventPassMonth2SeasonStoreRedirect = IapItemDisplay<"EVENT_PASS_MONTH2_SEASON_STORE_REDIRECT">;
export type IapItemDisplayEventPassMonth3SeasonStoreRedirect = IapItemDisplay<"EVENT_PASS_MONTH3_SEASON_STORE_REDIRECT">;
export type IapItemDisplayEventPassWinterholidays2025SeasonStoreRedirect = IapItemDisplay<"EVENT_PASS_WINTERHOLIDAYS2025_SEASON_STORE_REDIRECT">;
export type IapItemDisplayFlairFreeBundle0 = IapItemDisplay<"FLAIR_FREE_BUNDLE_0">;
export type IapItemDisplayGofest2025FinaleDeluxeEventPassTrackUnlock = IapItemDisplay<"GOFEST2025_FINALE_DELUXE_EVENT_PASS_TRACK_UNLOCK">;
export type IapItemDisplayGofest2025FinaleDeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"GOFEST2025_FINALE_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS">;
export type IapItemDisplayGofest2025DeluxeEventPassTrackUnlock = IapItemDisplay<"GOFEST_2025_DELUXE_EVENT_PASS_TRACK_UNLOCK">;
export type IapItemDisplayGofest2025DeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"GOFEST_2025_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS">;
export type IapItemDisplayGotour2025DeluxeEventPassTrackUnlock = IapItemDisplay<"GOTOUR_2025_DELUXE_EVENT_PASS_TRACK_UNLOCK">;
export type IapItemDisplayGotour2025DeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"GOTOUR_2025_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS">;
export type IapItemDisplayGowild2025DeluxeEventPassTrackUnlock = IapItemDisplay<"GOWILD_2025_DELUXE_EVENT_PASS_TRACK_UNLOCK">;
export type IapItemDisplayGowild2025DeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"GOWILD_2025_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS">;
export type IapItemDisplayGoSafariBallIap10 = IapItemDisplay<"GO_SAFARI_BALL_IAP_10">;
export type IapItemDisplayGoSafariBallIap25 = IapItemDisplay<"GO_SAFARI_BALL_IAP_25">;
export type IapItemDisplayGoSafariBallIap50 = IapItemDisplay<"GO_SAFARI_BALL_IAP_50">;
export type IapItemDisplayHalloween2025DeluxeEventPassTrackUnlock = IapItemDisplay<"HALLOWEEN2025_DELUXE_EVENT_PASS_TRACK_UNLOCK">;
export type IapItemDisplayHalloween2025DeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"HALLOWEEN2025_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS">;
export type IapItemDisplayItemEnhancedCurrency200 = IapItemDisplay<"ITEM_ENHANCED_CURRENCY_200">;
export type IapItemDisplayItemEnhancedCurrency600 = IapItemDisplay<"ITEM_ENHANCED_CURRENCY_600">;
export type IapItemDisplayMarch12026DeluxeEventPassTrackUnlock = IapItemDisplay<"MARCH1_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK">;
export type IapItemDisplayMarch12026DeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"MARCH1_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS">;
export type IapItemDisplayMarch22026DeluxeEventPassTrackUnlock = IapItemDisplay<"MARCH2_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK">;
export type IapItemDisplayMarch22026DeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"MARCH2_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS">;
export type IapItemDisplayMonth1DeluxeEventPassTrackUnlock = IapItemDisplay<"MONTH1_DELUXE_EVENT_PASS_TRACK_UNLOCK">;
export type IapItemDisplayMonth1DeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"MONTH1_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS">;
export type IapItemDisplayMonth2DeluxeEventPassTrackUnlock = IapItemDisplay<"MONTH2_DELUXE_EVENT_PASS_TRACK_UNLOCK">;
export type IapItemDisplayMonth2DeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"MONTH2_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS">;
export type IapItemDisplayMonth3DeluxeEventPassTrackUnlock = IapItemDisplay<"MONTH3_DELUXE_EVENT_PASS_TRACK_UNLOCK">;
export type IapItemDisplayMonth3DeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"MONTH3_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS">;
export type IapItemDisplaySticker2023collab13 = IapItemDisplay<"STICKER_2023COLLAB_1.3">;
export type IapItemDisplaySticker2023collab15 = IapItemDisplay<"STICKER_2023COLLAB_1.5">;
export type IapItemDisplaySticker2023collab23 = IapItemDisplay<"STICKER_2023COLLAB_2.3">;
export type IapItemDisplaySticker2023collab25 = IapItemDisplay<"STICKER_2023COLLAB_2.5">;
export type IapItemDisplaySticker2023collab33 = IapItemDisplay<"STICKER_2023COLLAB_3.3">;
export type IapItemDisplaySticker2023collab35 = IapItemDisplay<"STICKER_2023COLLAB_3.5">;
export type IapItemDisplaySticker2023collab43 = IapItemDisplay<"STICKER_2023COLLAB_4.3">;
export type IapItemDisplaySticker2023collab45 = IapItemDisplay<"STICKER_2023COLLAB_4.5">;
export type IapItemDisplaySticker8anniv13 = IapItemDisplay<"STICKER_8ANNIV_1.3">;
export type IapItemDisplaySticker8anniv15 = IapItemDisplay<"STICKER_8ANNIV_1.5">;
export type IapItemDisplaySticker8anniv23 = IapItemDisplay<"STICKER_8ANNIV_2.3">;
export type IapItemDisplaySticker8anniv25 = IapItemDisplay<"STICKER_8ANNIV_2.5">;
export type IapItemDisplaySticker8anniv33 = IapItemDisplay<"STICKER_8ANNIV_3.3">;
export type IapItemDisplaySticker8anniv35 = IapItemDisplay<"STICKER_8ANNIV_3.5">;
export type IapItemDisplaySticker8anniv43 = IapItemDisplay<"STICKER_8ANNIV_4.3">;
export type IapItemDisplaySticker8anniv45 = IapItemDisplay<"STICKER_8ANNIV_4.5">;
export type IapItemDisplaySticker9anniv13 = IapItemDisplay<"STICKER_9ANNIV_1.3">;
export type IapItemDisplaySticker9anniv15 = IapItemDisplay<"STICKER_9ANNIV_1.5">;
export type IapItemDisplaySticker9anniv23 = IapItemDisplay<"STICKER_9ANNIV_2.3">;
export type IapItemDisplaySticker9anniv25 = IapItemDisplay<"STICKER_9ANNIV_2.5">;
export type IapItemDisplaySticker9anniv33 = IapItemDisplay<"STICKER_9ANNIV_3.3">;
export type IapItemDisplaySticker9anniv35 = IapItemDisplay<"STICKER_9ANNIV_3.5">;
export type IapItemDisplayStickerAprilfool202313 = IapItemDisplay<"STICKER_APRILFOOL2023_1.3">;
export type IapItemDisplayStickerAprilfool202315 = IapItemDisplay<"STICKER_APRILFOOL2023_1.5">;
export type IapItemDisplayStickerAprilfool202323 = IapItemDisplay<"STICKER_APRILFOOL2023_2.3">;
export type IapItemDisplayStickerAprilfool202325 = IapItemDisplay<"STICKER_APRILFOOL2023_2.5">;
export type IapItemDisplayStickerAudino3 = IapItemDisplay<"STICKER_AUDINO.3">;
export type IapItemDisplayStickerAudino5 = IapItemDisplay<"STICKER_AUDINO.5">;
export type IapItemDisplayStickerBellsproutcd13 = IapItemDisplay<"STICKER_BELLSPROUTCD_1.3">;
export type IapItemDisplayStickerBellsproutcd15 = IapItemDisplay<"STICKER_BELLSPROUTCD_1.5">;
export type IapItemDisplayStickerBellsproutcd23 = IapItemDisplay<"STICKER_BELLSPROUTCD_2.3">;
export type IapItemDisplayStickerBellsproutcd25 = IapItemDisplay<"STICKER_BELLSPROUTCD_2.5">;
export type IapItemDisplayStickerBellsproutcd33 = IapItemDisplay<"STICKER_BELLSPROUTCD_3.3">;
export type IapItemDisplayStickerBellsproutcd35 = IapItemDisplay<"STICKER_BELLSPROUTCD_3.5">;
export type IapItemDisplayStickerBellsproutcd43 = IapItemDisplay<"STICKER_BELLSPROUTCD_4.3">;
export type IapItemDisplayStickerBellsproutcd45 = IapItemDisplay<"STICKER_BELLSPROUTCD_4.5">;
export type IapItemDisplayStickerBidoofday13 = IapItemDisplay<"STICKER_BIDOOFDAY_1.3">;
export type IapItemDisplayStickerBidoofday15 = IapItemDisplay<"STICKER_BIDOOFDAY_1.5">;
export type IapItemDisplayStickerBidoofday23 = IapItemDisplay<"STICKER_BIDOOFDAY_2.3">;
export type IapItemDisplayStickerBidoofday25 = IapItemDisplay<"STICKER_BIDOOFDAY_2.5">;
export type IapItemDisplayStickerBidoofday33 = IapItemDisplay<"STICKER_BIDOOFDAY_3.3">;
export type IapItemDisplayStickerBidoofday35 = IapItemDisplay<"STICKER_BIDOOFDAY_3.5">;
export type IapItemDisplayStickerBounsweetcd202413 = IapItemDisplay<"STICKER_BOUNSWEETCD2024_1.3">;
export type IapItemDisplayStickerBounsweetcd202415 = IapItemDisplay<"STICKER_BOUNSWEETCD2024_1.5">;
export type IapItemDisplayStickerBounsweetcd202423 = IapItemDisplay<"STICKER_BOUNSWEETCD2024_2.3">;
export type IapItemDisplayStickerBounsweetcd202425 = IapItemDisplay<"STICKER_BOUNSWEETCD2024_2.5">;
export type IapItemDisplayStickerBounsweetcd202433 = IapItemDisplay<"STICKER_BOUNSWEETCD2024_3.3">;
export type IapItemDisplayStickerBounsweetcd202435 = IapItemDisplay<"STICKER_BOUNSWEETCD2024_3.5">;
export type IapItemDisplayStickerBounsweetcd202443 = IapItemDisplay<"STICKER_BOUNSWEETCD2024_4.3">;
export type IapItemDisplayStickerBounsweetcd202445 = IapItemDisplay<"STICKER_BOUNSWEETCD2024_4.5">;
export type IapItemDisplayStickerChanseycd13 = IapItemDisplay<"STICKER_CHANSEYCD_1.3">;
export type IapItemDisplayStickerChanseycd15 = IapItemDisplay<"STICKER_CHANSEYCD_1.5">;
export type IapItemDisplayStickerChanseycd23 = IapItemDisplay<"STICKER_CHANSEYCD_2.3">;
export type IapItemDisplayStickerChanseycd25 = IapItemDisplay<"STICKER_CHANSEYCD_2.5">;
export type IapItemDisplayStickerChanseycd33 = IapItemDisplay<"STICKER_CHANSEYCD_3.3">;
export type IapItemDisplayStickerChanseycd35 = IapItemDisplay<"STICKER_CHANSEYCD_3.5">;
export type IapItemDisplayStickerChanseycd43 = IapItemDisplay<"STICKER_CHANSEYCD_4.3">;
export type IapItemDisplayStickerChanseycd45 = IapItemDisplay<"STICKER_CHANSEYCD_4.5">;
export type IapItemDisplayStickerDiamondpearlchimchar3 = IapItemDisplay<"STICKER_DIAMONDPEARLCHIMCHAR.3">;
export type IapItemDisplayStickerDiamondpearlchimchar5 = IapItemDisplay<"STICKER_DIAMONDPEARLCHIMCHAR.5">;
export type IapItemDisplayStickerDiamondpearldialga3 = IapItemDisplay<"STICKER_DIAMONDPEARLDIALGA.3">;
export type IapItemDisplayStickerDiamondpearldialga5 = IapItemDisplay<"STICKER_DIAMONDPEARLDIALGA.5">;
export type IapItemDisplayStickerDiamondpearllucario3 = IapItemDisplay<"STICKER_DIAMONDPEARLLUCARIO.3">;
export type IapItemDisplayStickerDiamondpearllucario5 = IapItemDisplay<"STICKER_DIAMONDPEARLLUCARIO.5">;
export type IapItemDisplayStickerDiamondpearlpalkia3 = IapItemDisplay<"STICKER_DIAMONDPEARLPALKIA.3">;
export type IapItemDisplayStickerDiamondpearlpalkia5 = IapItemDisplay<"STICKER_DIAMONDPEARLPALKIA.5">;
export type IapItemDisplayStickerDiamondpearlpiplup3 = IapItemDisplay<"STICKER_DIAMONDPEARLPIPLUP.3">;
export type IapItemDisplayStickerDiamondpearlpiplup5 = IapItemDisplay<"STICKER_DIAMONDPEARLPIPLUP.5">;
export type IapItemDisplayStickerDiamondpearlturtwig3 = IapItemDisplay<"STICKER_DIAMONDPEARLTURTWIG.3">;
export type IapItemDisplayStickerDiamondpearlturtwig5 = IapItemDisplay<"STICKER_DIAMONDPEARLTURTWIG.5">;
export type IapItemDisplayStickerDitto13 = IapItemDisplay<"STICKER_DITTO_1.3">;
export type IapItemDisplayStickerDitto15 = IapItemDisplay<"STICKER_DITTO_1.5">;
export type IapItemDisplayStickerDitto23 = IapItemDisplay<"STICKER_DITTO_2.3">;
export type IapItemDisplayStickerDitto25 = IapItemDisplay<"STICKER_DITTO_2.5">;
export type IapItemDisplayStickerDitto33 = IapItemDisplay<"STICKER_DITTO_3.3">;
export type IapItemDisplayStickerDitto35 = IapItemDisplay<"STICKER_DITTO_3.5">;
export type IapItemDisplayStickerDitto43 = IapItemDisplay<"STICKER_DITTO_4.3">;
export type IapItemDisplayStickerDitto45 = IapItemDisplay<"STICKER_DITTO_4.5">;
export type IapItemDisplayStickerDitto53 = IapItemDisplay<"STICKER_DITTO_5.3">;
export type IapItemDisplayStickerDitto55 = IapItemDisplay<"STICKER_DITTO_5.5">;
export type IapItemDisplayStickerDitto63 = IapItemDisplay<"STICKER_DITTO_6.3">;
export type IapItemDisplayStickerDitto65 = IapItemDisplay<"STICKER_DITTO_6.5">;
export type IapItemDisplayStickerEeveefriends13 = IapItemDisplay<"STICKER_EEVEEFRIENDS_1.3">;
export type IapItemDisplayStickerEeveefriends15 = IapItemDisplay<"STICKER_EEVEEFRIENDS_1.5">;
export type IapItemDisplayStickerEeveefriends23 = IapItemDisplay<"STICKER_EEVEEFRIENDS_2.3">;
export type IapItemDisplayStickerEeveefriends25 = IapItemDisplay<"STICKER_EEVEEFRIENDS_2.5">;
export type IapItemDisplayStickerEeveefriends33 = IapItemDisplay<"STICKER_EEVEEFRIENDS_3.3">;
export type IapItemDisplayStickerEeveefriends35 = IapItemDisplay<"STICKER_EEVEEFRIENDS_3.5">;
export type IapItemDisplayStickerEeveefriends43 = IapItemDisplay<"STICKER_EEVEEFRIENDS_4.3">;
export type IapItemDisplayStickerEeveefriends45 = IapItemDisplay<"STICKER_EEVEEFRIENDS_4.5">;
export type IapItemDisplayStickerEeveefriends53 = IapItemDisplay<"STICKER_EEVEEFRIENDS_5.3">;
export type IapItemDisplayStickerEeveefriends55 = IapItemDisplay<"STICKER_EEVEEFRIENDS_5.5">;
export type IapItemDisplayStickerEeveefriends63 = IapItemDisplay<"STICKER_EEVEEFRIENDS_6.3">;
export type IapItemDisplayStickerEeveefriends65 = IapItemDisplay<"STICKER_EEVEEFRIENDS_6.5">;
export type IapItemDisplayStickerEeveefriends73 = IapItemDisplay<"STICKER_EEVEEFRIENDS_7.3">;
export type IapItemDisplayStickerEeveefriends75 = IapItemDisplay<"STICKER_EEVEEFRIENDS_7.5">;
export type IapItemDisplayStickerEeveefriends83 = IapItemDisplay<"STICKER_EEVEEFRIENDS_8.3">;
export type IapItemDisplayStickerEeveefriends85 = IapItemDisplay<"STICKER_EEVEEFRIENDS_8.5">;
export type IapItemDisplayStickerEeveefriends93 = IapItemDisplay<"STICKER_EEVEEFRIENDS_9.3">;
export type IapItemDisplayStickerEeveefriends95 = IapItemDisplay<"STICKER_EEVEEFRIENDS_9.5">;
export type IapItemDisplayStickerEternatus3 = IapItemDisplay<"STICKER_ETERNATUS.3">;
export type IapItemDisplayStickerEternatus5 = IapItemDisplay<"STICKER_ETERNATUS.5">;
export type IapItemDisplayStickerFall202313 = IapItemDisplay<"STICKER_FALL_2023_1.3">;
export type IapItemDisplayStickerFall202315 = IapItemDisplay<"STICKER_FALL_2023_1.5">;
export type IapItemDisplayStickerFall202323 = IapItemDisplay<"STICKER_FALL_2023_2.3">;
export type IapItemDisplayStickerFall202325 = IapItemDisplay<"STICKER_FALL_2023_2.5">;
export type IapItemDisplayStickerFall202333 = IapItemDisplay<"STICKER_FALL_2023_3.3">;
export type IapItemDisplayStickerFall202335 = IapItemDisplay<"STICKER_FALL_2023_3.5">;
export type IapItemDisplayStickerFall202343 = IapItemDisplay<"STICKER_FALL_2023_4.3">;
export type IapItemDisplayStickerFall202345 = IapItemDisplay<"STICKER_FALL_2023_4.5">;
export type IapItemDisplayStickerFall202353 = IapItemDisplay<"STICKER_FALL_2023_5.3">;
export type IapItemDisplayStickerFall202355 = IapItemDisplay<"STICKER_FALL_2023_5.5">;
export type IapItemDisplayStickerFall202363 = IapItemDisplay<"STICKER_FALL_2023_6.3">;
export type IapItemDisplayStickerFall202365 = IapItemDisplay<"STICKER_FALL_2023_6.5">;
export type IapItemDisplayStickerFall202413 = IapItemDisplay<"STICKER_FALL_2024_1.3">;
export type IapItemDisplayStickerFall202415 = IapItemDisplay<"STICKER_FALL_2024_1.5">;
export type IapItemDisplayStickerFall202423 = IapItemDisplay<"STICKER_FALL_2024_2.3">;
export type IapItemDisplayStickerFall202425 = IapItemDisplay<"STICKER_FALL_2024_2.5">;
export type IapItemDisplayStickerFall202433 = IapItemDisplay<"STICKER_FALL_2024_3.3">;
export type IapItemDisplayStickerFall202435 = IapItemDisplay<"STICKER_FALL_2024_3.5">;
export type IapItemDisplayStickerFall202443 = IapItemDisplay<"STICKER_FALL_2024_4.3">;
export type IapItemDisplayStickerFall202445 = IapItemDisplay<"STICKER_FALL_2024_4.5">;
export type IapItemDisplayStickerFall202453 = IapItemDisplay<"STICKER_FALL_2024_5.3">;
export type IapItemDisplayStickerFall202455 = IapItemDisplay<"STICKER_FALL_2024_5.5">;
export type IapItemDisplayStickerFall202463 = IapItemDisplay<"STICKER_FALL_2024_6.3">;
export type IapItemDisplayStickerFall202465 = IapItemDisplay<"STICKER_FALL_2024_6.5">;
export type IapItemDisplayStickerFall202513 = IapItemDisplay<"STICKER_FALL_2025_1.3">;
export type IapItemDisplayStickerFall202515 = IapItemDisplay<"STICKER_FALL_2025_1.5">;
export type IapItemDisplayStickerFall202523 = IapItemDisplay<"STICKER_FALL_2025_2.3">;
export type IapItemDisplayStickerFall202525 = IapItemDisplay<"STICKER_FALL_2025_2.5">;
export type IapItemDisplayStickerFall202533 = IapItemDisplay<"STICKER_FALL_2025_3.3">;
export type IapItemDisplayStickerFall202535 = IapItemDisplay<"STICKER_FALL_2025_3.5">;
export type IapItemDisplayStickerFall202543 = IapItemDisplay<"STICKER_FALL_2025_4.3">;
export type IapItemDisplayStickerFall202545 = IapItemDisplay<"STICKER_FALL_2025_4.5">;
export type IapItemDisplayStickerFallSawsbuck3 = IapItemDisplay<"STICKER_FALL_SAWSBUCK.3">;
export type IapItemDisplayStickerFallSawsbuck5 = IapItemDisplay<"STICKER_FALL_SAWSBUCK.5">;
export type IapItemDisplayStickerFallShroomish3 = IapItemDisplay<"STICKER_FALL_SHROOMISH.3">;
export type IapItemDisplayStickerFallShroomish5 = IapItemDisplay<"STICKER_FALL_SHROOMISH.5">;
export type IapItemDisplayStickerFallSkwovet3 = IapItemDisplay<"STICKER_FALL_SKWOVET.3">;
export type IapItemDisplayStickerFallSkwovet5 = IapItemDisplay<"STICKER_FALL_SKWOVET.5">;
export type IapItemDisplayStickerFallTeddiursa3 = IapItemDisplay<"STICKER_FALL_TEDDIURSA.3">;
export type IapItemDisplayStickerFallTeddiursa5 = IapItemDisplay<"STICKER_FALL_TEDDIURSA.5">;
export type IapItemDisplayStickerFallTrevenant3 = IapItemDisplay<"STICKER_FALL_TREVENANT.3">;
export type IapItemDisplayStickerFallTrevenant5 = IapItemDisplay<"STICKER_FALL_TREVENANT.5">;
export type IapItemDisplayStickerFallVulpix3 = IapItemDisplay<"STICKER_FALL_VULPIX.3">;
export type IapItemDisplayStickerFallVulpix5 = IapItemDisplay<"STICKER_FALL_VULPIX.5">;
export type IapItemDisplayStickerFestivaloflightMorelull3 = IapItemDisplay<"STICKER_FESTIVALOFLIGHT_MORELULL.3">;
export type IapItemDisplayStickerFestivaloflightMorelull5 = IapItemDisplay<"STICKER_FESTIVALOFLIGHT_MORELULL.5">;
export type IapItemDisplayStickerFestivaloflightShiinotic3 = IapItemDisplay<"STICKER_FESTIVALOFLIGHT_SHIINOTIC.3">;
export type IapItemDisplayStickerFestivaloflightShiinotic5 = IapItemDisplay<"STICKER_FESTIVALOFLIGHT_SHIINOTIC.5">;
export type IapItemDisplayStickerFestivalofthelights21V13 = IapItemDisplay<"STICKER_FESTIVALOFTHELIGHTS21_V1.3">;
export type IapItemDisplayStickerFestivalofthelights21V15 = IapItemDisplay<"STICKER_FESTIVALOFTHELIGHTS21_V1.5">;
export type IapItemDisplayStickerFestivalofthelights21V23 = IapItemDisplay<"STICKER_FESTIVALOFTHELIGHTS21_V2.3">;
export type IapItemDisplayStickerFestivalofthelights21V25 = IapItemDisplay<"STICKER_FESTIVALOFTHELIGHTS21_V2.5">;
export type IapItemDisplayStickerFestivalofthelights21V33 = IapItemDisplay<"STICKER_FESTIVALOFTHELIGHTS21_V3.3">;
export type IapItemDisplayStickerFestivalofthelights21V35 = IapItemDisplay<"STICKER_FESTIVALOFTHELIGHTS21_V3.5">;
export type IapItemDisplayStickerFestivalofthelights21V43 = IapItemDisplay<"STICKER_FESTIVALOFTHELIGHTS21_V4.3">;
export type IapItemDisplayStickerFestivalofthelights21V45 = IapItemDisplay<"STICKER_FESTIVALOFTHELIGHTS21_V4.5">;
export type IapItemDisplayStickerFlabebe13 = IapItemDisplay<"STICKER_FLABEBE_1.3">;
export type IapItemDisplayStickerFlabebe15 = IapItemDisplay<"STICKER_FLABEBE_1.5">;
export type IapItemDisplayStickerFlabebe23 = IapItemDisplay<"STICKER_FLABEBE_2.3">;
export type IapItemDisplayStickerFlabebe25 = IapItemDisplay<"STICKER_FLABEBE_2.5">;
export type IapItemDisplayStickerFunawari223123 = IapItemDisplay<"STICKER_FUNAWARI_22_312.3">;
export type IapItemDisplayStickerFunawari223125 = IapItemDisplay<"STICKER_FUNAWARI_22_312.5">;
export type IapItemDisplayStickerFunwari0206083 = IapItemDisplay<"STICKER_FUNWARI_02_0608.3">;
export type IapItemDisplayStickerFunwari0206085 = IapItemDisplay<"STICKER_FUNWARI_02_0608.5">;
export type IapItemDisplayStickerFunwari203 = IapItemDisplay<"STICKER_FUNWARI_20.3">;
export type IapItemDisplayStickerFunwari205 = IapItemDisplay<"STICKER_FUNWARI_20.5">;
export type IapItemDisplayStickerFurfrouheart13 = IapItemDisplay<"STICKER_FURFROUHEART_1.3">;
export type IapItemDisplayStickerFurfrouheart15 = IapItemDisplay<"STICKER_FURFROUHEART_1.5">;
export type IapItemDisplayStickerFurfrouheart23 = IapItemDisplay<"STICKER_FURFROUHEART_2.3">;
export type IapItemDisplayStickerFurfrouheart25 = IapItemDisplay<"STICKER_FURFROUHEART_2.5">;
export type IapItemDisplayStickerGiftthankyou3 = IapItemDisplay<"STICKER_GIFTTHANKYOU.3">;
export type IapItemDisplayStickerGiftthankyou5 = IapItemDisplay<"STICKER_GIFTTHANKYOU.5">;
export type IapItemDisplayStickerGimmighoul13 = IapItemDisplay<"STICKER_GIMMIGHOUL_1.3">;
export type IapItemDisplayStickerGimmighoul15 = IapItemDisplay<"STICKER_GIMMIGHOUL_1.5">;
export type IapItemDisplayStickerGimmighoul23 = IapItemDisplay<"STICKER_GIMMIGHOUL_2.3">;
export type IapItemDisplayStickerGimmighoul25 = IapItemDisplay<"STICKER_GIMMIGHOUL_2.5">;
export type IapItemDisplayStickerGimmighoul33 = IapItemDisplay<"STICKER_GIMMIGHOUL_3.3">;
export type IapItemDisplayStickerGimmighoul35 = IapItemDisplay<"STICKER_GIMMIGHOUL_3.5">;
export type IapItemDisplayStickerGimmighoul43 = IapItemDisplay<"STICKER_GIMMIGHOUL_4.3">;
export type IapItemDisplayStickerGimmighoul45 = IapItemDisplay<"STICKER_GIMMIGHOUL_4.5">;
export type IapItemDisplayStickerGimmighoul53 = IapItemDisplay<"STICKER_GIMMIGHOUL_5.3">;
export type IapItemDisplayStickerGimmighoul55 = IapItemDisplay<"STICKER_GIMMIGHOUL_5.5">;
export type IapItemDisplayStickerGoomycd13 = IapItemDisplay<"STICKER_GOOMYCD_1.3">;
export type IapItemDisplayStickerGoomycd15 = IapItemDisplay<"STICKER_GOOMYCD_1.5">;
export type IapItemDisplayStickerGoomycd23 = IapItemDisplay<"STICKER_GOOMYCD_2.3">;
export type IapItemDisplayStickerGoomycd25 = IapItemDisplay<"STICKER_GOOMYCD_2.5">;
export type IapItemDisplayStickerGoomycd33 = IapItemDisplay<"STICKER_GOOMYCD_3.3">;
export type IapItemDisplayStickerGoomycd35 = IapItemDisplay<"STICKER_GOOMYCD_3.5">;
export type IapItemDisplayStickerGoomycd43 = IapItemDisplay<"STICKER_GOOMYCD_4.3">;
export type IapItemDisplayStickerGoomycd45 = IapItemDisplay<"STICKER_GOOMYCD_4.5">;
export type IapItemDisplayStickerGotour2025Badge3 = IapItemDisplay<"STICKER_GOTOUR2025_BADGE.3">;
export type IapItemDisplayStickerGotour2025Badge5 = IapItemDisplay<"STICKER_GOTOUR2025_BADGE.5">;
export type IapItemDisplayStickerGotour2025Kyuremblack3 = IapItemDisplay<"STICKER_GOTOUR2025_KYUREMBLACK.3">;
export type IapItemDisplayStickerGotour2025Kyuremblack5 = IapItemDisplay<"STICKER_GOTOUR2025_KYUREMBLACK.5">;
export type IapItemDisplayStickerGotour2025Kyuremwhite3 = IapItemDisplay<"STICKER_GOTOUR2025_KYUREMWHITE.3">;
export type IapItemDisplayStickerGotour2025Kyuremwhite5 = IapItemDisplay<"STICKER_GOTOUR2025_KYUREMWHITE.5">;
export type IapItemDisplayStickerGotour2025Reshiram3 = IapItemDisplay<"STICKER_GOTOUR2025_RESHIRAM.3">;
export type IapItemDisplayStickerGotour2025Reshiram5 = IapItemDisplay<"STICKER_GOTOUR2025_RESHIRAM.5">;
export type IapItemDisplayStickerGotour2025Rz3 = IapItemDisplay<"STICKER_GOTOUR2025_RZ.3">;
export type IapItemDisplayStickerGotour2025Rz5 = IapItemDisplay<"STICKER_GOTOUR2025_RZ.5">;
export type IapItemDisplayStickerGotour2025Zekrom3 = IapItemDisplay<"STICKER_GOTOUR2025_ZEKROM.3">;
export type IapItemDisplayStickerGotour2025Zekrom5 = IapItemDisplay<"STICKER_GOTOUR2025_ZEKROM.5">;
export type IapItemDisplayStickerGowa2025013 = IapItemDisplay<"STICKER_GOWA2025_01.3">;
export type IapItemDisplayStickerGowa2025015 = IapItemDisplay<"STICKER_GOWA2025_01.5">;
export type IapItemDisplayStickerGowa2025023 = IapItemDisplay<"STICKER_GOWA2025_02.3">;
export type IapItemDisplayStickerGowa2025025 = IapItemDisplay<"STICKER_GOWA2025_02.5">;
export type IapItemDisplayStickerGowa2025033 = IapItemDisplay<"STICKER_GOWA2025_03.3">;
export type IapItemDisplayStickerGowa2025035 = IapItemDisplay<"STICKER_GOWA2025_03.5">;
export type IapItemDisplayStickerGowa2025043 = IapItemDisplay<"STICKER_GOWA2025_04.3">;
export type IapItemDisplayStickerGowa2025045 = IapItemDisplay<"STICKER_GOWA2025_04.5">;
export type IapItemDisplayStickerGowa2025053 = IapItemDisplay<"STICKER_GOWA2025_05.3">;
export type IapItemDisplayStickerGowa2025055 = IapItemDisplay<"STICKER_GOWA2025_05.5">;
export type IapItemDisplayStickerHalloween2025Noibat3 = IapItemDisplay<"STICKER_HALLOWEEN2025_NOIBAT.3">;
export type IapItemDisplayStickerHalloween2025Noibat5 = IapItemDisplay<"STICKER_HALLOWEEN2025_NOIBAT.5">;
export type IapItemDisplayStickerHalloween2025Teddiursa3 = IapItemDisplay<"STICKER_HALLOWEEN2025_TEDDIURSA.3">;
export type IapItemDisplayStickerHalloween2025Teddiursa5 = IapItemDisplay<"STICKER_HALLOWEEN2025_TEDDIURSA.5">;
export type IapItemDisplayStickerHalloween21Fuwaraid3 = IapItemDisplay<"STICKER_HALLOWEEN21_FUWARAID.3">;
export type IapItemDisplayStickerHalloween21Fuwaraid5 = IapItemDisplay<"STICKER_HALLOWEEN21_FUWARAID.5">;
export type IapItemDisplayStickerHalloween21Ghostpika3 = IapItemDisplay<"STICKER_HALLOWEEN21_GHOSTPIKA.3">;
export type IapItemDisplayStickerHalloween21Ghostpika5 = IapItemDisplay<"STICKER_HALLOWEEN21_GHOSTPIKA.5">;
export type IapItemDisplayStickerHalloween21Pikachu3 = IapItemDisplay<"STICKER_HALLOWEEN21_PIKACHU.3">;
export type IapItemDisplayStickerHalloween21Pikachu5 = IapItemDisplay<"STICKER_HALLOWEEN21_PIKACHU.5">;
export type IapItemDisplayStickerHalloween21Pochama3 = IapItemDisplay<"STICKER_HALLOWEEN21_POCHAMA.3">;
export type IapItemDisplayStickerHalloween21Pochama5 = IapItemDisplay<"STICKER_HALLOWEEN21_POCHAMA.5">;
export type IapItemDisplayStickerHalloween24Froakie3 = IapItemDisplay<"STICKER_HALLOWEEN24_FROAKIE.3">;
export type IapItemDisplayStickerHalloween24Froakie5 = IapItemDisplay<"STICKER_HALLOWEEN24_FROAKIE.5">;
export type IapItemDisplayStickerHalloween24Rowlet3 = IapItemDisplay<"STICKER_HALLOWEEN24_ROWLET.3">;
export type IapItemDisplayStickerHalloween24Rowlet5 = IapItemDisplay<"STICKER_HALLOWEEN24_ROWLET.5">;
export type IapItemDisplayStickerHalloweenBulb3 = IapItemDisplay<"STICKER_HALLOWEEN_BULB.3">;
export type IapItemDisplayStickerHalloweenBulb5 = IapItemDisplay<"STICKER_HALLOWEEN_BULB.5">;
export type IapItemDisplayStickerHalloweenCharm3 = IapItemDisplay<"STICKER_HALLOWEEN_CHARM.3">;
export type IapItemDisplayStickerHalloweenCharm5 = IapItemDisplay<"STICKER_HALLOWEEN_CHARM.5">;
export type IapItemDisplayStickerHalloweenGengarmd3 = IapItemDisplay<"STICKER_HALLOWEEN_GENGARMD.3">;
export type IapItemDisplayStickerHalloweenGengarmd5 = IapItemDisplay<"STICKER_HALLOWEEN_GENGARMD.5">;
export type IapItemDisplayStickerHalloweenPika3 = IapItemDisplay<"STICKER_HALLOWEEN_PIKA.3">;
export type IapItemDisplayStickerHalloweenPika5 = IapItemDisplay<"STICKER_HALLOWEEN_PIKA.5">;
export type IapItemDisplayStickerHalloweenSqu3 = IapItemDisplay<"STICKER_HALLOWEEN_SQU.3">;
export type IapItemDisplayStickerHalloweenSqu5 = IapItemDisplay<"STICKER_HALLOWEEN_SQU.5">;
export type IapItemDisplayStickerHaruCherrim3 = IapItemDisplay<"STICKER_HARU_CHERRIM.3">;
export type IapItemDisplayStickerHaruCherrim5 = IapItemDisplay<"STICKER_HARU_CHERRIM.5">;
export type IapItemDisplayStickerHaruDredearpika3 = IapItemDisplay<"STICKER_HARU_DREDEARPIKA.3">;
export type IapItemDisplayStickerHaruDredearpika5 = IapItemDisplay<"STICKER_HARU_DREDEARPIKA.5">;
export type IapItemDisplayStickerHaruKireihana3 = IapItemDisplay<"STICKER_HARU_KIREIHANA.3">;
export type IapItemDisplayStickerHaruKireihana5 = IapItemDisplay<"STICKER_HARU_KIREIHANA.5">;
export type IapItemDisplayStickerHaruLalantes3 = IapItemDisplay<"STICKER_HARU_LALANTES.3">;
export type IapItemDisplayStickerHaruLalantes5 = IapItemDisplay<"STICKER_HARU_LALANTES.5">;
export type IapItemDisplayStickerHaruMebukishikijik3 = IapItemDisplay<"STICKER_HARU_MEBUKISHIKIJIK.3">;
export type IapItemDisplayStickerHaruMebukishikijik5 = IapItemDisplay<"STICKER_HARU_MEBUKISHIKIJIK.5">;
export type IapItemDisplayStickerHaruMitsuhoney3 = IapItemDisplay<"STICKER_HARU_MITSUHONEY.3">;
export type IapItemDisplayStickerHaruMitsuhoney5 = IapItemDisplay<"STICKER_HARU_MITSUHONEY.5">;
export type IapItemDisplayStickerHisuidiscoArcanine3 = IapItemDisplay<"STICKER_HISUIDISCO_ARCANINE.3">;
export type IapItemDisplayStickerHisuidiscoArcanine5 = IapItemDisplay<"STICKER_HISUIDISCO_ARCANINE.5">;
export type IapItemDisplayStickerHisuidiscoBraviary3 = IapItemDisplay<"STICKER_HISUIDISCO_BRAVIARY.3">;
export type IapItemDisplayStickerHisuidiscoBraviary5 = IapItemDisplay<"STICKER_HISUIDISCO_BRAVIARY.5">;
export type IapItemDisplayStickerHisuidiscoGrowlithe3 = IapItemDisplay<"STICKER_HISUIDISCO_GROWLITHE.3">;
export type IapItemDisplayStickerHisuidiscoGrowlithe5 = IapItemDisplay<"STICKER_HISUIDISCO_GROWLITHE.5">;
export type IapItemDisplayStickerHolidayevent2113 = IapItemDisplay<"STICKER_HOLIDAYEVENT21_1.3">;
export type IapItemDisplayStickerHolidayevent2115 = IapItemDisplay<"STICKER_HOLIDAYEVENT21_1.5">;
export type IapItemDisplayStickerHolidayevent2123 = IapItemDisplay<"STICKER_HOLIDAYEVENT21_2.3">;
export type IapItemDisplayStickerHolidayevent2125 = IapItemDisplay<"STICKER_HOLIDAYEVENT21_2.5">;
export type IapItemDisplayStickerHolidayevent2133 = IapItemDisplay<"STICKER_HOLIDAYEVENT21_3.3">;
export type IapItemDisplayStickerHolidayevent2135 = IapItemDisplay<"STICKER_HOLIDAYEVENT21_3.5">;
export type IapItemDisplayStickerHolidayevent2143 = IapItemDisplay<"STICKER_HOLIDAYEVENT21_4.3">;
export type IapItemDisplayStickerHolidayevent2145 = IapItemDisplay<"STICKER_HOLIDAYEVENT21_4.5">;
export type IapItemDisplayStickerHolidayevent22Cubchoo3 = IapItemDisplay<"STICKER_HOLIDAYEVENT22_CUBCHOO.3">;
export type IapItemDisplayStickerHolidayevent22Cubchoo5 = IapItemDisplay<"STICKER_HOLIDAYEVENT22_CUBCHOO.5">;
export type IapItemDisplayStickerHolidayevent22Scatterbug3 = IapItemDisplay<"STICKER_HOLIDAYEVENT22_SCATTERBUG.3">;
export type IapItemDisplayStickerHolidayevent22Scatterbug5 = IapItemDisplay<"STICKER_HOLIDAYEVENT22_SCATTERBUG.5">;
export type IapItemDisplayStickerHolidayevent22Snowpika3 = IapItemDisplay<"STICKER_HOLIDAYEVENT22_SNOWPIKA.3">;
export type IapItemDisplayStickerHolidayevent22Snowpika5 = IapItemDisplay<"STICKER_HOLIDAYEVENT22_SNOWPIKA.5">;
export type IapItemDisplayStickerHolidayevent22Vulpix3 = IapItemDisplay<"STICKER_HOLIDAYEVENT22_VULPIX.3">;
export type IapItemDisplayStickerHolidayevent22Vulpix5 = IapItemDisplay<"STICKER_HOLIDAYEVENT22_VULPIX.5">;
export type IapItemDisplayStickerHolidayevent23Cetoddle3 = IapItemDisplay<"STICKER_HOLIDAYEVENT23_CETODDLE.3">;
export type IapItemDisplayStickerHolidayevent23Cetoddle5 = IapItemDisplay<"STICKER_HOLIDAYEVENT23_CETODDLE.5">;
export type IapItemDisplayStickerHolidayevent23Cryogonal3 = IapItemDisplay<"STICKER_HOLIDAYEVENT23_CRYOGONAL.3">;
export type IapItemDisplayStickerHolidayevent23Cryogonal5 = IapItemDisplay<"STICKER_HOLIDAYEVENT23_CRYOGONAL.5">;
export type IapItemDisplayStickerHolidayevent23Psyduck3 = IapItemDisplay<"STICKER_HOLIDAYEVENT23_PSYDUCK.3">;
export type IapItemDisplayStickerHolidayevent23Psyduck5 = IapItemDisplay<"STICKER_HOLIDAYEVENT23_PSYDUCK.5">;
export type IapItemDisplayStickerHolidayevent23Seel3 = IapItemDisplay<"STICKER_HOLIDAYEVENT23_SEEL.3">;
export type IapItemDisplayStickerHolidayevent23Seel5 = IapItemDisplay<"STICKER_HOLIDAYEVENT23_SEEL.5">;
export type IapItemDisplayStickerHolidayevent23Vanillish3 = IapItemDisplay<"STICKER_HOLIDAYEVENT23_VANILLISH.3">;
export type IapItemDisplayStickerHolidayevent23Vanillish5 = IapItemDisplay<"STICKER_HOLIDAYEVENT23_VANILLISH.5">;
export type IapItemDisplayStickerHoppip13 = IapItemDisplay<"STICKER_HOPPIP_1.3">;
export type IapItemDisplayStickerHoppip15 = IapItemDisplay<"STICKER_HOPPIP_1.5">;
export type IapItemDisplayStickerHoppip23 = IapItemDisplay<"STICKER_HOPPIP_2.3">;
export type IapItemDisplayStickerHoppip25 = IapItemDisplay<"STICKER_HOPPIP_2.5">;
export type IapItemDisplayStickerHoppip33 = IapItemDisplay<"STICKER_HOPPIP_3.3">;
export type IapItemDisplayStickerHoppip35 = IapItemDisplay<"STICKER_HOPPIP_3.5">;
export type IapItemDisplayStickerHoppip43 = IapItemDisplay<"STICKER_HOPPIP_4.3">;
export type IapItemDisplayStickerHoppip45 = IapItemDisplay<"STICKER_HOPPIP_4.5">;
export type IapItemDisplayStickerLentillaunchCamera3 = IapItemDisplay<"STICKER_LENTILLAUNCH_CAMERA.3">;
export type IapItemDisplayStickerLentillaunchCamera5 = IapItemDisplay<"STICKER_LENTILLAUNCH_CAMERA.5">;
export type IapItemDisplayStickerLittencd13 = IapItemDisplay<"STICKER_LITTENCD_1.3">;
export type IapItemDisplayStickerLittencd15 = IapItemDisplay<"STICKER_LITTENCD_1.5">;
export type IapItemDisplayStickerLittencd23 = IapItemDisplay<"STICKER_LITTENCD_2.3">;
export type IapItemDisplayStickerLittencd25 = IapItemDisplay<"STICKER_LITTENCD_2.5">;
export type IapItemDisplayStickerLittencd33 = IapItemDisplay<"STICKER_LITTENCD_3.3">;
export type IapItemDisplayStickerLittencd35 = IapItemDisplay<"STICKER_LITTENCD_3.5">;
export type IapItemDisplayStickerLittencd43 = IapItemDisplay<"STICKER_LITTENCD_4.3">;
export type IapItemDisplayStickerLittencd45 = IapItemDisplay<"STICKER_LITTENCD_4.5">;
export type IapItemDisplayStickerLuvdisc3 = IapItemDisplay<"STICKER_LUVDISC.3">;
export type IapItemDisplayStickerLuvdisc5 = IapItemDisplay<"STICKER_LUVDISC.5">;
export type IapItemDisplayStickerMankey13 = IapItemDisplay<"STICKER_MANKEY_1.3">;
export type IapItemDisplayStickerMankey15 = IapItemDisplay<"STICKER_MANKEY_1.5">;
export type IapItemDisplayStickerMankey23 = IapItemDisplay<"STICKER_MANKEY_2.3">;
export type IapItemDisplayStickerMankey25 = IapItemDisplay<"STICKER_MANKEY_2.5">;
export type IapItemDisplayStickerMankey33 = IapItemDisplay<"STICKER_MANKEY_3.3">;
export type IapItemDisplayStickerMankey35 = IapItemDisplay<"STICKER_MANKEY_3.5">;
export type IapItemDisplayStickerMankey43 = IapItemDisplay<"STICKER_MANKEY_4.3">;
export type IapItemDisplayStickerMankey45 = IapItemDisplay<"STICKER_MANKEY_4.5">;
export type IapItemDisplayStickerNagano063123 = IapItemDisplay<"STICKER_NAGANO_06_312.3">;
export type IapItemDisplayStickerNagano063125 = IapItemDisplay<"STICKER_NAGANO_06_312.5">;
export type IapItemDisplayStickerNagano113 = IapItemDisplay<"STICKER_NAGANO_11.3">;
export type IapItemDisplayStickerNagano115 = IapItemDisplay<"STICKER_NAGANO_11.5">;
export type IapItemDisplayStickerNagano153123 = IapItemDisplay<"STICKER_NAGANO_15_312.3">;
export type IapItemDisplayStickerNagano153125 = IapItemDisplay<"STICKER_NAGANO_15_312.5">;
export type IapItemDisplayStickerNaganoBath3 = IapItemDisplay<"STICKER_NAGANO_BATH.3">;
export type IapItemDisplayStickerNaganoBath5 = IapItemDisplay<"STICKER_NAGANO_BATH.5">;
export type IapItemDisplayStickerNaganoMarill3 = IapItemDisplay<"STICKER_NAGANO_MARILL.3">;
export type IapItemDisplayStickerNaganoMarill5 = IapItemDisplay<"STICKER_NAGANO_MARILL.5">;
export type IapItemDisplayStickerNaganoYadon3 = IapItemDisplay<"STICKER_NAGANO_YADON.3">;
export type IapItemDisplayStickerNaganoYadon5 = IapItemDisplay<"STICKER_NAGANO_YADON.5">;
export type IapItemDisplayStickerNewpokemon2153 = IapItemDisplay<"STICKER_NEWPOKEMON2_15.3">;
export type IapItemDisplayStickerNewpokemon2155 = IapItemDisplay<"STICKER_NEWPOKEMON2_15.5">;
export type IapItemDisplayStickerNewyears2213 = IapItemDisplay<"STICKER_NEWYEARS22_1.3">;
export type IapItemDisplayStickerNewyears2215 = IapItemDisplay<"STICKER_NEWYEARS22_1.5">;
export type IapItemDisplayStickerNewyears2223 = IapItemDisplay<"STICKER_NEWYEARS22_2.3">;
export type IapItemDisplayStickerNewyears2225 = IapItemDisplay<"STICKER_NEWYEARS22_2.5">;
export type IapItemDisplayStickerNewyears2233 = IapItemDisplay<"STICKER_NEWYEARS22_3.3">;
export type IapItemDisplayStickerNewyears2235 = IapItemDisplay<"STICKER_NEWYEARS22_3.5">;
export type IapItemDisplayStickerNewyears2243 = IapItemDisplay<"STICKER_NEWYEARS22_4.3">;
export type IapItemDisplayStickerNewyears2245 = IapItemDisplay<"STICKER_NEWYEARS22_4.5">;
export type IapItemDisplayStickerNoibatCd13 = IapItemDisplay<"STICKER_NOIBAT_CD_1.3">;
export type IapItemDisplayStickerNoibatCd15 = IapItemDisplay<"STICKER_NOIBAT_CD_1.5">;
export type IapItemDisplayStickerNoibatCd23 = IapItemDisplay<"STICKER_NOIBAT_CD_2.3">;
export type IapItemDisplayStickerNoibatCd25 = IapItemDisplay<"STICKER_NOIBAT_CD_2.5">;
export type IapItemDisplayStickerNoibatCd33 = IapItemDisplay<"STICKER_NOIBAT_CD_3.3">;
export type IapItemDisplayStickerNoibatCd35 = IapItemDisplay<"STICKER_NOIBAT_CD_3.5">;
export type IapItemDisplayStickerNoibatCd43 = IapItemDisplay<"STICKER_NOIBAT_CD_4.3">;
export type IapItemDisplayStickerNoibatCd45 = IapItemDisplay<"STICKER_NOIBAT_CD_4.5">;
export type IapItemDisplayStickerPgofest2021Galarianzigzagoon3 = IapItemDisplay<"STICKER_PGOFEST2021_GALARIANZIGZAGOON.3">;
export type IapItemDisplayStickerPgofest2021Galarianzigzagoon5 = IapItemDisplay<"STICKER_PGOFEST2021_GALARIANZIGZAGOON.5">;
export type IapItemDisplayStickerPgofest2021Meloetta13 = IapItemDisplay<"STICKER_PGOFEST2021_MELOETTA_1.3">;
export type IapItemDisplayStickerPgofest2021Meloetta15 = IapItemDisplay<"STICKER_PGOFEST2021_MELOETTA_1.5">;
export type IapItemDisplayStickerPgofest2021Meloetta23 = IapItemDisplay<"STICKER_PGOFEST2021_MELOETTA_2.3">;
export type IapItemDisplayStickerPgofest2021Meloetta25 = IapItemDisplay<"STICKER_PGOFEST2021_MELOETTA_2.5">;
export type IapItemDisplayStickerPgofest2021Ponyta3 = IapItemDisplay<"STICKER_PGOFEST2021_PONYTA.3">;
export type IapItemDisplayStickerPgofest2021Ponyta5 = IapItemDisplay<"STICKER_PGOFEST2021_PONYTA.5">;
export type IapItemDisplayStickerPgofest2022Groudon3 = IapItemDisplay<"STICKER_PGOFEST2022_GROUDON.3">;
export type IapItemDisplayStickerPgofest2022Groudon5 = IapItemDisplay<"STICKER_PGOFEST2022_GROUDON.5">;
export type IapItemDisplayStickerPgofest2022Kibago3 = IapItemDisplay<"STICKER_PGOFEST2022_KIBAGO.3">;
export type IapItemDisplayStickerPgofest2022Kibago5 = IapItemDisplay<"STICKER_PGOFEST2022_KIBAGO.5">;
export type IapItemDisplayStickerPgofest2022Kyogre3 = IapItemDisplay<"STICKER_PGOFEST2022_KYOGRE.3">;
export type IapItemDisplayStickerPgofest2022Kyogre5 = IapItemDisplay<"STICKER_PGOFEST2022_KYOGRE.5">;
export type IapItemDisplayStickerPgofest2022Pikachu3 = IapItemDisplay<"STICKER_PGOFEST2022_PIKACHU.3">;
export type IapItemDisplayStickerPgofest2022Pikachu5 = IapItemDisplay<"STICKER_PGOFEST2022_PIKACHU.5">;
export type IapItemDisplayStickerPgofest2022Pochama3 = IapItemDisplay<"STICKER_PGOFEST2022_POCHAMA.3">;
export type IapItemDisplayStickerPgofest2022Pochama5 = IapItemDisplay<"STICKER_PGOFEST2022_POCHAMA.5">;
export type IapItemDisplayStickerPgofest2022Shaymin3 = IapItemDisplay<"STICKER_PGOFEST2022_SHAYMIN.3">;
export type IapItemDisplayStickerPgofest2022Shaymin5 = IapItemDisplay<"STICKER_PGOFEST2022_SHAYMIN.5">;
export type IapItemDisplayStickerPgoFest20243 = IapItemDisplay<"STICKER_PGO_FEST_2024.3">;
export type IapItemDisplayStickerPgoFest20245 = IapItemDisplay<"STICKER_PGO_FEST_2024.5">;
export type IapItemDisplayStickerPgoFest202413 = IapItemDisplay<"STICKER_PGO_FEST_2024_1.3">;
export type IapItemDisplayStickerPgoFest202415 = IapItemDisplay<"STICKER_PGO_FEST_2024_1.5">;
export type IapItemDisplayStickerPgoFest202423 = IapItemDisplay<"STICKER_PGO_FEST_2024_2.3">;
export type IapItemDisplayStickerPgoFest202425 = IapItemDisplay<"STICKER_PGO_FEST_2024_2.5">;
export type IapItemDisplayStickerPgoFest202433 = IapItemDisplay<"STICKER_PGO_FEST_2024_3.3">;
export type IapItemDisplayStickerPgoFest202435 = IapItemDisplay<"STICKER_PGO_FEST_2024_3.5">;
export type IapItemDisplayStickerPgoFest202443 = IapItemDisplay<"STICKER_PGO_FEST_2024_4.3">;
export type IapItemDisplayStickerPgoFest202445 = IapItemDisplay<"STICKER_PGO_FEST_2024_4.5">;
export type IapItemDisplayStickerPgoFest202453 = IapItemDisplay<"STICKER_PGO_FEST_2024_5.3">;
export type IapItemDisplayStickerPgoFest202455 = IapItemDisplay<"STICKER_PGO_FEST_2024_5.5">;
export type IapItemDisplayStickerPgoFest202463 = IapItemDisplay<"STICKER_PGO_FEST_2024_6.3">;
export type IapItemDisplayStickerPgoFest202465 = IapItemDisplay<"STICKER_PGO_FEST_2024_6.5">;
export type IapItemDisplayStickerPgoFest2024Logo3 = IapItemDisplay<"STICKER_PGO_FEST_2024_LOGO.3">;
export type IapItemDisplayStickerPgoFest2024Logo5 = IapItemDisplay<"STICKER_PGO_FEST_2024_LOGO.5">;
export type IapItemDisplayStickerPgoFest20253 = IapItemDisplay<"STICKER_PGO_FEST_2025.3">;
export type IapItemDisplayStickerPgoFest20255 = IapItemDisplay<"STICKER_PGO_FEST_2025.5">;
export type IapItemDisplayStickerPgoFest202513 = IapItemDisplay<"STICKER_PGO_FEST_2025_1.3">;
export type IapItemDisplayStickerPgoFest202515 = IapItemDisplay<"STICKER_PGO_FEST_2025_1.5">;
export type IapItemDisplayStickerPgoFest202523 = IapItemDisplay<"STICKER_PGO_FEST_2025_2.3">;
export type IapItemDisplayStickerPgoFest202525 = IapItemDisplay<"STICKER_PGO_FEST_2025_2.5">;
export type IapItemDisplayStickerPgoFest202533 = IapItemDisplay<"STICKER_PGO_FEST_2025_3.3">;
export type IapItemDisplayStickerPgoFest202535 = IapItemDisplay<"STICKER_PGO_FEST_2025_3.5">;
export type IapItemDisplayStickerPgoFest2025Logo3 = IapItemDisplay<"STICKER_PGO_FEST_2025_LOGO.3">;
export type IapItemDisplayStickerPgoFest2025Logo5 = IapItemDisplay<"STICKER_PGO_FEST_2025_LOGO.5">;
export type IapItemDisplayStickerPgoFestVictini053 = IapItemDisplay<"STICKER_PGO_FEST_VICTINI_05.3">;
export type IapItemDisplayStickerPgoFestVictini055 = IapItemDisplay<"STICKER_PGO_FEST_VICTINI_05.5">;
export type IapItemDisplayStickerPgoTour20263 = IapItemDisplay<"STICKER_PGO_TOUR_2026.3">;
export type IapItemDisplayStickerPgoTour20265 = IapItemDisplay<"STICKER_PGO_TOUR_2026.5">;
export type IapItemDisplayStickerPgoTour202613 = IapItemDisplay<"STICKER_PGO_TOUR_2026_1.3">;
export type IapItemDisplayStickerPgoTour202615 = IapItemDisplay<"STICKER_PGO_TOUR_2026_1.5">;
export type IapItemDisplayStickerPgoTour202623 = IapItemDisplay<"STICKER_PGO_TOUR_2026_2.3">;
export type IapItemDisplayStickerPgoTour202625 = IapItemDisplay<"STICKER_PGO_TOUR_2026_2.5">;
export type IapItemDisplayStickerPgoTour202633 = IapItemDisplay<"STICKER_PGO_TOUR_2026_3.3">;
export type IapItemDisplayStickerPgoTour202635 = IapItemDisplay<"STICKER_PGO_TOUR_2026_3.5">;
export type IapItemDisplayStickerPgoTour2026Logo3 = IapItemDisplay<"STICKER_PGO_TOUR_2026_LOGO.3">;
export type IapItemDisplayStickerPgoTour2026Logo5 = IapItemDisplay<"STICKER_PGO_TOUR_2026_LOGO.5">;
export type IapItemDisplayStickerPgoWildarea20243 = IapItemDisplay<"STICKER_PGO_WILDAREA_2024.3">;
export type IapItemDisplayStickerPgoWildarea20245 = IapItemDisplay<"STICKER_PGO_WILDAREA_2024.5">;
export type IapItemDisplayStickerPgoWildarea202413 = IapItemDisplay<"STICKER_PGO_WILDAREA_2024_1.3">;
export type IapItemDisplayStickerPgoWildarea202415 = IapItemDisplay<"STICKER_PGO_WILDAREA_2024_1.5">;
export type IapItemDisplayStickerPgoWildarea202423 = IapItemDisplay<"STICKER_PGO_WILDAREA_2024_2.3">;
export type IapItemDisplayStickerPgoWildarea202425 = IapItemDisplay<"STICKER_PGO_WILDAREA_2024_2.5">;
export type IapItemDisplayStickerPgoWildarea202433 = IapItemDisplay<"STICKER_PGO_WILDAREA_2024_3.3">;
export type IapItemDisplayStickerPgoWildarea202435 = IapItemDisplay<"STICKER_PGO_WILDAREA_2024_3.5">;
export type IapItemDisplayStickerPgoWildarea202443 = IapItemDisplay<"STICKER_PGO_WILDAREA_2024_4.3">;
export type IapItemDisplayStickerPgoWildarea202445 = IapItemDisplay<"STICKER_PGO_WILDAREA_2024_4.5">;
export type IapItemDisplayStickerPgoWildarea2024Logo3 = IapItemDisplay<"STICKER_PGO_WILDAREA_2024_LOGO.3">;
export type IapItemDisplayStickerPgoWildarea2024Logo5 = IapItemDisplay<"STICKER_PGO_WILDAREA_2024_LOGO.5">;
export type IapItemDisplayStickerPikachuJol3 = IapItemDisplay<"STICKER_PIKACHU_JOL.3">;
export type IapItemDisplayStickerPikachuJol5 = IapItemDisplay<"STICKER_PIKACHU_JOL.5">;
export type IapItemDisplayStickerPokemonchatpals2403 = IapItemDisplay<"STICKER_POKEMONCHATPALS2_40.3">;
export type IapItemDisplayStickerPokemonchatpals2405 = IapItemDisplay<"STICKER_POKEMONCHATPALS2_40.5">;
export type IapItemDisplayStickerPonyta13 = IapItemDisplay<"STICKER_PONYTA_1.3">;
export type IapItemDisplayStickerPonyta15 = IapItemDisplay<"STICKER_PONYTA_1.5">;
export type IapItemDisplayStickerPonyta23 = IapItemDisplay<"STICKER_PONYTA_2.3">;
export type IapItemDisplayStickerPonyta25 = IapItemDisplay<"STICKER_PONYTA_2.5">;
export type IapItemDisplayStickerPonyta33 = IapItemDisplay<"STICKER_PONYTA_3.3">;
export type IapItemDisplayStickerPonyta35 = IapItemDisplay<"STICKER_PONYTA_3.5">;
export type IapItemDisplayStickerPonyta43 = IapItemDisplay<"STICKER_PONYTA_4.3">;
export type IapItemDisplayStickerPonyta45 = IapItemDisplay<"STICKER_PONYTA_4.5">;
export type IapItemDisplayStickerPoppliocd13 = IapItemDisplay<"STICKER_POPPLIOCD_1.3">;
export type IapItemDisplayStickerPoppliocd15 = IapItemDisplay<"STICKER_POPPLIOCD_1.5">;
export type IapItemDisplayStickerPoppliocd23 = IapItemDisplay<"STICKER_POPPLIOCD_2.3">;
export type IapItemDisplayStickerPoppliocd25 = IapItemDisplay<"STICKER_POPPLIOCD_2.5">;
export type IapItemDisplayStickerPoppliocd33 = IapItemDisplay<"STICKER_POPPLIOCD_3.3">;
export type IapItemDisplayStickerPoppliocd35 = IapItemDisplay<"STICKER_POPPLIOCD_3.5">;
export type IapItemDisplayStickerPoppliocd43 = IapItemDisplay<"STICKER_POPPLIOCD_4.3">;
export type IapItemDisplayStickerPoppliocd45 = IapItemDisplay<"STICKER_POPPLIOCD_4.5">;
export type IapItemDisplayStickerPsychicspec21Inkay3 = IapItemDisplay<"STICKER_PSYCHICSPEC21_INKAY.3">;
export type IapItemDisplayStickerPsychicspec21Inkay5 = IapItemDisplay<"STICKER_PSYCHICSPEC21_INKAY.5">;
export type IapItemDisplayStickerPsychicspec21Inkay23 = IapItemDisplay<"STICKER_PSYCHICSPEC21_INKAY2.3">;
export type IapItemDisplayStickerPsychicspec21Inkay25 = IapItemDisplay<"STICKER_PSYCHICSPEC21_INKAY2.5">;
export type IapItemDisplayStickerRowletcd13 = IapItemDisplay<"STICKER_ROWLETCD_1.3">;
export type IapItemDisplayStickerRowletcd15 = IapItemDisplay<"STICKER_ROWLETCD_1.5">;
export type IapItemDisplayStickerRowletcd23 = IapItemDisplay<"STICKER_ROWLETCD_2.3">;
export type IapItemDisplayStickerRowletcd25 = IapItemDisplay<"STICKER_ROWLETCD_2.5">;
export type IapItemDisplayStickerRowletcd33 = IapItemDisplay<"STICKER_ROWLETCD_3.3">;
export type IapItemDisplayStickerRowletcd35 = IapItemDisplay<"STICKER_ROWLETCD_3.5">;
export type IapItemDisplayStickerRowletcd43 = IapItemDisplay<"STICKER_ROWLETCD_4.3">;
export type IapItemDisplayStickerRowletcd45 = IapItemDisplay<"STICKER_ROWLETCD_4.5">;
export type IapItemDisplayStickerSewaddlecd13 = IapItemDisplay<"STICKER_SEWADDLECD_1.3">;
export type IapItemDisplayStickerSewaddlecd15 = IapItemDisplay<"STICKER_SEWADDLECD_1.5">;
export type IapItemDisplayStickerSewaddlecd23 = IapItemDisplay<"STICKER_SEWADDLECD_2.3">;
export type IapItemDisplayStickerSewaddlecd25 = IapItemDisplay<"STICKER_SEWADDLECD_2.5">;
export type IapItemDisplayStickerSewaddlecd33 = IapItemDisplay<"STICKER_SEWADDLECD_3.3">;
export type IapItemDisplayStickerSewaddlecd35 = IapItemDisplay<"STICKER_SEWADDLECD_3.5">;
export type IapItemDisplayStickerSewaddlecd43 = IapItemDisplay<"STICKER_SEWADDLECD_4.3">;
export type IapItemDisplayStickerSewaddlecd45 = IapItemDisplay<"STICKER_SEWADDLECD_4.5">;
export type IapItemDisplayStickerShelmetKarrablast13 = IapItemDisplay<"STICKER_SHELMET_KARRABLAST_1.3">;
export type IapItemDisplayStickerShelmetKarrablast15 = IapItemDisplay<"STICKER_SHELMET_KARRABLAST_1.5">;
export type IapItemDisplayStickerShelmetKarrablast23 = IapItemDisplay<"STICKER_SHELMET_KARRABLAST_2.3">;
export type IapItemDisplayStickerShelmetKarrablast25 = IapItemDisplay<"STICKER_SHELMET_KARRABLAST_2.5">;
export type IapItemDisplayStickerShelmetKarrablast33 = IapItemDisplay<"STICKER_SHELMET_KARRABLAST_3.3">;
export type IapItemDisplayStickerShelmetKarrablast35 = IapItemDisplay<"STICKER_SHELMET_KARRABLAST_3.5">;
export type IapItemDisplayStickerSlowpoke13 = IapItemDisplay<"STICKER_SLOWPOKE_1.3">;
export type IapItemDisplayStickerSlowpoke15 = IapItemDisplay<"STICKER_SLOWPOKE_1.5">;
export type IapItemDisplayStickerSlowpoke23 = IapItemDisplay<"STICKER_SLOWPOKE_2.3">;
export type IapItemDisplayStickerSlowpoke25 = IapItemDisplay<"STICKER_SLOWPOKE_2.5">;
export type IapItemDisplayStickerSlowpoke33 = IapItemDisplay<"STICKER_SLOWPOKE_3.3">;
export type IapItemDisplayStickerSlowpoke35 = IapItemDisplay<"STICKER_SLOWPOKE_3.5">;
export type IapItemDisplayStickerSlowpoke43 = IapItemDisplay<"STICKER_SLOWPOKE_4.3">;
export type IapItemDisplayStickerSlowpoke45 = IapItemDisplay<"STICKER_SLOWPOKE_4.5">;
export type IapItemDisplayStickerSpheal13 = IapItemDisplay<"STICKER_SPHEAL_1.3">;
export type IapItemDisplayStickerSpheal15 = IapItemDisplay<"STICKER_SPHEAL_1.5">;
export type IapItemDisplayStickerSpheal23 = IapItemDisplay<"STICKER_SPHEAL_2.3">;
export type IapItemDisplayStickerSpheal25 = IapItemDisplay<"STICKER_SPHEAL_2.5">;
export type IapItemDisplayStickerSpheal33 = IapItemDisplay<"STICKER_SPHEAL_3.3">;
export type IapItemDisplayStickerSpheal35 = IapItemDisplay<"STICKER_SPHEAL_3.5">;
export type IapItemDisplayStickerSpheal43 = IapItemDisplay<"STICKER_SPHEAL_4.3">;
export type IapItemDisplayStickerSpheal45 = IapItemDisplay<"STICKER_SPHEAL_4.5">;
export type IapItemDisplayStickerSprigatito13 = IapItemDisplay<"STICKER_SPRIGATITO_1.3">;
export type IapItemDisplayStickerSprigatito15 = IapItemDisplay<"STICKER_SPRIGATITO_1.5">;
export type IapItemDisplayStickerSprigatito23 = IapItemDisplay<"STICKER_SPRIGATITO_2.3">;
export type IapItemDisplayStickerSprigatito25 = IapItemDisplay<"STICKER_SPRIGATITO_2.5">;
export type IapItemDisplayStickerSprigatito33 = IapItemDisplay<"STICKER_SPRIGATITO_3.3">;
export type IapItemDisplayStickerSprigatito35 = IapItemDisplay<"STICKER_SPRIGATITO_3.5">;
export type IapItemDisplayStickerSprigatito43 = IapItemDisplay<"STICKER_SPRIGATITO_4.3">;
export type IapItemDisplayStickerSprigatito45 = IapItemDisplay<"STICKER_SPRIGATITO_4.5">;
export type IapItemDisplayStickerSpring202413 = IapItemDisplay<"STICKER_SPRING_2024_1.3">;
export type IapItemDisplayStickerSpring202415 = IapItemDisplay<"STICKER_SPRING_2024_1.5">;
export type IapItemDisplayStickerSpring202423 = IapItemDisplay<"STICKER_SPRING_2024_2.3">;
export type IapItemDisplayStickerSpring202425 = IapItemDisplay<"STICKER_SPRING_2024_2.5">;
export type IapItemDisplayStickerSpring202433 = IapItemDisplay<"STICKER_SPRING_2024_3.3">;
export type IapItemDisplayStickerSpring202435 = IapItemDisplay<"STICKER_SPRING_2024_3.5">;
export type IapItemDisplayStickerSpring202443 = IapItemDisplay<"STICKER_SPRING_2024_4.3">;
export type IapItemDisplayStickerSpring202445 = IapItemDisplay<"STICKER_SPRING_2024_4.5">;
export type IapItemDisplayStickerSpring202453 = IapItemDisplay<"STICKER_SPRING_2024_5.3">;
export type IapItemDisplayStickerSpring202455 = IapItemDisplay<"STICKER_SPRING_2024_5.5">;
export type IapItemDisplayStickerSpring202463 = IapItemDisplay<"STICKER_SPRING_2024_6.3">;
export type IapItemDisplayStickerSpring202465 = IapItemDisplay<"STICKER_SPRING_2024_6.5">;
export type IapItemDisplayStickerSpring202513 = IapItemDisplay<"STICKER_SPRING_2025_1.3">;
export type IapItemDisplayStickerSpring202515 = IapItemDisplay<"STICKER_SPRING_2025_1.5">;
export type IapItemDisplayStickerSpring202523 = IapItemDisplay<"STICKER_SPRING_2025_2.3">;
export type IapItemDisplayStickerSpring202525 = IapItemDisplay<"STICKER_SPRING_2025_2.5">;
export type IapItemDisplayStickerSpring202533 = IapItemDisplay<"STICKER_SPRING_2025_3.3">;
export type IapItemDisplayStickerSpring202535 = IapItemDisplay<"STICKER_SPRING_2025_3.5">;
export type IapItemDisplayStickerSpring202543 = IapItemDisplay<"STICKER_SPRING_2025_4.3">;
export type IapItemDisplayStickerSpring202545 = IapItemDisplay<"STICKER_SPRING_2025_4.5">;
export type IapItemDisplayStickerSpring202613 = IapItemDisplay<"STICKER_SPRING_2026_1.3">;
export type IapItemDisplayStickerSpring202615 = IapItemDisplay<"STICKER_SPRING_2026_1.5">;
export type IapItemDisplayStickerSpring202623 = IapItemDisplay<"STICKER_SPRING_2026_2.3">;
export type IapItemDisplayStickerSpring202625 = IapItemDisplay<"STICKER_SPRING_2026_2.5">;
export type IapItemDisplayStickerSpring202633 = IapItemDisplay<"STICKER_SPRING_2026_3.3">;
export type IapItemDisplayStickerSpring202635 = IapItemDisplay<"STICKER_SPRING_2026_3.5">;
export type IapItemDisplayStickerSpring202643 = IapItemDisplay<"STICKER_SPRING_2026_4.3">;
export type IapItemDisplayStickerSpring202645 = IapItemDisplay<"STICKER_SPRING_2026_4.5">;
export type IapItemDisplayStickerSpringEievui3 = IapItemDisplay<"STICKER_SPRING_EIEVUI.3">;
export type IapItemDisplayStickerSpringEievui5 = IapItemDisplay<"STICKER_SPRING_EIEVUI.5">;
export type IapItemDisplayStickerSpringHapinas3 = IapItemDisplay<"STICKER_SPRING_HAPINAS.3">;
export type IapItemDisplayStickerSpringHapinas5 = IapItemDisplay<"STICKER_SPRING_HAPINAS.5">;
export type IapItemDisplayStickerSpringMimirol3 = IapItemDisplay<"STICKER_SPRING_MIMIROL.3">;
export type IapItemDisplayStickerSpringMimirol5 = IapItemDisplay<"STICKER_SPRING_MIMIROL.5">;
export type IapItemDisplayStickerSpringNimphia3 = IapItemDisplay<"STICKER_SPRING_NIMPHIA.3">;
export type IapItemDisplayStickerSpringNimphia5 = IapItemDisplay<"STICKER_SPRING_NIMPHIA.5">;
export type IapItemDisplayStickerSpringPikachu3 = IapItemDisplay<"STICKER_SPRING_PIKACHU.3">;
export type IapItemDisplayStickerSpringPikachu5 = IapItemDisplay<"STICKER_SPRING_PIKACHU.5">;
export type IapItemDisplayStickerSpringPipito3 = IapItemDisplay<"STICKER_SPRING_PIPITO.3">;
export type IapItemDisplayStickerSpringPipito5 = IapItemDisplay<"STICKER_SPRING_PIPITO.5">;
export type IapItemDisplayStickerStufful13 = IapItemDisplay<"STICKER_STUFFUL_1.3">;
export type IapItemDisplayStickerStufful15 = IapItemDisplay<"STICKER_STUFFUL_1.5">;
export type IapItemDisplayStickerStufful23 = IapItemDisplay<"STICKER_STUFFUL_2.3">;
export type IapItemDisplayStickerStufful25 = IapItemDisplay<"STICKER_STUFFUL_2.5">;
export type IapItemDisplayStickerStufful33 = IapItemDisplay<"STICKER_STUFFUL_3.3">;
export type IapItemDisplayStickerStufful35 = IapItemDisplay<"STICKER_STUFFUL_3.5">;
export type IapItemDisplayStickerStufful43 = IapItemDisplay<"STICKER_STUFFUL_4.3">;
export type IapItemDisplayStickerStufful45 = IapItemDisplay<"STICKER_STUFFUL_4.5">;
export type IapItemDisplayStickerSummer13 = IapItemDisplay<"STICKER_SUMMER_1.3">;
export type IapItemDisplayStickerSummer15 = IapItemDisplay<"STICKER_SUMMER_1.5">;
export type IapItemDisplayStickerSummer23 = IapItemDisplay<"STICKER_SUMMER_2.3">;
export type IapItemDisplayStickerSummer25 = IapItemDisplay<"STICKER_SUMMER_2.5">;
export type IapItemDisplayStickerSummer2023Blastoise3 = IapItemDisplay<"STICKER_SUMMER_2023_BLASTOISE.3">;
export type IapItemDisplayStickerSummer2023Blastoise5 = IapItemDisplay<"STICKER_SUMMER_2023_BLASTOISE.5">;
export type IapItemDisplayStickerSummer2023Butterfree3 = IapItemDisplay<"STICKER_SUMMER_2023_BUTTERFREE.3">;
export type IapItemDisplayStickerSummer2023Butterfree5 = IapItemDisplay<"STICKER_SUMMER_2023_BUTTERFREE.5">;
export type IapItemDisplayStickerSummer2023Clamperl3 = IapItemDisplay<"STICKER_SUMMER_2023_CLAMPERL.3">;
export type IapItemDisplayStickerSummer2023Clamperl5 = IapItemDisplay<"STICKER_SUMMER_2023_CLAMPERL.5">;
export type IapItemDisplayStickerSummer2023Ledian3 = IapItemDisplay<"STICKER_SUMMER_2023_LEDIAN.3">;
export type IapItemDisplayStickerSummer2023Ledian5 = IapItemDisplay<"STICKER_SUMMER_2023_LEDIAN.5">;
export type IapItemDisplayStickerSummer2023Sawsbuck3 = IapItemDisplay<"STICKER_SUMMER_2023_SAWSBUCK.3">;
export type IapItemDisplayStickerSummer2023Sawsbuck5 = IapItemDisplay<"STICKER_SUMMER_2023_SAWSBUCK.5">;
export type IapItemDisplayStickerSummer2023Squirtle3 = IapItemDisplay<"STICKER_SUMMER_2023_SQUIRTLE.3">;
export type IapItemDisplayStickerSummer2023Squirtle5 = IapItemDisplay<"STICKER_SUMMER_2023_SQUIRTLE.5">;
export type IapItemDisplayStickerSummer202413 = IapItemDisplay<"STICKER_SUMMER_2024_1.3">;
export type IapItemDisplayStickerSummer202415 = IapItemDisplay<"STICKER_SUMMER_2024_1.5">;
export type IapItemDisplayStickerSummer202423 = IapItemDisplay<"STICKER_SUMMER_2024_2.3">;
export type IapItemDisplayStickerSummer202425 = IapItemDisplay<"STICKER_SUMMER_2024_2.5">;
export type IapItemDisplayStickerSummer202433 = IapItemDisplay<"STICKER_SUMMER_2024_3.3">;
export type IapItemDisplayStickerSummer202435 = IapItemDisplay<"STICKER_SUMMER_2024_3.5">;
export type IapItemDisplayStickerSummer202443 = IapItemDisplay<"STICKER_SUMMER_2024_4.3">;
export type IapItemDisplayStickerSummer202445 = IapItemDisplay<"STICKER_SUMMER_2024_4.5">;
export type IapItemDisplayStickerSummer202453 = IapItemDisplay<"STICKER_SUMMER_2024_5.3">;
export type IapItemDisplayStickerSummer202455 = IapItemDisplay<"STICKER_SUMMER_2024_5.5">;
export type IapItemDisplayStickerSummer202463 = IapItemDisplay<"STICKER_SUMMER_2024_6.3">;
export type IapItemDisplayStickerSummer202465 = IapItemDisplay<"STICKER_SUMMER_2024_6.5">;
export type IapItemDisplayStickerSummer202513 = IapItemDisplay<"STICKER_SUMMER_2025_1.3">;
export type IapItemDisplayStickerSummer202515 = IapItemDisplay<"STICKER_SUMMER_2025_1.5">;
export type IapItemDisplayStickerSummer202523 = IapItemDisplay<"STICKER_SUMMER_2025_2.3">;
export type IapItemDisplayStickerSummer202525 = IapItemDisplay<"STICKER_SUMMER_2025_2.5">;
export type IapItemDisplayStickerSummer202533 = IapItemDisplay<"STICKER_SUMMER_2025_3.3">;
export type IapItemDisplayStickerSummer202535 = IapItemDisplay<"STICKER_SUMMER_2025_3.5">;
export type IapItemDisplayStickerSummer202543 = IapItemDisplay<"STICKER_SUMMER_2025_4.3">;
export type IapItemDisplayStickerSummer202545 = IapItemDisplay<"STICKER_SUMMER_2025_4.5">;
export type IapItemDisplayStickerSummer33 = IapItemDisplay<"STICKER_SUMMER_3.3">;
export type IapItemDisplayStickerSummer35 = IapItemDisplay<"STICKER_SUMMER_3.5">;
export type IapItemDisplayStickerSummer43 = IapItemDisplay<"STICKER_SUMMER_4.3">;
export type IapItemDisplayStickerSummer45 = IapItemDisplay<"STICKER_SUMMER_4.5">;
export type IapItemDisplayStickerSummer53 = IapItemDisplay<"STICKER_SUMMER_5.3">;
export type IapItemDisplayStickerSummer55 = IapItemDisplay<"STICKER_SUMMER_5.5">;
export type IapItemDisplayStickerSummer63 = IapItemDisplay<"STICKER_SUMMER_6.3">;
export type IapItemDisplayStickerSummer65 = IapItemDisplay<"STICKER_SUMMER_6.5">;
export type IapItemDisplayStickerSwordshield2113 = IapItemDisplay<"STICKER_SWORDSHIELD21_1.3">;
export type IapItemDisplayStickerSwordshield2115 = IapItemDisplay<"STICKER_SWORDSHIELD21_1.5">;
export type IapItemDisplayStickerSwordshield2123 = IapItemDisplay<"STICKER_SWORDSHIELD21_2.3">;
export type IapItemDisplayStickerSwordshield2125 = IapItemDisplay<"STICKER_SWORDSHIELD21_2.5">;
export type IapItemDisplayStickerSwordshield2133 = IapItemDisplay<"STICKER_SWORDSHIELD21_3.3">;
export type IapItemDisplayStickerSwordshield2135 = IapItemDisplay<"STICKER_SWORDSHIELD21_3.5">;
export type IapItemDisplayStickerSwordshield2143 = IapItemDisplay<"STICKER_SWORDSHIELD21_4.3">;
export type IapItemDisplayStickerSwordshield2145 = IapItemDisplay<"STICKER_SWORDSHIELD21_4.5">;
export type IapItemDisplayStickerSwordshield2153 = IapItemDisplay<"STICKER_SWORDSHIELD21_5.3">;
export type IapItemDisplayStickerSwordshield2155 = IapItemDisplay<"STICKER_SWORDSHIELD21_5.5">;
export type IapItemDisplayStickerTlBlanche3 = IapItemDisplay<"STICKER_TL_BLANCHE.3">;
export type IapItemDisplayStickerTlBlanche5 = IapItemDisplay<"STICKER_TL_BLANCHE.5">;
export type IapItemDisplayStickerTlCandela3 = IapItemDisplay<"STICKER_TL_CANDELA.3">;
export type IapItemDisplayStickerTlCandela5 = IapItemDisplay<"STICKER_TL_CANDELA.5">;
export type IapItemDisplayStickerTlSpark3 = IapItemDisplay<"STICKER_TL_SPARK.3">;
export type IapItemDisplayStickerTlSpark5 = IapItemDisplay<"STICKER_TL_SPARK.5">;
export type IapItemDisplayStickerTrArlo3 = IapItemDisplay<"STICKER_TR_ARLO.3">;
export type IapItemDisplayStickerTrArlo5 = IapItemDisplay<"STICKER_TR_ARLO.5">;
export type IapItemDisplayStickerTrCliff3 = IapItemDisplay<"STICKER_TR_CLIFF.3">;
export type IapItemDisplayStickerTrCliff5 = IapItemDisplay<"STICKER_TR_CLIFF.5">;
export type IapItemDisplayStickerTrSierra3 = IapItemDisplay<"STICKER_TR_SIERRA.3">;
export type IapItemDisplayStickerTrSierra5 = IapItemDisplay<"STICKER_TR_SIERRA.5">;
export type IapItemDisplayStickerTynamocd13 = IapItemDisplay<"STICKER_TYNAMOCD_1.3">;
export type IapItemDisplayStickerTynamocd15 = IapItemDisplay<"STICKER_TYNAMOCD_1.5">;
export type IapItemDisplayStickerTynamocd23 = IapItemDisplay<"STICKER_TYNAMOCD_2.3">;
export type IapItemDisplayStickerTynamocd25 = IapItemDisplay<"STICKER_TYNAMOCD_2.5">;
export type IapItemDisplayStickerTynamocd33 = IapItemDisplay<"STICKER_TYNAMOCD_3.3">;
export type IapItemDisplayStickerTynamocd35 = IapItemDisplay<"STICKER_TYNAMOCD_3.5">;
export type IapItemDisplayStickerTynamocd43 = IapItemDisplay<"STICKER_TYNAMOCD_4.3">;
export type IapItemDisplayStickerTynamocd45 = IapItemDisplay<"STICKER_TYNAMOCD_4.5">;
export type IapItemDisplayStickerValentine202313 = IapItemDisplay<"STICKER_VALENTINE2023_1.3">;
export type IapItemDisplayStickerValentine202315 = IapItemDisplay<"STICKER_VALENTINE2023_1.5">;
export type IapItemDisplayStickerValentine202323 = IapItemDisplay<"STICKER_VALENTINE2023_2.3">;
export type IapItemDisplayStickerValentine202325 = IapItemDisplay<"STICKER_VALENTINE2023_2.5">;
export type IapItemDisplayStickerValentine202333 = IapItemDisplay<"STICKER_VALENTINE2023_3.3">;
export type IapItemDisplayStickerValentine202335 = IapItemDisplay<"STICKER_VALENTINE2023_3.5">;
export type IapItemDisplayStickerWcs2025CarGroup3 = IapItemDisplay<"STICKER_WCS2025_CAR_GROUP.3">;
export type IapItemDisplayStickerWcs2025CarGroup5 = IapItemDisplay<"STICKER_WCS2025_CAR_GROUP.5">;
export type IapItemDisplayStickerWcs2025Jigglypuff3 = IapItemDisplay<"STICKER_WCS2025_JIGGLYPUFF.3">;
export type IapItemDisplayStickerWcs2025Jigglypuff5 = IapItemDisplay<"STICKER_WCS2025_JIGGLYPUFF.5">;
export type IapItemDisplayStickerWcs2025Murkrow3 = IapItemDisplay<"STICKER_WCS2025_MURKROW.3">;
export type IapItemDisplayStickerWcs2025Murkrow5 = IapItemDisplay<"STICKER_WCS2025_MURKROW.5">;
export type IapItemDisplayStickerWcs2025Pikachu3 = IapItemDisplay<"STICKER_WCS2025_PIKACHU.3">;
export type IapItemDisplayStickerWcs2025Pikachu5 = IapItemDisplay<"STICKER_WCS2025_PIKACHU.5">;
export type IapItemDisplayStickerWinter202313 = IapItemDisplay<"STICKER_WINTER2023_1.3">;
export type IapItemDisplayStickerWinter202315 = IapItemDisplay<"STICKER_WINTER2023_1.5">;
export type IapItemDisplayStickerWinter202323 = IapItemDisplay<"STICKER_WINTER2023_2.3">;
export type IapItemDisplayStickerWinter202325 = IapItemDisplay<"STICKER_WINTER2023_2.5">;
export type IapItemDisplayStickerWinter202333 = IapItemDisplay<"STICKER_WINTER2023_3.3">;
export type IapItemDisplayStickerWinter202335 = IapItemDisplay<"STICKER_WINTER2023_3.5">;
export type IapItemDisplayStickerWinter202343 = IapItemDisplay<"STICKER_WINTER2023_4.3">;
export type IapItemDisplayStickerWinter202345 = IapItemDisplay<"STICKER_WINTER2023_4.5">;
export type IapItemDisplayStickerWinter202353 = IapItemDisplay<"STICKER_WINTER2023_5.3">;
export type IapItemDisplayStickerWinter202355 = IapItemDisplay<"STICKER_WINTER2023_5.5">;
export type IapItemDisplayStickerWinter202363 = IapItemDisplay<"STICKER_WINTER2023_6.3">;
export type IapItemDisplayStickerWinter202365 = IapItemDisplay<"STICKER_WINTER2023_6.5">;
export type IapItemDisplayStickerWinter202513 = IapItemDisplay<"STICKER_WINTER2025_1.3">;
export type IapItemDisplayStickerWinter202515 = IapItemDisplay<"STICKER_WINTER2025_1.5">;
export type IapItemDisplayStickerWinter202523 = IapItemDisplay<"STICKER_WINTER2025_2.3">;
export type IapItemDisplayStickerWinter202525 = IapItemDisplay<"STICKER_WINTER2025_2.5">;
export type IapItemDisplayStickerWinter202533 = IapItemDisplay<"STICKER_WINTER2025_3.3">;
export type IapItemDisplayStickerWinter202535 = IapItemDisplay<"STICKER_WINTER2025_3.5">;
export type IapItemDisplayStickerWinter202543 = IapItemDisplay<"STICKER_WINTER2025_4.3">;
export type IapItemDisplayStickerWinter202545 = IapItemDisplay<"STICKER_WINTER2025_4.5">;
export type IapItemDisplayStickerWinter202413 = IapItemDisplay<"STICKER_WINTER_2024_1.3">;
export type IapItemDisplayStickerWinter202415 = IapItemDisplay<"STICKER_WINTER_2024_1.5">;
export type IapItemDisplayStickerWinter202423 = IapItemDisplay<"STICKER_WINTER_2024_2.3">;
export type IapItemDisplayStickerWinter202425 = IapItemDisplay<"STICKER_WINTER_2024_2.5">;
export type IapItemDisplayStickerWinter202433 = IapItemDisplay<"STICKER_WINTER_2024_3.3">;
export type IapItemDisplayStickerWinter202435 = IapItemDisplay<"STICKER_WINTER_2024_3.5">;
export type IapItemDisplayStickerWinter202443 = IapItemDisplay<"STICKER_WINTER_2024_4.3">;
export type IapItemDisplayStickerWinter202445 = IapItemDisplay<"STICKER_WINTER_2024_4.5">;
export type IapItemDisplayStickerWinter202453 = IapItemDisplay<"STICKER_WINTER_2024_5.3">;
export type IapItemDisplayStickerWinter202455 = IapItemDisplay<"STICKER_WINTER_2024_5.5">;
export type IapItemDisplayStickerWinter202463 = IapItemDisplay<"STICKER_WINTER_2024_6.3">;
export type IapItemDisplayStickerWinter202465 = IapItemDisplay<"STICKER_WINTER_2024_6.5">;
export type IapItemDisplayStickerWinterAmaura3 = IapItemDisplay<"STICKER_WINTER_AMAURA.3">;
export type IapItemDisplayStickerWinterAmaura5 = IapItemDisplay<"STICKER_WINTER_AMAURA.5">;
export type IapItemDisplayStickerWinterDarumaka3 = IapItemDisplay<"STICKER_WINTER_DARUMAKA.3">;
export type IapItemDisplayStickerWinterDarumaka5 = IapItemDisplay<"STICKER_WINTER_DARUMAKA.5">;
export type IapItemDisplayStickerWinterGlaceon3 = IapItemDisplay<"STICKER_WINTER_GLACEON.3">;
export type IapItemDisplayStickerWinterGlaceon5 = IapItemDisplay<"STICKER_WINTER_GLACEON.5">;
export type IapItemDisplayStickerWinterPikachu3 = IapItemDisplay<"STICKER_WINTER_PIKACHU.3">;
export type IapItemDisplayStickerWinterPikachu5 = IapItemDisplay<"STICKER_WINTER_PIKACHU.5">;
export type IapItemDisplayStickerWinterSawsbuck3 = IapItemDisplay<"STICKER_WINTER_SAWSBUCK.3">;
export type IapItemDisplayStickerWinterSawsbuck5 = IapItemDisplay<"STICKER_WINTER_SAWSBUCK.5">;
export type IapItemDisplayStickerWinterSnorunt3 = IapItemDisplay<"STICKER_WINTER_SNORUNT.3">;
export type IapItemDisplayStickerWinterSnorunt5 = IapItemDisplay<"STICKER_WINTER_SNORUNT.5">;
export type IapItemDisplayStickerYurutto123 = IapItemDisplay<"STICKER_YURUTTO_12.3">;
export type IapItemDisplayStickerYurutto125 = IapItemDisplay<"STICKER_YURUTTO_12.5">;
export type IapItemDisplayStickerYurutto243 = IapItemDisplay<"STICKER_YURUTTO_24.3">;
export type IapItemDisplayStickerYurutto245 = IapItemDisplay<"STICKER_YURUTTO_24.5">;
export type IapItemDisplayWinterholidays2025DeluxeEventPassTrackUnlock = IapItemDisplay<"WINTERHOLIDAYS2025_DELUXE_EVENT_PASS_TRACK_UNLOCK">;
export type IapItemDisplayWinterholidays2025DeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"WINTERHOLIDAYS2025_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS">;
export type IapItemDisplayBattlepassticket1 = IapItemDisplay<"battlepassticket.1">;
export type IapItemDisplayBundleEliteexp20241 = IapItemDisplay<"bundle.EliteExp2024.1">;
export type IapItemDisplayBundleEliteexp20242 = IapItemDisplay<"bundle.EliteExp2024.2">;
export type IapItemDisplayBundleEliteexp20243 = IapItemDisplay<"bundle.EliteExp2024.3">;
export type IapItemDisplayBundleEliteexp20244 = IapItemDisplay<"bundle.EliteExp2024.4">;
export type IapItemDisplayBundleEliteexp20245 = IapItemDisplay<"bundle.EliteExp2024.5">;
export type IapItemDisplayBundleGotour20241 = IapItemDisplay<"bundle.GOTour2024.1">;
export type IapItemDisplayBundleGotour20242 = IapItemDisplay<"bundle.GOTour2024.2">;
export type IapItemDisplayBundleGotour20243 = IapItemDisplay<"bundle.GOTour2024.3">;
export type IapItemDisplayBundleGotour20244 = IapItemDisplay<"bundle.GOTour2024.4">;
export type IapItemDisplayBundleGotour20245 = IapItemDisplay<"bundle.GOTour2024.5">;
export type IapItemDisplayBundleGotour20246 = IapItemDisplay<"bundle.GOTour2024.6">;
export type IapItemDisplayBundleGotour20247 = IapItemDisplay<"bundle.GOTour2024.7">;
export type IapItemDisplayBundleAdventurebrazil1001 = IapItemDisplay<"bundle.adventurebrazil100.1">;
export type IapItemDisplayBundleAdventurebrazil2001 = IapItemDisplay<"bundle.adventurebrazil200.1">;
export type IapItemDisplayBundleAnniversary20231 = IapItemDisplay<"bundle.anniversary2023.1">;
export type IapItemDisplayBundleApacmar20251 = IapItemDisplay<"bundle.apacmar2025.1">;
export type IapItemDisplayBundleArraia20251 = IapItemDisplay<"bundle.arraia2025.1">;
export type IapItemDisplayBundleArraia20252 = IapItemDisplay<"bundle.arraia2025.2">;
export type IapItemDisplayBundleAtlanticav2box1 = IapItemDisplay<"bundle.atlanticav2box.1">;
export type IapItemDisplayBundleAtlanticav2box2 = IapItemDisplay<"bundle.atlanticav2box.2">;
export type IapItemDisplayBundleBlackfridaystickers241 = IapItemDisplay<"bundle.blackfridaystickers24.1">;
export type IapItemDisplayBundleBlackfridaystickers242 = IapItemDisplay<"bundle.blackfridaystickers24.2">;
export type IapItemDisplayBundleBoost20231 = IapItemDisplay<"bundle.boost2023.1">;
export type IapItemDisplayBundleBrazil20231 = IapItemDisplay<"bundle.brazil2023.1">;
export type IapItemDisplayBundleBrazilrediscover11 = IapItemDisplay<"bundle.brazilrediscover1.1">;
export type IapItemDisplayBundleBrazilrediscover21 = IapItemDisplay<"bundle.brazilrediscover2.1">;
export type IapItemDisplayBundleBrazilvacations1001 = IapItemDisplay<"bundle.brazilvacations100.1">;
export type IapItemDisplayBundleCarnival20251 = IapItemDisplay<"bundle.carnival2025.1">;
export type IapItemDisplayBundleCarnival20252 = IapItemDisplay<"bundle.carnival2025.2">;
export type IapItemDisplayBundleCd20221 = IapItemDisplay<"bundle.cd2022.1">;
export type IapItemDisplayBundleCd20222 = IapItemDisplay<"bundle.cd2022.2">;
export type IapItemDisplayBundleCdrecapstickers1 = IapItemDisplay<"bundle.cdrecapstickers.1">;
export type IapItemDisplayBundleCitysafari450hktw1 = IapItemDisplay<"bundle.citysafari450hktw.1">;
export type IapItemDisplayBundleCswkmakegoodprep1001 = IapItemDisplay<"bundle.cswkmakegoodprep.100.1">;
export type IapItemDisplayBundleCswkmakegoodprep2001 = IapItemDisplay<"bundle.cswkmakegoodprep.200.1">;
export type IapItemDisplayBundleCswkmakegoodprep3001 = IapItemDisplay<"bundle.cswkmakegoodprep.300.1">;
export type IapItemDisplayBundleDecroutes20231 = IapItemDisplay<"bundle.decroutes2023.1">;
export type IapItemDisplayBundleDiademuertos20251 = IapItemDisplay<"bundle.diademuertos2025.1">;
export type IapItemDisplayBundleDiademuertosmax1001 = IapItemDisplay<"bundle.diademuertosmax100.1">;
export type IapItemDisplayBundleDiademuertosmax2001 = IapItemDisplay<"bundle.diademuertosmax200.1">;
export type IapItemDisplayBundleDiwali20251 = IapItemDisplay<"bundle.diwali2025.1">;
export type IapItemDisplayBundleDiwali20252 = IapItemDisplay<"bundle.diwali2025.2">;
export type IapItemDisplayBundleDiwalimax1001 = IapItemDisplay<"bundle.diwalimax100.1">;
export type IapItemDisplayBundleEmcarnival20261 = IapItemDisplay<"bundle.emcarnival2026.1">;
export type IapItemDisplayBundleEmcarnival20262 = IapItemDisplay<"bundle.emcarnival2026.2">;
export type IapItemDisplayBundleEmea20231 = IapItemDisplay<"bundle.emea2023.1">;
export type IapItemDisplayBundleEvolve20221 = IapItemDisplay<"bundle.evolve2022.1">;
export type IapItemDisplayBundleEvolve20222 = IapItemDisplay<"bundle.evolve2022.2">;
export type IapItemDisplayBundleEvolve20223 = IapItemDisplay<"bundle.evolve2022.3">;
export type IapItemDisplayBundleEvolve20224 = IapItemDisplay<"bundle.evolve2022.4">;
export type IapItemDisplayBundleEvolve20225 = IapItemDisplay<"bundle.evolve2022.5">;
export type IapItemDisplayBundleEvolve20226 = IapItemDisplay<"bundle.evolve2022.6">;
export type IapItemDisplayBundleFol20221 = IapItemDisplay<"bundle.fol2022.1">;
export type IapItemDisplayBundleFol20222 = IapItemDisplay<"bundle.fol2022.2">;
export type IapItemDisplayBundleFol20223 = IapItemDisplay<"bundle.fol2022.3">;
export type IapItemDisplayBundleFol20224 = IapItemDisplay<"bundle.fol2022.4">;
export type IapItemDisplayBundleGeneralTemplate4 = IapItemDisplay<"bundle.general.template4">;
export type IapItemDisplayBundleGeneralTemplate5 = IapItemDisplay<"bundle.general.template5">;
export type IapItemDisplayBundleGeneralTemplate6 = IapItemDisplay<"bundle.general.template6">;
export type IapItemDisplayBundleGeneral1Free1 = IapItemDisplay<"bundle.general1.free.1">;
export type IapItemDisplayBundleGeneral1Large1 = IapItemDisplay<"bundle.general1.large.1">;
export type IapItemDisplayBundleGeneral1Medium1 = IapItemDisplay<"bundle.general1.medium.1">;
export type IapItemDisplayBundleGeneral1Medium2 = IapItemDisplay<"bundle.general1.medium.2">;
export type IapItemDisplayBundleGeneral1Medium3 = IapItemDisplay<"bundle.general1.medium.3">;
export type IapItemDisplayBundleGeneral1Rocket1 = IapItemDisplay<"bundle.general1.rocket.1">;
export type IapItemDisplayBundleGeneral1Small1 = IapItemDisplay<"bundle.general1.small.1">;
export type IapItemDisplayBundleGeneral1Tiny2 = IapItemDisplay<"bundle.general1.tiny.2">;
export type IapItemDisplayBundleGeneral1Tiny3 = IapItemDisplay<"bundle.general1.tiny.3">;
export type IapItemDisplayBundleGeneral1Tiny4 = IapItemDisplay<"bundle.general1.tiny.4">;
export type IapItemDisplayBundleGeneral2Free1 = IapItemDisplay<"bundle.general2.free.1">;
export type IapItemDisplayBundleGeneral2Large1 = IapItemDisplay<"bundle.general2.large.1">;
export type IapItemDisplayBundleGeneral2Medium1 = IapItemDisplay<"bundle.general2.medium.1">;
export type IapItemDisplayBundleGeneral2Small1 = IapItemDisplay<"bundle.general2.small.1">;
export type IapItemDisplayBundleGeneral3Free1 = IapItemDisplay<"bundle.general3.free.1">;
export type IapItemDisplayBundleGeneral3Large1 = IapItemDisplay<"bundle.general3.large.1">;
export type IapItemDisplayBundleGeneral3Small1 = IapItemDisplay<"bundle.general3.small.1">;
export type IapItemDisplayBundleGeneral4Large1 = IapItemDisplay<"bundle.general4.large.1">;
export type IapItemDisplayBundleGeneral4Small2 = IapItemDisplay<"bundle.general4.small.2">;
export type IapItemDisplayBundleGeneral5Large1 = IapItemDisplay<"bundle.general5.large.1">;
export type IapItemDisplayBundleGeneral5Small1 = IapItemDisplay<"bundle.general5.small.1">;
export type IapItemDisplayBundleGeneral5Small2 = IapItemDisplay<"bundle.general5.small.2">;
export type IapItemDisplayBundleGeneral5Small3 = IapItemDisplay<"bundle.general5.small.3">;
export type IapItemDisplayBundleGeneral5Small4 = IapItemDisplay<"bundle.general5.small.4">;
export type IapItemDisplayBundleGeneral5Small5 = IapItemDisplay<"bundle.general5.small.5">;
export type IapItemDisplayBundleGeneral6Small1 = IapItemDisplay<"bundle.general6.small.1">;
export type IapItemDisplayBundleGmaxday1 = IapItemDisplay<"bundle.gmaxday.1">;
export type IapItemDisplayBundleGofest20231 = IapItemDisplay<"bundle.gofest2023.1">;
export type IapItemDisplayBundleGofest20232 = IapItemDisplay<"bundle.gofest2023.2">;
export type IapItemDisplayBundleGofest20233 = IapItemDisplay<"bundle.gofest2023.3">;
export type IapItemDisplayBundleGofest20234 = IapItemDisplay<"bundle.gofest2023.4">;
export type IapItemDisplayBundleGofest20235 = IapItemDisplay<"bundle.gofest2023.5">;
export type IapItemDisplayBundleGofest20241 = IapItemDisplay<"bundle.gofest2024.1">;
export type IapItemDisplayBundleGofest20242 = IapItemDisplay<"bundle.gofest2024.2">;
export type IapItemDisplayBundleGofest20243 = IapItemDisplay<"bundle.gofest2024.3">;
export type IapItemDisplayBundleGofest20244 = IapItemDisplay<"bundle.gofest2024.4">;
export type IapItemDisplayBundleGofestmakegoodprep1 = IapItemDisplay<"bundle.gofestmakegoodprep.1">;
export type IapItemDisplayBundleGofestmakegoodprep2 = IapItemDisplay<"bundle.gofestmakegoodprep.2">;
export type IapItemDisplayBundleGofestmakegoodprep3 = IapItemDisplay<"bundle.gofestmakegoodprep.3">;
export type IapItemDisplayBundleGowa20241 = IapItemDisplay<"bundle.gowa2024.1">;
export type IapItemDisplayBundleGowa20242 = IapItemDisplay<"bundle.gowa2024.2">;
export type IapItemDisplayBundleGowa20243 = IapItemDisplay<"bundle.gowa2024.3">;
export type IapItemDisplayBundleGowa20244 = IapItemDisplay<"bundle.gowa2024.4">;
export type IapItemDisplayBundleGpdindialaunch1 = IapItemDisplay<"bundle.gpdindialaunch.1">;
export type IapItemDisplayBundleGpmay20231 = IapItemDisplay<"bundle.gpmay2023.1">;
export type IapItemDisplayBundleGwlatam20251 = IapItemDisplay<"bundle.gwlatam2025.1">;
export type IapItemDisplayBundleGwlatam20252 = IapItemDisplay<"bundle.gwlatam2025.2">;
export type IapItemDisplayBundleGwlatam20253 = IapItemDisplay<"bundle.gwlatam2025.3">;
export type IapItemDisplayBundleHalloweenAdventure1 = IapItemDisplay<"bundle.halloween.adventure.1">;
export type IapItemDisplayBundleHalloweenLarge1 = IapItemDisplay<"bundle.halloween.large.1">;
export type IapItemDisplayBundleHalloweenSmall1 = IapItemDisplay<"bundle.halloween.small.1">;
export type IapItemDisplayBundleHalloween20221 = IapItemDisplay<"bundle.halloween2022.1">;
export type IapItemDisplayBundleHalloween20222 = IapItemDisplay<"bundle.halloween2022.2">;
export type IapItemDisplayBundleHalloween20223 = IapItemDisplay<"bundle.halloween2022.3">;
export type IapItemDisplayBundleHalloween20231 = IapItemDisplay<"bundle.halloween2023.1">;
export type IapItemDisplayBundleHalloween20232 = IapItemDisplay<"bundle.halloween2023.2">;
export type IapItemDisplayBundleHalloween20233 = IapItemDisplay<"bundle.halloween2023.3">;
export type IapItemDisplayBundleHalloween20251 = IapItemDisplay<"bundle.halloween2025.1">;
export type IapItemDisplayBundleHalloween20252 = IapItemDisplay<"bundle.halloween2025.2">;
export type IapItemDisplayBundleHalloween20253 = IapItemDisplay<"bundle.halloween2025.3">;
export type IapItemDisplayBundleHarvestcatch1 = IapItemDisplay<"bundle.harvestcatch.1">;
export type IapItemDisplayBundleHarvestfestival2025 = IapItemDisplay<"bundle.harvestfestival.2025">;
export type IapItemDisplayBundleHatchbox20241 = IapItemDisplay<"bundle.hatchbox2024.1">;
export type IapItemDisplayBundleHawlucha20251 = IapItemDisplay<"bundle.hawlucha2025.1">;
export type IapItemDisplayBundleHawlucha20252 = IapItemDisplay<"bundle.hawlucha2025.2">;
export type IapItemDisplayBundleHawluchacelebration1001 = IapItemDisplay<"bundle.hawluchacelebration100.1">;
export type IapItemDisplayBundleHawluchacelebration2001 = IapItemDisplay<"bundle.hawluchacelebration200.1">;
export type IapItemDisplayBundleHisuiraidday20231 = IapItemDisplay<"bundle.hisuiraidday2023.1">;
export type IapItemDisplayBundleHoli20251 = IapItemDisplay<"bundle.holi2025.1">;
export type IapItemDisplayBundleHoli20252 = IapItemDisplay<"bundle.holi2025.2">;
export type IapItemDisplayBundleHoliday20221 = IapItemDisplay<"bundle.holiday2022.1">;
export type IapItemDisplayBundleHoliday20222 = IapItemDisplay<"bundle.holiday2022.2">;
export type IapItemDisplayBundleHoliday20223 = IapItemDisplay<"bundle.holiday2022.3">;
export type IapItemDisplayBundleHoliday20241 = IapItemDisplay<"bundle.holiday2024.1">;
export type IapItemDisplayBundleIncenseday1 = IapItemDisplay<"bundle.incenseday.1">;
export type IapItemDisplayBundleIndiaaugust1001 = IapItemDisplay<"bundle.indiaaugust100.1">;
export type IapItemDisplayBundleIndiaboxfeature1 = IapItemDisplay<"bundle.indiaboxfeature.1">;
export type IapItemDisplayBundleIndiafestivaloflights1 = IapItemDisplay<"bundle.indiafestivaloflights.1">;
export type IapItemDisplayBundleIndiamay20241 = IapItemDisplay<"bundle.indiamay2024.1">;
export type IapItemDisplayBundleIndiaseptember1001 = IapItemDisplay<"bundle.indiaseptember100.1">;
export type IapItemDisplayBundleIndiaseptember2001 = IapItemDisplay<"bundle.indiaseptember200.1">;
export type IapItemDisplayBundleIndonesiaboxfeature1 = IapItemDisplay<"bundle.indonesiaboxfeature.1">;
export type IapItemDisplayBundleIndonesialaunch1 = IapItemDisplay<"bundle.indonesialaunch.1">;
export type IapItemDisplayBundleIndonesialaunch2 = IapItemDisplay<"bundle.indonesialaunch.2">;
export type IapItemDisplayBundleJakartaaugust1001 = IapItemDisplay<"bundle.jakartaaugust100.1">;
export type IapItemDisplayBundleKoreaseptember1001 = IapItemDisplay<"bundle.koreaseptember100.1">;
export type IapItemDisplayBundleKoreaseptember2001 = IapItemDisplay<"bundle.koreaseptember200.1">;
export type IapItemDisplayBundleKsalaunch1001 = IapItemDisplay<"bundle.ksalaunch100.1">;
export type IapItemDisplayBundleKsalaunch2001 = IapItemDisplay<"bundle.ksalaunch200.1">;
export type IapItemDisplayBundleLatbox1001 = IapItemDisplay<"bundle.latbox100.1">;
export type IapItemDisplayBundleLatbox3001 = IapItemDisplay<"bundle.latbox300.1">;
export type IapItemDisplayBundleLunarnewyear1 = IapItemDisplay<"bundle.lunarnewyear.1">;
export type IapItemDisplayBundleMaxfinale1 = IapItemDisplay<"bundle.maxfinale.1">;
export type IapItemDisplayBundleMaxfinale2 = IapItemDisplay<"bundle.maxfinale.2">;
export type IapItemDisplayBundleMaxmonday1 = IapItemDisplay<"bundle.maxmonday.1">;
export type IapItemDisplayBundleMegaLucarioRaidDay20241 = IapItemDisplay<"bundle.mega-lucario-raid-day2024.1">;
export type IapItemDisplayBundleMheracrossraidday20241 = IapItemDisplay<"bundle.mheracrossraidday2024.1">;
export type IapItemDisplayBundleMidautumn1 = IapItemDisplay<"bundle.midautumn.1">;
export type IapItemDisplayBundleMidautumn2 = IapItemDisplay<"bundle.midautumn.2">;
export type IapItemDisplayBundleMidautumn3 = IapItemDisplay<"bundle.midautumn.3">;
export type IapItemDisplayBundleNewyears20241 = IapItemDisplay<"bundle.newyears2024.1">;
export type IapItemDisplayBundlePlaysummerbox1 = IapItemDisplay<"bundle.playsummerbox.1">;
export type IapItemDisplayBundlePrimalraidday20231 = IapItemDisplay<"bundle.primalraidday2023.1">;
export type IapItemDisplayBundlePsychSpec20221 = IapItemDisplay<"bundle.psych_spec_2022.1">;
export type IapItemDisplayBundlePsychSpec20222 = IapItemDisplay<"bundle.psych_spec_2022.2">;
export type IapItemDisplayBundlePsychSpec20223 = IapItemDisplay<"bundle.psych_spec_2022.3">;
export type IapItemDisplayBundleRamadan1 = IapItemDisplay<"bundle.ramadan.1">;
export type IapItemDisplayBundleRamadan2 = IapItemDisplay<"bundle.ramadan.2">;
export type IapItemDisplayBundleRarebundle1 = IapItemDisplay<"bundle.rarebundle.1">;
export type IapItemDisplayBundleRarebundle2 = IapItemDisplay<"bundle.rarebundle.2">;
export type IapItemDisplayBundleRarebundle3 = IapItemDisplay<"bundle.rarebundle.3">;
export type IapItemDisplayBundleRarebundle4 = IapItemDisplay<"bundle.rarebundle.4">;
export type IapItemDisplayBundleRiolu20231 = IapItemDisplay<"bundle.riolu2023.1">;
export type IapItemDisplayBundleRiolu20232 = IapItemDisplay<"bundle.riolu2023.2">;
export type IapItemDisplayBundleRockruffboost1 = IapItemDisplay<"bundle.rockruffboost.1">;
export type IapItemDisplayBundleRrpstar1 = IapItemDisplay<"bundle.rrpstar.1">;
export type IapItemDisplayBundleS17seasonstart1 = IapItemDisplay<"bundle.s17seasonstart.1">;
export type IapItemDisplayBundleSeason10evergreen1 = IapItemDisplay<"bundle.season10evergreen.1">;
export type IapItemDisplayBundleSeason10evergreen2 = IapItemDisplay<"bundle.season10evergreen.2">;
export type IapItemDisplayBundleSeason10evergreen3 = IapItemDisplay<"bundle.season10evergreen.3">;
export type IapItemDisplayBundleSeason11evergreen1 = IapItemDisplay<"bundle.season11evergreen.1">;
export type IapItemDisplayBundleSeason11evergreen2 = IapItemDisplay<"bundle.season11evergreen.2">;
export type IapItemDisplayBundleSeason11evergreen3 = IapItemDisplay<"bundle.season11evergreen.3">;
export type IapItemDisplayBundleSeason12evergreen20231 = IapItemDisplay<"bundle.season12evergreen2023.1">;
export type IapItemDisplayBundleSeason12evergreen20232 = IapItemDisplay<"bundle.season12evergreen2023.2">;
export type IapItemDisplayBundleSeason12evergreen20233 = IapItemDisplay<"bundle.season12evergreen2023.3">;
export type IapItemDisplayBundleSeason13evergreen20231 = IapItemDisplay<"bundle.season13evergreen2023.1">;
export type IapItemDisplayBundleSeason13evergreen20232 = IapItemDisplay<"bundle.season13evergreen2023.2">;
export type IapItemDisplayBundleSeason13evergreen20233 = IapItemDisplay<"bundle.season13evergreen2023.3">;
export type IapItemDisplayBundleSeason14evergreen20241 = IapItemDisplay<"bundle.season14evergreen2024.1">;
export type IapItemDisplayBundleSeason14evergreen20242 = IapItemDisplay<"bundle.season14evergreen2024.2">;
export type IapItemDisplayBundleSeason14evergreen20243 = IapItemDisplay<"bundle.season14evergreen2024.3">;
export type IapItemDisplayBundleSeason15evergreen20241 = IapItemDisplay<"bundle.season15evergreen2024.1">;
export type IapItemDisplayBundleSeason15evergreen20242 = IapItemDisplay<"bundle.season15evergreen2024.2">;
export type IapItemDisplayBundleSeason15evergreen20243 = IapItemDisplay<"bundle.season15evergreen2024.3">;
export type IapItemDisplayBundleSeason16evergreen20241 = IapItemDisplay<"bundle.season16evergreen2024.1">;
export type IapItemDisplayBundleSeason16evergreen20242 = IapItemDisplay<"bundle.season16evergreen2024.2">;
export type IapItemDisplayBundleSeason16evergreen20243 = IapItemDisplay<"bundle.season16evergreen2024.3">;
export type IapItemDisplayBundleSeasonaldelights20241 = IapItemDisplay<"bundle.seasonaldelights2024.1">;
export type IapItemDisplayBundleShadowlugia1 = IapItemDisplay<"bundle.shadowlugia.1">;
export type IapItemDisplayBundleSmoresbump2025 = IapItemDisplay<"bundle.smoresbump.2025">;
export type IapItemDisplayBundleSolstice20231 = IapItemDisplay<"bundle.solstice2023.1">;
export type IapItemDisplayBundleSolstice20232 = IapItemDisplay<"bundle.solstice2023.2">;
export type IapItemDisplayBundleSolstice20233 = IapItemDisplay<"bundle.solstice2023.3">;
export type IapItemDisplayBundleSongkran20251 = IapItemDisplay<"bundle.songkran2025.1">;
export type IapItemDisplayBundleSparkbox1 = IapItemDisplay<"bundle.sparkbox.1">;
export type IapItemDisplayBundleSparkbox2 = IapItemDisplay<"bundle.sparkbox.2">;
export type IapItemDisplayBundleSparkbox3 = IapItemDisplay<"bundle.sparkbox.3">;
export type IapItemDisplayBundleSpringtakeover20231 = IapItemDisplay<"bundle.springtakeover2023.1">;
export type IapItemDisplayBundleSpringtakeover20232 = IapItemDisplay<"bundle.springtakeover2023.2">;
export type IapItemDisplayBundleSpringtakeover20233 = IapItemDisplay<"bundle.springtakeover2023.3">;
export type IapItemDisplayBundleSteelMettle20221 = IapItemDisplay<"bundle.steel_mettle2022.1">;
export type IapItemDisplayBundleSteelMettle20222 = IapItemDisplay<"bundle.steel_mettle2022.2">;
export type IapItemDisplayBundleSteelMettle20223 = IapItemDisplay<"bundle.steel_mettle2022.3">;
export type IapItemDisplayBundleTakeover20221 = IapItemDisplay<"bundle.takeover2022.1">;
export type IapItemDisplayBundleTakeover20222 = IapItemDisplay<"bundle.takeover2022.2">;
export type IapItemDisplayBundleTakeover20223 = IapItemDisplay<"bundle.takeover2022.3">;
export type IapItemDisplayBundleTgrtakeover20241 = IapItemDisplay<"bundle.tgrtakeover2024.1">;
export type IapItemDisplayBundleThailandfeatureapril20241 = IapItemDisplay<"bundle.thailandfeatureapril2024.1">;
export type IapItemDisplayBundleTmexpert1 = IapItemDisplay<"bundle.tmexpert.1">;
export type IapItemDisplayBundleUbraidday20221 = IapItemDisplay<"bundle.ubraidday2022.1">;
export type IapItemDisplayBundleUbraidday20222 = IapItemDisplay<"bundle.ubraidday2022.2">;
export type IapItemDisplayBundleUkfeature1 = IapItemDisplay<"bundle.ukfeature.1">;
export type IapItemDisplayBundleUltrabeastraid2024 = IapItemDisplay<"bundle.ultrabeastraid.2024">;
export type IapItemDisplayBundleUltraunlockraid20231 = IapItemDisplay<"bundle.ultraunlockraid2023.1">;
export type IapItemDisplayBundleUltraunlockraid20232 = IapItemDisplay<"bundle.ultraunlockraid2023.2">;
export type IapItemDisplayBundleUustorage1 = IapItemDisplay<"bundle.uustorage.1">;
export type IapItemDisplayBundleVoyagerouttoplay1 = IapItemDisplay<"bundle.voyagerouttoplay.1">;
export type IapItemDisplayBundleWelcomebox1 = IapItemDisplay<"bundle.welcomebox.1">;
export type IapItemDisplayBundleWinterevergreen1 = IapItemDisplay<"bundle.winterevergreen.1">;
export type IapItemDisplayBundleWinterevergreen2 = IapItemDisplay<"bundle.winterevergreen.2">;
export type IapItemDisplayBundleWinterevergreen3 = IapItemDisplay<"bundle.winterevergreen.3">;
export type IapItemDisplayBundleWinterholiday20231 = IapItemDisplay<"bundle.winterholiday2023.1">;
export type IapItemDisplayBundleWinterholiday20232 = IapItemDisplay<"bundle.winterholiday2023.2">;
export type IapItemDisplayBundleWinterholiday20233 = IapItemDisplay<"bundle.winterholiday2023.3">;
export type IapItemDisplayBundleXmasLarge1 = IapItemDisplay<"bundle.xmas.large.1">;
export type IapItemDisplayBundleZoruamakegood2022 = IapItemDisplay<"bundle.zoruamakegood2022">;
export type IapItemDisplayBundleZzraid1 = IapItemDisplay<"bundle.zzraid.1">;
export type IapItemDisplayDiademuertos = IapItemDisplay<"diademuertos">;
export type IapItemDisplayEvergreenticket1 = IapItemDisplay<"evergreenticket.1">;
export type IapItemDisplayEvergreenticket1Giftable = IapItemDisplay<"evergreenticket.1.giftable">;
export type IapItemDisplayGeneral1Ticket1 = IapItemDisplay<"general1.ticket.1">;
export type IapItemDisplayGeneral1Ticket1Giftable = IapItemDisplay<"general1.ticket.1.giftable">;
export type IapItemDisplayGeneral1Ticket2 = IapItemDisplay<"general1.ticket.2">;
export type IapItemDisplayGeneral1Ticket2Giftable = IapItemDisplay<"general1.ticket.2.giftable">;
export type IapItemDisplayGeneral1Ticket3 = IapItemDisplay<"general1.ticket.3">;
export type IapItemDisplayGeneral1Ticket4 = IapItemDisplay<"general1.ticket.4">;
export type IapItemDisplayGeneral1Ticket4Giftable = IapItemDisplay<"general1.ticket.4.giftable">;
export type IapItemDisplayGeneral1Ticket5 = IapItemDisplay<"general1.ticket.5">;
export type IapItemDisplayGeneral1Ticket6 = IapItemDisplay<"general1.ticket.6">;
export type IapItemDisplayGeneral2Ticket1 = IapItemDisplay<"general2.ticket.1">;
export type IapItemDisplayGeneral2Ticket1Giftable = IapItemDisplay<"general2.ticket.1.giftable">;
export type IapItemDisplayGeneral2Ticket10 = IapItemDisplay<"general2.ticket.10">;
export type IapItemDisplayGeneral2Ticket10Giftable = IapItemDisplay<"general2.ticket.10.giftable">;
export type IapItemDisplayGeneral2Ticket2 = IapItemDisplay<"general2.ticket.2">;
export type IapItemDisplayGeneral2Ticket2Giftable = IapItemDisplay<"general2.ticket.2.giftable">;
export type IapItemDisplayGeneral2Ticket3 = IapItemDisplay<"general2.ticket.3">;
export type IapItemDisplayGeneral2Ticket3Giftable = IapItemDisplay<"general2.ticket.3.giftable">;
export type IapItemDisplayGeneral2Ticket4 = IapItemDisplay<"general2.ticket.4">;
export type IapItemDisplayGeneral2Ticket4Giftable = IapItemDisplay<"general2.ticket.4.giftable">;
export type IapItemDisplayGeneral2Ticket5 = IapItemDisplay<"general2.ticket.5">;
export type IapItemDisplayGeneral2Ticket5Giftable = IapItemDisplay<"general2.ticket.5.giftable">;
export type IapItemDisplayGeneral2Ticket6 = IapItemDisplay<"general2.ticket.6">;
export type IapItemDisplayGeneral2Ticket7 = IapItemDisplay<"general2.ticket.7">;
export type IapItemDisplayGeneral2Ticket7Giftable = IapItemDisplay<"general2.ticket.7.giftable">;
export type IapItemDisplayGeneral2Ticket8 = IapItemDisplay<"general2.ticket.8">;
export type IapItemDisplayGeneral2Ticket8Giftable = IapItemDisplay<"general2.ticket.8.giftable">;
export type IapItemDisplayGeneral2Ticket9 = IapItemDisplay<"general2.ticket.9">;
export type IapItemDisplayGeneral2Ticket9Giftable = IapItemDisplay<"general2.ticket.9.giftable">;
export type IapItemDisplayGeneral4Medium1 = IapItemDisplay<"general4.medium.1">;
export type IapItemDisplayGeneral6Small1 = IapItemDisplay<"general6.small.1">;
export type IapItemDisplayGowaticketfree1 = IapItemDisplay<"gowaticketfree.1">;
export type IapItemDisplayHometransport1 = IapItemDisplay<"hometransport.1">;
export type IapItemDisplayIncenseordinary1 = IapItemDisplay<"incenseordinary.1">;
export type IapItemDisplayIncenseordinary8 = IapItemDisplay<"incenseordinary.8">;
export type IapItemDisplayIncubatorbasic1 = IapItemDisplay<"incubatorbasic.1">;
export type IapItemDisplayIncubatorsuper1 = IapItemDisplay<"incubatorsuper.1">;
export type IapItemDisplayItemleadermap = IapItemDisplay<"itemleadermap">;
export type IapItemDisplayLuckyegg1 = IapItemDisplay<"luckyegg.1">;
export type IapItemDisplayLuckyegg8 = IapItemDisplay<"luckyegg.8">;
export type IapItemDisplayMaxBoost1 = IapItemDisplay<"max_boost.1">;
export type IapItemDisplayMaxBoost3 = IapItemDisplay<"max_boost.3">;
export type IapItemDisplayMaxpotion10 = IapItemDisplay<"maxpotion.10">;
export type IapItemDisplayMaxpotion5 = IapItemDisplay<"maxpotion.5">;
export type IapItemDisplayMaxrevive3 = IapItemDisplay<"maxrevive.3">;
export type IapItemDisplayMaxrevive6 = IapItemDisplay<"maxrevive.6">;
export type IapItemDisplayMpReplenish1 = IapItemDisplay<"mp_replenish.1">;
export type IapItemDisplayMpReplenish3 = IapItemDisplay<"mp_replenish.3">;
export type IapItemDisplayMpReplenishRrp1 = IapItemDisplay<"mp_replenish_rrp.1">;
export type IapItemDisplayMpReplenishRrp3 = IapItemDisplay<"mp_replenish_rrp.3">;
export type IapItemDisplayPaidraidticket1 = IapItemDisplay<"paidraidticket.1">;
export type IapItemDisplayPaidraidticket3 = IapItemDisplay<"paidraidticket.3">;
export type IapItemDisplayPgoreleaseApril22026DeluxeEventPassTrackRedirect = IapItemDisplay<"pgorelease.april2_2026_deluxe_event_pass_track_redirect">;
export type IapItemDisplayPgoreleaseBundle1 = IapItemDisplay<"pgorelease.bundle.1">;
export type IapItemDisplayPgoreleaseBundle2 = IapItemDisplay<"pgorelease.bundle.2">;
export type IapItemDisplayPgoreleaseBundleRtsraid = IapItemDisplay<"pgorelease.bundle.RTSRaid">;
export type IapItemDisplayPgoreleaseBundleBlanchebox1 = IapItemDisplay<"pgorelease.bundle.blanchebox.1">;
export type IapItemDisplayPgoreleaseBundleCitysafaribarcelona1 = IapItemDisplay<"pgorelease.bundle.citysafaribarcelona1">;
export type IapItemDisplayPgoreleaseBundleCitysafaribarcelona2 = IapItemDisplay<"pgorelease.bundle.citysafaribarcelona2">;
export type IapItemDisplayPgoreleaseBundleCitysafarimexico1 = IapItemDisplay<"pgorelease.bundle.citysafarimexico1">;
export type IapItemDisplayPgoreleaseBundleCitysafarimexico2 = IapItemDisplay<"pgorelease.bundle.citysafarimexico2">;
export type IapItemDisplayPgoreleaseBundleEliteraidbox1 = IapItemDisplay<"pgorelease.bundle.eliteraidbox.1">;
export type IapItemDisplayPgoreleaseBundleEliteraidmay2023 = IapItemDisplay<"pgorelease.bundle.eliteraidmay2023">;
export type IapItemDisplayPgoreleaseBundleFlavoredlures1 = IapItemDisplay<"pgorelease.bundle.flavoredlures.1">;
export type IapItemDisplayPgoreleaseBundleFlavoredlures2 = IapItemDisplay<"pgorelease.bundle.flavoredlures.2">;
export type IapItemDisplayPgoreleaseBundleFlavoredlures3 = IapItemDisplay<"pgorelease.bundle.flavoredlures.3">;
export type IapItemDisplayPgoreleaseBundleFlavoredlures4 = IapItemDisplay<"pgorelease.bundle.flavoredlures.4">;
export type IapItemDisplayPgoreleaseBundleFlavoredlures5 = IapItemDisplay<"pgorelease.bundle.flavoredlures.5">;
export type IapItemDisplayPgoreleaseBundleFlavoredlures6 = IapItemDisplay<"pgorelease.bundle.flavoredlures.6">;
export type IapItemDisplayPgoreleaseBundleFlavoredlures7 = IapItemDisplay<"pgorelease.bundle.flavoredlures.7">;
export type IapItemDisplayPgoreleaseBundleFlavoredlures8 = IapItemDisplay<"pgorelease.bundle.flavoredlures.8">;
export type IapItemDisplayPgoreleaseBundleFoc2023box1 = IapItemDisplay<"pgorelease.bundle.foc2023box.1">;
export type IapItemDisplayPgoreleaseBundleGeneralThirdpartyLarge2 = IapItemDisplay<"pgorelease.bundle.general.thirdparty.large.2">;
export type IapItemDisplayPgoreleaseBundleGeneralThirdpartyLarge4 = IapItemDisplay<"pgorelease.bundle.general.thirdparty.large.4">;
export type IapItemDisplayPgoreleaseBundleGeneralThirdpartyMedium1 = IapItemDisplay<"pgorelease.bundle.general.thirdparty.medium.1">;
export type IapItemDisplayPgoreleaseBundleGeneralThirdpartySmall1 = IapItemDisplay<"pgorelease.bundle.general.thirdparty.small.1">;
export type IapItemDisplayPgoreleaseBundleGeneralThirdpartySmall12 = IapItemDisplay<"pgorelease.bundle.general.thirdparty.small.1.2">;
export type IapItemDisplayPgoreleaseBundleGeneralThirdpartySmall2 = IapItemDisplay<"pgorelease.bundle.general.thirdparty.small.2">;
export type IapItemDisplayPgoreleaseBundleGeneral1Tiny4 = IapItemDisplay<"pgorelease.bundle.general1.tiny.4">;
export type IapItemDisplayPgoreleaseBundleGeneral11Small1331 = IapItemDisplay<"pgorelease.bundle.general11.small.1331">;
export type IapItemDisplayPgoreleaseBundleGotour20230 = IapItemDisplay<"pgorelease.bundle.gotour2023.0">;
export type IapItemDisplayPgoreleaseBundleGotour20231 = IapItemDisplay<"pgorelease.bundle.gotour2023.1">;
export type IapItemDisplayPgoreleaseBundleGotour20232 = IapItemDisplay<"pgorelease.bundle.gotour2023.2">;
export type IapItemDisplayPgoreleaseBundleGotour20233 = IapItemDisplay<"pgorelease.bundle.gotour2023.3">;
export type IapItemDisplayPgoreleaseBundleGotour20234 = IapItemDisplay<"pgorelease.bundle.gotour2023.4">;
export type IapItemDisplayPgoreleaseBundleGotour20235 = IapItemDisplay<"pgorelease.bundle.gotour2023.5">;
export type IapItemDisplayPgoreleaseBundleGotour20236 = IapItemDisplay<"pgorelease.bundle.gotour2023.6">;
export type IapItemDisplayPgoreleaseBundleGp20221 = IapItemDisplay<"pgorelease.bundle.gp2022.1">;
export type IapItemDisplayPgoreleaseBundleIndiagp20231 = IapItemDisplay<"pgorelease.bundle.indiagp2023.1">;
export type IapItemDisplayPgoreleaseBundleLure1 = IapItemDisplay<"pgorelease.bundle.lure.1">;
export type IapItemDisplayPgoreleaseBundlePokemonday1 = IapItemDisplay<"pgorelease.bundle.pokemonday.1">;
export type IapItemDisplayPgoreleaseBundleRaiddaymay20231 = IapItemDisplay<"pgorelease.bundle.raiddaymay2023.1">;
export type IapItemDisplayPgoreleaseBundleRaiddaymay20232 = IapItemDisplay<"pgorelease.bundle.raiddaymay2023.2">;
export type IapItemDisplayPgoreleaseBundleRaiddaymay20233 = IapItemDisplay<"pgorelease.bundle.raiddaymay2023.3">;
export type IapItemDisplayPgoreleaseBundleRaiddaymay20234 = IapItemDisplay<"pgorelease.bundle.raiddaymay2023.4">;
export type IapItemDisplayPgoreleaseBundleRaiddaynov20231 = IapItemDisplay<"pgorelease.bundle.raiddaynov2023.1">;
export type IapItemDisplayPgoreleaseBundleRaidhourbox1 = IapItemDisplay<"pgorelease.bundle.raidhourbox.1">;
export type IapItemDisplayPgoreleaseBundleRaidhourbox2 = IapItemDisplay<"pgorelease.bundle.raidhourbox.2">;
export type IapItemDisplayPgoreleaseBundleRamadan2023box1 = IapItemDisplay<"pgorelease.bundle.ramadan2023box.1">;
export type IapItemDisplayPgoreleaseBundleSeason10evergreen1 = IapItemDisplay<"pgorelease.bundle.season10evergreen.1">;
export type IapItemDisplayPgoreleaseBundleSeason10evergreen2 = IapItemDisplay<"pgorelease.bundle.season10evergreen.2">;
export type IapItemDisplayPgoreleaseBundleSeason10evergreen3 = IapItemDisplay<"pgorelease.bundle.season10evergreen.3">;
export type IapItemDisplayPgoreleaseBundleSeason10launch1 = IapItemDisplay<"pgorelease.bundle.season10launch.1">;
export type IapItemDisplayPgoreleaseBundleSustainabilitybonusmay2023 = IapItemDisplay<"pgorelease.bundle.sustainabilitybonusmay2023">;
export type IapItemDisplayPgoreleaseBundleSustainabilitymay2023 = IapItemDisplay<"pgorelease.bundle.sustainabilitymay2023">;
export type IapItemDisplayPgoreleaseBundleTemplate1 = IapItemDisplay<"pgorelease.bundle.template1">;
export type IapItemDisplayPgoreleaseBundleTemplate2 = IapItemDisplay<"pgorelease.bundle.template2">;
export type IapItemDisplayPgoreleaseBundleTemplate3 = IapItemDisplay<"pgorelease.bundle.template3">;
export type IapItemDisplayPgoreleaseBundleThailandspec20231 = IapItemDisplay<"pgorelease.bundle.thailandspec2023.1">;
export type IapItemDisplayPgoreleaseBundleWalkeratlantic20221 = IapItemDisplay<"pgorelease.bundle.walkeratlantic2022.1">;
export type IapItemDisplayPgoreleaseBundleWalkeratlantic20222 = IapItemDisplay<"pgorelease.bundle.walkeratlantic2022.2">;
export type IapItemDisplayPgoreleaseCitysafariticket01 = IapItemDisplay<"pgorelease.citysafariticket0.1">;
export type IapItemDisplayPgoreleaseCitysafariticket11 = IapItemDisplay<"pgorelease.citysafariticket1.1">;
export type IapItemDisplayPgoreleaseCitysafariticket21 = IapItemDisplay<"pgorelease.citysafariticket2.1">;
export type IapItemDisplayPgoreleaseEvergreenticket1 = IapItemDisplay<"pgorelease.evergreenticket.1">;
export type IapItemDisplayPgoreleaseEvergreenticket1Giftable = IapItemDisplay<"pgorelease.evergreenticket.1.giftable">;
export type IapItemDisplayPgoreleaseGeneral1Ticket1 = IapItemDisplay<"pgorelease.general1.ticket.1">;
export type IapItemDisplayPgoreleaseGeneral1Ticket1Giftable = IapItemDisplay<"pgorelease.general1.ticket.1.giftable">;
export type IapItemDisplayPgoreleaseGeneral1Ticket2 = IapItemDisplay<"pgorelease.general1.ticket.2">;
export type IapItemDisplayPgoreleaseGeneral1Ticket2Giftable = IapItemDisplay<"pgorelease.general1.ticket.2.giftable">;
export type IapItemDisplayPgoreleaseGeneral1Ticket4 = IapItemDisplay<"pgorelease.general1.ticket.4">;
export type IapItemDisplayPgoreleaseGeneral1Ticket4Giftable = IapItemDisplay<"pgorelease.general1.ticket.4.giftable">;
export type IapItemDisplayPgoreleaseGeneral2Ticket1 = IapItemDisplay<"pgorelease.general2.ticket.1">;
export type IapItemDisplayPgoreleaseGeneral2Ticket1Giftable = IapItemDisplay<"pgorelease.general2.ticket.1.giftable">;
export type IapItemDisplayPgoreleaseGeneral2Ticket10 = IapItemDisplay<"pgorelease.general2.ticket.10">;
export type IapItemDisplayPgoreleaseGeneral2Ticket10Giftable = IapItemDisplay<"pgorelease.general2.ticket.10.giftable">;
export type IapItemDisplayPgoreleaseGeneral2Ticket2 = IapItemDisplay<"pgorelease.general2.ticket.2">;
export type IapItemDisplayPgoreleaseGeneral2Ticket2Giftable = IapItemDisplay<"pgorelease.general2.ticket.2.giftable">;
export type IapItemDisplayPgoreleaseGeneral2Ticket3 = IapItemDisplay<"pgorelease.general2.ticket.3">;
export type IapItemDisplayPgoreleaseGeneral2Ticket3Giftable = IapItemDisplay<"pgorelease.general2.ticket.3.giftable">;
export type IapItemDisplayPgoreleaseGeneral2Ticket4 = IapItemDisplay<"pgorelease.general2.ticket.4">;
export type IapItemDisplayPgoreleaseGeneral2Ticket4Giftable = IapItemDisplay<"pgorelease.general2.ticket.4.giftable">;
export type IapItemDisplayPgoreleaseGeneral2Ticket5 = IapItemDisplay<"pgorelease.general2.ticket.5">;
export type IapItemDisplayPgoreleaseGeneral2Ticket5Giftable = IapItemDisplay<"pgorelease.general2.ticket.5.giftable">;
export type IapItemDisplayPgoreleaseGeneral2Ticket7 = IapItemDisplay<"pgorelease.general2.ticket.7">;
export type IapItemDisplayPgoreleaseGeneral2Ticket7Giftable = IapItemDisplay<"pgorelease.general2.ticket.7.giftable">;
export type IapItemDisplayPgoreleaseGeneral2Ticket8 = IapItemDisplay<"pgorelease.general2.ticket.8">;
export type IapItemDisplayPgoreleaseGeneral2Ticket8Giftable = IapItemDisplay<"pgorelease.general2.ticket.8.giftable">;
export type IapItemDisplayPgoreleaseGeneral2Ticket9 = IapItemDisplay<"pgorelease.general2.ticket.9">;
export type IapItemDisplayPgoreleaseGeneral2Ticket9Giftable = IapItemDisplay<"pgorelease.general2.ticket.9.giftable">;
export type IapItemDisplayPgoreleaseMonth2DeluxeEventPassTrackUnlock = IapItemDisplay<"pgorelease.month2_deluxe_event_pass_track_unlock">;
export type IapItemDisplayPgoreleaseMonth2DeluxeEventPassTrackUnlockPlusPoints = IapItemDisplay<"pgorelease.month2_deluxe_event_pass_track_unlock_plus_points">;
export type IapItemDisplayPgoreleasePokecoin15950 = IapItemDisplay<"pgorelease.pokecoin.15950">;
export type IapItemDisplayPgoreleasePokecoin21375 = IapItemDisplay<"pgorelease.pokecoin.21375">;
export type IapItemDisplayPgoreleasePokecoin2750 = IapItemDisplay<"pgorelease.pokecoin.2750">;
export type IapItemDisplayPgoreleasePokecoin5720 = IapItemDisplay<"pgorelease.pokecoin.5720">;
export type IapItemDisplayPoffin = IapItemDisplay<"poffin">;
export type IapItemDisplayPokeball100 = IapItemDisplay<"pokeball.100">;
export type IapItemDisplayPokeball20 = IapItemDisplay<"pokeball.20">;
export type IapItemDisplayPokeball200 = IapItemDisplay<"pokeball.200">;
export type IapItemDisplayPostcardstorageupgrade1 = IapItemDisplay<"postcardstorageupgrade.1">;
export type IapItemDisplayRemoteraidticket1 = IapItemDisplay<"remoteraidticket.1">;
export type IapItemDisplayRemoteraidticket3 = IapItemDisplay<"remoteraidticket.3">;
export type IapItemDisplayStarpiece1 = IapItemDisplay<"starpiece.1">;
export type IapItemDisplayStarpiece8 = IapItemDisplay<"starpiece.8">;
export type IapItemDisplayTroydisk1 = IapItemDisplay<"troydisk.1">;
export type IapItemDisplayTroydisk8 = IapItemDisplay<"troydisk.8">;
export type IapItemDisplayWebCommunityAmbassadorBonusBundle2025 = IapItemDisplay<"web-community-ambassador-bonus-bundle-2025">;
export type IapItemDisplayWebGoFestHatchBox2023 = IapItemDisplay<"web-go-fest-hatch-box-2023">;
export type IapItemDisplayWebGoFestRaidBox2023 = IapItemDisplay<"web-go-fest-raid-box-2023">;
export type IapItemDisplayWebRaidBox071323 = IapItemDisplay<"web-raid-box-071323">;
export type IapItemDisplayWebSeasonalDelights2024Box = IapItemDisplay<"web-seasonal-delights-2024-box">;
export type IapItemDisplayWebVoyagerBox071323 = IapItemDisplay<"web-voyager-box-071323">;

export type IapItemDisplayMasterfileEntry =
	| IapItemDisplayApril12026DeluxeEventPassTrackUnlock
	| IapItemDisplayApril12026DeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplayApril22026DeluxeEventPassTrackUnlock
	| IapItemDisplayApril22026DeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplayApril32026DeluxeEventPassTrackUnlock
	| IapItemDisplayApril32026DeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplayBundleEc200Rpp1
	| IapItemDisplayBundleEc600Rpp3
	| IapItemDisplayEventPassApril1SeasonStoreRedirect
	| IapItemDisplayEventPassApril3EventStoreRedirect
	| IapItemDisplayEventPassGofest2025FinaleStoreRedirect
	| IapItemDisplayEventPassGofest2025GlobalStoreRedirect
	| IapItemDisplayEventPassGotour2025GlobalStoreRedirect
	| IapItemDisplayEventPassGowild2025GlobalStoreRedirect
	| IapItemDisplayEventPassHalloween2025SeasonStoreRedirect
	| IapItemDisplayEventPassMarch1SeasonStoreRedirect
	| IapItemDisplayEventPassMarch2SeasonStoreRedirect
	| IapItemDisplayEventPassMonth1SeasonStoreRedirect
	| IapItemDisplayEventPassMonth2SeasonStoreRedirect
	| IapItemDisplayEventPassMonth3SeasonStoreRedirect
	| IapItemDisplayEventPassWinterholidays2025SeasonStoreRedirect
	| IapItemDisplayFlairFreeBundle0
	| IapItemDisplayGofest2025FinaleDeluxeEventPassTrackUnlock
	| IapItemDisplayGofest2025FinaleDeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplayGofest2025DeluxeEventPassTrackUnlock
	| IapItemDisplayGofest2025DeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplayGotour2025DeluxeEventPassTrackUnlock
	| IapItemDisplayGotour2025DeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplayGowild2025DeluxeEventPassTrackUnlock
	| IapItemDisplayGowild2025DeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplayGoSafariBallIap10
	| IapItemDisplayGoSafariBallIap25
	| IapItemDisplayGoSafariBallIap50
	| IapItemDisplayHalloween2025DeluxeEventPassTrackUnlock
	| IapItemDisplayHalloween2025DeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplayItemEnhancedCurrency200
	| IapItemDisplayItemEnhancedCurrency600
	| IapItemDisplayMarch12026DeluxeEventPassTrackUnlock
	| IapItemDisplayMarch12026DeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplayMarch22026DeluxeEventPassTrackUnlock
	| IapItemDisplayMarch22026DeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplayMonth1DeluxeEventPassTrackUnlock
	| IapItemDisplayMonth1DeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplayMonth2DeluxeEventPassTrackUnlock
	| IapItemDisplayMonth2DeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplayMonth3DeluxeEventPassTrackUnlock
	| IapItemDisplayMonth3DeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplaySticker2023collab13
	| IapItemDisplaySticker2023collab15
	| IapItemDisplaySticker2023collab23
	| IapItemDisplaySticker2023collab25
	| IapItemDisplaySticker2023collab33
	| IapItemDisplaySticker2023collab35
	| IapItemDisplaySticker2023collab43
	| IapItemDisplaySticker2023collab45
	| IapItemDisplaySticker8anniv13
	| IapItemDisplaySticker8anniv15
	| IapItemDisplaySticker8anniv23
	| IapItemDisplaySticker8anniv25
	| IapItemDisplaySticker8anniv33
	| IapItemDisplaySticker8anniv35
	| IapItemDisplaySticker8anniv43
	| IapItemDisplaySticker8anniv45
	| IapItemDisplaySticker9anniv13
	| IapItemDisplaySticker9anniv15
	| IapItemDisplaySticker9anniv23
	| IapItemDisplaySticker9anniv25
	| IapItemDisplaySticker9anniv33
	| IapItemDisplaySticker9anniv35
	| IapItemDisplayStickerAprilfool202313
	| IapItemDisplayStickerAprilfool202315
	| IapItemDisplayStickerAprilfool202323
	| IapItemDisplayStickerAprilfool202325
	| IapItemDisplayStickerAudino3
	| IapItemDisplayStickerAudino5
	| IapItemDisplayStickerBellsproutcd13
	| IapItemDisplayStickerBellsproutcd15
	| IapItemDisplayStickerBellsproutcd23
	| IapItemDisplayStickerBellsproutcd25
	| IapItemDisplayStickerBellsproutcd33
	| IapItemDisplayStickerBellsproutcd35
	| IapItemDisplayStickerBellsproutcd43
	| IapItemDisplayStickerBellsproutcd45
	| IapItemDisplayStickerBidoofday13
	| IapItemDisplayStickerBidoofday15
	| IapItemDisplayStickerBidoofday23
	| IapItemDisplayStickerBidoofday25
	| IapItemDisplayStickerBidoofday33
	| IapItemDisplayStickerBidoofday35
	| IapItemDisplayStickerBounsweetcd202413
	| IapItemDisplayStickerBounsweetcd202415
	| IapItemDisplayStickerBounsweetcd202423
	| IapItemDisplayStickerBounsweetcd202425
	| IapItemDisplayStickerBounsweetcd202433
	| IapItemDisplayStickerBounsweetcd202435
	| IapItemDisplayStickerBounsweetcd202443
	| IapItemDisplayStickerBounsweetcd202445
	| IapItemDisplayStickerChanseycd13
	| IapItemDisplayStickerChanseycd15
	| IapItemDisplayStickerChanseycd23
	| IapItemDisplayStickerChanseycd25
	| IapItemDisplayStickerChanseycd33
	| IapItemDisplayStickerChanseycd35
	| IapItemDisplayStickerChanseycd43
	| IapItemDisplayStickerChanseycd45
	| IapItemDisplayStickerDiamondpearlchimchar3
	| IapItemDisplayStickerDiamondpearlchimchar5
	| IapItemDisplayStickerDiamondpearldialga3
	| IapItemDisplayStickerDiamondpearldialga5
	| IapItemDisplayStickerDiamondpearllucario3
	| IapItemDisplayStickerDiamondpearllucario5
	| IapItemDisplayStickerDiamondpearlpalkia3
	| IapItemDisplayStickerDiamondpearlpalkia5
	| IapItemDisplayStickerDiamondpearlpiplup3
	| IapItemDisplayStickerDiamondpearlpiplup5
	| IapItemDisplayStickerDiamondpearlturtwig3
	| IapItemDisplayStickerDiamondpearlturtwig5
	| IapItemDisplayStickerDitto13
	| IapItemDisplayStickerDitto15
	| IapItemDisplayStickerDitto23
	| IapItemDisplayStickerDitto25
	| IapItemDisplayStickerDitto33
	| IapItemDisplayStickerDitto35
	| IapItemDisplayStickerDitto43
	| IapItemDisplayStickerDitto45
	| IapItemDisplayStickerDitto53
	| IapItemDisplayStickerDitto55
	| IapItemDisplayStickerDitto63
	| IapItemDisplayStickerDitto65
	| IapItemDisplayStickerEeveefriends13
	| IapItemDisplayStickerEeveefriends15
	| IapItemDisplayStickerEeveefriends23
	| IapItemDisplayStickerEeveefriends25
	| IapItemDisplayStickerEeveefriends33
	| IapItemDisplayStickerEeveefriends35
	| IapItemDisplayStickerEeveefriends43
	| IapItemDisplayStickerEeveefriends45
	| IapItemDisplayStickerEeveefriends53
	| IapItemDisplayStickerEeveefriends55
	| IapItemDisplayStickerEeveefriends63
	| IapItemDisplayStickerEeveefriends65
	| IapItemDisplayStickerEeveefriends73
	| IapItemDisplayStickerEeveefriends75
	| IapItemDisplayStickerEeveefriends83
	| IapItemDisplayStickerEeveefriends85
	| IapItemDisplayStickerEeveefriends93
	| IapItemDisplayStickerEeveefriends95
	| IapItemDisplayStickerEternatus3
	| IapItemDisplayStickerEternatus5
	| IapItemDisplayStickerFall202313
	| IapItemDisplayStickerFall202315
	| IapItemDisplayStickerFall202323
	| IapItemDisplayStickerFall202325
	| IapItemDisplayStickerFall202333
	| IapItemDisplayStickerFall202335
	| IapItemDisplayStickerFall202343
	| IapItemDisplayStickerFall202345
	| IapItemDisplayStickerFall202353
	| IapItemDisplayStickerFall202355
	| IapItemDisplayStickerFall202363
	| IapItemDisplayStickerFall202365
	| IapItemDisplayStickerFall202413
	| IapItemDisplayStickerFall202415
	| IapItemDisplayStickerFall202423
	| IapItemDisplayStickerFall202425
	| IapItemDisplayStickerFall202433
	| IapItemDisplayStickerFall202435
	| IapItemDisplayStickerFall202443
	| IapItemDisplayStickerFall202445
	| IapItemDisplayStickerFall202453
	| IapItemDisplayStickerFall202455
	| IapItemDisplayStickerFall202463
	| IapItemDisplayStickerFall202465
	| IapItemDisplayStickerFall202513
	| IapItemDisplayStickerFall202515
	| IapItemDisplayStickerFall202523
	| IapItemDisplayStickerFall202525
	| IapItemDisplayStickerFall202533
	| IapItemDisplayStickerFall202535
	| IapItemDisplayStickerFall202543
	| IapItemDisplayStickerFall202545
	| IapItemDisplayStickerFallSawsbuck3
	| IapItemDisplayStickerFallSawsbuck5
	| IapItemDisplayStickerFallShroomish3
	| IapItemDisplayStickerFallShroomish5
	| IapItemDisplayStickerFallSkwovet3
	| IapItemDisplayStickerFallSkwovet5
	| IapItemDisplayStickerFallTeddiursa3
	| IapItemDisplayStickerFallTeddiursa5
	| IapItemDisplayStickerFallTrevenant3
	| IapItemDisplayStickerFallTrevenant5
	| IapItemDisplayStickerFallVulpix3
	| IapItemDisplayStickerFallVulpix5
	| IapItemDisplayStickerFestivaloflightMorelull3
	| IapItemDisplayStickerFestivaloflightMorelull5
	| IapItemDisplayStickerFestivaloflightShiinotic3
	| IapItemDisplayStickerFestivaloflightShiinotic5
	| IapItemDisplayStickerFestivalofthelights21V13
	| IapItemDisplayStickerFestivalofthelights21V15
	| IapItemDisplayStickerFestivalofthelights21V23
	| IapItemDisplayStickerFestivalofthelights21V25
	| IapItemDisplayStickerFestivalofthelights21V33
	| IapItemDisplayStickerFestivalofthelights21V35
	| IapItemDisplayStickerFestivalofthelights21V43
	| IapItemDisplayStickerFestivalofthelights21V45
	| IapItemDisplayStickerFlabebe13
	| IapItemDisplayStickerFlabebe15
	| IapItemDisplayStickerFlabebe23
	| IapItemDisplayStickerFlabebe25
	| IapItemDisplayStickerFunawari223123
	| IapItemDisplayStickerFunawari223125
	| IapItemDisplayStickerFunwari0206083
	| IapItemDisplayStickerFunwari0206085
	| IapItemDisplayStickerFunwari203
	| IapItemDisplayStickerFunwari205
	| IapItemDisplayStickerFurfrouheart13
	| IapItemDisplayStickerFurfrouheart15
	| IapItemDisplayStickerFurfrouheart23
	| IapItemDisplayStickerFurfrouheart25
	| IapItemDisplayStickerGiftthankyou3
	| IapItemDisplayStickerGiftthankyou5
	| IapItemDisplayStickerGimmighoul13
	| IapItemDisplayStickerGimmighoul15
	| IapItemDisplayStickerGimmighoul23
	| IapItemDisplayStickerGimmighoul25
	| IapItemDisplayStickerGimmighoul33
	| IapItemDisplayStickerGimmighoul35
	| IapItemDisplayStickerGimmighoul43
	| IapItemDisplayStickerGimmighoul45
	| IapItemDisplayStickerGimmighoul53
	| IapItemDisplayStickerGimmighoul55
	| IapItemDisplayStickerGoomycd13
	| IapItemDisplayStickerGoomycd15
	| IapItemDisplayStickerGoomycd23
	| IapItemDisplayStickerGoomycd25
	| IapItemDisplayStickerGoomycd33
	| IapItemDisplayStickerGoomycd35
	| IapItemDisplayStickerGoomycd43
	| IapItemDisplayStickerGoomycd45
	| IapItemDisplayStickerGotour2025Badge3
	| IapItemDisplayStickerGotour2025Badge5
	| IapItemDisplayStickerGotour2025Kyuremblack3
	| IapItemDisplayStickerGotour2025Kyuremblack5
	| IapItemDisplayStickerGotour2025Kyuremwhite3
	| IapItemDisplayStickerGotour2025Kyuremwhite5
	| IapItemDisplayStickerGotour2025Reshiram3
	| IapItemDisplayStickerGotour2025Reshiram5
	| IapItemDisplayStickerGotour2025Rz3
	| IapItemDisplayStickerGotour2025Rz5
	| IapItemDisplayStickerGotour2025Zekrom3
	| IapItemDisplayStickerGotour2025Zekrom5
	| IapItemDisplayStickerGowa2025013
	| IapItemDisplayStickerGowa2025015
	| IapItemDisplayStickerGowa2025023
	| IapItemDisplayStickerGowa2025025
	| IapItemDisplayStickerGowa2025033
	| IapItemDisplayStickerGowa2025035
	| IapItemDisplayStickerGowa2025043
	| IapItemDisplayStickerGowa2025045
	| IapItemDisplayStickerGowa2025053
	| IapItemDisplayStickerGowa2025055
	| IapItemDisplayStickerHalloween2025Noibat3
	| IapItemDisplayStickerHalloween2025Noibat5
	| IapItemDisplayStickerHalloween2025Teddiursa3
	| IapItemDisplayStickerHalloween2025Teddiursa5
	| IapItemDisplayStickerHalloween21Fuwaraid3
	| IapItemDisplayStickerHalloween21Fuwaraid5
	| IapItemDisplayStickerHalloween21Ghostpika3
	| IapItemDisplayStickerHalloween21Ghostpika5
	| IapItemDisplayStickerHalloween21Pikachu3
	| IapItemDisplayStickerHalloween21Pikachu5
	| IapItemDisplayStickerHalloween21Pochama3
	| IapItemDisplayStickerHalloween21Pochama5
	| IapItemDisplayStickerHalloween24Froakie3
	| IapItemDisplayStickerHalloween24Froakie5
	| IapItemDisplayStickerHalloween24Rowlet3
	| IapItemDisplayStickerHalloween24Rowlet5
	| IapItemDisplayStickerHalloweenBulb3
	| IapItemDisplayStickerHalloweenBulb5
	| IapItemDisplayStickerHalloweenCharm3
	| IapItemDisplayStickerHalloweenCharm5
	| IapItemDisplayStickerHalloweenGengarmd3
	| IapItemDisplayStickerHalloweenGengarmd5
	| IapItemDisplayStickerHalloweenPika3
	| IapItemDisplayStickerHalloweenPika5
	| IapItemDisplayStickerHalloweenSqu3
	| IapItemDisplayStickerHalloweenSqu5
	| IapItemDisplayStickerHaruCherrim3
	| IapItemDisplayStickerHaruCherrim5
	| IapItemDisplayStickerHaruDredearpika3
	| IapItemDisplayStickerHaruDredearpika5
	| IapItemDisplayStickerHaruKireihana3
	| IapItemDisplayStickerHaruKireihana5
	| IapItemDisplayStickerHaruLalantes3
	| IapItemDisplayStickerHaruLalantes5
	| IapItemDisplayStickerHaruMebukishikijik3
	| IapItemDisplayStickerHaruMebukishikijik5
	| IapItemDisplayStickerHaruMitsuhoney3
	| IapItemDisplayStickerHaruMitsuhoney5
	| IapItemDisplayStickerHisuidiscoArcanine3
	| IapItemDisplayStickerHisuidiscoArcanine5
	| IapItemDisplayStickerHisuidiscoBraviary3
	| IapItemDisplayStickerHisuidiscoBraviary5
	| IapItemDisplayStickerHisuidiscoGrowlithe3
	| IapItemDisplayStickerHisuidiscoGrowlithe5
	| IapItemDisplayStickerHolidayevent2113
	| IapItemDisplayStickerHolidayevent2115
	| IapItemDisplayStickerHolidayevent2123
	| IapItemDisplayStickerHolidayevent2125
	| IapItemDisplayStickerHolidayevent2133
	| IapItemDisplayStickerHolidayevent2135
	| IapItemDisplayStickerHolidayevent2143
	| IapItemDisplayStickerHolidayevent2145
	| IapItemDisplayStickerHolidayevent22Cubchoo3
	| IapItemDisplayStickerHolidayevent22Cubchoo5
	| IapItemDisplayStickerHolidayevent22Scatterbug3
	| IapItemDisplayStickerHolidayevent22Scatterbug5
	| IapItemDisplayStickerHolidayevent22Snowpika3
	| IapItemDisplayStickerHolidayevent22Snowpika5
	| IapItemDisplayStickerHolidayevent22Vulpix3
	| IapItemDisplayStickerHolidayevent22Vulpix5
	| IapItemDisplayStickerHolidayevent23Cetoddle3
	| IapItemDisplayStickerHolidayevent23Cetoddle5
	| IapItemDisplayStickerHolidayevent23Cryogonal3
	| IapItemDisplayStickerHolidayevent23Cryogonal5
	| IapItemDisplayStickerHolidayevent23Psyduck3
	| IapItemDisplayStickerHolidayevent23Psyduck5
	| IapItemDisplayStickerHolidayevent23Seel3
	| IapItemDisplayStickerHolidayevent23Seel5
	| IapItemDisplayStickerHolidayevent23Vanillish3
	| IapItemDisplayStickerHolidayevent23Vanillish5
	| IapItemDisplayStickerHoppip13
	| IapItemDisplayStickerHoppip15
	| IapItemDisplayStickerHoppip23
	| IapItemDisplayStickerHoppip25
	| IapItemDisplayStickerHoppip33
	| IapItemDisplayStickerHoppip35
	| IapItemDisplayStickerHoppip43
	| IapItemDisplayStickerHoppip45
	| IapItemDisplayStickerLentillaunchCamera3
	| IapItemDisplayStickerLentillaunchCamera5
	| IapItemDisplayStickerLittencd13
	| IapItemDisplayStickerLittencd15
	| IapItemDisplayStickerLittencd23
	| IapItemDisplayStickerLittencd25
	| IapItemDisplayStickerLittencd33
	| IapItemDisplayStickerLittencd35
	| IapItemDisplayStickerLittencd43
	| IapItemDisplayStickerLittencd45
	| IapItemDisplayStickerLuvdisc3
	| IapItemDisplayStickerLuvdisc5
	| IapItemDisplayStickerMankey13
	| IapItemDisplayStickerMankey15
	| IapItemDisplayStickerMankey23
	| IapItemDisplayStickerMankey25
	| IapItemDisplayStickerMankey33
	| IapItemDisplayStickerMankey35
	| IapItemDisplayStickerMankey43
	| IapItemDisplayStickerMankey45
	| IapItemDisplayStickerNagano063123
	| IapItemDisplayStickerNagano063125
	| IapItemDisplayStickerNagano113
	| IapItemDisplayStickerNagano115
	| IapItemDisplayStickerNagano153123
	| IapItemDisplayStickerNagano153125
	| IapItemDisplayStickerNaganoBath3
	| IapItemDisplayStickerNaganoBath5
	| IapItemDisplayStickerNaganoMarill3
	| IapItemDisplayStickerNaganoMarill5
	| IapItemDisplayStickerNaganoYadon3
	| IapItemDisplayStickerNaganoYadon5
	| IapItemDisplayStickerNewpokemon2153
	| IapItemDisplayStickerNewpokemon2155
	| IapItemDisplayStickerNewyears2213
	| IapItemDisplayStickerNewyears2215
	| IapItemDisplayStickerNewyears2223
	| IapItemDisplayStickerNewyears2225
	| IapItemDisplayStickerNewyears2233
	| IapItemDisplayStickerNewyears2235
	| IapItemDisplayStickerNewyears2243
	| IapItemDisplayStickerNewyears2245
	| IapItemDisplayStickerNoibatCd13
	| IapItemDisplayStickerNoibatCd15
	| IapItemDisplayStickerNoibatCd23
	| IapItemDisplayStickerNoibatCd25
	| IapItemDisplayStickerNoibatCd33
	| IapItemDisplayStickerNoibatCd35
	| IapItemDisplayStickerNoibatCd43
	| IapItemDisplayStickerNoibatCd45
	| IapItemDisplayStickerPgofest2021Galarianzigzagoon3
	| IapItemDisplayStickerPgofest2021Galarianzigzagoon5
	| IapItemDisplayStickerPgofest2021Meloetta13
	| IapItemDisplayStickerPgofest2021Meloetta15
	| IapItemDisplayStickerPgofest2021Meloetta23
	| IapItemDisplayStickerPgofest2021Meloetta25
	| IapItemDisplayStickerPgofest2021Ponyta3
	| IapItemDisplayStickerPgofest2021Ponyta5
	| IapItemDisplayStickerPgofest2022Groudon3
	| IapItemDisplayStickerPgofest2022Groudon5
	| IapItemDisplayStickerPgofest2022Kibago3
	| IapItemDisplayStickerPgofest2022Kibago5
	| IapItemDisplayStickerPgofest2022Kyogre3
	| IapItemDisplayStickerPgofest2022Kyogre5
	| IapItemDisplayStickerPgofest2022Pikachu3
	| IapItemDisplayStickerPgofest2022Pikachu5
	| IapItemDisplayStickerPgofest2022Pochama3
	| IapItemDisplayStickerPgofest2022Pochama5
	| IapItemDisplayStickerPgofest2022Shaymin3
	| IapItemDisplayStickerPgofest2022Shaymin5
	| IapItemDisplayStickerPgoFest20243
	| IapItemDisplayStickerPgoFest20245
	| IapItemDisplayStickerPgoFest202413
	| IapItemDisplayStickerPgoFest202415
	| IapItemDisplayStickerPgoFest202423
	| IapItemDisplayStickerPgoFest202425
	| IapItemDisplayStickerPgoFest202433
	| IapItemDisplayStickerPgoFest202435
	| IapItemDisplayStickerPgoFest202443
	| IapItemDisplayStickerPgoFest202445
	| IapItemDisplayStickerPgoFest202453
	| IapItemDisplayStickerPgoFest202455
	| IapItemDisplayStickerPgoFest202463
	| IapItemDisplayStickerPgoFest202465
	| IapItemDisplayStickerPgoFest2024Logo3
	| IapItemDisplayStickerPgoFest2024Logo5
	| IapItemDisplayStickerPgoFest20253
	| IapItemDisplayStickerPgoFest20255
	| IapItemDisplayStickerPgoFest202513
	| IapItemDisplayStickerPgoFest202515
	| IapItemDisplayStickerPgoFest202523
	| IapItemDisplayStickerPgoFest202525
	| IapItemDisplayStickerPgoFest202533
	| IapItemDisplayStickerPgoFest202535
	| IapItemDisplayStickerPgoFest2025Logo3
	| IapItemDisplayStickerPgoFest2025Logo5
	| IapItemDisplayStickerPgoFestVictini053
	| IapItemDisplayStickerPgoFestVictini055
	| IapItemDisplayStickerPgoTour20263
	| IapItemDisplayStickerPgoTour20265
	| IapItemDisplayStickerPgoTour202613
	| IapItemDisplayStickerPgoTour202615
	| IapItemDisplayStickerPgoTour202623
	| IapItemDisplayStickerPgoTour202625
	| IapItemDisplayStickerPgoTour202633
	| IapItemDisplayStickerPgoTour202635
	| IapItemDisplayStickerPgoTour2026Logo3
	| IapItemDisplayStickerPgoTour2026Logo5
	| IapItemDisplayStickerPgoWildarea20243
	| IapItemDisplayStickerPgoWildarea20245
	| IapItemDisplayStickerPgoWildarea202413
	| IapItemDisplayStickerPgoWildarea202415
	| IapItemDisplayStickerPgoWildarea202423
	| IapItemDisplayStickerPgoWildarea202425
	| IapItemDisplayStickerPgoWildarea202433
	| IapItemDisplayStickerPgoWildarea202435
	| IapItemDisplayStickerPgoWildarea202443
	| IapItemDisplayStickerPgoWildarea202445
	| IapItemDisplayStickerPgoWildarea2024Logo3
	| IapItemDisplayStickerPgoWildarea2024Logo5
	| IapItemDisplayStickerPikachuJol3
	| IapItemDisplayStickerPikachuJol5
	| IapItemDisplayStickerPokemonchatpals2403
	| IapItemDisplayStickerPokemonchatpals2405
	| IapItemDisplayStickerPonyta13
	| IapItemDisplayStickerPonyta15
	| IapItemDisplayStickerPonyta23
	| IapItemDisplayStickerPonyta25
	| IapItemDisplayStickerPonyta33
	| IapItemDisplayStickerPonyta35
	| IapItemDisplayStickerPonyta43
	| IapItemDisplayStickerPonyta45
	| IapItemDisplayStickerPoppliocd13
	| IapItemDisplayStickerPoppliocd15
	| IapItemDisplayStickerPoppliocd23
	| IapItemDisplayStickerPoppliocd25
	| IapItemDisplayStickerPoppliocd33
	| IapItemDisplayStickerPoppliocd35
	| IapItemDisplayStickerPoppliocd43
	| IapItemDisplayStickerPoppliocd45
	| IapItemDisplayStickerPsychicspec21Inkay3
	| IapItemDisplayStickerPsychicspec21Inkay5
	| IapItemDisplayStickerPsychicspec21Inkay23
	| IapItemDisplayStickerPsychicspec21Inkay25
	| IapItemDisplayStickerRowletcd13
	| IapItemDisplayStickerRowletcd15
	| IapItemDisplayStickerRowletcd23
	| IapItemDisplayStickerRowletcd25
	| IapItemDisplayStickerRowletcd33
	| IapItemDisplayStickerRowletcd35
	| IapItemDisplayStickerRowletcd43
	| IapItemDisplayStickerRowletcd45
	| IapItemDisplayStickerSewaddlecd13
	| IapItemDisplayStickerSewaddlecd15
	| IapItemDisplayStickerSewaddlecd23
	| IapItemDisplayStickerSewaddlecd25
	| IapItemDisplayStickerSewaddlecd33
	| IapItemDisplayStickerSewaddlecd35
	| IapItemDisplayStickerSewaddlecd43
	| IapItemDisplayStickerSewaddlecd45
	| IapItemDisplayStickerShelmetKarrablast13
	| IapItemDisplayStickerShelmetKarrablast15
	| IapItemDisplayStickerShelmetKarrablast23
	| IapItemDisplayStickerShelmetKarrablast25
	| IapItemDisplayStickerShelmetKarrablast33
	| IapItemDisplayStickerShelmetKarrablast35
	| IapItemDisplayStickerSlowpoke13
	| IapItemDisplayStickerSlowpoke15
	| IapItemDisplayStickerSlowpoke23
	| IapItemDisplayStickerSlowpoke25
	| IapItemDisplayStickerSlowpoke33
	| IapItemDisplayStickerSlowpoke35
	| IapItemDisplayStickerSlowpoke43
	| IapItemDisplayStickerSlowpoke45
	| IapItemDisplayStickerSpheal13
	| IapItemDisplayStickerSpheal15
	| IapItemDisplayStickerSpheal23
	| IapItemDisplayStickerSpheal25
	| IapItemDisplayStickerSpheal33
	| IapItemDisplayStickerSpheal35
	| IapItemDisplayStickerSpheal43
	| IapItemDisplayStickerSpheal45
	| IapItemDisplayStickerSprigatito13
	| IapItemDisplayStickerSprigatito15
	| IapItemDisplayStickerSprigatito23
	| IapItemDisplayStickerSprigatito25
	| IapItemDisplayStickerSprigatito33
	| IapItemDisplayStickerSprigatito35
	| IapItemDisplayStickerSprigatito43
	| IapItemDisplayStickerSprigatito45
	| IapItemDisplayStickerSpring202413
	| IapItemDisplayStickerSpring202415
	| IapItemDisplayStickerSpring202423
	| IapItemDisplayStickerSpring202425
	| IapItemDisplayStickerSpring202433
	| IapItemDisplayStickerSpring202435
	| IapItemDisplayStickerSpring202443
	| IapItemDisplayStickerSpring202445
	| IapItemDisplayStickerSpring202453
	| IapItemDisplayStickerSpring202455
	| IapItemDisplayStickerSpring202463
	| IapItemDisplayStickerSpring202465
	| IapItemDisplayStickerSpring202513
	| IapItemDisplayStickerSpring202515
	| IapItemDisplayStickerSpring202523
	| IapItemDisplayStickerSpring202525
	| IapItemDisplayStickerSpring202533
	| IapItemDisplayStickerSpring202535
	| IapItemDisplayStickerSpring202543
	| IapItemDisplayStickerSpring202545
	| IapItemDisplayStickerSpring202613
	| IapItemDisplayStickerSpring202615
	| IapItemDisplayStickerSpring202623
	| IapItemDisplayStickerSpring202625
	| IapItemDisplayStickerSpring202633
	| IapItemDisplayStickerSpring202635
	| IapItemDisplayStickerSpring202643
	| IapItemDisplayStickerSpring202645
	| IapItemDisplayStickerSpringEievui3
	| IapItemDisplayStickerSpringEievui5
	| IapItemDisplayStickerSpringHapinas3
	| IapItemDisplayStickerSpringHapinas5
	| IapItemDisplayStickerSpringMimirol3
	| IapItemDisplayStickerSpringMimirol5
	| IapItemDisplayStickerSpringNimphia3
	| IapItemDisplayStickerSpringNimphia5
	| IapItemDisplayStickerSpringPikachu3
	| IapItemDisplayStickerSpringPikachu5
	| IapItemDisplayStickerSpringPipito3
	| IapItemDisplayStickerSpringPipito5
	| IapItemDisplayStickerStufful13
	| IapItemDisplayStickerStufful15
	| IapItemDisplayStickerStufful23
	| IapItemDisplayStickerStufful25
	| IapItemDisplayStickerStufful33
	| IapItemDisplayStickerStufful35
	| IapItemDisplayStickerStufful43
	| IapItemDisplayStickerStufful45
	| IapItemDisplayStickerSummer13
	| IapItemDisplayStickerSummer15
	| IapItemDisplayStickerSummer23
	| IapItemDisplayStickerSummer25
	| IapItemDisplayStickerSummer2023Blastoise3
	| IapItemDisplayStickerSummer2023Blastoise5
	| IapItemDisplayStickerSummer2023Butterfree3
	| IapItemDisplayStickerSummer2023Butterfree5
	| IapItemDisplayStickerSummer2023Clamperl3
	| IapItemDisplayStickerSummer2023Clamperl5
	| IapItemDisplayStickerSummer2023Ledian3
	| IapItemDisplayStickerSummer2023Ledian5
	| IapItemDisplayStickerSummer2023Sawsbuck3
	| IapItemDisplayStickerSummer2023Sawsbuck5
	| IapItemDisplayStickerSummer2023Squirtle3
	| IapItemDisplayStickerSummer2023Squirtle5
	| IapItemDisplayStickerSummer202413
	| IapItemDisplayStickerSummer202415
	| IapItemDisplayStickerSummer202423
	| IapItemDisplayStickerSummer202425
	| IapItemDisplayStickerSummer202433
	| IapItemDisplayStickerSummer202435
	| IapItemDisplayStickerSummer202443
	| IapItemDisplayStickerSummer202445
	| IapItemDisplayStickerSummer202453
	| IapItemDisplayStickerSummer202455
	| IapItemDisplayStickerSummer202463
	| IapItemDisplayStickerSummer202465
	| IapItemDisplayStickerSummer202513
	| IapItemDisplayStickerSummer202515
	| IapItemDisplayStickerSummer202523
	| IapItemDisplayStickerSummer202525
	| IapItemDisplayStickerSummer202533
	| IapItemDisplayStickerSummer202535
	| IapItemDisplayStickerSummer202543
	| IapItemDisplayStickerSummer202545
	| IapItemDisplayStickerSummer33
	| IapItemDisplayStickerSummer35
	| IapItemDisplayStickerSummer43
	| IapItemDisplayStickerSummer45
	| IapItemDisplayStickerSummer53
	| IapItemDisplayStickerSummer55
	| IapItemDisplayStickerSummer63
	| IapItemDisplayStickerSummer65
	| IapItemDisplayStickerSwordshield2113
	| IapItemDisplayStickerSwordshield2115
	| IapItemDisplayStickerSwordshield2123
	| IapItemDisplayStickerSwordshield2125
	| IapItemDisplayStickerSwordshield2133
	| IapItemDisplayStickerSwordshield2135
	| IapItemDisplayStickerSwordshield2143
	| IapItemDisplayStickerSwordshield2145
	| IapItemDisplayStickerSwordshield2153
	| IapItemDisplayStickerSwordshield2155
	| IapItemDisplayStickerTlBlanche3
	| IapItemDisplayStickerTlBlanche5
	| IapItemDisplayStickerTlCandela3
	| IapItemDisplayStickerTlCandela5
	| IapItemDisplayStickerTlSpark3
	| IapItemDisplayStickerTlSpark5
	| IapItemDisplayStickerTrArlo3
	| IapItemDisplayStickerTrArlo5
	| IapItemDisplayStickerTrCliff3
	| IapItemDisplayStickerTrCliff5
	| IapItemDisplayStickerTrSierra3
	| IapItemDisplayStickerTrSierra5
	| IapItemDisplayStickerTynamocd13
	| IapItemDisplayStickerTynamocd15
	| IapItemDisplayStickerTynamocd23
	| IapItemDisplayStickerTynamocd25
	| IapItemDisplayStickerTynamocd33
	| IapItemDisplayStickerTynamocd35
	| IapItemDisplayStickerTynamocd43
	| IapItemDisplayStickerTynamocd45
	| IapItemDisplayStickerValentine202313
	| IapItemDisplayStickerValentine202315
	| IapItemDisplayStickerValentine202323
	| IapItemDisplayStickerValentine202325
	| IapItemDisplayStickerValentine202333
	| IapItemDisplayStickerValentine202335
	| IapItemDisplayStickerWcs2025CarGroup3
	| IapItemDisplayStickerWcs2025CarGroup5
	| IapItemDisplayStickerWcs2025Jigglypuff3
	| IapItemDisplayStickerWcs2025Jigglypuff5
	| IapItemDisplayStickerWcs2025Murkrow3
	| IapItemDisplayStickerWcs2025Murkrow5
	| IapItemDisplayStickerWcs2025Pikachu3
	| IapItemDisplayStickerWcs2025Pikachu5
	| IapItemDisplayStickerWinter202313
	| IapItemDisplayStickerWinter202315
	| IapItemDisplayStickerWinter202323
	| IapItemDisplayStickerWinter202325
	| IapItemDisplayStickerWinter202333
	| IapItemDisplayStickerWinter202335
	| IapItemDisplayStickerWinter202343
	| IapItemDisplayStickerWinter202345
	| IapItemDisplayStickerWinter202353
	| IapItemDisplayStickerWinter202355
	| IapItemDisplayStickerWinter202363
	| IapItemDisplayStickerWinter202365
	| IapItemDisplayStickerWinter202513
	| IapItemDisplayStickerWinter202515
	| IapItemDisplayStickerWinter202523
	| IapItemDisplayStickerWinter202525
	| IapItemDisplayStickerWinter202533
	| IapItemDisplayStickerWinter202535
	| IapItemDisplayStickerWinter202543
	| IapItemDisplayStickerWinter202545
	| IapItemDisplayStickerWinter202413
	| IapItemDisplayStickerWinter202415
	| IapItemDisplayStickerWinter202423
	| IapItemDisplayStickerWinter202425
	| IapItemDisplayStickerWinter202433
	| IapItemDisplayStickerWinter202435
	| IapItemDisplayStickerWinter202443
	| IapItemDisplayStickerWinter202445
	| IapItemDisplayStickerWinter202453
	| IapItemDisplayStickerWinter202455
	| IapItemDisplayStickerWinter202463
	| IapItemDisplayStickerWinter202465
	| IapItemDisplayStickerWinterAmaura3
	| IapItemDisplayStickerWinterAmaura5
	| IapItemDisplayStickerWinterDarumaka3
	| IapItemDisplayStickerWinterDarumaka5
	| IapItemDisplayStickerWinterGlaceon3
	| IapItemDisplayStickerWinterGlaceon5
	| IapItemDisplayStickerWinterPikachu3
	| IapItemDisplayStickerWinterPikachu5
	| IapItemDisplayStickerWinterSawsbuck3
	| IapItemDisplayStickerWinterSawsbuck5
	| IapItemDisplayStickerWinterSnorunt3
	| IapItemDisplayStickerWinterSnorunt5
	| IapItemDisplayStickerYurutto123
	| IapItemDisplayStickerYurutto125
	| IapItemDisplayStickerYurutto243
	| IapItemDisplayStickerYurutto245
	| IapItemDisplayWinterholidays2025DeluxeEventPassTrackUnlock
	| IapItemDisplayWinterholidays2025DeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplayBattlepassticket1
	| IapItemDisplayBundleEliteexp20241
	| IapItemDisplayBundleEliteexp20242
	| IapItemDisplayBundleEliteexp20243
	| IapItemDisplayBundleEliteexp20244
	| IapItemDisplayBundleEliteexp20245
	| IapItemDisplayBundleGotour20241
	| IapItemDisplayBundleGotour20242
	| IapItemDisplayBundleGotour20243
	| IapItemDisplayBundleGotour20244
	| IapItemDisplayBundleGotour20245
	| IapItemDisplayBundleGotour20246
	| IapItemDisplayBundleGotour20247
	| IapItemDisplayBundleAdventurebrazil1001
	| IapItemDisplayBundleAdventurebrazil2001
	| IapItemDisplayBundleAnniversary20231
	| IapItemDisplayBundleApacmar20251
	| IapItemDisplayBundleArraia20251
	| IapItemDisplayBundleArraia20252
	| IapItemDisplayBundleAtlanticav2box1
	| IapItemDisplayBundleAtlanticav2box2
	| IapItemDisplayBundleBlackfridaystickers241
	| IapItemDisplayBundleBlackfridaystickers242
	| IapItemDisplayBundleBoost20231
	| IapItemDisplayBundleBrazil20231
	| IapItemDisplayBundleBrazilrediscover11
	| IapItemDisplayBundleBrazilrediscover21
	| IapItemDisplayBundleBrazilvacations1001
	| IapItemDisplayBundleCarnival20251
	| IapItemDisplayBundleCarnival20252
	| IapItemDisplayBundleCd20221
	| IapItemDisplayBundleCd20222
	| IapItemDisplayBundleCdrecapstickers1
	| IapItemDisplayBundleCitysafari450hktw1
	| IapItemDisplayBundleCswkmakegoodprep1001
	| IapItemDisplayBundleCswkmakegoodprep2001
	| IapItemDisplayBundleCswkmakegoodprep3001
	| IapItemDisplayBundleDecroutes20231
	| IapItemDisplayBundleDiademuertos20251
	| IapItemDisplayBundleDiademuertosmax1001
	| IapItemDisplayBundleDiademuertosmax2001
	| IapItemDisplayBundleDiwali20251
	| IapItemDisplayBundleDiwali20252
	| IapItemDisplayBundleDiwalimax1001
	| IapItemDisplayBundleEmcarnival20261
	| IapItemDisplayBundleEmcarnival20262
	| IapItemDisplayBundleEmea20231
	| IapItemDisplayBundleEvolve20221
	| IapItemDisplayBundleEvolve20222
	| IapItemDisplayBundleEvolve20223
	| IapItemDisplayBundleEvolve20224
	| IapItemDisplayBundleEvolve20225
	| IapItemDisplayBundleEvolve20226
	| IapItemDisplayBundleFol20221
	| IapItemDisplayBundleFol20222
	| IapItemDisplayBundleFol20223
	| IapItemDisplayBundleFol20224
	| IapItemDisplayBundleGeneralTemplate4
	| IapItemDisplayBundleGeneralTemplate5
	| IapItemDisplayBundleGeneralTemplate6
	| IapItemDisplayBundleGeneral1Free1
	| IapItemDisplayBundleGeneral1Large1
	| IapItemDisplayBundleGeneral1Medium1
	| IapItemDisplayBundleGeneral1Medium2
	| IapItemDisplayBundleGeneral1Medium3
	| IapItemDisplayBundleGeneral1Rocket1
	| IapItemDisplayBundleGeneral1Small1
	| IapItemDisplayBundleGeneral1Tiny2
	| IapItemDisplayBundleGeneral1Tiny3
	| IapItemDisplayBundleGeneral1Tiny4
	| IapItemDisplayBundleGeneral2Free1
	| IapItemDisplayBundleGeneral2Large1
	| IapItemDisplayBundleGeneral2Medium1
	| IapItemDisplayBundleGeneral2Small1
	| IapItemDisplayBundleGeneral3Free1
	| IapItemDisplayBundleGeneral3Large1
	| IapItemDisplayBundleGeneral3Small1
	| IapItemDisplayBundleGeneral4Large1
	| IapItemDisplayBundleGeneral4Small2
	| IapItemDisplayBundleGeneral5Large1
	| IapItemDisplayBundleGeneral5Small1
	| IapItemDisplayBundleGeneral5Small2
	| IapItemDisplayBundleGeneral5Small3
	| IapItemDisplayBundleGeneral5Small4
	| IapItemDisplayBundleGeneral5Small5
	| IapItemDisplayBundleGeneral6Small1
	| IapItemDisplayBundleGmaxday1
	| IapItemDisplayBundleGofest20231
	| IapItemDisplayBundleGofest20232
	| IapItemDisplayBundleGofest20233
	| IapItemDisplayBundleGofest20234
	| IapItemDisplayBundleGofest20235
	| IapItemDisplayBundleGofest20241
	| IapItemDisplayBundleGofest20242
	| IapItemDisplayBundleGofest20243
	| IapItemDisplayBundleGofest20244
	| IapItemDisplayBundleGofestmakegoodprep1
	| IapItemDisplayBundleGofestmakegoodprep2
	| IapItemDisplayBundleGofestmakegoodprep3
	| IapItemDisplayBundleGowa20241
	| IapItemDisplayBundleGowa20242
	| IapItemDisplayBundleGowa20243
	| IapItemDisplayBundleGowa20244
	| IapItemDisplayBundleGpdindialaunch1
	| IapItemDisplayBundleGpmay20231
	| IapItemDisplayBundleGwlatam20251
	| IapItemDisplayBundleGwlatam20252
	| IapItemDisplayBundleGwlatam20253
	| IapItemDisplayBundleHalloweenAdventure1
	| IapItemDisplayBundleHalloweenLarge1
	| IapItemDisplayBundleHalloweenSmall1
	| IapItemDisplayBundleHalloween20221
	| IapItemDisplayBundleHalloween20222
	| IapItemDisplayBundleHalloween20223
	| IapItemDisplayBundleHalloween20231
	| IapItemDisplayBundleHalloween20232
	| IapItemDisplayBundleHalloween20233
	| IapItemDisplayBundleHalloween20251
	| IapItemDisplayBundleHalloween20252
	| IapItemDisplayBundleHalloween20253
	| IapItemDisplayBundleHarvestcatch1
	| IapItemDisplayBundleHarvestfestival2025
	| IapItemDisplayBundleHatchbox20241
	| IapItemDisplayBundleHawlucha20251
	| IapItemDisplayBundleHawlucha20252
	| IapItemDisplayBundleHawluchacelebration1001
	| IapItemDisplayBundleHawluchacelebration2001
	| IapItemDisplayBundleHisuiraidday20231
	| IapItemDisplayBundleHoli20251
	| IapItemDisplayBundleHoli20252
	| IapItemDisplayBundleHoliday20221
	| IapItemDisplayBundleHoliday20222
	| IapItemDisplayBundleHoliday20223
	| IapItemDisplayBundleHoliday20241
	| IapItemDisplayBundleIncenseday1
	| IapItemDisplayBundleIndiaaugust1001
	| IapItemDisplayBundleIndiaboxfeature1
	| IapItemDisplayBundleIndiafestivaloflights1
	| IapItemDisplayBundleIndiamay20241
	| IapItemDisplayBundleIndiaseptember1001
	| IapItemDisplayBundleIndiaseptember2001
	| IapItemDisplayBundleIndonesiaboxfeature1
	| IapItemDisplayBundleIndonesialaunch1
	| IapItemDisplayBundleIndonesialaunch2
	| IapItemDisplayBundleJakartaaugust1001
	| IapItemDisplayBundleKoreaseptember1001
	| IapItemDisplayBundleKoreaseptember2001
	| IapItemDisplayBundleKsalaunch1001
	| IapItemDisplayBundleKsalaunch2001
	| IapItemDisplayBundleLatbox1001
	| IapItemDisplayBundleLatbox3001
	| IapItemDisplayBundleLunarnewyear1
	| IapItemDisplayBundleMaxfinale1
	| IapItemDisplayBundleMaxfinale2
	| IapItemDisplayBundleMaxmonday1
	| IapItemDisplayBundleMegaLucarioRaidDay20241
	| IapItemDisplayBundleMheracrossraidday20241
	| IapItemDisplayBundleMidautumn1
	| IapItemDisplayBundleMidautumn2
	| IapItemDisplayBundleMidautumn3
	| IapItemDisplayBundleNewyears20241
	| IapItemDisplayBundlePlaysummerbox1
	| IapItemDisplayBundlePrimalraidday20231
	| IapItemDisplayBundlePsychSpec20221
	| IapItemDisplayBundlePsychSpec20222
	| IapItemDisplayBundlePsychSpec20223
	| IapItemDisplayBundleRamadan1
	| IapItemDisplayBundleRamadan2
	| IapItemDisplayBundleRarebundle1
	| IapItemDisplayBundleRarebundle2
	| IapItemDisplayBundleRarebundle3
	| IapItemDisplayBundleRarebundle4
	| IapItemDisplayBundleRiolu20231
	| IapItemDisplayBundleRiolu20232
	| IapItemDisplayBundleRockruffboost1
	| IapItemDisplayBundleRrpstar1
	| IapItemDisplayBundleS17seasonstart1
	| IapItemDisplayBundleSeason10evergreen1
	| IapItemDisplayBundleSeason10evergreen2
	| IapItemDisplayBundleSeason10evergreen3
	| IapItemDisplayBundleSeason11evergreen1
	| IapItemDisplayBundleSeason11evergreen2
	| IapItemDisplayBundleSeason11evergreen3
	| IapItemDisplayBundleSeason12evergreen20231
	| IapItemDisplayBundleSeason12evergreen20232
	| IapItemDisplayBundleSeason12evergreen20233
	| IapItemDisplayBundleSeason13evergreen20231
	| IapItemDisplayBundleSeason13evergreen20232
	| IapItemDisplayBundleSeason13evergreen20233
	| IapItemDisplayBundleSeason14evergreen20241
	| IapItemDisplayBundleSeason14evergreen20242
	| IapItemDisplayBundleSeason14evergreen20243
	| IapItemDisplayBundleSeason15evergreen20241
	| IapItemDisplayBundleSeason15evergreen20242
	| IapItemDisplayBundleSeason15evergreen20243
	| IapItemDisplayBundleSeason16evergreen20241
	| IapItemDisplayBundleSeason16evergreen20242
	| IapItemDisplayBundleSeason16evergreen20243
	| IapItemDisplayBundleSeasonaldelights20241
	| IapItemDisplayBundleShadowlugia1
	| IapItemDisplayBundleSmoresbump2025
	| IapItemDisplayBundleSolstice20231
	| IapItemDisplayBundleSolstice20232
	| IapItemDisplayBundleSolstice20233
	| IapItemDisplayBundleSongkran20251
	| IapItemDisplayBundleSparkbox1
	| IapItemDisplayBundleSparkbox2
	| IapItemDisplayBundleSparkbox3
	| IapItemDisplayBundleSpringtakeover20231
	| IapItemDisplayBundleSpringtakeover20232
	| IapItemDisplayBundleSpringtakeover20233
	| IapItemDisplayBundleSteelMettle20221
	| IapItemDisplayBundleSteelMettle20222
	| IapItemDisplayBundleSteelMettle20223
	| IapItemDisplayBundleTakeover20221
	| IapItemDisplayBundleTakeover20222
	| IapItemDisplayBundleTakeover20223
	| IapItemDisplayBundleTgrtakeover20241
	| IapItemDisplayBundleThailandfeatureapril20241
	| IapItemDisplayBundleTmexpert1
	| IapItemDisplayBundleUbraidday20221
	| IapItemDisplayBundleUbraidday20222
	| IapItemDisplayBundleUkfeature1
	| IapItemDisplayBundleUltrabeastraid2024
	| IapItemDisplayBundleUltraunlockraid20231
	| IapItemDisplayBundleUltraunlockraid20232
	| IapItemDisplayBundleUustorage1
	| IapItemDisplayBundleVoyagerouttoplay1
	| IapItemDisplayBundleWelcomebox1
	| IapItemDisplayBundleWinterevergreen1
	| IapItemDisplayBundleWinterevergreen2
	| IapItemDisplayBundleWinterevergreen3
	| IapItemDisplayBundleWinterholiday20231
	| IapItemDisplayBundleWinterholiday20232
	| IapItemDisplayBundleWinterholiday20233
	| IapItemDisplayBundleXmasLarge1
	| IapItemDisplayBundleZoruamakegood2022
	| IapItemDisplayBundleZzraid1
	| IapItemDisplayDiademuertos
	| IapItemDisplayEvergreenticket1
	| IapItemDisplayEvergreenticket1Giftable
	| IapItemDisplayGeneral1Ticket1
	| IapItemDisplayGeneral1Ticket1Giftable
	| IapItemDisplayGeneral1Ticket2
	| IapItemDisplayGeneral1Ticket2Giftable
	| IapItemDisplayGeneral1Ticket3
	| IapItemDisplayGeneral1Ticket4
	| IapItemDisplayGeneral1Ticket4Giftable
	| IapItemDisplayGeneral1Ticket5
	| IapItemDisplayGeneral1Ticket6
	| IapItemDisplayGeneral2Ticket1
	| IapItemDisplayGeneral2Ticket1Giftable
	| IapItemDisplayGeneral2Ticket10
	| IapItemDisplayGeneral2Ticket10Giftable
	| IapItemDisplayGeneral2Ticket2
	| IapItemDisplayGeneral2Ticket2Giftable
	| IapItemDisplayGeneral2Ticket3
	| IapItemDisplayGeneral2Ticket3Giftable
	| IapItemDisplayGeneral2Ticket4
	| IapItemDisplayGeneral2Ticket4Giftable
	| IapItemDisplayGeneral2Ticket5
	| IapItemDisplayGeneral2Ticket5Giftable
	| IapItemDisplayGeneral2Ticket6
	| IapItemDisplayGeneral2Ticket7
	| IapItemDisplayGeneral2Ticket7Giftable
	| IapItemDisplayGeneral2Ticket8
	| IapItemDisplayGeneral2Ticket8Giftable
	| IapItemDisplayGeneral2Ticket9
	| IapItemDisplayGeneral2Ticket9Giftable
	| IapItemDisplayGeneral4Medium1
	| IapItemDisplayGeneral6Small1
	| IapItemDisplayGowaticketfree1
	| IapItemDisplayHometransport1
	| IapItemDisplayIncenseordinary1
	| IapItemDisplayIncenseordinary8
	| IapItemDisplayIncubatorbasic1
	| IapItemDisplayIncubatorsuper1
	| IapItemDisplayItemleadermap
	| IapItemDisplayLuckyegg1
	| IapItemDisplayLuckyegg8
	| IapItemDisplayMaxBoost1
	| IapItemDisplayMaxBoost3
	| IapItemDisplayMaxpotion10
	| IapItemDisplayMaxpotion5
	| IapItemDisplayMaxrevive3
	| IapItemDisplayMaxrevive6
	| IapItemDisplayMpReplenish1
	| IapItemDisplayMpReplenish3
	| IapItemDisplayMpReplenishRrp1
	| IapItemDisplayMpReplenishRrp3
	| IapItemDisplayPaidraidticket1
	| IapItemDisplayPaidraidticket3
	| IapItemDisplayPgoreleaseApril22026DeluxeEventPassTrackRedirect
	| IapItemDisplayPgoreleaseBundle1
	| IapItemDisplayPgoreleaseBundle2
	| IapItemDisplayPgoreleaseBundleRtsraid
	| IapItemDisplayPgoreleaseBundleBlanchebox1
	| IapItemDisplayPgoreleaseBundleCitysafaribarcelona1
	| IapItemDisplayPgoreleaseBundleCitysafaribarcelona2
	| IapItemDisplayPgoreleaseBundleCitysafarimexico1
	| IapItemDisplayPgoreleaseBundleCitysafarimexico2
	| IapItemDisplayPgoreleaseBundleEliteraidbox1
	| IapItemDisplayPgoreleaseBundleEliteraidmay2023
	| IapItemDisplayPgoreleaseBundleFlavoredlures1
	| IapItemDisplayPgoreleaseBundleFlavoredlures2
	| IapItemDisplayPgoreleaseBundleFlavoredlures3
	| IapItemDisplayPgoreleaseBundleFlavoredlures4
	| IapItemDisplayPgoreleaseBundleFlavoredlures5
	| IapItemDisplayPgoreleaseBundleFlavoredlures6
	| IapItemDisplayPgoreleaseBundleFlavoredlures7
	| IapItemDisplayPgoreleaseBundleFlavoredlures8
	| IapItemDisplayPgoreleaseBundleFoc2023box1
	| IapItemDisplayPgoreleaseBundleGeneralThirdpartyLarge2
	| IapItemDisplayPgoreleaseBundleGeneralThirdpartyLarge4
	| IapItemDisplayPgoreleaseBundleGeneralThirdpartyMedium1
	| IapItemDisplayPgoreleaseBundleGeneralThirdpartySmall1
	| IapItemDisplayPgoreleaseBundleGeneralThirdpartySmall12
	| IapItemDisplayPgoreleaseBundleGeneralThirdpartySmall2
	| IapItemDisplayPgoreleaseBundleGeneral1Tiny4
	| IapItemDisplayPgoreleaseBundleGeneral11Small1331
	| IapItemDisplayPgoreleaseBundleGotour20230
	| IapItemDisplayPgoreleaseBundleGotour20231
	| IapItemDisplayPgoreleaseBundleGotour20232
	| IapItemDisplayPgoreleaseBundleGotour20233
	| IapItemDisplayPgoreleaseBundleGotour20234
	| IapItemDisplayPgoreleaseBundleGotour20235
	| IapItemDisplayPgoreleaseBundleGotour20236
	| IapItemDisplayPgoreleaseBundleGp20221
	| IapItemDisplayPgoreleaseBundleIndiagp20231
	| IapItemDisplayPgoreleaseBundleLure1
	| IapItemDisplayPgoreleaseBundlePokemonday1
	| IapItemDisplayPgoreleaseBundleRaiddaymay20231
	| IapItemDisplayPgoreleaseBundleRaiddaymay20232
	| IapItemDisplayPgoreleaseBundleRaiddaymay20233
	| IapItemDisplayPgoreleaseBundleRaiddaymay20234
	| IapItemDisplayPgoreleaseBundleRaiddaynov20231
	| IapItemDisplayPgoreleaseBundleRaidhourbox1
	| IapItemDisplayPgoreleaseBundleRaidhourbox2
	| IapItemDisplayPgoreleaseBundleRamadan2023box1
	| IapItemDisplayPgoreleaseBundleSeason10evergreen1
	| IapItemDisplayPgoreleaseBundleSeason10evergreen2
	| IapItemDisplayPgoreleaseBundleSeason10evergreen3
	| IapItemDisplayPgoreleaseBundleSeason10launch1
	| IapItemDisplayPgoreleaseBundleSustainabilitybonusmay2023
	| IapItemDisplayPgoreleaseBundleSustainabilitymay2023
	| IapItemDisplayPgoreleaseBundleTemplate1
	| IapItemDisplayPgoreleaseBundleTemplate2
	| IapItemDisplayPgoreleaseBundleTemplate3
	| IapItemDisplayPgoreleaseBundleThailandspec20231
	| IapItemDisplayPgoreleaseBundleWalkeratlantic20221
	| IapItemDisplayPgoreleaseBundleWalkeratlantic20222
	| IapItemDisplayPgoreleaseCitysafariticket01
	| IapItemDisplayPgoreleaseCitysafariticket11
	| IapItemDisplayPgoreleaseCitysafariticket21
	| IapItemDisplayPgoreleaseEvergreenticket1
	| IapItemDisplayPgoreleaseEvergreenticket1Giftable
	| IapItemDisplayPgoreleaseGeneral1Ticket1
	| IapItemDisplayPgoreleaseGeneral1Ticket1Giftable
	| IapItemDisplayPgoreleaseGeneral1Ticket2
	| IapItemDisplayPgoreleaseGeneral1Ticket2Giftable
	| IapItemDisplayPgoreleaseGeneral1Ticket4
	| IapItemDisplayPgoreleaseGeneral1Ticket4Giftable
	| IapItemDisplayPgoreleaseGeneral2Ticket1
	| IapItemDisplayPgoreleaseGeneral2Ticket1Giftable
	| IapItemDisplayPgoreleaseGeneral2Ticket10
	| IapItemDisplayPgoreleaseGeneral2Ticket10Giftable
	| IapItemDisplayPgoreleaseGeneral2Ticket2
	| IapItemDisplayPgoreleaseGeneral2Ticket2Giftable
	| IapItemDisplayPgoreleaseGeneral2Ticket3
	| IapItemDisplayPgoreleaseGeneral2Ticket3Giftable
	| IapItemDisplayPgoreleaseGeneral2Ticket4
	| IapItemDisplayPgoreleaseGeneral2Ticket4Giftable
	| IapItemDisplayPgoreleaseGeneral2Ticket5
	| IapItemDisplayPgoreleaseGeneral2Ticket5Giftable
	| IapItemDisplayPgoreleaseGeneral2Ticket7
	| IapItemDisplayPgoreleaseGeneral2Ticket7Giftable
	| IapItemDisplayPgoreleaseGeneral2Ticket8
	| IapItemDisplayPgoreleaseGeneral2Ticket8Giftable
	| IapItemDisplayPgoreleaseGeneral2Ticket9
	| IapItemDisplayPgoreleaseGeneral2Ticket9Giftable
	| IapItemDisplayPgoreleaseMonth2DeluxeEventPassTrackUnlock
	| IapItemDisplayPgoreleaseMonth2DeluxeEventPassTrackUnlockPlusPoints
	| IapItemDisplayPgoreleasePokecoin15950
	| IapItemDisplayPgoreleasePokecoin21375
	| IapItemDisplayPgoreleasePokecoin2750
	| IapItemDisplayPgoreleasePokecoin5720
	| IapItemDisplayPoffin
	| IapItemDisplayPokeball100
	| IapItemDisplayPokeball20
	| IapItemDisplayPokeball200
	| IapItemDisplayPostcardstorageupgrade1
	| IapItemDisplayRemoteraidticket1
	| IapItemDisplayRemoteraidticket3
	| IapItemDisplayStarpiece1
	| IapItemDisplayStarpiece8
	| IapItemDisplayTroydisk1
	| IapItemDisplayTroydisk8
	| IapItemDisplayWebCommunityAmbassadorBonusBundle2025
	| IapItemDisplayWebGoFestHatchBox2023
	| IapItemDisplayWebGoFestRaidBox2023
	| IapItemDisplayWebRaidBox071323
	| IapItemDisplayWebSeasonalDelights2024Box
	| IapItemDisplayWebVoyagerBox071323;

export type IapItemDisplayTemplateID = IapItemDisplayMasterfileEntry["templateId"];
