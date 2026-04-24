export interface EventPassTierSettings<TemplateID extends string> {
	templateId: TemplateID;
	data: EventPassTierSettingsData<TemplateID>;
}

export interface EventPassTierSettingsData<TemplateID extends string> {
	templateId: TemplateID;
	eventPassTierSettings: {
		activeBonusDisplaySettings?: {
			bonusBoxes: Array<
				{
					iconType: "GIFT" | "INCENSE" | "LUCKY_EGG" | "STARDUST";
					text: "dai_duration_double" | "gift_open_more_daily" | "gift_send_more_daily" | "gift_storage_more" | "hatch_stardust_double" | "hatch_xp_double";
				}
			>;
		};
		bonusSettings?: {
			bonusBoxes: Array<
				{
					iconType: "GIFT" | "INCENSE" | "LUCKY_EGG" | "STARDUST";
					text: "dai_duration_double" | "gift_open_more_daily" | "gift_send_more_daily" | "gift_storage_more" | "hatch_stardust_double" | "hatch_xp_double";
				}
			>;
			eventName: "season_pass_milestone_bonus_title_01" | "season_pass_milestone_bonus_title_02" | "season_pass_milestone_bonus_title_03";
		};
		minPointsRequired?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | 1100 | 1200 | 1300 | 1400 | 1500 | 1600 | 1700 | 1800 | 1900 | 2000 | 2100 | 2200 | 2300 | 2400 | 2500 | 2600 | 2700 | 2800 | 2900 | 3000 | 3100 | 3200 | 3300 | 3400 | 3500 | 3600 | 3700 | 3800 | 3900 | 4000 | 4100 | 4200 | 4300 | 4400 | 4500 | 4600 | 4700 | 4800 | 4900 | 5000 | 5100 | 5200 | 5300 | 5400 | 5500 | 5600 | 5700 | 5800 | 5900 | 6000 | 6100 | 6200 | 6300 | 6400 | 6500 | 6600 | 6700 | 6800 | 6900 | 7000 | 7100 | 7200 | 7300 | 7400 | 7500 | 7600 | 7700 | 7800 | 7900 | 8000 | 8100 | 8200 | 8300 | 8400 | 8500 | 8600 | 8700 | 8800 | 8900 | 9000 | 9100 | 9200 | 9300 | 9400 | 9500 | 9600 | 9700 | 9800 | 9900 | 10000 | 10100 | 10200 | 10300 | 10400 | 10500 | 10600 | 10700 | 10800 | 10900 | 11000 | 11100 | 11200 | 11300 | 11400 | 11500 | 11600 | 11700 | 11800 | 11900 | 12000 | 12100 | 12200 | 12300 | 12400 | 12500 | 12600 | 12700 | 12800 | 12900 | 13000 | 13100 | 13200 | 13300 | 13400 | 13500 | 13600 | 13700 | 13800 | 13900 | 14000 | 14100 | 14200 | 14300 | 14400 | 14500 | 14600 | 14700 | 14800 | 14900 | 15000 | 15100 | 15200 | 15300 | 15400 | 15500 | 15600 | 15700 | 15800 | 15900 | 16000 | 16100 | 16200 | 16300 | 16400 | 16500 | 16600 | 16700 | 16800 | 16900 | 17000 | 17100 | 17200 | 17300 | 17400 | 17500 | 17600 | 17700 | 17800 | 17900 | 18000 | 18100 | 18200 | 18300 | 18400 | 18500 | 18600 | 18700 | 18800 | 18900 | 19000 | 19100 | 19200 | 19300 | 19400 | 19500 | 19600 | 19700 | 19800 | 19900 | 20000 | 20100 | 20200 | 20300 | 20400 | 20500 | 20600 | 20700 | 20800 | 20900;
		rank: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 | 160 | 161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 | 171 | 172 | 173 | 174 | 175 | 176 | 177 | 178 | 179 | 180 | 181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 | 191 | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 209 | 210;
		rewards?: Array<
			{
				candy?: {
					amount: 3 | 5 | 10;
					pokemonId: "AXEW" | "BELDUM" | "BINACLE" | "BLIPBUG" | "COMBEE" | "DRUDDIGON" | "DUCKLETT" | "ENTEI" | "EXEGGCUTE" | "FOONGUS" | "GIRAFARIG" | "GROWLITHE" | "HATENNA" | "HOPPIP" | "PHANPY" | "POLTCHAGEIST" | "ROCKRUFF" | "ROGGENROLA" | "SINISTEA" | "SIZZLIPEDE" | "SKIDDO" | "SLOWPOKE" | "SNOM" | "TEPIG" | "WOOPER";
				};
				exp?: 500 | 750 | 1000 | 1500 | 2000 | 2250 | 2500 | 3000 | 4500 | 5000 | 6000 | 10000;
				item?: {
					amount: 1 | 2 | 3 | 5 | 10 | 15 | 25 | 40 | 50 | 100 | 200 | 400 | 800;
					item: "ITEM_GOLDEN_PINAP_BERRY" | "ITEM_GOLDEN_RAZZ_BERRY" | "ITEM_GREAT_BALL" | "ITEM_INCENSE_ORDINARY" | "ITEM_INCUBATOR_BASIC" | "ITEM_INCUBATOR_SUPER" | "ITEM_LEADER_MAP_FRAGMENT" | "ITEM_LUCKY_EGG" | "ITEM_LUCKY_FRIEND_APPLICATOR" | "ITEM_MOVE_REROLL_FAST_ATTACK" | "ITEM_MOVE_REROLL_SPECIAL_ATTACK" | "ITEM_MP" | "ITEM_NANAB_BERRY" | "ITEM_PAID_RAID_TICKET" | "ITEM_POFFIN" | "ITEM_POKE_BALL" | "ITEM_RARE_CANDY" | "ITEM_RAZZ_BERRY" | "ITEM_STAR_PIECE" | "ITEM_TROY_DISK" | "ITEM_ULTRA_BALL" | "ITEM_XL_RARE_CANDY";
				};
				playerAttribute?: {
					durationMins: 131487;
					key: "april2026_season_pass_entitlement" | "april2026_season_pass_rank_01" | "april2026_season_pass_rank_02" | "april2026_season_pass_rank_03";
				};
				pokemonEncounter?: {
					isFeaturedPokemon: true;
					pokemonDisplay?: {
						breadModeEnum?: "BREAD_MODE";
						form: "AMOONGUSS_NORMAL" | "BELDUM_NORMAL" | "BINACLE_NORMAL" | "BLIPBUG_NORMAL" | "COMBEE_NORMAL" | "DRUDDIGON_NORMAL" | "ENTEI_NORMAL" | "EXEGGUTOR_ALOLA" | "FRAXURE_NORMAL" | "GIRAFARIG_NORMAL" | "GROWLITHE_NORMAL" | "HATENNA_NORMAL" | "JUMPLUFF_NORMAL" | "PHANPY_NORMAL" | "ROCKRUFF_NORMAL" | "ROGGENROLA_NORMAL" | "SIZZLIPEDE_NORMAL" | "SKIDDO_NORMAL" | "SLOWPOKE_GALARIAN" | "SLOWPOKE_NORMAL" | "SNOM_NORMAL" | "SWANNA_NORMAL" | "TEPIG_NORMAL" | "WOOPER_NORMAL" | "WOOPER_PALDEA";
					};
					pokemonId: "AMOONGUSS" | "BELDUM" | "BINACLE" | "BLIPBUG" | "COMBEE" | "DRUDDIGON" | "ENTEI" | "EXEGGUTOR" | "FRAXURE" | "GIRAFARIG" | "GROWLITHE" | "HATENNA" | "JUMPLUFF" | "PHANPY" | "POLTCHAGEIST" | "ROCKRUFF" | "ROGGENROLA" | "SINISTEA" | "SIZZLIPEDE" | "SKIDDO" | "SLOWPOKE" | "SNOM" | "SWANNA" | "TEPIG" | "WOOPER";
					statsLimitsOverride?: {
						maxPokemonLevel: 20;
						minPokemonLevel: 20;
					};
				};
				stardust?: 50 | 100 | 500 | 750 | 1000 | 1500 | 2000 | 2250 | 2500 | 3000 | 4500 | 5000 | 6000 | 7500 | 10000;
				"type": "CANDY" | "EXPERIENCE" | "ITEM" | "PLAYER_ATTRIBUTE" | "POKEMON_ENCOUNTER" | "STARDUST" | "XL_CANDY";
				xlCandy?: {
					amount: 3;
					pokemonId: "AXEW" | "BELDUM" | "COMBEE" | "DUCKLETT" | "ENTEI" | "EXEGGCUTE" | "GIRAFARIG" | "GROWLITHE" | "HATENNA" | "PHANPY" | "ROGGENROLA" | "SINISTEA" | "SIZZLIPEDE" | "SKIDDO" | "SLOWPOKE" | "SNOM" | "TEPIG" | "WOOPER";
				};
			}
		>;
		track: "FREE" | "PREMIUM";
	};
}

