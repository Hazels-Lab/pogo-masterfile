// Generated from Pokémon GO masterfile — Singletons entries (no shared discriminator).

export interface AccessibilitySettings {
	templateId: "ACCESSIBILITY_CLIENT_SETTINGS";
	data: {
		templateId: "ACCESSIBILITY_CLIENT_SETTINGS";
		accessibilitySettings: {
			enabled: true;
			pluginEnabled: true;
		};
	};
}

export interface AdditiveSceneSettings {
	templateId: "ADDITIVE_SCENE_SETTINGS";
	data: {
		templateId: "ADDITIVE_SCENE_SETTINGS";
		additiveSceneSettings: {
			enabled: true;
		};
	};
}

export interface AddressablePokemonSettings {
	templateId: "ADDRESSABLE_POKEMON_SETTINGS";
	data: {
		templateId: "ADDRESSABLE_POKEMON_SETTINGS";
		addressablePokemonSettings: {
			addressablePokemonIds: ["BULBASAUR", "SQUIRTLE", "KAKUNA", "PIKACHU", "PONYTA", "ZIGZAGOON", "GARDEVOIR", "FLYGON", "MELOETTA"];
		};
	};
}

export interface AddressBookImportSettings {
	templateId: "ADDRESS_BOOK_IMPORT_SETTINGS";
	data: {
		templateId: "ADDRESS_BOOK_IMPORT_SETTINGS";
		addressBookImportSettings: {
			isEnabled: true;
			onboardingScreenLevel: 4;
			repromptOnboardingForV1: true;
			showOptOutCheckbox: true;
		};
	};
}

export interface AdvancedSettings {
	templateId: "ADVANCED_SETTINGS";
	data: {
		templateId: "ADVANCED_SETTINGS";
		advancedSettings: {
			downloadAllAssetsEnabled: true;
		};
	};
}

export interface ArTelemetrySettings {
	templateId: "AR_TELEMETRY_SETTINGS";
	data: {
		templateId: "AR_TELEMETRY_SETTINGS";
		arTelemetrySettings: {
			batterySamplingIntervalMs: 10000;
			enableArdkTelemetry: true;
			framerateSamplingIntervalMs: 10000;
			measureBattery: true;
			measureFramerate: true;
			percentageSessionsToSample: 1;
		};
	};
}

export interface BackgroundModeSettings {
	templateId: "BACKGROUND_MODE_SETTINGS";
	data: {
		templateId: "BACKGROUND_MODE_SETTINGS";
		backgroundModeSettings: {
			weeklyFitnessGoalLevel1DistanceKm: 5;
			weeklyFitnessGoalLevel2DistanceKm: 25;
			weeklyFitnessGoalLevel3DistanceKm: 50;
			weeklyFitnessGoalLevel4DistanceKm: 100;
			weeklyFitnessGoalReminderKm: 40;
		};
	};
}

export interface BattleAnimationSettings {
	templateId: "VNEXT_ANIMATION_CONFIGURATION";
	data: {
		templateId: "VNEXT_ANIMATION_CONFIGURATION";
		battleAnimationSettings: {
			combatAnimationConfiguration: {
				fastAttackSettings: object;
				projectedHealthAnimationDurationSeconds: 0.09;
				uiCameraAnimationSettings: {
					transitionInDurationSeconds: 0.06;
					transitionInterimDelaySeconds: 0.001;
					transitionOutDurationSeconds: 0.15;
				};
			};
			maxBattleAnimationConfiguration: {
				fastAttackSettings: {
					crossFadeDurationSeconds: 0.1;
					normalizedStartOffset: 0.2;
				};
			};
			raidsAnimationConfiguration: {
				fastAttackSettings: {
					crossFadeDurationSeconds: 0.1;
					normalizedStartOffset: 0.2;
				};
			};
		};
	};
}

export interface BattleHubBadgeSettings {
	templateId: "BATTLE_HUB_BADGE_SETTINGS";
	data: {
		templateId: "BATTLE_HUB_BADGE_SETTINGS";
		battleHubBadgeSettings: {
			combatHubDisplayedBadges: [
				"BADGE_GREAT_LEAGUE",
				"BADGE_ULTRA_LEAGUE",
				"BADGE_MASTER_LEAGUE",
				"BADGE_BATTLE_TRAINING_WON",
				"BADGE_ROCKET_GRUNTS_DEFEATED",
			];
		};
	};
}

export interface BattleHubOrderSettings {
	templateId: "BATTLE_HUB_ORDER_SETTINGS";
	data: {
		templateId: "BATTLE_HUB_ORDER_SETTINGS";
		battleHubOrderSettings: {
			section: [
				{
					mainSection: "SECTION_VS_SEEKER";
					subsection: ["SUBSECTION_VS_CHARGING", "SUBSECTION_VS_FREE", "SUBSECTION_VS_PREMIUM"];
				},
			];
			sectionGroup: [
				{
					section: ["SECTION_VS_SEEKER", "SECTION_CURR_SEASON", "SECTION_LAST_SEASON"];
				},
				{
					section: ["SECTION_QR_CODE"];
				},
				{
					section: ["SECTION_TEAM_LEADERS"];
				},
			];
		};
	};
}

export interface BattleInputBufferSettings {
	templateId: "DEFAULT_BATTLE_INPUT_BUFFER_SETTINGS";
	data: {
		templateId: "DEFAULT_BATTLE_INPUT_BUFFER_SETTINGS";
		battleInputBufferSettings: {
			breadInputBufferPriorityList: {
				bufferBlockingEventTypeList: ["CHARGE_ATTACK", "SWAP_POKEMON"];
				eventPriority: ["DODGE", "SWAP_POKEMON"];
				inputBlockExceptionList: [
					{
						allowedBufferedActions: ["DODGE"];
						currentAction: "CHARGE_ATTACK";
					},
				];
				priorityEventTypeList: ["DODGE", "SWAP_POKEMON", "CHARGE_ATTACK"];
			};
			combatInputBufferPriorityList: {
				bufferBlockingEventTypeList: ["CHARGE_ATTACK", "SWAP_POKEMON"];
				eventPriority: ["SWAP_POKEMON"];
				priorityEventTypeList: ["SWAP_POKEMON", "CHARGE_ATTACK"];
			};
			raidsInputBufferPriorityList: {
				bufferBlockingEventTypeList: ["CHARGE_ATTACK"];
				eventPriority: ["ACTOR_ABILITY", "ITEM", "DODGE", "SWAP_POKEMON"];
				inputBlockExceptionList: [
					{
						allowedBufferedActions: ["DODGE", "SWAP_POKEMON"];
						currentAction: "CHARGE_ATTACK";
					},
				];
				priorityEventTypeList: ["ACTOR_ABILITY", "ITEM", "DODGE", "SWAP_POKEMON", "CHARGE_ATTACK"];
			};
		};
	};
}

export interface BattlePartySettings {
	templateId: "BATTLE_PARTY_SETTINGS";
	data: {
		templateId: "BATTLE_PARTY_SETTINGS";
		battlePartySettings: {
			enableBattlePartySaving: true;
			maxBattleParties: 10;
			overallPartiesCap: 40;
		};
	};
}

export interface BattleSettings {
	templateId: "BATTLE_SETTINGS";
	data: {
		templateId: "BATTLE_SETTINGS";
		battleSettings: {
			attackServerInterval: 5;
			bonusTimePerAllySeconds: 10;
			bossEnergyRegenerationPerHealthLost: 0.5;
			dodgeDamageReductionPercent: 0.75;
			dodgeDurationMs: 500;
			enemyAttackInterval: 1.5;
			energyDeltaPerHealthLost: 0.5;
			maximumAttackersPerBattle: 20;
			maximumEnergy: 100;
			minimumPlayerLevel: 5;
			minimumRaidPlayerLevel: 5;
			purifiedPokemonAttackMultiplierVsShadow: 1;
			retargetSeconds: 0.5;
			roundDurationSeconds: 99;
			sameTypeAttackBonusMultiplier: 1.2;
			shadowPokemonAttackBonusMultiplier: 1.2;
			shadowPokemonDefenseBonusMultiplier: 0.8333333;
			swapDurationMs: 1000;
		};
	};
}

export interface BattleVisualSettings {
	templateId: "BATTLE_VISUAL_SETTINGS";
	data: {
		templateId: "BATTLE_VISUAL_SETTINGS";
		battleVisualSettings: {
			bannerTextureAsset: "tx_Stadium_Banner";
			crowdTextureAsset: "tx_Stadium_Crowd";
			enhancementsEnabled: true;
		};
	};
}

export interface BestFriendsPlusSettings {
	templateId: "BEST_FRIENDS_PLUS_SETTINGS";
	data: {
		templateId: "BEST_FRIENDS_PLUS_SETTINGS";
		bestFriendsPlusSettings: {
			enabled: true;
			tutorialTimeCutoff: "1769905534000";
		};
	};
}

export interface BreadBattleClientSettings {
	templateId: "BREAD_BATTLE_CLIENT_SETTINGS";
	data: {
		templateId: "BREAD_BATTLE_CLIENT_SETTINGS";
		breadBattleClientSettings: {
			breadBattleMinPlayerLevel: 13;
			canInviteFriendsInPerson: true;
			canInviteFriendsRemotely: true;
			fetchProfileFromSocialEnabled: true;
			friendInviteCutoffTimeSec: 20;
			inviteCooldownDurationMillis: "30000";
			maxNumFriendInvites: 10;
			maxNumFriendInvitesPerAction: 3;
			maxNumFriendInvitesToBreadDoughLobbyPerAction: 10;
			maxPlayersPerBreadDoughLobby: 100;
			maxPlayersPerBreadLobby: 4;
			maxPlayersToPrepareBreadDoughLobby: 98;
			maxRemoteBreadBattlePassesAllowed: 10;
			maxRemotePlayersPerBreadDoughLobby: 100;
			maxRemotePlayersPerBreadLobby: 4;
			minPlayersToPrepareBreadLobby: 1;
			prepareBreadLobbyCutoffMs: 15000;
			prepareBreadLobbyEnabled: true;
			prepareBreadLobbySoloMs: 80000;
			remoteBreadBattleEnabled: true;
			remoteBreadBattleMinPlayerLevel: 13;
			rvnVersion: 1;
		};
	};
}

export interface BreadLobbyCounterSettings {
	templateId: "BREAD_LOBBY_COUNTER_SETTINGS";
	data: {
		templateId: "BREAD_LOBBY_COUNTER_SETTINGS";
		breadLobbyCounterSettings: {
			breadDoughLobbyMaxCountToUpdate: 100;
			publishCutoffTimeMs: "20000";
			showCounterRadiusMeters: 709;
			subscribeS2Level: 13;
			subscriptionNamespace: "pgorelease/BREAD_RAID_LOBBY_COUNT";
		};
	};
}

export interface BreadLobbyUpdateSettings {
	templateId: "BREAD_LOBBY_UPDATE_SETTINGS";
	data: {
		templateId: "BREAD_LOBBY_UPDATE_SETTINGS";
		breadLobbyUpdateSettings: {
			joinPublishCutoffTimeMs: "15000";
			serverPublishRateLimitIntervalMs: "1000";
		};
	};
}

