// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "category-sku-sort-order-sprite-id-title", 5 entries.

import type { S } from "../../_utils";
import type { IapItemDisplay } from "../types";

export type IapItemDisplayBundleGeneral1Tiny2 = S<
	IapItemDisplay<
		"bundle.general1.tiny.2",
		{
			category: "IAP_CATEGORY_BUNDLE";
			sku: "bundle.general1.tiny.2";
			sortOrder: 10;
			spriteId: "bundle.general1.tiny.1";
			title: "bundle.general1.tiny.3_title";
		}
	>
>;
export type IapItemDisplayBundleGeneral3Large1 = S<
	IapItemDisplay<
		"bundle.general3.large.1",
		{
			category: "IAP_CATEGORY_BUNDLE";
			sku: "bundle.general3.large.1";
			sortOrder: 1;
			spriteId: "bundle.general2.small.1";
			title: "bundle.xmas.small.1_title";
		}
	>
>;
export type IapItemDisplayItemleadermap = S<
	IapItemDisplay<
		"itemleadermap",
		{
			category: "IAP_CATEGORY_ITEMS";
			sku: "itemleadermap";
			sortOrder: 22;
			spriteId: "leadermap.1";
			title: "itemleadermap_title";
		}
	>
>;
export type IapItemDisplayMaxpotion10 = S<
	IapItemDisplay<
		"maxpotion.10",
		{
			category: "IAP_CATEGORY_ITEMS";
			sku: "maxpotion.10";
			sortOrder: 23;
			spriteId: "maxpotion.10";
			title: "maxpotion.10_title";
		}
	>
>;
export type IapItemDisplayMaxrevive6 = S<
	IapItemDisplay<
		"maxrevive.6",
		{
			category: "IAP_CATEGORY_ITEMS";
			sku: "maxrevive.6";
			sortOrder: 17;
			spriteId: "maxrevive.6";
			title: "maxrevive.6_title";
		}
	>
>;

export type IapItemDisplayCategorySkuSortOrderSpriteIdTitleMasterfileEntry =
	| IapItemDisplayBundleGeneral1Tiny2
	| IapItemDisplayBundleGeneral3Large1
	| IapItemDisplayItemleadermap
	| IapItemDisplayMaxpotion10
	| IapItemDisplayMaxrevive6;