export type EventPassTierSettings100Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_100_FREE">;
export type EventPassTierSettings100Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_100_PREMIUM">;
export type EventPassTierSettings101Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_101_FREE">;
export type EventPassTierSettings101Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_101_PREMIUM">;
export type EventPassTierSettings102Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_102_FREE">;
export type EventPassTierSettings102Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_102_PREMIUM">;
export type EventPassTierSettings103Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_103_FREE">;
export type EventPassTierSettings103Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_103_PREMIUM">;
export type EventPassTierSettings104Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_104_FREE">;
export type EventPassTierSettings104Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_104_PREMIUM">;
export type EventPassTierSettings105Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_105_FREE">;
export type EventPassTierSettings105Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_105_PREMIUM">;
export type EventPassTierSettings106Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_106_FREE">;
export type EventPassTierSettings106Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_106_PREMIUM">;
export type EventPassTierSettings107Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_107_FREE">;
export type EventPassTierSettings107Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_107_PREMIUM">;
export type EventPassTierSettings108Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_108_FREE">;
export type EventPassTierSettings108Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_108_PREMIUM">;
export type EventPassTierSettings109Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_109_FREE">;
export type EventPassTierSettings109Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_109_PREMIUM">;
export type EventPassTierSettings10Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_10_FREE">;
export type EventPassTierSettings10Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_10_PREMIUM">;
export type EventPassTierSettings110Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_110_FREE">;
export type EventPassTierSettings110Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_110_PREMIUM">;
export type EventPassTierSettings111Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_111_FREE">;
export type EventPassTierSettings111Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_111_PREMIUM">;
export type EventPassTierSettings112Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_112_FREE">;
export type EventPassTierSettings112Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_112_PREMIUM">;
export type EventPassTierSettings113Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_113_FREE">;
export type EventPassTierSettings113Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_113_PREMIUM">;
export type EventPassTierSettings114Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_114_FREE">;
export type EventPassTierSettings114Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_114_PREMIUM">;
export type EventPassTierSettings115Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_115_FREE">;
export type EventPassTierSettings115Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_115_PREMIUM">;
export type EventPassTierSettings116Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_116_FREE">;
export type EventPassTierSettings116Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_116_PREMIUM">;
export type EventPassTierSettings117Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_117_FREE">;
export type EventPassTierSettings117Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_117_PREMIUM">;
export type EventPassTierSettings118Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_118_FREE">;
export type EventPassTierSettings118Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_118_PREMIUM">;
export type EventPassTierSettings119Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_119_FREE">;
export type EventPassTierSettings119Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_119_PREMIUM">;
export type EventPassTierSettings11Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_11_FREE">;
export type EventPassTierSettings11Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_11_PREMIUM">;
export type EventPassTierSettings120Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_120_FREE">;
export type EventPassTierSettings120Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_120_PREMIUM">;
export type EventPassTierSettings121Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_121_FREE">;
export type EventPassTierSettings121Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_121_PREMIUM">;
export type EventPassTierSettings122Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_122_FREE">;
export type EventPassTierSettings122Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_122_PREMIUM">;
export type EventPassTierSettings123Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_123_FREE">;
export type EventPassTierSettings123Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_123_PREMIUM">;
export type EventPassTierSettings124Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_124_FREE">;
export type EventPassTierSettings124Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_124_PREMIUM">;
export type EventPassTierSettings125Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_125_FREE">;
export type EventPassTierSettings125Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_125_PREMIUM">;
export type EventPassTierSettings126Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_126_FREE">;
export type EventPassTierSettings126Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_126_PREMIUM">;
export type EventPassTierSettings127Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_127_FREE">;
export type EventPassTierSettings127Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_127_PREMIUM">;
export type EventPassTierSettings128Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_128_FREE">;
export type EventPassTierSettings128Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_128_PREMIUM">;
export type EventPassTierSettings129Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_129_FREE">;
export type EventPassTierSettings129Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_129_PREMIUM">;
export type EventPassTierSettings12Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_12_FREE">;
export type EventPassTierSettings12Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_12_PREMIUM">;
export type EventPassTierSettings130Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_130_FREE">;
export type EventPassTierSettings130Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_130_PREMIUM">;
export type EventPassTierSettings131Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_131_FREE">;
export type EventPassTierSettings131Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_131_PREMIUM">;
export type EventPassTierSettings132Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_132_FREE">;
export type EventPassTierSettings132Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_132_PREMIUM">;
export type EventPassTierSettings133Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_133_FREE">;
export type EventPassTierSettings133Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_133_PREMIUM">;
export type EventPassTierSettings134Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_134_FREE">;
export type EventPassTierSettings134Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_134_PREMIUM">;
export type EventPassTierSettings135Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_135_FREE">;
export type EventPassTierSettings135Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_135_PREMIUM">;
export type EventPassTierSettings136Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_136_FREE">;
export type EventPassTierSettings136Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_136_PREMIUM">;
export type EventPassTierSettings137Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_137_FREE">;
export type EventPassTierSettings137Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_137_PREMIUM">;
export type EventPassTierSettings138Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_138_FREE">;
export type EventPassTierSettings138Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_138_PREMIUM">;
export type EventPassTierSettings139Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_139_FREE">;
export type EventPassTierSettings139Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_139_PREMIUM">;
export type EventPassTierSettings13Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_13_FREE">;
export type EventPassTierSettings13Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_13_PREMIUM">;
export type EventPassTierSettings140Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_140_FREE">;
export type EventPassTierSettings140Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_140_PREMIUM">;
export type EventPassTierSettings141Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_141_FREE">;
export type EventPassTierSettings141Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_141_PREMIUM">;
export type EventPassTierSettings142Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_142_FREE">;
export type EventPassTierSettings142Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_142_PREMIUM">;
export type EventPassTierSettings143Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_143_FREE">;
export type EventPassTierSettings143Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_143_PREMIUM">;
export type EventPassTierSettings144Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_144_FREE">;
export type EventPassTierSettings144Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_144_PREMIUM">;
export type EventPassTierSettings145Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_145_FREE">;
export type EventPassTierSettings145Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_145_PREMIUM">;
export type EventPassTierSettings146Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_146_FREE">;
export type EventPassTierSettings146Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_146_PREMIUM">;
export type EventPassTierSettings147Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_147_FREE">;
export type EventPassTierSettings147Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_147_PREMIUM">;
export type EventPassTierSettings148Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_148_FREE">;
export type EventPassTierSettings148Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_148_PREMIUM">;
export type EventPassTierSettings149Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_149_FREE">;
export type EventPassTierSettings149Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_149_PREMIUM">;
export type EventPassTierSettings14Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_14_FREE">;
export type EventPassTierSettings14Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_14_PREMIUM">;
export type EventPassTierSettings150Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_150_FREE">;
export type EventPassTierSettings150Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_150_PREMIUM">;
export type EventPassTierSettings151Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_151_FREE">;
export type EventPassTierSettings151Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_151_PREMIUM">;
export type EventPassTierSettings152Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_152_FREE">;
export type EventPassTierSettings152Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_152_PREMIUM">;
export type EventPassTierSettings153Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_153_FREE">;
export type EventPassTierSettings153Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_153_PREMIUM">;
export type EventPassTierSettings154Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_154_FREE">;
export type EventPassTierSettings154Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_154_PREMIUM">;
export type EventPassTierSettings155Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_155_FREE">;
export type EventPassTierSettings155Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_155_PREMIUM">;
export type EventPassTierSettings156Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_156_FREE">;
export type EventPassTierSettings156Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_156_PREMIUM">;
export type EventPassTierSettings157Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_157_FREE">;
export type EventPassTierSettings157Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_157_PREMIUM">;
export type EventPassTierSettings158Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_158_FREE">;
export type EventPassTierSettings158Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_158_PREMIUM">;
export type EventPassTierSettings159Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_159_FREE">;
export type EventPassTierSettings159Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_159_PREMIUM">;
export type EventPassTierSettings15Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_15_FREE">;
export type EventPassTierSettings15Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_15_PREMIUM">;
export type EventPassTierSettings160Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_160_FREE">;
export type EventPassTierSettings160Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_160_PREMIUM">;
export type EventPassTierSettings161Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_161_FREE">;
export type EventPassTierSettings161Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_161_PREMIUM">;
export type EventPassTierSettings162Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_162_FREE">;
export type EventPassTierSettings162Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_162_PREMIUM">;
export type EventPassTierSettings163Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_163_FREE">;
export type EventPassTierSettings163Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_163_PREMIUM">;
export type EventPassTierSettings164Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_164_FREE">;
export type EventPassTierSettings164Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_164_PREMIUM">;
export type EventPassTierSettings165Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_165_FREE">;
export type EventPassTierSettings165Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_165_PREMIUM">;
export type EventPassTierSettings166Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_166_FREE">;
export type EventPassTierSettings166Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_166_PREMIUM">;
export type EventPassTierSettings167Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_167_FREE">;
export type EventPassTierSettings167Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_167_PREMIUM">;
export type EventPassTierSettings168Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_168_FREE">;
export type EventPassTierSettings168Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_168_PREMIUM">;
export type EventPassTierSettings169Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_169_FREE">;
export type EventPassTierSettings169Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_169_PREMIUM">;
export type EventPassTierSettings16Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_16_FREE">;
export type EventPassTierSettings16Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_16_PREMIUM">;
export type EventPassTierSettings170Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_170_FREE">;
export type EventPassTierSettings170Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_170_PREMIUM">;
export type EventPassTierSettings171Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_171_FREE">;
export type EventPassTierSettings171Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_171_PREMIUM">;
export type EventPassTierSettings172Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_172_FREE">;
export type EventPassTierSettings172Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_172_PREMIUM">;
export type EventPassTierSettings173Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_173_FREE">;
export type EventPassTierSettings173Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_173_PREMIUM">;
export type EventPassTierSettings174Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_174_FREE">;
export type EventPassTierSettings174Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_174_PREMIUM">;
export type EventPassTierSettings175Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_175_FREE">;
export type EventPassTierSettings175Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_175_PREMIUM">;
export type EventPassTierSettings176Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_176_FREE">;
export type EventPassTierSettings176Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_176_PREMIUM">;
export type EventPassTierSettings177Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_177_FREE">;
export type EventPassTierSettings177Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_177_PREMIUM">;
export type EventPassTierSettings178Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_178_FREE">;
export type EventPassTierSettings178Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_178_PREMIUM">;
export type EventPassTierSettings179Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_179_FREE">;
export type EventPassTierSettings179Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_179_PREMIUM">;
export type EventPassTierSettings17Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_17_FREE">;
export type EventPassTierSettings17Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_17_PREMIUM">;
export type EventPassTierSettings180Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_180_FREE">;
export type EventPassTierSettings180Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_180_PREMIUM">;
export type EventPassTierSettings181Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_181_FREE">;
export type EventPassTierSettings181Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_181_PREMIUM">;
export type EventPassTierSettings182Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_182_FREE">;
export type EventPassTierSettings182Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_182_PREMIUM">;
export type EventPassTierSettings183Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_183_FREE">;
export type EventPassTierSettings183Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_183_PREMIUM">;
export type EventPassTierSettings184Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_184_FREE">;
export type EventPassTierSettings184Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_184_PREMIUM">;
export type EventPassTierSettings185Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_185_FREE">;
export type EventPassTierSettings185Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_185_PREMIUM">;
export type EventPassTierSettings186Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_186_FREE">;
export type EventPassTierSettings186Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_186_PREMIUM">;
export type EventPassTierSettings187Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_187_FREE">;
export type EventPassTierSettings187Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_187_PREMIUM">;
export type EventPassTierSettings188Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_188_FREE">;
export type EventPassTierSettings188Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_188_PREMIUM">;
export type EventPassTierSettings189Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_189_FREE">;
export type EventPassTierSettings189Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_189_PREMIUM">;
export type EventPassTierSettings18Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_18_FREE">;
export type EventPassTierSettings18Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_18_PREMIUM">;
export type EventPassTierSettings190Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_190_FREE">;
export type EventPassTierSettings190Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_190_PREMIUM">;
export type EventPassTierSettings191Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_191_FREE">;
export type EventPassTierSettings191Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_191_PREMIUM">;
export type EventPassTierSettings192Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_192_FREE">;
export type EventPassTierSettings192Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_192_PREMIUM">;
export type EventPassTierSettings193Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_193_FREE">;
export type EventPassTierSettings193Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_193_PREMIUM">;
export type EventPassTierSettings194Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_194_FREE">;
export type EventPassTierSettings194Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_194_PREMIUM">;
export type EventPassTierSettings195Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_195_FREE">;
export type EventPassTierSettings195Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_195_PREMIUM">;
export type EventPassTierSettings196Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_196_FREE">;
export type EventPassTierSettings196Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_196_PREMIUM">;
export type EventPassTierSettings197Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_197_FREE">;
export type EventPassTierSettings197Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_197_PREMIUM">;
export type EventPassTierSettings198Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_198_FREE">;
export type EventPassTierSettings198Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_198_PREMIUM">;
export type EventPassTierSettings199Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_199_FREE">;
export type EventPassTierSettings199Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_199_PREMIUM">;
export type EventPassTierSettings19Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_19_FREE">;
export type EventPassTierSettings19Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_19_PREMIUM">;
export type EventPassTierSettings1Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_1_FREE">;
export type EventPassTierSettings1Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_1_PREMIUM">;
export type EventPassTierSettings200Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_200_FREE">;
export type EventPassTierSettings200Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_200_PREMIUM">;
export type EventPassTierSettings201Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_201_FREE">;
export type EventPassTierSettings201Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_201_PREMIUM">;
export type EventPassTierSettings202Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_202_FREE">;
export type EventPassTierSettings202Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_202_PREMIUM">;
export type EventPassTierSettings203Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_203_FREE">;
export type EventPassTierSettings203Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_203_PREMIUM">;
export type EventPassTierSettings204Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_204_FREE">;
export type EventPassTierSettings204Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_204_PREMIUM">;
export type EventPassTierSettings205Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_205_FREE">;
export type EventPassTierSettings205Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_205_PREMIUM">;
export type EventPassTierSettings206Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_206_FREE">;
export type EventPassTierSettings206Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_206_PREMIUM">;
export type EventPassTierSettings207Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_207_FREE">;
export type EventPassTierSettings207Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_207_PREMIUM">;
export type EventPassTierSettings208Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_208_FREE">;
export type EventPassTierSettings208Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_208_PREMIUM">;
export type EventPassTierSettings209Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_209_FREE">;
export type EventPassTierSettings209Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_209_PREMIUM">;
export type EventPassTierSettings20Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_20_FREE">;
export type EventPassTierSettings20Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_20_PREMIUM">;
export type EventPassTierSettings210Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_210_FREE">;
export type EventPassTierSettings210Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_210_PREMIUM">;
export type EventPassTierSettings21Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_21_FREE">;
export type EventPassTierSettings21Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_21_PREMIUM">;
export type EventPassTierSettings22Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_22_FREE">;
export type EventPassTierSettings22Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_22_PREMIUM">;
export type EventPassTierSettings23Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_23_FREE">;
export type EventPassTierSettings23Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_23_PREMIUM">;
export type EventPassTierSettings24Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_24_FREE">;
export type EventPassTierSettings24Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_24_PREMIUM">;
export type EventPassTierSettings25Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_25_FREE">;
export type EventPassTierSettings25Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_25_PREMIUM">;
export type EventPassTierSettings26Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_26_FREE">;
export type EventPassTierSettings26Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_26_PREMIUM">;
export type EventPassTierSettings27Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_27_FREE">;
export type EventPassTierSettings27Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_27_PREMIUM">;
export type EventPassTierSettings28Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_28_FREE">;
export type EventPassTierSettings28Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_28_PREMIUM">;
export type EventPassTierSettings29Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_29_FREE">;
export type EventPassTierSettings29Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_29_PREMIUM">;
export type EventPassTierSettings2Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_2_FREE">;
export type EventPassTierSettings2Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_2_PREMIUM">;
export type EventPassTierSettings30Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_30_FREE">;
export type EventPassTierSettings30Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_30_PREMIUM">;
export type EventPassTierSettings31Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_31_FREE">;
export type EventPassTierSettings31Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_31_PREMIUM">;
export type EventPassTierSettings32Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_32_FREE">;
export type EventPassTierSettings32Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_32_PREMIUM">;
export type EventPassTierSettings33Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_33_FREE">;
export type EventPassTierSettings33Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_33_PREMIUM">;
export type EventPassTierSettings34Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_34_FREE">;
export type EventPassTierSettings34Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_34_PREMIUM">;
export type EventPassTierSettings35Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_35_FREE">;
export type EventPassTierSettings35Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_35_PREMIUM">;
export type EventPassTierSettings36Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_36_FREE">;
export type EventPassTierSettings36Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_36_PREMIUM">;
export type EventPassTierSettings37Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_37_FREE">;
export type EventPassTierSettings37Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_37_PREMIUM">;
export type EventPassTierSettings38Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_38_FREE">;
export type EventPassTierSettings38Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_38_PREMIUM">;
export type EventPassTierSettings39Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_39_FREE">;
export type EventPassTierSettings39Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_39_PREMIUM">;
export type EventPassTierSettings3Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_3_FREE">;
export type EventPassTierSettings3Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_3_PREMIUM">;
export type EventPassTierSettings40Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_40_FREE">;
export type EventPassTierSettings40Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_40_PREMIUM">;
export type EventPassTierSettings41Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_41_FREE">;
export type EventPassTierSettings41Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_41_PREMIUM">;
export type EventPassTierSettings42Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_42_FREE">;
export type EventPassTierSettings42Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_42_PREMIUM">;
export type EventPassTierSettings43Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_43_FREE">;
export type EventPassTierSettings43Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_43_PREMIUM">;
export type EventPassTierSettings44Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_44_FREE">;
export type EventPassTierSettings44Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_44_PREMIUM">;
export type EventPassTierSettings45Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_45_FREE">;
export type EventPassTierSettings45Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_45_PREMIUM">;
export type EventPassTierSettings46Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_46_FREE">;
export type EventPassTierSettings46Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_46_PREMIUM">;
export type EventPassTierSettings47Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_47_FREE">;
export type EventPassTierSettings47Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_47_PREMIUM">;
export type EventPassTierSettings48Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_48_FREE">;
export type EventPassTierSettings48Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_48_PREMIUM">;
export type EventPassTierSettings49Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_49_FREE">;
export type EventPassTierSettings49Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_49_PREMIUM">;
export type EventPassTierSettings4Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_4_FREE">;
export type EventPassTierSettings4Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_4_PREMIUM">;
export type EventPassTierSettings50Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_50_FREE">;
export type EventPassTierSettings50Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_50_PREMIUM">;
export type EventPassTierSettings51Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_51_FREE">;
export type EventPassTierSettings51Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_51_PREMIUM">;
export type EventPassTierSettings52Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_52_FREE">;
export type EventPassTierSettings52Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_52_PREMIUM">;
export type EventPassTierSettings53Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_53_FREE">;
export type EventPassTierSettings53Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_53_PREMIUM">;
export type EventPassTierSettings54Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_54_FREE">;
export type EventPassTierSettings54Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_54_PREMIUM">;
export type EventPassTierSettings55Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_55_FREE">;
export type EventPassTierSettings55Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_55_PREMIUM">;
export type EventPassTierSettings56Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_56_FREE">;
export type EventPassTierSettings56Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_56_PREMIUM">;
export type EventPassTierSettings57Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_57_FREE">;
export type EventPassTierSettings57Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_57_PREMIUM">;
export type EventPassTierSettings58Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_58_FREE">;
export type EventPassTierSettings58Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_58_PREMIUM">;
export type EventPassTierSettings59Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_59_FREE">;
export type EventPassTierSettings59Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_59_PREMIUM">;
export type EventPassTierSettings5Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_5_FREE">;
export type EventPassTierSettings5Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_5_PREMIUM">;
export type EventPassTierSettings60Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_60_FREE">;
export type EventPassTierSettings60Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_60_PREMIUM">;
export type EventPassTierSettings61Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_61_FREE">;
export type EventPassTierSettings61Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_61_PREMIUM">;
export type EventPassTierSettings62Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_62_FREE">;
export type EventPassTierSettings62Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_62_PREMIUM">;
export type EventPassTierSettings63Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_63_FREE">;
export type EventPassTierSettings63Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_63_PREMIUM">;
export type EventPassTierSettings64Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_64_FREE">;
export type EventPassTierSettings64Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_64_PREMIUM">;
export type EventPassTierSettings65Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_65_FREE">;
export type EventPassTierSettings65Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_65_PREMIUM">;
export type EventPassTierSettings66Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_66_FREE">;
export type EventPassTierSettings66Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_66_PREMIUM">;
export type EventPassTierSettings67Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_67_FREE">;
export type EventPassTierSettings67Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_67_PREMIUM">;
export type EventPassTierSettings68Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_68_FREE">;
export type EventPassTierSettings68Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_68_PREMIUM">;
export type EventPassTierSettings69Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_69_FREE">;
export type EventPassTierSettings69Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_69_PREMIUM">;
export type EventPassTierSettings6Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_6_FREE">;
export type EventPassTierSettings6Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_6_PREMIUM">;
export type EventPassTierSettings70Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_70_FREE">;
export type EventPassTierSettings70Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_70_PREMIUM">;
export type EventPassTierSettings71Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_71_FREE">;
export type EventPassTierSettings71Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_71_PREMIUM">;
export type EventPassTierSettings72Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_72_FREE">;
export type EventPassTierSettings72Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_72_PREMIUM">;
export type EventPassTierSettings73Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_73_FREE">;
export type EventPassTierSettings73Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_73_PREMIUM">;
export type EventPassTierSettings74Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_74_FREE">;
export type EventPassTierSettings74Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_74_PREMIUM">;
export type EventPassTierSettings75Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_75_FREE">;
export type EventPassTierSettings75Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_75_PREMIUM">;
export type EventPassTierSettings76Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_76_FREE">;
export type EventPassTierSettings76Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_76_PREMIUM">;
export type EventPassTierSettings77Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_77_FREE">;
export type EventPassTierSettings77Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_77_PREMIUM">;
export type EventPassTierSettings78Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_78_FREE">;
export type EventPassTierSettings78Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_78_PREMIUM">;
export type EventPassTierSettings79Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_79_FREE">;
export type EventPassTierSettings79Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_79_PREMIUM">;
export type EventPassTierSettings7Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_7_FREE">;
export type EventPassTierSettings7Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_7_PREMIUM">;
export type EventPassTierSettings80Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_80_FREE">;
export type EventPassTierSettings80Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_80_PREMIUM">;
export type EventPassTierSettings81Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_81_FREE">;
export type EventPassTierSettings81Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_81_PREMIUM">;
export type EventPassTierSettings82Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_82_FREE">;
export type EventPassTierSettings82Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_82_PREMIUM">;
export type EventPassTierSettings83Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_83_FREE">;
export type EventPassTierSettings83Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_83_PREMIUM">;
export type EventPassTierSettings84Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_84_FREE">;
export type EventPassTierSettings84Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_84_PREMIUM">;
export type EventPassTierSettings85Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_85_FREE">;
export type EventPassTierSettings85Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_85_PREMIUM">;
export type EventPassTierSettings86Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_86_FREE">;
export type EventPassTierSettings86Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_86_PREMIUM">;
export type EventPassTierSettings87Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_87_FREE">;
export type EventPassTierSettings87Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_87_PREMIUM">;
export type EventPassTierSettings88Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_88_FREE">;
export type EventPassTierSettings88Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_88_PREMIUM">;
export type EventPassTierSettings89Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_89_FREE">;
export type EventPassTierSettings89Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_89_PREMIUM">;
export type EventPassTierSettings8Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_8_FREE">;
export type EventPassTierSettings8Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_8_PREMIUM">;
export type EventPassTierSettings90Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_90_FREE">;
export type EventPassTierSettings90Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_90_PREMIUM">;
export type EventPassTierSettings91Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_91_FREE">;
export type EventPassTierSettings91Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_91_PREMIUM">;
export type EventPassTierSettings92Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_92_FREE">;
export type EventPassTierSettings92Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_92_PREMIUM">;
export type EventPassTierSettings93Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_93_FREE">;
export type EventPassTierSettings93Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_93_PREMIUM">;
export type EventPassTierSettings94Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_94_FREE">;
export type EventPassTierSettings94Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_94_PREMIUM">;
export type EventPassTierSettings95Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_95_FREE">;
export type EventPassTierSettings95Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_95_PREMIUM">;
export type EventPassTierSettings96Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_96_FREE">;
export type EventPassTierSettings96Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_96_PREMIUM">;
export type EventPassTierSettings97Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_97_FREE">;
export type EventPassTierSettings97Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_97_PREMIUM">;
export type EventPassTierSettings98Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_98_FREE">;
export type EventPassTierSettings98Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_98_PREMIUM">;
export type EventPassTierSettings99Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_99_FREE">;
export type EventPassTierSettings99Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_99_PREMIUM">;
export type EventPassTierSettings9Free = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_9_FREE">;
export type EventPassTierSettings9Premium = EventPassTierSettings<"EVENT_PASS_APRIL2026_SEASON_9_PREMIUM">;