export interface BreadPokemonScalingSettings {
	templateId: "BREAD_POKEMON_SCALING_SETTINGS";
	data: {
		templateId: "BREAD_POKEMON_SCALING_SETTINGS";
		breadPokemonScalingSettings: {
			visualSettings: [
				{
					pokemonFormData: [
						{
							pokemonForm: "BULBASAUR_NORMAL";
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -5;
									};
									breadBattleVisualData: {
										scale: 38.08;
									};
									breadEncounterVisiualData: {
										cameraDistance: 25;
										maxReticleSize: 14;
										scale: 19.04;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 2.59;
									};
								},
							];
						},
					];
					pokemonId: "BULBASAUR";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "IVYSAUR_NORMAL";
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -5;
									};
									breadBattleVisualData: {
										scale: 27.42;
									};
									breadEncounterVisiualData: {
										cameraDistance: 27.15;
										maxReticleSize: 14;
										scale: 13.71;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.86;
									};
								},
							];
						},
					];
					pokemonId: "IVYSAUR";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "VENUSAUR_NORMAL";
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: 5;
										yOffset: 5;
									};
									breadBattleVisualData: {
										scale: 19.04;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30.72;
										maxReticleSize: 14;
										scale: 9.52;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.3;
									};
								},
								{
									breadBattleTrainerVisualData: {
										xOffset: 5;
										yOffset: 5;
									};
									breadBattleVisualData: {
										scale: 21.47;
										yOffset: -7;
									};
									breadEncounterVisiualData: {
										cameraDistance: 32.3;
										maxReticleSize: 14;
										scale: 10.74;
									};
									breadMode: "BREAD_DOUGH_MODE";
									breadStationVisualData: {
										scale: 1.46;
									};
								},
							];
						},
					];
					pokemonId: "VENUSAUR";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "CHARMANDER_NORMAL";
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -10;
									};
									breadBattleVisualData: {
										scale: 44.43;
									};
									breadEncounterVisiualData: {
										cameraDistance: 25;
										maxReticleSize: 14;
										scale: 22.22;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 3.02;
									};
								},
							];
						},
					];
					pokemonId: "CHARMANDER";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "CHARMELEON_NORMAL";
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -5;
									};
									breadBattleVisualData: {
										scale: 33.27;
									};
									breadEncounterVisiualData: {
										cameraDistance: 26.45;
										maxReticleSize: 14;
										scale: 16.64;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 2.26;
									};
								},
							];
						},
					];
					pokemonId: "CHARMELEON";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "CHARIZARD_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 22.28;
									};
									breadEncounterVisiualData: {
										cameraDistance: 31.65;
										maxReticleSize: 14;
										scale: 11.14;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.52;
									};
								},
								{
									breadBattleTrainerVisualData: {
										xOffset: 1.5;
									};
									breadBattleVisualData: {
										scale: 25.06;
									};
									breadEncounterVisiualData: {
										cameraDistance: 29.9;
										maxReticleSize: 18;
										scale: 12.53;
									};
									breadMode: "BREAD_DOUGH_MODE";
									breadStationVisualData: {
										scale: 1.7;
									};
								},
							];
						},
					];
					pokemonId: "CHARIZARD";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "SQUIRTLE_NORMAL";
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -5;
									};
									breadBattleVisualData: {
										scale: 52.6;
									};
									breadEncounterVisiualData: {
										cameraDistance: 25;
										maxReticleSize: 14;
										scale: 26.3;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 3.58;
									};
								},
							];
						},
					];
					pokemonId: "SQUIRTLE";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "WARTORTLE_NORMAL";
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -3;
									};
									breadBattleVisualData: {
										scale: 34.27;
									};
									breadEncounterVisiualData: {
										cameraDistance: 27.32;
										maxReticleSize: 14;
										scale: 17.14;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 2.33;
									};
								},
							];
						},
					];
					pokemonId: "WARTORTLE";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "BLASTOISE_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 30.58;
									};
									breadEncounterVisiualData: {
										cameraDistance: 34;
										maxReticleSize: 14;
										scale: 15.29;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 2.08;
									};
								},
								{
									breadBattleTrainerVisualData: {
										xOffset: 5;
									};
									breadBattleVisualData: {
										scale: 20.32;
										xOffset: 9.6;
									};
									breadEncounterVisiualData: {
										cameraDistance: 39.2;
										maxReticleSize: 22;
										scale: 10.16;
									};
									breadMode: "BREAD_DOUGH_MODE";
									breadStationVisualData: {
										scale: 1.38;
										xOffset: 0.5;
									};
								},
							];
						},
					];
					pokemonId: "BLASTOISE";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "MACHOP_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 40.46;
									};
									breadEncounterVisiualData: {
										cameraDistance: 28.5;
										maxReticleSize: 14;
										scale: 20.23;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 2.75;
									};
								},
							];
						},
					];
					pokemonId: "MACHOP";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "MACHOKE_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 25.844;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 12.922;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.75;
									};
								},
							];
						},
					];
					pokemonId: "MACHOKE";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "MACHAMP_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 24.122;
									};
									breadEncounterVisiualData: {
										cameraDistance: 32.5;
										maxReticleSize: 14;
										scale: 12.06;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.64;
									};
								},
							];
						},
					];
					pokemonId: "MACHAMP";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "GASTLY_NORMAL";
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -5;
									};
									breadBattleVisualData: {
										scale: 29.38;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 14.69;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 2;
									};
								},
							];
						},
					];
					pokemonId: "GASTLY";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "HAUNTER_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 19.51;
									};
									breadEncounterVisiualData: {
										cameraDistance: 38.74;
										maxReticleSize: 14;
										scale: 9.76;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.33;
									};
								},
							];
						},
					];
					pokemonId: "HAUNTER";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "GENGAR_NORMAL";
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -5;
									};
									breadBattleVisualData: {
										scale: 20.68;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 10.34;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.41;
									};
								},
							];
						},
					];
					pokemonId: "GENGAR";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "GENGAR_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 21.33;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 10.67;
									};
									breadMode: "BREAD_DOUGH_MODE";
									breadStationVisualData: {
										scale: 1.45;
									};
								},
							];
						},
					];
					pokemonId: "GENGAR";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "KRABBY_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 37.55;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 18.775;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 2.55;
									};
								},
							];
						},
					];
					pokemonId: "KRABBY";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "KINGLER_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 25;
									};
									breadEncounterVisiualData: {
										cameraDistance: 35;
										maxReticleSize: 14;
										scale: 12.5;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.7;
									};
								},
							];
						},
					];
					pokemonId: "KINGLER";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "LAPRAS_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 26;
									};
									breadEncounterVisiualData: {
										cameraDistance: 35;
										maxReticleSize: 14;
										scale: 13;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 10;
									};
								},
							];
						},
					];
					pokemonId: "LAPRAS";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "LAPRAS_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 14.94;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 7.47;
									};
									breadMode: "BREAD_DOUGH_MODE";
									breadStationVisualData: {
										scale: 1.02;
									};
								},
							];
						},
					];
					pokemonId: "LAPRAS";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "BELDUM_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 53.06;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 26.53;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 3.61;
									};
								},
							];
						},
					];
					pokemonId: "BELDUM";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "METANG_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 23.65;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 11.83;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.61;
									};
								},
							];
						},
					];
					pokemonId: "METANG";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "METAGROSS_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 14.64;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 7.32;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1;
									};
								},
							];
						},
					];
					pokemonId: "METAGROSS";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "DRILBUR_NORMAL";
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -5;
									};
									breadBattleVisualData: {
										scale: 78.4;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 39.2;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 5.33;
									};
								},
							];
						},
					];
					pokemonId: "DRILBUR";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "EXCADRILL_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 48.31;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 24.16;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 3.29;
									};
								},
							];
						},
					];
					pokemonId: "EXCADRILL";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleVisualData: {
										scale: 29.28;
									};
									breadEncounterVisiualData: {
										cameraDistance: 35;
										maxReticleSize: 14;
										scale: 14.64;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.35;
									};
								},
							];
						},
					];
					pokemonId: "CRYOGONAL";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -5;
									};
									breadBattleVisualData: {
										scale: 78.4;
									};
									breadEncounterVisiualData: {
										cameraDistance: 25.27;
										maxReticleSize: 14;
										scale: 39.2;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 5.33;
									};
								},
							];
						},
					];
					pokemonId: "GROOKEY";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -5;
									};
									breadBattleVisualData: {
										scale: 35.36;
									};
									breadEncounterVisiualData: {
										cameraDistance: 27.24;
										maxReticleSize: 14;
										scale: 17.68;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 2.41;
									};
								},
							];
						},
					];
					pokemonId: "THWACKEY";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleVisualData: {
										scale: 18.13;
										yOffset: -5;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 9.07;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.23;
									};
								},
							];
						},
					];
					pokemonId: "RILLABOOM";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleVisualData: {
										scale: 21.33;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 10.67;
									};
									breadMode: "BREAD_DOUGH_MODE";
									breadStationVisualData: {
										scale: 1.45;
									};
								},
							];
						},
					];
					pokemonId: "RILLABOOM";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -7.5;
									};
									breadBattleVisualData: {
										scale: 78.4;
									};
									breadEncounterVisiualData: {
										cameraDistance: 26.5;
										maxReticleSize: 14;
										scale: 39.2;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 5.33;
									};
								},
							];
						},
					];
					pokemonId: "SCORBUNNY";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -10;
									};
									breadBattleVisualData: {
										scale: 44.42;
									};
									breadEncounterVisiualData: {
										cameraDistance: 24.94;
										maxReticleSize: 14;
										scale: 22.21;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 3.02;
									};
								},
							];
						},
					];
					pokemonId: "RABOOT";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -5;
									};
									breadBattleVisualData: {
										scale: 25.84;
									};
									breadEncounterVisiualData: {
										cameraDistance: 26.5;
										maxReticleSize: 14;
										scale: 12.92;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.76;
									};
								},
							];
						},
					];
					pokemonId: "CINDERACE";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -10;
									};
									breadBattleVisualData: {
										scale: 30.86;
									};
									breadEncounterVisiualData: {
										cameraDistance: 26.5;
										maxReticleSize: 14;
										scale: 15.43;
									};
									breadMode: "BREAD_DOUGH_MODE";
									breadStationVisualData: {
										scale: 2.1;
									};
								},
							];
						},
					];
					pokemonId: "CINDERACE";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -10;
									};
									breadBattleVisualData: {
										scale: 78.4;
									};
									breadEncounterVisiualData: {
										cameraDistance: 22.23;
										maxReticleSize: 14;
										scale: 39.2;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 5.33;
									};
								},
							];
						},
					];
					pokemonId: "SOBBLE";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -5;
									};
									breadBattleVisualData: {
										scale: 38.08;
									};
									breadEncounterVisiualData: {
										cameraDistance: 25.1;
										maxReticleSize: 14;
										scale: 19.4;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 2.59;
									};
								},
							];
						},
					];
					pokemonId: "DRIZZILE";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -10;
									};
									breadBattleVisualData: {
										scale: 19.04;
									};
									breadEncounterVisiualData: {
										cameraDistance: 24.78;
										maxReticleSize: 14;
										scale: 9.52;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.3;
									};
								},
							];
						},
					];
					pokemonId: "INTELEON";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleVisualData: {
										scale: 33.68;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 16.84;
									};
									breadMode: "BREAD_DOUGH_MODE";
									breadStationVisualData: {
										scale: 2.29;
									};
								},
							];
						},
					];
					pokemonId: "INTELEON";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -5;
									};
									breadBattleVisualData: {
										scale: 78.4;
									};
									breadEncounterVisiualData: {
										cameraDistance: 27.48;
										maxReticleSize: 14;
										scale: 39.2;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 5.33;
									};
								},
							];
						},
					];
					pokemonId: "SKWOVET";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -5;
									};
									breadBattleVisualData: {
										scale: 50.77;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30.72;
										maxReticleSize: 14;
										scale: 25.39;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 3.45;
									};
								},
							];
						},
					];
					pokemonId: "GREEDENT";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleVisualData: {
										scale: 44.42;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30.72;
										maxReticleSize: 14;
										scale: 22.21;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 3.02;
									};
								},
							];
						},
					];
					pokemonId: "WOOLOO";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleVisualData: {
										scale: 26.36;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30.72;
										maxReticleSize: 14;
										scale: 13.18;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.79;
									};
								},
							];
						},
					];
					pokemonId: "DUBWOOL";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -10;
									};
									breadBattleVisualData: {
										scale: 62.72;
									};
									breadEncounterVisiualData: {
										cameraDistance: 24.9;
										maxReticleSize: 14;
										scale: 31.36;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 4.27;
									};
								},
							];
						},
					];
					pokemonId: "TOXEL";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "TOXTRICITY_LOW_KEY";
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -10;
									};
									breadBattleVisualData: {
										scale: 22.61;
									};
									breadEncounterVisiualData: {
										cameraDistance: 22.7;
										maxReticleSize: 14;
										scale: 11.31;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.54;
									};
								},
							];
						},
					];
					pokemonId: "TOXTRICITY";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "TOXTRICITY_AMPED";
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: -10;
									};
									breadBattleVisualData: {
										scale: 22.61;
									};
									breadEncounterVisiualData: {
										cameraDistance: 22.7;
										maxReticleSize: 14;
										scale: 11.31;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.54;
									};
								},
							];
						},
					];
					pokemonId: "TOXTRICITY";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "TOXTRICITY_LOW_KEY";
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: 5;
									};
									breadBattleVisualData: {
										scale: 24;
										yOffset: -5;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 12;
										scale: 12;
									};
									breadMode: "BREAD_DOUGH_MODE";
									breadStationVisualData: {
										scale: 1.63;
									};
								},
							];
						},
					];
					pokemonId: "TOXTRICITY";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "TOXTRICITY_AMPED";
							visualData: [
								{
									breadBattleTrainerVisualData: {
										xOffset: 5;
									};
									breadBattleVisualData: {
										scale: 24;
										yOffset: -5;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 12;
										scale: 12;
									};
									breadMode: "BREAD_DOUGH_MODE";
									breadStationVisualData: {
										scale: 1.63;
									};
								},
							];
						},
					];
					pokemonId: "TOXTRICITY";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleVisualData: {
										scale: 15.87;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 7.94;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.08;
									};
								},
							];
						},
					];
					pokemonId: "FALINKS";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "KINGLER_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 22.19;
									};
									breadEncounterVisiualData: {
										cameraDistance: 35;
										maxReticleSize: 14;
										scale: 11.1;
									};
									breadMode: "BREAD_DOUGH_MODE";
									breadStationVisualData: {
										scale: 1.51;
									};
								},
							];
						},
					];
					pokemonId: "KINGLER";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "DARUMAKA_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 42.5;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 21.25;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 3;
									};
								},
							];
						},
					];
					pokemonId: "DARUMAKA";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "DARMANITAN_STANDARD";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 27.48;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 13.74;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.9;
									};
								},
							];
						},
					];
					pokemonId: "DARMANITAN";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "PIDOVE_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 81.1;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 40.55;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 5.52;
									};
								},
							];
						},
					];
					pokemonId: "PIDOVE";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "TRANQUILL_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 38.26;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 19.13;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 2.6;
									};
								},
							];
						},
					];
					pokemonId: "TRANQUILL";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "UNFEZANT_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 31.15;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 15.58;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 2.12;
									};
								},
							];
						},
					];
					pokemonId: "UNFEZANT";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "ARTICUNO_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 17.23;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 8.62;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1;
									};
								},
							];
						},
					];
					pokemonId: "ARTICUNO";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "ZAPDOS_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 18.98;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 9.49;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1;
									};
								},
							];
						},
					];
					pokemonId: "ZAPDOS";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "MOLTRES_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 14.94;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 7.47;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 0.8;
									};
								},
							];
						},
					];
					pokemonId: "MOLTRES";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleVisualData: {
										scale: 40;
									};
									breadEncounterVisiualData: {
										cameraDistance: 26;
										maxReticleSize: 14;
										scale: 30;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 3.89;
									};
								},
							];
						},
					];
					pokemonId: "KUBFU";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "URSHIFU_RAPID_STRIKE";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 22.19;
									};
									breadEncounterVisiualData: {
										cameraDistance: 25;
										maxReticleSize: 14;
										scale: 8.9;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.65;
									};
								},
							];
						},
					];
					pokemonId: "URSHIFU";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "URSHIFU_SINGLE_STRIKE";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 22.19;
									};
									breadEncounterVisiualData: {
										cameraDistance: 25;
										maxReticleSize: 14;
										scale: 8.9;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.65;
									};
								},
							];
						},
					];
					pokemonId: "URSHIFU";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "RAIKOU_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 20.1;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 10.05;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1;
									};
								},
							];
						},
					];
					pokemonId: "RAIKOU";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "ENTEI_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 18.13;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 9.07;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1;
									};
								},
							];
						},
					];
					pokemonId: "ENTEI";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "SUICUNE_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 18.13;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 9.07;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1;
									};
								},
							];
						},
					];
					pokemonId: "SUICUNE";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleVisualData: {
										scale: 115.54;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 57.77;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 7.86;
									};
								},
							];
						},
					];
					pokemonId: "CATERPIE";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleVisualData: {
										scale: 38.08;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										scale: 19.04;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 2.59;
									};
								},
							];
						},
					];
					pokemonId: "METAPOD";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleVisualData: {
										scale: 36.08;
									};
									breadEncounterVisiualData: {
										cameraDistance: 30;
										maxReticleSize: 14;
										scale: 18.04;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 2.45;
									};
								},
							];
						},
					];
					pokemonId: "BUTTERFREE";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleVisualData: {
										scale: 31.15;
									};
									breadEncounterVisiualData: {
										cameraDistance: 32.5;
										maxReticleSize: 14;
										scale: 15.58;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 2.12;
									};
								},
							];
						},
					];
					pokemonId: "CHANSEY";
				},
				{
					pokemonFormData: [
						{
							visualData: [
								{
									breadBattleVisualData: {
										scale: 25;
									};
									breadEncounterVisiualData: {
										cameraDistance: 20;
										maxReticleSize: 14;
										scale: 8;
									};
									breadMode: "BREAD_MODE";
									breadStationVisualData: {
										scale: 1.69;
									};
								},
							];
						},
					];
					pokemonId: "PASSIMIAN";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "SNORLAX_NORMAL";
							visualData: [
								{
									breadBattleVisualData: {
										scale: 16.5;
									};
									breadEncounterVisiualData: {
										cameraDistance: 22.75;
										maxReticleSize: 14;
										scale: 5;
									};
									breadMode: "BREAD_DOUGH_MODE";
									breadStationVisualData: {
										scale: 1.1;
									};
								},
							];
						},
					];
					pokemonId: "SNORLAX";
				},
				{
					pokemonFormData: [
						{
							pokemonForm: "ETERNATUS_ETERNAMAX";
							visualData: [
								{
									breadBattleBossVisualData: {
										scale: 4.63;
										xOffset: 3.06;
										yOffset: 9.74;
									};
									breadMode: 4;
								},
							];
						},
					];
					pokemonId: "ETERNATUS";
				},
			];
		};
	};
}

export interface BreadSettings {
	templateId: "BREAD_SHARED_SETTINGS";
	data: {
		templateId: "BREAD_SHARED_SETTINGS";
		breadSettings: {
			allowedSourdoughPokemon: [
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["VENUSAUR_NORMAL"];
					pokemonId: "VENUSAUR";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["CHARIZARD_NORMAL"];
					pokemonId: "CHARIZARD";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["BLASTOISE_NORMAL"];
					pokemonId: "BLASTOISE";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["BUTTERFREE_NORMAL"];
					pokemonId: "BUTTERFREE";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["PIKACHU_NORMAL"];
					pokemonId: "PIKACHU";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["MEOWTH_NORMAL"];
					pokemonId: "MEOWTH";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["MACHAMP_NORMAL"];
					pokemonId: "MACHAMP";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["GENGAR_NORMAL"];
					pokemonId: "GENGAR";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["KINGLER_NORMAL"];
					pokemonId: "KINGLER";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["LAPRAS_NORMAL"];
					pokemonId: "LAPRAS";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["EEVEE_NORMAL"];
					pokemonId: "EEVEE";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["SNORLAX_NORMAL"];
					pokemonId: "SNORLAX";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["GARBODOR_NORMAL"];
					pokemonId: "GARBODOR";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["MELMETAL_NORMAL"];
					pokemonId: "MELMETAL";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "RILLABOOM";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "CINDERACE";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "INTELEON";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "CORVIKNIGHT";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "ORBEETLE";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "DREDNAW";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "COALOSSAL";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "FLAPPLE";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "APPLETUN";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "SANDACONDA";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["TOXTRICITY_LOW_KEY", "TOXTRICITY_AMPED"];
					pokemonId: "TOXTRICITY";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "CENTISKORCH";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "HATTERENE";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "GRIMMSNARL";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "ALCREMIE";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["FORM_UNSET"];
					pokemonId: "COPPERAJAH";
				},
				{
					breadMode: "BREAD_DOUGH_MODE";
					form: ["URSHIFU_SINGLE_STRIKE"];
					pokemonId: "URSHIFU";
				},
				{
					breadMode: "BREAD_DOUGH_MODE_2";
					form: ["URSHIFU_RAPID_STRIKE"];
					pokemonId: "URSHIFU";
				},
			];
			breadBattleAvailability: {
				breadBattleAvailabilityEndMinute: 1260;
				breadBattleAvailabilityStartMinute: 360;
			};
			maxRangeForNearbyStateMeters: 500;
			maxStationedPokemon: 40;
			maxStationedPokemonDisplayCount: 40;
			maxStationedPokemonPerPlayer: 10;
			minMsToReceiveReleaseStationRewards: "1";
			numStationedPokemonToReturn: 40;
			showTimerWhenFar: true;
			startOfDayOffsetDurationMs: "18000000";
			tutorialMaxBoostItemDurationS: 300;
		};
	};
}

export interface BuddyEncounterCameoSettings {
	templateId: "BUDDY_ENCOUNTER_CAMEO_SETTINGS";
	data: {
		templateId: "BUDDY_ENCOUNTER_CAMEO_SETTINGS";
		buddyEncounterCameoSettings: {
			buddyInvasionEncounterCameoChancePercent: 0.2;
			buddyQuestEncounterCameoChancePercent: 0.2;
			buddyRaidEncounterCameoChancePercent: 0.2;
			buddyWildEncounterCameoChancePercent: 0.2;
		};
	};
}

export interface BuddyHungerSettings {
	templateId: "BUDDY_HUNGER_SETTINGS";
	data: {
		templateId: "BUDDY_HUNGER_SETTINGS";
		buddyHungerSettings: {
			cooldownDurationMs: "3600000";
			decayDurationAfterFullMs: "86400000";
			decayPointsPerBucket: 2;
			millisecondsPerBucket: "3600000";
			numHungerPointsRequiredForFull: 6;
		};
	};
}

export interface BuddyInteractionSettings {
	templateId: "BUDDY_INTERACTION_SETTINGS";
	data: {
		templateId: "BUDDY_INTERACTION_SETTINGS";
		buddyInteractionSettings: {
			feedItemWhitelist: ["ITEM_RAZZ_BERRY", "ITEM_NANAB_BERRY", "ITEM_PINAP_BERRY", "ITEM_GOLDEN_RAZZ_BERRY", "ITEM_GOLDEN_PINAP_BERRY", "ITEM_POFFIN"];
		};
	};
}

export interface BuddySwapSettings {
	templateId: "BUDDY_SWAP_SETTINGS";
	data: {
		templateId: "BUDDY_SWAP_SETTINGS";
		buddySwapSettings: {
			enableQuickSwap: true;
			enableSwapFreeEvolution: true;
			maxSwapsPerDay: 20;
		};
	};
}

export interface BuddyWalkSettings {
	templateId: "BUDDY_WALK_SETTINGS";
	data: {
		templateId: "BUDDY_WALK_SETTINGS";
		buddyWalkSettings: {
			kmRequiredPerAffectionPoint: 2;
		};
	};
}

export interface BulkHealingSettings {
	templateId: "BULK_HEALING_SETTINGS";
	data: {
		templateId: "BULK_HEALING_SETTINGS";
		bulkHealingSettings: {
			enabled: true;
			maxPokemonsPerHeal: 50;
		};
	};
}

export interface ButterflyCollectorSettings {
	templateId: "BUTTERFLY_COLLECTOR_SETTINGS";
	data: {
		templateId: "BUTTERFLY_COLLECTOR_SETTINGS";
		butterflyCollectorSettings: {
			dailyProgressFromInventory: 3;
			enabled: true;
			region: [
				"VIVILLON_REGION_ARCHIPELAGO",
				"VIVILLON_REGION_CONTINENTAL",
				"VIVILLON_REGION_ELEGANT",
				"VIVILLON_REGION_GARDEN",
				"VIVILLON_REGION_HIGH_PLAINS",
				"VIVILLON_REGION_ICY_SNOW",
				"VIVILLON_REGION_JUNGLE",
				"VIVILLON_REGION_MARINE",
				"VIVILLON_REGION_MEADOW",
				"VIVILLON_REGION_MODERN",
				"VIVILLON_REGION_MONSOON",
				"VIVILLON_REGION_OCEAN",
				"VIVILLON_REGION_POLAR",
				"VIVILLON_REGION_RIVER",
				"VIVILLON_REGION_SANDSTORM",
				"VIVILLON_REGION_SAVANNA",
				"VIVILLON_REGION_SUN",
				"VIVILLON_REGION_TUNDRA",
			];
			version: 1;
		};
	};
}

