export interface SettingsOverrideRule<T extends string> {
	templateId: T;
	data: SettingsOverrideRuleData<T>;
}

export interface SettingsOverrideRuleData<T extends string> {
	templateId: T;
	settingsOverrideRule: {
		fusedDepthEnabled?: "TRUE";
		meshingEnabled?: "FALSE" | "TRUE";
		occlusionDefaultOn?: "FALSE";
		occlusionEnabled: "FALSE" | "TRUE";
		ruleType: 10 | "ALL" | "DEVICE_MODEL" | "DEVICE_MODEL_CONTAINS" | "PLATFORM";
		ruleValue?: "33" | "Android" | "asus ASUS_I006D" | "Google Pixel 10" | "Google Pixel 10 Pro" | "Google Pixel 10 Pro Fold" | "Google Pixel 10 Pro XL" | "Google Pixel 6" | "Google Pixel 6 Pro" | "Google Pixel 6a" | "Google Pixel 7" | "Google Pixel 7 Pro" | "Google Pixel 7a" | "Google Pixel 8" | "Google Pixel 8 Pro" | "Google Pixel 9" | "Google Pixel 9 Pro" | "Google Pixel 9 Pro Fold" | "Google Pixel 9 Pro XL" | "iPad4" | "iPad5" | "iPad6" | "iPhone7" | "iPhone8" | "iPhone9" | "LGE LM-V600" | "motorola motorola edge 40" | "OnePlus CPH2399" | "OnePlus CPH2413" | "OnePlus CPH2415" | "OnePlus CPH2417" | "OnePlus CPH2447" | "OnePlus CPH2449" | "OnePlus CPH2451" | "OnePlus CPH2573" | "OnePlus CPH2581" | "OnePlus CPH2583" | "OnePlus CPH2585" | "OnePlus CPH2609" | "OnePlus DN2103" | "OnePlus KB2003" | "OnePlus LE2113" | "OnePlus LE2115" | "OnePlus LE2120" | "OnePlus LE2121" | "OnePlus LE2123" | "OnePlus LE2125" | "OnePlus LE2127" | "OnePlus NE2210" | "OnePlus NE2211" | "OnePlus NE2213" | "OnePlus NE2215" | "OnePlus NE2217" | "OnePlus PHB110" | "OnePlus PJD110" | "OPPO CPH2359" | "samsung SC-51A" | "samsung SC-51B" | "samsung SC-51C" | "samsung SC-51D" | "samsung SC-52C" | "samsung SC-52D" | "samsung SCG09" | "samsung SCG13" | "samsung SM-A528B" | "samsung SM-F711B" | "samsung SM-F711N" | "samsung SM-F711U" | "samsung SM-F721B" | "samsung SM-F721N" | "samsung SM-F721U" | "samsung SM-F731B" | "samsung SM-F731N" | "samsung SM-F731U" | "samsung SM-F926B" | "samsung SM-F926N" | "samsung SM-F926U" | "samsung SM-F936B" | "samsung SM-F936N" | "samsung SM-F936U" | "samsung SM-F946B" | "samsung SM-F946N" | "samsung SM-F946U" | "samsung SM-G780F" | "samsung SM-G780G" | "samsung SM-G781B" | "samsung SM-G781N" | "samsung SM-G781U" | "samsung SM-G781U1" | "samsung SM-G781V" | "samsung SM-G781W" | "samsung SM-G980F" | "samsung SM-G981B" | "samsung SM-G981N" | "samsung SM-G981U" | "samsung SM-G981U1" | "samsung SM-G985F" | "samsung SM-G986B" | "samsung SM-G986N" | "samsung SM-G986U" | "samsung SM-G986U1" | "samsung SM-G988B" | "samsung SM-G988N" | "samsung SM-G988U" | "samsung SM-G990B" | "samsung SM-G990B2" | "samsung SM-G990E" | "samsung SM-G990U" | "samsung SM-G990U2" | "samsung SM-G990W2" | "samsung SM-G9910" | "samsung SM-G991B" | "samsung SM-G991N" | "samsung SM-G991U" | "samsung SM-G991U1" | "samsung SM-G991W" | "samsung SM-G996B" | "samsung SM-G996N" | "samsung SM-G996U" | "samsung SM-G996U1" | "samsung SM-G998B" | "samsung SM-G998N" | "samsung SM-G998U" | "samsung SM-G998U1" | "samsung SM-N970U" | "samsung SM-N980F" | "samsung SM-N981B" | "samsung SM-N981N" | "samsung SM-N981U" | "samsung SM-N9860" | "samsung SM-N986B" | "samsung SM-N986N" | "samsung SM-N986U" | "samsung SM-N986U1" | "samsung SM-S711B" | "samsung SM-S711N" | "samsung SM-S711U" | "samsung SM-S711W" | "samsung SM-S901B" | "samsung SM-S901E" | "samsung SM-S901N" | "samsung SM-S901U" | "samsung SM-S901U1" | "samsung SM-S901W" | "samsung SM-S9060" | "samsung SM-S906B" | "samsung SM-S906E" | "samsung SM-S906N" | "samsung SM-S906U" | "samsung SM-S906U1" | "samsung SM-S9080" | "samsung SM-S908B" | "samsung SM-S908E" | "samsung SM-S908N" | "samsung SM-S908U" | "samsung SM-S908U1" | "samsung SM-S908W" | "samsung SM-S911B" | "samsung SM-S911N" | "samsung SM-S911U" | "samsung SM-S911U1" | "samsung SM-S911W" | "samsung SM-S9160" | "samsung SM-S916B" | "samsung SM-S916N" | "samsung SM-S916U" | "samsung SM-S916U1" | "samsung SM-S9180" | "samsung SM-S918B" | "samsung SM-S918N" | "samsung SM-S918U" | "samsung SM-S918U1" | "samsung SM-S918W" | "samsung SM-S921B" | "samsung SM-S921N" | "samsung SM-S9260" | "samsung SM-S926U" | "samsung SM-S9280" | "samsung SM-S928B" | "samsung SM-S928N" | "samsung SM-S928U" | "samsung SM-S928U1" | "SHARP SH-51B" | "Sony A002SO" | "Sony A101SO" | "Sony A103SO" | "Sony A201SO" | "Sony SO-51A" | "Sony SO-51B" | "Sony SO-51C" | "Sony SO-52A" | "Sony SO-53B" | "Sony SO-54C" | "Sony SOG01" | "Sony SOG02" | "Sony SOG03" | "Sony SOG05" | "Sony SOG06" | "Sony Xperia 1 II" | "Sony Xperia 1 III" | "Sony Xperia 1 IV" | "Sony Xperia 1 V" | "Sony Xperia 5 II" | "Sony Xperia 5 III" | "Sony Xperia 5 V" | "Sony Xperia PRO" | "Sony Xperia PRO-I" | "Sony XQ-AQ52" | "Sony XQ-AQ62" | "Sony XQ-AS42" | "Sony XQ-AS52" | "Sony XQ-AS62" | "Sony XQ-AS72" | "Sony XQ-AT42" | "Sony XQ-AT51" | "Sony XQ-AT52" | "Sony XQ-AT72" | "Sony XQ-BC42" | "Sony XQ-BC52" | "Sony XQ-BC62" | "Sony XQ-BC72" | "Sony XQ-BE52" | "Sony XQ-BE62" | "Sony XQ-BE72" | "Sony XQ-BQ42" | "Sony XQ-BQ52" | "Sony XQ-BQ62" | "Sony XQ-BQ72" | "Sony XQ-CT54" | "Sony XQ-CT62" | "Sony XQ-CT72" | "Sony XQ-DE44" | "Sony XQ-DQ44" | "Xiaomi 21061110AG" | "Xiaomi 2107113SG" | "Xiaomi 21081111RG" | "Xiaomi 21121210G" | "Xiaomi 2201123G" | "Xiaomi 22021211RG" | "Xiaomi 22041216G" | "Xiaomi 22081212UG" | "Xiaomi 23049PCD8G" | "Xiaomi M2007J3SG" | "Xiaomi M2007J3SY" | "Xiaomi M2012K11AG" | "Xiaomi M2102K1AC";
		semanticsEnabled: "FALSE" | "TRUE";
		sortOrder: 1 | 2 | 5 | 10 | 50;
		vpsEnabled?: "FALSE" | "TRUE";
	};
}

