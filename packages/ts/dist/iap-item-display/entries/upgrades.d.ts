// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "upgrades", 2 entries.

import type { S } from "../../_utils";
import type { IapItemDisplay } from "../types";

export type IapItemDisplayBundleSmoresbump2025 = S<
	IapItemDisplay<
		"bundle.smoresbump.2025",
		{
			category: "IAP_CATEGORY_UPGRADES";
			hidden: true;
			sku: "bundle.smoresbump.2025";
			sortOrder: 1;
			spriteId: "bundle.general2.free.1";
			title: "bundle.general2.free.1_title";
		}
	>
>;
export type IapItemDisplayPostcardstorageupgrade1 = S<
	IapItemDisplay<
		"postcardstorageupgrade.1",
		{
			category: "IAP_CATEGORY_UPGRADES";
			description: "POSTCARD_EXPANSION_1_description";
			sku: "postcardstorageupgrade.1";
			sortOrder: 3;
			spriteId: "postcardstorageupgrade.1";
			title: "POSTCARD_EXPANSION_1_title";
		}
	>
>;

export type IapItemDisplayUpgradesMasterfileEntry = IapItemDisplayBundleSmoresbump2025 | IapItemDisplayPostcardstorageupgrade1;