export interface CampfireSettings {
	templateId: "CAMPFIRE_SETTINGS";
	data: {
		templateId: "CAMPFIRE_SETTINGS";
		campfireSettings: {
			arCatchCardEnabled: true;
			arCatchCardShareCampfireEnabled: true;
			campfireEnabled: true;
			catchCardAvailableSeconds: 1800;
			catchCardEnabled: true;
			catchCardShareCampfireEnabled: true;
			mapButtonsEnabled: true;
			meetupQueryTimerMs: "3600000";
			passwordlessLoginEnabled: true;
		};
	};
}

export interface CatchRadiusMultiplierSettings {
	templateId: "CATCH_RADIUS_MULTIPLIER_SETTINGS";
	data: {
		templateId: "CATCH_RADIUS_MULTIPLIER_SETTINGS";
		catchRadiusMultiplierSettings: {
			catchRadiusMultiplierSettingsEnabled: true;
		};
	};
}

export interface CombatCompetitiveSeasonSettings {
	templateId: "COMBAT_COMPETITIVE_SEASON_SETTINGS";
	data: {
		templateId: "COMBAT_COMPETITIVE_SEASON_SETTINGS";
		combatCompetitiveSeasonSettings: {
			rankingAdjustmentPercentage: 0.01;
			ratingAdjustmentPercentage: 0.9;
			seasonEndTimeTimestamp: [
				"1584129600000",
				"1584130832000",
				"1589227200000",
				"1595880000000",
				"1600113600000",
				"1604955600000",
				"1606770000000",
				"1614632400000",
				"1622491200000",
				"1630353600000",
				"1638219600000",
				"1646168400000",
				"1654113600000",
				"1662062400000",
				"1669928400000",
				"1677704400000",
				"1685649600000",
				"1693598400000",
				"1701464400000",
				"1709326800000",
				"1717272000000",
				"1725393600000",
				"1733259600000",
				"1741122000000",
				"1748980800000",
				"1756843200000",
				"1764709200000",
				"1772571600000",
				"1780430400000",
				"4070980800000",
			];
		};
	};
}

export interface CombatLeagueSettings {
	templateId: "COMBAT_LEAGUE_SETTINGS";
	data: {
		templateId: "COMBAT_LEAGUE_SETTINGS";
		combatLeagueSettings: {
			combatLeagueTemplateId: ["COMBAT_LEAGUE_DEFAULT_GREAT", "COMBAT_LEAGUE_DEFAULT_ULTRA", "COMBAT_LEAGUE_DEFAULT_MASTER"];
		};
	};
}

export interface CombatSettings {
	templateId: "COMBAT_SETTINGS";
	data: {
		templateId: "COMBAT_SETTINGS";
		combatSettings: {
			blockedFlyoutDurationTurns: 5;
			changePokemonDurationSeconds: 12;
			chargeAttackBonusMultiplier: 1.3;
			chargeScoreBase: 0.25;
			chargeScoreExcellent: 1;
			chargeScoreGreat: 0.75;
			chargeScoreNice: 0.5;
			clockSyncSettings: {
				enabled: true;
				syncAttemptCount: 10;
			};
			combatExperiment: [
				"FAST_MOVE_ALWAYS_LEAK",
				"MINIGAME_FAST_MOVE_CLEAR",
				"SWAP_FAST_MOVE_CLEAR",
				"DOWNSTREAM_REDUNDANCY",
				"DEFENSIVE_ACK_CHECK",
				"SERVER_FLY_IN_FLY_OUT",
				"CLIENT_REOBSERVER_COMBAT_STATE",
				"FAST_MOVE_FLY_IN_CLIP",
				"CLIENT_FAST_MOVE_FLY_IN_CLIP_FALL_BACK",
				"COMBAT_REWARDS_INVOKE",
				"CLIENT_SWAP_WIDGET_DISMISS",
				"CLIENT_COMBAT_NULL_RPC_GUARD",
				"SWAP_DELAY_TY_GREIL",
				17,
				18,
				19,
				20,
				22,
			];
			combatFeatureFlags: {
				realDeviceTimeEnabled: true;
			};
			defenderMinigameMultiplier: 1;
			defenseBonusMultiplier: 1;
			fastAttackBonusMultiplier: 1.3;
			flyinDurationTurns: 3;
			maxEnergy: 100;
			minigameBonusBaseMultiplier: 0.0001;
			minigameBonusVariableMultiplier: 1;
			minigameDurationSeconds: 7;
			minigameSubmitScoreDurationSeconds: 6.5;
			normalEffectiveFlyoutDurationTurns: 5;
			notVeryEffectiveFlyoutDurationTurns: 5;
			obCombatSettingsNotPushedBool2: true;
			purifiedPokemonAttackMultiplierVsShadow: 1;
			quickSwapCooldownDurationSeconds: 45;
			roundDurationSeconds: 270;
			sameTypeAttackBonusMultiplier: 1.2;
			shadowPokemonAttackBonusMultiplier: 1.2;
			shadowPokemonDefenseBonusMultiplier: 0.8333333;
			showQuickSwapButtonsDuringCountdown: true;
			superEffectiveFlyoutDurationTurns: 5;
			turnDurationSeconds: 0.5;
		};
	};
}

export interface CombatStatStageSettings {
	templateId: "COMBAT_STAT_STAGE_SETTINGS";
	data: {
		templateId: "COMBAT_STAT_STAGE_SETTINGS";
		combatStatStageSettings: {
			attackBuffMultiplier: [0.5, 0.5714286, 0.6666667, 0.8, 1, 1.25, 1.5, 1.75, 2];
			defenseBuffMultiplier: [0.5, 0.5714286, 0.6666667, 0.8, 1, 1.25, 1.5, 1.75, 2];
			maximumStatStage: 4;
			minimumStatStage: -4;
		};
	};
}

export interface ContestSettings {
	templateId: "CONTEST_SETTINGS";
	data: {
		templateId: "CONTEST_SETTINGS";
		contestSettings: {
			catchPromptTimeoutMs: 10000;
			contestLengthThresholds: [
				{
					length: "SHORT";
					maxDurationMs: "86400000";
					minDurationMs: "1";
				},
				{
					length: "MEDIUM";
					maxDurationMs: "345600000";
					minDurationMs: "86400000";
				},
				{
					length: "LONG";
					maxDurationMs: "2419200000";
					minDurationMs: "345600000";
				},
			];
			contestLimits: [
				{
					contestMetric: {
						pokemonMetric: "POKEMON_SIZE";
						rankingStandard: "MAX";
					};
					contestOccurrence: "DAILY";
					perContestMaxEntries: 150;
				},
			];
			contestScoreCoefficient: [
				{
					pokemonSize: {
						heightCoefficient: 800;
						ivCoefficient: 50;
						weightCoefficient: 150;
						xxlAdjustmentFactor: 1;
					};
				},
			];
			contestWarmupAndCooldownDurationsMs: [
				{
					contestOccurrence: "DAILY";
					cycleCooldownDurationMs: "7200000";
					cycleWarmupDurationMs: "7200000";
				},
				{
					contestOccurrence: "HOURLY";
					cycleCooldownDurationMs: "600000";
					cycleWarmupDurationMs: "600000";
				},
			];
			defaultContestMaxEntries: 200;
			defaultCycleCooldownDurationMs: "600000";
			defaultCycleWarmupDurationMs: "600000";
			isAnticheatRemovalEnabled: true;
			isContestInNearbyMenu: true;
			isFeatureEnabled: true;
			isFriendsDisplayEnabled: true;
			isNormalizedScoreToSpecies: true;
			isPokemonScalarEnabled: true;
			isV2FeatureEnabled: true;
			isV2FocusesEnabled: true;
			maxCatchPromptRange: 500;
			minCooldownBeforeSeasonEndMs: "50000000";
			playerContestMaxEntries: 3;
		};
	};
}

export interface ConversationSettings {
	templateId: "CONVERSATION_SETTINGS";
	data: {
		templateId: "CONVERSATION_SETTINGS";
		conversationSettings: {
			pokemonFormAppraisalOverrides: [
				{
					addToStart: true;
					appraisalKey: "appraise_sinistea_antique";
					form: "SINISTEA_ANTIQUE";
					id: "SINISTEA";
				},
				{
					addToStart: true;
					appraisalKey: "appraise_sinistea_phony";
					form: "SINISTEA_PHONY";
					id: "SINISTEA";
				},
				{
					addToStart: true;
					appraisalKey: "appraise_polteageist_antique";
					form: "POLTEAGEIST_ANTIQUE";
					id: "POLTEAGEIST";
				},
				{
					addToStart: true;
					appraisalKey: "appraise_polteageist_phony";
					form: "POLTEAGEIST_PHONY";
					id: "POLTEAGEIST";
				},
				{
					addToStart: true;
					appraisalKey: "appraise_poltchageist_artisan";
					form: "POLTCHAGEIST_ARTISAN";
					id: "POLTCHAGEIST";
				},
				{
					addToStart: true;
					appraisalKey: "appraise_poltchageist_counterfeit";
					form: "POLTCHAGEIST_COUNTERFEIT";
					id: "POLTCHAGEIST";
				},
				{
					addToStart: true;
					appraisalKey: "appraise_sinistcha_masterpiece";
					form: "SINISTCHA_MASTERPIECE";
					id: "SINISTCHA";
				},
				{
					addToStart: true;
					appraisalKey: "appraise_sinistcha_unremarkable";
					form: "SINISTCHA_UNREMARKABLE";
					id: "SINISTCHA";
				},
			];
		};
	};
}

export interface CrossGameSocialSettings {
	templateId: "CROSS_GAME_SOCIAL_SETTING";
	data: {
		templateId: "CROSS_GAME_SOCIAL_SETTING";
		crossGameSocialSettings: {
			nianticProfileEnabledOverrideLevel: true;
			onlineStatusEnabledOverrideLevel: true;
		};
	};
}

export interface DailyAdventureIncenseSettings {
	templateId: "DAILY_ADVENTURE_INCENSE_SETTINGS";
	data: {
		templateId: "DAILY_ADVENTURE_INCENSE_SETTINGS";
		dailyAdventureIncenseSettings: {
			enabled: true;
			enablePushNotification: true;
			localDeliveryTime: "0:00:00";
			pokeballGrant: {
				lootItem: [
					{
						count: 30;
						item: "ITEM_POKE_BALL";
					},
				];
			};
			pokeballGrantThreshold: 30;
			pushNotificationHourOfDay: 16;
		};
	};
}

export interface DeepLinkingSettings {
	templateId: "DEEP_LINKING_SETTINGS";
	data: {
		templateId: "DEEP_LINKING_SETTINGS";
		deepLinkingSettings: {
			actionsThatExecuteBeforeMapLoads: ["FILL_REFERRAL_CODE", 34];
			actionsThatIgnoreMinLevel: ["FILL_REFERRAL_CODE", 34];
			iosActionButtonEnabled: true;
			minPlayerLevelForExternalLink: 5;
			minPlayerLevelForNotificationLink: 5;
		};
	};
}

export interface EggHatchImprovementsSettings {
	templateId: "EGG_HATCH_IMPROVEMENTS_SETTINGS";
	data: {
		templateId: "EGG_HATCH_IMPROVEMENTS_SETTINGS";
		eggHatchImprovementsSettings: {
			bootDelayMs: 8000;
			featureEnabled: true;
			raidInviteHardCapMs: 300000;
		};
	};
}

export interface EncounterSettings {
	templateId: "ENCOUNTER_SETTINGS";
	data: {
		templateId: "ENCOUNTER_SETTINGS";
		encounterSettings: {
			arCloseProximityThreshold: 0.5;
			arLowAwarenessThreshold: 0.3;
			arPlusModeEnabled: true;
			enableItemSelectionSliderV2: true;
			excellentThrowThreshold: 1.7;
			greatThrowThreshold: 1.3;
			milestoneThreshold: 100;
			niceThrowThreshold: 1;
			spinBonusThreshold: 0.5;
		};
	};
}

export interface ErrorReportingSettings {
	templateId: "ERROR_REPORTING_SETTINGS_PRE_LOGIN";
	data: {
		templateId: "ERROR_REPORTING_SETTINGS_PRE_LOGIN";
		errorReportingSettings: {
			eventSampleRate: 1;
			isEnabled: true;
			maxEventsPerSlidingWindow: 5;
			maxTotalEventsBeforeShutdown: "1000";
			percentChancePlayerSends: 1;
			slidingWindowLengthS: 10;
		};
	};
}

export interface EventPassSettings {
	templateId: "EVENT_PASS_MAY2026_SEASON";
	data: {
		templateId: "EVENT_PASS_MAY2026_SEASON";
		eventPassSettings: {
			additionalBonusTiersLevel: 101;
			eventPassDisplaySettings: {
				bonusBoxes: [
					{
						iconType: "SPAWN_UNKNOWN";
						quantity: 10;
						text: "quest_catch_pokemon_singular";
					},
					{
						iconType: "EGG";
						quantity: 80;
						text: "quest_hatch_egg_singular";
					},
					{
						iconType: "RAID";
						quantity: 200;
						text: "quest_win_raid_singular";
					},
				];
				eventPassTitleKey: "season_pass_base_track_title_may";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "season_pass_details_link_may2026";
						eventDurationKey: "season_pass_may2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "season_pass_may2026_track_upgrade_header_description";
						ranksToHighlightRewards: [94, 99, 100];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.month3_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "season_pass_may2026_upgrade_description";
					},
				];
				headerIconUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FS22_MemoriesInMotion_Logo.png";
				premiumRewardsDescription: "season_pass_premium_rewards_desc_monthly_no_disclaimer";
				sectionDisplayPriority: 11;
				todayViewSection: "SEASONAL_EVENT_PASS_SECTION";
			};
			expirationTime: "2026-06-02T10:00:00";
			gracePeriodEndTime: "2026-06-04T10:00:00";
			maxTierLevel: 200;
			pointsItemId: "ITEM_EVENT_PASS_POINT_MONTHLY_03";
			prefix: "EVENT_PASS_MAY2026_SEASON";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "season_pass_base_track_title_may";
				},
				{
					badge: "BADGE_EVENT_0176";
					track: "PREMIUM";
					trackTitleKey: "season_pass_premium_track_title_may";
				},
			];
		};
	};
}

export interface EventPlannerPopularNotificationSettings {
	templateId: "EVENT_PLANNER_POPULAR_RAID_RSVP_SETTINGS";
	data: {
		templateId: "EVENT_PLANNER_POPULAR_RAID_RSVP_SETTINGS";
		eventPlannerPopularNotificationSettings: {
			battleLevels: [4, 5, 6, 7, 8, 9, 10, 14, 15];
			firstScanOffsetSeconds: "60";
			maxNotifPerDay: 3;
			nearbyPoiThreshold: 4;
			notifDelayIntervalsSeconds: "3600";
			ruralThreshold: 1;
			scanIntervalSeconds: "60";
			timeslotBufferWindowSeconds: "600";
			urbanThreshold: 1;
		};
	};
}

export interface EventServerSettings {
	templateId: "EVENT_SERVER_SETTINGS";
	data: {
		templateId: "EVENT_SERVER_SETTINGS";
	};
}

export interface ExternalAddressableAssetsSettings {
	templateId: "EXTERNAL_ADDRESSABLE_ASSETS_SETTINGS";
	data: {
		templateId: "EXTERNAL_ADDRESSABLE_ASSETS_SETTINGS";
		externalAddressableAssetsSettings: object;
	};
}

export interface FeatureUnlockLevelSettings {
	templateId: "FEATURE_UNLOCK_LEVEL_SETTINGS";
	data: {
		templateId: "FEATURE_UNLOCK_LEVEL_SETTINGS";
		featureUnlockLevelSettings: {
			luresUnlockLevel: 6;
			rareCandyConversionUnlockLevel: 1;
		};
	};
}

export interface GeotargetedQuestSettings {
	templateId: "GEOTARGETED_QUEST_SETTINGS";
	data: {
		templateId: "GEOTARGETED_QUEST_SETTINGS";
		geotargetedQuestSettings: {
			enableGeotargetedQuests: true;
		};
	};
}

export interface GiftingSettings {
	templateId: "GIFTING_SETTINGS";
	data: {
		templateId: "GIFTING_SETTINGS";
		giftingSettings: {
			enableGiftToStardust: true;
			flowPolishEnabled: true;
			multiMajorRewardUiEnabled: true;
			stardustMultiplier: [
				{
					multiplier: 1;
					randomWeight: 0.6;
				},
				{
					multiplier: 2;
					randomWeight: 0.3;
				},
				{
					multiplier: 4;
					randomWeight: 0.1;
				},
			];
			stardustPerGift: 50;
		};
	};
}

export interface GuiSearchSettings {
	templateId: "GUI_SEARCH_SETTINGS";
	data: {
		templateId: "GUI_SEARCH_SETTINGS";
		guiSearchSettings: {
			completeStartLetterCountPerLanguage: [
				"en-US,2",
				"pt-BR,2",
				"zh-TW,2",
				"fr-FR,2",
				"de-DE,2",
				"it-IT,2",
				"ja-JP,2",
				"ko-KR,2",
				"es-ES,2",
				"th-TH,2",
				"ru-RU,2",
				"tr-TR,2",
				"hi-IN,2",
				"id-ID,2",
				"es-MX,2",
			];
			guiSearchEnabled: true;
			maxNumberFavoriteSearches: 12;
			maxNumberRecentSearches: 4;
			maxQueryLength: 1024;
			searchHelpUrl: "niantic.helpshift.com/hc/faq/1486-searching-filtering-your-pokemon-inventory/";
		};
	};
}

export interface GymBadgeSettings {
	templateId: "GYM_BADGE_SETTINGS";
	data: {
		templateId: "GYM_BADGE_SETTINGS";
		gymBadgeSettings: {
			battleWinningScorePerDefenderCp: 0.01;
			berryFeedingScore: 10;
			gymDefendingScorePerMinute: 1;
			loseAllBattlesScore: 5;
			pokemonDeployScore: 100;
			raidBattleWinningScore: 1000;
			target: [500, 4000, 30000];
		};
	};
}

