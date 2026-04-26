export interface SettingsOverrideRule<
	TemplateID extends string = string,
	TData extends SettingsOverrideRuleData = SettingsOverrideRuleData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		settingsOverrideRule: TData;
	};
}

export interface SettingsOverrideRuleData {
	fusedDepthEnabled?: string;
	meshingEnabled?: string;
	occlusionDefaultOn?: string;
	occlusionEnabled?: string;
	ruleType?: number | string;
	ruleValue?: string;
	semanticsEnabled?: string;
	sortOrder?: number;
	vpsEnabled?: string;
}

export type SettingsOverrideRuleAllowAsusasusI006d = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ASUSASUS_I006D",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "asus ASUS_I006D";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowGooglepixel6 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_GOOGLEPIXEL6",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 6";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowGooglepixel6a = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_GOOGLEPIXEL6A",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 6a";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowGooglepixel6pro = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_GOOGLEPIXEL6PRO",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 6 Pro";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowGooglepixel7 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_GOOGLEPIXEL7",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 7";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowGooglepixel7a = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_GOOGLEPIXEL7A",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 7a";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowGooglepixel7pro = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_GOOGLEPIXEL7PRO",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 7 Pro";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowGooglepixel8 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_GOOGLEPIXEL8",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 8";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowGooglepixel8pro = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_GOOGLEPIXEL8PRO",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 8 Pro";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowGooglepixel9 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_GOOGLEPIXEL9",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 9";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowGooglepixel9pro = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_GOOGLEPIXEL9PRO",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 9 Pro";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowGooglepixelprofold = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_GOOGLEPIXELPROFOLD",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 9 Pro Fold";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowGooglepixelproxl = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_GOOGLEPIXELPROXL",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 9 Pro XL";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowLgelmV600 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_LGELM_V600",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "LGE LM-V600";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowMotorolamotorolaedge40 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_MOTOROLAMOTOROLAEDGE40",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "motorola motorola edge 40";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOnepluscph2399 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUSCPH2399",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus CPH2399";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOnepluscph2449 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUSCPH2449",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus CPH2449";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusdn2103 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUSDN2103",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus DN2103";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOnepluskb2003 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUSKB2003",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus KB2003";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusle2113 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUSLE2113",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus LE2113";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusle2123 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUSLE2123",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus LE2123";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusne2213 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUSNE2213",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus NE2213";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusCph2413 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2413",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus CPH2413";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusCph2415 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2415",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus CPH2415";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusCph2417 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2417",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus CPH2417";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusCph2447 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2447",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus CPH2447";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusCph2451 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2451",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus CPH2451";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusCph2573 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2573",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus CPH2573";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusCph2581 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2581",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus CPH2581";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusCph2583 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2583",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus CPH2583";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusCph2585 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2585",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus CPH2585";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusCph2609 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2609",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus CPH2609";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusLe2115 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_LE2115",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus LE2115";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusLe2120 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_LE2120",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus LE2120";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusLe2121 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_LE2121",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus LE2121";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusLe2123 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_LE2123",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus LE2123";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusLe2125 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_LE2125",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus LE2125";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusLe2127 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_LE2127",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus LE2127";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusNe2210 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_NE2210",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus NE2210";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusNe2211 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_NE2211",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus NE2211";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusNe2213 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_NE2213",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus NE2213";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusNe2215 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_NE2215",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus NE2215";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusNe2217 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_NE2217",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus NE2217";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusPhb110 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_PHB110",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus PHB110";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOneplusPjd110 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_ONEPLUS_PJD110",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OnePlus PJD110";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowOppocph2359 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_OPPOCPH2359",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "OPPO CPH2359";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungscg09 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSCG09",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SCG09";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungscg13 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSCG13",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SCG13";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsc51a = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSC_51A",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SC-51A";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsc51b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSC_51B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SC-51B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsc51c = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSC_51C",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SC-51C";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsc51d = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSC_51D",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SC-51D";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsc52c = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSC_52C",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SC-52C";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsc52d = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSC_52D",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SC-52D";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungscA528b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSC_A528B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-A528B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF711b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F711B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F711B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF711n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F711N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F711N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF711u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F711U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F711U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF721b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F721B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F721B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF721n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F721N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F721N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF721u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F721U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F721U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF731b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F731B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F731B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF731n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F731N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F731N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF731u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F731U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F731U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF926b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F926B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F926B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF926n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F926N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F926N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF926u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F926U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F926U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF936b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F936B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F936B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF936n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F936N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F936N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF936u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F936U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F936U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF946b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F946B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F946B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF946n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F946N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F946N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmF946u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_F946U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-F946U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG780f = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G780F",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G780F";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG780g = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G780G",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G780G";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG781b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G781B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G781B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG781n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G781N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G781N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG781u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G781U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G781U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG781u1 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G781U1",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G781U1";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG781v = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G781V",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G781V";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG781w = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G781W",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G781W";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG980f = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G980F",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G980F";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG981b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G981B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G981B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG981n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G981N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G981N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG981u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G981U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G981U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG981u1 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G981U1",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G981U1";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG985f = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G985F",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G985F";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG986b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G986B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G986B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG986n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G986N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G986N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG986u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G986U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G986U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG986u1 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G986U1",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G986U1";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG988b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G988B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G988B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG988n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G988N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G988N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG988u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G988U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G988U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG990b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G990B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G990B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG990b2 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G990B2",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G990B2";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG990e = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G990E",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G990E";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG990u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G990U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G990U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG990u2 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G990U2",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G990U2";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG990w2 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G990W2",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G990W2";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG9910 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G9910",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G9910";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG991b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G991B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G991B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG991n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G991N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G991N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG991u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G991U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G991U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG991u1 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G991U1",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G991U1";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG991w = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G991W",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G991W";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG996b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G996B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G996B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG996n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G996N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G996N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG996u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G996U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G996U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG996u1 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G996U1",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G996U1";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG998b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G998B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G998B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG998n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G998N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G998N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG998u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G998U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G998U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmG998u1 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_G998U1",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-G998U1";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmN970u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_N970U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-N970U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmN980f = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_N980F",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-N980F";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmN981b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_N981B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-N981B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmN981n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_N981N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-N981N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmN981u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_N981U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-N981U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmN9860 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_N9860",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-N9860";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmN986b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_N986B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-N986B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmN986n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_N986N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-N986N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmN986u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_N986U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-N986U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmN986u1 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_N986U1",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-N986U1";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS711b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S711B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S711B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS711n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S711N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S711N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS711u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S711U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S711U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS711w = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S711W",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S711W";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS901b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S901B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S901B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS901e = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S901E",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S901E";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS901n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S901N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S901N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS901u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S901U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S901U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS901u1 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S901U1",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S901U1";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS901w = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S901W",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S901W";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS9060 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S9060",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S9060";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS906b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S906B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S906B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS906e = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S906E",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S906E";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS906n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S906N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S906N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS906u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S906U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S906U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS906u1 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S906U1",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S906U1";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS9080 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S9080",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S9080";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS908b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S908B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S908B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS908e = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S908E",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S908E";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS908n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S908N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S908N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS908u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S908U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S908U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS908u1 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S908U1",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S908U1";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS908w = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S908W",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S908W";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS911b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S911B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S911B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS911n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S911N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S911N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS911u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S911U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S911U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS911u1 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S911U1",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S911U1";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS911w = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S911W",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S911W";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS9160 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S9160",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S9160";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS916b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S916B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S916B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS916n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S916N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S916N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS916u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S916U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S916U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS916u1 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S916U1",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S916U1";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS9180 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S9180",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S9180";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS918b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S918B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S918B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS918n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S918N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S918N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS918u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S918U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S918U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS918u1 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S918U1",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S918U1";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS918w = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S918W",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S918W";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS921b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S921B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S921B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS921n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S921N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S921N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS9260 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S9260",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S9260";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS926u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S926U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S926U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS9280 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S9280",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S9280";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS928b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S928B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S928B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS928n = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S928N",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S928N";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS928u = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S928U",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S928U";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSamsungsmS928u1 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SAMSUNGSM_S928U1",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "samsung SM-S928U1";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSharpsh51b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SHARPSH_51B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "SHARP SH-51B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonysog02 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONYSOG02",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony SOG02";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonysog05 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONYSOG05",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony SOG05";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonysog06 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONYSOG06",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony SOG06";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyso51a = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONYSO_51A",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony SO-51A";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyso51b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONYSO_51B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony SO-51B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyso51c = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONYSO_51C",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony SO-51C";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyso52a = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONYSO_52A",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony SO-52A";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyso53b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONYSO_53B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony SO-53B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyso54c = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONYSO_54C",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony SO-54C";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyA002so = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_A002SO",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony A002SO";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyA101so = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_A101SO",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony A101SO";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyA103so = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_A103SO",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony A103SO";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyA201so = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_A201SO",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony A201SO";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonySo53b = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_SO53B",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony SO-53B";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonySog01 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_SOG01",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony SOG01";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonySog03 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_SOG03",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony SOG03";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXperia1Ii = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XPERIA_1_II",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony Xperia 1 II";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXperia1Iii = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XPERIA_1_III",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony Xperia 1 III";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXperia1Iv = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XPERIA_1_IV",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony Xperia 1 IV";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXperia1V = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XPERIA_1_V",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony Xperia 1 V";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXperia5Ii = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XPERIA_5_II",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony Xperia 5 II";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXperia5Iii = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XPERIA_5_III",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony Xperia 5 III";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXperia5V = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XPERIA_5_V",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony Xperia 5 V";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXperiaPro = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XPERIA_PRO",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony Xperia PRO";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXperiaProi = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XPERIA_PROI",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony Xperia PRO-I";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqaq52 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQAQ52",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-AQ52";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqaq62 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQAQ62",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-AQ62";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqas42 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQAS42",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-AS42";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqas52 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQAS52",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-AS52";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqas62 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQAS62",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-AS62";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqas72 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQAS72",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-AS72";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqat42 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQAT42",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-AT42";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqat51 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQAT51",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-AT51";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqat52 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQAT52",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-AT52";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqat72 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQAT72",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-AT72";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqbc42 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQBC42",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-BC42";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqbc52 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQBC52",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-BC52";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqbc62 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQBC62",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-BC62";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqbc72 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQBC72",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-BC72";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqbe52 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQBE52",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-BE52";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqbe62 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQBE62",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-BE62";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqbe72 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQBE72",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-BE72";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqbq42 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQBQ42",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-BQ42";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqbq52 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQBQ52",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-BQ52";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqbq62 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQBQ62",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-BQ62";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqbq72 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQBQ72",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-BQ72";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqct54 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQCT54",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-CT54";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqct62 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQCT62",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-CT62";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqct72 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQCT72",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-CT72";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqDe44 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQ_DE44",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-DE44";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowSonyXqDq44 = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_SONY_XQ_DQ44",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Sony XQ-DQ44";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowXiaomi21061110ag = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_XIAOMI21061110AG",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Xiaomi 21061110AG";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowXiaomi2107113sg = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_XIAOMI2107113SG",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Xiaomi 2107113SG";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowXiaomi21081111rg = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_XIAOMI21081111RG",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Xiaomi 21081111RG";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowXiaomi21121210g = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_XIAOMI21121210G",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Xiaomi 21121210G";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowXiaomi2201123g = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_XIAOMI2201123G",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Xiaomi 2201123G";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowXiaomi22021211rg = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_XIAOMI22021211RG",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Xiaomi 22021211RG";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowXiaomi22041216g = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_XIAOMI22041216G",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Xiaomi 22041216G";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowXiaomi22081212ug = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_XIAOMI22081212UG",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Xiaomi 22081212UG";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowXiaomi23049pcd8g = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_XIAOMI23049PCD8G",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Xiaomi 23049PCD8G";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowXiaomim2007j3sg = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_XIAOMIM2007J3SG",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Xiaomi M2007J3SG";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowXiaomim2007j3sy = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_XIAOMIM2007J3SY",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Xiaomi M2007J3SY";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowXiaomim2012k11ag = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_XIAOMIM2012K11AG",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Xiaomi M2012K11AG";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAllowXiaomim2102k1ac = SettingsOverrideRule<
	"SETTINGS_RULES_ALLOW_XIAOMIM2102K1AC",
	{
		meshingEnabled: "TRUE";
		occlusionEnabled: "TRUE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Xiaomi M2102K1AC";
		semanticsEnabled: "TRUE";
		sortOrder: 50;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleAndroid = SettingsOverrideRule<
	"SETTINGS_RULES_ANDROID",
	{
		meshingEnabled: "FALSE";
		occlusionEnabled: "FALSE";
		ruleType: "PLATFORM";
		ruleValue: "Android";
		semanticsEnabled: "FALSE";
		sortOrder: 2;
		vpsEnabled: "FALSE";
	}
>;
export type SettingsOverrideRuleAndroid14Onward = SettingsOverrideRule<
	"SETTINGS_RULES_ANDROID_14_ONWARD",
	{
		occlusionEnabled: "TRUE";
		ruleType: 10;
		ruleValue: "33";
		semanticsEnabled: "TRUE";
		sortOrder: 5;
	}
>;
export type SettingsOverrideRuleBase = SettingsOverrideRule<
	"SETTINGS_RULES_BASE",
	{
		fusedDepthEnabled: "TRUE";
		meshingEnabled: "TRUE";
		occlusionDefaultOn: "FALSE";
		occlusionEnabled: "TRUE";
		ruleType: "ALL";
		semanticsEnabled: "TRUE";
		sortOrder: 1;
		vpsEnabled: "TRUE";
	}
>;
export type SettingsOverrideRuleDenyGooglepixel10 = SettingsOverrideRule<
	"SETTINGS_RULES_DENY_GOOGLEPIXEL10",
	{
		meshingEnabled: "FALSE";
		occlusionEnabled: "FALSE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 10";
		semanticsEnabled: "FALSE";
		sortOrder: 50;
		vpsEnabled: "FALSE";
	}
>;
export type SettingsOverrideRuleDenyGooglepixel10pro = SettingsOverrideRule<
	"SETTINGS_RULES_DENY_GOOGLEPIXEL10PRO",
	{
		meshingEnabled: "FALSE";
		occlusionEnabled: "FALSE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 10 Pro";
		semanticsEnabled: "FALSE";
		sortOrder: 50;
		vpsEnabled: "FALSE";
	}
>;
export type SettingsOverrideRuleDenyGooglepixel10profold = SettingsOverrideRule<
	"SETTINGS_RULES_DENY_GOOGLEPIXEL10PROFOLD",
	{
		meshingEnabled: "FALSE";
		occlusionEnabled: "FALSE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 10 Pro Fold";
		semanticsEnabled: "FALSE";
		sortOrder: 50;
		vpsEnabled: "FALSE";
	}
>;
export type SettingsOverrideRuleDenyGooglepixel10proxl = SettingsOverrideRule<
	"SETTINGS_RULES_DENY_GOOGLEPIXEL10PROXL",
	{
		meshingEnabled: "FALSE";
		occlusionEnabled: "FALSE";
		ruleType: "DEVICE_MODEL";
		ruleValue: "Google Pixel 10 Pro XL";
		semanticsEnabled: "FALSE";
		sortOrder: 50;
		vpsEnabled: "FALSE";
	}
>;
export type SettingsOverrideRuleDenyIpad4 = SettingsOverrideRule<
	"SETTINGS_RULES_DENY_IPAD4",
	{
		meshingEnabled: "FALSE";
		occlusionEnabled: "FALSE";
		ruleType: "DEVICE_MODEL_CONTAINS";
		ruleValue: "iPad4";
		semanticsEnabled: "FALSE";
		sortOrder: 10;
		vpsEnabled: "FALSE";
	}
>;
export type SettingsOverrideRuleDenyIpad5 = SettingsOverrideRule<
	"SETTINGS_RULES_DENY_IPAD5",
	{
		meshingEnabled: "FALSE";
		occlusionEnabled: "FALSE";
		ruleType: "DEVICE_MODEL_CONTAINS";
		ruleValue: "iPad5";
		semanticsEnabled: "FALSE";
		sortOrder: 10;
		vpsEnabled: "FALSE";
	}
>;
export type SettingsOverrideRuleDenyIpad6 = SettingsOverrideRule<
	"SETTINGS_RULES_DENY_IPAD6",
	{
		meshingEnabled: "FALSE";
		occlusionEnabled: "FALSE";
		ruleType: "DEVICE_MODEL_CONTAINS";
		ruleValue: "iPad6";
		semanticsEnabled: "FALSE";
		sortOrder: 10;
		vpsEnabled: "FALSE";
	}
>;
export type SettingsOverrideRuleDenyIphone6 = SettingsOverrideRule<
	"SETTINGS_RULES_DENY_IPHONE6",
	{
		meshingEnabled: "FALSE";
		occlusionEnabled: "FALSE";
		ruleType: "DEVICE_MODEL_CONTAINS";
		ruleValue: "iPhone7";
		semanticsEnabled: "FALSE";
		sortOrder: 10;
		vpsEnabled: "FALSE";
	}
>;
export type SettingsOverrideRuleDenyIphone7 = SettingsOverrideRule<
	"SETTINGS_RULES_DENY_IPHONE7",
	{
		meshingEnabled: "FALSE";
		occlusionEnabled: "FALSE";
		ruleType: "DEVICE_MODEL_CONTAINS";
		ruleValue: "iPhone9";
		semanticsEnabled: "FALSE";
		sortOrder: 10;
		vpsEnabled: "FALSE";
	}
>;
export type SettingsOverrideRuleDenyIphonese = SettingsOverrideRule<
	"SETTINGS_RULES_DENY_IPHONESE",
	{
		meshingEnabled: "FALSE";
		occlusionEnabled: "FALSE";
		ruleType: "DEVICE_MODEL_CONTAINS";
		ruleValue: "iPhone8";
		semanticsEnabled: "FALSE";
		sortOrder: 10;
		vpsEnabled: "FALSE";
	}
>;

export type SettingsOverrideRuleMasterfileEntry =
	| SettingsOverrideRuleAllowAsusasusI006d
	| SettingsOverrideRuleAllowGooglepixel6
	| SettingsOverrideRuleAllowGooglepixel6a
	| SettingsOverrideRuleAllowGooglepixel6pro
	| SettingsOverrideRuleAllowGooglepixel7
	| SettingsOverrideRuleAllowGooglepixel7a
	| SettingsOverrideRuleAllowGooglepixel7pro
	| SettingsOverrideRuleAllowGooglepixel8
	| SettingsOverrideRuleAllowGooglepixel8pro
	| SettingsOverrideRuleAllowGooglepixel9
	| SettingsOverrideRuleAllowGooglepixel9pro
	| SettingsOverrideRuleAllowGooglepixelprofold
	| SettingsOverrideRuleAllowGooglepixelproxl
	| SettingsOverrideRuleAllowLgelmV600
	| SettingsOverrideRuleAllowMotorolamotorolaedge40
	| SettingsOverrideRuleAllowOnepluscph2399
	| SettingsOverrideRuleAllowOnepluscph2449
	| SettingsOverrideRuleAllowOneplusdn2103
	| SettingsOverrideRuleAllowOnepluskb2003
	| SettingsOverrideRuleAllowOneplusle2113
	| SettingsOverrideRuleAllowOneplusle2123
	| SettingsOverrideRuleAllowOneplusne2213
	| SettingsOverrideRuleAllowOneplusCph2413
	| SettingsOverrideRuleAllowOneplusCph2415
	| SettingsOverrideRuleAllowOneplusCph2417
	| SettingsOverrideRuleAllowOneplusCph2447
	| SettingsOverrideRuleAllowOneplusCph2451
	| SettingsOverrideRuleAllowOneplusCph2573
	| SettingsOverrideRuleAllowOneplusCph2581
	| SettingsOverrideRuleAllowOneplusCph2583
	| SettingsOverrideRuleAllowOneplusCph2585
	| SettingsOverrideRuleAllowOneplusCph2609
	| SettingsOverrideRuleAllowOneplusLe2115
	| SettingsOverrideRuleAllowOneplusLe2120
	| SettingsOverrideRuleAllowOneplusLe2121
	| SettingsOverrideRuleAllowOneplusLe2123
	| SettingsOverrideRuleAllowOneplusLe2125
	| SettingsOverrideRuleAllowOneplusLe2127
	| SettingsOverrideRuleAllowOneplusNe2210
	| SettingsOverrideRuleAllowOneplusNe2211
	| SettingsOverrideRuleAllowOneplusNe2213
	| SettingsOverrideRuleAllowOneplusNe2215
	| SettingsOverrideRuleAllowOneplusNe2217
	| SettingsOverrideRuleAllowOneplusPhb110
	| SettingsOverrideRuleAllowOneplusPjd110
	| SettingsOverrideRuleAllowOppocph2359
	| SettingsOverrideRuleAllowSamsungscg09
	| SettingsOverrideRuleAllowSamsungscg13
	| SettingsOverrideRuleAllowSamsungsc51a
	| SettingsOverrideRuleAllowSamsungsc51b
	| SettingsOverrideRuleAllowSamsungsc51c
	| SettingsOverrideRuleAllowSamsungsc51d
	| SettingsOverrideRuleAllowSamsungsc52c
	| SettingsOverrideRuleAllowSamsungsc52d
	| SettingsOverrideRuleAllowSamsungscA528b
	| SettingsOverrideRuleAllowSamsungsmF711b
	| SettingsOverrideRuleAllowSamsungsmF711n
	| SettingsOverrideRuleAllowSamsungsmF711u
	| SettingsOverrideRuleAllowSamsungsmF721b
	| SettingsOverrideRuleAllowSamsungsmF721n
	| SettingsOverrideRuleAllowSamsungsmF721u
	| SettingsOverrideRuleAllowSamsungsmF731b
	| SettingsOverrideRuleAllowSamsungsmF731n
	| SettingsOverrideRuleAllowSamsungsmF731u
	| SettingsOverrideRuleAllowSamsungsmF926b
	| SettingsOverrideRuleAllowSamsungsmF926n
	| SettingsOverrideRuleAllowSamsungsmF926u
	| SettingsOverrideRuleAllowSamsungsmF936b
	| SettingsOverrideRuleAllowSamsungsmF936n
	| SettingsOverrideRuleAllowSamsungsmF936u
	| SettingsOverrideRuleAllowSamsungsmF946b
	| SettingsOverrideRuleAllowSamsungsmF946n
	| SettingsOverrideRuleAllowSamsungsmF946u
	| SettingsOverrideRuleAllowSamsungsmG780f
	| SettingsOverrideRuleAllowSamsungsmG780g
	| SettingsOverrideRuleAllowSamsungsmG781b
	| SettingsOverrideRuleAllowSamsungsmG781n
	| SettingsOverrideRuleAllowSamsungsmG781u
	| SettingsOverrideRuleAllowSamsungsmG781u1
	| SettingsOverrideRuleAllowSamsungsmG781v
	| SettingsOverrideRuleAllowSamsungsmG781w
	| SettingsOverrideRuleAllowSamsungsmG980f
	| SettingsOverrideRuleAllowSamsungsmG981b
	| SettingsOverrideRuleAllowSamsungsmG981n
	| SettingsOverrideRuleAllowSamsungsmG981u
	| SettingsOverrideRuleAllowSamsungsmG981u1
	| SettingsOverrideRuleAllowSamsungsmG985f
	| SettingsOverrideRuleAllowSamsungsmG986b
	| SettingsOverrideRuleAllowSamsungsmG986n
	| SettingsOverrideRuleAllowSamsungsmG986u
	| SettingsOverrideRuleAllowSamsungsmG986u1
	| SettingsOverrideRuleAllowSamsungsmG988b
	| SettingsOverrideRuleAllowSamsungsmG988n
	| SettingsOverrideRuleAllowSamsungsmG988u
	| SettingsOverrideRuleAllowSamsungsmG990b
	| SettingsOverrideRuleAllowSamsungsmG990b2
	| SettingsOverrideRuleAllowSamsungsmG990e
	| SettingsOverrideRuleAllowSamsungsmG990u
	| SettingsOverrideRuleAllowSamsungsmG990u2
	| SettingsOverrideRuleAllowSamsungsmG990w2
	| SettingsOverrideRuleAllowSamsungsmG9910
	| SettingsOverrideRuleAllowSamsungsmG991b
	| SettingsOverrideRuleAllowSamsungsmG991n
	| SettingsOverrideRuleAllowSamsungsmG991u
	| SettingsOverrideRuleAllowSamsungsmG991u1
	| SettingsOverrideRuleAllowSamsungsmG991w
	| SettingsOverrideRuleAllowSamsungsmG996b
	| SettingsOverrideRuleAllowSamsungsmG996n
	| SettingsOverrideRuleAllowSamsungsmG996u
	| SettingsOverrideRuleAllowSamsungsmG996u1
	| SettingsOverrideRuleAllowSamsungsmG998b
	| SettingsOverrideRuleAllowSamsungsmG998n
	| SettingsOverrideRuleAllowSamsungsmG998u
	| SettingsOverrideRuleAllowSamsungsmG998u1
	| SettingsOverrideRuleAllowSamsungsmN970u
	| SettingsOverrideRuleAllowSamsungsmN980f
	| SettingsOverrideRuleAllowSamsungsmN981b
	| SettingsOverrideRuleAllowSamsungsmN981n
	| SettingsOverrideRuleAllowSamsungsmN981u
	| SettingsOverrideRuleAllowSamsungsmN9860
	| SettingsOverrideRuleAllowSamsungsmN986b
	| SettingsOverrideRuleAllowSamsungsmN986n
	| SettingsOverrideRuleAllowSamsungsmN986u
	| SettingsOverrideRuleAllowSamsungsmN986u1
	| SettingsOverrideRuleAllowSamsungsmS711b
	| SettingsOverrideRuleAllowSamsungsmS711n
	| SettingsOverrideRuleAllowSamsungsmS711u
	| SettingsOverrideRuleAllowSamsungsmS711w
	| SettingsOverrideRuleAllowSamsungsmS901b
	| SettingsOverrideRuleAllowSamsungsmS901e
	| SettingsOverrideRuleAllowSamsungsmS901n
	| SettingsOverrideRuleAllowSamsungsmS901u
	| SettingsOverrideRuleAllowSamsungsmS901u1
	| SettingsOverrideRuleAllowSamsungsmS901w
	| SettingsOverrideRuleAllowSamsungsmS9060
	| SettingsOverrideRuleAllowSamsungsmS906b
	| SettingsOverrideRuleAllowSamsungsmS906e
	| SettingsOverrideRuleAllowSamsungsmS906n
	| SettingsOverrideRuleAllowSamsungsmS906u
	| SettingsOverrideRuleAllowSamsungsmS906u1
	| SettingsOverrideRuleAllowSamsungsmS9080
	| SettingsOverrideRuleAllowSamsungsmS908b
	| SettingsOverrideRuleAllowSamsungsmS908e
	| SettingsOverrideRuleAllowSamsungsmS908n
	| SettingsOverrideRuleAllowSamsungsmS908u
	| SettingsOverrideRuleAllowSamsungsmS908u1
	| SettingsOverrideRuleAllowSamsungsmS908w
	| SettingsOverrideRuleAllowSamsungsmS911b
	| SettingsOverrideRuleAllowSamsungsmS911n
	| SettingsOverrideRuleAllowSamsungsmS911u
	| SettingsOverrideRuleAllowSamsungsmS911u1
	| SettingsOverrideRuleAllowSamsungsmS911w
	| SettingsOverrideRuleAllowSamsungsmS9160
	| SettingsOverrideRuleAllowSamsungsmS916b
	| SettingsOverrideRuleAllowSamsungsmS916n
	| SettingsOverrideRuleAllowSamsungsmS916u
	| SettingsOverrideRuleAllowSamsungsmS916u1
	| SettingsOverrideRuleAllowSamsungsmS9180
	| SettingsOverrideRuleAllowSamsungsmS918b
	| SettingsOverrideRuleAllowSamsungsmS918n
	| SettingsOverrideRuleAllowSamsungsmS918u
	| SettingsOverrideRuleAllowSamsungsmS918u1
	| SettingsOverrideRuleAllowSamsungsmS918w
	| SettingsOverrideRuleAllowSamsungsmS921b
	| SettingsOverrideRuleAllowSamsungsmS921n
	| SettingsOverrideRuleAllowSamsungsmS9260
	| SettingsOverrideRuleAllowSamsungsmS926u
	| SettingsOverrideRuleAllowSamsungsmS9280
	| SettingsOverrideRuleAllowSamsungsmS928b
	| SettingsOverrideRuleAllowSamsungsmS928n
	| SettingsOverrideRuleAllowSamsungsmS928u
	| SettingsOverrideRuleAllowSamsungsmS928u1
	| SettingsOverrideRuleAllowSharpsh51b
	| SettingsOverrideRuleAllowSonysog02
	| SettingsOverrideRuleAllowSonysog05
	| SettingsOverrideRuleAllowSonysog06
	| SettingsOverrideRuleAllowSonyso51a
	| SettingsOverrideRuleAllowSonyso51b
	| SettingsOverrideRuleAllowSonyso51c
	| SettingsOverrideRuleAllowSonyso52a
	| SettingsOverrideRuleAllowSonyso53b
	| SettingsOverrideRuleAllowSonyso54c
	| SettingsOverrideRuleAllowSonyA002so
	| SettingsOverrideRuleAllowSonyA101so
	| SettingsOverrideRuleAllowSonyA103so
	| SettingsOverrideRuleAllowSonyA201so
	| SettingsOverrideRuleAllowSonySo53b
	| SettingsOverrideRuleAllowSonySog01
	| SettingsOverrideRuleAllowSonySog03
	| SettingsOverrideRuleAllowSonyXperia1Ii
	| SettingsOverrideRuleAllowSonyXperia1Iii
	| SettingsOverrideRuleAllowSonyXperia1Iv
	| SettingsOverrideRuleAllowSonyXperia1V
	| SettingsOverrideRuleAllowSonyXperia5Ii
	| SettingsOverrideRuleAllowSonyXperia5Iii
	| SettingsOverrideRuleAllowSonyXperia5V
	| SettingsOverrideRuleAllowSonyXperiaPro
	| SettingsOverrideRuleAllowSonyXperiaProi
	| SettingsOverrideRuleAllowSonyXqaq52
	| SettingsOverrideRuleAllowSonyXqaq62
	| SettingsOverrideRuleAllowSonyXqas42
	| SettingsOverrideRuleAllowSonyXqas52
	| SettingsOverrideRuleAllowSonyXqas62
	| SettingsOverrideRuleAllowSonyXqas72
	| SettingsOverrideRuleAllowSonyXqat42
	| SettingsOverrideRuleAllowSonyXqat51
	| SettingsOverrideRuleAllowSonyXqat52
	| SettingsOverrideRuleAllowSonyXqat72
	| SettingsOverrideRuleAllowSonyXqbc42
	| SettingsOverrideRuleAllowSonyXqbc52
	| SettingsOverrideRuleAllowSonyXqbc62
	| SettingsOverrideRuleAllowSonyXqbc72
	| SettingsOverrideRuleAllowSonyXqbe52
	| SettingsOverrideRuleAllowSonyXqbe62
	| SettingsOverrideRuleAllowSonyXqbe72
	| SettingsOverrideRuleAllowSonyXqbq42
	| SettingsOverrideRuleAllowSonyXqbq52
	| SettingsOverrideRuleAllowSonyXqbq62
	| SettingsOverrideRuleAllowSonyXqbq72
	| SettingsOverrideRuleAllowSonyXqct54
	| SettingsOverrideRuleAllowSonyXqct62
	| SettingsOverrideRuleAllowSonyXqct72
	| SettingsOverrideRuleAllowSonyXqDe44
	| SettingsOverrideRuleAllowSonyXqDq44
	| SettingsOverrideRuleAllowXiaomi21061110ag
	| SettingsOverrideRuleAllowXiaomi2107113sg
	| SettingsOverrideRuleAllowXiaomi21081111rg
	| SettingsOverrideRuleAllowXiaomi21121210g
	| SettingsOverrideRuleAllowXiaomi2201123g
	| SettingsOverrideRuleAllowXiaomi22021211rg
	| SettingsOverrideRuleAllowXiaomi22041216g
	| SettingsOverrideRuleAllowXiaomi22081212ug
	| SettingsOverrideRuleAllowXiaomi23049pcd8g
	| SettingsOverrideRuleAllowXiaomim2007j3sg
	| SettingsOverrideRuleAllowXiaomim2007j3sy
	| SettingsOverrideRuleAllowXiaomim2012k11ag
	| SettingsOverrideRuleAllowXiaomim2102k1ac
	| SettingsOverrideRuleAndroid
	| SettingsOverrideRuleAndroid14Onward
	| SettingsOverrideRuleBase
	| SettingsOverrideRuleDenyGooglepixel10
	| SettingsOverrideRuleDenyGooglepixel10pro
	| SettingsOverrideRuleDenyGooglepixel10profold
	| SettingsOverrideRuleDenyGooglepixel10proxl
	| SettingsOverrideRuleDenyIpad4
	| SettingsOverrideRuleDenyIpad5
	| SettingsOverrideRuleDenyIpad6
	| SettingsOverrideRuleDenyIphone6
	| SettingsOverrideRuleDenyIphone7
	| SettingsOverrideRuleDenyIphonese;

export type SettingsOverrideRuleTemplateID = SettingsOverrideRuleMasterfileEntry["templateId"];