export type SettingsOverrideRuleAllowAsusasusI006d = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ASUSASUS_I006D">;
export type SettingsOverrideRuleAllowGooglepixel6 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_GOOGLEPIXEL6">;
export type SettingsOverrideRuleAllowGooglepixel6a = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_GOOGLEPIXEL6A">;
export type SettingsOverrideRuleAllowGooglepixel6pro = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_GOOGLEPIXEL6PRO">;
export type SettingsOverrideRuleAllowGooglepixel7 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_GOOGLEPIXEL7">;
export type SettingsOverrideRuleAllowGooglepixel7a = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_GOOGLEPIXEL7A">;
export type SettingsOverrideRuleAllowGooglepixel7pro = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_GOOGLEPIXEL7PRO">;
export type SettingsOverrideRuleAllowGooglepixel8 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_GOOGLEPIXEL8">;
export type SettingsOverrideRuleAllowGooglepixel8pro = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_GOOGLEPIXEL8PRO">;
export type SettingsOverrideRuleAllowGooglepixel9 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_GOOGLEPIXEL9">;
export type SettingsOverrideRuleAllowGooglepixel9pro = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_GOOGLEPIXEL9PRO">;
export type SettingsOverrideRuleAllowGooglepixelprofold = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_GOOGLEPIXELPROFOLD">;
export type SettingsOverrideRuleAllowGooglepixelproxl = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_GOOGLEPIXELPROXL">;
export type SettingsOverrideRuleAllowLgelmV600 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_LGELM_V600">;
export type SettingsOverrideRuleAllowMotorolamotorolaedge40 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_MOTOROLAMOTOROLAEDGE40">;
export type SettingsOverrideRuleAllowOnepluscph2399 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUSCPH2399">;
export type SettingsOverrideRuleAllowOnepluscph2449 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUSCPH2449">;
export type SettingsOverrideRuleAllowOneplusdn2103 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUSDN2103">;
export type SettingsOverrideRuleAllowOnepluskb2003 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUSKB2003">;
export type SettingsOverrideRuleAllowOneplusle2113 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUSLE2113">;
export type SettingsOverrideRuleAllowOneplusle2123 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUSLE2123">;
export type SettingsOverrideRuleAllowOneplusne2213 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUSNE2213">;
export type SettingsOverrideRuleAllowOneplusCph2413 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2413">;
export type SettingsOverrideRuleAllowOneplusCph2415 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2415">;
export type SettingsOverrideRuleAllowOneplusCph2417 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2417">;
export type SettingsOverrideRuleAllowOneplusCph2447 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2447">;
export type SettingsOverrideRuleAllowOneplusCph2451 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2451">;
export type SettingsOverrideRuleAllowOneplusCph2573 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2573">;
export type SettingsOverrideRuleAllowOneplusCph2581 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2581">;
export type SettingsOverrideRuleAllowOneplusCph2583 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2583">;
export type SettingsOverrideRuleAllowOneplusCph2585 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2585">;
export type SettingsOverrideRuleAllowOneplusCph2609 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_CPH2609">;
export type SettingsOverrideRuleAllowOneplusLe2115 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_LE2115">;
export type SettingsOverrideRuleAllowOneplusLe2120 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_LE2120">;
export type SettingsOverrideRuleAllowOneplusLe2121 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_LE2121">;
export type SettingsOverrideRuleAllowOneplusLe2123 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_LE2123">;
export type SettingsOverrideRuleAllowOneplusLe2125 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_LE2125">;
export type SettingsOverrideRuleAllowOneplusLe2127 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_LE2127">;
export type SettingsOverrideRuleAllowOneplusNe2210 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_NE2210">;
export type SettingsOverrideRuleAllowOneplusNe2211 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_NE2211">;
export type SettingsOverrideRuleAllowOneplusNe2213 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_NE2213">;
export type SettingsOverrideRuleAllowOneplusNe2215 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_NE2215">;
export type SettingsOverrideRuleAllowOneplusNe2217 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_NE2217">;
export type SettingsOverrideRuleAllowOneplusPhb110 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_PHB110">;
export type SettingsOverrideRuleAllowOneplusPjd110 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_ONEPLUS_PJD110">;
export type SettingsOverrideRuleAllowOppocph2359 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_OPPOCPH2359">;
export type SettingsOverrideRuleAllowSamsungscg09 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSCG09">;
export type SettingsOverrideRuleAllowSamsungscg13 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSCG13">;
export type SettingsOverrideRuleAllowSamsungsc51a = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSC_51A">;
export type SettingsOverrideRuleAllowSamsungsc51b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSC_51B">;
export type SettingsOverrideRuleAllowSamsungsc51c = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSC_51C">;
export type SettingsOverrideRuleAllowSamsungsc51d = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSC_51D">;
export type SettingsOverrideRuleAllowSamsungsc52c = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSC_52C">;
export type SettingsOverrideRuleAllowSamsungsc52d = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSC_52D">;
export type SettingsOverrideRuleAllowSamsungscA528b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSC_A528B">;
export type SettingsOverrideRuleAllowSamsungsmF711b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F711B">;
export type SettingsOverrideRuleAllowSamsungsmF711n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F711N">;
export type SettingsOverrideRuleAllowSamsungsmF711u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F711U">;
export type SettingsOverrideRuleAllowSamsungsmF721b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F721B">;
export type SettingsOverrideRuleAllowSamsungsmF721n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F721N">;
export type SettingsOverrideRuleAllowSamsungsmF721u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F721U">;
export type SettingsOverrideRuleAllowSamsungsmF731b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F731B">;
export type SettingsOverrideRuleAllowSamsungsmF731n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F731N">;
export type SettingsOverrideRuleAllowSamsungsmF731u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F731U">;
export type SettingsOverrideRuleAllowSamsungsmF926b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F926B">;
export type SettingsOverrideRuleAllowSamsungsmF926n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F926N">;
export type SettingsOverrideRuleAllowSamsungsmF926u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F926U">;
export type SettingsOverrideRuleAllowSamsungsmF936b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F936B">;
export type SettingsOverrideRuleAllowSamsungsmF936n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F936N">;
export type SettingsOverrideRuleAllowSamsungsmF936u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F936U">;
export type SettingsOverrideRuleAllowSamsungsmF946b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F946B">;
export type SettingsOverrideRuleAllowSamsungsmF946n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F946N">;
export type SettingsOverrideRuleAllowSamsungsmF946u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_F946U">;
export type SettingsOverrideRuleAllowSamsungsmG780f = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G780F">;
export type SettingsOverrideRuleAllowSamsungsmG780g = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G780G">;
export type SettingsOverrideRuleAllowSamsungsmG781b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G781B">;
export type SettingsOverrideRuleAllowSamsungsmG781n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G781N">;
export type SettingsOverrideRuleAllowSamsungsmG781u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G781U">;
export type SettingsOverrideRuleAllowSamsungsmG781u1 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G781U1">;
export type SettingsOverrideRuleAllowSamsungsmG781v = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G781V">;
export type SettingsOverrideRuleAllowSamsungsmG781w = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G781W">;
export type SettingsOverrideRuleAllowSamsungsmG980f = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G980F">;
export type SettingsOverrideRuleAllowSamsungsmG981b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G981B">;
export type SettingsOverrideRuleAllowSamsungsmG981n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G981N">;
export type SettingsOverrideRuleAllowSamsungsmG981u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G981U">;
export type SettingsOverrideRuleAllowSamsungsmG981u1 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G981U1">;
export type SettingsOverrideRuleAllowSamsungsmG985f = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G985F">;
export type SettingsOverrideRuleAllowSamsungsmG986b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G986B">;
export type SettingsOverrideRuleAllowSamsungsmG986n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G986N">;
export type SettingsOverrideRuleAllowSamsungsmG986u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G986U">;
export type SettingsOverrideRuleAllowSamsungsmG986u1 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G986U1">;
export type SettingsOverrideRuleAllowSamsungsmG988b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G988B">;
export type SettingsOverrideRuleAllowSamsungsmG988n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G988N">;
export type SettingsOverrideRuleAllowSamsungsmG988u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G988U">;
export type SettingsOverrideRuleAllowSamsungsmG990b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G990B">;
export type SettingsOverrideRuleAllowSamsungsmG990b2 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G990B2">;
export type SettingsOverrideRuleAllowSamsungsmG990e = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G990E">;
export type SettingsOverrideRuleAllowSamsungsmG990u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G990U">;
export type SettingsOverrideRuleAllowSamsungsmG990u2 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G990U2">;
export type SettingsOverrideRuleAllowSamsungsmG990w2 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G990W2">;
export type SettingsOverrideRuleAllowSamsungsmG9910 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G9910">;
export type SettingsOverrideRuleAllowSamsungsmG991b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G991B">;
export type SettingsOverrideRuleAllowSamsungsmG991n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G991N">;
export type SettingsOverrideRuleAllowSamsungsmG991u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G991U">;
export type SettingsOverrideRuleAllowSamsungsmG991u1 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G991U1">;
export type SettingsOverrideRuleAllowSamsungsmG991w = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G991W">;
export type SettingsOverrideRuleAllowSamsungsmG996b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G996B">;
export type SettingsOverrideRuleAllowSamsungsmG996n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G996N">;
export type SettingsOverrideRuleAllowSamsungsmG996u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G996U">;
export type SettingsOverrideRuleAllowSamsungsmG996u1 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G996U1">;
export type SettingsOverrideRuleAllowSamsungsmG998b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G998B">;
export type SettingsOverrideRuleAllowSamsungsmG998n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G998N">;
export type SettingsOverrideRuleAllowSamsungsmG998u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G998U">;
export type SettingsOverrideRuleAllowSamsungsmG998u1 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_G998U1">;
export type SettingsOverrideRuleAllowSamsungsmN970u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_N970U">;
export type SettingsOverrideRuleAllowSamsungsmN980f = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_N980F">;
export type SettingsOverrideRuleAllowSamsungsmN981b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_N981B">;
export type SettingsOverrideRuleAllowSamsungsmN981n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_N981N">;
export type SettingsOverrideRuleAllowSamsungsmN981u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_N981U">;
export type SettingsOverrideRuleAllowSamsungsmN9860 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_N9860">;
export type SettingsOverrideRuleAllowSamsungsmN986b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_N986B">;
export type SettingsOverrideRuleAllowSamsungsmN986n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_N986N">;
export type SettingsOverrideRuleAllowSamsungsmN986u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_N986U">;
export type SettingsOverrideRuleAllowSamsungsmN986u1 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_N986U1">;
export type SettingsOverrideRuleAllowSamsungsmS711b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S711B">;
export type SettingsOverrideRuleAllowSamsungsmS711n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S711N">;
export type SettingsOverrideRuleAllowSamsungsmS711u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S711U">;
export type SettingsOverrideRuleAllowSamsungsmS711w = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S711W">;
export type SettingsOverrideRuleAllowSamsungsmS901b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S901B">;
export type SettingsOverrideRuleAllowSamsungsmS901e = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S901E">;
export type SettingsOverrideRuleAllowSamsungsmS901n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S901N">;
export type SettingsOverrideRuleAllowSamsungsmS901u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S901U">;
export type SettingsOverrideRuleAllowSamsungsmS901u1 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S901U1">;
export type SettingsOverrideRuleAllowSamsungsmS901w = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S901W">;
export type SettingsOverrideRuleAllowSamsungsmS9060 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S9060">;
export type SettingsOverrideRuleAllowSamsungsmS906b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S906B">;
export type SettingsOverrideRuleAllowSamsungsmS906e = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S906E">;
export type SettingsOverrideRuleAllowSamsungsmS906n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S906N">;
export type SettingsOverrideRuleAllowSamsungsmS906u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S906U">;
export type SettingsOverrideRuleAllowSamsungsmS906u1 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S906U1">;
export type SettingsOverrideRuleAllowSamsungsmS9080 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S9080">;
export type SettingsOverrideRuleAllowSamsungsmS908b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S908B">;
export type SettingsOverrideRuleAllowSamsungsmS908e = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S908E">;
export type SettingsOverrideRuleAllowSamsungsmS908n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S908N">;
export type SettingsOverrideRuleAllowSamsungsmS908u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S908U">;
export type SettingsOverrideRuleAllowSamsungsmS908u1 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S908U1">;
export type SettingsOverrideRuleAllowSamsungsmS908w = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S908W">;
export type SettingsOverrideRuleAllowSamsungsmS911b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S911B">;
export type SettingsOverrideRuleAllowSamsungsmS911n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S911N">;
export type SettingsOverrideRuleAllowSamsungsmS911u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S911U">;
export type SettingsOverrideRuleAllowSamsungsmS911u1 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S911U1">;
export type SettingsOverrideRuleAllowSamsungsmS911w = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S911W">;
export type SettingsOverrideRuleAllowSamsungsmS9160 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S9160">;
export type SettingsOverrideRuleAllowSamsungsmS916b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S916B">;
export type SettingsOverrideRuleAllowSamsungsmS916n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S916N">;
export type SettingsOverrideRuleAllowSamsungsmS916u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S916U">;
export type SettingsOverrideRuleAllowSamsungsmS916u1 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S916U1">;
export type SettingsOverrideRuleAllowSamsungsmS9180 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S9180">;
export type SettingsOverrideRuleAllowSamsungsmS918b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S918B">;
export type SettingsOverrideRuleAllowSamsungsmS918n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S918N">;
export type SettingsOverrideRuleAllowSamsungsmS918u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S918U">;
export type SettingsOverrideRuleAllowSamsungsmS918u1 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S918U1">;
export type SettingsOverrideRuleAllowSamsungsmS918w = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S918W">;
export type SettingsOverrideRuleAllowSamsungsmS921b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S921B">;
export type SettingsOverrideRuleAllowSamsungsmS921n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S921N">;
export type SettingsOverrideRuleAllowSamsungsmS9260 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S9260">;
export type SettingsOverrideRuleAllowSamsungsmS926u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S926U">;
export type SettingsOverrideRuleAllowSamsungsmS9280 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S9280">;
export type SettingsOverrideRuleAllowSamsungsmS928b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S928B">;
export type SettingsOverrideRuleAllowSamsungsmS928n = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S928N">;
export type SettingsOverrideRuleAllowSamsungsmS928u = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S928U">;
export type SettingsOverrideRuleAllowSamsungsmS928u1 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SAMSUNGSM_S928U1">;
export type SettingsOverrideRuleAllowSharpsh51b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SHARPSH_51B">;
export type SettingsOverrideRuleAllowSonysog02 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONYSOG02">;
export type SettingsOverrideRuleAllowSonysog05 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONYSOG05">;
export type SettingsOverrideRuleAllowSonysog06 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONYSOG06">;
export type SettingsOverrideRuleAllowSonyso51a = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONYSO_51A">;
export type SettingsOverrideRuleAllowSonyso51b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONYSO_51B">;
export type SettingsOverrideRuleAllowSonyso51c = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONYSO_51C">;
export type SettingsOverrideRuleAllowSonyso52a = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONYSO_52A">;
export type SettingsOverrideRuleAllowSonyso53b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONYSO_53B">;
export type SettingsOverrideRuleAllowSonyso54c = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONYSO_54C">;
export type SettingsOverrideRuleAllowSonyA002so = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_A002SO">;
export type SettingsOverrideRuleAllowSonyA101so = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_A101SO">;
export type SettingsOverrideRuleAllowSonyA103so = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_A103SO">;
export type SettingsOverrideRuleAllowSonyA201so = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_A201SO">;
export type SettingsOverrideRuleAllowSonySo53b = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_SO53B">;
export type SettingsOverrideRuleAllowSonySog01 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_SOG01">;
export type SettingsOverrideRuleAllowSonySog03 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_SOG03">;
export type SettingsOverrideRuleAllowSonyXperia1Ii = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XPERIA_1_II">;
export type SettingsOverrideRuleAllowSonyXperia1Iii = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XPERIA_1_III">;
export type SettingsOverrideRuleAllowSonyXperia1Iv = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XPERIA_1_IV">;
export type SettingsOverrideRuleAllowSonyXperia1V = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XPERIA_1_V">;
export type SettingsOverrideRuleAllowSonyXperia5Ii = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XPERIA_5_II">;
export type SettingsOverrideRuleAllowSonyXperia5Iii = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XPERIA_5_III">;
export type SettingsOverrideRuleAllowSonyXperia5V = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XPERIA_5_V">;
export type SettingsOverrideRuleAllowSonyXperiaPro = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XPERIA_PRO">;
export type SettingsOverrideRuleAllowSonyXperiaProi = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XPERIA_PROI">;
export type SettingsOverrideRuleAllowSonyXqaq52 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQAQ52">;
export type SettingsOverrideRuleAllowSonyXqaq62 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQAQ62">;
export type SettingsOverrideRuleAllowSonyXqas42 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQAS42">;
export type SettingsOverrideRuleAllowSonyXqas52 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQAS52">;
export type SettingsOverrideRuleAllowSonyXqas62 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQAS62">;
export type SettingsOverrideRuleAllowSonyXqas72 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQAS72">;
export type SettingsOverrideRuleAllowSonyXqat42 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQAT42">;
export type SettingsOverrideRuleAllowSonyXqat51 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQAT51">;
export type SettingsOverrideRuleAllowSonyXqat52 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQAT52">;
export type SettingsOverrideRuleAllowSonyXqat72 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQAT72">;
export type SettingsOverrideRuleAllowSonyXqbc42 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQBC42">;
export type SettingsOverrideRuleAllowSonyXqbc52 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQBC52">;
export type SettingsOverrideRuleAllowSonyXqbc62 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQBC62">;
export type SettingsOverrideRuleAllowSonyXqbc72 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQBC72">;
export type SettingsOverrideRuleAllowSonyXqbe52 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQBE52">;
export type SettingsOverrideRuleAllowSonyXqbe62 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQBE62">;
export type SettingsOverrideRuleAllowSonyXqbe72 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQBE72">;
export type SettingsOverrideRuleAllowSonyXqbq42 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQBQ42">;
export type SettingsOverrideRuleAllowSonyXqbq52 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQBQ52">;
export type SettingsOverrideRuleAllowSonyXqbq62 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQBQ62">;
export type SettingsOverrideRuleAllowSonyXqbq72 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQBQ72">;
export type SettingsOverrideRuleAllowSonyXqct54 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQCT54">;
export type SettingsOverrideRuleAllowSonyXqct62 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQCT62">;
export type SettingsOverrideRuleAllowSonyXqct72 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQCT72">;
export type SettingsOverrideRuleAllowSonyXqDe44 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQ_DE44">;
export type SettingsOverrideRuleAllowSonyXqDq44 = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_SONY_XQ_DQ44">;
export type SettingsOverrideRuleAllowXiaomi21061110ag = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_XIAOMI21061110AG">;
export type SettingsOverrideRuleAllowXiaomi2107113sg = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_XIAOMI2107113SG">;
export type SettingsOverrideRuleAllowXiaomi21081111rg = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_XIAOMI21081111RG">;
export type SettingsOverrideRuleAllowXiaomi21121210g = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_XIAOMI21121210G">;
export type SettingsOverrideRuleAllowXiaomi2201123g = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_XIAOMI2201123G">;
export type SettingsOverrideRuleAllowXiaomi22021211rg = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_XIAOMI22021211RG">;
export type SettingsOverrideRuleAllowXiaomi22041216g = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_XIAOMI22041216G">;
export type SettingsOverrideRuleAllowXiaomi22081212ug = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_XIAOMI22081212UG">;
export type SettingsOverrideRuleAllowXiaomi23049pcd8g = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_XIAOMI23049PCD8G">;
export type SettingsOverrideRuleAllowXiaomim2007j3sg = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_XIAOMIM2007J3SG">;
export type SettingsOverrideRuleAllowXiaomim2007j3sy = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_XIAOMIM2007J3SY">;
export type SettingsOverrideRuleAllowXiaomim2012k11ag = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_XIAOMIM2012K11AG">;
export type SettingsOverrideRuleAllowXiaomim2102k1ac = SettingsOverrideRule<"SETTINGS_RULES_ALLOW_XIAOMIM2102K1AC">;
export type SettingsOverrideRuleAndroid = SettingsOverrideRule<"SETTINGS_RULES_ANDROID">;
export type SettingsOverrideRuleAndroid14Onward = SettingsOverrideRule<"SETTINGS_RULES_ANDROID_14_ONWARD">;
export type SettingsOverrideRuleBase = SettingsOverrideRule<"SETTINGS_RULES_BASE">;
export type SettingsOverrideRuleDenyGooglepixel10 = SettingsOverrideRule<"SETTINGS_RULES_DENY_GOOGLEPIXEL10">;
export type SettingsOverrideRuleDenyGooglepixel10pro = SettingsOverrideRule<"SETTINGS_RULES_DENY_GOOGLEPIXEL10PRO">;
export type SettingsOverrideRuleDenyGooglepixel10profold = SettingsOverrideRule<"SETTINGS_RULES_DENY_GOOGLEPIXEL10PROFOLD">;
export type SettingsOverrideRuleDenyGooglepixel10proxl = SettingsOverrideRule<"SETTINGS_RULES_DENY_GOOGLEPIXEL10PROXL">;
export type SettingsOverrideRuleDenyIpad4 = SettingsOverrideRule<"SETTINGS_RULES_DENY_IPAD4">;
export type SettingsOverrideRuleDenyIpad5 = SettingsOverrideRule<"SETTINGS_RULES_DENY_IPAD5">;
export type SettingsOverrideRuleDenyIpad6 = SettingsOverrideRule<"SETTINGS_RULES_DENY_IPAD6">;
export type SettingsOverrideRuleDenyIphone6 = SettingsOverrideRule<"SETTINGS_RULES_DENY_IPHONE6">;
export type SettingsOverrideRuleDenyIphone7 = SettingsOverrideRule<"SETTINGS_RULES_DENY_IPHONE7">;
export type SettingsOverrideRuleDenyIphonese = SettingsOverrideRule<"SETTINGS_RULES_DENY_IPHONESE">;

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