export interface HapticsSettings {
	templateId: "HAPTICS_SETTINGS";
	data: {
		templateId: "HAPTICS_SETTINGS";
		hapticsSettings: {
			advancedHapticsEnabled: true;
		};
	};
}

export interface IapSettings {
	templateId: "IAP_SETTINGS";
	data: {
		templateId: "IAP_SETTINGS";
		iapSettings: {
			dailyDefenderBonusCurrency: ["STARDUST", "POKECOIN"];
			dailyDefenderBonusMaxDefenders: 10;
			dailyDefenderBonusPerPokemon: [500, 10];
			minTimeBetweenClaimsMs: "75600000";
			prohibitPurchaseInTestEnvirnment: true;
		};
	};
}

export interface IbfcLightweightSettings {
	templateId: "IBFC_LIGHTWEIGHT_SETTINGS";
	data: {
		templateId: "IBFC_LIGHTWEIGHT_SETTINGS";
		ibfcLightweightSettings: {
			defaultDefenseMultiplier: 1;
			defaultDefenseOverride: 272;
			defaultEnergyChargeOverride: 6;
			defaultStaminaOverride: 155;
		};
	};
}

export interface ImpressionTrackingSettings {
	templateId: "impression_tracking_settings";
	data: {
		templateId: "impression_tracking_settings";
		impressionTrackingSettings: {
			approachGymTrackingEnabled: true;
			approachRaidTrackingEnabled: true;
			fullScreenAdViewTrackingEnabled: true;
			impressionTrackingEnabled: true;
			pokestopSpinnerInteractionTrackingEnabled: true;
		};
	};
}

export interface InAppSurveySettings {
	templateId: "SURVEY_SETTINGS";
	data: {
		templateId: "SURVEY_SETTINGS";
		inAppSurveySettings: {
			surveyPollFrequencyS: 30;
		};
	};
}

export interface IncidentPrioritySettings {
	templateId: "INCIDENT_PRIORITY_SETTINGS";
	data: {
		templateId: "INCIDENT_PRIORITY_SETTINGS";
		incidentPrioritySettings: {
			incidentPriority: [
				{
					displayType: "INCIDENT_POKESTOP_ENCOUNTER";
					priority: 1;
				},
				{
					displayType: "INVASION_EVENT_NPC";
					priority: 2;
				},
				{
					displayType: "INVASION_GRUNT";
					priority: 3;
				},
				{
					displayType: "INVASION_LEADER";
					priority: 4;
				},
				{
					displayType: "INVASION_GIOVANNI";
					priority: 5;
				},
				{
					displayType: "INVASION_GENERIC";
					priority: 6;
				},
				{
					displayType: "INCIDENT_CONTEST";
					priority: 7;
				},
			];
		};
	};
}

export interface IncidentVisibilitySettings {
	templateId: "INCIDENT_VISIBILITY_SETTINGS";
	data: {
		templateId: "INCIDENT_VISIBILITY_SETTINGS";
		incidentVisibilitySettings: {
			hideIncidentForCharacter: [
				"CHARACTER_EVENT_NPC_0",
				"CHARACTER_EVENT_NPC_1",
				"CHARACTER_EVENT_NPC_2",
				"CHARACTER_EVENT_NPC_3",
				"CHARACTER_EVENT_NPC_4",
				"CHARACTER_EVENT_NPC_5",
				"CHARACTER_EVENT_NPC_6",
				"CHARACTER_EVENT_NPC_7",
				"CHARACTER_EVENT_NPC_8",
				"CHARACTER_EVENT_NPC_9",
				"CHARACTER_EVENT_NPC_10",
			];
		};
	};
}

export interface InventorySettings {
	templateId: "INVENTORY_SETTINGS";
	data: {
		templateId: "INVENTORY_SETTINGS";
		inventorySettings: {
			bagUpgradeBannerContexts: ["MAIN_MENU", "PARTY_SELECT", "SPONSORED_GIFT_INVENTORY_FULL", "COMBAT_HUB_INVENTORY_FULL", "QUICK_SHOP_INVENTORY_FULL"];
			bagUpgradeBannerEnabled: true;
			bagUpgradeTimerStages: [
				{
					dismissStageSecs: 432000;
				},
				{
					dismissStageSecs: 1728000;
				},
				{
					dismissStageSecs: 5184000;
				},
				{
					dismissStageSecs: 7776000;
				},
			];
			baseBagItems: 350;
			baseDailyAdventureEggs: 1;
			baseEggs: 9;
			basePokemon: 300;
			basePostcards: 350;
			canRaidPassOverflowBagSpace: true;
			easyIncubatorBuyEnabled: true;
			enableEggsNotInventory: true;
			luckyFriendApplicatorSettingsToggleEnabled: true;
			maxBagItems: 11000;
			maxItemBoostDurationMs: "86400000";
			maxPokemon: 11650;
			maxPostcards: 2000;
			maxStoneACount: 9999;
			maxTeamChanges: 1;
			specialEggOverflowSpots: 3;
			teamChangeItemResetPeriodInDays: "365";
		};
	};
}

export interface IrisSocialSettings {
	templateId: "IRIS_SOCIAL_SETTINGS";
	data: {
		templateId: "IRIS_SOCIAL_SETTINGS";
		irisSocialSettings: {
			addPokemonModalDelayMs: 8000;
			bannedPokedexIds: [
				"WAILORD",
				"KYOGRE",
				"CELESTEELA",
				"WISHIWASHI",
				"GUZZLORD",
				"STAKATAKA",
				"GROUDON",
				"ZYGARDE",
				"XURKITREE",
				"SANDACONDA",
				"NAGANADEL",
				"MIRAIDON",
				"ARAQUANID",
				"CENTISKORCH",
				"COPPERAJAH",
				"BUZZWOLE",
				"BLACEPHALON",
				"NIHILEGO",
				"UNOWN",
				"ZAPDOS",
				"MOLTRES",
			];
			combinedShadowsEnabled: true;
			enableSqcGuidance: true;
			expressionUpdateBroadcastMethod: "BROADCAST_TO_ALL_POKEMON";
			ftueVersion: "MVP_AUG_30";
			gameplayReportsActive: true;
			groundFocusGuardrailEnabled: true;
			groundFocusGuardrailEnterAngle: 60;
			groundFocusGuardrailExitAngle: 40;
			guidanceInCarThreshold: 0.8;
			guidancePathNearbyFinishDelayMs: 1000;
			guidancePathNearbyFinishDistanceMeters: 1;
			irisSocialEnabled: true;
			irisSocialPoiDeactivationCooldownMs: "1209600000";
			limitedLocalizationTimeoutDurationMs: "30000";
			limitedPokedexIds: [
				"URSARING",
				"WAILMER",
				"EXEGGUTOR",
				"SNORLAX",
				"DONDOZO",
				"EXEGGUTOR",
				"RAYQUAZA",
				"STEELIX",
				"ONIX",
				"DIALGA",
				"NECROZMA",
				"GIRATINA",
				"PALKIA",
				"MILOTIC",
				"YVELTAL",
				"CETITAN",
				"DUDUNSPARCE",
				"DRAGONAIR",
				"DRAGONITE",
				"DHELMISE",
				"HO_OH",
				"REGIGIGAS",
				"KYUREM",
				"SOLGALEO",
				"ARCEUS",
				"RESHIRAM",
				"FARIGIRAF",
				"THUNDURUS",
				"XERNEAS",
				"DRAMPA",
				"FALINKS",
				"DRAGAPULT",
				"BASCULEGION",
				"ZEKROM",
				"ZAMAZENTA",
				"GOLURK",
				"COALOSSAL",
				"ZACIAN",
				"SEVIPER",
				"ABOMASNOW",
				"AURORUS",
				"URSALUNA",
				"TINGLU",
				"BEARTIC",
				"VIKAVOLT",
				"LAPRAS",
				"MAMOSWINE",
				"SCOLIPEDE",
				"TYRANTRUM",
				"MUDSDALE",
				"MELMETAL",
				"STONJOURNER",
				"OVERQWIL",
				"ORTHWORM",
				"VELUZA",
				"KORAIDON",
				"RHYPERIOR",
				"NECROZMA",
				"CALYREX",
				"URSALUNA",
				"FERALIGATR",
				"HARIYAMA",
				"LATIOS",
				"SILVALLY",
				"ARCTOZOLT",
				"DRACOVISH",
				"GARGANACL",
				"SANDYSHOCKS",
				"KANGASKHAN",
				"AGGRON",
				"TORTERRA",
				"DUSKNOIR",
				"JELLICENT",
				"KOMMO_O",
				"CORVIKNIGHT",
				"SILICOBRA",
				"GLASTRIER",
				"GREATTUSK",
				"SNORLAX",
				"MANTINE",
				"ENTEI",
				"EELEKTROSS",
				"COBALION",
				"PANGORO",
				"SALAZZLE",
				"BEWEAR",
				"RILLABOOM",
				"HATTERENE",
				"REGIDRAGO",
				"BAXCALIBUR",
				"VENUSAUR",
				"MOLTRES",
				"MEWTWO",
				"SLOWKING",
				"SUICUNE",
				"EKANS",
				"HIPPOWDON",
				"TANGROWTH",
				"GLISCOR",
				"VIRIZION",
				"GOODRA",
				"AVALUGG",
				"PASSIMIAN",
				"GOLISOPOD",
				"TURTONATOR",
				"ARCTOVISH",
				"SPECTRIER",
				"HOUNDSTONE",
				"KINGAMBIT",
				"ROARINGMOON",
				"ARCANINE",
				"RAIKOU",
				"BLAZIKEN",
				"YANMEGA",
				"GARBODOR",
				"SAWSBUCK",
				"TERRAKION",
				"TYPE_NULL",
				"TAPU_BULU",
				"URSHIFU",
				"TOEDSCRUEL",
				"ESPATHRA",
				"CHIENPAO",
				"MEGANIUM",
				"SHARPEDO",
				"GOREBYSS",
				"REGICE",
				"ELECTIVIRE",
				"HAXORUS",
				"HYDREIGON",
				"DRAGALGE",
				"INCINEROAR",
				"PRIMARINA",
				"ARAQUANID",
				"TAPU_KOKO",
				"DRACOZOLT",
				"DURALUDON",
				"ZARUDE",
				"WYRDEER",
				"KLEAVOR",
				"QUAQUAVAL",
				"PALAFIN",
				"REVAVROOM",
				"CLODSIRE",
				"IRONHANDS",
				"KARTANA",
			];
			localizationGuidancePathEnabled: true;
			localizationTimeoutDurationMs: "12000";
			locationManagerJpegCompressionQuality: 50;
			maxBoundaryAreaSqMeters: 400;
			maxDistanceAllowLocalizationMeters: "8111222333";
			maxNumPokemonPerPlayer: 3;
			maxNumPokemonPerScene: 7;
			maxTimeBgModeBeforeExpulsionMs: "15000";
			maxTimeNoActivityPlayerInactiveMs: "60000";
			minBoundaryAreaSqMeters: 49;
			pokeballPingTimeDelayMs: 3000;
			pokemonExpireAfterMs: "172800000";
			pokemonSpawnStaggerDurationMs: "500";
			pushGatewayEnabled: true;
			sunriseThresholdOffsetMs: "-5400000";
			sunsetThresholdOffsetMs: "1800000";
			sunThresholdCheckEnabled: true;
			useBoundaryVerticesFromDataFlow: true;
			useVpsEnabledStatus: true;
		};
	};
}

export interface IrisSocialUxFunnelSettings {
	templateId: "IRIS_SOCIAL_UX_FUNNEL_SETTINGS";
	data: {
		templateId: "IRIS_SOCIAL_UX_FUNNEL_SETTINGS";
		irisSocialUxFunnelSettings: {
			eventStep: [
				{
					event: "USER_ENTERED_EXPERIENCE";
					stepNumber: 2;
				},
				{
					event: "CAMERA_PERMISSIONS_APPROVED";
					stepNumber: 3;
				},
				{
					event: "IRIS_SOCIAL_SCENE_TUTORIAL_STEPS_SHOWN";
					stepNumber: 4;
				},
				{
					event: "POKEMON_PLACEMENT_TUTORIAL_SHOWN";
					stepNumber: 5;
				},
				{
					event: "SAFETY_PROMPT_ACKNOWLEDGED";
					stepNumber: 6;
				},
				{
					event: "HINT_IMAGE_ACKNOWLEDGED";
					stepNumber: 7;
				},
				{
					event: "VISUAL_CUES_SHOWN";
					stepNumber: 9;
				},
				{
					event: "LOCALIZATION_INTENTIONALLY_PAUSED";
					stepNumber: 10;
				},
				{
					event: "VPS_DIAGNOSTICS_FEEDBACK_PRESENTED";
					stepNumber: 11;
				},
				{
					event: "LOCALIZATION_SUCCESSFUL";
					stepNumber: 12;
				},
				{
					event: "INTERRUPTION_EXITING_PLAYER_BOUNDS";
					stepNumber: 13;
				},
				{
					event: "INTERRUPTION_TRACKING_LOST";
					stepNumber: 14;
				},
				{
					event: "INTERRUPTION_APP_BACKGROUNDED";
					stepNumber: 15;
				},
				{
					event: "INTERRUPTION_OTHER";
					stepNumber: 16;
				},
				{
					event: "SCENE_LOADED";
					stepNumber: 17;
				},
				{
					event: "POKEBALL_BUTTON_CLICKED";
					stepNumber: 18;
				},
				{
					event: "POKEMON_SELECTED";
					stepNumber: 19;
				},
				{
					event: "POKEMON_PLACED";
					stepNumber: 20;
				},
				{
					event: "POKEMON_RECALLED";
					stepNumber: 21;
				},
				{
					event: "POKEMON_REPLACED";
					stepNumber: 22;
				},
				{
					event: "POKEMON_PLACEMENT_EDITED";
					stepNumber: 23;
				},
				{
					event: "RETURN_TO_CAMERA_SCENE";
					stepNumber: 24;
				},
				{
					event: "PICTURE_TAKEN";
					stepNumber: 25;
				},
				{
					event: "EXIT_EXPERIENCE";
					stepNumber: 26;
				},
				{
					event: 26;
					stepNumber: 27;
				},
				{
					event: 27;
					stepNumber: 28;
				},
				{
					event: 28;
					stepNumber: 29;
				},
				{
					event: 29;
					stepNumber: 30;
				},
				{
					event: 30;
					stepNumber: 31;
				},
				{
					event: 31;
					stepNumber: 32;
				},
				{
					event: 32;
					stepNumber: 33;
				},
				{
					event: 33;
					stepNumber: 34;
				},
				{
					event: 25;
					stepNumber: 40;
				},
				{
					event: 38;
					stepNumber: 41;
				},
				{
					event: 39;
					stepNumber: 42;
				},
				{
					event: 40;
					stepNumber: 43;
				},
				{
					event: 41;
					stepNumber: 44;
				},
				{
					event: 42;
					stepNumber: 45;
				},
				{
					event: 43;
					stepNumber: 46;
				},
				{
					event: 44;
					stepNumber: 47;
				},
				{
					event: 45;
					stepNumber: 48;
				},
				{
					event: 46;
					stepNumber: 49;
				},
				{
					event: 47;
					stepNumber: 50;
				},
				{
					event: 48;
					stepNumber: 51;
				},
				{
					event: 50;
					stepNumber: 52;
				},
			];
			uxFunnelVersion: 1;
		};
	};
}

export interface ItemInventoryUpdateSettings {
	templateId: "ITEM_INVENTORY_UPDATE_SETTINGS";
	data: {
		templateId: "ITEM_INVENTORY_UPDATE_SETTINGS";
		itemInventoryUpdateSettings: {
			categoryProto: [
				{
					category: ["ITEM_CATEGORY_EXPIRING"];
					categoryName: "item_bag_expiring_soon";
				},
				{
					category: ["ITEM_CATEGORY_MEDICINE"];
					categoryName: "item_bag_category_medicine";
					sortOrder: 1;
				},
				{
					category: ["ITEM_CATEGORY_POKEBALL"];
					categoryName: "item_bag_category_pokeballs";
					sortOrder: 2;
				},
				{
					category: ["ITEM_CATEGORY_FOOD"];
					categoryName: "item_bag_category_berries";
					sortOrder: 3;
				},
				{
					category: ["ITEM_CATEGORY_FRIEND_GIFT_BOX", "ITEM_CATEGORY_STICKER", "ITEM_CATEGORY_POSTCARD_INVENTORY"];
					categoryName: "item_bag_category_gifts";
					sortOrder: 4;
				},
				{
					category: ["ITEM_CATEGORY_INCENSE", "ITEM_CATEGORY_BOOST", "ITEM_CATEGORY_STARDUST_BOOST", "ITEM_CATEGORY_XP_BOOST"];
					categoryName: "item_bag_category_boosts";
					sortOrder: 5;
				},
				{
					category: [
						"ITEM_CATEGORY_STAT_INCREASE",
						"ITEM_CATEGORY_CANDY",
						"ITEM_CATEGORY_BUDDY_EXCLUSIVE_FOOD",
						"ITEM_CATEGORY_TEAM_CHANGE",
						"ITEM_CATEGORY_INCUBATOR",
						"ITEM_CATEGORY_INCIDENT_TICKET",
						"ITEM_CATEGORY_BREAD",
					];
					categoryName: "item_bag_category_other";
					sortOrder: 6;
				},
				{
					category: ["ITEM_CATEGORY_RAID_TICKET", "ITEM_CATEGORY_GLOBAL_EVENT_TICKET", "ITEM_CATEGORY_EVENT_TICKET_GIFT"];
					categoryName: "item_bag_category_passes";
					sortOrder: 7;
				},
				{
					category: ["ITEM_CATEGORY_DISK"];
					categoryName: "item_bag_category_lures";
					sortOrder: 8;
				},
				{
					category: ["ITEM_CATEGORY_CAMERA", "ITEM_CATEGORY_ROUTE_MAKER", "ITEM_CATEGORY_UTILITES", "ITEM_CATEGORY_ENHANCED_CURRENCY_HOLDER"];
					categoryName: "item_bag_category_key_items";
					sortOrder: 9;
				},
				{
					category: ["ITEM_CATEGORY_MOVE_REROLL"];
					categoryName: "item_bag_category_tm";
					sortOrder: 10;
				},
				{
					category: ["ITEM_CATEGORY_EVOLUTION_REQUIREMENT"];
					categoryName: "item_bag_category_evolution";
					sortOrder: 11;
				},
			];
		};
	};
}