export type EventPassTierSettingsMasterfileEntry =
	| EventPassTierSettings100Free
	| EventPassTierSettings100Premium
	| EventPassTierSettings101Free
	| EventPassTierSettings101Premium
	| EventPassTierSettings102Free
	| EventPassTierSettings102Premium
	| EventPassTierSettings103Free
	| EventPassTierSettings103Premium
	| EventPassTierSettings104Free
	| EventPassTierSettings104Premium
	| EventPassTierSettings105Free
	| EventPassTierSettings105Premium
	| EventPassTierSettings106Free
	| EventPassTierSettings106Premium
	| EventPassTierSettings107Free
	| EventPassTierSettings107Premium
	| EventPassTierSettings108Free
	| EventPassTierSettings108Premium
	| EventPassTierSettings109Free
	| EventPassTierSettings109Premium
	| EventPassTierSettings10Free
	| EventPassTierSettings10Premium
	| EventPassTierSettings110Free
	| EventPassTierSettings110Premium
	| EventPassTierSettings111Free
	| EventPassTierSettings111Premium
	| EventPassTierSettings112Free
	| EventPassTierSettings112Premium
	| EventPassTierSettings113Free
	| EventPassTierSettings113Premium
	| EventPassTierSettings114Free
	| EventPassTierSettings114Premium
	| EventPassTierSettings115Free
	| EventPassTierSettings115Premium
	| EventPassTierSettings116Free
	| EventPassTierSettings116Premium
	| EventPassTierSettings117Free
	| EventPassTierSettings117Premium
	| EventPassTierSettings118Free
	| EventPassTierSettings118Premium
	| EventPassTierSettings119Free
	| EventPassTierSettings119Premium
	| EventPassTierSettings11Free
	| EventPassTierSettings11Premium
	| EventPassTierSettings120Free
	| EventPassTierSettings120Premium
	| EventPassTierSettings121Free
	| EventPassTierSettings121Premium
	| EventPassTierSettings122Free
	| EventPassTierSettings122Premium
	| EventPassTierSettings123Free
	| EventPassTierSettings123Premium
	| EventPassTierSettings124Free
	| EventPassTierSettings124Premium
	| EventPassTierSettings125Free
	| EventPassTierSettings125Premium
	| EventPassTierSettings126Free
	| EventPassTierSettings126Premium
	| EventPassTierSettings127Free
	| EventPassTierSettings127Premium
	| EventPassTierSettings128Free
	| EventPassTierSettings128Premium
	| EventPassTierSettings129Free
	| EventPassTierSettings129Premium
	| EventPassTierSettings12Free
	| EventPassTierSettings12Premium
	| EventPassTierSettings130Free
	| EventPassTierSettings130Premium
	| EventPassTierSettings131Free
	| EventPassTierSettings131Premium
	| EventPassTierSettings132Free
	| EventPassTierSettings132Premium
	| EventPassTierSettings133Free
	| EventPassTierSettings133Premium
	| EventPassTierSettings134Free
	| EventPassTierSettings134Premium
	| EventPassTierSettings135Free
	| EventPassTierSettings135Premium
	| EventPassTierSettings136Free
	| EventPassTierSettings136Premium
	| EventPassTierSettings137Free
	| EventPassTierSettings137Premium
	| EventPassTierSettings138Free
	| EventPassTierSettings138Premium
	| EventPassTierSettings139Free
	| EventPassTierSettings139Premium
	| EventPassTierSettings13Free
	| EventPassTierSettings13Premium
	| EventPassTierSettings140Free
	| EventPassTierSettings140Premium
	| EventPassTierSettings141Free
	| EventPassTierSettings141Premium
	| EventPassTierSettings142Free
	| EventPassTierSettings142Premium
	| EventPassTierSettings143Free
	| EventPassTierSettings143Premium
	| EventPassTierSettings144Free
	| EventPassTierSettings144Premium
	| EventPassTierSettings145Free
	| EventPassTierSettings145Premium
	| EventPassTierSettings146Free
	| EventPassTierSettings146Premium
	| EventPassTierSettings147Free
	| EventPassTierSettings147Premium
	| EventPassTierSettings148Free
	| EventPassTierSettings148Premium
	| EventPassTierSettings149Free
	| EventPassTierSettings149Premium
	| EventPassTierSettings14Free
	| EventPassTierSettings14Premium
	| EventPassTierSettings150Free
	| EventPassTierSettings150Premium
	| EventPassTierSettings151Free
	| EventPassTierSettings151Premium
	| EventPassTierSettings152Free
	| EventPassTierSettings152Premium
	| EventPassTierSettings153Free
	| EventPassTierSettings153Premium
	| EventPassTierSettings154Free
	| EventPassTierSettings154Premium
	| EventPassTierSettings155Free
	| EventPassTierSettings155Premium
	| EventPassTierSettings156Free
	| EventPassTierSettings156Premium
	| EventPassTierSettings157Free
	| EventPassTierSettings157Premium
	| EventPassTierSettings158Free
	| EventPassTierSettings158Premium
	| EventPassTierSettings159Free
	| EventPassTierSettings159Premium
	| EventPassTierSettings15Free
	| EventPassTierSettings15Premium
	| EventPassTierSettings160Free
	| EventPassTierSettings160Premium
	| EventPassTierSettings161Free
	| EventPassTierSettings161Premium
	| EventPassTierSettings162Free
	| EventPassTierSettings162Premium
	| EventPassTierSettings163Free
	| EventPassTierSettings163Premium
	| EventPassTierSettings164Free
	| EventPassTierSettings164Premium
	| EventPassTierSettings165Free
	| EventPassTierSettings165Premium
	| EventPassTierSettings166Free
	| EventPassTierSettings166Premium
	| EventPassTierSettings167Free
	| EventPassTierSettings167Premium
	| EventPassTierSettings168Free
	| EventPassTierSettings168Premium
	| EventPassTierSettings169Free
	| EventPassTierSettings169Premium
	| EventPassTierSettings16Free
	| EventPassTierSettings16Premium
	| EventPassTierSettings170Free
	| EventPassTierSettings170Premium
	| EventPassTierSettings171Free
	| EventPassTierSettings171Premium
	| EventPassTierSettings172Free
	| EventPassTierSettings172Premium
	| EventPassTierSettings173Free
	| EventPassTierSettings173Premium
	| EventPassTierSettings174Free
	| EventPassTierSettings174Premium
	| EventPassTierSettings175Free
	| EventPassTierSettings175Premium
	| EventPassTierSettings176Free
	| EventPassTierSettings176Premium
	| EventPassTierSettings177Free
	| EventPassTierSettings177Premium
	| EventPassTierSettings178Free
	| EventPassTierSettings178Premium
	| EventPassTierSettings179Free
	| EventPassTierSettings179Premium
	| EventPassTierSettings17Free
	| EventPassTierSettings17Premium
	| EventPassTierSettings180Free
	| EventPassTierSettings180Premium
	| EventPassTierSettings181Free
	| EventPassTierSettings181Premium
	| EventPassTierSettings182Free
	| EventPassTierSettings182Premium
	| EventPassTierSettings183Free
	| EventPassTierSettings183Premium
	| EventPassTierSettings184Free
	| EventPassTierSettings184Premium
	| EventPassTierSettings185Free
	| EventPassTierSettings185Premium
	| EventPassTierSettings186Free
	| EventPassTierSettings186Premium
	| EventPassTierSettings187Free
	| EventPassTierSettings187Premium
	| EventPassTierSettings188Free
	| EventPassTierSettings188Premium
	| EventPassTierSettings189Free
	| EventPassTierSettings189Premium
	| EventPassTierSettings18Free
	| EventPassTierSettings18Premium
	| EventPassTierSettings190Free
	| EventPassTierSettings190Premium
	| EventPassTierSettings191Free
	| EventPassTierSettings191Premium
	| EventPassTierSettings192Free
	| EventPassTierSettings192Premium
	| EventPassTierSettings193Free
	| EventPassTierSettings193Premium
	| EventPassTierSettings194Free
	| EventPassTierSettings194Premium
	| EventPassTierSettings195Free
	| EventPassTierSettings195Premium
	| EventPassTierSettings196Free
	| EventPassTierSettings196Premium
	| EventPassTierSettings197Free
	| EventPassTierSettings197Premium
	| EventPassTierSettings198Free
	| EventPassTierSettings198Premium
	| EventPassTierSettings199Free
	| EventPassTierSettings199Premium
	| EventPassTierSettings19Free
	| EventPassTierSettings19Premium
	| EventPassTierSettings1Free
	| EventPassTierSettings1Premium
	| EventPassTierSettings200Free
	| EventPassTierSettings200Premium
	| EventPassTierSettings201Free
	| EventPassTierSettings201Premium
	| EventPassTierSettings202Free
	| EventPassTierSettings202Premium
	| EventPassTierSettings203Free
	| EventPassTierSettings203Premium
	| EventPassTierSettings204Free
	| EventPassTierSettings204Premium
	| EventPassTierSettings205Free
	| EventPassTierSettings205Premium
	| EventPassTierSettings206Free
	| EventPassTierSettings206Premium
	| EventPassTierSettings207Free
	| EventPassTierSettings207Premium
	| EventPassTierSettings208Free
	| EventPassTierSettings208Premium
	| EventPassTierSettings209Free
	| EventPassTierSettings209Premium
	| EventPassTierSettings20Free
	| EventPassTierSettings20Premium
	| EventPassTierSettings210Free
	| EventPassTierSettings210Premium
	| EventPassTierSettings21Free
	| EventPassTierSettings21Premium
	| EventPassTierSettings22Free
	| EventPassTierSettings22Premium
	| EventPassTierSettings23Free
	| EventPassTierSettings23Premium
	| EventPassTierSettings24Free
	| EventPassTierSettings24Premium
	| EventPassTierSettings25Free
	| EventPassTierSettings25Premium
	| EventPassTierSettings26Free
	| EventPassTierSettings26Premium
	| EventPassTierSettings27Free
	| EventPassTierSettings27Premium
	| EventPassTierSettings28Free
	| EventPassTierSettings28Premium
	| EventPassTierSettings29Free
	| EventPassTierSettings29Premium
	| EventPassTierSettings2Free
	| EventPassTierSettings2Premium
	| EventPassTierSettings30Free
	| EventPassTierSettings30Premium
	| EventPassTierSettings31Free
	| EventPassTierSettings31Premium
	| EventPassTierSettings32Free
	| EventPassTierSettings32Premium
	| EventPassTierSettings33Free
	| EventPassTierSettings33Premium
	| EventPassTierSettings34Free
	| EventPassTierSettings34Premium
	| EventPassTierSettings35Free
	| EventPassTierSettings35Premium
	| EventPassTierSettings36Free
	| EventPassTierSettings36Premium
	| EventPassTierSettings37Free
	| EventPassTierSettings37Premium
	| EventPassTierSettings38Free
	| EventPassTierSettings38Premium
	| EventPassTierSettings39Free
	| EventPassTierSettings39Premium
	| EventPassTierSettings3Free
	| EventPassTierSettings3Premium
	| EventPassTierSettings40Free
	| EventPassTierSettings40Premium
	| EventPassTierSettings41Free
	| EventPassTierSettings41Premium
	| EventPassTierSettings42Free
	| EventPassTierSettings42Premium
	| EventPassTierSettings43Free
	| EventPassTierSettings43Premium
	| EventPassTierSettings44Free
	| EventPassTierSettings44Premium
	| EventPassTierSettings45Free
	| EventPassTierSettings45Premium
	| EventPassTierSettings46Free
	| EventPassTierSettings46Premium
	| EventPassTierSettings47Free
	| EventPassTierSettings47Premium
	| EventPassTierSettings48Free
	| EventPassTierSettings48Premium
	| EventPassTierSettings49Free
	| EventPassTierSettings49Premium
	| EventPassTierSettings4Free
	| EventPassTierSettings4Premium
	| EventPassTierSettings50Free
	| EventPassTierSettings50Premium
	| EventPassTierSettings51Free
	| EventPassTierSettings51Premium
	| EventPassTierSettings52Free
	| EventPassTierSettings52Premium
	| EventPassTierSettings53Free
	| EventPassTierSettings53Premium
	| EventPassTierSettings54Free
	| EventPassTierSettings54Premium
	| EventPassTierSettings55Free
	| EventPassTierSettings55Premium
	| EventPassTierSettings56Free
	| EventPassTierSettings56Premium
	| EventPassTierSettings57Free
	| EventPassTierSettings57Premium
	| EventPassTierSettings58Free
	| EventPassTierSettings58Premium
	| EventPassTierSettings59Free
	| EventPassTierSettings59Premium
	| EventPassTierSettings5Free
	| EventPassTierSettings5Premium
	| EventPassTierSettings60Free
	| EventPassTierSettings60Premium
	| EventPassTierSettings61Free
	| EventPassTierSettings61Premium
	| EventPassTierSettings62Free
	| EventPassTierSettings62Premium
	| EventPassTierSettings63Free
	| EventPassTierSettings63Premium
	| EventPassTierSettings64Free
	| EventPassTierSettings64Premium
	| EventPassTierSettings65Free
	| EventPassTierSettings65Premium
	| EventPassTierSettings66Free
	| EventPassTierSettings66Premium
	| EventPassTierSettings67Free
	| EventPassTierSettings67Premium
	| EventPassTierSettings68Free
	| EventPassTierSettings68Premium
	| EventPassTierSettings69Free
	| EventPassTierSettings69Premium
	| EventPassTierSettings6Free
	| EventPassTierSettings6Premium
	| EventPassTierSettings70Free
	| EventPassTierSettings70Premium
	| EventPassTierSettings71Free
	| EventPassTierSettings71Premium
	| EventPassTierSettings72Free
	| EventPassTierSettings72Premium
	| EventPassTierSettings73Free
	| EventPassTierSettings73Premium
	| EventPassTierSettings74Free
	| EventPassTierSettings74Premium
	| EventPassTierSettings75Free
	| EventPassTierSettings75Premium
	| EventPassTierSettings76Free
	| EventPassTierSettings76Premium
	| EventPassTierSettings77Free
	| EventPassTierSettings77Premium
	| EventPassTierSettings78Free
	| EventPassTierSettings78Premium
	| EventPassTierSettings79Free
	| EventPassTierSettings79Premium
	| EventPassTierSettings7Free
	| EventPassTierSettings7Premium
	| EventPassTierSettings80Free
	| EventPassTierSettings80Premium
	| EventPassTierSettings81Free
	| EventPassTierSettings81Premium
	| EventPassTierSettings82Free
	| EventPassTierSettings82Premium
	| EventPassTierSettings83Free
	| EventPassTierSettings83Premium
	| EventPassTierSettings84Free
	| EventPassTierSettings84Premium
	| EventPassTierSettings85Free
	| EventPassTierSettings85Premium
	| EventPassTierSettings86Free
	| EventPassTierSettings86Premium
	| EventPassTierSettings87Free
	| EventPassTierSettings87Premium
	| EventPassTierSettings88Free
	| EventPassTierSettings88Premium
	| EventPassTierSettings89Free
	| EventPassTierSettings89Premium
	| EventPassTierSettings8Free
	| EventPassTierSettings8Premium
	| EventPassTierSettings90Free
	| EventPassTierSettings90Premium
	| EventPassTierSettings91Free
	| EventPassTierSettings91Premium
	| EventPassTierSettings92Free
	| EventPassTierSettings92Premium
	| EventPassTierSettings93Free
	| EventPassTierSettings93Premium
	| EventPassTierSettings94Free
	| EventPassTierSettings94Premium
	| EventPassTierSettings95Free
	| EventPassTierSettings95Premium
	| EventPassTierSettings96Free
	| EventPassTierSettings96Premium
	| EventPassTierSettings97Free
	| EventPassTierSettings97Premium
	| EventPassTierSettings98Free
	| EventPassTierSettings98Premium
	| EventPassTierSettings99Free
	| EventPassTierSettings99Premium
	| EventPassTierSettings9Free
	| EventPassTierSettings9Premium;

export type EventPassTierSettingsTemplateID = EventPassTierSettingsMasterfileEntry["templateId"];
