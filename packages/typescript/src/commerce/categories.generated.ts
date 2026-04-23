/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: commerce/categories
// Filters: all
// Entries emitted: 13

export interface Iap_category_avatardataiapcategorydisplay {
  category: string;
  description: string;
  imageUrl: string;
  sortOrder: number;
}
export interface Iap_category_avatardata {
  iapCategoryDisplay: Iap_category_avatardataiapcategorydisplay;
  templateId: string;
}
export interface Iap_category_avatarEntry {
  templateId: "IAP_CATEGORY_AVATAR";
  data: Iap_category_avatardata;
}
export interface Iap_category_bundledataiapcategorydisplay {
  bannerEnabled: boolean;
  bannerTitle: string;
  category: string;
  sortOrder: number;
}
export interface Iap_category_bundledata {
  iapCategoryDisplay: Iap_category_bundledataiapcategorydisplay;
  templateId: string;
}
export interface Iap_category_bundleEntry {
  templateId: "IAP_CATEGORY_BUNDLE";
  data: Iap_category_bundledata;
}
export interface Iap_category_flair_bundledataiapcategorydisplay {
  category: string;
  hidden: boolean;
}
export interface Iap_category_flair_bundledata {
  iapCategoryDisplay: Iap_category_flair_bundledataiapcategorydisplay;
  templateId: string;
}
export interface Iap_category_flair_bundleEntry {
  templateId: "IAP_CATEGORY_FLAIR_BUNDLE";
  data: Iap_category_flair_bundledata;
}
export interface Iap_category_freedataiapcategorydisplay {
  category: string;
  sortOrder: number;
}
export interface Iap_category_freedata {
  iapCategoryDisplay: Iap_category_freedataiapcategorydisplay;
  templateId: string;
}
export interface Iap_category_freeEntry {
  templateId: "IAP_CATEGORY_FREE";
  data: Iap_category_freedata;
}
export interface Iap_category_global_event_ticketdataiapcategorydisplay {
  bannerEnabled: boolean;
  bannerTitle: string;
  category: string;
  description: string;
  imageUrl: string;
  name: string;
  sortOrder: number;
}
export interface Iap_category_global_event_ticketdata {
  iapCategoryDisplay: Iap_category_global_event_ticketdataiapcategorydisplay;
  templateId: string;
}
export interface Iap_category_global_event_ticketEntry {
  templateId: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
  data: Iap_category_global_event_ticketdata;
}
export interface Iap_category_itemsEntry {
  templateId: "IAP_CATEGORY_ITEMS";
  data: Iap_category_freedata;
}
export interface Iap_category_nonedataiapcategorydisplay {
  hidden: boolean;
}
export interface Iap_category_nonedata {
  iapCategoryDisplay: Iap_category_nonedataiapcategorydisplay;
  templateId: string;
}
export interface Iap_category_noneEntry {
  templateId: "IAP_CATEGORY_NONE";
  data: Iap_category_nonedata;
}
export interface Iap_category_pokecoinsEntry {
  templateId: "IAP_CATEGORY_POKECOINS";
  data: Iap_category_freedata;
}
export interface Iap_category_rewarded_spenddataiapcategorydisplay {
  category: number;
  description: string;
  name: string;
}
export interface Iap_category_rewarded_spenddata {
  iapCategoryDisplay: Iap_category_rewarded_spenddataiapcategorydisplay;
  templateId: string;
}
export interface Iap_category_rewarded_spendEntry {
  templateId: "IAP_CATEGORY_REWARDED_SPEND";
  data: Iap_category_rewarded_spenddata;
}
export interface Iap_category_stickerdataiapcategorydisplay {
  category: string;
  displayRows: number;
  name: string;
  sortOrder: number;
}
export interface Iap_category_stickerdata {
  iapCategoryDisplay: Iap_category_stickerdataiapcategorydisplay;
  templateId: string;
}
export interface Iap_category_stickerEntry {
  templateId: "IAP_CATEGORY_STICKER";
  data: Iap_category_stickerdata;
}
export interface Iap_category_team_changeEntry {
  templateId: "IAP_CATEGORY_TEAM_CHANGE";
  data: Iap_category_freedata;
}
export interface Iap_category_transporter_energyEntry {
  templateId: "IAP_CATEGORY_TRANSPORTER_ENERGY";
  data: Iap_category_flair_bundledata;
}
export interface Iap_category_upgradesEntry {
  templateId: "IAP_CATEGORY_UPGRADES";
  data: Iap_category_freedata;
}

export interface CommerceCategoriesMasterfileByTemplateId {
  "IAP_CATEGORY_AVATAR": Iap_category_avatarEntry;
  "IAP_CATEGORY_BUNDLE": Iap_category_bundleEntry;
  "IAP_CATEGORY_FLAIR_BUNDLE": Iap_category_flair_bundleEntry;
  "IAP_CATEGORY_FREE": Iap_category_freeEntry;
  "IAP_CATEGORY_GLOBAL_EVENT_TICKET": Iap_category_global_event_ticketEntry;
  "IAP_CATEGORY_ITEMS": Iap_category_itemsEntry;
  "IAP_CATEGORY_NONE": Iap_category_noneEntry;
  "IAP_CATEGORY_POKECOINS": Iap_category_pokecoinsEntry;
  "IAP_CATEGORY_REWARDED_SPEND": Iap_category_rewarded_spendEntry;
  "IAP_CATEGORY_STICKER": Iap_category_stickerEntry;
  "IAP_CATEGORY_TEAM_CHANGE": Iap_category_team_changeEntry;
  "IAP_CATEGORY_TRANSPORTER_ENERGY": Iap_category_transporter_energyEntry;
  "IAP_CATEGORY_UPGRADES": Iap_category_upgradesEntry;
}

export type CommerceCategoriesMasterfileEntry = Iap_category_avatarEntry | Iap_category_bundleEntry | Iap_category_flair_bundleEntry | Iap_category_freeEntry | Iap_category_global_event_ticketEntry | Iap_category_itemsEntry | Iap_category_noneEntry | Iap_category_pokecoinsEntry | Iap_category_rewarded_spendEntry | Iap_category_stickerEntry | Iap_category_team_changeEntry | Iap_category_transporter_energyEntry | Iap_category_upgradesEntry;