export interface JoinRaidViaFriendListSettings {
	templateId: "JOIN_RAID_VIA_FRIEND_LIST_SETTINGS";
	data: {
		templateId: "JOIN_RAID_VIA_FRIEND_LIST_SETTINGS";
		joinRaidViaFriendListSettings: {
			enabled: true;
			friendActivitiesBackgroundUpdatePeriodMs: "10000";
			maxBattleEnabled: true;
			maxBattleMinFriendshipScore: 7;
			maxBattleMinPlayerLevel: 13;
			minFriendshipScore: 7;
			minPlayerLevel: 5;
		};
	};
}

export interface LanguageSelectorSettings {
	templateId: "LANGUAGE_SELECTOR_SETTINGS";
	data: {
		templateId: "LANGUAGE_SELECTOR_SETTINGS";
		languageSelectorSettings: {
			languageSelectorEnabled: true;
		};
	};
}

export interface LuckyPokemonSettings {
	templateId: "LUCKY_POKEMON_SETTINGS";
	data: {
		templateId: "LUCKY_POKEMON_SETTINGS";
		luckyPokemonSettings: {
			powerUpStardustDiscountPercent: 0.5;
		};
	};
}

export interface MapDisplaySettings {
	templateId: "MAP_DISPLAY_SETTINGS";
	data: {
		templateId: "MAP_DISPLAY_SETTINGS";
		mapDisplaySettings: {
			showEnhancedSky: true;
		};
	};
}

export interface MapObjectsInteractionRangeSettings {
	templateId: "MAP_OBJECTS_INTERACTION_RANGE_SETTINGS";
	data: {
		templateId: "MAP_OBJECTS_INTERACTION_RANGE_SETTINGS";
		mapObjectsInteractionRangeSettings: {
			farInteractionRangeMeters: 2000;
			interactionRangeMeters: 80;
			remoteInteractionRangeMeters: 3500;
			whitePulseRadiusMeters: 50;
		};
	};
}

export interface MegaEvoSettings {
	templateId: "MEGA_EVO_SETTINGS";
	data: {
		templateId: "MEGA_EVO_SETTINGS";
		megaEvoSettings: {
			activeMegaBonusCatchCandy: 1;
			attackBoostFromMegaDifferentType: 1.1;
			attackBoostFromMegaSameType: 1.3;
			clientMegaCooldownBufferMs: 2000;
			enableBuddyWalkingMegaEnergyAward: true;
			enableMegaEvolveInLobby: true;
			enableMegaLevel: true;
			enableMegaLevelLegacyAward: true;
			evolutionLengthMs: "28800000";
			maxCandyHoardSize: 10000;
			numMegaLevels: 4;
		};
	};
}

export interface MonodepthSettings {
	templateId: "MONODEPTH_SETTINGS";
	data: {
		templateId: "MONODEPTH_SETTINGS";
		monodepthSettings: {
			enableGroundSuppression: true;
			enableOcclusions: true;
			minGroundSuppressionThresh: 0.3;
			occlusionsToggleVisible: true;
			suppressionChannelId: 1;
		};
	};
}

export interface MpSettings {
	templateId: "MP_SHARED_SETTINGS";
	data: {
		templateId: "MP_SHARED_SETTINGS";
		mpSettings: {
			battleMpCostPerTier: [
				{
					battleLevel: "BREAD_BATTLE_LEVEL_1";
					breadBattleCatchMpCost: 250;
					breadBattleRemoteCatchMpCost: 250;
				},
				{
					battleLevel: "BREAD_BATTLE_LEVEL_2";
					breadBattleCatchMpCost: 400;
					breadBattleRemoteCatchMpCost: 400;
				},
				{
					battleLevel: "BREAD_BATTLE_LEVEL_3";
					breadBattleCatchMpCost: 400;
					breadBattleRemoteCatchMpCost: 400;
				},
				{
					battleLevel: "BREAD_BATTLE_LEVEL_4";
					breadBattleCatchMpCost: 800;
					breadBattleRemoteCatchMpCost: 800;
				},
				{
					battleLevel: "BREAD_BATTLE_LEVEL_5";
					breadBattleCatchMpCost: 800;
					breadBattleRemoteCatchMpCost: 800;
				},
				{
					battleLevel: "BREAD_DOUGH_BATTLE_LEVEL_1";
					breadBattleCatchMpCost: 800;
					breadBattleRemoteCatchMpCost: 800;
				},
				{
					battleLevel: 8;
					breadBattleCatchMpCost: 800;
					breadBattleRemoteCatchMpCost: 800;
				},
			];
			debugAllowRemoveWalkQuest: true;
			ftueMpCapacity: 250;
			mpBaseDailyLimit: 800;
			mpCapacity: 1500;
			mpClaimParticleSpeedMultiplier: 1;
			numExtraMpFromFirstLootStation: 20;
			numMetersGoal: 2000;
			numMpFromLootStation: 100;
			numMpFromWalkQuest: 300;
		};
	};
}

export interface NaturalArtDayNightFeatureSettings {
	templateId: "NATURAL_ART_DAY_NIGHT_FEATURE_SETTINGS";
	data: {
		templateId: "NATURAL_ART_DAY_NIGHT_FEATURE_SETTINGS";
		naturalArtDayNightFeatureSettings: {
			dayEndTime: "18:00:00";
			dayStartTime: "06:00:00";
			dbsSpawnRadiusMeters: 60;
			nightEndTime: "05:59:00";
		};
	};
}

export interface NearbyPokemonSettings {
	templateId: "NEARBY_POKEMON_SETTINGS";
	data: {
		templateId: "NEARBY_POKEMON_SETTINGS";
		nearbyPokemonSettings: {
			obEnabled: true;
			obNearbyPokemonSettingsBool1: true;
		};
	};
}

export interface NeutralAvatarSettings {
	templateId: "NEUTRAL_AVATAR_SETTINGS";
	data: {
		templateId: "NEUTRAL_AVATAR_SETTINGS";
		neutralAvatarSettings: {
			bodySliderSettings: {
				bustSlider: {
					maxBounds: 1;
				};
				hipsSlider: {
					maxBounds: 1;
				};
				muscleSlider: {
					maxBounds: 1;
				};
				shoulderSlider: {
					maxBounds: 1;
				};
				sizeSlider: {
					maxBounds: 0.75;
					minBounds: 0.1;
				};
			};
			defaultNeutralAvatar: {
				articles: {
					backpack: {
						articleId: "n_backpack_default-new_0";
					};
					bodyPreset: {
						articleId: "BodyPresetFive";
					};
					eyebrow: {
						articleId: "n_eyebrows_fern_0";
					};
					eyelash: {
						articleId: "n_eyelashes_fern_0";
					};
					facePreset: {
						articleId: "FacePresetThree";
					};
					gloves: {
						articleId: "n_gloves_default-new_0";
					};
					hair: {
						articleId: "n_hair_straightlong_0";
					};
					pants: {
						articleId: "n_pants_default-new_0";
					};
					pose: {
						articleId: "n_pose_idle";
					};
					shirt: {
						articleId: "n_shirt_default-new_0";
					};
					shoes: {
						articleId: "n_shoes_default-new_0";
					};
					socks: {
						articleId: "n_socks_default_a_0";
					};
				};
				bodyBlend: {
					hips: 0.4;
					musculature: 0.6;
					shoulders: 0.6;
					size: 0.3;
				};
				earSelection: {
					selection: "DEFAULT";
				};
				eyeGradient: {
					colorKeys: [
						{
							keyPosition: 0.000001;
						},
						{
							blue: 0.18431373;
							green: 0.20000002;
							keyPosition: 0.11999695;
							red: 0.050980397;
						},
						{
							blue: 0.49411768;
							green: 0.52156866;
							keyPosition: 0.5300069;
							red: 0.27450982;
						},
						{
							blue: 1;
							green: 1;
							keyPosition: 1;
							red: 1;
						},
					];
				};
				eyeSelection: {
					selection: "DEFAULT";
				};
				facePositions: {
					browDepth: 0.5;
					browVertical: 0.142;
					eyeDepth: 0.5;
					eyeHorizontal: 0.3;
					eyeVertical: 0.182;
					mouthDepth: 0.643;
					mouthHorizontal: 0.29;
					mouthVertical: 0.67;
					noseDepth: 0.7;
					noseVertical: 0.195;
				};
				hairGradient: {
					colorKeys: [
						{
							blue: 0.015686275;
							green: 0.027450982;
							red: 0.12941177;
						},
						{
							blue: 0.03137255;
							green: 0.0627451;
							keyPosition: 0.22999924;
							red: 0.21960786;
						},
						{
							blue: 0.027450982;
							green: 0.08627451;
							keyPosition: 0.4399939;
							red: 0.3254902;
						},
						{
							blue: 0.23529413;
							green: 0.40784317;
							keyPosition: 0.8899977;
							red: 0.67058825;
						},
						{
							blue: 0.28627452;
							green: 0.47450984;
							keyPosition: 1;
							red: 0.7294118;
						},
					];
				};
				headSelection: {
					selection: "KITE";
				};
				mouthSelection: {
					selection: "OPTION_FIVE";
				};
				noseSelection: {
					selection: "OPTION_FIVE";
				};
				skinGradient: {
					colorKeys: [
						{
							blue: 0.16470589;
							green: 0.1137255;
							keyPosition: 0.089906156;
							red: 0.2901961;
						},
						{
							blue: 0.3529412;
							green: 0.42352945;
							keyPosition: 0.30000764;
							red: 0.7294118;
						},
						{
							blue: 0.46274513;
							green: 0.54509807;
							keyPosition: 0.5000076;
							red: 0.8470589;
						},
						{
							blue: 0.5529412;
							green: 0.6509804;
							keyPosition: 0.6599985;
							red: 0.9333334;
						},
						{
							blue: 0.73333335;
							green: 0.82745105;
							keyPosition: 0.9000076;
							red: 1;
						},
					];
				};
			};
			femaleNeutralAvatar: {
				articles: {
					backpack: {
						articleId: "n_backpack_default_a_0";
					};
					belt: {
						articleId: "n_belt_default_a_0";
					};
					bodyPreset: {
						articleId: "BodyPresetDefault";
					};
					eyebrow: {
						articleId: "n_eyebrows_legacyfemale_0";
					};
					eyelash: {
						articleId: "n_eyelashes_legacyfemale_0";
					};
					facePreset: {
						articleId: "FacePresetSix";
					};
					gloves: {
						articleId: "n_gloves_default_a_0";
					};
					hair: {
						articleId: "n_hair_default_a_0";
					};
					hat: {
						articleId: "n_hat_default_a_0";
					};
					necklace: {
						articleId: "n_necklace_default_0";
					};
					pants: {
						articleId: "n_pants_default_a_0";
					};
					pose: {
						articleId: "n_pose_idle_a";
					};
					shirt: {
						articleId: "n_shirt_default_a_0";
					};
					shoes: {
						articleId: "n_shoes_default_a_0";
					};
					socks: {
						articleId: "n_socks_default_a_0";
					};
				};
				bodyBlend: {
					bust: 0.6;
					hips: 0.8;
				};
				earSelection: {
					selection: "DEFAULT";
				};
				eyeGradient: {
					colorKeys: [
						{
							keyPosition: 0.000001;
						},
						{
							blue: 0.18431373;
							green: 0.20000002;
							keyPosition: 0.11999695;
							red: 0.050980397;
						},
						{
							blue: 0.49411768;
							green: 0.52156866;
							keyPosition: 0.5300069;
							red: 0.27450982;
						},
						{
							blue: 1;
							green: 1;
							keyPosition: 1;
							red: 1;
						},
					];
				};
				eyeSelection: {
					selection: "DEFAULT";
				};
				facePositions: {
					browDepth: 0.5;
					browHorizontal: 0.5;
					browVertical: 0.182;
					eyeDepth: 0.35;
					eyeHorizontal: 0.4;
					eyeVertical: 0.249;
					mouthDepth: 0.5;
					mouthHorizontal: 0.5;
					mouthVertical: 0.553;
					noseDepth: 0.5;
					noseVertical: 0.447;
				};
				hairGradient: {
					colorKeys: [
						{
							blue: 0.007843138;
							green: 0.011764707;
							red: 0.015686275;
						},
						{
							blue: 0.078431375;
							green: 0.09411766;
							keyPosition: 0.22000457;
							red: 0.121568635;
						},
						{
							blue: 0.11764707;
							green: 0.14117648;
							keyPosition: 0.42000458;
							red: 0.18431373;
						},
						{
							blue: 0.26666668;
							green: 0.3254902;
							keyPosition: 0.7900053;
							red: 0.4039216;
						},
						{
							blue: 0.38823533;
							green: 0.454902;
							keyPosition: 1;
							red: 0.5176471;
						},
					];
				};
				headSelection: {
					selection: "LEGACYFEMALE";
				};
				mouthSelection: {
					selection: "DEFAULT";
				};
				noseSelection: {
					selection: "DEFAULT";
				};
				skinGradient: {
					colorKeys: [
						{
							blue: 0.24611364;
							green: 0.26516885;
							keyPosition: 0.089906156;
							red: 0.6415094;
						},
						{
							blue: 0.47748303;
							green: 0.5368139;
							keyPosition: 0.33000687;
							red: 0.8207547;
						},
						{
							blue: 0.6359618;
							green: 0.7049239;
							keyPosition: 0.5245594;
							red: 0.9150943;
						},
						{
							blue: 0.7686275;
							green: 0.8431373;
							keyPosition: 0.7827878;
							red: 0.96470594;
						},
						{
							blue: 0.87531143;
							green: 0.9191082;
							keyPosition: 0.8651865;
							red: 0.990566;
						},
						{
							blue: 0.91194963;
							green: 0.9442348;
							keyPosition: 0.9649958;
							red: 1;
						},
					];
				};
			};
			maleNeutralAvatar: {
				articles: {
					backpack: {
						articleId: "n_backpack_default_b_2";
					};
					bodyPreset: {
						articleId: "BodyPresetFour";
					};
					eyebrow: {
						articleId: "n_eyebrows_legacymale_0";
					};
					eyelash: {
						articleId: "n_eyelashes_legacymale_0";
					};
					facePreset: {
						articleId: "FacePresetSeven";
					};
					gloves: {
						articleId: "n_gloves_default_b_2";
					};
					hair: {
						articleId: "n_hair_default_b_0";
					};
					hat: {
						articleId: "n_hat_default_b_5";
					};
					pants: {
						articleId: "n_pants_default_b_0";
					};
					pose: {
						articleId: "n_pose_idle_b";
					};
					shirt: {
						articleId: "n_shirt_default_b_8";
					};
					shoes: {
						articleId: "n_shoes_default_b_2";
					};
					socks: {
						articleId: "n_socks_default_b_3";
					};
				};
				bodyBlend: {
					hips: 0.4;
					musculature: 0.5;
					shoulders: 1;
					size: 0.2;
				};
				earSelection: {
					selection: "DEFAULT";
				};
				eyeGradient: {
					colorKeys: [
						{
							keyPosition: 0.000001;
						},
						{
							blue: 0.18431373;
							green: 0.20000002;
							keyPosition: 0.11999695;
							red: 0.050980397;
						},
						{
							blue: 0.49411768;
							green: 0.52156866;
							keyPosition: 0.5300069;
							red: 0.27450982;
						},
						{
							blue: 1;
							green: 1;
							keyPosition: 1;
							red: 1;
						},
					];
				};
				eyeSelection: {
					selection: "DEFAULT";
				};
				facePositions: {
					browDepth: 0.626;
					browHorizontal: 0.5;
					browVertical: 0.18;
					eyeDepth: 0.5;
					eyeHorizontal: 0.5;
					eyeVertical: 0.3;
					mouthDepth: 0.5;
					mouthHorizontal: 0.5;
					mouthVertical: 0.5;
					noseDepth: 0.5;
					noseVertical: 0.369;
				};
				hairGradient: {
					colorKeys: [
						{
							blue: 0.007843138;
							green: 0.011764707;
							red: 0.015686275;
						},
						{
							blue: 0.078431375;
							green: 0.09411766;
							keyPosition: 0.22000457;
							red: 0.121568635;
						},
						{
							blue: 0.11764707;
							green: 0.14117648;
							keyPosition: 0.42000458;
							red: 0.18431373;
						},
						{
							blue: 0.26666668;
							green: 0.3254902;
							keyPosition: 0.7900053;
							red: 0.4039216;
						},
						{
							blue: 0.38823533;
							green: 0.454902;
							keyPosition: 1;
							red: 0.5176471;
						},
					];
				};
				headSelection: {
					selection: "LEGACYMALE";
				};
				mouthSelection: {
					selection: "DEFAULT";
				};
				noseSelection: {
					selection: "DEFAULT";
				};
				skinGradient: {
					colorKeys: [
						{
							blue: 0.24611364;
							green: 0.26516885;
							keyPosition: 0.089906156;
							red: 0.6415094;
						},
						{
							blue: 0.47748303;
							green: 0.5368139;
							keyPosition: 0.33000687;
							red: 0.8207547;
						},
						{
							blue: 0.6359618;
							green: 0.7049239;
							keyPosition: 0.5245594;
							red: 0.9150943;
						},
						{
							blue: 0.7686275;
							green: 0.8431373;
							keyPosition: 0.7827878;
							red: 0.96470594;
						},
						{
							blue: 0.87531143;
							green: 0.9191082;
							keyPosition: 0.8651865;
							red: 0.990566;
						},
						{
							blue: 0.91194963;
							green: 0.9442348;
							keyPosition: 0.9649958;
							red: 1;
						},
					];
				};
			};
			neutralAvatarLegacyMappingVersion: 4;
			neutralAvatarSettingsEnabled: true;
			neutralAvatarSettingsSentinelValue: 385492570;
			obMoveSettingsNumber101: true;
			obMoveSettingsNumber120: true;
			obMoveSettingsNumber123: true;
			obMoveSettingsNumber124: true;
		};
	};
}

export interface OnboardingSettings {
	templateId: "ONBOARDING_SETTINGS";
	data: {
		templateId: "ONBOARDING_SETTINGS";
		onboardingSettings: {
			adventureSyncPromptStep: 1;
			arPromptPlayerLevel: 55;
			disableInitialArPrompt: true;
		};
	};
}

export interface PartyDarkLaunchSettings {
	templateId: "PARTY_PLAY_DARK_LAUNCH_SETTINGS";
	data: {
		templateId: "PARTY_PLAY_DARK_LAUNCH_SETTINGS";
		partyDarkLaunchSettings: {
			createOrJoinWaitProbability: [
				{
					waitTimeMs: 10000;
					weight: 25;
				},
				{
					waitTimeMs: 12001;
					weight: 25;
				},
				{
					waitTimeMs: 14001;
					weight: 25;
				},
				{
					waitTimeMs: 16000;
					weight: 25;
				},
			];
			leavePartyProbablity: [
				{
					maxDurationMs: 10000;
					weight: 25;
				},
				{
					maxDurationMs: 12000;
					weight: 25;
				},
				{
					maxDurationMs: 14000;
					weight: 25;
				},
				{
					maxDurationMs: 16000;
					weight: 25;
				},
			];
			probabilityToCreatePercent: 50;
			rolloutPlayersPerBillion: 1000000000;
			updateLocationEnabled: true;
			updateLocationOverridePeriodMs: 3000;
		};
	};
}

export interface PartyIapBoostsSettings {
	templateId: "PARTY_PLAY_IAP_BOOSTS_SETTINGS";
	data: {
		templateId: "PARTY_PLAY_IAP_BOOSTS_SETTINGS";
		partyIapBoostsSettings: {
			boost: [
				{
					dailyContributionLimit: 4;
					durationMultiplier: 0.5;
					supportedItemTypes: "ITEM_INCENSE_ORDINARY";
				},
				{
					dailyContributionLimit: 4;
					durationMultiplier: 0.5;
					supportedItemTypes: "ITEM_STAR_PIECE";
				},
				{
					dailyContributionLimit: 4;
					durationMultiplier: 0.5;
					supportedItemTypes: "ITEM_LUCKY_EGG";
				},
			];
		};
	};
}

export interface PartyRecommendationSettings {
	templateId: "PARTY_RECOMMENDATION_SETTINGS";
	data: {
		templateId: "PARTY_RECOMMENDATION_SETTINGS";
		partyRecommendationSettings: {
			megaEvoCombatRatingScale: 1.2;
			mode: "PARTY_RECOMMENDATION_MODE_3";
			thirdMoveWeight: 0.1;
			variance: 0.1;
		};
	};
}

export interface PhotoSettings {
	templateId: "PHOTO_SETTINGS";
	data: {
		templateId: "PHOTO_SETTINGS";
		photoSettings: {
			bannerImageUrl: ["PokemonSetsHeaderImage01", "PokemonSetsHeaderImage02", "PokemonSetsHeaderImage03"];
			irisFlags: 2011175120;
			isIrisEnabled: true;
			screenCaptureSize: 2;
		};
	};
}

export interface PlannerSettings {
	templateId: "EVENT_PLANNER_SETTINGS";
	data: {
		templateId: "EVENT_PLANNER_SETTINGS";
		plannerSettings: {
			activeReminderTimeSeconds: 120;
			enabled: true;
			eventSettings: [
				{
					maxRsvpsPerSlot: 100;
					maxTimeslots: 20;
					messageTiming: [
						{
							messageSendTime: "TIMESLOT_START";
						},
						{
							messageSendBeforeEventSeconds: 600;
							messageSendTime: "TIMESLOT_EARLY";
						},
					];
					rsvpBonusTimeWindowMinutes: 17;
					rsvpClearInventoryMinutes: 30;
					rsvpInviteEnabled: true;
					rsvpTimeslotDurationSeconds: 600;
					timeslotGapSeconds: 900;
				},
				{
					eventType: "GMAX";
					maxRsvpsPerSlot: 100;
					maxTimeslots: 500;
					messageTiming: [
						{
							messageSendTime: "TIMESLOT_START";
						},
						{
							messageSendBeforeEventSeconds: 600;
							messageSendTime: "TIMESLOT_EARLY";
						},
					];
					rsvpBonusTimeWindowMinutes: 32;
					rsvpClearInventoryMinutes: 30;
					rsvpInviteEnabled: true;
					rsvpTimeslotDurationSeconds: 300;
					timeslotGapSeconds: 600;
				},
			];
			maxPendingRsvpInvites: 10;
			maxRsvpDisplayDistanceM: 4000;
			maxRsvpInvites: 5;
			maxRsvpsPerTrainer: 50;
			nearbyRsvpTabEnabled: true;
			rsvpCountGeoPushGatewayNamespace: "pgorelease/RSVP_COUNT_GEO";
			rsvpCountPushGatewayNamespace: "pgorelease/RSVP_COUNT";
			rsvpCountTopperPollingTimeSeconds: 300;
			rsvpCountUpdateTimeSeconds: 300;
			sendRsvpInviteEnabled: true;
		};
	};
}

export interface PlayerBonusSystemSettings {
	templateId: "PLAYER_BONUS_SYSTEM_SETTINGS";
	data: {
		templateId: "PLAYER_BONUS_SYSTEM_SETTINGS";
		playerBonusSystemSettings: {
			dayNightEvoEnabled: true;
			maxBonusDurationMs: "86400000";
		};
	};
}

export interface PokeballThrowPropertySettings {
	templateId: "POKEBALL_THROW_PROPERTY_SETTINGS";
	data: {
		templateId: "POKEBALL_THROW_PROPERTY_SETTINGS";
		pokeballThrowPropertySettings: {
			throwProperties: [
				{
					belowGroundFlyTimeoutSeconds: 1;
					curveballModifier: {
						x: 5;
						y: 0.25;
						z: 0.25;
					};
					dragSnapSpeed: 16;
					flyTimeoutDuration: 3;
					launchSpeedThreshold: 0.2;
					launchVelocityMultiplier: {
						x: 4;
						y: 16;
					};
					maxAngularVelocity: 10;
					maxLaunchAngle: 45;
					maxLaunchAngleHeight: 1.5;
					maxLaunchSpeed: 30;
					minLaunchAngle: 35;
					minSpinParticleAmount: 0.4;
					overshootCorrection: 0.8;
					throwProertiesCategory: "BREAD";
					undershootCorrection: 0.5;
				},
			];
		};
	};
}

export interface PokedexCategoriesSettings {
	templateId: "POKEDEX_CATEGORIES_SETTINGS";
	data: {
		templateId: "POKEDEX_CATEGORIES_SETTINGS";
		pokedexCategoriesSettings: {
			clientShinyFormCheck: true;
			featureEnabled: true;
			pokedexCategorySettingsInOrder: [
				{
					milestoneGoal: 15;
					pokedexCategory: "SHINY";
				},
				{
					milestoneGoal: 10;
					pokedexCategory: "LUCKY";
				},
				{
					milestoneGoal: 10;
					pokedexCategory: 202;
				},
				{
					milestoneGoal: 10;
					pokedexCategory: 201;
				},
				{
					milestoneGoal: 9999;
					pokedexCategory: "BREAD_MODE";
					visuallyHidden: true;
				},
				{
					milestoneGoal: 9999;
					pokedexCategory: "BREAD_DOUGH_MODE";
					visuallyHidden: true;
				},
				{
					milestoneGoal: 9999;
					pokedexCategory: "COSTUME";
					visuallyHidden: true;
				},
				{
					milestoneGoal: 9999;
					pokedexCategory: "SHINY_THREE_STAR";
					visuallyHidden: true;
				},
				{
					milestoneGoal: 9999;
					pokedexCategory: "THREE_STAR";
					visuallyHidden: true;
				},
				{
					milestoneGoal: 10;
					pokedexCategory: "SHADOW";
				},
				{
					milestoneGoal: 10;
					pokedexCategory: "PURIFIED";
				},
				{
					milestoneGoal: 10;
					pokedexCategory: "FOUR_STAR";
				},
			];
			searchEnabled: true;
			showDexAfterNewFormEnabled: true;
			showShinyDexCelebrationEnabled: true;
		};
	};
}

export interface PokedexSizeStatsSystemSettings {
	templateId: "POKEDEX_SIZE_STATS_SYSTEM_SETTINGS";
	data: {
		templateId: "POKEDEX_SIZE_STATS_SYSTEM_SETTINGS";
		pokedexSizeStatsSystemSettings: {
			displayEnabled: true;
			enableRandomizedHeightAndWeightForWildPokemon: true;
			numDaysNewBubbleTrack: 7;
			pokedexDisplayPokemonTrackedThreshold: 3;
			recordDisplayPokemonTrackedThreshold: 3;
		};
	};
}

export interface PokedexV2Settings {
	templateId: "POKEDEX_V2_SETTINGS";
	data: {
		templateId: "POKEDEX_V2_SETTINGS";
		pokedexV2Settings: {
			maxTrackedPokemon: 1;
			pokemonAlertExcluded: ["DITTO", "ZORUA", "ZOROARK", "SMEARGLE", "KECLEON"];
		};
	};
}

export interface PokemonFxSettings {
	templateId: "POKEMON_FX_SETTINGS";
	data: {
		templateId: "POKEMON_FX_SETTINGS";
		pokemonFxSettings: {
			hidingInPhoto: true;
		};
	};
}

export interface PokemonHomeSettings {
	templateId: "POKEMON_HOME_SETTINGS";
	data: {
		templateId: "POKEMON_HOME_SETTINGS";
		pokemonHomeSettings: {
			energySkuId: "hometransport.1";
			playerMinLevel: 1;
			transporterEnergyGainPerHour: 60;
			transporterMaxEnergy: 10000;
		};
	};
}

export interface PokemonTagSettings {
	templateId: "POKEMON_TAG_SETTINGS";
	data: {
		templateId: "POKEMON_TAG_SETTINGS";
		pokemonTagSettings: {
			colorBinding: [
				{
					color: "POKEMON_TAG_COLOR_BLUE";
					hexCode: "#48AEFC";
				},
				{
					color: "POKEMON_TAG_COLOR_GREEN";
					hexCode: "#5FE079";
				},
				{
					color: "POKEMON_TAG_COLOR_PURPLE";
					hexCode: "#BB67EA";
				},
				{
					color: "POKEMON_TAG_COLOR_YELLOW";
					hexCode: "#F5E54A";
				},
				{
					color: "POKEMON_TAG_COLOR_RED";
					hexCode: "#E06666";
				},
				{
					color: "POKEMON_TAG_COLOR_ORANGE";
					hexCode: "#F9A138";
				},
				{
					color: "POKEMON_TAG_COLOR_GREY";
					hexCode: "#D8D8D8";
				},
				{
					color: "POKEMON_TAG_COLOR_BLACK";
					hexCode: "#3C3C3C";
				},
			];
			maxNumTagsAllowed: 100;
			minPlayerLevelForPokemonTagging: 14;
		};
	};
}

export interface PopupControlSettings {
	templateId: "POPUP_CONTROL_SETTINGS";
	data: {
		templateId: "POPUP_CONTROL_SETTINGS";
		popupControlSettings: {
			hideAwareOfYourSurroundingsPopup: true;
			hideMedalEarnedPopupUnitAfterFirstPokemon: true;
			hideWeatherWarningPopup: true;
		};
	};
}

export interface PostcardCollectionSettings {
	templateId: "POSTCARD_COLLECTION_SETTINGS";
	data: {
		templateId: "POSTCARD_COLLECTION_SETTINGS";
		postcardCollectionSettings: {
			enabled: true;
		};
	};
}

export interface PowerUpPokestopsSettings {
	templateId: "POWER_UP_POKESTOP_SHARED_SETTINGS";
	data: {
		templateId: "POWER_UP_POKESTOP_SHARED_SETTINGS";
		powerUpPokestopsSettings: {
			powerUpPokestopsMinPlayerLevel: 20;
			validatePokestopOnFortSearchPercent: 1;
		};
	};
}

export interface PrimalEvoSettings {
	templateId: "PRIMAL_EVO_SETTINGS";
	data: {
		templateId: "PRIMAL_EVO_SETTINGS";
		primalEvoSettings: {
			commonTempSettings: {
				enableBuddyWalkingTempEvoEnergyAward: true;
				evolutionLengthMs: "28800000";
				numTempEvoLevels: 3;
			};
			maxCandyHoardSize: 9999;
			typeBoosts: [
				{
					boostType: ["POKEMON_TYPE_ELECTRIC", "POKEMON_TYPE_WATER", "POKEMON_TYPE_BUG"];
					pokemonId: "KYOGRE";
				},
				{
					boostType: ["POKEMON_TYPE_GRASS", "POKEMON_TYPE_FIRE", "POKEMON_TYPE_GROUND"];
					pokemonId: "GROUDON";
				},
				{
					boostType: ["POKEMON_TYPE_FLYING", "POKEMON_TYPE_DRAGON", "POKEMON_TYPE_PSYCHIC"];
					pokemonId: "RAYQUAZA";
				},
			];
		};
	};
}

export interface PtcOauthSettings {
	templateId: "PTC_OAUTH_SETTINGS";
	data: {
		templateId: "PTC_OAUTH_SETTINGS";
		ptcOauthSettings: {
			endTimeMs: "2022190740000";
			linkingRewardItem: "ITEM_INCUBATOR_BASIC";
			ptcAccountLinkingEnabled: true;
		};
	};
}

export interface QuestDialogueInboxSettings {
	templateId: "QUEST_DIALOGUE_INBOX_SETTINGS";
	data: {
		templateId: "QUEST_DIALOGUE_INBOX_SETTINGS";
	};
}

export interface QuickInviteSettings {
	templateId: "QUICK_INVITE_SETTINGS_RAID";
	data: {
		templateId: "QUICK_INVITE_SETTINGS_RAID";
		quickInviteSettings: {
			enabled: true;
			suggestedPlayersVariation: "PGO_RAID_A_TEST_0611";
		};
	};
}

export interface RaidEntryCostSettings {
	templateId: "RAID_ENTRY_COST_SETTINGS";
	data: {
		templateId: "RAID_ENTRY_COST_SETTINGS";
	};
}

export interface RaidLobbyCounterSettings {
	templateId: "RAID_LOBBY_COUNTER_SETTINGS";
	data: {
		templateId: "RAID_LOBBY_COUNTER_SETTINGS";
		raidLobbyCounterSettings: {
			mapDisplayEnabled: true;
			maxCountToUpdate: 20;
			nearbyDisplayEnabled: true;
			pollingEnabled: true;
			pollingIntervalMs: 60000;
			pollingRadiusMeters: 100;
			publishCutoffTimeMs: 20000;
			publishEnabled: true;
			showCounterRadiusMeters: 709;
			subscribeEnabled: true;
			subscribeS2Level: 13;
			subscriptionNamespace: "pgorelease/RAID_LOBBY_COUNT";
		};
	};
}

export interface RaidSettings {
	templateId: "RAID_CLIENT_SETTINGS";
	data: {
		templateId: "RAID_CLIENT_SETTINGS";
		raidSettings: {
			ablcemdnbkc: true;
			bootCutoffMs: 15000;
			bootRaidEnabled: true;
			bootSoloMs: 30000;
			canInviteFriendsInPerson: true;
			canInviteFriendsRemotely: true;
			failedFriendInviteInfoEnabled: true;
			fetchProfileFromSocialEnabled: true;
			friendInviteCutoffTimeSec: 20;
			friendRequestsEnabled: true;
			inviteCooldownDurationMillis: "30000";
			maxNumFriendInvites: 5;
			maxNumFriendInvitesPerAction: 5;
			maxPlayersPerLobby: 20;
			maxRemotePlayersPerLobby: 10;
			maxRemoteRaidPasses: 3;
			minPlayersToBoot: 2;
			obRaidClientSettingsNumber1: 1;
			obRaidClientSettingsNumber29: 1;
			pokemonMusicOverrides: [
				{
					battleMusicKey: "GoFest2025_Raid_Battle";
					forms: ["ZACIAN_HERO", "ZACIAN_CROWNED_SWORD"];
					pokemon: "ZACIAN";
				},
				{
					battleMusicKey: "GoFest2025_Raid_Battle";
					forms: ["ZAMAZENTA_HERO", "ZAMAZENTA_CROWNED_SHIELD"];
					pokemon: "ZAMAZENTA";
				},
				{
					battleMusicKey: "GoTour2025Music01";
					forms: ["KYUREM_BLACK", "KYUREM_WHITE", "KYUREM_NORMAL"];
					pokemon: "KYUREM";
				},
				{
					battleMusicKey: "GoTour2025Music01";
					pokemon: "ZEKROM";
				},
				{
					battleMusicKey: "GoTour2025Music01";
					pokemon: "RESHIRAM";
				},
				{
					battleMusicKey: "GoFest2024Music_Battle";
					forms: ["NECROZMA_NORMAL", "NECROZMA_DUSK_MANE", "NECROZMA_DAWN_WINGS", "NECROZMA_ULTRA"];
					pokemon: "NECROZMA";
				},
				{
					battleMusicKey: "GoFest2024Music_Battle";
					pokemon: "SOLGALEO";
				},
				{
					battleMusicKey: "GoFest2024Music_Battle";
					pokemon: "LUNALA";
				},
				{
					battleMusicKey: "RaidXerneasYveltalBattleMusic";
					pokemon: "XERNEAS";
				},
				{
					battleMusicKey: "RaidXerneasYveltalBattleMusic";
					pokemon: "YVELTAL";
				},
				{
					battleMusicKey: "GoTour2024Music01";
					forms: ["PALKIA_NORMAL", "PALKIA_ORIGIN"];
					pokemon: "PALKIA";
				},
				{
					battleMusicKey: "GoTour2024Music01";
					forms: ["DIALGA_NORMAL", "DIALGA_ORIGIN"];
					pokemon: "DIALGA";
				},
				{
					battleMusicKey: "GoTour2023Music02";
					pokemon: "RAYQUAZA";
				},
			];
			popupTimeMs: 30000;
			raidFeatureFlags: {
				useCachedRaidBossPokemon: true;
			};
			raidLevelMusicOverrides: [
				{
					battleMusicKey: "GoFest2022Music_Battle";
					raidLevel: "RAID_LEVEL_ULTRA_BEAST";
				},
				{
					battleMusicKey: "GoTour2023Music02";
					raidLevel: "RAID_LEVEL_PRIMAL";
				},
				{
					battleMusicKey: "RocketCombatMusic";
					raidLevel: "RAID_LEVEL_1_SHADOW";
				},
				{
					battleMusicKey: "RocketLeaderCombatMusic";
					raidLevel: "RAID_LEVEL_3_SHADOW";
				},
				{
					battleMusicKey: "RocketBossCombatMusic";
					raidLevel: "RAID_LEVEL_5_SHADOW";
				},
			];
			remoteDamageModifier: 1;
			remoteRaidDistanceValidation: true;
			remoteRaidEnabled: true;
			remoteRaidsMinPlayerLevel: 5;
			unsupportedRaidLevelsForFriendInvites: ["RAID_LEVEL_EXTENDED_EGG", "RAID_LEVEL_4", 18, 19];
			unsupportedRemoteRaidLevels: ["RAID_LEVEL_EXTENDED_EGG", "RAID_LEVEL_4", 18, 19];
		};
	};
}

export interface ReferralSettings {
	templateId: "REFERRAL_SETTINGS";
	data: {
		templateId: "REFERRAL_SETTINGS";
		referralSettings: {
			addReferrerGracePeriodMs: "259200000";
			deepLinkUrl: "https://pokemongolive.com/refer?code={0}&source={1}";
			featureEnabled: true;
			imageShareReferralEnabled: true;
			minNumDaysWithoutSessionForLapsedPlayer: 90;
			recentFeatures: [
				{
					description: "welcome_level_up_faster_desc";
					featureName: "welcome_level_up_faster_name";
					iconType: "XP";
				},
				{
					description: "welcome_max_battle_desc";
					featureName: "feature_max_battle_name";
					iconType: 37;
				},
				{
					description: "welcome_remote_raid_desc";
					featureName: "welcome_remote_raid_name";
					iconType: "RAID";
				},
			];
		};
	};
}

export interface RemoteTradeSettings {
	templateId: "REMOTE_TRADE_SETTINGS";
	data: {
		templateId: "REMOTE_TRADE_SETTINGS";
		remoteTradeSettings: {
			enabled: true;
			maxRemoteTradesPerDay: 1;
			pokemonUntradableDays: 30;
			requestedPokemonCount: 3;
			taggingUnlockPointThreshold: 85;
			timeLimitMinutes: 2880;
			tradeExpiryReminderMinutes: 1440;
		};
	};
}

export interface RouteBadgeSettings {
	templateId: "ROUTE_BADGE_SETTINGS";
	data: {
		templateId: "ROUTE_BADGE_SETTINGS";
		routeBadgeSettings: {
			target: [0, 5, 20, 100];
		};
	};
}

export interface RouteCreationSettings {
	templateId: "ROUTE_CREATION_SETTINGS";
	data: {
		templateId: "ROUTE_CREATION_SETTINGS";
		routeCreationSettings: {
			allowableGpsDriftMeters: 15;
			allowAppeals: true;
			clientBreadcrumbSettings: {
				asFallbackForegroundReportingInvervalS: 11;
				sessionDurationM: 120;
				updateIntervalS: 2;
			};
			creationLimitPerWindow: 15;
			creationLimitWindowDays: 30;
			disabledTags: [
				"route_tag_category_terrain",
				"route_tag_category_nearby",
				"route_tag_category_suitability",
				"route_tag_category_theme",
				"route_tag_category_misc",
				"route_tag_hilly",
				"route_tag_flat",
				"route_tag_easy_going",
				"route_tag_intense",
			];
			durationBufferS: 120;
			durationDistanceToSpeedMultiplier: 1.3;
			enabled: true;
			enableImmediateRouteIngestion: true;
			interactionRangeMeters: 40;
			maxClientMapPanningDistanceM: 1500;
			maxDescriptionLength: 240;
			maxDistanceFromAnchorPotsM: 100;
			maxDistanceWarningDistanceMeters: 500;
			maxNameLength: 50;
			maxOpenRoutes: 5;
			maxPostPunishmentBanTimeMs: "1";
			maxRecallCountThreshold: 1;
			maxRecordingSpeedMetersPerSecond: 1000;
			maxSubmissionCountThreshold: 10;
			maxTotalDistanceM: 20000;
			minBreadcrumbDistanceDeltaMeters: 3;
			minPlayerLevel: 30;
			minTotalDistanceM: 500;
			moderationEnabled: true;
			resumeRangeMeters: 30;
			showSubmissionStatusHistory: true;
		};
	};
}

export interface RouteDiscoverySettings {
	templateId: "ROUTE_DISCOVERY_SETTINGS";
	data: {
		templateId: "ROUTE_DISCOVERY_SETTINGS";
		routeDiscoverySettings: {
			enableBadgeRoutesDiscovery: true;
			maxBadgeRoutesDiscoverySpannerTxns: 5;
			maxClientMapPanningDistanceMeters: 250;
			maxFavoriteRoutes: 500;
			maxRoutesViewable: 30;
			nearbyVisibleRadiusMeters: 500;
			newRouteThreshold: 10;
			popularRoutesFraction: 0.2;
		};
	};
}

export interface RoutePinSettings {
	templateId: "ROUTE_PIN_SETTINGS";
	data: {
		templateId: "ROUTE_PIN_SETTINGS";
		routePinSettings: {
			creatorMax: 6;
			maxDistanceFromRouteM: 40;
			maxNamedStickersPerPin: 6;
			maxPinsForClientDisplay: 10;
			maxPinsPerRoute: 6;
			pinMessage: [
				{
					category: ["PIN_CATEGORY_1", "PIN_CATEGORY_UNSET"];
					key: "route_pin_test_message_pikachu";
					levelRequired: 3;
				},
				{
					category: ["PIN_CATEGORY_1"];
					key: "route_pin_test_message_charmander";
					levelRequired: 3;
				},
				{
					category: ["PIN_CATEGORY_2"];
					key: "route_pin_test_message_squirtle";
					levelRequired: 3;
				},
				{
					category: ["PIN_CATEGORY_1"];
					key: "route_pin_test_message_bulbasaur";
					levelRequired: 3;
				},
			];
			playerMax: 10;
		};
	};
}

export interface RoutePlaySettings {
	templateId: "ROUTE_PLAY_SETTINGS";
	data: {
		templateId: "ROUTE_PLAY_SETTINGS";
		routePlaySettings: {
			bonusActiveDistanceThresholdMeters: 40;
			enableRouteRatingDetails: true;
			marginMinimumMeters: 80;
			marginPercentage: 0.94;
			minPlayerLevel: 7;
			obRoutePlaySettingsNumber29: 1;
			obRoutePlaySettingsNumber30: 27;
			obRoutePlaySettingsNumber33: 7;
			obRoutePlaySettingsNumber45: 1;
			resumeRangeMeters: 40;
			routeEngagementStatsShardCount: 3;
			routeExpirationMinutes: 185;
			routePauseDistanceM: 3200;
		};
	};
}

export interface RoutesNearbyNotifSettings {
	templateId: "ROUTES_NEARBY_NOTIF_SETTINGS";
	data: {
		templateId: "ROUTES_NEARBY_NOTIF_SETTINGS";
		routesNearbyNotifSettings: {
			maxNotifs: 5;
			timeBetweenNotifsMs: "604800000";
		};
	};
}

export interface RoutesPartyPlayInteropSettings {
	templateId: "ROUTES_PARTY_PLAY_INTEROP_SETTINGS";
	data: {
		templateId: "ROUTES_PARTY_PLAY_INTEROP_SETTINGS";
		routesPartyPlayInteropSettings: {
			consumptionInteroperable: true;
		};
	};
}

export interface RouteStampCategorySettings {
	templateId: "ROUTE_STAMP_CATEGORY_DEFAULT";
	data: {
		templateId: "ROUTE_STAMP_CATEGORY_DEFAULT";
		routeStampCategorySettings: {
			active: true;
			category: "ROUTE_STAMP_CATEGORY_DEFAULT";
			collectionSize: 16;
			sortOrder: 1;
		};
	};
}

export interface SharedFusionSettings {
	templateId: "SHARED_FUSION_SETTINGS";
	data: {
		templateId: "SHARED_FUSION_SETTINGS";
		sharedFusionSettings: {
			fusionEnabled: true;
		};
	};
}

export interface SharedMoveSettings {
	templateId: "SHARED_MOVE_SETTINGS";
	data: {
		templateId: "SHARED_MOVE_SETTINGS";
		sharedMoveSettings: {
			purifiedThirdMoveUnlockCandyMultiplier: 0.8;
			purifiedThirdMoveUnlockStardustMultiplier: 0.8;
			shadowThirdMoveUnlockCandyMultiplier: 1.2;
			shadowThirdMoveUnlockStardustMultiplier: 1.2;
			sharedMoveSettingsBool1: true;
		};
	};
}

export interface SoftSfidaSettings {
	templateId: "SOFT_SFIDA_SETTINGS";
	data: {
		templateId: "SOFT_SFIDA_SETTINGS";
	};
}

export interface SourdoughMoveMappingSettings {
	templateId: "SOURDOUGH_MOVE_MAPPING_SETTINGS";
	data: {
		templateId: "SOURDOUGH_MOVE_MAPPING_SETTINGS";
		sourdoughMoveMappingSettings: {
			mappings: [
				{
					form: "VENUSAUR_NORMAL";
					move: "VN_BM_045";
					pokemonId: "VENUSAUR";
				},
				{
					form: "CHARIZARD_NORMAL";
					move: "VN_BM_019";
					pokemonId: "CHARIZARD";
				},
				{
					form: "BLASTOISE_NORMAL";
					move: "VN_BM_046";
					pokemonId: "BLASTOISE";
				},
				{
					move: "VN_BM_020";
					pokemonId: "BUTTERFREE";
				},
				{
					form: "PIKACHU_NORMAL";
					move: "VN_BM_021";
					pokemonId: "PIKACHU";
				},
				{
					form: "MEOWTH_NORMAL";
					move: "VN_BM_022";
					pokemonId: "MEOWTH";
				},
				{
					form: "MACHAMP_NORMAL";
					move: "VN_BM_023";
					pokemonId: "MACHAMP";
				},
				{
					form: "GENGAR_NORMAL";
					move: "VN_BM_024";
					pokemonId: "GENGAR";
				},
				{
					form: "KINGLER_NORMAL";
					move: "VN_BM_025";
					pokemonId: "KINGLER";
				},
				{
					form: "LAPRAS_NORMAL";
					move: "VN_BM_026";
					pokemonId: "LAPRAS";
				},
				{
					form: "EEVEE_NORMAL";
					move: "VN_BM_027";
					pokemonId: "EEVEE";
				},
				{
					form: "SNORLAX_NORMAL";
					move: "VN_BM_028";
					pokemonId: "SNORLAX";
				},
				{
					form: "GARBODOR_NORMAL";
					move: "VN_BM_029";
					pokemonId: "GARBODOR";
				},
				{
					form: "MELMETAL_NORMAL";
					move: "VN_BM_030";
					pokemonId: "MELMETAL";
				},
				{
					move: "VN_BM_031";
					pokemonId: "CORVIKNIGHT";
				},
				{
					move: "VN_BM_032";
					pokemonId: "ORBEETLE";
				},
				{
					move: "VN_BM_033";
					pokemonId: "DREDNAW";
				},
				{
					move: "VN_BM_034";
					pokemonId: "COALOSSAL";
				},
				{
					move: "VN_BM_035";
					pokemonId: "FLAPPLE";
				},
				{
					move: "VN_BM_036";
					pokemonId: "APPLETUN";
				},
				{
					move: "VN_BM_037";
					pokemonId: "SANDACONDA";
				},
				{
					form: "TOXTRICITY_LOW_KEY";
					move: "VN_BM_038";
					pokemonId: "TOXTRICITY";
				},
				{
					form: "TOXTRICITY_AMPED";
					move: "VN_BM_038";
					pokemonId: "TOXTRICITY";
				},
				{
					move: "VN_BM_039";
					pokemonId: "CENTISKORCH";
				},
				{
					move: "VN_BM_040";
					pokemonId: "HATTERENE";
				},
				{
					move: "VN_BM_041";
					pokemonId: "GRIMMSNARL";
				},
				{
					move: "VN_BM_042";
					pokemonId: "ALCREMIE";
				},
				{
					move: "VN_BM_043";
					pokemonId: "COPPERAJAH";
				},
				{
					move: "VN_BM_044";
					pokemonId: "DURALUDON";
				},
				{
					move: "VN_BM_047";
					pokemonId: "RILLABOOM";
				},
				{
					move: "VN_BM_048";
					pokemonId: "CINDERACE";
				},
				{
					move: "VN_BM_049";
					pokemonId: "INTELEON";
				},
				{
					form: "URSHIFU_SINGLE_STRIKE";
					move: "VN_BM_050";
					pokemonId: "URSHIFU";
				},
				{
					form: "URSHIFU_RAPID_STRIKE";
					move: "VN_BM_051";
					pokemonId: "URSHIFU";
				},
				{
					form: "ZACIAN_CROWNED_SWORD";
					move: "VN_BM_060";
					optionalBMoveOverride: {
						move: "VN_BM_054";
						override: true;
					};
					optionalCMoveOverride: {
						move: "VN_BM_055";
						override: true;
					};
					pokemonId: "ZACIAN";
				},
				{
					form: "ZAMAZENTA_CROWNED_SHIELD";
					move: "VN_BM_061";
					optionalBMoveOverride: {
						move: "VN_BM_056";
						override: true;
					};
					optionalCMoveOverride: {
						move: "VN_BM_057";
						override: true;
					};
					pokemonId: "ZAMAZENTA";
				},
				{
					form: "ETERNATUS_ETERNAMAX";
					move: "VN_BM_062";
					optionalBMoveOverride: {
						move: "VN_BM_058";
						override: true;
					};
					optionalCMoveOverride: {
						move: "VN_BM_059";
						override: true;
					};
					pokemonId: "ETERNATUS";
				},
				{
					form: "ETERNATUS_NORMAL";
					move: "VN_BM_062";
					optionalBMoveOverride: {
						move: "VN_BM_058";
						override: true;
					};
					optionalCMoveOverride: {
						move: "VN_BM_059";
						override: true;
					};
					pokemonId: "ETERNATUS";
				},
				{
					form: "BUTTERFREE_NORMAL";
					move: "VN_BM_020";
					pokemonId: "BUTTERFREE";
				},
				{
					form: "CORVIKNIGHT_NORMAL";
					move: "VN_BM_031";
					pokemonId: "CORVIKNIGHT";
				},
				{
					form: "ORBEETLE_NORMAL";
					move: "VN_BM_032";
					pokemonId: "ORBEETLE";
				},
				{
					form: "DREDNAW_NORMAL";
					move: "VN_BM_033";
					pokemonId: "DREDNAW";
				},
				{
					form: "COALOSSAL_NORMAL";
					move: "VN_BM_034";
					pokemonId: "COALOSSAL";
				},
				{
					form: "FLAPPLE_NORMAL";
					move: "VN_BM_035";
					pokemonId: "FLAPPLE";
				},
				{
					form: "APPLETUN_NORMAL";
					move: "VN_BM_036";
					pokemonId: "APPLETUN";
				},
				{
					form: "SANDACONDA_NORMAL";
					move: "VN_BM_037";
					pokemonId: "SANDACONDA";
				},
				{
					form: "CENTISKORCH_NORMAL";
					move: "VN_BM_039";
					pokemonId: "CENTISKORCH";
				},
				{
					form: "HATTERENE_NORMAL";
					move: "VN_BM_040";
					pokemonId: "HATTERENE";
				},
				{
					form: "GRIMMSNARL_NORMAL";
					move: "VN_BM_041";
					pokemonId: "GRIMMSNARL";
				},
				{
					form: "ALCREMIE_NORMAL";
					move: "VN_BM_042";
					pokemonId: "ALCREMIE";
				},
				{
					form: "COPPERAJAH_NORMAL";
					move: "VN_BM_043";
					pokemonId: "COPPERAJAH";
				},
				{
					form: "DURALUDON_NORMAL";
					move: "VN_BM_044";
					pokemonId: "DURALUDON";
				},
				{
					form: "RILLABOOM_NORMAL";
					move: "VN_BM_047";
					pokemonId: "RILLABOOM";
				},
				{
					form: "CINDERACE_NORMAL";
					move: "VN_BM_048";
					pokemonId: "CINDERACE";
				},
				{
					form: "INTELEON_NORMAL";
					move: "VN_BM_049";
					pokemonId: "INTELEON";
				},
			];
		};
	};
}

export interface SpecialEggSettings {
	templateId: "SPECIAL_EGG_SETTINGS";
	data: {
		templateId: "SPECIAL_EGG_SETTINGS";
		specialEggSettings: {
			enabled: true;
			mapIconEnabled: true;
			minLevel: 15;
			xpReward: 10000;
		};
	};
}

export interface SponsoredGeofenceGiftSettings {
	templateId: "SPONSORED_GEOFENCE_GIFT_SETTINGS";
	data: {
		templateId: "SPONSORED_GEOFENCE_GIFT_SETTINGS";
		sponsoredGeofenceGiftSettings: {
			balloonGiftSettings: {
				balloonAutoDismissTimeMs: 600000;
				enableBalloonGift: true;
				enableBalloonWebView: true;
				getWasabiAdRpcIntervalMs: 60000;
			};
			enableSponsoredGeofenceGift: true;
			fullscreenDisableExitButtonTimeMs: 3000;
			giftPersistenceTimeMs: 3000;
			mapPresentationTimeMs: 7000;
		};
	};
}

export interface SquashSettings {
	templateId: "REMOTE_RAID_LIMIT_SETTINGS";
	data: {
		templateId: "REMOTE_RAID_LIMIT_SETTINGS";
		squashSettings: {
			dailySquashLimit: 10;
			enabled: true;
		};
	};
}

export interface StampCollectionSettings {
	templateId: "STAMP_COLLECTION_SETTINGS";
	data: {
		templateId: "STAMP_COLLECTION_SETTINGS";
		stampCollectionSettings: {
			defaultColorPool: ["#2200CF", "#F14400", "#28AF3C", "#FF9D00"];
			giftingMinFriendshipLevel: 2;
			minPlayerLevel: 5;
			version: -6344194;
		};
	};
}

export interface StationedPokemonTableSettings {
	templateId: "STATIONED_POKEMON_POWER_BOOST_TABLE_SETTINGS";
	data: {
		templateId: "STATIONED_POKEMON_POWER_BOOST_TABLE_SETTINGS";
		stationedPokemonTableSettings: {
			stationedPokemonTableEnum: "STATIONED_POKEMON_POWER_BOOST_TABLE_SETTINGS";
			tierBoosts: [
				{
					numBoostIcons: 1;
					numStationed: 1;
				},
				{
					numBoostIcons: 2;
					numStationed: 2;
				},
				{
					numBoostIcons: 2;
					numStationed: 3;
				},
				{
					numBoostIcons: 3;
					numStationed: 4;
				},
				{
					numBoostIcons: 3;
					numStationed: 5;
				},
				{
					numBoostIcons: 3;
					numStationed: 6;
				},
				{
					numBoostIcons: 3;
					numStationed: 7;
				},
				{
					numBoostIcons: 3;
					numStationed: 8;
				},
				{
					numBoostIcons: 3;
					numStationed: 9;
				},
				{
					numBoostIcons: 3;
					numStationed: 10;
				},
				{
					numBoostIcons: 3;
					numStationed: 11;
				},
				{
					numBoostIcons: 3;
					numStationed: 12;
				},
				{
					numBoostIcons: 3;
					numStationed: 13;
				},
				{
					numBoostIcons: 3;
					numStationed: 14;
				},
				{
					numBoostIcons: 4;
					numStationed: 15;
				},
				{
					numBoostIcons: 4;
					numStationed: 16;
				},
				{
					numBoostIcons: 4;
					numStationed: 17;
				},
				{
					numBoostIcons: 4;
					numStationed: 18;
				},
				{
					numBoostIcons: 4;
					numStationed: 19;
				},
				{
					numBoostIcons: 4;
					numStationed: 20;
				},
			];
		};
	};
}

export interface StickerCategorySettings {
	templateId: "sticker_category_settings";
	data: {
		templateId: "sticker_category_settings";
		stickerCategorySettings: {
			enabled: true;
			stickerCategory: [
				{
					active: true;
					category: "FEATURED";
					preferredCategoryIcon: "STICKER_HALLOWEEN2022_PUMPKABOO";
					sortOrder: 1;
				},
				{
					active: true;
					category: "RECENT";
					sortOrder: 2;
				},
				{
					active: true;
					category: "MESSAGES";
					preferredCategoryIcon: "STICKER_NIGIYAKA_16_0508_312";
					sortOrder: 3;
				},
				{
					active: true;
					category: "POKEMON";
					preferredCategoryIcon: "STICKER_NEWYEARS22_3";
					sortOrder: 4;
				},
				{
					active: true;
					category: "CHARACTERS";
					preferredCategoryIcon: "STICKER_TL_CANDELA";
					sortOrder: 5;
				},
				{
					active: true;
					category: "MISC";
					preferredCategoryIcon: "STICKER_LENTILLAUNCH_CAMERA";
					sortOrder: 6;
				},
				{
					active: true;
					category: "DECORATIONS";
					preferredCategoryIcon: "flair_sticker_category";
					sortOrder: 7;
				},
			];
		};
	};
}

export interface StyleShopSettings {
	templateId: "STYLE_SHOP_SETTINGS";
	data: {
		templateId: "STYLE_SHOP_SETTINGS";
		styleShopSettings: {
			cartDisabled: true;
			recommendedItemIconNames: [
				"pose_35",
				"m_shirt_genderlessskirt_00_bundle_icon",
				"f_shirt_genderlessskirt_00_bundle_icon",
				"m_backpack_lunalaitems_00_bundle_icon",
				"f_backpack_lunalaitems_00_bundle_icon",
			];
			setsEnabled: true;
			v2Enabled: true;
		};
	};
}

export interface TicketGiftingSettings {
	templateId: "TICKET_GIFTING_SETTINGS";
	data: {
		templateId: "TICKET_GIFTING_SETTINGS";
		ticketGiftingSettings: {
			dailyPlayerGiftingLimit: 20;
			minPlayerLevel: 5;
			minRequiredFriendshipLevel: "FRIENDSHIP_LEVEL_2";
		};
	};
}

export interface TodayViewSettings {
	templateId: "TODAY_VIEW_SETTINGS_V2";
	data: {
		templateId: "TODAY_VIEW_SETTINGS_V2";
		todayViewSettings: {
			favoriteQuestEnabled: true;
			notificationServerAuthoritative: true;
			pinClaimableQuestEnabled: true;
		};
	};
}

export interface TutorialSettings {
	templateId: "TUTORIALS_SETTINGS";
	data: {
		templateId: "TUTORIALS_SETTINGS";
		tutorialSettings: {
			friendsTutorialEnabled: true;
			giftsTutorialEnabled: true;
			luckyFriendTutorialEnabled: true;
			luckyTradeTutorialEnabled: true;
			luresTutorialEnabled: true;
			pokemonTaggingTutorialEnabled: true;
			razzberryCatchTutorialEnabled: true;
			revivesAndPotionsTutorialEnabled: true;
			taskHelpTutorialsEnabled: true;
			tradingTutorialEnabled: true;
			tutorialItemRewards: [
				{
					item: [
						{
							count: 3;
							itemId: "ITEM_POTION";
						},
						{
							count: 3;
							itemId: "ITEM_REVIVE";
						},
					];
					tutorial: "POTION_AND_REVIVE_TUTORIAL_INTRODUCED";
				},
				{
					tutorial: 183;
				},
			];
			typeEffectivenessTipsEnabled: true;
		};
	};
}

export interface UsernameSuggestionSettings {
	templateId: "username_suggestion_settings";
	data: {
		templateId: "username_suggestion_settings";
		usernameSuggestionSettings: {
			featureEnabled: true;
			numSuggestionsDisplayed: 4;
			numSuggestionsGenerated: 16;
		};
	};
}

export interface VerboseLogCombatSettings {
	templateId: "VERBOSE_LOG_COMBAT_SETTINGS";
	data: {
		templateId: "VERBOSE_LOG_COMBAT_SETTINGS";
		verboseLogCombatSettings: {
			clientLogDecayTimeInHours: 12;
			enableCombatChallengeSetup: true;
			enableCombatVsSeekerSetup: true;
			enableCoreCombat: true;
			enabled: true;
			enableExceptionCaught: true;
			enableOnApplicationFocus: true;
			enableOnApplicationPause: true;
			enableOnApplicationQuit: true;
			enableRpcErrorData: true;
			enableWebSocket: true;
			progressTokenPriority: 5;
		};
	};
}

export interface VerboseLogRaidSettings {
	templateId: "VERBOSE_LOG_RAID_SETTINGS";
	data: {
		templateId: "VERBOSE_LOG_RAID_SETTINGS";
		verboseLogRaidSettings: {
			enableAttackRaid: true;
			enableClientPredictionInconsistencyData: true;
			enableExceptionCaught: true;
			enableGetRaidDetails: true;
			enableJoinLobby: true;
			enableLeaveLobby: true;
			enableOnApplicationFocus: true;
			enableOnApplicationPause: true;
			enableOnApplicationQuit: true;
			enableProgressToken: true;
			enableRpcErrorData: true;
			enableSendRaidInvitation: true;
			enableStartRaidBattle: true;
		};
	};
}

export interface VistaGeneralSettings {
	templateId: "VISTA_GENERAL_SETTINGS";
	data: {
		templateId: "VISTA_GENERAL_SETTINGS";
		vistaGeneralSettings: {
			isFeatureEnabled: true;
			isVistaBattleEnabled: true;
			isVistaEncounterEnabled: true;
			isVistaMapEnabled: true;
			isVistaSpawnsEnabled: true;
		};
	};
}

export interface VsSeekerClientSettings {
	templateId: "VS_SEEKER_CLIENT_SETTINGS";
	data: {
		templateId: "VS_SEEKER_CLIENT_SETTINGS";
		vsSeekerClientSettings: {
			allowedVsSeekerLeagueTemplateId: [
				"COMBAT_LEAGUE_VS_SEEKER_ULTRA",
				"COMBAT_LEAGUE_VS_SEEKER_GREAT_JUNGLE",
				"COMBAT_LEAGUE_VS_SEEKER_GREAT_PVP_NEXT_PREVIEW",
			];
		};
	};
}

export interface VsSeekerScheduleSettings {
	templateId: "VS_SEEKER_SCHEDULE_SETTINGS";
	data: {
		templateId: "VS_SEEKER_SCHEDULE_SETTINGS";
		vsSeekerScheduleSettings: {
			enableCombatHubMain: true;
			enableCombatLeagueView: true;
			enableTodayView: true;
			seasonSchedules: [
				{
					blogUrl: "https://pokemongolive.com/post/go-battle-league-memories-in-motion";
					descriptionKey: "22";
					seasonTitle: "22";
					vsSeekerSchedules: [
						{
							endTimeMs: "1773172800000";
							startTimeMs: "1772571600000";
							vsSeekerLeagueTempalteId: ["COMBAT_LEAGUE_VS_SEEKER_GREAT", "COMBAT_LEAGUE_VS_SEEKER_GREAT_KANTO"];
						},
						{
							endTimeMs: "1773777600000";
							startTimeMs: "1773172800000";
							vsSeekerLeagueTempalteId: ["COMBAT_LEAGUE_VS_SEEKER_ULTRA", "COMBAT_LEAGUE_VS_SEEKER_SPRING_GREAT"];
						},
						{
							endTimeMs: "1774382400000";
							startTimeMs: "1773777600000";
							vsSeekerLeagueTempalteId: ["COMBAT_LEAGUE_VS_SEEKER_MASTER", "COMBAT_LEAGUE_VS_SEEKER_GREAT_JUNGLE"];
						},
						{
							endTimeMs: "1774987200000";
							startTimeMs: "1774382400000";
							vsSeekerLeagueTempalteId: ["COMBAT_LEAGUE_VS_SEEKER_GREAT", "COMBAT_LEAGUE_VS_SEEKER_ULTRA", "COMBAT_LEAGUE_VS_SEEKER_MASTER"];
						},
						{
							endTimeMs: "1775592000000";
							startTimeMs: "1774987200000";
							vsSeekerLeagueTempalteId: ["COMBAT_LEAGUE_VS_SEEKER_GREAT", "COMBAT_LEAGUE_VS_SEEKER_GREAT_ELECTRIC"];
						},
						{
							endTimeMs: "1776196800000";
							startTimeMs: "1775592000000";
							vsSeekerLeagueTempalteId: ["COMBAT_LEAGUE_VS_SEEKER_ULTRA", "COMBAT_LEAGUE_VS_SEEKER_GREAT_FANTASY"];
						},
						{
							endTimeMs: "1776801600000";
							startTimeMs: "1776196800000";
							vsSeekerLeagueTempalteId: ["COMBAT_LEAGUE_VS_SEEKER_MASTER", "COMBAT_LEAGUE_VS_SEEKER_SPRING_GREAT"];
						},
						{
							endTimeMs: "1777406400000";
							startTimeMs: "1776801600000";
							vsSeekerLeagueTempalteId: ["COMBAT_LEAGUE_VS_SEEKER_GREAT", "COMBAT_LEAGUE_VS_SEEKER_ULTRA", "COMBAT_LEAGUE_VS_SEEKER_MASTER"];
						},
						{
							endTimeMs: "1778011200000";
							startTimeMs: "1777406400000";
							vsSeekerLeagueTempalteId: ["COMBAT_LEAGUE_VS_SEEKER_GREAT", "COMBAT_LEAGUE_VS_SEEKER_GREAT_FANTASY"];
						},
						{
							endTimeMs: "1778616000000";
							startTimeMs: "1778011200000";
							vsSeekerLeagueTempalteId: ["COMBAT_LEAGUE_VS_SEEKER_ULTRA", "COMBAT_LEAGUE_VS_SEEKER_GREAT_JUNGLE"];
						},
						{
							endTimeMs: "1779220800000";
							startTimeMs: "1778616000000";
							vsSeekerLeagueTempalteId: ["COMBAT_LEAGUE_VS_SEEKER_MASTER", "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S22"];
						},
						{
							endTimeMs: "1779825600000";
							startTimeMs: "1779220800000";
							vsSeekerLeagueTempalteId: ["COMBAT_LEAGUE_VS_SEEKER_GREAT", "COMBAT_LEAGUE_VS_SEEKER_ULTRA", "COMBAT_LEAGUE_VS_SEEKER_MASTER"];
						},
						{
							endTimeMs: "1780430400000";
							startTimeMs: "1779825600000";
							vsSeekerLeagueTempalteId: ["COMBAT_LEAGUE_VS_SEEKER_GREAT", "COMBAT_LEAGUE_VS_SEEKER_ULTRA", "COMBAT_LEAGUE_VS_SEEKER_MASTER"];
						},
					];
				},
			];
		};
	};
}

export interface WeatherBonusSettings {
	templateId: "WEATHER_BONUS_SETTINGS";
	data: {
		templateId: "WEATHER_BONUS_SETTINGS";
		weatherBonusSettings: {
			attackBonusMultiplier: 1.2;
			cpBaseLevelBonus: 5;
			guaranteedIndividualValues: 4;
			raidEncounterCpBaseLevelBonus: 5;
			raidEncounterGuaranteedIndividualValues: 10;
			stardustBonusMultiplier: 1.25;
		};
	};
}

export type SingletonsSettingsMasterfileEntry =
	| AccessibilitySettings
	| AdditiveSceneSettings
	| AddressablePokemonSettings
	| AddressBookImportSettings
	| AdvancedSettings
	| ArTelemetrySettings
	| BackgroundModeSettings
	| BattleAnimationSettings
	| BattleHubBadgeSettings
	| BattleHubOrderSettings
	| BattleInputBufferSettings
	| BattlePartySettings
	| BattleSettings
	| BattleVisualSettings
	| BestFriendsPlusSettings
	| BreadBattleClientSettings
	| BreadLobbyCounterSettings
	| BreadLobbyUpdateSettings
	| BreadPokemonScalingSettings
	| BreadSettings
	| BuddyEncounterCameoSettings
	| BuddyHungerSettings
	| BuddyInteractionSettings
	| BuddySwapSettings
	| BuddyWalkSettings
	| BulkHealingSettings
	| ButterflyCollectorSettings
	| CampfireSettings
	| CatchRadiusMultiplierSettings
	| CombatCompetitiveSeasonSettings
	| CombatLeagueSettings
	| CombatSettings
	| CombatStatStageSettings
	| ContestSettings
	| ConversationSettings
	| CrossGameSocialSettings
	| DailyAdventureIncenseSettings
	| DeepLinkingSettings
	| EggHatchImprovementsSettings
	| EncounterSettings
	| ErrorReportingSettings
	| EventPassSettings
	| EventPlannerPopularNotificationSettings
	| EventServerSettings
	| ExternalAddressableAssetsSettings
	| FeatureUnlockLevelSettings
	| GeotargetedQuestSettings
	| GiftingSettings
	| GuiSearchSettings
	| GymBadgeSettings
	| HapticsSettings
	| IapSettings
	| IbfcLightweightSettings
	| ImpressionTrackingSettings
	| InAppSurveySettings
	| IncidentPrioritySettings
	| IncidentVisibilitySettings
	| InventorySettings
	| IrisSocialSettings
	| IrisSocialUxFunnelSettings
	| ItemInventoryUpdateSettings
	| JoinRaidViaFriendListSettings
	| LanguageSelectorSettings
	| LuckyPokemonSettings
	| MapDisplaySettings
	| MapObjectsInteractionRangeSettings
	| MegaEvoSettings
	| MonodepthSettings
	| MpSettings
	| NaturalArtDayNightFeatureSettings
	| NearbyPokemonSettings
	| NeutralAvatarSettings
	| OnboardingSettings
	| PartyDarkLaunchSettings
	| PartyIapBoostsSettings
	| PartyRecommendationSettings
	| PhotoSettings
	| PlannerSettings
	| PlayerBonusSystemSettings
	| PokeballThrowPropertySettings
	| PokedexCategoriesSettings
	| PokedexSizeStatsSystemSettings
	| PokedexV2Settings
	| PokemonFxSettings
	| PokemonHomeSettings
	| PokemonTagSettings
	| PopupControlSettings
	| PostcardCollectionSettings
	| PowerUpPokestopsSettings
	| PrimalEvoSettings
	| PtcOauthSettings
	| QuestDialogueInboxSettings
	| QuickInviteSettings
	| RaidEntryCostSettings
	| RaidLobbyCounterSettings
	| RaidSettings
	| ReferralSettings
	| RemoteTradeSettings
	| RouteBadgeSettings
	| RouteCreationSettings
	| RouteDiscoverySettings
	| RoutePinSettings
	| RoutePlaySettings
	| RoutesNearbyNotifSettings
	| RoutesPartyPlayInteropSettings
	| RouteStampCategorySettings
	| SharedFusionSettings
	| SharedMoveSettings
	| SoftSfidaSettings
	| SourdoughMoveMappingSettings
	| SpecialEggSettings
	| SponsoredGeofenceGiftSettings
	| SquashSettings
	| StampCollectionSettings
	| StationedPokemonTableSettings
	| StickerCategorySettings
	| StyleShopSettings
	| TicketGiftingSettings
	| TodayViewSettings
	| TutorialSettings
	| UsernameSuggestionSettings
	| VerboseLogCombatSettings
	| VerboseLogRaidSettings
	| VistaGeneralSettings
	| VsSeekerClientSettings
	| VsSeekerScheduleSettings
	| WeatherBonusSettings;

export type SingletonsSettingsTemplateID = SingletonsSettingsMasterfileEntry["templateId"];
